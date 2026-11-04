/* Demo session and transport. No SMS, external messages, or real payments. */
(function (root) {
  'use strict';
  const suffix = root.SPA_TEST_MODE === true ? '-test' : '';
  const SESSION = 'sultan-saba-07-session-v2' + suffix, LANGUAGE = 'sultan-saba-07-language' + suffix;
  const blank = () => ({customerId:null,draft:null,auth:null,ui:{},pending:null});
  let session, language, booting, epoch = 0;
  const copy = value => JSON.parse(JSON.stringify(value));
  const uid = prefix => `${prefix}-${Date.now()}-${root.crypto && root.crypto.randomUUID ? root.crypto.randomUUID() : Math.random().toString(36).slice(2)}`;
  const result = (status,code,extra={}) => ({status,code,...extra});
  function getSession() {
    if (!session) {
      try { session = {...blank(),...JSON.parse(root.sessionStorage.getItem(SESSION) || '{}')}; }
      catch (_) { session = blank(); }
    }
    return copy(session);
  }
  function setSession(patch) {
    const next = {...getSession(),...copy(patch)};
    root.sessionStorage.setItem(SESSION,JSON.stringify(next));
    if (session?.customerId !== next.customerId || session?.auth?.operationId !== next.auth?.operationId) epoch++;
    session = next;
    return getSession();
  }
  function getLanguage() {
    if (!language) { try { language = root.localStorage.getItem(LANGUAGE); } catch (_) {} }
    return ['tr','az','ru','en'].includes(language) ? language : 'az';
  }
  function setLanguage(value) {
    language = ['tr','az','ru','en'].includes(value) ? value : 'az';
    try { root.localStorage.setItem(LANGUAGE,language); } catch (_) {}
    return language;
  }
  function convertDraft(d) {
    if (!d || d.items) return d;
    return {items:[{serviceId:d.serviceId,variantId:d.variantId,classId:d.classId,date:d.date,time:d.time,specialistId:d.specialistId || 'any',addOnIds:[],participants:d.kind==='class'?[{type:'self'}]:undefined,payment:{kind:d.entitlementId?'entitlement':'venue',id:d.entitlementId || undefined}}],visitId:d.visitId || undefined};
  }
  async function init(options = {}) {
    if (!booting) booting = root.SpaStore.init().then(async boot => {
      if (options.restoreSession !== false && boot.legacySession && !root.sessionStorage.getItem(SESSION)) {
        const old = boot.legacySession;
        setSession({customerId:old.customerId || null,draft:convertDraft(old.draft),ui:{onboarded:!!old.ui?.onboarded},pending:old.ui?.uncertain ? {...old.ui.uncertain,legacy:true,customerId:old.customerId} : null});
        await root.SpaStore.markSessionRestored();
      }
      if (options.restoreSession !== false && getSession().customerId) await recoverPending();
      return boot.state;
    }).catch(error => { booting = null; throw error; });
    return booting;
  }
  const read = () => root.SpaStore.read();
  const readCustomer = async () => root.SpaModel.customerView(await read(),getSession().customerId);
  const customerQuote = async draft => root.SpaModel.quote(await read(),getSession().customerId,draft);
  const customerFacilityQuote = async draft => root.SpaModel.facilityQuote(await read(),getSession().customerId,draft);
  async function recoverPending() {
    const owner = getSession().customerId, ticket = epoch;
    if (!owner) return;
    const pending = await root.SpaStore.unresolved(owner);
    if (epoch !== ticket || getSession().customerId !== owner) return;
    session={...getSession(),pendingCount:pending.length};
    if (!getSession().pending && pending[0]) {
      const item=pending[0], patch={pending:{...item.envelope,id:item.envelope.id,operationId:item.envelope.id,retryAllowed:!item.needsCheck&&item.phase==='before'}};
      try {setSession(patch);} catch (_) {session={...getSession(),...patch};}
    }
  }
  async function dispatch(actor, command, args, operationId, customerId) {
    const ticket = epoch;
    const id = operationId || uid(command), envelope = {id,actor,customerId:customerId || null,command,args:copy(args || {})};
    // Deliberately outside the IndexedDB transaction, including fault simulations.
    await new Promise(resolve => setTimeout(resolve,40));
    let answer;
    try { answer = await root.SpaStore.dispatch(envelope); }
    catch (error) {
      console.error('Sultan Saba local transaction failed:', error.message);
      return result('invalid','storage_error',{operationId:id});
    }
    // A committed business transaction must never turn into a false failure
    // because the separate tab session cannot be persisted.
    if (actor === 'customer' && (epoch !== ticket || (command !== 'ensureCustomer' && getSession().customerId !== envelope.customerId))) return {...answer,sessionChanged:true};
    if (actor === 'customer') {
      let patch = null;
      if (answer.status === 'unknown') patch = {pending:{id,command,args:envelope.args,customerId:envelope.customerId}};
      else if (getSession().pending?.id === id) patch = {pending:null};
      if (patch) {
        try { setSession(patch); }
        catch (_) {
          session = {...getSession(),...patch};
          answer = {...answer,sessionWarning:'session_storage_unavailable'};
        }
      }
    }
    if (actor === 'customer' && answer.status !== 'unknown' && !getSession().pending && getSession().customerId === envelope.customerId) {try{await recoverPending();}catch(_){answer={...answer,recoveryWarning:true};}}
    return answer;
  }

  const run = (command,args={},id,customerId) => dispatch('customer',command,args,id,customerId === undefined ? getSession().customerId : customerId);
  const qa = (command,args={},id,customerId) => dispatch('qa',command,args,id,customerId === undefined ? null : customerId);
  async function checkOperation(id) {
    const current = getSession(), ticket = epoch;
    if (!current.customerId) return result('invalid','login_required');
    const pending = current.pending;
    if (pending && pending.customerId && pending.customerId !== current.customerId) return result('invalid','not_found');
    try {
      const answer = await root.SpaStore.checkOperation(current.customerId,id || pending?.id);
      if (ticket !== epoch || getSession().customerId !== current.customerId) return result('invalid','session_changed');
      if (answer.retryAllowed) setSession({pending:{...pending,...answer.envelope,id:id || pending?.id,retryAllowed:true}});
      else if (answer.status !== 'unknown') {setSession({pending:null});await recoverPending();}
      return {...answer,remainingOperations:getSession().pendingCount||0};
    } catch (_) { return result('unknown','operation_unknown',{operationId:id}); }
  }
  function normalizePhone(phone) {
    const digits = String(phone || '').replace(/\D/g,'');
    return /^994\d{9}$/.test(digits) ? '+' + digits : null;
  }
  async function sendCode(phone,purpose='login') {
    const normalized = normalizePhone(phone), current = getSession(), now = Date.now();
    if (!normalized) return result('invalid','phone_invalid');
    if (purpose === 'profile' && !current.customerId) return result('invalid','login_required');
    if (current.auth?.sentAt && now-current.auth.sentAt < 30000) return result('invalid','otp_throttled');
    setSession({auth:{phone:normalized,purpose,customerId:current.customerId,code:'123456',sentAt:now,expiresAt:now+180000,attempts:0,operationId:uid('auth')}});
    return result('success','otp_sent');
  }
  async function verifyCode(code) {
    const current = getSession(), auth = current.auth;
    if (!auth) return result('invalid','otp_missing');
    if (Date.now() >= auth.expiresAt) return result('invalid','otp_expired');
    if (auth.attempts >= 5) return result('invalid','otp_locked');
    if (String(code).trim() !== auth.code) { setSession({auth:{...auth,attempts:auth.attempts+1}}); return result('invalid','otp_wrong'); }
    if (auth.purpose === 'profile') {
      if (!current.customerId || current.customerId !== auth.customerId) return result('invalid','session_changed');
      const state = await read(), customer = state.customers.find(x=>x.id===current.customerId);
      if (getSession().auth?.operationId !== auth.operationId || getSession().customerId !== current.customerId) return result('invalid','session_changed');
      const answer = await run('saveProfile',{name:customer.name,email:customer.email,phone:auth.phone,phoneVerified:true},auth.operationId);
      if (getSession().auth?.operationId !== auth.operationId || getSession().customerId !== current.customerId) return result('invalid','session_changed');
      if (answer.status === 'success') setSession({auth:null});
      return answer;
    }
    const answer = await run('ensureCustomer',{phone:auth.phone},auth.operationId,null);
    if (getSession().auth?.operationId !== auth.operationId || getSession().customerId !== current.customerId) return result('invalid','session_changed');
    if (answer.status === 'success') {
      const id = answer.data?.customerId || answer.target?.id;
      if (!id) return result('invalid','account_invalid');
      const changed = current.customerId && current.customerId !== id;
      setSession({customerId:id,auth:null,...(changed?{draft:null,pending:null,ui:{}}:{})});
      await recoverPending();
      const state = await read(), customer = state.customers.find(x=>x.id===id);
      return {...answer,customerId:id,needsName:!customer?.name || customer.name === 'Yeni Misafir' || customer.name === 'New guest'};
    }
    return answer;
  }
  function logout() { epoch++; try {setSession(blank());} catch (_) {try{root.sessionStorage.removeItem(SESSION);}catch(_){}session=blank();return result('invalid','session_storage_unavailable');} return result('success','logged_out'); }
  async function reset(scenario='guest') { const state = await root.SpaStore.reset(scenario); setSession(blank()); booting = Promise.resolve(state); return state; }
  const api = {init,read,readCustomer,quote:customerQuote,facilityQuote:customerFacilityQuote,run,qa,getSession,setSession,getLanguage,setLanguage,sendCode,verifyCode,logout,checkOperation,reset,uid,subscribe:fn=>root.SpaStore.subscribe(fn),setFault:value=>root.SpaStore.setFault(value),exportRecovery:()=>root.SpaStore.exportRecovery()};
  root.SpaAPI = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
