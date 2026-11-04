/* Introduction preferences belong to this browser, never to business records. */
(function(root){
'use strict';
const key=test=>`sultan-saba-introduction-v1${test?'-test':''}`;
function read(storage,test=false){try{return storage?.getItem(key(test))==='completed';}catch{return false;}}
function complete(storage,test=false){try{storage?.setItem(key(test),'completed');return true;}catch{return false;}}
function initialRoute({hash='',session={},completed=false}={}){
 if(session.pending)return 'connection';
 const explicit=hash.replace(/^#/,'');
 if(explicit)return explicit;
 if(session.draft?.items?.length)return 'basket';
 if(session.ui?.selection?.serviceId)return 'schedule';
 return session.customerId||completed?'home':'welcome';
}
const api={key,read,complete,initialRoute};
if(typeof module==='object'&&module.exports)module.exports=api;
else root.SpaEntry=api;
})(typeof globalThis==='object'?globalThis:this);
