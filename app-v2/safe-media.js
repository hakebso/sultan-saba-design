/* Semantic media allowlist. No catalogue URLs and no placeholder output. */
(function(root){'use strict';
const registry=typeof module!=='undefined'&&module.exports?require('./media-registry.js'):root.SpaMediaRegistry;
const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const records=new Map((registry?.assets||[]).map(x=>[x.id,x]));
const roleSubjects=JSON.parse(JSON.stringify(registry?.roleSubjects||{}));
function resolve(role,subjectId='default'){
 const subjects=Object.hasOwn(roleSubjects,role)?roleSubjects[role]:null;
 const id=subjects&&Object.hasOwn(subjects,subjectId)?subjects[subjectId]:null;
 const asset=id&&records.get(id);return asset?JSON.parse(JSON.stringify(asset)):null;
}
function src(role,subjectId='default'){return resolve(role,subjectId)?.path||'';}
function image(role,subjectId='default',options={}){
 const a=resolve(role,subjectId);if(!a)return '';
 const style=`object-fit:${a.kind==='brand-mark'?'contain':'cover'};object-position:${a.focus.x*100}% ${a.focus.y*100}%`;
 return `<img src="${escape(a.path)}" alt="${escape(options.alt||'')}" data-media-asset="${escape(a.id)}" data-media-role="${escape(role)}"${options.className?` class="${escape(options.className)}"`:''}${options.loading==='lazy'?' loading="lazy"':''} style="${style}">`;
}
function frame(role,subjectId='default',options={}){
 const img=image(role,subjectId,options);return img?`<div data-media-slot="image" class="${escape(options.frameClass||'revision-hero')}">${img}</div>`:'';
}
function removeFailedImage(img){
 if(!img||String(img.tagName).toLowerCase()!=='img'||!img.getAttribute?.('data-media-asset'))return false;
 const parent=img.parentElement;
 if(img.getAttribute('data-media-role')==='brand'){img.remove();if(parent&&['A','BUTTON'].includes(parent.tagName)&&!parent.children?.length&&!parent.textContent?.trim()&&parent.getAttribute?.('aria-label')){parent.textContent=parent.getAttribute('aria-label');parent.classList?.add('safe-media-label-action');}return true;}
 // Only explicitly owned, image-only slots can disappear as a whole.
 if(parent?.getAttribute?.('data-media-slot')==='image'&&parent.children?.length===1)parent.remove();
 else{img.remove();if(parent){parent.classList?.add('safe-media-photofree');parent.style?.removeProperty?.('background-image');}}
 return true;
}
const installed=new WeakSet();
function install(doc=root.document){
 if(!doc?.addEventListener||installed.has(doc))return false;
 doc.addEventListener('error',event=>removeFailedImage(event.target),true);installed.add(doc);return true;
}
const backgroundRequests=new WeakMap();
function applyBackground(element,role,subjectId='default',ImageCtor=root.Image){
 const a=resolve(role,subjectId),request={};backgroundRequests.set(element,request);element.style.removeProperty('background-image');
 if(!a||!ImageCtor){element.classList?.add('safe-media-photofree');return Promise.resolve(false);}
 return new Promise(done=>{const probe=new ImageCtor();probe.onload=()=>{if(backgroundRequests.get(element)!==request){done(false);return;}element.style.backgroundImage=`url("${a.path}")`;element.style.backgroundPosition=`${a.focus.x*100}% ${a.focus.y*100}%`;done(true);};probe.onerror=()=>{if(backgroundRequests.get(element)!==request){done(false);return;}element.style.removeProperty('background-image');element.classList?.add('safe-media-photofree');done(false);};probe.src=a.path;});
}
const api={resolve,src,image,frame,removeFailedImage,install,applyBackground};
if(typeof module!=='undefined'&&module.exports)module.exports=api;root.SpaMedia=api;install();
})(typeof globalThis!=='undefined'?globalThis:this);
