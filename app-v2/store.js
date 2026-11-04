/* Same-origin demo repository. IndexedDB is the only business-data writer. */
(function (root) {
  'use strict';
  const TEST = root.SPA_TEST_MODE === true;
  const DB = 'sultan-saba-prototype-07-v2' + (TEST ? '-test' : ''), LEGACY = 'sultan-saba-prototype-07-v1' + (TEST ? '-test' : '');
  let opening, channel;
  const listeners = new Set();
  const clone = value => JSON.parse(JSON.stringify(value));
  const canonical = value => JSON.stringify(value, function (key, item) {
    if (item && typeof item === 'object' && !Array.isArray(item)) return Object.keys(item).sort().reduce((out, k) => { out[k] = item[k]; return out; }, {});
    return item;
  });
  const model = () => root.SpaModel;
  const keyFor = e => model().operationKey ? model().operationKey(e) : `${e.actor}:${e.customerId || 'guest'}:${e.id}`;
  const unknown = id => ({status:'unknown',code:'operation_unknown',operationId:id,needsCheck:true});
  const failure = code => ({status:'invalid',code});
  function announce(revision) {
    for (const fn of listeners) { try { fn(revision); } catch (_) {} }
    if (channel) channel.postMessage({revision});
  }
  function open() {
    if (opening) return opening;
    opening = new Promise((resolve, reject) => {
      if (!root.indexedDB) { reject(new Error('storage_unavailable')); return; }
      const request = root.indexedDB.open(DB, 1);
      request.onupgradeneeded = () => {
        for (const name of ['business','transport','meta']) if (!request.result.objectStoreNames.contains(name)) request.result.createObjectStore(name);
      };
      request.onerror = () => reject(request.error || new Error('storage_unavailable'));
      request.onblocked = () => reject(new Error('storage_blocked'));
      request.onsuccess = () => {
        const db = request.result;
        db.onversionchange = () => { db.close(); opening = null; };
        resolve(db);
      };
    }).catch(error => { opening = null; throw error; });
    return opening;
  }
  async function read() {
    const db = await open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction('business','readonly');
      const request = tx.objectStore('business').get('root');
      request.onsuccess = () => resolve(request.result ? clone(request.result) : null);
      request.onerror = () => reject(request.error);
    });
  }
  async function init() {
    const existing = await read();
    if (existing) {
      if (existing.schemaVersion !== 2) throw new Error('unsupported_schema');
      const db=await open();const upgraded=await new Promise((resolve,reject)=>{const tx=db.transaction(['business','meta'],'readwrite');let answer,migrationError;const req=tx.objectStore('business').get('root');req.onsuccess=()=>{const current=req.result;const needs=current.modelVersion!==3||current.catalogVersion!==root.SpaCatalogue?.version;if(needs)tx.objectStore('meta').put(clone(current),'business-backup:'+current.revision+':'+current.catalogVersion);try{const state=model().migrate(current),changed=canonical(state)!==canonical(current);if(changed){tx.objectStore('business').put(state,'root');tx.objectStore('meta').put({at:new Date().toISOString(),from:current.catalogVersion,to:state.catalogVersion,modelVersion:state.modelVersion},'revision-migration');}answer={state,migrated:changed};}catch(error){migrationError=error;tx.objectStore('meta').put({at:new Date().toISOString(),message:error.message},'revision-migration-error');}};tx.oncomplete=()=>migrationError?reject(migrationError):resolve(answer);tx.onerror=()=>reject(tx.error||new Error('migration_storage_failed'));tx.onabort=()=>reject(tx.error||new Error('migration_storage_failed'));});return {...upgraded,legacySession:await legacySession()};
    }
    let raw = null, legacy = null;
    try { raw = root.localStorage.getItem(LEGACY); } catch (_) { throw new Error('legacy_storage_unavailable'); }
    if (raw) {
      try { legacy = JSON.parse(raw); } catch (_) { throw new Error('legacy_corrupt'); }
      if (!legacy || legacy.version !== 1 || !Array.isArray(legacy.customers)) throw new Error('legacy_invalid');
    }
    const state = legacy ? model().migrate(legacy) : model().createState('guest');
    if (!state || state.schemaVersion !== 2) throw new Error('migration_failed');
    const check = model().validate(state);
    if (!check.valid) throw new Error('migration_invalid: ' + check.errors.join(', '));
    const db = await open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(['business','meta'],'readwrite');
      let boot;
      const req = tx.objectStore('business').get('root');
      req.onsuccess = () => {
        if (req.result) { boot = {state:req.result,migrated:false}; return; }
        tx.objectStore('business').put(state,'root');
        if (raw) {tx.objectStore('meta').put(raw,'legacy-v1-original');tx.objectStore('meta').put({customerId:legacy.customerId,draft:legacy.draft,ui:legacy.ui||{}},'legacy-session');}
        tx.objectStore('meta').put({at:new Date().toISOString(),from:legacy ? 1 : null,to:2},'migration');
        boot = {state,migrated:!!legacy,legacySession:legacy ? {customerId:legacy.customerId,draft:legacy.draft,auth:legacy.auth,ui:legacy.ui || {}} : null};
      };
      tx.oncomplete = () => { announce(state.revision); resolve(boot); };
      tx.onerror = () => reject(tx.error || new Error('storage_write_failed'));
      tx.onabort = () => reject(tx.error || new Error('storage_write_failed'));
    });
  }
  async function dispatch(envelope) {
    const db = await open(), signature = canonical({actor:envelope.actor,customerId:envelope.customerId,command:envelope.command,args:envelope.args});
    return new Promise((resolve, reject) => {
      const tx = db.transaction(['business','transport','meta'],'readwrite');
      let result, revision, caught;
      const bs = tx.objectStore('business'), journal = tx.objectStore('transport'), meta = tx.objectStore('meta');
      const stateRequest = bs.get('root');
      stateRequest.onsuccess = () => {
        const state = stateRequest.result;
        if (!state) { caught = new Error('not_initialized'); tx.abort(); return; }
        const key = keyFor(envelope), oldRequest = journal.get(key);
        oldRequest.onsuccess = () => {
          const old = oldRequest.result;
          if (old && old.signature !== signature) { result = {status:'conflict',code:'operation_conflict'}; return; }
          if (old && old.needsCheck) { result = unknown(envelope.id); return; }
          if (old && old.result) { result = old.result; return; }
          const faultRequest = meta.get('nextFault');
          faultRequest.onsuccess = () => {
            const transactional = envelope.actor === 'customer' && envelope.command !== 'ensureCustomer';
            const fault = transactional && !old ? faultRequest.result : 'none';
            if (transactional && !old) meta.put('none','nextFault');
            const transport = {envelope:clone(envelope),signature,needsCheck:false,phase:'resolved',result:null,createdAt:new Date().toISOString()};
            if (fault === 'offline-before') {
              transport.needsCheck = true; transport.phase = 'before'; journal.put(transport,key); result = unknown(envelope.id); return;
            }
            try {
              const output = fault === 'slot-lost' && envelope.command === 'book'
                ? {state,result:{status:'conflict',code:'slot_lost'}} : model().execute(state,envelope);
              if (!output || !output.state || !output.result) throw new Error('invalid_model_result');
              const check = model().validate(output.state);
              if (!check.valid) throw new Error('invariant_failed: ' + check.errors.join(', '));
              output.state.revision = (state.revision || 0) + 1;
              revision = output.state.revision;
              result = {...output.result,operationId:envelope.id};
              transport.result = clone(result);
              if (fault === 'timeout-after') { transport.needsCheck = true; transport.phase = 'after'; result = unknown(envelope.id); }
              bs.put(output.state,'root'); journal.put(transport,key);
            } catch (error) { caught = error; tx.abort(); }
          };
        };
      };
      tx.oncomplete = () => { if (revision !== undefined) announce(revision); resolve(clone(result || failure('operation_failed'))); };
      tx.onerror = () => reject(caught || tx.error || new Error('storage_write_failed'));
      tx.onabort = () => reject(caught || tx.error || new Error('storage_write_failed'));
    });
  }
  async function checkOperation(customerId, id, actor = 'customer') {
    const db = await open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(['transport','business'],'readwrite');
      const store = tx.objectStore('transport'), key = keyFor({actor,customerId,id});
      let result;
      const req = store.get(key);
      req.onsuccess = () => {
        const record = req.result;
        if (record) {
          record.needsCheck = false; store.put(record,key);
          result = record.phase === 'before' ? {status:'invalid',code:'operation_not_applied',retryAllowed:true,operationId:id,envelope:record.envelope} : {...record.result,checked:true};
        } else {
          const legacy = tx.objectStore('business').get('root');
          legacy.onsuccess = () => {
            const s = legacy.result, old = s && s.operations && (s.operations[key] || s.operations[`${customerId}:${id}`]);
            const recovery = s?.legacyRecovery?.find(x=>x.id===id && x.customerId===customerId);
            if (old?.result) result = {...old.result,checked:true,operationId:id};
            else if (recovery?.phase === 'before') result = {status:'invalid',code:'legacy_not_applied',checked:true,requiresReview:true,operationId:id,target:{type:'review'}};
            else if (old || recovery) result = unknown(id);
            else result = {status:'invalid',code:'operation_not_found',operationId:id};
            if (old && result.status !== 'unknown') {
              old.requiresCheck=false;old.checkedAt=s.now;
              if(recovery){recovery.needsCheck=false;recovery.checkedAt=s.now;}
              s.revision=(s.revision||0)+1;tx.objectStore('business').put(s,'root');
            }
          };
        }
      };
      tx.oncomplete = () => resolve(result);
      tx.onerror = () => reject(tx.error);
      tx.onabort = () => reject(tx.error || new Error('storage_aborted')); 
    });
  }
  async function setFault(value) {
    if (!['none','offline-before','timeout-after','slot-lost'].includes(value)) throw new Error('invalid_fault');
    const db = await open();
    return new Promise((resolve,reject) => {
      const tx = db.transaction('meta','readwrite'); tx.objectStore('meta').put(value,'nextFault');
      tx.oncomplete = () => resolve({status:'success',code:'saved'}); tx.onerror = () => reject(tx.error); tx.onabort = () => reject(tx.error || new Error('storage_aborted'));
    });
  }
  async function reset(scenario) {
    const state = model().createState(scenario), db = await open();
    return new Promise((resolve,reject) => {
      const tx = db.transaction(['business','transport','meta'],'readwrite');
      tx.objectStore('business').put(state,'root'); tx.objectStore('transport').clear(); tx.objectStore('meta').put('none','nextFault');
      tx.oncomplete = () => { announce(state.revision); resolve(state); }; tx.onerror = () => reject(tx.error); tx.onabort = () => reject(tx.error || new Error('storage_aborted'));
    });
  }
  async function legacySession() {
    const db=await open();
    return new Promise((resolve,reject)=>{
      const tx=db.transaction('meta','readonly'),meta=tx.objectStore('meta');
      let value,restored;
      meta.get('legacy-session').onsuccess=e=>{value=e.target.result;};
      meta.get('session-restored').onsuccess=e=>{restored=e.target.result;};
      tx.oncomplete=()=>resolve(restored?null:value||null);
      tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('storage_aborted'));
    });
  }
  async function markSessionRestored(){
    const db=await open();return new Promise((resolve,reject)=>{
      const tx=db.transaction('meta','readwrite');tx.objectStore('meta').put(true,'session-restored');
      tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('storage_aborted'));
    });
  }
  async function unresolved(customerId){
    const db=await open();return new Promise((resolve,reject)=>{
      const tx=db.transaction(['transport','business'],'readonly');let records=[],state;
      tx.objectStore('transport').getAll().onsuccess=e=>{records=e.target.result;};
      tx.objectStore('business').get('root').onsuccess=e=>{state=e.target.result;};
      tx.oncomplete=()=>{
        const pending=records.filter(r=>r.envelope.actor==='customer'&&r.envelope.customerId===customerId&&(r.needsCheck||r.phase==='before'&&!r.result));
        for(const recovery of state?.legacyRecovery||[])if(recovery.customerId===customerId&&recovery.needsCheck){pending.push({phase:recovery.phase,needsCheck:true,envelope:{id:recovery.id,customerId,command:'legacy',args:{}}});}
        resolve(pending.sort((a,b)=>(a.createdAt||'').localeCompare(b.createdAt||'')));
      };tx.onerror=()=>reject(tx.error);tx.onabort=()=>reject(tx.error||new Error('storage_aborted'));
    });
  }
  async function exportRecovery() {
    let raw = null; try { raw = root.localStorage.getItem(LEGACY); } catch (_) {}
    const db=await open();const backups=await new Promise((resolve,reject)=>{const tx=db.transaction('meta','readonly'),meta=tx.objectStore('meta');let keys=[],values=[];meta.getAllKeys().onsuccess=e=>{keys=e.target.result;};meta.getAll().onsuccess=e=>{values=e.target.result;};tx.oncomplete=()=>resolve(keys.map((key,i)=>({key,value:values[i]})).filter(x=>String(x.key).startsWith('business-backup:')));tx.onerror=()=>reject(tx.error);});return {format:'sultan-saba-local-recovery',exportedAt:new Date().toISOString(),legacyRaw:raw,business:await read().catch(()=>null),migrationBackups:backups};
  }
  try {
    if (root.BroadcastChannel) {
      channel = new root.BroadcastChannel(DB);
      channel.onmessage = event => { for (const fn of listeners) { try { fn(event.data.revision); } catch (_) {} } };
    }
  } catch (_) {}
  const api = {init,read,dispatch,checkOperation,setFault,reset,exportRecovery,legacySession,markSessionRestored,unresolved,subscribe(fn){listeners.add(fn);return()=>listeners.delete(fn);},databaseName:DB,legacyKey:LEGACY};
  root.SpaStore = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
