;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-lightbox",ev:"0.1",l:!0,f:function(t,i){(()=>{var i,{isArray:s}=Array,{hasOwnProperty:n,toString:h}=Object.prototype;function e(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function o(t,i,s,n,h,e,o,r,l,a,c){return t}function r(t){return(t.ownerDocument||t).defaultView}function l(t){try{t.focus()}catch(t){}}function a(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:s,stack:n}=t,h=new Error(s);for(const i in t)h[i]=t[i];return h.stack=n,h}function c(t){let i=null,s="";for(const t of arguments)t instanceof Error&&!i?i=a(t):(s&&(s+=" "),s+=t);return i?s&&(i.message=s+": "+i.message):i=new Error(s),i}function u(t){var i,s;null===(i=(s=self).__AMP_REPORT_ERROR)||void 0===i||i.call(s,t)}function f(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=c.apply(null,arguments);setTimeout((()=>{throw u(i),i}))}(t)}}var d,m,p="i-amphtml-element",_=t=>t.unmount();function P(t,i,s,n){if(i&&t.classList.contains(p)){const i=t;if(f(n,i),!s){const t=i.getPlaceholder();return void(t&&P(t,!0,!1,n))}}const h=t.getElementsByClassName(p);let e=null;for(let t=0;t<h.length;t++){const i=h[t];if(s)f(n,i);else{e=e||[];let t=!1;for(let s=0;s<e.length;s++)if(e[s].contains(i)){t=!0;break}t||(e.push(i),f(n,i))}}}function A(t){return function(t,i){o(1===i.length),t.innerHTML=i[0];const s=t.firstElementChild;return o(s),o(!s.nextElementSibling),t.removeChild(s),s}(d,t)}var v=["Webkit","webkit","Moz","moz","ms","O","o"],g={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function b(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return v.some((t=>i.startsWith(t+"-")))?`-${i}`:i}function E(t,i,s){if(i.startsWith("--"))return i;m||(m=e());let n=m[i];if(!n||s){if(n=i,void 0===t[i]){const s=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),h=function(t,i){for(let s=0;s<v.length;s++){const n=v[s]+i;if(void 0!==t[n])return n}return""}(t,s);void 0!==t[h]&&(n=h)}s||(m[i]=n)}return n}function M(t,i){const{style:s}=t;for(const t in i)s.setProperty(b(E(s,t)),String(i[t]),"important")}function T(t,i,s,n,h){const e=E(t.style,i,h);if(!e)return;const o=n?s+n:s;t.style.setProperty(b(e),o)}function y(t,i){for(const s in i)T(t,s,i[s])}function I(t){return`${t}px`}function R(t){return"display"in t&&function(t,...i){const s=c.apply(null,i);s.name=t||s.name,u(s)}("STYLE","`display` style detected. You must use toggle instead."),t}var V=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function w(t,i=""){try{return decodeURIComponent(t)}catch(t){return i}}function x(t){const{location:i}=t||self;return function(t){const i=e();if(!t)return i;let s;for(;s=V.exec(t);){const t=w(s[1],s[1]),n=s[2]?w(s[2].replace(/\+/g," "),s[2]):"";i[t]=n}return i}(i.originalHash||i.hash)}var k="";function C(t){const i=t||self;return i.__AMP_MODE?i.__AMP_MODE:i.__AMP_MODE=function(t){return{localDev:!1,development:O(t,x(t)),esm:!0,test:!1,rtvVersion:S(t)}}(i)}function S(t){var i;return k||(k=(null===(i=t.AMP_CONFIG)||void 0===i?void 0:i.v)||"012205120110001"),k}function O(t,i){const s=i||x(t);return["1","actions","amp","amp4ads","amp4email"].includes(s.development)||!!t.AMP_DEV_MODE}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var D=self.__AMP_LOG;function z(t,i){throw new Error("failed to call initLogConstructor")}function B(t){return z()}function j(t,i,s,n,h,e,o,r,l,a,c){return t}function H(t,i){return F(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function Y(t,i){return F(X($(t)),i)}function $(t){return t.nodeType?(i=r(t),H(i,"ampdoc")).getAmpDoc(t):t;var i}function X(t){const i=$(t);return i.isSingleDoc()?i.win:i}function F(t,i){j(G(t,i));const s=function(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return s.obj||(j(s.ctor),j(s.context),s.obj=new s.ctor(s.context),j(s.obj),s.context=null,s.resolve&&s.resolve(s.obj)),s.obj}function G(t,i){const s=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!s||!s.ctor)}var L,W=t=>Y(t,"owners"),U=t=>F(t,"timer"),N=class{constructor(){this.St=null}add(t){return this.St||(this.St=[]),this.St.push(t),()=>{this.remove(t)}}remove(t){this.St&&function(t,i){const s=t.indexOf(i);-1!=s&&t.splice(s,1)}(this.St,t)}removeAll(){this.St&&(this.St.length=0)}fire(t){if(this.St)for(const i of this.St.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.St)||void 0===i?void 0:i.length)&&void 0!==t?t:0}},Z="__AMP_Gestures",q=class{static get(t,i=!1,s=!1){let n=t[Z];return n||(n=new q(t,i,s),t[Z]=n),n}constructor(t,i=!1,s=!1){this._f=t,this.HV=[],this.t_=[],this.ci=[],this.XV=[],this.WV=null;const n=function(t){if(void 0!==L)return L;L=!1;try{const i={get passive(){return L=!0,!1}};t.addEventListener("test-options",null,i),t.removeEventListener("test-options",null,i)}catch(t){}return L}(t.ownerDocument.defaultView);this.UV=i||n,this.JV=s,this.QV=!1,this.Se=new class{constructor(t,i,s){this.Ie=U(t),this.Me=i,this.Re=s||0,this.ye=-1,this.we=0,this.be=!1,this.Ve=()=>{this.Se()}}isPending(){return-1!=this.ye}schedule(t){let i=t||this.Re;this.be&&i<10&&(i=10);const s=Date.now()+i;return(!this.isPending()||s-this.we<-10)&&(this.cancel(),this.we=s,this.ye=this.Ie.delay(this.Ve,i),!0)}Se(){this.ye=-1,this.we=0,this.be=!0,this.Me(),this.be=!1}cancel(){this.isPending()&&(this.Ie.cancel(this.ye),this.ye=-1)}}(r(t),this.Nd.bind(this)),this.tC=new N,this.iC=Object.create(null),this.sC=this.Jp.bind(this),this.nC=this.Qp.bind(this),this.hC=this.Wp.bind(this),this.eC=this.h_.bind(this),this._f.addEventListener("touchstart",this.sC,!!n&&{passive:!0}),this._f.addEventListener("touchend",this.nC),this._f.addEventListener("touchmove",this.hC,!!n&&{passive:!0}),this._f.addEventListener("touchcancel",this.eC),this.oC=!1}cleanup(){this._f.removeEventListener("touchstart",this.sC),this._f.removeEventListener("touchend",this.nC),this._f.removeEventListener("touchmove",this.hC),this._f.removeEventListener("touchcancel",this.eC),delete this._f[Z],this.Se.cancel()}onGesture(t,i){const s=new t(this),n=s.getType();let h=this.iC[n];return h||(this.HV.push(s),h=new N,this.iC[n]=h),h.add(i)}removeGesture(t){const i=new t(this).getType(),s=this.iC[i];if(s){s.removeAll();const t=function(t,s){for(let s=0;s<t.length;s++)if(t[s].getType()==i)return s;return-1}(this.HV);return!(t<0||(this.HV.splice(t,1),this.ci.splice(t,1),this.XV.splice(t,1),this.t_.splice(t,1),delete this.iC[i],0))}return!1}onPointerDown(t){return this.tC.add(t)}Jp(t){const i=Date.now();this.QV=!1,this.tC.fire(t);for(let s=0;s<this.HV.length;s++)this.ci[s]||(this.XV[s]&&this.XV[s]<i&&this.o_(s),this.HV[s].onTouchStart(t)&&this.u_(s));this.rC(t)}Wp(t){const i=Date.now();for(let s=0;s<this.HV.length;s++)this.t_[s]&&(this.XV[s]&&this.XV[s]<i?this.o_(s):this.HV[s].onTouchMove(t)||this.o_(s));this.rC(t)}Qp(t){const i=Date.now();for(let s=0;s<this.HV.length;s++){if(!this.t_[s])continue;if(this.XV[s]&&this.XV[s]<i){this.o_(s);continue}this.HV[s].onTouchEnd(t);const n=!this.XV[s],h=this.XV[s]<i;this.WV==this.HV[s]||!n&&!h||this.o_(s)}this.rC(t)}h_(t){for(let t=0;t<this.HV.length;t++)this.lC(t);this.rC(t)}Hp(t,i){if(this.WV)return void t.acceptCancel();const s=Date.now();for(let n=0;n<this.HV.length;n++)this.HV[n]==t&&(this.ci[n]=s+i,this.XV[n]=0);this.oC=!0}aC(t,i){if(this.WV)return void t.acceptCancel();const s=Date.now();for(let n=0;n<this.HV.length;n++)this.HV[n]==t&&(this.XV[n]=s+i)}cC(t){this.WV==t&&(this.WV=null,this.QV=!0)}uC(t,i,s){o(this.WV==t);const n=this.iC[t.getType()];n&&n.fire(new class{constructor(t,i,s,n){this.type=t,this.data=i,this.time=s,this.event=n}}(t.getType(),i,Date.now(),s))}rC(t){let i=!!this.WV||this.QV;if(this.QV=!1,!i){const t=Date.now();for(let s=0;s<this.HV.length;s++)if(this.ci[s]||this.XV[s]&&this.XV[s]>=t){i=!0;break}}i?(t.stopPropagation(),this.UV||t.preventDefault()):this.JV&&t.stopPropagation(),this.oC&&(this.oC=!1,this.Nd())}Nd(){const t=Date.now();let i=-1;for(let s=0;s<this.HV.length;s++)this.ci[s]?(-1==i||this.ci[s]>this.ci[i])&&(i=s):this.XV[s]&&this.XV[s]<t&&this.o_(s);if(-1==i)return;let s=0;for(let i=0;i<this.HV.length;i++)!this.ci[i]&&this.t_[i]&&(s=Math.max(s,this.XV[i]-t));s<2?this.fC(i):this.Se.schedule(s)}fC(t){const i=this.HV[t];for(let i=0;i<this.HV.length;i++)i!=t&&this.lC(i);this.ci[t]=0,this.XV[t]=0,this.WV=i,i.acceptStart()}u_(t){this.t_[t]=!0,this.XV[t]=0}o_(t){this.t_[t]=!1,this.XV[t]=0,this.ci[t]||this.HV[t].acceptCancel()}lC(t){this.ci[t]=0,this.o_(t)}};function J(t,i,s){i<1&&(i=1);const n=t/i,h=.5+Math.min(i/33.34,.5);return n*h+s*(1-h)}function K(t){return t.classList.contains("i-amphtml-fie")||!!function(t,i){return t.closest(".i-amphtml-fie")}(t)}Math.round(-16.67/Math.log(.95)),new Set(["c","v","a","ad"]);var Q=['<i-amphtml-ad-close-header role=button tabindex=0 aria-label="Close Ad"><div>Ad</div><i-amphtml-ad-close-button class=amp-ad-close-button></i-amphtml-ad-close-button></i-amphtml-ad-close-header>'],tt="amp-lightbox",it={"fade-in":{openStyle:{"opacity":1},closedStyle:{"opacity":0},durationSeconds:.1},"fly-in-bottom":{openStyle:{"transform":"translate(0, 0)"},closedStyle:{"transform":"translate(0, 100%)"},durationSeconds:.2},"fly-in-top":{openStyle:{"transform":"translate(0, 0)"},closedStyle:{"transform":"translate(0, -100%)"},durationSeconds:.2}},st=class extends t.BaseElement{constructor(t){super(t),this.Dr=null,this.hf=null,this.Zh=this.win.document,this.tc=null,this.dC=null,this.mC=!1,this.pC=null,this._C=null,this.PC=null,this.AC=null,this.vC=!1,this.gC=0,this.bC=0,this.EC=null,this.MC=(t.getAttribute("animate-in")||"fade-in").toLowerCase(),this.TC=null,this.yC=null,this.IC=null;const i=H(this.win,"platform");this.RC=i.isIos(),this.VC=function(t,i,s){let n=0,h=0,e=null;function o(){n=0;const s=500-(t.Date.now()-h);var r;s>0?n=t.setTimeout(o,s):(r=e,e=null,i.apply(null,r))}return function(...i){h=t.Date.now(),e=i,n||(n=t.setTimeout(o,500))}}(this.win,(()=>{const t=(D.user||(D.user=B()),function(t,i){return i}(D.user.win,undefined)?D.userForEmbed||(D.userForEmbed=B()):D.user).assertElement(this.hf,"E#19457 this.container_"),i=W(this.element);i.scheduleLayout(this.element,t),i.scheduleResume(this.element,t)}))}buildCallback(){var t,i;this.user().assert((t=it,i=this.MC,n.call(t,i)),"Invalid `animate-in` value %s",this.MC),this.element.classList.add("i-amphtml-overlay"),this.tc=function(t,i){const s=X($(t));return G(s,i)?F(s,i):null}(this.element,"action"),this.wC(),this.registerDefaultAction((t=>this.HT(t.trust,t.caller)),"open"),this.registerAction("close",(t=>this.close(t.trust))),this.tc.addToAllowlist("AMP-LIGHTBOX",["open","close"],["email"])}xC(){j(this.vC),this.kC().forEach((t=>{W(this.element).setOwner(t,this.element)}))}kC(){return(t=this.element.getElementsByClassName("i-amphtml-element"))?Array.prototype.slice.call(t):[];var t}pe(){if(this.hf)return;const{element:t}=this;this.vC=t.hasAttribute("scrollable");const i=function(t){return function(t,i){const s=[];for(let i=t.firstElementChild;i;i=i.nextElementSibling)!(function(t){let i;var s;return"string"==typeof t?i=t:1==(null==(s=t)?void 0:s.nodeType)&&(i=t.tagName),!!i&&i.toLowerCase().startsWith("i-")}(n=i)||n.nodeType===Node.ELEMENT_NODE&&(n.hasAttribute("placeholder")||n.hasAttribute("fallback")||n.hasAttribute("overflow")))&&s.push(i);var n;return s}(t)}(this.element);this.hf=t.ownerDocument.createElement("div"),this.vC||function(t,i){t.classList.add("i-amphtml-fill-content")}(this.hf),t.appendChild(this.hf),i.forEach((t=>{this.hf.appendChild(t)})),this.vC&&(this.xC(),t.classList.add("i-amphtml-scrollable"),t.addEventListener("amp:dom-update",(()=>{this.xC(),this.CC(this.gC)})),t.addEventListener("scroll",this.op.bind(this))),this.vC||q.get(t).onGesture(class extends class extends class{constructor(t,i){this.SC=t,this.x_=i}getType(){return this.SC}signalReady(t){this.x_.Hp(this,t)}signalPending(t){this.x_.aC(this,t)}signalEnd(){this.x_.cC(this)}signalEmit(t,i){this.x_.uC(this,t,i)}acceptStart(){}acceptCancel(){}onTouchStart(t){return!1}onTouchMove(t){return!1}onTouchEnd(t){}}{constructor(t,i,s,n){super(t,i),this.OC=s,this.DC=n,this.WV=!1,this.zC=0,this.BC=0,this.jC=0,this.HC=0,this.YC=0,this.$C=0,this.zn=0,this.XC=0,this.FC=0,this.GC=0,this.LC=0}onTouchStart(t){const{touches:i}=t;return!!(this.WV&&i&&i.length>1)||!(!i||1!=i.length)&&(this.zn=Date.now(),this.zC=i[0].clientX,this.BC=i[0].clientY,!0)}onTouchMove(t){const{touches:i}=t;if(i&&i.length>=1){const{clientX:s,clientY:n}=i[0];if(this.jC=s,this.HC=n,this.WV)this.WC(!1,!1,t);else{const t=Math.abs(s-this.zC),i=Math.abs(n-this.BC);if(this.OC&&this.DC)(t>=8||i>=8)&&this.signalReady(-10);else if(this.OC){if(t>=8&&t>i)this.signalReady(-10);else if(i>=8)return!1}else{if(!this.DC)return!1;if(i>=8&&i>t)this.signalReady(-10);else if(t>=8)return!1}}return!0}return!1}onTouchEnd(t){const{touches:i}=t;i&&0==i.length&&this.UC(t)}acceptStart(){this.WV=!0,this.YC=this.zC,this.$C=this.BC,this.FC=this.zn,this.zC=this.jC,this.BC=this.HC,this.WC(!0,!1,null)}acceptCancel(){this.WV=!1}WC(t,i,s){this.XC=Date.now();const n=this.XC-this.FC;if(!i&&n>4||i&&n>16){const t=J(this.jC-this.YC,n,this.GC),s=J(this.HC-this.$C,n,this.LC);(!i||n>32||0!=t||0!=s)&&(this.GC=Math.abs(t)>1e-4?t:0,this.LC=Math.abs(s)>1e-4?s:0),this.YC=this.jC,this.$C=this.HC,this.FC=this.XC}this.signalEmit({first:t,last:i,time:this.XC,deltaX:this.jC-this.zC,deltaY:this.HC-this.BC,startX:this.zC,startY:this.BC,lastX:this.jC,lastY:this.HC,velocityX:this.GC,velocityY:this.LC},s)}UC(t){this.WV&&(this.WV=!1,this.WC(!1,!0,t),this.signalEnd())}}{constructor(t){super("swipe-xy",t,!0,!0)}},(()=>{})),this.NC()}layoutCallback(){return i||(i=Promise.resolve(void 0))}HT(t,i){if(this.mC)return;this.pe(),this._C=this.ZC.bind(this),this.Zh.documentElement.addEventListener("focusin",this._C),i&&(this.AC=i);const{promise:s,resolve:n}=new class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}};return this.getViewport().enterLightboxMode(this.element,s).then((()=>this.qC(n,t)))}mutatedAttributesCallback(t){const i=t.open;void 0!==i&&(i?this.HT(2,document.activeElement):this.close(2))}JC(){const t=this.hf.querySelector("[autofocus]");t&&l(t)}qC(t,i){const{element:s}=this,{closedStyle:n,durationSeconds:h,openStyle:e}=this.KC(),o=Object.keys(e).map((t=>`${t} ${h}s ease-in`)).join(",");this.bC++,this.vC&&T(s,"webkitOverflowScrolling","touch"),T(s,"transition",o),y(s,R(n)),function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(s,!0),this.mutateElement((()=>{s.scrollTop=0})),this.JC(),this.mutateElement((()=>{y(s,R(e))}));const r=this.hf;this.vC&&(this.op(),this.CC(this.gC));const l=()=>{this.VC(),t()};s.addEventListener("transitionend",l),s.addEventListener("animationend",l),this.setAsContainer();const a=W(this.element);a.scheduleLayout(this.element,r),a.scheduleResume(this.element,r),this.aO("lightboxOpen",i),this.dC=new class{constructor(t,i){const{win:s}=t;if(this.i=s,this.Me=i,this.QC=null,this.vn=null,this.sS=-1,this.hS=null,"function"==typeof s.CloseWatcher)try{this.QC=new s.CloseWatcher}catch(t){(D.dev||(D.dev=z())).error("CloseWatcherImpl","CloseWatcher failed:",t)}this.QC?this.QC.onclose=()=>{i(),this.destroy()}:(this.vn=Y(t,"history"),this.vn.push((()=>i())).then((t=>{this.sS=t})),this.hS=this.oS.bind(this),s.document.documentElement.addEventListener("keydown",this.hS))}signalClosed(){this.QC?this.QC.signalClosed():this.Me&&((0,this.Me)(),this.destroy())}destroy(){this.Me=null,this.QC?(this.QC.destroy(),this.QC=null):-1!=this.sS&&(j(this.vn).pop(this.sS),this.sS=-1,this.vn=null,this.i.document.documentElement.removeEventListener("keydown",this.hS))}oS(t){"Escape"==t.key&&(t.preventDefault(),this.signalClosed())}}(this.getAmpDoc(),(()=>this.close(3))),this.lS(),this.aS(),this.cS(),this.mC=!0}NC(){const{element:t}=this;null!=t.getAttribute("close-button")&&(this.TC=function(t){const i=t.ownerDocument||t;return d&&d.ownerDocument===i||(d=i.createElement("div")),A}(t)(Q),t.insertBefore(this.TC,this.hf))}lS(){if(!this.TC)return;let t;this.pC=this.uS.bind(this),this.TC.addEventListener("keydown",this.pC),this.measureMutateElement((()=>{t=this.TC.getBoundingClientRect().height}),(()=>{this.fS(),M(this.hf,{"margin-top":I(t),"min-height":`calc(100vh - ${I(t)})`})}))}fS(){this.TC.classList.add("amp-ad-close-header")}cS(){(this.IC||this.TC)&&(this.PC=this.dS.bind(this),this.yC.addEventListener("click",this.PC))}mS(){(this.IC||this.TC)&&(this.yC.removeEventListener("click",this.PC),this.PC=null,this.TC&&(this.TC.removeEventListener("keydown",this.pC),this.pC=null))}KC(){return it[this.MC]}dS(){this.close(3)}uS(t){"Enter"==t.key&&(t.preventDefault(),this.close(3))}close(t){this.mC&&(this.vC&&T(this.element,"webkitOverflowScrolling",""),this.getViewport().leaveLightboxMode(this.element).then((()=>this.pS(t))))}pS(t){const{element:i}=this,n=++this.bC,h=()=>{n==this.bC&&(this.collapse(),this.VC())};this._S()?(function(t,i){for(let s=0;s<i.length;s++)T(t,i[s],null)}(i,["transition"]),h()):(i.addEventListener("transitionend",h),i.addEventListener("animationend",h)),y(i,R(this.KC().closedStyle)),this.dC&&(this.dC.destroy(),this.dC=null),this.Zh.documentElement.removeEventListener("focusin",this._C),this._C=null,this.mS(),this.removeAsContainer(),function(t,i=!0){!function(t,i,n,h){const e=s(o=t)?o:[o];var o;for(let t=0;t<e.length;t++)P(e[t],i,!0,h)}(t,i,0,_)}(this.element,!1),W(this.element).schedulePause(this.element,this.hf),this.mC=!1,this.aO("lightboxClose",t),this.AC&&l(this.AC)}_S(){return"inabox"==C(this.win).runtime||K(this.element)}PS(){const{element:t}=this;return!!t.contains(document.activeElement)}ZC(){this.PS()||this.close(3)}aS(){this.PS()||(this.yC=this.AS(),this.yC||(this.IC=this.kV(),this.element.insertBefore(this.IC,this.element.firstChild),this.yC=this.IC),l(this.yC))}AS(){if(this.yC)return this.yC;if(this.TC)return this.TC;const{element:t}=this,i=t.querySelectorAll("[on]");for(let s=0;s<i.length;s++){const n=i[s];if(this.tc.hasResolvableActionForTarget(n,"tap",t,j(n.parentElement)))return n}}kV(){const{element:t}=this,i=t.getAttribute("data-close-button-aria-label")||"Close the modal",s=this.Zh.createElement("button");return s.textContent=i,s.classList.add("i-amphtml-screen-reader"),s.tabIndex=-1,s}op(){const t=this.element.scrollTop;this.RC&&(0==t?this.element.scrollTop=1:this.element.scrollHeight==t+this.element.offsetHeight&&(this.element.scrollTop=t-1)),this.gC=t,null===this.EC&&this.vS(t)}vS(t){this.EC=U(this.win).delay((()=>{Math.abs(t-this.gC)<30?(this.EC=null,this.Vt(this.gC)):this.vS(this.gC)}),100)}Vt(t){this.CC(t),this.gC=t}CC(t){const i=[];this.gS(t,(t=>{i.push(t),W(this.element).scheduleLayout(this.element,t)}))}gS(t,i){const s=this.bS().height,n=this.kC();for(let h=0;h<n.length;h++){const e=n[h];let o=0;for(let t=e;t&&this.element.contains(t);t=t.offsetParent)o+=t.offsetTop;const r=2*s;o+e.offsetHeight>=t-r&&o<=t+r&&i(e)}}bS(){return this.Dr||(this.Dr={width:this.element.clientWidth,height:this.element.clientHeight}),this.Dr}wC(){const{element:t,win:i}=this;K(t)&&nt(i,i.document.body)}aO(t,i){const s=function(t,i,s,n){const h={detail:{}};return Object.assign(h,void 0),new t.CustomEvent(i,h)}(this.win,`${tt}.${t}`);this.tc.trigger(this.element,t,s,i)}};function nt(t,i){const s={},n=(t=>H(t,"ampdoc"))(t).getAmpDoc(i);var h;(h=n,Y(h,"mutator")).measureMutateElement(i,(function(){s.alreadyTransparent="rgba(0, 0, 0, 0)"==function(t,i){return t.getComputedStyle(i)||g}(t,i)["background-color"]}),(function(){s.alreadyTransparent,M(i,{background:"transparent"})}))}"inabox"==C().runtime&&nt(window,j(document.body)),t.registerElement(tt,st,'amp-lightbox{display:none;position:fixed!important;z-index:1000;top:0!important;left:0!important;bottom:0!important;right:0!important}amp-lightbox[scrollable]{overflow-y:auto!important;overflow-x:hidden!important}amp-lightbox i-amphtml-ad-close-header{height:60px!important;display:block!important;visibility:visible!important;opacity:0;position:fixed!important;top:0!important;left:0!important;right:0!important;z-index:1000!important;display:-ms-flexbox!important;display:flex!important;-ms-flex-align:center!important;align-items:center!important;-ms-flex-pack:right!important;justify-content:right!important;transition:opacity 0.1s ease-in}[animate-in=fly-in-bottom]>i-amphtml-ad-close-header,[animate-in=fly-in-top]>i-amphtml-ad-close-header{transition-delay:0.2s}amp-lightbox .amp-ad-close-header{opacity:1!important;box-sizing:border-box;padding:5px;line-height:40px;background-color:#000;color:#fff;font-family:Helvetica,sans-serif;font-size:12px;cursor:pointer}amp-lightbox .amp-ad-close-header>:first-child{margin-left:auto!important;pointer-events:none!important}amp-lightbox .amp-ad-close-button{display:block!important;background:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="%23fff"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/></svg>\') no-repeat;background-position:50%;width:40px;height:40px;pointer-events:none!important;border-radius:40px;margin-left:5px}amp-lightbox .amp-ad-close-header:active>.amp-ad-close-button{background-color:hsla(0,0%,100%,0.3)}\n/*# sourceURL=/extensions/amp-lightbox/0.1/amp-lightbox.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-lightbox-0.1.mjs.map