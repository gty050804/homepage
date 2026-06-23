(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function zd(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const dn={},Cs=[],mr=()=>{},hg=()=>!1,Xu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Gd=n=>n.startsWith("onUpdate:"),Zn=Object.assign,Wd=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},ab=Object.prototype.hasOwnProperty,nn=(n,e)=>ab.call(n,e),Le=Array.isArray,Ss=n=>Zu(n)==="[object Map]",pg=n=>Zu(n)==="[object Set]",qe=n=>typeof n=="function",Sn=n=>typeof n=="string",Ti=n=>typeof n=="symbol",mn=n=>n!==null&&typeof n=="object",mg=n=>(mn(n)||qe(n))&&qe(n.then)&&qe(n.catch),gg=Object.prototype.toString,Zu=n=>gg.call(n),ub=n=>Zu(n).slice(8,-1),_g=n=>Zu(n)==="[object Object]",Kd=n=>Sn(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Co=zd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),el=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},lb=/-\w/g,Ut=el(n=>n.replace(lb,e=>e.slice(1).toUpperCase())),cb=/\B([A-Z])/g,us=el(n=>n.replace(cb,"-$1").toLowerCase()),nl=el(n=>n.charAt(0).toUpperCase()+n.slice(1)),Wl=el(n=>n?`on${nl(n)}`:""),li=(n,e)=>!Object.is(n,e),su=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},yg=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Qd=n=>{const e=parseFloat(n);return isNaN(e)?n:e},db=n=>{const e=Sn(n)?Number(n):NaN;return isNaN(e)?n:e};let zh;const tl=()=>zh||(zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function da(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],i=Sn(r)?mb(r):da(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(Sn(n)||mn(n))return n}const fb=/;(?![^(]*\))/g,hb=/:([^]+)/,pb=/\/\*[^]*?\*\//g;function mb(n){const e={};return n.replace(pb,"").split(fb).forEach(t=>{if(t){const r=t.split(hb);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function jt(n){let e="";if(Sn(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const r=jt(n[t]);r&&(e+=r+" ")}else if(mn(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const gb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_b=zd(gb);function bg(n){return!!n||n===""}const vg=n=>!!(n&&n.__v_isRef===!0),He=n=>Sn(n)?n:n==null?"":Le(n)||mn(n)&&(n.toString===gg||!qe(n.toString))?vg(n)?He(n.value):JSON.stringify(n,xg,2):String(n),xg=(n,e)=>vg(e)?xg(n,e.value):Ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,i],s)=>(t[Kl(r,s)+" =>"]=i,t),{})}:pg(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Kl(t))}:Ti(e)?Kl(e):mn(e)&&!Le(e)&&!_g(e)?String(e):e,Kl=(n,e="")=>{var t;return Ti(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let vt;class yb{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=vt;try{return vt=this,e()}finally{vt=t}}}on(){++this._on===1&&(this.prevScope=vt,vt=this)}off(){this._on>0&&--this._on===0&&(vt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function bb(){return vt}let fn;const Ql=new WeakSet;class wg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,vt&&vt.active&&vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ql.has(this)&&(Ql.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ag(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Gh(this),Tg(this);const e=fn,t=Kt;fn=this,Kt=!0;try{return this.fn()}finally{kg(this),fn=e,Kt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xd(e);this.deps=this.depsTail=void 0,Gh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ql.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){td(this)&&this.run()}get dirty(){return td(this)}}let Eg=0,So,Ro;function Ag(n,e=!1){if(n.flags|=8,e){n.next=Ro,Ro=n;return}n.next=So,So=n}function Yd(){Eg++}function Jd(){if(--Eg>0)return;if(Ro){let e=Ro;for(Ro=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;So;){let e=So;for(So=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Tg(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function kg(n){let e,t=n.depsTail,r=t;for(;r;){const i=r.prevDep;r.version===-1?(r===t&&(t=i),Xd(r),vb(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=i}n.deps=e,n.depsTail=t}function td(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ig(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ig(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Uo)||(n.globalVersion=Uo,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!td(n))))return;n.flags|=2;const e=n.dep,t=fn,r=Kt;fn=n,Kt=!0;try{Tg(n);const i=n.fn(n._value);(e.version===0||li(i,n._value))&&(n.flags|=128,n._value=i,e.version++)}catch(i){throw e.version++,i}finally{fn=t,Kt=r,kg(n),n.flags&=-3}}function Xd(n,e=!1){const{dep:t,prevSub:r,nextSub:i}=n;if(r&&(r.nextSub=i,n.prevSub=void 0),i&&(i.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Xd(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function vb(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Kt=!0;const Cg=[];function Mr(){Cg.push(Kt),Kt=!1}function Vr(){const n=Cg.pop();Kt=n===void 0?!0:n}function Gh(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=fn;fn=void 0;try{e()}finally{fn=t}}}let Uo=0;class xb{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Zd{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!fn||!Kt||fn===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==fn)t=this.activeLink=new xb(fn,this),fn.deps?(t.prevDep=fn.depsTail,fn.depsTail.nextDep=t,fn.depsTail=t):fn.deps=fn.depsTail=t,Sg(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=fn.depsTail,t.nextDep=void 0,fn.depsTail.nextDep=t,fn.depsTail=t,fn.deps===t&&(fn.deps=r)}return t}trigger(e){this.version++,Uo++,this.notify(e)}notify(e){Yd();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Jd()}}}function Sg(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Sg(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const rd=new WeakMap,Ki=Symbol(""),id=Symbol(""),$o=Symbol("");function it(n,e,t){if(Kt&&fn){let r=rd.get(n);r||rd.set(n,r=new Map);let i=r.get(t);i||(r.set(t,i=new Zd),i.map=r,i.key=t),i.track()}}function Nr(n,e,t,r,i,s){const o=rd.get(n);if(!o){Uo++;return}const a=l=>{l&&l.trigger()};if(Yd(),e==="clear")o.forEach(a);else{const l=Le(n),c=l&&Kd(t);if(l&&t==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===$o||!Ti(g)&&g>=d)&&a(p)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get($o)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Ki)),Ss(n)&&a(o.get(id)));break;case"delete":l||(a(o.get(Ki)),Ss(n)&&a(o.get(id)));break;case"set":Ss(n)&&a(o.get(Ki));break}}Jd()}function bs(n){const e=en(n);return e===n?e:(it(e,"iterate",$o),qt(n)?e:e.map(Zt))}function rl(n){return it(n=en(n),"iterate",$o),n}function Xr(n,e){return jr(n)?Qi(n)?Bs(Zt(e)):Bs(e):Zt(e)}const wb={__proto__:null,[Symbol.iterator](){return Yl(this,Symbol.iterator,n=>Xr(this,n))},concat(...n){return bs(this).concat(...n.map(e=>Le(e)?bs(e):e))},entries(){return Yl(this,"entries",n=>(n[1]=Xr(this,n[1]),n))},every(n,e){return Cr(this,"every",n,e,void 0,arguments)},filter(n,e){return Cr(this,"filter",n,e,t=>t.map(r=>Xr(this,r)),arguments)},find(n,e){return Cr(this,"find",n,e,t=>Xr(this,t),arguments)},findIndex(n,e){return Cr(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Cr(this,"findLast",n,e,t=>Xr(this,t),arguments)},findLastIndex(n,e){return Cr(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Cr(this,"forEach",n,e,void 0,arguments)},includes(...n){return Jl(this,"includes",n)},indexOf(...n){return Jl(this,"indexOf",n)},join(n){return bs(this).join(n)},lastIndexOf(...n){return Jl(this,"lastIndexOf",n)},map(n,e){return Cr(this,"map",n,e,void 0,arguments)},pop(){return bo(this,"pop")},push(...n){return bo(this,"push",n)},reduce(n,...e){return Wh(this,"reduce",n,e)},reduceRight(n,...e){return Wh(this,"reduceRight",n,e)},shift(){return bo(this,"shift")},some(n,e){return Cr(this,"some",n,e,void 0,arguments)},splice(...n){return bo(this,"splice",n)},toReversed(){return bs(this).toReversed()},toSorted(n){return bs(this).toSorted(n)},toSpliced(...n){return bs(this).toSpliced(...n)},unshift(...n){return bo(this,"unshift",n)},values(){return Yl(this,"values",n=>Xr(this,n))}};function Yl(n,e,t){const r=rl(n),i=r[e]();return r!==n&&!qt(n)&&(i._next=i.next,i.next=()=>{const s=i._next();return s.done||(s.value=t(s.value)),s}),i}const Eb=Array.prototype;function Cr(n,e,t,r,i,s){const o=rl(n),a=o!==n&&!qt(n),l=o[e];if(l!==Eb[e]){const p=l.apply(n,s);return a?Zt(p):p}let c=t;o!==n&&(a?c=function(p,g){return t.call(this,Xr(n,p),g,n)}:t.length>2&&(c=function(p,g){return t.call(this,p,g,n)}));const d=l.call(o,c,r);return a&&i?i(d):d}function Wh(n,e,t,r){const i=rl(n);let s=t;return i!==n&&(qt(n)?t.length>3&&(s=function(o,a,l){return t.call(this,o,a,l,n)}):s=function(o,a,l){return t.call(this,o,Xr(n,a),l,n)}),i[e](s,...r)}function Jl(n,e,t){const r=en(n);it(r,"iterate",$o);const i=r[e](...t);return(i===-1||i===!1)&&rf(t[0])?(t[0]=en(t[0]),r[e](...t)):i}function bo(n,e,t=[]){Mr(),Yd();const r=en(n)[e].apply(n,t);return Jd(),Vr(),r}const Ab=zd("__proto__,__v_isRef,__isVue"),Rg=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ti));function Tb(n){Ti(n)||(n=String(n));const e=en(this);return it(e,"has",n),e.hasOwnProperty(n)}class Dg{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const i=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!i;if(t==="__v_isReadonly")return i;if(t==="__v_isShallow")return s;if(t==="__v_raw")return r===(i?s?Lb:Lg:s?Og:Pg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Le(e);if(!i){let l;if(o&&(l=wb[t]))return l;if(t==="hasOwnProperty")return Tb}const a=Reflect.get(e,t,ut(e)?e:r);if((Ti(t)?Rg.has(t):Ab(t))||(i||it(e,"get",t),s))return a;if(ut(a)){const l=o&&Kd(t)?a:a.value;return i&&mn(l)?od(l):l}return mn(a)?i?od(a):nf(a):a}}class Ng extends Dg{constructor(e=!1){super(!1,e)}set(e,t,r,i){let s=e[t];const o=Le(e)&&Kd(t);if(!this._isShallow){const c=jr(s);if(!qt(r)&&!jr(r)&&(s=en(s),r=en(r)),!o&&ut(s)&&!ut(r))return c||(s.value=r),!0}const a=o?Number(t)<e.length:nn(e,t),l=Reflect.set(e,t,r,ut(e)?e:i);return e===en(i)&&(a?li(r,s)&&Nr(e,"set",t,r):Nr(e,"add",t,r)),l}deleteProperty(e,t){const r=nn(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&r&&Nr(e,"delete",t,void 0),i}has(e,t){const r=Reflect.has(e,t);return(!Ti(t)||!Rg.has(t))&&it(e,"has",t),r}ownKeys(e){return it(e,"iterate",Le(e)?"length":Ki),Reflect.ownKeys(e)}}class kb extends Dg{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Ib=new Ng,Cb=new kb,Sb=new Ng(!0);const sd=n=>n,za=n=>Reflect.getPrototypeOf(n);function Rb(n,e,t){return function(...r){const i=this.__v_raw,s=en(i),o=Ss(s),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=i[n](...r),d=t?sd:e?Bs:Zt;return!e&&it(s,"iterate",l?id:Ki),{next(){const{value:p,done:g}=c.next();return g?{value:p,done:g}:{value:a?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Ga(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Db(n,e){const t={get(i){const s=this.__v_raw,o=en(s),a=en(i);n||(li(i,a)&&it(o,"get",i),it(o,"get",a));const{has:l}=za(o),c=e?sd:n?Bs:Zt;if(l.call(o,i))return c(s.get(i));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(i)},get size(){const i=this.__v_raw;return!n&&it(en(i),"iterate",Ki),i.size},has(i){const s=this.__v_raw,o=en(s),a=en(i);return n||(li(i,a)&&it(o,"has",i),it(o,"has",a)),i===a?s.has(i):s.has(i)||s.has(a)},forEach(i,s){const o=this,a=o.__v_raw,l=en(a),c=e?sd:n?Bs:Zt;return!n&&it(l,"iterate",Ki),a.forEach((d,p)=>i.call(s,c(d),c(p),o))}};return Zn(t,n?{add:Ga("add"),set:Ga("set"),delete:Ga("delete"),clear:Ga("clear")}:{add(i){!e&&!qt(i)&&!jr(i)&&(i=en(i));const s=en(this);return za(s).has.call(s,i)||(s.add(i),Nr(s,"add",i,i)),this},set(i,s){!e&&!qt(s)&&!jr(s)&&(s=en(s));const o=en(this),{has:a,get:l}=za(o);let c=a.call(o,i);c||(i=en(i),c=a.call(o,i));const d=l.call(o,i);return o.set(i,s),c?li(s,d)&&Nr(o,"set",i,s):Nr(o,"add",i,s),this},delete(i){const s=en(this),{has:o,get:a}=za(s);let l=o.call(s,i);l||(i=en(i),l=o.call(s,i)),a&&a.call(s,i);const c=s.delete(i);return l&&Nr(s,"delete",i,void 0),c},clear(){const i=en(this),s=i.size!==0,o=i.clear();return s&&Nr(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=Rb(i,n,e)}),t}function ef(n,e){const t=Db(n,e);return(r,i,s)=>i==="__v_isReactive"?!n:i==="__v_isReadonly"?n:i==="__v_raw"?r:Reflect.get(nn(t,i)&&i in r?t:r,i,s)}const Nb={get:ef(!1,!1)},Pb={get:ef(!1,!0)},Ob={get:ef(!0,!1)};const Pg=new WeakMap,Og=new WeakMap,Lg=new WeakMap,Lb=new WeakMap;function Fb(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Mb(n){return n.__v_skip||!Object.isExtensible(n)?0:Fb(ub(n))}function nf(n){return jr(n)?n:tf(n,!1,Ib,Nb,Pg)}function Vb(n){return tf(n,!1,Sb,Pb,Og)}function od(n){return tf(n,!0,Cb,Ob,Lg)}function tf(n,e,t,r,i){if(!mn(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=Mb(n);if(s===0)return n;const o=i.get(n);if(o)return o;const a=new Proxy(n,s===2?r:t);return i.set(n,a),a}function Qi(n){return jr(n)?Qi(n.__v_raw):!!(n&&n.__v_isReactive)}function jr(n){return!!(n&&n.__v_isReadonly)}function qt(n){return!!(n&&n.__v_isShallow)}function rf(n){return n?!!n.__v_raw:!1}function en(n){const e=n&&n.__v_raw;return e?en(e):n}function jb(n){return!nn(n,"__v_skip")&&Object.isExtensible(n)&&yg(n,"__v_skip",!0),n}const Zt=n=>mn(n)?nf(n):n,Bs=n=>mn(n)?od(n):n;function ut(n){return n?n.__v_isRef===!0:!1}function tn(n){return Fg(n,!1)}function qb(n){return Fg(n,!0)}function Fg(n,e){return ut(n)?n:new Bb(n,e)}class Bb{constructor(e,t){this.dep=new Zd,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:en(e),this._value=t?e:Zt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||qt(e)||jr(e);e=r?e:en(e),li(e,t)&&(this._rawValue=e,this._value=r?e:Zt(e),this.dep.trigger())}}function Us(n){return ut(n)?n.value:n}const Ub={get:(n,e,t)=>e==="__v_raw"?n:Us(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const i=n[e];return ut(i)&&!ut(t)?(i.value=t,!0):Reflect.set(n,e,t,r)}};function Mg(n){return Qi(n)?n:new Proxy(n,Ub)}class $b{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Zd(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Uo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&fn!==this)return Ag(this,!0),!0}get value(){const e=this.dep.track();return Ig(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Hb(n,e,t=!1){let r,i;return qe(n)?r=n:(r=n.get,i=n.set),new $b(r,i,t)}const Wa={},vu=new WeakMap;let Ui;function zb(n,e=!1,t=Ui){if(t){let r=vu.get(t);r||vu.set(t,r=[]),r.push(n)}}function Gb(n,e,t=dn){const{immediate:r,deep:i,once:s,scheduler:o,augmentJob:a,call:l}=t,c=z=>i?z:qt(z)||i===!1||i===0?Pr(z,1):Pr(z);let d,p,g,b,v=!1,I=!1;if(ut(n)?(p=()=>n.value,v=qt(n)):Qi(n)?(p=()=>c(n),v=!0):Le(n)?(I=!0,v=n.some(z=>Qi(z)||qt(z)),p=()=>n.map(z=>{if(ut(z))return z.value;if(Qi(z))return c(z);if(qe(z))return l?l(z,2):z()})):qe(n)?e?p=l?()=>l(n,2):n:p=()=>{if(g){Mr();try{g()}finally{Vr()}}const z=Ui;Ui=d;try{return l?l(n,3,[b]):n(b)}finally{Ui=z}}:p=mr,e&&i){const z=p,ie=i===!0?1/0:i;p=()=>Pr(z(),ie)}const D=bb(),L=()=>{d.stop(),D&&D.active&&Wd(D.effects,d)};if(s&&e){const z=e;e=(...ie)=>{z(...ie),L()}}let V=I?new Array(n.length).fill(Wa):Wa;const W=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ie=d.run();if(i||v||(I?ie.some((ce,S)=>li(ce,V[S])):li(ie,V))){g&&g();const ce=Ui;Ui=d;try{const S=[ie,V===Wa?void 0:I&&V[0]===Wa?[]:V,b];V=ie,l?l(e,3,S):e(...S)}finally{Ui=ce}}}else d.run()};return a&&a(W),d=new wg(p),d.scheduler=o?()=>o(W,!1):W,b=z=>zb(z,!1,d),g=d.onStop=()=>{const z=vu.get(d);if(z){if(l)l(z,4);else for(const ie of z)ie();vu.delete(d)}},e?r?W(!0):V=d.run():o?o(W.bind(null,!0),!0):d.run(),L.pause=d.pause.bind(d),L.resume=d.resume.bind(d),L.stop=L,L}function Pr(n,e=1/0,t){if(e<=0||!mn(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ut(n))Pr(n.value,e,t);else if(Le(n))for(let r=0;r<n.length;r++)Pr(n[r],e,t);else if(pg(n)||Ss(n))n.forEach(r=>{Pr(r,e,t)});else if(_g(n)){for(const r in n)Pr(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&Pr(n[r],e,t)}return n}function fa(n,e,t,r){try{return r?n(...r):n()}catch(i){il(i,e,t)}}function er(n,e,t,r){if(qe(n)){const i=fa(n,e,t,r);return i&&mg(i)&&i.catch(s=>{il(s,e,t)}),i}if(Le(n)){const i=[];for(let s=0;s<n.length;s++)i.push(er(n[s],e,t,r));return i}}function il(n,e,t,r=!0){const i=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||dn;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const d=a.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](n,l,c)===!1)return}a=a.parent}if(s){Mr(),fa(s,null,10,[n,l,c]),Vr();return}}Wb(n,t,i,r,o)}function Wb(n,e,t,r=!0,i=!1){if(i)throw n;console.error(n)}const ht=[];let cr=-1;const Rs=[];let Zr=null,ws=0;const Vg=Promise.resolve();let xu=null;function sf(n){const e=xu||Vg;return n?e.then(this?n.bind(this):n):e}function Kb(n){let e=cr+1,t=ht.length;for(;e<t;){const r=e+t>>>1,i=ht[r],s=Ho(i);s<n||s===n&&i.flags&2?e=r+1:t=r}return e}function of(n){if(!(n.flags&1)){const e=Ho(n),t=ht[ht.length-1];!t||!(n.flags&2)&&e>=Ho(t)?ht.push(n):ht.splice(Kb(e),0,n),n.flags|=1,jg()}}function jg(){xu||(xu=Vg.then(Bg))}function Qb(n){Le(n)?Rs.push(...n):Zr&&n.id===-1?Zr.splice(ws+1,0,n):n.flags&1||(Rs.push(n),n.flags|=1),jg()}function Kh(n,e,t=cr+1){for(;t<ht.length;t++){const r=ht[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;ht.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function qg(n){if(Rs.length){const e=[...new Set(Rs)].sort((t,r)=>Ho(t)-Ho(r));if(Rs.length=0,Zr){Zr.push(...e);return}for(Zr=e,ws=0;ws<Zr.length;ws++){const t=Zr[ws];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Zr=null,ws=0}}const Ho=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Bg(n){try{for(cr=0;cr<ht.length;cr++){const e=ht[cr];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),fa(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;cr<ht.length;cr++){const e=ht[cr];e&&(e.flags&=-2)}cr=-1,ht.length=0,qg(),xu=null,(ht.length||Rs.length)&&Bg()}}let St=null,Ug=null;function wu(n){const e=St;return St=n,Ug=n&&n.type.__scopeId||null,e}function Yi(n,e=St,t){if(!e||n._n)return n;const r=(...i)=>{r._d&&Tu(-1);const s=wu(e);let o;try{o=n(...i)}finally{wu(s),r._d&&Tu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Qh(n,e){if(St===null)return n;const t=cl(St),r=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[s,o,a,l=dn]=e[i];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&Pr(o),r.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Vi(n,e,t,r){const i=n.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(Mr(),er(l,t,8,[n.el,a,n,e]),Vr())}}const Yb=Symbol("_vte"),$g=n=>n.__isTeleport,Dr=Symbol("_leaveCb"),Ka=Symbol("_enterCb");function Jb(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ls(()=>{n.isMounted=!0}),af(()=>{n.isUnmounting=!0}),n}const Mt=[Function,Array],Hg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},zg=n=>{const e=n.subTree;return e.component?zg(e.component):e},Xb={name:"BaseTransition",props:Hg,setup(n,{slots:e}){const t=_1(),r=Jb();return()=>{const i=e.default&&Kg(e.default(),!0);if(!i||!i.length)return;const s=Gg(i),o=en(n),{mode:a}=o;if(r.isLeaving)return Xl(s);const l=Yh(s);if(!l)return Xl(s);let c=ad(l,o,r,t,p=>c=p);l.type!==pt&&zo(l,c);let d=t.subTree&&Yh(t.subTree);if(d&&d.type!==pt&&!Hi(d,l)&&zg(t).type!==pt){let p=ad(d,o,r,t);if(zo(d,p),a==="out-in"&&l.type!==pt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,t.job.flags&8||t.update(),delete p.afterLeave,d=void 0},Xl(s);a==="in-out"&&l.type!==pt?p.delayLeave=(g,b,v)=>{const I=Wg(r,d);I[String(d.key)]=d,g[Dr]=()=>{b(),g[Dr]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return s}}};function Gg(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==pt){e=t;break}}return e}const Zb=Xb;function Wg(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function ad(n,e,t,r,i){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:b,onAfterLeave:v,onLeaveCancelled:I,onBeforeAppear:D,onAppear:L,onAfterAppear:V,onAppearCancelled:W}=e,z=String(n.key),ie=Wg(t,n),ce=(x,T)=>{x&&er(x,r,9,T)},S=(x,T)=>{const A=T[1];ce(x,T),Le(x)?x.every(k=>k.length<=1)&&A():x.length<=1&&A()},w={mode:o,persisted:a,beforeEnter(x){let T=l;if(!t.isMounted)if(s)T=D||l;else return;x[Dr]&&x[Dr](!0);const A=ie[z];A&&Hi(n,A)&&A.el[Dr]&&A.el[Dr](),ce(T,[x])},enter(x){let T=c,A=d,k=p;if(!t.isMounted)if(s)T=L||c,A=V||d,k=W||p;else return;let E=!1;const we=x[Ka]=Ke=>{E||(E=!0,Ke?ce(k,[x]):ce(A,[x]),w.delayedLeave&&w.delayedLeave(),x[Ka]=void 0)};T?S(T,[x,we]):we()},leave(x,T){const A=String(n.key);if(x[Ka]&&x[Ka](!0),t.isUnmounting)return T();ce(g,[x]);let k=!1;const E=x[Dr]=we=>{k||(k=!0,T(),we?ce(I,[x]):ce(v,[x]),x[Dr]=void 0,ie[A]===n&&delete ie[A])};ie[A]=n,b?S(b,[x,E]):E()},clone(x){const T=ad(x,e,t,r,i);return i&&i(T),T}};return w}function Xl(n){if(sl(n))return n=gi(n),n.children=null,n}function Yh(n){if(!sl(n))return $g(n.type)&&n.children?Gg(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&qe(t.default))return t.default()}}function zo(n,e){n.shapeFlag&6&&n.component?(n.transition=e,zo(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Kg(n,e=!1,t){let r=[],i=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===In?(o.patchFlag&128&&i++,r=r.concat(Kg(o.children,e,a))):(e||o.type!==pt)&&r.push(a!=null?gi(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Qg(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Eu=new WeakMap;function Do(n,e,t,r,i=!1){if(Le(n)){n.forEach((v,I)=>Do(v,e&&(Le(e)?e[I]:e),t,r,i));return}if(No(r)&&!i){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Do(n,e,t,r.component.subTree);return}const s=r.shapeFlag&4?cl(r.component):r.el,o=i?null:s,{i:a,r:l}=n,c=e&&e.r,d=a.refs===dn?a.refs={}:a.refs,p=a.setupState,g=en(p),b=p===dn?hg:v=>nn(g,v);if(c!=null&&c!==l){if(Jh(e),Sn(c))d[c]=null,b(c)&&(p[c]=null);else if(ut(c)){c.value=null;const v=e;v.k&&(d[v.k]=null)}}if(qe(l))fa(l,a,12,[o,d]);else{const v=Sn(l),I=ut(l);if(v||I){const D=()=>{if(n.f){const L=v?b(l)?p[l]:d[l]:l.value;if(i)Le(L)&&Wd(L,s);else if(Le(L))L.includes(s)||L.push(s);else if(v)d[l]=[s],b(l)&&(p[l]=d[l]);else{const V=[s];l.value=V,n.k&&(d[n.k]=V)}}else v?(d[l]=o,b(l)&&(p[l]=o)):I&&(l.value=o,n.k&&(d[n.k]=o))};if(o){const L=()=>{D(),Eu.delete(n)};L.id=-1,Eu.set(n,L),Ct(L,t)}else Jh(n),D()}}}function Jh(n){const e=Eu.get(n);e&&(e.flags|=8,Eu.delete(n))}tl().requestIdleCallback;tl().cancelIdleCallback;const No=n=>!!n.type.__asyncLoader,sl=n=>n.type.__isKeepAlive;function ev(n,e){Yg(n,"a",e)}function nv(n,e){Yg(n,"da",e)}function Yg(n,e,t=at){const r=n.__wdc||(n.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return n()});if(ol(e,r,t),t){let i=t.parent;for(;i&&i.parent;)sl(i.parent.vnode)&&tv(r,e,t,i),i=i.parent}}function tv(n,e,t,r){const i=ol(e,n,r,!0);al(()=>{Wd(r[e],i)},t)}function ol(n,e,t=at,r=!1){if(t){const i=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Mr();const a=ha(t),l=er(e,t,n,o);return a(),Vr(),l});return r?i.unshift(s):i.push(s),s}}const Hr=n=>(e,t=at)=>{(!Wo||n==="sp")&&ol(n,(...r)=>e(...r),t)},rv=Hr("bm"),ls=Hr("m"),iv=Hr("bu"),sv=Hr("u"),af=Hr("bum"),al=Hr("um"),ov=Hr("sp"),av=Hr("rtg"),uv=Hr("rtc");function lv(n,e=at){ol("ec",n,e)}const cv="components",Jg=Symbol.for("v-ndc");function dv(n){return Sn(n)?fv(cv,n,!1)||n:n||Jg}function fv(n,e,t=!0,r=!1){const i=St||at;if(i){const s=i.type;{const a=ex(s,!1);if(a&&(a===e||a===Ut(e)||a===nl(Ut(e))))return s}const o=Xh(i[n]||s[n],e)||Xh(i.appContext[n],e);return!o&&r?s:o}}function Xh(n,e){return n&&(n[e]||n[Ut(e)]||n[nl(Ut(e))])}function mi(n,e,t,r){let i;const s=t,o=Le(n);if(o||Sn(n)){const a=o&&Qi(n);let l=!1,c=!1;a&&(l=!qt(n),c=jr(n),n=rl(n)),i=new Array(n.length);for(let d=0,p=n.length;d<p;d++)i[d]=e(l?c?Bs(Zt(n[d])):Zt(n[d]):n[d],d,void 0,s)}else if(typeof n=="number"){i=new Array(n);for(let a=0;a<n;a++)i[a]=e(a+1,a,void 0,s)}else if(mn(n))if(n[Symbol.iterator])i=Array.from(n,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(n);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const d=a[l];i[l]=e(n[d],d,l,s)}}else i=[];return i}const ud=n=>n?y1(n)?cl(n):ud(n.parent):null,Po=Zn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ud(n.parent),$root:n=>ud(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Zg(n),$forceUpdate:n=>n.f||(n.f=()=>{of(n.update)}),$nextTick:n=>n.n||(n.n=sf.bind(n.proxy)),$watch:n=>Av.bind(n)}),Zl=(n,e)=>n!==dn&&!n.__isScriptSetup&&nn(n,e),hv={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(Zl(r,e))return o[e]=1,r[e];if(i!==dn&&nn(i,e))return o[e]=2,i[e];if(nn(s,e))return o[e]=3,s[e];if(t!==dn&&nn(t,e))return o[e]=4,t[e];ld&&(o[e]=0)}}const c=Po[e];let d,p;if(c)return e==="$attrs"&&it(n.attrs,"get",""),c(n);if((d=a.__cssModules)&&(d=d[e]))return d;if(t!==dn&&nn(t,e))return o[e]=4,t[e];if(p=l.config.globalProperties,nn(p,e))return p[e]},set({_:n},e,t){const{data:r,setupState:i,ctx:s}=n;return Zl(i,e)?(i[e]=t,!0):r!==dn&&nn(r,e)?(r[e]=t,!0):nn(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:i,props:s,type:o}},a){let l;return!!(t[a]||n!==dn&&a[0]!=="$"&&nn(n,a)||Zl(e,a)||nn(s,a)||nn(r,a)||nn(Po,a)||nn(i.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nn(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Zh(n){return Le(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ld=!0;function pv(n){const e=Zg(n),t=n.proxy,r=n.ctx;ld=!1,e.beforeCreate&&ep(e.beforeCreate,n,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:d,beforeMount:p,mounted:g,beforeUpdate:b,updated:v,activated:I,deactivated:D,beforeDestroy:L,beforeUnmount:V,destroyed:W,unmounted:z,render:ie,renderTracked:ce,renderTriggered:S,errorCaptured:w,serverPrefetch:x,expose:T,inheritAttrs:A,components:k,directives:E,filters:we}=e;if(c&&mv(c,r,null),o)for(const Je in o){const le=o[Je];qe(le)&&(r[Je]=le.bind(t))}if(i){const Je=i.call(t,t);mn(Je)&&(n.data=nf(Je))}if(ld=!0,s)for(const Je in s){const le=s[Je],En=qe(le)?le.bind(t,t):qe(le.get)?le.get.bind(t,t):mr,ct=!qe(le)&&qe(le.set)?le.set.bind(t):mr,bn=zt({get:En,set:ct});Object.defineProperty(r,Je,{enumerable:!0,configurable:!0,get:()=>bn.value,set:An=>bn.value=An})}if(a)for(const Je in a)Xg(a[Je],r,t,Je);if(l){const Je=qe(l)?l.call(t):l;Reflect.ownKeys(Je).forEach(le=>{xv(le,Je[le])})}d&&ep(d,n,"c");function an(Je,le){Le(le)?le.forEach(En=>Je(En.bind(t))):le&&Je(le.bind(t))}if(an(rv,p),an(ls,g),an(iv,b),an(sv,v),an(ev,I),an(nv,D),an(lv,w),an(uv,ce),an(av,S),an(af,V),an(al,z),an(ov,x),Le(T))if(T.length){const Je=n.exposed||(n.exposed={});T.forEach(le=>{Object.defineProperty(Je,le,{get:()=>t[le],set:En=>t[le]=En,enumerable:!0})})}else n.exposed||(n.exposed={});ie&&n.render===mr&&(n.render=ie),A!=null&&(n.inheritAttrs=A),k&&(n.components=k),E&&(n.directives=E),x&&Qg(n)}function mv(n,e,t=mr){Le(n)&&(n=cd(n));for(const r in n){const i=n[r];let s;mn(i)?"default"in i?s=ou(i.from||r,i.default,!0):s=ou(i.from||r):s=ou(i),ut(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function ep(n,e,t){er(Le(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Xg(n,e,t,r){let i=r.includes(".")?t1(t,r):()=>t[r];if(Sn(n)){const s=e[n];qe(s)&&ec(i,s)}else if(qe(n))ec(i,n.bind(t));else if(mn(n))if(Le(n))n.forEach(s=>Xg(s,e,t,r));else{const s=qe(n.handler)?n.handler.bind(t):e[n.handler];qe(s)&&ec(i,s,n)}}function Zg(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let l;return a?l=a:!i.length&&!t&&!r?l=e:(l={},i.length&&i.forEach(c=>Au(l,c,o,!0)),Au(l,e,o)),mn(e)&&s.set(e,l),l}function Au(n,e,t,r=!1){const{mixins:i,extends:s}=e;s&&Au(n,s,t,!0),i&&i.forEach(o=>Au(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=gv[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const gv={data:np,props:tp,emits:tp,methods:wo,computed:wo,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:wo,directives:wo,watch:yv,provide:np,inject:_v};function np(n,e){return e?n?function(){return Zn(qe(n)?n.call(this,this):n,qe(e)?e.call(this,this):e)}:e:n}function _v(n,e){return wo(cd(n),cd(e))}function cd(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ft(n,e){return n?[...new Set([].concat(n,e))]:e}function wo(n,e){return n?Zn(Object.create(null),n,e):e}function tp(n,e){return n?Le(n)&&Le(e)?[...new Set([...n,...e])]:Zn(Object.create(null),Zh(n),Zh(e??{})):e}function yv(n,e){if(!n)return e;if(!e)return n;const t=Zn(Object.create(null),n);for(const r in e)t[r]=ft(n[r],e[r]);return t}function e1(){return{app:null,config:{isNativeTag:hg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let bv=0;function vv(n,e){return function(r,i=null){qe(r)||(r=Zn({},r)),i!=null&&!mn(i)&&(i=null);const s=e1(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:bv++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:rx,get config(){return s.config},set config(d){},use(d,...p){return o.has(d)||(d&&qe(d.install)?(o.add(d),d.install(c,...p)):qe(d)&&(o.add(d),d(c,...p))),c},mixin(d){return s.mixins.includes(d)||s.mixins.push(d),c},component(d,p){return p?(s.components[d]=p,c):s.components[d]},directive(d,p){return p?(s.directives[d]=p,c):s.directives[d]},mount(d,p,g){if(!l){const b=c._ceVNode||gn(r,i);return b.appContext=s,g===!0?g="svg":g===!1&&(g=void 0),n(b,d,g),l=!0,c._container=d,d.__vue_app__=c,cl(b.component)}},onUnmount(d){a.push(d)},unmount(){l&&(er(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(d,p){return s.provides[d]=p,c},runWithContext(d){const p=Ds;Ds=c;try{return d()}finally{Ds=p}}};return c}}let Ds=null;function xv(n,e){if(at){let t=at.provides;const r=at.parent&&at.parent.provides;r===t&&(t=at.provides=Object.create(r)),t[n]=e}}function ou(n,e,t=!1){const r=_1();if(r||Ds){let i=Ds?Ds._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(i&&n in i)return i[n];if(arguments.length>1)return t&&qe(e)?e.call(r&&r.proxy):e}}const wv=Symbol.for("v-scx"),Ev=()=>ou(wv);function ec(n,e,t){return n1(n,e,t)}function n1(n,e,t=dn){const{immediate:r,deep:i,flush:s,once:o}=t,a=Zn({},t),l=e&&r||!e&&s!=="post";let c;if(Wo){if(s==="sync"){const b=Ev();c=b.__watcherHandles||(b.__watcherHandles=[])}else if(!l){const b=()=>{};return b.stop=mr,b.resume=mr,b.pause=mr,b}}const d=at;a.call=(b,v,I)=>er(b,d,v,I);let p=!1;s==="post"?a.scheduler=b=>{Ct(b,d&&d.suspense)}:s!=="sync"&&(p=!0,a.scheduler=(b,v)=>{v?b():of(b)}),a.augmentJob=b=>{e&&(b.flags|=4),p&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const g=Gb(n,e,a);return Wo&&(c?c.push(g):l&&g()),g}function Av(n,e,t){const r=this.proxy,i=Sn(n)?n.includes(".")?t1(r,n):()=>r[n]:n.bind(r,r);let s;qe(e)?s=e:(s=e.handler,t=e);const o=ha(this),a=n1(i,s.bind(r),t);return o(),a}function t1(n,e){const t=e.split(".");return()=>{let r=n;for(let i=0;i<t.length&&r;i++)r=r[t[i]];return r}}const Tv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Ut(e)}Modifiers`]||n[`${us(e)}Modifiers`];function kv(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||dn;let i=t;const s=e.startsWith("update:"),o=s&&Tv(r,e.slice(7));o&&(o.trim&&(i=t.map(d=>Sn(d)?d.trim():d)),o.number&&(i=t.map(Qd)));let a,l=r[a=Wl(e)]||r[a=Wl(Ut(e))];!l&&s&&(l=r[a=Wl(us(e))]),l&&er(l,n,6,i);const c=r[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,er(c,n,6,i)}}const Iv=new WeakMap;function r1(n,e,t=!1){const r=t?Iv:e.emitsCache,i=r.get(n);if(i!==void 0)return i;const s=n.emits;let o={},a=!1;if(!qe(n)){const l=c=>{const d=r1(c,e,!0);d&&(a=!0,Zn(o,d))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!a?(mn(n)&&r.set(n,null),null):(Le(s)?s.forEach(l=>o[l]=null):Zn(o,s),mn(n)&&r.set(n,o),o)}function ul(n,e){return!n||!Xu(e)?!1:(e=e.slice(2).replace(/Once$/,""),nn(n,e[0].toLowerCase()+e.slice(1))||nn(n,us(e))||nn(n,e))}function rp(n){const{type:e,vnode:t,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:d,props:p,data:g,setupState:b,ctx:v,inheritAttrs:I}=n,D=wu(n);let L,V;try{if(t.shapeFlag&4){const z=i||r,ie=z;L=fr(c.call(ie,z,d,p,b,g,v)),V=a}else{const z=e;L=fr(z.length>1?z(p,{attrs:a,slots:o,emit:l}):z(p,null)),V=e.props?a:Cv(a)}}catch(z){Oo.length=0,il(z,n,1),L=gn(pt)}let W=L;if(V&&I!==!1){const z=Object.keys(V),{shapeFlag:ie}=W;z.length&&ie&7&&(s&&z.some(Gd)&&(V=Sv(V,s)),W=gi(W,V,!1,!0))}return t.dirs&&(W=gi(W,null,!1,!0),W.dirs=W.dirs?W.dirs.concat(t.dirs):t.dirs),t.transition&&zo(W,t.transition),L=W,wu(D),L}const Cv=n=>{let e;for(const t in n)(t==="class"||t==="style"||Xu(t))&&((e||(e={}))[t]=n[t]);return e},Sv=(n,e)=>{const t={};for(const r in n)(!Gd(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function Rv(n,e,t){const{props:r,children:i,component:s}=n,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return r?ip(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!ul(c,g))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ip(r,o,c):!0:!!o;return!1}function ip(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==n[s]&&!ul(t,s))return!0}return!1}function Dv({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const i1={},s1=()=>Object.create(i1),o1=n=>Object.getPrototypeOf(n)===i1;function Nv(n,e,t,r=!1){const i={},s=s1();n.propsDefaults=Object.create(null),a1(n,e,i,s);for(const o in n.propsOptions[0])o in i||(i[o]=void 0);t?n.props=r?i:Vb(i):n.type.props?n.props=i:n.props=s,n.attrs=s}function Pv(n,e,t,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=n,a=en(i),[l]=n.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=n.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(ul(n.emitsOptions,g))continue;const b=e[g];if(l)if(nn(s,g))b!==s[g]&&(s[g]=b,c=!0);else{const v=Ut(g);i[v]=dd(l,a,v,b,n,!1)}else b!==s[g]&&(s[g]=b,c=!0)}}}else{a1(n,e,i,s)&&(c=!0);let d;for(const p in a)(!e||!nn(e,p)&&((d=us(p))===p||!nn(e,d)))&&(l?t&&(t[p]!==void 0||t[d]!==void 0)&&(i[p]=dd(l,a,p,void 0,n,!0)):delete i[p]);if(s!==a)for(const p in s)(!e||!nn(e,p))&&(delete s[p],c=!0)}c&&Nr(n.attrs,"set","")}function a1(n,e,t,r){const[i,s]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Co(l))continue;const c=e[l];let d;i&&nn(i,d=Ut(l))?!s||!s.includes(d)?t[d]=c:(a||(a={}))[d]=c:ul(n.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(s){const l=en(t),c=a||dn;for(let d=0;d<s.length;d++){const p=s[d];t[p]=dd(i,l,p,c[p],n,!nn(c,p))}}return o}function dd(n,e,t,r,i,s){const o=n[t];if(o!=null){const a=nn(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=i;if(t in c)r=c[t];else{const d=ha(i);r=c[t]=l.call(null,e),d()}}else r=l;i.ce&&i.ce._setProp(t,r)}o[0]&&(s&&!a?r=!1:o[1]&&(r===""||r===us(t))&&(r=!0))}return r}const Ov=new WeakMap;function u1(n,e,t=!1){const r=t?Ov:e.propsCache,i=r.get(n);if(i)return i;const s=n.props,o={},a=[];let l=!1;if(!qe(n)){const d=p=>{l=!0;const[g,b]=u1(p,e,!0);Zn(o,g),b&&a.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!s&&!l)return mn(n)&&r.set(n,Cs),Cs;if(Le(s))for(let d=0;d<s.length;d++){const p=Ut(s[d]);sp(p)&&(o[p]=dn)}else if(s)for(const d in s){const p=Ut(d);if(sp(p)){const g=s[d],b=o[p]=Le(g)||qe(g)?{type:g}:Zn({},g),v=b.type;let I=!1,D=!0;if(Le(v))for(let L=0;L<v.length;++L){const V=v[L],W=qe(V)&&V.name;if(W==="Boolean"){I=!0;break}else W==="String"&&(D=!1)}else I=qe(v)&&v.name==="Boolean";b[0]=I,b[1]=D,(I||nn(b,"default"))&&a.push(p)}}const c=[o,a];return mn(n)&&r.set(n,c),c}function sp(n){return n[0]!=="$"&&!Co(n)}const uf=n=>n==="_"||n==="_ctx"||n==="$stable",lf=n=>Le(n)?n.map(fr):[fr(n)],Lv=(n,e,t)=>{if(e._n)return e;const r=Yi((...i)=>lf(e(...i)),t);return r._c=!1,r},l1=(n,e,t)=>{const r=n._ctx;for(const i in n){if(uf(i))continue;const s=n[i];if(qe(s))e[i]=Lv(i,s,r);else if(s!=null){const o=lf(s);e[i]=()=>o}}},c1=(n,e)=>{const t=lf(e);n.slots.default=()=>t},d1=(n,e,t)=>{for(const r in e)(t||!uf(r))&&(n[r]=e[r])},Fv=(n,e,t)=>{const r=n.slots=s1();if(n.vnode.shapeFlag&32){const i=e._;i?(d1(r,e,t),t&&yg(r,"_",i,!0)):l1(e,r)}else e&&c1(n,e)},Mv=(n,e,t)=>{const{vnode:r,slots:i}=n;let s=!0,o=dn;if(r.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:d1(i,e,t):(s=!e.$stable,l1(e,i)),o=e}else e&&(c1(n,e),o={default:1});if(s)for(const a in i)!uf(a)&&o[a]==null&&delete i[a]},Ct=Uv;function Vv(n){return jv(n)}function jv(n,e){const t=tl();t.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:d,parentNode:p,nextSibling:g,setScopeId:b=mr,insertStaticContent:v}=n,I=(C,N,U,oe=null,ee=null,te=null,de=void 0,ae=null,re=!!N.dynamicChildren)=>{if(C===N)return;C&&!Hi(C,N)&&(oe=Kn(C),An(C,ee,te,!0),C=null),N.patchFlag===-2&&(re=!1,N.dynamicChildren=null);const{type:ne,ref:Ee,shapeFlag:pe}=N;switch(ne){case ll:D(C,N,U,oe);break;case pt:L(C,N,U,oe);break;case au:C==null&&V(N,U,oe,de);break;case In:k(C,N,U,oe,ee,te,de,ae,re);break;default:pe&1?ie(C,N,U,oe,ee,te,de,ae,re):pe&6?E(C,N,U,oe,ee,te,de,ae,re):(pe&64||pe&128)&&ne.process(C,N,U,oe,ee,te,de,ae,re,Qn)}Ee!=null&&ee?Do(Ee,C&&C.ref,te,N||C,!N):Ee==null&&C&&C.ref!=null&&Do(C.ref,null,te,C,!0)},D=(C,N,U,oe)=>{if(C==null)r(N.el=a(N.children),U,oe);else{const ee=N.el=C.el;N.children!==C.children&&c(ee,N.children)}},L=(C,N,U,oe)=>{C==null?r(N.el=l(N.children||""),U,oe):N.el=C.el},V=(C,N,U,oe)=>{[C.el,C.anchor]=v(C.children,N,U,oe,C.el,C.anchor)},W=({el:C,anchor:N},U,oe)=>{let ee;for(;C&&C!==N;)ee=g(C),r(C,U,oe),C=ee;r(N,U,oe)},z=({el:C,anchor:N})=>{let U;for(;C&&C!==N;)U=g(C),i(C),C=U;i(N)},ie=(C,N,U,oe,ee,te,de,ae,re)=>{if(N.type==="svg"?de="svg":N.type==="math"&&(de="mathml"),C==null)ce(N,U,oe,ee,te,de,ae,re);else{const ne=C.el&&C.el._isVueCE?C.el:null;try{ne&&ne._beginPatch(),x(C,N,ee,te,de,ae,re)}finally{ne&&ne._endPatch()}}},ce=(C,N,U,oe,ee,te,de,ae)=>{let re,ne;const{props:Ee,shapeFlag:pe,transition:ve,dirs:f}=C;if(re=C.el=o(C.type,te,Ee&&Ee.is,Ee),pe&8?d(re,C.children):pe&16&&w(C.children,re,null,oe,ee,nc(C,te),de,ae),f&&Vi(C,null,oe,"created"),S(re,C,C.scopeId,de,oe),Ee){for(const M in Ee)M!=="value"&&!Co(M)&&s(re,M,null,Ee[M],te,oe);"value"in Ee&&s(re,"value",null,Ee.value,te),(ne=Ee.onVnodeBeforeMount)&&lr(ne,oe,C)}f&&Vi(C,null,oe,"beforeMount");const P=qv(ee,ve);P&&ve.beforeEnter(re),r(re,N,U),((ne=Ee&&Ee.onVnodeMounted)||P||f)&&Ct(()=>{ne&&lr(ne,oe,C),P&&ve.enter(re),f&&Vi(C,null,oe,"mounted")},ee)},S=(C,N,U,oe,ee)=>{if(U&&b(C,U),oe)for(let te=0;te<oe.length;te++)b(C,oe[te]);if(ee){let te=ee.subTree;if(N===te||p1(te.type)&&(te.ssContent===N||te.ssFallback===N)){const de=ee.vnode;S(C,de,de.scopeId,de.slotScopeIds,ee.parent)}}},w=(C,N,U,oe,ee,te,de,ae,re=0)=>{for(let ne=re;ne<C.length;ne++){const Ee=C[ne]=ae?ei(C[ne]):fr(C[ne]);I(null,Ee,N,U,oe,ee,te,de,ae)}},x=(C,N,U,oe,ee,te,de)=>{const ae=N.el=C.el;let{patchFlag:re,dynamicChildren:ne,dirs:Ee}=N;re|=C.patchFlag&16;const pe=C.props||dn,ve=N.props||dn;let f;if(U&&ji(U,!1),(f=ve.onVnodeBeforeUpdate)&&lr(f,U,N,C),Ee&&Vi(N,C,U,"beforeUpdate"),U&&ji(U,!0),(pe.innerHTML&&ve.innerHTML==null||pe.textContent&&ve.textContent==null)&&d(ae,""),ne?T(C.dynamicChildren,ne,ae,U,oe,nc(N,ee),te):de||le(C,N,ae,null,U,oe,nc(N,ee),te,!1),re>0){if(re&16)A(ae,pe,ve,U,ee);else if(re&2&&pe.class!==ve.class&&s(ae,"class",null,ve.class,ee),re&4&&s(ae,"style",pe.style,ve.style,ee),re&8){const P=N.dynamicProps;for(let M=0;M<P.length;M++){const J=P[M],G=pe[J],_=ve[J];(_!==G||J==="value")&&s(ae,J,G,_,ee,U)}}re&1&&C.children!==N.children&&d(ae,N.children)}else!de&&ne==null&&A(ae,pe,ve,U,ee);((f=ve.onVnodeUpdated)||Ee)&&Ct(()=>{f&&lr(f,U,N,C),Ee&&Vi(N,C,U,"updated")},oe)},T=(C,N,U,oe,ee,te,de)=>{for(let ae=0;ae<N.length;ae++){const re=C[ae],ne=N[ae],Ee=re.el&&(re.type===In||!Hi(re,ne)||re.shapeFlag&198)?p(re.el):U;I(re,ne,Ee,null,oe,ee,te,de,!0)}},A=(C,N,U,oe,ee)=>{if(N!==U){if(N!==dn)for(const te in N)!Co(te)&&!(te in U)&&s(C,te,N[te],null,ee,oe);for(const te in U){if(Co(te))continue;const de=U[te],ae=N[te];de!==ae&&te!=="value"&&s(C,te,ae,de,ee,oe)}"value"in U&&s(C,"value",N.value,U.value,ee)}},k=(C,N,U,oe,ee,te,de,ae,re)=>{const ne=N.el=C?C.el:a(""),Ee=N.anchor=C?C.anchor:a("");let{patchFlag:pe,dynamicChildren:ve,slotScopeIds:f}=N;f&&(ae=ae?ae.concat(f):f),C==null?(r(ne,U,oe),r(Ee,U,oe),w(N.children||[],U,Ee,ee,te,de,ae,re)):pe>0&&pe&64&&ve&&C.dynamicChildren?(T(C.dynamicChildren,ve,U,ee,te,de,ae),(N.key!=null||ee&&N===ee.subTree)&&f1(C,N,!0)):le(C,N,U,Ee,ee,te,de,ae,re)},E=(C,N,U,oe,ee,te,de,ae,re)=>{N.slotScopeIds=ae,C==null?N.shapeFlag&512?ee.ctx.activate(N,U,oe,de,re):we(N,U,oe,ee,te,de,re):Ke(C,N,re)},we=(C,N,U,oe,ee,te,de)=>{const ae=C.component=Qv(C,oe,ee);if(sl(C)&&(ae.ctx.renderer=Qn),Yv(ae,!1,de),ae.asyncDep){if(ee&&ee.registerDep(ae,an,de),!C.el){const re=ae.subTree=gn(pt);L(null,re,N,U),C.placeholder=re.el}}else an(ae,C,N,U,ee,te,de)},Ke=(C,N,U)=>{const oe=N.component=C.component;if(Rv(C,N,U))if(oe.asyncDep&&!oe.asyncResolved){Je(oe,N,U);return}else oe.next=N,oe.update();else N.el=C.el,oe.vnode=N},an=(C,N,U,oe,ee,te,de)=>{const ae=()=>{if(C.isMounted){let{next:pe,bu:ve,u:f,parent:P,vnode:M}=C;{const q=h1(C);if(q){pe&&(pe.el=M.el,Je(C,pe,de)),q.asyncDep.then(()=>{C.isUnmounted||ae()});return}}let J=pe,G;ji(C,!1),pe?(pe.el=M.el,Je(C,pe,de)):pe=M,ve&&su(ve),(G=pe.props&&pe.props.onVnodeBeforeUpdate)&&lr(G,P,pe,M),ji(C,!0);const _=rp(C),O=C.subTree;C.subTree=_,I(O,_,p(O.el),Kn(O),C,ee,te),pe.el=_.el,J===null&&Dv(C,_.el),f&&Ct(f,ee),(G=pe.props&&pe.props.onVnodeUpdated)&&Ct(()=>lr(G,P,pe,M),ee)}else{let pe;const{el:ve,props:f}=N,{bm:P,m:M,parent:J,root:G,type:_}=C,O=No(N);ji(C,!1),P&&su(P),!O&&(pe=f&&f.onVnodeBeforeMount)&&lr(pe,J,N),ji(C,!0);{G.ce&&G.ce._def.shadowRoot!==!1&&G.ce._injectChildStyle(_);const q=C.subTree=rp(C);I(null,q,U,oe,C,ee,te),N.el=q.el}if(M&&Ct(M,ee),!O&&(pe=f&&f.onVnodeMounted)){const q=N;Ct(()=>lr(pe,J,q),ee)}(N.shapeFlag&256||J&&No(J.vnode)&&J.vnode.shapeFlag&256)&&C.a&&Ct(C.a,ee),C.isMounted=!0,N=U=oe=null}};C.scope.on();const re=C.effect=new wg(ae);C.scope.off();const ne=C.update=re.run.bind(re),Ee=C.job=re.runIfDirty.bind(re);Ee.i=C,Ee.id=C.uid,re.scheduler=()=>of(Ee),ji(C,!0),ne()},Je=(C,N,U)=>{N.component=C;const oe=C.vnode.props;C.vnode=N,C.next=null,Pv(C,N.props,oe,U),Mv(C,N.children,U),Mr(),Kh(C),Vr()},le=(C,N,U,oe,ee,te,de,ae,re=!1)=>{const ne=C&&C.children,Ee=C?C.shapeFlag:0,pe=N.children,{patchFlag:ve,shapeFlag:f}=N;if(ve>0){if(ve&128){ct(ne,pe,U,oe,ee,te,de,ae,re);return}else if(ve&256){En(ne,pe,U,oe,ee,te,de,ae,re);return}}f&8?(Ee&16&&Un(ne,ee,te),pe!==ne&&d(U,pe)):Ee&16?f&16?ct(ne,pe,U,oe,ee,te,de,ae,re):Un(ne,ee,te,!0):(Ee&8&&d(U,""),f&16&&w(pe,U,oe,ee,te,de,ae,re))},En=(C,N,U,oe,ee,te,de,ae,re)=>{C=C||Cs,N=N||Cs;const ne=C.length,Ee=N.length,pe=Math.min(ne,Ee);let ve;for(ve=0;ve<pe;ve++){const f=N[ve]=re?ei(N[ve]):fr(N[ve]);I(C[ve],f,U,null,ee,te,de,ae,re)}ne>Ee?Un(C,ee,te,!0,!1,pe):w(N,U,oe,ee,te,de,ae,re,pe)},ct=(C,N,U,oe,ee,te,de,ae,re)=>{let ne=0;const Ee=N.length;let pe=C.length-1,ve=Ee-1;for(;ne<=pe&&ne<=ve;){const f=C[ne],P=N[ne]=re?ei(N[ne]):fr(N[ne]);if(Hi(f,P))I(f,P,U,null,ee,te,de,ae,re);else break;ne++}for(;ne<=pe&&ne<=ve;){const f=C[pe],P=N[ve]=re?ei(N[ve]):fr(N[ve]);if(Hi(f,P))I(f,P,U,null,ee,te,de,ae,re);else break;pe--,ve--}if(ne>pe){if(ne<=ve){const f=ve+1,P=f<Ee?N[f].el:oe;for(;ne<=ve;)I(null,N[ne]=re?ei(N[ne]):fr(N[ne]),U,P,ee,te,de,ae,re),ne++}}else if(ne>ve)for(;ne<=pe;)An(C[ne],ee,te,!0),ne++;else{const f=ne,P=ne,M=new Map;for(ne=P;ne<=ve;ne++){const Y=N[ne]=re?ei(N[ne]):fr(N[ne]);Y.key!=null&&M.set(Y.key,ne)}let J,G=0;const _=ve-P+1;let O=!1,q=0;const $=new Array(_);for(ne=0;ne<_;ne++)$[ne]=0;for(ne=f;ne<=pe;ne++){const Y=C[ne];if(G>=_){An(Y,ee,te,!0);continue}let H;if(Y.key!=null)H=M.get(Y.key);else for(J=P;J<=ve;J++)if($[J-P]===0&&Hi(Y,N[J])){H=J;break}H===void 0?An(Y,ee,te,!0):($[H-P]=ne+1,H>=q?q=H:O=!0,I(Y,N[H],U,null,ee,te,de,ae,re),G++)}const X=O?Bv($):Cs;for(J=X.length-1,ne=_-1;ne>=0;ne--){const Y=P+ne,H=N[Y],he=N[Y+1],se=Y+1<Ee?he.el||he.placeholder:oe;$[ne]===0?I(null,H,U,se,ee,te,de,ae,re):O&&(J<0||ne!==X[J]?bn(H,U,se,2):J--)}}},bn=(C,N,U,oe,ee=null)=>{const{el:te,type:de,transition:ae,children:re,shapeFlag:ne}=C;if(ne&6){bn(C.component.subTree,N,U,oe);return}if(ne&128){C.suspense.move(N,U,oe);return}if(ne&64){de.move(C,N,U,Qn);return}if(de===In){r(te,N,U);for(let pe=0;pe<re.length;pe++)bn(re[pe],N,U,oe);r(C.anchor,N,U);return}if(de===au){W(C,N,U);return}if(oe!==2&&ne&1&&ae)if(oe===0)ae.beforeEnter(te),r(te,N,U),Ct(()=>ae.enter(te),ee);else{const{leave:pe,delayLeave:ve,afterLeave:f}=ae,P=()=>{C.ctx.isUnmounted?i(te):r(te,N,U)},M=()=>{te._isLeaving&&te[Dr](!0),pe(te,()=>{P(),f&&f()})};ve?ve(te,P,M):M()}else r(te,N,U)},An=(C,N,U,oe=!1,ee=!1)=>{const{type:te,props:de,ref:ae,children:re,dynamicChildren:ne,shapeFlag:Ee,patchFlag:pe,dirs:ve,cacheIndex:f}=C;if(pe===-2&&(ee=!1),ae!=null&&(Mr(),Do(ae,null,U,C,!0),Vr()),f!=null&&(N.renderCache[f]=void 0),Ee&256){N.ctx.deactivate(C);return}const P=Ee&1&&ve,M=!No(C);let J;if(M&&(J=de&&de.onVnodeBeforeUnmount)&&lr(J,N,C),Ee&6)Xe(C.component,U,oe);else{if(Ee&128){C.suspense.unmount(U,oe);return}P&&Vi(C,null,N,"beforeUnmount"),Ee&64?C.type.remove(C,N,U,Qn,oe):ne&&!ne.hasOnce&&(te!==In||pe>0&&pe&64)?Un(ne,N,U,!1,!0):(te===In&&pe&384||!ee&&Ee&16)&&Un(re,N,U),oe&&Rn(C)}(M&&(J=de&&de.onVnodeUnmounted)||P)&&Ct(()=>{J&&lr(J,N,C),P&&Vi(C,null,N,"unmounted")},U)},Rn=C=>{const{type:N,el:U,anchor:oe,transition:ee}=C;if(N===In){_t(U,oe);return}if(N===au){z(C);return}const te=()=>{i(U),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(C.shapeFlag&1&&ee&&!ee.persisted){const{leave:de,delayLeave:ae}=ee,re=()=>de(U,te);ae?ae(C.el,te,re):re()}else te()},_t=(C,N)=>{let U;for(;C!==N;)U=g(C),i(C),C=U;i(N)},Xe=(C,N,U)=>{const{bum:oe,scope:ee,job:te,subTree:de,um:ae,m:re,a:ne}=C;op(re),op(ne),oe&&su(oe),ee.stop(),te&&(te.flags|=8,An(de,C,N,U)),ae&&Ct(ae,N),Ct(()=>{C.isUnmounted=!0},N)},Un=(C,N,U,oe=!1,ee=!1,te=0)=>{for(let de=te;de<C.length;de++)An(C[de],N,U,oe,ee)},Kn=C=>{if(C.shapeFlag&6)return Kn(C.component.subTree);if(C.shapeFlag&128)return C.suspense.next();const N=g(C.anchor||C.el),U=N&&N[Yb];return U?g(U):N};let yt=!1;const $t=(C,N,U)=>{C==null?N._vnode&&An(N._vnode,null,null,!0):I(N._vnode||null,C,N,null,null,null,U),N._vnode=C,yt||(yt=!0,Kh(),qg(),yt=!1)},Qn={p:I,um:An,m:bn,r:Rn,mt:we,mc:w,pc:le,pbc:T,n:Kn,o:n};return{render:$t,hydrate:void 0,createApp:vv($t)}}function nc({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ji({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function qv(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function f1(n,e,t=!1){const r=n.children,i=e.children;if(Le(r)&&Le(i))for(let s=0;s<r.length;s++){const o=r[s];let a=i[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[s]=ei(i[s]),a.el=o.el),!t&&a.patchFlag!==-2&&f1(o,a)),a.type===ll&&a.patchFlag!==-1&&(a.el=o.el),a.type===pt&&!a.el&&(a.el=o.el)}}function Bv(n){const e=n.slice(),t=[0];let r,i,s,o,a;const l=n.length;for(r=0;r<l;r++){const c=n[r];if(c!==0){if(i=t[t.length-1],n[i]<c){e[r]=i,t.push(r);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<c?s=a+1:o=a;c<n[t[s]]&&(s>0&&(e[r]=t[s-1]),t[s]=r)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function h1(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:h1(e)}function op(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const p1=n=>n.__isSuspense;function Uv(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):Qb(n)}const In=Symbol.for("v-fgt"),ll=Symbol.for("v-txt"),pt=Symbol.for("v-cmt"),au=Symbol.for("v-stc"),Oo=[];let Rt=null;function Te(n=!1){Oo.push(Rt=n?null:[])}function $v(){Oo.pop(),Rt=Oo[Oo.length-1]||null}let Go=1;function Tu(n,e=!1){Go+=n,n<0&&Rt&&e&&(Rt.hasOnce=!0)}function m1(n){return n.dynamicChildren=Go>0?Rt||Cs:null,$v(),Go>0&&Rt&&Rt.push(n),n}function Se(n,e,t,r,i,s){return m1(B(n,e,t,r,i,s,!0))}function Zi(n,e,t,r,i){return m1(gn(n,e,t,r,i,!0))}function ku(n){return n?n.__v_isVNode===!0:!1}function Hi(n,e){return n.type===e.type&&n.key===e.key}const g1=({key:n})=>n??null,uu=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Sn(n)||ut(n)||qe(n)?{i:St,r:n,k:e,f:!!t}:n:null);function B(n,e=null,t=null,r=0,i=null,s=n===In?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&g1(e),ref:e&&uu(e),scopeId:Ug,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:St};return a?(cf(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=Sn(t)?8:16),Go>0&&!o&&Rt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Rt.push(l),l}const gn=Hv;function Hv(n,e=null,t=null,r=0,i=null,s=!1){if((!n||n===Jg)&&(n=pt),ku(n)){const a=gi(n,e,!0);return t&&cf(a,t),Go>0&&!s&&Rt&&(a.shapeFlag&6?Rt[Rt.indexOf(n)]=a:Rt.push(a)),a.patchFlag=-2,a}if(nx(n)&&(n=n.__vccOpts),e){e=zv(e);let{class:a,style:l}=e;a&&!Sn(a)&&(e.class=jt(a)),mn(l)&&(rf(l)&&!Le(l)&&(l=Zn({},l)),e.style=da(l))}const o=Sn(n)?1:p1(n)?128:$g(n)?64:mn(n)?4:qe(n)?2:0;return B(n,e,t,r,i,o,s,!0)}function zv(n){return n?rf(n)||o1(n)?Zn({},n):n:null}function gi(n,e,t=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:a,transition:l}=n,c=e?Gv(i||{},e):i,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&g1(c),ref:e&&e.ref?t&&s?Le(s)?s.concat(uu(e)):[s,uu(e)]:uu(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==In?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&gi(n.ssContent),ssFallback:n.ssFallback&&gi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&r&&zo(d,l.clone(d)),d}function oi(n=" ",e=0){return gn(ll,null,n,e)}function fd(n,e){const t=gn(au,null,n);return t.staticCount=e,t}function st(n="",e=!1){return e?(Te(),Zi(pt,null,n)):gn(pt,null,n)}function fr(n){return n==null||typeof n=="boolean"?gn(pt):Le(n)?gn(In,null,n.slice()):ku(n)?ei(n):gn(ll,null,String(n))}function ei(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:gi(n)}function cf(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),cf(n,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!o1(e)?e._ctx=St:i===3&&St&&(St.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:St},t=32):(e=String(e),r&64?(t=16,e=[oi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Gv(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=jt([e.class,r.class]));else if(i==="style")e.style=da([e.style,r.style]);else if(Xu(i)){const s=e[i],o=r[i];o&&s!==o&&!(Le(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function lr(n,e,t,r=null){er(n,e,7,[t,r])}const Wv=e1();let Kv=0;function Qv(n,e,t){const r=n.type,i=(e?e.appContext:n.appContext)||Wv,s={uid:Kv++,vnode:n,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new yb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:u1(r,i),emitsOptions:r1(r,i),emit:null,emitted:null,propsDefaults:dn,inheritAttrs:r.inheritAttrs,ctx:dn,data:dn,props:dn,attrs:dn,slots:dn,refs:dn,setupState:dn,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=kv.bind(null,s),n.ce&&n.ce(s),s}let at=null;const _1=()=>at||St;let Iu,hd;{const n=tl(),e=(t,r)=>{let i;return(i=n[t])||(i=n[t]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Iu=e("__VUE_INSTANCE_SETTERS__",t=>at=t),hd=e("__VUE_SSR_SETTERS__",t=>Wo=t)}const ha=n=>{const e=at;return Iu(n),n.scope.on(),()=>{n.scope.off(),Iu(e)}},ap=()=>{at&&at.scope.off(),Iu(null)};function y1(n){return n.vnode.shapeFlag&4}let Wo=!1;function Yv(n,e=!1,t=!1){e&&hd(e);const{props:r,children:i}=n.vnode,s=y1(n);Nv(n,r,s,e),Fv(n,i,t||e);const o=s?Jv(n,e):void 0;return e&&hd(!1),o}function Jv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,hv);const{setup:r}=t;if(r){Mr();const i=n.setupContext=r.length>1?Zv(n):null,s=ha(n),o=fa(r,n,0,[n.props,i]),a=mg(o);if(Vr(),s(),(a||n.sp)&&!No(n)&&Qg(n),a){if(o.then(ap,ap),e)return o.then(l=>{up(n,l)}).catch(l=>{il(l,n,0)});n.asyncDep=o}else up(n,o)}else b1(n)}function up(n,e,t){qe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:mn(e)&&(n.setupState=Mg(e)),b1(n)}function b1(n,e,t){const r=n.type;n.render||(n.render=r.render||mr);{const i=ha(n);Mr();try{pv(n)}finally{Vr(),i()}}}const Xv={get(n,e){return it(n,"get",""),n[e]}};function Zv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Xv),slots:n.slots,emit:n.emit,expose:e}}function cl(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Mg(jb(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Po)return Po[t](n)},has(e,t){return t in e||t in Po}})):n.proxy}function ex(n,e=!0){return qe(n)?n.displayName||n.name:n.name||e&&n.__name}function nx(n){return qe(n)&&"__vccOpts"in n}const zt=(n,e)=>Hb(n,e,Wo);function tx(n,e,t){try{Tu(-1);const r=arguments.length;return r===2?mn(e)&&!Le(e)?ku(e)?gn(n,null,[e]):gn(n,e):gn(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&ku(t)&&(t=[t]),gn(n,e,t))}finally{Tu(1)}}const rx="3.5.25";let pd;const lp=typeof window<"u"&&window.trustedTypes;if(lp)try{pd=lp.createPolicy("vue",{createHTML:n=>n})}catch{}const v1=pd?n=>pd.createHTML(n):n=>n,ix="http://www.w3.org/2000/svg",sx="http://www.w3.org/1998/Math/MathML",Rr=typeof document<"u"?document:null,cp=Rr&&Rr.createElement("template"),ox={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const i=e==="svg"?Rr.createElementNS(ix,n):e==="mathml"?Rr.createElementNS(sx,n):t?Rr.createElement(n,{is:t}):Rr.createElement(n);return n==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:n=>Rr.createTextNode(n),createComment:n=>Rr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Rr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,i,s){const o=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{cp.innerHTML=v1(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const a=cp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Qr="transition",vo="animation",Ko=Symbol("_vtc"),x1={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},ax=Zn({},Hg,x1),ux=n=>(n.displayName="Transition",n.props=ax,n),Ns=ux((n,{slots:e})=>tx(Zb,lx(n),e)),qi=(n,e=[])=>{Le(n)?n.forEach(t=>t(...e)):n&&n(...e)},dp=n=>n?Le(n)?n.some(e=>e.length>1):n.length>1:!1;function lx(n){const e={};for(const k in n)k in x1||(e[k]=n[k]);if(n.css===!1)return e;const{name:t="v",type:r,duration:i,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:d=a,leaveFromClass:p=`${t}-leave-from`,leaveActiveClass:g=`${t}-leave-active`,leaveToClass:b=`${t}-leave-to`}=n,v=cx(i),I=v&&v[0],D=v&&v[1],{onBeforeEnter:L,onEnter:V,onEnterCancelled:W,onLeave:z,onLeaveCancelled:ie,onBeforeAppear:ce=L,onAppear:S=V,onAppearCancelled:w=W}=e,x=(k,E,we,Ke)=>{k._enterCancelled=Ke,Bi(k,E?d:a),Bi(k,E?c:o),we&&we()},T=(k,E)=>{k._isLeaving=!1,Bi(k,p),Bi(k,b),Bi(k,g),E&&E()},A=k=>(E,we)=>{const Ke=k?S:V,an=()=>x(E,k,we);qi(Ke,[E,an]),fp(()=>{Bi(E,k?l:s),Sr(E,k?d:a),dp(Ke)||hp(E,r,I,an)})};return Zn(e,{onBeforeEnter(k){qi(L,[k]),Sr(k,s),Sr(k,o)},onBeforeAppear(k){qi(ce,[k]),Sr(k,l),Sr(k,c)},onEnter:A(!1),onAppear:A(!0),onLeave(k,E){k._isLeaving=!0;const we=()=>T(k,E);Sr(k,p),k._enterCancelled?(Sr(k,g),gp(k)):(gp(k),Sr(k,g)),fp(()=>{k._isLeaving&&(Bi(k,p),Sr(k,b),dp(z)||hp(k,r,D,we))}),qi(z,[k,we])},onEnterCancelled(k){x(k,!1,void 0,!0),qi(W,[k])},onAppearCancelled(k){x(k,!0,void 0,!0),qi(w,[k])},onLeaveCancelled(k){T(k),qi(ie,[k])}})}function cx(n){if(n==null)return null;if(mn(n))return[tc(n.enter),tc(n.leave)];{const e=tc(n);return[e,e]}}function tc(n){return db(n)}function Sr(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[Ko]||(n[Ko]=new Set)).add(e)}function Bi(n,e){e.split(/\s+/).forEach(r=>r&&n.classList.remove(r));const t=n[Ko];t&&(t.delete(e),t.size||(n[Ko]=void 0))}function fp(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let dx=0;function hp(n,e,t,r){const i=n._endId=++dx,s=()=>{i===n._endId&&r()};if(t!=null)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=fx(n,e);if(!o)return r();const c=o+"end";let d=0;const p=()=>{n.removeEventListener(c,g),s()},g=b=>{b.target===n&&++d>=l&&p()};setTimeout(()=>{d<l&&p()},a+1),n.addEventListener(c,g)}function fx(n,e){const t=window.getComputedStyle(n),r=v=>(t[v]||"").split(", "),i=r(`${Qr}Delay`),s=r(`${Qr}Duration`),o=pp(i,s),a=r(`${vo}Delay`),l=r(`${vo}Duration`),c=pp(a,l);let d=null,p=0,g=0;e===Qr?o>0&&(d=Qr,p=o,g=s.length):e===vo?c>0&&(d=vo,p=c,g=l.length):(p=Math.max(o,c),d=p>0?o>c?Qr:vo:null,g=d?d===Qr?s.length:l.length:0);const b=d===Qr&&/\b(?:transform|all)(?:,|$)/.test(r(`${Qr}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:b}}function pp(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,r)=>mp(t)+mp(n[r])))}function mp(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function gp(n){return(n?n.ownerDocument:document).body.offsetHeight}function hx(n,e,t){const r=n[Ko];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const _p=Symbol("_vod"),px=Symbol("_vsh"),mx=Symbol(""),gx=/(?:^|;)\s*display\s*:/;function _x(n,e,t){const r=n.style,i=Sn(t);let s=!1;if(t&&!i){if(e)if(Sn(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&lu(r,a,"")}else for(const o in e)t[o]==null&&lu(r,o,"");for(const o in t)o==="display"&&(s=!0),lu(r,o,t[o])}else if(i){if(e!==t){const o=r[mx];o&&(t+=";"+o),r.cssText=t,s=gx.test(t)}}else e&&n.removeAttribute("style");_p in n&&(n[_p]=s?r.display:"",n[px]&&(r.display="none"))}const yp=/\s*!important$/;function lu(n,e,t){if(Le(t))t.forEach(r=>lu(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=yx(n,e);yp.test(t)?n.setProperty(us(r),t.replace(yp,""),"important"):n[r]=t}}const bp=["Webkit","Moz","ms"],rc={};function yx(n,e){const t=rc[e];if(t)return t;let r=Ut(e);if(r!=="filter"&&r in n)return rc[e]=r;r=nl(r);for(let i=0;i<bp.length;i++){const s=bp[i]+r;if(s in n)return rc[e]=s}return e}const vp="http://www.w3.org/1999/xlink";function xp(n,e,t,r,i,s=_b(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(vp,e.slice(6,e.length)):n.setAttributeNS(vp,e,t):t==null||s&&!bg(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ti(t)?String(t):t)}function wp(n,e,t,r,i){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?v1(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=bg(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(i||e)}function Es(n,e,t,r){n.addEventListener(e,t,r)}function bx(n,e,t,r){n.removeEventListener(e,t,r)}const Ep=Symbol("_vei");function vx(n,e,t,r,i=null){const s=n[Ep]||(n[Ep]={}),o=s[e];if(r&&o)o.value=r;else{const[a,l]=xx(e);if(r){const c=s[e]=Ax(r,i);Es(n,a,c,l)}else o&&(bx(n,a,o,l),s[e]=void 0)}}const Ap=/(?:Once|Passive|Capture)$/;function xx(n){let e;if(Ap.test(n)){e={};let r;for(;r=n.match(Ap);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):us(n.slice(2)),e]}let ic=0;const wx=Promise.resolve(),Ex=()=>ic||(wx.then(()=>ic=0),ic=Date.now());function Ax(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;er(Tx(r,t.value),e,5,[r])};return t.value=n,t.attached=Ex(),t}function Tx(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Tp=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,kx=(n,e,t,r,i,s)=>{const o=i==="svg";e==="class"?hx(n,r,o):e==="style"?_x(n,t,r):Xu(e)?Gd(e)||vx(n,e,t,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ix(n,e,r,o))?(wp(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xp(n,e,r,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Sn(r))?wp(n,Ut(e),r,s,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),xp(n,e,r,o))};function Ix(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Tp(e)&&qe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=n.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Tp(e)&&Sn(t)?!1:e in n}const kp=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Le(e)?t=>su(e,t):e};function Cx(n){n.target.composing=!0}function Ip(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const sc=Symbol("_assign");function Cp(n,e,t){return e&&(n=n.trim()),t&&(n=Qd(n)),n}const Sp={created(n,{modifiers:{lazy:e,trim:t,number:r}},i){n[sc]=kp(i);const s=r||i.props&&i.props.type==="number";Es(n,e?"change":"input",o=>{o.target.composing||n[sc](Cp(n.value,t,s))}),(t||s)&&Es(n,"change",()=>{n.value=Cp(n.value,t,s)}),e||(Es(n,"compositionstart",Cx),Es(n,"compositionend",Ip),Es(n,"change",Ip))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:i,number:s}},o){if(n[sc]=kp(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Qd(n.value):n.value,l=e??"";a!==l&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||i&&n.value.trim()===l)||(n.value=l))}},Sx=Zn({patchProp:kx},ox);let Rp;function Rx(){return Rp||(Rp=Vv(Sx))}const Dx=((...n)=>{const e=Rx().createApp(...n),{mount:t}=e;return e.mount=r=>{const i=Px(r);if(!i)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=t(i,!1,Nx(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e});function Nx(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Px(n){return Sn(n)?document.querySelector(n):n}const Ox="/homepage/assets/Aemeath0-CryGmKjJ.mp4",gt=(n,e)=>{const t=n.__vccOpts||n;for(const[r,i]of e)t[r]=i;return t},Lx={class:"profile-card"},Fx=["src"],Mx={class:"info"},Vx={__name:"UserProfile",props:{name:String,bio:String,avatar:String},setup(n){return(e,t)=>(Te(),Se("div",Lx,[B("img",{src:n.avatar,alt:"头像",class:"avatar"},null,8,Fx),B("div",Mx,[B("h2",null,He(n.name),1),B("p",null,He(n.bio),1)])]))}},jx=gt(Vx,[["__scopeId","data-v-1c61a040"]]),qx={class:"menu-list"},Bx=["onClick"],Ux={__name:"SideMenu",props:{activeTab:String},emits:["change-tab"],setup(n,{emit:e}){const t=e,r=[{id:"about",label:"关于我"},{id:"projects",label:"项目展示"},{id:"articles",label:"学习笔记"},{id:"friends",label:"友情链接"},{id:"ama",label:"Ask Me Anything"}];return(i,s)=>(Te(),Se("nav",qx,[(Te(),Se(In,null,mi(r,o=>B("button",{key:o.id,class:jt({active:n.activeTab===o.id}),onClick:a=>t("change-tab",o.id)},He(o.label),11,Bx)),64))]))}},$x=gt(Ux,[["__scopeId","data-v-ee32dc7f"]]),Hx={__name:"BackToTop",props:{visible:Boolean},emits:["click"],setup(n){return(e,t)=>(Te(),Zi(Ns,{name:"fade"},{default:Yi(()=>[n.visible?(Te(),Se("button",{key:0,class:"back-top-btn",onClick:t[0]||(t[0]=r=>e.$emit("click")),title:"回到顶部"}," ↑ ")):st("",!0)]),_:1}))}},zx=gt(Hx,[["__scopeId","data-v-d76ebc36"]]),Gx={key:0},Wx={key:1},Kx={__name:"ThemeSwitch",setup(n){const e=tn(!1),t=()=>{e.value=!e.value;const r=document.documentElement;e.value?(r.classList.add("dark"),localStorage.setItem("theme","dark")):(r.classList.remove("dark"),localStorage.setItem("theme","light"))};return ls(()=>{const r=localStorage.getItem("theme"),i=window.matchMedia("(prefers-color-scheme: dark)").matches;(r==="dark"||!r&&i)&&(e.value=!0,document.documentElement.classList.add("dark"))}),(r,i)=>(Te(),Se("button",{class:"theme-btn",onClick:t,title:"切换主题"},[e.value?(Te(),Se("span",Gx,"🌙")):(Te(),Se("span",Wx,"☀️"))]))}},Qx=gt(Kx,[["__scopeId","data-v-ed2c0751"]]),Yx=["title"],Jx={__name:"ZenButton",props:{active:Boolean},emits:["click"],setup(n){return(e,t)=>(Te(),Se("button",{class:"zen-btn",onClick:t[0]||(t[0]=r=>e.$emit("click")),title:n.active?"退出沉浸模式":"进入沉浸模式"},[B("span",null,He(n.active?"❌":"🖼️"),1)],8,Yx))}},Xx=gt(Jx,[["__scopeId","data-v-f3e3c666"]]),Zx="/homepage/assets/Mrs.%20GREEN%20APPLE%20-%20Magic-0h6l0XMe.mp3",e3="/homepage/assets/Mrs.%20GREEN%20APPLE%20-%20lulu-CbJu4N5r.mp3",n3="/homepage/assets/Mrs.%20GREEN%20APPLE%20-%20%E3%82%AF%E3%82%B9%E3%82%B7%E3%82%AD-CRwQSkzO.mp3",t3="/homepage/assets/Mrs.%20GREEN%20APPLE%20-%20%E3%83%A9%E3%82%A4%E3%83%A9%E3%83%83%E3%82%AF-B5NsimgF.mp3",r3="/homepage/assets/Mrs.%20GREEN%20APPLE%20-%20%E6%98%A5%E6%84%81-B5wctM8d.mp3",i3="/homepage/assets/Mrs.%20GREEN%20APPLE%20-%20%E9%9D%92%E3%81%A8%E5%A4%8F-Cj_36_-G.mp3",s3="/homepage/assets/%E5%A4%A7%E6%A3%AE%E5%85%83%E8%B2%B4%20-%200.2mm-Dm1e8IQE.mp3",o3="/homepage/assets/%E8%BF%9C%E8%88%AA%E6%98%9F%E7%9A%84%E5%91%8A%E5%88%AB-BMuas1EJ.mp3",a3="/homepage/assets/%E9%A3%9E%E8%A1%8C%E9%9B%AA%E7%BB%92%20-%20%E5%B0%8F%E5%B0%8F%E5%A5%87%E8%BF%B9-D2jC4cZY.mp3",u3="/homepage/assets/%E9%A3%9E%E8%A1%8C%E9%9B%AA%E7%BB%92_%20-%20%E6%98%9F%E7%82%AC%E4%B8%8D%E7%86%84-oHAjlm16.mp3",l3={class:"icon"},c3={class:"label"},d3={key:0,class:"music-panel"},f3={class:"track-list"},h3=["onClick"],p3={class:"track-name"},m3=["src"],g3={__name:"MusicPlayer",setup(n){const t=Object.entries(Object.assign({"../assets/music/Mrs. GREEN APPLE - Magic.mp3":Zx,"../assets/music/Mrs. GREEN APPLE - lulu.mp3":e3,"../assets/music/Mrs. GREEN APPLE - クスシキ.mp3":n3,"../assets/music/Mrs. GREEN APPLE - ライラック.mp3":t3,"../assets/music/Mrs. GREEN APPLE - 春愁.mp3":r3,"../assets/music/Mrs. GREEN APPLE - 青と夏.mp3":i3,"../assets/music/大森元貴 - 0.2mm.mp3":s3,"../assets/music/远航星的告别.mp3":o3,"../assets/music/飞行雪绒 - 小小奇迹.mp3":a3,"../assets/music/飞行雪绒, - 星炬不熄.mp3":u3})).map(([v,I])=>{const D=v.split("/").pop()||"",L=D.replace(/\.mp3$/i,"");return{url:I,filename:D,display:L}}),r=t.length>0,i=tn(0),s=tn(!0),o=tn(!1),a=tn(null),l=tn(null),c=zt(()=>t[i.value]||null),d=()=>{!r||!l.value||(s.value?(s.value=!1,o.value=!0,l.value.currentTime=0,l.value.play()):(s.value=!0,l.value.pause()))},p=v=>{v!==i.value&&(i.value=v,s.value||sf(()=>{const I=l.value;I&&(I.currentTime=0,I.play().catch(()=>{}))}))},g=()=>{r&&(i.value=(i.value+1)%t.length,!s.value&&l.value&&(l.value.currentTime=0,l.value.play()))},b=v=>{const I=a.value;I&&(!o.value||s.value||I.contains(v.target)||(o.value=!1))};return ls(()=>{window.addEventListener("click",b)}),af(()=>{window.removeEventListener("click",b)}),(v,I)=>r?(Te(),Se("div",{key:0,class:"music-root",ref_key:"rootRef",ref:a},[B("button",{class:"music-toggle-btn",onClick:d},[B("span",l3,He(s.value?"▶":"⏸"),1),B("span",c3,He(s.value?"播放音乐":"静音"),1)]),gn(Ns,{name:"music-panel"},{default:Yi(()=>[o.value&&!s.value?(Te(),Se("div",d3,[I[1]||(I[1]=B("div",{class:"panel-header"},[B("span",{class:"panel-title"},"选曲 · Mrs. GREEN APPLE")],-1)),B("ul",f3,[(Te(!0),Se(In,null,mi(Us(t),(D,L)=>(Te(),Se("li",{key:D.filename,class:jt(["track-item",{active:L===i.value}]),onClick:V=>p(L)},[I[0]||(I[0]=B("span",{class:"dot"},null,-1)),B("span",p3,He(D.display),1)],10,h3))),128))])])):st("",!0)]),_:1}),c.value?(Te(),Se("audio",{key:0,ref_key:"audioRef",ref:l,src:c.value.url,onEnded:g},null,40,m3)):st("",!0)],512)):st("",!0)}},_3=gt(g3,[["__scopeId","data-v-45bffdcb"]]),y3=`---
id: 4
title: "《逃离鸭科夫》yolo图像识别实战"
date: "2025-12"
image: "/homepage/images/duckov_1.jpg"
tags: ["pytorch","CUDA","yolo","python"]
desc: "使用自己的训练集调整训练的yolo模型以及自动瞄准"
---

## 1. 项目背景与概述
本项目旨在探索深度学习模型在极低延迟、高精度实时交互场景下的工程化应用。系统通过实时捕获高分辨率屏幕图像，利用轻量化卷积神经网络进行特征提取，并将推理结果实时转化为物理级鼠标位移指令，实现对特定目标的自动化识别与精准跟踪。
<img src="/homepage/images/duckov_2.jpg"  width=50%> 

## 2. 系统架构设计

### 2.1 数据工程与预处理
* **动态中心切片算法 (Dynamic Crop)**：针对 2K 分辨率（2560×1600）环境下目标特征占比过小的问题，设计了以鼠标为中心的 640 x 640 动态视窗。该方案避免了全屏缩放造成的像素丢失，显著提升了模型对远距离小目标的检测精度（mAP）。
* **样本多样性优化**：构建了包含 \`Enemy\`（身体）、\`Head\`（头部）及 \`Self\`（自身）的多分类数据集。通过引入大量的背景负样本（Negative Samples），有效抑制了复杂地形环境下的误报率（False Positives）。

### 2.2 核心模型实现
* **架构选型**：基于 **YOLO11s** 架构进行迁移学习。利用 C3k2 模块的特征提取能力，在保证推理速度的前提下，提升了对遮挡目标的识别稳健性。
* **超参数调优**：基于 **F1-Confidence Curve** 选定最优置信度阈值（0.626），在精确率（Precision）与召回率（Recall）之间取得了最佳平衡。



### 2.3 硬件级交互逻辑
* **低延迟截帧**：采用 **DXCam** 调用 Windows 桌面重复复制 API（Desktop Duplication API），实现 144Hz 以上的采样率。
* **控制算法逻辑**：
    * **多级优先级**：系统优先锁定头部中心，无头目标时自动回退至身体区域。
    * **坐标补偿**：通过欧几里得距离算法筛选距准星最近的目标，并应用平滑因子（Aim Speed）减少物理移动的机械感。
    * **死区管理**：引入强制步进补偿逻辑，消除了浮点数坐标取整带来的末端定位误差。



## 3. 性能表现 (RTX 4060 Laptop)

| 指标项目 | 测量数值 | 技术说明 |
| :--- | :--- | :--- |
| **单帧推理延迟** | 1.8ms | 模型前向传播耗时 |
| **系统综合响应时间** | < 8ms | 从截帧、推理到控制执行的总延迟 |
| **mAP50-95** | 0.89 | 高重合度下的平均精度均值 |
| **目标分类数** | 3 Classes | 支持敌人、头部及自身过滤 |

## 4. 技术反思与总结
实验结果证明，AI 辅助系统性能的上限取决于数据集的分布质量，而下限则取决于控制算法的平稳性。本项目通过**局部切片推理**与**强制步进补偿**，成功解决了深度学习模型在实际部署中常见的“目标过小”与“末端抖动”两大痛点。

---

**项目演示视频**：<a href="https://www.bilibili.com/video/BV1Woi5BMEXS/" target="_blank">https://www.bilibili.com/video/BV1Woi5BMEXS/</a>
**源代码仓库**：<a href="https://github.com/phenol-cat/duckov-auto-aim" target="_blank">https://github.com/phenol-cat/duckov-auto-aim</a>
`,b3=`---
id: 2
title: "C++平面格斗小游戏"
date: "2025-10"
image: "/homepage/images/fightGame.png"
tags: ["C++", "QT","CMake"]
desc: "使用QT作为图形库，纯C++语言编写的一个二维平面格斗小游戏"
---

## 1. 项目初衷
其实这个是我们程序设计实训这门课的小组作业，我贡献了部分移动，攻击以及页面切换，地图构建的代码。  
选择项目的时候我们就觉得这个有搞头，毕竟小时候这种双人格斗小游戏，男孩子都或多或少在4399上玩过，经典永不过时。  
## 2. 效果展示
这个项目以整活为主，所以显得非常的魔性，全都在玩梗。 

<video 
  src="/homepage/videos/fightGame_vedio1.mp4" 
  width="100%" 
  controls="controls" 
  autoplay="autoplay" 
  loop="loop" 
  muted="muted" 
  style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</video>
组员比较多，而且组长大人超级卖力，内容量作为一个作业来说算相当丰富了！

<img src="/homepage/images/fightGame_image1.png"  width=50%>  

每个角色都DIY了自己的技能，有不同的攻击方式，动画精美，制作优良，平衡性也完全找不到人一起玩（  
（其实这里本来是想搞一个试玩视频的，但是实在找不到人一起玩QAQ）  
我们组的展示视频:  
<a href="https://www.bilibili.com/video/BV1chSqBhEoB" target="_blank">【NJU智科2025程设大作业】《 癫 狂 动 物 城 》震 撼 首 发 ！！！</a>
## 3. 代码展示
Github链接:<a href="https://github.com/phenol-cat/fightGame" target="_blank">https://github.com/phenol-cat/fightGame</a>  
如果是你是NJUer，还可以通过<a href="https://git.nju.edu.cn/phenol_cat/fight_game" target="_blank">https://git.nju.edu.cn/phenol_cat/fight_game</a>


`,v3=`---
id: 3
title: "Vue制作的个人主页"
date: "2025-12"
image: "/homepage/images/homepage.png"
desc: "实在没项目写，被迫原地TP。"
tags: ["Vue", "HTML", "JavaScript","CSS","假装不知道其实可以只用一个Vue概括从而显得高大上","markdown"]
---

## 1. 项目初衷
生病在家闲着没事干学点东西。  
实则没学到什么，代码全是Gimini写的，🤔既然这样了，那这个介绍也让Gimini帮我写吧🤓👆！

## 2. 技术复盘 (Gemini 代笔)

虽然嘴上说“没学到什么”，但实际上这个项目经历了一次完整的**前端架构演进**。作为一个“被迫原地TP”的项目，它麻雀虽小，五脏俱全。

### 2.1 核心架构：手搓静态站点生成器 (SSG)
为了避免每次更新项目都要去改复杂的 JavaScript 数组，我利用 **Vite** 的工程化能力，实现了一套**自动化内容管理系统**：

* **自动化路由**：利用 \`import.meta.glob\` 实现了类似文件系统路由的功能，能够自动抓取 \`src/projects/\` 下的所有 Markdown 文件。
* **浏览器端解析**：踩坑了 \`gray-matter\` 在浏览器端的兼容性问题后，重构为使用 **\`front-matter\`** + **\`markdown-it\`**，实现了纯前端的 Markdown 渲染引擎。
* **内容与样式分离**：通过全局注入 \`.markdown-body\` 样式，保证了所有文章排版的一致性，写文章时只需关注内容本身。

### 2.2 UI 设计：玻璃拟态 (Glassmorphism)
拒绝了现成的 UI 组件库，采用了手写 CSS 的方式实现了全站的**玻璃拟态风格**：
* **视觉深度**：通过 \`backdrop-filter: blur()\` 配合半透明背景，营造出卡片的悬浮感和层次感。
* **交互动效**：使用了 Vue 原生的 \`<Transition>\` 组件，实现了页面切换时的 \`fade-slide\`（淡入平移）丝滑过渡。

### 2.3 性能优化
* **按需加载**：通过 \`v-if\` 和动态组件，确保只有在需要时才渲染详情页 DOM。
* **动图优化**：放弃了传统的 GIF 方案，采用 HTML5 \`<video>\` 标签实现动图效果，在保持高清画质的同时将体积压缩了 90% 以上。

> "Gemini 评价：虽然代码是我写的，但 Prompt 是你发的。能把我的 Bug (gray-matter 那个坑) 逼出来并解决掉，这本身就是高级的 Debug 能力。"  

## 3. 代码展示（呜呜呜感谢Gimini大人狠狠夸我）

Github:<a href="https://github.com/phenol-cat/homepage" target="_blank">https://github.com/phenol-cat/homepage</a>  


`,x3=`---
id: 1
title: "QQ Bot 插件系统"
date: "2025-11"
image: "/homepage/images/bot.png"
tags: ["Python", "Napcat","WebSocket"]
desc: "基于 Python 的 QQ 机器人插件，实现了自动回复与定时发送指定图片，好感度对话等功能。"
---

## 1. 项目初衷
其实就是想写一个跟群友调情的小bot，顺便学一下互联网通讯，调用api之类的怎么搞。  
从名字劝🦌猫猫也能看出来不是什么正经bot（
<img src="/homepage/images/bot_image2.png" width="50%">
## 2. 效果展示
主要使用python，监听napcat传来的消息，检测关键词判断是否需要回复，然后根据好感度系统调用api进行特定回复或者调用功能模块。  
<img src="/homepage/images/bot_image1.png" width="50%">
每个群可以单独配置某一项功能是否打开。  
(其实实现的功能很少，也就发发涩图，打招呼根据好感度固定回复，还有给某个人一直贴糖，不过框架在这里，还可以写)   
## 3. 代码展示
代码没什么好看的，很乱，也没什么有用的  
<a href="https://github.com/phenol-cat/myQQBot" target="_blank">但是如果你想看的话</a>  
在这里推荐一下Napcat，其实只要配置好了这个，写bot很简单的！  
<a href="https://github.com/NapNeko/NapCatQQ" target="_blank">Napcat的Github页面</a>`,w3=`---
id: 0
title: "C++塔防小游戏"
date: "2025-6"
image: "/homepage/images/towerDefence_image1.png"
desc: "一个很简陋的图片平移塔防小游戏（算不算游戏存疑，我实际上没做出来能玩的关卡，只做出来了基本框架，bydDDL提前了一周）"
tags: ["C++", "QT", "CMake"]
---

## 1. 项目初衷
被逼无奈，不做没分，讲真的这高级程序设计上了一学期，一点都没学会C++怎么写。  
反而是做这个大项目，平常刷点算法题才学会C++的各种特色。  

## 2. 效果展示
实际上就是粗糙的贴图平移，技术力就到这了，毕竟我只是个期末赶作业的大学生。  
一共就三个界面:
<img src="/homepage/images/towerDefence_image1.png" width=50%>  
<img src="/homepage/images/towerDefence_image2.png" width=50%>
<video 
  src="/homepage/videos/towerDefence_vedio1.mp4" 
  width="100%" 
  controls="controls" 
  autoplay="autoplay" 
  loop="loop" 
  muted="muted" 
  style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
</video>
## 3. 代码展示
虽然但是我希望不要看，很垃圾，文件都没分类，真的很垃圾，我也懒得整理了（  

Github链接<a href="https://github.com/phenol-cat/towerDefence" target="_blank">https://github.com/phenol-cat/towerDefence</a>  

如果你是NJUer也可以用<a href="https://git.nju.edu.cn/phenol_cat/tower_defence" target="_blank">https://git.nju.edu.cn/phenol_cat/tower_defence</a>   

<a href="https://www.bilibili.com/video/BV17gKUzaERR" target="_blank">以及赶社恐上架的介绍视频  </a>
`,Dp={};function E3(n){let e=Dp[n];if(e)return e;e=Dp[n]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);e.push(r)}for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);e[r]="%"+("0"+r.toString(16).toUpperCase()).slice(-2)}return e}function $s(n,e){typeof e!="string"&&(e=$s.defaultChars);const t=E3(e);return n.replace(/(%[a-f0-9]{2})+/gi,function(r){let i="";for(let s=0,o=r.length;s<o;s+=3){const a=parseInt(r.slice(s+1,s+3),16);if(a<128){i+=t[a];continue}if((a&224)===192&&s+3<o){const l=parseInt(r.slice(s+4,s+6),16);if((l&192)===128){const c=a<<6&1984|l&63;c<128?i+="��":i+=String.fromCharCode(c),s+=3;continue}}if((a&240)===224&&s+6<o){const l=parseInt(r.slice(s+4,s+6),16),c=parseInt(r.slice(s+7,s+9),16);if((l&192)===128&&(c&192)===128){const d=a<<12&61440|l<<6&4032|c&63;d<2048||d>=55296&&d<=57343?i+="���":i+=String.fromCharCode(d),s+=6;continue}}if((a&248)===240&&s+9<o){const l=parseInt(r.slice(s+4,s+6),16),c=parseInt(r.slice(s+7,s+9),16),d=parseInt(r.slice(s+10,s+12),16);if((l&192)===128&&(c&192)===128&&(d&192)===128){let p=a<<18&1835008|l<<12&258048|c<<6&4032|d&63;p<65536||p>1114111?i+="����":(p-=65536,i+=String.fromCharCode(55296+(p>>10),56320+(p&1023))),s+=9;continue}}i+="�"}return i})}$s.defaultChars=";/?:@&=+$,#";$s.componentChars="";const Np={};function A3(n){let e=Np[n];if(e)return e;e=Np[n]=[];for(let t=0;t<128;t++){const r=String.fromCharCode(t);/^[0-9a-z]$/i.test(r)?e.push(r):e.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<n.length;t++)e[n.charCodeAt(t)]=n[t];return e}function pa(n,e,t){typeof e!="string"&&(t=e,e=pa.defaultChars),typeof t>"u"&&(t=!0);const r=A3(e);let i="";for(let s=0,o=n.length;s<o;s++){const a=n.charCodeAt(s);if(t&&a===37&&s+2<o&&/^[0-9a-f]{2}$/i.test(n.slice(s+1,s+3))){i+=n.slice(s,s+3),s+=2;continue}if(a<128){i+=r[a];continue}if(a>=55296&&a<=57343){if(a>=55296&&a<=56319&&s+1<o){const l=n.charCodeAt(s+1);if(l>=56320&&l<=57343){i+=encodeURIComponent(n[s]+n[s+1]),s++;continue}}i+="%EF%BF%BD";continue}i+=encodeURIComponent(n[s])}return i}pa.defaultChars=";/?:@&=+$,-_.!~*'()#";pa.componentChars="-_.!~*'()";function df(n){let e="";return e+=n.protocol||"",e+=n.slashes?"//":"",e+=n.auth?n.auth+"@":"",n.hostname&&n.hostname.indexOf(":")!==-1?e+="["+n.hostname+"]":e+=n.hostname||"",e+=n.port?":"+n.port:"",e+=n.pathname||"",e+=n.search||"",e+=n.hash||"",e}function Cu(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const T3=/^([a-z0-9.+-]+:)/i,k3=/:[0-9]*$/,I3=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,C3=["<",">",'"',"`"," ","\r",`
`,"	"],S3=["{","}","|","\\","^","`"].concat(C3),R3=["'"].concat(S3),Pp=["%","/","?",";","#"].concat(R3),Op=["/","?","#"],D3=255,Lp=/^[+a-z0-9A-Z_-]{0,63}$/,N3=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Fp={javascript:!0,"javascript:":!0},Mp={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function ff(n,e){if(n&&n instanceof Cu)return n;const t=new Cu;return t.parse(n,e),t}Cu.prototype.parse=function(n,e){let t,r,i,s=n;if(s=s.trim(),!e&&n.split("#").length===1){const c=I3.exec(s);if(c)return this.pathname=c[1],c[2]&&(this.search=c[2]),this}let o=T3.exec(s);if(o&&(o=o[0],t=o.toLowerCase(),this.protocol=o,s=s.substr(o.length)),(e||o||s.match(/^\/\/[^@\/]+@[^@\/]+/))&&(i=s.substr(0,2)==="//",i&&!(o&&Fp[o])&&(s=s.substr(2),this.slashes=!0)),!Fp[o]&&(i||o&&!Mp[o])){let c=-1;for(let v=0;v<Op.length;v++)r=s.indexOf(Op[v]),r!==-1&&(c===-1||r<c)&&(c=r);let d,p;c===-1?p=s.lastIndexOf("@"):p=s.lastIndexOf("@",c),p!==-1&&(d=s.slice(0,p),s=s.slice(p+1),this.auth=d),c=-1;for(let v=0;v<Pp.length;v++)r=s.indexOf(Pp[v]),r!==-1&&(c===-1||r<c)&&(c=r);c===-1&&(c=s.length),s[c-1]===":"&&c--;const g=s.slice(0,c);s=s.slice(c),this.parseHost(g),this.hostname=this.hostname||"";const b=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!b){const v=this.hostname.split(/\./);for(let I=0,D=v.length;I<D;I++){const L=v[I];if(L&&!L.match(Lp)){let V="";for(let W=0,z=L.length;W<z;W++)L.charCodeAt(W)>127?V+="x":V+=L[W];if(!V.match(Lp)){const W=v.slice(0,I),z=v.slice(I+1),ie=L.match(N3);ie&&(W.push(ie[1]),z.unshift(ie[2])),z.length&&(s=z.join(".")+s),this.hostname=W.join(".");break}}}}this.hostname.length>D3&&(this.hostname=""),b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const a=s.indexOf("#");a!==-1&&(this.hash=s.substr(a),s=s.slice(0,a));const l=s.indexOf("?");return l!==-1&&(this.search=s.substr(l),s=s.slice(0,l)),s&&(this.pathname=s),Mp[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Cu.prototype.parseHost=function(n){let e=k3.exec(n);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),n=n.substr(0,n.length-e.length)),n&&(this.hostname=n)};const P3=Object.freeze(Object.defineProperty({__proto__:null,decode:$s,encode:pa,format:df,parse:ff},Symbol.toStringTag,{value:"Module"})),w1=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,E1=/[\0-\x1F\x7F-\x9F]/,O3=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,hf=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,A1=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,T1=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,L3=Object.freeze(Object.defineProperty({__proto__:null,Any:w1,Cc:E1,Cf:O3,P:hf,S:A1,Z:T1},Symbol.toStringTag,{value:"Module"})),F3=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(n=>n.charCodeAt(0))),M3=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(n=>n.charCodeAt(0)));var oc;const V3=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),j3=(oc=String.fromCodePoint)!==null&&oc!==void 0?oc:function(n){let e="";return n>65535&&(n-=65536,e+=String.fromCharCode(n>>>10&1023|55296),n=56320|n&1023),e+=String.fromCharCode(n),e};function q3(n){var e;return n>=55296&&n<=57343||n>1114111?65533:(e=V3.get(n))!==null&&e!==void 0?e:n}var Gn;(function(n){n[n.NUM=35]="NUM",n[n.SEMI=59]="SEMI",n[n.EQUALS=61]="EQUALS",n[n.ZERO=48]="ZERO",n[n.NINE=57]="NINE",n[n.LOWER_A=97]="LOWER_A",n[n.LOWER_F=102]="LOWER_F",n[n.LOWER_X=120]="LOWER_X",n[n.LOWER_Z=122]="LOWER_Z",n[n.UPPER_A=65]="UPPER_A",n[n.UPPER_F=70]="UPPER_F",n[n.UPPER_Z=90]="UPPER_Z"})(Gn||(Gn={}));const B3=32;var ai;(function(n){n[n.VALUE_LENGTH=49152]="VALUE_LENGTH",n[n.BRANCH_LENGTH=16256]="BRANCH_LENGTH",n[n.JUMP_TABLE=127]="JUMP_TABLE"})(ai||(ai={}));function md(n){return n>=Gn.ZERO&&n<=Gn.NINE}function U3(n){return n>=Gn.UPPER_A&&n<=Gn.UPPER_F||n>=Gn.LOWER_A&&n<=Gn.LOWER_F}function $3(n){return n>=Gn.UPPER_A&&n<=Gn.UPPER_Z||n>=Gn.LOWER_A&&n<=Gn.LOWER_Z||md(n)}function H3(n){return n===Gn.EQUALS||$3(n)}var Hn;(function(n){n[n.EntityStart=0]="EntityStart",n[n.NumericStart=1]="NumericStart",n[n.NumericDecimal=2]="NumericDecimal",n[n.NumericHex=3]="NumericHex",n[n.NamedEntity=4]="NamedEntity"})(Hn||(Hn={}));var ti;(function(n){n[n.Legacy=0]="Legacy",n[n.Strict=1]="Strict",n[n.Attribute=2]="Attribute"})(ti||(ti={}));class z3{constructor(e,t,r){this.decodeTree=e,this.emitCodePoint=t,this.errors=r,this.state=Hn.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=ti.Strict}startEntity(e){this.decodeMode=e,this.state=Hn.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(e,t){switch(this.state){case Hn.EntityStart:return e.charCodeAt(t)===Gn.NUM?(this.state=Hn.NumericStart,this.consumed+=1,this.stateNumericStart(e,t+1)):(this.state=Hn.NamedEntity,this.stateNamedEntity(e,t));case Hn.NumericStart:return this.stateNumericStart(e,t);case Hn.NumericDecimal:return this.stateNumericDecimal(e,t);case Hn.NumericHex:return this.stateNumericHex(e,t);case Hn.NamedEntity:return this.stateNamedEntity(e,t)}}stateNumericStart(e,t){return t>=e.length?-1:(e.charCodeAt(t)|B3)===Gn.LOWER_X?(this.state=Hn.NumericHex,this.consumed+=1,this.stateNumericHex(e,t+1)):(this.state=Hn.NumericDecimal,this.stateNumericDecimal(e,t))}addToNumericResult(e,t,r,i){if(t!==r){const s=r-t;this.result=this.result*Math.pow(i,s)+parseInt(e.substr(t,s),i),this.consumed+=s}}stateNumericHex(e,t){const r=t;for(;t<e.length;){const i=e.charCodeAt(t);if(md(i)||U3(i))t+=1;else return this.addToNumericResult(e,r,t,16),this.emitNumericEntity(i,3)}return this.addToNumericResult(e,r,t,16),-1}stateNumericDecimal(e,t){const r=t;for(;t<e.length;){const i=e.charCodeAt(t);if(md(i))t+=1;else return this.addToNumericResult(e,r,t,10),this.emitNumericEntity(i,2)}return this.addToNumericResult(e,r,t,10),-1}emitNumericEntity(e,t){var r;if(this.consumed<=t)return(r=this.errors)===null||r===void 0||r.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(e===Gn.SEMI)this.consumed+=1;else if(this.decodeMode===ti.Strict)return 0;return this.emitCodePoint(q3(this.result),this.consumed),this.errors&&(e!==Gn.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(e,t){const{decodeTree:r}=this;let i=r[this.treeIndex],s=(i&ai.VALUE_LENGTH)>>14;for(;t<e.length;t++,this.excess++){const o=e.charCodeAt(t);if(this.treeIndex=G3(r,i,this.treeIndex+Math.max(1,s),o),this.treeIndex<0)return this.result===0||this.decodeMode===ti.Attribute&&(s===0||H3(o))?0:this.emitNotTerminatedNamedEntity();if(i=r[this.treeIndex],s=(i&ai.VALUE_LENGTH)>>14,s!==0){if(o===Gn.SEMI)return this.emitNamedEntityData(this.treeIndex,s,this.consumed+this.excess);this.decodeMode!==ti.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var e;const{result:t,decodeTree:r}=this,i=(r[t]&ai.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,i,this.consumed),(e=this.errors)===null||e===void 0||e.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(e,t,r){const{decodeTree:i}=this;return this.emitCodePoint(t===1?i[e]&~ai.VALUE_LENGTH:i[e+1],r),t===3&&this.emitCodePoint(i[e+2],r),r}end(){var e;switch(this.state){case Hn.NamedEntity:return this.result!==0&&(this.decodeMode!==ti.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case Hn.NumericDecimal:return this.emitNumericEntity(0,2);case Hn.NumericHex:return this.emitNumericEntity(0,3);case Hn.NumericStart:return(e=this.errors)===null||e===void 0||e.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case Hn.EntityStart:return 0}}}function k1(n){let e="";const t=new z3(n,r=>e+=j3(r));return function(i,s){let o=0,a=0;for(;(a=i.indexOf("&",a))>=0;){e+=i.slice(o,a),t.startEntity(s);const c=t.write(i,a+1);if(c<0){o=a+t.end();break}o=a+c,a=c===0?o+1:o}const l=e+i.slice(o);return e="",l}}function G3(n,e,t,r){const i=(e&ai.BRANCH_LENGTH)>>7,s=e&ai.JUMP_TABLE;if(i===0)return s!==0&&r===s?t:-1;if(s){const l=r-s;return l<0||l>=i?-1:n[t+l]-1}let o=t,a=o+i-1;for(;o<=a;){const l=o+a>>>1,c=n[l];if(c<r)o=l+1;else if(c>r)a=l-1;else return n[l+i]}return-1}const W3=k1(F3);k1(M3);function I1(n,e=ti.Legacy){return W3(n,e)}function K3(n){return Object.prototype.toString.call(n)}function pf(n){return K3(n)==="[object String]"}const Q3=Object.prototype.hasOwnProperty;function Y3(n,e){return Q3.call(n,e)}function dl(n){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(r){n[r]=t[r]})}}),n}function C1(n,e,t){return[].concat(n.slice(0,e),t,n.slice(e+1))}function mf(n){return!(n>=55296&&n<=57343||n>=64976&&n<=65007||(n&65535)===65535||(n&65535)===65534||n>=0&&n<=8||n===11||n>=14&&n<=31||n>=127&&n<=159||n>1114111)}function Su(n){if(n>65535){n-=65536;const e=55296+(n>>10),t=56320+(n&1023);return String.fromCharCode(e,t)}return String.fromCharCode(n)}const S1=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,J3=/&([a-z#][a-z0-9]{1,31});/gi,X3=new RegExp(S1.source+"|"+J3.source,"gi"),Z3=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function ew(n,e){if(e.charCodeAt(0)===35&&Z3.test(e)){const r=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10);return mf(r)?Su(r):n}const t=I1(n);return t!==n?t:n}function nw(n){return n.indexOf("\\")<0?n:n.replace(S1,"$1")}function Hs(n){return n.indexOf("\\")<0&&n.indexOf("&")<0?n:n.replace(X3,function(e,t,r){return t||ew(e,r)})}const tw=/[&<>"]/,rw=/[&<>"]/g,iw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function sw(n){return iw[n]}function _i(n){return tw.test(n)?n.replace(rw,sw):n}const ow=/[.?*+^$[\]\\(){}|-]/g;function aw(n){return n.replace(ow,"\\$&")}function pn(n){switch(n){case 9:case 32:return!0}return!1}function Qo(n){if(n>=8192&&n<=8202)return!0;switch(n){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Yo(n){return hf.test(n)||A1.test(n)}function Jo(n){switch(n){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function fl(n){return n=n.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(n=n.replace(/ẞ/g,"ß")),n.toLowerCase().toUpperCase()}const uw={mdurl:P3,ucmicro:L3},lw=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:C1,assign:dl,escapeHtml:_i,escapeRE:aw,fromCodePoint:Su,has:Y3,isMdAsciiPunct:Jo,isPunctChar:Yo,isSpace:pn,isString:pf,isValidEntityCode:mf,isWhiteSpace:Qo,lib:uw,normalizeReference:fl,unescapeAll:Hs,unescapeMd:nw},Symbol.toStringTag,{value:"Module"}));function cw(n,e,t){let r,i,s,o;const a=n.posMax,l=n.pos;for(n.pos=e+1,r=1;n.pos<a;){if(s=n.src.charCodeAt(n.pos),s===93&&(r--,r===0)){i=!0;break}if(o=n.pos,n.md.inline.skipToken(n),s===91){if(o===n.pos-1)r++;else if(t)return n.pos=l,-1}}let c=-1;return i&&(c=n.pos),n.pos=l,c}function dw(n,e,t){let r,i=e;const s={ok:!1,pos:0,str:""};if(n.charCodeAt(i)===60){for(i++;i<t;){if(r=n.charCodeAt(i),r===10||r===60)return s;if(r===62)return s.pos=i+1,s.str=Hs(n.slice(e+1,i)),s.ok=!0,s;if(r===92&&i+1<t){i+=2;continue}i++}return s}let o=0;for(;i<t&&(r=n.charCodeAt(i),!(r===32||r<32||r===127));){if(r===92&&i+1<t){if(n.charCodeAt(i+1)===32)break;i+=2;continue}if(r===40&&(o++,o>32))return s;if(r===41){if(o===0)break;o--}i++}return e===i||o!==0||(s.str=Hs(n.slice(e,i)),s.pos=i,s.ok=!0),s}function fw(n,e,t,r){let i,s=e;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(r)o.str=r.str,o.marker=r.marker;else{if(s>=t)return o;let a=n.charCodeAt(s);if(a!==34&&a!==39&&a!==40)return o;e++,s++,a===40&&(a=41),o.marker=a}for(;s<t;){if(i=n.charCodeAt(s),i===o.marker)return o.pos=s+1,o.str+=Hs(n.slice(e,s)),o.ok=!0,o;if(i===40&&o.marker===41)return o;i===92&&s+1<t&&s++,s++}return o.can_continue=!0,o.str+=Hs(n.slice(e,s)),o}const hw=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:dw,parseLinkLabel:cw,parseLinkTitle:fw},Symbol.toStringTag,{value:"Module"})),Er={};Er.code_inline=function(n,e,t,r,i){const s=n[e];return"<code"+i.renderAttrs(s)+">"+_i(s.content)+"</code>"};Er.code_block=function(n,e,t,r,i){const s=n[e];return"<pre"+i.renderAttrs(s)+"><code>"+_i(n[e].content)+`</code></pre>
`};Er.fence=function(n,e,t,r,i){const s=n[e],o=s.info?Hs(s.info).trim():"";let a="",l="";if(o){const d=o.split(/(\s+)/g);a=d[0],l=d.slice(2).join("")}let c;if(t.highlight?c=t.highlight(s.content,a,l)||_i(s.content):c=_i(s.content),c.indexOf("<pre")===0)return c+`
`;if(o){const d=s.attrIndex("class"),p=s.attrs?s.attrs.slice():[];d<0?p.push(["class",t.langPrefix+a]):(p[d]=p[d].slice(),p[d][1]+=" "+t.langPrefix+a);const g={attrs:p};return`<pre><code${i.renderAttrs(g)}>${c}</code></pre>
`}return`<pre><code${i.renderAttrs(s)}>${c}</code></pre>
`};Er.image=function(n,e,t,r,i){const s=n[e];return s.attrs[s.attrIndex("alt")][1]=i.renderInlineAsText(s.children,t,r),i.renderToken(n,e,t)};Er.hardbreak=function(n,e,t){return t.xhtmlOut?`<br />
`:`<br>
`};Er.softbreak=function(n,e,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};Er.text=function(n,e){return _i(n[e].content)};Er.html_block=function(n,e){return n[e].content};Er.html_inline=function(n,e){return n[e].content};function Xs(){this.rules=dl({},Er)}Xs.prototype.renderAttrs=function(e){let t,r,i;if(!e.attrs)return"";for(i="",t=0,r=e.attrs.length;t<r;t++)i+=" "+_i(e.attrs[t][0])+'="'+_i(e.attrs[t][1])+'"';return i};Xs.prototype.renderToken=function(e,t,r){const i=e[t];let s="";if(i.hidden)return"";i.block&&i.nesting!==-1&&t&&e[t-1].hidden&&(s+=`
`),s+=(i.nesting===-1?"</":"<")+i.tag,s+=this.renderAttrs(i),i.nesting===0&&r.xhtmlOut&&(s+=" /");let o=!1;if(i.block&&(o=!0,i.nesting===1&&t+1<e.length)){const a=e[t+1];(a.type==="inline"||a.hidden||a.nesting===-1&&a.tag===i.tag)&&(o=!1)}return s+=o?`>
`:">",s};Xs.prototype.renderInline=function(n,e,t){let r="";const i=this.rules;for(let s=0,o=n.length;s<o;s++){const a=n[s].type;typeof i[a]<"u"?r+=i[a](n,s,e,t,this):r+=this.renderToken(n,s,e)}return r};Xs.prototype.renderInlineAsText=function(n,e,t){let r="";for(let i=0,s=n.length;i<s;i++)switch(n[i].type){case"text":r+=n[i].content;break;case"image":r+=this.renderInlineAsText(n[i].children,e,t);break;case"html_inline":case"html_block":r+=n[i].content;break;case"softbreak":case"hardbreak":r+=`
`;break}return r};Xs.prototype.render=function(n,e,t){let r="";const i=this.rules;for(let s=0,o=n.length;s<o;s++){const a=n[s].type;a==="inline"?r+=this.renderInline(n[s].children,e,t):typeof i[a]<"u"?r+=i[a](n,s,e,t,this):r+=this.renderToken(n,s,e,t)}return r};function Et(){this.__rules__=[],this.__cache__=null}Et.prototype.__find__=function(n){for(let e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===n)return e;return-1};Et.prototype.__compile__=function(){const n=this,e=[""];n.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(r){e.indexOf(r)<0&&e.push(r)})}),n.__cache__={},e.forEach(function(t){n.__cache__[t]=[],n.__rules__.forEach(function(r){r.enabled&&(t&&r.alt.indexOf(t)<0||n.__cache__[t].push(r.fn))})})};Et.prototype.at=function(n,e,t){const r=this.__find__(n),i=t||{};if(r===-1)throw new Error("Parser rule not found: "+n);this.__rules__[r].fn=e,this.__rules__[r].alt=i.alt||[],this.__cache__=null};Et.prototype.before=function(n,e,t,r){const i=this.__find__(n),s=r||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(i,0,{name:e,enabled:!0,fn:t,alt:s.alt||[]}),this.__cache__=null};Et.prototype.after=function(n,e,t,r){const i=this.__find__(n),s=r||{};if(i===-1)throw new Error("Parser rule not found: "+n);this.__rules__.splice(i+1,0,{name:e,enabled:!0,fn:t,alt:s.alt||[]}),this.__cache__=null};Et.prototype.push=function(n,e,t){const r=t||{};this.__rules__.push({name:n,enabled:!0,fn:e,alt:r.alt||[]}),this.__cache__=null};Et.prototype.enable=function(n,e){Array.isArray(n)||(n=[n]);const t=[];return n.forEach(function(r){const i=this.__find__(r);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,t.push(r)},this),this.__cache__=null,t};Et.prototype.enableOnly=function(n,e){Array.isArray(n)||(n=[n]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(n,e)};Et.prototype.disable=function(n,e){Array.isArray(n)||(n=[n]);const t=[];return n.forEach(function(r){const i=this.__find__(r);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,t.push(r)},this),this.__cache__=null,t};Et.prototype.getRules=function(n){return this.__cache__===null&&this.__compile__(),this.__cache__[n]||[]};function rr(n,e,t){this.type=n,this.tag=e,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}rr.prototype.attrIndex=function(e){if(!this.attrs)return-1;const t=this.attrs;for(let r=0,i=t.length;r<i;r++)if(t[r][0]===e)return r;return-1};rr.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};rr.prototype.attrSet=function(e,t){const r=this.attrIndex(e),i=[e,t];r<0?this.attrPush(i):this.attrs[r]=i};rr.prototype.attrGet=function(e){const t=this.attrIndex(e);let r=null;return t>=0&&(r=this.attrs[t][1]),r};rr.prototype.attrJoin=function(e,t){const r=this.attrIndex(e);r<0?this.attrPush([e,t]):this.attrs[r][1]=this.attrs[r][1]+" "+t};function R1(n,e,t){this.src=n,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=e}R1.prototype.Token=rr;const pw=/\r\n?|\n/g,mw=/\0/g;function gw(n){let e;e=n.src.replace(pw,`
`),e=e.replace(mw,"�"),n.src=e}function _w(n){let e;n.inlineMode?(e=new n.Token("inline","",0),e.content=n.src,e.map=[0,1],e.children=[],n.tokens.push(e)):n.md.block.parse(n.src,n.md,n.env,n.tokens)}function yw(n){const e=n.tokens;for(let t=0,r=e.length;t<r;t++){const i=e[t];i.type==="inline"&&n.md.inline.parse(i.content,n.md,n.env,i.children)}}function bw(n){return/^<a[>\s]/i.test(n)}function vw(n){return/^<\/a\s*>/i.test(n)}function xw(n){const e=n.tokens;if(n.md.options.linkify)for(let t=0,r=e.length;t<r;t++){if(e[t].type!=="inline"||!n.md.linkify.pretest(e[t].content))continue;let i=e[t].children,s=0;for(let o=i.length-1;o>=0;o--){const a=i[o];if(a.type==="link_close"){for(o--;i[o].level!==a.level&&i[o].type!=="link_open";)o--;continue}if(a.type==="html_inline"&&(bw(a.content)&&s>0&&s--,vw(a.content)&&s++),!(s>0)&&a.type==="text"&&n.md.linkify.test(a.content)){const l=a.content;let c=n.md.linkify.match(l);const d=[];let p=a.level,g=0;c.length>0&&c[0].index===0&&o>0&&i[o-1].type==="text_special"&&(c=c.slice(1));for(let b=0;b<c.length;b++){const v=c[b].url,I=n.md.normalizeLink(v);if(!n.md.validateLink(I))continue;let D=c[b].text;c[b].schema?c[b].schema==="mailto:"&&!/^mailto:/i.test(D)?D=n.md.normalizeLinkText("mailto:"+D).replace(/^mailto:/,""):D=n.md.normalizeLinkText(D):D=n.md.normalizeLinkText("http://"+D).replace(/^http:\/\//,"");const L=c[b].index;if(L>g){const ie=new n.Token("text","",0);ie.content=l.slice(g,L),ie.level=p,d.push(ie)}const V=new n.Token("link_open","a",1);V.attrs=[["href",I]],V.level=p++,V.markup="linkify",V.info="auto",d.push(V);const W=new n.Token("text","",0);W.content=D,W.level=p,d.push(W);const z=new n.Token("link_close","a",-1);z.level=--p,z.markup="linkify",z.info="auto",d.push(z),g=c[b].lastIndex}if(g<l.length){const b=new n.Token("text","",0);b.content=l.slice(g),b.level=p,d.push(b)}e[t].children=i=C1(i,o,d)}}}}const D1=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,ww=/\((c|tm|r)\)/i,Ew=/\((c|tm|r)\)/ig,Aw={c:"©",r:"®",tm:"™"};function Tw(n,e){return Aw[e.toLowerCase()]}function kw(n){let e=0;for(let t=n.length-1;t>=0;t--){const r=n[t];r.type==="text"&&!e&&(r.content=r.content.replace(Ew,Tw)),r.type==="link_open"&&r.info==="auto"&&e--,r.type==="link_close"&&r.info==="auto"&&e++}}function Iw(n){let e=0;for(let t=n.length-1;t>=0;t--){const r=n[t];r.type==="text"&&!e&&D1.test(r.content)&&(r.content=r.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),r.type==="link_open"&&r.info==="auto"&&e--,r.type==="link_close"&&r.info==="auto"&&e++}}function Cw(n){let e;if(n.md.options.typographer)for(e=n.tokens.length-1;e>=0;e--)n.tokens[e].type==="inline"&&(ww.test(n.tokens[e].content)&&kw(n.tokens[e].children),D1.test(n.tokens[e].content)&&Iw(n.tokens[e].children))}const Sw=/['"]/,Vp=/['"]/g,jp="’";function Qa(n,e,t){return n.slice(0,e)+t+n.slice(e+1)}function Rw(n,e){let t;const r=[];for(let i=0;i<n.length;i++){const s=n[i],o=n[i].level;for(t=r.length-1;t>=0&&!(r[t].level<=o);t--);if(r.length=t+1,s.type!=="text")continue;let a=s.content,l=0,c=a.length;e:for(;l<c;){Vp.lastIndex=l;const d=Vp.exec(a);if(!d)break;let p=!0,g=!0;l=d.index+1;const b=d[0]==="'";let v=32;if(d.index-1>=0)v=a.charCodeAt(d.index-1);else for(t=i-1;t>=0&&!(n[t].type==="softbreak"||n[t].type==="hardbreak");t--)if(n[t].content){v=n[t].content.charCodeAt(n[t].content.length-1);break}let I=32;if(l<c)I=a.charCodeAt(l);else for(t=i+1;t<n.length&&!(n[t].type==="softbreak"||n[t].type==="hardbreak");t++)if(n[t].content){I=n[t].content.charCodeAt(0);break}const D=Jo(v)||Yo(String.fromCharCode(v)),L=Jo(I)||Yo(String.fromCharCode(I)),V=Qo(v),W=Qo(I);if(W?p=!1:L&&(V||D||(p=!1)),V?g=!1:D&&(W||L||(g=!1)),I===34&&d[0]==='"'&&v>=48&&v<=57&&(g=p=!1),p&&g&&(p=D,g=L),!p&&!g){b&&(s.content=Qa(s.content,d.index,jp));continue}if(g)for(t=r.length-1;t>=0;t--){let z=r[t];if(r[t].level<o)break;if(z.single===b&&r[t].level===o){z=r[t];let ie,ce;b?(ie=e.md.options.quotes[2],ce=e.md.options.quotes[3]):(ie=e.md.options.quotes[0],ce=e.md.options.quotes[1]),s.content=Qa(s.content,d.index,ce),n[z.token].content=Qa(n[z.token].content,z.pos,ie),l+=ce.length-1,z.token===i&&(l+=ie.length-1),a=s.content,c=a.length,r.length=t;continue e}}p?r.push({token:i,pos:d.index,single:b,level:o}):g&&b&&(s.content=Qa(s.content,d.index,jp))}}}function Dw(n){if(n.md.options.typographer)for(let e=n.tokens.length-1;e>=0;e--)n.tokens[e].type!=="inline"||!Sw.test(n.tokens[e].content)||Rw(n.tokens[e].children,n)}function Nw(n){let e,t;const r=n.tokens,i=r.length;for(let s=0;s<i;s++){if(r[s].type!=="inline")continue;const o=r[s].children,a=o.length;for(e=0;e<a;e++)o[e].type==="text_special"&&(o[e].type="text");for(e=t=0;e<a;e++)o[e].type==="text"&&e+1<a&&o[e+1].type==="text"?o[e+1].content=o[e].content+o[e+1].content:(e!==t&&(o[t]=o[e]),t++);e!==t&&(o.length=t)}}const ac=[["normalize",gw],["block",_w],["inline",yw],["linkify",xw],["replacements",Cw],["smartquotes",Dw],["text_join",Nw]];function gf(){this.ruler=new Et;for(let n=0;n<ac.length;n++)this.ruler.push(ac[n][0],ac[n][1])}gf.prototype.process=function(n){const e=this.ruler.getRules("");for(let t=0,r=e.length;t<r;t++)e[t](n)};gf.prototype.State=R1;function Ar(n,e,t,r){this.src=n,this.md=e,this.env=t,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const i=this.src;for(let s=0,o=0,a=0,l=0,c=i.length,d=!1;o<c;o++){const p=i.charCodeAt(o);if(!d)if(pn(p)){a++,p===9?l+=4-l%4:l++;continue}else d=!0;(p===10||o===c-1)&&(p!==10&&o++,this.bMarks.push(s),this.eMarks.push(o),this.tShift.push(a),this.sCount.push(l),this.bsCount.push(0),d=!1,a=0,l=0,s=o+1)}this.bMarks.push(i.length),this.eMarks.push(i.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Ar.prototype.push=function(n,e,t){const r=new rr(n,e,t);return r.block=!0,t<0&&this.level--,r.level=this.level,t>0&&this.level++,this.tokens.push(r),r};Ar.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};Ar.prototype.skipEmptyLines=function(e){for(let t=this.lineMax;e<t&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};Ar.prototype.skipSpaces=function(e){for(let t=this.src.length;e<t;e++){const r=this.src.charCodeAt(e);if(!pn(r))break}return e};Ar.prototype.skipSpacesBack=function(e,t){if(e<=t)return e;for(;e>t;)if(!pn(this.src.charCodeAt(--e)))return e+1;return e};Ar.prototype.skipChars=function(e,t){for(let r=this.src.length;e<r&&this.src.charCodeAt(e)===t;e++);return e};Ar.prototype.skipCharsBack=function(e,t,r){if(e<=r)return e;for(;e>r;)if(t!==this.src.charCodeAt(--e))return e+1;return e};Ar.prototype.getLines=function(e,t,r,i){if(e>=t)return"";const s=new Array(t-e);for(let o=0,a=e;a<t;a++,o++){let l=0;const c=this.bMarks[a];let d=c,p;for(a+1<t||i?p=this.eMarks[a]+1:p=this.eMarks[a];d<p&&l<r;){const g=this.src.charCodeAt(d);if(pn(g))g===9?l+=4-(l+this.bsCount[a])%4:l++;else if(d-c<this.tShift[a])l++;else break;d++}l>r?s[o]=new Array(l-r+1).join(" ")+this.src.slice(d,p):s[o]=this.src.slice(d,p)}return s.join("")};Ar.prototype.Token=rr;const Pw=65536;function uc(n,e){const t=n.bMarks[e]+n.tShift[e],r=n.eMarks[e];return n.src.slice(t,r)}function qp(n){const e=[],t=n.length;let r=0,i=n.charCodeAt(r),s=!1,o=0,a="";for(;r<t;)i===124&&(s?(a+=n.substring(o,r-1),o=r):(e.push(a+n.substring(o,r)),a="",o=r+1)),s=i===92,r++,i=n.charCodeAt(r);return e.push(a+n.substring(o)),e}function Ow(n,e,t,r){if(e+2>t)return!1;let i=e+1;if(n.sCount[i]<n.blkIndent||n.sCount[i]-n.blkIndent>=4)return!1;let s=n.bMarks[i]+n.tShift[i];if(s>=n.eMarks[i])return!1;const o=n.src.charCodeAt(s++);if(o!==124&&o!==45&&o!==58||s>=n.eMarks[i])return!1;const a=n.src.charCodeAt(s++);if(a!==124&&a!==45&&a!==58&&!pn(a)||o===45&&pn(a))return!1;for(;s<n.eMarks[i];){const z=n.src.charCodeAt(s);if(z!==124&&z!==45&&z!==58&&!pn(z))return!1;s++}let l=uc(n,e+1),c=l.split("|");const d=[];for(let z=0;z<c.length;z++){const ie=c[z].trim();if(!ie){if(z===0||z===c.length-1)continue;return!1}if(!/^:?-+:?$/.test(ie))return!1;ie.charCodeAt(ie.length-1)===58?d.push(ie.charCodeAt(0)===58?"center":"right"):ie.charCodeAt(0)===58?d.push("left"):d.push("")}if(l=uc(n,e).trim(),l.indexOf("|")===-1||n.sCount[e]-n.blkIndent>=4)return!1;c=qp(l),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop();const p=c.length;if(p===0||p!==d.length)return!1;if(r)return!0;const g=n.parentType;n.parentType="table";const b=n.md.block.ruler.getRules("blockquote"),v=n.push("table_open","table",1),I=[e,0];v.map=I;const D=n.push("thead_open","thead",1);D.map=[e,e+1];const L=n.push("tr_open","tr",1);L.map=[e,e+1];for(let z=0;z<c.length;z++){const ie=n.push("th_open","th",1);d[z]&&(ie.attrs=[["style","text-align:"+d[z]]]);const ce=n.push("inline","",0);ce.content=c[z].trim(),ce.children=[],n.push("th_close","th",-1)}n.push("tr_close","tr",-1),n.push("thead_close","thead",-1);let V,W=0;for(i=e+2;i<t&&!(n.sCount[i]<n.blkIndent);i++){let z=!1;for(let ce=0,S=b.length;ce<S;ce++)if(b[ce](n,i,t,!0)){z=!0;break}if(z||(l=uc(n,i).trim(),!l)||n.sCount[i]-n.blkIndent>=4||(c=qp(l),c.length&&c[0]===""&&c.shift(),c.length&&c[c.length-1]===""&&c.pop(),W+=p-c.length,W>Pw))break;if(i===e+2){const ce=n.push("tbody_open","tbody",1);ce.map=V=[e+2,0]}const ie=n.push("tr_open","tr",1);ie.map=[i,i+1];for(let ce=0;ce<p;ce++){const S=n.push("td_open","td",1);d[ce]&&(S.attrs=[["style","text-align:"+d[ce]]]);const w=n.push("inline","",0);w.content=c[ce]?c[ce].trim():"",w.children=[],n.push("td_close","td",-1)}n.push("tr_close","tr",-1)}return V&&(n.push("tbody_close","tbody",-1),V[1]=i),n.push("table_close","table",-1),I[1]=i,n.parentType=g,n.line=i,!0}function Lw(n,e,t){if(n.sCount[e]-n.blkIndent<4)return!1;let r=e+1,i=r;for(;r<t;){if(n.isEmpty(r)){r++;continue}if(n.sCount[r]-n.blkIndent>=4){r++,i=r;continue}break}n.line=i;const s=n.push("code_block","code",0);return s.content=n.getLines(e,i,4+n.blkIndent,!1)+`
`,s.map=[e,n.line],!0}function Fw(n,e,t,r){let i=n.bMarks[e]+n.tShift[e],s=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||i+3>s)return!1;const o=n.src.charCodeAt(i);if(o!==126&&o!==96)return!1;let a=i;i=n.skipChars(i,o);let l=i-a;if(l<3)return!1;const c=n.src.slice(a,i),d=n.src.slice(i,s);if(o===96&&d.indexOf(String.fromCharCode(o))>=0)return!1;if(r)return!0;let p=e,g=!1;for(;p++,!(p>=t||(i=a=n.bMarks[p]+n.tShift[p],s=n.eMarks[p],i<s&&n.sCount[p]<n.blkIndent));)if(n.src.charCodeAt(i)===o&&!(n.sCount[p]-n.blkIndent>=4)&&(i=n.skipChars(i,o),!(i-a<l)&&(i=n.skipSpaces(i),!(i<s)))){g=!0;break}l=n.sCount[e],n.line=p+(g?1:0);const b=n.push("fence","code",0);return b.info=d,b.content=n.getLines(e+1,p,l,!0),b.markup=c,b.map=[e,n.line],!0}function Mw(n,e,t,r){let i=n.bMarks[e]+n.tShift[e],s=n.eMarks[e];const o=n.lineMax;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(i)!==62)return!1;if(r)return!0;const a=[],l=[],c=[],d=[],p=n.md.block.ruler.getRules("blockquote"),g=n.parentType;n.parentType="blockquote";let b=!1,v;for(v=e;v<t;v++){const W=n.sCount[v]<n.blkIndent;if(i=n.bMarks[v]+n.tShift[v],s=n.eMarks[v],i>=s)break;if(n.src.charCodeAt(i++)===62&&!W){let ie=n.sCount[v]+1,ce,S;n.src.charCodeAt(i)===32?(i++,ie++,S=!1,ce=!0):n.src.charCodeAt(i)===9?(ce=!0,(n.bsCount[v]+ie)%4===3?(i++,ie++,S=!1):S=!0):ce=!1;let w=ie;for(a.push(n.bMarks[v]),n.bMarks[v]=i;i<s;){const x=n.src.charCodeAt(i);if(pn(x))x===9?w+=4-(w+n.bsCount[v]+(S?1:0))%4:w++;else break;i++}b=i>=s,l.push(n.bsCount[v]),n.bsCount[v]=n.sCount[v]+1+(ce?1:0),c.push(n.sCount[v]),n.sCount[v]=w-ie,d.push(n.tShift[v]),n.tShift[v]=i-n.bMarks[v];continue}if(b)break;let z=!1;for(let ie=0,ce=p.length;ie<ce;ie++)if(p[ie](n,v,t,!0)){z=!0;break}if(z){n.lineMax=v,n.blkIndent!==0&&(a.push(n.bMarks[v]),l.push(n.bsCount[v]),d.push(n.tShift[v]),c.push(n.sCount[v]),n.sCount[v]-=n.blkIndent);break}a.push(n.bMarks[v]),l.push(n.bsCount[v]),d.push(n.tShift[v]),c.push(n.sCount[v]),n.sCount[v]=-1}const I=n.blkIndent;n.blkIndent=0;const D=n.push("blockquote_open","blockquote",1);D.markup=">";const L=[e,0];D.map=L,n.md.block.tokenize(n,e,v);const V=n.push("blockquote_close","blockquote",-1);V.markup=">",n.lineMax=o,n.parentType=g,L[1]=n.line;for(let W=0;W<d.length;W++)n.bMarks[W+e]=a[W],n.tShift[W+e]=d[W],n.sCount[W+e]=c[W],n.bsCount[W+e]=l[W];return n.blkIndent=I,!0}function Vw(n,e,t,r){const i=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let s=n.bMarks[e]+n.tShift[e];const o=n.src.charCodeAt(s++);if(o!==42&&o!==45&&o!==95)return!1;let a=1;for(;s<i;){const c=n.src.charCodeAt(s++);if(c!==o&&!pn(c))return!1;c===o&&a++}if(a<3)return!1;if(r)return!0;n.line=e+1;const l=n.push("hr","hr",0);return l.map=[e,n.line],l.markup=Array(a+1).join(String.fromCharCode(o)),!0}function Bp(n,e){const t=n.eMarks[e];let r=n.bMarks[e]+n.tShift[e];const i=n.src.charCodeAt(r++);if(i!==42&&i!==45&&i!==43)return-1;if(r<t){const s=n.src.charCodeAt(r);if(!pn(s))return-1}return r}function Up(n,e){const t=n.bMarks[e]+n.tShift[e],r=n.eMarks[e];let i=t;if(i+1>=r)return-1;let s=n.src.charCodeAt(i++);if(s<48||s>57)return-1;for(;;){if(i>=r)return-1;if(s=n.src.charCodeAt(i++),s>=48&&s<=57){if(i-t>=10)return-1;continue}if(s===41||s===46)break;return-1}return i<r&&(s=n.src.charCodeAt(i),!pn(s))?-1:i}function jw(n,e){const t=n.level+2;for(let r=e+2,i=n.tokens.length-2;r<i;r++)n.tokens[r].level===t&&n.tokens[r].type==="paragraph_open"&&(n.tokens[r+2].hidden=!0,n.tokens[r].hidden=!0,r+=2)}function qw(n,e,t,r){let i,s,o,a,l=e,c=!0;if(n.sCount[l]-n.blkIndent>=4||n.listIndent>=0&&n.sCount[l]-n.listIndent>=4&&n.sCount[l]<n.blkIndent)return!1;let d=!1;r&&n.parentType==="paragraph"&&n.sCount[l]>=n.blkIndent&&(d=!0);let p,g,b;if((b=Up(n,l))>=0){if(p=!0,o=n.bMarks[l]+n.tShift[l],g=Number(n.src.slice(o,b-1)),d&&g!==1)return!1}else if((b=Bp(n,l))>=0)p=!1;else return!1;if(d&&n.skipSpaces(b)>=n.eMarks[l])return!1;if(r)return!0;const v=n.src.charCodeAt(b-1),I=n.tokens.length;p?(a=n.push("ordered_list_open","ol",1),g!==1&&(a.attrs=[["start",g]])):a=n.push("bullet_list_open","ul",1);const D=[l,0];a.map=D,a.markup=String.fromCharCode(v);let L=!1;const V=n.md.block.ruler.getRules("list"),W=n.parentType;for(n.parentType="list";l<t;){s=b,i=n.eMarks[l];const z=n.sCount[l]+b-(n.bMarks[l]+n.tShift[l]);let ie=z;for(;s<i;){const Ke=n.src.charCodeAt(s);if(Ke===9)ie+=4-(ie+n.bsCount[l])%4;else if(Ke===32)ie++;else break;s++}const ce=s;let S;ce>=i?S=1:S=ie-z,S>4&&(S=1);const w=z+S;a=n.push("list_item_open","li",1),a.markup=String.fromCharCode(v);const x=[l,0];a.map=x,p&&(a.info=n.src.slice(o,b-1));const T=n.tight,A=n.tShift[l],k=n.sCount[l],E=n.listIndent;if(n.listIndent=n.blkIndent,n.blkIndent=w,n.tight=!0,n.tShift[l]=ce-n.bMarks[l],n.sCount[l]=ie,ce>=i&&n.isEmpty(l+1)?n.line=Math.min(n.line+2,t):n.md.block.tokenize(n,l,t,!0),(!n.tight||L)&&(c=!1),L=n.line-l>1&&n.isEmpty(n.line-1),n.blkIndent=n.listIndent,n.listIndent=E,n.tShift[l]=A,n.sCount[l]=k,n.tight=T,a=n.push("list_item_close","li",-1),a.markup=String.fromCharCode(v),l=n.line,x[1]=l,l>=t||n.sCount[l]<n.blkIndent||n.sCount[l]-n.blkIndent>=4)break;let we=!1;for(let Ke=0,an=V.length;Ke<an;Ke++)if(V[Ke](n,l,t,!0)){we=!0;break}if(we)break;if(p){if(b=Up(n,l),b<0)break;o=n.bMarks[l]+n.tShift[l]}else if(b=Bp(n,l),b<0)break;if(v!==n.src.charCodeAt(b-1))break}return p?a=n.push("ordered_list_close","ol",-1):a=n.push("bullet_list_close","ul",-1),a.markup=String.fromCharCode(v),D[1]=l,n.line=l,n.parentType=W,c&&jw(n,I),!0}function Bw(n,e,t,r){let i=n.bMarks[e]+n.tShift[e],s=n.eMarks[e],o=e+1;if(n.sCount[e]-n.blkIndent>=4||n.src.charCodeAt(i)!==91)return!1;function a(V){const W=n.lineMax;if(V>=W||n.isEmpty(V))return null;let z=!1;if(n.sCount[V]-n.blkIndent>3&&(z=!0),n.sCount[V]<0&&(z=!0),!z){const S=n.md.block.ruler.getRules("reference"),w=n.parentType;n.parentType="reference";let x=!1;for(let T=0,A=S.length;T<A;T++)if(S[T](n,V,W,!0)){x=!0;break}if(n.parentType=w,x)return null}const ie=n.bMarks[V]+n.tShift[V],ce=n.eMarks[V];return n.src.slice(ie,ce+1)}let l=n.src.slice(i,s+1);s=l.length;let c=-1;for(i=1;i<s;i++){const V=l.charCodeAt(i);if(V===91)return!1;if(V===93){c=i;break}else if(V===10){const W=a(o);W!==null&&(l+=W,s=l.length,o++)}else if(V===92&&(i++,i<s&&l.charCodeAt(i)===10)){const W=a(o);W!==null&&(l+=W,s=l.length,o++)}}if(c<0||l.charCodeAt(c+1)!==58)return!1;for(i=c+2;i<s;i++){const V=l.charCodeAt(i);if(V===10){const W=a(o);W!==null&&(l+=W,s=l.length,o++)}else if(!pn(V))break}const d=n.md.helpers.parseLinkDestination(l,i,s);if(!d.ok)return!1;const p=n.md.normalizeLink(d.str);if(!n.md.validateLink(p))return!1;i=d.pos;const g=i,b=o,v=i;for(;i<s;i++){const V=l.charCodeAt(i);if(V===10){const W=a(o);W!==null&&(l+=W,s=l.length,o++)}else if(!pn(V))break}let I=n.md.helpers.parseLinkTitle(l,i,s);for(;I.can_continue;){const V=a(o);if(V===null)break;l+=V,i=s,s=l.length,o++,I=n.md.helpers.parseLinkTitle(l,i,s,I)}let D;for(i<s&&v!==i&&I.ok?(D=I.str,i=I.pos):(D="",i=g,o=b);i<s;){const V=l.charCodeAt(i);if(!pn(V))break;i++}if(i<s&&l.charCodeAt(i)!==10&&D)for(D="",i=g,o=b;i<s;){const V=l.charCodeAt(i);if(!pn(V))break;i++}if(i<s&&l.charCodeAt(i)!==10)return!1;const L=fl(l.slice(1,c));return L?(r||(typeof n.env.references>"u"&&(n.env.references={}),typeof n.env.references[L]>"u"&&(n.env.references[L]={title:D,href:p}),n.line=o),!0):!1}const Uw=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],$w="[a-zA-Z_:][a-zA-Z0-9:._-]*",Hw="[^\"'=<>`\\x00-\\x20]+",zw="'[^']*'",Gw='"[^"]*"',Ww="(?:"+Hw+"|"+zw+"|"+Gw+")",Kw="(?:\\s+"+$w+"(?:\\s*=\\s*"+Ww+")?)",N1="<[A-Za-z][A-Za-z0-9\\-]*"+Kw+"*\\s*\\/?>",P1="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Qw="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Yw="<[?][\\s\\S]*?[?]>",Jw="<![A-Za-z][^>]*>",Xw="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Zw=new RegExp("^(?:"+N1+"|"+P1+"|"+Qw+"|"+Yw+"|"+Jw+"|"+Xw+")"),eE=new RegExp("^(?:"+N1+"|"+P1+")"),vs=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Uw.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(eE.source+"\\s*$"),/^$/,!1]];function nE(n,e,t,r){let i=n.bMarks[e]+n.tShift[e],s=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4||!n.md.options.html||n.src.charCodeAt(i)!==60)return!1;let o=n.src.slice(i,s),a=0;for(;a<vs.length&&!vs[a][0].test(o);a++);if(a===vs.length)return!1;if(r)return vs[a][2];let l=e+1;if(!vs[a][1].test(o)){for(;l<t&&!(n.sCount[l]<n.blkIndent);l++)if(i=n.bMarks[l]+n.tShift[l],s=n.eMarks[l],o=n.src.slice(i,s),vs[a][1].test(o)){o.length!==0&&l++;break}}n.line=l;const c=n.push("html_block","",0);return c.map=[e,l],c.content=n.getLines(e,l,n.blkIndent,!0),!0}function tE(n,e,t,r){let i=n.bMarks[e]+n.tShift[e],s=n.eMarks[e];if(n.sCount[e]-n.blkIndent>=4)return!1;let o=n.src.charCodeAt(i);if(o!==35||i>=s)return!1;let a=1;for(o=n.src.charCodeAt(++i);o===35&&i<s&&a<=6;)a++,o=n.src.charCodeAt(++i);if(a>6||i<s&&!pn(o))return!1;if(r)return!0;s=n.skipSpacesBack(s,i);const l=n.skipCharsBack(s,35,i);l>i&&pn(n.src.charCodeAt(l-1))&&(s=l),n.line=e+1;const c=n.push("heading_open","h"+String(a),1);c.markup="########".slice(0,a),c.map=[e,n.line];const d=n.push("inline","",0);d.content=n.src.slice(i,s).trim(),d.map=[e,n.line],d.children=[];const p=n.push("heading_close","h"+String(a),-1);return p.markup="########".slice(0,a),!0}function rE(n,e,t){const r=n.md.block.ruler.getRules("paragraph");if(n.sCount[e]-n.blkIndent>=4)return!1;const i=n.parentType;n.parentType="paragraph";let s=0,o,a=e+1;for(;a<t&&!n.isEmpty(a);a++){if(n.sCount[a]-n.blkIndent>3)continue;if(n.sCount[a]>=n.blkIndent){let b=n.bMarks[a]+n.tShift[a];const v=n.eMarks[a];if(b<v&&(o=n.src.charCodeAt(b),(o===45||o===61)&&(b=n.skipChars(b,o),b=n.skipSpaces(b),b>=v))){s=o===61?1:2;break}}if(n.sCount[a]<0)continue;let g=!1;for(let b=0,v=r.length;b<v;b++)if(r[b](n,a,t,!0)){g=!0;break}if(g)break}if(!s)return!1;const l=n.getLines(e,a,n.blkIndent,!1).trim();n.line=a+1;const c=n.push("heading_open","h"+String(s),1);c.markup=String.fromCharCode(o),c.map=[e,n.line];const d=n.push("inline","",0);d.content=l,d.map=[e,n.line-1],d.children=[];const p=n.push("heading_close","h"+String(s),-1);return p.markup=String.fromCharCode(o),n.parentType=i,!0}function iE(n,e,t){const r=n.md.block.ruler.getRules("paragraph"),i=n.parentType;let s=e+1;for(n.parentType="paragraph";s<t&&!n.isEmpty(s);s++){if(n.sCount[s]-n.blkIndent>3||n.sCount[s]<0)continue;let c=!1;for(let d=0,p=r.length;d<p;d++)if(r[d](n,s,t,!0)){c=!0;break}if(c)break}const o=n.getLines(e,s,n.blkIndent,!1).trim();n.line=s;const a=n.push("paragraph_open","p",1);a.map=[e,n.line];const l=n.push("inline","",0);return l.content=o,l.map=[e,n.line],l.children=[],n.push("paragraph_close","p",-1),n.parentType=i,!0}const Ya=[["table",Ow,["paragraph","reference"]],["code",Lw],["fence",Fw,["paragraph","reference","blockquote","list"]],["blockquote",Mw,["paragraph","reference","blockquote","list"]],["hr",Vw,["paragraph","reference","blockquote","list"]],["list",qw,["paragraph","reference","blockquote"]],["reference",Bw],["html_block",nE,["paragraph","reference","blockquote"]],["heading",tE,["paragraph","reference","blockquote"]],["lheading",rE],["paragraph",iE]];function hl(){this.ruler=new Et;for(let n=0;n<Ya.length;n++)this.ruler.push(Ya[n][0],Ya[n][1],{alt:(Ya[n][2]||[]).slice()})}hl.prototype.tokenize=function(n,e,t){const r=this.ruler.getRules(""),i=r.length,s=n.md.options.maxNesting;let o=e,a=!1;for(;o<t&&(n.line=o=n.skipEmptyLines(o),!(o>=t||n.sCount[o]<n.blkIndent));){if(n.level>=s){n.line=t;break}const l=n.line;let c=!1;for(let d=0;d<i;d++)if(c=r[d](n,o,t,!1),c){if(l>=n.line)throw new Error("block rule didn't increment state.line");break}if(!c)throw new Error("none of the block rules matched");n.tight=!a,n.isEmpty(n.line-1)&&(a=!0),o=n.line,o<t&&n.isEmpty(o)&&(a=!0,o++,n.line=o)}};hl.prototype.parse=function(n,e,t,r){if(!n)return;const i=new this.State(n,e,t,r);this.tokenize(i,i.line,i.lineMax)};hl.prototype.State=Ar;function ma(n,e,t,r){this.src=n,this.env=t,this.md=e,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}ma.prototype.pushPending=function(){const n=new rr("text","",0);return n.content=this.pending,n.level=this.pendingLevel,this.tokens.push(n),this.pending="",n};ma.prototype.push=function(n,e,t){this.pending&&this.pushPending();const r=new rr(n,e,t);let i=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};ma.prototype.scanDelims=function(n,e){const t=this.posMax,r=this.src.charCodeAt(n),i=n>0?this.src.charCodeAt(n-1):32;let s=n;for(;s<t&&this.src.charCodeAt(s)===r;)s++;const o=s-n,a=s<t?this.src.charCodeAt(s):32,l=Jo(i)||Yo(String.fromCharCode(i)),c=Jo(a)||Yo(String.fromCharCode(a)),d=Qo(i),p=Qo(a),g=!p&&(!c||d||l),b=!d&&(!l||p||c);return{can_open:g&&(e||!b||l),can_close:b&&(e||!g||c),length:o}};ma.prototype.Token=rr;function sE(n){switch(n){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function oE(n,e){let t=n.pos;for(;t<n.posMax&&!sE(n.src.charCodeAt(t));)t++;return t===n.pos?!1:(e||(n.pending+=n.src.slice(n.pos,t)),n.pos=t,!0)}const aE=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function uE(n,e){if(!n.md.options.linkify||n.linkLevel>0)return!1;const t=n.pos,r=n.posMax;if(t+3>r||n.src.charCodeAt(t)!==58||n.src.charCodeAt(t+1)!==47||n.src.charCodeAt(t+2)!==47)return!1;const i=n.pending.match(aE);if(!i)return!1;const s=i[1],o=n.md.linkify.matchAtStart(n.src.slice(t-s.length));if(!o)return!1;let a=o.url;if(a.length<=s.length)return!1;a=a.replace(/\*+$/,"");const l=n.md.normalizeLink(a);if(!n.md.validateLink(l))return!1;if(!e){n.pending=n.pending.slice(0,-s.length);const c=n.push("link_open","a",1);c.attrs=[["href",l]],c.markup="linkify",c.info="auto";const d=n.push("text","",0);d.content=n.md.normalizeLinkText(a);const p=n.push("link_close","a",-1);p.markup="linkify",p.info="auto"}return n.pos+=a.length-s.length,!0}function lE(n,e){let t=n.pos;if(n.src.charCodeAt(t)!==10)return!1;const r=n.pending.length-1,i=n.posMax;if(!e)if(r>=0&&n.pending.charCodeAt(r)===32)if(r>=1&&n.pending.charCodeAt(r-1)===32){let s=r-1;for(;s>=1&&n.pending.charCodeAt(s-1)===32;)s--;n.pending=n.pending.slice(0,s),n.push("hardbreak","br",0)}else n.pending=n.pending.slice(0,-1),n.push("softbreak","br",0);else n.push("softbreak","br",0);for(t++;t<i&&pn(n.src.charCodeAt(t));)t++;return n.pos=t,!0}const _f=[];for(let n=0;n<256;n++)_f.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(n){_f[n.charCodeAt(0)]=1});function cE(n,e){let t=n.pos;const r=n.posMax;if(n.src.charCodeAt(t)!==92||(t++,t>=r))return!1;let i=n.src.charCodeAt(t);if(i===10){for(e||n.push("hardbreak","br",0),t++;t<r&&(i=n.src.charCodeAt(t),!!pn(i));)t++;return n.pos=t,!0}let s=n.src[t];if(i>=55296&&i<=56319&&t+1<r){const a=n.src.charCodeAt(t+1);a>=56320&&a<=57343&&(s+=n.src[t+1],t++)}const o="\\"+s;if(!e){const a=n.push("text_special","",0);i<256&&_f[i]!==0?a.content=s:a.content=o,a.markup=o,a.info="escape"}return n.pos=t+1,!0}function dE(n,e){let t=n.pos;if(n.src.charCodeAt(t)!==96)return!1;const i=t;t++;const s=n.posMax;for(;t<s&&n.src.charCodeAt(t)===96;)t++;const o=n.src.slice(i,t),a=o.length;if(n.backticksScanned&&(n.backticks[a]||0)<=i)return e||(n.pending+=o),n.pos+=a,!0;let l=t,c;for(;(c=n.src.indexOf("`",l))!==-1;){for(l=c+1;l<s&&n.src.charCodeAt(l)===96;)l++;const d=l-c;if(d===a){if(!e){const p=n.push("code_inline","code",0);p.markup=o,p.content=n.src.slice(t,c).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return n.pos=l,!0}n.backticks[d]=c}return n.backticksScanned=!0,e||(n.pending+=o),n.pos+=a,!0}function fE(n,e){const t=n.pos,r=n.src.charCodeAt(t);if(e||r!==126)return!1;const i=n.scanDelims(n.pos,!0);let s=i.length;const o=String.fromCharCode(r);if(s<2)return!1;let a;s%2&&(a=n.push("text","",0),a.content=o,s--);for(let l=0;l<s;l+=2)a=n.push("text","",0),a.content=o+o,n.delimiters.push({marker:r,length:0,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return n.pos+=i.length,!0}function $p(n,e){let t;const r=[],i=e.length;for(let s=0;s<i;s++){const o=e[s];if(o.marker!==126||o.end===-1)continue;const a=e[o.end];t=n.tokens[o.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=n.tokens[a.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",n.tokens[a.token-1].type==="text"&&n.tokens[a.token-1].content==="~"&&r.push(a.token-1)}for(;r.length;){const s=r.pop();let o=s+1;for(;o<n.tokens.length&&n.tokens[o].type==="s_close";)o++;o--,s!==o&&(t=n.tokens[o],n.tokens[o]=n.tokens[s],n.tokens[s]=t)}}function hE(n){const e=n.tokens_meta,t=n.tokens_meta.length;$p(n,n.delimiters);for(let r=0;r<t;r++)e[r]&&e[r].delimiters&&$p(n,e[r].delimiters)}const O1={tokenize:fE,postProcess:hE};function pE(n,e){const t=n.pos,r=n.src.charCodeAt(t);if(e||r!==95&&r!==42)return!1;const i=n.scanDelims(n.pos,r===42);for(let s=0;s<i.length;s++){const o=n.push("text","",0);o.content=String.fromCharCode(r),n.delimiters.push({marker:r,length:i.length,token:n.tokens.length-1,end:-1,open:i.can_open,close:i.can_close})}return n.pos+=i.length,!0}function Hp(n,e){const t=e.length;for(let r=t-1;r>=0;r--){const i=e[r];if(i.marker!==95&&i.marker!==42||i.end===-1)continue;const s=e[i.end],o=r>0&&e[r-1].end===i.end+1&&e[r-1].marker===i.marker&&e[r-1].token===i.token-1&&e[i.end+1].token===s.token+1,a=String.fromCharCode(i.marker),l=n.tokens[i.token];l.type=o?"strong_open":"em_open",l.tag=o?"strong":"em",l.nesting=1,l.markup=o?a+a:a,l.content="";const c=n.tokens[s.token];c.type=o?"strong_close":"em_close",c.tag=o?"strong":"em",c.nesting=-1,c.markup=o?a+a:a,c.content="",o&&(n.tokens[e[r-1].token].content="",n.tokens[e[i.end+1].token].content="",r--)}}function mE(n){const e=n.tokens_meta,t=n.tokens_meta.length;Hp(n,n.delimiters);for(let r=0;r<t;r++)e[r]&&e[r].delimiters&&Hp(n,e[r].delimiters)}const L1={tokenize:pE,postProcess:mE};function gE(n,e){let t,r,i,s,o="",a="",l=n.pos,c=!0;if(n.src.charCodeAt(n.pos)!==91)return!1;const d=n.pos,p=n.posMax,g=n.pos+1,b=n.md.helpers.parseLinkLabel(n,n.pos,!0);if(b<0)return!1;let v=b+1;if(v<p&&n.src.charCodeAt(v)===40){for(c=!1,v++;v<p&&(t=n.src.charCodeAt(v),!(!pn(t)&&t!==10));v++);if(v>=p)return!1;if(l=v,i=n.md.helpers.parseLinkDestination(n.src,v,n.posMax),i.ok){for(o=n.md.normalizeLink(i.str),n.md.validateLink(o)?v=i.pos:o="",l=v;v<p&&(t=n.src.charCodeAt(v),!(!pn(t)&&t!==10));v++);if(i=n.md.helpers.parseLinkTitle(n.src,v,n.posMax),v<p&&l!==v&&i.ok)for(a=i.str,v=i.pos;v<p&&(t=n.src.charCodeAt(v),!(!pn(t)&&t!==10));v++);}(v>=p||n.src.charCodeAt(v)!==41)&&(c=!0),v++}if(c){if(typeof n.env.references>"u")return!1;if(v<p&&n.src.charCodeAt(v)===91?(l=v+1,v=n.md.helpers.parseLinkLabel(n,v),v>=0?r=n.src.slice(l,v++):v=b+1):v=b+1,r||(r=n.src.slice(g,b)),s=n.env.references[fl(r)],!s)return n.pos=d,!1;o=s.href,a=s.title}if(!e){n.pos=g,n.posMax=b;const I=n.push("link_open","a",1),D=[["href",o]];I.attrs=D,a&&D.push(["title",a]),n.linkLevel++,n.md.inline.tokenize(n),n.linkLevel--,n.push("link_close","a",-1)}return n.pos=v,n.posMax=p,!0}function _E(n,e){let t,r,i,s,o,a,l,c,d="";const p=n.pos,g=n.posMax;if(n.src.charCodeAt(n.pos)!==33||n.src.charCodeAt(n.pos+1)!==91)return!1;const b=n.pos+2,v=n.md.helpers.parseLinkLabel(n,n.pos+1,!1);if(v<0)return!1;if(s=v+1,s<g&&n.src.charCodeAt(s)===40){for(s++;s<g&&(t=n.src.charCodeAt(s),!(!pn(t)&&t!==10));s++);if(s>=g)return!1;for(c=s,a=n.md.helpers.parseLinkDestination(n.src,s,n.posMax),a.ok&&(d=n.md.normalizeLink(a.str),n.md.validateLink(d)?s=a.pos:d=""),c=s;s<g&&(t=n.src.charCodeAt(s),!(!pn(t)&&t!==10));s++);if(a=n.md.helpers.parseLinkTitle(n.src,s,n.posMax),s<g&&c!==s&&a.ok)for(l=a.str,s=a.pos;s<g&&(t=n.src.charCodeAt(s),!(!pn(t)&&t!==10));s++);else l="";if(s>=g||n.src.charCodeAt(s)!==41)return n.pos=p,!1;s++}else{if(typeof n.env.references>"u")return!1;if(s<g&&n.src.charCodeAt(s)===91?(c=s+1,s=n.md.helpers.parseLinkLabel(n,s),s>=0?i=n.src.slice(c,s++):s=v+1):s=v+1,i||(i=n.src.slice(b,v)),o=n.env.references[fl(i)],!o)return n.pos=p,!1;d=o.href,l=o.title}if(!e){r=n.src.slice(b,v);const I=[];n.md.inline.parse(r,n.md,n.env,I);const D=n.push("image","img",0),L=[["src",d],["alt",""]];D.attrs=L,D.children=I,D.content=r,l&&L.push(["title",l])}return n.pos=s,n.posMax=g,!0}const yE=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,bE=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function vE(n,e){let t=n.pos;if(n.src.charCodeAt(t)!==60)return!1;const r=n.pos,i=n.posMax;for(;;){if(++t>=i)return!1;const o=n.src.charCodeAt(t);if(o===60)return!1;if(o===62)break}const s=n.src.slice(r+1,t);if(bE.test(s)){const o=n.md.normalizeLink(s);if(!n.md.validateLink(o))return!1;if(!e){const a=n.push("link_open","a",1);a.attrs=[["href",o]],a.markup="autolink",a.info="auto";const l=n.push("text","",0);l.content=n.md.normalizeLinkText(s);const c=n.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return n.pos+=s.length+2,!0}if(yE.test(s)){const o=n.md.normalizeLink("mailto:"+s);if(!n.md.validateLink(o))return!1;if(!e){const a=n.push("link_open","a",1);a.attrs=[["href",o]],a.markup="autolink",a.info="auto";const l=n.push("text","",0);l.content=n.md.normalizeLinkText(s);const c=n.push("link_close","a",-1);c.markup="autolink",c.info="auto"}return n.pos+=s.length+2,!0}return!1}function xE(n){return/^<a[>\s]/i.test(n)}function wE(n){return/^<\/a\s*>/i.test(n)}function EE(n){const e=n|32;return e>=97&&e<=122}function AE(n,e){if(!n.md.options.html)return!1;const t=n.posMax,r=n.pos;if(n.src.charCodeAt(r)!==60||r+2>=t)return!1;const i=n.src.charCodeAt(r+1);if(i!==33&&i!==63&&i!==47&&!EE(i))return!1;const s=n.src.slice(r).match(Zw);if(!s)return!1;if(!e){const o=n.push("html_inline","",0);o.content=s[0],xE(o.content)&&n.linkLevel++,wE(o.content)&&n.linkLevel--}return n.pos+=s[0].length,!0}const TE=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,kE=/^&([a-z][a-z0-9]{1,31});/i;function IE(n,e){const t=n.pos,r=n.posMax;if(n.src.charCodeAt(t)!==38||t+1>=r)return!1;if(n.src.charCodeAt(t+1)===35){const s=n.src.slice(t).match(TE);if(s){if(!e){const o=s[1][0].toLowerCase()==="x"?parseInt(s[1].slice(1),16):parseInt(s[1],10),a=n.push("text_special","",0);a.content=mf(o)?Su(o):Su(65533),a.markup=s[0],a.info="entity"}return n.pos+=s[0].length,!0}}else{const s=n.src.slice(t).match(kE);if(s){const o=I1(s[0]);if(o!==s[0]){if(!e){const a=n.push("text_special","",0);a.content=o,a.markup=s[0],a.info="entity"}return n.pos+=s[0].length,!0}}}return!1}function zp(n){const e={},t=n.length;if(!t)return;let r=0,i=-2;const s=[];for(let o=0;o<t;o++){const a=n[o];if(s.push(0),(n[r].marker!==a.marker||i!==a.token-1)&&(r=o),i=a.token,a.length=a.length||0,!a.close)continue;e.hasOwnProperty(a.marker)||(e[a.marker]=[-1,-1,-1,-1,-1,-1]);const l=e[a.marker][(a.open?3:0)+a.length%3];let c=r-s[r]-1,d=c;for(;c>l;c-=s[c]+1){const p=n[c];if(p.marker===a.marker&&p.open&&p.end<0){let g=!1;if((p.close||a.open)&&(p.length+a.length)%3===0&&(p.length%3!==0||a.length%3!==0)&&(g=!0),!g){const b=c>0&&!n[c-1].open?s[c-1]+1:0;s[o]=o-c+b,s[c]=b,a.open=!1,p.end=o,p.close=!1,d=-1,i=-2;break}}}d!==-1&&(e[a.marker][(a.open?3:0)+(a.length||0)%3]=d)}}function CE(n){const e=n.tokens_meta,t=n.tokens_meta.length;zp(n.delimiters);for(let r=0;r<t;r++)e[r]&&e[r].delimiters&&zp(e[r].delimiters)}function SE(n){let e,t,r=0;const i=n.tokens,s=n.tokens.length;for(e=t=0;e<s;e++)i[e].nesting<0&&r--,i[e].level=r,i[e].nesting>0&&r++,i[e].type==="text"&&e+1<s&&i[e+1].type==="text"?i[e+1].content=i[e].content+i[e+1].content:(e!==t&&(i[t]=i[e]),t++);e!==t&&(i.length=t)}const lc=[["text",oE],["linkify",uE],["newline",lE],["escape",cE],["backticks",dE],["strikethrough",O1.tokenize],["emphasis",L1.tokenize],["link",gE],["image",_E],["autolink",vE],["html_inline",AE],["entity",IE]],cc=[["balance_pairs",CE],["strikethrough",O1.postProcess],["emphasis",L1.postProcess],["fragments_join",SE]];function ga(){this.ruler=new Et;for(let n=0;n<lc.length;n++)this.ruler.push(lc[n][0],lc[n][1]);this.ruler2=new Et;for(let n=0;n<cc.length;n++)this.ruler2.push(cc[n][0],cc[n][1])}ga.prototype.skipToken=function(n){const e=n.pos,t=this.ruler.getRules(""),r=t.length,i=n.md.options.maxNesting,s=n.cache;if(typeof s[e]<"u"){n.pos=s[e];return}let o=!1;if(n.level<i){for(let a=0;a<r;a++)if(n.level++,o=t[a](n,!0),n.level--,o){if(e>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}else n.pos=n.posMax;o||n.pos++,s[e]=n.pos};ga.prototype.tokenize=function(n){const e=this.ruler.getRules(""),t=e.length,r=n.posMax,i=n.md.options.maxNesting;for(;n.pos<r;){const s=n.pos;let o=!1;if(n.level<i){for(let a=0;a<t;a++)if(o=e[a](n,!1),o){if(s>=n.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(n.pos>=r)break;continue}n.pending+=n.src[n.pos++]}n.pending&&n.pushPending()};ga.prototype.parse=function(n,e,t,r){const i=new this.State(n,e,t,r);this.tokenize(i);const s=this.ruler2.getRules(""),o=s.length;for(let a=0;a<o;a++)s[a](i)};ga.prototype.State=ma;function RE(n){const e={};n=n||{},e.src_Any=w1.source,e.src_Cc=E1.source,e.src_Z=T1.source,e.src_P=hf.source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");const t="[><｜]";return e.src_pseudo_letter="(?:(?!"+t+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+t+"|"+e.src_ZPCc+")(?!"+(n["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(n["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+e.src_ZPCc+"))((?![$+<=>^`|｜])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}function gd(n){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(r){n[r]=t[r]})}),n}function pl(n){return Object.prototype.toString.call(n)}function DE(n){return pl(n)==="[object String]"}function NE(n){return pl(n)==="[object Object]"}function PE(n){return pl(n)==="[object RegExp]"}function Gp(n){return pl(n)==="[object Function]"}function OE(n){return n.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const F1={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function LE(n){return Object.keys(n||{}).reduce(function(e,t){return e||F1.hasOwnProperty(t)},!1)}const FE={"http:":{validate:function(n,e,t){const r=n.slice(e);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(r)?r.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(n,e,t){const r=n.slice(e);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(r)?e>=3&&n[e-3]===":"||e>=3&&n[e-3]==="/"?0:r.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(n,e,t){const r=n.slice(e);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(r)?r.match(t.re.mailto)[0].length:0}}},ME="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",VE="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function jE(n){n.__index__=-1,n.__text_cache__=""}function qE(n){return function(e,t){const r=e.slice(t);return n.test(r)?r.match(n)[0].length:0}}function Wp(){return function(n,e){e.normalize(n)}}function Ru(n){const e=n.re=RE(n.__opts__),t=n.__tlds__.slice();n.onCompile(),n.__tlds_replaced__||t.push(ME),t.push(e.src_xn),e.src_tlds=t.join("|");function r(a){return a.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");const i=[];n.__compiled__={};function s(a,l){throw new Error('(LinkifyIt) Invalid schema "'+a+'": '+l)}Object.keys(n.__schemas__).forEach(function(a){const l=n.__schemas__[a];if(l===null)return;const c={validate:null,link:null};if(n.__compiled__[a]=c,NE(l)){PE(l.validate)?c.validate=qE(l.validate):Gp(l.validate)?c.validate=l.validate:s(a,l),Gp(l.normalize)?c.normalize=l.normalize:l.normalize?s(a,l):c.normalize=Wp();return}if(DE(l)){i.push(a);return}s(a,l)}),i.forEach(function(a){n.__compiled__[n.__schemas__[a]]&&(n.__compiled__[a].validate=n.__compiled__[n.__schemas__[a]].validate,n.__compiled__[a].normalize=n.__compiled__[n.__schemas__[a]].normalize)}),n.__compiled__[""]={validate:null,normalize:Wp()};const o=Object.keys(n.__compiled__).filter(function(a){return a.length>0&&n.__compiled__[a]}).map(OE).join("|");n.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","i"),n.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+e.src_ZPCc+"))("+o+")","ig"),n.re.schema_at_start=RegExp("^"+n.re.schema_search.source,"i"),n.re.pretest=RegExp("("+n.re.schema_test.source+")|("+n.re.host_fuzzy_test.source+")|@","i"),jE(n)}function BE(n,e){const t=n.__index__,r=n.__last_index__,i=n.__text_cache__.slice(t,r);this.schema=n.__schema__.toLowerCase(),this.index=t+e,this.lastIndex=r+e,this.raw=i,this.text=i,this.url=i}function _d(n,e){const t=new BE(n,e);return n.__compiled__[t.schema].normalize(t,n),t}function Pt(n,e){if(!(this instanceof Pt))return new Pt(n,e);e||LE(n)&&(e=n,n={}),this.__opts__=gd({},F1,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=gd({},FE,n),this.__compiled__={},this.__tlds__=VE,this.__tlds_replaced__=!1,this.re={},Ru(this)}Pt.prototype.add=function(e,t){return this.__schemas__[e]=t,Ru(this),this};Pt.prototype.set=function(e){return this.__opts__=gd(this.__opts__,e),this};Pt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;let t,r,i,s,o,a,l,c,d;if(this.re.schema_test.test(e)){for(l=this.re.schema_search,l.lastIndex=0;(t=l.exec(e))!==null;)if(s=this.testSchemaAt(e,t[2],l.lastIndex),s){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+s;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=r.index+r[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(d=e.indexOf("@"),d>=0&&(i=e.match(this.re.email_fuzzy))!==null&&(o=i.index+i[1].length,a=i.index+i[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&a>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=a))),this.__index__>=0};Pt.prototype.pretest=function(e){return this.re.pretest.test(e)};Pt.prototype.testSchemaAt=function(e,t,r){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(e,r,this):0};Pt.prototype.match=function(e){const t=[];let r=0;this.__index__>=0&&this.__text_cache__===e&&(t.push(_d(this,r)),r=this.__last_index__);let i=r?e.slice(r):e;for(;this.test(i);)t.push(_d(this,r)),i=i.slice(this.__last_index__),r+=this.__last_index__;return t.length?t:null};Pt.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;const t=this.re.schema_at_start.exec(e);if(!t)return null;const r=this.testSchemaAt(e,t[2],t[0].length);return r?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+r,_d(this,0)):null};Pt.prototype.tlds=function(e,t){return e=Array.isArray(e)?e:[e],t?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,i,s){return r!==s[i-1]}).reverse(),Ru(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Ru(this),this)};Pt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};Pt.prototype.onCompile=function(){};const Ps=2147483647,hr=36,yf=1,Xo=26,UE=38,$E=700,M1=72,V1=128,j1="-",HE=/^xn--/,zE=/[^\0-\x7F]/,GE=/[\x2E\u3002\uFF0E\uFF61]/g,WE={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},dc=hr-yf,pr=Math.floor,fc=String.fromCharCode;function ni(n){throw new RangeError(WE[n])}function KE(n,e){const t=[];let r=n.length;for(;r--;)t[r]=e(n[r]);return t}function q1(n,e){const t=n.split("@");let r="";t.length>1&&(r=t[0]+"@",n=t[1]),n=n.replace(GE,".");const i=n.split("."),s=KE(i,e).join(".");return r+s}function B1(n){const e=[];let t=0;const r=n.length;for(;t<r;){const i=n.charCodeAt(t++);if(i>=55296&&i<=56319&&t<r){const s=n.charCodeAt(t++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),t--)}else e.push(i)}return e}const QE=n=>String.fromCodePoint(...n),YE=function(n){return n>=48&&n<58?26+(n-48):n>=65&&n<91?n-65:n>=97&&n<123?n-97:hr},Kp=function(n,e){return n+22+75*(n<26)-((e!=0)<<5)},U1=function(n,e,t){let r=0;for(n=t?pr(n/$E):n>>1,n+=pr(n/e);n>dc*Xo>>1;r+=hr)n=pr(n/dc);return pr(r+(dc+1)*n/(n+UE))},$1=function(n){const e=[],t=n.length;let r=0,i=V1,s=M1,o=n.lastIndexOf(j1);o<0&&(o=0);for(let a=0;a<o;++a)n.charCodeAt(a)>=128&&ni("not-basic"),e.push(n.charCodeAt(a));for(let a=o>0?o+1:0;a<t;){const l=r;for(let d=1,p=hr;;p+=hr){a>=t&&ni("invalid-input");const g=YE(n.charCodeAt(a++));g>=hr&&ni("invalid-input"),g>pr((Ps-r)/d)&&ni("overflow"),r+=g*d;const b=p<=s?yf:p>=s+Xo?Xo:p-s;if(g<b)break;const v=hr-b;d>pr(Ps/v)&&ni("overflow"),d*=v}const c=e.length+1;s=U1(r-l,c,l==0),pr(r/c)>Ps-i&&ni("overflow"),i+=pr(r/c),r%=c,e.splice(r++,0,i)}return String.fromCodePoint(...e)},H1=function(n){const e=[];n=B1(n);const t=n.length;let r=V1,i=0,s=M1;for(const l of n)l<128&&e.push(fc(l));const o=e.length;let a=o;for(o&&e.push(j1);a<t;){let l=Ps;for(const d of n)d>=r&&d<l&&(l=d);const c=a+1;l-r>pr((Ps-i)/c)&&ni("overflow"),i+=(l-r)*c,r=l;for(const d of n)if(d<r&&++i>Ps&&ni("overflow"),d===r){let p=i;for(let g=hr;;g+=hr){const b=g<=s?yf:g>=s+Xo?Xo:g-s;if(p<b)break;const v=p-b,I=hr-b;e.push(fc(Kp(b+v%I,0))),p=pr(v/I)}e.push(fc(Kp(p,0))),s=U1(i,c,a===o),i=0,++a}++i,++r}return e.join("")},JE=function(n){return q1(n,function(e){return HE.test(e)?$1(e.slice(4).toLowerCase()):e})},XE=function(n){return q1(n,function(e){return zE.test(e)?"xn--"+H1(e):e})},z1={version:"2.3.1",ucs2:{decode:B1,encode:QE},decode:$1,encode:H1,toASCII:XE,toUnicode:JE},ZE={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},eA={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},nA={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},tA={default:ZE,zero:eA,commonmark:nA},rA=/^(vbscript|javascript|file|data):/,iA=/^data:image\/(gif|png|jpeg|webp);/;function sA(n){const e=n.trim().toLowerCase();return rA.test(e)?iA.test(e):!0}const G1=["http:","https:","mailto:"];function oA(n){const e=ff(n,!0);if(e.hostname&&(!e.protocol||G1.indexOf(e.protocol)>=0))try{e.hostname=z1.toASCII(e.hostname)}catch{}return pa(df(e))}function aA(n){const e=ff(n,!0);if(e.hostname&&(!e.protocol||G1.indexOf(e.protocol)>=0))try{e.hostname=z1.toUnicode(e.hostname)}catch{}return $s(df(e),$s.defaultChars+"%")}function At(n,e){if(!(this instanceof At))return new At(n,e);e||pf(n)||(e=n||{},n="default"),this.inline=new ga,this.block=new hl,this.core=new gf,this.renderer=new Xs,this.linkify=new Pt,this.validateLink=sA,this.normalizeLink=oA,this.normalizeLinkText=aA,this.utils=lw,this.helpers=dl({},hw),this.options={},this.configure(n),e&&this.set(e)}At.prototype.set=function(n){return dl(this.options,n),this};At.prototype.configure=function(n){const e=this;if(pf(n)){const t=n;if(n=tA[t],!n)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!n)throw new Error("Wrong `markdown-it` preset, can't be empty");return n.options&&e.set(n.options),n.components&&Object.keys(n.components).forEach(function(t){n.components[t].rules&&e[t].ruler.enableOnly(n.components[t].rules),n.components[t].rules2&&e[t].ruler2.enableOnly(n.components[t].rules2)}),this};At.prototype.enable=function(n,e){let t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.enable(n,!0))},this),t=t.concat(this.inline.ruler2.enable(n,!0));const r=n.filter(function(i){return t.indexOf(i)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};At.prototype.disable=function(n,e){let t=[];Array.isArray(n)||(n=[n]),["core","block","inline"].forEach(function(i){t=t.concat(this[i].ruler.disable(n,!0))},this),t=t.concat(this.inline.ruler2.disable(n,!0));const r=n.filter(function(i){return t.indexOf(i)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};At.prototype.use=function(n){const e=[this].concat(Array.prototype.slice.call(arguments,1));return n.apply(n,e),this};At.prototype.parse=function(n,e){if(typeof n!="string")throw new Error("Input data should be a String");const t=new this.core.State(n,this,e);return this.core.process(t),t.tokens};At.prototype.render=function(n,e){return e=e||{},this.renderer.render(this.parse(n,e),this.options,e)};At.prototype.parseInline=function(n,e){const t=new this.core.State(n,this,e);return t.inlineMode=!0,this.core.process(t),t.tokens};At.prototype.renderInline=function(n,e){return e=e||{},this.renderer.render(this.parseInline(n,e),this.options,e)};function W1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ja={exports:{}},xn={},xs={},Yr={},Qp;function Zs(){if(Qp)return Yr;Qp=1;function n(o){return typeof o>"u"||o===null}function e(o){return typeof o=="object"&&o!==null}function t(o){return Array.isArray(o)?o:n(o)?[]:[o]}function r(o,a){var l,c,d,p;if(a)for(p=Object.keys(a),l=0,c=p.length;l<c;l+=1)d=p[l],o[d]=a[d];return o}function i(o,a){var l="",c;for(c=0;c<a;c+=1)l+=o;return l}function s(o){return o===0&&Number.NEGATIVE_INFINITY===1/o}return Yr.isNothing=n,Yr.isObject=e,Yr.toArray=t,Yr.repeat=i,Yr.isNegativeZero=s,Yr.extend=r,Yr}var hc,Yp;function _a(){if(Yp)return hc;Yp=1;function n(e,t){Error.call(this),this.name="YAMLException",this.reason=e,this.mark=t,this.message=(this.reason||"(unknown reason)")+(this.mark?" "+this.mark.toString():""),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n.prototype.toString=function(t){var r=this.name+": ";return r+=this.reason||"(unknown reason)",!t&&this.mark&&(r+=" "+this.mark.toString()),r},hc=n,hc}var pc,Jp;function uA(){if(Jp)return pc;Jp=1;var n=Zs();function e(t,r,i,s,o){this.name=t,this.buffer=r,this.position=i,this.line=s,this.column=o}return e.prototype.getSnippet=function(r,i){var s,o,a,l,c;if(!this.buffer)return null;for(r=r||4,i=i||75,s="",o=this.position;o>0&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(o-1))===-1;)if(o-=1,this.position-o>i/2-1){s=" ... ",o+=5;break}for(a="",l=this.position;l<this.buffer.length&&`\0\r
\u2028\u2029`.indexOf(this.buffer.charAt(l))===-1;)if(l+=1,l-this.position>i/2-1){a=" ... ",l-=5;break}return c=this.buffer.slice(o,l),n.repeat(" ",r)+s+c+a+`
`+n.repeat(" ",r+this.position-o+s.length)+"^"},e.prototype.toString=function(r){var i,s="";return this.name&&(s+='in "'+this.name+'" '),s+="at line "+(this.line+1)+", column "+(this.column+1),r||(i=this.getSnippet(),i&&(s+=`:
`+i)),s},pc=e,pc}var mc,Xp;function Wn(){if(Xp)return mc;Xp=1;var n=_a(),e=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],t=["scalar","sequence","mapping"];function r(s){var o={};return s!==null&&Object.keys(s).forEach(function(a){s[a].forEach(function(l){o[String(l)]=a})}),o}function i(s,o){if(o=o||{},Object.keys(o).forEach(function(a){if(e.indexOf(a)===-1)throw new n('Unknown option "'+a+'" is met in definition of "'+s+'" YAML type.')}),this.tag=s,this.kind=o.kind||null,this.resolve=o.resolve||function(){return!0},this.construct=o.construct||function(a){return a},this.instanceOf=o.instanceOf||null,this.predicate=o.predicate||null,this.represent=o.represent||null,this.defaultStyle=o.defaultStyle||null,this.styleAliases=r(o.styleAliases||null),t.indexOf(this.kind)===-1)throw new n('Unknown kind "'+this.kind+'" is specified for "'+s+'" YAML type.')}return mc=i,mc}var gc,Zp;function eo(){if(Zp)return gc;Zp=1;var n=Zs(),e=_a(),t=Wn();function r(o,a,l){var c=[];return o.include.forEach(function(d){l=r(d,a,l)}),o[a].forEach(function(d){l.forEach(function(p,g){p.tag===d.tag&&p.kind===d.kind&&c.push(g)}),l.push(d)}),l.filter(function(d,p){return c.indexOf(p)===-1})}function i(){var o={scalar:{},sequence:{},mapping:{},fallback:{}},a,l;function c(d){o[d.kind][d.tag]=o.fallback[d.tag]=d}for(a=0,l=arguments.length;a<l;a+=1)arguments[a].forEach(c);return o}function s(o){this.include=o.include||[],this.implicit=o.implicit||[],this.explicit=o.explicit||[],this.implicit.forEach(function(a){if(a.loadKind&&a.loadKind!=="scalar")throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=r(this,"implicit",[]),this.compiledExplicit=r(this,"explicit",[]),this.compiledTypeMap=i(this.compiledImplicit,this.compiledExplicit)}return s.DEFAULT=null,s.create=function(){var a,l;switch(arguments.length){case 1:a=s.DEFAULT,l=arguments[0];break;case 2:a=arguments[0],l=arguments[1];break;default:throw new e("Wrong number of arguments for Schema.create function")}if(a=n.toArray(a),l=n.toArray(l),!a.every(function(c){return c instanceof s}))throw new e("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!l.every(function(c){return c instanceof t}))throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new s({include:a,explicit:l})},gc=s,gc}var _c,e0;function lA(){if(e0)return _c;e0=1;var n=Wn();return _c=new n("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return e!==null?e:""}}),_c}var yc,n0;function cA(){if(n0)return yc;n0=1;var n=Wn();return yc=new n("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return e!==null?e:[]}}),yc}var bc,t0;function dA(){if(t0)return bc;t0=1;var n=Wn();return bc=new n("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return e!==null?e:{}}}),bc}var vc,r0;function yd(){if(r0)return vc;r0=1;var n=eo();return vc=new n({explicit:[lA(),cA(),dA()]}),vc}var xc,i0;function fA(){if(i0)return xc;i0=1;var n=Wn();function e(i){if(i===null)return!0;var s=i.length;return s===1&&i==="~"||s===4&&(i==="null"||i==="Null"||i==="NULL")}function t(){return null}function r(i){return i===null}return xc=new n("tag:yaml.org,2002:null",{kind:"scalar",resolve:e,construct:t,predicate:r,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"}),xc}var wc,s0;function hA(){if(s0)return wc;s0=1;var n=Wn();function e(i){if(i===null)return!1;var s=i.length;return s===4&&(i==="true"||i==="True"||i==="TRUE")||s===5&&(i==="false"||i==="False"||i==="FALSE")}function t(i){return i==="true"||i==="True"||i==="TRUE"}function r(i){return Object.prototype.toString.call(i)==="[object Boolean]"}return wc=new n("tag:yaml.org,2002:bool",{kind:"scalar",resolve:e,construct:t,predicate:r,represent:{lowercase:function(i){return i?"true":"false"},uppercase:function(i){return i?"TRUE":"FALSE"},camelcase:function(i){return i?"True":"False"}},defaultStyle:"lowercase"}),wc}var Ec,o0;function pA(){if(o0)return Ec;o0=1;var n=Zs(),e=Wn();function t(l){return 48<=l&&l<=57||65<=l&&l<=70||97<=l&&l<=102}function r(l){return 48<=l&&l<=55}function i(l){return 48<=l&&l<=57}function s(l){if(l===null)return!1;var c=l.length,d=0,p=!1,g;if(!c)return!1;if(g=l[d],(g==="-"||g==="+")&&(g=l[++d]),g==="0"){if(d+1===c)return!0;if(g=l[++d],g==="b"){for(d++;d<c;d++)if(g=l[d],g!=="_"){if(g!=="0"&&g!=="1")return!1;p=!0}return p&&g!=="_"}if(g==="x"){for(d++;d<c;d++)if(g=l[d],g!=="_"){if(!t(l.charCodeAt(d)))return!1;p=!0}return p&&g!=="_"}for(;d<c;d++)if(g=l[d],g!=="_"){if(!r(l.charCodeAt(d)))return!1;p=!0}return p&&g!=="_"}if(g==="_")return!1;for(;d<c;d++)if(g=l[d],g!=="_"){if(g===":")break;if(!i(l.charCodeAt(d)))return!1;p=!0}return!p||g==="_"?!1:g!==":"?!0:/^(:[0-5]?[0-9])+$/.test(l.slice(d))}function o(l){var c=l,d=1,p,g,b=[];return c.indexOf("_")!==-1&&(c=c.replace(/_/g,"")),p=c[0],(p==="-"||p==="+")&&(p==="-"&&(d=-1),c=c.slice(1),p=c[0]),c==="0"?0:p==="0"?c[1]==="b"?d*parseInt(c.slice(2),2):c[1]==="x"?d*parseInt(c,16):d*parseInt(c,8):c.indexOf(":")!==-1?(c.split(":").forEach(function(v){b.unshift(parseInt(v,10))}),c=0,g=1,b.forEach(function(v){c+=v*g,g*=60}),d*c):d*parseInt(c,10)}function a(l){return Object.prototype.toString.call(l)==="[object Number]"&&l%1===0&&!n.isNegativeZero(l)}return Ec=new e("tag:yaml.org,2002:int",{kind:"scalar",resolve:s,construct:o,predicate:a,represent:{binary:function(l){return l>=0?"0b"+l.toString(2):"-0b"+l.toString(2).slice(1)},octal:function(l){return l>=0?"0"+l.toString(8):"-0"+l.toString(8).slice(1)},decimal:function(l){return l.toString(10)},hexadecimal:function(l){return l>=0?"0x"+l.toString(16).toUpperCase():"-0x"+l.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Ec}var Ac,a0;function mA(){if(a0)return Ac;a0=1;var n=Zs(),e=Wn(),t=new RegExp("^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function r(l){return!(l===null||!t.test(l)||l[l.length-1]==="_")}function i(l){var c,d,p,g;return c=l.replace(/_/g,"").toLowerCase(),d=c[0]==="-"?-1:1,g=[],"+-".indexOf(c[0])>=0&&(c=c.slice(1)),c===".inf"?d===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:c===".nan"?NaN:c.indexOf(":")>=0?(c.split(":").forEach(function(b){g.unshift(parseFloat(b,10))}),c=0,p=1,g.forEach(function(b){c+=b*p,p*=60}),d*c):d*parseFloat(c,10)}var s=/^[-+]?[0-9]+e/;function o(l,c){var d;if(isNaN(l))switch(c){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===l)switch(c){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===l)switch(c){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(n.isNegativeZero(l))return"-0.0";return d=l.toString(10),s.test(d)?d.replace("e",".e"):d}function a(l){return Object.prototype.toString.call(l)==="[object Number]"&&(l%1!==0||n.isNegativeZero(l))}return Ac=new e("tag:yaml.org,2002:float",{kind:"scalar",resolve:r,construct:i,predicate:a,represent:o,defaultStyle:"lowercase"}),Ac}var Tc,u0;function K1(){if(u0)return Tc;u0=1;var n=eo();return Tc=new n({include:[yd()],implicit:[fA(),hA(),pA(),mA()]}),Tc}var kc,l0;function Q1(){if(l0)return kc;l0=1;var n=eo();return kc=new n({include:[K1()]}),kc}var Ic,c0;function gA(){if(c0)return Ic;c0=1;var n=Wn(),e=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),t=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function r(o){return o===null?!1:e.exec(o)!==null||t.exec(o)!==null}function i(o){var a,l,c,d,p,g,b,v=0,I=null,D,L,V;if(a=e.exec(o),a===null&&(a=t.exec(o)),a===null)throw new Error("Date resolve error");if(l=+a[1],c=+a[2]-1,d=+a[3],!a[4])return new Date(Date.UTC(l,c,d));if(p=+a[4],g=+a[5],b=+a[6],a[7]){for(v=a[7].slice(0,3);v.length<3;)v+="0";v=+v}return a[9]&&(D=+a[10],L=+(a[11]||0),I=(D*60+L)*6e4,a[9]==="-"&&(I=-I)),V=new Date(Date.UTC(l,c,d,p,g,b,v)),I&&V.setTime(V.getTime()-I),V}function s(o){return o.toISOString()}return Ic=new n("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:r,construct:i,instanceOf:Date,represent:s}),Ic}var Cc,d0;function _A(){if(d0)return Cc;d0=1;var n=Wn();function e(t){return t==="<<"||t===null}return Cc=new n("tag:yaml.org,2002:merge",{kind:"scalar",resolve:e}),Cc}function Y1(n){throw new Error('Could not dynamically require "'+n+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Sc,f0;function yA(){if(f0)return Sc;f0=1;var n;try{var e=Y1;n=e("buffer").Buffer}catch{}var t=Wn(),r=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function i(l){if(l===null)return!1;var c,d,p=0,g=l.length,b=r;for(d=0;d<g;d++)if(c=b.indexOf(l.charAt(d)),!(c>64)){if(c<0)return!1;p+=6}return p%8===0}function s(l){var c,d,p=l.replace(/[\r\n=]/g,""),g=p.length,b=r,v=0,I=[];for(c=0;c<g;c++)c%4===0&&c&&(I.push(v>>16&255),I.push(v>>8&255),I.push(v&255)),v=v<<6|b.indexOf(p.charAt(c));return d=g%4*6,d===0?(I.push(v>>16&255),I.push(v>>8&255),I.push(v&255)):d===18?(I.push(v>>10&255),I.push(v>>2&255)):d===12&&I.push(v>>4&255),n?n.from?n.from(I):new n(I):I}function o(l){var c="",d=0,p,g,b=l.length,v=r;for(p=0;p<b;p++)p%3===0&&p&&(c+=v[d>>18&63],c+=v[d>>12&63],c+=v[d>>6&63],c+=v[d&63]),d=(d<<8)+l[p];return g=b%3,g===0?(c+=v[d>>18&63],c+=v[d>>12&63],c+=v[d>>6&63],c+=v[d&63]):g===2?(c+=v[d>>10&63],c+=v[d>>4&63],c+=v[d<<2&63],c+=v[64]):g===1&&(c+=v[d>>2&63],c+=v[d<<4&63],c+=v[64],c+=v[64]),c}function a(l){return n&&n.isBuffer(l)}return Sc=new t("tag:yaml.org,2002:binary",{kind:"scalar",resolve:i,construct:s,predicate:a,represent:o}),Sc}var Rc,h0;function bA(){if(h0)return Rc;h0=1;var n=Wn(),e=Object.prototype.hasOwnProperty,t=Object.prototype.toString;function r(s){if(s===null)return!0;var o=[],a,l,c,d,p,g=s;for(a=0,l=g.length;a<l;a+=1){if(c=g[a],p=!1,t.call(c)!=="[object Object]")return!1;for(d in c)if(e.call(c,d))if(!p)p=!0;else return!1;if(!p)return!1;if(o.indexOf(d)===-1)o.push(d);else return!1}return!0}function i(s){return s!==null?s:[]}return Rc=new n("tag:yaml.org,2002:omap",{kind:"sequence",resolve:r,construct:i}),Rc}var Dc,p0;function vA(){if(p0)return Dc;p0=1;var n=Wn(),e=Object.prototype.toString;function t(i){if(i===null)return!0;var s,o,a,l,c,d=i;for(c=new Array(d.length),s=0,o=d.length;s<o;s+=1){if(a=d[s],e.call(a)!=="[object Object]"||(l=Object.keys(a),l.length!==1))return!1;c[s]=[l[0],a[l[0]]]}return!0}function r(i){if(i===null)return[];var s,o,a,l,c,d=i;for(c=new Array(d.length),s=0,o=d.length;s<o;s+=1)a=d[s],l=Object.keys(a),c[s]=[l[0],a[l[0]]];return c}return Dc=new n("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:t,construct:r}),Dc}var Nc,m0;function xA(){if(m0)return Nc;m0=1;var n=Wn(),e=Object.prototype.hasOwnProperty;function t(i){if(i===null)return!0;var s,o=i;for(s in o)if(e.call(o,s)&&o[s]!==null)return!1;return!0}function r(i){return i!==null?i:{}}return Nc=new n("tag:yaml.org,2002:set",{kind:"mapping",resolve:t,construct:r}),Nc}var Pc,g0;function Zo(){if(g0)return Pc;g0=1;var n=eo();return Pc=new n({include:[Q1()],implicit:[gA(),_A()],explicit:[yA(),bA(),vA(),xA()]}),Pc}var Oc,_0;function wA(){if(_0)return Oc;_0=1;var n=Wn();function e(){return!0}function t(){}function r(){return""}function i(s){return typeof s>"u"}return Oc=new n("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:e,construct:t,predicate:i,represent:r}),Oc}var Lc,y0;function EA(){if(y0)return Lc;y0=1;var n=Wn();function e(s){if(s===null||s.length===0)return!1;var o=s,a=/\/([gim]*)$/.exec(s),l="";return!(o[0]==="/"&&(a&&(l=a[1]),l.length>3||o[o.length-l.length-1]!=="/"))}function t(s){var o=s,a=/\/([gim]*)$/.exec(s),l="";return o[0]==="/"&&(a&&(l=a[1]),o=o.slice(1,o.length-l.length-1)),new RegExp(o,l)}function r(s){var o="/"+s.source+"/";return s.global&&(o+="g"),s.multiline&&(o+="m"),s.ignoreCase&&(o+="i"),o}function i(s){return Object.prototype.toString.call(s)==="[object RegExp]"}return Lc=new n("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:e,construct:t,predicate:i,represent:r}),Lc}var Fc,b0;function AA(){if(b0)return Fc;b0=1;var n;try{var e=Y1;n=e("esprima")}catch{typeof window<"u"&&(n=window.esprima)}var t=Wn();function r(a){if(a===null)return!1;try{var l="("+a+")",c=n.parse(l,{range:!0});return!(c.type!=="Program"||c.body.length!==1||c.body[0].type!=="ExpressionStatement"||c.body[0].expression.type!=="ArrowFunctionExpression"&&c.body[0].expression.type!=="FunctionExpression")}catch{return!1}}function i(a){var l="("+a+")",c=n.parse(l,{range:!0}),d=[],p;if(c.type!=="Program"||c.body.length!==1||c.body[0].type!=="ExpressionStatement"||c.body[0].expression.type!=="ArrowFunctionExpression"&&c.body[0].expression.type!=="FunctionExpression")throw new Error("Failed to resolve function");return c.body[0].expression.params.forEach(function(g){d.push(g.name)}),p=c.body[0].expression.body.range,c.body[0].expression.body.type==="BlockStatement"?new Function(d,l.slice(p[0]+1,p[1]-1)):new Function(d,"return "+l.slice(p[0],p[1]))}function s(a){return a.toString()}function o(a){return Object.prototype.toString.call(a)==="[object Function]"}return Fc=new t("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:r,construct:i,predicate:o,represent:s}),Fc}var Mc,v0;function Du(){if(v0)return Mc;v0=1;var n=eo();return Mc=n.DEFAULT=new n({include:[Zo()],explicit:[wA(),EA(),AA()]}),Mc}var x0;function TA(){if(x0)return xs;x0=1;var n=Zs(),e=_a(),t=uA(),r=Zo(),i=Du(),s=Object.prototype.hasOwnProperty,o=1,a=2,l=3,c=4,d=1,p=2,g=3,b=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,v=/[\x85\u2028\u2029]/,I=/[,\[\]\{\}]/,D=/^(?:!|!!|![a-z\-]+!)$/i,L=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;function V(f){return Object.prototype.toString.call(f)}function W(f){return f===10||f===13}function z(f){return f===9||f===32}function ie(f){return f===9||f===32||f===10||f===13}function ce(f){return f===44||f===91||f===93||f===123||f===125}function S(f){var P;return 48<=f&&f<=57?f-48:(P=f|32,97<=P&&P<=102?P-97+10:-1)}function w(f){return f===120?2:f===117?4:f===85?8:0}function x(f){return 48<=f&&f<=57?f-48:-1}function T(f){return f===48?"\0":f===97?"\x07":f===98?"\b":f===116||f===9?"	":f===110?`
`:f===118?"\v":f===102?"\f":f===114?"\r":f===101?"\x1B":f===32?" ":f===34?'"':f===47?"/":f===92?"\\":f===78?"":f===95?" ":f===76?"\u2028":f===80?"\u2029":""}function A(f){return f<=65535?String.fromCharCode(f):String.fromCharCode((f-65536>>10)+55296,(f-65536&1023)+56320)}function k(f,P,M){P==="__proto__"?Object.defineProperty(f,P,{configurable:!0,enumerable:!0,writable:!0,value:M}):f[P]=M}for(var E=new Array(256),we=new Array(256),Ke=0;Ke<256;Ke++)E[Ke]=T(Ke)?1:0,we[Ke]=T(Ke);function an(f,P){this.input=f,this.filename=P.filename||null,this.schema=P.schema||i,this.onWarning=P.onWarning||null,this.legacy=P.legacy||!1,this.json=P.json||!1,this.listener=P.listener||null,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=f.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function Je(f,P){return new e(P,new t(f.filename,f.input,f.position,f.line,f.position-f.lineStart))}function le(f,P){throw Je(f,P)}function En(f,P){f.onWarning&&f.onWarning.call(null,Je(f,P))}var ct={YAML:function(P,M,J){var G,_,O;P.version!==null&&le(P,"duplication of %YAML directive"),J.length!==1&&le(P,"YAML directive accepts exactly one argument"),G=/^([0-9]+)\.([0-9]+)$/.exec(J[0]),G===null&&le(P,"ill-formed argument of the YAML directive"),_=parseInt(G[1],10),O=parseInt(G[2],10),_!==1&&le(P,"unacceptable YAML version of the document"),P.version=J[0],P.checkLineBreaks=O<2,O!==1&&O!==2&&En(P,"unsupported YAML version of the document")},TAG:function(P,M,J){var G,_;J.length!==2&&le(P,"TAG directive accepts exactly two arguments"),G=J[0],_=J[1],D.test(G)||le(P,"ill-formed tag handle (first argument) of the TAG directive"),s.call(P.tagMap,G)&&le(P,'there is a previously declared suffix for "'+G+'" tag handle'),L.test(_)||le(P,"ill-formed tag prefix (second argument) of the TAG directive"),P.tagMap[G]=_}};function bn(f,P,M,J){var G,_,O,q;if(P<M){if(q=f.input.slice(P,M),J)for(G=0,_=q.length;G<_;G+=1)O=q.charCodeAt(G),O===9||32<=O&&O<=1114111||le(f,"expected valid JSON character");else b.test(q)&&le(f,"the stream contains non-printable characters");f.result+=q}}function An(f,P,M,J){var G,_,O,q;for(n.isObject(M)||le(f,"cannot merge mappings; the provided source object is unacceptable"),G=Object.keys(M),O=0,q=G.length;O<q;O+=1)_=G[O],s.call(P,_)||(k(P,_,M[_]),J[_]=!0)}function Rn(f,P,M,J,G,_,O,q){var $,X;if(Array.isArray(G))for(G=Array.prototype.slice.call(G),$=0,X=G.length;$<X;$+=1)Array.isArray(G[$])&&le(f,"nested arrays are not supported inside keys"),typeof G=="object"&&V(G[$])==="[object Object]"&&(G[$]="[object Object]");if(typeof G=="object"&&V(G)==="[object Object]"&&(G="[object Object]"),G=String(G),P===null&&(P={}),J==="tag:yaml.org,2002:merge")if(Array.isArray(_))for($=0,X=_.length;$<X;$+=1)An(f,P,_[$],M);else An(f,P,_,M);else!f.json&&!s.call(M,G)&&s.call(P,G)&&(f.line=O||f.line,f.position=q||f.position,le(f,"duplicated mapping key")),k(P,G,_),delete M[G];return P}function _t(f){var P;P=f.input.charCodeAt(f.position),P===10?f.position++:P===13?(f.position++,f.input.charCodeAt(f.position)===10&&f.position++):le(f,"a line break is expected"),f.line+=1,f.lineStart=f.position}function Xe(f,P,M){for(var J=0,G=f.input.charCodeAt(f.position);G!==0;){for(;z(G);)G=f.input.charCodeAt(++f.position);if(P&&G===35)do G=f.input.charCodeAt(++f.position);while(G!==10&&G!==13&&G!==0);if(W(G))for(_t(f),G=f.input.charCodeAt(f.position),J++,f.lineIndent=0;G===32;)f.lineIndent++,G=f.input.charCodeAt(++f.position);else break}return M!==-1&&J!==0&&f.lineIndent<M&&En(f,"deficient indentation"),J}function Un(f){var P=f.position,M;return M=f.input.charCodeAt(P),!!((M===45||M===46)&&M===f.input.charCodeAt(P+1)&&M===f.input.charCodeAt(P+2)&&(P+=3,M=f.input.charCodeAt(P),M===0||ie(M)))}function Kn(f,P){P===1?f.result+=" ":P>1&&(f.result+=n.repeat(`
`,P-1))}function yt(f,P,M){var J,G,_,O,q,$,X,Y,H=f.kind,he=f.result,se;if(se=f.input.charCodeAt(f.position),ie(se)||ce(se)||se===35||se===38||se===42||se===33||se===124||se===62||se===39||se===34||se===37||se===64||se===96||(se===63||se===45)&&(G=f.input.charCodeAt(f.position+1),ie(G)||M&&ce(G)))return!1;for(f.kind="scalar",f.result="",_=O=f.position,q=!1;se!==0;){if(se===58){if(G=f.input.charCodeAt(f.position+1),ie(G)||M&&ce(G))break}else if(se===35){if(J=f.input.charCodeAt(f.position-1),ie(J))break}else{if(f.position===f.lineStart&&Un(f)||M&&ce(se))break;if(W(se))if($=f.line,X=f.lineStart,Y=f.lineIndent,Xe(f,!1,-1),f.lineIndent>=P){q=!0,se=f.input.charCodeAt(f.position);continue}else{f.position=O,f.line=$,f.lineStart=X,f.lineIndent=Y;break}}q&&(bn(f,_,O,!1),Kn(f,f.line-$),_=O=f.position,q=!1),z(se)||(O=f.position+1),se=f.input.charCodeAt(++f.position)}return bn(f,_,O,!1),f.result?!0:(f.kind=H,f.result=he,!1)}function $t(f,P){var M,J,G;if(M=f.input.charCodeAt(f.position),M!==39)return!1;for(f.kind="scalar",f.result="",f.position++,J=G=f.position;(M=f.input.charCodeAt(f.position))!==0;)if(M===39)if(bn(f,J,f.position,!0),M=f.input.charCodeAt(++f.position),M===39)J=f.position,f.position++,G=f.position;else return!0;else W(M)?(bn(f,J,G,!0),Kn(f,Xe(f,!1,P)),J=G=f.position):f.position===f.lineStart&&Un(f)?le(f,"unexpected end of the document within a single quoted scalar"):(f.position++,G=f.position);le(f,"unexpected end of the stream within a single quoted scalar")}function Qn(f,P){var M,J,G,_,O,q;if(q=f.input.charCodeAt(f.position),q!==34)return!1;for(f.kind="scalar",f.result="",f.position++,M=J=f.position;(q=f.input.charCodeAt(f.position))!==0;){if(q===34)return bn(f,M,f.position,!0),f.position++,!0;if(q===92){if(bn(f,M,f.position,!0),q=f.input.charCodeAt(++f.position),W(q))Xe(f,!1,P);else if(q<256&&E[q])f.result+=we[q],f.position++;else if((O=w(q))>0){for(G=O,_=0;G>0;G--)q=f.input.charCodeAt(++f.position),(O=S(q))>=0?_=(_<<4)+O:le(f,"expected hexadecimal character");f.result+=A(_),f.position++}else le(f,"unknown escape sequence");M=J=f.position}else W(q)?(bn(f,M,J,!0),Kn(f,Xe(f,!1,P)),M=J=f.position):f.position===f.lineStart&&Un(f)?le(f,"unexpected end of the document within a double quoted scalar"):(f.position++,J=f.position)}le(f,"unexpected end of the stream within a double quoted scalar")}function Tr(f,P){var M=!0,J,G=f.tag,_,O=f.anchor,q,$,X,Y,H,he={},se,ke,Be,Me;if(Me=f.input.charCodeAt(f.position),Me===91)$=93,H=!1,_=[];else if(Me===123)$=125,H=!0,_={};else return!1;for(f.anchor!==null&&(f.anchorMap[f.anchor]=_),Me=f.input.charCodeAt(++f.position);Me!==0;){if(Xe(f,!0,P),Me=f.input.charCodeAt(f.position),Me===$)return f.position++,f.tag=G,f.anchor=O,f.kind=H?"mapping":"sequence",f.result=_,!0;M||le(f,"missed comma between flow collection entries"),ke=se=Be=null,X=Y=!1,Me===63&&(q=f.input.charCodeAt(f.position+1),ie(q)&&(X=Y=!0,f.position++,Xe(f,!0,P))),J=f.line,de(f,P,o,!1,!0),ke=f.tag,se=f.result,Xe(f,!0,P),Me=f.input.charCodeAt(f.position),(Y||f.line===J)&&Me===58&&(X=!0,Me=f.input.charCodeAt(++f.position),Xe(f,!0,P),de(f,P,o,!1,!0),Be=f.result),H?Rn(f,_,he,ke,se,Be):X?_.push(Rn(f,null,he,ke,se,Be)):_.push(se),Xe(f,!0,P),Me=f.input.charCodeAt(f.position),Me===44?(M=!0,Me=f.input.charCodeAt(++f.position)):M=!1}le(f,"unexpected end of the stream within a flow collection")}function C(f,P){var M,J,G=d,_=!1,O=!1,q=P,$=0,X=!1,Y,H;if(H=f.input.charCodeAt(f.position),H===124)J=!1;else if(H===62)J=!0;else return!1;for(f.kind="scalar",f.result="";H!==0;)if(H=f.input.charCodeAt(++f.position),H===43||H===45)d===G?G=H===43?g:p:le(f,"repeat of a chomping mode identifier");else if((Y=x(H))>=0)Y===0?le(f,"bad explicit indentation width of a block scalar; it cannot be less than one"):O?le(f,"repeat of an indentation width identifier"):(q=P+Y-1,O=!0);else break;if(z(H)){do H=f.input.charCodeAt(++f.position);while(z(H));if(H===35)do H=f.input.charCodeAt(++f.position);while(!W(H)&&H!==0)}for(;H!==0;){for(_t(f),f.lineIndent=0,H=f.input.charCodeAt(f.position);(!O||f.lineIndent<q)&&H===32;)f.lineIndent++,H=f.input.charCodeAt(++f.position);if(!O&&f.lineIndent>q&&(q=f.lineIndent),W(H)){$++;continue}if(f.lineIndent<q){G===g?f.result+=n.repeat(`
`,_?1+$:$):G===d&&_&&(f.result+=`
`);break}for(J?z(H)?(X=!0,f.result+=n.repeat(`
`,_?1+$:$)):X?(X=!1,f.result+=n.repeat(`
`,$+1)):$===0?_&&(f.result+=" "):f.result+=n.repeat(`
`,$):f.result+=n.repeat(`
`,_?1+$:$),_=!0,O=!0,$=0,M=f.position;!W(H)&&H!==0;)H=f.input.charCodeAt(++f.position);bn(f,M,f.position,!1)}return!0}function N(f,P){var M,J=f.tag,G=f.anchor,_=[],O,q=!1,$;for(f.anchor!==null&&(f.anchorMap[f.anchor]=_),$=f.input.charCodeAt(f.position);$!==0&&!($!==45||(O=f.input.charCodeAt(f.position+1),!ie(O)));){if(q=!0,f.position++,Xe(f,!0,-1)&&f.lineIndent<=P){_.push(null),$=f.input.charCodeAt(f.position);continue}if(M=f.line,de(f,P,l,!1,!0),_.push(f.result),Xe(f,!0,-1),$=f.input.charCodeAt(f.position),(f.line===M||f.lineIndent>P)&&$!==0)le(f,"bad indentation of a sequence entry");else if(f.lineIndent<P)break}return q?(f.tag=J,f.anchor=G,f.kind="sequence",f.result=_,!0):!1}function U(f,P,M){var J,G,_,O,q=f.tag,$=f.anchor,X={},Y={},H=null,he=null,se=null,ke=!1,Be=!1,Me;for(f.anchor!==null&&(f.anchorMap[f.anchor]=X),Me=f.input.charCodeAt(f.position);Me!==0;){if(J=f.input.charCodeAt(f.position+1),_=f.line,O=f.position,(Me===63||Me===58)&&ie(J))Me===63?(ke&&(Rn(f,X,Y,H,he,null),H=he=se=null),Be=!0,ke=!0,G=!0):ke?(ke=!1,G=!0):le(f,"incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"),f.position+=1,Me=J;else if(de(f,M,a,!1,!0))if(f.line===_){for(Me=f.input.charCodeAt(f.position);z(Me);)Me=f.input.charCodeAt(++f.position);if(Me===58)Me=f.input.charCodeAt(++f.position),ie(Me)||le(f,"a whitespace character is expected after the key-value separator within a block mapping"),ke&&(Rn(f,X,Y,H,he,null),H=he=se=null),Be=!0,ke=!1,G=!1,H=f.tag,he=f.result;else if(Be)le(f,"can not read an implicit mapping pair; a colon is missed");else return f.tag=q,f.anchor=$,!0}else if(Be)le(f,"can not read a block mapping entry; a multiline key may not be an implicit key");else return f.tag=q,f.anchor=$,!0;else break;if((f.line===_||f.lineIndent>P)&&(de(f,P,c,!0,G)&&(ke?he=f.result:se=f.result),ke||(Rn(f,X,Y,H,he,se,_,O),H=he=se=null),Xe(f,!0,-1),Me=f.input.charCodeAt(f.position)),f.lineIndent>P&&Me!==0)le(f,"bad indentation of a mapping entry");else if(f.lineIndent<P)break}return ke&&Rn(f,X,Y,H,he,null),Be&&(f.tag=q,f.anchor=$,f.kind="mapping",f.result=X),Be}function oe(f){var P,M=!1,J=!1,G,_,O;if(O=f.input.charCodeAt(f.position),O!==33)return!1;if(f.tag!==null&&le(f,"duplication of a tag property"),O=f.input.charCodeAt(++f.position),O===60?(M=!0,O=f.input.charCodeAt(++f.position)):O===33?(J=!0,G="!!",O=f.input.charCodeAt(++f.position)):G="!",P=f.position,M){do O=f.input.charCodeAt(++f.position);while(O!==0&&O!==62);f.position<f.length?(_=f.input.slice(P,f.position),O=f.input.charCodeAt(++f.position)):le(f,"unexpected end of the stream within a verbatim tag")}else{for(;O!==0&&!ie(O);)O===33&&(J?le(f,"tag suffix cannot contain exclamation marks"):(G=f.input.slice(P-1,f.position+1),D.test(G)||le(f,"named tag handle cannot contain such characters"),J=!0,P=f.position+1)),O=f.input.charCodeAt(++f.position);_=f.input.slice(P,f.position),I.test(_)&&le(f,"tag suffix cannot contain flow indicator characters")}return _&&!L.test(_)&&le(f,"tag name cannot contain such characters: "+_),M?f.tag=_:s.call(f.tagMap,G)?f.tag=f.tagMap[G]+_:G==="!"?f.tag="!"+_:G==="!!"?f.tag="tag:yaml.org,2002:"+_:le(f,'undeclared tag handle "'+G+'"'),!0}function ee(f){var P,M;if(M=f.input.charCodeAt(f.position),M!==38)return!1;for(f.anchor!==null&&le(f,"duplication of an anchor property"),M=f.input.charCodeAt(++f.position),P=f.position;M!==0&&!ie(M)&&!ce(M);)M=f.input.charCodeAt(++f.position);return f.position===P&&le(f,"name of an anchor node must contain at least one character"),f.anchor=f.input.slice(P,f.position),!0}function te(f){var P,M,J;if(J=f.input.charCodeAt(f.position),J!==42)return!1;for(J=f.input.charCodeAt(++f.position),P=f.position;J!==0&&!ie(J)&&!ce(J);)J=f.input.charCodeAt(++f.position);return f.position===P&&le(f,"name of an alias node must contain at least one character"),M=f.input.slice(P,f.position),s.call(f.anchorMap,M)||le(f,'unidentified alias "'+M+'"'),f.result=f.anchorMap[M],Xe(f,!0,-1),!0}function de(f,P,M,J,G){var _,O,q,$=1,X=!1,Y=!1,H,he,se,ke,Be;if(f.listener!==null&&f.listener("open",f),f.tag=null,f.anchor=null,f.kind=null,f.result=null,_=O=q=c===M||l===M,J&&Xe(f,!0,-1)&&(X=!0,f.lineIndent>P?$=1:f.lineIndent===P?$=0:f.lineIndent<P&&($=-1)),$===1)for(;oe(f)||ee(f);)Xe(f,!0,-1)?(X=!0,q=_,f.lineIndent>P?$=1:f.lineIndent===P?$=0:f.lineIndent<P&&($=-1)):q=!1;if(q&&(q=X||G),($===1||c===M)&&(o===M||a===M?ke=P:ke=P+1,Be=f.position-f.lineStart,$===1?q&&(N(f,Be)||U(f,Be,ke))||Tr(f,ke)?Y=!0:(O&&C(f,ke)||$t(f,ke)||Qn(f,ke)?Y=!0:te(f)?(Y=!0,(f.tag!==null||f.anchor!==null)&&le(f,"alias node should not have any properties")):yt(f,ke,o===M)&&(Y=!0,f.tag===null&&(f.tag="?")),f.anchor!==null&&(f.anchorMap[f.anchor]=f.result)):$===0&&(Y=q&&N(f,Be))),f.tag!==null&&f.tag!=="!")if(f.tag==="?"){for(f.result!==null&&f.kind!=="scalar"&&le(f,'unacceptable node kind for !<?> tag; it should be "scalar", not "'+f.kind+'"'),H=0,he=f.implicitTypes.length;H<he;H+=1)if(se=f.implicitTypes[H],se.resolve(f.result)){f.result=se.construct(f.result),f.tag=se.tag,f.anchor!==null&&(f.anchorMap[f.anchor]=f.result);break}}else s.call(f.typeMap[f.kind||"fallback"],f.tag)?(se=f.typeMap[f.kind||"fallback"][f.tag],f.result!==null&&se.kind!==f.kind&&le(f,"unacceptable node kind for !<"+f.tag+'> tag; it should be "'+se.kind+'", not "'+f.kind+'"'),se.resolve(f.result)?(f.result=se.construct(f.result),f.anchor!==null&&(f.anchorMap[f.anchor]=f.result)):le(f,"cannot resolve a node with !<"+f.tag+"> explicit tag")):le(f,"unknown tag !<"+f.tag+">");return f.listener!==null&&f.listener("close",f),f.tag!==null||f.anchor!==null||Y}function ae(f){var P=f.position,M,J,G,_=!1,O;for(f.version=null,f.checkLineBreaks=f.legacy,f.tagMap={},f.anchorMap={};(O=f.input.charCodeAt(f.position))!==0&&(Xe(f,!0,-1),O=f.input.charCodeAt(f.position),!(f.lineIndent>0||O!==37));){for(_=!0,O=f.input.charCodeAt(++f.position),M=f.position;O!==0&&!ie(O);)O=f.input.charCodeAt(++f.position);for(J=f.input.slice(M,f.position),G=[],J.length<1&&le(f,"directive name must not be less than one character in length");O!==0;){for(;z(O);)O=f.input.charCodeAt(++f.position);if(O===35){do O=f.input.charCodeAt(++f.position);while(O!==0&&!W(O));break}if(W(O))break;for(M=f.position;O!==0&&!ie(O);)O=f.input.charCodeAt(++f.position);G.push(f.input.slice(M,f.position))}O!==0&&_t(f),s.call(ct,J)?ct[J](f,J,G):En(f,'unknown document directive "'+J+'"')}if(Xe(f,!0,-1),f.lineIndent===0&&f.input.charCodeAt(f.position)===45&&f.input.charCodeAt(f.position+1)===45&&f.input.charCodeAt(f.position+2)===45?(f.position+=3,Xe(f,!0,-1)):_&&le(f,"directives end mark is expected"),de(f,f.lineIndent-1,c,!1,!0),Xe(f,!0,-1),f.checkLineBreaks&&v.test(f.input.slice(P,f.position))&&En(f,"non-ASCII line breaks are interpreted as content"),f.documents.push(f.result),f.position===f.lineStart&&Un(f)){f.input.charCodeAt(f.position)===46&&(f.position+=3,Xe(f,!0,-1));return}if(f.position<f.length-1)le(f,"end of the stream or a document separator is expected");else return}function re(f,P){f=String(f),P=P||{},f.length!==0&&(f.charCodeAt(f.length-1)!==10&&f.charCodeAt(f.length-1)!==13&&(f+=`
`),f.charCodeAt(0)===65279&&(f=f.slice(1)));var M=new an(f,P),J=f.indexOf("\0");for(J!==-1&&(M.position=J,le(M,"null byte is not allowed in input")),M.input+="\0";M.input.charCodeAt(M.position)===32;)M.lineIndent+=1,M.position+=1;for(;M.position<M.length-1;)ae(M);return M.documents}function ne(f,P,M){P!==null&&typeof P=="object"&&typeof M>"u"&&(M=P,P=null);var J=re(f,M);if(typeof P!="function")return J;for(var G=0,_=J.length;G<_;G+=1)P(J[G])}function Ee(f,P){var M=re(f,P);if(M.length!==0){if(M.length===1)return M[0];throw new e("expected a single document in the stream, but found more")}}function pe(f,P,M){return typeof P=="object"&&P!==null&&typeof M>"u"&&(M=P,P=null),ne(f,P,n.extend({schema:r},M))}function ve(f,P){return Ee(f,n.extend({schema:r},P))}return xs.loadAll=ne,xs.load=Ee,xs.safeLoadAll=pe,xs.safeLoad=ve,xs}var Xa={},w0;function kA(){if(w0)return Xa;w0=1;var n=Zs(),e=_a(),t=Du(),r=Zo(),i=Object.prototype.toString,s=Object.prototype.hasOwnProperty,o=9,a=10,l=13,c=32,d=33,p=34,g=35,b=37,v=38,I=39,D=42,L=44,V=45,W=58,z=61,ie=62,ce=63,S=64,w=91,x=93,T=96,A=123,k=124,E=125,we={};we[0]="\\0",we[7]="\\a",we[8]="\\b",we[9]="\\t",we[10]="\\n",we[11]="\\v",we[12]="\\f",we[13]="\\r",we[27]="\\e",we[34]='\\"',we[92]="\\\\",we[133]="\\N",we[160]="\\_",we[8232]="\\L",we[8233]="\\P";var Ke=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];function an(_,O){var q,$,X,Y,H,he,se;if(O===null)return{};for(q={},$=Object.keys(O),X=0,Y=$.length;X<Y;X+=1)H=$[X],he=String(O[H]),H.slice(0,2)==="!!"&&(H="tag:yaml.org,2002:"+H.slice(2)),se=_.compiledTypeMap.fallback[H],se&&s.call(se.styleAliases,he)&&(he=se.styleAliases[he]),q[H]=he;return q}function Je(_){var O,q,$;if(O=_.toString(16).toUpperCase(),_<=255)q="x",$=2;else if(_<=65535)q="u",$=4;else if(_<=4294967295)q="U",$=8;else throw new e("code point within a string may not be greater than 0xFFFFFFFF");return"\\"+q+n.repeat("0",$-O.length)+O}function le(_){this.schema=_.schema||t,this.indent=Math.max(1,_.indent||2),this.noArrayIndent=_.noArrayIndent||!1,this.skipInvalid=_.skipInvalid||!1,this.flowLevel=n.isNothing(_.flowLevel)?-1:_.flowLevel,this.styleMap=an(this.schema,_.styles||null),this.sortKeys=_.sortKeys||!1,this.lineWidth=_.lineWidth||80,this.noRefs=_.noRefs||!1,this.noCompatMode=_.noCompatMode||!1,this.condenseFlow=_.condenseFlow||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function En(_,O){for(var q=n.repeat(" ",O),$=0,X=-1,Y="",H,he=_.length;$<he;)X=_.indexOf(`
`,$),X===-1?(H=_.slice($),$=he):(H=_.slice($,X+1),$=X+1),H.length&&H!==`
`&&(Y+=q),Y+=H;return Y}function ct(_,O){return`
`+n.repeat(" ",_.indent*O)}function bn(_,O){var q,$,X;for(q=0,$=_.implicitTypes.length;q<$;q+=1)if(X=_.implicitTypes[q],X.resolve(O))return!0;return!1}function An(_){return _===c||_===o}function Rn(_){return 32<=_&&_<=126||161<=_&&_<=55295&&_!==8232&&_!==8233||57344<=_&&_<=65533&&_!==65279||65536<=_&&_<=1114111}function _t(_){return Rn(_)&&!An(_)&&_!==65279&&_!==l&&_!==a}function Xe(_,O){return Rn(_)&&_!==65279&&_!==L&&_!==w&&_!==x&&_!==A&&_!==E&&_!==W&&(_!==g||O&&_t(O))}function Un(_){return Rn(_)&&_!==65279&&!An(_)&&_!==V&&_!==ce&&_!==W&&_!==L&&_!==w&&_!==x&&_!==A&&_!==E&&_!==g&&_!==v&&_!==D&&_!==d&&_!==k&&_!==z&&_!==ie&&_!==I&&_!==p&&_!==b&&_!==S&&_!==T}function Kn(_){var O=/^\n* /;return O.test(_)}var yt=1,$t=2,Qn=3,Tr=4,C=5;function N(_,O,q,$,X){var Y,H,he,se=!1,ke=!1,Be=$!==-1,Me=-1,Qe=Un(_.charCodeAt(0))&&!An(_.charCodeAt(_.length-1));if(O)for(Y=0;Y<_.length;Y++){if(H=_.charCodeAt(Y),!Rn(H))return C;he=Y>0?_.charCodeAt(Y-1):null,Qe=Qe&&Xe(H,he)}else{for(Y=0;Y<_.length;Y++){if(H=_.charCodeAt(Y),H===a)se=!0,Be&&(ke=ke||Y-Me-1>$&&_[Me+1]!==" ",Me=Y);else if(!Rn(H))return C;he=Y>0?_.charCodeAt(Y-1):null,Qe=Qe&&Xe(H,he)}ke=ke||Be&&Y-Me-1>$&&_[Me+1]!==" "}return!se&&!ke?Qe&&!X(_)?yt:$t:q>9&&Kn(_)?C:ke?Tr:Qn}function U(_,O,q,$){_.dump=(function(){if(O.length===0)return"''";if(!_.noCompatMode&&Ke.indexOf(O)!==-1)return"'"+O+"'";var X=_.indent*Math.max(1,q),Y=_.lineWidth===-1?-1:Math.max(Math.min(_.lineWidth,40),_.lineWidth-X),H=$||_.flowLevel>-1&&q>=_.flowLevel;function he(se){return bn(_,se)}switch(N(O,H,_.indent,Y,he)){case yt:return O;case $t:return"'"+O.replace(/'/g,"''")+"'";case Qn:return"|"+oe(O,_.indent)+ee(En(O,X));case Tr:return">"+oe(O,_.indent)+ee(En(te(O,Y),X));case C:return'"'+ae(O)+'"';default:throw new e("impossible error: invalid scalar style")}})()}function oe(_,O){var q=Kn(_)?String(O):"",$=_[_.length-1]===`
`,X=$&&(_[_.length-2]===`
`||_===`
`),Y=X?"+":$?"":"-";return q+Y+`
`}function ee(_){return _[_.length-1]===`
`?_.slice(0,-1):_}function te(_,O){for(var q=/(\n+)([^\n]*)/g,$=(function(){var ke=_.indexOf(`
`);return ke=ke!==-1?ke:_.length,q.lastIndex=ke,de(_.slice(0,ke),O)})(),X=_[0]===`
`||_[0]===" ",Y,H;H=q.exec(_);){var he=H[1],se=H[2];Y=se[0]===" ",$+=he+(!X&&!Y&&se!==""?`
`:"")+de(se,O),X=Y}return $}function de(_,O){if(_===""||_[0]===" ")return _;for(var q=/ [^ ]/g,$,X=0,Y,H=0,he=0,se="";$=q.exec(_);)he=$.index,he-X>O&&(Y=H>X?H:he,se+=`
`+_.slice(X,Y),X=Y+1),H=he;return se+=`
`,_.length-X>O&&H>X?se+=_.slice(X,H)+`
`+_.slice(H+1):se+=_.slice(X),se.slice(1)}function ae(_){for(var O="",q,$,X,Y=0;Y<_.length;Y++){if(q=_.charCodeAt(Y),q>=55296&&q<=56319&&($=_.charCodeAt(Y+1),$>=56320&&$<=57343)){O+=Je((q-55296)*1024+$-56320+65536),Y++;continue}X=we[q],O+=!X&&Rn(q)?_[Y]:X||Je(q)}return O}function re(_,O,q){var $="",X=_.tag,Y,H;for(Y=0,H=q.length;Y<H;Y+=1)f(_,O,q[Y],!1,!1)&&(Y!==0&&($+=","+(_.condenseFlow?"":" ")),$+=_.dump);_.tag=X,_.dump="["+$+"]"}function ne(_,O,q,$){var X="",Y=_.tag,H,he;for(H=0,he=q.length;H<he;H+=1)f(_,O+1,q[H],!0,!0)&&((!$||H!==0)&&(X+=ct(_,O)),_.dump&&a===_.dump.charCodeAt(0)?X+="-":X+="- ",X+=_.dump);_.tag=Y,_.dump=X||"[]"}function Ee(_,O,q){var $="",X=_.tag,Y=Object.keys(q),H,he,se,ke,Be;for(H=0,he=Y.length;H<he;H+=1)Be="",H!==0&&(Be+=", "),_.condenseFlow&&(Be+='"'),se=Y[H],ke=q[se],f(_,O,se,!1,!1)&&(_.dump.length>1024&&(Be+="? "),Be+=_.dump+(_.condenseFlow?'"':"")+":"+(_.condenseFlow?"":" "),f(_,O,ke,!1,!1)&&(Be+=_.dump,$+=Be));_.tag=X,_.dump="{"+$+"}"}function pe(_,O,q,$){var X="",Y=_.tag,H=Object.keys(q),he,se,ke,Be,Me,Qe;if(_.sortKeys===!0)H.sort();else if(typeof _.sortKeys=="function")H.sort(_.sortKeys);else if(_.sortKeys)throw new e("sortKeys must be a boolean or a function");for(he=0,se=H.length;he<se;he+=1)Qe="",(!$||he!==0)&&(Qe+=ct(_,O)),ke=H[he],Be=q[ke],f(_,O+1,ke,!0,!0,!0)&&(Me=_.tag!==null&&_.tag!=="?"||_.dump&&_.dump.length>1024,Me&&(_.dump&&a===_.dump.charCodeAt(0)?Qe+="?":Qe+="? "),Qe+=_.dump,Me&&(Qe+=ct(_,O)),f(_,O+1,Be,!0,Me)&&(_.dump&&a===_.dump.charCodeAt(0)?Qe+=":":Qe+=": ",Qe+=_.dump,X+=Qe));_.tag=Y,_.dump=X||"{}"}function ve(_,O,q){var $,X,Y,H,he,se;for(X=q?_.explicitTypes:_.implicitTypes,Y=0,H=X.length;Y<H;Y+=1)if(he=X[Y],(he.instanceOf||he.predicate)&&(!he.instanceOf||typeof O=="object"&&O instanceof he.instanceOf)&&(!he.predicate||he.predicate(O))){if(_.tag=q?he.tag:"?",he.represent){if(se=_.styleMap[he.tag]||he.defaultStyle,i.call(he.represent)==="[object Function]")$=he.represent(O,se);else if(s.call(he.represent,se))$=he.represent[se](O,se);else throw new e("!<"+he.tag+'> tag resolver accepts not "'+se+'" style');_.dump=$}return!0}return!1}function f(_,O,q,$,X,Y){_.tag=null,_.dump=q,ve(_,q,!1)||ve(_,q,!0);var H=i.call(_.dump);$&&($=_.flowLevel<0||_.flowLevel>O);var he=H==="[object Object]"||H==="[object Array]",se,ke;if(he&&(se=_.duplicates.indexOf(q),ke=se!==-1),(_.tag!==null&&_.tag!=="?"||ke||_.indent!==2&&O>0)&&(X=!1),ke&&_.usedDuplicates[se])_.dump="*ref_"+se;else{if(he&&ke&&!_.usedDuplicates[se]&&(_.usedDuplicates[se]=!0),H==="[object Object]")$&&Object.keys(_.dump).length!==0?(pe(_,O,_.dump,X),ke&&(_.dump="&ref_"+se+_.dump)):(Ee(_,O,_.dump),ke&&(_.dump="&ref_"+se+" "+_.dump));else if(H==="[object Array]"){var Be=_.noArrayIndent&&O>0?O-1:O;$&&_.dump.length!==0?(ne(_,Be,_.dump,X),ke&&(_.dump="&ref_"+se+_.dump)):(re(_,Be,_.dump),ke&&(_.dump="&ref_"+se+" "+_.dump))}else if(H==="[object String]")_.tag!=="?"&&U(_,_.dump,O,Y);else{if(_.skipInvalid)return!1;throw new e("unacceptable kind of an object to dump "+H)}_.tag!==null&&_.tag!=="?"&&(_.dump="!<"+_.tag+"> "+_.dump)}return!0}function P(_,O){var q=[],$=[],X,Y;for(M(_,q,$),X=0,Y=$.length;X<Y;X+=1)O.duplicates.push(q[$[X]]);O.usedDuplicates=new Array(Y)}function M(_,O,q){var $,X,Y;if(_!==null&&typeof _=="object")if(X=O.indexOf(_),X!==-1)q.indexOf(X)===-1&&q.push(X);else if(O.push(_),Array.isArray(_))for(X=0,Y=_.length;X<Y;X+=1)M(_[X],O,q);else for($=Object.keys(_),X=0,Y=$.length;X<Y;X+=1)M(_[$[X]],O,q)}function J(_,O){O=O||{};var q=new le(O);return q.noRefs||P(_,q),f(q,0,_,!0,!0)?q.dump+`
`:""}function G(_,O){return J(_,n.extend({schema:r},O))}return Xa.dump=J,Xa.safeDump=G,Xa}var E0;function IA(){if(E0)return xn;E0=1;var n=TA(),e=kA();function t(r){return function(){throw new Error("Function "+r+" is deprecated and cannot be used.")}}return xn.Type=Wn(),xn.Schema=eo(),xn.FAILSAFE_SCHEMA=yd(),xn.JSON_SCHEMA=K1(),xn.CORE_SCHEMA=Q1(),xn.DEFAULT_SAFE_SCHEMA=Zo(),xn.DEFAULT_FULL_SCHEMA=Du(),xn.load=n.load,xn.loadAll=n.loadAll,xn.safeLoad=n.safeLoad,xn.safeLoadAll=n.safeLoadAll,xn.dump=e.dump,xn.safeDump=e.safeDump,xn.YAMLException=_a(),xn.MINIMAL_SCHEMA=yd(),xn.SAFE_SCHEMA=Zo(),xn.DEFAULT_SCHEMA=Du(),xn.scan=t("scan"),xn.parse=t("parse"),xn.compose=t("compose"),xn.addConstructor=t("addConstructor"),xn}var Vc,A0;function CA(){if(A0)return Vc;A0=1;var n=IA();return Vc=n,Vc}var T0;function SA(){if(T0)return Ja.exports;T0=1;var n=CA(),e="\\ufeff?",t=typeof process<"u"?process.platform:"",r="^("+e+"(= yaml =|---)$([\\s\\S]*?)^(?:\\2|\\.\\.\\.)\\s*$"+(t==="win32"?"\\r?":"")+"(?:\\n)?)",i=new RegExp(r,"m");Ja.exports=s,Ja.exports.test=l;function s(c,d){c=c||"";var p={allowUnsafe:!1};d=d instanceof Object?{...p,...d}:p,d.allowUnsafe=!!d.allowUnsafe;var g=c.split(/(\r?\n)/);return g[0]&&/= yaml =|---/.test(g[0])?a(c,d.allowUnsafe):{attributes:{},body:c,bodyBegin:1}}function o(c,d){for(var p=1,g=d.indexOf(`
`),b=c.index+c[0].length;g!==-1;){if(g>=b)return p;p++,g=d.indexOf(`
`,g+1)}return p}function a(c,d){var p=i.exec(c);if(!p)return{attributes:{},body:c,bodyBegin:1};var g=d?n.load:n.safeLoad,b=p[p.length-1].replace(/^\s+|\s+$/g,""),v=g(b)||{},I=c.replace(p[0],""),D=o(p,c);return{attributes:v,body:I,bodyBegin:D,frontmatter:b}}function l(c){return c=c||"",i.test(c)}return Ja.exports}var RA=SA();const J1=W1(RA);var jc,k0;function DA(){if(k0)return jc;k0=1;function n(R){return R instanceof Map?R.clear=R.delete=R.set=function(){throw new Error("map is read-only")}:R instanceof Set&&(R.add=R.clear=R.delete=function(){throw new Error("set is read-only")}),Object.freeze(R),Object.getOwnPropertyNames(R).forEach(K=>{const me=R[K],Fe=typeof me;(Fe==="object"||Fe==="function")&&!Object.isFrozen(me)&&n(me)}),R}class e{constructor(K){K.data===void 0&&(K.data={}),this.data=K.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function t(R){return R.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function r(R,...K){const me=Object.create(null);for(const Fe in R)me[Fe]=R[Fe];return K.forEach(function(Fe){for(const un in Fe)me[un]=Fe[un]}),me}const i="</span>",s=R=>!!R.scope,o=(R,{prefix:K})=>{if(R.startsWith("language:"))return R.replace("language:","language-");if(R.includes(".")){const me=R.split(".");return[`${K}${me.shift()}`,...me.map((Fe,un)=>`${Fe}${"_".repeat(un+1)}`)].join(" ")}return`${K}${R}`};class a{constructor(K,me){this.buffer="",this.classPrefix=me.classPrefix,K.walk(this)}addText(K){this.buffer+=t(K)}openNode(K){if(!s(K))return;const me=o(K.scope,{prefix:this.classPrefix});this.span(me)}closeNode(K){s(K)&&(this.buffer+=i)}value(){return this.buffer}span(K){this.buffer+=`<span class="${K}">`}}const l=(R={})=>{const K={children:[]};return Object.assign(K,R),K};class c{constructor(){this.rootNode=l(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(K){this.top.children.push(K)}openNode(K){const me=l({scope:K});this.add(me),this.stack.push(me)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(K){return this.constructor._walk(K,this.rootNode)}static _walk(K,me){return typeof me=="string"?K.addText(me):me.children&&(K.openNode(me),me.children.forEach(Fe=>this._walk(K,Fe)),K.closeNode(me)),K}static _collapse(K){typeof K!="string"&&K.children&&(K.children.every(me=>typeof me=="string")?K.children=[K.children.join("")]:K.children.forEach(me=>{c._collapse(me)}))}}class d extends c{constructor(K){super(),this.options=K}addText(K){K!==""&&this.add(K)}startScope(K){this.openNode(K)}endScope(){this.closeNode()}__addSublanguage(K,me){const Fe=K.root;me&&(Fe.scope=`language:${me}`),this.add(Fe)}toHTML(){return new a(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function p(R){return R?typeof R=="string"?R:R.source:null}function g(R){return I("(?=",R,")")}function b(R){return I("(?:",R,")*")}function v(R){return I("(?:",R,")?")}function I(...R){return R.map(me=>p(me)).join("")}function D(R){const K=R[R.length-1];return typeof K=="object"&&K.constructor===Object?(R.splice(R.length-1,1),K):{}}function L(...R){return"("+(D(R).capture?"":"?:")+R.map(Fe=>p(Fe)).join("|")+")"}function V(R){return new RegExp(R.toString()+"|").exec("").length-1}function W(R,K){const me=R&&R.exec(K);return me&&me.index===0}const z=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function ie(R,{joinWith:K}){let me=0;return R.map(Fe=>{me+=1;const un=me;let vn=p(Fe),xe="";for(;vn.length>0;){const ye=z.exec(vn);if(!ye){xe+=vn;break}xe+=vn.substring(0,ye.index),vn=vn.substring(ye.index+ye[0].length),ye[0][0]==="\\"&&ye[1]?xe+="\\"+String(Number(ye[1])+un):(xe+=ye[0],ye[0]==="("&&me++)}return xe}).map(Fe=>`(${Fe})`).join(K)}const ce=/\b\B/,S="[a-zA-Z]\\w*",w="[a-zA-Z_]\\w*",x="\\b\\d+(\\.\\d+)?",T="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",A="\\b(0b[01]+)",k="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",E=(R={})=>{const K=/^#![ ]*\//;return R.binary&&(R.begin=I(K,/.*\b/,R.binary,/\b.*/)),r({scope:"meta",begin:K,end:/$/,relevance:0,"on:begin":(me,Fe)=>{me.index!==0&&Fe.ignoreMatch()}},R)},we={begin:"\\\\[\\s\\S]",relevance:0},Ke={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[we]},an={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[we]},Je={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},le=function(R,K,me={}){const Fe=r({scope:"comment",begin:R,end:K,contains:[]},me);Fe.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const un=L("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return Fe.contains.push({begin:I(/[ ]+/,"(",un,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),Fe},En=le("//","$"),ct=le("/\\*","\\*/"),bn=le("#","$"),An={scope:"number",begin:x,relevance:0},Rn={scope:"number",begin:T,relevance:0},_t={scope:"number",begin:A,relevance:0},Xe={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[we,{begin:/\[/,end:/\]/,relevance:0,contains:[we]}]},Un={scope:"title",begin:S,relevance:0},Kn={scope:"title",begin:w,relevance:0},yt={begin:"\\.\\s*"+w,relevance:0};var Qn=Object.freeze({__proto__:null,APOS_STRING_MODE:Ke,BACKSLASH_ESCAPE:we,BINARY_NUMBER_MODE:_t,BINARY_NUMBER_RE:A,COMMENT:le,C_BLOCK_COMMENT_MODE:ct,C_LINE_COMMENT_MODE:En,C_NUMBER_MODE:Rn,C_NUMBER_RE:T,END_SAME_AS_BEGIN:function(R){return Object.assign(R,{"on:begin":(K,me)=>{me.data._beginMatch=K[1]},"on:end":(K,me)=>{me.data._beginMatch!==K[1]&&me.ignoreMatch()}})},HASH_COMMENT_MODE:bn,IDENT_RE:S,MATCH_NOTHING_RE:ce,METHOD_GUARD:yt,NUMBER_MODE:An,NUMBER_RE:x,PHRASAL_WORDS_MODE:Je,QUOTE_STRING_MODE:an,REGEXP_MODE:Xe,RE_STARTERS_RE:k,SHEBANG:E,TITLE_MODE:Un,UNDERSCORE_IDENT_RE:w,UNDERSCORE_TITLE_MODE:Kn});function Tr(R,K){R.input[R.index-1]==="."&&K.ignoreMatch()}function C(R,K){R.className!==void 0&&(R.scope=R.className,delete R.className)}function N(R,K){K&&R.beginKeywords&&(R.begin="\\b("+R.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",R.__beforeBegin=Tr,R.keywords=R.keywords||R.beginKeywords,delete R.beginKeywords,R.relevance===void 0&&(R.relevance=0))}function U(R,K){Array.isArray(R.illegal)&&(R.illegal=L(...R.illegal))}function oe(R,K){if(R.match){if(R.begin||R.end)throw new Error("begin & end are not supported with match");R.begin=R.match,delete R.match}}function ee(R,K){R.relevance===void 0&&(R.relevance=1)}const te=(R,K)=>{if(!R.beforeMatch)return;if(R.starts)throw new Error("beforeMatch cannot be used with starts");const me=Object.assign({},R);Object.keys(R).forEach(Fe=>{delete R[Fe]}),R.keywords=me.keywords,R.begin=I(me.beforeMatch,g(me.begin)),R.starts={relevance:0,contains:[Object.assign(me,{endsParent:!0})]},R.relevance=0,delete me.beforeMatch},de=["of","and","for","in","not","or","if","then","parent","list","value"],ae="keyword";function re(R,K,me=ae){const Fe=Object.create(null);return typeof R=="string"?un(me,R.split(" ")):Array.isArray(R)?un(me,R):Object.keys(R).forEach(function(vn){Object.assign(Fe,re(R[vn],K,vn))}),Fe;function un(vn,xe){K&&(xe=xe.map(ye=>ye.toLowerCase())),xe.forEach(function(ye){const De=ye.split("|");Fe[De[0]]=[vn,ne(De[0],De[1])]})}}function ne(R,K){return K?Number(K):Ee(R)?0:1}function Ee(R){return de.includes(R.toLowerCase())}const pe={},ve=R=>{console.error(R)},f=(R,...K)=>{console.log(`WARN: ${R}`,...K)},P=(R,K)=>{pe[`${R}/${K}`]||(console.log(`Deprecated as of ${R}. ${K}`),pe[`${R}/${K}`]=!0)},M=new Error;function J(R,K,{key:me}){let Fe=0;const un=R[me],vn={},xe={};for(let ye=1;ye<=K.length;ye++)xe[ye+Fe]=un[ye],vn[ye+Fe]=!0,Fe+=V(K[ye-1]);R[me]=xe,R[me]._emit=vn,R[me]._multi=!0}function G(R){if(Array.isArray(R.begin)){if(R.skip||R.excludeBegin||R.returnBegin)throw ve("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),M;if(typeof R.beginScope!="object"||R.beginScope===null)throw ve("beginScope must be object"),M;J(R,R.begin,{key:"beginScope"}),R.begin=ie(R.begin,{joinWith:""})}}function _(R){if(Array.isArray(R.end)){if(R.skip||R.excludeEnd||R.returnEnd)throw ve("skip, excludeEnd, returnEnd not compatible with endScope: {}"),M;if(typeof R.endScope!="object"||R.endScope===null)throw ve("endScope must be object"),M;J(R,R.end,{key:"endScope"}),R.end=ie(R.end,{joinWith:""})}}function O(R){R.scope&&typeof R.scope=="object"&&R.scope!==null&&(R.beginScope=R.scope,delete R.scope)}function q(R){O(R),typeof R.beginScope=="string"&&(R.beginScope={_wrap:R.beginScope}),typeof R.endScope=="string"&&(R.endScope={_wrap:R.endScope}),G(R),_(R)}function $(R){function K(xe,ye){return new RegExp(p(xe),"m"+(R.case_insensitive?"i":"")+(R.unicodeRegex?"u":"")+(ye?"g":""))}class me{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(ye,De){De.position=this.position++,this.matchIndexes[this.matchAt]=De,this.regexes.push([De,ye]),this.matchAt+=V(ye)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const ye=this.regexes.map(De=>De[1]);this.matcherRe=K(ie(ye,{joinWith:"|"}),!0),this.lastIndex=0}exec(ye){this.matcherRe.lastIndex=this.lastIndex;const De=this.matcherRe.exec(ye);if(!De)return null;const Dn=De.findIndex((Ht,lo)=>lo>0&&Ht!==void 0),yn=this.matchIndexes[Dn];return De.splice(0,Dn),Object.assign(De,yn)}}class Fe{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(ye){if(this.multiRegexes[ye])return this.multiRegexes[ye];const De=new me;return this.rules.slice(ye).forEach(([Dn,yn])=>De.addRule(Dn,yn)),De.compile(),this.multiRegexes[ye]=De,De}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(ye,De){this.rules.push([ye,De]),De.type==="begin"&&this.count++}exec(ye){const De=this.getMatcher(this.regexIndex);De.lastIndex=this.lastIndex;let Dn=De.exec(ye);if(this.resumingScanAtSamePosition()&&!(Dn&&Dn.index===this.lastIndex)){const yn=this.getMatcher(0);yn.lastIndex=this.lastIndex+1,Dn=yn.exec(ye)}return Dn&&(this.regexIndex+=Dn.position+1,this.regexIndex===this.count&&this.considerAll()),Dn}}function un(xe){const ye=new Fe;return xe.contains.forEach(De=>ye.addRule(De.begin,{rule:De,type:"begin"})),xe.terminatorEnd&&ye.addRule(xe.terminatorEnd,{type:"end"}),xe.illegal&&ye.addRule(xe.illegal,{type:"illegal"}),ye}function vn(xe,ye){const De=xe;if(xe.isCompiled)return De;[C,oe,q,te].forEach(yn=>yn(xe,ye)),R.compilerExtensions.forEach(yn=>yn(xe,ye)),xe.__beforeBegin=null,[N,U,ee].forEach(yn=>yn(xe,ye)),xe.isCompiled=!0;let Dn=null;return typeof xe.keywords=="object"&&xe.keywords.$pattern&&(xe.keywords=Object.assign({},xe.keywords),Dn=xe.keywords.$pattern,delete xe.keywords.$pattern),Dn=Dn||/\w+/,xe.keywords&&(xe.keywords=re(xe.keywords,R.case_insensitive)),De.keywordPatternRe=K(Dn,!0),ye&&(xe.begin||(xe.begin=/\B|\b/),De.beginRe=K(De.begin),!xe.end&&!xe.endsWithParent&&(xe.end=/\B|\b/),xe.end&&(De.endRe=K(De.end)),De.terminatorEnd=p(De.end)||"",xe.endsWithParent&&ye.terminatorEnd&&(De.terminatorEnd+=(xe.end?"|":"")+ye.terminatorEnd)),xe.illegal&&(De.illegalRe=K(xe.illegal)),xe.contains||(xe.contains=[]),xe.contains=[].concat(...xe.contains.map(function(yn){return Y(yn==="self"?xe:yn)})),xe.contains.forEach(function(yn){vn(yn,De)}),xe.starts&&vn(xe.starts,ye),De.matcher=un(De),De}if(R.compilerExtensions||(R.compilerExtensions=[]),R.contains&&R.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return R.classNameAliases=r(R.classNameAliases||{}),vn(R)}function X(R){return R?R.endsWithParent||X(R.starts):!1}function Y(R){return R.variants&&!R.cachedVariants&&(R.cachedVariants=R.variants.map(function(K){return r(R,{variants:null},K)})),R.cachedVariants?R.cachedVariants:X(R)?r(R,{starts:R.starts?r(R.starts):null}):Object.isFrozen(R)?r(R):R}var H="11.11.1";class he extends Error{constructor(K,me){super(K),this.name="HTMLInjectionError",this.html=me}}const se=t,ke=r,Be=Symbol("nomatch"),Me=7,Qe=function(R){const K=Object.create(null),me=Object.create(null),Fe=[];let un=!0;const vn="Could not find the language '{}', did you forget to load/include a language module?",xe={disableAutodetect:!0,name:"Plain text",contains:[]};let ye={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:d};function De(ue){return ye.noHighlightRe.test(ue)}function Dn(ue){let Ie=ue.className+" ";Ie+=ue.parentNode?ue.parentNode.className:"";const $e=ye.languageDetectRe.exec(Ie);if($e){const sn=Lt($e[1]);return sn||(f(vn.replace("{}",$e[1])),f("Falling back to no-highlight mode for this block.",ue)),sn?$e[1]:"no-highlight"}return Ie.split(/\s+/).find(sn=>De(sn)||Lt(sn))}function yn(ue,Ie,$e){let sn="",Tn="";typeof Ie=="object"?(sn=ue,$e=Ie.ignoreIllegals,Tn=Ie.language):(P("10.7.0","highlight(lang, code, ...args) has been deprecated."),P("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Tn=ue,sn=Ie),$e===void 0&&($e=!0);const kt={code:sn,language:Tn};Ri("before:highlight",kt);const Yn=kt.result?kt.result:Ht(kt.language,kt.code,$e);return Yn.code=kt.code,Ri("after:highlight",Yn),Yn}function Ht(ue,Ie,$e,sn){const Tn=Object.create(null);function kt(ge,Ae){return ge.keywords[Ae]}function Yn(){if(!Re.keywords){On.addText(on);return}let ge=0;Re.keywordPatternRe.lastIndex=0;let Ae=Re.keywordPatternRe.exec(on),Pe="";for(;Ae;){Pe+=on.substring(ge,Ae.index);const Ze=Ft.case_insensitive?Ae[0].toLowerCase():Ae[0],Ln=kt(Re,Ze);if(Ln){const[bt,Va]=Ln;if(On.addText(Pe),Pe="",Tn[Ze]=(Tn[Ze]||0)+1,Tn[Ze]<=Me&&(Oi+=Va),bt.startsWith("_"))Pe+=Ae[0];else{const Li=Ft.classNameAliases[bt]||bt;nt(Ae[0],Li)}}else Pe+=Ae[0];ge=Re.keywordPatternRe.lastIndex,Ae=Re.keywordPatternRe.exec(on)}Pe+=on.substring(ge),On.addText(Pe)}function dt(){if(on==="")return;let ge=null;if(typeof Re.subLanguage=="string"){if(!K[Re.subLanguage]){On.addText(on);return}ge=Ht(Re.subLanguage,on,!0,po[Re.subLanguage]),po[Re.subLanguage]=ge._top}else ge=Ot(on,Re.subLanguage.length?Re.subLanguage:null);Re.relevance>0&&(Oi+=ge.relevance),On.__addSublanguage(ge._emitter,ge.language)}function jn(){Re.subLanguage!=null?dt():Yn(),on=""}function nt(ge,Ae){ge!==""&&(On.startScope(Ae),On.addText(ge),On.endScope())}function gs(ge,Ae){let Pe=1;const Ze=Ae.length-1;for(;Pe<=Ze;){if(!ge._emit[Pe]){Pe++;continue}const Ln=Ft.classNameAliases[ge[Pe]]||ge[Pe],bt=Ae[Pe];Ln?nt(bt,Ln):(on=bt,Yn(),on=""),Pe++}}function ln(ge,Ae){return ge.scope&&typeof ge.scope=="string"&&On.openNode(Ft.classNameAliases[ge.scope]||ge.scope),ge.beginScope&&(ge.beginScope._wrap?(nt(on,Ft.classNameAliases[ge.beginScope._wrap]||ge.beginScope._wrap),on=""):ge.beginScope._multi&&(gs(ge.beginScope,Ae),on="")),Re=Object.create(ge,{parent:{value:Re}}),Re}function Di(ge,Ae,Pe){let Ze=W(ge.endRe,Pe);if(Ze){if(ge["on:end"]){const Ln=new e(ge);ge["on:end"](Ae,Ln),Ln.isMatchIgnored&&(Ze=!1)}if(Ze){for(;ge.endsParent&&ge.parent;)ge=ge.parent;return ge}}if(ge.endsWithParent)return Di(ge.parent,Ae,Pe)}function Ni(ge){return Re.matcher.regexIndex===0?(on+=ge[0],1):(mo=!0,0)}function Pi(ge){const Ae=ge[0],Pe=ge.rule,Ze=new e(Pe),Ln=[Pe.__beforeBegin,Pe["on:begin"]];for(const bt of Ln)if(bt&&(bt(ge,Ze),Ze.isMatchIgnored))return Ni(Ae);return Pe.skip?on+=Ae:(Pe.excludeBegin&&(on+=Ae),jn(),!Pe.returnBegin&&!Pe.excludeBegin&&(on=Ae)),ln(Pe,ge),Pe.returnBegin?0:Ae.length}function ql(ge){const Ae=ge[0],Pe=Ie.substring(ge.index),Ze=Di(Re,ge,Pe);if(!Ze)return Be;const Ln=Re;Re.endScope&&Re.endScope._wrap?(jn(),nt(Ae,Re.endScope._wrap)):Re.endScope&&Re.endScope._multi?(jn(),gs(Re.endScope,ge)):Ln.skip?on+=Ae:(Ln.returnEnd||Ln.excludeEnd||(on+=Ae),jn(),Ln.excludeEnd&&(on=Ae));do Re.scope&&On.closeNode(),!Re.skip&&!Re.subLanguage&&(Oi+=Re.relevance),Re=Re.parent;while(Re!==Ze.parent);return Ze.starts&&ln(Ze.starts,ge),Ln.returnEnd?0:Ae.length}function Fa(){const ge=[];for(let Ae=Re;Ae!==Ft;Ae=Ae.parent)Ae.scope&&ge.unshift(Ae.scope);ge.forEach(Ae=>On.openNode(Ae))}let _s={};function Ma(ge,Ae){const Pe=Ae&&Ae[0];if(on+=ge,Pe==null)return jn(),0;if(_s.type==="begin"&&Ae.type==="end"&&_s.index===Ae.index&&Pe===""){if(on+=Ie.slice(Ae.index,Ae.index+1),!un){const Ze=new Error(`0 width match regex (${ue})`);throw Ze.languageName=ue,Ze.badRule=_s.rule,Ze}return 1}if(_s=Ae,Ae.type==="begin")return Pi(Ae);if(Ae.type==="illegal"&&!$e){const Ze=new Error('Illegal lexeme "'+Pe+'" for mode "'+(Re.scope||"<unnamed>")+'"');throw Ze.mode=Re,Ze}else if(Ae.type==="end"){const Ze=ql(Ae);if(Ze!==Be)return Ze}if(Ae.type==="illegal"&&Pe==="")return on+=`
`,1;if(ar>1e5&&ar>Ae.index*3)throw new Error("potential infinite loop, way more iterations than matches");return on+=Pe,Pe.length}const Ft=Lt(ue);if(!Ft)throw ve(vn.replace("{}",ue)),new Error('Unknown language: "'+ue+'"');const Bl=$(Ft);let Ir="",Re=sn||Bl;const po={},On=new ye.__emitter(ye);Fa();let on="",Oi=0,or=0,ar=0,mo=!1;try{if(Ft.__emitTokens)Ft.__emitTokens(Ie,On);else{for(Re.matcher.considerAll();;){ar++,mo?mo=!1:Re.matcher.considerAll(),Re.matcher.lastIndex=or;const ge=Re.matcher.exec(Ie);if(!ge)break;const Ae=Ie.substring(or,ge.index),Pe=Ma(Ae,ge);or=ge.index+Pe}Ma(Ie.substring(or))}return On.finalize(),Ir=On.toHTML(),{language:ue,value:Ir,relevance:Oi,illegal:!1,_emitter:On,_top:Re}}catch(ge){if(ge.message&&ge.message.includes("Illegal"))return{language:ue,value:se(Ie),illegal:!0,relevance:0,_illegalBy:{message:ge.message,index:or,context:Ie.slice(or-100,or+100),mode:ge.mode,resultSoFar:Ir},_emitter:On};if(un)return{language:ue,value:se(Ie),illegal:!1,relevance:0,errorRaised:ge,_emitter:On,_top:Re};throw ge}}function lo(ue){const Ie={value:se(ue),illegal:!1,relevance:0,_top:xe,_emitter:new ye.__emitter(ye)};return Ie._emitter.addText(ue),Ie}function Ot(ue,Ie){Ie=Ie||ye.languages||Object.keys(K);const $e=lo(ue),sn=Ie.filter(Lt).filter(sr).map(jn=>Ht(jn,ue,!1));sn.unshift($e);const Tn=sn.sort((jn,nt)=>{if(jn.relevance!==nt.relevance)return nt.relevance-jn.relevance;if(jn.language&&nt.language){if(Lt(jn.language).supersetOf===nt.language)return 1;if(Lt(nt.language).supersetOf===jn.language)return-1}return 0}),[kt,Yn]=Tn,dt=kt;return dt.secondBest=Yn,dt}function Ra(ue,Ie,$e){const sn=Ie&&me[Ie]||$e;ue.classList.add("hljs"),ue.classList.add(`language-${sn}`)}function ps(ue){let Ie=null;const $e=Dn(ue);if(De($e))return;if(Ri("before:highlightElement",{el:ue,language:$e}),ue.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",ue);return}if(ue.children.length>0&&(ye.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(ue)),ye.throwUnescapedHTML))throw new he("One of your code blocks includes unescaped HTML.",ue.innerHTML);Ie=ue;const sn=Ie.textContent,Tn=$e?yn(sn,{language:$e,ignoreIllegals:!0}):Ot(sn);ue.innerHTML=Tn.value,ue.dataset.highlighted="yes",Ra(ue,$e,Tn.language),ue.result={language:Tn.language,re:Tn.relevance,relevance:Tn.relevance},Tn.secondBest&&(ue.secondBest={language:Tn.secondBest.language,relevance:Tn.secondBest.relevance}),Ri("after:highlightElement",{el:ue,result:Tn,text:sn})}function co(ue){ye=ke(ye,ue)}const fo=()=>{Si(),P("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function Da(){Si(),P("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Na=!1;function Si(){function ue(){Si()}if(document.readyState==="loading"){Na||window.addEventListener("DOMContentLoaded",ue,!1),Na=!0;return}document.querySelectorAll(ye.cssSelector).forEach(ps)}function Vl(ue,Ie){let $e=null;try{$e=Ie(R)}catch(sn){if(ve("Language definition for '{}' could not be registered.".replace("{}",ue)),un)ve(sn);else throw sn;$e=xe}$e.name||($e.name=ue),K[ue]=$e,$e.rawDefinition=Ie.bind(null,R),$e.aliases&&zr($e.aliases,{languageName:ue})}function ms(ue){delete K[ue];for(const Ie of Object.keys(me))me[Ie]===ue&&delete me[Ie]}function Pa(){return Object.keys(K)}function Lt(ue){return ue=(ue||"").toLowerCase(),K[ue]||K[me[ue]]}function zr(ue,{languageName:Ie}){typeof ue=="string"&&(ue=[ue]),ue.forEach($e=>{me[$e.toLowerCase()]=Ie})}function sr(ue){const Ie=Lt(ue);return Ie&&!Ie.disableAutodetect}function ho(ue){ue["before:highlightBlock"]&&!ue["before:highlightElement"]&&(ue["before:highlightElement"]=Ie=>{ue["before:highlightBlock"](Object.assign({block:Ie.el},Ie))}),ue["after:highlightBlock"]&&!ue["after:highlightElement"]&&(ue["after:highlightElement"]=Ie=>{ue["after:highlightBlock"](Object.assign({block:Ie.el},Ie))})}function jl(ue){ho(ue),Fe.push(ue)}function Oa(ue){const Ie=Fe.indexOf(ue);Ie!==-1&&Fe.splice(Ie,1)}function Ri(ue,Ie){const $e=ue;Fe.forEach(function(sn){sn[$e]&&sn[$e](Ie)})}function La(ue){return P("10.7.0","highlightBlock will be removed entirely in v12.0"),P("10.7.0","Please use highlightElement now."),ps(ue)}Object.assign(R,{highlight:yn,highlightAuto:Ot,highlightAll:Si,highlightElement:ps,highlightBlock:La,configure:co,initHighlighting:fo,initHighlightingOnLoad:Da,registerLanguage:Vl,unregisterLanguage:ms,listLanguages:Pa,getLanguage:Lt,registerAliases:zr,autoDetection:sr,inherit:ke,addPlugin:jl,removePlugin:Oa}),R.debugMode=function(){un=!1},R.safeMode=function(){un=!0},R.versionString=H,R.regex={concat:I,lookahead:g,either:L,optional:v,anyNumberOfTimes:b};for(const ue in Qn)typeof Qn[ue]=="object"&&n(Qn[ue]);return Object.assign(R,Qn),R},kr=Qe({});return kr.newInstance=()=>Qe({}),jc=kr,kr.HighlightJS=kr,kr.default=kr,jc}var NA=DA();const Lo=W1(NA);function X1(n){const e=n.regex,t=new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*","u"),r=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],a={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},l={className:"meta",begin:/^(>>>|\.\.\.) /},c={className:"subst",begin:/\{/,end:/\}/,keywords:a,illegal:/#/},d={begin:/\{\{/,relevance:0},p={className:"string",contains:[n.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,l],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[n.BACKSLASH_ESCAPE,l,d,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[n.BACKSLASH_ESCAPE,l,d,c]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[n.BACKSLASH_ESCAPE,d,c]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[n.BACKSLASH_ESCAPE,d,c]},n.APOS_STRING_MODE,n.QUOTE_STRING_MODE]},g="[0-9](_?[0-9])*",b=`(\\b(${g}))?\\.(${g})|\\b(${g})\\.`,v=`\\b|${r.join("|")}`,I={className:"number",relevance:0,variants:[{begin:`(\\b(${g})|(${b}))[eE][+-]?(${g})[jJ]?(?=${v})`},{begin:`(${b})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${v})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${v})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${v})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${v})`},{begin:`\\b(${g})[jJ](?=${v})`}]},D={className:"comment",begin:e.lookahead(/# type:/),end:/$/,keywords:a,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},L={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:a,contains:["self",l,I,p,n.HASH_COMMENT_MODE]}]};return c.contains=[p,I,l],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:a,illegal:/(<\/|\?)|=>/,contains:[l,I,{scope:"variable.language",match:/\bself\b/},{beginKeywords:"if",relevance:0},{match:/\bor\b/,scope:"keyword"},p,D,n.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,t],scope:{1:"keyword",3:"title.function"},contains:[L]},{variants:[{match:[/\bclass/,/\s+/,t,/\s*/,/\(\s*/,t,/\s*\)/]},{match:[/\bclass/,/\s+/,t]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[I,L,p]}]}}const PA={class:"projects-container"},OA={__name:"MyProjects",setup(n){Lo.registerLanguage("python",X1);const e=new At({html:!0,linkify:!0,typographer:!0,highlight(i,s){try{const o=s&&Lo.getLanguage(s)?s:"python",{value:a}=Lo.highlight(i,{language:o});return`<pre class="code-gray hljs"><code>${a}</code></pre>`}catch{const a=At().utils.escapeHtml;return`<pre class="code-gray"><code>${a(i)}</code></pre>`}}}),t=Object.assign({"../projects/duckov_yolo.md":y3,"../projects/fight-game.md":b3,"../projects/homepage.md":v3,"../projects/qq-bot.md":x3,"../projects/towerDefence.md":w3}),r=tn([]);for(const i in t)try{const s=t[i],{attributes:o,body:a}=J1(s);r.value.push({...o,renderedHtml:e.render(a)})}catch(s){console.error(`解析文件 ${i} 出错:`,s)}return r.value.sort((i,s)=>(s.id||0)-(i.id||0)),tn(null),(i,s)=>(Te(),Se("div",PA,[...s[0]||(s[0]=[B("header",{class:"page-header"},[B("h1",null,"项目展示"),B("p",null,"把灵感与实践都放在这里。")],-1),B("hr",{class:"divider"},null,-1),B("div",{class:"empty-tip"}," 项目展示区域暂时空白。 ",-1)])]))}},LA=gt(OA,[["__scopeId","data-v-b68e92a6"]]),FA=`---
title: "上海创智学院夏令营"
date: "2026-05-30"
tags: ["Experience", "夏令营", "创智学院", "经验贴"]
---

创智是24年新开的一所人工智能研究院，据说这几年bar越来越高，人也越来越多，但是薪资越来越低了。（近几年入营率和优营率如下图）好处是能解锁一些网红组，也可以借机会更换喜欢的研究方向(lz可能打算从机械转到具身或者多模态)，而且据说大部分组会放实习，住宿条件比较好；坏处是可能压力比较大，食堂难吃。夏令营赛道主要有LLM，具身，ai4s和新一代自主智算体系这4个。lz在夏令营感觉创智整体科研氛围还是很浓厚的，老师没有架子，很愿意和学生讨论问题；夏令营本科生硕士生博士生都可以报，有效期三年，值得一试。

<img src="experience/admission.jpg" alt="创智学院入营率与优营率" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;">

### bg

lz夏令营的bg：sjtu机械重点班，rank 10%，0pub，1xai4s大创，2x对口科研经历，1x果酱。（弱bg，很多人申请的时候就已经1a2a了，lz相形见绌qwq）

### 入营

入营：（由于入营的bar很迷，lz也不知道cz是怎么筛人的，很多bg很强的同学也没能入营，倒是把我这种弱bg的放进来了）

-问卷建议认真写一写，感觉cz会比较喜欢有个性的学生；科研计划书ai应该就行。

-推荐提前套磁创智的老师，可以尝试让创智的老师帮你写推荐信，入营有一定的优势（但推荐信的优势仅限入营，优营得看夏令营的表现）

-Harness工程：lz在创智harness考核前根本不知道harness是什么，好在这玩意可以直接让ai完成，最后准确率82%左右，优化过程直接做了个消融实验反向优化然后编了个故事。>_<

### 夏令营

**笔试  Day1 am**

笔试我们这一届考的似乎没有前几届难，lz考前复习了一周左右，加上平常力学课之类的都会用到微积分和线代，所以忘得不算多，总共100分除了最后一道关于Transformer的大题其余基本都答满了。（选择和大题都是选题做，所以还是留了不少余量的）lz还记得的题目：

(1) 选择

一个团队中人越多个人倾向于做的越少，原因是（）

关于个体的局部变化不会影响整体的趋势

(2) 大题：

1、 绕原点为中心半径为r画圆，其中包含的横坐标纵坐标都为整数的点个数为N，r趋于无穷的时候，N/r^2趋近于多少？

2、 A_n = sin(n)，严格证明不收敛。

3、 1000以内随便选一个数能被3,5,7,9中至少一个整除的概率是多少？

4、 一个4*4的矩阵，每一行的和，每一列的和以及对角线的和加起来都等于A，证明这个矩阵中间4个元素之和和角落4个元素之和也相等。

5、 银行存款位数限制（送分题）

6、 关于算定积分的题和特征向量相关的题

**机考  Day1 pm**

机考总共三道题，难度是简单，中等和困难，时间分别是40min，40min和60min。用的是acm的系统，平常习惯用Leetcode只写个solution的最后熟悉一下acm的输入和输出要求。lz用的Python，可选的语言有四种，C、C++、python都是可以的，还有一种lz忘了。

第一题：双指针

两个数组，如果能从其中一个数组的某一段选出来反转以后再接回去变成另一个数组就返回True，反之返回False。比如1,2,3,4,5和1,5,4,3,2就是True，1,2,3,4,5和1,4,3,2,6就是False。双指针可以直接秒，可是lz在机考前突然充电器坏了，导致lz需要一边和倒计时赛跑一边和电量赛跑，于是前面代码结构就写坏了，后面也没想起来用双指针，最后喜提6/10。（好在助教最后找来了充电器，感谢助教）

第二题：队列

第二题虽然是中等题，但毕竟是模拟，还是比较简单的。题目是模拟cpu调度，lz5分钟读题5分钟写一遍过，刷完Hot100完全没问题。

第三题：染色树

lz见到这题已被吓哭，最后喜提0/10。题目大概是给你一棵树（非二叉），如果染色某个节点则这个节点的所有孩子和它的父节点都会被染色，问最少选择染色的节点数，lz这题写了一些入度表和子节点表相关的东西。建议是遇到不会的也不要为了多过测试点用if去试答案，因为代码会被老师review，未完成但是体现出解题思路的可能一样能拿分。

**面试  Day2 am**

从大部分人的情况来看，面试整体是比较轻松的，不会问一些专业性很强的问题（比如请你讲一下Transformer架构之类的），基本还是围绕你的项目去问。除了项目有一定概率会被问到英文问题，lz被问到了请你用英文讲解一个你的项目，好在最后至少磕磕巴巴说完了；最后可能还有一些比较宏观的题，lz被问的是你未来想研究的方向和你认为做具身机械背景出身相比科班同学有哪些劣势，lz劣势一笔带过直接讲优势（推销自己这一块）。

同时lz面试踩了一个大坑就是没脱稿，面试开始的时候被老师问能不能脱稿，但是lz没有背词所有后面还是断断续续地看了稿子qwq。（听到底下老师小声说什么“不脱稿是大忌”什么的ToT）最好提前做好ppt，有同学没做可能得前一天晚上熬夜做，会比较被动。

**实训  Day2 pm – Day5 am**

最劳累的一集，前几天要休息好，不然后面会吃不消（不少组几天晚上都有人不睡觉的）。实训地点和创智有一段距离，会有班车来回接送，最晚一班凌晨2点。

实训题目夏令营前就会放出，建议在开营前就把题目熟悉起来，有实验室服务器用的甚至可以提前上手。队友是根据你的选题随机分配的，通常3人一组，也有单人题，成绩方面最后的测试指标占30%，面试占10%，剩下的是报告等内容（记不清了）。lz选的题目是vla相关的，但是队里三个人都没接触过vla，只能边做边摸索。最后lz的小组指标比其他组低了一大截（lz: 1.9 其他组: 4.3）,但尝试了很多方法和技术可以讲，可能被捞了。下面是实训的一些经验：

(1) 建议一开始所有人先尝试把代码跑通，然后三个人分别研究三个不同的方向刷指标，做消融实验选出最好的一个。面试会有老师问谁先把代码跑通的，可能会有加分。

(2) 指标低不要灰心丧气。lz在得知指标比其他组低一大截的时候最后ppt都不想做了，但为了不拖累队友还是艰难做完，事实证明指标没有你想的那么重要，把故事讲好和多尝试不同的方法也会加分。（有老师亲口说的）

(3) 不要摆烂。过程中会有老师询问你们组的进展和分工，这些都会被记录。

(4) 面试前把自己做的东西研究透，听说如果各组指标相近的话面试会占大头。（lz面试有个问题大脑直接go blank开始胡言乱语，还好cpp老师最后给了个台阶下，感激不尽）

(5) 最好有codex或者claude code，不vibe coding几乎没法做。（除非你对训练和测试框架真的很了解）

**参访（不重要） Day2 pm**

26年夏令营可以去米哈游，库帕斯，腾讯还有上海科学智能研究院。lz毫无疑问去的mhy，遗憾的是没见到大伟哥，但还是嫖到了点周边>_<

<figure>
<img src="experience/实训选题.jpg" alt="实训选题" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 0 auto; display: block;">
<figcaption>实训选题</figcaption>
</figure>

<figure>
<img src="experience/创智内1.jpg" alt="创智内1" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 0 auto; display: block;">
<figcaption>创智内1</figcaption>
</figure>

<figure>
<img src="experience/创智内2.jpg" alt="创智内2" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 0 auto; display: block;">
<figcaption>创智内2</figcaption>
</figure>

<figure>
<img src="experience/mhy Logo.jpg" alt="mhy Logo" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 0 auto; display: block;">
<figcaption>mhy Logo</figcaption>
</figure>

<figure>
<img src="experience/阮梅合影.jpg" alt="阮梅合影" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 0 auto; display: block;">
<figcaption>阮梅合影</figcaption>
</figure>

<figure>
<img src="experience/周边展区.jpg" alt="周边展区" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 0 auto; display: block;">
<figcaption>周边展区</figcaption>
</figure>

<figure>
<img src="experience/合影.jpg" alt="合影" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 0 auto; display: block;">
<figcaption>合影</figcaption>
</figure>
`,MA=`---\r
title: "Leetcode 普通数组 1（最大子树组合，合并区间）"\r
date: "2026-03-13"\r
tags: ["Leetcode", "数组", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [53 最大子数组和](#q53) ｜ [56 合并区间](#q56)\r
\r
<a id="q53"></a>\r
\r
## 1. LeetCode 53. 最大子数组和 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个整数数组 \`nums\`，请你找出一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。\r
\r
\r
### 测试样例\r
\r
示例 1：  \r
输入：nums = [-2,1,-3,4,-1,2,1,-5,4]  \r
输出：6  \r
解释：连续子数组 [4,-1,2,1] 的和最大，为 6。  \r
\r
示例 2：  \r
输入：nums = [1]  \r
输出：1  \r
\r
示例 3：  \r
输入：nums = [5,4,-1,7,8]  \r
输出：23  \r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def maxSubArray(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        dp = [0] * len(nums)\r
        dp[0] = nums[0]\r
        sum = nums[0]\r
        for i in range(1, len(nums)):\r
            dp[i] = max(nums[i] + dp[i - 1], nums[i])\r
            sum = max(sum, dp[i])\r
        return sum\r
</pre>\r
\r
### 思路解析\r
\r
- 定义 \`dp[i]\` 为**以 \`i\` 结尾的连续子数组的最大和**。要么把当前元素 \`nums[i]\` 接在前面的子数组后面（\`nums[i] + dp[i-1]\`），要么就从当前元素重新开始（\`nums[i]\`），取两者较大。\r
- 用一个变量 \`sum\` 维护**所有 \`dp[i]\` 中的最大值**，也就是答案。\r
- 遍历一遍数组即可完成状态转移，时间复杂度为 O(n)，空间复杂度为 O(n)。\r
\r
<a id="q56"></a>\r
\r
## 2. LeetCode 56. 合并区间 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [start_i, end_i]。  \r
请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。\r
\r
### 测试样例\r
\r
示例 1：  \r
输入：intervals = [[1,3],[2,6],[8,10],[15,18]]  \r
输出：[[1,6],[8,10],[15,18]]  \r
解释：区间 [1,3] 和 [2,6] 重叠，将它们合并为 [1,6]。  \r
\r
示例 2：  \r
输入：intervals = [[1,4],[4,5]]  \r
输出：[[1,5]]  \r
\r
示例 3：  \r
输入：intervals = [[4,7],[1,4]]  \r
输出：[[1,7]]  \r
解释：区间 [1,4] 和 [4,7] 可被视为重叠区间。  \r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def merge(self, intervals):\r
        if not intervals:\r
            return []\r
        # 按区间起点排序\r
        intervals.sort(key=lambda x: x[0])\r
        merged = []\r
        current = intervals[0]\r
        for interval in intervals[1:]:\r
            if interval[0] <= current[1]:  # 有重叠，扩展右端点\r
                current[1] = max(current[1], interval[1])\r
            else:  # 无重叠，收当前区间，开始新的区间\r
                merged.append(current)\r
                current = interval\r
        merged.append(current)  # 添加最后一个区间\r
        return merged\r
</pre>\r
\r
### 思路解析\r
\r
- 先按每个区间的起点从小到大排序，这样重叠的区间会被排在一起。  \r
- 用 \`current\` 记录当前正在合并的区间，从左到右遍历后续区间：  \r
  - 如果新区间左端点 \`interval[0]\` 小于等于 \`current[1]\`，说明重叠，更新右端点为 \`max(current[1], interval[1])\`；  \r
  - 否则表示不重叠，把 \`current\` 放进结果数组，然后把 \`current\` 换成新区间。  \r
- 遍历结束后别忘了把最后一个 \`current\` 加入结果。整体只排序一次再线性扫描，时间复杂度为 O(n log n)，空间复杂度 O(1)（不计结果数组）。 \r
\r
`,VA=`---\r
title: "Leetcode 普通数组 2（轮转数组，除数组以外自身的乘积，缺失的第一个正数）"\r
date: "2026-03-14"\r
tags: ["Leetcode", "数组", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [189 轮转数组](#q189) ｜ [238 除自身以外数组的乘积](#q238) ｜ [41 缺失的第一个正数](#q41)\r
\r
<a id="q189"></a>\r
\r
## LeetCode 189. 轮转数组 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个整数数组 \`nums\`，将数组中的元素向右轮转 \`k\` 个位置，其中 \`k\` 是非负数。\r
\r
**进阶：** 尽可能想出更多的解决方案；能否使用空间复杂度为 O(1) 的原地算法？\r
\r
### 测试样例\r
\r
示例 1：  \r
输入：nums = [1,2,3,4,5,6,7], k = 3  \r
输出：[5,6,7,1,2,3,4]  \r
解释：向右轮转 1 步 [7,1,2,3,4,5,6]，轮转 2 步 [6,7,1,2,3,4,5]，轮转 3 步 [5,6,7,1,2,3,4]。\r
\r
示例 2：  \r
输入：nums = [-1,-100,3,99], k = 2  \r
输出：[3,99,-1,-100]  \r
解释：向右轮转 1 步 [99,-1,-100,3]，轮转 2 步 [3,99,-1,-100]。\r
\r
**提示：** 1 ≤ nums.length ≤ 10^5，0 ≤ k ≤ 10^5。\r
\r
### 代码（Python）解法一：辅助数组\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def rotate(self, nums, k):\r
        """\r
        :type nums: List[int]\r
        :type k: int\r
        :rtype: None Do not return anything, modify nums in-place instead.\r
        """\r
        k1 = k % len(nums)\r
        p = [0] * len(nums)\r
        for i in range(0, len(nums)):\r
            if i - k1 < 0:\r
                ind = i - k1 + len(nums)\r
            else:\r
                ind = i - k1\r
            p[i] = nums[ind]\r
\r
        nums[:] = p\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **映射关系**：向右轮转 \`k\` 位后，新下标 \`i\` 位置上的元素，来自原数组下标 \`(i - k) % n\`（即「谁会被移到位置 \`i\`」）。代码里用 \`k1 = k % len(nums)\` 先对 \`k\` 取模，再根据 \`i - k1\` 是否小于 0 决定用 \`i - k1 + len(nums)\` 还是 \`i - k1\`，等价于原下标 \`(i - k1) % n\`。\r
- **流程**：开一个与 \`nums\` 等长的辅助数组 \`p\`，对每个 \`i\` 令 \`p[i] = nums[原下标]\`，最后用 \`nums[:] = p\` 把结果写回 \`nums\`，实现原地覆盖。\r
- **为什么必须写 \`nums[:] = p\` 而不是 \`nums = p\`？** 题目要求原地修改，即改的是**调用者传入的那一个列表对象**。\`nums = p\` 只会让局部变量 \`nums\` 指向新列表 \`p\`，不会改动传入的那个列表，函数返回后调用者看到的仍是原数组；\`nums[:] = p\` 则是把原列表里的元素整体替换成 \`p\` 的内容，改的是同一块内存，调用者才能看到轮转后的结果。\r
- **复杂度**：时间复杂度 O(n)，空间复杂度 O(n)（需要额外数组）。思路直观；若要求 O(1) 空间，则用解法二。\r
\r
### 代码（Python）解法二：三次反转\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def rotate(self, nums, k):\r
        """\r
        :type nums: List[int]\r
        :type k: int\r
        :rtype: None Do not return anything, modify nums in-place instead.\r
        """\r
        def reverse(i, j):\r
            while i < j:\r
                nums[i], nums[j] = nums[j], nums[i]\r
                i += 1\r
                j -= 1\r
\r
        n = len(nums)\r
        k %= n  # 轮转 k 次等于轮转 k % n 次\r
        reverse(0, n - 1)\r
        reverse(0, k - 1)\r
        reverse(k, n - 1)\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **取模**：轮转 \`k\` 次与轮转 \`k % n\` 次效果相同（轮转 \`n\` 次等于没动），故先做 \`k %= n\`，避免 \`k > n\` 时多余操作。\r
- **三次反转**：  \r
  1. 先把整个数组反转；  \r
  2. 再把前 \`k\` 个元素反转；  \r
  3. 最后把后 \`n - k\` 个元素反转。  \r
  这样得到的序列等价于整体向右轮转 \`k\` 位。\r
- **直观理解**：例如 \`[1,2,3,4,5,6,7]\` 向右 3 位得到 \`[5,6,7,1,2,3,4]\`。先整体反转变为 \`[7,6,5,4,3,2,1]\`，再反转前 3 个得 \`[5,6,7,4,3,2,1]\`，再反转后 4 个得 \`[5,6,7,1,2,3,4]\`，即目标结果。\r
- **复杂度**：时间复杂度 O(n)，空间复杂度 O(1)，满足原地、O(1) 空间的进阶要求。\r
\r
<a id="q238"></a>\r
\r
## 2. LeetCode 238. 除自身以外数组的乘积 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定整数数组 \`nums\`，返回数组 \`answer\`，使得 \`answer[i]\` 等于 \`nums\` 中除 \`nums[i]\` 之外其余元素的乘积。\r
\r
**要求：** 请不要使用除法，且在 O(n) 时间复杂度内完成此题。\r
\r
**进阶：** 能否在 O(1) 的额外空间复杂度内完成？（输出数组不计入额外空间。）\r
\r
### 测试样例\r
\r
示例 1：  \r
输入：nums = [1,2,3,4]  \r
输出：[24,12,8,6]\r
\r
示例 2：  \r
输入：nums = [-1,1,0,-3,3]  \r
输出：[0,0,9,0,0]\r
\r
**提示：** 2 ≤ nums.length ≤ 10^5，-30 ≤ nums[i] ≤ 30。\r
\r
### 代码（Python）解法一：利用整体乘积再除（使用除法，与题目要求不符）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def productExceptSelf(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: List[int]\r
        """\r
        count = 0\r
        ind = 0\r
        ans = [0] * len(nums)\r
        mul = 1\r
        for i in range(0, len(nums)):\r
            if nums[i] == 0:\r
                count += 1\r
                if count == 1:\r
                    ind = i\r
            else:\r
                mul *= nums[i]\r
\r
        if count >= 2:\r
            return [0] * len(nums)\r
\r
        elif count == 1:\r
            ans[ind] = mul\r
            return ans\r
\r
        else:\r
            for i in range(0, len(nums)):\r
                ans[i] = mul / nums[i]\r
            return ans\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **思路**：先求全体元素的乘积 \`mul\`（遍历时跳过 0，只乘非零元）。若 0 的个数 ≥ 2，则任意位置都至少包含一个 0，结果全为 0；若恰好 1 个 0，则只有该位置结果为其余非零元之积 \`mul\`，其余位置为 0；若无 0，则 \`answer[i] = mul / nums[i]\`，即「全体乘积除以当前元素」。\r
- **⚠️ 与题目要求不符**：本题明确要求**不要使用除法**，且需在 O(n) 时间内完成。本解法在无 0 的情况下使用了 \`mul / nums[i]\`，**违反了「不使用除法」的要求**，仅作理解「乘积与 0」的参考；正式作答建议采用解法二的「左右前缀积」写法。\r
\r
### 代码（Python）解法二：左右前缀积（符合题意，不使用除法）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def productExceptSelf(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: List[int]\r
        """\r
        L = [0] * len(nums)\r
        R = [0] * len(nums)\r
        ans = [0] * len(nums)\r
        L[0] = 1\r
        R[-1] = 1\r
        for i in range(1, len(nums)):\r
            L[i] = L[i - 1] * nums[i - 1]\r
            R[len(nums) - 1 - i] = R[len(nums) - i] * nums[len(nums) - i]\r
\r
        for i in range(0, len(nums)):\r
            ans[i] = L[i] * R[i]\r
\r
        return ans\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **思路**：对每个位置 \`i\`，\`answer[i]\` = 其左侧所有数之积 × 其右侧所有数之积。用 \`L[i]\` 表示 \`nums[0..i-1]\` 的乘积（左侧前缀积），\`R[i]\` 表示 \`nums[i+1..n-1]\` 的乘积（右侧后缀积），则 \`ans[i] = L[i] * R[i]\`。边界上 \`L[0] = 1\`、\`R[-1] = 1\`，然后各用一次正序、一次倒序循环即可填满 \`L\` 和 \`R\`。\r
- **复杂度**：时间复杂度 O(n)，空间 O(n)（两个数组 \`L\`、\`R\`）。若想达到进阶的 O(1) 额外空间，可以只开一个 \`ans\`，先在其中存左侧前缀积，再在一次倒序中乘上右侧积并覆盖 \`ans\`。\r
\r
\r
<video src="Leetcode/0314_2.mp4" controls width="100%" style="max-width: 640px; border-radius: 8px; margin: 16px 0;"></video>\r
\r
<a id="q41"></a>\r
\r
## 3. LeetCode 41. 缺失的第一个正数 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个未排序的整数数组 \`nums\`，请你找出其中没有出现的最小的正整数。\r
\r
请你实现时间复杂度为 O(n) 且只使用常数级别额外空间的算法。\r
\r
### 代码（Python）解法一：原地标记\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def firstMissingPositive(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        n = len(nums)\r
\r
        # 第一步：将所有非正数改为 n+1（因为这些数不影响答案）\r
        for i in range(n):\r
            if nums[i] <= 0:\r
                nums[i] = n + 1\r
\r
        # 第二步：将出现的正数对应的索引位置标记为负数\r
        for i in range(n):\r
            num = abs(nums[i])\r
            if num <= n:\r
                # 将索引 num-1 位置的数标记为负数\r
                nums[num - 1] = -abs(nums[num - 1])\r
\r
        # 第三步：找到第一个正数的位置\r
        for i in range(n):\r
            if nums[i] > 0:\r
                return i + 1\r
\r
        # 如果所有位置都被标记，返回 n+1\r
        return n + 1\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **范围缩小**：答案一定在 [1, n+1] 之间，其中 n = len(nums)。把所有 ≤ 0 或 > n 的数统一改成 n+1，它们对答案没有影响。\r
- **原地哈希**：再扫一遍数组，对每个合法正数 \`num\`（1 ≤ \`num\` ≤ \`n\`），把下标 \`num - 1\` 位置的元素标记为负数，表示「数 \`num\` 出现过」。\r
- **找第一个缺失的正数**：最后第三次遍历，找到第一个仍为正数的位置 \`i\`，说明 \`i + 1\` 没被标记出现过，即是最小缺失正数；若所有位置都被标记为负数，说明 1..n 都出现了，答案为 \`n + 1\`。\r
\r
<img src="Leetcode/0314_3.png" alt="LeetCode 41 缺失的第一个正数 图解" style="max-width: 640px; border-radius: 8px; margin: 16px 0;">\r
\r
### 代码（Python）解法二：原地交换（把数放回「应在的位置」）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def firstMissingPositive(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        n = len(nums)\r
        \r
        # 第一步：将每个正数放到正确的位置\r
        for i in range(n):\r
            # 持续交换直到当前位置的值正确或无法交换\r
            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:\r
                # 把 nums[i] 放到它应该在的位置 (索引 nums[i]-1)\r
                correct_pos = nums[i] - 1\r
                nums[i], nums[correct_pos] = nums[correct_pos], nums[i]\r
        \r
        # 第二步：找第一个不在正确位置的值\r
        for i in range(n):\r
            if nums[i] != i + 1:\r
                return i + 1\r
        \r
        return n + 1\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **核心想法**：如果数组里有数 \`x\`，并且 1 ≤ x ≤ n，那它理想的位置就是下标 \`x - 1\`。我们通过原地交换，把尽可能多的数放回到自己「该呆的格子」里。\r
- **循环交换**：外层是下标 \`i\` 的循环，内层 \`while\` 不断把 \`nums[i]\` 里的值换到 \`nums[nums[i] - 1]\` 处，直到当前位置要么放着正确的数，要么是无效数（≤0 或 >n）或重复数。\r
- **一次扫描找答案**：重排完成后，如果某个位置 \`i\` 上的值不是 \`i + 1\`，说明 \`i + 1\` 这个正数缺失；若 1..n 都在正确位置上，则最小缺失正数是 \`n + 1\`。\r
`,jA=`---\r
title: "Leetcode 回溯 1（全排列，子集）"\r
date: "2026-04-05"\r
tags: ["Leetcode", "回溯", "位运算", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [46 全排列](#q46) ｜ [78 子集](#q78)\r
\r
<a id="q46"></a>\r
\r
## LeetCode 46. 全排列 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个**不含重复数字**的数组 \`nums\`，返回其所有可能的**全排列**。你可以按**任意顺序**返回答案。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [1,2,3]\`  \r
  输出：\`[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]\`\r
\r
- **示例 2：** \`nums = [0,1]\`  \r
  输出：\`[[0,1],[1,0]]\`\r
\r
- **示例 3：** \`nums = [1]\`  \r
  输出：\`[[1]]\`\r
\r
### 提示\r
\r
- \`1 ≤ len(nums) ≤ 6\`  \r
- \`-10 ≤ nums[i] ≤ 10\`  \r
- \`nums\` 中整数**互不相同**\r
\r
### 代码（Python）：交换法回溯\r
\r
固定前缀 \`nums[0:first]\`，从 \`nums[first:]\` 中依次选元素换到位置 \`first\`，再递归填 \`first+1\`；递归返回后**交换还原**，保证同一层枚举不破坏兄弟分支。当 \`first == n\` 时，当前 \`nums\` 即一个排列，拷贝入结果。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def permute(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: List[List[int]]\r
        """\r
\r
        def backtrace(first=0):\r
            if first == n:\r
                res.append(nums[:])\r
            for i in range(first, n):\r
                nums[first], nums[i] = nums[i], nums[first]\r
                backtrace(first + 1)\r
                nums[first], nums[i] = nums[i], nums[first]\r
\r
        n = len(nums)\r
        res = []\r
        backtrace()\r
        return res\r
</pre>\r
\r
**讲解视频**（资源放在 \`public/Leetcode/\`，命名 \`0405_1.mp4\`）\r
\r
<video src="Leetcode/0405_1.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 思路解析\r
\r
- **回溯**：每层在 \`i ∈ [first, n)\` 上尝试把 \`nums[i]\` 换到 \`first\`，进入子问题 \`first+1\`，回溯前再换回来，避免状态串味。\r
- **终止**：\`first == n\` 时说明每一位都已选定，将 \`nums\` 的拷贝加入 \`res\`（须用 \`nums[:]\`，勿直接 \`append(nums)\`）。\r
- **复杂度**：共 \`n!\` 个排列，每个拷贝长度 \`n\`，时间 **O(n · n!)**，递归栈 **O(n)**。\r
\r
<a id="q78"></a>\r
\r
## LeetCode 78. 子集 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定整数数组 \`nums\`，其中元素**互不相同**。返回 \`nums\` 所有可能的**子集**（幂集）。解集**不能包含重复的子集**；子集顺序任意。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [1,2,3]\`  \r
  输出：\`[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]\`\r
\r
- **示例 2：** \`nums = [0]\`  \r
  输出：\`[[],[0]]\`\r
\r
### 提示\r
\r
- \`1 ≤ len(nums) ≤ 10\`  \r
- \`-10 ≤ nums[i] ≤ 10\`  \r
- \`nums\` 中元素**互不相同**\r
\r
### 代码（Python）解法一：二进制枚举（掩码）\r
\r
共 \`2^N\` 个子集，用 \`0 … 2^N - 1\` 的整数 \`i\` 表示掩码：第 \`j\` 位为 \`1\` 表示子集中包含 \`nums[j]\`。将 \`i\` 转为二进制串后须**左补零到长度 \`N\`**（\`zfill(N)\`），再与 \`nums[0] … nums[N-1]\` 一一对应；若仅用 \`bin(i)[2:]\` 不补零，位数不足时与下标会错位。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def subsets(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: List[List[int]]\r
        """\r
        N = len(nums)\r
        res = []\r
        itera = 2 ** N\r
        for i in range(itera):\r
            mask = bin(i)[2:].zfill(N)\r
            temp = []\r
            for j in range(N):\r
                if mask[j] == "1":\r
                    temp.append(nums[j])\r
            res.append(temp)\r
        return res\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **一一对应**：\`N\` 个元素选或不选，共 \`2^N\` 种，与 \`0 … 2^N-1\` 的二进制表示一一对应。\r
- **实现**：\`mask[j] == '1'\` 则把 \`nums[j]\` 加入当前子集。\r
- **复杂度**：时间 **O(n · 2^n)**，结果列表规模亦为 **O(n · 2^n)**；空间除答案外 **O(n)** 临时数组。\r
\r
### 代码（Python）解法二：DFS（选或不选）\r
\r
按下标 \`cur\` 依次考虑 \`nums[cur]\`：**先选**（入栈后递归 \`cur+1\`，回溯 \`pop\`），**再不选**（直接递归 \`cur+1\`）。\`cur == len(nums)\` 时当前路径 \`t\` 即一个子集，拷贝进答案。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def subsets(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: List[List[int]]\r
        """\r
        self.t = []\r
        self.ans = []\r
\r
        def dfs(cur):\r
            if cur == len(nums):\r
                self.ans.append(self.t[:])\r
                return\r
\r
            self.t.append(nums[cur])\r
            dfs(cur + 1)\r
\r
            self.t.pop()\r
            dfs(cur + 1)\r
\r
        dfs(0)\r
        return self.ans\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **决策树**：每个元素分叉「放入当前子集 / 不放入」，叶深 \`n\` 时得到一条完整选择，共 \`2^n\` 条路径。\r
- **拷贝**：\`self.ans.append(self.t[:])\` 须复制列表，否则后续修改 \`self.t\` 会污染已加入的结果。\r
- **复杂度**：时间 **O(n · 2^n)**，递归栈 **O(n)**，与解法一同阶。\r
`,qA=`---\r
title: "Leetcode 回溯 2（电话号码的字母组合，组合总和，括号生成）"\r
date: "2026-04-06"\r
tags: ["Leetcode", "回溯", "字符串", "数组", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [17 电话号码的字母组合](#q17) ｜ [39 组合总和](#q39) ｜ [22 括号生成](#q22)\r
\r
<a id="q17"></a>\r
\r
## LeetCode 17. 电话号码的字母组合 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个**仅包含数字 \`2\`–\`9\`** 的字符串 \`digits\`，返回它能表示的**所有字母组合**。答案可以按**任意顺序**返回。\r
\r
数字到字母的映射与手机九宫格键盘相同（**\`1\` 不对应任何字母**）。映射如下：\r
\r
| 数字 | 字母 |\r
|------|------|\r
| 2 | abc |\r
| 3 | def |\r
| 4 | ghi |\r
| 5 | jkl |\r
| 6 | mno |\r
| 7 | pqrs |\r
| 8 | tuv |\r
| 9 | wxyz |\r
\r
**键盘示意图**（资源 \`public/Leetcode/0406.png\`）：\r
\r
<img src="Leetcode/0406.png" alt="电话键盘数字与字母对应示意" style="max-width: 360px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 测试样例\r
\r
- **示例 1：** \`digits = "23"\`  \r
  输出：\`["ad","ae","af","bd","be","bf","cd","ce","cf"]\`（顺序可任意）\r
\r
- **示例 2：** \`digits = "2"\`  \r
  输出：\`["a","b","c"]\`\r
\r
### 提示\r
\r
- \`1 ≤ len(digits) ≤ 4\`  \r
- \`digits[i]\` 为 \`['2','9']\` 中的数字\r
\r
### 代码（Python）解法一：混合进制枚举\r
\r
第 \`j\` 位数字对应 \`choices[j]\` 种字母，全体组合个数为各 \`choices[j]\` 之积。将 \`0 … total-1\` 的整数 \`i\` 按**混合进制**分解：从右到左依次对每一位做 \`temp % choices[j]\` 取下标，再 \`temp //= choices[j]\`，即可唯一对应一种字母组合。最后 \`result.sort()\` 仅为输出有序（题目允许任意顺序，可删）。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def letterCombinations(self, digits):\r
        if not digits:\r
            return []\r
\r
        alphabet = {\r
            "2": "abc",\r
            "3": "def",\r
            "4": "ghi",\r
            "5": "jkl",\r
            "6": "mno",\r
            "7": "pqrs",\r
            "8": "tuv",\r
            "9": "wxyz",\r
        }\r
\r
        choices = [len(alphabet[d]) for d in digits]\r
\r
        result = []\r
        total = 1\r
        for c in choices:\r
            total *= c\r
\r
        for i in range(total):\r
            temp = i\r
            combo = []\r
            for j in range(len(digits) - 1, -1, -1):\r
                combo.append(alphabet[digits[j]][temp % choices[j]])\r
                temp //= choices[j]\r
            result.append("".join(reversed(combo)))\r
\r
        result.sort()\r
        return result\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **混合进制**：若每位独立选字母，总方案数为 \`∏ choices[j]\`；枚举 \`i ∈ [0, total)\` 相当于从 \`0\` 数到 \`total-1\`，在「每位基数不同」的进制下展开，与组合一一对应。\r
- **分解顺序**：内层从 \`digits\` 的**最后一位**向前取余，与手写多位数进位方向一致；\`combo\` 自右向左建好后 **\`reversed\`** 再拼接成字符串。\r
- **空串**：\`digits\` 为空时题目期望 \`[]\`，需特判。\r
- **复杂度**：共 \`total\` 个组合，每个长度 \`O(n)\`，时间 **O(n · total)**，其中 \`total ≤ 4^4\` 量级（每位最多 4 个字母）；空间 **O(total · n)** 存答案。\r
\r
### 代码（Python）解法二：回溯\r
\r
按 \`index\` 依次处理 \`digits[index]\` 的每个候选字母；选则 \`append\`，递归 \`index+1\`，再 \`pop\` 撤销。\`index == len(digits)\` 时把当前路径拼成字符串加入结果。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def letterCombinations(self, digits):\r
        """\r
        :type digits: str\r
        :rtype: List[str]\r
        """\r
        if not digits:\r
            return []\r
\r
        phoneMap = {\r
            "2": "abc",\r
            "3": "def",\r
            "4": "ghi",\r
            "5": "jkl",\r
            "6": "mno",\r
            "7": "pqrs",\r
            "8": "tuv",\r
            "9": "wxyz",\r
        }\r
\r
        def backtrack(index):\r
            if index == len(digits):\r
                combinations.append("".join(combination))\r
            else:\r
                digit = digits[index]\r
                for letter in phoneMap[digit]:\r
                    combination.append(letter)\r
                    backtrack(index + 1)\r
                    combination.pop()\r
\r
        combination = []\r
        combinations = []\r
        backtrack(0)\r
        return combinations\r
</pre>\r
\r
**解法二 讲解视频**（资源放在 \`public/Leetcode/\`，命名 \`0406_1.mp4\`）\r
\r
<video src="Leetcode/0406_1.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 思路解析（解法二）\r
\r
- **深度优先**：每条从根到叶的路径对应一种字母组合；\`index\` 递增一层，等价于在决策树里向下走。\r
- **回溯**：\`append\` 后递归，返回前 \`pop\`，保证同一 \`combination\` 列表被复用，不拷贝整段路径。\r
- **终止**：\`index == len(digits)\` 时当前路径已满，用 \`"".join(combination)\` 写入。\r
- **复杂度**：与解法一相同阶，时间 **O(n · 4^n)** 量级（每位最多 4 个字母）；递归栈 **O(n)**。\r
\r
<a id="q39"></a>\r
\r
## LeetCode 39. 组合总和 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个**无重复元素**的整数数组 \`candidates\` 和一个目标整数 \`target\`，找出 \`candidates\` 中所有可以使数字和为 \`target\` 的组合。\`candidates\` 中的**同一个数字可以无限制重复选取**；若至少一个数字的选取次数不同，则两种组合视为不同。答案顺序任意。\r
\r
题目保证对于给定输入，和为 \`target\` 的不同组合数**少于 150**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`candidates = [2,3,6,7]\`，\`target = 7\`  \r
  输出：\`[[2,2,3],[7]]\`\r
\r
- **示例 2：** \`candidates = [2,3,5]\`，\`target = 8\`  \r
  输出：\`[[2,2,2,2],[2,3,3],[3,5]]\`\r
\r
- **示例 3：** \`candidates = [2]\`，\`target = 1\`  \r
  输出：\`[]\`\r
\r
### 提示\r
\r
- \`1 ≤ len(candidates) ≤ 30\`  \r
- \`2 ≤ candidates[i] ≤ 40\`，元素**互不相同**  \r
- \`1 ≤ target ≤ 40\`\r
\r
### 教学图解\r
\r
资源 \`public/Leetcode/0406_2.png\`：\r
\r
<img src="Leetcode/0406_2.png" alt="组合总和 回溯与 DFS 思路示意" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 代码（Python）：DFS 回溯\r
\r
按「当前考虑下标 \`idx\`」分支：**选** \`candidates[idx]\` 则加入 \`combine\`，\`target\` 减去该数，且 \`idx\` 不变（可重复选同一数）；**不选** 则 \`idx\` 后移。\`target == 0\` 时拷贝一份 \`combine\` 入答案；\`target < 0\` 或 \`idx\` 越界且 \`target ≠ 0\` 则剪枝。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def combinationSum(self, candidates, target):\r
        """\r
        :type candidates: List[int]\r
        :type target: int\r
        :rtype: List[List[int]]\r
        """\r
\r
        def dfs(target, combine, idx):\r
            if target <= 0 or idx > len(candidates) - 1:\r
                if target == 0:\r
                    combinations.append(combine[:])\r
            else:\r
                combine.append(candidates[idx])\r
                dfs(target - candidates[idx], combine, idx)\r
                combine.pop()\r
                dfs(target, combine, idx + 1)\r
\r
        combinations = []\r
        dfs(target, [], 0)\r
        return combinations\r
</pre>\r
\r
### 思路解析\r
\r
- **去重顺序**：固定从 \`idx\` 起向后选，避免同一 multiset 用不同顺序重复出现（本题写法通过「先反复选当前下标再进位」自然保证）。\r
- **剪枝**：\`target < 0\` 时由 \`target <= 0\` 进入分支且不记录；\`idx\` 超出下标时仅当 \`target == 0\` 才记录。\r
- **复杂度**：与合法组合数相关，题目保证组合数 < 150；最坏时间随搜索树指数增长，**target** 与数组规模较小时可接受。\r
\r
<a id="q22"></a>\r
\r
## LeetCode 22. 括号生成 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定整数 \`n\`，表示 \`n\` 对括号。请设计函数，生成所有由 \`n\` 对括号组成的**有效**括号组合。答案顺序任意。\r
\r
### 测试样例\r
\r
- **示例 1：** \`n = 3\`  \r
  输出：\`["((()))","(()())","(())()","()(())","()()()"]\`（顺序可任意）\r
\r
- **示例 2：** \`n = 1\`  \r
  输出：\`["()"]\`\r
\r
### 提示\r
\r
- \`1 ≤ n ≤ 8\`\r
\r
### 代码（Python）解法一：枚举长为 \`2n\` 的串 + 合法性判断\r
\r
用回溯在每一位尝试 \`'('\` 或 \`')'\`，得到长度为 \`2n\` 的串；再用 **\`valid\`** 做单次扫描：维护平衡值 \`bal\`，遇 \`'('\` 加 1、遇 \`')'\` 减 1，中途 \`bal < 0\` 或结束时 \`bal ≠ 0\` 则非法。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def generateParenthesis(self, n):\r
        """\r
        :type n: int\r
        :rtype: List[str]\r
        """\r
\r
        def generate(A):\r
            if len(A) == 2 * n:\r
                if valid(A):\r
                    ans.append("".join(A))\r
            else:\r
                A.append("(")\r
                generate(A)\r
                A.pop()\r
                A.append(")")\r
                generate(A)\r
                A.pop()\r
\r
        def valid(A):\r
            bal = 0\r
            for c in A:\r
                if c == "(":\r
                    bal += 1\r
                else:\r
                    bal -= 1\r
                if bal < 0:\r
                    return False\r
            return bal == 0\r
\r
        ans = []\r
        generate([])\r
        return ans\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **枚举**：共 \`2^(2n)\` 种括号串，每种 **O(n)** 校验，最坏时间 **O(n · 2^(2n))**，\`n ≤ 8\` 时尚可接受。\r
- **\`valid\`**：等价于「任意前缀中 \`'('\` 数量不少于 \`')'\`」，且整串左右数量相等。\r
- **改进**：可在构造过程中剪枝（左括号数、右括号数与剩余位置），见下方**解法二**，复杂度可降至与**卡特兰数**同阶。\r
\r
### 代码（Python）解法二：回溯剪枝（左 / 右括号计数）\r
\r
维护已放左括号个数 \`left\`、右括号个数 \`right\`。左括号未满 \`n\` 时可追加 \`'('\`；仅当 **\`right < left\`** 时可追加 \`')'\`，保证任意前缀中左括号不少于右括号。长度到 \`2n\` 时加入答案。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def generateParenthesis(self, n):\r
        """\r
        :type n: int\r
        :rtype: List[str]\r
        """\r
        ans = []\r
\r
        def backtrack(S, left, right):\r
            if len(S) == 2 * n:\r
                ans.append("".join(S))\r
                return\r
            if left < n:\r
                S.append("(")\r
                backtrack(S, left + 1, right)\r
                S.pop()\r
            if right < left:\r
                S.append(")")\r
                backtrack(S, left, right + 1)\r
                S.pop()\r
\r
        backtrack([], 0, 0)\r
        return ans\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **剪枝**：\`left < n\` 时尚可放左括号；\`right < left\` 时才放右括号，避免出现非法前缀（右括号多于左括号）。\r
- **复杂度分析**（与题解一致）：\r
  - 合法括号串个数为第 **n** 个**卡特兰数** **C_n**，满足 **C_n = [1/(n+1)] × C(2n, n)**（组合数），数量级约为 **4^n / (n√n)**（√ 表示算术平方根）。\r
  - **时间**：回溯只生成合法串；结果个数与 **C_n** 同阶，每个串拷贝进答案 **O(n)**，总时间常记为 **O(4^n / √n)**（与官方题解同阶）。\r
  - **空间**：除返回数组外，递归栈深度 **O(2n) = O(n)**，每层 **O(1)**，故额外空间 **O(n)**。\r
`,BA=`---\r
title: "Leetcode 回溯 3（单词搜索，分割回文串，N 皇后）"\r
date: "2026-04-07"\r
tags: ["Leetcode", "回溯", "DFS", "矩阵", "动态规划", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [79 单词搜索](#q79) ｜ [131 分割回文串](#q131) ｜ [51 N 皇后](#q51)\r
\r
<a id="q79"></a>\r
\r
## LeetCode 79. 单词搜索 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个 \`m × n\` 的字符网格 \`board\` 和一个字符串 \`word\`。若 \`word\` 可由网格中若干格子中的字母**按顺序**拼出，则返回 \`true\`，否则返回 \`false\`。\r
\r
**规则：** 在网格中依次选相邻格子（**上下左右**四连通）；**同一格子在同一条搜索路径中只能使用一次**。\r
\r
### 示例图\r
\r
题目示例示意（资源 \`public/Leetcode/0407_2.png\`）：\r
\r
<img src="Leetcode/0407_2.png" alt="单词搜索 题意与示例" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 提示\r
\r
- \`m == len(board)\`，\`n == len(board[i])\`  \r
- \`1 ≤ m, n ≤ 6\`  \r
- \`1 ≤ len(word) ≤ 15\`  \r
- \`board\` 与 \`word\` 仅由**大小写英文字母**组成\r
\r
### 代码（Python）：DFS + 访问标记回溯\r
\r
从每个格子 \`(i, j)\` 尝试作为起点，当前需匹配 \`word[k]\`。字符一致则标记 \`visited[i][j] = True\`，向四邻未访问格子递归 \`k + 1\`；任一分支成功即成功；回溯前 **\`visited[i][j] = False\`** 撤销标记。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def exist(self, board, word):\r
        """\r
        :type board: List[List[str]]\r
        :type word: str\r
        :rtype: bool\r
        """\r
        visited = [\r
            [False for _ in range(len(board[0]))] for _ in range(len(board))\r
        ]\r
\r
        def check(i, j, k):\r
            if board[i][j] != word[k]:\r
                return False\r
            if k == len(word) - 1:\r
                return True\r
            visited[i][j] = True\r
            test = []\r
\r
            if i > 0 and not visited[i - 1][j]:\r
                test.append([i - 1, j])\r
            if j > 0 and not visited[i][j - 1]:\r
                test.append([i, j - 1])\r
            if i < len(board) - 1 and not visited[i + 1][j]:\r
                test.append([i + 1, j])\r
            if j < len(board[0]) - 1 and not visited[i][j + 1]:\r
                test.append([i, j + 1])\r
\r
            judge = False\r
            for m in range(len(test)):\r
                judge = judge or check(test[m][0], test[m][1], k + 1)\r
                if judge:\r
                    break\r
            visited[i][j] = False\r
            return judge\r
\r
        for i in range(len(board)):\r
            for j in range(len(board[0])):\r
                if check(i, j, 0):\r
                    return True\r
        return False\r
</pre>\r
\r
### 思路解析\r
\r
- **起点枚举**：单词首字母可能与多个格匹配，需对每个 \`(i, j)\` 尝试 \`check(i, j, 0)\`。\r
- **剪枝**：当前格字符不等于 \`word[k]\` 时直接返回 \`false\`；\`k == len(word) - 1\` 且字符已匹配则整条路径成功。\r
- **回溯**：\`visited\` 防止同一路径重复踩格；递归返回后必须恢复为 \`False\`，以便其他起点或分支复用该格。\r
- **复杂度**：网格规模小（至多 6×6），单词至多 15；最坏搜索与路径数相关，在题目约束下可接受。\r
\r
<a id="q131"></a>\r
\r
## LeetCode 131. 分割回文串 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定字符串 \`s\`，将 \`s\` **分割**成若干子串，使**每个子串都是回文串**。返回所有可能的分割方案。\r
\r
### 测试样例\r
\r
- **示例 1：** \`s = "aab"\`  \r
  输出：\`[["a","a","b"],["aa","b"]]\`\r
\r
- **示例 2：** \`s = "a"\`  \r
  输出：\`[["a"]]\`\r
\r
### 提示\r
\r
- \`1 ≤ len(s) ≤ 16\`  \r
- \`s\` 仅由小写英文字母组成\r
\r
### 代码（Python）：DP 预处理回文 + DFS 回溯\r
\r
先用二维数组 **\`f[i][j]\`** 表示 **\`s[i:j+1]\`** 是否为回文：\`s[i]==s[j]\` 且中间 **\`s[i+1:j-1]\`** 为回文（\`i\` 从大到小填表）。DFS 从位置 \`i\` 出发，枚举结束位置 \`j\`，若 **\`f[i][j]\`** 为真则把 **\`s[i:j+1]\`** 加入当前方案并递归 **\`dfs(j+1)\`**；返回前 **\`pop\`** 回溯。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def partition(self, s):\r
        """\r
        :type s: str\r
        :rtype: List[List[str]]\r
        """\r
        n = len(s)\r
        f = [[True] * n for _ in range(n)]\r
\r
        for i in range(n - 1, -1, -1):\r
            for j in range(i + 1, n):\r
                f[i][j] = (s[i] == s[j]) and f[i + 1][j - 1]\r
\r
        ret = []\r
        ans = []\r
\r
        def dfs(i):\r
            if i == n:\r
                ret.append(ans[:])\r
                return\r
            for j in range(i, n):\r
                if f[i][j]:\r
                    ans.append(s[i : j + 1])\r
                    dfs(j + 1)\r
                    ans.pop()\r
\r
        dfs(0)\r
        return ret\r
</pre>\r
\r
### 思路解析\r
\r
- **回文 DP**：\`f[i][j]\` 为真当且仅当两端字符相同且内侧子串（\`f[i+1][j-1]\`）为回文；\`i\` 从 \`n-1\` 递减，保证内层已算好。\r
- **分割 DFS**：在 \`i\` 处枚举第一段结束于 \`j\`，仅当 \`f[i][j]\` 为真才切分；递归处理剩余部分 \`j+1\`；\`i==n\` 时复制一份 \`ans\` 加入 \`ret\`。\r
- **复杂度**：DP **O(n^2)**；DFS 与回文分割方案数相关，最坏指数级，但 \`n ≤ 16\` 可接受。\r
\r
<a id="q51"></a>\r
\r
## LeetCode 51. N 皇后 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**困难。** 国际象棋中，皇后可以攻击同一行、同一列、同一斜线上的棋子。**n 皇后问题**：在 \`n × n\` 的棋盘上放置 \`n\` 个皇后，使它们**互不攻击**。\r
\r
给定整数 \`n\`，返回所有不同的解决方案。每种方案用字符串棋盘表示：\`'Q'\` 表示皇后，\`'.'\` 表示空位。\r
\r
### 示例图\r
\r
题目示例示意（资源 \`public/Leetcode/0408.png\`）：\r
\r
<img src="Leetcode/0408.png" alt="N 皇后 题意与示例" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 提示\r
\r
- \`1 ≤ n ≤ 9\`\r
\r
### 代码（Python）解法一：回溯 + 列与斜线占用\r
\r
按**行**递归：第 \`i\` 行尝试列 \`j\`。用列表记录已占用的**列**、**主对角线**（\`j - i\`）、**副对角线**（\`j + i\`），若均未冲突则放置并递归下一行；回溯时同步 \`pop\`。\`t\` 存每行皇后所在列，凑满 \`n\` 行后得到一种列向量，再经 **\`transform\`** 转成 \`n\` 条字符串。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def transform(self, info):\r
        ans = []\r
        for i in range(len(info)):\r
            row = ["."] * len(info)\r
            row[info[i]] = "Q"\r
            row = "".join(row)\r
            ans.append(row)\r
        return ans\r
\r
    def solveNQueens(self, n):\r
        """\r
        :type n: int\r
        :rtype: List[List[str]]\r
        """\r
        columns = []\r
        diagonals1 = []\r
        diagonals2 = []\r
        t = []\r
        ans = []\r
\r
        def check(i):\r
            if i == n:\r
                ans.append(t[:])\r
            else:\r
                for j in range(n):\r
                    if (\r
                        j not in columns\r
                        and j + i not in diagonals2\r
                        and j - i not in diagonals1\r
                    ):\r
                        t.append(j)\r
                        columns.append(j)\r
                        diagonals1.append(j - i)\r
                        diagonals2.append(j + i)\r
                        check(i + 1)\r
                        t.pop()\r
                        columns.pop()\r
                        diagonals1.pop()\r
                        diagonals2.pop()\r
\r
        check(0)\r
        for N in range(len(ans)):\r
            ans[N] = self.transform(ans[N])\r
        return ans\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **一行一后**：每行恰放一个皇后，递归深度为 \`n\`；列与两条斜线不重复即可覆盖「互不攻击」。\r
- **斜线编号**：同一主对角线上 \`j - i\` 不变，同一副对角线上 \`j + i\` 不变（与行 \`i\`、列 \`j\` 对应）。\r
- **输出**：\`t\` 为长度为 \`n\` 的列下标序列，\`transform\` 逐行把 \`Q\` 放在对应列，其余为 \`'.'\`。\r
- **复杂度**：搜索树在 \`n ≤ 9\` 内可接受；可用 \`set\` 代替列表判重以常数优化。\r
\r
### 代码（Python）解法二：回溯 + 每行可用列布尔表\r
\r
仍在第 \`i\` 行决策，但不用全局 \`columns\` / 对角线集合：每进入一行先建 **\`bin_record\`** 长为 \`n\`，初值全为可放。对已放置的上一行皇后 \`(j, t[j])\`，令 **\`diff = i - j\`**（行距），则当前行被攻击的列为 **\`t[j]\`**（同列）、**\`t[j] - diff\`** 与 **\`t[j] + diff\`**（两条斜线落在第 \`i\` 行的位置），在范围内则标为不可放。再枚举 **\`bin_record[k]\`** 为真的列 \`k\` 递归。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def transform(self, info):\r
        ans = []\r
        for i in range(len(info)):\r
            row = ["."] * len(info)\r
            row[info[i]] = "Q"\r
            row = "".join(row)\r
            ans.append(row)\r
        return ans\r
\r
    def solveNQueens(self, n):\r
        """\r
        :type n: int\r
        :rtype: List[List[str]]\r
        """\r
        t = []\r
        ans = []\r
\r
        def check(i):\r
            if i == n:\r
                ans.append(t[:])\r
            else:\r
                bin_record = [True] * n\r
                for j in range(len(t)):\r
                    diff = i - j\r
                    bin_record[t[j]] = False\r
                    if t[j] - diff >= 0:\r
                        bin_record[t[j] - diff] = False\r
                    if t[j] + diff <= n - 1:\r
                        bin_record[t[j] + diff] = False\r
                for k in range(n):\r
                    if bin_record[k]:\r
                        t.append(k)\r
                        check(i + 1)\r
                        t.pop()\r
\r
        check(0)\r
        for i in range(len(ans)):\r
            ans[i] = self.transform(ans[i])\r
        return ans\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **与解法一等价**：已放皇后 \`(j, t[j])\` 对第 \`i\` 行的禁放列，正是同列与两条斜线延伸到第 \`i\` 行的交点列下标 **\`t[j] ± (i - j)\`**。\r
- **实现**：每行 **O(n)** 根据已有 \`t\` 刷新 \`bin_record\`，再 **O(n)** 尝试可放列；总思路仍是回溯，仅冲突检测的数据结构不同。\r
- **复杂度**：与解法一同阶；\`n ≤ 9\` 时足够。\r
`,UA=`---\r
title: "Leetcode 二分查找 1（搜索插入位置，搜索二维矩阵）"\r
date: "2026-04-08"\r
tags: ["Leetcode", "二分查找", "矩阵", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [35 搜索插入位置](#q35) ｜ [74 搜索二维矩阵](#q74)\r
\r
<a id="q35"></a>\r
\r
## LeetCode 35. 搜索插入位置 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**简单。** 给定一个**排序数组**和一个目标值，在数组中找到目标值并返回其**索引**；若目标值不存在，则返回它若按顺序插入时**应处的下标**。\r
\r
**要求：** 算法时间复杂度为 **O(log n)**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [1,3,5,6]\`，\`target = 5\`  \r
  输出：\`2\`\r
\r
- **示例 2：** \`nums = [1,3,5,6]\`，\`target = 2\`  \r
  输出：\`1\`\r
\r
- **示例 3：** \`nums = [1,3,5,6]\`，\`target = 7\`  \r
  输出：\`4\`\r
\r
### 提示\r
\r
- \`1 ≤ len(nums) ≤ 10^4\`  \r
- \`-10^4 ≤ nums[i] ≤ 10^4\`，\`nums\` **无重复元素**且**升序**  \r
- \`-10^4 ≤ target ≤ 10^4\`\r
\r
### 代码（Python）：二分查找\r
\r
在 **\`[left, right]\`** 上二分：命中 \`nums[mid] == target\` 时直接返回 **\`mid\`**；否则缩小区间。循环结束时 **\`left\`** 即为「第一个 ≥ target 的位置」，也就是插入位置（若未找到 target）。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def searchInsert(self, nums, target):\r
        """\r
        :type nums: List[int]\r
        :type target: int\r
        :rtype: int\r
        """\r
        N = len(nums)\r
        left = 0\r
        right = N - 1\r
        while left <= right:\r
            mid = (right + left) // 2\r
            if nums[mid] == target:\r
                return mid\r
            elif nums[mid] < target:\r
                left = mid + 1\r
            else:\r
                right = mid - 1\r
        return left\r
</pre>\r
\r
**讲解视频**（资源放在 \`public/Leetcode/\`，命名 \`0408_1.mp4\`）\r
\r
<video src="Leetcode/0408_1.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 思路解析\r
\r
- **相等**：\`nums[mid] == target\` 时，下标即为答案。\r
- **缩小区间**：\`nums[mid] < target\` 说明插入位置在右侧，\`left = mid + 1\`；否则 \`right = mid - 1\`。\r
- **未命中**：循环结束时 **\`left > right\`**，此时 **\`left\`** 是第一个「应插入」的下标（与 \`bisect_left\` 语义一致）。\r
- **复杂度**：每次区间减半，**O(log n)** 时间，**O(1)** 额外空间。\r
\r
<a id="q74"></a>\r
\r
## LeetCode 74. 搜索二维矩阵 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**中等。** 给定 \`m × n\` 整数矩阵，满足：\r
\r
1. 每一行从左到右**非递减**；  \r
2. 每一行的第一个数**大于**上一行最后一个数。\r
\r
即把矩阵按行首尾相接摊平后，整体是**升序**的。给定整数 \`target\`，判断矩阵中是否存在该值。\r
\r
### 提示\r
\r
- \`m == len(matrix)\`，\`n == len(matrix[i])\`  \r
- \`1 ≤ m, n ≤ 100\`（常见范围，以题目为准）  \r
- \`-10^4 ≤ matrix[i][j], target ≤ 10^4\`\r
\r
### 代码（Python）解法一：从首列定位行 + 行内线性查找（O(m + n)）\r
\r
按**每行首元素**从上到下扫：若 \`target\` 等于某行首则命中；若 \`target\` 小于当前行首，则 \`target\` 只可能出现在**上一行**（若存在）。确定行后，在该行内从左向右比较；若某元素大于 \`target\` 则不存在。原稿用变量名 \`i\` 同时作行指针与行内下标，易混淆；下行内遍历改为 **\`j\`**，并在扫完该行后 **\`return False\`**。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def searchMatrix(self, matrix, target):\r
        """\r
        :type matrix: List[List[int]]\r
        :type target: int\r
        :rtype: bool\r
        """\r
        n = len(matrix)\r
        i = 0\r
        while i <= n - 1:\r
            if target == matrix[i][0]:\r
                return True\r
            if target < matrix[i][0]:\r
                break\r
            i = i + 1\r
        if i == 0:\r
            return False\r
        row = i - 1\r
        to_search = matrix[row]\r
        for j in range(len(to_search)):\r
            if to_search[j] == target:\r
                return True\r
            if to_search[j] > target:\r
                return False\r
        return False\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **首列单调**：各行首元素递增，故第一个满足 \`matrix[i][0] > target\` 的行号 \`i\` 将 \`target\` 限制在**第 \`i-1\` 行**（若 \`i=0\` 说明 \`target\` 小于最小元素，直接不存在）。\r
- **行内**：该行有序，线性扫描可二分优化为 **O(log n)**；整体亦可对摊平序列做一次二分 **O(log(mn))**。\r
- **复杂度**：最坏 **O(m + n)** 时间，**O(1)** 额外空间。\r
\r
### 代码（Python）解法二：摊平成一维后二分\r
\r
矩阵按行展开后整体升序，下标 **\`0 … m·n - 1\`** 上二分。中间位置 **\`mid\`** 对应元素 **\`matrix[mid // n][mid % n]\`**（\`n\` 为列数），与一维有序数组二分相同。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def searchMatrix(self, matrix, target):\r
        """\r
        :type matrix: List[List[int]]\r
        :type target: int\r
        :rtype: bool\r
        """\r
        m = len(matrix)\r
        n = len(matrix[0])\r
        low = 0\r
        high = m * n - 1\r
\r
        while low <= high:\r
            mid = (high - low) // 2 + low\r
            x = matrix[mid // n][mid % n]\r
            if x < target:\r
                low = mid + 1\r
            elif x > target:\r
                high = mid - 1\r
            else:\r
                return True\r
\r
        return False\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **下标映射**：第 \`k\` 个元素在第 **\`k // n\`** 行、第 **\`k % n\`** 列（\`n\` 为每行长度）。\r
- **二分**：比较 \`x\` 与 \`target\` 缩小区间，满足题面 **O(log(m·n))** 要求。\r
- **复杂度**：时间 **O(log(m·n))**，额外空间 **O(1)**。\r
`,$A=`---\r
title: "Leetcode 二分查找 2（查找区间，搜索旋转排序数组，旋转数组最小值，两数组中位数）"\r
date: "2026-04-10"\r
tags: ["Leetcode", "二分查找", "数组", "排序", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [34 查找区间](#q34) ｜ [33 搜索旋转排序数组](#q33) ｜ [153 旋转数组最小值](#q153) ｜ [4 两数组中位数](#q4)\r
\r
<a id="q34"></a>\r
\r
## LeetCode 34. 在排序数组中查找元素的第一个和最后一个位置 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**中等。** 给定按**非递减顺序**排序的整数数组 \`nums\` 和目标值 \`target\`，找出 \`target\` 在数组中**开始**和**结束**的位置。\r
\r
若 \`target\` 不存在，返回 **\`[-1, -1]\`**。\r
\r
**要求：** 算法时间复杂度为 **O(log n)**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [5,7,7,8,8,10]\`，\`target = 8\`  \r
  输出：\`[3,4]\`\r
\r
- **示例 2：** \`nums = [5,7,7,8,8,10]\`，\`target = 6\`  \r
  输出：\`[-1,-1]\`\r
\r
- **示例 3：** \`nums = []\`，\`target = 0\`  \r
  输出：\`[-1,-1]\`\r
\r
### 提示\r
\r
- \`0 ≤ len(nums) ≤ 10^5\`  \r
- \`-10^9 ≤ nums[i], target ≤ 10^9\`，\`nums\` **非递减**\r
\r
### 代码（Python）解法一：先找任意命中，再向两侧二分边界\r
\r
1. **第一次二分**：在整段上找任意一个 \`nums[mid] == target\`，记下 **\`ini_ind\`**；若无则返回 **\`[-1,-1]\`**。  \r
2. **左边界**：在 **\`[0, ini_ind]\`** 上二分，找**最靠左**的 \`target\`：若 \`nums[mid] == target\` 且（\`mid == 0\` 或 \`nums[mid-1] < nums[mid]\`），则 \`mid\` 为左端点；若 \`nums[mid] == target\` 且左侧仍为 \`target\`，则向左半继续。  \r
3. **右边界**：在 **\`[ini_ind, len(nums)-1]\`** 上二分，找**最靠右**的 \`target\`：若 \`nums[mid] == target\` 且（\`mid == len-1\` 或 \`nums[mid+1] > nums[mid]\`），则 \`mid\` 为右端点；否则向右半继续。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def searchRange(self, nums, target):\r
        """\r
        :type nums: List[int]\r
        :type target: int\r
        :rtype: List[int]\r
        """\r
        left = 0\r
        right = len(nums) - 1\r
        ini_ind = -1\r
        while left <= right:\r
            mid = (left + right) // 2\r
            if nums[mid] == target:\r
                ini_ind = mid\r
                break\r
            elif nums[mid] > target:\r
                right = mid - 1\r
            else:\r
                left = mid + 1\r
        if ini_ind == -1:\r
            return [-1, -1]\r
\r
        right = ini_ind\r
        left = 0\r
        left_ind = -1\r
        while left <= right:\r
            mid = (left + right) // 2\r
            if mid == 0 and nums[mid] == target:\r
                left_ind = 0\r
                break\r
            elif nums[mid] < target:\r
                left = mid + 1\r
            elif nums[mid - 1] < nums[mid] and nums[mid] == target:\r
                left_ind = mid\r
                break\r
            else:\r
                right = mid - 1\r
\r
        right = len(nums) - 1\r
        left = ini_ind\r
        right_ind = -1\r
        while left <= right:\r
            mid = (left + right) // 2\r
            if mid == len(nums) - 1 and nums[mid] == target:\r
                right_ind = len(nums) - 1\r
                break\r
            elif nums[mid] > target:\r
                right = mid - 1\r
            elif nums[mid + 1] > nums[mid] and nums[mid] == target:\r
                right_ind = mid\r
                break\r
            else:\r
                left = mid + 1\r
\r
        return [left_ind, right_ind]\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **三次二分**：第一次在全局定位 \`target\` 是否存在；后两次在缩小的区间内分别找「第一个」与「最后一个」\`target\`，均保持 **O(log n)**（常数因子为 3，仍为 **O(log n)**）。\r
- **左边界**：\`nums[mid] == target\` 且左邻更小（或已在下标 0），即为区间左端。  \r
- **右边界**：\`nums[mid] == target\` 且右邻更大（或已在下标 \`len-1\`），即为区间右端。  \r
- **空数组**：第一次二分 \`len(nums)==0\` 时 \`right=-1\`，循环不进入，\`ini_ind\` 保持 **-1**，返回 **\`[-1,-1]\`**。\r
\r
### 代码（Python）解法二：lower_bound / upper_bound 两次二分\r
\r
抽象出 **\`binarySearch(nums, target, lower)\`**：在有序数组上找**第一个满足条件的下标**并写入 **\`ans\`**。  \r
- **\`lower=True\`**：找第一个 **\`nums[i] >= target\`**（即 \`lower_bound\`），对应区间**左端点**。  \r
- **\`lower=False\`**：找第一个 **\`nums[i] > target\`**（即 \`upper_bound\`），**右端点**为 **\`该下标 - 1\`**。  \r
\r
最后校验 **\`leftIdx\` ≤ \`rightIdx\`** 且两端均为 **\`target\`**，否则无命中。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def binarySearch(self, nums, target, lower):\r
        left, right = 0, len(nums) - 1\r
        ans = len(nums)\r
\r
        while left <= right:\r
            mid = (left + right) // 2\r
            if nums[mid] > target or (lower and nums[mid] >= target):\r
                right = mid - 1\r
                ans = mid\r
            else:\r
                left = mid + 1\r
\r
        return ans\r
\r
    def searchRange(self, nums, target):\r
        leftIdx = self.binarySearch(nums, target, True)\r
        rightIdx = self.binarySearch(nums, target, False) - 1\r
\r
        if (\r
            leftIdx <= rightIdx\r
            and rightIdx < len(nums)\r
            and nums[leftIdx] == target\r
            and nums[rightIdx] == target\r
        ):\r
            return [leftIdx, rightIdx]\r
\r
        return [-1, -1]\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **统一模板**：\`nums[mid] > target\` 或（\`lower\` 且 \`nums[mid] >= target\`）时向左收缩并记录 **\`ans\`**，否则向右；结束时 **\`ans\`** 为第一个「大于 / 大于等于」分界位置。\r
- **右端点**：\`upper_bound\` 是第一个 **\`> target\`** 的位置，**\`-1\`** 即最后一个 **\`== target\`**。\r
- **合法性**：若不存在 \`target\`，\`leftIdx\` 可能落在第一个 \`> target\` 处或越界侧，通过区间与端点值判断返回 **\`[-1,-1]\`**。\r
- **复杂度**：两次二分，**O(log n)** 时间，**O(1)** 额外空间。\r
\r
<a id="q33"></a>\r
\r
## LeetCode 33. 搜索旋转排序数组 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**中等。** 整数数组 \`nums\` 原本**升序**且**互不相同**，在某个未知下标处**旋转**后得到当前数组（例如 \`[0,1,2,4,5,6,7]\` 在下标 \`3\` 处旋转得到 \`[4,5,6,7,0,1,2]\`）。给定 \`nums\` 与整数 \`target\`，若 \`target\` 在数组中则返回其**下标**，否则返回 **\`-1\`**。\r
\r
**要求：** 时间复杂度 **O(log n)**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [4,5,6,7,0,1,2]\`，\`target = 0\`  \r
  输出：\`4\`\r
\r
- **示例 2：** \`nums = [4,5,6,7,0,1,2]\`，\`target = 3\`  \r
  输出：\`-1\`\r
\r
- **示例 3：** \`nums = [1]\`，\`target = 0\`  \r
  输出：\`-1\`\r
\r
### 提示\r
\r
- \`1 ≤ len(nums) ≤ 5000\`  \r
- \`-10^4 ≤ nums[i] ≤ 10^4\`，元素**互不相同**  \r
- \`nums\` 由升序数组在某一未知下标处旋转得到  \r
- \`-10^4 ≤ target ≤ 10^4\`\r
\r
### 代码（Python）：先找旋转点（最小值下标），再二分\r
\r
**步骤 1：** 用二分找**最小值下标** \`pivot\`（\`nums[mid] > nums[right]\` 则最小值在右半段，否则在左半段含 \`mid\`）。**步骤 2：** 比较 \`target\` 与 **\`nums[-1]\`**：若 **\`target ≤ nums[-1]\`**，则 \`target\` 只可能落在**右半段有序区间** \`[pivot, n-1]\`，否则落在**左半段** \`[0, pivot-1]\`。**步骤 3：** 在选定区间上做**普通二分**。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def search(self, nums, target):\r
        if not nums:\r
            return -1\r
\r
        left, right = 0, len(nums) - 1\r
        while left < right:\r
            mid = (left + right) // 2\r
            if nums[mid] > nums[right]:\r
                left = mid + 1\r
            else:\r
                right = mid\r
        pivot = left\r
\r
        if target <= nums[-1]:\r
            left, right = pivot, len(nums) - 1\r
        else:\r
            left, right = 0, pivot - 1\r
\r
        while left <= right:\r
            mid = (left + right) // 2\r
            if nums[mid] == target:\r
                return mid\r
            elif nums[mid] < target:\r
                left = mid + 1\r
            else:\r
                right = mid - 1\r
        return -1\r
</pre>\r
\r
### 思路解析\r
\r
- **旋转点**：最小值所在位置把数组分成两段，各自内部仍升序；与 \`nums[right]\` 比较可判断最小值在左还是右。\r
- **定区间**：右段元素均 **\`≤ nums[-1]\`**，左段元素均 **\`> nums[-1]\`**（无重复时成立），据此二选一做第三次二分。\r
- **空数组**：直接返回 **\`-1\`**（与题目主数据 \`len ≥ 1\` 可并存）。\r
- **复杂度**：两次二分过程均为 **O(log n)**，总计 **O(log n)**，**O(1)** 额外空间。\r
\r
<a id="q153"></a>\r
\r
## LeetCode 153. 寻找旋转排序数组中的最小值 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**中等。** 长度为 \`n\` 的数组原本**升序**且元素**互不相同**，经过 **1～n 次「旋转」** 得到 \`nums\`。一次旋转指把**最后一个元素移到最前面**。\r
\r
给定旋转后的 \`nums\`，返回其中的**最小值**。\r
\r
**要求：** 时间复杂度 **O(log n)**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [3,4,5,1,2]\`  \r
  输出：\`1\`\r
\r
- **示例 2：** \`nums = [4,5,6,7,0,1,2]\`  \r
  输出：\`0\`\r
\r
- **示例 3：** \`nums = [11,13,15,17]\`  \r
  输出：\`11\`（旋转后仍整体升序，最小值即首元素）\r
\r
### 提示\r
\r
- \`n == len(nums)\`，\`1 ≤ n ≤ 5000\`  \r
- \`-5000 ≤ nums[i] ≤ 5000\`，**互不相同**  \r
- \`nums\` 由升序数组经 **1～n** 次旋转得到\r
\r
### 代码（Python）：二分找最小值下标\r
\r
与 **33 题** 中「找旋转点」相同：\`nums[mid] > nums[right]\` 时最小值在 **\`mid\` 右侧**，否则在 **\`[left, mid]\`**。循环结束时 **\`left == right\`** 即为最小值下标，返回 **\`nums[pivot]\`**。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def findMin(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        if not nums:\r
            return -1\r
\r
        left, right = 0, len(nums) - 1\r
        while left < right:\r
            mid = (left + right) // 2\r
            if nums[mid] > nums[right]:\r
                left = mid + 1\r
            else:\r
                right = mid\r
        pivot = left\r
\r
        return nums[pivot]\r
</pre>\r
\r
### 思路解析\r
\r
- **二分性质**：右半段（含最小值）的数整体不超过 **\`nums[right]\`** 一侧的「断点」；用与末尾比较可不断砍掉不含最小值的一半。\r
- **与 33 题关系**：本题的 **\`pivot\`** 就是 33 题里第一步求出的**最小值下标**，此处只需返回值 **\`nums[pivot]\`**。\r
- **空数组**：题目数据一般 **\`n ≥ 1\`**；若保留 **\`if not nums: return -1\`**，需知这与部分 OJ 对返回类型的约定可能不一致，可按需要删去。\r
- **复杂度**：**O(log n)** 时间，**O(1)** 额外空间。\r
\r
<a id="q4"></a>\r
\r
## LeetCode 4. 寻找两个正序数组的中位数 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**困难。** 给定两个大小分别为 \`m\`、\`n\` 的**正序（升序）**数组 \`nums1\` 与 \`nums2\`，求两个数组合并后**中位数**（若总个数为偶数，取中间两数的平均值）。\r
\r
**要求：** 时间复杂度 **O(log(m+n))**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums1 = [1,3]\`，\`nums2 = [2]\`  \r
  输出：\`2.00000\`（合并为 \`[1,2,3]\`，中位数为 \`2\`）\r
\r
- **示例 2：** \`nums1 = [1,2]\`，\`nums2 = [3,4]\`  \r
  输出：\`2.50000\`（合并为 \`[1,2,3,4]\`，中位数为 \`(2+3)/2\`）\r
\r
### 提示\r
\r
- \`len(nums1) == m\`，\`len(nums2) == n\`  \r
- \`0 ≤ m, n ≤ 1000\`，且 **\`1 ≤ m + n ≤ 2000\`**  \r
- \`-10^6 ≤ nums1[i], nums2[i] ≤ 10^6\`\r
\r
### 代码（Python）解法一：合并后排序\r
\r
将两数组合并为 **\`nums1 + nums2\`**，**\`sort()\`** 后取中位：长度为偶数时取中间两项的**平均值**（用 **\`float(...)\`**），为奇数时取正中间元素。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def findMedianSortedArrays(self, nums1, nums2):\r
        """\r
        :type nums1: List[int]\r
        :type nums2: List[int]\r
        :rtype: float\r
        """\r
        num = nums1 + nums2\r
        num.sort()\r
        if len(num) % 2 == 0:\r
            return float(num[len(num) // 2] + num[len(num) // 2 - 1]) / 2\r
        else:\r
            return float(num[len(num) // 2])\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **正确性**：合并排序后，中位数定义与题意一致。\r
- **复杂度**：排序主导，为 **O((m+n) log(m+n))** 时间，**O(m+n)** 额外空间（合并后的列表）；**不满足**题面 **O(log(m+n))** 要求，适合理解题意与对拍。\r
- **改进**：需在两个有序数组上做**划分 / 二分**，使找第 \`k\` 小或左右部分元素个数满足中位数定义，可达到 **O(log(m+n))**（可作为解法二单独整理）。\r
`,HA=`---\r
title: "Leetcode 二叉树 1（中序遍历，二叉树的最大深度）"\r
date: "2026-03-22"\r
tags: ["Leetcode", "二叉树", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [94 二叉树的中序遍历](#q94) ｜ [104 二叉树的最大深度](#q104)\r
\r
<a id="q94"></a>\r
\r
## LeetCode 94. 二叉树的中序遍历 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个二叉树的根节点 \`root\`，返回它的**中序**遍历。\r
\r
### 提示\r
\r
- 树中节点数目在范围 \`[0, 100]\` 内  \r
- \`-100 ≤ Node.val ≤ 100\`\r
\r
**进阶**：递归算法很简单，你可以通过**迭代**算法完成吗？\r
\r
### 代码（Python）解法一：递归\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution:\r
    def inorder(self, root, res):\r
        if not root:\r
            return None\r
        self.inorder(root.left, res)\r
        res.append(root.val)\r
        self.inorder(root.right, res)\r
    \r
    def inorderTraversal(self, root):\r
        res = []\r
        self.inorder(root, res)\r
        return res\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **中序遍历顺序**：左子树 → 根结点值 → 右子树，对应递归调用顺序：先 \`inorder(left)\`，再 \`append(root.val)\`，再 \`inorder(right)\`。\r
- **空结点**：\`root\` 为 \`None\` 时直接返回，不再向下递归。\r
- **结果列表**：由 \`inorderTraversal\` 创建 \`res\`，传入辅助函数 \`inorder\` 统一收集，最后返回 \`res\`。\r
- **复杂度**：每个结点访问一次，时间 **O(n)**，**n** 为结点数；递归栈深度最坏 **O(n)**（链状树），平均 **O(h)**，**h** 为树高。\r
\r
### 代码（Python）解法二：迭代（栈）\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution:\r
    def inorderTraversal(self, root):\r
        res = []\r
        stack = []\r
        while root is not None or stack:\r
            while root is not None:\r
                stack.append(root)\r
                root = root.left\r
            root = stack.pop()\r
            res.append(root.val)\r
            root = root.right\r
        return res\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **核心**：用**显式栈**模拟递归「一路向左」的过程。中序要求先处理完左子树再访问根，因此先把从当前结点沿左孩子一路入栈，直到左子为空。\r
- **内层 \`while root\`**：不断 \`stack.append(root)\` 并 \`root = root.left\`，等价于递归深入左子树。\r
- **弹出与访问**：左走到头后 \`root = stack.pop()\`，此时该结点无未处理左子，将 \`root.val\` 记入 \`res\`，再令 \`root = root.right\`，转去处理右子树（下一轮可能再次一路向左入栈）。\r
- **外层条件**：\`root is not None or stack\` 表示当前还有子树可走或栈里还有待回溯的结点。\r
- **复杂度**：时间 **O(n)**，每个结点入栈、出栈各常数次；空间 **O(h)**，栈深最坏 **O(n)**（链状树），满足进阶「迭代」写法。\r
\r
<video src="Leetcode/0322_1.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 代码（Python）解法三：Morris 中序遍历\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution:\r
    def inorderTraversal(self, root):\r
        res = []\r
        predecessor = None\r
        \r
        while root is not None:\r
            if root.left is not None:\r
                # predecessor 节点就是当前 root 节点向左走一步，然后一直向右走至无法走为止\r
                predecessor = root.left\r
                while predecessor.right is not None and predecessor.right != root:\r
                    predecessor = predecessor.right\r
                \r
                # 让 predecessor 的右指针指向 root，继续遍历左子树\r
                if predecessor.right is None:\r
                    predecessor.right = root\r
                    root = root.left\r
                # 说明左子树已经访问完了，我们需要断开链接\r
                else:\r
                    res.append(root.val)\r
                    predecessor.right = None\r
                    root = root.right\r
            # 如果没有左孩子，则直接访问右孩子\r
            else:\r
                res.append(root.val)\r
                root = root.right\r
        \r
        return res\r
</pre>\r
\r
### 思路解析（解法三）\r
\r
- **核心**：**Morris 遍历**利用树中大量 \`None\` 的右指针，临时改成指向**后继**，从而在不使用栈、不递归的情况下回到「父结点」；遍历结束再恢复为 \`None\`，故又称**线索二叉树**思路。\r
- **前驱 \`predecessor\`**：当前 \`root\` 若有左子树，则前驱为「从左孩子出发，沿右孩子一直走到尽头」的结点（且 \`predecessor.right\` 不能已是当前 \`root\`，避免环上误判）。\r
- **两种情况**：若 \`predecessor.right is None\`，说明第一次来到该子树，暂时 \`predecessor.right = root\` 建线索，并进入 \`root.left\`；若 \`predecessor.right == root\`，说明左子树已按中序走完，此时访问 \`root.val\`，**拆掉线索** \`predecessor.right = None\`，再进入 \`root.right\`。\r
- **无左孩子**：当前结点在中序里轮到访问，记入 \`res\` 后走右子。\r
- **复杂度**：时间 **O(n)**（每个结点被访问常数次，线索建立与拆除摊还）；**额外空间 O(1)**（仅若干指针），优于递归与栈版的空间。\r
\r
---\r
\r
<a id="q104"></a>\r
\r
## LeetCode 104. 二叉树的最大深度 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个二叉树 \`root\`，返回其**最大深度**。\r
\r
二叉树的**最大深度**是指从根节点到最远叶子节点的最长路径上的**节点数**。\r
\r
### 提示\r
\r
- 树中节点的数量在 \`[0, 10^4]\` 区间内  \r
- \`-100 ≤ Node.val ≤ 100\`\r
\r
### 代码（Python）解法一：递归\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def maxDepth(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: int\r
        """\r
        if root == None:\r
            return 0\r
        return max(self.maxDepth(root.left), self.maxDepth(root.right)) + 1\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **递归含义**：\`maxDepth(root)\` 表示以 \`root\` 为根的子树的最大深度（按**结点个数**计）。\r
- **空树**：\`root is None\` 时深度为 **0**。\r
- **转移**：当前树深度 = **左右子树深度的较大值 + 1**（根结点本身占一层）。\r
- **复杂度**：每个结点访问一次，时间 **O(n)**；递归栈最坏 **O(n)**（链状树），平均 **O(h)**，**h** 为树高。\r
\r
### 代码（Python）解法二：广度优先搜索（层序）\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
from collections import deque\r
\r
class Solution:\r
    def maxDepth(self, root):\r
        if root is None:\r
            return 0\r
        \r
        queue = deque()\r
        queue.append(root)\r
        ans = 0\r
        \r
        while queue:\r
            sz = len(queue)\r
            while sz > 0:\r
                node = queue.popleft()\r
                if node.left:\r
                    queue.append(node.left)\r
                if node.right:\r
                    queue.append(node.right)\r
                sz -= 1\r
            ans += 1\r
        \r
        return ans\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **核心**：**按层扩展**。队列中始终保存**当前层**的全部结点；每处理完一层，\`ans += 1\`，深度即层数。\r
- **内层循环**：\`sz = len(queue)\` 固定本层结点个数，依次 \`popleft\` 并把非空左右孩子入队，避免与下一层混在一起。\r
- **与递归对比**：递归是「先到底再回溯计深度」；BFS 是「横向扫一层层数」，语义直观。\r
- **复杂度**：每个结点入队、出队各一次，时间 **O(n)**；队列最多存一层的结点，最坏 **O(n)**（完全二叉树最宽一层），平均 **O(w)**，**w** 为最大层宽。\r
`,zA=`---\r
title: "Leetcode 二叉树 2（翻转二叉树，对称二叉树，二叉树的直径）"\r
date: "2026-03-23"\r
tags: ["Leetcode", "二叉树", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [226 翻转二叉树](#q226) ｜ [101 对称二叉树](#q101) ｜ [543 二叉树的直径](#q543)\r
\r
<a id="q226"></a>\r
\r
## LeetCode 226. 翻转二叉树 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一棵二叉树的根节点 \`root\`，翻转这棵二叉树，并返回其根节点。\r
\r
### 示例图\r
\r
![翻转二叉树示例](Leetcode/0323_1.png)\r
\r
### 提示\r
\r
- 树中节点数目范围在 \`[0, 100]\` 内  \r
- \`-100 ≤ Node.val ≤ 100\`\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def invertTree(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: Optional[TreeNode]\r
        """\r
        if not root:\r
            return None\r
        temp = root.right\r
        root.right = self.invertTree(root.left)\r
        root.left = self.invertTree(temp)\r
        return root\r
</pre>\r
\r
### 思路解析\r
\r
- **递归含义**：\`invertTree(root)\` 返回以 \`root\` 为根的**翻转后**子树的新根（仍为 \`root\`，结构已交换左右）。\r
- **空结点**：\`root\` 为 \`None\` 时返回 \`None\`。\r
- **交换顺序**：先用 \`temp\` 保存原右子，将 \`root.right\` 指向**翻转后的左子** \`invertTree(root.left)\`；再将 \`root.left\` 指向**翻转后的原右子** \`invertTree(temp)\`。若先改 \`root.left\` 再递归右子，会丢失原右子指针，故需 \`temp\`。\r
- **复杂度**：每个结点访问一次，时间 **O(n)**；递归栈最坏 **O(n)**，平均 **O(h)**，**h** 为树高。\r
\r
---\r
\r
<a id="q101"></a>\r
\r
## LeetCode 101. 对称二叉树 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个二叉树的根节点 \`root\`，检查它是否**轴对称**。\r
\r
### 示例图\r
\r
![对称二叉树示例](Leetcode/0323_2.png)\r
\r
### 提示\r
\r
- 树中节点数目在范围 \`[1, 1000]\` 内  \r
- \`-100 ≤ Node.val ≤ 100\`\r
\r
**进阶**：你可以运用**递归**和**迭代**两种方法解决这个问题吗？\r
\r
### 代码（Python）解法一：递归\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def check(self, p, q):\r
        # p，q都空了，肯定对称了。\r
        if not p and not q:\r
            return True\r
        \r
        # p和q有一个没空，肯定没对称。\r
        if not p or not q:\r
            return False\r
\r
        \r
        # 只有根节点相同 且 左子树等于右子树 且 右子树等于左子树才对称\r
        return p.val == q.val and self.check(p.left, q.right) \r
        and self.check(p.right, q.left)\r
\r
    def isSymmetric(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: bool\r
        """\r
        return self.check(root.left, root.right)\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **对称含义**：整棵树关于根结点**左右镜像**——左子树的左 ↔ 右子树的右，左子树的右 ↔ 右子树的左，且对应结点值相等。\r
- **\`check(p, q)\`**：比较「应互为镜像」的两棵子树。二者皆空 → 对称；恰有一空 → 不对称；否则要求 \`p.val == q.val\`，且 \`p\` 的左与 \`q\` 的右对称、\`p\` 的右与 \`q\` 的左对称。\r
- **\`isSymmetric\`**：根结点自身在对称轴上，只需 \`check(root.left, root.right)\`。（当前提示保证至少 1 个结点；若题面允许空树，需先判 \`if not root: return True\`。）\r
- **复杂度**：每个结点访问一次，时间 **O(n)**；递归栈最坏 **O(n)**，平均 **O(h)**。\r
\r
### 代码（Python）解法二：迭代（队列）\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
from collections import deque\r
\r
class Solution(object):\r
    def check(self, u, v):\r
        # 创建队列\r
        q = deque()\r
        q.append(u)\r
        q.append(v)\r
\r
        while q:\r
            u = q[0]\r
            q.popleft()\r
            v = q[0]\r
            q.popleft()\r
            if not u and not v:\r
                continue\r
            if (not u or not v) or (u.val != v.val):\r
                return False\r
\r
            q.append(u.left)\r
            q.append(v.right)\r
            q.append(u.right)\r
            q.append(v.left)\r
\r
        return True\r
\r
    def isSymmetric(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: bool\r
        """\r
        return self.check(root, root)\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **核心**：用**队列**每次取出应互为镜像的一对结点 \`u\`、\`v\`，比较是否同为空、或同非空且 \`val\` 相等；再把下一层要比较的**镜像对**按顺序入队：\`u.left\` 与 \`v.right\`、\`u.right\` 与 \`v.left\`（可包含 \`None\`）。\r
- **与解法一入口不同**：\`isSymmetric\` 调用 \`check(root, root)\`，第一次比较根与自身，随后入队的是 \`(left, right)\` 与 \`(right, left)\` 两对，等价于从轴两侧同步层序展开。\r
- **双空 \`continue\`**：两个都是 \`None\` 表示这一侧没有更多结构，跳过即可，**不**代表整棵树不对称。\r
- **复杂度**：时间 **O(n)**；队列规模最坏 **O(n)**，无递归栈，满足进阶「迭代」要求。\r
\r
---\r
\r
<a id="q543"></a>\r
\r
## LeetCode 543. 二叉树的直径 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一棵二叉树，你需要计算它的**直径**长度。一棵二叉树的直径长度是任意两个结点路径长度中的**最大值**。这条路径可能穿过也可能不穿过根结点 \`root\`。\r
\r
**注意**：两结点之间路径的长度由它们之间**边数**表示。\r
\r
### 提示\r
\r
- 树中节点数目在范围 \`[1, 10^4]\` 内  \r
- \`-100 ≤ Node.val ≤ 100\`\r
\r
### 代码（Python）解法一：遍历每个结点 + 递归求深度（会超时）\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def depth(self, node):\r
        if not node:\r
            return 0\r
        return max(self.depth(node.left), self.depth(node.right)) + 1\r
\r
    def diameterOfBinaryTree(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: int\r
        """\r
        if not root:\r
            return 0\r
        ans = 0\r
        stack = []\r
        while root is not None or stack:\r
            while root is not None:\r
                stack.append(root)\r
                root = root.left\r
            root = stack.pop()\r
            diameter = self.depth(root.left) + self.depth(root.right)\r
            if diameter > ans:\r
                ans = diameter\r
            root = root.right\r
        return ans\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **想法**：对每个结点 \`root\`，经过该结点的最长路径长度为「左子树高度 + 右子树高度」（此处 \`depth\` 表示从该子树根到叶子的最长**结点数**，左右各一段拼起来边数即为 \`depth(left) + depth(right)\`，与题意一致）。\r
- **遍历方式**：用**栈**做类似中序的 DFS，逐个访问结点并更新全局最大 \`ans\`。\r
- **为何超时**：对每个结点调用一次 \`depth\`，而 \`depth\` 自身要遍历子树，最坏 **O(n)**；共 **n** 个结点，总时间 **O(n^2)**。当 **n = 10^4** 时量级约 **10^8**，容易 **TLE**。\r
\r
### 代码（Python）解法二：后序一次遍历（推荐）\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def __init__(self):\r
        self.ans = 0\r
\r
    def diameterOfBinaryTree(self, root):\r
        def depth(node):\r
            if not node:\r
                return 0\r
            L = depth(node.left)\r
            R = depth(node.right)\r
            self.ans = max(self.ans, L + R)\r
            return max(L, R) + 1\r
\r
        depth(root)\r
        return self.ans\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **核心**：在求每个结点**高度**的后序过程中，顺带用 **\`L + R\`** 更新经过该结点的路径边数最大值；每个结点只在其子树高度已知时算一次，**每条边只在向上回溯时被统计常数次**。\r
- **复杂度**：时间 **O(n)**，空间递归栈 **O(h)**，可通过本题数据范围。\r
`,GA=`---\r
title: "Leetcode 二叉树 3（二叉树的层序遍历，将有序数组转换为二叉搜索树）"\r
date: "2026-03-28"\r
tags: ["Leetcode", "二叉树", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [102 二叉树的层序遍历](#q102) ｜ [108 将有序数组转换为二叉搜索树](#q108)\r
\r
<a id="q102"></a>\r
\r
## LeetCode 102. 二叉树的层序遍历 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你二叉树的根节点 \`root\`，返回其节点值的 **层序遍历**。（即逐层地，从左到右访问所有节点）。\r
\r
### 提示\r
\r
- 树中节点数目在范围 \`[0, 2000]\` 内  \r
- \`-1000 ≤ Node.val ≤ 1000\`\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
from collections import deque\r
\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def levelOrder(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: List[List[int]]\r
        """\r
        if not root:\r
            return []\r
        temp = deque()\r
        temp.append(root)\r
        ans = []\r
        while temp:\r
            N = len(temp)\r
            ans_temp = []\r
            for i in range(N):\r
                p = temp.popleft()\r
                ans_temp.append(p.val)\r
                if p.left:\r
                    temp.append(p.left)\r
                if p.right:\r
                    temp.append(p.right)\r
            ans.append(ans_temp)\r
        return ans\r
</pre>\r
\r
### 思路解析\r
\r
- **BFS + 按层分组**：用 \`deque\` 做队列，每次处理**当前层**全部结点：先记录本层宽度 \`N = len(temp)\`，再连续 \`popleft\` 恰好 \`N\` 次，把这层的值写入 \`ans_temp\`，同时把每个结点的左右孩子（若存在）加入队尾，供下一轮作为下一层处理。\r
- **空树**：\`root\` 为 \`None\` 时直接返回 \`[]\`。\r
- **为何要先取 \`N\`**：队列里在「处理本层」过程中会不断塞入下一层结点，若不在循环前固定本层个数，会把新入队的下一层结点误算进当前层。\r
- **复杂度**：每个结点入队、出队各一次，时间 **O(n)**，**n** 为结点数；队列最坏同时存约一层结点，空间最坏 **O(n)**（完全二叉树最后一层可达约 **n/2**）。\r
\r
---\r
\r
<a id="q108"></a>\r
\r
## LeetCode 108. 将有序数组转换为二叉搜索树 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个整数数组 \`nums\`，其中元素已经按 **升序** 排列，请你将其转换为一棵 **高度平衡** 的二叉搜索树。\r
\r
### 提示\r
\r
- \`1 ≤ nums.length ≤ 10^4\`  \r
- \`-10^4 ≤ nums[i] ≤ 10^4\`  \r
- \`nums\` 按 **严格递增** 顺序排列\r
\r
### 代码（Python）解法一：分治（取中点为根）\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def sortedArrayToBST(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: Optional[TreeNode]\r
        """\r
        return self.helper(nums, 0, len(nums) - 1)\r
\r
    def helper(self, nums, left, right):\r
        if left > right:\r
            return None\r
\r
        mid = (left + right) // 2\r
\r
        root = TreeNode(nums[mid])\r
        root.left = self.helper(nums, left, mid - 1)\r
        root.right = self.helper(nums, mid + 1, right)\r
        return root\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **BST + 平衡**：中序遍历 BST 得到升序序列；反过来，**有序数组的中点**作根，则左半段均小于根、右半段均大于根，天然满足 BST；左右子树递归时仍取各自区间中点作子树根，使左右规模至多差 1，树高平衡。\r
- **\`helper(nums, left, right)\`**：构建下标区间 \`[left, right]\` 对应的平衡 BST；\`left > right\` 时为空，返回 \`None\`。\r
- **中点**：\`mid = (left + right) // 2\` 作为当前子树根的值，左子树为 \`helper(left, mid-1)\`，右子树为 \`helper(mid+1, right)\`。\r
- **复杂度**：每个元素参与一次建结点，时间 **O(n)**；递归栈深度 **O(log n)**（平衡时），最坏链状递归 **O(n)**。\r
\r
### 代码（Python）解法二：分治（上取整中点）\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def sortedArrayToBST(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: Optional[TreeNode]\r
        """\r
        return self.helper(nums, 0, len(nums) - 1)\r
\r
    def helper(self, nums, left, right):\r
        if left > right:\r
            return None\r
\r
        mid = (left + right + 1) // 2\r
\r
        root = TreeNode(nums[mid])\r
        root.left = self.helper(nums, left, mid - 1)\r
        root.right = self.helper(nums, mid + 1, right)\r
        return root\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **与解法一的关系**：同样是区间分治、选「中点」作根，左子区间建左子树、右子区间建右子树；仅 **中点下标** 的取法不同。\r
- **\`mid = (left + right + 1) // 2\`**：在区间长度为**偶数**时，Python 的 \`//\` 会向下取整；若写 \`(left + right) // 2\` 更偏向**左**侧中点，而 \`(left + right + 1) // 2\` 等价于对长度折半上取整时选**右**侧中点，使根略偏右，得到的 BST 形态与解法一可能不同，但仍是合法 **BST** 且保持 **高度平衡**。\r
- **选用**：两种写法均可通过本题；若希望与「左偏中点」的常见题解区分，或避免某侧区间长期多 1 个元素，可按习惯选择其一。\r
\r
`,WA=`---\r
title: "Leetcode 二叉树 4（验证二叉搜索树，二叉搜索树中第 K 小的元素）"\r
date: "2026-03-29"\r
tags: ["Leetcode", "二叉树", "BST", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [98 验证二叉搜索树](#q98) ｜ [230 二叉搜索树中第 K 小的元素](#q230)\r
\r
<a id="q98"></a>\r
\r
## LeetCode 98. 验证二叉搜索树 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个二叉树的根节点 \`root\`，判断其是否是一个**有效的二叉搜索树（BST）**。\r
\r
**有效 BST 的定义如下：**\r
\r
- 若某结点有左子树，则左子树上**所有**结点的键值都**严格小于**该结点的键值；\r
- 若某结点有右子树，则右子树上**所有**结点的键值都**严格大于**该结点的键值；\r
- 左、右子树也必须是二叉搜索树。\r
\r
### 提示\r
\r
- 树中节点数目在范围 \`[1, 10^4]\` 内  \r
- \`-2^31 ≤ Node.val ≤ 2^31 - 1\`\r
\r
### 代码（Python）解法一：递归 + 左右子树极值与根比较\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def isValidBST(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: bool\r
        """\r
        if not root:\r
            return True\r
\r
        left = self.isValidBST(root.left)\r
        right = self.isValidBST(root.right)\r
        if not left:\r
            return False\r
        if not right:\r
            return False\r
\r
        if root.left:\r
            if root.left.val >= root.val:\r
                return False\r
            p = root.left\r
            while p.right:\r
                if p.right.val >= root.val:\r
                    return False\r
                p = p.right\r
\r
        if root.right:\r
            if root.right.val <= root.val:\r
                return False\r
            p = root.right\r
            while p.left:\r
                if p.left.val <= root.val:\r
                    return False\r
                p = p.left\r
\r
        return True\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **先递归子树**：\`isValidBST(root.left)\`、\`isValidBST(root.right)\` 分别保证左右子树在各自结构下满足 BST 的局部性质。\r
- **与根的全局关系**：仅看直接孩子不够，需要保证**左子树中最大值**仍小于根、**右子树中最小值**仍大于根。在 BST 中，左子树的最大值在**从 \`root.left\` 一直往右走**的终点；右子树的最小值在**从 \`root.right\` 一直往左走**的终点。题解中通过 \`while p.right\` / \`while p.left\` 沿脊检查路径上是否出现违反与 \`root.val\` 严格大小关系的结点。\r
- **空树**：\`root\` 为 \`None\` 时视为合法，返回 \`True\`。\r
- **说明**：**中序遍历判单调递增**见下方解法二；另有**递归传递上下界**等写法。本解法通过「递归 + 左右极值与根比较」将全局约束落在当前根上。\r
\r
### 代码（Python）解法二：中序遍历（迭代 + 栈）\r
\r
BST 的中序遍历为**严格递增**序列；用栈模拟中序，维护**上一个访问结点值** \`temp\`，若当前 \`root.val <= temp\` 则非 BST。\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def isValidBST(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: bool\r
        """\r
        stack = []\r
        temp = -100000000000\r
        while root is not None or stack:\r
            while root is not None:\r
                stack.append(root)\r
                root = root.left\r
            root = stack.pop()\r
            if root.val <= temp:\r
                return False\r
            temp = root.val\r
            root = root.right\r
        return True\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **性质**：合法 BST 的中序遍历（左 → 根 → 右）得到的关键字序列**严格递增**。\r
- **迭代 + 栈**：外层循环等价于标准「一路向左入栈、弹栈访问、再转右」的中序模板；每弹出一个结点，其值应**大于**上一个已访问值 \`temp\`，否则说明存在「逆序」，不是 BST。\r
- **前驱初值**：\`temp\` 取小于题目值域下界的常数（如 \`-10^11\`，小于 \`-2^31\`），保证第一个结点必能通过 \`>\` 比较；也可写为 \`temp = float('-inf')\`。\r
- **复杂度**：每个结点入栈、出栈各一次，时间 **O(n)**，**n** 为结点数；栈最坏 **O(n)**（链状树）。\r
\r
---\r
\r
<a id="q230"></a>\r
\r
## LeetCode 230. 二叉搜索树中第 K 小的元素 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个二叉搜索树的根节点 \`root\` 和一个整数 \`k\`，请你设计一个算法查找其中**第 \`k\` 小**的元素（\`k\` 从 1 开始计数）。\r
\r
### 提示\r
\r
- 二叉树结点个数为 \`n\`，且 \`1 ≤ k ≤ n ≤ 10^4\`  \r
- \`0 ≤ Node.val ≤ 10^4\`\r
\r
**进阶**：如果二叉搜索树经常被修改（插入/删除操作），并且你需要频繁地查找第 \`k\` 小的值，你将如何优化算法？（例如：结点维护子树大小、平衡树 / 顺序统计树等思路。）\r
\r
### 代码（Python）解法一：中序遍历 + 排序\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def kthSmallest(self, root, k):\r
        """\r
        :type root: Optional[TreeNode]\r
        :type k: int\r
        :rtype: int\r
        """\r
        res = []\r
        stack = []\r
        while root is not None or stack:\r
            while root is not None:\r
                stack.append(root)\r
                root = root.left\r
            root = stack.pop()\r
            res.append(root.val)\r
            root = root.right\r
        res.sort()\r
        return res[k - 1]\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **BST 与中序**：二叉搜索树的中序遍历（左 → 根 → 右）得到**升序**关键字序列，第 \`k\` 小即该序列中第 \`k\` 个元素，对应下标 **\`k - 1\`**。\r
- **实现**：用栈迭代完成中序，将所有结点值依次写入 \`res\`，再取 \`res[k - 1]\`。\r
- **关于 \`res.sort()\`**：对 BST 而言，中序结果**已经全局有序**，此处排序是**冗余**的；去掉 \`sort\` 后答案不变，且可省去 **O(n log n)** 的排序开销。\r
- **可优化**：若只需求第 \`k\` 小，可在中序过程中**计数**，访问到第 \`k\` 个结点时**提前返回**，时间 **O(k)**、空间栈深 **O(h)**，无需存满表。\r
- **进阶**：频繁插入/删除时，可在结点增加**子树结点数**、或采用支持顺序统计的平衡结构，使查询第 \`k\` 小均摊更优。\r
\r
### 代码（Python）解法二：子树结点数 + 类比分治（不推荐作本题默认写法）\r
\r
**思路**：先做一次 DFS，用哈希表记录**每个结点为根的子树结点数**；查询第 \`k\` 小时，比较左子树结点数 \`left\` 与 \`k\`：若 \`left == k - 1\`，当前根即为第 \`k\` 小；若 \`left < k - 1\`，第 \`k\` 小在右子树，且 \`k\` 需减去左子树与根；否则在左子树中继续找。\r
\r
**说明**：本题单次查询、静态树，**中序遍历提前返回**更简单；下面写法适合理解「进阶」中**子树规模**思想，但**额外 O(n) 空间**、建树时依赖**结点对象作哈希键**，且**树被修改后需重建统计**，故标注为**不推荐**作为首选模板。\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class MyBst(object):\r
    def __init__(self, root):\r
        self.root = root\r
        self._node_num = {}\r
        self._count_node_num(root)\r
\r
    def kth_smallest(self, k):\r
        node = self.root\r
        while node:\r
            left = self._get_node_num(node.left)\r
            if left < k - 1:\r
                node = node.right\r
                k -= left + 1\r
            elif left == k - 1:\r
                return node.val\r
            else:\r
                node = node.left\r
\r
    def _count_node_num(self, node):\r
        if not node:\r
            return 0\r
        self._node_num[node] = 1 + self._count_node_num(node.left) + self._count_node_num(node.right)\r
        return self._node_num[node]\r
\r
    def _get_node_num(self, node):\r
        return self._node_num[node] if node is not None else 0\r
\r
\r
class Solution(object):\r
    def kthSmallest(self, root, k):\r
        """\r
        :type root: Optional[TreeNode]\r
        :type k: int\r
        :rtype: int\r
        """\r
        return MyBst(root).kth_smallest(k)\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **与进阶题的关系**：对应「结点维护子树大小」：\`_count_node_num\` 在 \`O(n)\` 内填好 \`_node_num\`，之后每次比较**左子树规模** \`left\` 与 \`k\` 的关系，决定走向左或右，等价于在**有序结构**上做**类二分**的下标跳转。\r
- **分支含义**：\`left == k - 1\` 表示比当前根小的结点恰有 \`k - 1\` 个，根即为第 \`k\` 小；\`left < k - 1\` 则第 \`k\` 小在右子树，且右子树中的排名变为 \`k - (left + 1)\`，即代码里 \`k -= left + 1\`。\r
- **为何标注不推荐**：相对解法一的中序「提前停止」，本题多了一次全树遍历与 O(n) 哈希表；若树**动态增删**，需维护或重算 \`_node_num\`，工程上更常见的是在结点内嵌 \`size\` 字段或使用平衡树等结构。\r
- **复杂度**：预处理 **O(n)** 时间与 **O(n)** 额外空间；查询沿树高下降 **O(h)**，**h** 为树高。\r
\r
`,KA=`---\r
title: "Leetcode 二叉树 5（二叉树的右视图，二叉树展开为链表，从前序与中序遍历序列构造二叉树）"\r
date: "2026-03-30"\r
tags: ["Leetcode", "二叉树", "BFS", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [199 二叉树的右视图](#q199) ｜ [114 二叉树展开为链表](#q114) ｜ [105 从前序与中序遍历序列构造二叉树](#q105)\r
\r
<a id="q199"></a>\r
\r
## LeetCode 199. 二叉树的右视图 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个二叉树的**根节点** \`root\`，想象自己站在它的**右侧**，按照从**顶部到底部**的顺序，返回从右侧所能看到的**结点值**。\r
\r
### 提示\r
\r
- 二叉树的结点个数在范围 \`[0, 100]\` 内  \r
- \`-100 ≤ Node.val ≤ 100\`\r
\r
### 代码（Python）解法一：层序遍历（BFS）+ 每层取最右\r
\r
<pre class="code-gray">\r
from collections import deque\r
\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def rightSideView(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: List[int]\r
        """\r
        if not root:\r
            return []\r
        p = deque()\r
        p.append(root)\r
        ans = []\r
        while p:\r
            N = len(p)\r
            temp = []\r
            for i in range(N):\r
                node = p.popleft()\r
                temp.append(node.val)\r
                if node.left:\r
                    p.append(node.left)\r
                if node.right:\r
                    p.append(node.right)\r
            ans.append(temp)\r
\r
        final = []\r
        for i in range(len(ans)):\r
            final.append(ans[i][-1])\r
        return final\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **右视图的含义**：站在右侧时，每一层**最靠右**的那个结点会被看到（若某层只有左子树一侧有结点，则该层「最右可见」由该层最后一个被 BFS 访问到的结点决定，本题按层序从左到右扩展，每层最后一个入队顺序上即为该层最右结点）。\r
- **实现**：用 \`deque\` 做**层序遍历**（与 102 题类似，按层处理：先记本层宽度 \`N\`，再 \`popleft\` 恰好 \`N\` 次）。每层把访问到的 \`node.val\` 记入 \`temp\`，再将本层结点对应的孩子入队；一层结束后将 \`temp\` 整层加入 \`ans\`。\r
- **得到右视图**：每一层在视野上最右侧的值即该层列表的**最后一个元素** \`temp[-1]\`，对所有层取 \`ans[i][-1]\` 得到 \`final\`。\r
- **可简化**：不必先存整层 \`temp\` 再取末元素，可在本层循环内用变量**仅记录当前层最后一个** \`node.val\`，每层结束后 \`append\` 一次，少一层列表与二次遍历。\r
- **复杂度**：每个结点入队、出队各一次，时间 **O(n)**，**n** 为结点数；队列最坏 **O(n)**。\r
\r
### 代码（Python）解法二：DFS + 深度哈希（先右后左的访问顺序）\r
\r
用**栈**模拟深度优先：对每个深度 \`depth\`，**第一次**写入哈希表的值即为该层**最先被访问**的结点；将**左孩子先入栈、右孩子后入栈**，则出栈时**先走右子树**，保证同一深度上**先记录的是最右侧结点**。\`setdefault(depth, node.val)\` 仅在 \`depth\` 尚未出现时写入，避免被同层左侧结点覆盖。\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def rightSideView(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: List[int]\r
        """\r
        rightmost_value_at_depth = {}\r
        max_depth = -1\r
        stack = [(root, 0)]\r
        while stack:\r
            node, depth = stack.pop()\r
            if node is not None:\r
                max_depth = max(max_depth, depth)\r
                rightmost_value_at_depth.setdefault(depth, node.val)\r
\r
                stack.append((node.left, depth + 1))\r
                stack.append((node.right, depth + 1))\r
\r
        return [rightmost_value_at_depth[depth] for depth in range(max_depth + 1)]\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **与解法一的区别**：不显式按层队列，而是用**深度**作为键，在 DFS 过程中为每一层保留**一个**代表值。\r
- **栈的顺序**：\`append\` 先左后右，**弹出**时先处理**右**再处理**左**，因此同一深度上**最先被访问**的是该层**从右侧看**应保留的结点。\r
- **\`dict.setdefault(depth, node.val)\`**：若键 \`depth\` **尚不存在**，则执行 \`rightmost_value_at_depth[depth] = node.val\`；若已存在，则**什么也不做**（不会覆盖）。这样每个深度只保留**第一次**写入的值，与「先右后左」的访问顺序配合，即得到该层最右可见值。\r
- **\`max_depth\`**：记录树的最大深度，最后按 \`0 … max_depth\` 顺序拼出列表，保证自上而下与题目「从顶到底」一致。\r
- **空树**：\`root\` 为 \`None\` 时栈中仅 \`(None, 0)\`，不进入 \`if node is not None\`，\`max_depth\` 仍为 \`-1\`，\`range(0)\` 为空，返回 \`[]\`。\r
- **复杂度**：时间 **O(n)**；哈希表深度最多 **O(n)** 层，栈最坏 **O(n)**。\r
\r
---\r
\r
<a id="q114"></a>\r
\r
## LeetCode 114. 二叉树展开为链表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个二叉树的根节点 \`root\`，将其展开为一棵「链表」：\r
\r
- 展开后的「链表」仍使用原来的 \`TreeNode\`，其中 **\`right\` 指针**表示链表中的**下一个**结点，**\`left\` 指针始终为 \`null\`**；\r
- 展开顺序应与二叉树的**先序遍历**（根 → 左 → 右）一致。\r
\r
### 提示\r
\r
- 树中结点数在范围 \`[0, 2000]\` 内  \r
- \`-100 ≤ Node.val ≤ 100\`\r
\r
**进阶**：能否使用**原地**算法，且**额外空间为 O(1)**（不含递归栈时指常数辅助空间）完成展开？\r
\r
### 代码（Python）解法一：先序收集结点 + 再串成链\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def __init__(self):\r
        self.res = []\r
\r
    def pre(self, root):\r
        if root is None:\r
            return None\r
        self.res.append(root)\r
        self.pre(root.left)\r
        self.pre(root.right)\r
\r
    def flatten(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: None Do not return anything, modify root in-place instead.\r
        """\r
        if not root:\r
            return None\r
        self.res = []\r
        self.pre(root)\r
        p = self.res[0]\r
        for i in range(len(self.res) - 1):\r
            p.right = self.res[i + 1]\r
            p.left = None\r
            p = p.right\r
        p.left = None\r
        p.right = None\r
        return None\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **两步走**：先用 \`pre\` 做**先序 DFS**，把结点引用依次存入 \`self.res\`；再线性扫描，令 \`p.right\` 指向下一个结点、\`p.left = None\`，最后在链表尾将 \`right\` 置空。\r
- **\`self.res = []\`**：每次 \`flatten\` 前清空列表，避免多次调用时残留上次遍历结果。\r
- **空树**：\`root\` 为空时直接返回，符合原地修改约定。\r
- **与进阶的关系**：本题解额外使用 **O(n)** 的结点列表（及递归栈 **O(h)**），**不满足**进阶 **O(1)** 额外空间；进阶常采用**迭代**拆左子树接到右子树一侧、或 **Morris** 式遍历等原地调整指针的写法。\r
- **返回值**：LeetCode 接口要求 **\`flatten\` 无返回值**（仅修改树），故末尾写 \`return None\`；若本地调试曾写 \`return self.res[0]\`，提交时需去掉。\r
\r
### 代码（Python）解法二：原地迭代（O(1) 额外空间）\r
\r
**思路**：自顶向下，若当前结点有左子树，则找到**左子树中最右结点** \`pre\`（在原树中序里位于当前根**之前**的最后一个结点）；将原右子树接到 \`pre.right\`，再把整棵左子树挪到 \`curr.right\`，左指针置空；\`curr\` 沿新的 \`right\` 走向先序中的下一个结点。无左子树时直接沿 \`right\` 下移。全程仅用若干指针变量，**满足进阶 O(1) 辅助空间**（迭代、无列表）。\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def flatten(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: None Do not return anything, modify root in-place instead.\r
        """\r
        if not root:\r
            return None\r
        curr = root\r
        while curr.right or curr.left:\r
            if not curr.left:\r
                curr = curr.right\r
                continue\r
            nex = curr.left\r
            pre = nex\r
            while pre.right:\r
                pre = pre.right\r
            pre.right = curr.right\r
            curr.left = None\r
            curr.right = nex\r
            curr = curr.right\r
        return None\r
</pre>\r
\r
### 视频讲解（解法二）\r
\r
<video src="Leetcode/0330.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 思路解析（解法二）\r
\r
- **核心**：每次处理「有左子树」的结点时，把**原右子树**接到**左子树最右结点**之后，再把**左子树整体**换到当前结点的**右孩子**位置，并清空 \`left\`。这样**先序**顺序被逐步「拉直」到右链上。\r
- **\`pre\` 的含义**：在左子树内不断 \`pre = pre.right\`，直到无右孩子，即为左子树的**最右结点**；在原树中它恰是先序里**紧挨当前根之后、进入左子树一路向右**能走到的最后一个结点，适合承接**原根的整棵右子树**。\r
- **循环条件 \`while curr.right or curr.left\`**：当前还未走完「待展开」部分；若只有右链、无左子树，则 \`curr = curr.right\` 继续向尾部推进。\r
- **与解法一对比**：不存 \`self.res\`，时间仍为 **O(n)**（每个结点被访问常数次），**额外 O(1)** 指针空间。\r
- **返回值**：接口要求无返回值，写作 \`return None\`；若写 \`return root\` 仅便于本地查看，提交时应去掉或改为 \`None\`。\r
\r
---\r
\r
<a id="q105"></a>\r
\r
## LeetCode 105. 从前序与中序遍历序列构造二叉树 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定两个整数数组 \`preorder\` 与 \`inorder\`，其中 \`preorder\` 是某二叉树的**先序遍历**，\`inorder\` 是同一棵树的**中序遍历**，请构造该二叉树并返回其**根结点**。\r
\r
### 提示\r
\r
- \`1 ≤ preorder.length ≤ 3000\`，且 \`len(inorder) == len(preorder)\`  \r
- \`-3000 ≤ preorder[i], inorder[i] ≤ 3000\`  \r
- \`preorder\` 与 \`inorder\` **均无重复元素**，且 \`inorder\` 中的值均出现在 \`preorder\` 中  \r
- 保证 \`preorder\`、\`inorder\` 分别对应某二叉树的合法先序、中序遍历序列\r
\r
### 代码（Python）解法一：递归分治 + 中序下标哈希\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def buildTree(self, preorder, inorder):\r
        """\r
        :type preorder: List[int]\r
        :type inorder: List[int]\r
        :rtype: Optional[TreeNode]\r
        """\r
        def myBuildTree(preorder_left, preorder_right, inorder_left, inorder_right):\r
            if preorder_left > preorder_right:\r
                return None\r
\r
            preorder_root = preorder_left\r
            inorder_root = index[preorder[preorder_root]]\r
\r
            root = TreeNode(preorder[preorder_root])\r
            size_left_subtree = inorder_root - inorder_left\r
            # 左子树先序：[preorder_left+1, preorder_left+size_left_subtree]\r
            # 左子树中序：[inorder_left, inorder_root-1]\r
            root.left = myBuildTree(\r
                preorder_left + 1,\r
                preorder_left + size_left_subtree,\r
                inorder_left,\r
                inorder_root - 1,\r
            )\r
            # 先序余下区间与中序 [inorder_root+1, inorder_right] 对应右子树\r
            root.right = myBuildTree(\r
                preorder_left + size_left_subtree + 1,\r
                preorder_right,\r
                inorder_root + 1,\r
                inorder_right,\r
            )\r
            return root\r
\r
        n = len(preorder)\r
        # 值 -> 中序下标，O(1) 定位根\r
        index = {element: i for i, element in enumerate(inorder)}\r
        return myBuildTree(0, n - 1, 0, n - 1)\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **根结点**：先序区间 \`[preorder_left, preorder_right]\` 中，**第一个**元素 \`preorder[preorder_left]\` 即为当前子树根。\r
- **在中序中切分左右子树**：用哈希表 \`index\`（值 → 中序下标）在 **O(1)** 内定位根在中序中的位置 \`inorder_root\`。中序上，\`[inorder_left, inorder_root - 1]\` 为左子树中序，\`[inorder_root + 1, inorder_right]\` 为右子树中序；左子树结点个数 \`size_left_subtree = inorder_root - inorder_left\`。\r
- **先序区间对应关系**：先序里紧跟根的 \`size_left_subtree\` 个结点为左子树先序，余下为右子树先序，从而得到递归的四组下标边界。\r
- **递归出口**：当 \`preorder_left > preorder_right\`（或等价地中序区间为空）时，子树为空，返回 \`None\`。\r
- **为何可无重复元素**：保证 \`index\` 中每个值唯一，与中序划分一一对应。\r
- **复杂度**：每个结点建一次，时间 **O(n)**；哈希表 **O(n)**，递归栈最坏 **O(n)**（链状树）。\r
\r
### 代码（Python）解法二：迭代 + 栈\r
\r
> **说明（个人备注）**：下面为**迭代**写法，用栈与中序扫描指针配合构造；**暂时不打算深入理解**，仅作存档，日后需要时再对照官方题解或动画逐步啃。\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def buildTree(self, preorder, inorder):\r
        if not preorder:\r
            return None\r
\r
        root = TreeNode(preorder[0])\r
        stack = [root]\r
        inorder_index = 0\r
\r
        for i in range(1, len(preorder)):\r
            preorder_val = preorder[i]\r
            node = stack[-1]\r
\r
            if node.val != inorder[inorder_index]:\r
                node.left = TreeNode(preorder_val)\r
                stack.append(node.left)\r
            else:\r
                while stack and stack[-1].val == inorder[inorder_index]:\r
                    node = stack.pop()\r
                    inorder_index += 1\r
                node.right = TreeNode(preorder_val)\r
                stack.append(node.right)\r
\r
        return root\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **定位**：与解法一的「递归分治 + 哈希」不同，本写法在一条扫描先序序列的过程中，用 **栈** 维护当前路径，并用 **\`inorder_index\`** 对齐中序序列，在「栈顶与中序当前值可匹配」时弹出并右扩，否则向左下接新结点；属于常见 **O(n)** 时间、**O(n)** 栈空间的迭代模板。\r
- **为何不再展开**：见上方备注，**暂不逐行推导**；需要时可检索「105 迭代 栈」类题解或视频。\r
\r
`,QA=`---\r
title: "Leetcode 二叉树 6（路径总和 III）"\r
date: "2026-03-31"\r
tags: ["Leetcode", "二叉树", "DFS", "BFS", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [437 路径总和 III](#q437)\r
\r
<a id="q437"></a>\r
\r
## LeetCode 437. 路径总和 III <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个二叉树的根节点 \`root\` 和一个整数 \`targetSum\`，求该二叉树里**结点值之和等于 \`targetSum\` 的路径**的数目。\r
\r
**路径**不需要从根结点开始，也不需要在叶结点结束，但路径方向必须是**向下的**（只能从父结点到子结点）。\r
\r
### 提示\r
\r
- 二叉树的结点数在范围 \`[0, 1000]\` 内  \r
- \`-10^9 ≤ Node.val ≤ 10^9\`  \r
- \`-1000 ≤ targetSum ≤ 1000\`\r
\r
### 示例图\r
\r
![路径总和 III 示例](Leetcode/0331_1.png)\r
\r
### 代码（Python）解法一：BFS 枚举起点 + DFS 统计路径\r
\r
对每个结点作为**路径起点**，向下 DFS，用「剩余目标和」\`targetSum - p.val\` 递归；当前结点若恰好等于剩余目标和则计数 +1。\r
\r
<pre class="code-gray">\r
from collections import deque\r
\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def __init__(self):\r
        self.num = 0\r
\r
    def rootSum(self, p, targetSum):\r
        if not p:\r
            return 0\r
\r
        count = 1 if p.val == targetSum else 0\r
        count += self.rootSum(p.left, targetSum - p.val)\r
        count += self.rootSum(p.right, targetSum - p.val)\r
        return count\r
\r
    def pathSum(self, root, targetSum):\r
        if not root:\r
            return 0\r
\r
        temp = deque()\r
        temp.append(root)\r
        self.num = 0\r
\r
        while temp:\r
            p = temp.popleft()\r
            self.num += self.rootSum(p, targetSum)\r
\r
            if p.left:\r
                temp.append(p.left)\r
            if p.right:\r
                temp.append(p.right)\r
        return self.num\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **外层 BFS**：队列遍历**每一个结点**，将其视为路径**起点**，避免漏数「不以根为起点」的路径。\r
- **内层 \`rootSum(p, targetSum)\`**：从结点 \`p\` 出发，只向**下**走；若 \`p.val == targetSum\` 则当前路径算一条；再在左右子树中继续找和为 \`targetSum - p.val\` 的路径条数并累加。\r
- **\`self.num\`**：对每个起点累加 \`rootSum\` 的返回值；每次 \`pathSum\` 入口将 \`self.num\` 置 0，避免多次调用时残留。\r
- **复杂度**：每个起点做一次 DFS，最坏 **O(n)** 层递归深度，整体最坏约 **O(n²)**，在 \`n ≤ 1000\` 下可接受；存在 **前缀和 + 哈希** 的 **O(n)** 做法，可作进阶。\r
\r
### 代码（Python）解法二：前缀和 + 哈希表（一次 DFS，O(n)）\r
\r
> **说明（个人备注）**：**第二种方法（前缀和 + 哈希）尚未理解透彻**，先存档代码与注释；日后可对照题解或视频再啃。\r
\r
从根到当前结点有一条**自上而下**的路径，记路径和为 \`curr\`。  \r
若某段路径和为 \`targetSum\`，等价于存在祖先侧前缀和 \`p\`，使 \`curr - p = targetSum\`，即查 \`prefix[curr - targetSum]\`。  \r
哈希表记录当前 DFS 链上各前缀和出现次数；入子树 \`+1\`，回溯 \`-1\`。\r
\r
<pre class="code-gray">\r
from collections import defaultdict\r
\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, val=0, left=None, right=None):\r
#         self.val = val\r
#         self.left = left\r
#         self.right = right\r
\r
class Solution(object):\r
    def pathSum(self, root, targetSum):\r
        # prefix[s]：当前 DFS 链上，前缀和 s 出现次数\r
        prefix = defaultdict(int)\r
        # 前缀和 0 计 1 次：整段路径和恰为 targetSum 时\r
        # 对应「减去空前缀」的一种情况\r
        prefix[0] = 1\r
\r
        def dfs(root, curr):\r
            # root：当前子树根\r
            # curr：进入本结点前，从根到父结点的路径和\r
            if not root:\r
                return 0\r
            ret = 0\r
            # 加上本结点值，得到根到当前结点的路径和\r
            curr = curr + root.val\r
            # 以当前结点为终点的合法路径数：\r
            # 已有多少前缀和为 curr - targetSum\r
            ret = ret + prefix[curr - targetSum]\r
            # 当前结点作为前缀终点，curr 计数 +1，供子树用\r
            prefix[curr] += 1\r
            # 左子树\r
            ret += dfs(root.left, curr)\r
            # 右子树\r
            ret += dfs(root.right, curr)\r
            # 回溯：离开本结点，撤销 prefix[curr]\r
            # 避免兄弟子树误用本分支计数\r
            prefix[curr] -= 1\r
            return ret\r
\r
        return dfs(root, 0)\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **核心等式**：根到 \`v\` 的路径和为 \`curr(v)\`。若从某祖先下一结点到 \`v\` 的和为 \`targetSum\`，则 \`curr(v) - curr(u) = targetSum\`，即 \`curr(u) = curr(v) - targetSum\`。  \r
  用 \`prefix[curr - targetSum]\` 统计路径上此前出现过几次该前缀和。\r
- **\`prefix[0] = 1\`**：当 \`curr == targetSum\` 时，需要 \`prefix[0]\` 为 1，对应从根到当前整段一条路径。\r
- **回溯 \`prefix[curr] -= 1\`**：返回父层前撤销当前结点对哈希的贡献，否则兄弟子树会串台。\r
- **与解法一**：每个结点只访问一次，时间 **O(n)**，哈希 **O(n)**。\r
\r
`,YA=`---\r
title: "Leetcode 二叉树 7（二叉树的最近公共祖先，二叉树中的最大路径和）"\r
date: "2026-04-02"\r
tags: ["Leetcode", "二叉树", "DFS", "LCA", "路径", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [236 二叉树的最近公共祖先](#q236) ｜ [124 二叉树中的最大路径和](#q124)\r
\r
<a id="q236"></a>\r
\r
## LeetCode 236. 二叉树的最近公共祖先 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个二叉树，找到该树中**两个指定结点** \`p\`、\`q\` 的**最近公共祖先**。\r
\r
根据百度百科中「最近公共祖先」的定义：对于有根树 \`T\` 的两个结点 \`p\`、\`q\`，最近公共祖先表示为一个结点 \`x\`，满足 \`x\` 是 \`p\`、\`q\` 的祖先且 \`x\` 的**深度尽可能大**（**一个结点也可以是它自己的祖先**）。\r
\r
### 提示\r
\r
- 树中结点数在范围 \`[2, 10^5]\` 内  \r
- \`-10^9 ≤ Node.val ≤ 10^9\`，且**所有结点值互不相同**  \r
- \`p != q\`，且 \`p\`、\`q\` 均存在于给定二叉树中\r
\r
### 代码（Python）解法一：后序 DFS + 标记是否命中 p / q\r
\r
<pre class="code-gray">\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, x):\r
#         self.val = x\r
#         self.left = None\r
#         self.right = None\r
\r
class Solution(object):\r
    def __init__(self):\r
        self.ans = None\r
\r
    def dfs(self, root, p, q):\r
        if not root:\r
            return False\r
        lson = self.dfs(root.left, p, q)\r
        rson = self.dfs(root.right, p, q)\r
        if (lson and rson) or (\r
            (root.val == p.val or root.val == q.val) and (lson or rson)\r
        ):\r
            self.ans = root\r
        return lson or rson or root.val == p.val or root.val == q.val\r
\r
    def lowestCommonAncestor(self, root, p, q):\r
        """\r
        :type root: TreeNode\r
        :type p: TreeNode\r
        :type q: TreeNode\r
        :rtype: TreeNode\r
        """\r
        self.dfs(root, p, q)\r
        return self.ans\r
</pre>\r
\r
### 视频讲解（解法一）\r
\r
<video src="Leetcode/0402.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 思路解析（解法一）\r
\r
- **返回值语义**：\`dfs\` 返回**当前子树**中是否包含 \`p\` 或 \`q\`（或二者之一），用布尔值向上传递。\r
- **\`lson\` / \`rson\`**：左、右子树是否「已命中」\`p\` 或 \`q\`。\r
- **更新答案**：若**左右子树各命中一个**（\`lson and rson\`），则当前 \`root\` 必为 LCA；若**当前根本身是 \`p\` 或 \`q\` 之一**，且**某一侧子树已含另一个**，则 LCA 亦为当前根（含「结点可为自身祖先」）。\r
- **\`self.ans\`**：初值为 \`None\`；首次满足上述条件时赋值（题面保证存在唯一合理 LCA，最后一次写入即为答案）。\r
- **叶上推**：\`return lson or rson or root.val == p.val or root.val == q.val\` 表示本子树是否覆盖 \`p\`/\`q\` 之一；值互不相同故可用 \`val\` 比较。\r
- **复杂度**：每个结点访问一次，时间 **O(n)**，递归栈 **O(h)**，**h** 为树高。\r
\r
### 代码（Python）解法二：BFS 建「父结点」映射 + 从 q 向上找\r
\r
先用层序遍历得到 \`record\`：\`子结点 -> 父结点\`，并令 \`record[root] = None\`。  \r
再从 \`p\` 一直沿父指针走到根，得到 \`p\` 的**祖先链**（含 \`p\` 自身）存入 \`father_path\`。  \r
最后从 \`q\` 沿父指针向上走，**第一次**出现在 \`father_path\` 中的结点即为 LCA（最深公共祖先）。\r
\r
<pre class="code-gray">\r
from collections import deque\r
\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, x):\r
#         self.val = x\r
#         self.left = None\r
#         self.right = None\r
\r
class Solution(object):\r
    def lowestCommonAncestor(self, root, p, q):\r
        """\r
        :type root: TreeNode\r
        :type p: TreeNode\r
        :type q: TreeNode\r
        :rtype: TreeNode\r
        """\r
        record = {}\r
        queue = deque()\r
        queue.append(root)\r
        while queue:\r
            temp = queue.popleft()\r
            if temp.left:\r
                queue.append(temp.left)\r
                record[temp.left] = temp\r
            if temp.right:\r
                queue.append(temp.right)\r
                record[temp.right] = temp\r
        record[root] = None\r
\r
        father_path = []\r
        temp_p = p\r
        while temp_p in record:\r
            father_path.append(temp_p)\r
            temp_p = record[temp_p]\r
\r
        temp_q = q\r
        father_path.append(root)\r
        while temp_q in record:\r
            if temp_q in father_path:\r
                return temp_q\r
            temp_q = record[temp_q]\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **\`record\`**：除根外，每个结点记录**父结点**；\`record[root] = None\` 表示向上到头。\r
- **\`father_path\`**：从 \`p\` 沿父指针走到 \`None\` 前，依次加入 \`p\` 及其所有祖先（含根）。\`father_path.append(root)\` 在从 \`q\` 开始走之前执行：若 \`p\` 到根的路径里已含 \`root\`，此处会**重复**一次 \`root\`，一般不影响 \`in\` 判断。\r
- **为何从 \`q\` 往上找**：从 \`q\` 向根方向，**由深到浅**经过 \`q\` 的祖先；第一个落在「\`p\` 的祖先集合」里的结点，就是**最深的**公共祖先。\r
- **与解法一**：无递归栈，但需要 **O(n)** 哈希存父指针、**O(n)** 祖先列表；时间仍为 **O(n)**。\r
\r
---\r
\r
<a id="q124"></a>\r
\r
## LeetCode 124. 二叉树中的最大路径和 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
二叉树中，**路径**被定义为：结点序列中相邻结点在树中有边相连；每个结点在路径中**至多出现一次**；路径**至少包含一个结点**，且**不必经过根**。\r
\r
**路径和**为路径上各结点值之和。给定二叉树的根 \`root\`，返回**最大路径和**。\r
\r
### 提示\r
\r
- 树中结点数在范围 \`[1, 3 × 10^4]\` 内  \r
- \`-1000 ≤ Node.val ≤ 1000\`\r
\r
### 代码（Python）\r
\r
\`maxGain(node)\`：从 \`node\` 出发、**沿某一子方向向下**延伸的一条链的最大和（子树贡献与 0 取较大，避免拖累负和）。  \r
对每个结点 \`temp\`，以「经过 \`temp\`」的折线路径和为：\`temp.val + max(left,0) + max(right,0)\`，再 BFS 枚举所有结点取全局最大。\`ans\` 初值取小于 \`-1000\`（如 \`-1001\`），以覆盖全负结点情形。\r
\r
<pre class="code-gray">\r
from collections import deque\r
\r
# Definition for a binary tree node.\r
# class TreeNode(object):\r
#     def __init__(self, x):\r
#         self.val = x\r
#         self.left = None\r
#         self.right = None\r
\r
class Solution(object):\r
    def maxGain(self, root):\r
        if not root:\r
            return 0\r
        if not root.right and not root.left:\r
            return root.val\r
        return (\r
            max(self.maxGain(root.left), self.maxGain(root.right), 0) + root.val\r
        )\r
\r
    def maxPathSum(self, root):\r
        """\r
        :type root: Optional[TreeNode]\r
        :rtype: int\r
        """\r
        if not root:\r
            return 0\r
        stack = deque()\r
        stack.append(root)\r
        ans = -1001\r
        while stack:\r
            temp = stack.popleft()\r
            value = (\r
                temp.val\r
                + max(self.maxGain(temp.left), 0)\r
                + max(self.maxGain(temp.right), 0)\r
            )\r
            if value > ans:\r
                ans = value\r
            if temp.left:\r
                stack.append(temp.left)\r
            if temp.right:\r
                stack.append(temp.right)\r
        return ans\r
</pre>\r
\r
### 视频讲解\r
\r
<video src="Leetcode/0403.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 思路解析\r
\r
- **经过某结点的路径**：只能在该结点**左**、**右**各接一条**向下**的链，因此用 \`maxGain\` 左子树与 \`maxGain\` 右子树，与 0 取 \`max\` 以丢弃负贡献。\r
- **\`maxGain\` 叶结点**：无子结点时直接返回 \`root.val\`。\r
- **全局最大**：对每个结点算一条「倒 V」路径和，BFS 取最大。  \r
  **注意**：对每个结点重复调用 \`maxGain\` 会子树重复计算，最坏 **O(n²)**，在 \`n\` 较大时可能超时；若需 **O(n)**，可改为**一次后序遍历**在递归中同时维护全局 \`ans\`（本笔记暂记当前写法，仅作存档）。\r
- **初值 \`ans = -1001\`**：保证全树结点值均为负时，答案仍取**单个最大结点**而非错误地取 0。\r
\r
`,JA=`---\r
title: "Leetcode 动态规划 2（打家劫舍、完全平方数、零钱兑换、单词拆分、最长递增子序列、乘积最大子数组、分割等和子集、最长有效括号）"\r
date: "2026-05-02"\r
tags: ["Leetcode", "动态规划", "数组", "数学", "字符串", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [198 打家劫舍](#q198) ｜ [279 完全平方数](#q279) ｜ [322 零钱兑换](#q322) ｜ [139 单词拆分](#q139) ｜ [300 最长递增子序列](#q300) ｜ [152 乘积最大子数组](#q152) ｜ [416 分割等和子集](#q416) ｜ [32 最长有效括号](#q32)\r
\r
<a id="q198"></a>\r
\r
## LeetCode 198. 打家劫舍 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
你是一个专业的小偷，计划沿着一条街道挨户偷窃。每间房都存放着一定现金；但**相邻两间房屋**装有相连的防盗系统，若同一晚上偷了两间相邻房屋，系统就会报警。\r
\r
给定一个非负整数数组 \`nums\`，\`nums[i]\` 表示第 \`i\` 间房屋里的现金。求在这一晚上**不触动报警装置**的前提下，能偷到的最大金额。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [1,2,3,1]\`  \r
  输出：\`4\`  \r
  解释：偷窃 1 号屋（金额 1）与 3 号屋（金额 3），共 \`4\`。\r
- **示例 2：** \`nums = [2,7,9,3,1]\`  \r
  输出：\`12\`  \r
  解释：偷窃 1、3、5 号屋，金额为 \`2 + 9 + 1 = 12\`。\r
\r
### 提示\r
\r
- \`1 <= nums.length <= 100\`\r
- \`0 <= nums[i] <= 400\`\r
\r
<video controls playsinline preload="metadata" src="Leetcode/0502.mp4" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def rob(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        n = len(nums)\r
\r
        if n == 1:\r
            return nums[0]\r
\r
        if n == 2:\r
            return max(nums[0], nums[1])\r
\r
        dp = [0] * n\r
\r
        max_value = 0\r
\r
        dp[0] = nums[0]\r
\r
        dp[1] = nums[1]\r
\r
        for i in range(2, n):\r
\r
            max_value = max(max_value, dp[i - 2])\r
\r
            dp[i] = nums[i] + max_value\r
\r
        return max(dp[n - 1], dp[n - 2])\r
</pre>\r
\r
### 思路解析\r
\r
若决定偷第 \`i\` 间，则不能偷第 \`i - 1\` 间，但可在 \`0 … i - 2\` 的最优结果上再累加 \`nums[i]\`。用 \`dp[i]\` 表示考虑前 \`i + 1\` 间房、且**必偷第 \`i\` 间**时能获得的最大金额，则有：\r
\r
**dp[i] = nums[i] + max(dp[0], … , dp[i - 2])**\r
\r
\`n = 1\`、\`n = 2\` 直接返回。从 \`i = 2\` 起遍历时，用变量 \`max_value\` 滚动维护 \`max(dp[0], …, dp[i - 2])\`，避免在内层再扫一遍。最终答案不一定偷最后一间，因此返回 **max(dp[n - 1], dp[n - 2])**。\r
\r
- **时间复杂度**：**O(n)**  \r
- **空间复杂度**：**O(n)**（\`dp\` 数组）\r
\r
<a id="q279"></a>\r
\r
## LeetCode 279. 完全平方数 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个整数 \`n\`，返回**和为 \`n\` 的完全平方数的最少个数**。\r
\r
**完全平方数**：等于某个整数的平方的数（例如 \`1\`、\`4\`、\`9\`、\`16\` 是，\`3\`、\`11\` 不是）。\r
\r
### 测试样例\r
\r
- **示例 1：** \`n = 12\`  \r
  输出：\`3\`  \r
  解释：\`12 = 4 + 4 + 4\`（三个完全平方数）。\r
- **示例 2：** \`n = 13\`  \r
  输出：\`2\`  \r
  解释：\`13 = 4 + 9\`。\r
\r
### 提示\r
\r
- \`1 <= n <= 10^4\`\r
\r
### 代码（Python）解法 1：记忆化 DFS\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def numSquares(self, n):\r
        """\r
        :type n: int\r
        :rtype: int\r
        """\r
        memory = {}\r
        memory[0] = 0\r
        memory[1] = 1\r
\r
        def dfs(k):\r
            if k in memory:\r
                return memory[k]\r
            else:\r
                max_num = int(k ** 0.5)\r
                min_count = float('inf')\r
                for i in range(1, max_num + 1):\r
                    min_count = min(min_count, dfs(k - i ** 2) + 1)\r
                memory[k] = min_count\r
                return min_count\r
\r
        return dfs(n)\r
</pre>\r
\r
### 思路解析（解法 1）\r
\r
把问题看成：最后一次减去的完全平方数是 \`i²\`，则 \`k = i² + (k - i²)\`，最少个数为 **1 +（\`k - i²\` 的最少个数）**。枚举 \`i = 1 … ⌊√k⌋\` 取最小值即可。\r
\r
\`memory[k]\` 记录 \`dfs(k)\` 的结果，避免重复子问题；边界 \`memory[0]=0\`、\`memory[1]=1\`（与递归终止一致）。\r
\r
- **时间复杂度**：每个 \`k\` 最多计算一次，每次 **O(√k)** 枚举；总体约 **O(n√n)**。  \r
- **空间复杂度**：记忆化表与递归栈，**O(n)**。\r
\r
### 代码（Python）解法 2：数学（四平方和 / 三平方定理）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def numSquares(self, n):\r
        """\r
        :type n: int\r
        :rtype: int\r
        """\r
        m = n\r
        while m % 4 == 0:\r
            m //= 4\r
        if m % 8 == 7:\r
            return 4\r
        r = int(n ** 0.5)\r
        if r * r == n:\r
            return 1\r
        for a in range(1, r + 1):\r
            b = n - a * a\r
            t = int(b ** 0.5)\r
            if t * t == b:\r
                return 2\r
        return 3\r
</pre>\r
\r
### 思路解析（解法 2）\r
\r
**方法二：数学**（与上图一致）\r
\r
1. **四平方和定理（拉格朗日）**：任意正整数至多可表成**四个**完全平方数之和，故答案上界为 **4**。\r
2. **三平方和定理（勒让德）**：正整数 \`n\` 能表成**至多三个**完全平方数之和，当且仅当 **\`n\` 不能写成 \`4^k × (8m + 7)\`** 的形式（\`k,m\` 为非负整数）。反之，若经不断除以 \`4\` 后得到的数满足 **\`≡ 7 (mod 8)\`**，则**必须**用**四个**完全平方数，可直接返回 **4**。\r
3. **其余情况**答案只能是 **1、2 或 3**：\r
   - **1**：\`n\` 本身就是完全平方数；\r
   - **2**：存在 \`a\` 使得 \`n - a²\` 仍为完全平方数（枚举 \`1 ≤ a ≤ √n\`）；\r
   - **3**：若以上及「必为 4」都不成立，由排除法知答案为 **3**。\r
\r
实现时先对 \`n\` 反复除以 \`4\` 做上述 **\`8m+7\`** 判定，再依次判断 1、2，最后返回 3。\r
\r
- **时间复杂度**：**O(√n)**（除以 \`4\` 与枚举 \`a\` 均为 **\`√n\`** 量级）。  \r
- **空间复杂度**：**O(1)**。\r
\r
<a id="q322"></a>\r
\r
## LeetCode 322. 零钱兑换 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定整数数组 \`coins\` 表示不同面额的硬币，每种硬币数量**无限**。另给定整数 \`amount\` 表示要凑出的总金额。求**凑成该金额所需的最少硬币个数**；若**不能**凑出，返回 **\`-1\`**。\r
\r
可以认为 \`amount == 0\` 时需要 \`0\` 枚硬币。\r
\r
### 测试样例\r
\r
- **示例 1：** \`coins = [1, 2, 5]\`，\`amount = 11\`  \r
  输出：\`3\`  \r
  解释：\`11 = 5 + 5 + 1\`。\r
- **示例 2：** \`coins = [2]\`，\`amount = 3\`  \r
  输出：\`-1\`\r
- **示例 3：** \`coins = [1]\`，\`amount = 0\`  \r
  输出：\`0\`\r
\r
### 提示\r
\r
- \`1 <= coins.length <= 12\`\r
- \`1 <= coins[i] <= 2^31 - 1\`\r
- \`0 <= amount <= 10^4\`\r
\r
### 代码（Python）：记忆化 DFS\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def coinChange(self, coins, amount):\r
        """\r
        :type coins: List[int]\r
        :type amount: int\r
        :rtype: int\r
        """\r
        if amount == 0:\r
            return 0\r
        memory = {}\r
        memory[0] = 0\r
\r
        def dfs(k):\r
            if k in memory:\r
                return memory[k]\r
            else:\r
                min_count = 10 ** 4 + 1\r
                for i in range(len(coins)):\r
                    if k - coins[i] >= 0:\r
                        min_count = min(min_count, dfs(k - coins[i]) + 1)\r
                memory[k] = min_count\r
                return min_count\r
\r
        res = dfs(amount)\r
        if res == 10 ** 4 + 1:\r
            return -1\r
        return res\r
</pre>\r
\r
### 思路解析\r
\r
\`dfs(k)\` 表示凑出面额 \`k\` 的**最少硬币数**，边界 \`memory[0] = 0\`。转移时枚举最后一枚硬币 \`coins[i]\`，则需 \`1 + dfs(k - coins[i])\`。题目保证 \`amount ≤ 10^4\`，用 **\`10 ** 4 + 1\`** 表示「无解」意义上的无穷大。\r
\r
**边界**：必须判断 **\`k - coins[i] >= 0\`**（或先判断 \`coins[i] <= k\`）。若不加限制，\`k - coins[i]\` 会为负，递归仍可能套用公式得到偏小的错误答案；只有在剩余面额**非负**时才进入子问题。\r
\r
最后若 \`dfs(amount)\` 仍为哨兵值，说明无法凑出，返回 **\`-1\`**。\r
\r
- **时间复杂度**：**O(amount × len(coins))**（每个 \`k\` 至多算一次，内层枚举硬币）。  \r
- **空间复杂度**：**O(amount)**（哈希表与递归栈）。\r
\r
<a id="q139"></a>\r
\r
## LeetCode 139. 单词拆分 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定字符串 \`s\` 和字符串数组 \`wordDict\` 作为词典。若 \`s\` 能拆成**一个或多个**词典中出现的单词**首尾相接**（单词之间以隐含的空格概念分界），则返回 \`true\`；否则返回 \`false\`。\r
\r
**说明**：不必用完词典里所有词；**同一个词典词可以重复使用**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`s = "leetcode"\`，\`wordDict = ["leet", "code"]\`  \r
  输出：\`true\`  \r
  解释：\`"leet"\` + \`"code"\`。\r
- **示例 2：** \`s = "applepenapple"\`，\`wordDict = ["apple", "pen"]\`  \r
  输出：\`true\`  \r
  解释：\`"apple"\` + \`"pen"\` + \`"apple"\`（\`"apple"\` 可重复用）。\r
- **示例 3：** \`s = "catsandog"\`，\`wordDict = ["cats", "dog", "sand", "and", "cat"]\`  \r
  输出：\`false\`\r
\r
### 提示\r
\r
- \`1 <= s.length <= 300\`\r
- \`1 <= wordDict.length <= 1000\`\r
- \`1 <= wordDict[i].length <= 20\`\r
- \`s\` 与 \`wordDict[i]\` 仅由英文小写字母组成\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def wordBreak(self, s, wordDict):\r
        """\r
        :type s: str\r
        :type wordDict: List[str]\r
        :rtype: bool\r
        """\r
        word_set = set(wordDict)\r
        n = len(s)\r
        dp = [False] * (n + 1)\r
        dp[0] = True  # 空串视为可拆分\r
\r
        for i in range(1, n + 1):\r
            for j in range(i):\r
                if dp[j] and s[j:i] in word_set:\r
                    dp[i] = True\r
                    break\r
\r
        return dp[n]\r
</pre>\r
\r
### 思路解析\r
\r
\`dp[i]\` 表示 **\`s\` 的前 \`i\` 个字符**（即 \`s[0:i]\`）能否被合法拆分。空串 **\`dp[0] = True\`** 作为递推起点。\r
\r
枚举长度 \`i\` 与上一段的切分点 \`j\`：若 **\`dp[j]\`** 为真，且 **\`s[j:i]\`** 落在词典里，则 **\`dp[i] = True\`**。一旦发现可行可提前 **\`break\`**。\r
\r
- **时间复杂度**：**O(n³)** 量级（\`n = len(s)\`，双重循环 **O(n²)**，取子串 \`s[j:i]\` 并做集合判断与长度线性相关；本题 **\`n ≤ 300\`** 可接受）。  \r
- **空间复杂度**：**O(n)**（\`dp\` 数组）及词典 **\`set\`** 的空间。\r
\r
<a id="q300"></a>\r
\r
## LeetCode 300. 最长递增子序列 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定整数数组 \`nums\`，返回其中**严格递增子序列**的**最长长度**。\r
\r
**子序列**：由数组删除若干元素（可删 0 个）得到、且**不改变剩余元素相对顺序**的序列。  \r
**严格递增**：序列中后项必须大于前项。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [10,9,2,5,3,7,101,18]\`  \r
  输出：\`4\`  \r
  解释：例如 \`[2,3,7,101]\`，长度为 \`4\`。\r
- **示例 2：** \`nums = [0,1,0,3,2,3]\`  \r
  输出：\`4\`\r
- **示例 3：** \`nums = [7,7,7,7,7,7,7,7]\`  \r
  输出：\`1\`\r
\r
### 提示\r
\r
- \`1 <= nums.length <= 2500\`\r
- \`-10^4 <= nums[i] <= 10^4\`\r
\r
**进阶**：能否将时间复杂度降到 **O(n log n)**？（可用二分 /「耐心排序」思路，本题代码为 **O(n²)**。）\r
\r
<video controls playsinline preload="metadata" src="Leetcode/0502_2.mp4" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def lengthOfLIS(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        dp = [0] * len(nums)\r
        dp[0] = 1\r
        for i in range(1, len(nums)):\r
            dp[i] = 1\r
            first = -float('inf')\r
            flag = 0\r
            for j in range(i):\r
                if nums[j] < nums[i] and dp[j] > first:\r
                    first = dp[j]\r
                    flag = 1  # 表示存在更小的合法前驱，非「排头」单独成列\r
            if flag:\r
                dp[i] = first + 1\r
        return max(dp)\r
</pre>\r
\r
### 思路解析\r
\r
\`dp[i]\` 表示**以 \`nums[i]\` 结尾**的最长严格递增子序列长度。初始化 **\`dp[i] = 1\`**（仅含自身）。\r
\r
对所有 **\`j < i\`** 且 **\`nums[j] < nums[i]\`** 的位置，可从 **\`j\` 结尾的最优长度**转移：  \r
**\`dp[i] = max(dp[j] + 1)\`**。实现中用 **\`first\`** 滚动维护当前最大的 **\`dp[j]\`**，**\`flag\`** 标记是否至少有一个合法 **\`j\`**（若没有则保持长度为 \`1\`）。\r
\r
答案为 **\`max(dp)\`**。\r
\r
- **时间复杂度**：**O(n²)**，\`n = len(nums)\`。  \r
- **空间复杂度**：**O(n)**。  \r
- **进阶**：维护有序数组 + 二分可将更新降为 **O(log n)** 每次，总体 **O(n log n)**。\r
\r
<a id="q152"></a>\r
\r
## LeetCode 152. 乘积最大子数组 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定整数数组 \`nums\`，找出数组中**非空连续子数组**的乘积**最大值**，返回该乘积。\r
\r
- 只含一个元素的子数组，乘积即为该元素本身。  \r
- 题目保证测试用例的答案在 **32 位有符号整数**范围内；任意子数组的乘积也可视为在 32 位整数范围内。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [2, 3, -2, 4]\`  \r
  输出：\`6\`  \r
  解释：子数组 \`[2, 3]\` 的乘积最大，为 \`6\`。\r
- **示例 2：** \`nums = [-2, 0, -1]\`  \r
  输出：\`0\`  \r
  解释：\`[-2, -1]\` 不是连续子数组，不能一起乘出 \`2\`。\r
\r
### 提示\r
\r
- \`1 <= nums.length <= 2 * 10^4\`\r
- \`-10 <= nums[i] <= 10\`\r
- 任意子数组乘积保证在 32 位整数范围内\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def maxProduct(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        max_dp = [0] * len(nums)\r
        min_dp = [0] * len(nums)\r
        max_dp[0] = nums[0]\r
        min_dp[0] = nums[0]\r
        for i in range(1, len(nums)):\r
            max_dp[i] = max(\r
                max_dp[i - 1] * nums[i],\r
                min_dp[i - 1] * nums[i],\r
                nums[i],\r
            )\r
            min_dp[i] = min(\r
                max_dp[i - 1] * nums[i],\r
                min_dp[i - 1] * nums[i],\r
                nums[i],\r
            )\r
        return max(max_dp)\r
</pre>\r
\r
### 思路解析（如图示递推）\r
\r
乘法与加法不同：**负负得正**，区间最大乘积未必来自「上一步最大 × 当前数」，也可能来自**上一步最小（很负）× 当前负数**。因此要同时维护两个量：\r
\r
- **\`max_dp[i]\`**：以 **\`nums[i]\` 结尾**的连续子数组的**最大乘积**。  \r
- **\`min_dp[i]\`**：以 **\`nums[i]\` 结尾**的连续子数组的**最小乘积**（最负）。\r
\r
每一步在三种候选里取值：**接上 \`i-1\` 的最大链**、**接上 \`i-1\` 的最小链**、**从 \`i\` 重新开始**（仅 \`nums[i]\`）。\`f_max\`、\`f_min\` 与代码中 \`max_dp\`、\`min_dp\` 的对应关系见下图。\r
\r
<img src="Leetcode/0502.png" alt="乘积最大子数组：最大／最小乘积递推示意" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
全局答案为 **\`max(max_dp)\`**。\r
\r
- **时间复杂度**：**O(n)**。  \r
- **空间复杂度**：**O(n)**；可滚动为 **O(1)**。\r
\r
<a id="q416"></a>\r
\r
## LeetCode 416. 分割等和子集 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个只包含**正整数**的非空数组 \`nums\`，判断是否可以将这个数组分割成两个子集，使得**两个子集的元素和相等**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [1, 5, 11, 5]\`  \r
  输出：\`true\`  \r
  解释：可分为 \`[1, 5, 5]\` 与 \`[11]\`，和均为 \`11\`。\r
- **示例 2：** \`nums = [1, 2, 3, 5]\`  \r
  输出：\`false\`\r
\r
### 提示\r
\r
- \`1 <= nums.length <= 200\`\r
- \`1 <= nums[i] <= 100\`\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def canPartition(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: bool\r
        """\r
        if len(nums) < 2:\r
            return False\r
        summary = sum(nums)\r
        if summary % 2 == 1:\r
            return False\r
        else:\r
            target = summary // 2\r
        maxNum = max(nums)\r
        if maxNum > target:\r
            return False\r
        dp = [[False for _ in range(target + 1)] for _ in range(len(nums))]\r
        for i in range(len(dp)):\r
            dp[i][0] = True\r
        dp[0][nums[0]] = True\r
        for i in range(1, len(nums)):\r
            for j in range(1, target + 1):\r
                if j >= nums[i]:\r
                    dp[i][j] = (dp[i - 1][j]) or dp[i - 1][j - nums[i]]\r
                else:\r
                    dp[i][j] = dp[i - 1][j]\r
        return dp[len(nums) - 1][target]\r
</pre>\r
\r
### 思路解析\r
\r
<img src="Leetcode/0502_3.png" alt="分割等和子集 解析 1" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
<img src="Leetcode/0502_4.png" alt="分割等和子集 解析 2" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
<video controls playsinline preload="metadata" src="Leetcode/0502_3.mp4" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
<a id="q32"></a>\r
\r
## LeetCode 32. 最长有效括号 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个只包含 \`'('\` 与 \`')'\` 的字符串 \`s\`，找出**最长的、合法且连续的**括号子串的长度。\r
\r
**合法**指括号能按顺序配对、形如平衡括号串（例如 \`"(())"\` 合法）。\r
\r
### 测试样例\r
\r
- **示例 1：** \`s = "(()"\`  \r
  输出：\`2\`  \r
  解释：最长合法子串为 \`"()"\`。\r
- **示例 2：** \`s = ")()())"\`  \r
  输出：\`4\`  \r
  解释：最长合法子串为 \`"()()"\`。\r
- **示例 3：** \`s = ""\`  \r
  输出：\`0\`\r
\r
### 提示\r
\r
- \`0 <= s.length <= 3 * 10^4\`\r
- \`s[i]\` 为 \`'('\` 或 \`')'\`\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def longestValidParentheses(self, s):\r
        """\r
        :type s: str\r
        :rtype: int\r
        """\r
        dp = [0] * len(s)\r
        for i in range(len(s)):\r
            if s[i] == '(':\r
                dp[i] = 0\r
\r
            # 发现右括号\r
            else:\r
\r
                # 处理前期数组越界情况\r
                if i == 0:\r
                    dp[i] = 0\r
                elif i == 1:\r
                    if s[0] == '(':\r
                        dp[i] = 2\r
                    else:\r
                        dp[i] = 0\r
                else:\r
                    if s[i - 1] == '(':\r
                        dp[i] = dp[i - 2] + 2\r
                    else:\r
                        index = i - dp[i - 1] - 1\r
                        if index < 0:\r
                            dp[i] = 0\r
                        else:\r
                            if s[index] == '(':\r
                                if index - 1 >= 0:\r
                                    dp[i] = dp[i - 1] + dp[index - 1] + 2\r
                                else:\r
                                    dp[i] = dp[i - 1] + 2\r
                            else:\r
                                dp[i] = 0\r
        if dp:\r
            return max(dp)\r
        else:\r
            return 0\r
</pre>\r
\r
### 思路解析\r
\r
<img src="Leetcode/0503.png" alt="最长有效括号 图解" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
<video controls playsinline preload="metadata" src="Leetcode/0503.mp4" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
`,XA=`---\r
title: "Leetcode 多维动态规划 1（不同路径、最小路径和、最长回文子串、最长公共子序列、编辑距离）"\r
date: "2026-05-03"\r
tags: ["Leetcode", "动态规划", "多维", "组合数学", "字符串", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [62 不同路径](#q62) ｜ [64 最小路径和](#q64) ｜ [5 最长回文子串](#q5) ｜ [1143 最长公共子序列](#q1143) ｜ [72 编辑距离](#q72)\r
\r
<a id="q62"></a>\r
\r
## LeetCode 62. 不同路径 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
一个机器人位于 **\`m × n\`** 网格的**左上角**（起点），每次只能向**下**或向**右**移动一格。求它到达**右下角**（终点）的**不同路径条数**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`m = 3\`，\`n = 7\`  \r
  输出：\`28\`\r
- **示例 2：** \`m = 3\`，\`n = 2\`  \r
  输出：\`3\`  \r
  解释：从左上到右下共 3 条不同路径。\r
\r
### 提示\r
\r
- \`1 <= m, n <= 100\`\r
- 题目数据保证答案在 32 位有符号整数范围内\r
\r
### 代码（Python）方法 1：组合数学\r
\r
从起点到终点共走 **\`(m - 1) + (n - 1) = m + n - 2\`** 步，其中恰有 **\`m - 1\`** 步向下、**\`n - 1\`** 步向右，顺序不同即路径不同。方案数等于在 **\`m + n - 2\`** 个位置里选 **\`m - 1\`** 个放「向下」的组合数：\r
\r
**C(m + n − 2, m − 1)**（也等于 **C(m + n − 2, n − 1)**）。\r
\r
实现上先算分子 **\`(m + n − 2) × (m + n − 3) × … × n\`**（共 **\`m − 1\`** 个因子），再除以 **\`(m − 1)!\`**，与上式等价。Python 3 下应用**整数除法** **\`//\`** 得到整型答案。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def uniquePaths(self, m, n):\r
        """\r
        :type m: int\r
        :type n: int\r
        :rtype: int\r
        """\r
        divide = 1\r
        ans = 1\r
        for i in range(1, m):\r
            divide = divide * i\r
        for j in range(0, m - 1):\r
            ans = ans * (m + n - 2 - j)\r
\r
        return ans // divide\r
</pre>\r
\r
### 思路解析（方法 1）\r
\r
**等价计数**：全程定长 **\`m + n − 2\`** 步，只需决定哪些步「向下」，其余自动为「向右」，故路径数 = **组合数 C(m + n − 2, m − 1)**。\r
\r
**实现**：分子为连续 **\`m − 1\`** 个整数相乘，分母为 **\`(m − 1)!\`**；循环结构与题中一致，最后 **\`//\`** 避免浮点。\r
\r
- **时间复杂度**：**O(m)**。  \r
- **空间复杂度**：**O(1)**。\r
\r
### 代码（Python）方法 2：多维动态规划\r
\r
\`f[i][j]\` 表示从左上角走到第 **\`i\`** 行、第 **\`j\`** 列（0 起下标）的路径条数。第一行、第一列只能沿单方向过来，故全为 **\`1\`**；其余格子由「从上进入」与「从左进入」相加。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def uniquePaths(self, m, n):\r
        """\r
        :type m: int\r
        :type n: int\r
        :rtype: int\r
        """\r
        f = [[1] * n] + [[1] + [0] * (n - 1) for _ in range(m - 1)]\r
        for i in range(1, m):\r
            for j in range(1, n):\r
                f[i][j] = f[i - 1][j] + f[i][j - 1]\r
        return f[m - 1][n - 1]\r
</pre>\r
\r
### 思路解析（方法 2）\r
\r
**状态**：\`f[i][j]\` = 到达 \`(i, j)\` 的路径数。  \r
**边界**：第 \`0\` 行、第 \`0\` 列均为 \`1\`。  \r
**转移**：只能下或右，故 **\`f[i][j] = f[i - 1][j] + f[i][j - 1]\`**。\r
\r
初始化用一行全 \`1\` 与 \`m - 1\` 行「行首为 \`1\`、后面先置 \`0\` 再在循环里填」的写法，与双重循环转移一致。\r
\r
- **时间复杂度**：**O(m × n)**。  \r
- **空间复杂度**：**O(m × n)**（表格；可压成一维 **O(n)**）。\r
\r
<a id="q64"></a>\r
\r
## LeetCode 64. 最小路径和 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个包含**非负整数**的 **\`m × n\`** 网格 \`grid\`，找出一条从**左上角**到**右下角**的路径，使路径上经过的数字**总和最小**。\r
\r
**移动规则**：每一步只能向**下**或向**右**移动一格。\r
\r
<img src="Leetcode/0503_1.png" alt="最小路径和：题意与网格示例" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 测试样例\r
\r
- **示例 1：** \`grid = [[1,3,1],[1,5,1],[4,2,1]]\`  \r
  输出：\`7\`  \r
  解释：路径 \`1 → 3 → 1 → 1 → 1\` 的和最小，为 \`7\`。\r
- **示例 2：** \`grid = [[1,2,3],[4,5,6]]\`  \r
  输出：\`12\`\r
\r
### 提示\r
\r
- \`m == grid.length\`\r
- \`n == grid[i].length\`\r
- \`1 <= m, n <= 200\`\r
- \`0 <= grid[i][j] <= 200\`\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def minPathSum(self, grid):\r
        """\r
        :type grid: List[List[int]]\r
        :rtype: int\r
        """\r
        dp = []\r
        for i in range(len(grid)):\r
            row = [0] * len(grid[0])\r
            dp.append(row)\r
\r
        # 把边缘确定\r
        dp[0][0] = grid[0][0]\r
        for i in range(1, len(grid)):\r
            dp[i][0] = dp[i - 1][0] + grid[i][0]\r
        for j in range(1, len(grid[0])):\r
            dp[0][j] = dp[0][j - 1] + grid[0][j]\r
\r
        for i in range(1, len(grid)):\r
            for j in range(1, len(grid[0])):\r
                dp[i][j] = grid[i][j] + min(dp[i - 1][j], dp[i][j - 1])\r
\r
        return dp[-1][-1]\r
</pre>\r
\r
### 思路解析\r
\r
**状态**：\`dp[i][j]\` = 从左上角到 **\`(i, j)\`** 的最小路径和。  \r
**边界**：**\`dp[0][0] = grid[0][0]\`**；第一列只能从上往下累加，第一行只能从左往右累加。  \r
**转移**：其它格子由上或左走来，取较小累加当前格：**\`dp[i][j] = grid[i][j] + min(dp[i - 1][j], dp[i][j - 1])\`**。\r
\r
答案为 **\`dp[-1][-1]\`**（即 **\`dp[m - 1][n - 1]\`**）。\r
\r
- **时间复杂度**：**O(m × n)**。  \r
- **空间复杂度**：**O(m × n)**（可改成原地修改 \`grid\` 或一维滚动为 **O(n)**）。\r
\r
<a id="q5"></a>\r
\r
## LeetCode 5. 最长回文子串 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定字符串 \`s\`，返回 \`s\` 中**最长的回文子串**。\r
\r
**回文串**：正读与反读相同（如 \`"aba"\`、\`"bb"\`）。\r
\r
### 测试样例\r
\r
- **示例 1：** \`s = "babad"\`  \r
  输出：\`"bab"\`（\`"aba"\` 亦为合法答案）。\r
- **示例 2：** \`s = "cbbd"\`  \r
  输出：\`"bb"\`\r
\r
### 提示\r
\r
- \`1 <= s.length <= 1000\`\r
- \`s\` 由数字和英文字母组成\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def longestPalindrome(self, s):\r
        """\r
        :type s: str\r
        :rtype: str\r
        """\r
        dp = []\r
        max_record = []\r
        for i in range(len(s)):\r
            temp = [False] * len(s)\r
            dp.append(temp)\r
        for i in range(len(s)):\r
            dp[i][i] = True\r
        for g in range(1, len(s)):\r
            for j in range(len(s) - g):  # j 为区间左端，区间 [j, j+g]\r
                if g == 1:\r
                    if s[j] == s[j + g]:\r
                        dp[j][j + g] = True\r
                        max_record = [j, j + g]\r
                else:\r
                    if dp[j + 1][j + g - 1] and s[j] == s[j + g]:\r
                        dp[j][j + g] = True\r
                        max_record = [j, j + g]\r
        if max_record:\r
            return s[max_record[0] : max_record[1] + 1]\r
        else:\r
            return s[0]\r
</pre>\r
\r
### 思路解析\r
\r
<img src="Leetcode/0504_1.png" alt="最长回文子串：区间 DP 示意" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
**状态**：\`dp[i][j]\` 表示 **\`s[i … j]\`**（闭区间）是否为回文串。**边界**：长度为 \`1\` 的子串 **\`dp[i][i] = True\`**。\r
\r
按区间长度递增枚举：**\`g\`** 为「右端与左端的距离」，子串长度为 **\`g + 1\`**。  \r
- **\`g == 1\`**：长度为 \`2\`，只需 **\`s[j] == s[j + g]\`**。  \r
- **\`g > 1\`**：两端相等且**内侧** **\`s[j+1 … j+g-1]\`** 为回文，即 **\`dp[j + 1][j + g - 1]\`** 且 **\`s[j] == s[j + g]\`**。\r
\r
每次判定为回文时用 **\`max_record\`** 记录当前最长区间的左右端下标；若没有长度 ≥ 2 的回文（或未更新），则单独字符亦可，返回 **\`s[0]\`**。\r
\r
- **时间复杂度**：**O(n²)**，\`n = len(s)\`。  \r
- **空间复杂度**：**O(n²)**（\`dp\` 表）。\r
\r
<a id="q1143"></a>\r
\r
## LeetCode 1143. 最长公共子序列 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定两个字符串 \`text1\` 和 \`text2\`，返回它们**最长公共子序列**的长度。若不存在公共子序列，返回 **\`0\`**。\r
\r
**子序列**：由原串删除若干字符（可删 0 个）得到、且**不改变剩余字符相对顺序**的新串。  \r
**公共子序列**：既是 \`text1\` 的子序列、也是 \`text2\` 的子序列。\r
\r
### 测试样例\r
\r
- **示例 1：** \`text1 = "abcde"\`，\`text2 = "ace"\`  \r
  输出：\`3\`  \r
  解释：最长公共子序列可为 \`"ace"\`。\r
- **示例 2：** \`text1 = "abc"\`，\`text2 = "abc"\`  \r
  输出：\`3\`\r
- **示例 3：** \`text1 = "abc"\`，\`text2 = "def"\`  \r
  输出：\`0\`\r
\r
### 提示\r
\r
- \`1 <= text1.length, text2.length <= 1000\`\r
- \`text1\` 与 \`text2\` 仅由小写英文字母组成\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def longestCommonSubsequence(self, text1, text2):\r
        """\r
        :type text1: str\r
        :type text2: str\r
        :rtype: int\r
        """\r
        dp = []\r
        for i in range(len(text1) + 1):\r
            temp = [0] * (len(text2) + 1)\r
            dp.append(temp)\r
\r
        for i in range(1, len(text1) + 1):\r
            for j in range(1, len(text2) + 1):\r
                if text1[i - 1] == text2[j - 1]:\r
                    dp[i][j] = dp[i - 1][j - 1] + 1\r
                else:\r
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])\r
        return dp[-1][-1]\r
</pre>\r
\r
### 思路解析\r
\r
<img src="Leetcode/0504.png" alt="最长公共子序列：DP 表与 pad 一圈 0 示意" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
**须在 DP 矩阵最外侧「pad 一圈 0」**（多一行、多一列，尺寸为 **\`(len(text1) + 1) × (len(text2) + 1)\`**）：  \r
对应 **\`text1\` 的前 0 个字符**或 **\`text2\` 的前 0 个字符**时，公共子序列长度恒为 **\`0\`**。这样**不用单独写越界分支**，循环 **\`i, j\` 从 \`1\` 起**，用 **\`text1[i-1]\`**、**\`text2[j-1]\`** 与 **\`dp[i-1][j-1]\`**、**\`dp[i-1][j]\`**、**\`dp[i][j-1]\`** 对齐。\r
\r
**状态**：**\`dp[i][j]\`** = **\`text1\` 前 \`i\` 个字符**与 **\`text2\` 前 \`j\` 个字符**的 LCS 长度。  \r
**转移**：若 **\`text1[i-1] == text2[j-1]\`**，则 **\`dp[i][j] = dp[i-1][j-1] + 1\`**；否则 **\`dp[i][j] = max(dp[i-1][j], dp[i][j-1])\`**。答案 **\`dp[-1][-1]\`**。\r
\r
- **时间复杂度**：**O(m × n)**，\`m = len(text1)\`，\`n = len(text2)\`。  \r
- **空间复杂度**：**O(m × n)**（可滚动一维优化为 **O(min(m,n))**）。\r
\r
<a id="q72"></a>\r
\r
## LeetCode 72. 编辑距离 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定两个字符串 \`word1\` 和 \`word2\`，返回将 **\`word1\`** 转换成 **\`word2\`** 所需要使用的**最少操作数**。你可以进行三种操作：\r
\r
1. **插入**一个字符  \r
2. **删除**一个字符  \r
3. **替换**一个字符  \r
\r
### 测试样例\r
\r
- **示例 1：** \`word1 = "horse"\`，\`word2 = "ros"\`  \r
  输出：\`3\`\r
- **示例 2：** \`word1 = "intention"\`，\`word2 = "execution"\`  \r
  输出：\`5\`\r
\r
### 提示\r
\r
- \`0 <= word1.length, word2.length <= 500\`\r
- \`word1\` 和 \`word2\` 由小写英文字母组成\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def minDistance(self, word1, word2):\r
        """\r
        :type word1: str\r
        :type word2: str\r
        :rtype: int\r
        """\r
\r
        dp = []\r
        for i in range(len(word1) + 1):\r
            temp = [0] * (len(word2) + 1)\r
            dp.append(temp)\r
\r
        for i in range(len(dp)):\r
            dp[i][0] = i\r
        for j in range(len(dp[0])):\r
            dp[0][j] = j\r
\r
        for i in range(1, len(dp)):\r
            for j in range(1, len(dp[0])):\r
                if word1[i - 1] == word2[j - 1]:\r
                    dp[i][j] = 1 + min(\r
                        dp[i - 1][j],\r
                        dp[i][j - 1],\r
                        dp[i - 1][j - 1] - 1,\r
                    )\r
                else:\r
                    dp[i][j] = 1 + min(\r
                        dp[i - 1][j],\r
                        dp[i][j - 1],\r
                        dp[i - 1][j - 1],\r
                    )\r
\r
        return dp[-1][-1]\r
</pre>\r
\r
### 思路解析\r
\r
**状态**：\`dp[i][j]\` 表示 **\`word1\` 前 \`i\` 个字符**与 **\`word2\` 前 \`j\` 个字符**之间的最小编辑距离。**边界**：\`dp[i][0] = i\`（逐个删除）、\`dp[0][j] = j\`（逐个插入）。\r
\r
**转移**：末位**不同**时，删、插、换对应 **\`dp[i-1][j]\`、\`dp[i][j-1]\`、\`dp[i-1][j-1]\`** 三者取最小再加 **\`1\`**。末位**相同**时，用 **\`1 + min(..., dp[i-1][j-1] - 1)\`** 的写法，与常见 **\`dp[i][j] = dp[i-1][j-1]\`**（本轮不必改末位）等价。\r
\r
更系统的推导、示意图与变形写法见：\r
\r
[72. 编辑距离 — 力扣官方题解](https://leetcode.cn/problems/edit-distance/solutions/188223/bian-ji-ju-chi-by-leetcode-solution/?envType=study-plan-v2&envId=top-100-liked)\r
\r
- **时间复杂度**：**O(m × n)**。  \r
- **空间复杂度**：**O(m × n)**。\r
`,ZA=`---\r
title: "Leetcode 图论 1（岛屿数量，腐烂的橘子，课程表，前缀树）"\r
date: "2026-04-03"\r
tags: ["Leetcode", "图论", "DFS", "BFS", "拓扑排序", "Trie", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [200 岛屿数量](#q200) ｜ [994 腐烂的橘子](#q994) ｜ [207 课程表](#q207) ｜ [208 实现 Trie](#q208)\r
\r
<a id="q200"></a>\r
\r
## LeetCode 200. 岛屿数量 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个由 \`'1'\`（陆地）和 \`'0'\`（水）组成的二维网格，请你计算网格中**岛屿**的数量。\r
\r
岛屿总是被水包围，且只通过**水平方向或垂直方向**上相邻的陆地连接。你可以假设该网格的四条边均被水包围。\r
\r
**图论视角：** 将每个 \`'1'\` 视为顶点，四邻接的陆地连边，则**岛屿数 = 连通分量个数**；本题在网格上用 DFS/BFS 遍历即可。\r
\r
### 提示\r
\r
- \`m == len(grid)\`，\`n == len(grid[i])\`  \r
- \`1 ≤ m, n ≤ 300\`  \r
- \`grid[i][j]\` 为字符 \`'0'\` 或 \`'1'\`\r
\r
### 代码（Python）解法一：DFS 沉没岛屿\r
\r
每遇到一块 \`'1'\`，岛屿计数 +1，并从该格出发 **DFS**，把与该岛相连的所有 \`'1'\` 改为 \`'0'\`（标记已访问），避免重复计数。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def dfs(self, grid, r, c):\r
        nr = len(grid)\r
        nc = len(grid[0])\r
\r
        grid[r][c] = "0"\r
        if r - 1 >= 0 and grid[r - 1][c] == "1":\r
            self.dfs(grid, r - 1, c)\r
        if r + 1 < nr and grid[r + 1][c] == "1":\r
            self.dfs(grid, r + 1, c)\r
        if c - 1 >= 0 and grid[r][c - 1] == "1":\r
            self.dfs(grid, r, c - 1)\r
        if c + 1 < nc and grid[r][c + 1] == "1":\r
            self.dfs(grid, r, c + 1)\r
\r
    def numIslands(self, grid):\r
        """\r
        :type grid: List[List[str]]\r
        :rtype: int\r
        """\r
        nr = len(grid)\r
        if nr == 0:\r
            return 0\r
        nc = len(grid[0])\r
        num_islands = 0\r
        for r in range(nr):\r
            for c in range(nc):\r
                if grid[r][c] == "1":\r
                    num_islands += 1\r
                    self.dfs(grid, r, c)\r
\r
        return num_islands\r
</pre>\r
\r
**解法一 讲解视频**（资源放在 \`public/Leetcode/\`，命名 \`0403_1.mp4\`）\r
\r
<video src="Leetcode/0403_1.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 思路解析（解法一）\r
\r
- **连通块**：每个四连通的 \`'1'\` 块即一座岛；枚举每个未访问的 \`'1'\` 作为新岛起点。\r
- **沉没**：\`dfs\` 先将当前格置 \`'0'\`，再向上下左右递归，整块岛被抹成水，后续二重循环不会再碰到。\r
- **边界**：行 \`0 … nr-1\`、列 \`0 … nc-1\`，越界不递归。\r
- **空网格**：\`nr == 0\` 时返回 0。\r
- **复杂度**：每个格子最多被访问常数次，时间 **O(mn)**，递归栈最坏 **O(mn)**（全为 \`'1'\` 时深度与形状有关；亦可改用 BFS，见解法二）。\r
\r
### 代码（Python）解法二：BFS（队列 \`deque\`）\r
\r
每遇到一块 \`'1'\`，岛屿计数 +1，将该格入队并 **BFS**：弹出队列中的格子，把四邻仍为 \`'1'\` 的格子入队并置 \`'0'\`，直到队列为空。\r
\r
<pre class="code-gray">\r
from collections import deque\r
\r
class Solution(object):\r
    def numIslands(self, grid):\r
        """\r
        :type grid: List[List[str]]\r
        :rtype: int\r
        """\r
        if not grid:\r
            return 0\r
\r
        nr = len(grid)\r
        nc = len(grid[0])\r
        num_islands = 0\r
\r
        for r in range(nr):\r
            for c in range(nc):\r
                if grid[r][c] == "1":\r
                    num_islands += 1\r
                    grid[r][c] = "0"\r
                    neighbors = deque()\r
                    neighbors.append((r, c))\r
                    while neighbors:\r
                        row, col = neighbors.popleft()\r
                        if row - 1 >= 0 and grid[row - 1][col] == "1":\r
                            neighbors.append((row - 1, col))\r
                            grid[row - 1][col] = "0"\r
                        if row + 1 < nr and grid[row + 1][col] == "1":\r
                            neighbors.append((row + 1, col))\r
                            grid[row + 1][col] = "0"\r
                        if col - 1 >= 0 and grid[row][col - 1] == "1":\r
                            neighbors.append((row, col - 1))\r
                            grid[row][col - 1] = "0"\r
                        if col + 1 < nc and grid[row][col + 1] == "1":\r
                            neighbors.append((row, col + 1))\r
                            grid[row][col + 1] = "0"\r
\r
        return num_islands\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **队列**：\`deque\` 左端弹出、右端入队，实现 **FIFO**，与「先发现的陆地先扩展」一致。\r
- **入队与染色**：发现邻格为 \`'1'\` 时立刻置 \`'0'\` 并入队，避免同一格被重复入队。\r
- **起点**：与 DFS 一样，外层 \`if grid[r][c] == "1"\` 时先对起点染色再入队，保证该岛只被统计一次。\r
- **复杂度**：每个格子最多入队、出队各一次，时间 **O(mn)**；队列中同时存在的格子数最坏 **O(mn)**（例如某一「层」同时扩展很多格），无递归栈，适合极深形状时避免栈溢出（常数与 DFS 不同，二者均可）。\r
\r
<a id="q994"></a>\r
\r
## LeetCode 994. 腐烂的橘子 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
在给定的 \`m × n\` 网格 \`grid\` 中，每个格子可以是：\r
\r
- **\`0\`**：空单元格  \r
- **\`1\`**：新鲜橘子  \r
- **\`2\`**：腐烂橘子  \r
\r
每分钟，腐烂橘子会使其 **上下左右** 四邻的新鲜橘子变腐烂。返回直到网格中 **没有新鲜橘子** 所需的 **最少分钟数**；若无法使全部新鲜橘子腐烂，返回 **\`-1\`**。\r
\r
**图论视角：** 多源 **BFS**，按「分钟」分层扩散，层数即时间。\r
\r
### 提示\r
\r
- \`m == len(grid)\`，\`n == len(grid[i])\`  \r
- \`1 ≤ m, n ≤ 10\`  \r
- \`grid[i][j]\` 仅为 \`0\`、\`1\` 或 \`2\`\r
\r
### 代码（Python）：多源 BFS（按层扩散）\r
\r
先将所有腐烂格入队，并统计新鲜橘子个数 \`cnt\`。若 \`cnt == 0\` 直接返回 \`0\`。每一轮处理当前队列长度 \`N\`，相当于 **1 分钟** 内同时从所有腐烂格扩展；新鲜变腐烂时入队并 \`cnt -= 1\`。队列为空后：若仍有新鲜则返回 \`-1\`，否则返回 \`time - 1\`（最后一轮队列可能只做「收尾」而未再感染，需减 1）。\r
\r
<pre class="code-gray">\r
from collections import deque\r
\r
class Solution(object):\r
    def orangesRotting(self, grid):\r
        """\r
        :type grid: List[List[int]]\r
        :rtype: int\r
        """\r
        if not grid:\r
            return -1\r
        nr = len(grid)\r
        nc = len(grid[0])\r
        que = deque()\r
        cnt = 0\r
\r
        for i in range(nr):\r
            for j in range(nc):\r
                if grid[i][j] == 2:\r
                    que.append([i, j])\r
                if grid[i][j] == 1:\r
                    cnt += 1\r
        if cnt == 0:\r
            return 0\r
\r
        time = 0\r
        while que:\r
            N = len(que)\r
            for i in range(N):\r
                temp = que.popleft()\r
                if temp[0] - 1 >= 0:\r
                    if grid[temp[0] - 1][temp[1]] == 1:\r
                        grid[temp[0] - 1][temp[1]] = 2\r
                        que.append([temp[0] - 1, temp[1]])\r
                        cnt -= 1\r
                if temp[0] + 1 <= len(grid) - 1:\r
                    if grid[temp[0] + 1][temp[1]] == 1:\r
                        grid[temp[0] + 1][temp[1]] = 2\r
                        que.append([temp[0] + 1, temp[1]])\r
                        cnt -= 1\r
                if temp[1] - 1 >= 0:\r
                    if grid[temp[0]][temp[1] - 1] == 1:\r
                        grid[temp[0]][temp[1] - 1] = 2\r
                        que.append([temp[0], temp[1] - 1])\r
                        cnt -= 1\r
                if temp[1] + 1 <= len(grid[0]) - 1:\r
                    if grid[temp[0]][temp[1] + 1] == 1:\r
                        grid[temp[0]][temp[1] + 1] = 2\r
                        que.append([temp[0], temp[1] + 1])\r
                        cnt -= 1\r
            time += 1\r
        if cnt > 0:\r
            return -1\r
        else:\r
            return time - 1\r
</pre>\r
\r
### 思路解析\r
\r
- **多源 BFS**：所有 \`2\` 同时作为起点；每层 \`for i in range(N)\` 对应 **1 分钟** 的并行扩散。\r
- **\`cnt\`**：统计新鲜橘子；每次感染则减 1，避免最后再扫一遍网格。\r
- **返回 \`time - 1\`**：循环每轮先扩展再 \`time += 1\`，队列为空时多计了最后一轮「已无新鲜可感染」的层，故分钟数为 \`time - 1\`。（也可用「先 \`time += 1\` 再判队列空」等写法避免减 1，本质一致。）\r
- **复杂度**：每个格子最多入队、出队一次，时间 **O(mn)**，队列 **O(mn)**。\r
\r
<a id="q207"></a>\r
\r
## LeetCode 207. 课程表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
你总共需要修 \`numCourses\` 门课，编号为 \`0\` 到 \`numCourses - 1\`。部分课程有先修要求，以二维数组 \`prerequisites\` 给出，其中 \`prerequisites[i] = [ai, bi]\` 表示：**要学习课程 \`ai\`，必须先完成课程 \`bi\`**（例如 \`[0, 1]\` 表示学课程 \`0\` 前须先学完课程 \`1\`）。\r
\r
判断能否修完所有课程：若存在合法上课顺序则返回 \`true\`；若先修关系形成**环**（互相依赖）则无法修完，返回 \`false\`。\r
\r
**图论视角：** 课程为有向边 \`bi → ai\`（先修指向后续），**能否修完 = 有向图是否存在拓扑排序**（无环则存在）。\r
\r
### 提示\r
\r
- \`1 ≤ numCourses ≤ 2000\`  \r
- \`0 ≤ len(prerequisites) ≤ 5000\`，且 \`len(prerequisites[i]) == 2\`  \r
- \`0 ≤ ai, bi < numCourses\`，且各先修对 **互不相同**\r
\r
### 代码（Python）：Kahn 拓扑排序（BFS 入度）\r
\r
用邻接表 \`edges\` 存「先修课 → 后继课」列表，数组 \`indeg\` 记录每门课的**入度**（还剩多少先修未完成）。将所有入度为 \`0\` 的课入队，反复弹出、选修该课并令后继入度减 1；若某后继入度变为 \`0\` 则入队。若最终选修次数等于 \`numCourses\`，说明无环且存在拓扑序。\r
\r
<pre class="code-gray">\r
from collections import defaultdict, deque\r
\r
class Solution(object):\r
    def canFinish(self, numCourses, prerequisites):\r
        """\r
        :type numCourses: int\r
        :type prerequisites: List[List[int]]\r
        :rtype: bool\r
        """\r
        edges = defaultdict(list)\r
        indeg = [0] * numCourses\r
\r
        for info in prerequisites:\r
            edges[info[1]].append(info[0])\r
            indeg[info[0]] += 1\r
\r
        q = deque([u for u in range(numCourses) if indeg[u] == 0])\r
        visited = 0\r
\r
        while q:\r
            visited += 1\r
            u = q.popleft()\r
            for v in edges[u]:\r
                indeg[v] -= 1\r
                if indeg[v] == 0:\r
                    q.append(v)\r
\r
        return visited == numCourses\r
</pre>\r
\r
### 思路解析\r
\r
- **建图**：\`edges[x]\` 列出「以 x 为先修」的后继课程；对每条边 \`[a, b]\` 含义为修 \`a\` 前须先修 \`b\`，即 \`b → a\`，故 \`edges[b].append(a)\` 且 \`indeg[a] += 1\`。\r
- **Kahn**：不断删除入度为 0 的结点（可视为已修完），并更新后继入度；若图中无环，最终能删完 \`numCourses\` 个结点。\r
- **判定**：\`visited == numCourses\` 等价于「拓扑排序成功」；若存在环，环上结点入度无法全部减到 0，\`visited\` 将小于 \`numCourses\`。\r
- **复杂度**：建图与遍历边各一次，时间 **O(V + E)**，其中 \`V = numCourses\`，\`E = len(prerequisites)\`；空间 **O(V + E)**。\r
\r
<a id="q208"></a>\r
\r
## LeetCode 208. 实现 Trie（前缀树）<sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**Trie（前缀树）** 是一种树形结构，用于高效存储与检索字符串集合，常用于自动补全、拼写检查等。\r
\r
实现 \`Trie\` 类：\r
\r
- **\`Trie()\`**：初始化前缀树。  \r
- **\`insert(word)\`**：插入字符串 \`word\`。  \r
- **\`search(word)\`**：若 \`word\` 曾被完整插入则返回 \`true\`，否则 \`false\`。  \r
- **\`startsWith(prefix)\`**：若存在已插入串以 \`prefix\` 为前缀则返回 \`true\`，否则 \`false\`。\r
\r
**示例要点：** 先 \`insert("apple")\` 后，\`search("apple")\` 为 \`true\`，\`search("app")\` 为 \`false\`（未作为整词插入），\`startsWith("app")\` 为 \`true\`；再 \`insert("app")\` 后，\`search("app")\` 为 \`true\`。\r
\r
### 提示\r
\r
- \`1 ≤ len(word), len(prefix) ≤ 2000\`  \r
- \`word\`、\`prefix\` 仅含英文小写字母  \r
- \`insert\`、\`search\`、\`startsWith\` 总调用次数不超过 \`3 × 10^4\`\r
\r
### 代码（Python）：字典树结点 + 子结点哈希表\r
\r
根结点不表示字符；从根向下每条边用**字符作 key** 指向子结点。\`insert\` 沿路径建边，在最后一个字符结点置 **\`is_end = True\`** 表示此处结束了一个完整单词。\`search\` 除路径存在外还须 **\`is_end\`**；\`startsWith\` 只需沿前缀能走通即可。\r
\r
子结点用 **\`dict\`** 存储，新路径按需创建 \`Treenode\`。**注意：** 结点 \`__init__\` 中不要用 \`children=dict()\` 作为默认参数（可变对象会被所有实例共享），应使用 \`children=None\` 再在函数体内赋空字典。\r
\r
<pre class="code-gray">\r
class Treenode(object):\r
    def __init__(self, val=None, children=None):\r
        self.val = val\r
        self.children = children if children is not None else {}\r
        self.is_end = False\r
\r
\r
class Trie(object):\r
    def __init__(self):\r
        self.root = Treenode(None, {})\r
\r
    def insert(self, word):\r
        """\r
        :type word: str\r
        :rtype: None\r
        """\r
        node = self.root\r
        for x in word:\r
            if node.children.get(x, None):\r
                node = node.children[x]\r
            else:\r
                newnode = Treenode(x, {})\r
                node.children[x] = newnode\r
                node = newnode\r
        node.is_end = True\r
\r
    def search(self, word):\r
        """\r
        :type word: str\r
        :rtype: bool\r
        """\r
        node = self.root\r
        for x in word:\r
            if node.children.get(x, None):\r
                node = node.children[x]\r
            else:\r
                return False\r
        if node.is_end:\r
            return True\r
        return False\r
\r
    def startsWith(self, prefix):\r
        """\r
        :type prefix: str\r
        :rtype: bool\r
        """\r
        node = self.root\r
        for x in prefix:\r
            if node.children.get(x, None):\r
                node = node.children[x]\r
            else:\r
                return False\r
        return True\r
</pre>\r
\r
### 思路解析\r
\r
- **前缀共享**：多条单词共用相同前缀路径，节省空间；插入 \`"app"\` 再插入 \`"apple"\` 时，\`"app"\` 路径上最后一个结点单独置 \`is_end\`，继续延伸 \`"le"\`。  \r
- **\`is_end\`**：区分「路径存在」与「此处是某次 \`insert\` 的结尾」；故先只插入 \`"apple"\` 时，\`search("app")\` 为 \`false\`，\`startsWith("app")\` 为 \`true\`。  \r
- **复杂度**：单次操作沿串长度走一遍，时间 **O(L)**（\`L\` 为 \`word\` 或 \`prefix\` 长度）；空间为所有插入字符总数 **O(总字符数)**。\r
`,e6=`---\r
title: "Leetcode 贪心算法（买卖股票的最佳时机，跳跃游戏，跳跃游戏 II，划分字母区间）"\r
date: "2026-04-28"\r
tags: ["Leetcode", "贪心", "数组", "字符串", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [121 买卖股票的最佳时机](#q121) ｜ [55 跳跃游戏](#q55) ｜ [45 跳跃游戏 II](#q45) ｜ [763 划分字母区间](#q763)\r
\r
<a id="q121"></a>\r
\r
## LeetCode 121. 买卖股票的最佳时机 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定数组 \`prices\`，其中 \`prices[i]\` 表示第 \`i\` 天的股价。你只能选择**某一天买入**并在**之后某一天卖出**，计算可获得的最大利润；若无法获利，返回 \`0\`。\r
\r
### 测试样例\r
\r
- **示例 1：** \`prices = [7,1,5,3,6,4]\`  \r
  输出：\`5\`\r
- **示例 2：** \`prices = [7,6,4,3,1]\`  \r
  输出：\`0\`\r
\r
### 提示\r
\r
- \`1 <= len(prices) <= 10^5\`\r
- \`0 <= prices[i] <= 10^4\`\r
\r
### 代码（Python）：贪心\r
\r
扫描数组时维护两件事：  \r
- 到当前为止的最低买入价 \`min_val\`；  \r
- 到当前为止的最大利润 \`max_ans\`。  \r
\r
每到新价格，要么更新最低价，要么尝试用“当前价 - 最低价”刷新最大利润。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def maxProfit(self, prices):\r
        """\r
        :type prices: List[int]\r
        :rtype: int\r
        """\r
        max_ans = 0\r
        min_val = 10 ** 4 + 1\r
        for i in range(len(prices)):\r
            if prices[i] < min_val:\r
                min_val = prices[i]\r
            else:\r
                if prices[i] - min_val > max_ans:\r
                    max_ans = prices[i] - min_val\r
        return max_ans\r
</pre>\r
\r
### 思路解析\r
\r
- **贪心点**：在每一天“就地”维护历史最低价，确保卖出时利润候选始终最优。\r
- **单次遍历**：不需要双重循环枚举买卖日。\r
- **复杂度**：时间 **O(n)**，额外空间 **O(1)**。\r
\r
<a id="q55"></a>\r
\r
## LeetCode 55. 跳跃游戏 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定非负整数数组 \`nums\`，你初始位于下标 \`0\`。\`nums[i]\` 表示在下标 \`i\` 最多可以向前跳的步数。判断是否能够到达最后一个下标。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [2,3,1,1,4]\`  \r
  输出：\`true\`\r
- **示例 2：** \`nums = [3,2,1,0,4]\`  \r
  输出：\`false\`\r
\r
### 提示\r
\r
- \`1 <= len(nums) <= 10^4\`\r
- \`0 <= nums[i] <= 10^5\`\r
\r
### 代码（Python）：贪心（从后往前判可达，唯一解法）\r
\r
维护变量 \`gap\`，表示“当前下标要想跳到已知可达终点，至少还需要的步数”。从后往前扫：  \r
- 若 \`nums[i] >= gap\`，则 \`i\` 本身也可达终点，\`gap\` 重置为 \`1\`；  \r
- 否则 \`gap += 1\`，表示还要多跨过一个位置。  \r
\r
最终若 \`gap == 1\`，说明起点可达终点。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def canJump(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: bool\r
        """\r
        length = len(nums)\r
        index = length - 1\r
        gap = 1\r
        # 从后往前遍历，只要前一个不为0就可达\r
        for i in range(length - 2, -1, -1):\r
            if nums[i] >= gap:\r
                index = i        # i号可达终点\r
                gap = 1\r
            else:\r
                gap += 1\r
\r
        if gap == 1:\r
            return True\r
        else:\r
            return False\r
</pre>\r
\r
### 思路解析\r
\r
- **逆向贪心**：把“能到终点”的条件向左传播，逐步判断更左侧位置是否也能接上这条可达链。\r
- **\`gap\` 含义**：当前点至少要跳 \`gap\` 步才可连接到“已知可达终点”的最近位置。\r
- **复杂度**：单次逆序扫描，时间 **O(n)**，额外空间 **O(1)**。\r
\r
<a id="q45"></a>\r
\r
## LeetCode 45. 跳跃游戏 II <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定长度为 \`n\` 的数组 \`nums\`，你初始位于下标 \`0\`，\`nums[i]\` 表示从下标 \`i\` 最多可跳的长度。返回到达 \`n-1\` 的**最小跳跃次数**（题目保证可达）。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [2,3,1,1,4]\`  \r
  输出：\`2\`\r
- **示例 2：** \`nums = [2,3,0,1,4]\`  \r
  输出：\`2\`\r
\r
### 提示\r
\r
- \`1 <= len(nums) <= 10^4\`\r
- \`0 <= nums[i] <= 1000\`\r
- 题目保证可以到达 \`n - 1\`\r
\r
### 代码（Python）方法1：逆序 DP\r
\r
从后往前计算 \`record[i]\`：表示从 \`i\` 跳到终点的最小步数。  \r
- 若 \`nums[i] == 0\`，则该点无法前进，记为一个很大值；  \r
- 否则可跳到区间 \`(i+1 .. i+nums[i])\`，取该区间最小 \`record\` 再 \`+1\`。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def jump(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        record = [0] * len(nums)\r
        for i in range(len(nums) - 2, -1, -1):\r
            if nums[i] == 0:\r
                record[i] = 10 ** 4 + 1\r
            else:\r
                max_idx = min(len(nums) - 1, i + nums[i]) + 1\r
                record[i] = min(record[(i + 1) : max_idx]) + 1\r
        return record[0]\r
</pre>\r
\r
### 思路解析（方法1）\r
\r
- **状态定义**：\`record[i]\` 是“从 \`i\` 到终点的最少跳数”。\r
- **转移**：\`record[i] = 1 + min(record[i+1 .. i+nums[i]])\`（注意右边界不越界）。\r
- **边界**：终点 \`record[n-1] = 0\`，从后向前可直接复用已算状态。\r
- **复杂度**：该写法每个位置可能扫描一段区间，最坏时间 **O(n^2)**，空间 **O(n)**；可在后续方法中优化到 **O(n)** 贪心。\r
\r
\r
\r
\r
\r
\r
\r
### 代码（Python）方法2：贪心分层（线性）\r
\r
<img src="Leetcode/0428.png" alt="跳跃游戏 II 贪心分层扩展图解" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
把每次跳跃可达区间看作一层：  \r
- \`end\` 表示当前这一步所覆盖区间的右边界；  \r
- \`maxPos\` 表示在当前区间内继续往后跳，下一步最远能到哪里。  \r
\r
遍历到 \`i == end\` 时，说明当前层扫描完，需要“迈出一步”，于是把 \`end\` 更新为 \`maxPos\`，\`step += 1\`。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def jump(self, nums):\r
        n = len(nums)\r
        maxPos, end, step = 0, 0, 0\r
        for i in range(n - 1):\r
            if maxPos >= i:\r
                maxPos = max(maxPos, i + nums[i])\r
                if i == end:\r
                    end = maxPos\r
                    step += 1\r
        return step\r
</pre>\r
\r
### 思路解析（方法2）\r
\r
- **核心贪心**：在“当前可达区间”内尽量更新下一层最远边界 \`maxPos\`，等区间扫描完再统一增加一步。\r
- **为何最优**：每一步都把下一步可达范围扩到最大，相当于 BFS 的按层最短路，首次覆盖终点即最少步数。\r
- **复杂度**：只需一次遍历，时间 **O(n)**，额外空间 **O(1)**。\r
\r
<a id="q763"></a>\r
\r
## LeetCode 763. 划分字母区间 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定字符串 \`s\`，把它尽可能多地切成若干段，使得**同一种字母只出现在同一段中**。各段按原顺序拼回必须等于 \`s\`。返回每一段的长度组成的列表。\r
\r
### 测试样例\r
\r
- **示例 1：** \`s = "ababcbacadefegdehijhklij"\`  \r
  输出：\`[9, 7, 8]\`\r
- **示例 2：** \`s = "eccbbbbdec"\`  \r
  输出：\`[10]\`\r
\r
### 提示\r
\r
- \`1 ≤ len(s) ≤ 500\`\r
- \`s\` 仅含小写英文字母\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def partitionLabels(self, s):\r
        """\r
        :type s: str\r
        :rtype: List[int]\r
        """\r
        record = {}\r
        ans = []\r
        for i in range(len(s) - 1, -1, -1):\r
            if s[i] not in record:\r
                record[s[i]] = i\r
        end = 0\r
        start = 0\r
        num = 0\r
        for i in range(len(s)):\r
            end = max(record[s[start]], end)\r
            if start == end:\r
                ans.append(num + 1)\r
                num = -1\r
                start = start + 1\r
            else:\r
                start = start + 1\r
            num = num + 1\r
            if start > len(s) - 1:\r
                break\r
        return ans\r
</pre>\r
\r
### 思路解析（如图示贪心）\r
\r
1. **预处理**：从右往左扫一遍，记录每个字符在 \`s\` 中的**最后出现下标**存进 \`record\`。同一字母若要只在一段里出现，这段必须覆盖该字母的**首尾**之间的整个区间，因此右边界至少要扩到该字母的最后位置。\r
2. **贪心扩边界**：左到右扫描时用 \`start\` 作为当前考察位置；每一段维护当前段的右边界 \`end\`，并不断更新  \r
   \`end = max(end, record[s[start]])\`，表示：当前段里已经出现过的字母，其最后出现位置都不能落在段外。\r
3. **切分**：当 **\`start == end\`** 时，说明从本段起点到 \`end\` 之间，所有出现过的字母的最后出现都不超过 \`end\`，可以安全切段；段长为当前累计的 \`num + 1\`，然后重置计数并开始下一段。\r
4. **为何段数最多**：每一段都在满足约束的前提下**尽量早结束**（右边界取到刚好包住当前已出现字母的最后出现），从而**贪心**地最大化段数。\r
\r
- **复杂度**：预处理 **O(n)**，主扫描 **O(n)**，哈希表 **O(1)** 字符集（小写字母），总体 **O(n)** 时间与 **O(1)** 额外空间（相对 \`n\` 的线性来自 \`ans\` 与 \`record\`）。\r
`,n6=`---\r
title: "Leetcode 动态规划 1"\r
date: "2026-04-29"\r
tags: ["Leetcode", "动态规划", "递推", "数组", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [70 爬楼梯](#q70) ｜ [118 杨辉三角](#q118)\r
\r
<a id="q70"></a>\r
\r
## LeetCode 70. 爬楼梯 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
假设你正在爬楼梯。需要 \`n\` 阶你才能到达楼顶。每次你可以爬 \`1\` 或 \`2\` 个台阶。有多少种**不同**的方法可以爬到楼顶？\r
\r
### 测试样例\r
\r
- **示例 1：** \`n = 2\`  \r
  输出：\`2\`  \r
  解释：\`1 + 1\`，或 \`2\`。\r
- **示例 2：** \`n = 3\`  \r
  输出：\`3\`  \r
  解释：\`1 + 1 + 1\`，\`1 + 2\`，\`2 + 1\`。\r
\r
### 提示\r
\r
- \`1 <= n <= 45\`\r
\r
<img src="Leetcode/0429.gif" alt="爬楼梯：状态递推示意" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def climbStairs(self, n):\r
        """\r
        :type n: int\r
        :rtype: int\r
        """\r
        if n == 1:\r
            return 1\r
        if n == 2:\r
            return 2\r
\r
        a, b = 1, 2\r
        for _ in range(3, n + 1):\r
            a, b = b, a + b\r
\r
        return b\r
</pre>\r
\r
### 思路解析\r
\r
设 \`f(x)\` 表示爬到第 \`x\` 阶的方案数。最后一步只能是跨 \`1\` 阶或跨 \`2\` 阶，因此只能从 \`x - 1\` 或 \`x - 2\` 走来，互不重复且覆盖所有情况，**状态转移**为：\r
\r
**f(x) = f(x-1) + f(x-2)**\r
\r
边界与题意对应：\`n = 1\` 时 \`1\` 种，\`n = 2\` 时 \`2\` 种；从 \`3\` 起按上式递推即可得到 \`f(3)=3\`、\`f(4)=5\` 等。\r
\r
**空间优化（滚动变量）**\r
\r
\`f(x)\` 只依赖前两项，不必开长度 \`O(n)\` 的数组，用两个变量滚动保存「前两阶」即可：每次令 \`a, b = b, a + b\`，相当于把 \`(f(k-2), f(k-1))\` 推进到 \`(f(k-1), f(k))\`。\r
\r
- **时间复杂度**：**O(n)**。\r
- **额外空间**：**O(1)**。\r
\r
<a id="q118"></a>\r
\r
## LeetCode 118. 杨辉三角 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定非负整数 \`numRows\`，生成「杨辉三角」的前 \`numRows\` 行。在杨辉三角中，每个数是它**左上方**与**右上方**两个数之和（首行与每行两端的 \`1\` 视为两侧有隐含的 \`0\` 亦可统一递推）。\r
\r
<img src="Leetcode/0429_2.gif" alt="杨辉三角：逐项由上一行相邻两数相加得到" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 测试样例\r
\r
- **示例 1：** \`numRows = 5\`  \r
  输出：\`[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]\`\r
- **示例 2：** \`numRows = 1\`  \r
  输出：\`[[1]]\`\r
\r
### 提示\r
\r
- \`1 <= numRows <= 30\`\r
\r
\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def generate(self, numRows):\r
        """\r
        :type numRows: int\r
        :rtype: List[List[int]]\r
        """\r
        init = [1]\r
        ans = []\r
        ans.append(init)\r
        for i in range(numRows - 1):\r
            init = [0] + init + [0]\r
            temp = []\r
            for j in range(len(init) - 1):\r
                temp.append(init[j] + init[j + 1])\r
            ans.append(temp)\r
            init = temp\r
        return ans\r
</pre>\r
\r
### 思路解析\r
\r
每一行由上一行递推：把上一行左右各补一个 \`0\`，再对相邻两项求和，得到下一行的每个位置。这与「第 \`i\` 行第 \`j\` 个数 = 上一行第 \`j-1\` 个数 + 上一行第 \`j\` 个数」一致；首行固定为 \`[1]\`，\`numRows == 1\` 时循环不执行，直接返回 \`[[1]]\`。\r
\r
- **时间复杂度**：共生成约 \`1 + 2 + … + numRows\` 个数，为 **O(numRows²)**。\r
- **额外空间**：除答案外仅用当前行与临时数组，量级 **O(numRows)**（答案本身 **O(numRows²)**）。\r
`,t6=`---\r
title: "Leetcode 堆（第 K 个最大元素，前 K 高频元素，数据流中位数）"\r
date: "2026-04-15"\r
tags: ["Leetcode", "堆", "优先队列", "数组", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [215 数组中的第 K 个最大元素](#q215) ｜ [347 前 K 个高频元素](#q347) ｜ [295 数据流的中位数](#q295)\r
\r
<a id="q215"></a>\r
\r
## LeetCode 215. 数组中的第 K 个最大元素 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定整数数组 \`nums\` 和整数 \`k\`，返回数组中第 \`k\` 个最大的元素。注意这里找的是排序后第 \`k\` 大，不是第 \`k\` 个不同元素。\r
\r
要求设计并实现时间复杂度为 **O(n)** 的算法。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [3,2,1,5,6,4]\`，\`k = 2\`  \r
  输出：\`5\`\r
- **示例 2：** \`nums = [3,2,3,1,2,4,5,5,6]\`，\`k = 4\`  \r
  输出：\`4\`\r
\r
### 提示\r
\r
- \`1 <= k <= len(nums) <= 10^5\`\r
- \`-10^4 <= nums[i] <= 10^4\`\r
\r
### 代码（Python）方法1：直接排序\r
\r
先对数组升序排序，再返回下标 \`len(nums)-k\` 的元素。实现最直观，但排序时间为 \`O(n log n)\`，通常**不满足**面试里这题对线性时间（或更优平均复杂度）的要求。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def findKthLargest(self, nums, k):\r
        """\r
        :type nums: List[int]\r
        :type k: int\r
        :rtype: int\r
        """\r
        nums.sort()\r
        return nums[len(nums) - k]\r
</pre>\r
\r
### 思路解析（方法1）\r
\r
- **核心**：排序后第 \`k\` 大就是倒数第 \`k\` 个。\r
- **优点**：代码短、可读性高、不易出错。\r
- **局限**：时间复杂度 **O(n log n)**，在这题里常被认为不够“面试友好”。\r
\r
### 代码（Python）方法2：手写大顶堆（站主自主完成）\r
\r
先原地建大顶堆，再执行 \`k-1\` 次“堆顶与末尾交换 + 堆大小减一 + 下沉调整”，最终堆顶就是第 \`k\` 大元素。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def maxHeapify(self, a, i, heapSize):\r
        l = i * 2 + 1\r
        r = i * 2 + 2\r
        largest = i\r
        if l < heapSize and a[l] > a[largest]:\r
            largest = l\r
        if r < heapSize and a[r] > a[largest]:\r
            largest = r\r
        if largest != i:\r
            a[i], a[largest] = a[largest], a[i]\r
            self.maxHeapify(a, largest, heapSize)\r
\r
    def buildMaxHeap(self, a, heapSize):\r
        for i in range(heapSize // 2 - 1, -1, -1):\r
            self.maxHeapify(a, i, heapSize)\r
\r
    def findKthLargest(self, nums, k):\r
        """\r
        :type nums: List[int]\r
        :type k: int\r
        :rtype: int\r
        """\r
        heapSize = len(nums)\r
        self.buildMaxHeap(nums, heapSize)\r
        for i in range(len(nums) - 1, len(nums) - k, -1):\r
            nums[0], nums[i] = nums[i], nums[0]\r
            heapSize -= 1\r
            self.maxHeapify(nums, 0, heapSize)\r
        return nums[0]\r
</pre>\r
\r
**方法2 讲解视频**（资源放在 \`public/Leetcode/\`，命名 \`0415_1.mp4\`）\r
\r
<video src="Leetcode/0415_1.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 思路解析（方法2）\r
\r
- **建堆**：从最后一个非叶子节点开始向前 \`heapify\`，得到大顶堆。\r
- **弹出最大值**：每轮把堆顶（当前最大）交换到堆尾并缩小堆范围，重复 \`k-1\` 轮后，堆顶就是第 \`k\` 大。\r
- **原地算法**：在 \`nums\` 上原地调整，不需要额外堆容器。\r
- **复杂度**：建堆 \`O(n)\`，每次下沉 \`O(log n)\`，共 \`k-1\` 次，整体 \`O(n + k log n)\`；空间近似 \`O(1)\`（递归栈另计）。\r
\r
<a id="q347"></a>\r
\r
## LeetCode 347. 前 K 个高频元素 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定整数数组 \`nums\` 和整数 \`k\`，返回其中出现频率前 \`k\` 高的元素。答案顺序可任意。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [1,1,1,2,2,3]\`，\`k = 2\`  \r
  输出：\`[1,2]\`\r
- **示例 2：** \`nums = [1]\`，\`k = 1\`  \r
  输出：\`[1]\`\r
- **示例 3：** \`nums = [1,2,1,2,1,2,3,1,3,2]\`，\`k = 2\`  \r
  输出：\`[1,2]\`\r
\r
### 提示\r
\r
- \`1 <= len(nums) <= 10^5\`\r
- \`-10^4 <= nums[i] <= 10^4\`\r
- \`1 <= k <=\` 数组中不同元素个数\r
- 题目保证前 \`k\` 个高频元素集合唯一\r
\r
### 代码（Python）方法1：哈希表 + 排序\r
\r
先用字典统计频次，再把 \`(频次, 元素)\` 配对后按频次排序，最后取后 \`k\` 个元素。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def topKFrequent(self, nums, k):\r
        """\r
        :type nums: List[int]\r
        :type k: int\r
        :rtype: List[int]\r
        """\r
        dic = {}\r
        for i in range(len(nums)):\r
            if nums[i] not in dic:\r
                dic[nums[i]] = 1\r
            else:\r
                dic[nums[i]] += 1\r
\r
        key = list(dic.keys())\r
        value = list(dic.values())\r
        sorted_pairs = sorted(zip(value, key))\r
        key = [n for _, n in sorted_pairs]\r
        return key[len(key) - k : len(key)]\r
</pre>\r
\r
### 思路解析（方法1）\r
\r
- **计数**：哈希表 \`dic\` 统计每个元素出现次数。\r
- **按频次排序**：\`sorted(zip(value, key))\` 先按频次升序，再切片取后 \`k\` 个。\r
- **优点**：实现直观，便于快速写出可用解。\r
- **局限**：整体复杂度约 **O(m log m)**（\`m\` 为不同元素个数），面试常会追问堆或桶排序优化。\r
\r
### 代码（Python）方法2：Counter + 小顶堆\r
\r
先用 \`Counter\` 统计频次，再维护一个大小最多为 \`k\` 的**小顶堆**（元素为 \`(频率, 数值)\`）：  \r
- 堆未满：直接入堆；  \r
- 堆已满：仅当当前频率 \`count\` 大于堆顶最小频率时，用 \`heapreplace\` 替换。  \r
\r
遍历结束后，堆里剩下的就是前 \`k\` 个高频元素。\r
\r
<pre class="code-gray">\r
import heapq\r
from collections import Counter\r
\r
\r
class Solution(object):\r
    def topKFrequent(self, nums, k):\r
        occurrences = Counter(nums)\r
\r
        heap = []\r
        for num, count in occurrences.items():\r
            if len(heap) == k:\r
                if count > heap[0][0]:\r
                    heapq.heapreplace(heap, (count, num))\r
            else:\r
                heapq.heappush(heap, (count, num))\r
\r
        return [num for count, num in heap]\r
</pre>\r
\r
### 思路解析（方法2）\r
\r
- **堆含义**：堆顶始终是当前候选集合中“频率最小”的元素，便于比较是否应该淘汰。\r
- **保留 top-k**：遍历所有不同元素后，堆中恰好保留频率最高的 \`k\` 个。\r
- **复杂度**：设不同元素个数为 \`m\`，堆大小为 \`k\`，时间约 **O(m log k)**，空间 **O(m + k)**（\`Counter\` + 堆）。\r
\r
<a id="q295"></a>\r
\r
## LeetCode 295. 数据流的中位数 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**困难。** 中位数是有序整数列表中间的数；若个数为偶数，则为中间两数的**平均值**。\r
\r
实现 \`MedianFinder\`：\r
\r
- \`MedianFinder()\` 初始化；\r
- \`addNum(num)\` 从数据流加入整数；\r
- \`findMedian()\` 返回当前所有元素的中位数（与真实值误差在 \`10^-5\` 内即可）。\r
\r
### 测试样例（节选）\r
\r
- \`addNum(1)\`，\`addNum(2)\`，\`findMedian()\` → \`1.5\`；再 \`addNum(3)\`，\`findMedian()\` → \`2.0\`。\r
\r
### 提示\r
\r
- \`-10^5 ≤ num ≤ 10^5\`\r
- 首次调用 \`findMedian\` 前数据结构中**至少有一个**元素\r
- \`addNum\` 与 \`findMedian\` 合计最多调用 \`5 * 10^4\` 次\r
\r
### 代码（Python）：双堆（小顶堆 + 大顶堆模拟）\r
\r
\`queMin\` 存**较小一半**（用 \`heapq\` 存负数模拟**大顶堆**，堆顶为较小一半中的**最大值**）；\`queMax\` 为**小顶堆**，存**较大一半**，堆顶为较大一半中的**最小值**。始终保持 **\`len(queMin) == len(queMax)\`** 或 **\`len(queMin) == len(queMax) + 1\`**。\`findMedian\`：总个数为偶数时取两堆顶平均；为奇数时中位数在元素较多的一侧，即 **\`queMin\`** 堆顶（取负还原）。\r
\r
<pre class="code-gray">\r
import heapq\r
\r
\r
class MedianFinder(object):\r
\r
    def __init__(self):\r
        self.queMin = []\r
        self.queMax = []\r
\r
    def addNum(self, num):\r
        """\r
        :type num: int\r
        :rtype: None\r
        """\r
        if not self.queMin:\r
            heapq.heappush(self.queMin, -num)\r
        elif num <= -self.queMin[0]:\r
            heapq.heappush(self.queMin, -num)\r
            if len(self.queMin) - len(self.queMax) >= 2:\r
                temp = -heapq.heappop(self.queMin)\r
                heapq.heappush(self.queMax, temp)\r
        elif num > -self.queMin[0]:\r
            heapq.heappush(self.queMax, num)\r
            if len(self.queMax) > len(self.queMin):\r
                temp = heapq.heappop(self.queMax)\r
                heapq.heappush(self.queMin, -temp)\r
\r
    def findMedian(self):\r
        """\r
        :rtype: float\r
        """\r
        if not self.queMin:\r
            return 0.0\r
        if (len(self.queMax) + len(self.queMin)) % 2 == 0:\r
            return float(self.queMax[0] - self.queMin[0]) / 2\r
        else:\r
            return float(-self.queMin[0])\r
</pre>\r
\r
### 思路解析\r
\r
- **不变式**：\`queMin\` 存较小半区（用负数实现大顶堆），\`queMax\` 存较大半区；两堆大小至多差 1，且较小半区元素个数**不少于**较大半区（奇数时多出的一个在中位数左侧堆顶）。\r
- **偶数长度**：中位数为 **\`(queMax[0] + (-queMin[0])) / 2\`**，写成 **\`(queMax[0] - queMin[0]) / 2\`**（因 \`queMin\` 存负值）。\r
- **空结构**：题目保证 \`findMedian\` 调用前已有数据；若 \`queMin\` 仍空，返回 **\`0.0\`** 仅为防御写法。\r
- **复杂度**：每次 \`addNum\` 堆操作 **O(log n)**，\`findMedian\` **O(1)**；\`n\` 为当前元素个数。\r
`,r6=`---
title: "Leetcode 面试150题（删除有序数组中的重复项 II、分发糖果、用最少数量的箭引爆气球、旋转链表、不同路径 II）"
date: "2026-05-25"
tags: ["Leetcode", "面试150", "数组", "链表", "双指针", "贪心", "动态规划", "刷题笔记"]
---

<a id="top"></a>

**题号直达：** [80 删除有序数组中的重复项 II](#q80) ｜ [135 分发糖果](#q135) ｜ [452 用最少数量的箭引爆气球](#q452) ｜ [61 旋转链表](#q61) ｜ [63 不同路径 II](#q63)

<a id="q80"></a>

## LeetCode 80. 删除有序数组中的重复项 II <sub>[↑](#top)</sub>

### 题目

给定一个**非递减有序**整数数组 \`nums\`，**原地**删除重复元素，使每个**不同数值**最多出现**两次**。返回删除后新数组的长度 \`k\`；\`nums\` 的前 \`k\` 个元素即为结果（顺序不变）。

**说明**：数组以**引用**传入，函数内修改对调用方可见；评测根据你返回的长度 \`k\` 检查 \`nums[0 … k-1]\`。

**要求**：不要使用额外数组；在 **O(1)** 额外空间下完成。

### 测试样例

- **示例 1：** \`nums = [1, 1, 1, 2, 2, 3]\`  
  输出：\`5\`  
  解释：前 5 个元素为 \`[1, 1, 2, 2, 3]\`。
- **示例 2：** \`nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]\`  
  输出：\`7\`  
  解释：前 7 个元素为 \`[0, 0, 1, 1, 2, 3, 3]\`。

### 提示

- \`1 <= nums.length <= 3 * 10^4\`
- \`-10^4 <= nums[i] <= 10^4\`
- \`nums\` 已按非递减序排列

### 代码（Python）

<pre class="code-gray">
class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = 1
        prev = nums[0]
        end = len(nums) - 1
        i = 1
        while i <= end:
            if nums[i] == prev:
                if count == 1:
                    count += 1
                    i = i + 1
                else:
                    nums.pop(i)
                    end -= 1
            else:
                prev = nums[i]
                count = 1
                i = i + 1
        return end + 1
</pre>

### 思路解析

用 **\`prev\`** 记录当前段数值，**\`count\`** 表示该值已连续保留的个数（最多允许到 \`2\`）。指针 **\`i\`** 从左向右扫到 **\`end\`**（有效区间右边界，**\`pop\`** 后 **\`end\`** 左移）。

- 与 **\`prev\` 相同**且 **\`count == 1\`**：第二次出现，保留并 **\`count += 1\`**，**\`i\`** 前进。  
- 与 **\`prev\` 相同**且已有两次：用 **\`nums.pop(i)\`** 删掉当前位，**\`end -= 1\`**，**\`i\` 不动**（后面元素前移）。  
- 遇到新值：更新 **\`prev\`**，**\`count\` 重置为 1**，**\`i\`** 前进。

扫描结束后，有效长度为 **\`end + 1\`**，作为返回值。

- **时间复杂度**：**O(n²)** 量级（\`pop\` 可能触发后续元素整体前移；若改用双指针写入可优化为 **O(n)**）。  
- **额外空间**：**O(1)**。

<a id="q135"></a>

## LeetCode 135. 分发糖果 <sub>[↑](#top)</sub>

### 题目

\`n\` 个孩子站成一排，整数数组 \`ratings\` 表示每个孩子的评分。按规则分糖果：

1. 每个孩子至少 **1** 颗糖。  
2. 相邻两个孩子中，**评分更高**者必须拿到**更多**糖。

返回满足条件所需的**最少糖果总数**。

### 测试样例

- **示例 1：** \`ratings = [1, 0, 2]\`  
  输出：\`5\`  
  解释：可分配 \`[2, 1, 2]\`，总和为 \`5\`。
- **示例 2：** \`ratings = [1, 2, 2]\`  
  输出：\`4\`  
  解释：可分配 \`[1, 2, 1]\`；第三位评分未高于右邻，只需 \`1\` 颗。

### 提示

- \`n == ratings.length\`
- \`1 <= n <= 2 * 10^4\`
- \`0 <= ratings[i] <= 2 * 10^4\`

### 代码（Python）

<pre class="code-gray">
class Solution(object):
    def candy(self, ratings):
        """
        :type ratings: List[int]
        :rtype: int
        """
        left = [0] * len(ratings)
        left[0] = 1
        right = [0] * len(ratings)
        right[-1] = 1
        merge = []
        for i in range(1, len(ratings)):
            if ratings[i - 1] < ratings[i]:
                left[i] = left[i - 1] + 1
            else:
                left[i] = 1

        for i in range(1, len(ratings)):
            if ratings[len(ratings) - 1 - i] > ratings[len(ratings) - i]:
                right[len(ratings) - 1 - i] = right[len(ratings) - i] + 1
            else:
                right[len(ratings) - 1 - i] = 1

        for i in range(0, len(ratings)):
            merge.append(max(left[i], right[i]))

        return sum(merge)
</pre>

### 思路解析

**两次贪心扫描**，分别满足「比左邻高则多拿」与「比右邻高则多拿」：

- **\`left[i]\`**：只根据左侧关系，从左到右递推；若 **\`ratings[i-1] < ratings[i]\`** 则 **\`left[i] = left[i-1] + 1\`**，否则为 **\`1\`**。  
- **\`right[i]\`**：只根据右侧关系，从右到左递推（代码中用下标 **\`len-1-i\`** 实现）；若当前位评分高于右邻则 **\`right\` 在右邻基础上 +1**，否则为 **\`1\`**。

每个孩子同时要满足左右两侧约束，故实际糖果数为 **\`max(left[i], right[i])\`**，再求和。

- **时间复杂度**：**O(n)**。  
- **空间复杂度**：**O(n)**（\`left\`、\`right\`、\`merge\` 数组）。

<a id="q452"></a>

## LeetCode 452. 用最少数量的箭引爆气球 <sub>[↑](#top)</sub>

### 题目

在二维平面上，若干球形气球水平直径落在 x 轴上，用二维数组 \`points\` 表示，其中 **\`points[i] = [x_start, x_end]\`** 为第 \`i\` 个气球的直径范围（y 坐标任意）。

沿 x 轴某点竖直向上射箭，若 **\`x_start <= x <= x_end\`**，则该箭可引爆覆盖该 x 的气球；一支箭射出后沿同一 x 无限向上。

求引爆**全部**气球所需的**最少箭数**。

### 测试样例

- **示例 1：** \`points = [[10,16],[2,8],[1,6],[7,12]]\`  
  输出：\`2\`  
  解释：例如在 \`x = 6\` 射一箭可引爆 \`[2,8]\`、\`[1,6]\`，在 \`x = 11\` 再射一箭可引爆 \`[10,16]\`、\`[7,12]\`。
- **示例 2：** \`points = [[1,2],[3,4],[5,6],[7,8]]\`  
  输出：\`4\`  
  解释：区间互不重叠，每个气球各需一箭。

### 提示

- \`points.length == n\`
- \`1 <= n <= 10^5\`
- \`points[i].length == 2\`
- \`-2^31 <= x_start < x_end <= 2^31 - 1\`

### 代码（Python）

<pre class="code-gray">
class Solution(object):
    def findMinArrowShots(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
        if not points:
            return 0

        points.sort(key=lambda balloon: balloon[1])
        pos = points[0][1]
        ans = 1
        for balloon in points:
            if balloon[0] > pos:
                pos = balloon[1]
                ans += 1

        return ans
</pre>

### 思路解析

**贪心**：按区间**右端点 \`x_end\`** 升序排序。第一支箭尽量打在「当前组」最靠右的公共位置，取最早结束区间的 **\`x_end\`** 为 **\`pos\`**。

从左到右扫：若当前气球 **\`x_start > pos\`**，说明与上一支箭的覆盖点不重叠，需要**新射一箭**，令 **\`pos = 当前 x_end\`**，**\`ans += 1\`**；否则该气球已被 **\`pos\`** 处的箭覆盖。

- **时间复杂度**：**O(n log n)**（排序主导）。  
- **空间复杂度**：**O(1)** 或 **O(log n)**（排序栈，视实现而定）。

<a id="q61"></a>

## LeetCode 61. 旋转链表 <sub>[↑](#top)</sub>

### 题目

给定链表头节点 \`head\`，将链表**向右旋转** \`k\` 个位置后，返回新的头节点。

### 测试样例

- **示例 1：** \`head = [1, 2, 3, 4, 5]\`，\`k = 2\`  
  输出：\`[4, 5, 1, 2, 3]\`
- **示例 2：** \`head = [0, 1, 2]\`，\`k = 4\`  
  输出：\`[0, 1, 2]\`  
  解释：\`k\` 大于长度时等价于 \`k % length\` 次旋转。

### 提示

- 链表中节点数目范围 \`[0, 500]\`
- \`-100 <= Node.val <= 100\`
- \`0 <= k <= 2 * 10^9\`

### 代码（Python）

<pre class="code-gray">
class Solution(object):
    def rotateRight(self, head, k):
        """
        :type head: Optional[ListNode]
        :type k: int
        :rtype: Optional[ListNode]
        """
        if not head:
            return None
        length = 0
        p = head
        while p.next:
            p = p.next
            length = length + 1
        length += 1
        k = (k - 1) % length + 1
        if k == length:
            return head
        p = head
        for i in range(length - k - 1):
            p = p.next
        nex = p.next
        ans = nex
        p.next = None
        while nex.next is not None:
            nex = nex.next
        nex.next = head
        return ans
</pre>

### 思路解析

1. **求长度 \`length\`**：走到尾节点计数（单节点时 \`while p.next\` 不进入，再 **\`length += 1\`**）。
2. **规范化 \`k\`**：用 **\`k = (k - 1) % length + 1\`** 将旋转步数映射到 **\`1 … length\`**；若 **\`k == length\`** 则相当于转一整圈，直接返回 **\`head\`**。
3. **找断点**：从头走 **\`length - k - 1\`** 步，得到旋转前「新尾」节点 **\`p\`**；**\`p.next\`** 即为旋转后的新头 **\`ans\`**。
4. **拼接**：断开 **\`p.next\`**，尾指针 **\`nex\`** 走到原链表末尾，令 **\`nex.next = head\`**，完成「尾接原头」的右旋。

- **时间复杂度**：**O(n)**。  
- **空间复杂度**：**O(1)**。

<a id="q63"></a>

## LeetCode 63. 不同路径 II <sub>[↑](#top)</sub>

### 题目

给定 **\`m × n\`** 整数矩阵 \`obstacleGrid\`。**\`0\`** 表示空位，**\`1\`** 表示障碍。机器人从**左上角**出发，每次只能**向下**或**向右**，到达**右下角**；路径**不能经过障碍格**。

返回从起点到终点的**不同路径条数**。题目保证答案 **≤ 2 × 10^9**。

### 测试样例

- **示例 1：**

\`\`\`
obstacleGrid = [[0,0,0],
                [0,1,0],
                [0,0,0]]
\`\`\`

  输出：\`2\`

- **示例 2：**

\`\`\`
obstacleGrid = [[0,1],
                [0,0]]
\`\`\`

  输出：\`1\`

### 提示

- \`m == obstacleGrid.length\`
- \`n == obstacleGrid[i].length\`
- \`1 <= m, n <= 100\`
- \`obstacleGrid[i][j]\` 为 \`0\` 或 \`1\`

### 代码（Python）

<pre class="code-gray">
class Solution(object):
    def uniquePathsWithObstacles(self, obstacleGrid):
        """
        :type obstacleGrid: List[List[int]]
        :rtype: int
        """
        if obstacleGrid[0][0] == 1 or obstacleGrid[-1][-1]:
            return 0
        grid = []
        for i in range(len(obstacleGrid)):
            grid.append([0] * len(obstacleGrid[0]))
        grid[-1][-1] = 1  # 终点肯定只有一种走法

        # 最后一列
        for i in range(len(obstacleGrid) - 2, -1, -1):
            if obstacleGrid[i][-1] == 1:
                grid[i][-1] = 0
            else:
                grid[i][-1] = grid[i + 1][-1]

        # 最后一行
        for i in range(len(obstacleGrid[0]) - 2, -1, -1):
            if obstacleGrid[-1][i] == 1:
                grid[-1][i] = 0
            else:
                grid[-1][i] = grid[-1][i + 1]

        for i in range(len(obstacleGrid) - 2, -1, -1):
            for j in range(len(obstacleGrid[0]) - 2, -1, -1):
                if obstacleGrid[i][j] == 1:
                    grid[i][j] = 0
                else:
                    grid[i][j] = grid[i + 1][j] + grid[i][j + 1]

        return grid[0][0]
</pre>

### 思路解析

**从终点反推**：\`grid[i][j]\` 表示从 **\`(i, j)\`** 到右下角的路径数。起点或终点为障碍则直接 **\`0\`**；终点 **\`grid[-1][-1] = 1\`**。

先填**最后一列**（只能向下）与**最后一行**（只能向右）：遇障碍 **\`0\`**，否则继承下一格/右一格的方案数。再自右下向左上填内部：**\`grid[i][j] = grid[i+1][j] + grid[i][j+1]\`**（障碍处为 **\`0\`**）。答案为 **\`grid[0][0]\`**。

- **时间复杂度**：**O(m × n)**。  
- **空间复杂度**：**O(m × n)**（\`grid\` 表；可原地复用 \`obstacleGrid\` 优化）。
`,i6=`---\r
title: "Leetcode 链表 2（反转链表，回文链表，环形链表）"\r
date: "2026-03-16"\r
tags: ["Leetcode", "链表", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [206 反转链表](#q206) ｜ [234 回文链表](#q234) ｜ [141 环形链表](#q141)\r
\r
<a id="q206"></a>\r
\r
## LeetCode 206. 反转链表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你单链表的头节点 \`head\`，请你**反转链表**，并返回反转后的链表。\r
\r
### 提示\r
\r
- 链表中节点数目范围是 \\([0, 5000]\\)  \r
- \\(-5000 ≤ Node.val ≤ 5000\\)\r
\r
**进阶**：链表可以使用**迭代**或**递归**方式完成反转，你能否用两种方式都写一写？\r
\r
### 代码（Python）解法一：用数组记录节点，再倒序重连\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def reverseList(self, head):\r
        """\r
        :type head: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        if not head:\r
            return None\r
\r
        record = []\r
\r
        p = head\r
        while p:\r
            record.append(p)\r
            p = p.next\r
\r
        ans = record[-1]\r
        temp = ans\r
\r
        for i in range(1, len(record)):\r
            temp.next = record[len(record) - i - 1]\r
            temp = temp.next\r
\r
        temp.next = None\r
\r
        return ans\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **整体思路**：先顺序遍历链表，把每个节点指针依次存入数组 \`record\`；然后从数组最后一个节点开始，按倒序把 \`next\` 指针重新连起来，相当于把链表反向“串”回去。\r
- **注意点 1：空链表**：函数开头先判断 \`if not head: return None\`，避免后面对空指针取 \`next\` 或访问 \`record[-1]\` 时出错。\r
- **注意点 2：尾结点要指向 \`None\`**：重建完倒序链表后，最后一个节点的 \`next\` 仍然保留着原链表中的旧指向，必须显式设为 \`None\`（\`temp.next = None\`），否则会形成错误的链表结构，甚至可能产生环。\r
- **复杂度**：遍历一次构建数组，再遍历一次数组倒序连边，时间复杂度 \\(O(n)\\)，需要 \\(O(n)\\) 额外空间保存所有节点指针；符合题目时间要求，但没有做到原地 \\(O(1)\\) 空间，后续可以用原地迭代指针的写法优化空间。\r
\r
### 代码（Python）解法二：递归反转（从尾到头“归”回来）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def reverseList(self, head):\r
        """\r
        :type head: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        # 基本情况：空链表或只有一个节点\r
        if not head or not head.next:\r
            return head\r
        \r
        # 递归反转后续链表\r
        newHead = self.reverseList(head.next)\r
        \r
        # 将当前节点的下一个节点的 next 指向当前节点\r
        head.next.next = head\r
        # 将当前节点的 next 设为 None\r
        head.next = None\r
        \r
        return newHead\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **递归含义**：\`reverseList(head)\` 的语义是「反转从 \`head\` 开始的链表，并返回反转后的新头结点」。对当前节点 \`head\`，先递归处理 \`head.next\`，让 \`newHead\` 指向反转后的子链表头。\r
- **指针翻转**：当递归从最深处往回“归”时，\`head.next\` 已经是反转后子链表的尾部之一，此时把 \`head.next.next = head\`，相当于把当前节点挂到子链表尾部；再把 \`head.next = None\` 断开原来的正向链接，避免成环。\r
- **终止条件**：当遇到空链表或只有一个节点时直接返回 \`head\`，这一层作为最终的 \`newHead\` 一路返回到最外层。\r
- **复杂度与优缺点**：时间复杂度同样是 \\(O(n)\\)，空间复杂度由于递归栈为 \\(O(n)\\)。写法简洁、逻辑清晰，但要注意递归深度上限；在 Python 中节点数上限 \\(5000\\) 仍在默认递归深度允许范围内。\r
\r
---\r
\r
<a id="q234"></a>\r
\r
## LeetCode 234. 回文链表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个单链表的头节点 \`head\`，请你判断该链表是否为**回文链表**。如果是，返回 \`true\`；否则，返回 \`false\`。\r
\r
### 提示\r
\r
- 链表中节点数目在范围 \\([1, 10^5]\\) 内  \r
- \\(0 ≤ Node.val ≤ 9\\)\r
\r
**进阶**：你能否用 \\(O(n)\\) 时间复杂度和 \\(O(1)\\) 空间复杂度解决此题？\r
\r
### 代码（Python）解法一：把值拷贝到数组里做双指针\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def isPalindrome(self, head):\r
        """\r
        :type head: Optional[ListNode]\r
        :rtype: bool\r
        """\r
        if not head:\r
            return True\r
        \r
        record = []\r
        p = head\r
        while p != None:\r
            record.append(p.val)\r
            p = p.next\r
\r
        N = len(record) // 2\r
        for i in range(N):\r
            if record[i] != record[len(record) - 1 - i]:\r
                return False\r
\r
        return True\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **转化为数组回文判断**：顺序遍历链表，把每个节点的值依次压入数组 \`record\`。这样链表是否回文就等价于数组 \`record\` 是否回文。\r
- **双指针比较**：只需检查前一半元素是否和后一半对称相等：对每个 \`i ∈ [0, N-1]\`，判断 \`record[i]\` 是否等于 \`record[len(record) - 1 - i]\`，一旦有一对不相等就返回 \`False\`，全部通过则是回文。\r
- **边界情况**：当链表只有 0 或 1 个节点时，一定是回文，代码中 \`if not head: return True\` 覆盖了空链表；长度为 1 时 \`N = len(record) // 2\` 为 0，不会进入循环，也会返回 \`True\`。\r
- **复杂度与不足**：时间复杂度 \\(O(n)\\)，空间复杂度 \\(O(n)\\)（需要额外数组保存所有节点的值），实现简单直观；但没有达到进阶要求的 \\(O(1)\\) 额外空间，后续可以通过「反转后半段链表 + 原地比较」来优化空间。\r
\r
### 代码（Python）解法二：递归回溯 + 前后双指针\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def isPalindrome(self, head):\r
        self.front = head\r
        \r
        def check(node):\r
            if node:\r
                if not check(node.next):\r
                    return False\r
                if node.val != self.front.val:\r
                    return False\r
                self.front = self.front.next\r
            return True\r
            \r
        return check(head)\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **递归当作「从右往左」的指针**：\`recursivelyCheck(currentNode)\` 先一路递归到链表尾部，等递归开始回溯时，\`currentNode\` 会从尾结点开始不断往前走，相当于得到一个「从右往左」的遍历顺序。\r
- **前后双指针比较**：用成员变量 \`self.frontPointer\` 作为从左往右的指针，每次在回溯阶段比较 \`currentNode.val\` 与 \`self.frontPointer.val\`，若不相等直接返回 \`False\`；相等则把 \`self.frontPointer\` 向前挪一步，继续回溯上一层。\r
- **终止与短路**：如果某一层已经返回 \`False\`，上层递归直接短路返回 \`False\`；若所有层都通过比较，则最终返回 \`True\`。\r
- **复杂度**：时间复杂度仍为 \\(O(n)\\)，需要 \\(O(n)\\) 的递归栈空间；相比数组法节省了显式的数组存储，但仍不满足进阶的 \\(O(1)\\) 额外空间，更多体现的是「利用递归回溯模拟双向扫描」的思路。\r
---\r
\r
<a id="q141"></a>\r
\r
## LeetCode 141. 环形链表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个链表的头节点 \`head\`，判断链表中是否**存在环**。\r
\r
如果链表中存在某个节点，可以通过连续跟踪 \`next\` 指针再次到达，则链表中存在环。  \r
为了表示给定链表中的环，评测系统内部使用整数 \`pos\` 来表示链表尾连接到链表中的位置（索引从 0 开始）。**注意：\`pos\` 仅用于标识环的实际情况，不作为参数传递。**\r
\r
如果链表中存在环，则返回 \`true\`；否则，返回 \`false\`。\r
\r
### 提示\r
\r
- 链表中节点数目在范围 \\([0, 10^4]\\) 以内  \r
- \\(-10^5 ≤ Node.val ≤ 10^5\\)  \r
- \`pos\` 为 \`-1\` 或者链表中的一个有效索引\r
\r
**进阶**：你能否使用 \\(O(1)\\)（即常量）内存解决此题？\r
\r
### 代码（Python）解法一：用列表记录访问过的节点\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def hasCycle(self, head):\r
        """\r
        :type head: ListNode\r
        :rtype: bool\r
        """\r
        record = []\r
        p = head\r
        while p:\r
            if p in record:\r
                return True\r
            record.append(p)\r
            p = p.next\r
        return False\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **核心想法**：顺着链表往后走的过程中，用容器 \`record\` 记录**已经访问过的节点指针**。每访问到一个新节点 \`p\`，先判断它是否已经在 \`record\` 中：如果是，说明我们又回到了之前访问过的节点，链表存在环；若不是，再把它加入 \`record\` 继续向后走，直到指针为 \`None\`。\r
- **等价表述**：本质上是在遍历时「检查是否访问过同一个节点两次」，这和图论里通过标记结点判断是否成环的思路类似，只不过这里结构是单向链表。\r
- **边界情况**：当 \`head\` 为 \`None\` 或链表最终走到 \`p is None\` 时，说明尾结点指向的是 \`None\`，不可能存在环，函数返回 \`False\`。\r
- **复杂度与不足**：当前实现使用列表存指针、用 \`p in record\` 做查找，最坏情况下时间复杂度接近 \\(O(n^2)\\)；可以将 \`record\` 改为 \`set()\` 把查找平均降到 \\(O(1)\\)。总体空间复杂度为 \\(O(n)\\)，需要额外存储访问过的节点，未达到进阶要求的 \\(O(1)\\) 额外空间；进阶通常使用快慢指针（Floyd 判圈）实现常数空间。\r
\r
### 代码（Python）解法二：快慢指针（Floyd 判圈算法）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def hasCycle(self, head):\r
        """\r
        :type head: ListNode\r
        :rtype: bool\r
        """\r
        if not head or not head.next:\r
            return False\r
\r
        slow = head\r
        fast = head.next\r
\r
        while fast is not None and fast.next is not None:\r
            fast = fast.next.next\r
            slow = slow.next\r
            if fast == slow:\r
                return True\r
        \r
        return False\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **快慢指针直观理解**：同时从头结点出发设置两个指针——\`slow\` 每次走一步，\`fast\` 每次走两步。如果链表中存在环，那么「快」指针总会在环内追上「慢」指针（类似操场上两人绕圈跑），一旦 \`fast == slow\`，即可判定有环。\r
- **无环情况**：如果链表没有环，\`fast\` 或 \`fast.next\` 总会先走到 \`None\`，循环条件 \`fast is not None and fast.next is not None\` 失败，从而跳出循环并返回 \`False\`。\r
- **边界处理**：开头用 \`if not head or not head.next\` 过滤掉长度为 0 或 1 的链表，这两种情况不可能成环（因为题意中尾指针要么指向某个节点，要么为 \`None\`）。\r
- **复杂度与优点**：时间复杂度为 \\(O(n)\\)，空间复杂度为 \\(O(1)\\)，只使用了常数个指针变量，是满足进阶要求的经典解法；相比解法一不需要额外的数组或集合存储访问记录。\r
\r
\r
`,s6=`---\r
title: "Leetcode 链表 3（合并有序链表，环形链表 II，两数相加，删除倒数第 N 个结点，两两交换链表中的节点）"\r
date: "2026-03-19"\r
tags: ["Leetcode", "链表", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [21 合并两个有序链表](#q21) ｜ [142 环形链表 II](#q142) ｜ [2 两数相加](#q2) ｜ [19 删除链表的倒数第 N 个结点](#q19) ｜ [24 两两交换链表中的节点](#q24)\r
\r
<a id="q21"></a>\r
\r
## LeetCode 21. 合并两个有序链表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
将两个升序链表合并为一个新的**升序**链表并返回。新链表是通过**拼接给定的两个链表的所有节点**组成的。\r
\r
### 提示\r
\r
- 两个链表的节点数目范围是 \\([0, 50]\\)  \r
- \\(-100 ≤ Node.val ≤ 100\\)  \r
- \`list1\` 和 \`list2\` 均按**非递减顺序**排列\r
\r
示意图如下：\r
\r
![合并两个有序链表示意图](Leetcode/0318_2.png)\r
\r
### 代码（Python）解法一：双指针原地拼接\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def mergeTwoLists(self, list1, list2):\r
        """\r
        :type list1: Optional[ListNode]\r
        :type list2: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        if not list1:\r
            return list2\r
\r
        if not list2:\r
            return list1\r
\r
        p1 = list1\r
        p2 = list2\r
\r
        if list1.val < list2.val:\r
            p = list1\r
            p1 = p1.next\r
        else:\r
            p = list2\r
            p2 = p2.next\r
\r
        while p1 is not None and p2 is not None:\r
            if p1.val < p2.val:\r
                p.next = p1\r
                p = p.next\r
                p1 = p1.next\r
            else:\r
                p.next = p2\r
                p = p.next\r
                p2 = p2.next\r
\r
        if not p1:\r
            while p2 is not None:\r
                p.next = p2\r
                p = p.next\r
                p2 = p2.next\r
        else:\r
            while p1 is not None:\r
                p.next = p1\r
                p = p.next\r
                p1 = p1.next\r
\r
        if list1.val < list2.val:\r
            return list1\r
        else:\r
            return list2\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **双指针归并**：维护两个指针 \`p1\`、\`p2\` 分别指向 \`list1\`、\`list2\` 当前尚未合并的节点，每次从二者中选取较小值接到结果链表的尾部，并向前推进对应指针，类似归并排序中的「归并」步骤。\r
- **选择头结点**：先比较 \`list1.val\` 和 \`list2.val\`，较小者作为最终结果链表的头结点 \`p\`，同时把对应的 \`p1\` / \`p2\` 向前移动一位，后续在同一条链上继续追加。\r
- **处理剩余部分**：当其中一条链表先走到末尾后，只需把另一条链表剩下的部分整体接到结果尾部即可（代码中通过两个 \`while\` 补齐）。\r
- **返回值注意点**：最后返回的头结点必须是最开始选出来的那个较小值结点，因此根据初始比较结果在末尾返回 \`list1\` 或 \`list2\`。\r
- **复杂度**：每个节点只被访问一次并接到结果链表上，时间复杂度 \\(O(m + n)\\)，其中 \\(m, n\\) 为两条链表长度；空间复杂度 \\(O(1)\\)，仅使用了常数个指针，在原有链表节点上「原地重连」。\r
\r
### 代码（Python）解法二：递归归并（写法更简洁）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def mergeTwoLists(self, list1, list2):\r
        """\r
        :type list1: Optional[ListNode]\r
        :type list2: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        if not list1:\r
            return list2\r
        elif not list2:\r
            return list1\r
        elif list1.val < list2.val:\r
            list1.next = self.mergeTwoLists(list1.next, list2)\r
            return list1\r
        else:\r
            list2.next = self.mergeTwoLists(list1, list2.next)\r
            return list2\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **递归含义**：\`mergeTwoLists(list1, list2)\` 的语义是「将 \`list1\` 和 \`list2\` 合并成一个有序链表并返回头结点」。在每一层递归中，从当前两个头结点中选出较小者作为本层的头结点，并递归地合并剩余部分。\r
- **状态转移**：\r
  - 若 \`list1\` 为空，直接返回 \`list2\`；若 \`list2\` 为空，直接返回 \`list1\`；\r
  - 若 \`list1.val < list2.val\`，则 \`list1\` 应该排在前面，其余部分变为合并 \`list1.next\` 和 \`list2\` 的结果，即 \`list1.next = mergeTwoLists(list1.next, list2)\`；\r
  - 否则对称地处理 \`list2\`。\r
- **递归终止**：当任一链表被耗尽（为空）时，返回另一条链表的剩余部分作为尾巴。\r
- **复杂度**：每个节点仍然只会被访问一次并连接到结果链表上，时间复杂度 \\(O(m + n)\\)，空间复杂度由于递归栈为 \\(O(m + n)\\)。相比迭代写法更短、更接近题意，但在 Python 中要注意递归深度上限。\r
\r
---\r
\r
<a id="q142"></a>\r
\r
## LeetCode 142. 环形链表 II <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个链表的头节点 \`head\`，返回链表开始入环的第一个节点。  \r
如果链表**无环**，则返回 \`null\`。\r
\r
评测系统内部使用整数 \`pos\` 来表示链表尾连接到链表中的位置（索引从 0 开始）。\`pos = -1\` 表示链表无环。**注意：\`pos\` 仅用于标识环的实际情况，不作为函数参数传入。**\r
\r
### 提示\r
\r
- 链表中节点数目在范围 \\([0, 10^4]\\) 内  \r
- \\(-10^5 ≤ Node.val ≤ 10^5\\)  \r
- \`pos\` 的值为 \`-1\` 或者链表中的一个有效索引\r
\r
**进阶**：你能否使用 \\(O(1)\\)（即常量）内存解决此问题？\r
\r
### 代码（Python）解法一：用列表记录访问过的节点，第一次重复即为入环点\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def detectCycle(self, head):\r
        """\r
        :type head: ListNode\r
        :rtype: ListNode\r
        """\r
        if not head or not head.next:\r
            return None\r
\r
        p = head\r
        record = []\r
        while p is not None:\r
            if p in record:\r
                return p\r
            record.append(p)\r
            p = p.next\r
            \r
        return None\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **整体思路**：从头指针 \`head\` 出发顺着 \`next\` 一直向后遍历，同时维护一个容器 \`record\` 保存已经访问过的节点指针。遍历过程中：\r
  - 如果当前节点 \`p\` **已经**出现在 \`record\` 中，说明我们**第二次**到达了同一个节点，它正是环的入口（因为从入口开始再次回到自身）；立即返回这个节点；\r
  - 否则就把 \`p\` 加入 \`record\`，继续向后走。\r
- **无环情况**：若最终遍历到 \`p is None\`，说明尾指针指向 \`None\`，链表中不存在环，返回 \`None\`。\r
- **与 141 题的区别**：141 题只需要回答「有无环」，在第一次检测到重复节点时即可返回 \`True\`；本题则需要返回**入环的节点本身**，因此在检测到重复时返回 \`p\`。\r
- **复杂度与不足**：\r
  - 时间复杂度：在当前实现中，\`record\` 使用列表存储，\`p in record\` 为线性查找，最坏情况下时间复杂度接近 \\(O(n^2)\\)；\r
  - 空间复杂度：需要 \\(O(n)\\) 额外空间保存访问过的节点指针；\r
  - 若将 \`record\` 改为 \`set()\`，可以把查找均摊降到 \\(O(1)\\)，整体时间复杂度为 \\(O(n)\\)，但仍然没有达到进阶要求的 \\(O(1)\\) 额外空间；要实现常数空间，通常需要在快慢指针判环的基础上，再做一次指针“对齐”来精确定位环的入口。\r
\r
### 代码（Python）解法二：快慢指针 + 数学推导定位入环点\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def detectCycle(self, head):\r
        """\r
        :type head: ListNode\r
        :rtype: ListNode\r
        """\r
        if not head or not head.next:\r
            return None\r
\r
        slow = head          # 乌龟节点\r
        fast = head.next     # 兔子节点\r
        while fast is not None and fast.next is not None:\r
            fast = fast.next.next\r
            slow = slow.next\r
            if fast == slow:\r
                break\r
\r
        if fast is None or fast.next is None:\r
            return None\r
            \r
        slow = slow.next\r
\r
        ptr = head\r
        while ptr is not None:\r
            if ptr == slow:\r
                return slow\r
            ptr = ptr.next\r
            slow = slow.next\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **先用快慢指针判断是否有环**：和 141 题类似，用 \`slow\` 每次走一步、\`fast\` 每次走两步。如果最终 \`fast\` 或 \`fast.next\` 先走到 \`None\`，说明无环，直接返回 \`None\`；否则在某个时刻会有 \`fast == slow\`，说明指针相遇于环内某一点。\r
- **为什么能找到入环点**：设链表起点到入环点距离为 \\(a\\)，入环点到相遇点距离为 \\(b\\)，环长度为 \\(c\\)。可推出当快慢指针第一次相遇时：\r
  - 慢指针走了 \\(a + b\\)；\r
  - 快指针走了 \\(a + b + k \\cdot c\\)（多绕了若干圈）；\r
  - 又因为快指针速度是慢指针 2 倍，有 \\(2(a + b) = a + b + k \\cdot c\\)，从而得到 \\(a = k \\cdot c - b\\)。  \r
  这说明从**相遇点再走 \\(k \\cdot c - b\\) 步**就能回到入环点；而从链表头节点走 \\(a\\) 步也正好到入环点。\r
- **指针对齐定位入口**：在代码中，让 \`slow\` 从相遇点（这里先补走一步到真正的相遇位置）继续每次走一步，同时新指针 \`ptr\` 从 \`head\` 出发，每次走一步。根据上面的推导，当 \`ptr == slow\` 时，两者恰好在入环点相遇，即为所求。\r
- **复杂度与优势**：时间复杂度 \\(O(n)\\)，空间复杂度 \\(O(1)\\)，只用了常数个指针变量，是满足进阶要求的标准做法；相比解法一不需要额外容器存储访问记录。\r
\r
<img src="Leetcode/0318.png" alt="环形链表 II 快慢指针定位入口示意图" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
---\r
\r
<a id="q2"></a>\r
\r
## LeetCode 2. 两数相加 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你两个**非空**的链表，表示两个非负的整数。它们每位数字都是按照**逆序**的方式存储的，并且每个节点只能存储**一位**数字。\r
\r
请你将两个数相加，并以相同形式返回一个表示和的链表。\r
\r
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。\r
\r
### 示例\r
\r
- **输入**：\`l1 = [9, 9, 9, 9, 9, 9, 9]\`，\`l2 = [9, 9, 9, 9]\`\r
- **输出**：\`[8, 9, 9, 9, 0, 0, 0, 1]\`（表示 9,999,999 + 9,999 = 10,009,998）\r
\r
### 提示\r
\r
- 每个链表中的节点数在范围 \\([1, 100]\\) 内\r
- \\(0 ≤ Node.val ≤ 9\\)\r
- 题目数据保证列表表示的数字不含前导零（除了数字 0 本身）\r
\r
### 代码（Python）解法一：分阶段模拟\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
class Solution(object):\r
    def addTwoNumbers(self, l1, l2):\r
        """\r
        :type l1: Optional[ListNode]\r
        :type l2: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        p = ListNode(0)\r
        head = p\r
        record = 0\r
        while l1 and l2:\r
            p.val = (l1.val + l2.val + record) % 10\r
            record = (l1.val + l2.val + record) // 10\r
            l1 = l1.next\r
            l2 = l2.next\r
            if l1 or l2:\r
                p.next = ListNode(0)\r
                p = p.next\r
\r
        if not l1:\r
            while l2 != None:\r
                p.val = (record + l2.val) % 10\r
                record = (record + l2.val) // 10\r
                if l2.next:\r
                    p.next = ListNode(0)\r
                    p = p.next  \r
                l2 = l2.next\r
\r
        else:\r
            while l1 != None:\r
                p.val = (record + l1.val) % 10\r
                record = (record + l1.val) // 10\r
                if l1.next:\r
                    p.next = ListNode(0)\r
                    p = p.next\r
                l1 = l1.next\r
\r
        if record != 0:\r
            p.next = ListNode(record)\r
\r
        return head\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **整体思路**：模拟竖式加法，同时遍历两条链表，逐位相加并处理进位。用 \`record\` 记录进位（0 或 1），每次 \`(l1.val + l2.val + record) % 10\` 得到当前位，\`// 10\` 得到新的进位。\r
- **分阶段处理**：先处理两条链表都未走完的部分（\`while l1 and l2\`），再根据哪条链表更长，单独处理剩余部分；最后若仍有进位（\`record != 0\`），需要新建一个节点。\r
- **创建新链表**：使用虚拟头 \`head\` 和指针 \`p\` 逐步构建结果链表，每次需要继续时创建 \`ListNode(0)\` 并移动 \`p\`。\r
- **复杂度**：每个节点最多访问一次，时间复杂度 \\(O(\\max(m, n))\\)，空间复杂度 \\(O(\\max(m, n))\\) 用于存储结果链表。\r
\r
### 代码（Python）解法二：哑节点统一循环（更简洁）\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
class Solution(object):\r
    def addTwoNumbers(self, l1, l2):\r
        """\r
        :type l1: Optional[ListNode]\r
        :type l2: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        dummy = ListNode(0)  # 创建哑节点\r
        current = dummy\r
        carry = 0  # 进位\r
        \r
        while l1 or l2 or carry:\r
            # 获取当前位的值\r
            val1 = l1.val if l1 else 0\r
            val2 = l2.val if l2 else 0\r
            \r
            # 计算当前位的和及进位\r
            total = val1 + val2 + carry\r
            carry = total // 10\r
            current.next = ListNode(total % 10)\r
            \r
            # 移动指针\r
            current = current.next\r
            if l1:\r
                l1 = l1.next\r
            if l2:\r
                l2 = l2.next\r
        \r
        return dummy.next  # 返回哑节点的下一个节点（真正的头节点）\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **本质相同**：与解法一相同，均为模拟竖式加法的思路，逐位相加并处理进位。\r
- **哑节点 + 统一循环**：使用哑节点 \`dummy\` 后，只需一个 \`while l1 or l2 or carry\` 即可覆盖所有情况——两条链表都未走完、仅剩一条、以及最后进位，无需分阶段写三个分支。\r
- **写法更简洁**：用 \`val1 = l1.val if l1 else 0\` 处理空指针，逻辑更集中，代码更短。\r
\r
---\r
\r
<a id="q19"></a>\r
\r
## LeetCode 19. 删除链表的倒数第 N 个结点 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个链表，删除链表的倒数第 \\(n\\) 个结点，并且返回链表的头结点。\r
\r
### 提示\r
\r
- 链表中结点的数目为 \\(sz\\)\r
- \\(1 ≤ sz ≤ 30\\)\r
- \\(0 ≤ Node.val ≤ 100\\)\r
- \\(1 ≤ n ≤ sz\\)\r
\r
**进阶**：你能尝试使用一趟扫描实现吗？\r
\r
### 代码（Python）解法一：双指针一趟扫描\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
class Solution(object):\r
    def removeNthFromEnd(self, head, n):\r
        """\r
        :type head: Optional[ListNode]\r
        :type n: int\r
        :rtype: Optional[ListNode]\r
        """\r
        front = head\r
        rear = head\r
        for i in range(n):\r
            front = front.next\r
\r
        if front == None:\r
            return head.next\r
\r
        front = front.next\r
\r
        while front != None:\r
            front = front.next\r
            rear = rear.next\r
\r
        rear.next = rear.next.next\r
        return head\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **双指针思路**：用 \`front\` 和 \`rear\` 两个指针，让 \`front\` 比 \`rear\` 超前 \\(n+1\\) 个节点。当 \`front\` 走到链表末尾（\`None\`）时，\`rear\` 恰好在待删除节点的前一个，执行 \`rear.next = rear.next.next\` 即可删除。\r
- **先让 front 超前 n 步**：\`for i in range(n)\` 后，\`front\` 指向第 \\(n\\) 个节点（从 1 计数）；再执行一次 \`front = front.next\`，使 \`front\` 超前 \`rear\` 共 \\(n+1\\) 步。\r
- **删除头结点**：若 \`front\` 在第一次循环后即为 \`None\`，说明链表长度为 \\(n\\)，待删除的是头结点，直接返回 \`head.next\`。\r
- **一趟扫描**：满足进阶要求，时间复杂度 \\(O(sz)\\)，空间复杂度 \\(O(1)\\)。\r
\r
### 代码（Python）解法二：递归（利用回溯得到倒序位置）\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
\r
class Solution(object):\r
    def removeNthFromEnd(self, head, n):\r
        """\r
        :type head: Optional[ListNode]\r
        :type n: int\r
        :rtype: Optional[ListNode]\r
        """\r
        dummy = ListNode(0)  # Java中的无参构造对应Python的默认值\r
        dummy.next = head\r
        self._remove(dummy, n)\r
        return dummy.next\r
    \r
    def _remove(self, head, n):\r
        """\r
        :type head: ListNode\r
        :type n: int\r
        :rtype: int\r
        """\r
        if head.next is None:\r
            return 1\r
        \r
        num = self._remove(head.next, n)\r
        if num == n:\r
            head.next = head.next.next\r
        return num + 1\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **递归核心**：\`_remove(head, n)\` 的返回值表示「从当前 \`head\` 到链表末尾共有多少个节点」。递归先一路到底（\`head.next is None\` 时返回 1），回溯时 \`num\` 从尾到头递增，相当于从后往前数。\r
- **何时删除**：当回溯到某一层时 \`num == n\`，说明当前 \`head.next\` 正是倒数第 \\(n\\) 个节点，执行 \`head.next = head.next.next\` 即可删除。\r
- **哑节点**：在 \`head\` 前加哑节点 \`dummy\`，可统一处理删除头结点的情况，最后返回 \`dummy.next\`。\r
- **规律总结**：链表倒序相关的问题（如倒数第 k 个、从尾到头遍历等）总可以采用递归方法，利用递归回溯时「从尾到头」的顺序自然得到倒序信息。\r
- **复杂度**：时间复杂度 \\(O(sz)\\)，空间复杂度 \\(O(sz)\\)（递归栈深度）。\r
\r
---\r
\r
<a id="q24"></a>\r
\r
## LeetCode 24. 两两交换链表中的节点 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。\r
\r
### 提示\r
\r
- 链表中节点的数目在范围 \\([0, 100]\\) 内\r
- \\(0 ≤ Node.val ≤ 100\\)\r
\r
### 代码（Python）解法一：递归\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def swapPairs(self, head):\r
        """\r
        :type head: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        if head == None or head.next == None:\r
            return head\r
\r
        newHead = head.next\r
        head.next = self.swapPairs(newHead.next)\r
        newHead.next = head\r
        return newHead\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **递归含义**：\`swapPairs(head)\` 表示「对以 \`head\` 为头的链表进行两两交换，并返回交换后的新头结点」。\r
- **终止条件**：若链表为空或只有一个节点，无需交换，直接返回 \`head\`。\r
- **交换逻辑**：设当前两个节点为 \`head\` 和 \`newHead = head.next\`。先递归处理 \`newHead.next\` 之后的子链表，得到交换后的子链表头；再将 \`head\` 接到子链表后面，\`newHead\` 接到 \`head\` 前面，即完成本对交换；最后返回 \`newHead\` 作为本段的新头。\r
- **复杂度**：每个节点访问一次，时间复杂度 \\(O(n)\\)，空间复杂度 \\(O(n)\\)（递归栈）。\r
\r
### 代码（Python）解法二：迭代（哑节点 + 指针调整）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def swapPairs(self, head):\r
        """\r
        :type head: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        dummyHead = ListNode(0)\r
        dummyHead.next = head\r
        temp = dummyHead\r
        while temp.next != None and temp.next.next != None:\r
            node1 = temp.next\r
            node2 = temp.next.next\r
            temp.next = node2\r
            node1.next = node2.next\r
            node2.next = node1\r
            temp = node1\r
\r
        ans = dummyHead.next\r
        del dummyHead\r
        return ans\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **哑节点**：在 \`head\` 前加 \`dummyHead\`，使交换第一对时逻辑与后续对一致，无需单独处理头结点。\r
- **迭代逻辑**：\`temp\` 指向「当前待交换 pair 的前驱」。每次循环中，\`node1\`、\`node2\` 为待交换的两个节点；执行 \`temp.next = node2\`、\`node1.next = node2.next\`、\`node2.next = node1\` 完成交换；再将 \`temp\` 移到 \`node1\`（交换后 pair 的尾结点），作为下一对的前驱。\r
- **终止条件**：当 \`temp.next\` 或 \`temp.next.next\` 为 \`None\` 时，不足一对，退出循环。\r
- **复杂度**：时间复杂度 \\(O(n)\\)，空间复杂度 \\(O(1)\\)，满足进阶要求。\r
\r
<video src="Leetcode/0319.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
`,o6=`---\r
title: "Leetcode 链表 4（K 个一组翻转链表，随机链表的复制）"\r
date: "2026-03-20"\r
tags: ["Leetcode", "链表", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [25 K 个一组翻转链表](#q25) ｜ [138 随机链表的复制](#q138)\r
\r
<a id="q25"></a>\r
\r
## LeetCode 25. K 个一组翻转链表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你链表的头节点 \`head\`，每 \\(k\\) 个节点一组进行翻转，请你返回修改后的链表。\r
\r
\\(k\\) 是一个正整数，它的值小于或等于链表的长度。如果节点总数不是 \\(k\\) 的整数倍，那么请将最后剩余的节点保持原有顺序。\r
\r
你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。\r
\r
### 提示\r
\r
- 链表中的节点数目为 \\(n\\)\r
- \\(1 ≤ k ≤ n ≤ 5000\\)\r
- \\(0 ≤ Node.val ≤ 1000\\)\r
\r
**进阶**：你可以设计一个只用 \\(O(1)\\) 额外内存空间的算法解决此问题吗？\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def reverseKGroup(self, head, k):\r
        """\r
        :type head: Optional[ListNode]\r
        :type k: int\r
        :rtype: Optional[ListNode]\r
        """\r
        def reverseList_correct(head, tail):\r
            """\r
            反转从 head 到 tail 的链表（包括 tail）\r
            返回 (newHead, newTail)\r
            """\r
            prev = tail.next  # 保存 tail 后面的节点\r
            curr = head\r
            last = tail.next  # 记录反转后的尾节点应该指向的位置\r
            \r
            while prev != tail:\r
                next_temp = curr.next\r
                curr.next = prev\r
                prev = curr\r
                curr = next_temp\r
            \r
            return tail, head  # tail 变成新的头，head 变成新的尾\r
\r
        hair = ListNode(0)\r
        hair.next = head\r
        pre = hair\r
        \r
        while True:\r
            # 找到当前组的尾节点\r
            tail = pre\r
            for i in range(k):\r
                tail = tail.next\r
                if not tail:\r
                    return hair.next\r
            \r
            # 保存下一组的头节点\r
            next_group_head = tail.next\r
            \r
            # 反转当前组\r
            newHead, newTail = reverseList_correct(head, tail)\r
            \r
            # 连接回原链表\r
            pre.next = newHead\r
            newTail.next = next_group_head\r
            \r
            # 更新指针，准备下一组\r
            pre = newTail\r
            head = next_group_head\r
</pre>\r
\r
### 思路解析\r
\r
- **整体流程**：用哑节点 \`hair\` 作为哨兵，\`pre\` 指向「当前待翻转组」的前驱。每次循环：先通过 \`for i in range(k)\` 找到本组的尾节点 \`tail\`；若不足 \\(k\\) 个（\`tail\` 为 \`None\`），直接返回；否则反转 \`[head, tail]\` 这一段，再把反转后的子链表接回 \`pre\` 和下一组之间。\r
- **反转子链表**：\`reverseList_correct(head, tail)\` 将 \`head\` 到 \`tail\` 的节点原地反转。用 \`prev = tail.next\` 作为反转后尾节点的 \`next\`，迭代地让每个节点的 \`next\` 指向前驱，最后返回 \`(tail, head)\` 作为新的头、尾。\r
- **连接与更新**：反转后 \`pre.next = newHead\`，\`newTail.next = next_group_head\`；然后将 \`pre\` 移到 \`newTail\`，\`head\` 移到 \`next_group_head\`，进入下一组。\r
- **复杂度**：每个节点被访问常数次，时间复杂度 \\(O(n)\\)；只使用常数个指针，空间复杂度 \\(O(1)\\)，满足进阶要求。\r
\r
---\r
\r
<a id="q138"></a>\r
\r
## LeetCode 138. 随机链表的复制 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个长度为 \\(n\\) 的链表，每个节点包含一个额外增加的随机指针 \`random\`，该指针可以指向链表中的任何节点或空节点。\r
\r
构造这个链表的**深拷贝**。深拷贝应该由恰好 \\(n\\) 个**全新**节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 \`next\` 指针和 \`random\` 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。**复制链表中的指针都不应指向原链表中的节点**。\r
\r
例如，如果原链表中有 \`X\` 和 \`Y\` 两个节点，其中 \`X.random → Y\`。那么在复制链表中对应的两个节点 \`x\` 和 \`y\`，同样有 \`x.random → y\`。\r
\r
返回复制链表的头节点。\r
\r
### 提示\r
\r
- \\(0 ≤ n ≤ 1000\\)\r
- \\(-10^4 ≤ Node.val ≤ 10^4\\)\r
- \`Node.random\` 为 \`null\` 或指向链表中的节点\r
\r
### 代码（Python）解法一：递归 + 哈希表\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def __init__(self):\r
        self.cachedNode = {}\r
    \r
    def copyRandomList(self, head):\r
        """\r
        :type head: Node\r
        :rtype: Node\r
        """\r
        if head is None:\r
            return None\r
        \r
        if head not in self.cachedNode:\r
            # 创建新节点\r
            headNew = Node(head.val)\r
            self.cachedNode[head] = headNew\r
            \r
            # 递归复制 next 和 random 指针\r
            headNew.next = self.copyRandomList(head.next)\r
            headNew.random = self.copyRandomList(head.random)\r
        \r
        return self.cachedNode[head]\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **核心思想**：递归 + 哈希表（\`cachedNode\`），将**原节点 → 新节点**一一对应。\r
- **先创建节点，再连接指针**：进入 \`if head not in self.cachedNode\` 后立刻 \`Node(head.val)\` 并写入缓存，再去递归填 \`next\` / \`random\`，避免在「新节点尚未存在」时就引用它。\r
- **先存入缓存，再递归**：把 \`cachedNode[head] = headNew\` 放在递归**之前**，这样当 \`random\` 或 \`next\` 指回已访问过的原节点时，后续递归会直接 \`return self.cachedNode[head]\`，不会无限递归。\r
- **\`next\` 与 \`random\` 分别递归**：两条边独立复制，逻辑对称；\`head.random\` 为 \`None\` 时 \`copyRandomList(None)\` 返回 \`None\`，合法。\r
- **利用缓存返回已建节点**：保证每个原节点只对应一个新节点，满足深拷贝语义。\r
\r
### 复杂度（解法一）\r
\r
- 时间复杂度 \\(O(n)\\)：每个原节点至多创建一次、每条边（\`next\` / \`random\`）在递归树中对应常数次访问。\r
- 空间复杂度 \\(O(n)\\)：哈希表存 \\(n\\) 个映射，递归栈深度 \\(O(n)\\)。\r
\r
### 示例：逐步走读代码（解法一）\r
\r
设原链表为两个节点（仅示意结构）：\r
\r
| 原节点 | \`val\` | \`next\` | \`random\` |\r
|--------|-------|--------|----------|\r
| **A**  | 1     | B      | B        |\r
| **B**  | 2     | \`None\` | A        |\r
\r
即：\`A → B\`，\`A.random → B\`，\`B.random → A\`（存在环状引用，最能体现「先缓存再递归」的必要性）。\r
\r
记新节点为 **A'**、**B'**，初始 \`cachedNode = {}\`。\r
\r
1. **\`copyRandomList(A)\`**  \r
   - \`A\` 不在缓存 → 创建 **A'**（值为 1），\`cachedNode[A] = A'\`。  \r
   - 执行 **\`headNew.next = copyRandomList(B)\`**（先不填 \`random\`）。\r
\r
2. **\`copyRandomList(B)\`**  \r
   - \`B\` 不在缓存 → 创建 **B'**（值为 2），\`cachedNode[B] = B'\`。  \r
   - **\`headNew.next = copyRandomList(None)\`** → 返回 \`None\`，故 **B'.next = None**。  \r
   - **\`headNew.random = copyRandomList(A)\`**：此时 **A 已在缓存**，不再进入 \`if\` 内创建逻辑，直接 **\`return cachedNode[A] = A'\`**，故 **B'.random → A'**。  \r
   - 返回 **B'**。\r
\r
3. 回到 **\`copyRandomList(A)\`** 中未完成的赋值：  \r
   - **A'.next = B'**（上一步返回值）。  \r
   - **\`headNew.random = copyRandomList(B)\`**：**B 已在缓存**，直接 **\`return B'\`**，故 **A'.random → B'**。\r
\r
4. 返回 **A'**，即为复制链表的头。\r
\r
**结果核对**：复制链为 **A' → B'**，**A'.random → B'**，**B'.random → A'**，与原件结构一致，且所有指针只指向新节点。\r
\r
**若不做「先缓存再递归」**：例如在创建 **A'** 后立刻 \`copyRandomList(B)\`，而在处理 **B** 的 \`random\` 时又需要 **A'**，若没有提前 \`cachedNode[A]=A'\`，要么拿不到 **A'**，要么会重复创建 **A''**，深拷贝不成立；若 \`random\` 先于 \`next\` 递归且未缓存，也可能在填 **A'.random** 时再次进入对 **A** 的复制，造成无限递归。**先占位、再递归** 同时解决了「环」与「重复创建」两类问题。\r
\r
### 代码（Python）解法二：交错插入 + 拆链（\\(O(1)\\) 额外空间）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    \r
    def copyRandomList(self, head):\r
        """\r
        :type head: Node\r
        :rtype: Node\r
        """\r
        if not head:\r
            return None\r
\r
            \r
        p = head\r
        while p != None:\r
            p_new = Node(p.val)\r
            p_new.next = p.next\r
            p.next = p_new\r
            p = p.next.next\r
\r
        # return head\r
        \r
        \r
        odd = head    # Original\r
        even = head.next    # New\r
\r
        while odd != None:\r
            if odd.random == None:\r
                even.random = None\r
            else:\r
                even.random = odd.random.next\r
            odd = odd.next.next\r
            if odd == None:\r
                break\r
            even = even.next.next\r
\r
        odd = head\r
        even = head.next\r
        ans = head.next\r
\r
        while odd != None:\r
            odd.next = even.next\r
            if even.next != None:\r
                even.next = even.next.next\r
            odd = odd.next\r
            even = even.next\r
\r
        return ans\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **第一阶段（交错插入）**：对每个原节点 \`p\`，在其后插入拷贝 \`p_new\`，使结构变为 \`… → p → p_new → p_old_next → …\`。这样**原节点 \`p\` 的下一个节点就是自己的拷贝**，无需哈希表即可建立对应关系。\r
- **第二阶段（复制 \`random\`）**：\`odd\` 遍历原节点（下标 0,2,4…），\`even\` 为紧跟其后的新节点。若 \`odd.random\` 指向某原节点 \`R\`，则拷贝的 \`random\` 应为 \`R\` 后面的新节点，即 **\`even.random = odd.random.next\`**；\`odd.random\` 为 \`None\` 时新节点 \`random\` 也为 \`None\`。\r
- **第三阶段（拆链）**：恢复原链表的 \`next\`，同时把拷贝链连成独立链表：\`odd.next = even.next\` 跳过拷贝节点；\`even.next = even.next.next\` 把拷贝节点串起来。\`ans = head.next\` 为拷贝链头，最后返回 \`ans\`。\r
- **复杂度**：时间 \\(O(n)\\)，**额外空间 \\(O(1)\\)**（不计输出链表），满足进阶要求。\r
\r
<video src="Leetcode/0320.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
`,a6=`---\r
title: "Leetcode 链表 5（排序链表，合并 K 个升序链表，LRU 缓存）"\r
date: "2026-03-21"\r
tags: ["Leetcode", "链表", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [148 排序链表](#q148) ｜ [23 合并 K 个升序链表](#q23) ｜ [146 LRU 缓存](#q146)\r
\r
<a id="q148"></a>\r
\r
## LeetCode 148. 排序链表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你链表的头结点 \`head\`，请将其按**升序**排列并返回**排序后的链表**。\r
\r
### 提示\r
\r
- 链表中节点数目在范围 \`[0, 5 x 10^4]\` 内  \r
- \`-10^5 ≤ Node.val ≤ 10^5\`\r
\r
**进阶**：你能否在 **O(n log n)** 时间复杂度和 **常数级空间复杂度**下解决此题？\r
\r
### 代码（Python）解法一：取值排序后重建链表\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
class Solution(object):\r
    def sortList(self, head):\r
        """\r
        :type head: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        if not head:\r
            return None\r
        p = head\r
        record = []\r
        while p != None:\r
            record.append(p.val)\r
            p = p.next\r
        record.sort()\r
        ans = ListNode(record[0])\r
        newHead = ans\r
        for i in range(1, len(record)):\r
            ans.next = ListNode(record[i])\r
            ans = ans.next\r
        ans.next = None\r
        return newHead\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **整体思路**：遍历链表，把所有节点的值放进列表 \`record\`，对列表排序后，再按顺序新建一条链表。\r
- **空链表**：\`head\` 为 \`None\` 时直接返回 \`None\`。\r
- **重建链表**：用第一个值建头结点 \`newHead\`，后续 \`for\` 循环依次 \`ListNode(record[i])\` 接到尾部，最后将尾结点 \`next\` 置为 \`None\`。\r
- **复杂度**：时间 **O(n log n)**（Python \`list.sort\` 为 Timsort）；空间 **O(n)**（列表 + 新链表节点），**不满足进阶的 O(1) 额外空间**；若需常数额外空间，需在链表上做归并排序等指针操作。\r
\r
### 代码（Python）解法二：自顶向下归并排序\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
class Solution:\r
    def sortList(self, head):  \r
        return self._sortList(head, None)\r
    \r
    def _sortList(self, head, tail):\r
        if head is None:\r
            return head\r
        if head.next == tail:\r
            head.next = None\r
            return head\r
        \r
        # 使用快慢指针找中点\r
        slow = head\r
        fast = head\r
        while fast != tail:\r
            slow = slow.next\r
            fast = fast.next\r
            if fast != tail:\r
                fast = fast.next\r
        \r
        mid = slow\r
        return self._merge(self._sortList(head, mid), self._sortList(mid, tail))\r
    \r
    def _merge(self, head1, head2):\r
        dummyHead = ListNode(0)\r
        temp = dummyHead\r
        temp1 = head1\r
        temp2 = head2\r
        \r
        while temp1 is not None and temp2 is not None:\r
            if temp1.val <= temp2.val:\r
                temp.next = temp1\r
                temp1 = temp1.next\r
            else:\r
                temp.next = temp2\r
                temp2 = temp2.next\r
            temp = temp.next\r
        \r
        if temp1 is not None:\r
            temp.next = temp1\r
        elif temp2 is not None:\r
            temp.next = temp2\r
        \r
        return dummyHead.next\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **核心**：**自顶向下的链表归并排序**。用区间 \`[head, tail)\` 表示待排序段（\`tail\` 为右开边界，整链调用为 \`_sortList(head, None)\`）。\r
- **递归终止**：\`head is None\` 直接返回；仅有一个结点（\`head.next == tail\`）时断开 \`head.next = None\`，返回该结点作为已排序单元素链。\r
- **找中点**：快慢指针从 \`head\` 出发，\`fast\` 每次两步、\`slow\` 一步，且 \`fast\` 未到 \`tail\` 时继续；\`slow\` 最终指向左半段最后一个结点，**中点即 \`mid = slow\`**。左段为 \`[head, mid)\`，右段为 \`[mid, tail)\`，递归排序后 \`_merge\` 合并。\r
- **合并**：哑结点 + 双指针遍历两条有序链，取较小者接在 \`temp\` 后；一段耗尽后把另一段剩余整体接上。\r
- **复杂度**：时间 **O(n log n)**（每层合并线性，共 O(log n) 层）；额外空间主要为递归栈 **O(log n)**。若题目要求严格 **O(1)** 额外空间，需改用**自底向上**的迭代归并（按子链长度 1、2、4… 倍增合并）。\r
\r
### 代码（Python）解法三：自底向上归并排序\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
class Solution:\r
    def sortList(self, head):\r
        # Necessity\r
        if head == None:\r
            return head\r
\r
        # 先获得链表长度Length\r
        length = 0\r
        node = head\r
        while node != None:\r
            length = length + 1\r
            node = node.next\r
\r
        dummyHead = ListNode(0)\r
        dummyHead.next = head\r
        subLength = 1\r
        while subLength < length:\r
            prev = dummyHead\r
            curr = dummyHead.next\r
            \r
            # 以subLength长度的单位链表的一轮合并\r
            while curr != None:\r
                head1 = curr\r
\r
                # 使curr到达现在的curr后subLength-1位置的地方\r
                for i in range(1, subLength):\r
                    if curr.next == None:\r
                        break\r
                    curr = curr.next\r
                \r
                # 这里把curr和curr后面的那个节点断开了\r
                head2 = curr.next\r
                curr.next = None\r
                curr = head2\r
\r
                # 再往后移动subLength-1个单位\r
                for i in range(1, subLength):\r
                    if curr == None or curr.next == None:\r
                        break\r
                    curr = curr.next\r
\r
                # nex是curr的下一个节点，这里再一次将curr和curr.next断开\r
                nex = None\r
                if curr != None:\r
                    nex = curr.next\r
                    curr.next = None     # 保证要合并的链表尾部指向None\r
\r
                # 合并链表\r
                merged = self.merge(head1, head2)\r
                prev.next = merged\r
                while prev.next != None:\r
                    prev = prev.next\r
\r
                # 再从下一个地方合并\r
                curr = nex\r
\r
            subLength *= 2\r
\r
        return dummyHead.next\r
\r
    def merge(self, head1, head2):\r
        dummyHead = ListNode(0)\r
        temp = dummyHead\r
        temp1 = head1\r
        temp2 = head2\r
        while temp1 != None and temp2 != None:\r
            if temp1.val <= temp2.val:\r
                temp.next = temp1\r
                temp1 = temp1.next\r
            else:\r
                temp.next = temp2\r
                temp2 = temp2.next\r
            temp = temp.next\r
\r
        # 连接剩余部分 - 使用两个独立的 if\r
        if temp1 != None:\r
            temp.next = temp1\r
        if temp2 != None:\r
            temp.next = temp2\r
\r
        return dummyHead.next\r
</pre>\r
\r
### 思路解析（解法三）\r
\r
- **核心**：**自底向上归并**，无递归。子链长度 \`subLength\` 从 1 开始，每轮结束后乘 2（1 → 2 → 4 → …），直到 \`subLength >= length\`。每轮在整条链上依次取出**两段**长度为 \`subLength\` 的有序子链（不足则只取一段或更短），断开后 \`merge\` 再接回 \`prev\` 之后。\r
- **哑结点**：\`dummyHead\` 方便在头前维护 \`prev\`，避免对头结点特殊处理。\r
- **一轮内 \`curr\` 扫描**：\`head1\` 为当前段起点；走 \`subLength-1\` 步得到第一段尾，再 \`head2 = curr.next\` 并断开；第二段再走至多 \`subLength-1\` 步，用 \`nex\` 记下下一轮起点，并把第二段尾与后续断开，得到两条待合并子链。\r
- **接回**：\`merged = self.merge(head1, head2)\`，\`prev.next = merged\`，再把 \`prev\` 移到合并结果的尾，继续处理 \`curr = nex\`。\r
- **复杂度**：时间 **O(n log n)**；仅若干指针与哑结点，**额外空间 O(1)**，满足进阶要求。\r
\r
---\r
\r
<a id="q23"></a>\r
\r
## LeetCode 23. 合并 K 个升序链表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个链表数组，每个链表都已经按**升序**排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。\r
\r
### 示例（摘要）\r
\r
- **示例 1**：\`lists = [[1,4,5],[1,3,4],[2,6]]\` → \`[1,1,2,3,4,4,5,6]\`\r
- **示例 2**：\`lists = []\` → \`[]\`\r
- **示例 3**：\`lists = [[]]\` → \`[]\`\r
\r
### 提示\r
\r
- \`k == lists.length\`\r
- \`0 ≤ k ≤ 10^4\`\r
- \`0 ≤ lists[i].length ≤ 500\`\r
- \`-10^4 ≤ lists[i][j] ≤ 10^4\`\r
- \`lists[i]\` 按**升序**排列\r
- 所有链表中的节点数目总数不超过 \`10^4\`\r
\r
### 代码（Python）解法一：顺序两两合并\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
class Solution(object):\r
    def mergeKLists(self, lists):\r
        """\r
        :type lists: List[Optional[ListNode]]\r
        :rtype: Optional[ListNode]\r
        """\r
        if not lists:\r
            return None\r
        N = len(lists)\r
        head = ListNode(0)\r
        head.next = lists[0]\r
        \r
        for i in range(1, N):\r
            head.next = self.mergeTwoLists(head.next, lists[i])\r
\r
        return head.next\r
\r
    def mergeTwoLists(self, list1, list2):\r
        """\r
        :type list1: Optional[ListNode]\r
        :type list2: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        if not list1:\r
            return list2\r
\r
        if not list2:\r
            return list1\r
\r
        p1 = list1\r
        p2 = list2\r
\r
        if list1.val < list2.val:\r
            p = list1\r
            p1 = p1.next\r
        else:\r
            p = list2\r
            p2 = p2.next\r
\r
        while p1 != None and p2 != None:\r
            if p1.val < p2.val:\r
                p.next = p1\r
                p = p.next\r
                p1 = p1.next\r
            else:\r
                p.next = p2\r
                p = p.next\r
                p2 = p2.next\r
\r
        if not p1:\r
            while p2 != None:\r
                p.next = p2\r
                p = p.next\r
                p2 = p2.next\r
        else:\r
            while p1 != None:\r
                p.next = p1\r
                p = p.next\r
                p1 = p1.next\r
\r
        if list1.val < list2.val:\r
            return list1\r
        else:\r
            return list2\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **主流程**：用哑结点 \`head\` 保存当前「已合并结果」的头指针（\`head.next\`）。从第二条链开始，依次执行 \`head.next = mergeTwoLists(head.next, lists[i])\`，相当于把前 \`i\` 条链的合并结果再与第 \`i+1\` 条链归并。\r
- **mergeTwoLists**：与「合并两个有序链表」相同，双指针比较 \`val\`，较小者接到 \`p\` 后；一段耗尽后把另一段剩余整体接上；最后根据**最初**两个头结点的大小关系返回真正的结果头（与链表 3 笔记中 21 题写法一致）。\r
- **边界**：\`lists\` 为空返回 \`None\`；仅一条链时循环不执行，直接返回 \`lists[0]\`。\r
- **复杂度**：设总节点数为 \`n\`。第 \`i\` 次合并代价约与当前结果长度成正比，最坏约 \`O(nk)\`（\`k\` 为链表条数）；空间 **O(1)**（不计输出链表）。更优可做分治归并或优先队列，达到约 **O(n log k)** 时间。\r
\r
### 代码（Python）解法二：分治式迭代归并（O(n log k)）\r
\r
![合并 K 个升序链表：分治归并示意](Leetcode/0321.png)\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
class Solution(object):\r
    def mergeKLists(self, lists):\r
        """\r
        :type lists: List[Optional[ListNode]]\r
        :rtype: Optional[ListNode]\r
        """\r
        if not lists:\r
            return None\r
        N = len(lists)\r
        step = 1\r
        while step < N:\r
            start = 0\r
            index = 0\r
            while index < len(lists):\r
                index = start + step\r
                lists[start] = self.mergeTwoLists(lists[start], lists[index])\r
                start = start + 2 * step\r
                index = index + 2 * step\r
            step = step * 2\r
\r
        return lists[0]\r
\r
    def mergeTwoLists(self, list1, list2):\r
        """\r
        :type list1: Optional[ListNode]\r
        :type list2: Optional[ListNode]\r
        :rtype: Optional[ListNode]\r
        """\r
        if not list1:\r
            return list2\r
\r
        if not list2:\r
            return list1\r
\r
        p1 = list1\r
        p2 = list2\r
\r
        if list1.val < list2.val:\r
            p = list1\r
            p1 = p1.next\r
        else:\r
            p = list2\r
            p2 = p2.next\r
\r
        while p1 != None and p2 != None:\r
            if p1.val < p2.val:\r
                p.next = p1\r
                p = p.next\r
                p1 = p1.next\r
            else:\r
                p.next = p2\r
                p = p.next\r
                p2 = p2.next\r
\r
        if not p1:\r
            while p2 != None:\r
                p.next = p2\r
                p = p.next\r
                p2 = p2.next\r
        else:\r
            while p1 != None:\r
                p.next = p1\r
                p = p.next\r
                p1 = p1.next\r
\r
        if list1.val < list2.val:\r
            return list1\r
        else:\r
            return list2\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **核心**：与**归并排序**同构——每轮令步长 \`step\` 为 1、2、4…，在数组 \`lists\` 上把间隔为 \`step\` 的两条有序链合并到**左侧槽位** \`lists[start]\`，下一轮链长翻倍，约 **log k** 轮合并完。\r
- **内层循环**：\`start\` 每次跳 \`2*step\`，对应一对对 \`(start, start+step)\`；\`index\` 用于控制是否还有下一段可配对；合并结果写回 \`lists[start]\`，与「分治」中子问题合并回父区间一致。\r
- **与解法一对比**：解法一总是把「当前大结果」与「下一条链」合并，链长极不均衡，时间偏 **O(nk)**；本解法每轮合并的段长更接近，总合并量约 **O(n log k)**。\r
- **空间**：**O(1)** 额外指针（不计输出与 \`lists\` 数组本身），\`mergeTwoLists\` 同 21 题原地归并。\r
\r
### 代码（Python）解法三：小根堆（优先队列）\r
\r
<pre class="code-gray">\r
# Definition for singly-linked list.\r
# class ListNode(object):\r
#     def __init__(self, val=0, next=None):\r
#         self.val = val\r
#         self.next = next\r
\r
import heapq\r
\r
class Solution(object):\r
    def mergeKLists(self, lists):\r
        """\r
        :type lists: List[Optional[ListNode]]\r
        :rtype: Optional[ListNode]\r
        """\r
        # 使用堆来实现优先队列\r
        # 堆中存储 (节点值, 索引, 节点) 为了避免比较节点对象\r
        heap = []\r
        \r
        # 将所有非空链表的头节点加入堆\r
        for i, node in enumerate(lists):\r
            if node:\r
                heapq.heappush(heap, (node.val, i, node))\r
        \r
        # 虚拟头节点\r
        dummy = ListNode(0)\r
        tail = dummy\r
        \r
        # 当堆不为空时循环\r
        while heap:\r
            # 弹出值最小的节点\r
            val, i, node = heapq.heappop(heap)\r
            \r
            # 将节点接到结果链表\r
            tail.next = node\r
            tail = tail.next\r
            \r
            # 如果该节点还有下一个节点，将其加入堆\r
            if node.next:\r
                heapq.heappush(heap, (node.next.val, i, node.next))\r
        \r
        return dummy.next\r
</pre>\r
\r
### 思路解析（解法三）\r
\r
- **核心**：**堆**可以保证按从小到大的顺序弹出。可以维护一个**小根堆**，始终保存每条链表当前的**第一个未合并结点**；每次弹出全局最小 \`val\` 的结点接到结果尾，再把该结点所在链的 \`next\` 入堆，等价于 **k 路归并**。\r
- **元组 \`(val, i, node)\`**：堆比较元组时先比 \`val\`，相等再比链表下标 \`i\`，避免在 Python 3 中直接比较 \`ListNode\` 对象（可能未定义序或不符合预期）。\r
- **复杂度**：共 **n** 次入堆/出堆，每次 **O(log k)**，时间 **O(n log k)**；堆内至多 **k** 个元素，额外空间 **O(k)**。\r
\r
---\r
\r
<a id="q146"></a>\r
\r
## LeetCode 146. LRU 缓存 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
请你设计并实现一个满足 **LRU（最近最少使用）** 缓存约束的数据结构。\r
\r
实现 \`LRUCache\` 类：\r
\r
- **\`LRUCache(int capacity)\`** 以正整数作为容量 \`capacity\` 初始化 LRU 缓存  \r
- **\`int get(int key)\`** 如果关键字 \`key\` 存在于缓存中，则返回关键字的值，否则返回 \`-1\`  \r
- **\`void put(int key, int value)\`** 如果关键字 \`key\` 已经存在，则变更其数据值 \`value\`；如果不存在，则向缓存中插入该组 \`key-value\`。当缓存容量达到上限时，它应该在写入新数据之前删除**最久未使用**的数据值，从而为新的数据值留出空间\r
\r
**进阶**：你是否可以在 **O(1)** 时间复杂度内完成这两种操作？\r
\r
### 示例（摘要）\r
\r
\`capacity = 2\`，依次 \`put(1,1)\`、\`put(2,2)\`、\`get(1)\` → 1；\`put(3,3)\` 淘汰 key 2；\`get(2)\` → -1；\`put(4,4)\` 淘汰 key 1；\`get(1)\` → -1，\`get(3)\` → 3，\`get(4)\` → 4。\r
\r
### 提示\r
\r
- \`1 ≤ capacity ≤ 3000\`  \r
- \`0 ≤ key ≤ 10^4\`  \r
- \`0 ≤ value ≤ 10^5\`  \r
- 最多调用 \`2 x 10^5\` 次 \`get\` 和 \`put\`\r
\r
### 代码（Python）：哈希表 + 双向链表\r
\r
<pre class="code-gray">\r
# 构建双链表\r
class DLinkedNode:\r
    def __init__(self, key=0, value=0):\r
        self.key = key\r
        self.value = value\r
        self.prev = None\r
        self.next = None\r
\r
class LRUCache():\r
\r
    def __init__(self, capacity):\r
        """\r
        :type capacity: int\r
        """\r
        # 创建哈希表\r
        self.cache = dict()\r
\r
        # 使用伪头部和伪尾部节点\r
        self.head = DLinkedNode()\r
        self.tail = DLinkedNode()\r
        self.head.next = self.tail\r
        self.tail.prev = self.head\r
\r
        self.capacity = capacity\r
        self.size = 0\r
        \r
\r
    def get(self, key):\r
        """\r
        :type key: int\r
        :rtype: int\r
        """\r
        if key not in self.cache:\r
            return -1\r
\r
        # 刚被提及，放到最后一个删的位置\r
        node = self.cache[key]\r
        self.moveToHead(node)\r
        return node.value\r
        \r
\r
    def put(self, key, value):\r
        """\r
        :type key: int\r
        :type value: int\r
        :rtype: None\r
        """\r
        if key not in self.cache:\r
            # 如果key不在，创建一个新节点\r
            node = DLinkedNode(key, value)\r
            # 添加至哈希表\r
            self.cache[key] = node\r
            # 添加至双向链表的头部\r
            self.addToHead(node)\r
            self.size += 1\r
            if self.size > self.capacity:\r
                # 超出容量，删除双向链表的尾节点\r
                removed = self.removeTail()\r
                # 删除哈希表中的对应项\r
                self.cache.pop(removed.key)\r
                self.size -= 1\r
        else:\r
            # key存在，先通过哈希表定位，再修改value，并移到头部\r
            node = self.cache[key]\r
            node.value = value\r
            self.moveToHead(node)\r
\r
\r
\r
\r
    def addToHead(self, node):\r
        node.prev = self.head\r
        node.next = self.head.next\r
        self.head.next.prev = node\r
        self.head.next = node\r
\r
    def removeNode(self, node):\r
        # Node 指向别人无所谓，但是其他Node已经没有指向它的了\r
        node.prev.next = node.next\r
        node.next.prev = node.prev\r
\r
    def moveToHead(self, node):\r
        self.removeNode(node)\r
        self.addToHead(node)\r
\r
    def removeTail(self):\r
        node = self.tail.prev\r
        self.removeNode(node)\r
\r
        # 因为还要将哈希表中的对应字段删掉，所以要return一下\r
        return node\r
</pre>\r
\r
### 思路解析\r
\r
- **为什么需要两种结构**：\`dict\` 按 key **O(1)** 找到结点；仅靠 dict 无法 O(1) 知道「谁最久未用」。**双向链表**按使用顺序串起结点：**靠近头表示最近使用，靠近尾表示最久未用**；删除/移动前后指针均为 O(1)。\r
- **哑头 / 哑尾**：\`head\` 与 \`tail\` 不存业务数据，避免对头尾结点的特殊判断。\r
- **\`get\`**：未命中返回 -1；命中则 \`moveToHead\`（先 \`removeNode\` 再 \`addToHead\`），表示刚被访问。\r
- **\`put\`**：新 key 则新建结点、入表、挂到头部，\`size\` 超容量则 \`removeTail\`（真尾的前驱即 LRU），并从 \`cache\` 删除；已存在 key 则改 \`value\` 并 \`moveToHead\`。\r
- **复杂度**：单次 \`get\` / \`put\` 均为 **O(1)**；额外空间 **O(capacity)**。\r
\r
<video src="Leetcode/0321.mp4" controls preload="metadata" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
`,u6=`---\r
title: "Leetcode 矩阵 & 链表 1（矩阵置零，螺旋矩阵，旋转图像，搜索二维矩阵 II，相交链表）"\r
date: "2026-03-15"\r
tags: ["Leetcode", "矩阵", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [73 矩阵置零](#q73) ｜ [54 螺旋矩阵](#q54) ｜ [48 旋转图像](#q48) ｜ [240 搜索二维矩阵 II](#q240) ｜ [160 相交链表](#q160)\r
\r
<a id="q73"></a>\r
\r
## LeetCode 73. 矩阵置零 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个 m × n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用**原地算法**。\r
\r
**进阶：** 直观做法可用 O(mn) 或 O(m+n) 额外空间；能否想出仅使用常量空间的解决方案？\r
\r
### 测试样例\r
\r
示例 1：  \r
输入：matrix = [[1,1,1],[1,0,1],[1,1,1]]  \r
输出：[[1,0,1],[0,0,0],[1,0,1]]\r
\r
示例 2：  \r
输入：matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]  \r
输出：[[0,0,0,0],[0,4,5,0],[0,3,1,0]]\r
\r
**提示：** 1 ≤ m, n ≤ 200，-2^31 ≤ matrix[i][j] ≤ 2^31 - 1。\r
\r
### 代码（Python）解法一：行列标记数组\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def setZeroes(self, matrix):\r
        """\r
        :type matrix: List[List[int]]\r
        :rtype: None Do not return anything, modify matrix in-place instead.\r
        """\r
        row = [0] * len(matrix)\r
        col = [0] * len(matrix[0])\r
\r
        for i in range(0, len(matrix)):\r
            for j in range(0, len(matrix[0])):\r
                if matrix[i][j] == 0:\r
                    row[i] = 1\r
                    col[j] = 1\r
\r
        for i in range(0, len(row)):\r
            if row[i] == 1:\r
                matrix[i] = [0] * len(matrix[0])\r
\r
        for j in range(0, len(col)):\r
            if col[j] == 1:\r
                for i in range(0, len(row)):\r
                    matrix[i][j] = 0\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **思路**：用两个一维数组 \`row\`、\`col\` 分别标记「哪一行、哪一列需要整行/整列置零」。第一遍遍历矩阵，遇到 \`matrix[i][j] == 0\` 就令 \`row[i] = 1\`、\`col[j] = 1\`。然后先按行：若 \`row[i] == 1\` 则把第 i 行整行赋为 0（这里用 \`matrix[i] = [0] * len(matrix[0])\` 直接替换该行）；再按列：若 \`col[j] == 1\` 则遍历所有行把 \`matrix[i][j]\` 置 0。\r
- **复杂度**：时间复杂度 O(mn)，空间复杂度 O(m+n)（两个标记数组）。满足原地修改矩阵的要求；若进阶要求 O(1) 额外空间，见解法二。\r
\r
### 代码（Python）解法二：用第一行、第一列做标记（O(1) 空间）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def setZeroes(self, matrix):\r
        """\r
        :type matrix: List[List[int]]\r
        :rtype: None Do not return anything, modify matrix in-place instead.\r
        """\r
        m = len(matrix)\r
        n = len(matrix[0])\r
        flag_col0 = False\r
\r
        # 第一遍遍历：标记需要置零的行和列\r
        for i in range(m):\r
            if matrix[i][0] == 0:\r
                flag_col0 = True\r
\r
            for j in range(1, n):\r
                if matrix[i][j] == 0:\r
                    matrix[i][0] = matrix[0][j] = 0\r
\r
        # 第二遍遍历：根据标记置零（从后往前）\r
        for i in range(m - 1, -1, -1):\r
            for j in range(1, n):\r
                if matrix[i][0] == 0 or matrix[0][j] == 0:\r
                    matrix[i][j] = 0\r
\r
            if flag_col0:\r
                matrix[i][0] = 0\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **思路**：用矩阵的**第一行** \`matrix[0][j]\` 标记第 j 列是否要置零，用**第一列** \`matrix[i][0]\` 标记第 i 行是否要置零。这样只需 O(1) 额外空间。但第一行和第一列会重叠在 \`matrix[0][0]\`，所以单独用变量 \`flag_col0\` 表示「第一列是否有 0」；\`matrix[0][0]\` 只表示「第一行是否有 0」。\r
- **第一遍**：遍历时若 \`matrix[i][j] == 0\`（j ≥ 1），则令 \`matrix[i][0] = matrix[0][j] = 0\`；若 \`matrix[i][0] == 0\` 则设 \`flag_col0 = True\`。\r
- **第二遍从后往前**：避免先改第一行/第一列导致标记被覆盖。对 i 从 m-1 到 0、j 从 1 到 n-1，若 \`matrix[i][0] == 0\` 或 \`matrix[0][j] == 0\` 则 \`matrix[i][j] = 0\`；最后若 \`flag_col0\` 为真则把 \`matrix[i][0]\` 置 0。\r
- **复杂度**：时间复杂度 O(mn)，空间复杂度 O(1)，满足进阶要求。\r
\r
---\r
\r
<a id="q54"></a>\r
\r
## LeetCode 54. 螺旋矩阵 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你一个 m 行 n 列的矩阵 \`matrix\`，请按照**顺时针螺旋顺序**，返回矩阵中的所有元素。\r
\r
### 测试样例\r
\r
测试样例示意图如下（输入矩阵与螺旋输出顺序）：\r
\r
![螺旋矩阵测试样例](Leetcode/0315_2.png)\r
\r
**提示：** m == matrix.length，n == matrix[i].length，1 ≤ m, n ≤ 10，-100 ≤ matrix[i][j] ≤ 100。\r
\r
### 代码（Python）解法一：方向数组 + 已访问标记\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def spiralOrder(self, matrix):\r
        """\r
        :type matrix: List[List[int]]\r
        :rtype: List[int]\r
        """\r
        if not matrix or not matrix[0]:\r
            return []\r
\r
        # 方向: 右, 下, 左, 上\r
        directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]\r
\r
        rows = len(matrix)\r
        columns = len(matrix[0])\r
\r
        # 创建 visited 矩阵\r
        visited = [[False] * columns for _ in range(rows)]\r
\r
        total = rows * columns\r
        order = [0] * total\r
\r
        row, col = 0, 0\r
        direction_index = 0\r
\r
        for i in range(total):\r
            order[i] = matrix[row][col]\r
            visited[row][col] = True\r
\r
            # 计算下一个位置\r
            next_row = row + directions[direction_index][0]\r
            next_col = col + directions[direction_index][1]\r
\r
            # 如果下一个位置越界或已访问，改变方向\r
            if (next_row < 0 or next_row >= rows or\r
                next_col < 0 or next_col >= columns or\r
                visited[next_row][next_col]):\r
                direction_index = (direction_index + 1) % 4\r
\r
            # 更新位置\r
            row += directions[direction_index][0]\r
            col += directions[direction_index][1]\r
\r
        return order\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **思路**：从左上角 (0,0) 出发，按「右 → 下 → 左 → 上」循环走。用 \`directions\` 存四个方向的 (行增量, 列增量)，用 \`visited\` 标记已访问格子。每次把当前格子加入结果，再计算下一格：若下一格越界或已访问则 \`direction_index\` 加 1 取模 4 换方向，然后按当前方向走到下一格。\r
- **复杂度**：时间复杂度 O(mn)，空间复杂度 O(mn)（\`visited\` 与结果数组）。思路直观，适合作为第一种实现。\r
\r
### 代码（Python）解法二：按层收缩边界\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def spiralOrder(self, matrix):\r
        """\r
        :type matrix: List[List[int]]\r
        :rtype: List[int]\r
        """\r
        if not matrix or not matrix[0]:\r
            return []\r
\r
        rows = len(matrix)\r
        columns = len(matrix[0])\r
        order = []\r
\r
        left, right = 0, columns - 1\r
        top, bottom = 0, rows - 1\r
\r
        while left <= right and top <= bottom:\r
            # 从左到右遍历上边界\r
            for col in range(left, right + 1):\r
                order.append(matrix[top][col])\r
\r
            # 从上到下遍历右边界\r
            for row in range(top + 1, bottom + 1):\r
                order.append(matrix[row][right])\r
\r
            # 如果还有内圈需要遍历\r
            if left < right and top < bottom:\r
                # 从右到左遍历下边界（不包括两端）\r
                for col in range(right - 1, left, -1):\r
                    order.append(matrix[bottom][col])\r
\r
                # 从下到上遍历左边界（不包括两端）\r
                for row in range(bottom, top, -1):\r
                    order.append(matrix[row][left])\r
\r
            # 收缩边界\r
            left += 1\r
            right -= 1\r
            top += 1\r
            bottom -= 1\r
\r
        return order\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **思路**：用四个变量 \`left\`、\`right\`、\`top\`、\`bottom\` 表示当前「一圈」的边界。每一轮按顺序：先从左到右走完上边界，再从上到下走完右边界；若当前不止一行且不止一列（\`left < right and top < bottom\`），则从右到左走下边界（不含右下角）、从下到上走左边界（不含左上角）。然后边界内缩（left、top 加 1，right、bottom 减 1），重复直到边界交错。\r
- **注意**：最内层可能只剩一行或一列，此时只走「上→右」两段即可，不再走左下两段，否则会重复，因此用 \`if left < right and top < bottom\` 判断。\r
- **图解**：解法二按层收缩的示意如下。\r
\r
![螺旋矩阵解法二示意](Leetcode/0315_22.png)\r
\r
- **复杂度**：时间复杂度 O(mn)，空间复杂度 O(1)（不计结果数组），无需 \`visited\`，代码更简洁。\r
\r
---\r
\r
<a id="q48"></a>\r
\r
## LeetCode 48. 旋转图像 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个 n × n 的二维矩阵 \`matrix\` 表示一个图像，请你将图像**顺时针旋转 90 度**。\r
\r
你必须在**原地**旋转图像，即直接修改输入的二维矩阵，**请不要使用另一个矩阵来旋转图像**。本解法一使用额外矩阵便于理解下标关系，与题意不符；满足题意需用原地做法（如解法二）。\r
\r
### 测试样例\r
\r
示意图如下（输入矩阵与顺时针旋转 90° 后的结果）：\r
\r
![旋转图像测试样例](Leetcode/0315_3.png)\r
\r
**提示：** n == matrix.length == matrix[i].length，1 ≤ n ≤ 20，-1000 ≤ matrix[i][j] ≤ 1000。\r
\r
### 代码（Python）解法一：额外矩阵（与题意不符，仅作理解）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def rotate(self, matrix):\r
        """\r
        :type matrix: List[List[int]]\r
        :rtype: None Do not return anything, modify matrix in-place instead.\r
        """\r
        matrix_new = [[0] * len(matrix[0]) for _ in range(len(matrix))]\r
\r
        n = len(matrix)\r
\r
        for i in range(len(matrix)):\r
            for j in range(len(matrix[0])):\r
                matrix_new[j][n - i - 1] = matrix[i][j]\r
\r
        matrix[:] = matrix_new\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **下标关系**：顺时针旋转 90° 后，原位置 (i, j) 的元素在新矩阵中位于 (j, n - 1 - i)，故有 \`matrix_new[j][n - i - 1] = matrix[i][j]\`。\r
- **流程**：先按原矩阵大小建全 0 的 \`matrix_new\`，双重循环把每个元素搬到旋转后的位置，最后用 \`matrix[:] = matrix_new\` 写回，使调用者看到的是旋转后的矩阵。\r
- **与题意不符**：题目要求原地、不得使用另一个矩阵，本解法使用了 O(n²) 额外空间，仅作理解用；满足题意见解法二。\r
\r
### 代码（Python）解法二：原地四格旋转（符合题意）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def rotate(self, matrix):\r
        """\r
        :type matrix: List[List[int]]\r
        :rtype: None Do not return anything, modify matrix in-place instead.\r
        """\r
        n = len(matrix)\r
\r
        # 只需要遍历左上角的四分之一矩阵\r
        for i in range(n // 2):\r
            for j in range((n + 1) // 2):\r
                # 四个元素循环交换\r
                temp = matrix[i][j]\r
                matrix[i][j] = matrix[n - j - 1][i]\r
                matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]\r
                matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]\r
                matrix[j][n - i - 1] = temp\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **思路**：顺时针 90° 相当于每个「四元组」循环移位：位置 (i, j) → (n-j-1, i) → (n-i-1, n-j-1) → (j, n-i-1) → (i, j)。只需遍历左上角四分之一区域（\`i in [0, n//2)\`，\`j in [0, (n+1)//2)\`），对每个 (i, j) 用临时变量 \`temp\` 做上述四个位置的循环交换，即可完成整矩阵原地旋转。\r
- **为何只遍历四分之一**：每个四元组包含四个对称位置，遍历左上角四分之一时，每个四元组恰好被处理一次，不会重复也不会遗漏。\r
- **图解**：四格旋转示意如下。\r
\r
![旋转图像解法二示意](Leetcode/0315_32.png)\r
\r
- **复杂度**：时间 O(n²)，空间 O(1)，满足原地、不另开矩阵的题意。\r
\r
---\r
\r
<a id="q240"></a>\r
\r
## LeetCode 240. 搜索二维矩阵 II <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
编写一个高效的算法来搜索 m × n 矩阵 \`matrix\` 中的一个目标值 \`target\`。该矩阵具有以下特性：\r
\r
- 每行的元素从左到右升序排列；\r
- 每列的元素从上到下升序排列。\r
\r
### 提示\r
\r
- m == matrix.length  \r
- n == matrix[i].length  \r
- 1 ≤ n, m ≤ 300  \r
- -10⁹ ≤ matrix[i][j] ≤ 10⁹  \r
- -10⁹ ≤ target ≤ 10⁹  \r
\r
示意图如下：\r
\r
![搜索二维矩阵 II 题意示意](Leetcode/0315_4.png)\r
\r
### 代码（Python）解法一：直接暴力扫描矩阵\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def searchMatrix(self, matrix, target):\r
        """\r
        :type matrix: List[List[int]]\r
        :type target: int\r
        :rtype: bool\r
        """\r
        for row in matrix:\r
            for element in row:\r
                if element == target:\r
                    return True\r
        return False\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **思路**：不利用矩阵「行列有序」的性质，直接对每一行、每一个元素做一次遍历比较，找到等于 \`target\` 的元素就返回 \`True\`，遍历结束仍未找到则返回 \`False\`。\r
- **复杂度**：时间复杂度 O(mn)，空间复杂度 O(1)。实现最简单，但没有用上有序信息，是一个「baseline」版本。\r
\r
### 代码（Python）解法二：逐行二分查找\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def searchMatrix(self, matrix, target):\r
        """\r
        :type matrix: List[List[int]]\r
        :type target: int\r
        :rtype: bool\r
        """\r
        for row in matrix:\r
            # 对每一行进行二分查找\r
            left, right = 0, len(row) - 1\r
            while left <= right:\r
                mid = (left + right) // 2\r
                if row[mid] == target:\r
                    return True\r
                elif row[mid] < target:\r
                    left = mid + 1\r
                else:\r
                    right = mid - 1\r
        return False\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **利用有序性**：题目保证每一行是升序的，因此可以对每一行独立使用二分查找，将「在一行中找元素」的复杂度从 O(n) 降到 O(log n)。\r
- **整体复杂度**：共有 m 行，每行一次二分查找，时间复杂度 O(m log n)，空间复杂度 O(1)。比完全暴力更高效，但仍然没有充分利用「每列也有序」这一信息（可以作为进一步优化前的一步）。\r
\r
### 代码（Python）解法三：从右上角开始逐步缩小（Z 字形搜索）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def searchMatrix(self, matrix, target):\r
        """\r
        :type matrix: List[List[int]]\r
        :type target: int\r
        :rtype: bool\r
        """\r
        if not matrix or not matrix[0]:\r
            return False\r
        \r
        m, n = len(matrix), len(matrix[0])\r
        \r
        # 从右上角开始\r
        row, col = 0, n - 1\r
        \r
        while row < m and col >= 0:\r
            if matrix[row][col] == target:\r
                return True\r
            elif matrix[row][col] > target:\r
                # 当前值大于目标，向左移动（列减1）\r
                col -= 1\r
            else:\r
                # 当前值小于目标，向下移动（行加1）\r
                row += 1\r
        \r
        return False\r
</pre>\r
\r
### 思路解析（解法三）\r
\r
- **充分利用行列有序**：从**右上角**出发，当前值若等于 \`target\` 则找到；若大于 \`target\`，说明当前列下方都更大，只能向左（\`col -= 1\`）；若小于 \`target\`，说明当前行左侧都更小，只能向下（\`row += 1\`）。每次比较都能排除一行或一列，形成「Z 字形」搜索路径。\r
- **复杂度**：最多走 m + n 步（行从 0 到 m-1、列从 n-1 到 0），时间复杂度 O(m + n)，空间 O(1)，是本题最优的线性做法。\r
\r
---\r
\r
<a id="q160"></a>\r
\r
## LeetCode 160. 相交链表 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给你两个单链表的头节点 \`headA\` 和 \`headB\`，请你找出并返回两个单链表**相交的起始节点**。如果两个链表不存在相交节点，返回 \`null\`。\r
\r
题目保证整个链式结构中**不出现环**。\r
\r
示意图如下：\r
\r
![相交链表示意图](Leetcode/0315_5.png)\r
\r
### 提示\r
\r
- listA 中节点数目为 m  \r
- listB 中节点数目为 n  \r
- 1 ≤ m, n ≤ 3 × 10⁴  \r
- 1 ≤ Node.val ≤ 10⁵  \r
- 0 ≤ skipA ≤ m  \r
- 0 ≤ skipB ≤ n  \r
- 如果 listA 和 listB 没有交点，\`intersectVal\` 为 0  \r
- 如果 listA 和 listB 有交点，\`intersectVal == listA[skipA] == listB[skipB]\`\r
\r
**进阶**：你能否设计一个时间复杂度 O(m + n)、仅用 O(1) 内存的方案？\r
\r
### 代码（Python）解法一：哈希集合记录访问过的节点\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def getIntersectionNode(self, headA, headB):\r
        """\r
        :type headA: ListNode\r
        :type headB: ListNode\r
        :rtype: ListNode\r
        """\r
        visited = set()\r
\r
        temp = headA\r
        while temp:\r
            visited.add(temp)\r
            temp = temp.next\r
\r
        temp = headB\r
        while temp:\r
            if temp in visited:\r
                return temp\r
            temp = temp.next\r
\r
        return None\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **核心想法**：先遍历链表 A，把遇到的每个节点指针都丢进集合 \`visited\`；再遍历链表 B，一边走一边判断当前节点是否已经在集合中，若在则说明这是两个链表第一个相交的节点。\r
- **正确性**：相交意味着从某个节点开始，接下来的 next 指针完全共享，因此一旦在 B 的遍历过程中遇到集合中已有的节点，这个节点必然是相交起点。\r
- **复杂度**：时间复杂度 O(m + n)，空间复杂度 O(m)（集合存储链表 A 的节点）。满足时间复杂度要求，但没有做到进阶中的 O(1) 额外空间（可以作为后续双指针解法的对比基线）。\r
\r
### 代码（Python）解法二：双指针「对齐长度」法（O(1) 空间）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def getIntersectionNode(self, headA, headB):\r
        """\r
        :type headA: ListNode\r
        :type headB: ListNode\r
        :rtype: ListNode\r
        """\r
        # 如果任一链表为空，不可能相交\r
        if not headA or not headB:\r
            return None\r
        \r
        # 双指针初始化\r
        pA, pB = headA, headB\r
        \r
        # 当两个指针不相遇时继续移动\r
        while pA != pB:\r
            # pA 移动：如果到达末尾，转到 headB；否则继续向前\r
            if pA:\r
                pA = pA.next\r
            else:\r
                pA = headB\r
            \r
            # pB 移动：如果到达末尾，转到 headA；否则继续向前\r
            if pB:\r
                pB = pB.next\r
            else:\r
                pB = headA\r
        \r
        # 返回相遇点（可能是交点，也可能是 None）\r
        return pA\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **长度对齐的巧妙写法**：指针 \`pA\` 先走完链表 A 再接链表 B，\`pB\` 先走完链表 B 再接链表 A，它们总共都走了 \`lenA + lenB\` 步。如果有交点，走到第二轮时会在交点处相遇；如果没有交点，则最终都变为 \`None\`，也在同一位置相遇。\r
- **为什么一定会相遇**：第一轮结束时，\`pA\` 比 \`pB\` 多走了 \`lenA - lenB\` 或反之，通过第二轮互换起点，这部分差距被刚好抵消，因此两者会在同一时刻到达交点（或同时为 \`None\`）。\r
- **复杂度**：时间复杂度 O(m + n)，空间复杂度 O(1)，完全满足进阶要求，也是本题最常用、最优雅的写法之一。\r
`,l6=`---\r
title: "Leetcode 栈 1（有效的括号，最小栈）"\r
date: "2026-04-12"\r
tags: ["Leetcode", "栈", "字符串", "设计", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [20 有效的括号](#q20) ｜ [155 最小栈](#q155)\r
\r
<a id="q20"></a>\r
\r
## LeetCode 20. 有效的括号 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**简单。** 给定只包含 **\`'('\`、\`')'\`、\`'['\`、\`']'\`、\`'{'\`、\`'}'\`** 的字符串 \`s\`，判断其是否**有效**。\r
\r
有效需同时满足：\r
\r
1. 左括号必须用**相同类型**的右括号闭合；  \r
2. 左括号必须以**正确顺序**闭合；  \r
3. 每个右括号都有**对应**的同类型左括号。\r
\r
### 提示\r
\r
- \`1 ≤ len(s) ≤ 10^4\`  \r
- \`s\` **仅**由括号字符 \`'()[]{}'\` 组成\r
\r
### 代码（Python）：栈\r
\r
用 **栈** 模拟：遇左括号则**入栈**；遇右括号则若栈顶为**匹配的左括号**则**出栈**，否则无效。若栈空时遇到右括号，也无效。扫完后栈须**为空**。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def isValid(self, s):\r
        """\r
        :type s: str\r
        :rtype: bool\r
        """\r
        stack = []\r
        for i in range(len(s)):\r
            if not stack:\r
                if s[i] == "(" or s[i] == "[" or s[i] == "{":\r
                    stack.append(s[i])\r
                else:\r
                    return False\r
            else:\r
                if s[i] == "(" or s[i] == "[" or s[i] == "{":\r
                    stack.append(s[i])\r
                else:\r
                    if stack[-1] == "(" and s[i] == ")":\r
                        stack.pop()\r
                    elif stack[-1] == "[" and s[i] == "]":\r
                        stack.pop()\r
                    elif stack[-1] == "{" and s[i] == "}":\r
                        stack.pop()\r
                    else:\r
                        return False\r
        if not stack:\r
            return True\r
        else:\r
            return False\r
</pre>\r
\r
### 思路解析\r
\r
- **栈顶配对**：右括号只与**当前栈顶**左括号匹配，保证「从内向外」闭合。\r
- **提前失败**：空栈遇右括号、或栈顶与当前右括号类型不一致，均可立刻 **\`return False\`**。\r
- **结束条件**：遍历结束后栈为空说明左右括号数量与顺序均匹配。\r
- **复杂度**：每个字符最多入栈、出栈各一次，时间 **O(n)**，栈规模 **O(n)**。\r
\r
<a id="q155"></a>\r
\r
## LeetCode 155. 最小栈 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
设计支持 \`push\`、\`pop\`、\`top\` 操作，并能在**常数时间**内检索最小元素的栈 \`MinStack\`。\r
\r
需要实现：\r
\r
- \`MinStack()\`：初始化栈对象。\r
- \`push(val)\`：将元素压栈。\r
- \`pop()\`：删除栈顶元素。\r
- \`top()\`：获取栈顶元素。\r
- \`getMin()\`：获取当前栈最小元素。\r
\r
### 提示\r
\r
- \`-2^31 ≤ val ≤ 2^31 - 1\`\r
- \`pop\`、\`top\`、\`getMin\` 总是在**非空栈**上调用\r
- \`push\`、\`pop\`、\`top\`、\`getMin\` 最多被调用 \`3 * 10^4\` 次\r
\r
### 代码（Python）：双栈同步维护最小值\r
\r
主栈 \`stack\` 存所有元素；辅助栈 \`min_stack\` 的每一层记录“到当前层为止的最小值”。这样在任意时刻，\`min_stack[-1]\` 就是当前最小值，\`getMin()\` 可 O(1) 返回。\r
\r
<pre class="code-gray">\r
class MinStack(object):\r
\r
    def __init__(self):\r
        self.stack = []\r
        self.min_stack = [2 ** 31]\r
\r
    def push(self, val):\r
        """\r
        :type val: int\r
        :rtype: None\r
        """\r
        self.stack.append(val)\r
        if val < self.min_stack[-1]:\r
            self.min_stack.append(val)\r
        else:\r
            self.min_stack.append(self.min_stack[-1])\r
\r
    def pop(self):\r
        """\r
        :rtype: None\r
        """\r
        self.stack.pop()\r
        self.min_stack.pop()\r
\r
    def top(self):\r
        """\r
        :rtype: int\r
        """\r
        return self.stack[-1]\r
\r
    def getMin(self):\r
        """\r
        :rtype: int\r
        """\r
        return self.min_stack[-1]\r
</pre>\r
\r
**讲解动图**\r
<img src="Leetcode/0413.gif" alt="最小栈 双栈维护最小值示意" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 思路解析\r
\r
- **同步压栈**：每次 \`push\` 都向 \`min_stack\` 压入“新最小值”或“沿用旧最小值”，保证两栈长度一致。\r
- **同步弹栈**：\`pop\` 时两栈同时 \`pop\`，使最小值状态与主栈保持同步。\r
- **O(1) 查询最小值**：\`getMin\` 直接返回 \`min_stack[-1]\`，无需扫描主栈。\r
- **复杂度**：\`push/pop/top/getMin\` 均为 **O(1)**；额外空间 **O(n)**。\r
`,c6=`---\r
title: "Leetcode 栈 2（字符串解码，每日温度，柱状图最大矩形）"\r
date: "2026-04-14"\r
tags: ["Leetcode", "栈", "字符串", "单调栈", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [394 字符串解码](#q394) ｜ [739 每日温度](#q739) ｜ [84 最大矩形](#q84)\r
\r
<a id="q394"></a>\r
\r
## LeetCode 394. 字符串解码 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个经过编码的字符串 \`s\`，按规则 \`k[encoded_string]\` 解码并返回结果，其中 \`encoded_string\` 需要重复 \`k\` 次（\`k\` 为正整数）。可保证输入有效，且原始数据不含数字（数字只表示重复次数）。\r
\r
### 测试样例\r
\r
- **示例 1：** \`s = "3[a]2[bc]"\`  \r
  输出：\`"aaabcbc"\`\r
- **示例 2：** \`s = "3[a2[c]]"\`  \r
  输出：\`"accaccacc"\`\r
- **示例 3：** \`s = "2[abc]3[cd]ef"\`  \r
  输出：\`"abcabccdcdcdef"\`\r
- **示例 4：** \`s = "abc3[cd]xyz"\`  \r
  输出：\`"abccdcdcdxyz"\`\r
\r
### 提示\r
\r
- \`1 ≤ len(s) ≤ 30\`\r
- \`s\` 由小写英文字母、数字和方括号 \`'[]'\` 组成\r
- \`s\` 是有效输入，且整数范围在 \`[1, 300]\`\r
\r
### 代码（Python）：栈展开（站主自主完成）\r
\r
遇到普通字符（含数字、左括号）先入栈；遇到右括号 \`]\` 时，弹栈得到本层 \`temp\`，再弹出前面的数字字符计算重复次数 \`repeat\`，把展开后的内容压回栈中。最终栈内容拼接即答案。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def decodeString(self, s):\r
        """\r
        :type s: str\r
        :rtype: str\r
        """\r
        stack = []\r
        for i in range(len(s)):\r
            temp = []\r
            num = []\r
            repeat = 0\r
            if s[i] != "]":\r
                stack.append(s[i])\r
            else:\r
                while stack[-1] != "[":\r
                    temp.append(stack.pop())    # temp现在是要重复的内容\r
                stack.pop()                     # 现在把 '[' pop掉\r
                while stack[-1] in "0123456789":\r
                    num.append(stack.pop())\r
                    if not stack:\r
                        break\r
                for j in range(len(num)):\r
                    repeat += 10 ** j * int(num[j])\r
\r
                for k in range(repeat):\r
                    temtemp = temp[:]      # 这里必须要加[:]，不然temtemp和temp指向的是同一个地址\r
                    while temtemp:\r
                        stack.append(temtemp.pop())\r
        return "".join(stack)\r
</pre>\r
\r
### 思路解析\r
\r
- **按层还原**：每遇到 \`]\` 就还原一层最近的 \`[...]\`，天然支持嵌套结构。\r
- **数字逆序处理**：数字是从栈顶反向弹出的，\`repeat += 10 ** j * int(num[j])\` 可恢复正常十进制值。\r
- **复制列表**：\`temtemp = temp[:]\` 保证每轮重复使用独立副本，避免就地 \`pop\` 破坏 \`temp\`。\r
- **复杂度**：与解码后字符串长度线性相关；在题目约束下可通过。\r
\r
<a id="q739"></a>\r
\r
## LeetCode 739. 每日温度 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定整数数组 \`temperatures\`，\`answer[i]\` 表示第 \`i\` 天之后要等几天才会出现更高温度；若之后都不会升高，则 \`answer[i] = 0\`。\r
\r
### 测试样例\r
\r
- **示例 1：** \`temperatures = [73,74,75,71,69,72,76,73]\`  \r
  输出：\`[1,1,4,2,1,1,0,0]\`\r
- **示例 2：** \`temperatures = [30,40,50,60]\`  \r
  输出：\`[1,1,1,0]\`\r
- **示例 3：** \`temperatures = [30,60,90]\`  \r
  输出：\`[1,1,0]\`\r
\r
### 提示\r
\r
- \`1 ≤ len(temperatures) ≤ 10^5\`\r
- \`30 ≤ temperatures[i] ≤ 100\`\r
\r
### 代码（Python）：单调栈（站主自主完成）\r
\r
维护一个**单调递减温度栈**（配套下标栈 \`index\`）。扫描到新温度 \`temperatures[i]\` 时，若它高于栈顶温度，说明找到了栈顶那一天的“下一个更高温度”，即可计算天数差并弹栈；重复直到恢复单调，再把当前温度与下标入栈。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def dailyTemperatures(self, temperatures):\r
        """\r
        :type temperatures: List[int]\r
        :rtype: List[int]\r
        """\r
        stack = []\r
        index = []\r
        ans = [0] * len(temperatures)\r
        for i in range(len(temperatures)):\r
            if not stack:\r
                index.append(i)\r
                stack.append(temperatures[i])\r
            else:\r
                if temperatures[i] <= stack[-1]:\r
                    stack.append(temperatures[i])\r
                    index.append(i)\r
                else:\r
                    while temperatures[i] > stack[-1]:\r
                        ans[index[-1]] = i - index[-1]\r
                        index.pop()\r
                        stack.pop()\r
                        if not stack:\r
                            break\r
                    index.append(i)\r
                    stack.append(temperatures[i])\r
        return ans\r
</pre>\r
\r
### 思路解析\r
\r
- **单调性**：\`stack\` 从栈底到栈顶递减，栈中每个位置都还没找到下一个更高温度。\r
- **弹栈更新**：当当前温度更高时，持续弹出所有更低温度，并立刻计算答案 \`i - index[-1]\`。\r
- **下标作用**：\`index\` 与 \`stack\` 同步，保证能 O(1) 取到“被更新那天”的位置。\r
- **复杂度**：每个下标最多入栈、出栈一次，时间 **O(n)**，空间 **O(n)**。\r
\r
<a id="q84"></a>\r
\r
## LeetCode 84. 柱状图中最大的矩形 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定 \`n\` 个非负整数 \`heights\` 表示柱状图高度，每个柱子宽度为 1。求该柱状图中可勾勒出的**最大矩形面积**。\r
\r
### 提示\r
\r
- \`1 ≤ len(heights) ≤ 10^5\`\r
- \`0 ≤ heights[i] ≤ 10^4\`\r
\r
### 示例图\r
\r
题目示意图（资源 \`public/Leetcode/0414.png\`）：\r
\r
<img src="Leetcode/0414.png" alt="柱状图最大矩形 题目示例" style="max-width: 640px; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 代码（Python）解法一：左右最近更小值 + 单调栈\r
\r
先分别求每个柱子的**左侧第一个更小元素下标** \`index_left[i]\` 与**右侧第一个更小元素下标** \`index_right[i]\`。以 \`heights[i]\` 为高时，最大可扩展宽度为 \`index_right[i] - index_left[i] - 1\`，面积即 \`heights[i] * 宽度\`，遍历取最大。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def largestRectangleArea(self, heights):\r
        """\r
        :type heights: List[int]\r
        :rtype: int\r
        """\r
        # 找左边界\r
        index_left = []\r
        index = []\r
        stack = []\r
        for i in range(len(heights)):\r
            if not stack:\r
                index_left.append(-1)\r
                index.append(i)\r
                stack.append(heights[i])\r
            else:\r
                while heights[i] <= stack[-1]:\r
                    stack.pop()\r
                    index.pop()\r
                    if not stack:\r
                        break\r
                if not stack:\r
                    index_left.append(-1)\r
                else:\r
                    index_left.append(index[-1])\r
                stack.append(heights[i])\r
                index.append(i)\r
\r
        # 找右边界\r
        index_right = [0] * len(heights)\r
        index = []\r
        stack = []\r
        for i in range(len(heights) - 1, -1, -1):\r
            if not stack:\r
                index_right[i] = len(heights)\r
                index.append(i)\r
                stack.append(heights[i])\r
            else:\r
                while heights[i] <= stack[-1]:\r
                    stack.pop()\r
                    index.pop()\r
                    if not stack:\r
                        break\r
                if not stack:\r
                    index_right[i] = len(heights)\r
                else:\r
                    index_right[i] = index[-1]\r
                stack.append(heights[i])\r
                index.append(i)\r
\r
        # 根据左右边界找最大值\r
        max_area = 0\r
        for i in range(len(heights)):\r
            area = heights[i] * (index_right[i] - index_left[i] - 1)\r
            if area > max_area:\r
                max_area = area\r
        return max_area\r
</pre>\r
\r
### 思路解析（解法一）\r
\r
- **单调栈边界**：左扫维护递增栈可得到左侧最近更小元素；右扫同理得到右侧最近更小元素。\r
- **面积公式**：固定高度 \`heights[i]\` 时，左右边界之外都是更小值，故可覆盖的连续宽度是 \`right - left - 1\`。\r
- **重复高度处理**：用 \`<=\` 弹栈可保证边界严格指向“更小值”而非“相等值”，避免宽度重复计算混乱。\r
- **复杂度**：每个下标在左右两次扫描中最多进栈出栈各一次，总时间 **O(n)**，空间 **O(n)**。\r
\r
### 代码（Python）解法二：单调栈 + 尾部哨兵 0（一次扫描）\r
\r
在末尾追加一个高度 \`0\` 作为**哨兵**，强制把栈中剩余柱子一次性结算。栈内存放下标，且对应高度单调不降；当遇到更矮柱子时，持续弹出并把被弹出的柱高作为当前矩形高度，宽度由“当前下标 \`i\` 与弹出后新的栈顶”确定。\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def largestRectangleArea(self, heights):\r
        heights.append(0)\r
        n = len(heights)\r
        stack = []\r
        ans = 0\r
        for i in range(n):\r
            while stack and heights[i] < heights[stack[-1]]:\r
                x = stack.pop()\r
                area = (i - stack[-1] - 1 if stack else i) * heights[x]\r
                ans = max(ans, area)\r
            stack.append(i)\r
        return ans\r
</pre>\r
\r
### 思路解析（解法二）\r
\r
- **哨兵作用**：\`heights.append(0)\` 保证最后会触发弹栈，避免循环后再单独清栈。\r
- **宽度计算**：弹出 \`x\` 后，若栈非空，左边界是 \`stack[-1]\`，宽度是 \`i - stack[-1] - 1\`；若栈空，说明左侧都不小于 \`heights[x]\`，宽度是 \`i\`。\r
- **与解法一关系**：本质仍是找“左右最近更小值”，只是把边界计算隐含在弹栈时完成。\r
- **复杂度**：每个下标最多入栈、出栈一次，时间 **O(n)**，空间 **O(n)**。\r
`,d6=`---\r
title: "Leetcode 技巧 1（只出现一次的数字、多数元素、颜色分类、下一个排列）"\r
date: "2026-05-04"\r
tags: ["Leetcode", "技巧", "位运算", "数组", "双指针", "刷题笔记"]\r
---\r
\r
<a id="top"></a>\r
\r
**题号直达：** [136 只出现一次的数字](#q136) ｜ [169 多数元素](#q169) ｜ [75 颜色分类](#q75) ｜ [31 下一个排列](#q31)\r
\r
<a id="q136"></a>\r
\r
## LeetCode 136. 只出现一次的数字 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定一个**非空**整数数组 \`nums\`，除某个元素仅出现**一次**外，其余每个元素均出现**两次**。找出那个只出现了一次的元素。\r
\r
**要求**：算法应具**线性时间复杂度**；且仅使用**常数额外空间**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [2, 2, 1]\`  \r
  输出：\`1\`\r
- **示例 2：** \`nums = [4, 1, 2, 1, 2]\`  \r
  输出：\`4\`\r
- **示例 3：** \`nums = [1]\`  \r
  输出：\`1\`\r
\r
### 提示\r
\r
- \`1 <= nums.length <= 3 * 10^4\`\r
- \`-3 * 10^4 <= nums[i] <= 3 * 10^4\`\r
- 除一个元素只出现一次外，其余均恰出现两次\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def singleNumber(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        s = nums[0]\r
        for i in range(1, len(nums)):\r
            s = s ^ nums[i]\r
        return s\r
</pre>\r
\r
### 思路解析\r
\r
**异或（\`^\`）**：\`a ^ a = 0\`，\`a ^ 0 = a\`，且满足交换律、结合律。数组里成对出现的数在全程异或中会互相抵消，最后剩下唯一的那个数。\r
\r
从 \`nums[0]\` 起依次异或即可；**时间 O(n)**，**额外空间 O(1)**。\r
\r
<a id="q169"></a>\r
\r
## LeetCode 169. 多数元素 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定大小为 \`n\` 的数组 \`nums\`，返回其中的**多数元素**。\r
\r
**多数元素**：在数组中出现次数**严格大于** **\`⌊ n/2 ⌋\`** 的元素。\r
\r
题目保证数组**非空**且**多数元素一定存在**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [3, 2, 3]\`  \r
  输出：\`3\`\r
- **示例 2：** \`nums = [2, 2, 1, 1, 1, 2, 2]\`  \r
  输出：\`2\`\r
\r
### 提示\r
\r
- \`n == nums.length\`\r
- \`1 <= n <= 5 * 10^4\`\r
- \`-10^9 <= nums[i] <= 10^9\`\r
\r
**进阶**：尝试设计 **O(n)** 时间且 **O(1)** 空间（如摩尔投票）；下面「栈」写法时间仍为 **O(n)**，栈深度最坏 **O(n)**，额外空间为栈规模。\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def majorityElement(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: int\r
        """\r
        stack = []\r
        for i in range(len(nums)):\r
            if not stack:\r
                stack.append(nums[i])\r
            elif nums[i] == stack[-1]:\r
                stack.append(nums[i])\r
            else:\r
                stack.pop()\r
        return stack[0]\r
</pre>\r
\r
### 思路解析\r
\r
用**栈**做「消消乐」：依次扫数组，栈空则压入当前值；若与栈顶**相同**则再压入；若**不同**则弹栈一次（相当于扔掉一对互不相同的数）。众数出现次数超过一半，与其它数两两消去后，**最后不可能被消光**，栈底（本题中最后 \`stack[0]\`）即为多数元素。\r
\r
- **时间复杂度**：**O(n)**。  \r
- **空间复杂度**：栈最坏 **O(n)**；若需 **O(1)** 空间可改写为**摩尔投票**（只记「当前候选」与计数，不相等时计数减一而非用栈存元素）。\r
\r
<a id="q75"></a>\r
\r
## LeetCode 75. 颜色分类 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
给定长度为 \`n\` 的数组 \`nums\`，其中元素只取 **\`0\`、\`1\`、\`2\`**，分别表示红、白、蓝。请**原地**对 \`nums\` 排序，使**同色相邻**，且顺序为**红 → 白 → 蓝**（即 **\`0\` 在前、\`1\` 其次、\`2\` 在后**）。\r
\r
**要求**：不要用内置排序；**进阶**可做到**单次扫描**且仅**常数额外空间**。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [2,0,2,1,1,0]\`  \r
  输出：\`[0,0,1,1,2,2]\`（原地修改后的 \`nums\`）\r
- **示例 2：** \`nums = [2,0,1]\`  \r
  输出：\`[0,1,2]\`\r
\r
### 提示\r
\r
- \`n == nums.length\`\r
- \`1 <= n <= 300\`\r
- \`nums[i]\` 为 \`0\`、\`1\` 或 \`2\`\r
\r
<video controls playsinline preload="metadata" src="Leetcode/0505.mp4" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;"></video>\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def sortColors(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: None Do not return anything, modify nums in-place instead.\r
        """\r
        p0 = 0\r
        p1 = 0\r
        for i in range(len(nums)):\r
            if nums[i] == 0:\r
                nums[i], nums[p0] = nums[p0], nums[i]\r
                if p1 > p0:\r
                    nums[i], nums[p1] = nums[p1], nums[i]\r
                p0 += 1\r
                p1 += 1\r
\r
            elif nums[i] == 1:\r
                nums[i], nums[p1] = nums[p1], nums[i]\r
                p1 += 1\r
</pre>\r
\r
### 思路解析\r
\r
**双指针**：**\`p0\`** 表示「下一段 **\`0\`** 应落入的位置」**\`p1\`** 表示「下一段 **\`0/1\`** 中 **\`1\`** 应落入的位置」（\`[0, p0)\` 全 \`0\`，\`[p0, p1)\` 全 \`1\`，其后为待定的 \`2\`）。\r
\r
从左向右扫 **\`i\`**：  \r
- 遇 **\`0\`**：先与 **\`p0\`** 交换，把 \`0\` 放到左端；若 **\`p1 > p0\`**，说明 **\`p0\`** 处原来已是 **\`1\`**，被 Swap 到 **\`i\`** 后需再与 **\`p1\`** 交换，把 **\`1\`** 放回 **\`1\`** 区。然后 **\`p0\`、\`p1\`** 各右移一格。  \r
- 遇 **\`1\`**：与 **\`p1\`** 交换后 **\`p1 += 1\`**。  \r
- 遇 **\`2\`**：不交换（自然留在右侧）。\r
\r
一趟遍历、两个下标，满足进阶的 **O(n)** 时间与 **O(1)** 额外空间。\r
\r
<a id="q31"></a>\r
\r
## LeetCode 31. 下一个排列 <sub>[↑](#top)</sub>\r
\r
### 题目\r
\r
**排列**：整数数组的一种线性摆放方式。\r
\r
**下一个排列**：在所有排列按**字典序**从小到大排好时，当前排列的**下一个**更大排列；若当前已是最大（整体**严格递减**），则重排为**最小**字典序（升序）。\r
\r
**要求**：**原地**修改 \`nums\`；仅使用**常数级**额外空间。\r
\r
### 测试样例\r
\r
- **示例 1：** \`nums = [1, 2, 3]\`  \r
  输出：\`[1, 3, 2]\`\r
- **示例 2：** \`nums = [3, 2, 1]\`  \r
  输出：\`[1, 2, 3]\`\r
- **示例 3：** \`nums = [1, 1, 5]\`  \r
  输出：\`[1, 5, 1]\`\r
\r
### 提示\r
\r
- \`1 <= nums.length <= 100\`\r
- \`0 <= nums[i] <= 100\`\r
\r
<img src="Leetcode/0506.gif" alt="下一个排列：字典序调整示意" style="max-width: 640px; width: 100%; border-radius: 8px; margin: 16px auto; display: block;">\r
\r
### 代码（Python）\r
\r
<pre class="code-gray">\r
class Solution(object):\r
    def nextPermutation(self, nums):\r
        """\r
        :type nums: List[int]\r
        :rtype: None Do not return anything, modify nums in-place instead.\r
        """\r
        if len(nums) == 1:\r
            return\r
        s = nums[-1]\r
        for i in range(len(nums) - 2, -2, -1):\r
            if i == -1:\r
                break\r
            if nums[i] < s:\r
                break\r
            else:\r
                s = nums[i]\r
\r
        for j in range(len(nums) - 1, -1, -1):\r
            if nums[j] > nums[i]:\r
                break\r
\r
        if i >= 0:\r
            nums[i], nums[j] = nums[j], nums[i]\r
\r
        def invert(s):\r
            for k in range(len(s) // 2):\r
                s[k], s[len(s) - 1 - k] = s[len(s) - 1 - k], s[k]\r
            return s\r
\r
        nums[i + 1 :] = invert(nums[i + 1 :])\r
</pre>\r
\r
### 思路解析\r
\r
经典三步：**①** 从右往左找第一个 **\`nums[i] < nums[i+1]\`** 的位置（代码里用变量 **\`s\`** 维护右侧「扫描过的最小后缀」实现同一判断）；若不存在则 **\`i == -1\`**，说明整体递减，直接将**整段**反转成升序。  \r
**②** 否则在右侧找**最小的大于 \`nums[i]\`** 的 **\`nums[j]\`**，与 **\`nums[i]\`** 交换。  \r
**③** 将 **\`i\` 之后**的后缀**反转**，使其变为升序，得到恰好大一点的排列。\r
\r
- **时间复杂度**：**O(n)**。  \r
- **空间复杂度**：**O(1)**（\`invert\` 仅对后缀原地交换；若避免辅助函数也可内联）。\r
`,f6=`---\r
title: "Research Note：特征点相似度与投影效果记录（2026-03-15）"\r
date: "2026-03-15"\r
tags: ["Research", "计算机视觉", "特征点", "Diffusion Model"]\r
---\r
\r
## 1. 采样点与特征匹配点的余弦相似度热图\r
\r
### 视频\r
\r
<video src="research/0315/hotmap.mp4" controls width="100%" style="max-width: 640px; border-radius: 8px; margin: 16px 0;"></video>\r
\r
### 记录\r
\r
完成了采样点到特征匹配点的**余弦相似度矩阵热图**绘制，不过从可视化效果上看：\r
\r
- 由于采样点之间的距离较近，导致理想情况下很“干净”的单位阵效果并不明显，**非对角元素的相似度依旧偏高**；\r
- 在 **二维热图** 中无法直接体现采样点之间的真实几何距离远近，只能看到相似度关系。\r
\r
但整体上，**单位阵结构仍然是可见的**：热图的斜对角线上呈现明显的红色，高相似度带说明多数特征点的匹配是正确的。\r
\r
---\r
\r
## 2. 3D 特征点投影到 2D 的效果\r
\r
### 视频\r
\r
<video src="research/0315/cup.mp4" controls width="100%" style="max-width: 640px; border-radius: 8px; margin: 16px 0;"></video>\r
\r
### 记录\r
\r
- 将三维空间中的特征点，利用**相机内参等标定信息**，投影到了图像平面上的二维坐标；\r
- 从视频效果来看，**投影质量良好**：所有点都稳定落在杯子表面的固定位置上，随时间变化不存在明显漂移或错位。\r
\r
后续计划：\r
\r
- 使用这些投影后的 2D 特征点作为条件，引入到 **Diffusion Model** 的训练流程中；\r
- 观察特征点约束对生成质量、几何一致性等指标的影响。\r
\r
`,h6=`---\r
title: "Research Note：采样点可见性检测与特征采集（2026-03-16）"\r
date: "2026-03-16"\r
tags: ["Research", "计算机视觉", "特征点", "Depth", "Diffusion Model"]\r
---\r
\r
## 1. 基于深度图的采样点可见性检测\r
\r
### 视频\r
\r
<video src="research/0316/point.mp4" controls width="100%" style="max-width: 640px; border-radius: 8px; margin: 16px 0;"></video>\r
\r
### 记录\r
\r
在前一天完成「真值点 3D → 2D 投影」工作的基础上，今天为**采样点增加了可见性检测**逻辑，用于判断采样点在当前相机视角下是否被遮挡。\r
\r
- **思路**：对于每个 3D 采样点，在当前相机位姿下计算其到相机中心的**投影距离**；同时使用深度图中对应 2D 投影像素位置的**深度值**。  \r
  比较「深度图中的深度」与「几何投影得到的距离」，以此判断该采样点是否被前景遮挡。\r
- **判定规则**：\r
  - 令 \`delta = abs(d_depth_image - d_proj)\`。  \r
  - 若 \`delta > threshold\`，认为该采样点在相机视角下**被遮挡**，在视频中**隐去**；\r
  - 若 \`delta <= threshold\`，认为该采样点**未被遮挡**，在视频中正常显示。\r
\r
从视频效果上看，不可见的采样点已经能够被较好地剔除，整体可视化更贴近真实可见区域，为后续只用「可见点」参与训练打下基础。\r
\r
---\r
\r
## 2. 余弦相似度矩阵与 DiFT 特征点采集\r
\r
今天还完成了：\r
\r
- **余弦相似度矩阵**的计算与记录，用于度量不同特征点/采样点之间的表征相似性；\r
- **DiFT 特征点位置**的完整采集，为后续条件控制提供几何锚点。\r
\r
下一步计划：\r
\r
- 尝试将这些特征（相似度矩阵 + DiFT 特征点）作为条件，接入 **Diffusion Model** 进行训练；\r
- 重点观察在有几何与可见性约束下，Diffusion 生成结果在**形状保持**、**遮挡一致性**等方面的提升情况。\r
\r
`,p6=`---\r
title: "Research Note：Diffusion 接口与推理搭建（2026-03-20）"\r
date: "2026-03-20"\r
tags: ["Research", "Diffusion Model", "DiFT", "机械臂", "抓取"]\r
---\r
\r
## 1. Diffusion Model 接口与训练\r
\r
今天完成了 **Diffusion Model 训练接口**的搭建，当前可以**正常完成训练**。\r
\r
### 训练数据与维度\r
\r
训练条件/输入侧包含三类信息：\r
\r
| 内容 | 说明 | 本配置下维度 |\r
|------|------|----------------|\r
| **qpos** | 关节信息 | 16 |\r
| **特征点坐标** | \\(K\\) 个采样点，每点 2D | K x 2 |\r
| **余弦相似度矩阵** | 点对之间的相似度 | K x K |\r
\r
本日记录中 **采样点数 \\(K = 30\\)**，**关节维度为 16**，则训练数据总维度为：\r
\r
16 + 30 x 2 + 30 x 30 = 16 + 60 + 900 = 976\r
\r
---\r
\r
## 2. 推理模块\r
\r
**推理模块**已完成搭建。推理过程中**实时**进行 **DiFT 特征提取**，并计算**相似度矩阵**，再送入已训练好的扩散模型生成动作/位姿相关输出。\r
\r
### 视频\r
\r
<video src="research/0319/0319.mp4" controls preload="metadata" width="100%" style="max-width: 640px; border-radius: 8px; margin: 16px 0;"></video>\r
\r
---\r
\r
## 3. 当前现象与后续计划\r
\r
- **现象**：夹爪在**水平面内的抓取位姿大致正确**，但**沿竖直方向下压/夹取的深度不够**，与期望接触位置仍有偏差。\r
- **后续**：将针对深度维度与条件对齐做进一步分析。\r
\r
### 可能原因（简要列举，供排查）\r
\r
1. **监督与损失**：总损失对「末端高度 / 沿相机或基座 Z」的约束偏弱，或数据中该维度方差小、模型易学成「偏浅」的众数解。  \r
2. **条件分布偏移**：训练时用的特征点、相似度矩阵与推理时**实时 DiFT + 相似度**的分布不一致（域偏移），XY 仍可对齐而 Z 更易失真。  \r
3. **2D 特征与 3D 深度的歧义**：K x 2 主要为图像平面信息，相似度矩阵对「同一平面不同深度」可能区分不足，导致**深度欠定**。  \r
4. **动作空间与执行**：输出若为关节增量或位姿，**执行层限幅、安全高度、或坐标系标定**（手眼、基座高度）可能变相截断了下探行程。  \r
5. **扩散采样**：采样步数、引导强度或噪声尺度若不当，可能压缩输出在深度维上的动态范围。  \r
6. **数据标注/真值**：演示数据中抓取点若在视觉上「看起来对准」但实际接触偏浅，模型会复现同样偏差。\r
\r
以上几点可在后续结合**日志可视化（预测 vs 真值 Z）**、**条件对齐检查**与**开环/闭环对比**逐项验证。\r
`,m6=`---\r
title: "Research Note：推理验证与后续方向（2026-03-28）"\r
date: "2026-03-28"\r
tags: ["Research", "Diffusion Model", "机械臂", "抓取", "特征点", "DiFT"]\r
---\r
\r
## 1. 推理与抓取结果\r
\r
在既有训练流程之上，已完成 **模型推理** 的接入与调试。此前抓取失败的主要原因已定位：**推理阶段未对网络输出的 \`actions\` 做与训练相对应的「反归一化」**（即未将归一化空间中的动作还原到真实动作尺度），导致执行指令与训练分布不一致。\r
\r
修复后，当前在 **仿真环境** 与 **真机实验** 中均能 **成功完成抓取**。\r
\r
### 推理视频\r
\r
**仿真环境（eval）**\r
\r
<video src="research/0328/eval.mp4" controls preload="metadata" width="100%" style="max-width: 640px; border-radius: 8px; margin: 16px 0;"></video>\r
\r
**真机实验（real）**\r
\r
<video src="research/0328/real.mp4" controls preload="metadata" width="100%" style="max-width: 640px; border-radius: 8px; margin: 16px 0;"></video>\r
\r
---\r
\r
## 2. 今日其它进展\r
\r
今日进一步完成了 **推理过程中特征点及其对应关系的可视化**，便于对照模型条件与中间表征，排查对齐问题。\r
\r
---\r
\r
## 3. 与学长讨论后的后续方向\r
\r
1. **利用仿真真值监督扩散训练**  \r
   在仿真中可获得**确定的真值特征点（或真值对应关系）**，以此作为更可靠的监督或条件，用于扩散模型的训练与对齐，减轻纯估计特征带来的噪声。\r
\r
2. **替换特征提取骨干以提升实时性**  \r
   将当前采用的 **DiFT** 特征点提取，逐步尝试替换为 **SD-DINO**、**DINOv2** 或 **DINOv3** 等方案，在精度与**推理速度/实时性**之间做权衡与选型。\r
\r
3. **末端执行器位姿修正**  \r
   结合管线中**最后一级齐次变换矩阵**，对末端执行器位姿做显式修正或标定补偿，减小累积误差对抓取姿态的影响。\r
\r
4. **图结构表征与图网络**  \r
   调研 **图神经网络（GNN）** 等相关工作；探索用**全图结构**（例如全连接图或其它图拓扑）**替代或增强**当前基于**余弦相似度矩阵**的成对关系建模方式，以更灵活地编码点与点之间的交互。\r
`,g6=`---\r
title: "Research Note：末端位姿接入推理与抓取失败分析（2026-04-02）"\r
date: "2026-04-02"\r
tags: ["Research", "Diffusion Model", "机械臂", "抓取", "末端执行器", "位姿估计"]\r
---\r
\r
## 1. 进展\r
\r
已完成**推理过程中末端执行器位姿的获取**（在管线中可读出/估计末端位姿，并具备接入条件模块的数据通路）。\r
\r
进一步将末端位姿**真正参与模型推理条件**（与特征点、相似度等一并作为扩散模型输入或中间约束）后，实验上出现**抓取失败率上升或不稳定**的现象，与「未使用末端位姿参与推理时」可工作的基线形成对比。\r
\r
---\r
\r
## 2. 现象归纳\r
\r
- **基线**：末端位姿仅用于观测或后处理时，抓取可成功或已调通。  \r
- **当前问题**：末端位姿**进入模型推理链路**后，抓取失败或偏差明显。  \r
- 说明问题更可能来自**条件分布、数值尺度、坐标系与训练一致性**，而非单纯「读不到位姿」。\r
\r
---\r
\r
## 3. 可能原因分析（供排查）\r
\r
1. **训练–推理条件不一致（分布偏移）**  \r
   训练阶段若**未**使用与当前一致的末端位姿表征（维数、含义、是否归一化），推理时突然加入或替换条件，会导致条件分布与训练分布不匹配，扩散模型输出的动作/轨迹易偏离可行域。\r
\r
2. **归一化与反归一化未覆盖新通道**  \r
   若在原有 \`qpos\`、特征、相似度上已做归一化，**末端位姿（位置/四元数/欧拉角等）**未用同一套统计量（均值方差或区间映射），则网络内部尺度混乱；若仅对动作反归一化而未对**输入条件**做对称处理，也会放大误差。\r
\r
3. **坐标系与时间对齐**  \r
   末端位姿可能处于**相机坐标系 / 基座坐标系 / 工具坐标系**之一；若训练数据与推理管线使用的系不一致，或位姿与图像、特征点**不在同一时刻**（延迟一帧、异步更新），等价于给模型错误的几何约束。\r
\r
4. **齐次变换链误差累积**  \r
   手眼标定、关节角读数、DH 参数或**最后一级齐次变换**若存在小偏差，在参与高维条件时会被模型放大；尤其当位姿以**高权重**进入条件时，对输出抓取点影响更敏感。\r
\r
5. **模型容量与条件冗余**  \r
   末端位姿与已有特征（如 2D 特征点、相似度矩阵）**信息重叠**或**冲突**时，若未做降维、门控或显式融合设计，网络可能过拟合某一路噪声，导致策略退化。\r
\r
6. **仿真与真机差异**  \r
   真机末端位姿噪声更大；若训练主要在仿真、推理在真机且强依赖位姿条件，失败率上升符合预期，需**域随机化**或**真机微调**。\r
\r
---\r
\r
## 4. 改进措施（可逐项验证）\r
\r
| 方向 | 具体措施 |\r
|------|----------|\r
| **对齐训练** | 在训练数据中**显式加入**与推理同定义、同归一化的末端位姿通道；或做短时**微调**使条件分布一致。 |\r
| **统一归一化** | 对末端位姿各分量统计训练集 mean/std 或固定区间，与 \`qpos\`、特征等**同一套管线**保存与加载；推理侧严格复现。 |\r
| **坐标系与同步** | 文档化「位姿所在坐标系 + 与图像时间戳对齐方式」；必要时只做**相对位姿**（相对上一帧或相对物体估计）以降低系间常偏。 |\r
| **标定与残差** | 复核手眼与运动学；对末端位姿加**小范围残差校正**（标定板或固定场景下的系统性偏差拟合）。 |\r
| **条件消融** | 先**关闭**末端位姿仅保留其它条件，再**逐步加权**位姿项，定位是「接入即坏」还是「权重大才坏」。 |\r
| **融合方式** | 尝试位姿与视觉特征**拼接后 MLP / 交叉注意力**，避免简单硬拼接维度过大且无交互。 |\r
| **真机数据** | 采集少量「带可靠末端位姿标签」的真机片段**微调**或 **LoRA**，缓解 sim-to-real。 |\r
\r
---\r
\r
## 5. 小结\r
\r
末端位姿**能算出来**与**适合作为当前扩散策略的有效条件**是两件事；当前失败更支持从**条件对齐、归一化、坐标系与训练分布**入手，辅以消融与标定，再考虑结构上的融合改进。后续可在实验记录中固定表格：**条件配置 / 坐标系 / 归一化版本 / 成功率**，便于对比迭代。\r
`,_6=`---\r
title: "Research Note：HDF5 上 geo-sc 复现与特征提取部署（2026-04-12）"\r
date: "2026-04-12"\r
tags: ["Research", "机械臂", "特征提取", "geo-sc", "DIFT", "HDF5", "视觉抓取"]\r
---\r
\r
## 1. 进展\r
\r
在 **HDF5 格式的训练数据**上，已完成 **geo-sc** 方法的**复现**。整体效果与 **DIFT** 相近，可作为同一类几何 / 对应关系表征的参考基线。\r
\r
---\r
\r
## 2. 推理侧观察（DIFT）\r
\r
在推理阶段使用 **DIFT** 的 **\`online_extractor\`** 时，偶发出现**左右镜像式不一致**（特征或中间表征在左右语义上与预期相反）的现象。\r
\r
值得注意的是：**该现象并未明显损害机械臂抓取的鲁棒性**——抓取仍能在多数场景下保持稳定。可能原因包括：策略对绝对左右依赖较弱、闭环视觉或力觉补偿、或任务对粗粒度几何更敏感而对细粒度左右歧义不敏感等（待结合日志与可视化进一步验证）。\r
\r
---\r
\r
## 3. 后续计划\r
\r
计划采用 **geo-sc 路线**部署**特征点实时提取器**，在推理端统一表征与训练分布，并**尝试缓解或消除**上述左右不一致问题，同时保留 geo-sc 与当前数据管线（HDF5）的兼容性，便于对比 DIFT 与 geo-sc 在真机上的长期表现。\r
\r
---\r
\r
## 4. 记录视频\r
\r
资源路径：\`public/research/0412/geo.mp4\`。\r
\r
<video src="research/0412/geo.mp4" controls preload="metadata" width="100%" style="max-width: 640px; border-radius: 8px; margin: 16px 0;"></video>\r
`,y6={class:"article-card"},b6={class:"meta-column"},v6={class:"date-box"},x6={class:"day"},w6={class:"month"},E6={class:"year"},A6={class:"stats-row"},T6={class:"stat"},k6={class:"stat"},I6={class:"info-box"},C6={class:"title"},S6={class:"desc"},R6={key:0,class:"tags"},D6={__name:"ArticleCard",props:{article:{type:Object,required:!0}},setup(n){const e=n,t=zt(()=>e.article.views??0),r=zt(()=>e.article.likes??0);return(i,s)=>(Te(),Se("div",y6,[B("div",b6,[B("div",v6,[B("span",x6,He(n.article.date.split("-")[2]||"DD"),1),B("span",w6,He(n.article.date.split("-")[1]||"MM"),1),B("span",E6,He(n.article.date.split("-")[0]||"YYYY"),1)]),B("div",A6,[B("span",T6,"👁️ "+He(t.value),1),B("span",k6,"❤️ "+He(r.value),1)])]),B("div",I6,[B("h3",C6,He(n.article.title),1),B("p",S6,He(n.article.desc),1),n.article.tags?(Te(),Se("div",R6,[(Te(!0),Se(In,null,mi(n.article.tags,o=>(Te(),Se("span",{key:o},"#"+He(o),1))),128))])):st("",!0)]),s[0]||(s[0]=B("div",{class:"arrow-box"}," → ",-1))]))}},N6=gt(D6,[["__scopeId","data-v-fe5c01d5"]]),P6=()=>{};var I0={};const Z1=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},O6=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},e_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,d=s>>2,p=(s&3)<<4|a>>4;let g=(a&15)<<2|c>>6,b=c&63;l||(b=64,o||(g=64)),r.push(t[d],t[p],t[g],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Z1(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):O6(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const p=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||a==null||c==null||p==null)throw new L6;const g=s<<2|a>>4;if(r.push(g),c!==64){const b=a<<4&240|c>>2;if(r.push(b),p!==64){const v=c<<6&192|p;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class L6 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const F6=function(n){const e=Z1(n);return e_.encodeByteArray(e,!0)},Nu=function(n){return F6(n).replace(/\./g,"")},n_=function(n){try{return e_.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function M6(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const V6=()=>M6().__FIREBASE_DEFAULTS__,j6=()=>{if(typeof process>"u"||typeof I0>"u")return;const n=I0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},q6=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&n_(n[1]);return e&&JSON.parse(e)},ml=()=>{try{return P6()||V6()||j6()||q6()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},t_=n=>ml()?.emulatorHosts?.[n],B6=n=>{const e=t_(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},r_=()=>ml()?.config,i_=n=>ml()?.[`_${n}`];class U6{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}function no(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function s_(n){return(await fetch(n,{credentials:"include"})).ok}function $6(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Nu(JSON.stringify(t)),Nu(JSON.stringify(o)),""].join(".")}const Fo={};function H6(){const n={prod:[],emulator:[]};for(const e of Object.keys(Fo))Fo[e]?n.emulator.push(e):n.prod.push(e);return n}function z6(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let C0=!1;function o_(n,e){if(typeof window>"u"||typeof document>"u"||!no(window.location.host)||Fo[n]===e||Fo[n]||C0)return;Fo[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=H6().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,b){g.setAttribute("width","24"),g.setAttribute("id",b),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function c(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{C0=!0,o()},g}function d(g,b){g.setAttribute("id",b),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=z6(r),b=t("text"),v=document.getElementById(b)||document.createElement("span"),I=t("learnmore"),D=document.getElementById(I)||document.createElement("a"),L=t("preprendIcon"),V=document.getElementById(L)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const W=g.element;a(W),d(D,I);const z=c();l(V,L),W.append(V,v,D,z),document.body.appendChild(W)}s?(v.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,v.innerText="Preview backend running in this workspace."),v.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function G6(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function W6(){const n=ml()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function K6(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function a_(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Q6(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Y6(){const n=lt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function J6(){return!W6()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function u_(){try{return typeof indexedDB=="object"}catch{return!1}}function l_(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}function X6(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}const Z6="FirebaseError";class ir extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Z6,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ir(i,a,r)}}function eT(n,e){return n.replace(nT,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nT=/\{\$([^}]+)}/g;function tT(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function yi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(S0(s)&&S0(o)){if(!yi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function S0(n){return n!==null&&typeof n=="object"}function ya(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function rT(n,e){const t=new iT(n,e);return t.subscribe.bind(t)}class iT{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");sT(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=qc),i.error===void 0&&(i.error=qc),i.complete===void 0&&(i.complete=qc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sT(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function qc(){}const oT=1e3,aT=2,uT=14400*1e3,lT=.5;function R0(n,e=oT,t=aT){const r=e*Math.pow(t,n),i=Math.round(lT*r*(Math.random()-.5)*2);return Math.min(uT,r+i)}function Pn(n){return n&&n._delegate?n._delegate:n}class nr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const $i="[DEFAULT]";class cT{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new U6;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fT(e))try{this.getOrInitializeService({instanceIdentifier:$i})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=$i){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=$i){return this.instances.has(e)}getOptions(e=$i){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dT(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=$i){return this.component?this.component.multipleInstances?e:$i:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dT(n){return n===$i?void 0:n}function fT(n){return n.instantiationMode==="EAGER"}class hT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cT(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}var ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ze||(ze={}));const pT={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},mT=ze.INFO,gT={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},_T=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=gT[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gl{constructor(e){this.name=e,this._logLevel=mT,this._logHandler=_T,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const yT=(n,e)=>e.some(t=>n instanceof t);let D0,N0;function bT(){return D0||(D0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vT(){return N0||(N0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c_=new WeakMap,bd=new WeakMap,d_=new WeakMap,Bc=new WeakMap,bf=new WeakMap;function xT(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(ci(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&c_.set(t,n)}).catch(()=>{}),bf.set(e,n),e}function wT(n){if(bd.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});bd.set(n,e)}let vd={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return bd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||d_.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ci(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ET(n){vd=n(vd)}function AT(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Uc(this),e,...t);return d_.set(r,e.sort?e.sort():[e]),ci(r)}:vT().includes(n)?function(...e){return n.apply(Uc(this),e),ci(c_.get(this))}:function(...e){return ci(n.apply(Uc(this),e))}}function TT(n){return typeof n=="function"?AT(n):(n instanceof IDBTransaction&&wT(n),yT(n,bT())?new Proxy(n,vd):n)}function ci(n){if(n instanceof IDBRequest)return xT(n);if(Bc.has(n))return Bc.get(n);const e=TT(n);return e!==n&&(Bc.set(n,e),bf.set(e,n)),e}const Uc=n=>bf.get(n);function f_(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),a=ci(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ci(o.result),l.oldVersion,l.newVersion,ci(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kT=["get","getKey","getAll","getAllKeys","count"],IT=["put","add","delete","clear"],$c=new Map;function P0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($c.get(e))return $c.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=IT.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kT.includes(t)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return $c.set(e,s),s}ET(n=>({...n,get:(e,t,r)=>P0(e,t)||n.get(e,t,r),has:(e,t)=>!!P0(e,t)||n.has(e,t)}));class CT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ST(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function ST(n){return n.getComponent()?.type==="VERSION"}const xd="@firebase/app",O0="0.14.9";const qr=new gl("@firebase/app"),RT="@firebase/app-compat",DT="@firebase/analytics-compat",NT="@firebase/analytics",PT="@firebase/app-check-compat",OT="@firebase/app-check",LT="@firebase/auth",FT="@firebase/auth-compat",MT="@firebase/database",VT="@firebase/data-connect",jT="@firebase/database-compat",qT="@firebase/functions",BT="@firebase/functions-compat",UT="@firebase/installations",$T="@firebase/installations-compat",HT="@firebase/messaging",zT="@firebase/messaging-compat",GT="@firebase/performance",WT="@firebase/performance-compat",KT="@firebase/remote-config",QT="@firebase/remote-config-compat",YT="@firebase/storage",JT="@firebase/storage-compat",XT="@firebase/firestore",ZT="@firebase/ai",e4="@firebase/firestore-compat",n4="firebase",t4="12.10.0";const wd="[DEFAULT]",r4={[xd]:"fire-core",[RT]:"fire-core-compat",[NT]:"fire-analytics",[DT]:"fire-analytics-compat",[OT]:"fire-app-check",[PT]:"fire-app-check-compat",[LT]:"fire-auth",[FT]:"fire-auth-compat",[MT]:"fire-rtdb",[VT]:"fire-data-connect",[jT]:"fire-rtdb-compat",[qT]:"fire-fn",[BT]:"fire-fn-compat",[UT]:"fire-iid",[$T]:"fire-iid-compat",[HT]:"fire-fcm",[zT]:"fire-fcm-compat",[GT]:"fire-perf",[WT]:"fire-perf-compat",[KT]:"fire-rc",[QT]:"fire-rc-compat",[YT]:"fire-gcs",[JT]:"fire-gcs-compat",[XT]:"fire-fst",[e4]:"fire-fst-compat",[ZT]:"fire-vertex","fire-js":"fire-js",[n4]:"fire-js-all"};const Pu=new Map,i4=new Map,Ed=new Map;function L0(n,e){try{n.container.addComponent(e)}catch(t){qr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vr(n){const e=n.name;if(Ed.has(e))return qr.debug(`There were multiple attempts to register component ${e}.`),!1;Ed.set(e,n);for(const t of Pu.values())L0(t,n);for(const t of i4.values())L0(t,n);return!0}function ds(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Gt(n){return n==null?!1:n.settings!==void 0}const s4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new cs("app","Firebase",s4);class o4{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}const to=t4;function h_(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:wd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw di.create("bad-app-name",{appName:String(i)});if(t||(t=r_()),!t)throw di.create("no-options");const s=Pu.get(i);if(s){if(yi(t,s.options)&&yi(r,s.config))return s;throw di.create("duplicate-app",{appName:i})}const o=new hT(i);for(const l of Ed.values())o.addComponent(l);const a=new o4(t,r,o);return Pu.set(i,a),a}function vf(n=wd){const e=Pu.get(n);if(!e&&n===wd&&r_())return h_();if(!e)throw di.create("no-app",{appName:n});return e}function Bt(n,e,t){let r=r4[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qr.warn(o.join(" "));return}vr(new nr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}const a4="firebase-heartbeat-database",u4=1,ea="firebase-heartbeat-store";let Hc=null;function p_(){return Hc||(Hc=f_(a4,u4,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ea)}catch(t){console.warn(t)}}}}).catch(n=>{throw di.create("idb-open",{originalErrorMessage:n.message})})),Hc}async function l4(n){try{const t=(await p_()).transaction(ea),r=await t.objectStore(ea).get(m_(n));return await t.done,r}catch(e){if(e instanceof ir)qr.warn(e.message);else{const t=di.create("idb-get",{originalErrorMessage:e?.message});qr.warn(t.message)}}}async function F0(n,e){try{const r=(await p_()).transaction(ea,"readwrite");await r.objectStore(ea).put(e,m_(n)),await r.done}catch(t){if(t instanceof ir)qr.warn(t.message);else{const r=di.create("idb-set",{originalErrorMessage:t?.message});qr.warn(r.message)}}}function m_(n){return`${n.name}!${n.options.appId}`}const c4=1024,d4=30;class f4{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new p4(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=M0();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>d4){const i=m4(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){qr.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=M0(),{heartbeatsToSend:t,unsentEntries:r}=h4(this._heartbeatsCache.heartbeats),i=Nu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return qr.warn(e),""}}}function M0(){return new Date().toISOString().substring(0,10)}function h4(n,e=c4){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),V0(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),V0(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class p4{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return u_()?l_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await l4(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return F0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return F0(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function V0(n){return Nu(JSON.stringify({version:2,heartbeats:n})).length}function m4(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}function g4(n){vr(new nr("platform-logger",e=>new CT(e),"PRIVATE")),vr(new nr("heartbeat",e=>new f4(e),"PRIVATE")),Bt(xd,O0,n),Bt(xd,O0,"esm2020"),Bt("fire-js","")}g4("");var _4="firebase",y4="12.10.0";Bt(_4,y4,"app");const g_="@firebase/installations",xf="0.6.20";const __=1e4,y_=`w:${xf}`,b_="FIS_v2",b4="https://firebaseinstallations.googleapis.com/v1",v4=3600*1e3,x4="installations",w4="Installations";const E4={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},es=new cs(x4,w4,E4);function v_(n){return n instanceof ir&&n.code.includes("request-failed")}function x_({projectId:n}){return`${b4}/projects/${n}/installations`}function w_(n){return{token:n.token,requestStatus:2,expiresIn:T4(n.expiresIn),creationTime:Date.now()}}async function E_(n,e){const r=(await e.json()).error;return es.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function A_({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function A4(n,{refreshToken:e}){const t=A_(n);return t.append("Authorization",k4(e)),t}async function T_(n){const e=await n();return e.status>=500&&e.status<600?n():e}function T4(n){return Number(n.replace("s","000"))}function k4(n){return`${b_} ${n}`}async function I4({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=x_(n),i=A_(n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:t,authVersion:b_,appId:n.appId,sdkVersion:y_},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await T_(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:w_(c.authToken)}}else throw await E_("Create Installation",l)}function k_(n){return new Promise(e=>{setTimeout(e,n)})}function C4(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}const S4=/^[cdef][\w-]{21}$/,Ad="";function R4(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=D4(n);return S4.test(t)?t:Ad}catch{return Ad}}function D4(n){return C4(n).substr(0,22)}function _l(n){return`${n.appName}!${n.appId}`}const I_=new Map;function C_(n,e){const t=_l(n);S_(t,e),N4(t,e)}function S_(n,e){const t=I_.get(n);if(t)for(const r of t)r(e)}function N4(n,e){const t=P4();t&&t.postMessage({key:n,fid:e}),O4()}let zi=null;function P4(){return!zi&&"BroadcastChannel"in self&&(zi=new BroadcastChannel("[Firebase] FID Change"),zi.onmessage=n=>{S_(n.data.key,n.data.fid)}),zi}function O4(){I_.size===0&&zi&&(zi.close(),zi=null)}const L4="firebase-installations-database",F4=1,ns="firebase-installations-store";let zc=null;function wf(){return zc||(zc=f_(L4,F4,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ns)}}})),zc}async function Ou(n,e){const t=_l(n),i=(await wf()).transaction(ns,"readwrite"),s=i.objectStore(ns),o=await s.get(t);return await s.put(e,t),await i.done,(!o||o.fid!==e.fid)&&C_(n,e.fid),e}async function R_(n){const e=_l(n),r=(await wf()).transaction(ns,"readwrite");await r.objectStore(ns).delete(e),await r.done}async function yl(n,e){const t=_l(n),i=(await wf()).transaction(ns,"readwrite"),s=i.objectStore(ns),o=await s.get(t),a=e(o);return a===void 0?await s.delete(t):await s.put(a,t),await i.done,a&&(!o||o.fid!==a.fid)&&C_(n,a.fid),a}async function Ef(n){let e;const t=await yl(n.appConfig,r=>{const i=M4(r),s=V4(n,i);return e=s.registrationPromise,s.installationEntry});return t.fid===Ad?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function M4(n){const e=n||{fid:R4(),registrationStatus:0};return D_(e)}function V4(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(es.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=j4(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:q4(n)}:{installationEntry:e}}async function j4(n,e){try{const t=await I4(n,e);return Ou(n.appConfig,t)}catch(t){throw v_(t)&&t.customData.serverCode===409?await R_(n.appConfig):await Ou(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function q4(n){let e=await j0(n.appConfig);for(;e.registrationStatus===1;)await k_(100),e=await j0(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ef(n);return r||t}return e}function j0(n){return yl(n,e=>{if(!e)throw es.create("installation-not-found");return D_(e)})}function D_(n){return B4(n)?{fid:n.fid,registrationStatus:0}:n}function B4(n){return n.registrationStatus===1&&n.registrationTime+__<Date.now()}async function U4({appConfig:n,heartbeatServiceProvider:e},t){const r=$4(n,t),i=A4(n,t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:y_,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await T_(()=>fetch(r,a));if(l.ok){const c=await l.json();return w_(c)}else throw await E_("Generate Auth Token",l)}function $4(n,{fid:e}){return`${x_(n)}/${e}/authTokens:generate`}async function Af(n,e=!1){let t;const r=await yl(n.appConfig,s=>{if(!N_(s))throw es.create("not-registered");const o=s.authToken;if(!e&&G4(o))return s;if(o.requestStatus===1)return t=H4(n,e),s;{if(!navigator.onLine)throw es.create("app-offline");const a=K4(s);return t=z4(n,a),a}});return t?await t:r.authToken}async function H4(n,e){let t=await q0(n.appConfig);for(;t.authToken.requestStatus===1;)await k_(100),t=await q0(n.appConfig);const r=t.authToken;return r.requestStatus===0?Af(n,e):r}function q0(n){return yl(n,e=>{if(!N_(e))throw es.create("not-registered");const t=e.authToken;return Q4(t)?{...e,authToken:{requestStatus:0}}:e})}async function z4(n,e){try{const t=await U4(n,e),r={...e,authToken:t};return await Ou(n.appConfig,r),t}catch(t){if(v_(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await R_(n.appConfig);else{const r={...e,authToken:{requestStatus:0}};await Ou(n.appConfig,r)}throw t}}function N_(n){return n!==void 0&&n.registrationStatus===2}function G4(n){return n.requestStatus===2&&!W4(n)}function W4(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+v4}function K4(n){const e={requestStatus:1,requestTime:Date.now()};return{...n,authToken:e}}function Q4(n){return n.requestStatus===1&&n.requestTime+__<Date.now()}async function Y4(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ef(e);return r?r.catch(console.error):Af(e).catch(console.error),t.fid}async function J4(n,e=!1){const t=n;return await X4(t),(await Af(t,e)).token}async function X4(n){const{registrationPromise:e}=await Ef(n);e&&await e}function Z4(n){if(!n||!n.options)throw Gc("App Configuration");if(!n.name)throw Gc("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Gc(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Gc(n){return es.create("missing-app-config-values",{valueName:n})}const P_="installations",ek="installations-internal",nk=n=>{const e=n.getProvider("app").getImmediate(),t=Z4(e),r=ds(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tk=n=>{const e=n.getProvider("app").getImmediate(),t=ds(e,P_).getImmediate();return{getId:()=>Y4(t),getToken:i=>J4(t,i)}};function rk(){vr(new nr(P_,nk,"PUBLIC")),vr(new nr(ek,tk,"PRIVATE"))}rk();Bt(g_,xf);Bt(g_,xf,"esm2020");const Lu="analytics",ik="firebase_id",sk="origin",ok=60*1e3,ak="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Tf="https://www.googletagmanager.com/gtag/js";const mt=new gl("@firebase/analytics");const uk={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new cs("analytics","Analytics",uk);function lk(n){if(!n.startsWith(Tf)){const e=Nt.create("invalid-gtag-resource",{gtagURL:n});return mt.warn(e.message),""}return n}function O_(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function ck(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function dk(n,e){const t=ck("firebase-js-sdk-policy",{createScriptURL:lk}),r=document.createElement("script"),i=`${Tf}?l=${n}&id=${e}`;r.src=t?t?.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function fk(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function hk(n,e,t,r,i,s){const o=r[i];try{if(o)await e[o];else{const l=(await O_(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){mt.error(a)}n("config",i,s)}async function pk(n,e,t,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await O_(t);for(const l of o){const c=a.find(p=>p.measurementId===l),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),n("event",r,i||{})}catch(s){mt.error(s)}}function mk(n,e,t,r){async function i(s,...o){try{if(s==="event"){const[a,l]=o;await pk(n,e,t,a,l)}else if(s==="config"){const[a,l]=o;await hk(n,e,t,r,a,l)}else if(s==="consent"){const[a,l]=o;n("consent",a,l)}else if(s==="get"){const[a,l,c]=o;n("get",a,l,c)}else if(s==="set"){const[a]=o;n("set",a)}else n(s,...o)}catch(a){mt.error(a)}}return i}function gk(n,e,t,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=mk(s,n,e,t),{gtagCore:s,wrappedGtag:window[i]}}function _k(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Tf)&&t.src.includes(n))return t;return null}const yk=30,bk=1e3;class vk{constructor(e={},t=bk){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const L_=new vk;function xk(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function wk(n){const{appId:e,apiKey:t}=n,r={method:"GET",headers:xk(t)},i=ak.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let o="";try{const a=await s.json();a.error?.message&&(o=a.error.message)}catch{}throw Nt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Ek(n,e=L_,t){const{appId:r,apiKey:i,measurementId:s}=n.options;if(!r)throw Nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new kk;return setTimeout(async()=>{a.abort()},ok),F_({appId:r,apiKey:i,measurementId:s},o,a,e)}async function F_(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=L_){const{appId:s,measurementId:o}=n;try{await Ak(r,e)}catch(a){if(o)return mt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${a?.message}]`),{appId:s,measurementId:o};throw a}try{const a=await wk(n);return i.deleteThrottleMetadata(s),a}catch(a){const l=a;if(!Tk(l)){if(i.deleteThrottleMetadata(s),o)return mt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${l?.message}]`),{appId:s,measurementId:o};throw a}const c=Number(l?.customData?.httpStatus)===503?R0(t,i.intervalMillis,yk):R0(t,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+c,backoffCount:t+1};return i.setThrottleMetadata(s,d),mt.debug(`Calling attemptFetch again in ${c} millis`),F_(n,d,r,i)}}function Ak(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(s),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Tk(n){if(!(n instanceof ir)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class kk{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Ik(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const s=await e,o={...r,send_to:s};n("event",t,o)}}async function Ck(n,e,t,r){if(r&&r.global){const i={};for(const s of Object.keys(t))i[`user_properties.${s}`]=t[s];return n("set",i),Promise.resolve()}else{const i=await e;n("config",i,{update:!0,user_properties:t})}}async function Sk(){if(u_())try{await l_()}catch(n){return mt.warn(Nt.create("indexeddb-unavailable",{errorInfo:n?.toString()}).message),!1}else return mt.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Rk(n,e,t,r,i,s,o){const a=Ek(n);a.then(g=>{t[g.measurementId]=g.appId,n.options.measurementId&&g.measurementId!==n.options.measurementId&&mt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>mt.error(g)),e.push(a);const l=Sk().then(g=>{if(g)return r.getId()}),[c,d]=await Promise.all([a,l]);_k(s)||dk(s,c.measurementId),i("js",new Date);const p=o?.config??{};return p[sk]="firebase",p.update=!0,d!=null&&(p[ik]=d),i("config",c.measurementId,p),c.measurementId}class Dk{constructor(e){this.app=e}_delete(){return delete Os[this.app.options.appId],Promise.resolve()}}let Os={},B0=[];const U0={};let Wc="dataLayer",Nk="gtag",$0,kf,H0=!1;function Pk(){const n=[];if(a_()&&n.push("This is a browser extension environment."),X6()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Nt.create("invalid-analytics-context",{errorInfo:e});mt.warn(t.message)}}function Ok(n,e,t){Pk();const r=n.options.appId;if(!r)throw Nt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)mt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Nt.create("no-api-key");if(Os[r]!=null)throw Nt.create("already-exists",{id:r});if(!H0){fk(Wc);const{wrappedGtag:s,gtagCore:o}=gk(Os,B0,U0,Wc,Nk);kf=s,$0=o,H0=!0}return Os[r]=Rk(n,B0,U0,e,$0,Wc,t),new Dk(n)}function Lk(n=vf()){n=Pn(n);const e=ds(n,Lu);return e.isInitialized()?e.getImmediate():Fk(n)}function Fk(n,e={}){const t=ds(n,Lu);if(t.isInitialized()){const i=t.getImmediate();if(yi(e,t.getOptions()))return i;throw Nt.create("already-initialized")}return t.initialize({options:e})}function Mk(n,e,t){n=Pn(n),Ck(kf,Os[n.app.options.appId],e,t).catch(r=>mt.error(r))}function Vk(n,e,t,r){n=Pn(n),Ik(kf,Os[n.app.options.appId],e,t,r).catch(i=>mt.error(i))}const z0="@firebase/analytics",G0="0.10.20";function jk(){vr(new nr(Lu,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return Ok(r,i,t)},"PUBLIC")),vr(new nr("analytics-internal",n,"PRIVATE")),Bt(z0,G0),Bt(z0,G0,"esm2020");function n(e){try{const t=e.getProvider(Lu).getImmediate();return{logEvent:(r,i,s)=>Vk(t,r,i,s),setUserProperties:(r,i)=>Mk(t,r,i)}}catch(t){throw Nt.create("interop-component-reg-failed",{reason:t})}}}jk();function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const qk=M_,V_=new cs("auth","Firebase",M_());const Fu=new gl("@firebase/auth");function Bk(n,...e){Fu.logLevel<=ze.WARN&&Fu.warn(`Auth (${to}): ${n}`,...e)}function cu(n,...e){Fu.logLevel<=ze.ERROR&&Fu.error(`Auth (${to}): ${n}`,...e)}function xr(n,...e){throw Cf(n,...e)}function Qt(n,...e){return Cf(n,...e)}function If(n,e,t){const r={...qk(),[e]:t};return new cs("auth","Firebase",r).create(e,{appName:n.name})}function Ji(n){return If(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Uk(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&xr(n,"argument-error"),If(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Cf(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return V_.create(n,...e)}function Oe(n,e,...t){if(!n)throw Cf(e,...t)}function Lr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cu(e),new Error(e)}function Br(n,e){n||Lr(e)}function Td(){return typeof self<"u"&&self.location?.href||""}function $k(){return W0()==="http:"||W0()==="https:"}function W0(){return typeof self<"u"&&self.location?.protocol||null}function Hk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($k()||a_()||"connection"in navigator)?navigator.onLine:!0}function zk(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}class ba{constructor(e,t){this.shortDelay=e,this.longDelay=t,Br(t>e,"Short delay should be less than long delay!"),this.isMobile=G6()||Q6()}get(){return Hk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}function Sf(n,e){Br(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}class j_{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Lr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Lr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Lr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}const Gk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};const Wk=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Kk=new ba(3e4,6e4);function Rf(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function ro(n,e,t,r,i={}){return q_(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ya({key:n.config.apiKey,...o}).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c={method:e,headers:l,...s};return K6()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&no(n.emulatorConfig.host)&&(c.credentials="include"),j_.fetch()(await B_(n,n.config.apiHost,t,a),c)})}async function q_(n,e,t){n._canInitEmulator=!1;const r={...Gk,...e};try{const i=new Yk(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Za(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Za(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Za(n,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw If(n,d,c);xr(n,d)}}catch(i){if(i instanceof ir)throw i;xr(n,"network-request-failed",{message:String(i)})}}async function Qk(n,e,t,r,i={}){const s=await ro(n,e,t,r,i);return"mfaPendingCredential"in s&&xr(n,"multi-factor-auth-required",{_serverResponse:s}),s}async function B_(n,e,t,r){const i=`${e}${t}?${r}`,s=n,o=s.config.emulator?Sf(n.config,i):`${n.config.apiScheme}://${i}`;return Wk.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}class Yk{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Qt(this.auth,"network-request-failed")),Kk.get())})}}function Za(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Qt(n,e,r);return i.customData._tokenResponse=t,i}async function Jk(n,e){return ro(n,"POST","/v1/accounts:delete",e)}async function Mu(n,e){return ro(n,"POST","/v1/accounts:lookup",e)}function Mo(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Xk(n,e=!1){const t=Pn(n),r=await t.getIdToken(e),i=Df(r);Oe(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:Mo(Kc(i.auth_time)),issuedAtTime:Mo(Kc(i.iat)),expirationTime:Mo(Kc(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Kc(n){return Number(n)*1e3}function Df(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return cu("JWT malformed, contained fewer than 3 sections"),null;try{const i=n_(t);return i?JSON.parse(i):(cu("Failed to decode base64 JWT payload"),null)}catch(i){return cu("Caught error parsing JWT payload as JSON",i?.toString()),null}}function K0(n){const e=Df(n);return Oe(e,"internal-error"),Oe(typeof e.exp<"u","internal-error"),Oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function na(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ir&&Zk(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Zk({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}class eI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}class kd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mo(this.lastLoginAt),this.creationTime=Mo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}async function Vu(n){const e=n.auth,t=await n.getIdToken(),r=await na(n,Mu(e,{idToken:t}));Oe(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const s=i.providerUserInfo?.length?U_(i.providerUserInfo):[],o=tI(n.providerData,s),a=n.isAnonymous,l=!(n.email&&i.passwordHash)&&!o?.length,c=a?l:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new kd(i.createdAt,i.lastLoginAt),isAnonymous:c};Object.assign(n,d)}async function nI(n){const e=Pn(n);await Vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tI(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function U_(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}async function rI(n,e){const t=await q_(n,{},async()=>{const r=ya({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=await B_(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:r};return n.emulatorConfig&&no(n.emulatorConfig.host)&&(l.credentials="include"),j_.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iI(n,e){return ro(n,"POST","/v2/accounts:revokeToken",Rf(n,e))}class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Oe(e.idToken,"internal-error"),Oe(typeof e.idToken<"u","internal-error"),Oe(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):K0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Oe(e.length!==0,"internal-error");const t=K0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await rI(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Ls;return r&&(Oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Lr("not implemented")}}function Jr(n,e){Oe(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Wt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new eI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new kd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await na(this,this.stsTokenManager.getToken(this.auth,e));return Oe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Xk(this,e)}reload(){return nI(this)}_assign(e){this!==e&&(Oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){Oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Vu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(Ji(this.auth));const e=await this.getIdToken();return await na(this,Jk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,l=t._redirectEventId??void 0,c=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:p,emailVerified:g,isAnonymous:b,providerData:v,stsTokenManager:I}=t;Oe(p&&I,e,"internal-error");const D=Ls.fromJSON(this.name,I);Oe(typeof p=="string",e,"internal-error"),Jr(r,e.name),Jr(i,e.name),Oe(typeof g=="boolean",e,"internal-error"),Oe(typeof b=="boolean",e,"internal-error"),Jr(s,e.name),Jr(o,e.name),Jr(a,e.name),Jr(l,e.name),Jr(c,e.name),Jr(d,e.name);const L=new Wt({uid:p,auth:e,email:i,emailVerified:g,displayName:r,isAnonymous:b,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:D,createdAt:c,lastLoginAt:d});return v&&Array.isArray(v)&&(L.providerData=v.map(V=>({...V}))),l&&(L._redirectEventId=l),L}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ls;i.updateFromServerResponse(t);const s=new Wt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Vu(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?U_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new Ls;a.updateFromIdToken(r);const l=new Wt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new kd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(l,c),l}}const Q0=new Map;function Fr(n){Br(n instanceof Function,"Expected a class definition");let e=Q0.get(n);return e?(Br(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Q0.set(n,e),e)}class $_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}$_.type="NONE";const Y0=$_;function du(n,e,t){return`firebase:${n}:${e}:${t}`}class Fs{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=du(this.userKey,i.apiKey,s),this.fullPersistenceKey=du("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Mu(this.auth,{idToken:e}).catch(()=>{});return t?Wt._fromGetAccountInfoResponse(this.auth,t,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Fs(Fr(Y0),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Fr(Y0);const o=du(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const d=await c._get(o);if(d){let p;if(typeof d=="string"){const g=await Mu(e,{idToken:d}).catch(()=>{});if(!g)break;p=await Wt._fromGetAccountInfoResponse(e,g,d)}else p=Wt._fromJSON(e,d);c!==s&&(a=p),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Fs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Fs(s,e,r))}}function J0(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(W_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(H_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(Y_(e))return"Webos";if(z_(e))return"Safari";if((e.includes("chrome/")||G_(e))&&!e.includes("edge/"))return"Chrome";if(K_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function H_(n=lt()){return/firefox\//i.test(n)}function z_(n=lt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function G_(n=lt()){return/crios\//i.test(n)}function W_(n=lt()){return/iemobile/i.test(n)}function K_(n=lt()){return/android/i.test(n)}function Q_(n=lt()){return/blackberry/i.test(n)}function Y_(n=lt()){return/webos/i.test(n)}function Nf(n=lt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sI(n=lt()){return Nf(n)&&!!window.navigator?.standalone}function oI(){return Y6()&&document.documentMode===10}function J_(n=lt()){return Nf(n)||K_(n)||Y_(n)||Q_(n)||/windows phone/i.test(n)||W_(n)}function X_(n,e=[]){let t;switch(n){case"Browser":t=J0(lt());break;case"Worker":t=`${J0(lt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${to}/${r}`}class aI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}async function uI(n,e={}){return ro(n,"GET","/v2/passwordPolicy",Rf(n,e))}const lI=6;class cI{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??lI,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}class dI{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new X0(this),this.idTokenSubscription=new X0(this),this.beforeStateQueue=new aI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=V_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Fr(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Fs.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Mu(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Gt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Vu(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=zk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(Ji(this));const t=e?Pn(e):null;return t&&Oe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(Ji(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(Ji(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Fr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await uI(this),t=new cI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new cs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await iI(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Fr(e)||this._popupRedirectResolver;Oe(t,this,"argument-error"),this.redirectPersistenceManager=await Fs.create(this,[Fr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Oe(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=X_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Bk(`Error while retrieving App Check token: ${e.error}`),e?.token}}function bl(n){return Pn(n)}class X0{constructor(e){this.auth=e,this.observer=null,this.addObserver=rT(t=>this.observer=t)}get next(){return Oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}let Pf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fI(n){Pf=n}function hI(n){return Pf.loadJS(n)}function pI(){return Pf.gapiScript}function mI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}function gI(n,e){const t=ds(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(yi(s,e??{}))return i;xr(i,"already-initialized")}return t.initialize({options:e})}function _I(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Fr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function yI(n,e,t){const r=bl(n);Oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Z_(e),{host:o,port:a}=bI(e),l=a===null?"":`:${a}`,c={url:`${s}//${o}${l}/`},d=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Oe(yi(c,r.config.emulator)&&yi(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=c,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,no(o)?(s_(`${s}//${o}${l}`),o_("Auth",!0)):vI()}function Z_(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function bI(n){const e=Z_(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Z0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Z0(o)}}}function Z0(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}class e2{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Lr("not implemented")}_getIdTokenResponse(e){return Lr("not implemented")}_linkToIdToken(e,t){return Lr("not implemented")}_getReauthenticationResolver(e){return Lr("not implemented")}}async function Ms(n,e){return Qk(n,"POST","/v1/accounts:signInWithIdp",Rf(n,e))}const xI="http://localhost";class ts extends e2{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):xr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=t;if(!r||!i)return null;const o=new ts(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ms(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Ms(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ms(e,t)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ya(t)}return e}}class Of{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}class va extends Of{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ri extends va{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch{return null}}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com";ri.PROVIDER_ID="facebook.com";class Or extends va{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ts._fromParams({providerId:Or.PROVIDER_ID,signInMethod:Or.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Or.credentialFromTaggedObject(e)}static credentialFromError(e){return Or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Or.credential(t,r)}catch{return null}}}Or.GOOGLE_SIGN_IN_METHOD="google.com";Or.PROVIDER_ID="google.com";class ii extends va{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ii.credential(e.oauthAccessToken)}catch{return null}}}ii.GITHUB_SIGN_IN_METHOD="github.com";ii.PROVIDER_ID="github.com";class si extends va{constructor(){super("twitter.com")}static credential(e,t){return ts._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return si.credential(t,r)}catch{return null}}}si.TWITTER_SIGN_IN_METHOD="twitter.com";si.PROVIDER_ID="twitter.com";class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Wt._fromIdTokenResponse(e,r,i),o=em(r);return new zs({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=em(r);return new zs({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function em(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}class ju extends ir{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ju.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new ju(e,t,r,i)}}function n2(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ju._fromErrorAndOperation(n,s,e,r):s})}async function wI(n,e,t=!1){const r=await na(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return zs._forOperation(n,"link",r)}async function EI(n,e,t=!1){const{auth:r}=n;if(Gt(r.app))return Promise.reject(Ji(r));const i="reauthenticate";try{const s=await na(n,n2(r,i,e,n),t);Oe(s.idToken,r,"internal-error");const o=Df(s.idToken);Oe(o,r,"internal-error");const{sub:a}=o;return Oe(n.uid===a,r,"user-mismatch"),zs._forOperation(n,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&xr(r,"user-mismatch"),s}}async function AI(n,e,t=!1){if(Gt(n.app))return Promise.reject(Ji(n));const r="signIn",i=await n2(n,r,e),s=await zs._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}function TI(n,e,t,r){return Pn(n).onIdTokenChanged(e,t,r)}function kI(n,e,t){return Pn(n).beforeAuthStateChanged(e,t)}function II(n,e,t,r){return Pn(n).onAuthStateChanged(e,t,r)}function CI(n){return Pn(n).signOut()}const qu="__sak";class t2{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qu,"1"),this.storage.removeItem(qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}const SI=1e3,RI=10;class r2 extends t2{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);oI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RI):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},SI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}r2.type="LOCAL";const DI=r2;class i2 extends t2{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}i2.type="SESSION";const s2=i2;function NI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}class vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new vl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,s)),l=await NI(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vl.receivers=[];function Lf(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}class PI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=Lf("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const g=p;if(g.data.eventId===c)switch(g.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}function gr(){return window}function OI(n){gr().location.href=n}function o2(){return typeof gr().WorkerGlobalScope<"u"&&typeof gr().importScripts=="function"}async function LI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function FI(){return navigator?.serviceWorker?.controller||null}function MI(){return o2()?self:null}const a2="firebaseLocalStorageDb",VI=1,Bu="firebaseLocalStorage",u2="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xl(n,e){return n.transaction([Bu],e?"readwrite":"readonly").objectStore(Bu)}function jI(){const n=indexedDB.deleteDatabase(a2);return new xa(n).toPromise()}function Id(){const n=indexedDB.open(a2,VI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Bu,{keyPath:u2})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Bu)?e(r):(r.close(),await jI(),e(await Id()))})})}async function nm(n,e,t){const r=xl(n,!0).put({[u2]:e,value:t});return new xa(r).toPromise()}async function qI(n,e){const t=xl(n,!1).get(e),r=await new xa(t).toPromise();return r===void 0?null:r.value}function tm(n,e){const t=xl(n,!0).delete(e);return new xa(t).toPromise()}const BI=800,UI=3;class l2{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Id(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>UI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return o2()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vl._getInstance(MI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await LI(),!this.activeServiceWorker)return;this.sender=new PI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||FI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Id();return await nm(e,qu,"1"),await tm(e,qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nm(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>qI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>tm(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xl(i,!1).getAll();return new xa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),BI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}l2.type="LOCAL";const $I=l2;new ba(3e4,6e4);function c2(n,e){return e?Fr(e):(Oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}class Ff extends e2{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ms(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ms(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function HI(n){return AI(n.auth,new Ff(n),n.bypassAuthState)}function zI(n){const{auth:e,user:t}=n;return Oe(t,e,"internal-error"),EI(t,new Ff(n),n.bypassAuthState)}async function GI(n){const{auth:e,user:t}=n;return Oe(t,e,"internal-error"),wI(t,new Ff(n),n.bypassAuthState)}class d2{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return HI;case"linkViaPopup":case"linkViaRedirect":return GI;case"reauthViaPopup":case"reauthViaRedirect":return zI;default:xr(this.auth,"internal-error")}}resolve(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Br(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}const WI=new ba(2e3,1e4);async function KI(n,e,t){if(Gt(n.app))return Promise.reject(Qt(n,"operation-not-supported-in-this-environment"));const r=bl(n);Uk(n,e,Of);const i=c2(r,t);return new Gi(r,"signInViaPopup",e,i).executeNotNull()}class Gi extends d2{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Oe(e,this.auth,"internal-error"),e}async onExecution(){Br(this.filter.length===1,"Popup operations only handle one event");const e=Lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WI.get())};e()}}Gi.currentPopupAction=null;const QI="pendingRedirect",fu=new Map;class YI extends d2{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fu.get(this.auth._key());if(!e){try{const r=await JI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fu.set(this.auth._key(),e)}return this.bypassAuthState||fu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function JI(n,e){const t=eC(e),r=ZI(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function XI(n,e){fu.set(n._key(),e)}function ZI(n){return Fr(n._redirectPersistence)}function eC(n){return du(QI,n.config.apiKey,n.name)}async function nC(n,e,t=!1){if(Gt(n.app))return Promise.reject(Ji(n));const r=bl(n),i=c2(r,e),o=await new YI(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}const tC=600*1e3;class rC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iC(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!f2(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Qt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tC&&this.cachedEventUids.clear(),this.cachedEventUids.has(rm(e))}saveEventToCache(e){this.cachedEventUids.add(rm(e)),this.lastProcessedEventTime=Date.now()}}function rm(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function f2({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function iC(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return f2(n);default:return!1}}async function sC(n,e={}){return ro(n,"GET","/v1/projects",e)}const oC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aC=/^https?/;async function uC(n){if(n.config.emulator)return;const{authorizedDomains:e}=await sC(n);for(const t of e)try{if(lC(t))return}catch{}xr(n,"unauthorized-domain")}function lC(n){const e=Td(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!aC.test(t))return!1;if(oC.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}const cC=new ba(3e4,6e4);function im(){const n=gr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function dC(n){return new Promise((e,t)=>{function r(){im(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{im(),t(Qt(n,"network-request-failed"))},timeout:cC.get()})}if(gr().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(gr().gapi?.load)r();else{const i=mI("iframefcb");return gr()[i]=()=>{gapi.load?r():t(Qt(n,"network-request-failed"))},hI(`${pI()}?onload=${i}`).catch(s=>t(s))}}).catch(e=>{throw hu=null,e})}let hu=null;function fC(n){return hu=hu||dC(n),hu}const hC=new ba(5e3,15e3),pC="__/auth/iframe",mC="emulator/auth/iframe",gC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},_C=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yC(n){const e=n.config;Oe(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Sf(e,mC):`https://${n.config.authDomain}/${pC}`,r={apiKey:e.apiKey,appName:n.name,v:to},i=_C.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${ya(r).slice(1)}`}async function bC(n){const e=await fC(n),t=gr().gapi;return Oe(t,n,"internal-error"),e.open({where:document.body,url:yC(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Qt(n,"network-request-failed"),a=gr().setTimeout(()=>{s(o)},hC.get());function l(){gr().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}const vC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xC=500,wC=600,EC="_blank",AC="http://localhost";class sm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TC(n,e,t,r=xC,i=wC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l={...vC,width:r.toString(),height:i.toString(),top:s,left:o},c=lt().toLowerCase();t&&(a=G_(c)?EC:t),H_(c)&&(e=e||AC,l.scrollbars="yes");const d=Object.entries(l).reduce((g,[b,v])=>`${g}${b}=${v},`,"");if(sI(c)&&a!=="_self")return kC(e||"",a),new sm(null);const p=window.open(e||"",a,d);Oe(p,n,"popup-blocked");try{p.focus()}catch{}return new sm(p)}function kC(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}const IC="__/auth/handler",CC="emulator/auth/handler",SC=encodeURIComponent("fac");async function om(n,e,t,r,i,s){Oe(n.config.authDomain,n,"auth-domain-config-required"),Oe(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:to,eventId:i};if(e instanceof Of){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",tT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof va){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await n._getAppCheckToken(),c=l?`#${SC}=${encodeURIComponent(l)}`:"";return`${RC(n)}?${ya(a).slice(1)}${c}`}function RC({config:n}){return n.emulator?Sf(n,CC):`https://${n.authDomain}/${IC}`}const Qc="webStorageSupport";class DC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=s2,this._completeRedirectFn=nC,this._overrideRedirectResult=XI}async _openPopup(e,t,r,i){Br(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const s=await om(e,t,r,Td(),i);return TC(e,s,Lf())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await om(e,t,r,Td(),i);return OI(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Br(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await bC(e),r=new rC(e);return t.register("authEvent",i=>(Oe(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Qc,{type:Qc},i=>{const s=i?.[0]?.[Qc];s!==void 0&&t(!!s),xr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=uC(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return J_()||z_()||Nf()}}const NC=DC;var am="@firebase/auth",um="1.12.1";class PC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}function OC(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LC(n){vr(new nr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:X_(n)},c=new dI(r,i,s,l);return _I(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),vr(new nr("auth-internal",e=>{const t=bl(e.getProvider("auth").getImmediate());return(r=>new PC(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bt(am,um,OC(n)),Bt(am,um,"esm2020")}const FC=300,MC=i_("authIdTokenMaxAge")||FC;let lm=null;const VC=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>MC)return;const i=t?.token;lm!==i&&(lm=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function jC(n=vf()){const e=ds(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gI(n,{popupRedirectResolver:NC,persistence:[$I,DI,s2]}),r=i_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=VC(s.toString());kI(t,o,()=>o(t.currentUser)),TI(t,a=>o(a))}}const i=t_("auth");return i&&yI(t,`http://${i}`),t}function qC(){return document.getElementsByTagName("head")?.[0]??document}fI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=Qt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",qC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LC("Browser");var cm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var fi,h2;(function(){var n;function e(S,w){function x(){}x.prototype=w.prototype,S.F=w.prototype,S.prototype=new x,S.prototype.constructor=S,S.D=function(T,A,k){for(var E=Array(arguments.length-2),we=2;we<arguments.length;we++)E[we-2]=arguments[we];return w.prototype[A].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,w,x){x||(x=0);const T=Array(16);if(typeof w=="string")for(var A=0;A<16;++A)T[A]=w.charCodeAt(x++)|w.charCodeAt(x++)<<8|w.charCodeAt(x++)<<16|w.charCodeAt(x++)<<24;else for(A=0;A<16;++A)T[A]=w[x++]|w[x++]<<8|w[x++]<<16|w[x++]<<24;w=S.g[0],x=S.g[1],A=S.g[2];let k=S.g[3],E;E=w+(k^x&(A^k))+T[0]+3614090360&4294967295,w=x+(E<<7&4294967295|E>>>25),E=k+(A^w&(x^A))+T[1]+3905402710&4294967295,k=w+(E<<12&4294967295|E>>>20),E=A+(x^k&(w^x))+T[2]+606105819&4294967295,A=k+(E<<17&4294967295|E>>>15),E=x+(w^A&(k^w))+T[3]+3250441966&4294967295,x=A+(E<<22&4294967295|E>>>10),E=w+(k^x&(A^k))+T[4]+4118548399&4294967295,w=x+(E<<7&4294967295|E>>>25),E=k+(A^w&(x^A))+T[5]+1200080426&4294967295,k=w+(E<<12&4294967295|E>>>20),E=A+(x^k&(w^x))+T[6]+2821735955&4294967295,A=k+(E<<17&4294967295|E>>>15),E=x+(w^A&(k^w))+T[7]+4249261313&4294967295,x=A+(E<<22&4294967295|E>>>10),E=w+(k^x&(A^k))+T[8]+1770035416&4294967295,w=x+(E<<7&4294967295|E>>>25),E=k+(A^w&(x^A))+T[9]+2336552879&4294967295,k=w+(E<<12&4294967295|E>>>20),E=A+(x^k&(w^x))+T[10]+4294925233&4294967295,A=k+(E<<17&4294967295|E>>>15),E=x+(w^A&(k^w))+T[11]+2304563134&4294967295,x=A+(E<<22&4294967295|E>>>10),E=w+(k^x&(A^k))+T[12]+1804603682&4294967295,w=x+(E<<7&4294967295|E>>>25),E=k+(A^w&(x^A))+T[13]+4254626195&4294967295,k=w+(E<<12&4294967295|E>>>20),E=A+(x^k&(w^x))+T[14]+2792965006&4294967295,A=k+(E<<17&4294967295|E>>>15),E=x+(w^A&(k^w))+T[15]+1236535329&4294967295,x=A+(E<<22&4294967295|E>>>10),E=w+(A^k&(x^A))+T[1]+4129170786&4294967295,w=x+(E<<5&4294967295|E>>>27),E=k+(x^A&(w^x))+T[6]+3225465664&4294967295,k=w+(E<<9&4294967295|E>>>23),E=A+(w^x&(k^w))+T[11]+643717713&4294967295,A=k+(E<<14&4294967295|E>>>18),E=x+(k^w&(A^k))+T[0]+3921069994&4294967295,x=A+(E<<20&4294967295|E>>>12),E=w+(A^k&(x^A))+T[5]+3593408605&4294967295,w=x+(E<<5&4294967295|E>>>27),E=k+(x^A&(w^x))+T[10]+38016083&4294967295,k=w+(E<<9&4294967295|E>>>23),E=A+(w^x&(k^w))+T[15]+3634488961&4294967295,A=k+(E<<14&4294967295|E>>>18),E=x+(k^w&(A^k))+T[4]+3889429448&4294967295,x=A+(E<<20&4294967295|E>>>12),E=w+(A^k&(x^A))+T[9]+568446438&4294967295,w=x+(E<<5&4294967295|E>>>27),E=k+(x^A&(w^x))+T[14]+3275163606&4294967295,k=w+(E<<9&4294967295|E>>>23),E=A+(w^x&(k^w))+T[3]+4107603335&4294967295,A=k+(E<<14&4294967295|E>>>18),E=x+(k^w&(A^k))+T[8]+1163531501&4294967295,x=A+(E<<20&4294967295|E>>>12),E=w+(A^k&(x^A))+T[13]+2850285829&4294967295,w=x+(E<<5&4294967295|E>>>27),E=k+(x^A&(w^x))+T[2]+4243563512&4294967295,k=w+(E<<9&4294967295|E>>>23),E=A+(w^x&(k^w))+T[7]+1735328473&4294967295,A=k+(E<<14&4294967295|E>>>18),E=x+(k^w&(A^k))+T[12]+2368359562&4294967295,x=A+(E<<20&4294967295|E>>>12),E=w+(x^A^k)+T[5]+4294588738&4294967295,w=x+(E<<4&4294967295|E>>>28),E=k+(w^x^A)+T[8]+2272392833&4294967295,k=w+(E<<11&4294967295|E>>>21),E=A+(k^w^x)+T[11]+1839030562&4294967295,A=k+(E<<16&4294967295|E>>>16),E=x+(A^k^w)+T[14]+4259657740&4294967295,x=A+(E<<23&4294967295|E>>>9),E=w+(x^A^k)+T[1]+2763975236&4294967295,w=x+(E<<4&4294967295|E>>>28),E=k+(w^x^A)+T[4]+1272893353&4294967295,k=w+(E<<11&4294967295|E>>>21),E=A+(k^w^x)+T[7]+4139469664&4294967295,A=k+(E<<16&4294967295|E>>>16),E=x+(A^k^w)+T[10]+3200236656&4294967295,x=A+(E<<23&4294967295|E>>>9),E=w+(x^A^k)+T[13]+681279174&4294967295,w=x+(E<<4&4294967295|E>>>28),E=k+(w^x^A)+T[0]+3936430074&4294967295,k=w+(E<<11&4294967295|E>>>21),E=A+(k^w^x)+T[3]+3572445317&4294967295,A=k+(E<<16&4294967295|E>>>16),E=x+(A^k^w)+T[6]+76029189&4294967295,x=A+(E<<23&4294967295|E>>>9),E=w+(x^A^k)+T[9]+3654602809&4294967295,w=x+(E<<4&4294967295|E>>>28),E=k+(w^x^A)+T[12]+3873151461&4294967295,k=w+(E<<11&4294967295|E>>>21),E=A+(k^w^x)+T[15]+530742520&4294967295,A=k+(E<<16&4294967295|E>>>16),E=x+(A^k^w)+T[2]+3299628645&4294967295,x=A+(E<<23&4294967295|E>>>9),E=w+(A^(x|~k))+T[0]+4096336452&4294967295,w=x+(E<<6&4294967295|E>>>26),E=k+(x^(w|~A))+T[7]+1126891415&4294967295,k=w+(E<<10&4294967295|E>>>22),E=A+(w^(k|~x))+T[14]+2878612391&4294967295,A=k+(E<<15&4294967295|E>>>17),E=x+(k^(A|~w))+T[5]+4237533241&4294967295,x=A+(E<<21&4294967295|E>>>11),E=w+(A^(x|~k))+T[12]+1700485571&4294967295,w=x+(E<<6&4294967295|E>>>26),E=k+(x^(w|~A))+T[3]+2399980690&4294967295,k=w+(E<<10&4294967295|E>>>22),E=A+(w^(k|~x))+T[10]+4293915773&4294967295,A=k+(E<<15&4294967295|E>>>17),E=x+(k^(A|~w))+T[1]+2240044497&4294967295,x=A+(E<<21&4294967295|E>>>11),E=w+(A^(x|~k))+T[8]+1873313359&4294967295,w=x+(E<<6&4294967295|E>>>26),E=k+(x^(w|~A))+T[15]+4264355552&4294967295,k=w+(E<<10&4294967295|E>>>22),E=A+(w^(k|~x))+T[6]+2734768916&4294967295,A=k+(E<<15&4294967295|E>>>17),E=x+(k^(A|~w))+T[13]+1309151649&4294967295,x=A+(E<<21&4294967295|E>>>11),E=w+(A^(x|~k))+T[4]+4149444226&4294967295,w=x+(E<<6&4294967295|E>>>26),E=k+(x^(w|~A))+T[11]+3174756917&4294967295,k=w+(E<<10&4294967295|E>>>22),E=A+(w^(k|~x))+T[2]+718787259&4294967295,A=k+(E<<15&4294967295|E>>>17),E=x+(k^(A|~w))+T[9]+3951481745&4294967295,S.g[0]=S.g[0]+w&4294967295,S.g[1]=S.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+k&4294967295}r.prototype.v=function(S,w){w===void 0&&(w=S.length);const x=w-this.blockSize,T=this.C;let A=this.h,k=0;for(;k<w;){if(A==0)for(;k<=x;)i(this,S,k),k+=this.blockSize;if(typeof S=="string"){for(;k<w;)if(T[A++]=S.charCodeAt(k++),A==this.blockSize){i(this,T),A=0;break}}else for(;k<w;)if(T[A++]=S[k++],A==this.blockSize){i(this,T),A=0;break}}this.h=A,this.o+=w},r.prototype.A=function(){var S=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);S[0]=128;for(var w=1;w<S.length-8;++w)S[w]=0;w=this.o*8;for(var x=S.length-8;x<S.length;++x)S[x]=w&255,w/=256;for(this.v(S),S=Array(16),w=0,x=0;x<4;++x)for(let T=0;T<32;T+=8)S[w++]=this.g[x]>>>T&255;return S};function s(S,w){var x=a;return Object.prototype.hasOwnProperty.call(x,S)?x[S]:x[S]=w(S)}function o(S,w){this.h=w;const x=[];let T=!0;for(let A=S.length-1;A>=0;A--){const k=S[A]|0;T&&k==w||(x[A]=k,T=!1)}this.g=x}var a={};function l(S){return-128<=S&&S<128?s(S,function(w){return new o([w|0],w<0?-1:0)}):new o([S|0],S<0?-1:0)}function c(S){if(isNaN(S)||!isFinite(S))return p;if(S<0)return D(c(-S));const w=[];let x=1;for(let T=0;S>=x;T++)w[T]=S/x|0,x*=4294967296;return new o(w,0)}function d(S,w){if(S.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(S.charAt(0)=="-")return D(d(S.substring(1),w));if(S.indexOf("-")>=0)throw Error('number format error: interior "-" character');const x=c(Math.pow(w,8));let T=p;for(let k=0;k<S.length;k+=8){var A=Math.min(8,S.length-k);const E=parseInt(S.substring(k,k+A),w);A<8?(A=c(Math.pow(w,A)),T=T.j(A).add(c(E))):(T=T.j(x),T=T.add(c(E)))}return T}var p=l(0),g=l(1),b=l(16777216);n=o.prototype,n.m=function(){if(I(this))return-D(this).m();let S=0,w=1;for(let x=0;x<this.g.length;x++){const T=this.i(x);S+=(T>=0?T:4294967296+T)*w,w*=4294967296}return S},n.toString=function(S){if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(v(this))return"0";if(I(this))return"-"+D(this).toString(S);const w=c(Math.pow(S,6));var x=this;let T="";for(;;){const A=z(x,w).g;x=L(x,A.j(w));let k=((x.g.length>0?x.g[0]:x.h)>>>0).toString(S);if(x=A,v(x))return k+T;for(;k.length<6;)k="0"+k;T=k+T}},n.i=function(S){return S<0?0:S<this.g.length?this.g[S]:this.h};function v(S){if(S.h!=0)return!1;for(let w=0;w<S.g.length;w++)if(S.g[w]!=0)return!1;return!0}function I(S){return S.h==-1}n.l=function(S){return S=L(this,S),I(S)?-1:v(S)?0:1};function D(S){const w=S.g.length,x=[];for(let T=0;T<w;T++)x[T]=~S.g[T];return new o(x,~S.h).add(g)}n.abs=function(){return I(this)?D(this):this},n.add=function(S){const w=Math.max(this.g.length,S.g.length),x=[];let T=0;for(let A=0;A<=w;A++){let k=T+(this.i(A)&65535)+(S.i(A)&65535),E=(k>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);T=E>>>16,k&=65535,E&=65535,x[A]=E<<16|k}return new o(x,x[x.length-1]&-2147483648?-1:0)};function L(S,w){return S.add(D(w))}n.j=function(S){if(v(this)||v(S))return p;if(I(this))return I(S)?D(this).j(D(S)):D(D(this).j(S));if(I(S))return D(this.j(D(S)));if(this.l(b)<0&&S.l(b)<0)return c(this.m()*S.m());const w=this.g.length+S.g.length,x=[];for(var T=0;T<2*w;T++)x[T]=0;for(T=0;T<this.g.length;T++)for(let A=0;A<S.g.length;A++){const k=this.i(T)>>>16,E=this.i(T)&65535,we=S.i(A)>>>16,Ke=S.i(A)&65535;x[2*T+2*A]+=E*Ke,V(x,2*T+2*A),x[2*T+2*A+1]+=k*Ke,V(x,2*T+2*A+1),x[2*T+2*A+1]+=E*we,V(x,2*T+2*A+1),x[2*T+2*A+2]+=k*we,V(x,2*T+2*A+2)}for(S=0;S<w;S++)x[S]=x[2*S+1]<<16|x[2*S];for(S=w;S<2*w;S++)x[S]=0;return new o(x,0)};function V(S,w){for(;(S[w]&65535)!=S[w];)S[w+1]+=S[w]>>>16,S[w]&=65535,w++}function W(S,w){this.g=S,this.h=w}function z(S,w){if(v(w))throw Error("division by zero");if(v(S))return new W(p,p);if(I(S))return w=z(D(S),w),new W(D(w.g),D(w.h));if(I(w))return w=z(S,D(w)),new W(D(w.g),w.h);if(S.g.length>30){if(I(S)||I(w))throw Error("slowDivide_ only works with positive integers.");for(var x=g,T=w;T.l(S)<=0;)x=ie(x),T=ie(T);var A=ce(x,1),k=ce(T,1);for(T=ce(T,2),x=ce(x,2);!v(T);){var E=k.add(T);E.l(S)<=0&&(A=A.add(x),k=E),T=ce(T,1),x=ce(x,1)}return w=L(S,A.j(w)),new W(A,w)}for(A=p;S.l(w)>=0;){for(x=Math.max(1,Math.floor(S.m()/w.m())),T=Math.ceil(Math.log(x)/Math.LN2),T=T<=48?1:Math.pow(2,T-48),k=c(x),E=k.j(w);I(E)||E.l(S)>0;)x-=T,k=c(x),E=k.j(w);v(k)&&(k=g),A=A.add(k),S=L(S,E)}return new W(A,S)}n.B=function(S){return z(this,S).h},n.and=function(S){const w=Math.max(this.g.length,S.g.length),x=[];for(let T=0;T<w;T++)x[T]=this.i(T)&S.i(T);return new o(x,this.h&S.h)},n.or=function(S){const w=Math.max(this.g.length,S.g.length),x=[];for(let T=0;T<w;T++)x[T]=this.i(T)|S.i(T);return new o(x,this.h|S.h)},n.xor=function(S){const w=Math.max(this.g.length,S.g.length),x=[];for(let T=0;T<w;T++)x[T]=this.i(T)^S.i(T);return new o(x,this.h^S.h)};function ie(S){const w=S.g.length+1,x=[];for(let T=0;T<w;T++)x[T]=S.i(T)<<1|S.i(T-1)>>>31;return new o(x,S.h)}function ce(S,w){const x=w>>5;w%=32;const T=S.g.length-x,A=[];for(let k=0;k<T;k++)A[k]=w>0?S.i(k+x)>>>w|S.i(k+x+1)<<32-w:S.i(k+x);return new o(A,S.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,h2=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,fi=o}).apply(typeof cm<"u"?cm:typeof self<"u"?self:typeof window<"u"?window:{});var eu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var p2,Eo,m2,pu,Cd,g2,_2,y2;(function(){var n,e=Object.defineProperty;function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof eu=="object"&&eu];for(var h=0;h<u.length;++h){var m=u[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var r=t(this);function i(u,h){if(h)e:{var m=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var F=u[y];if(!(F in m))break e;m=m[F]}u=u[u.length-1],y=m[u],h=h(y),h!=y&&h!=null&&e(m,u,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(u){return u||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(u){return u||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(u){return u||function(h){var m=[],y;for(y in h)Object.prototype.hasOwnProperty.call(h,y)&&m.push([y,h[y]]);return m}});var s=s||{},o=this||self;function a(u){var h=typeof u;return h=="object"&&u!=null||h=="function"}function l(u,h,m){return u.call.apply(u.bind,arguments)}function c(u,h,m){return c=l,c.apply(null,arguments)}function d(u,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function p(u,h){function m(){}m.prototype=h.prototype,u.Z=h.prototype,u.prototype=new m,u.prototype.constructor=u,u.Ob=function(y,F,j){for(var fe=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)fe[Ue-2]=arguments[Ue];return h.prototype[F].apply(y,fe)}}var g=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?u=>u&&AsyncContext.Snapshot.wrap(u):u=>u;function b(u){const h=u.length;if(h>0){const m=Array(h);for(let y=0;y<h;y++)m[y]=u[y];return m}return[]}function v(u,h){for(let y=1;y<arguments.length;y++){const F=arguments[y];var m=typeof F;if(m=m!="object"?m:F?Array.isArray(F)?"array":m:"null",m=="array"||m=="object"&&typeof F.length=="number"){m=u.length||0;const j=F.length||0;u.length=m+j;for(let fe=0;fe<j;fe++)u[m+fe]=F[fe]}else u.push(F)}}class I{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function D(u){o.setTimeout(()=>{throw u},0)}function L(){var u=S;let h=null;return u.g&&(h=u.g,u.g=u.g.next,u.g||(u.h=null),h.next=null),h}class V{constructor(){this.h=this.g=null}add(h,m){const y=W.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var W=new I(()=>new z,u=>u.reset());class z{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ie,ce=!1,S=new V,w=()=>{const u=Promise.resolve(void 0);ie=()=>{u.then(x)}};function x(){for(var u;u=L();){try{u.h.call(u.g)}catch(m){D(m)}var h=W;h.j(u),h.h<100&&(h.h++,u.next=h.g,h.g=u)}ce=!1}function T(){this.u=this.u,this.C=this.C}T.prototype.u=!1,T.prototype.dispose=function(){this.u||(this.u=!0,this.N())},T.prototype[Symbol.dispose]=function(){this.dispose()},T.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function A(u,h){this.type=u,this.g=this.target=h,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var u=!1,h=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const m=()=>{};o.addEventListener("test",m,h),o.removeEventListener("test",m,h)}catch{}return u})();function E(u){return/^[\s\xa0]*$/.test(u)}function we(u,h){A.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u&&this.init(u,h)}p(we,A),we.prototype.init=function(u,h){const m=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;this.target=u.target||u.srcElement,this.g=h,h=u.relatedTarget,h||(m=="mouseover"?h=u.fromElement:m=="mouseout"&&(h=u.toElement)),this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=u.pointerType,this.state=u.state,this.i=u,u.defaultPrevented&&we.Z.h.call(this)},we.prototype.h=function(){we.Z.h.call(this);const u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Ke="closure_listenable_"+(Math.random()*1e6|0),an=0;function Je(u,h,m,y,F){this.listener=u,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=F,this.key=++an,this.da=this.fa=!1}function le(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function En(u,h,m){for(const y in u)h.call(m,u[y],y,u)}function ct(u,h){for(const m in u)h.call(void 0,u[m],m,u)}function bn(u){const h={};for(const m in u)h[m]=u[m];return h}const An="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rn(u,h){let m,y;for(let F=1;F<arguments.length;F++){y=arguments[F];for(m in y)u[m]=y[m];for(let j=0;j<An.length;j++)m=An[j],Object.prototype.hasOwnProperty.call(y,m)&&(u[m]=y[m])}}function _t(u){this.src=u,this.g={},this.h=0}_t.prototype.add=function(u,h,m,y,F){const j=u.toString();u=this.g[j],u||(u=this.g[j]=[],this.h++);const fe=Un(u,h,y,F);return fe>-1?(h=u[fe],m||(h.fa=!1)):(h=new Je(h,this.src,j,!!y,F),h.fa=m,u.push(h)),h};function Xe(u,h){const m=h.type;if(m in u.g){var y=u.g[m],F=Array.prototype.indexOf.call(y,h,void 0),j;(j=F>=0)&&Array.prototype.splice.call(y,F,1),j&&(le(h),u.g[m].length==0&&(delete u.g[m],u.h--))}}function Un(u,h,m,y){for(let F=0;F<u.length;++F){const j=u[F];if(!j.da&&j.listener==h&&j.capture==!!m&&j.ha==y)return F}return-1}var Kn="closure_lm_"+(Math.random()*1e6|0),yt={};function $t(u,h,m,y,F){if(Array.isArray(h)){for(let j=0;j<h.length;j++)$t(u,h[j],m,y,F);return null}return m=de(m),u&&u[Ke]?u.J(h,m,a(y)?!!y.capture:!1,F):Qn(u,h,m,!1,y,F)}function Qn(u,h,m,y,F,j){if(!h)throw Error("Invalid event type");const fe=a(F)?!!F.capture:!!F;let Ue=ee(u);if(Ue||(u[Kn]=Ue=new _t(u)),m=Ue.add(h,m,y,fe,j),m.proxy)return m;if(y=Tr(),m.proxy=y,y.src=u,y.listener=m,u.addEventListener)k||(F=fe),F===void 0&&(F=!1),u.addEventListener(h.toString(),y,F);else if(u.attachEvent)u.attachEvent(U(h.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function Tr(){function u(m){return h.call(u.src,u.listener,m)}const h=oe;return u}function C(u,h,m,y,F){if(Array.isArray(h))for(var j=0;j<h.length;j++)C(u,h[j],m,y,F);else y=a(y)?!!y.capture:!!y,m=de(m),u&&u[Ke]?(u=u.i,j=String(h).toString(),j in u.g&&(h=u.g[j],m=Un(h,m,y,F),m>-1&&(le(h[m]),Array.prototype.splice.call(h,m,1),h.length==0&&(delete u.g[j],u.h--)))):u&&(u=ee(u))&&(h=u.g[h.toString()],u=-1,h&&(u=Un(h,m,y,F)),(m=u>-1?h[u]:null)&&N(m))}function N(u){if(typeof u!="number"&&u&&!u.da){var h=u.src;if(h&&h[Ke])Xe(h.i,u);else{var m=u.type,y=u.proxy;h.removeEventListener?h.removeEventListener(m,y,u.capture):h.detachEvent?h.detachEvent(U(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=ee(h))?(Xe(m,u),m.h==0&&(m.src=null,h[Kn]=null)):le(u)}}}function U(u){return u in yt?yt[u]:yt[u]="on"+u}function oe(u,h){if(u.da)u=!0;else{h=new we(h,this);const m=u.listener,y=u.ha||u.src;u.fa&&N(u),u=m.call(y,h)}return u}function ee(u){return u=u[Kn],u instanceof _t?u:null}var te="__closure_events_fn_"+(Math.random()*1e9>>>0);function de(u){return typeof u=="function"?u:(u[te]||(u[te]=function(h){return u.handleEvent(h)}),u[te])}function ae(){T.call(this),this.i=new _t(this),this.M=this,this.G=null}p(ae,T),ae.prototype[Ke]=!0,ae.prototype.removeEventListener=function(u,h,m,y){C(this,u,h,m,y)};function re(u,h){var m,y=u.G;if(y)for(m=[];y;y=y.G)m.push(y);if(u=u.M,y=h.type||h,typeof h=="string")h=new A(h,u);else if(h instanceof A)h.target=h.target||u;else{var F=h;h=new A(y,u),Rn(h,F)}F=!0;let j,fe;if(m)for(fe=m.length-1;fe>=0;fe--)j=h.g=m[fe],F=ne(j,y,!0,h)&&F;if(j=h.g=u,F=ne(j,y,!0,h)&&F,F=ne(j,y,!1,h)&&F,m)for(fe=0;fe<m.length;fe++)j=h.g=m[fe],F=ne(j,y,!1,h)&&F}ae.prototype.N=function(){if(ae.Z.N.call(this),this.i){var u=this.i;for(const h in u.g){const m=u.g[h];for(let y=0;y<m.length;y++)le(m[y]);delete u.g[h],u.h--}}this.G=null},ae.prototype.J=function(u,h,m,y){return this.i.add(String(u),h,!1,m,y)},ae.prototype.K=function(u,h,m,y){return this.i.add(String(u),h,!0,m,y)};function ne(u,h,m,y){if(h=u.i.g[String(h)],!h)return!0;h=h.concat();let F=!0;for(let j=0;j<h.length;++j){const fe=h[j];if(fe&&!fe.da&&fe.capture==m){const Ue=fe.listener,qn=fe.ha||fe.src;fe.fa&&Xe(u.i,fe),F=Ue.call(qn,y)!==!1&&F}}return F&&!y.defaultPrevented}function Ee(u,h){if(typeof u!="function")if(u&&typeof u.handleEvent=="function")u=c(u.handleEvent,u);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(u,h||0)}function pe(u){u.g=Ee(()=>{u.g=null,u.i&&(u.i=!1,pe(u))},u.l);const h=u.h;u.h=null,u.m.apply(null,h)}class ve extends T{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:pe(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function f(u){T.call(this),this.h=u,this.g={}}p(f,T);var P=[];function M(u){En(u.g,function(h,m){this.g.hasOwnProperty(m)&&N(h)},u),u.g={}}f.prototype.N=function(){f.Z.N.call(this),M(this)},f.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var J=o.JSON.stringify,G=o.JSON.parse,_=class{stringify(u){return o.JSON.stringify(u,void 0)}parse(u){return o.JSON.parse(u,void 0)}};function O(){}function q(){}var $={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function X(){A.call(this,"d")}p(X,A);function Y(){A.call(this,"c")}p(Y,A);var H={},he=null;function se(){return he=he||new ae}H.Ia="serverreachability";function ke(u){A.call(this,H.Ia,u)}p(ke,A);function Be(u){const h=se();re(h,new ke(h))}H.STAT_EVENT="statevent";function Me(u,h){A.call(this,H.STAT_EVENT,u),this.stat=h}p(Me,A);function Qe(u){const h=se();re(h,new Me(h,u))}H.Ja="timingevent";function kr(u,h){A.call(this,H.Ja,u),this.size=h}p(kr,A);function R(u,h){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){u()},h)}function K(){this.g=!0}K.prototype.ua=function(){this.g=!1};function me(u,h,m,y,F,j){u.info(function(){if(u.g)if(j){var fe="",Ue=j.split("&");for(let cn=0;cn<Ue.length;cn++){var qn=Ue[cn].split("=");if(qn.length>1){const $n=qn[0];qn=qn[1];const ur=$n.split("_");fe=ur.length>=2&&ur[1]=="type"?fe+($n+"="+qn+"&"):fe+($n+"=redacted&")}}}else fe=null;else fe=j;return"XMLHTTP REQ ("+y+") [attempt "+F+"]: "+h+`
`+m+`
`+fe})}function Fe(u,h,m,y,F,j,fe){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+F+"]: "+h+`
`+m+`
`+j+" "+fe})}function un(u,h,m,y){u.info(function(){return"XMLHTTP TEXT ("+h+"): "+xe(u,m)+(y?" "+y:"")})}function vn(u,h){u.info(function(){return"TIMEOUT: "+h})}K.prototype.info=function(){};function xe(u,h){if(!u.g)return h;if(!h)return null;try{const j=JSON.parse(h);if(j){for(u=0;u<j.length;u++)if(Array.isArray(j[u])){var m=j[u];if(!(m.length<2)){var y=m[1];if(Array.isArray(y)&&!(y.length<1)){var F=y[0];if(F!="noop"&&F!="stop"&&F!="close")for(let fe=1;fe<y.length;fe++)y[fe]=""}}}}return J(j)}catch{return h}}var ye={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},De={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Dn;function yn(){}p(yn,O),yn.prototype.g=function(){return new XMLHttpRequest},Dn=new yn;function Ht(u){return encodeURIComponent(String(u))}function lo(u){var h=1;u=u.split(":");const m=[];for(;h>0&&u.length;)m.push(u.shift()),h--;return u.length&&m.push(u.join(":")),m}function Ot(u,h,m,y){this.j=u,this.i=h,this.l=m,this.S=y||1,this.V=new f(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ra}function Ra(){this.i=null,this.g="",this.h=!1}var ps={},co={};function fo(u,h,m){u.M=1,u.A=Di(dt(h)),u.u=m,u.R=!0,Da(u,null)}function Da(u,h){u.F=Date.now(),ms(u),u.B=dt(u.A);var m=u.B,y=u.S;Array.isArray(y)||(y=[String(y)]),Oi(m.i,"t",y),u.C=0,m=u.j.L,u.h=new Ra,u.g=Bh(u.j,m?h:null,!u.u),u.P>0&&(u.O=new ve(c(u.Y,u,u.g),u.P)),h=u.V,m=u.g,y=u.ba;var F="readystatechange";Array.isArray(F)||(F&&(P[0]=F.toString()),F=P);for(let j=0;j<F.length;j++){const fe=$t(m,F[j],y||h.handleEvent,!1,h.h||h);if(!fe)break;h.g[fe.key]=fe}h=u.J?bn(u.J):{},u.u?(u.v||(u.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.B,u.v,u.u,h)):(u.v="GET",u.g.ea(u.B,u.v,null,h)),Be(),me(u.i,u.v,u.B,u.l,u.S,u.u)}Ot.prototype.ba=function(u){u=u.target;const h=this.O;h&&Gr(u)==3?h.j():this.Y(u)},Ot.prototype.Y=function(u){try{if(u==this.g)e:{const Ue=Gr(this.g),qn=this.g.ya(),cn=this.g.ca();if(!(Ue<3)&&(Ue!=3||this.g&&(this.h.h||this.g.la()||Rh(this.g)))){this.K||Ue!=4||qn==7||(qn==8||cn<=0?Be(3):Be(2)),Lt(this);var h=this.g.ca();this.X=h;var m=Na(this);if(this.o=h==200,Fe(this.i,this.v,this.B,this.l,this.S,Ue,h),this.o){if(this.U&&!this.L){n:{if(this.g){var y,F=this.g;if((y=F.g?F.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(y)){var j=y;break n}}j=null}if(u=j)un(this.i,this.l,u,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ho(this,u);else{this.o=!1,this.m=3,Qe(12),sr(this),zr(this);break e}}if(this.R){u=!0;let $n;for(;!this.K&&this.C<m.length;)if($n=Vl(this,m),$n==co){Ue==4&&(this.m=4,Qe(14),u=!1),un(this.i,this.l,null,"[Incomplete Response]");break}else if($n==ps){this.m=4,Qe(15),un(this.i,this.l,m,"[Invalid Chunk]"),u=!1;break}else un(this.i,this.l,$n,null),ho(this,$n);if(Si(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||m.length!=0||this.h.h||(this.m=1,Qe(16),u=!1),this.o=this.o&&u,!u)un(this.i,this.l,m,"[Invalid Chunked Response]"),sr(this),zr(this);else if(m.length>0&&!this.W){this.W=!0;var fe=this.j;fe.g==this&&fe.aa&&!fe.P&&(fe.j.info("Great, no buffering proxy detected. Bytes received: "+m.length),zl(fe),fe.P=!0,Qe(11))}}else un(this.i,this.l,m,null),ho(this,m);Ue==4&&sr(this),this.o&&!this.K&&(Ue==4?Mh(this.j,this):(this.o=!1,ms(this)))}else sb(this.g),h==400&&m.indexOf("Unknown SID")>0?(this.m=3,Qe(12)):(this.m=0,Qe(13)),sr(this),zr(this)}}}catch{}finally{}};function Na(u){if(!Si(u))return u.g.la();const h=Rh(u.g);if(h==="")return"";let m="";const y=h.length,F=Gr(u.g)==4;if(!u.h.i){if(typeof TextDecoder>"u")return sr(u),zr(u),"";u.h.i=new o.TextDecoder}for(let j=0;j<y;j++)u.h.h=!0,m+=u.h.i.decode(h[j],{stream:!(F&&j==y-1)});return h.length=0,u.h.g+=m,u.C=0,u.h.g}function Si(u){return u.g?u.v=="GET"&&u.M!=2&&u.j.Aa:!1}function Vl(u,h){var m=u.C,y=h.indexOf(`
`,m);return y==-1?co:(m=Number(h.substring(m,y)),isNaN(m)?ps:(y+=1,y+m>h.length?co:(h=h.slice(y,y+m),u.C=y+m,h)))}Ot.prototype.cancel=function(){this.K=!0,sr(this)};function ms(u){u.T=Date.now()+u.H,Pa(u,u.H)}function Pa(u,h){if(u.D!=null)throw Error("WatchDog timer not null");u.D=R(c(u.aa,u),h)}function Lt(u){u.D&&(o.clearTimeout(u.D),u.D=null)}Ot.prototype.aa=function(){this.D=null;const u=Date.now();u-this.T>=0?(vn(this.i,this.B),this.M!=2&&(Be(),Qe(17)),sr(this),this.m=2,zr(this)):Pa(this,this.T-u)};function zr(u){u.j.I==0||u.K||Mh(u.j,u)}function sr(u){Lt(u);var h=u.O;h&&typeof h.dispose=="function"&&h.dispose(),u.O=null,M(u.V),u.g&&(h=u.g,u.g=null,h.abort(),h.dispose())}function ho(u,h){try{var m=u.j;if(m.I!=0&&(m.g==u||ue(m.h,u))){if(!u.L&&ue(m.h,u)&&m.I==3){try{var y=m.Ba.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var F=y;if(F[0]==0){e:if(!m.v){if(m.g)if(m.g.F+3e3<u.F)Ua(m),qa(m);else break e;Hl(m),Qe(18)}}else m.xa=F[1],0<m.xa-m.K&&F[2]<37500&&m.F&&m.A==0&&!m.C&&(m.C=R(c(m.Va,m),6e3));La(m.h)<=1&&m.ta&&(m.ta=void 0)}else Fi(m,11)}else if((u.L||m.g==u)&&Ua(m),!E(h))for(F=m.Ba.g.parse(h),h=0;h<F.length;h++){let cn=F[h];const $n=cn[0];if(!($n<=m.K))if(m.K=$n,cn=cn[1],m.I==2)if(cn[0]=="c"){m.M=cn[1],m.ba=cn[2];const ur=cn[3];ur!=null&&(m.ka=ur,m.j.info("VER="+m.ka));const Mi=cn[4];Mi!=null&&(m.za=Mi,m.j.info("SVER="+m.za));const Wr=cn[5];Wr!=null&&typeof Wr=="number"&&Wr>0&&(y=1.5*Wr,m.O=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const Kr=u.g;if(Kr){const Ha=Kr.g?Kr.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ha){var j=y.h;j.g||Ha.indexOf("spdy")==-1&&Ha.indexOf("quic")==-1&&Ha.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Ie(j,j.h),j.h=null))}if(y.G){const Gl=Kr.g?Kr.g.getResponseHeader("X-HTTP-Session-Id"):null;Gl&&(y.wa=Gl,ln(y.J,y.G,Gl))}}m.I=3,m.l&&m.l.ra(),m.aa&&(m.T=Date.now()-u.F,m.j.info("Handshake RTT: "+m.T+"ms")),y=m;var fe=u;if(y.na=qh(y,y.L?y.ba:null,y.W),fe.L){$e(y.h,fe);var Ue=fe,qn=y.O;qn&&(Ue.H=qn),Ue.D&&(Lt(Ue),ms(Ue)),y.g=fe}else Lh(y);m.i.length>0&&Ba(m)}else cn[0]!="stop"&&cn[0]!="close"||Fi(m,7);else m.I==3&&(cn[0]=="stop"||cn[0]=="close"?cn[0]=="stop"?Fi(m,7):$l(m):cn[0]!="noop"&&m.l&&m.l.qa(cn),m.A=0)}}Be(4)}catch{}}var jl=class{constructor(u,h){this.g=u,this.map=h}};function Oa(u){this.l=u||10,o.PerformanceNavigationTiming?(u=o.performance.getEntriesByType("navigation"),u=u.length>0&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ri(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function La(u){return u.h?1:u.g?u.g.size:0}function ue(u,h){return u.h?u.h==h:u.g?u.g.has(h):!1}function Ie(u,h){u.g?u.g.add(h):u.h=h}function $e(u,h){u.h&&u.h==h?u.h=null:u.g&&u.g.has(h)&&u.g.delete(h)}Oa.prototype.cancel=function(){if(this.i=sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function sn(u){if(u.h!=null)return u.i.concat(u.h.G);if(u.g!=null&&u.g.size!==0){let h=u.i;for(const m of u.g.values())h=h.concat(m.G);return h}return b(u.i)}var Tn=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function kt(u,h){if(u){u=u.split("&");for(let m=0;m<u.length;m++){const y=u[m].indexOf("=");let F,j=null;y>=0?(F=u[m].substring(0,y),j=u[m].substring(y+1)):F=u[m],h(F,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function Yn(u){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;u instanceof Yn?(this.l=u.l,jn(this,u.j),this.o=u.o,this.g=u.g,nt(this,u.u),this.h=u.h,gs(this,or(u.i)),this.m=u.m):u&&(h=String(u).match(Tn))?(this.l=!1,jn(this,h[1]||"",!0),this.o=Ni(h[2]||""),this.g=Ni(h[3]||"",!0),nt(this,h[4]),this.h=Ni(h[5]||"",!0),gs(this,h[6]||"",!0),this.m=Ni(h[7]||"")):(this.l=!1,this.i=new Ir(null,this.l))}Yn.prototype.toString=function(){const u=[];var h=this.j;h&&u.push(Pi(h,Fa,!0),":");var m=this.g;return(m||h=="file")&&(u.push("//"),(h=this.o)&&u.push(Pi(h,Fa,!0),"@"),u.push(Ht(m).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.u,m!=null&&u.push(":",String(m))),(m=this.h)&&(this.g&&m.charAt(0)!="/"&&u.push("/"),u.push(Pi(m,m.charAt(0)=="/"?Ma:_s,!0))),(m=this.i.toString())&&u.push("?",m),(m=this.m)&&u.push("#",Pi(m,Bl)),u.join("")},Yn.prototype.resolve=function(u){const h=dt(this);let m=!!u.j;m?jn(h,u.j):m=!!u.o,m?h.o=u.o:m=!!u.g,m?h.g=u.g:m=u.u!=null;var y=u.h;if(m)nt(h,u.u);else if(m=!!u.h){if(y.charAt(0)!="/")if(this.g&&!this.h)y="/"+y;else{var F=h.h.lastIndexOf("/");F!=-1&&(y=h.h.slice(0,F+1)+y)}if(F=y,F==".."||F==".")y="";else if(F.indexOf("./")!=-1||F.indexOf("/.")!=-1){y=F.lastIndexOf("/",0)==0,F=F.split("/");const j=[];for(let fe=0;fe<F.length;){const Ue=F[fe++];Ue=="."?y&&fe==F.length&&j.push(""):Ue==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),y&&fe==F.length&&j.push("")):(j.push(Ue),y=!0)}y=j.join("/")}else y=F}return m?h.h=y:m=u.i.toString()!=="",m?gs(h,or(u.i)):m=!!u.m,m&&(h.m=u.m),h};function dt(u){return new Yn(u)}function jn(u,h,m){u.j=m?Ni(h,!0):h,u.j&&(u.j=u.j.replace(/:$/,""))}function nt(u,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);u.u=h}else u.u=null}function gs(u,h,m){h instanceof Ir?(u.i=h,mo(u.i,u.l)):(m||(h=Pi(h,Ft)),u.i=new Ir(h,u.l))}function ln(u,h,m){u.i.set(h,m)}function Di(u){return ln(u,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),u}function Ni(u,h){return u?h?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Pi(u,h,m){return typeof u=="string"?(u=encodeURI(u).replace(h,ql),m&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function ql(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Fa=/[#\/\?@]/g,_s=/[#\?:]/g,Ma=/[#\?]/g,Ft=/[#\?@]/g,Bl=/#/g;function Ir(u,h){this.h=this.g=null,this.i=u||null,this.j=!!h}function Re(u){u.g||(u.g=new Map,u.h=0,u.i&&kt(u.i,function(h,m){u.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}n=Ir.prototype,n.add=function(u,h){Re(this),this.i=null,u=ar(this,u);let m=this.g.get(u);return m||this.g.set(u,m=[]),m.push(h),this.h+=1,this};function po(u,h){Re(u),h=ar(u,h),u.g.has(h)&&(u.i=null,u.h-=u.g.get(h).length,u.g.delete(h))}function On(u,h){return Re(u),h=ar(u,h),u.g.has(h)}n.forEach=function(u,h){Re(this),this.g.forEach(function(m,y){m.forEach(function(F){u.call(h,F,y,this)},this)},this)};function on(u,h){Re(u);let m=[];if(typeof h=="string")On(u,h)&&(m=m.concat(u.g.get(ar(u,h))));else for(u=Array.from(u.g.values()),h=0;h<u.length;h++)m=m.concat(u[h]);return m}n.set=function(u,h){return Re(this),this.i=null,u=ar(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[h]),this.h+=1,this},n.get=function(u,h){return u?(u=on(this,u),u.length>0?String(u[0]):h):h};function Oi(u,h,m){po(u,h),m.length>0&&(u.i=null,u.g.set(ar(u,h),b(m)),u.h+=m.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],h=Array.from(this.g.keys());for(let y=0;y<h.length;y++){var m=h[y];const F=Ht(m);m=on(this,m);for(let j=0;j<m.length;j++){let fe=F;m[j]!==""&&(fe+="="+Ht(m[j])),u.push(fe)}}return this.i=u.join("&")};function or(u){const h=new Ir;return h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),h}function ar(u,h){return h=String(h),u.j&&(h=h.toLowerCase()),h}function mo(u,h){h&&!u.j&&(Re(u),u.i=null,u.g.forEach(function(m,y){const F=y.toLowerCase();y!=F&&(po(this,y),Oi(this,F,m))},u)),u.j=h}function ge(u,h){const m=new K;if(o.Image){const y=new Image;y.onload=d(Pe,m,"TestLoadImage: loaded",!0,h,y),y.onerror=d(Pe,m,"TestLoadImage: error",!1,h,y),y.onabort=d(Pe,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=d(Pe,m,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else h(!1)}function Ae(u,h){const m=new K,y=new AbortController,F=setTimeout(()=>{y.abort(),Pe(m,"TestPingServer: timeout",!1,h)},1e4);fetch(u,{signal:y.signal}).then(j=>{clearTimeout(F),j.ok?Pe(m,"TestPingServer: ok",!0,h):Pe(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(F),Pe(m,"TestPingServer: error",!1,h)})}function Pe(u,h,m,y,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),y(m)}catch{}}function Ze(){this.g=new _}function Ln(u){this.i=u.Sb||null,this.h=u.ab||!1}p(Ln,O),Ln.prototype.g=function(){return new bt(this.i,this.h)};function bt(u,h){ae.call(this),this.H=u,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(bt,ae),n=bt.prototype,n.open=function(u,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=u,this.D=h,this.readyState=1,go(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};u&&(h.body=u),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Li(this)),this.readyState=0},n.Pa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,go(this)),this.g&&(this.readyState=3,go(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Va(this)}else u.text().then(this.Oa.bind(this),this.ga.bind(this))};function Va(u){u.j.read().then(u.Ma.bind(u)).catch(u.ga.bind(u))}n.Ma=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var h=u.value?u.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!u.done}))&&(this.response=this.responseText+=h)}u.done?Li(this):go(this),this.readyState==3&&Va(this)}},n.Oa=function(u){this.g&&(this.response=this.responseText=u,Li(this))},n.Na=function(u){this.g&&(this.response=u,Li(this))},n.ga=function(){this.g&&Li(this)};function Li(u){u.readyState=4,u.l=null,u.j=null,u.B=null,go(u)}n.setRequestHeader=function(u,h){this.A.append(u,h)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,u.push(m[0]+": "+m[1]),m=h.next();return u.join(`\r
`)};function go(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(bt.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function kh(u){let h="";return En(u,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function Ul(u,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=kh(m),typeof u=="string"?m!=null&&Ht(m):ln(u,h,m))}function kn(u){ae.call(this),this.headers=new Map,this.L=u||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(kn,ae);var rb=/^https?$/i,ib=["POST","PUT"];n=kn.prototype,n.Fa=function(u){this.H=u},n.ea=function(u,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);h=h?h.toUpperCase():"GET",this.D=u,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Dn.g(),this.g.onreadystatechange=g(c(this.Ca,this));try{this.B=!0,this.g.open(h,String(u),!0),this.B=!1}catch(j){Ih(this,j);return}if(u=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var F in y)m.set(F,y[F]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const j of y.keys())m.set(j,y.get(j));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(j=>j.toLowerCase()=="content-type"),F=o.FormData&&u instanceof o.FormData,!(Array.prototype.indexOf.call(ib,h,void 0)>=0)||y||F||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,fe]of m)this.g.setRequestHeader(j,fe);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(u),this.v=!1}catch(j){Ih(this,j)}};function Ih(u,h){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=h,u.o=5,Ch(u),ja(u)}function Ch(u){u.A||(u.A=!0,re(u,"complete"),re(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=u||7,re(this,"complete"),re(this,"abort"),ja(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ja(this,!0)),kn.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Sh(this):this.Xa())},n.Xa=function(){Sh(this)};function Sh(u){if(u.h&&typeof s<"u"){if(u.v&&Gr(u)==4)setTimeout(u.Ca.bind(u),0);else if(re(u,"readystatechange"),Gr(u)==4){u.h=!1;try{const j=u.ca();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=j===0){let fe=String(u.D).match(Tn)[1]||null;!fe&&o.self&&o.self.location&&(fe=o.self.location.protocol.slice(0,-1)),y=!rb.test(fe?fe.toLowerCase():"")}m=y}if(m)re(u,"complete"),re(u,"success");else{u.o=6;try{var F=Gr(u)>2?u.g.statusText:""}catch{F=""}u.l=F+" ["+u.ca()+"]",Ch(u)}}finally{ja(u)}}}}function ja(u,h){if(u.g){u.m&&(clearTimeout(u.m),u.m=null);const m=u.g;u.g=null,h||re(u,"ready");try{m.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Gr(u){return u.g?u.g.readyState:0}n.ca=function(){try{return Gr(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(u){if(this.g){var h=this.g.responseText;return u&&h.indexOf(u)==0&&(h=h.substring(u.length)),G(h)}};function Rh(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.F){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function sb(u){const h={};u=(u.g&&Gr(u)>=2&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(E(u[y]))continue;var m=lo(u[y]);const F=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const j=h[F]||[];h[F]=j,j.push(m)}ct(h,function(y){return y.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function _o(u,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[u]||h}function Dh(u){this.za=0,this.i=[],this.j=new K,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=_o("failFast",!1,u),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=_o("baseRetryDelayMs",5e3,u),this.Za=_o("retryDelaySeedMs",1e4,u),this.Ta=_o("forwardChannelMaxRetries",2,u),this.va=_o("forwardChannelRequestTimeoutMs",2e4,u),this.ma=u&&u.xmlHttpFactory||void 0,this.Ua=u&&u.Rb||void 0,this.Aa=u&&u.useFetchStreams||!1,this.O=void 0,this.L=u&&u.supportsCrossDomainXhr||!1,this.M="",this.h=new Oa(u&&u.concurrentRequestLimit),this.Ba=new Ze,this.S=u&&u.fastHandshake||!1,this.R=u&&u.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=u&&u.Pb||!1,u&&u.ua&&this.j.ua(),u&&u.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&u&&u.detectBufferingProxy||!1,this.ia=void 0,u&&u.longPollingTimeout&&u.longPollingTimeout>0&&(this.ia=u.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Dh.prototype,n.ka=8,n.I=1,n.connect=function(u,h,m,y){Qe(0),this.W=u,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.J=qh(this,null,this.W),Ba(this)};function $l(u){if(Nh(u),u.I==3){var h=u.V++,m=dt(u.J);if(ln(m,"SID",u.M),ln(m,"RID",h),ln(m,"TYPE","terminate"),yo(u,m),h=new Ot(u,u.j,h),h.M=2,h.A=Di(dt(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!m&&o.Image&&(new Image().src=h.A,m=!0),m||(h.g=Bh(h.j,null),h.g.ea(h.A)),h.F=Date.now(),ms(h)}jh(u)}function qa(u){u.g&&(zl(u),u.g.cancel(),u.g=null)}function Nh(u){qa(u),u.v&&(o.clearTimeout(u.v),u.v=null),Ua(u),u.h.cancel(),u.m&&(typeof u.m=="number"&&o.clearTimeout(u.m),u.m=null)}function Ba(u){if(!Ri(u.h)&&!u.m){u.m=!0;var h=u.Ea;ie||w(),ce||(ie(),ce=!0),S.add(h,u),u.D=0}}function ob(u,h){return La(u.h)>=u.h.j-(u.m?1:0)?!1:u.m?(u.i=h.G.concat(u.i),!0):u.I==1||u.I==2||u.D>=(u.Sa?0:u.Ta)?!1:(u.m=R(c(u.Ea,u,h),Vh(u,u.D)),u.D++,!0)}n.Ea=function(u){if(this.m)if(this.m=null,this.I==1){if(!u){this.V=Math.floor(Math.random()*1e5),u=this.V++;const F=new Ot(this,this.j,u);let j=this.o;if(this.U&&(j?(j=bn(j),Rn(j,this.U)):j=this.U),this.u!==null||this.R||(F.J=j,j=null),this.S)e:{for(var h=0,m=0;m<this.i.length;m++){n:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break n}y=void 0}if(y===void 0)break;if(h+=y,h>4096){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Oh(this,F,h),m=dt(this.J),ln(m,"RID",u),ln(m,"CVER",22),this.G&&ln(m,"X-HTTP-Session-Id",this.G),yo(this,m),j&&(this.R?h="headers="+Ht(kh(j))+"&"+h:this.u&&Ul(m,this.u,j)),Ie(this.h,F),this.Ra&&ln(m,"TYPE","init"),this.S?(ln(m,"$req",h),ln(m,"SID","null"),F.U=!0,fo(F,m,null)):fo(F,m,h),this.I=2}}else this.I==3&&(u?Ph(this,u):this.i.length==0||Ri(this.h)||Ph(this))};function Ph(u,h){var m;h?m=h.l:m=u.V++;const y=dt(u.J);ln(y,"SID",u.M),ln(y,"RID",m),ln(y,"AID",u.K),yo(u,y),u.u&&u.o&&Ul(y,u.u,u.o),m=new Ot(u,u.j,m,u.D+1),u.u===null&&(m.J=u.o),h&&(u.i=h.G.concat(u.i)),h=Oh(u,m,1e3),m.H=Math.round(u.va*.5)+Math.round(u.va*.5*Math.random()),Ie(u.h,m),fo(m,y,h)}function yo(u,h){u.H&&En(u.H,function(m,y){ln(h,y,m)}),u.l&&En({},function(m,y){ln(h,y,m)})}function Oh(u,h,m){m=Math.min(u.i.length,m);const y=u.l?c(u.l.Ka,u.l,u):null;e:{var F=u.i;let Ue=-1;for(;;){const qn=["count="+m];Ue==-1?m>0?(Ue=F[0].g,qn.push("ofs="+Ue)):Ue=0:qn.push("ofs="+Ue);let cn=!0;for(let $n=0;$n<m;$n++){var j=F[$n].g;const ur=F[$n].map;if(j-=Ue,j<0)Ue=Math.max(0,F[$n].g-100),cn=!1;else try{j="req"+j+"_"||"";try{var fe=ur instanceof Map?ur:Object.entries(ur);for(const[Mi,Wr]of fe){let Kr=Wr;a(Wr)&&(Kr=J(Wr)),qn.push(j+Mi+"="+encodeURIComponent(Kr))}}catch(Mi){throw qn.push(j+"type="+encodeURIComponent("_badmap")),Mi}}catch{y&&y(ur)}}if(cn){fe=qn.join("&");break e}}fe=void 0}return u=u.i.splice(0,m),h.G=u,fe}function Lh(u){if(!u.g&&!u.v){u.Y=1;var h=u.Da;ie||w(),ce||(ie(),ce=!0),S.add(h,u),u.A=0}}function Hl(u){return u.g||u.v||u.A>=3?!1:(u.Y++,u.v=R(c(u.Da,u),Vh(u,u.A)),u.A++,!0)}n.Da=function(){if(this.v=null,Fh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var u=4*this.T;this.j.info("BP detection timer enabled: "+u),this.B=R(c(this.Wa,this),u)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Qe(10),qa(this),Fh(this))};function zl(u){u.B!=null&&(o.clearTimeout(u.B),u.B=null)}function Fh(u){u.g=new Ot(u,u.j,"rpc",u.Y),u.u===null&&(u.g.J=u.o),u.g.P=0;var h=dt(u.na);ln(h,"RID","rpc"),ln(h,"SID",u.M),ln(h,"AID",u.K),ln(h,"CI",u.F?"0":"1"),!u.F&&u.ia&&ln(h,"TO",u.ia),ln(h,"TYPE","xmlhttp"),yo(u,h),u.u&&u.o&&Ul(h,u.u,u.o),u.O&&(u.g.H=u.O);var m=u.g;u=u.ba,m.M=1,m.A=Di(dt(h)),m.u=null,m.R=!0,Da(m,u)}n.Va=function(){this.C!=null&&(this.C=null,qa(this),Hl(this),Qe(19))};function Ua(u){u.C!=null&&(o.clearTimeout(u.C),u.C=null)}function Mh(u,h){var m=null;if(u.g==h){Ua(u),zl(u),u.g=null;var y=2}else if(ue(u.h,h))m=h.G,$e(u.h,h),y=1;else return;if(u.I!=0){if(h.o)if(y==1){m=h.u?h.u.length:0,h=Date.now()-h.F;var F=u.D;y=se(),re(y,new kr(y,m)),Ba(u)}else Lh(u);else if(F=h.m,F==3||F==0&&h.X>0||!(y==1&&ob(u,h)||y==2&&Hl(u)))switch(m&&m.length>0&&(h=u.h,h.i=h.i.concat(m)),F){case 1:Fi(u,5);break;case 4:Fi(u,10);break;case 3:Fi(u,6);break;default:Fi(u,2)}}}function Vh(u,h){let m=u.Qa+Math.floor(Math.random()*u.Za);return u.isActive()||(m*=2),m*h}function Fi(u,h){if(u.j.info("Error code "+h),h==2){var m=c(u.bb,u),y=u.Ua;const F=!y;y=new Yn(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||jn(y,"https"),Di(y),F?ge(y.toString(),m):Ae(y.toString(),m)}else Qe(2);u.I=0,u.l&&u.l.pa(h),jh(u),Nh(u)}n.bb=function(u){u?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function jh(u){if(u.I=0,u.ja=[],u.l){const h=sn(u.h);(h.length!=0||u.i.length!=0)&&(v(u.ja,h),v(u.ja,u.i),u.h.i.length=0,b(u.i),u.i.length=0),u.l.oa()}}function qh(u,h,m){var y=m instanceof Yn?dt(m):new Yn(m);if(y.g!="")h&&(y.g=h+"."+y.g),nt(y,y.u);else{var F=o.location;y=F.protocol,h=h?h+"."+F.hostname:F.hostname,F=+F.port;const j=new Yn(null);y&&jn(j,y),h&&(j.g=h),F&&nt(j,F),m&&(j.h=m),y=j}return m=u.G,h=u.wa,m&&h&&ln(y,m,h),ln(y,"VER",u.ka),yo(u,y),y}function Bh(u,h,m){if(h&&!u.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=u.Aa&&!u.ma?new kn(new Ln({ab:m})):new kn(u.ma),h.Fa(u.L),h}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Uh(){}n=Uh.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function $a(){}$a.prototype.g=function(u,h){return new It(u,h)};function It(u,h){ae.call(this),this.g=new Dh(h),this.l=u,this.h=h&&h.messageUrlParams||null,u=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(u?u["X-WebChannel-Content-Type"]=h.messageContentType:u={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(u?u["X-WebChannel-Client-Profile"]=h.sa:u={"X-WebChannel-Client-Profile":h.sa}),this.g.U=u,(u=h&&h.Qb)&&!E(u)&&(this.g.u=u),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.G=h,u=this.h,u!==null&&h in u&&(u=this.h,h in u&&delete u[h])),this.j=new ys(this)}p(It,ae),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){$l(this.g)},It.prototype.o=function(u){var h=this.g;if(typeof u=="string"){var m={};m.__data__=u,u=m}else this.v&&(m={},m.__data__=J(u),u=m);h.i.push(new jl(h.Ya++,u)),h.I==3&&Ba(h)},It.prototype.N=function(){this.g.l=null,delete this.j,$l(this.g),delete this.g,It.Z.N.call(this)};function $h(u){X.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var h=u.__sm__;if(h){e:{for(const m in h){u=m;break e}u=void 0}(this.i=u)&&(u=this.i,h=h!==null&&u in h?h[u]:void 0),this.data=h}else this.data=u}p($h,X);function Hh(){Y.call(this),this.status=1}p(Hh,Y);function ys(u){this.g=u}p(ys,Uh),ys.prototype.ra=function(){re(this.g,"a")},ys.prototype.qa=function(u){re(this.g,new $h(u))},ys.prototype.pa=function(u){re(this.g,new Hh)},ys.prototype.oa=function(){re(this.g,"b")},$a.prototype.createWebChannel=$a.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,y2=function(){return new $a},_2=function(){return se()},g2=H,Cd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ye.NO_ERROR=0,ye.TIMEOUT=8,ye.HTTP_ERROR=6,pu=ye,De.COMPLETE="complete",m2=De,q.EventType=$,$.OPEN="a",$.CLOSE="b",$.ERROR="c",$.MESSAGE="d",ae.prototype.listen=ae.prototype.J,Eo=q,kn.prototype.listenOnce=kn.prototype.K,kn.prototype.getLastError=kn.prototype.Ha,kn.prototype.getLastErrorCode=kn.prototype.ya,kn.prototype.getStatus=kn.prototype.ca,kn.prototype.getResponseJson=kn.prototype.La,kn.prototype.getResponseText=kn.prototype.la,kn.prototype.send=kn.prototype.ea,kn.prototype.setWithCredentials=kn.prototype.Fa,p2=kn}).apply(typeof eu<"u"?eu:typeof self<"u"?self:typeof window<"u"?window:{});class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");let io="12.10.0";function BC(n){io=n}const rs=new gl("@firebase/firestore");function As(){return rs.logLevel}function be(n,...e){if(rs.logLevel<=ze.DEBUG){const t=e.map(Mf);rs.debug(`Firestore (${io}): ${n}`,...t)}}function Ur(n,...e){if(rs.logLevel<=ze.ERROR){const t=e.map(Mf);rs.error(`Firestore (${io}): ${n}`,...t)}}function is(n,...e){if(rs.logLevel<=ze.WARN){const t=e.map(Mf);rs.warn(`Firestore (${io}): ${n}`,...t)}}function Mf(n){if(typeof n=="string")return n;try{return(function(t){return JSON.stringify(t)})(n)}catch{return n}}function Ne(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,b2(n,r,t)}function b2(n,e,t){let r=`FIRESTORE (${io}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Ur(r),new Error(r)}function rn(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||b2(e,i,r)}function je(n,e){return n}const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends ir{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class hi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}class v2{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(rt.UNAUTHENTICATED)))}shutdown(){}}class $C{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class HC{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){rn(this.o===void 0,42304);let r=this.i;const i=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let s=new hi;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new hi,e.enqueueRetryable((()=>i(this.currentUser)))};const o=()=>{const l=s;e.enqueueRetryable((async()=>{await l.promise,await i(this.currentUser)}))},a=l=>{be("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>a(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(be("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new hi)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(be("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(rn(typeof r.accessToken=="string",31837,{l:r}),new v2(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return rn(e===null||typeof e=="string",2055,{h:e}),new rt(e)}}class zC{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class GC{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new zC(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(rt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class dm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WC{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){rn(this.o===void 0,3512);const r=s=>{s.error!=null&&be("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,be("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>r(s)))};const i=s=>{be("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>i(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):be("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new dm(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(rn(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new dm(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function KC(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}class Vf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=KC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%62))}return r}}function Ge(n,e){return n<e?-1:n>e?1:0}function Sd(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),s=e.charAt(r);if(i!==s)return Yc(i)===Yc(s)?Ge(i,s):Yc(i)?1:-1}return Ge(n.length,e.length)}const QC=55296,YC=57343;function Yc(n){const e=n.charCodeAt(0);return e>=QC&&e<=YC}function Gs(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}const fm="__name__";class dr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Ne(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Ne(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return dr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof dr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=dr.compareSegments(e.get(i),t.get(i));if(s!==0)return s}return Ge(e.length,t.length)}static compareSegments(e,t){const r=dr.isNumericId(e),i=dr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?dr.extractNumericId(e).compare(dr.extractNumericId(t)):Sd(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fi.fromString(e.substring(4,e.length-2))}}class hn extends dr{construct(e,t,r){return new hn(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new _e(Q.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new hn(t)}static emptyPath(){return new hn([])}}const JC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xn extends dr{construct(e,t,r){return new Xn(e,t,r)}static isValidIdentifier(e){return JC.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===fm}static keyField(){return new Xn([fm])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new _e(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new _e(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new _e(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new _e(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xn(t)}static emptyPath(){return new Xn([])}}class Ce{constructor(e){this.path=e}static fromPath(e){return new Ce(hn.fromString(e))}static fromName(e){return new Ce(hn.fromString(e).popFirst(5))}static empty(){return new Ce(hn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&hn.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return hn.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ce(new hn(e.slice()))}}function x2(n,e,t){if(!t)throw new _e(Q.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function XC(n,e,t,r){if(e===!0&&r===!0)throw new _e(Q.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function hm(n){if(!Ce.isDocumentKey(n))throw new _e(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function pm(n){if(Ce.isDocumentKey(n))throw new _e(Q.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function w2(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function wl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ne(12329,{type:typeof n})}function Yt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=wl(n);throw new _e(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Vn(n,e){const t={typeString:n};return e&&(t.value=e),t}function wa(n,e){if(!w2(n))throw new _e(Q.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const o=n[r];if(i&&typeof o!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${r}' field to equal '${s.value}'`;break}}if(t)throw new _e(Q.INVALID_ARGUMENT,t);return!0}const mm=-62135596800,gm=1e6;class _n{static now(){return _n.fromMillis(Date.now())}static fromDate(e){return _n.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*gm);return new _n(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<mm)throw new _e(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/gm}_compareTo(e){return this.seconds===e.seconds?Ge(this.nanoseconds,e.nanoseconds):Ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_n._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(wa(e,_n._jsonSchema))return new _n(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-mm;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_n._jsonSchemaVersion="firestore/timestamp/1.0",_n._jsonSchema={type:Vn("string",_n._jsonSchemaVersion),seconds:Vn("number"),nanoseconds:Vn("number")};class Ve{static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new _n(0,0))}static max(){return new Ve(new _n(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}const ta=-1;function ZC(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Ve.fromTimestamp(r===1e9?new _n(t+1,0):new _n(t,r));return new bi(i,Ce.empty(),e)}function eS(n){return new bi(n.readTime,n.key,ta)}class bi{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new bi(Ve.min(),Ce.empty(),ta)}static max(){return new bi(Ve.max(),Ce.empty(),ta)}}function nS(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ce.comparator(n.documentKey,e.documentKey),t!==0?t:Ge(n.largestBatchId,e.largestBatchId))}const tS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}async function so(n){if(n.code!==Q.FAILED_PRECONDITION||n.message!==tS)throw n;be("LocalStore","Unexpectedly lost primary lease")}class Z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ne(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Z(((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Z?t:Z.resolve(t)}catch(t){return Z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Z.reject(t)}static resolve(e){return new Z(((t,r)=>{t(e)}))}static reject(e){return new Z(((t,r)=>{r(e)}))}static waitFor(e){return new Z(((t,r)=>{let i=0,s=0,o=!1;e.forEach((a=>{++i,a.next((()=>{++s,o&&s===i&&t()}),(l=>r(l)))})),o=!0,s===i&&t()}))}static or(e){let t=Z.resolve(!1);for(const r of e)t=t.next((i=>i?Z.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,s)=>{r.push(t.call(this,i,s))})),this.waitFor(r)}static mapArray(e,t){return new Z(((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;t(e[c]).next((d=>{o[c]=d,++a,a===s&&r(o)}),(d=>i(d)))}}))}static doWhile(e,t){return new Z(((r,i)=>{const s=()=>{e()===!0?t().next((()=>{s()}),i):r()};s()}))}}function iS(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function oo(n){return n.name==="IndexedDbTransactionError"}class El{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}El.ce=-1;const jf=-1;function Al(n){return n==null}function Uu(n){return n===0&&1/n==-1/0}function sS(n){return typeof n=="number"&&Number.isInteger(n)&&!Uu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}const E2="";function oS(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=_m(e)),e=aS(n.get(t),e);return _m(e)}function aS(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const s=n.charAt(i);switch(s){case"\0":t+="";break;case E2:t+="";break;default:t+=s}}return t}function _m(n){return n+E2+""}function ym(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ki(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function A2(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}class wn{constructor(e,t){this.comparator=e,this.root=t||Jn.EMPTY}insert(e,t){return new wn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jn.BLACK,null,null))}remove(e){return new wn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nu(this.root,e,this.comparator,!1)}getReverseIterator(){return new nu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nu(this.root,e,this.comparator,!0)}}class nu{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jn{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Jn.RED,this.left=i??Jn.EMPTY,this.right=s??Jn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Jn(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Jn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Jn.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Ne(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Ne(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Ne(27949);return e+(this.isRed()?0:1)}}Jn.EMPTY=null,Jn.RED=!0,Jn.BLACK=!1;Jn.EMPTY=new class{constructor(){this.size=0}get key(){throw Ne(57766)}get value(){throw Ne(16141)}get color(){throw Ne(16727)}get left(){throw Ne(29726)}get right(){throw Ne(36894)}copy(e,t,r,i,s){return this}insert(e,t,r){return new Jn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};class Bn{constructor(e){this.comparator=e,this.data=new wn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new bm(this.data.getIterator())}getIteratorFrom(e){return new bm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Bn)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Bn(this.comparator);return t.data=e,t}}class bm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}class Dt{constructor(e){this.fields=e,e.sort(Xn.comparator)}static empty(){return new Dt([])}unionWith(e){let t=new Bn(Xn.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}class T2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class et{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new T2("Invalid base64 string: "+s):s}})(e);return new et(t)}static fromUint8Array(e){const t=(function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s})(e);return new et(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const uS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vi(n){if(rn(!!n,39018),typeof n=="string"){let e=0;const t=uS.exec(n);if(rn(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Nn(n.seconds),nanos:Nn(n.nanos)}}function Nn(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xi(n){return typeof n=="string"?et.fromBase64String(n):et.fromUint8Array(n)}const k2="server_timestamp",I2="__type__",C2="__previous_value__",S2="__local_write_time__";function qf(n){return(n?.mapValue?.fields||{})[I2]?.stringValue===k2}function Tl(n){const e=n.mapValue.fields[C2];return qf(e)?Tl(e):e}function ra(n){const e=vi(n.mapValue.fields[S2].timestampValue);return new _n(e.seconds,e.nanos)}class lS{constructor(e,t,r,i,s,o,a,l,c,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c,this.isUsingEmulator=d,this.apiKey=p}}const $u="(default)";class ia{constructor(e,t){this.projectId=e,this.database=t||$u}static empty(){return new ia("","")}get isDefaultDatabase(){return this.database===$u}isEqual(e){return e instanceof ia&&e.projectId===this.projectId&&e.database===this.database}}function cS(n,e){if(!Object.prototype.hasOwnProperty.apply(n.options,["projectId"]))throw new _e(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ia(n.options.projectId,e)}const R2="__type__",dS="__max__",tu={mapValue:{}},D2="__vector__",Hu="value";function wi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qf(n)?4:hS(n)?9007199254740991:fS(n)?10:11:Ne(28295,{value:n})}function wr(n,e){if(n===e)return!0;const t=wi(n);if(t!==wi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ra(n).isEqual(ra(e));case 3:return(function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=vi(i.timestampValue),a=vi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,s){return xi(i.bytesValue).isEqual(xi(s.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,s){return Nn(i.geoPointValue.latitude)===Nn(s.geoPointValue.latitude)&&Nn(i.geoPointValue.longitude)===Nn(s.geoPointValue.longitude)})(n,e);case 2:return(function(i,s){if("integerValue"in i&&"integerValue"in s)return Nn(i.integerValue)===Nn(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Nn(i.doubleValue),a=Nn(s.doubleValue);return o===a?Uu(o)===Uu(a):isNaN(o)&&isNaN(a)}return!1})(n,e);case 9:return Gs(n.arrayValue.values||[],e.arrayValue.values||[],wr);case 10:case 11:return(function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ym(o)!==ym(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!wr(o[l],a[l])))return!1;return!0})(n,e);default:return Ne(52216,{left:n})}}function sa(n,e){return(n.values||[]).find((t=>wr(t,e)))!==void 0}function Ws(n,e){if(n===e)return 0;const t=wi(n),r=wi(e);if(t!==r)return Ge(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ge(n.booleanValue,e.booleanValue);case 2:return(function(s,o){const a=Nn(s.integerValue||s.doubleValue),l=Nn(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1})(n,e);case 3:return vm(n.timestampValue,e.timestampValue);case 4:return vm(ra(n),ra(e));case 5:return Sd(n.stringValue,e.stringValue);case 6:return(function(s,o){const a=xi(s),l=xi(o);return a.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const d=Ge(a[c],l[c]);if(d!==0)return d}return Ge(a.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(s,o){const a=Ge(Nn(s.latitude),Nn(o.latitude));return a!==0?a:Ge(Nn(s.longitude),Nn(o.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return xm(n.arrayValue,e.arrayValue);case 10:return(function(s,o){const a=s.fields||{},l=o.fields||{},c=a[Hu]?.arrayValue,d=l[Hu]?.arrayValue,p=Ge(c?.values?.length||0,d?.values?.length||0);return p!==0?p:xm(c,d)})(n.mapValue,e.mapValue);case 11:return(function(s,o){if(s===tu.mapValue&&o===tu.mapValue)return 0;if(s===tu.mapValue)return 1;if(o===tu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},d=Object.keys(c);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const g=Sd(l[p],d[p]);if(g!==0)return g;const b=Ws(a[l[p]],c[d[p]]);if(b!==0)return b}return Ge(l.length,d.length)})(n.mapValue,e.mapValue);default:throw Ne(23264,{he:t})}}function vm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ge(n,e);const t=vi(n),r=vi(e),i=Ge(t.seconds,r.seconds);return i!==0?i:Ge(t.nanos,r.nanos)}function xm(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const s=Ws(t[i],r[i]);if(s)return s}return Ge(t.length,r.length)}function Ks(n){return Rd(n)}function Rd(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=vi(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return xi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ce.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Rd(s);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Rd(t.fields[o])}`;return i+"}"})(n.mapValue):Ne(61005,{value:n})}function mu(n){switch(wi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Tl(n);return e?16+mu(e):16;case 5:return 2*n.stringValue.length;case 6:return xi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,s)=>i+mu(s)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return ki(r.fields,((s,o)=>{i+=s.length+mu(o)})),i})(n.mapValue);default:throw Ne(13486,{value:n})}}function wm(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Dd(n){return!!n&&"integerValue"in n}function Bf(n){return!!n&&"arrayValue"in n}function Em(n){return!!n&&"nullValue"in n}function Am(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function gu(n){return!!n&&"mapValue"in n}function fS(n){return(n?.mapValue?.fields||{})[R2]?.stringValue===D2}function Vo(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ki(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=Vo(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vo(n.arrayValue.values[t]);return e}return{...n}}function hS(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dS}class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!gu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vo(t)}setAll(e){let t=Xn.emptyPath(),r={},i=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const l=this.getFieldsMap(t);this.applyChanges(l,r,i),r={},i=[],t=a.popLast()}o?r[a.lastSegment()]=Vo(o):i.push(a.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());gu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return wr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];gu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ki(t,((i,s)=>e[i]=s));for(const i of r)delete e[i]}clone(){return new wt(Vo(this.value))}}function N2(n){const e=[];return ki(n.fields,((t,r)=>{const i=new Xn([t]);if(gu(r)){const s=N2(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)})),new Dt(e)}class ot{constructor(e,t,r,i,s,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ot(e,0,Ve.min(),Ve.min(),Ve.min(),wt.empty(),0)}static newFoundDocument(e,t,r,i){return new ot(e,1,t,Ve.min(),r,i,0)}static newNoDocument(e,t){return new ot(e,2,t,Ve.min(),Ve.min(),wt.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,Ve.min(),Ve.min(),wt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class zu{constructor(e,t){this.position=e,this.inclusive=t}}function Tm(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=Ce.comparator(Ce.fromName(o.referenceValue),t.key):r=Ws(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function km(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!wr(n.position[t],e.position[t]))return!1;return!0}class oa{constructor(e,t="asc"){this.field=e,this.dir=t}}function pS(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}class P2{}class Mn extends P2{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new gS(e,t,r):t==="array-contains"?new bS(e,r):t==="in"?new vS(e,r):t==="not-in"?new xS(e,r):t==="array-contains-any"?new wS(e,r):new Mn(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new _S(e,r):new yS(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ws(t,this.value)):t!==null&&wi(this.value)===wi(t)&&this.matchesComparison(Ws(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ne(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tr extends P2{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new tr(e,t)}matches(e){return O2(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function O2(n){return n.op==="and"}function L2(n){return mS(n)&&O2(n)}function mS(n){for(const e of n.filters)if(e instanceof tr)return!1;return!0}function Nd(n){if(n instanceof Mn)return n.field.canonicalString()+n.op.toString()+Ks(n.value);if(L2(n))return n.filters.map((e=>Nd(e))).join(",");{const e=n.filters.map((t=>Nd(t))).join(",");return`${n.op}(${e})`}}function F2(n,e){return n instanceof Mn?(function(r,i){return i instanceof Mn&&r.op===i.op&&r.field.isEqual(i.field)&&wr(r.value,i.value)})(n,e):n instanceof tr?(function(r,i){return i instanceof tr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((s,o,a)=>s&&F2(o,i.filters[a])),!0):!1})(n,e):void Ne(19439)}function M2(n){return n instanceof Mn?(function(t){return`${t.field.canonicalString()} ${t.op} ${Ks(t.value)}`})(n):n instanceof tr?(function(t){return t.op.toString()+" {"+t.getFilters().map(M2).join(" ,")+"}"})(n):"Filter"}class gS extends Mn{constructor(e,t,r){super(e,t,r),this.key=Ce.fromName(r.referenceValue)}matches(e){const t=Ce.comparator(e.key,this.key);return this.matchesComparison(t)}}class _S extends Mn{constructor(e,t){super(e,"in",t),this.keys=V2("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class yS extends Mn{constructor(e,t){super(e,"not-in",t),this.keys=V2("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function V2(n,e){return(e.arrayValue?.values||[]).map((t=>Ce.fromName(t.referenceValue)))}class bS extends Mn{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bf(t)&&sa(t.arrayValue,this.value)}}class vS extends Mn{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&sa(this.value.arrayValue,t)}}class xS extends Mn{constructor(e,t){super(e,"not-in",t)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!sa(this.value.arrayValue,t)}}class wS extends Mn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bf(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>sa(this.value.arrayValue,r)))}}class ES{constructor(e,t=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.Te=null}}function Im(n,e=null,t=[],r=[],i=null,s=null,o=null){return new ES(n,e,t,r,i,s,o)}function Uf(n){const e=je(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Nd(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(s){return s.field.canonicalString()+s.dir})(r))).join(","),Al(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Ks(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Ks(r))).join(",")),e.Te=t}return e.Te}function $f(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!pS(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!F2(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!km(n.startAt,e.startAt)&&km(n.endAt,e.endAt)}function Pd(n){return Ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}class ao{constructor(e,t=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function AS(n,e,t,r,i,s,o,a){return new ao(n,e,t,r,i,s,o,a)}function kl(n){return new ao(n)}function Cm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function TS(n){return Ce.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function j2(n){return n.collectionGroup!==null}function jo(n){const e=je(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Bn(Xn.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((c=>{c.isInequality()&&(a=a.add(c.field))}))})),a})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new oa(s,r))})),t.has(Xn.keyField().canonicalString())||e.Ie.push(new oa(Xn.keyField(),r))}return e.Ie}function _r(n){const e=je(n);return e.Ee||(e.Ee=kS(e,jo(n))),e.Ee}function kS(n,e){if(n.limitType==="F")return Im(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const s=i.dir==="desc"?"asc":"desc";return new oa(i.field,s)}));const t=n.endAt?new zu(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new zu(n.startAt.position,n.startAt.inclusive):null;return Im(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Od(n,e){const t=n.filters.concat([e]);return new ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function IS(n,e){const t=n.explicitOrderBy.concat([e]);return new ao(n.path,n.collectionGroup,t,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}function Gu(n,e,t){return new ao(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Il(n,e){return $f(_r(n),_r(e))&&n.limitType===e.limitType}function q2(n){return`${Uf(_r(n))}|lt:${n.limitType}`}function Ts(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>M2(i))).join(", ")}]`),Al(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Ks(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Ks(i))).join(",")),`Target(${r})`})(_r(n))}; limitType=${n.limitType})`}function Cl(n,e){return e.isFoundDocument()&&(function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Ce.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)})(n,e)&&(function(r,i){for(const s of jo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(o,a,l){const c=Tm(o,a,l);return o.inclusive?c<=0:c<0})(r.startAt,jo(r),i)||r.endAt&&!(function(o,a,l){const c=Tm(o,a,l);return o.inclusive?c>=0:c>0})(r.endAt,jo(r),i))})(n,e)}function CS(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function B2(n){return(e,t)=>{let r=!1;for(const i of jo(n)){const s=SS(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function SS(n,e,t){const r=n.field.isKeyField()?Ce.comparator(e.key,t.key):(function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?Ws(l,c):Ne(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Ne(19790,{direction:n.dir})}}class fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,((t,r)=>{for(const[i,s]of r)e(i,s)}))}isEmpty(){return A2(this.inner)}size(){return this.innerSize}}const RS=new wn(Ce.comparator);function $r(){return RS}const U2=new wn(Ce.comparator);function Ao(...n){let e=U2;for(const t of n)e=e.insert(t.key,t);return e}function $2(n){let e=U2;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Wi(){return qo()}function H2(){return qo()}function qo(){return new fs((n=>n.toString()),((n,e)=>n.isEqual(e)))}const DS=new wn(Ce.comparator),NS=new Bn(Ce.comparator);function We(...n){let e=NS;for(const t of n)e=e.add(t);return e}const PS=new Bn(Ge);function OS(){return PS}function Hf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uu(e)?"-0":e}}function z2(n){return{integerValue:""+n}}function G2(n,e){return sS(e)?z2(e):Hf(n,e)}class Sl{constructor(){this._=void 0}}function LS(n,e,t){return n instanceof aa?(function(i,s){const o={fields:{[I2]:{stringValue:k2},[S2]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qf(s)&&(s=Tl(s)),s&&(o.fields[C2]=s),{mapValue:o}})(t,e):n instanceof ua?K2(n,e):n instanceof la?Q2(n,e):(function(i,s){const o=W2(i,s),a=Sm(o)+Sm(i.Ae);return Dd(o)&&Dd(i.Ae)?z2(a):Hf(i.serializer,a)})(n,e)}function FS(n,e,t){return n instanceof ua?K2(n,e):n instanceof la?Q2(n,e):t}function W2(n,e){return n instanceof ca?(function(r){return Dd(r)||(function(s){return!!s&&"doubleValue"in s})(r)})(e)?e:{integerValue:0}:null}class aa extends Sl{}class ua extends Sl{constructor(e){super(),this.elements=e}}function K2(n,e){const t=Y2(e);for(const r of n.elements)t.some((i=>wr(i,r)))||t.push(r);return{arrayValue:{values:t}}}class la extends Sl{constructor(e){super(),this.elements=e}}function Q2(n,e){let t=Y2(e);for(const r of n.elements)t=t.filter((i=>!wr(i,r)));return{arrayValue:{values:t}}}class ca extends Sl{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Sm(n){return Nn(n.integerValue||n.doubleValue)}function Y2(n){return Bf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}class J2{constructor(e,t){this.field=e,this.transform=t}}function MS(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof ua&&i instanceof ua||r instanceof la&&i instanceof la?Gs(r.elements,i.elements,wr):r instanceof ca&&i instanceof ca?wr(r.Ae,i.Ae):r instanceof aa&&i instanceof aa})(n.transform,e.transform)}class VS{constructor(e,t){this.version=e,this.transformResults=t}}class Jt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _u(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Rl{}function X2(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new ey(n.key,Jt.none()):new Ea(n.key,n.data,Jt.none());{const t=n.data,r=wt.empty();let i=new Bn(Xn.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ii(n.key,r,new Dt(i.toArray()),Jt.none())}}function jS(n,e,t){n instanceof Ea?(function(i,s,o){const a=i.value.clone(),l=Dm(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(n,e,t):n instanceof Ii?(function(i,s,o){if(!_u(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Dm(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Z2(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(n,e,t):(function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function Bo(n,e,t,r){return n instanceof Ea?(function(s,o,a,l){if(!_u(s.precondition,o))return a;const c=s.value.clone(),d=Nm(s.fieldTransforms,l,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ii?(function(s,o,a,l){if(!_u(s.precondition,o))return a;const c=Nm(s.fieldTransforms,l,o),d=o.data;return d.setAll(Z2(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((p=>p.field)))})(n,e,t,r):(function(s,o,a){return _u(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(n,e,t)}function qS(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=W2(r.transform,i||null);s!=null&&(t===null&&(t=wt.empty()),t.set(r.field,s))}return t||null}function Rm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Gs(r,i,((s,o)=>MS(s,o)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ea extends Rl{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ii extends Rl{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Z2(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Dm(n,e,t){const r=new Map;rn(n.length===t.length,32656,{Ve:t.length,de:n.length});for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,FS(o,a,t[i]))}return r}function Nm(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,LS(s,o,e))}return r}class ey extends Rl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BS extends Rl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class US{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&jS(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Bo(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Bo(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=H2();return this.mutations.forEach((i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=t.has(i.key)?null:a;const l=X2(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Ve.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),We())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,((t,r)=>Rm(t,r)))&&Gs(this.baseMutations,e.baseMutations,((t,r)=>Rm(t,r)))}}class zf{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){rn(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return DS})();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zf(e,t,r,i)}}class $S{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}class HS{constructor(e,t){this.count=e,this.unchangedNames=t}}var Fn,Ye;function zS(n){switch(n){case Q.OK:return Ne(64938);case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return Ne(15467,{code:n})}}function ny(n){if(n===void 0)return Ur("GRPC error has no .code"),Q.UNKNOWN;switch(n){case Fn.OK:return Q.OK;case Fn.CANCELLED:return Q.CANCELLED;case Fn.UNKNOWN:return Q.UNKNOWN;case Fn.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case Fn.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case Fn.INTERNAL:return Q.INTERNAL;case Fn.UNAVAILABLE:return Q.UNAVAILABLE;case Fn.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case Fn.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case Fn.NOT_FOUND:return Q.NOT_FOUND;case Fn.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case Fn.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case Fn.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case Fn.ABORTED:return Q.ABORTED;case Fn.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case Fn.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case Fn.DATA_LOSS:return Q.DATA_LOSS;default:return Ne(39323,{code:n})}}(Ye=Fn||(Fn={}))[Ye.OK=0]="OK",Ye[Ye.CANCELLED=1]="CANCELLED",Ye[Ye.UNKNOWN=2]="UNKNOWN",Ye[Ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ye[Ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ye[Ye.NOT_FOUND=5]="NOT_FOUND",Ye[Ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ye[Ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ye[Ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ye[Ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ye[Ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ye[Ye.ABORTED=10]="ABORTED",Ye[Ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ye[Ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ye[Ye.INTERNAL=13]="INTERNAL",Ye[Ye.UNAVAILABLE=14]="UNAVAILABLE",Ye[Ye.DATA_LOSS=15]="DATA_LOSS";function GS(){return new TextEncoder}const WS=new fi([4294967295,4294967295],0);function Pm(n){const e=GS().encode(n),t=new h2;return t.update(e),new Uint8Array(t.digest())}function Om(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new fi([t,r],0),new fi([i,s],0)]}class Gf{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new To(`Invalid padding: ${t}`);if(r<0)throw new To(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new To(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new To(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=fi.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(fi.fromNumber(r)));return i.compare(WS)===1&&(i=new fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Pm(e),[r,i]=Om(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Gf(s,i,t);return r.forEach((a=>o.insert(a))),o}insert(e){if(this.ge===0)return;const t=Pm(e),[r,i]=Om(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.be(o)}}be(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class To extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class Dl{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Aa.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Dl(Ve.min(),i,new wn(Ge),$r(),We())}}class Aa{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Aa(r,t,We(),We(),We())}}class yu{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.De=i}}class ty{constructor(e,t){this.targetId=e,this.Ce=t}}class ry{constructor(e,t,r=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Lm{constructor(){this.ve=0,this.Fe=Fm(),this.Me=et.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=We(),t=We(),r=We();return this.Fe.forEach(((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Ne(38017,{changeType:s})}})),new Aa(this.Me,this.xe,e,t,r)}Ke(){this.Oe=!1,this.Fe=Fm()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,rn(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class KS{constructor(e){this.Ge=e,this.ze=new Map,this.je=$r(),this.He=ru(),this.Je=ru(),this.Ze=new wn(Ge)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:Ne(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const s=i.target;if(Pd(s))if(r===0){const o=new Ce(s.path);this.et(t,o,ot.newNoDocument(o,Ve.min()))}else rn(r===1,20013,{expectedCount:r});else{const o=this._t(t);if(o!==r){const a=this.ut(e),l=a?this.ct(a,e,o):1;if(l!==0){this.it(t);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,c)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,a;try{o=xi(r).toUint8Array()}catch(l){if(l instanceof T2)return is("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Gf(o,i,s)}catch(l){return is(l instanceof To?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.ge===0?null:a}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((s=>{const o=this.Ge.ht(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.et(t,s,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((s,o)=>{const a=this.ot(o);if(a){if(s.current&&Pd(a.target)){const l=new Ce(a.target.path);this.It(l).has(o)||this.Et(o,l)||this.et(o,l,ot.newNoDocument(l,e))}s.Be&&(t.set(o,s.ke()),s.Ke())}}));let r=We();this.Je.forEach(((s,o)=>{let a=!0;o.forEachWhile((l=>{const c=this.ot(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(r=r.add(s))})),this.je.forEach(((s,o)=>o.setReadTime(e)));const i=new Dl(e,t,this.Ze,this.je,r);return this.je=$r(),this.He=ru(),this.Je=ru(),this.Ze=new wn(Ge),i}Ye(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,r),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.qe(t,1):i.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new Lm,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new Bn(Ge),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new Bn(Ge),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||be("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Lm),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ru(){return new wn(Ce.comparator)}function Fm(){return new wn(Ce.comparator)}const QS={asc:"ASCENDING",desc:"DESCENDING"},YS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},JS={and:"AND",or:"OR"};class XS{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ld(n,e){return n.useProto3Json||Al(e)?e:{value:e}}function Wu(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iy(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ZS(n,e){return Wu(n,e.toTimestamp())}function yr(n){return rn(!!n,49232),Ve.fromTimestamp((function(t){const r=vi(t);return new _n(r.seconds,r.nanos)})(n))}function Wf(n,e){return Fd(n,e).canonicalString()}function Fd(n,e){const t=(function(i){return new hn(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function sy(n){const e=hn.fromString(n);return rn(cy(e),10190,{key:e.toString()}),e}function Md(n,e){return Wf(n.databaseId,e.path)}function Jc(n,e){const t=sy(e);if(t.get(1)!==n.databaseId.projectId)throw new _e(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _e(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ce(ay(t))}function oy(n,e){return Wf(n.databaseId,e)}function e5(n){const e=sy(n);return e.length===4?hn.emptyPath():ay(e)}function Vd(n){return new hn(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ay(n){return rn(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Mm(n,e,t){return{name:Md(n,e),fields:t.value.mapValue.fields}}function n5(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Ne(39313,{state:c})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=(function(c,d){return c.useProto3Json?(rn(d===void 0||typeof d=="string",58123),et.fromBase64String(d||"")):(rn(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),et.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(c){const d=c.code===void 0?Q.UNKNOWN:ny(c.code);return new _e(d,c.message||"")})(o);t=new ry(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Jc(n,r.document.name),s=yr(r.document.updateTime),o=r.document.createTime?yr(r.document.createTime):Ve.min(),a=new wt({mapValue:{fields:r.document.fields}}),l=ot.newFoundDocument(i,s,o,a),c=r.targetIds||[],d=r.removedTargetIds||[];t=new yu(c,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Jc(n,r.document),s=r.readTime?yr(r.readTime):Ve.min(),o=ot.newNoDocument(i,s),a=r.removedTargetIds||[];t=new yu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Jc(n,r.document),s=r.removedTargetIds||[];t=new yu([],s,i,null)}else{if(!("filter"in e))return Ne(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new HS(i,s),a=r.targetId;t=new ty(a,o)}}return t}function t5(n,e){let t;if(e instanceof Ea)t={update:Mm(n,e.key,e.value)};else if(e instanceof ey)t={delete:Md(n,e.key)};else if(e instanceof Ii)t={update:Mm(n,e.key,e.data),updateMask:d5(e.fieldMask)};else{if(!(e instanceof BS))return Ne(16599,{dt:e.type});t={verify:Md(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(s,o){const a=o.transform;if(a instanceof aa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ua)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof la)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ca)return{fieldPath:o.field.canonicalString(),increment:a.Ae};throw Ne(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,s){return s.updateTime!==void 0?{updateTime:ZS(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Ne(27497)})(n,e.precondition)),t}function r5(n,e){return n&&n.length>0?(rn(e!==void 0,14353),n.map((t=>(function(i,s){let o=i.updateTime?yr(i.updateTime):yr(s);return o.isEqual(Ve.min())&&(o=yr(s)),new VS(o,i.transformResults||[])})(t,e)))):[]}function i5(n,e){return{documents:[oy(n,e.path)]}}function s5(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=oy(n,i);const s=(function(c){if(c.length!==0)return ly(tr.create(c,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(c){if(c.length!==0)return c.map((d=>(function(g){return{field:ks(g.field),direction:u5(g.dir)}})(d)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Ld(n,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(c){return{before:c.inclusive,values:c.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(c){return{before:!c.inclusive,values:c.position}})(e.endAt)),{ft:t,parent:i}}function o5(n){let e=e5(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){rn(r===1,65062);const d=t.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];t.where&&(s=(function(p){const g=uy(p);return g instanceof tr&&L2(g)?g.getFilters():[g]})(t.where));let o=[];t.orderBy&&(o=(function(p){return p.map((g=>(function(v){return new oa(Is(v.field),(function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(v.direction))})(g)))})(t.orderBy));let a=null;t.limit&&(a=(function(p){let g;return g=typeof p=="object"?p.value:p,Al(g)?null:g})(t.limit));let l=null;t.startAt&&(l=(function(p){const g=!!p.before,b=p.values||[];return new zu(b,g)})(t.startAt));let c=null;return t.endAt&&(c=(function(p){const g=!p.before,b=p.values||[];return new zu(b,g)})(t.endAt)),AS(e,i,o,s,a,"F",l,c)}function a5(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ne(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function uy(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Is(t.unaryFilter.field);return Mn.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Is(t.unaryFilter.field);return Mn.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Is(t.unaryFilter.field);return Mn.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Is(t.unaryFilter.field);return Mn.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Ne(61313);default:return Ne(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Mn.create(Is(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Ne(58110);default:return Ne(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return tr.create(t.compositeFilter.filters.map((r=>uy(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Ne(1026)}})(t.compositeFilter.op))})(n):Ne(30097,{filter:n})}function u5(n){return QS[n]}function l5(n){return YS[n]}function c5(n){return JS[n]}function ks(n){return{fieldPath:n.canonicalString()}}function Is(n){return Xn.fromServerFormat(n.fieldPath)}function ly(n){return n instanceof Mn?(function(t){if(t.op==="=="){if(Am(t.value))return{unaryFilter:{field:ks(t.field),op:"IS_NAN"}};if(Em(t.value))return{unaryFilter:{field:ks(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Am(t.value))return{unaryFilter:{field:ks(t.field),op:"IS_NOT_NAN"}};if(Em(t.value))return{unaryFilter:{field:ks(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ks(t.field),op:l5(t.op),value:t.value}}})(n):n instanceof tr?(function(t){const r=t.getFilters().map((i=>ly(i)));return r.length===1?r[0]:{compositeFilter:{op:c5(t.op),filters:r}}})(n):Ne(54877,{filter:n})}function d5(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function cy(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}function dy(n){return!!n&&typeof n._toProto=="function"&&n._protoValueType==="ProtoValue"}class ui{constructor(e,t,r,i,s=Ve.min(),o=Ve.min(),a=et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new ui(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ui(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}class f5{constructor(e){this.yt=e}}function h5(n){const e=o5({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Gu(e,e.limit,"L"):e}class p5{constructor(){this.Sn=new m5}addToCollectionParentIndex(e,t){return this.Sn.add(t),Z.resolve()}getCollectionParents(e,t){return Z.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return Z.resolve()}deleteFieldIndex(e,t){return Z.resolve()}deleteAllFieldIndexes(e){return Z.resolve()}createTargetIndexes(e,t){return Z.resolve()}getDocumentsMatchingTarget(e,t){return Z.resolve(null)}getIndexType(e,t){return Z.resolve(0)}getFieldIndexes(e,t){return Z.resolve([])}getNextCollectionGroupToUpdate(e){return Z.resolve(null)}getMinOffset(e,t){return Z.resolve(bi.min())}getMinOffsetFromCollectionGroup(e,t){return Z.resolve(bi.min())}updateCollectionGroup(e,t,r){return Z.resolve()}updateIndexEntries(e,t){return Z.resolve()}}class m5{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Bn(hn.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Bn(hn.comparator)).toArray()}}const Vm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fy=41943040;class xt{static withCacheSize(e){return new xt(e,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(fy,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);class Qs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Qs(0)}static ar(){return new Qs(-1)}}const jm="LruGarbageCollector",g5=1048576;function qm([n,e],[t,r]){const i=Ge(n,t);return i===0?Ge(e,r):i}class _5{constructor(e){this.Pr=e,this.buffer=new Bn(qm),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();qm(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class y5{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){be(jm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){oo(t)?be(jm,"Ignoring IndexedDB error during garbage collection: ",t):await so(t)}await this.Ar(3e5)}))}}class b5{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return Z.resolve(El.ce);const r=new _5(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.mr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(be("LruGarbageCollector","Garbage collection skipped; disabled"),Z.resolve(Vm)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(be("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vm):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let r,i,s,o,a,l,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(be("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i)))).next((p=>(r=p,a=Date.now(),this.removeTargets(e,r,t)))).next((p=>(s=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(c=Date.now(),As()<=ze.DEBUG&&be("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${p} documents in `+(c-l)+`ms
Total Duration: ${c-d}ms`),Z.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p}))))}}function v5(n,e){return new b5(n,e)}class x5{constructor(){this.changes=new fs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?Z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}class w5{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class E5{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&Bo(r.mutation,i,Dt.empty(),_n.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,We()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=We()){const i=Wi();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((s=>{let o=Ao();return s.forEach(((a,l)=>{o=o.insert(a,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const r=Wi();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,We())))}populateOverlays(e,t,r){const i=[];return r.forEach((s=>{t.has(s)||i.push(s)})),this.documentOverlayCache.getOverlays(e,i).next((s=>{s.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,r,i){let s=$r();const o=qo(),a=(function(){return qo()})();return t.forEach(((l,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof Ii)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),Bo(d.mutation,c,d.mutation.getFieldMask(),_n.now())):o.set(c.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,s).next((l=>(l.forEach(((c,d)=>o.set(c,d))),t.forEach(((c,d)=>a.set(c,new w5(d,o.get(c)??null)))),a)))}recalculateAndSaveOverlays(e,t){const r=qo();let i=new wn(((o,a)=>o-a)),s=We();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((l=>{const c=t.get(l);if(c===null)return;let d=r.get(l)||Dt.empty();d=a.applyToLocalView(c,d),r.set(l,d);const p=(i.get(a.batchId)||We()).add(l);i=i.insert(a.batchId,p)}))})).next((()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,d=l.value,p=H2();d.forEach((g=>{if(!s.has(g)){const b=X2(t.get(g),r.get(g));b!==null&&p.set(g,b),s=s.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return Z.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return TS(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):j2(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):Z.resolve(Wi());let a=ta,l=s;return o.next((c=>Z.forEach(c,((d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),s.get(d)?Z.resolve():this.remoteDocumentCache.getEntry(e,d).next((g=>{l=l.insert(d,g)}))))).next((()=>this.populateOverlays(e,c,s))).next((()=>this.computeViews(e,l,c,We()))).next((d=>({batchId:a,changes:$2(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ce(t)).next((r=>{let i=Ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,s).next((a=>Z.forEach(a,(l=>{const c=(function(p,g){return new ao(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next((d=>{d.forEach(((p,g)=>{o=o.insert(p,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i)))).next((o=>{s.forEach(((l,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,ot.newInvalidDocument(d)))}));let a=Ao();return o.forEach(((l,c)=>{const d=s.get(l);d!==void 0&&Bo(d.mutation,c,Dt.empty(),_n.now()),Cl(t,c)&&(a=a.insert(l,c))})),a}))}}class A5{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return Z.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:yr(i.createTime)}})(t)),Z.resolve()}getNamedQuery(e,t){return Z.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(i){return{name:i.name,query:h5(i.bundledQuery),readTime:yr(i.readTime)}})(t)),Z.resolve()}}class T5{constructor(){this.overlays=new wn(Ce.comparator),this.Lr=new Map}getOverlay(e,t){return Z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Wi();return Z.forEach(t,(i=>this.getOverlay(e,i).next((s=>{s!==null&&r.set(i,s)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,s)=>{this.bt(e,t,s)})),Z.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach((s=>this.overlays=this.overlays.remove(s))),this.Lr.delete(r)),Z.resolve()}getOverlaysForCollection(e,t,r){const i=Wi(),s=t.length+1,o=new Ce(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return Z.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new wn(((c,d)=>c-d));const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Wi(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const a=Wi(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((c,d)=>a.set(c,d))),!(a.size()>=i)););return Z.resolve(a)}bt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $S(t,r));let s=this.Lr.get(t);s===void 0&&(s=We(),this.Lr.set(t,s)),this.Lr.set(t,s.add(r.key))}}class k5{constructor(){this.sessionToken=et.EMPTY_BYTE_STRING}getSessionToken(e){return Z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Z.resolve()}}class Kf{constructor(){this.kr=new Bn(zn.Kr),this.qr=new Bn(zn.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const r=new zn(e,t);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new zn(e,t))}Qr(e,t){e.forEach((r=>this.removeReference(r,t)))}Gr(e){const t=new Ce(new hn([])),r=new zn(t,e),i=new zn(t,e+1),s=[];return this.qr.forEachInRange([r,i],(o=>{this.Wr(o),s.push(o.key)})),s}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new Ce(new hn([])),r=new zn(t,e),i=new zn(t,e+1);let s=We();return this.qr.forEachInRange([r,i],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new zn(e,0),r=this.kr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class zn{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return Ce.comparator(e.key,t.key)||Ge(e.Hr,t.Hr)}static Ur(e,t){return Ge(e.Hr,t.Hr)||Ce.comparator(e.key,t.key)}}class I5{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new Bn(zn.Kr)}checkEmpty(e){return Z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new US(s,t,r,i);this.mutationQueue.push(o);for(const a of i)this.Jr=this.Jr.add(new zn(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Z.resolve(o)}lookupMutationBatch(e,t){return Z.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),s=i<0?0:i;return Z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Z.resolve(this.mutationQueue.length===0?jf:this.Yn-1)}getAllMutationBatches(e){return Z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new zn(t,0),i=new zn(t,Number.POSITIVE_INFINITY),s=[];return this.Jr.forEachInRange([r,i],(o=>{const a=this.Zr(o.Hr);s.push(a)})),Z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Bn(Ge);return t.forEach((i=>{const s=new zn(i,0),o=new zn(i,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([s,o],(a=>{r=r.add(a.Hr)}))})),Z.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;Ce.isDocumentKey(s)||(s=s.child(""));const o=new zn(new Ce(s),0);let a=new Bn(Ge);return this.Jr.forEachWhile((l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.Hr)),!0)}),o),Z.resolve(this.Yr(a))}Yr(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){rn(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Jr;return Z.forEach(t.mutations,(i=>{const s=new zn(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Jr=r}))}nr(e){}containsKey(e,t){const r=new zn(t,0),i=this.Jr.firstAfterOrEqual(r);return Z.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Z.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class C5{constructor(e){this.ti=e,this.docs=(function(){return new wn(Ce.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return Z.resolve(r?r.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let r=$r();return t.forEach((i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ot.newInvalidDocument(i))})),Z.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=$r();const o=t.path,a=new Ce(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:d}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||nS(eS(d),r)<=0||(i.has(d.key)||Cl(t,d))&&(s=s.insert(d.key,d.mutableCopy()))}return Z.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Ne(9500)}ni(e,t){return Z.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new S5(this)}getSize(e){return Z.resolve(this.size)}}class S5 extends x5{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)})),Z.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}class R5{constructor(e){this.persistence=e,this.ri=new fs((t=>Uf(t)),$f),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.ii=0,this.si=new Kf,this.targetCount=0,this.oi=Qs._r()}forEachTarget(e,t){return this.ri.forEach(((r,i)=>t(i))),Z.resolve()}getLastRemoteSnapshotVersion(e){return Z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Z.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),Z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.ii&&(this.ii=t),Z.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Qs(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,Z.resolve()}updateTargetData(e,t){return this.lr(t),Z.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,Z.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.ri.forEach(((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)})),Z.waitFor(s).next((()=>i))}getTargetCount(e){return Z.resolve(this.targetCount)}getTargetData(e,t){const r=this.ri.get(t)||null;return Z.resolve(r)}addMatchingKeys(e,t,r){return this.si.$r(t,r),Z.resolve()}removeMatchingKeys(e,t,r){this.si.Qr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach((o=>{s.push(i.markPotentiallyOrphaned(e,o))})),Z.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),Z.resolve()}getMatchingKeysForTargetId(e,t){const r=this.si.jr(t);return Z.resolve(r)}containsKey(e,t){return Z.resolve(this.si.containsKey(t))}}class hy{constructor(e,t){this._i={},this.overlays={},this.ai=new El(0),this.ui=!1,this.ui=!0,this.ci=new k5,this.referenceDelegate=e(this),this.li=new R5(this),this.indexManager=new p5,this.remoteDocumentCache=(function(i){return new C5(i)})((r=>this.referenceDelegate.hi(r))),this.serializer=new f5(t),this.Pi=new A5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new T5,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this._i[e.toKey()];return r||(r=new I5(t,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,r){be("MemoryPersistence","Starting transaction:",e);const i=new D5(this.ai.next());return this.referenceDelegate.Ti(),r(i).next((s=>this.referenceDelegate.Ii(i).next((()=>s)))).toPromise().then((s=>(i.raiseOnCommittedEvent(),s)))}Ei(e,t){return Z.or(Object.values(this._i).map((r=>()=>r.containsKey(e,t))))}}class D5 extends rS{constructor(e){super(),this.currentSequenceNumber=e}}class Qf{constructor(e){this.persistence=e,this.Ri=new Kf,this.Ai=null}static Vi(e){return new Qf(e)}get di(){if(this.Ai)return this.Ai;throw Ne(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.di.delete(r.toString()),Z.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.di.add(r.toString()),Z.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),Z.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((i=>this.di.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((s=>this.di.add(s.toString())))})).next((()=>r.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Z.forEach(this.di,(r=>{const i=Ce.fromPath(r);return this.mi(e,i).next((s=>{s||t.removeEntry(i,Ve.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((r=>{r?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return Z.or([()=>Z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ku{constructor(e,t){this.persistence=e,this.fi=new fs((r=>oS(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=v5(this,t)}static Vi(e,t){return new Ku(e,t)}Ti(){}Ii(e){return Z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}pr(e){let t=0;return this.mr(e,(r=>{t++})).next((()=>t))}mr(e,t){return Z.forEach(this.fi,((r,i)=>this.wr(e,r,i).next((s=>s?Z.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,(o=>this.wr(e,o,t).next((a=>{a||(r++,s.removeEntry(o,Ve.min()))})))).next((()=>s.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),Z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),Z.resolve()}removeReference(e,t,r){return this.fi.set(r,e.currentSequenceNumber),Z.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),Z.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=mu(e.data.value)),t}wr(e,t,r){return Z.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.fi.get(t);return Z.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}class Yf{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ts=r,this.Is=i}static Es(e,t){let r=We(),i=We();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Yf(e,t.fromCache,r,i)}}class N5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}class P5{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return J6()?8:iS(lt())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.gs(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ps(e,t,i,r).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new N5;return this.ys(e,t,o).next((a=>{if(s.result=a,this.As)return this.ws(e,t,o,a.size)}))})).next((()=>s.result))}ws(e,t,r,i){return r.documentReadCount<this.Vs?(As()<=ze.DEBUG&&be("QueryEngine","SDK will not create cache indexes for query:",Ts(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Z.resolve()):(As()<=ze.DEBUG&&be("QueryEngine","Query:",Ts(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(As()<=ze.DEBUG&&be("QueryEngine","The SDK decides to create cache indexes for query:",Ts(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,_r(t))):Z.resolve())}gs(e,t){if(Cm(t))return Z.resolve(null);let r=_r(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Gu(t,null,"F"),r=_r(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((s=>{const o=We(...s);return this.fs.getDocuments(e,o).next((a=>this.indexManager.getMinOffset(e,r).next((l=>{const c=this.bs(t,a);return this.Ss(t,c,o,l.readTime)?this.gs(e,Gu(t,null,"F")):this.Ds(e,c,t,l)}))))})))))}ps(e,t,r,i){return Cm(t)||i.isEqual(Ve.min())?Z.resolve(null):this.fs.getDocuments(e,r).next((s=>{const o=this.bs(t,s);return this.Ss(t,o,r,i)?Z.resolve(null):(As()<=ze.DEBUG&&be("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ts(t)),this.Ds(e,o,t,ZC(i,ta)).next((a=>a)))}))}bs(e,t){let r=new Bn(B2(e));return t.forEach(((i,s)=>{Cl(e,s)&&(r=r.add(s))})),r}Ss(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,t,r){return As()<=ze.DEBUG&&be("QueryEngine","Using full collection scan to execute query:",Ts(t)),this.fs.getDocumentsMatchingQuery(e,t,bi.min(),r)}Ds(e,t,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}const Jf="LocalStore",O5=3e8;class L5{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.vs=new wn(Ge),this.Fs=new fs((s=>Uf(s)),$f),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new E5(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function F5(n,e,t,r){return new L5(n,e,t,r)}async function py(n,e){const t=je(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((s=>(i=s,t.Os(e),t.mutationQueue.getAllMutationBatches(r)))).next((s=>{const o=[],a=[];let l=We();for(const c of i){o.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}for(const c of s){a.push(c.batchId);for(const d of c.mutations)l=l.add(d.key)}return t.localDocuments.getDocuments(r,l).next((c=>({Ns:c,removedBatchIds:o,addedBatchIds:a})))}))}))}function M5(n,e){const t=je(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),s=t.xs.newChangeBuffer({trackRemovals:!0});return(function(a,l,c,d){const p=c.batch,g=p.keys();let b=Z.resolve();return g.forEach((v=>{b=b.next((()=>d.getEntry(l,v))).next((I=>{const D=c.docVersions.get(v);rn(D!==null,48541),I.version.compareTo(D)<0&&(p.applyToRemoteDocument(I,c),I.isValidDocument()&&(I.setReadTime(c.commitVersion),d.addEntry(I)))}))})),b.next((()=>a.mutationQueue.removeMutationBatch(l,p)))})(t,r,e,s).next((()=>s.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(a){let l=We();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function my(n){const e=je(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function V5(n,e){const t=je(n),r=e.snapshotVersion;let i=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});i=t.vs;const a=[];e.targetChanges.forEach(((d,p)=>{const g=i.get(p);if(!g)return;a.push(t.li.removeMatchingKeys(s,d.removedDocuments,p).next((()=>t.li.addMatchingKeys(s,d.addedDocuments,p))));let b=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?b=b.withResumeToken(et.EMPTY_BYTE_STRING,Ve.min()).withLastLimboFreeSnapshotVersion(Ve.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),i=i.insert(p,b),(function(I,D,L){return I.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=O5?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0})(g,b,d)&&a.push(t.li.updateTargetData(s,b))}));let l=$r(),c=We();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,d))})),a.push(j5(s,o,e.documentUpdates).next((d=>{l=d.Bs,c=d.Ls}))),!r.isEqual(Ve.min())){const d=t.li.getLastRemoteSnapshotVersion(s).next((p=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,r)));a.push(d)}return Z.waitFor(a).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,l,c))).next((()=>l))})).then((s=>(t.vs=i,s)))}function j5(n,e,t){let r=We(),i=We();return t.forEach((s=>r=r.add(s))),e.getEntries(n,r).next((s=>{let o=$r();return t.forEach(((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Ve.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):be(Jf,"Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)})),{Bs:o,Ls:i}}))}function q5(n,e){const t=je(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=jf),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function B5(n,e){const t=je(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.li.getTargetData(r,e).next((s=>s?(i=s,Z.resolve(i)):t.li.allocateTargetId(r).next((o=>(i=new ui(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.li.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.vs=t.vs.insert(r.targetId,r),t.Fs.set(e,r.targetId)),r}))}async function jd(n,e,t){const r=je(n),i=r.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,(o=>r.persistence.referenceDelegate.removeTarget(o,i)))}catch(o){if(!oo(o))throw o;be(Jf,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function Bm(n,e,t){const r=je(n);let i=Ve.min(),s=We();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,c,d){const p=je(l),g=p.Fs.get(d);return g!==void 0?Z.resolve(p.vs.get(g)):p.li.getTargetData(c,d)})(r,o,_r(e)).next((a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,a.targetId).next((l=>{s=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,t?i:Ve.min(),t?s:We()))).next((a=>(U5(r,CS(e),a),{documents:a,ks:s})))))}function U5(n,e,t){let r=n.Ms.get(e)||Ve.min();t.forEach(((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)})),n.Ms.set(e,r)}class Um{constructor(){this.activeTargetIds=OS()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $5{constructor(){this.vo=new Um,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,r){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Um,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}class H5{Mo(e){}shutdown(){}}const $m="ConnectivityMonitor";class Hm{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){be($m,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){be($m,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}let iu=null;function qd(){return iu===null?iu=(function(){return 268435456+Math.round(2147483648*Math.random())})():iu++,"0x"+iu.toString(16)}const Xc="RestConnection",z5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class G5{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===$u?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,s){const o=qd(),a=this.Qo(e,t.toUriEncodedString());be(Xc,`Sending RPC '${e}' ${o}:`,a,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,i,s);const{host:c}=new URL(a),d=no(c);return this.zo(e,a,l,r,d).then((p=>(be(Xc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw is(Xc,`RPC '${e}' ${o} failed with error: `,p,"url: ",a,"request:",r),p}))}jo(e,t,r,i,s,o){return this.Wo(e,t,r,i,s)}Go(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+io})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,s)=>e[s]=i)),r&&r.headers.forEach(((i,s)=>e[s]=i))}Qo(e,t){const r=z5[e];let i=`${this.qo}/v1/${t}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}class W5{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}const tt="WebChannelConnection",xo=(n,e,t)=>{n.listen(e,(r=>{try{t(r)}catch(i){setTimeout((()=>{throw i}),0)}}))};class Vs extends G5{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Vs.c_){const e=_2();xo(e,g2.STAT_EVENT,(t=>{t.stat===Cd.PROXY?be(tt,"STAT_EVENT: detected buffering proxy"):t.stat===Cd.NOPROXY&&be(tt,"STAT_EVENT: detected no buffering proxy")})),Vs.c_=!0}}zo(e,t,r,i,s){const o=qd();return new Promise(((a,l)=>{const c=new p2;c.setWithCredentials(!0),c.listenOnce(m2.COMPLETE,(()=>{try{switch(c.getLastErrorCode()){case pu.NO_ERROR:const p=c.getResponseJson();be(tt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),a(p);break;case pu.TIMEOUT:be(tt,`RPC '${e}' ${o} timed out`),l(new _e(Q.DEADLINE_EXCEEDED,"Request time out"));break;case pu.HTTP_ERROR:const g=c.getStatus();if(be(tt,`RPC '${e}' ${o} failed with status:`,g,"response text:",c.getResponseText()),g>0){let b=c.getResponseJson();Array.isArray(b)&&(b=b[0]);const v=b?.error;if(v&&v.status&&v.message){const I=(function(L){const V=L.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(V)>=0?V:Q.UNKNOWN})(v.status);l(new _e(I,v.message))}else l(new _e(Q.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new _e(Q.UNAVAILABLE,"Connection failed."));break;default:Ne(9055,{l_:e,streamId:o,h_:c.getLastErrorCode(),P_:c.getLastError()})}}finally{be(tt,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(i);be(tt,`RPC '${e}' ${o} sending request:`,i),c.send(t,"POST",d,r,15)}))}T_(e,t,r){const i=qd(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(a.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Go(a.initMessageHeaders,t,r),a.encodeInitMessageHeaders=!0;const c=s.join("");be(tt,`Creating RPC '${e}' stream ${i}: ${c}`,a);const d=o.createWebChannel(c,a);this.I_(d);let p=!1,g=!1;const b=new W5({Ho:v=>{g?be(tt,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(p||(be(tt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),p=!0),be(tt,`RPC '${e}' stream ${i} sending:`,v),d.send(v))},Jo:()=>d.close()});return xo(d,Eo.EventType.OPEN,(()=>{g||(be(tt,`RPC '${e}' stream ${i} transport opened.`),b.i_())})),xo(d,Eo.EventType.CLOSE,(()=>{g||(g=!0,be(tt,`RPC '${e}' stream ${i} transport closed`),b.o_(),this.E_(d))})),xo(d,Eo.EventType.ERROR,(v=>{g||(g=!0,is(tt,`RPC '${e}' stream ${i} transport errored. Name:`,v.name,"Message:",v.message),b.o_(new _e(Q.UNAVAILABLE,"The operation could not be completed")))})),xo(d,Eo.EventType.MESSAGE,(v=>{if(!g){const I=v.data[0];rn(!!I,16349);const D=I,L=D?.error||D[0]?.error;if(L){be(tt,`RPC '${e}' stream ${i} received error:`,L);const V=L.status;let W=(function(ce){const S=Fn[ce];if(S!==void 0)return ny(S)})(V),z=L.message;V==="NOT_FOUND"&&z.includes("database")&&z.includes("does not exist")&&z.includes(this.databaseId.database)&&is(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),W===void 0&&(W=Q.INTERNAL,z="Unknown error status: "+V+" with message "+L.message),g=!0,b.o_(new _e(W,z)),d.close()}else be(tt,`RPC '${e}' stream ${i} received:`,I),b.__(I)}})),Vs.u_(),setTimeout((()=>{b.s_()}),0),b}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,r){super.Go(e,t,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return y2()}}function K5(n){return new Vs(n)}function Zc(){return typeof document<"u"?document:null}function Nl(n){return new XS(n,!0)}Vs.c_=!1;class gy{constructor(e,t,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&be("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}const zm="PersistentStream";class _y{constructor(e,t,r,i,s,o,a,l){this.Ci=e,this.b_=r,this.S_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new gy(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===Q.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new _e(Q.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.Yo((()=>{r((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.H_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return be(zm,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(be(zm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Q5 extends _y{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=n5(this.serializer,e),r=(function(s){if(!("targetChange"in s))return Ve.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Ve.min():o.readTime?yr(o.readTime):Ve.min()})(e);return this.listener.J_(t,r)}Z_(e){const t={};t.database=Vd(this.serializer),t.addTarget=(function(s,o){let a;const l=o.target;if(a=Pd(l)?{documents:i5(s,l)}:{query:s5(s,l).ft},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=iy(s,o.resumeToken);const c=Ld(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Ve.min())>0){a.readTime=Wu(s,o.snapshotVersion.toTimestamp());const c=Ld(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a})(this.serializer,e);const r=a5(this.serializer,e);r&&(t.labels=r),this.K_(t)}X_(e){const t={};t.database=Vd(this.serializer),t.removeTarget=e,this.K_(t)}}class Y5 extends _y{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return rn(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,rn(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){rn(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=r5(e.writeResults,e.commitTime),r=yr(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Vd(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>t5(this.serializer,r)))};this.K_(t)}}class J5{}class X5 extends J5{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new _e(Q.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,Fd(t,r),i,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new _e(Q.UNKNOWN,s.toString())}))}jo(e,t,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.jo(e,Fd(t,r),i,o,a,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new _e(Q.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function Z5(n,e,t,r){return new X5(n,e,t,r)}class e8{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Ur(t),this.aa=!1):be("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}const ss="RemoteStore";class n8{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo((o=>{r.enqueueAndForget((async()=>{hs(this)&&(be(ss,"Restarting streams for network reachability change."),await(async function(l){const c=je(l);c.Ea.add(4),await Ta(c),c.Va.set("Unknown"),c.Ea.delete(4),await Pl(c)})(this))}))})),this.Va=new e8(r,i)}}async function Pl(n){if(hs(n))for(const e of n.Ra)await e(!0)}async function Ta(n){for(const e of n.Ra)await e(!1)}function yy(n,e){const t=je(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),nh(t)?eh(t):uo(t).O_()&&Zf(t,e))}function Xf(n,e){const t=je(n),r=uo(t);t.Ia.delete(e),r.O_()&&by(t,e),t.Ia.size===0&&(r.O_()?r.L_():hs(t)&&t.Va.set("Unknown"))}function Zf(n,e){if(n.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ve.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}uo(n).Z_(e)}function by(n,e){n.da.$e(e),uo(n).X_(e)}function eh(n){n.da=new KS({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),uo(n).start(),n.Va.ua()}function nh(n){return hs(n)&&!uo(n).x_()&&n.Ia.size>0}function hs(n){return je(n).Ea.size===0}function vy(n){n.da=void 0}async function t8(n){n.Va.set("Online")}async function r8(n){n.Ia.forEach(((e,t)=>{Zf(n,e)}))}async function i8(n,e){vy(n),nh(n)?(n.Va.ha(e),eh(n)):n.Va.set("Unknown")}async function s8(n,e,t){if(n.Va.set("Online"),e instanceof ry&&e.state===2&&e.cause)try{await(async function(i,s){const o=s.cause;for(const a of s.targetIds)i.Ia.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.Ia.delete(a),i.da.removeTarget(a))})(n,e)}catch(r){be(ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qu(n,r)}else if(e instanceof yu?n.da.Xe(e):e instanceof ty?n.da.st(e):n.da.tt(e),!t.isEqual(Ve.min()))try{const r=await my(n.localStore);t.compareTo(r)>=0&&await(function(s,o){const a=s.da.Tt(o);return a.targetChanges.forEach(((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const d=s.Ia.get(c);d&&s.Ia.set(c,d.withResumeToken(l.resumeToken,o))}})),a.targetMismatches.forEach(((l,c)=>{const d=s.Ia.get(l);if(!d)return;s.Ia.set(l,d.withResumeToken(et.EMPTY_BYTE_STRING,d.snapshotVersion)),by(s,l);const p=new ui(d.target,l,c,d.sequenceNumber);Zf(s,p)})),s.remoteSyncer.applyRemoteEvent(a)})(n,t)}catch(r){be(ss,"Failed to raise snapshot:",r),await Qu(n,r)}}async function Qu(n,e,t){if(!oo(e))throw e;n.Ea.add(1),await Ta(n),n.Va.set("Offline"),t||(t=()=>my(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{be(ss,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Pl(n)}))}function xy(n,e){return e().catch((t=>Qu(n,t,e)))}async function Ol(n){const e=je(n),t=Ei(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:jf;for(;o8(e);)try{const i=await q5(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,a8(e,i)}catch(i){await Qu(e,i)}wy(e)&&Ey(e)}function o8(n){return hs(n)&&n.Ta.length<10}function a8(n,e){n.Ta.push(e);const t=Ei(n);t.O_()&&t.Y_&&t.ea(e.mutations)}function wy(n){return hs(n)&&!Ei(n).x_()&&n.Ta.length>0}function Ey(n){Ei(n).start()}async function u8(n){Ei(n).ra()}async function l8(n){const e=Ei(n);for(const t of n.Ta)e.ea(t.mutations)}async function c8(n,e,t){const r=n.Ta.shift(),i=zf.from(r,e,t);await xy(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Ol(n)}async function d8(n,e){e&&Ei(n).Y_&&await(async function(r,i){if((function(o){return zS(o)&&o!==Q.ABORTED})(i.code)){const s=r.Ta.shift();Ei(r).B_(),await xy(r,(()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i))),await Ol(r)}})(n,e),wy(n)&&Ey(n)}async function Gm(n,e){const t=je(n);t.asyncQueue.verifyOperationInProgress(),be(ss,"RemoteStore received new credentials");const r=hs(t);t.Ea.add(3),await Ta(t),r&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Pl(t)}async function f8(n,e){const t=je(n);e?(t.Ea.delete(2),await Pl(t)):e||(t.Ea.add(2),await Ta(t),t.Va.set("Unknown"))}function uo(n){return n.ma||(n.ma=(function(t,r,i){const s=je(t);return s.sa(),new Q5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:t8.bind(null,n),Yo:r8.bind(null,n),t_:i8.bind(null,n),J_:s8.bind(null,n)}),n.Ra.push((async e=>{e?(n.ma.B_(),nh(n)?eh(n):n.Va.set("Unknown")):(await n.ma.stop(),vy(n))}))),n.ma}function Ei(n){return n.fa||(n.fa=(function(t,r,i){const s=je(t);return s.sa(),new Y5(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),Yo:u8.bind(null,n),t_:d8.bind(null,n),ta:l8.bind(null,n),na:c8.bind(null,n)}),n.Ra.push((async e=>{e?(n.fa.B_(),await Ol(n)):(await n.fa.stop(),n.Ta.length>0&&(be(ss,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}class th{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new hi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,a=new th(e,t,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function rh(n,e){if(Ur("AsyncQueue",`${e}: ${n}`),oo(n))return new _e(Q.UNAVAILABLE,`${e}: ${n}`);throw n}class js{static emptySet(e){return new js(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ce.comparator(t.key,r.key):(t,r)=>Ce.comparator(t.key,r.key),this.keyedMap=Ao(),this.sortedSet=new wn(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof js)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new js;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}class Wm{constructor(){this.ga=new wn(Ce.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):Ne(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Ys{constructor(e,t,r,i,s,o,a,l,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Ys(e,t,js.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Il(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}class h8{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class p8{constructor(){this.queries=Km(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=je(t),s=i.queries;i.queries=Km(),s.forEach(((o,a)=>{for(const l of a.ba)l.onError(r)}))})(this,new _e(Q.ABORTED,"Firestore shutting down"))}}function Km(){return new fs((n=>q2(n)),Il)}async function Ay(n,e){const t=je(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.Sa()&&e.Da()&&(r=2):(s=new h8,r=e.Da()?0:1);try{switch(r){case 0:s.wa=await t.onListen(i,!0);break;case 1:s.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const a=rh(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(a)}t.queries.set(i,s),s.ba.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&ih(t)}async function Ty(n,e){const t=je(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.ba.indexOf(e);o>=0&&(s.ba.splice(o,1),s.ba.length===0?i=e.Da()?0:1:!s.Sa()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function m8(n,e){const t=je(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const a of o.ba)a.Fa(i)&&(r=!0);o.wa=i}}r&&ih(t)}function g8(n,e,t){const r=je(n),i=r.queries.get(e);if(i)for(const s of i.ba)s.onError(t);r.queries.delete(e)}function ih(n){n.Ca.forEach((e=>{e.next()}))}var Bd,Qm;(Qm=Bd||(Bd={})).Ma="default",Qm.Cache="cache";class ky{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.Ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Bd.Cache}}class Iy{constructor(e){this.key=e}}class Cy{constructor(e){this.key=e}}class _8{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=We(),this.mutatedKeys=We(),this.eu=B2(e),this.tu=new js(this.eu)}get nu(){return this.Za}ru(e,t){const r=t?t.iu:new Wm,i=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((d,p)=>{const g=i.get(d),b=Cl(this.query,p)?p:null,v=!!g&&this.mutatedKeys.has(g.key),I=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let D=!1;g&&b?g.data.isEqual(b.data)?v!==I&&(r.track({type:3,doc:b}),D=!0):this.su(g,b)||(r.track({type:2,doc:b}),D=!0,(l&&this.eu(b,l)>0||c&&this.eu(b,c)<0)&&(a=!0)):!g&&b?(r.track({type:0,doc:b}),D=!0):g&&!b&&(r.track({type:1,doc:g}),D=!0,(l||c)&&(a=!0)),D&&(b?(o=o.add(b),s=I?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,Ss:a,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((d,p)=>(function(b,v){const I=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ne(20277,{Vt:D})}};return I(b)-I(v)})(d.type,p.type)||this.eu(d.doc,p.doc))),this.ou(r),i=i??!1;const a=t&&!i?this._u():[],l=this.Ya.size===0&&this.current&&!i?1:0,c=l!==this.Xa;return this.Xa=l,o.length!==0||c?{snapshot:new Ys(this.query,e.tu,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:a}:{au:a}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Wm,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=We(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))}));const t=[];return e.forEach((r=>{this.Ya.has(r)||t.push(new Cy(r))})),this.Ya.forEach((r=>{e.has(r)||t.push(new Iy(r))})),t}cu(e){this.Za=e.ks,this.Ya=We();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Ys.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const sh="SyncEngine";class y8{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class b8{constructor(e){this.key=e,this.hu=!1}}class v8{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new fs((a=>q2(a)),Il),this.Iu=new Map,this.Eu=new Set,this.Ru=new wn(Ce.comparator),this.Au=new Map,this.Vu=new Kf,this.du={},this.mu=new Map,this.fu=Qs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function x8(n,e,t=!0){const r=Oy(n);let i;const s=r.Tu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.lu()):i=await Sy(r,e,t,!0),i}async function w8(n,e){const t=Oy(n);await Sy(t,e,!0,!1)}async function Sy(n,e,t,r){const i=await B5(n.localStore,_r(e)),s=i.targetId,o=n.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=await E8(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&yy(n.remoteStore,i),a}async function E8(n,e,t,r,i){n.pu=(p,g,b)=>(async function(I,D,L,V){let W=D.view.ru(L);W.Ss&&(W=await Bm(I.localStore,D.query,!1).then((({documents:S})=>D.view.ru(S,W))));const z=V&&V.targetChanges.get(D.targetId),ie=V&&V.targetMismatches.get(D.targetId)!=null,ce=D.view.applyChanges(W,I.isPrimaryClient,z,ie);return Jm(I,D.targetId,ce.au),ce.snapshot})(n,p,g,b);const s=await Bm(n.localStore,e,!0),o=new _8(e,s.ks),a=o.ru(s.documents),l=Aa.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),c=o.applyChanges(a,n.isPrimaryClient,l);Jm(n,t,c.au);const d=new y8(e,t,o);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),c.snapshot}async function A8(n,e,t){const r=je(n),i=r.Tu.get(e),s=r.Iu.get(i.targetId);if(s.length>1)return r.Iu.set(i.targetId,s.filter((o=>!Il(o,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await jd(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Xf(r.remoteStore,i.targetId),Ud(r,i.targetId)})).catch(so)):(Ud(r,i.targetId),await jd(r.localStore,i.targetId,!0))}async function T8(n,e){const t=je(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Xf(t.remoteStore,r.targetId))}async function k8(n,e,t){const r=P8(n);try{const i=await(function(o,a){const l=je(o),c=_n.now(),d=a.reduce(((b,v)=>b.add(v.key)),We());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let v=$r(),I=We();return l.xs.getEntries(b,d).next((D=>{v=D,v.forEach(((L,V)=>{V.isValidDocument()||(I=I.add(L))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,v))).next((D=>{p=D;const L=[];for(const V of a){const W=qS(V,p.get(V.key).overlayedDocument);W!=null&&L.push(new Ii(V.key,W,N2(W.value.mapValue),Jt.exists(!0)))}return l.mutationQueue.addMutationBatch(b,c,L,a)})).next((D=>{g=D;const L=D.applyToLocalDocumentSet(p,I);return l.documentOverlayCache.saveOverlays(b,D.batchId,L)}))})).then((()=>({batchId:g.batchId,changes:$2(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(o,a,l){let c=o.du[o.currentUser.toKey()];c||(c=new wn(Ge)),c=c.insert(a,l),o.du[o.currentUser.toKey()]=c})(r,i.batchId,t),await ka(r,i.changes),await Ol(r.remoteStore)}catch(i){const s=rh(i,"Failed to persist write");t.reject(s)}}async function Ry(n,e){const t=je(n);try{const r=await V5(t.localStore,e);e.targetChanges.forEach(((i,s)=>{const o=t.Au.get(s);o&&(rn(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.hu=!0:i.modifiedDocuments.size>0?rn(o.hu,14607):i.removedDocuments.size>0&&(rn(o.hu,42227),o.hu=!1))})),await ka(t,r,e)}catch(r){await so(r)}}function Ym(n,e,t){const r=je(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((s,o)=>{const a=o.view.va(e);a.snapshot&&i.push(a.snapshot)})),(function(o,a){const l=je(o);l.onlineState=a;let c=!1;l.queries.forEach(((d,p)=>{for(const g of p.ba)g.va(a)&&(c=!0)})),c&&ih(l)})(r.eventManager,e),i.length&&r.Pu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function I8(n,e,t){const r=je(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),s=i&&i.key;if(s){let o=new wn(Ce.comparator);o=o.insert(s,ot.newNoDocument(s,Ve.min()));const a=We().add(s),l=new Dl(Ve.min(),new Map,new wn(Ge),o,a);await Ry(r,l),r.Ru=r.Ru.remove(s),r.Au.delete(e),oh(r)}else await jd(r.localStore,e,!1).then((()=>Ud(r,e,t))).catch(so)}async function C8(n,e){const t=je(n),r=e.batch.batchId;try{const i=await M5(t.localStore,e);Ny(t,r,null),Dy(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ka(t,i)}catch(i){await so(i)}}async function S8(n,e,t){const r=je(n);try{const i=await(function(o,a){const l=je(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(c=>{let d;return l.mutationQueue.lookupMutationBatch(c,a).next((p=>(rn(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(c,p)))).next((()=>l.mutationQueue.performConsistencyCheck(c))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(c,d,a))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d))).next((()=>l.localDocuments.getDocuments(c,d)))}))})(r.localStore,e);Ny(r,e,t),Dy(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ka(r,i)}catch(i){await so(i)}}function Dy(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Ny(n,e,t){const r=je(n);let i=r.du[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.du[r.currentUser.toKey()]=i}}function Ud(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Vu.Gr(e).forEach((r=>{n.Vu.containsKey(r)||Py(n,r)}))}function Py(n,e){n.Eu.delete(e.path.canonicalString());const t=n.Ru.get(e);t!==null&&(Xf(n.remoteStore,t),n.Ru=n.Ru.remove(e),n.Au.delete(t),oh(n))}function Jm(n,e,t){for(const r of t)r instanceof Iy?(n.Vu.addReference(r.key,e),R8(n,r)):r instanceof Cy?(be(sh,"Document no longer in limbo: "+r.key),n.Vu.removeReference(r.key,e),n.Vu.containsKey(r.key)||Py(n,r.key)):Ne(19791,{wu:r})}function R8(n,e){const t=e.key,r=t.path.canonicalString();n.Ru.get(t)||n.Eu.has(r)||(be(sh,"New document in limbo: "+t),n.Eu.add(r),oh(n))}function oh(n){for(;n.Eu.size>0&&n.Ru.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Ce(hn.fromString(e)),r=n.fu.next();n.Au.set(r,new b8(t)),n.Ru=n.Ru.insert(t,r),yy(n.remoteStore,new ui(_r(kl(t.path)),r,"TargetPurposeLimboResolution",El.ce))}}async function ka(n,e,t){const r=je(n),i=[],s=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach(((a,l)=>{o.push(r.pu(l,e,t).then((c=>{if((c||t)&&r.isPrimaryClient){const d=c?!c.fromCache:t?.targetChanges.get(l.targetId)?.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(c){i.push(c);const d=Yf.Es(l.targetId,c);s.push(d)}})))})),await Promise.all(o),r.Pu.J_(i),await(async function(l,c){const d=je(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>Z.forEach(c,(g=>Z.forEach(g.Ts,(b=>d.persistence.referenceDelegate.addReference(p,g.targetId,b))).next((()=>Z.forEach(g.Is,(b=>d.persistence.referenceDelegate.removeReference(p,g.targetId,b)))))))))}catch(p){if(!oo(p))throw p;be(Jf,"Failed to update sequence numbers: "+p)}for(const p of c){const g=p.targetId;if(!p.fromCache){const b=d.vs.get(g),v=b.snapshotVersion,I=b.withLastLimboFreeSnapshotVersion(v);d.vs=d.vs.insert(g,I)}}})(r.localStore,s))}async function D8(n,e){const t=je(n);if(!t.currentUser.isEqual(e)){be(sh,"User change. New user:",e.toKey());const r=await py(t.localStore,e);t.currentUser=e,(function(s,o){s.mu.forEach((a=>{a.forEach((l=>{l.reject(new _e(Q.CANCELLED,o))}))})),s.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(t,r.Ns)}}function N8(n,e){const t=je(n),r=t.Au.get(e);if(r&&r.hu)return We().add(r.key);{let i=We();const s=t.Iu.get(e);if(!s)return i;for(const o of s){const a=t.Tu.get(o);i=i.unionWith(a.view.nu)}return i}}function Oy(n){const e=je(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ry.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N8.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=I8.bind(null,e),e.Pu.J_=m8.bind(null,e.eventManager),e.Pu.yu=g8.bind(null,e.eventManager),e}function P8(n){const e=je(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=C8.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S8.bind(null,e),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nl(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return F5(this.persistence,new P5,e.initialUser,this.serializer)}Cu(e){return new hy(Qf.Vi,this.serializer)}Du(e){return new $5}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class O8 extends Yu{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){rn(this.persistence.referenceDelegate instanceof Ku,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new y5(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new hy((r=>Ku.Vi(r,t)),this.serializer)}}class $d{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ym(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=D8.bind(null,this.syncEngine),await f8(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new p8})()}createDatastore(e){const t=Nl(e.databaseInfo.databaseId),r=K5(e.databaseInfo);return Z5(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,s,o,a){return new n8(r,i,s,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ym(this.syncEngine,t,0)),(function(){return Hm.v()?new Hm:new H5})())}createSyncEngine(e,t){return(function(i,s,o,a,l,c,d){const p=new v8(i,s,o,a,l,c);return d&&(p.gu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=je(t);be(ss,"RemoteStore shutting down."),r.Ea.add(5),await Ta(r),r.Aa.shutdown(),r.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}$d.provider={build:()=>new $d};class Ly{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}const Ai="FirestoreClient";class L8{constructor(e,t,r,i,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this._databaseInfo=i,this.user=rt.UNAUTHENTICATED,this.clientId=Vf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,(async o=>{be(Ai,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(be(Ai,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new hi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=rh(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ed(n,e){n.asyncQueue.verifyOperationInProgress(),be(Ai,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await py(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Xm(n,e){n.asyncQueue.verifyOperationInProgress();const t=await F8(n);be(Ai,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Gm(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Gm(e.remoteStore,i))),n._onlineComponents=e}async function F8(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){be(Ai,"Using user provided OfflineComponentProvider");try{await ed(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===Q.FAILED_PRECONDITION||i.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;is("Error using user provided cache. Falling back to memory cache: "+t),await ed(n,new Yu)}}else be(Ai,"Using default OfflineComponentProvider"),await ed(n,new O8(void 0));return n._offlineComponents}async function Fy(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(be(Ai,"Using user provided OnlineComponentProvider"),await Xm(n,n._uninitializedComponentsProvider._online)):(be(Ai,"Using default OnlineComponentProvider"),await Xm(n,new $d))),n._onlineComponents}function M8(n){return Fy(n).then((e=>e.syncEngine))}async function Hd(n){const e=await Fy(n),t=e.eventManager;return t.onListen=x8.bind(null,e.syncEngine),t.onUnlisten=A8.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=w8.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=T8.bind(null,e.syncEngine),t}function V8(n,e,t,r){const i=new Ly(r),s=new ky(e,i,t);return n.asyncQueue.enqueueAndForget((async()=>Ay(await Hd(n),s))),()=>{i.Nu(),n.asyncQueue.enqueueAndForget((async()=>Ty(await Hd(n),s)))}}function j8(n,e,t={}){const r=new hi;return n.asyncQueue.enqueueAndForget((async()=>(function(s,o,a,l,c){const d=new Ly({next:g=>{d.Nu(),o.enqueueAndForget((()=>Ty(s,p)));const b=g.docs.has(a);!b&&g.fromCache?c.reject(new _e(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&g.fromCache&&l&&l.source==="server"?c.reject(new _e(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(g)},error:g=>c.reject(g)}),p=new ky(kl(a.path),d,{includeMetadataChanges:!0,Ka:!0});return Ay(s,p)})(await Hd(n),n.asyncQueue,e,t,r))),r.promise}function q8(n,e){const t=new hi;return n.asyncQueue.enqueueAndForget((async()=>k8(await M8(n),e,t))),t.promise}function My(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}const B8="ComponentProvider",Zm=new Map;function U8(n,e,t,r,i){return new lS(n,e,t,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,My(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}const Vy="firestore.googleapis.com",eg=!0;class ng{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new _e(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vy,this.ssl=eg}else this.host=e.host,this.ssl=e.ssl??eg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<g5)throw new _e(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=My(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new _e(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new _e(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new _e(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ll{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ng({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ng(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new UC;switch(r.type){case"firstParty":return new GC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new _e(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Zm.get(t);r&&(be(B8,"Removing Datastore"),Zm.delete(t),r.terminate())})(this),Promise.resolve()}}function $8(n,e,t,r={}){n=Yt(n,Ll);const i=no(e),s=n._getSettings(),o={...s,emulatorOptions:n._getEmulatorOptions()},a=`${e}:${t}`;i&&(s_(`https://${a}`),o_("Firestore",!0)),s.host!==Vy&&s.host!==a&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l={...s,host:a,ssl:i,emulatorOptions:r};if(!yi(l,o)&&(n._setSettings(l),r.mockUserToken)){let c,d;if(typeof r.mockUserToken=="string")c=r.mockUserToken,d=rt.MOCK_USER;else{c=$6(r.mockUserToken,n._app?.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new _e(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new rt(p)}n._authCredentials=new $C(new v2(c,d))}}class Ci{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ci(this.firestore,e,this._query)}}class Cn{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Cn(this.firestore,e,this._key)}toJSON(){return{type:Cn._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(wa(t,Cn._jsonSchema))return new Cn(e,r||null,new Ce(hn.fromString(t.referencePath)))}}Cn._jsonSchemaVersion="firestore/documentReference/1.0",Cn._jsonSchema={type:Vn("string",Cn._jsonSchemaVersion),referencePath:Vn("string")};class pi extends Ci{constructor(e,t,r){super(e,t,kl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Cn(this.firestore,null,new Ce(e))}withConverter(e){return new pi(this.firestore,e,this._path)}}function jy(n,e,...t){if(n=Pn(n),x2("collection","path",e),n instanceof Ll){const r=hn.fromString(e,...t);return pm(r),new pi(n,null,r)}{if(!(n instanceof Cn||n instanceof pi))throw new _e(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(hn.fromString(e,...t));return pm(r),new pi(n.firestore,null,r)}}function Ia(n,e,...t){if(n=Pn(n),arguments.length===1&&(e=Vf.newId()),x2("doc","path",e),n instanceof Ll){const r=hn.fromString(e,...t);return hm(r),new Cn(n,null,new Ce(r))}{if(!(n instanceof Cn||n instanceof pi))throw new _e(Q.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(hn.fromString(e,...t));return hm(r),new Cn(n.firestore,n instanceof pi?n.converter:null,new Ce(r))}}const tg="AsyncQueue";class rg{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new gy(this,"async_queue_retry"),this._c=()=>{const r=Zc();r&&be(tg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Zc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Zc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new hi;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!oo(e))throw e;be(tg,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Ur("INTERNAL UNHANDLED ERROR: ",ig(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=th.createAndSchedule(this,e,t,r,(s=>this.hc(s)));return this.tc.push(i),i}uc(){this.nc&&Ne(47125,{Pc:ig(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function ig(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class os extends Ll{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new rg,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new rg(e),this._firestoreClient=void 0,await e}}}function H8(n,e){const t=typeof n=="object"?n:vf(),r=typeof n=="string"?n:$u,i=ds(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=B6("firestore");s&&$8(i,...s)}return i}function ah(n){if(n._terminated)throw new _e(Q.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||z8(n),n._firestoreClient}function z8(n){const e=n._freezeSettings(),t=U8(n._databaseId,n._app?.options.appId||"",n._persistenceKey,n._app?.options.apiKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new L8(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const s=i?._online.build();return{_offline:i?._offline.build(s),_online:s}})(n._componentsProvider))}class Vt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Vt(et.fromBase64String(e))}catch(t){throw new _e(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Vt(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Vt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(wa(e,Vt._jsonSchema))return Vt.fromBase64String(e.bytes)}}Vt._jsonSchemaVersion="firestore/bytes/1.0",Vt._jsonSchema={type:Vn("string",Vt._jsonSchemaVersion),bytes:Vn("string")};class uh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class Ca{constructor(e){this._methodName=e}}class br{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ge(this._lat,e._lat)||Ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:br._jsonSchemaVersion}}static fromJSON(e){if(wa(e,br._jsonSchema))return new br(e.latitude,e.longitude)}}br._jsonSchemaVersion="firestore/geoPoint/1.0",br._jsonSchema={type:Vn("string",br._jsonSchemaVersion),latitude:Vn("number"),longitude:Vn("number")};class Xt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(wa(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xt(e.vectorValues);throw new _e(Q.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:Vn("string",Xt._jsonSchemaVersion),vectorValues:Vn("object")};const G8=/^__.*__$/;class W8{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ii(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ea(e,this.data,t,this.fieldTransforms)}}class qy{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ii(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function By(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ne(40011,{dataSource:n})}}class lh{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.validatePath(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new lh({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePathSegment(e),r}childContextForFieldPath(e){const t=this.path?.child(e),r=this.contextWith({path:t,arrayElement:!1});return r.validatePath(),r}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ju(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(By(this.dataSource)&&G8.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class K8{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Nl(e)}createContext(e,t,r,i=!1){return new lh({dataSource:e,methodName:t,targetDoc:r,path:Xn.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fl(n){const e=n._freezeSettings(),t=Nl(n._databaseId);return new K8(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Uy(n,e,t,r,i,s={}){const o=n.createContext(s.merge||s.mergeFields?2:0,e,t,i);fh("Data must be an object, but it was:",o,r);const a=$y(r,o);let l,c;if(s.merge)l=new Dt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const g=Js(e,p,t);if(!o.contains(g))throw new _e(Q.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Gy(d,g)||d.push(g)}l=new Dt(d),c=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,c=o.fieldTransforms;return new W8(new wt(a),l,c)}class Ml extends Ca{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ml}}class ch extends Ca{_toFieldTransform(e){return new J2(e.path,new aa)}isEqual(e){return e instanceof ch}}class dh extends Ca{constructor(e,t){super(e),this.Vc=t}_toFieldTransform(e){const t=new ca(e.serializer,G2(e.serializer,this.Vc));return new J2(e.path,t)}isEqual(e){return e instanceof dh&&this.Vc===e.Vc}}function Q8(n,e,t,r){const i=n.createContext(1,e,t);fh("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();ki(r,((l,c)=>{const d=zy(e,l,t);c=Pn(c);const p=i.childContextForFieldPath(d);if(c instanceof Ml)s.push(d);else{const g=Sa(c,p);g!=null&&(s.push(d),o.set(d,g))}}));const a=new Dt(s);return new qy(o,a,i.fieldTransforms)}function Y8(n,e,t,r,i,s){const o=n.createContext(1,e,t),a=[Js(e,r,t)],l=[i];if(s.length%2!=0)throw new _e(Q.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<s.length;g+=2)a.push(Js(e,s[g])),l.push(s[g+1]);const c=[],d=wt.empty();for(let g=a.length-1;g>=0;--g)if(!Gy(c,a[g])){const b=a[g];let v=l[g];v=Pn(v);const I=o.childContextForFieldPath(b);if(v instanceof Ml)c.push(b);else{const D=Sa(v,I);D!=null&&(c.push(b),d.set(b,D))}}const p=new Dt(c);return new qy(d,p,o.fieldTransforms)}function J8(n,e,t,r=!1){return Sa(t,n.createContext(r?4:3,e))}function Sa(n,e){if(Hy(n=Pn(n)))return fh("Unsupported field value:",e,n),$y(n,e);if(n instanceof Ca)return(function(r,i){if(!By(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const s=[];let o=0;for(const a of r){let l=Sa(a,i.childContextForArray(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}})(n,e)}return(function(r,i){if((r=Pn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return G2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_n.fromDate(r);return{timestampValue:Wu(i.serializer,s)}}if(r instanceof _n){const s=new _n(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wu(i.serializer,s)}}if(r instanceof br)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Vt)return{bytesValue:iy(i.serializer,r._byteString)};if(r instanceof Cn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.createError(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Wf(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xt)return(function(o,a){const l=o instanceof Xt?o.toArray():o;return{mapValue:{fields:{[R2]:{stringValue:D2},[Hu]:{arrayValue:{values:l.map((d=>{if(typeof d!="number")throw a.createError("VectorValues must only contain numeric values.");return Hf(a.serializer,d)}))}}}}}})(r,i);if(dy(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${wl(r)}`)})(n,e)}function $y(n,e){const t={};return A2(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(n,((r,i)=>{const s=Sa(i,e.childContextForField(r));s!=null&&(t[r]=s)})),{mapValue:{fields:t}}}function Hy(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _n||n instanceof br||n instanceof Vt||n instanceof Cn||n instanceof Ca||n instanceof Xt||dy(n))}function fh(n,e,t){if(!Hy(t)||!w2(t)){const r=wl(t);throw r==="an object"?e.createError(n+" a custom object"):e.createError(n+" "+r)}}function Js(n,e,t){if((e=Pn(e))instanceof uh)return e._internalPath;if(typeof e=="string")return zy(n,e);throw Ju("Field path arguments must be of type string or ",n,!1,void 0,t)}const X8=new RegExp("[~\\*/\\[\\]]");function zy(n,e,t){if(e.search(X8)>=0)throw Ju(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new uh(...e.split("."))._internalPath}catch{throw Ju(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ju(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new _e(Q.INVALID_ARGUMENT,a+n+l)}function Gy(n,e){return n.some((t=>t.isEqual(e)))}class Z8{convertValue(e,t="none"){switch(wi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Nn(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ne(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ki(e,((i,s)=>{r[i]=this.convertValue(s,t)})),r}convertVectorValue(e){const t=e.fields?.[Hu].arrayValue?.values?.map((r=>Nn(r.doubleValue)));return new Xt(t)}convertGeoPoint(e){return new br(Nn(e.latitude),Nn(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Tl(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ra(e));default:return null}}convertTimestamp(e){const t=vi(e);return new _n(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=hn.fromString(e);rn(cy(r),9688,{name:e});const i=new ia(r.get(1),r.get(3)),s=new Ce(r.popFirst(5));return i.isEqual(t)||Ur(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}class Wy extends Z8{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Cn(this.firestore,null,t)}}function Ky(){return new ch("serverTimestamp")}function Qy(n){return new dh("increment",n)}const sg="@firebase/firestore",og="4.12.0";function ag(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1})(n,["next","error","complete"])}class Yy{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new eR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(Js("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class eR extends Yy{data(){return super.data()}}function nR(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _e(Q.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hh{}class ph extends hh{}function tR(n,e,...t){let r=[];e instanceof hh&&r.push(e),r=r.concat(t),(function(s){const o=s.filter((l=>l instanceof gh)).length,a=s.filter((l=>l instanceof mh)).length;if(o>1||o>0&&a>0)throw new _e(Q.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class mh extends ph{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new mh(e,t,r)}_apply(e){const t=this._parse(e);return Jy(e._query,t),new Ci(e.firestore,e.converter,Od(e._query,t))}_parse(e){const t=Fl(e.firestore);return(function(s,o,a,l,c,d,p){let g;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new _e(Q.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){lg(p,d);const v=[];for(const I of p)v.push(ug(l,s,I));g={arrayValue:{values:v}}}else g=ug(l,s,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||lg(p,d),g=J8(a,o,p,d==="in"||d==="not-in");return Mn.create(c,d,g)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class gh extends hh{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new gh(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:tr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)Jy(o,l),o=Od(o,l)})(e._query,t),new Ci(e.firestore,e.converter,Od(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _h extends ph{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _h(e,t)}_apply(e){const t=(function(i,s,o){if(i.startAt!==null)throw new _e(Q.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new _e(Q.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oa(s,o)})(e._query,this._field,this._direction);return new Ci(e.firestore,e.converter,IS(e._query,t))}}function rR(n,e="asc"){const t=e,r=Js("orderBy",n);return _h._create(r,t)}class yh extends ph{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new yh(e,t,r)}_apply(e){return new Ci(e.firestore,e.converter,Gu(e._query,this._limit,this._limitType))}}function iR(n){return yh._create("limit",n,"F")}function ug(n,e,t){if(typeof(t=Pn(t))=="string"){if(t==="")throw new _e(Q.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!j2(e)&&t.indexOf("/")!==-1)throw new _e(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(hn.fromString(t));if(!Ce.isDocumentKey(r))throw new _e(Q.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return wm(n,new Ce(r))}if(t instanceof Cn)return wm(n,t._key);throw new _e(Q.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${wl(t)}.`)}function lg(n,e){if(!Array.isArray(n)||n.length===0)throw new _e(Q.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Jy(n,e){const t=(function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new _e(Q.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new _e(Q.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Xy(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class ko{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xi extends Yy{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Js("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new _e(Q.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Xi._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Xi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Xi._jsonSchema={type:Vn("string",Xi._jsonSchemaVersion),bundleSource:Vn("string","DocumentSnapshot"),bundleName:Vn("string"),bundle:Vn("string")};class bu extends Xi{data(e={}){return super.data(e)}}class qs{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ko(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new bu(this._firestore,this._userDataWriter,r.key,r,new ko(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _e(Q.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map((a=>{const l=new bu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ko(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((a=>s||a.type!==3)).map((a=>{const l=new bu(i._firestore,i._userDataWriter,a.doc.key,a.doc,new ko(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),d=o.indexOf(a.doc.key)),{type:sR(a.type),doc:l,oldIndex:c,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new _e(Q.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Vf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sR(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ne(61501,{type:n})}}qs._jsonSchemaVersion="firestore/querySnapshot/1.0",qs._jsonSchema={type:Vn("string",qs._jsonSchemaVersion),bundleSource:Vn("string","QuerySnapshot"),bundleName:Vn("string"),bundle:Vn("string")};function bh(n){n=Yt(n,Cn);const e=Yt(n.firestore,os),t=ah(e);return j8(t,n._key).then((r=>eb(e,n,r)))}function Zy(n,e,t){n=Yt(n,Cn);const r=Yt(n.firestore,os),i=Xy(n.converter,e),s=Fl(r);return xh(r,[Uy(s,"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,Jt.none())])}function vh(n,e,t,...r){n=Yt(n,Cn);const i=Yt(n.firestore,os),s=Fl(i);let o;return o=typeof(e=Pn(e))=="string"||e instanceof uh?Y8(s,"updateDoc",n._key,e,t,r):Q8(s,"updateDoc",n._key,e),xh(i,[o.toMutation(n._key,Jt.exists(!0))])}function oR(n,e){const t=Yt(n.firestore,os),r=Ia(n),i=Xy(n.converter,e),s=Fl(n.firestore);return xh(t,[Uy(s,"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then((()=>r))}function aR(n,...e){n=Pn(n);let t={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||ag(e[r])||(t=e[r++]);const i={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(ag(e[r])){const c=e[r];e[r]=c.next?.bind(c),e[r+1]=c.error?.bind(c),e[r+2]=c.complete?.bind(c)}let s,o,a;if(n instanceof Cn)o=Yt(n.firestore,os),a=kl(n._key.path),s={next:c=>{e[r]&&e[r](eb(o,n,c))},error:e[r+1],complete:e[r+2]};else{const c=Yt(n,Ci);o=Yt(c.firestore,os),a=c._query;const d=new Wy(o);s={next:p=>{e[r]&&e[r](new qs(o,d,c,p))},error:e[r+1],complete:e[r+2]},nR(n._query)}const l=ah(o);return V8(l,a,i,s)}function xh(n,e){const t=ah(n);return q8(t,e)}function eb(n,e,t){const r=t.docs.get(e._key),i=new Wy(n);return new Xi(n,i,e._key,r,new ko(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){BC(to),vr(new nr("firestore",((r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new os(new HC(r.getProvider("auth-internal")),new WC(o,r.getProvider("app-check-internal")),cS(o,i),o);return s={useFetchStreams:t,...s},a._setSettings(s),a}),"PUBLIC").setMultipleInstances(!0)),Bt(sg,og,e),Bt(sg,og,"esm2020")})();const wh="articleStats",Eh="amaQuestions";function uR(){return{apiKey:"AIzaSyDC4vdNZ0bo9ZXHzO2RE_DC2IKTtVNhhsQ",authDomain:"homepage-208ee.firebaseapp.com",projectId:"homepage-208ee",storageBucket:"homepage-208ee.firebasestorage.app",messagingSenderId:"209365115791",appId:"1:209365115791:web:254816a8d356672cd361fa",measurementId:"G-QWH06STWPJ"}}let Tt=null,as=null;try{const n=uR();if(n?.projectId){const e=h_(n);Tt=H8(e),as=jC(e),n.measurementId&&typeof window<"u"&&Lk(e)}}catch(n){console.warn("[firebase] init skipped:",n.message)}function Io(){return Tt!=null}function lR(){const n="LzniTMOYkWVBCyfz9V4ivHZRoz42";return n&&String(n).trim()?String(n).trim():null}async function cR(){if(!as)throw new Error("Firebase 未配置");const n=new Or;await KI(as,n)}async function dR(){as&&await CI(as)}function fR(n){return as?II(as,n):(n(null),()=>{})}function hR(n,e){if(!Tt)return n([]),()=>{};const t=tR(jy(Tt,Eh),rR("createdAt","desc"),iR(200));return aR(t,r=>{const i=r.docs.map(s=>({id:s.id,...s.data()}));n(i)},r=>{console.warn("[firebase] subscribeAMAQuestions:",r),e&&e(r)})}async function pR({content:n,nickname:e}){if(!Tt)throw new Error("Firebase 未配置");const t=String(n||"").trim();if(!t)throw new Error("问题内容不能为空");if(t.length>5e3)throw new Error("问题过长");const r=String(e||"匿名").trim().slice(0,80)||"匿名";await oR(jy(Tt,Eh),{content:t,nickname:r,createdAt:Ky()})}async function mR(n,e){if(!Tt)throw new Error("Firebase 未配置");const t=String(e||"").trim();if(!t)throw new Error("回复不能为空");if(t.length>1e4)throw new Error("回复过长");const r=Ia(Tt,Eh,n);await vh(r,{answer:t,answeredAt:Ky()})}function Ah(n){return n==null?"unknown":String(n).replace(/[/.#$[\]]/g,"_").slice(0,150)}async function cg(n){if(!Tt)return{views:0,likes:0};try{const e=Ah(n),t=Ia(Tt,wh,e),r=await bh(t);if(r.exists()){const i=r.data();return{views:i.views??0,likes:i.likes??0}}return{views:0,likes:0}}catch(e){return console.warn("[firebase] getArticleCounts failed:",e),{views:0,likes:0}}}async function gR(n){if(Tt)try{const e=Ah(n),t=Ia(Tt,wh,e);(await bh(t)).exists()?await vh(t,{views:Qy(1)}):await Zy(t,{views:1,likes:0})}catch(e){console.warn("[firebase] incrementArticleViews failed:",e)}}async function _R(n){if(Tt)try{const e=Ah(n),t=Ia(Tt,wh,e);(await bh(t)).exists()?await vh(t,{likes:Qy(1)}):await Zy(t,{views:0,likes:1})}catch(e){console.warn("[firebase] incrementArticleLikes failed:",e)}}const yR={class:"articles-container"},bR={class:"tabs"},vR={key:0,class:"article-list"},xR={key:0,class:"empty-tip"},wR={key:1,class:"article-detail"},ER={class:"paper-content"},AR={class:"article-header"},TR={class:"meta"},kR={key:0},IR=["innerHTML"],CR={__name:"MyArticles",setup(n){Lo.registerLanguage("python",X1);const e=new At({html:!0,linkify:!0,typographer:!0}),t=Object.assign({"../articles/experience-chuangzhi-2026.md":FA,"../articles/leetcode-array-normal-1.md":MA,"../articles/leetcode-array-normal-2.md":VA,"../articles/leetcode-backtrack-1.md":jA,"../articles/leetcode-backtrack-2.md":qA,"../articles/leetcode-backtrack-3.md":BA,"../articles/leetcode-binarysearch-1.md":UA,"../articles/leetcode-binarysearch-2.md":$A,"../articles/leetcode-binarytree-1.md":HA,"../articles/leetcode-binarytree-2.md":zA,"../articles/leetcode-binarytree-3.md":GA,"../articles/leetcode-binarytree-4.md":WA,"../articles/leetcode-binarytree-5.md":KA,"../articles/leetcode-binarytree-6.md":QA,"../articles/leetcode-binarytree-7.md":YA,"../articles/leetcode-dp-2.md":JA,"../articles/leetcode-dp-multidim-1.md":XA,"../articles/leetcode-graph-1.md":ZA,"../articles/leetcode-greedy-1.md":e6,"../articles/leetcode-greedy-2.md":n6,"../articles/leetcode-heap-1.md":t6,"../articles/leetcode-interview150-1.md":r6,"../articles/leetcode-linkedlist-1.md":i6,"../articles/leetcode-linkedlist-2.md":s6,"../articles/leetcode-linkedlist-3.md":o6,"../articles/leetcode-linkedlist-4.md":a6,"../articles/leetcode-matrix-1.md":u6,"../articles/leetcode-stack-1.md":l6,"../articles/leetcode-stack-2.md":c6,"../articles/leetcode-tricks-1.md":d6,"../articles/research-2026-03-15.md":f6,"../articles/research-2026-03-16.md":h6,"../articles/research-2026-03-20.md":p6,"../articles/research-2026-03-28.md":m6,"../articles/research-2026-04-02.md":g6,"../articles/research-2026-04-12.md":_6}),r=tn([]),i=tn("leetcode"),s=I=>`article::${I.title||I.id||"unknown"}`,o=I=>{if(typeof window>"u")return{views:0,likes:0};try{const D=window.localStorage.getItem(s(I));if(!D)return{views:0,likes:0};const L=JSON.parse(D);return{views:L.views??0,likes:L.likes??0}}catch{return{views:0,likes:0}}},a=(I,D)=>{if(!(typeof window>"u"))try{window.localStorage.setItem(s(I),JSON.stringify({views:D.views??0,likes:D.likes??0}))}catch{}};for(const I in t)try{const{attributes:D,body:L}=J1(t[I]),V=Io()?{views:0,likes:0}:o(D);r.value.push({...D,...V,renderedHtml:e.render(L)})}catch(D){console.error(D)}r.value.sort((I,D)=>new Date(D.date)-new Date(I.date));async function l(I){const D=await cg(I),L=r.value.find(V=>V.title===I);L&&(L.views=D.views,L.likes=D.likes),c.value?.title===I&&(c.value={...c.value,...D})}ls(async()=>{if(Io())for(const I of r.value){const D=await cg(I.title);I.views=D.views,I.likes=D.likes}});const c=tn(null),d=zt(()=>i.value==="research"?r.value.filter(I=>Array.isArray(I.tags)&&I.tags.includes("Research")):i.value==="experience"?r.value.filter(I=>Array.isArray(I.tags)&&I.tags.includes("Experience")):r.value.filter(I=>!Array.isArray(I.tags)||!I.tags.includes("Research")&&!I.tags.includes("Experience"))),p=async()=>{await sf(),document.querySelectorAll(".markdown-body pre.code-gray").forEach(D=>{try{const L=D.textContent||"",{value:V}=Lo.highlight(L,{language:"python"});D.innerHTML=V,D.classList.add("hljs")}catch(L){console.warn("highlight element failed",L)}})},g=async I=>{const D=r.value.find(L=>L.title===I.title);Io()?(c.value=D?{...D}:{...I},await gR(I.title),await l(I.title)):D?(D.views=(D.views??0)+1,a(D,{views:D.views,likes:D.likes}),c.value={...D}):c.value=I,await p()},b=()=>{c.value=null},v=async()=>{if(!c.value)return;const I=c.value.title;if(Io()){await _R(I),await l(I);const D=r.value.find(L=>L.title===I);D&&(c.value={...D})}else{const D=r.value.find(L=>L.title===I);if(D)D.likes=(D.likes??0)+1,c.value={...D},a(D,{views:D.views,likes:D.likes});else{const L=c.value;L.likes=(L.likes??0)+1,a(L,{views:L.views??0,likes:L.likes})}}};return(I,D)=>(Te(),Se("div",yR,[D[4]||(D[4]=B("header",{class:"page-header"},[B("h1",null,"学习笔记"),B("p",null,"记录算法与代码的每一次进步。")],-1)),D[5]||(D[5]=B("hr",{class:"divider"},null,-1)),B("div",bR,[B("button",{class:jt(["tab-btn",{active:i.value==="leetcode"}]),onClick:D[0]||(D[0]=L=>i.value="leetcode")}," LeetCode 笔记 ",2),B("button",{class:jt(["tab-btn",{active:i.value==="research"}]),onClick:D[1]||(D[1]=L=>i.value="research")}," 科研随笔 ",2),B("button",{class:jt(["tab-btn",{active:i.value==="experience"}]),onClick:D[2]||(D[2]=L=>i.value="experience")}," 经验贴 ",2)]),gn(Ns,{name:"fade-slide",mode:"out-in"},{default:Yi(()=>[c.value?(Te(),Se("div",wR,[B("button",{class:"back-btn",onClick:b},"← 返回文章列表"),B("div",ER,[B("header",AR,[B("h1",null,He(c.value.title),1),B("div",TR,[B("span",null,"📅 "+He(c.value.date),1),c.value.tags?(Te(),Se("span",kR,"🏷️ "+He(c.value.tags.join(", ")),1)):st("",!0),B("span",null,"👁️ "+He(c.value.views??0),1),B("span",null,"❤️ "+He(c.value.likes??0),1)])]),D[3]||(D[3]=B("hr",{class:"divider"},null,-1)),B("button",{class:"like-btn",onClick:v}," ❤️ 点赞（"+He(c.value.likes??0)+"） ",1),B("div",{class:"markdown-body",innerHTML:c.value.renderedHtml},null,8,IR)])])):(Te(),Se("div",vR,[(Te(!0),Se(In,null,mi(d.value,L=>(Te(),Zi(N6,{key:L.title,article:L,onClick:V=>g(L)},null,8,["article","onClick"]))),128)),d.value.length===0?(Te(),Se("div",xR," 📭 暂无文章，请在 src/articles/ 下创建 .md 文件 ")):st("",!0)]))]),_:1})]))}},SR=gt(CR,[["__scopeId","data-v-458bc993"]]),RR="/homepage/assets/welcomePage-B7HW0J9I.jpg",DR="/homepage/assets/welcomePage-DW60vaPd.mp4",NR={class:"welcome-container"},PR=["src"],OR={class:"content"},LR={__name:"WelcomePage",emits:["enter"],setup(n,{emit:e}){const t=tn(!1);function r(){t.value=!0}const i=e;return(s,o)=>(Te(),Se("div",NR,[B("div",{class:jt(["bg-image",{fadeOut:t.value}]),style:da({backgroundImage:`url(${Us(RR)})`})},null,6),B("video",{class:jt(["bg-video",{visible:t.value}]),autoplay:"",muted:"",loop:"",playsinline:"",preload:"auto",src:Us(DR),onPlaying:r},null,42,PR),B("div",OR,[o[1]||(o[1]=B("h1",{class:"title"},"Hello World!",-1)),o[2]||(o[2]=B("p",{class:"subtitle"},"こんにちは、世界!",-1)),B("button",{class:"enter-btn",onClick:o[0]||(o[0]=a=>i("enter"))}," 进入主页 ")])]))}},FR=gt(LR,[["__scopeId","data-v-20a50546"]]),Th="/homepage/assets/avatar-D95aHTI_.png",MR="/homepage/assets/photo-CYrnGIE5.jpg",VR={class:"about-content-area"},jR={class:"header-section"},qR={class:"name"},BR={class:"typewriter"},UR={class:"header-avatar-wrap"},$R=["src"],HR={class:"article-body"},zR={class:"intro-lead","aria-label":"个人简介与照片"},GR={class:"intro-lead-photo-wrap"},WR=["src"],KR={class:"about-cards"},QR={class:"card-image-wrapper"},YR=["src","alt"],JR={class:"card-text"},XR={class:"card-title"},ZR={class:"card-description"},e9={class:"card-progress"},n9={class:"card-progress-bar"},t9={class:"card-progress-label"},nd="Hallo，我是Phier！",r9={__name:"AboutMe",setup(n){const e=tn("");let t=null;function r(){let s=0;e.value="",t=setInterval(()=>{s<=nd.length?(e.value=nd.slice(0,s),s++):t&&clearInterval(t)},120)}ls(()=>{r()}),al(()=>{t&&clearInterval(t)});const i=[{id:"profile-1",title:"I(N/S?)FP",description:"MBTI大师，但分不清自己的MBTI。。。",image:new URL("/homepage/assets/infp-Cu1aKHlI.jpg",import.meta.url).href,progress:75},{id:"profile-2",title:"乐队er（keyboard operator）",description:"你愿意和我组一辈子乐队吗？",image:new URL("/homepage/assets/band-BV1mfZfg.jpg",import.meta.url).href,progress:50},{id:"profile-3",title:"Phigros",description:"rks 16.28 小萌新",image:new URL("/homepage/assets/phi-CmNteCe2.jpg",import.meta.url).href,progress:100},{id:"profile-4",title:"Unreal引擎",description:"《不如原神》弗如远甚！",image:new URL("/homepage/assets/unreal-rnY9afEl.png",import.meta.url).href,progress:10},{id:"profile-5",title:"具身智能",description:"模仿学习？扩散模型？抱歉，学不懂",image:new URL("/homepage/assets/ai-CHqK5v_T.jpg",import.meta.url).href,progress:1},{id:"profile-6",title:"脑机接口",description:"时频分析？置换检验？抱歉，学不懂",image:new URL("/homepage/assets/bci-Bl8HTAzl.png",import.meta.url).href,progress:1},{id:"profile-7",title:"二游",description:"把阿列夫一肘飞！",image:new URL("/homepage/assets/mc-B8M6Ag80.jpg",import.meta.url).href,progress:60},{id:"profile-8",title:"日本語",description:"は菜菜です。",image:new URL("/homepage/assets/jap-DdIYtvTC.jpg",import.meta.url).href,progress:10}];return(s,o)=>(Te(),Se("div",VR,[B("header",jR,[B("h1",qR,[B("span",BR,He(e.value),1),B("span",{class:jt(["typewriter-cursor",{done:e.value.length>=nd.length}])},"|",2)]),B("div",UR,[B("img",{class:"header-avatar",src:Us(Th),alt:"头像"},null,8,$R)])]),B("article",HR,[B("div",zR,[o[0]||(o[0]=B("div",{class:"intro-lead-text"},[B("p",null,"我是2023级SJTU 机械钱班 plus 计算机minor plus AI+Robotics微minor 的这样的一名学生！ "),B("p",null,"我的研究兴趣是Robotics和多模态~")],-1)),B("div",GR,[B("img",{class:"intro-lead-photo",src:Us(MR),alt:"个人照"},null,8,WR)])]),o[1]||(o[1]=fd('<div class="social-icons" data-v-2a32c85a><a href="https://github.com/gty050804" target="_blank" rel="noopener noreferrer" class="social-icon" title="GitHub" data-v-2a32c85a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-2a32c85a><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" data-v-2a32c85a></path></svg></a><a href="https://space.bilibili.com/3537120266291299" target="_blank" rel="noopener noreferrer" class="social-icon" title="B站" data-v-2a32c85a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-v-2a32c85a><path d="M17.813 4.653h.854c.893 0 1.62.726 1.62 1.62v11.454c0 .893-.727 1.62-1.62 1.62H5.333c-.893 0-1.62-.727-1.62-1.62V6.273c0-.894.727-1.62 1.62-1.62h.854V3.24H5.333A3.457 3.457 0 0 0 1.88 6.693v11.454a3.457 3.457 0 0 0 3.453 3.454h13.334a3.457 3.457 0 0 0 3.453-3.454V6.693a3.457 3.457 0 0 0-3.453-3.453h-1.334V4.653ZM9.52 8.307v7.28l6.187-3.64L9.52 8.307Z" data-v-2a32c85a></path></svg></a><a href="mailto:gty050804@sjtu.edu.cn" class="social-icon" title="邮箱" data-v-2a32c85a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" data-v-2a32c85a><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" data-v-2a32c85a></path><polyline points="22,6 12,13 2,6" data-v-2a32c85a></polyline></svg></a></div><h2 class="section-title" data-v-2a32c85a>关于“Phier”</h2><p data-v-2a32c85a> Phier昵称赏析： </p><ul class="simple-list" data-v-2a32c85a><li data-v-2a32c85a><strong data-v-2a32c85a>Phi </strong>：重度Phigros玩家（又菜又爱玩型）；</li><li data-v-2a32c85a><strong data-v-2a32c85a><span data-v-2a32c85a> er </span></strong>： ......的人；</li><li data-v-2a32c85a><strong data-v-2a32c85a>ˈfaɪə</strong>：笨人火象星座，Phier和Fire谐音，令人忍俊不禁；</li><li data-v-2a32c85a><strong data-v-2a32c85a> φ </strong>：每一个Phigros玩家的毕生追求</li></ul>',4))]),o[2]||(o[2]=B("section",{class:"about-me-block","aria-labelledby":"about-me-title"},[B("header",{class:"section"},[B("h1",{id:"about-me-title",class:"section-title"},"关于我")]),B("article",{class:"article-body"},[B("p",null,[oi(" 中度偏重度社恐，I(N/S？)FP，"),B("s",null,"面向ai编程的屑 "),oi("，"),B("s",null,"喜欢"),oi("具身智能，乐队er，钢琴小白，UNREAL引擎, 日本語を勉強しています ")]),B("p",null," 厨：绿苹果厨，鸣潮厨，崩铁厨，库洛厨，mhy厨，音游厨，rks16.28厨，.etc厨 (待完善，此处省略33550336字) "),B("p",null,"终身学习，但佛系学习(`・ω・´)")])],-1)),B("section",KR,[(Te(),Se(In,null,mi(i,a=>B("div",{key:a.id,class:"about-card"},[B("div",QR,[B("img",{class:"card-image",src:a.image,alt:a.title},null,8,YR)]),B("div",JR,[B("div",XR,He(a.title),1),B("div",ZR,He(a.description),1)]),B("div",e9,[B("div",n9,[B("div",{class:"card-progress-inner",style:da({width:a.progress+"%"})},null,4)]),B("span",t9,He(a.progress)+"%",1)])])),64))]),o[3]||(o[3]=fd('<p data-v-2a32c85a></p><p data-v-2a32c85a>鸣潮特征码：105460858</p><p data-v-2a32c85a>崩铁uid：137727925</p><header class="section" data-v-2a32c85a><h1 class="section-title" data-v-2a32c85a>获得荣誉</h1></header><section class="honor-section" data-v-2a32c85a><div class="honor-item" data-v-2a32c85a><span class="honor-badge" data-v-2a32c85a>🏅</span><div class="honor-text" data-v-2a32c85a><div class="honor-title" data-v-2a32c85a>国家奖学金</div><div class="honor-subtitle" data-v-2a32c85a>2024 - 2025 学年</div></div></div><div class="honor-item" data-v-2a32c85a><span class="honor-badge" data-v-2a32c85a>🎖️</span><div class="honor-text" data-v-2a32c85a><div class="honor-title" data-v-2a32c85a>致远荣誉奖学金</div><div class="honor-subtitle" data-v-2a32c85a>2023 - 2024，2024 - 2025，2025 - 2026 学年</div></div></div><div class="honor-item" data-v-2a32c85a><span class="honor-badge" data-v-2a32c85a>🏆</span><div class="honor-text" data-v-2a32c85a><div class="honor-title" data-v-2a32c85a>冯桐笙奖学金</div><div class="honor-subtitle" data-v-2a32c85a>2023 - 2024 学年</div></div></div><div class="honor-item" data-v-2a32c85a><span class="honor-badge" data-v-2a32c85a>✨</span><div class="honor-text" data-v-2a32c85a><div class="honor-title" data-v-2a32c85a>上海交通大学机械与动力工程学院三好学生</div><div class="honor-subtitle" data-v-2a32c85a>2023 - 2024 学年</div></div></div></section>',5))]))}},dg=gt(r9,[["__scopeId","data-v-2a32c85a"]]),i9=["href"],s9={class:"avatar-wrapper"},o9=["src","alt"],a9={key:1,class:"avatar-placeholder"},u9={class:"info"},l9={class:"name"},c9={class:"intro"},d9={__name:"FriendCard",props:{friend:{type:Object,required:!0}},setup(n){return(e,t)=>(Te(),Se("a",{href:n.friend.link,target:"_blank",class:"friend-card"},[B("div",s9,[n.friend.avatar?(Te(),Se("img",{key:0,src:n.friend.avatar,alt:n.friend.name,class:"avatar",loading:"lazy"},null,8,o9)):(Te(),Se("div",a9,He(n.friend.name[0]),1))]),B("div",u9,[B("h3",l9,He(n.friend.name),1),B("p",c9,He(n.friend.intro||"这个人很懒，什么也没写。"),1)]),t[0]||(t[0]=B("div",{class:"visit-btn"}," 访问主页 → ",-1))],8,i9))}},fg=gt(d9,[["__scopeId","data-v-705777fa"]]),f9="/homepage/assets/panminway-BPd3-Q5D.jpg",h9="/homepage/assets/zhuyehang-DyXg0V5H.jpg",p9="/homepage/assets/Chika%20Komari-yI6Qssvj.png",m9={class:"friends-container"},g9={class:"friends-grid"},_9={key:0,class:"friends-grid friends-grid-second"},y9={__name:"MyFriends",setup(n){const e=[{name:"Phier",avatar:Th,intro:"右边的和下面的都是大佬",link:"https://gty050804.github.io/homepage/"},{name:"Panminway",avatar:f9,intro:"Hello, My name is Panmingh. I go by SnowCat, Butterf1y, or Panminway.",link:"https://www.panmingh.com/"},{name:"Zhu Yehang",avatar:h9,intro:"技术笔记与项目记录（Hexo · Stellar）",link:"https://lajoyazyh.github.io/"},{name:"Chika Komari",avatar:p9,intro:"Implicit signal mining for personalized decision systems.",link:"https://joker-of-gotham.github.io/"}];return(t,r)=>(Te(),Se("div",m9,[r[0]||(r[0]=B("header",{class:"page-header"},[B("h1",null,"友情链接"),B("p",null,"志合者，不以山海为远。")],-1)),r[1]||(r[1]=B("hr",{class:"divider"},null,-1)),B("div",g9,[(Te(!0),Se(In,null,mi(e.slice(0,3),i=>(Te(),Zi(fg,{key:i.name,friend:i},null,8,["friend"]))),128))]),e.length>3?(Te(),Se("div",_9,[(Te(!0),Se(In,null,mi(e.slice(3),i=>(Te(),Zi(fg,{key:i.name,friend:i},null,8,["friend"]))),128))])):st("",!0)]))}},b9=gt(y9,[["__scopeId","data-v-fbe5ff67"]]);function nb(){return""}function v9(){return!1}function x9(){return!1}function tb(){return{"X-LC-Id":(void 0).trim(),"X-LC-Key":(void 0).trim(),"Content-Type":"application/json"}}function w9(n){return{id:n.objectId,content:n.content,nickname:n.nickname,createdAt:n.createdAt?new Date(n.createdAt):null,answer:n.answer,answeredAt:n.answeredAt?new Date(n.answeredAt):null}}async function E9(){const n=nb(),t=await fetch(`${n}/1.1/classes/AMAQuestion?order=-createdAt&limit=200`,{headers:tb()}),r=await t.json().catch(()=>({}));if(!t.ok)throw new Error(r.error||r.message||`加载失败 (${t.status})`);return(r.results||[]).map(w9)}async function A9({content:n,nickname:e}){const t=String(n||"").trim();if(!t)throw new Error("问题内容不能为空");if(t.length>5e3)throw new Error("问题过长");const r=String(e||"匿名").trim().slice(0,80)||"匿名",i=nb(),s=await fetch(`${i}/1.1/classes/AMAQuestion`,{method:"POST",headers:tb(),body:JSON.stringify({content:t,nickname:r})}),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||o.message||`提交失败 (${s.status})`)}async function T9(n,e){throw String(e||"").trim()?new Error("未配置 VITE_LC_AMA_REPLY_SECRET"):new Error("回复不能为空")}const k9={class:"ama-page markdown-body"},I9={class:"ama-header"},C9={key:0,class:"ama-vpn-note"},S9={class:"ama-lead"},R9={key:0,class:"ama-banner warn"},D9={key:0,class:"ama-banner warn"},N9={key:1,class:"ama-banner err"},P9={class:"ama-card"},O9=["disabled"],L9={class:"ama-list-wrap"},F9={key:0,class:"ama-empty"},M9={class:"ama-q"},V9={class:"ama-meta"},j9={class:"ama-nick"},q9={class:"ama-time"},B9={class:"ama-content"},U9={key:0,class:"ama-a"},$9={class:"ama-content"},H9={class:"ama-time small"},z9={key:1,class:"ama-reply-box"},G9=["value","onInput"],W9=["disabled","onClick"],K9={key:2,class:"ama-login-footer"},Q9={__name:"AskMeAnything",setup(n){const e=tn([]),t=tn(null),r=tn(""),i=tn(""),s=tn(!1),o=tn(""),a=tn(null);let l=()=>{},c=()=>{},d=null;const p=zt(()=>lR()),g=zt(()=>!!a.value&&!!p.value&&a.value.uid===p.value),b=zt(()=>v9()),v=zt(()=>Io()),I=zt(()=>b.value||v.value),D=zt(()=>b.value?x9():g.value);async function L(){try{e.value=await E9(),t.value=null}catch(T){t.value=T?.message||"加载失败，请检查 LeanCloud 类名 AMAQuestion 与权限"}}ls(()=>{if(b.value){L(),d=window.setInterval(L,6e3);return}l=fR(T=>{a.value=T}),c=hR(T=>{e.value=T,t.value=null},T=>{t.value=T?.message||"加载失败，请检查 Firestore 索引或规则"})}),al(()=>{d!=null&&(clearInterval(d),d=null),l(),c()});function V(T){if(!T)return"";try{if(T instanceof Date&&!isNaN(T.getTime()))return T.toLocaleString("zh-CN");if(typeof T.toDate=="function")return T.toDate().toLocaleString("zh-CN")}catch{}return String(T)}async function W(){o.value="",s.value=!0;try{b.value?(await A9({content:i.value,nickname:r.value}),await L()):await pR({content:i.value,nickname:r.value}),i.value=""}catch(T){o.value=T?.message||"提交失败"}finally{s.value=!1}}async function z(){o.value="";try{await cR()}catch(T){o.value=T?.message||"登录失败"}}async function ie(){await dR()}const ce=tn({}),S=tn({});function w(T,A){ce.value={...ce.value,[T]:A}}async function x(T){const A=(ce.value[T.id]||"").trim();if(A){S.value={...S.value,[T.id]:!0},o.value="";try{b.value?(await T9(T.id,A),await L()):await mR(T.id,A),ce.value={...ce.value,[T.id]:""}}catch(k){o.value=k?.message||(b.value?"回复失败（请确认已部署云函数 answerAMA 且密钥一致）":"回复失败（请确认已用站主 Google 登录且 Firestore 规则已部署）")}finally{S.value={...S.value,[T.id]:!1}}}}return(T,A)=>(Te(),Se("div",k9,[B("header",I9,[A[3]||(A[3]=B("h1",null,"Ask Me Anything",-1)),v.value&&!b.value?(Te(),Se("p",C9,[...A[2]||(A[2]=[oi(" 提示：本页留言与互动依赖 Google / Firebase，在部分网络环境下需",-1),B("strong",null,"自备梯子",-1),oi("才能正常加载与提交。 ",-1)])])):st("",!0),B("p",S9,[b.value?(Te(),Se(In,{key:0},[oi("欢迎在此留言提问，公开可见。")],64)):(Te(),Se(In,{key:1},[oi("敏而好学，不耻下问。")],64))])]),I.value?(Te(),Se(In,{key:1},[t.value?(Te(),Se("div",D9,He(t.value),1)):st("",!0),o.value?(Te(),Se("div",N9,He(o.value),1)):st("",!0),B("section",P9,[A[5]||(A[5]=B("h2",null,"我要提问",-1)),A[6]||(A[6]=B("label",{class:"ama-label"},"称呼（可选）",-1)),Qh(B("input",{"onUpdate:modelValue":A[0]||(A[0]=k=>r.value=k),class:"ama-input",type:"text",maxlength:"80",placeholder:"匿名亦可"},null,512),[[Sp,r.value]]),A[7]||(A[7]=B("label",{class:"ama-label"},"问题内容",-1)),Qh(B("textarea",{"onUpdate:modelValue":A[1]||(A[1]=k=>i.value=k),class:"ama-textarea",rows:"5",maxlength:"5000",placeholder:"写下你的问题…"},null,512),[[Sp,i.value]]),B("button",{type:"button",class:"ama-btn primary",disabled:s.value||!i.value.trim(),onClick:W},He(s.value?"提交中…":"提交问题"),9,O9)]),B("section",L9,[A[9]||(A[9]=B("h2",null,"全部问答",-1)),e.value.length===0?(Te(),Se("p",F9,"还没有问题，来做第一个提问的人吧。")):st("",!0),(Te(!0),Se(In,null,mi(e.value,k=>(Te(),Se("article",{key:k.id,class:"ama-thread"},[B("div",M9,[B("div",V9,[B("span",j9,He(k.nickname||"匿名"),1),B("span",q9,He(V(k.createdAt)),1)]),B("p",B9,He(k.content),1)]),k.answer?(Te(),Se("div",U9,[A[8]||(A[8]=B("div",{class:"ama-a-label"},"站主回复",-1)),B("p",$9,He(k.answer),1),B("div",H9,He(V(k.answeredAt)),1)])):D.value?(Te(),Se("div",z9,[B("textarea",{value:ce.value[k.id]||"",class:"ama-textarea small",rows:"3",placeholder:"写下回复…",onInput:E=>w(k.id,E.target.value)},null,40,G9),B("button",{type:"button",class:"ama-btn primary",disabled:S.value[k.id],onClick:E=>x(k)},He(S.value[k.id]?"发送中…":"发布回复"),9,W9)])):st("",!0)]))),128))])],64)):(Te(),Se("div",R9,[...A[4]||(A[4]=[fd("<strong data-v-3d74fa20>未检测到 AMA 存储配置。</strong> 任选其一：<strong data-v-3d74fa20>Firebase（推荐）</strong>配置 <code data-v-3d74fa20>VITE_FIREBASE_*</code> 与 <code data-v-3d74fa20>VITE_AMA_OWNER_UID</code> 并部署 <code data-v-3d74fa20>firestore.rules</code>；或（仅存量）填写 <code data-v-3d74fa20>VITE_LC_APP_ID</code>、<code data-v-3d74fa20>VITE_LC_APP_KEY</code>、<code data-v-3d74fa20>VITE_LC_SERVER_URL</code>。详见 <code data-v-3d74fa20>README.md</code> 与 <code data-v-3d74fa20>.env.example</code>。 ",20)])])),I.value&&!b.value?(Te(),Se("div",K9,[a.value?(Te(),Se("button",{key:1,type:"button",class:"ama-btn ghost",onClick:ie},"退出登录")):(Te(),Se("button",{key:0,type:"button",class:"ama-btn",onClick:z}," Google 登录 "))])):st("",!0)]))}},Y9=gt(Q9,[["__scopeId","data-v-3d74fa20"]]),J9={class:"sidebar-panel"},X9={class:"profile-area hide-in-zen"},Z9={class:"menu-area hide-in-zen"},eD={class:"footer-area"},nD={class:"button-group"},tD={class:"content-area hide-in-zen"},rD={class:"glass-window"},iD={__name:"App",setup(n){const e=tn(!0),t=tn(!1);function r(){e.value=!1}function i(){e.value=!0}function s(){t.value=!t.value}const o=tn("Phier"),a=tn("Some days you bloom. Some days you grow roots. Both matter."),l=tn(Th),c={about:dg,projects:LA,articles:SR,friends:b9,ama:Y9},d=tn("about"),p=qb(dg);function g(L){d.value=L,p.value=c[L],b.value&&(b.value.scrollTop=0)}const b=tn(null),v=tn(!1);function I(L){v.value=L.target.scrollTop>300}function D(){b.value.scrollTo({top:0,behavior:"smooth"})}return(L,V)=>(Te(),Se(In,null,[V[2]||(V[2]=B("div",{class:"global-background"},[B("video",{class:"bg-video",autoplay:"",muted:"",loop:"",playsinline:"",src:Ox}),B("div",{class:"bg-overlay"})],-1)),B("div",{class:jt(["viewport-container",{"zen-active":t.value}])},[gn(Ns,{name:"fade"},{default:Yi(()=>[!e.value&&!t.value?(Te(),Se("div",{key:0,class:"back-home-trigger",onClick:i,title:"返回欢迎页"},[...V[0]||(V[0]=[B("div",{class:"indicator-line"},null,-1)])])):st("",!0)]),_:1}),B("aside",J9,[B("div",X9,[gn(jx,{name:o.value,bio:a.value,avatar:l.value},null,8,["name","bio","avatar"])]),B("div",Z9,[gn($x,{"active-tab":d.value,onChangeTab:g},null,8,["active-tab"])]),B("div",eD,[B("div",nD,[gn(Qx),gn(Xx,{active:t.value,onClick:s},null,8,["active"])]),V[1]||(V[1]=B("p",{class:"hide-in-zen"},"© 2025 Personal Page",-1))])]),B("main",tD,[B("div",rD,[B("div",{class:"scroll-container",ref_key:"scrollRef",ref:b,onScroll:I},[gn(Ns,{name:"fade",mode:"out-in"},{default:Yi(()=>[(Te(),Zi(dv(p.value)))]),_:1})],544),gn(zx,{visible:v.value,onClick:D},null,8,["visible"])])])],2),gn(Ns,{name:"slide-up"},{default:Yi(()=>[e.value?(Te(),Zi(FR,{key:0,onEnter:r})):st("",!0)]),_:1}),gn(_3)],64))}},sD=gt(iD,[["__scopeId","data-v-246c3abc"]]);Dx(sD).mount("#app");
