;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-pan-zoom",ev:"0.1",l:!0,f:function(t,s){(()=>{var s;function i(){return s||(s=Promise.resolve(void 0))}var h=class{constructor(){this.promise=new Promise(((t,s)=>{this.resolve=t,this.reject=s}))}},{isArray:n}=Array;function e(t){return"string"==typeof t}var{hasOwnProperty:o,toString:r}=Object.prototype;function c(t,s,i,h,n,e,o,r,c,u,a){return t}function u(t,s,i,h){return n=>a.solveYValueFromXValue(n,0,0,t,s,i,h,1,1)}var a=class{static solveYValueFromXValue(t,s,i,h,n,e,o,r,c){return a.rr(a.hr(t,s,h,e,r),i,n,o,c)}static hr(t,s,i,h,n){const e=1e-6;let o=(t-s)/(n-s);if(o<=0)return 0;if(o>=1)return 1;let r=0,c=1,u=0;for(let l=0;l<8;l++){u=a.ur(o,s,i,h,n);const l=(a.ur(o+e,s,i,h,n)-u)/e;if(Math.abs(u-t)<e)return o;if(Math.abs(l)<e)break;u<t?r=o:c=o,o-=(u-t)/l}for(let l=0;Math.abs(u-t)>e&&l<8;l++)u<t?(r=o,o=(o+c)/2):(c=o,o=(o+r)/2),u=a.ur(o,s,i,h,n);return o}static ur(t,s,i,h,n){if(0==t)return s;if(1==t)return n;let e=a.lr(s,i,t),o=a.lr(i,h,t);const r=a.lr(h,n,t);return e=a.lr(e,o,t),o=a.lr(o,r,t),a.lr(e,o,t)}static rr(t,s,i,h,n){if(0==t)return s;if(1==t)return n;let e=a.lr(s,i,t),o=a.lr(i,h,t);const r=a.lr(h,n,t);return e=a.lr(e,o,t),o=a.lr(o,r,t),a.lr(e,o,t)}static lr(t,s,i){return t+i*(s-t)}},l={LINEAR:t=>t,EASE:t=>a.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1),EASE_IN:t=>a.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1),EASE_OUT:t=>a.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1),EASE_IN_OUT:t=>a.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)},_={"linear":l.LINEAR,"ease":l.EASE,"ease-in":l.EASE_IN,"ease-out":l.EASE_OUT,"ease-in-out":l.EASE_IN_OUT};function f(t){if(!t)return null;if(e(t)){if(-1!=(t=t).indexOf("cubic-bezier")){const s=t.match(/cubic-bezier\((.+)\)/);if(s){const t=s[1].split(",").map(parseFloat);if(4==t.length){for(let s=0;s<4;s++)if(isNaN(t[s]))return null;return u(t[0],t[1],t[2],t[3])}}return null}return _[t]}return t}function P(t){return(t.ownerDocument||t).defaultView}var A,M={bubbles:!0,cancelable:!0};function d(t,s,i,h){return{left:t,top:s,width:i,height:h,bottom:s+h,right:t+i,x:t,y:s}}function p(t){const s=Object.getOwnPropertyDescriptor(t,"message");if(null!=s&&s.writable)return t;const{message:i,stack:h}=t,n=new Error(i);for(const s in t)n[s]=t[s];return n.stack=h,n}function m(t){let s=null,i="";for(const t of arguments)t instanceof Error&&!s?s=p(t):(i&&(i+=" "),i+=t);return s?i&&(s.message=i+": "+s.message):s=new Error(i),s}function E(t){var s,i;null===(s=(i=self).__AMP_REPORT_ERROR)||void 0===s||s.call(i,t)}function T(t,...s){try{return t.apply(null,s)}catch(t){!function(t){const s=m.apply(null,arguments);setTimeout((()=>{throw E(s),s}))}(t)}}var v=["Webkit","webkit","Moz","moz","ms","O","o"],R={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function g(t,s,i,h,n){const e=function(t,s,i){if(s.startsWith("--"))return s;A||(A=Object.create(null));let h=A[s];if(!h||i){if(h=s,void 0===t[s]){const i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(s),n=function(t,s){for(let i=0;i<v.length;i++){const h=v[i]+s;if(void 0!==t[h])return h}return""}(t,i);void 0!==t[n]&&(h=n)}i||(A[s]=h)}return h}(t.style,s,n);if(!e)return;const o=h?i+h:i;t.style.setProperty(function(t){const s=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return v.some((t=>s.startsWith(t+"-")))?`-${s}`:s}(e),o)}function I(t,s){for(const i in s)g(t,i,s[i])}function V(t){return`${t}px`}function b(t,s){return"number"==typeof t?s(t):t}function w(t,s){return null==s?`translate(${b(t,V)})`:`translate(${b(t,V)}, ${b(s,V)})`}var y,x=/vertical/,z=new WeakMap,S=new WeakMap,k=new WeakMap;function C(t){let s=z.get(t);return s||(s=new t.ResizeObserver(D),z.set(t,s)),s}function D(t){const s=new Set;for(let i=t.length-1;i>=0;i--){const h=t[i],{target:n}=h;if(s.has(n))continue;s.add(n);const e=S.get(n);if(e){k.set(n,h);for(let t=0;t<e.length;t++){const{callback:s,type:i}=e[t];X(i,s,h)}}}}function X(t,s,i){if(0==t){const{contentRect:t}=i,{height:h,width:n}=t;T(s,{width:n,height:h})}else if(1==t){const{borderBoxSize:t}=i;let h;if(t)h=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=i,s=P(t),n=x.test(function(t,s){return t.getComputedStyle(s)||R}(s,t).writingMode),{offsetHeight:e,offsetWidth:o}=t;let r,c;n?(c=o,r=e):(r=o,c=e),h={inlineSize:r,blockSize:c}}T(s,h)}}function Y(t){return function(t,s){c(1===s.length),t.innerHTML=s[0];const i=t.firstElementChild;return c(i),c(!i.nextElementSibling),t.removeChild(i),i}(y,t)}function O(t,s){return i=>t+(s-t)*i}function N(t,s,i,h){return c(s<=i),function(t,s,i){return c(s<=i),Math.min(Math.max(t,s),i)}(t,s-h,i+h)}function Z(t,s){return Math.sqrt(t*t+s*s)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var G=self.__AMP_LOG;function j(t,s){throw new Error("failed to call initLogConstructor")}function $(t){return j()}function B(){return G.dev||(G.dev=j())}function H(t,s,i,h,n,e,o,r,c,u,a){return t}function L(t,s,i,h,n,e,o,r,c,u,a){return(G.user||(G.user=$()),void G.user.win?G.userForEmbed||(G.userForEmbed=$()):G.user).assert(t,s,i,h,n,e,o,r,c,u,a)}function U(t,s){return q(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),s)}function W(t){return t.nodeType?(s=P(t),U(s,"ampdoc")).getAmpDoc(t):t;var s}function F(t){const s=W(t);return s.isSingleDoc()?s.win:s}function q(t,s){H(J(t,s));const i=function(t){let s=t.__AMP_SERVICES;return s||(s=t.__AMP_SERVICES={}),s}(t)[s];return i.obj||(H(i.ctor),H(i.context),i.obj=new i.ctor(i.context),H(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function J(t,s){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[s];return!(!i||!i.ctor)}var K,Q,tt=t=>function(t,s){return q(F(W(t)),"owners")}(t),st=t=>U(t,"vsync"),it="Animation",ht=function(){},nt=class{static animate(t,s,i,h){return new nt(t).setCurve(h).add(0,s,1).start(i)}constructor(t,s){this.cr=t,this.ar=s||st(self),this.dr=null,this.pr=[]}setCurve(t){return t&&(this.dr=f(t)),this}add(t,s,i,h){return this.pr.push({delay:t,func:s,duration:i,curve:f(h)}),this}start(t){return new et(this.ar,this.cr,this.pr,this.dr,t)}},et=class{constructor(t,s,i,n,e){this.ar=t,this.cr=s,this.pr=[];for(let t=0;t<i.length;t++){const s=i[t];this.pr.push({delay:s.delay,func:s.func,duration:s.duration,curve:s.curve||n,started:!1,completed:!1})}this.mr=e,this.zn=Date.now(),this.be=!0,this.Ai={};const o=new h;this._r=o.promise,this.te=o.resolve,this.Ar=o.reject,this.gr=this.ar.createAnimTask(this.cr,{mutate:this.Pr.bind(this)}),this.ar.canAnimate(this.cr)?this.gr(this.Ai):this.vr(!1,0)}then(t,s){return t||s?this._r.then(t,s):this._r}thenAlways(t){const s=t||ht;return this.then(s,s)}halt(t){this.vr(!1,t||0)}vr(t,s){if(this.be){if(this.be=!1,0!=s){this.pr.length>1&&this.pr.sort(((t,s)=>t.delay+t.duration-(s.delay+s.duration)));try{if(s>0)for(let t=0;t<this.pr.length;t++)this.pr[t].func(1,!0);else for(let t=this.pr.length-1;t>=0;t--)this.pr[t].func(0,!1)}catch(s){B().error(it,"completion failed: "+s,s),t=!1}}t?this.te():this.Ar()}}Pr(t){if(!this.be)return;const s=Date.now(),i=Math.min((s-this.zn)/this.mr,1);for(let t=0;t<this.pr.length;t++){const s=this.pr[t];!s.started&&i>=s.delay&&(s.started=!0)}for(let t=0;t<this.pr.length;t++){const s=this.pr[t];s.started&&!s.completed&&this.Er(s,i)}1==i?this.vr(!0,0):this.ar.canAnimate(this.cr)?this.gr(this.Ai):this.vr(!1,0)}Er(t,s){let i,h;if(t.duration>0){if(i=Math.min((s-t.delay)/t.duration,1),h=i,t.curve&&1!=h)try{h=t.curve(i)}catch(t){return B().error(it,"step curve failed: "+t,t),void this.vr(!1,0)}}else i=1,h=1;1==i&&(t.completed=!0);try{t.func(h,t.completed)}catch(t){return B().error(it,"step mutate failed: "+t,t),void this.vr(!1,0)}}};function ot(t,s,i,h){const n={detail:i};return Object.assign(n,h),new t.CustomEvent(s,n)}function rt(t,s,i,h){return function(t,s,i,h){let n=t,e=i,o=t=>{try{return e(t)}catch(t){var s,i;throw null===(s=(i=self).__AMP_REPORT_ERROR)||void 0===s||s.call(i,t),t}};const r=function(){if(void 0!==K)return K;K=!1;try{const t={get capture(){return K=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return K}(),c=!(null==h||!h.capture);return n.addEventListener(s,o,r?h:c),()=>{null==n||n.removeEventListener(s,o,r?h:c),e=null,n=null,o=null}}(t,s,i,h)}var ct=class{constructor(){this.St=null}add(t){return this.St||(this.St=[]),this.St.push(t),()=>{this.remove(t)}}remove(t){this.St&&function(t,s){const i=t.indexOf(s);-1!=i&&t.splice(i,1)}(this.St,t)}removeAll(){this.St&&(this.St.length=0)}fire(t){if(this.St)for(const s of this.St.slice())s(t)}getHandlerCount(){var t,s;return null!==(t=null===(s=this.St)||void 0===s?void 0:s.length)&&void 0!==t?t:0}},ut="__AMP_Gestures",at=class{static get(t,s=!1,i=!1){let h=t[ut];return h||(h=new at(t,s,i),t[ut]=h),h}constructor(t,s=!1,i=!1){this._f=t,this.HV=[],this.t_=[],this.ci=[],this.XV=[],this.WV=null;const h=function(t){if(void 0!==Q)return Q;Q=!1;try{const s={get passive(){return Q=!0,!1}};t.addEventListener("test-options",null,s),t.removeEventListener("test-options",null,s)}catch(t){}return Q}(t.ownerDocument.defaultView);this.UV=s||h,this.JV=i,this.QV=!1,this.Se=new class{constructor(t,s,i){this.Ie=q(t,"timer"),this.Me=s,this.Re=i||0,this.ye=-1,this.we=0,this.be=!1,this.Ve=()=>{this.Se()}}isPending(){return-1!=this.ye}schedule(t){let s=t||this.Re;this.be&&s<10&&(s=10);const i=Date.now()+s;return(!this.isPending()||i-this.we<-10)&&(this.cancel(),this.we=i,this.ye=this.Ie.delay(this.Ve,s),!0)}Se(){this.ye=-1,this.we=0,this.be=!0,this.Me(),this.be=!1}cancel(){this.isPending()&&(this.Ie.cancel(this.ye),this.ye=-1)}}(P(t),this.Nd.bind(this)),this.tC=new ct,this.iC=Object.create(null),this.sC=this.Jp.bind(this),this.nC=this.Qp.bind(this),this.hC=this.Wp.bind(this),this.eC=this.h_.bind(this),this._f.addEventListener("touchstart",this.sC,!!h&&{passive:!0}),this._f.addEventListener("touchend",this.nC),this._f.addEventListener("touchmove",this.hC,!!h&&{passive:!0}),this._f.addEventListener("touchcancel",this.eC),this.oC=!1}cleanup(){this._f.removeEventListener("touchstart",this.sC),this._f.removeEventListener("touchend",this.nC),this._f.removeEventListener("touchmove",this.hC),this._f.removeEventListener("touchcancel",this.eC),delete this._f[ut],this.Se.cancel()}onGesture(t,s){const i=new t(this),h=i.getType();let n=this.iC[h];return n||(this.HV.push(i),n=new ct,this.iC[h]=n),n.add(s)}removeGesture(t){const s=new t(this).getType(),i=this.iC[s];if(i){i.removeAll();const t=function(t,i){for(let i=0;i<t.length;i++)if(t[i].getType()==s)return i;return-1}(this.HV);return!(t<0||(this.HV.splice(t,1),this.ci.splice(t,1),this.XV.splice(t,1),this.t_.splice(t,1),delete this.iC[s],0))}return!1}onPointerDown(t){return this.tC.add(t)}Jp(t){const s=Date.now();this.QV=!1,this.tC.fire(t);for(let i=0;i<this.HV.length;i++)this.ci[i]||(this.XV[i]&&this.XV[i]<s&&this.o_(i),this.HV[i].onTouchStart(t)&&this.u_(i));this.rC(t)}Wp(t){const s=Date.now();for(let i=0;i<this.HV.length;i++)this.t_[i]&&(this.XV[i]&&this.XV[i]<s?this.o_(i):this.HV[i].onTouchMove(t)||this.o_(i));this.rC(t)}Qp(t){const s=Date.now();for(let i=0;i<this.HV.length;i++){if(!this.t_[i])continue;if(this.XV[i]&&this.XV[i]<s){this.o_(i);continue}this.HV[i].onTouchEnd(t);const h=!this.XV[i],n=this.XV[i]<s;this.WV==this.HV[i]||!h&&!n||this.o_(i)}this.rC(t)}h_(t){for(let t=0;t<this.HV.length;t++)this.lC(t);this.rC(t)}Hp(t,s){if(this.WV)return void t.acceptCancel();const i=Date.now();for(let h=0;h<this.HV.length;h++)this.HV[h]==t&&(this.ci[h]=i+s,this.XV[h]=0);this.oC=!0}aC(t,s){if(this.WV)return void t.acceptCancel();const i=Date.now();for(let h=0;h<this.HV.length;h++)this.HV[h]==t&&(this.XV[h]=i+s)}cC(t){this.WV==t&&(this.WV=null,this.QV=!0)}uC(t,s,i){c(this.WV==t);const h=this.iC[t.getType()];h&&h.fire(new class{constructor(t,s,i,h){this.type=t,this.data=s,this.time=i,this.event=h}}(t.getType(),s,Date.now(),i))}rC(t){let s=!!this.WV||this.QV;if(this.QV=!1,!s){const t=Date.now();for(let i=0;i<this.HV.length;i++)if(this.ci[i]||this.XV[i]&&this.XV[i]>=t){s=!0;break}}s?(t.stopPropagation(),this.UV||t.preventDefault()):this.JV&&t.stopPropagation(),this.oC&&(this.oC=!1,this.Nd())}Nd(){const t=Date.now();let s=-1;for(let i=0;i<this.HV.length;i++)this.ci[i]?(-1==s||this.ci[i]>this.ci[s])&&(s=i):this.XV[i]&&this.XV[i]<t&&this.o_(i);if(-1==s)return;let i=0;for(let s=0;s<this.HV.length;s++)!this.ci[s]&&this.t_[s]&&(i=Math.max(i,this.XV[s]-t));i<2?this.fC(s):this.Se.schedule(i)}fC(t){const s=this.HV[t];for(let s=0;s<this.HV.length;s++)s!=t&&this.lC(s);this.ci[t]=0,this.XV[t]=0,this.WV=s,s.acceptStart()}u_(t){this.t_[t]=!0,this.XV[t]=0}o_(t){this.t_[t]=!1,this.XV[t]=0,this.ci[t]||this.HV[t].acceptCancel()}lC(t){this.ci[t]=0,this.o_(t)}},lt=class{constructor(t,s){this.SC=t,this.x_=s}getType(){return this.SC}signalReady(t){this.x_.Hp(this,t)}signalPending(t){this.x_.aC(this,t)}signalEnd(){this.x_.cC(this)}signalEmit(t,s){this.x_.uC(this,t,s)}acceptStart(){}acceptCancel(){}onTouchStart(t){return!1}onTouchMove(t){return!1}onTouchEnd(t){}},_t=function(){},ft=.02,Pt=Math.round(-16.67/Math.log(.95));function At(t,s,i){s<1&&(s=1);const h=t/s,n=.5+Math.min(s/33.34,.5);return h*n+i*(1-n)}var Mt=class extends lt{constructor(t){super("tap",t),this.zC=0,this.BC=0,this.jC=0,this.HC=0,this.o=null}onTouchStart(t){const{touches:s}=t;return this.o=t.target,!(!s||1!=s.length||(this.zC=s[0].clientX,this.BC=s[0].clientY,0))}onTouchMove(t){const s=t.changedTouches||t.touches;if(s&&1==s.length){this.jC=s[0].clientX,this.HC=s[0].clientY;const t=Math.abs(this.jC-this.zC)>=8,i=Math.abs(this.HC-this.BC)>=8;if(t||i)return!1}return!0}onTouchEnd(t){this.signalReady(0)}acceptStart(){this.signalEmit({clientX:this.jC,clientY:this.HC,target:this.o},null),this.signalEnd()}},dt=class extends lt{constructor(t){super("doubletap",t),this.zC=0,this.BC=0,this.jC=0,this.HC=0,this.oD=0,this.aD=null}onTouchStart(t){if(this.oD>1)return!1;const{touches:s}=t;return!(!s||1!=s.length||(this.zC=s[0].clientX,this.BC=s[0].clientY,this.jC=s[0].clientX,this.HC=s[0].clientY,0))}onTouchMove(t){const{touches:s}=t;if(s&&1==s.length){this.jC=s[0].clientX,this.HC=s[0].clientY;const t=Math.abs(this.jC-this.zC)>=8,i=Math.abs(this.HC-this.BC)>=8;return!t&&!i||(this.acceptCancel(),!1)}return!1}onTouchEnd(t){this.oD++,this.oD<2?this.signalPending(200):(this.aD=t,this.signalReady(0))}acceptStart(){this.oD=0,this.signalEmit({clientX:this.jC,clientY:this.HC},this.aD),this.signalEnd()}acceptCancel(){this.oD=0}},pt=class extends lt{constructor(t,s,i,h){super(t,s),this.OC=i,this.DC=h,this.WV=!1,this.zC=0,this.BC=0,this.jC=0,this.HC=0,this.YC=0,this.$C=0,this.zn=0,this.XC=0,this.FC=0,this.GC=0,this.LC=0}onTouchStart(t){const{touches:s}=t;return!!(this.WV&&s&&s.length>1)||!(!s||1!=s.length)&&(this.zn=Date.now(),this.zC=s[0].clientX,this.BC=s[0].clientY,!0)}onTouchMove(t){const{touches:s}=t;if(s&&s.length>=1){const{clientX:i,clientY:h}=s[0];if(this.jC=i,this.HC=h,this.WV)this.WC(!1,!1,t);else{const t=Math.abs(i-this.zC),s=Math.abs(h-this.BC);if(this.OC&&this.DC)(t>=8||s>=8)&&this.signalReady(-10);else if(this.OC){if(t>=8&&t>s)this.signalReady(-10);else if(s>=8)return!1}else{if(!this.DC)return!1;if(s>=8&&s>t)this.signalReady(-10);else if(t>=8)return!1}}return!0}return!1}onTouchEnd(t){const{touches:s}=t;s&&0==s.length&&this.UC(t)}acceptStart(){this.WV=!0,this.YC=this.zC,this.$C=this.BC,this.FC=this.zn,this.zC=this.jC,this.BC=this.HC,this.WC(!0,!1,null)}acceptCancel(){this.WV=!1}WC(t,s,i){this.XC=Date.now();const h=this.XC-this.FC;if(!s&&h>4||s&&h>16){const t=At(this.jC-this.YC,h,this.GC),i=At(this.HC-this.$C,h,this.LC);(!s||h>32||0!=t||0!=i)&&(this.GC=Math.abs(t)>1e-4?t:0,this.LC=Math.abs(i)>1e-4?i:0),this.YC=this.jC,this.$C=this.HC,this.FC=this.XC}this.signalEmit({first:t,last:s,time:this.XC,deltaX:this.jC-this.zC,deltaY:this.HC-this.BC,startX:this.zC,startY:this.BC,lastX:this.jC,lastY:this.HC,velocityX:this.GC,velocityY:this.LC},i)}UC(t){this.WV&&(this.WV=!1,this.WC(!1,!0,t),this.signalEnd())}},mt=class extends pt{constructor(t){super("swipe-xy",t,!0,!0)}},Et=class extends lt{constructor(t){super("pinch",t),this.WV=!1,this.jD=0,this.WD=0,this.qD=0,this.JD=0,this.KD=0,this.QD=0,this.tX=0,this.sX=0,this.iX=0,this.hX=0,this.nX=0,this.eX=0,this.zn=0,this.XC=0,this.FC=0,this.GC=0,this.LC=0}onTouchStart(t){const{touches:s}=t;return!!s&&(1==s.length||!!(this.WV&&s.length>2)||2==s.length&&(this.zn=Date.now(),this.jD=s[0].clientX,this.WD=s[0].clientY,this.qD=s[1].clientX,this.JD=s[1].clientY,!0))}onTouchMove(t){const{touches:s}=t;return!(!s||0==s.length||1!=s.length&&(this.KD=s[0].clientX,this.QD=s[0].clientY,this.tX=s[1].clientX,this.sX=s[1].clientY,this.WV?(this.WC(!1,!1,t),0):this.oX()||(this.rX()&&this.signalReady(0),0)))}rX(){const t=this.KD-this.jD,s=this.QD-this.WD,i=this.tX-this.qD,h=this.sX-this.JD,n=t*i<=0&&s*h<=0,e=Math.abs(t-i)>=4,o=Math.abs(s-h)>=4;return n&&(e||o)}oX(){const t=this.KD-this.jD,s=this.QD-this.WD,i=this.tX-this.qD,h=this.sX-this.JD,n=t*i>0||s*h>0,e=Math.abs(t+i)>=10,o=Math.abs(s+h)>=10;return n&&(e||o)}onTouchEnd(t){const{touches:s}=t;s&&s.length<2&&this.UC(t)}acceptStart(){this.WV=!0,this.FC=this.zn,this.iX=0,this.hX=0,this.nX=.5*(this.jD+this.qD),this.eX=.5*(this.WD+this.JD),this.WC(!0,!1,null)}acceptCancel(){this.WV=!1}WC(t,s,i){this.XC=Date.now();const h=this.XC-this.FC,n=this.cX(),e=this.uX();(!s&&h>4||s&&h>16)&&(this.GC=At(n-this.iX,h,this.GC),this.LC=At(e-this.hX,h,this.LC),this.GC=Math.abs(this.GC)>1e-4?this.GC:0,this.LC=Math.abs(this.LC)>1e-4?this.LC:0,this.iX=n,this.hX=e,this.FC=this.XC);const o=this.aX(this.jD,this.qD,this.WD,this.JD),r=this.aX(this.KD,this.tX,this.QD,this.sX)-o;this.signalEmit({first:t,last:s,time:this.XC,centerClientX:this.nX,centerClientY:this.eX,dir:Math.sign(r),distance:r,deltaX:.5*n,deltaY:.5*e,velocityX:.5*this.GC,velocityY:.5*this.LC},i)}UC(t){this.WV&&(this.WV=!1,this.WC(!1,!0,t),this.signalEnd())}aX(t,s,i,h){const n=t-s,e=i-h;return Math.sqrt(n*n+e*e)}cX(){return Math.abs(this.KD-this.jD-(this.tX-this.qD))}uX(){return Math.abs(this.QD-this.WD-(this.sX-this.JD))}},Tt=['<div class="amp-pan-zoom-in-icon amp-pan-zoom-button"></div>'],vt=u(.4,0,.2,1.4),Rt="amp-pan-zoom",gt=new Set(["svg","DIV","AMP-IMG","AMP-LAYOUT","AMP-SELECTOR","IMG"]),It=class extends t.BaseElement{constructor(t){super(t),this.nN=null,this.tc=null,this.MD=0,this.PD=0,this.lX=null,this._X=null,this.fX=null,this.bD=1,this.TD=1,this.RD=1,this.VD=3,this.PX=0,this.AX=0,this.MX=1,this.zC=0,this.BC=0,this.wD=0,this.yD=0,this.xD=0,this.SD=0,this.DD=0,this.kD=0,this.dX=null,this.CD=null,this.pX=!1,this.mX=null,this.EX=!1,this.TX=null,this.vX=null,this.RX=null,this.gX=0,this.IX=0,this.QR=this.QR.bind(this)}buildCallback(){this.tc=function(t,s){const i=F(W(t));return J(i,s)?q(i,s):null}(this.element,"action");const t=function(t,s){const i=[];for(let s=t.firstElementChild;s;s=s.nextElementSibling)!(function(t){let s;var i;return e(t)?s=t:1==(null==(i=t)?void 0:i.nodeType)&&(s=t.tagName),!!s&&s.toLowerCase().startsWith("i-")}(h=s)||h.nodeType===Node.ELEMENT_NODE&&(h.hasAttribute("placeholder")||h.hasAttribute("fallback")||h.hasAttribute("overflow")))&&i.push(s);var h;return i}(this.element);L(1==t.length,"%s should have its target element as its one and only child",Rt),L(gt.has(t[0].tagName),"%s is not supported by %s",t[0].tagName,Rt),this.element.classList.add("i-amphtml-pan-zoom"),this.nN=t[0],this.nN.classList.add("i-amphtml-pan-zoom-child"),this.VD=this.VX("max-scale",3),this.MX=this.VX("initial-scale",1),this.PX=this.VX("initial-x",0),this.AX=this.VX("initial-y",0),this.pX=this.element.hasAttribute("reset-on-resize"),this.EX=this.element.hasAttribute("disable-double-tap"),this.registerAction("transform",(t=>{const{args:s}=t;if(!s)return;const i=s.scale||1,h=s.x||0,n=s.y||0;return this.transform(h,n,i)}))}transform(t,s,i){this.OD(i);const h=this.UD(t,!1),n=this.GD(s,!1);return this.FD(i,h,n,!0).then((()=>this.LD()))}layoutCallback(){return this.bX(),tt(this.element).scheduleLayout(this.element,this.nN),this.wX().then(this.yX())}pauseCallback(){this.xX()}resumeCallback(){this.nN&&tt(this.element).scheduleLayout(this.element,this.nN),this.yX()}unlayoutCallback(){return this.xX(),!0}isLayoutSupported(t){return"fixed"==t||"fixed-height"==t||"fill"==t||"responsive"==t}QR(){this.pX&&this.wX()}bX(){this.mX=function(t){const s=t.ownerDocument||t;return y&&y.ownerDocument===s||(y=s.createElement("div")),Y}(this.element)(Tt),this.mX.addEventListener("click",(()=>{this.mX.classList.contains("amp-pan-zoom-in-icon")?(this.transform(0,0,this.VD),this.zX()):(this.transform(0,0,this.RD),this.SX())})),this.element.appendChild(this.mX)}VX(t,s){const{element:i}=this;return i.hasAttribute(t)?parseInt(i.getAttribute(t),10):s}kX(t){const s=this.lX.width/t,i=this.lX.height*t;let h=Math.min(s,this.lX.height),n=Math.min(i,this.lX.width);Math.abs(n-this.MD)<=16&&Math.abs(h-this.PD)<=16&&(n=this.MD,h=this.PD),this._X=d(0,0,Math.round(n),Math.round(h))}CX(t){const{height:s,width:i}=this.lX,h=i/s,n=Math.max(h/t,t/h);isNaN(n)||(this.VD=Math.max(this.VD,n))}sR(){this.MD=this.nN.scrollWidth,this.PD=this.nN.scrollHeight;const t=this.MD/this.PD;this.lX=this.getViewport().getLayoutRect(this.element),this.kX(t),this.CX(t),this.TD=this.bD=this.MX,this.zC=this.wD=this.PX,this.BC=this.yD=this.AX}wX(){return this.mutateElement((()=>this.DX())).then((()=>this.measureMutateElement((()=>this.sR()),(()=>this.XX()),this.nN))).then((()=>(this.YX(),this.OD(this.bD),this.YD())))}YX(){const t=(s=this.nN.getBoundingClientRect(),d(Number(s.left),Number(s.top),Number(s.width),Number(s.height)));var s;this._X.top=t.top-this.lX.top,this._X.left=t.left-this.lX.left}XX(){I(this.nN,{width:V(this._X.width),height:V(this._X.height)})}DX(){I(this.nN,{width:"",height:""})}OX(t){const{left:s}=this.lX;return t-(s-this.getViewport().getScrollLeft())}NX(t){const{top:s}=this.lX;return t-(s-this.getViewport().getScrollTop())}yX(){this.Nj(),this.TX=rt(this.element,"mousedown",(t=>this.Uh(t))),function(t,s,i){const h=t.ownerDocument.defaultView;if(!h)return;let n=S.get(t);if(n||(n=[],S.set(t,n),C(h).observe(t)),!n.some((t=>t.callback===i&&0===t.type))){n.push({type:0,callback:i});const s=k.get(t);s&&setTimeout((()=>X(0,i,s)))}}(this.element,0,this.QR)}Mb(t){t&&(t(),t=null)}xX(){this.ZX(),this.Mb(this.TX),this.Mb(this.RX),this.Mb(this.vX),function(t,s,i){const h=S.get(t);if(h&&(function(t,s){const h=[];let n=0;for(let s=0;s<t.length;s++){const o=t[s];(e=o).callback===i&&0===e.type?h.push(o):(n<s&&(t[n]=o),n++)}var e;n<t.length&&(t.length=n)}(h),0==h.length)){S.delete(t),k.delete(t);const s=t.ownerDocument.defaultView;s&&C(s).unobserve(t)}}(this.element,0,this.QR)}Uh(t){if(2==t.button)return;t.preventDefault();const{clientX:s,clientY:i}=t;this.Mb(this.RX),this.Mb(this.vX),this.IX=s,this.gX=i,this.RX=rt(this.element,"mousemove",(t=>this.Yh(t))),this.vX=rt(this.win,"mouseup",(t=>this.GX(t)))}Yh(t){t.preventDefault();const{clientX:s,clientY:i}=t,h=s-this.IX,n=i-this.gX;this.zD(h,n,!1)}GX(t){t.preventDefault(),this.HD(),this.Mb(this.RX),this.Mb(this.vX)}ZX(){this.dX&&(this.dX.cleanup(),this.dX=null)}Nj(){this.dX||(this.dX=at.get(this.element),this.dX.onPointerDown((()=>{this.CD&&this.CD.halt()})),this.dX.onGesture(Et,(t=>this.handlePinch(t.data))),this.EX||(this.dX.onGesture(dt,(t=>this.handleDoubleTap(t.data))),this.dX.onGesture(Mt,(t=>this.jX(t.data)))))}handleDoubleTap(t){const{clientX:s,clientY:i}=t;return this.$X(s,i).then((()=>this.LD()))}handlePinch(t){const{centerClientX:s,centerClientY:i,deltaX:h,deltaY:n,dir:e,last:o}=t;return this.BX(s,i,h,n,e).then((()=>{if(o)return this.LD()}))}handleSwipe(t){const{deltaX:s,deltaY:i,last:h,velocityX:n,velocityY:e}=t;return this.zD(s,i,!1).then((()=>{if(h)return this.$D(n,e)}))}jX(t){const s=ot(this.win,"click",null,{bubbles:!0});t.target.dispatchEvent(s)}HX(){this.fX=this.dX.onGesture(mt,(t=>this.handleSwipe(t.data)))}LX(){this.fX&&(this.fX(),this.fX=null,this.dX.removeGesture(mt))}BD(t,s){const i=s?.25:0;return N(t,this.RD,this.VD,i)}UD(t,s){const i=.25*this.lX.width,h=s&&this.bD>1?i:0;return N(t,this.xD,this.DD,h)}GD(t,s){const i=.25*this.lX.height,h=s&&this.bD>1?i:0;return N(t,this.SD,this.kD,h)}OD(t){const{height:s,left:i,top:h,width:n}=this._X,{height:e,width:o}=this.lX;this.xD=Math.min(0,o-(i+n*(t+1)/2)),this.DD=Math.max(0,(n*t-n)/2-i),this.SD=Math.min(0,e-(h+s*(t+1)/2)),this.kD=Math.max(0,(s*t-s)/2-h)}YD(){const{nN:t,wD:s,yD:i,bD:h}=this;return this.mutateElement((()=>{var n;I(t,{transform:w(s,i)+" "+(n=h,`scale(${n})`)})}),t)}UX(t,s,i){const h=ot(this.win,`${Rt}.transformEnd`,{"scale":t,"x":s,"y":i});this.tc.trigger(this.element,"transformEnd",h,3),function(t,s,i,h){c(t.ownerDocument);const n=t.ownerDocument.createEvent("Event");n.data={};const{bubbles:e,cancelable:o}=M;n.initEvent("transformEnd",e,o),t.dispatchEvent(n)}(this.element)}zD(t,s,i){const h=this.UD(this.zC+t,!0),n=this.GD(this.BC+s,!0);return this.FD(this.bD,h,n,i)}$D(t,s){return this.CD=function(t,s,i,n,e,o,r){return new class{constructor(t,s,i,n,e,o,r){this.ar=r||st(self),this.cr=t,this.$=o,this.jC=s,this.HC=i,this.tD=n,this.iD=e,this.GC=0,this.LC=0;const c=new h;this._r=c.promise,this.te=c.resolve,this.Ar=c.reject,this.sD=!1}start(){return this.sD=!0,Math.abs(this.tD)<=ft&&Math.abs(this.iD)<=ft?(this.hD(),this.nD(!0)):this.eD(),this}halt(){this.sD&&this.nD(!1)}then(t,s){return t||s?this._r.then(t,s):this._r}thenAlways(t){const s=t||_t;return this.then(s,s)}eD(){this.GC=this.tD,this.LC=this.iD;const t=this.rD.bind(this),s=this.nD.bind(this,!0);return this.ar.runAnimMutateSeries(this.cr,t,5e3).then(s,s)}rD(t,s){if(!this.sD)return!1;if(this.jC+=s*this.GC,this.HC+=s*this.LC,!this.hD())return!1;const i=Math.exp(-t/Pt);return this.GC=this.tD*i,this.LC=this.iD*i,Math.abs(this.GC)>ft||Math.abs(this.LC)>ft}nD(t){this.sD&&(this.sD=!1,this.hD(),t?this.te():this.Ar())}hD(){return this.$(this.jC,this.HC)}}(t,s,i,n,e,o,void 0).start()}(this.nN,this.wD,this.yD,t,s,((t,s)=>{const i=this.UD(t,!0),h=this.GD(s,!0);return!(Math.abs(i-this.wD)<1&&Math.abs(h-this.yD)<1||(this.FD(this.bD,i,h,!1),0))})),this.CD.thenAlways((()=>(this.CD=null,this.HD())))}$X(t,s){const i=this.bD==this.RD?this.VD:this.RD,h=this.lX.width/2-this.OX(t),n=this.lX.height/2-this.NX(s);return this.ZD(i,h,n,!0)}BX(t,s,h,n,e){if(0==e)return i();const{height:o,width:r}=this.lX,c=Z(h,n),u=this.TD*(1+e*c/100),a=r/2-this.OX(t),l=o/2-this.NX(s),_=Math.min(c/100,1)*a,f=Math.min(c/100,1)*l;return this.ZD(u,_,f,!1)}ZD(t,s,h,n){const e=this.BD(t,!0);if(e==this.bD)return i();this.OD(e);const o=this.UD(this.zC+s*e,!1),r=this.GD(this.BC+h*e,!1);return this.FD(e,o,r,n)}SX(){this.mX&&(this.mX.classList.add("amp-pan-zoom-in-icon"),this.mX.classList.remove("amp-pan-zoom-out-icon"))}zX(){this.mX&&(this.mX.classList.remove("amp-pan-zoom-in-icon"),this.mX.classList.add("amp-pan-zoom-out-icon"))}LD(){return this.HD().then((()=>{this.bD<=this.RD?(this.LX(),this.SX(),this.nN.classList.remove("i-amphtml-pan-zoom-scrollable")):(this.HX(),this.zX(),this.nN.classList.add("i-amphtml-pan-zoom-scrollable"))}))}FD(t,s,i,h){const n=t-this.bD,e=(o=this.wD,r=this.yD,Z(s-o,i-r));var o,r;const c=h?250*Math.min(1,Math.max(.01*e,Math.abs(n))):0;if(c>16&&h){const h=O(this.bD,t),n=O(this.wD,s),e=O(this.yD,i);return nt.animate(this.nN,(t=>{this.bD=h(t),this.wD=n(t),this.yD=e(t),this.YD()}),c,vt).thenAlways((()=>{this.bD=t,this.wD=s,this.yD=i,this.YD()}))}return this.bD=t,this.wD=s,this.yD=i,this.YD()}HD(){const t=this.BD(this.bD,!1);t!=this.bD&&this.OD(t);const s=this.UD(this.wD/this.bD*t,!1),i=this.GD(this.yD/this.bD*t,!1);return this.FD(t,s,i,!0).then((()=>{this.TD=this.bD,this.zC=this.wD,this.BC=this.yD,this.UX(this.bD,this.wD,this.yD)}))}};t.registerElement(Rt,It,'.i-amphtml-pan-zoom{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.i-amphtml-pan-zoom-child{position:absolute}.i-amphtml-pan-zoom-scrollable{cursor:all-scroll}.amp-pan-zoom-button{position:absolute;right:12px;width:36px;height:36px;bottom:12px;background-repeat:no-repeat;background-position:50%;box-shadow:1px 1px 2px;background-color:#fff;border-radius:3px}.amp-pan-zoom-in-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')}.amp-pan-zoom-out-icon{background-image:url(\'data:image/svg+xml;charset=utf-8,<svg height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13H5v-2h14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\')}\n/*# sourceURL=/extensions/amp-pan-zoom/0.1/amp-pan-zoom.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-pan-zoom-0.1.mjs.map