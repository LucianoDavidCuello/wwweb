;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-youtube",ev:"0.1",l:!0,f:function(t,i){(()=>{var i;function n(){return i||(i=Promise.resolve(void 0))}var e=class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}};function s(t){return new Promise((i=>{i(t())}))}var{isArray:o}=Array;function r(t){return o(t)?t:[t]}var{hasOwnProperty:a,toString:h}=Object.prototype;function l(t){return"[object Object]"===h.call(t)}function u(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function c(t){return"number"==typeof t&&isFinite(t)}function d(t,i,n,e,s,o,r,a,h,l,u){return t}function f(t,i){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==i||i(t),null}}function m(t){return(t.ownerDocument||t).defaultView}var p,v,_={bubbles:!0,cancelable:!0};function g(t){var i;null===(i=t.parentElement)||void 0===i||i.removeChild(t)}function P(t,i,n,e){const s=n||{};d(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=s;const{bubbles:r,cancelable:a}=e||_;o.initEvent(i,r,a),t.dispatchEvent(o)}function y(t,i){t.classList.add("i-amphtml-fill-content"),i&&t.classList.add("i-amphtml-replaced-content")}function A(t,i,n,e){const s=r(t);for(const t of s){const s=i.getAttribute(t);null!==s?n.setAttribute(t,s):e&&n.removeAttribute(t)}}function b(t){const i=t.ownerDocument||t;return p&&p.ownerDocument===i||(p=i.createElement("div")),M}function M(t){return function(t,i){d(1===i.length),t.innerHTML=i[0];const n=t.firstElementChild;return d(n),d(!n.nextElementSibling),t.removeChild(n),n}(p,t)}function w(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:n,stack:e}=t,s=new Error(n);for(const i in t)s[i]=t[i];return s.stack=e,s}function E(t){let i=null,n="";for(const t of arguments)t instanceof Error&&!i?i=w(t):(n&&(n+=" "),n+=t);return i?n&&(i.message=n+": "+i.message):i=new Error(n),i}function I(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function R(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=E.apply(null,arguments);setTimeout((()=>{throw I(i),i}))}(t)}}function V(t){const i=E.apply(null,arguments);return i.expected=!0,i}function T(t,...i){I(V.apply(null,i))}var k=["Webkit","webkit","Moz","moz","ms","O","o"],C={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function S(t,i,n,e,s){const o=function(t,i,n){if(i.startsWith("--"))return i;v||(v=u());let e=v[i];if(!e||n){if(e=i,void 0===t[i]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),s=function(t,i){for(let n=0;n<k.length;n++){const e=k[n]+i;if(void 0!==t[e])return e}return""}(t,n);void 0!==t[s]&&(e=s)}n||(v[i]=e)}return e}(t.style,i,s);if(!o)return;const r=e?n+e:n;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return k.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(o),r)}function x(t,i){for(const n in i)S(t,n,i[n])}var q=/vertical/,O=new WeakMap,$=new WeakMap,F=new WeakMap;function j(t){let i=O.get(t);return i||(i=new t.ResizeObserver(U),O.set(t,i)),i}function U(t){const i=new Set;for(let n=t.length-1;n>=0;n--){const e=t[n],{target:s}=e;if(i.has(s))continue;i.add(s);const o=$.get(s);if(o){F.set(s,e);for(let t=0;t<o.length;t++){const{callback:i,type:n}=o[t];Y(n,i,e)}}}}function Y(t,i,n){if(0==t){const{contentRect:t}=n,{height:e,width:s}=t;R(i,{width:s,height:e})}else if(1==t){const{borderBoxSize:t}=n;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=n,i=m(t),s=q.test(function(t,i){return t.getComputedStyle(i)||C}(i,t).writingMode),{offsetHeight:o,offsetWidth:r}=t;let a,h;s?(h=r,a=o):(a=r,h=o),e={inlineSize:a,blockSize:h}}R(i,e)}}function z(t){let i=!1,n=null,e=t;return(...t)=>(i||(n=e.apply(self,t),i=!0,e=null),n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var D=self.__AMP_LOG;function N(t){return D.user||(D.user=L()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(D.user.win,t)?D.userForEmbed||(D.userForEmbed=L()):D.user}function L(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function W(t,i,n,e,s,o,r,a,h,l,u){return t}function B(t,i,n,e,s,o,r,a,h,l,u){return N().assert(t,i,n,e,s,o,r,a,h,l,u)}function J(t,i){return Q(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function H(t,i){return Q(K(G(t)),i)}function Z(t,i){const n=K(G(t));return tt(n,i)?Q(n,i):null}function G(t){return t.nodeType?(i=m(t),J(i,"ampdoc")).getAmpDoc(t):t;var i}function K(t){const i=G(t);return i.isSingleDoc()?i.win:i}function Q(t,i){W(tt(t,i));const n=X(t)[i];return n.obj||(W(n.ctor),W(n.context),n.obj=new n.ctor(n.context),W(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function X(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function tt(t,i){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var it,nt,et,st=t=>Z(t,"action"),ot=t=>J(t,"platform"),rt=t=>Q(t,"timer"),at=t=>Z(t,"url"),ht=t=>H(t,"viewport");function lt(t,i,n={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=n,r=function(t){return t.parent&&t.parent!=t}(i)&&(e||s)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function ut(t){var i;let n=null===(i=it)||void 0===i?void 0:i.get(t);if(!n){const i=function(t){it||(it=new WeakMap,nt=new WeakMap),d(nt);let i=nt.get(t);return i||(i=lt((t=>{const n=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];n.has(o)||(n.add(o),d(i),i.unobserve(o),d(it),null===(e=it.get(o))||void 0===e||e.resolve(t[s]),it.delete(o))}}),t,{needsRootBounds:!0}),nt.set(t,i)),i}(m(t));d(it),i.observe(t),n=new e,it.set(t,n)}return n.promise}function ct(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const i=t.document.createElement("video");var n;return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,x(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,s((()=>n.play())).catch((()=>{})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function dt(t){return t.querySelector("video, iframe")}function ft(t,i){const n=s((()=>t.play(!!i)));return n.catch((t=>{T(0,t)})),n}function mt(t,i,n,e){let s=t,o=n,r=t=>{try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}};const a=function(){if(void 0!==et)return et;et=!1;try{const t={get capture(){return et=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return et}(),h=!(null==e||!e.capture);return s.addEventListener(i,r,a?e:h),()=>{null==s||s.removeEventListener(i,r,a?e:h),o=null,s=null,r=null}}function pt(t,i,n,e){const s={detail:n};return Object.assign(s,e),new t.CustomEvent(i,s)}function vt(t,i,n,e){return mt(t,i,n,e)}function _t(t){return t.data}new WeakMap,new WeakMap;var gt=class{constructor(){this.y_=!1,this.M_=new class{constructor(){this.St=null}add(t){return this.St||(this.St=[]),this.St.push(t),()=>{this.remove(t)}}remove(t){this.St&&function(t,i){const n=t.indexOf(i);-1!=n&&t.splice(n,1)}(this.St,t)}removeAll(){this.St&&(this.St.length=0)}fire(t){if(this.St)for(const i of this.St.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.St)||void 0===i?void 0:i.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.M_.add(t)}beginSession(){this.y_=!0}endSession(){this.y_&&this.M_.fire(),this.y_=!1}isSessionActive(){return this.y_}},Pt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],yt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function At(t,i,n){if(i[n])return i[n];const e=t.querySelector(`style[${n}], link[${n}]`);return e?(i[n]=e,e):null}function bt(t,i){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==i)return!0;return!1}var Mt={"title":"","artist":"","album":"","artwork":[{"src":""}]},wt="registered",Et="load",It="playing",Rt="pause",Vt="ended",Tt="muted",kt="unmuted",Ct="ad_start",St="ad_end",xt="playing_manual",qt="paused",Ot="video-play",$t="user-interacted";function Ft(t){t.signals().signal($t)}var jt="video-manager",Ut=(t,i)=>!!t&&(t.video===i||t.video.element===i);function Yt(t,i){const n=i.top+i.height/2,e=t.getSize().height/2;return Math.abs(n-e)}function zt(t){return 10*t*5}var Dt=t=>!!t&&!isNaN(t)&&t>1;function Nt(t,i,n){const{video:e}=t;t.getAnalyticsDetails().then((t=>{n&&Object.assign(t,n),P(e.element,i,t)}))}function Lt(t){!function(t,i,e,s){const r=G(t),a=K(r);!function(t,i,n,e,s,o){const r=X(t);let a=r[n];a||(a=r[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=i,a.sharedInstance=!1,a.resolve&&Q(t,n))}(a,r,i,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=z((()=>function(t){!function(t,i,n,e,s){const o=t.getHeadNode(),r=function(t,i,n,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=u());const o=!n&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,r=n?"amp-runtime":o?`amp-extension=${e}`:null;if(r){const n=At(t,s,r);if(n)return"STYLE"==n.tagName&&n.textContent!==i&&(n.textContent=i),n}const a=(t.ownerDocument||t).createElement("style");a.textContent=i;let h=null;return n?a.setAttribute("amp-runtime",""):o?(a.setAttribute("amp-extension",e||""),h=At(t,s,"amp-runtime")):(e&&a.setAttribute(e,""),h=t.lastChild),function(t,i,n=null){if(!n)return void function(t,i){t.insertBefore(i,t.firstChild)}(t,i);const e=n.nextSibling;t.insertBefore(i,e)}(t,a,h),r&&(s[r]=a),a}(o,function(t,i){const n=t.__AMP_CSS_TR;return n?n(i):i}(o,i),e||!1,s||null);if(n){const i=t.getRootNode();if(bt(i,r))return n(r),r;const e=setInterval((()=>{bt(i,r)&&(clearInterval(e),n(r))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.E_=null,this.w_=null,this.R_=null,this.Ie=rt(t.win),this.T_=st(t.getHeadNode()),this.V_=()=>this.I_(),this.q_=z((()=>new class{constructor(t,i){this.x_=i,this.Ni=t,this.C_=null,this.S_=null,this.E_=[],this.F_=[],this.O_=()=>this.j_(),this.Y_=t=>this.L_(t)==xt,this.D_=(t,i)=>this.W_(t,i),this.z_(),this.N_()}dispose(){this.F_.forEach((t=>t())),this.F_.length=0}register(t){const{video:i}=t,{element:n}=i;this.U_(n)&&(this.E_.push(i),vt(n,Rt,this.O_),vt(n,It,this.O_),vt(n,Vt,this.O_),i.signals().whenSignal($t).then(this.O_),this.j_())}N_(){const t=this.Ni.getRootNode(),i=()=>this.B_();this.F_.push(vt(t,"webkitfullscreenchange",i),vt(t,"mozfullscreenchange",i),vt(t,"fullscreenchange",i),vt(t,"MSFullscreenChange",i))}isInLandscape(){return(t=this.Ni.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}U_(t){if("video"==dt(t).tagName.toLowerCase())return!0;const i=ot(this.Ni.win);return!i.isIos()&&!i.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}B_(){this.C_=null}z_(){const{win:t}=this.Ni,{screen:i}=t;if(i&&"orientation"in i){const t=i.orientation;this.F_.push(vt(t,"change",(()=>this.J_())))}this.F_.push(vt(t,"orientationchange",(()=>this.J_())))}J_(){this.isInLandscape()?null!=this.S_&&this.H_(this.S_):this.C_&&this.Z_(this.C_)}H_(t){const i=ot(this.Ni.win);this.C_=t,i.isAndroid()&&i.isChrome()?t.fullscreenEnter():this.G_(t).then((()=>t.fullscreenEnter()))}Z_(t){this.C_=null,this.G_(t,"center").then((()=>t.fullscreenExit()))}G_(t,i=null){const{element:e}=t,s=this.K_();return this.Q_().then((()=>ut(e))).then((({boundingClientRect:t})=>{const{bottom:o,top:r}=t,a=s.getSize().height;if(r>=0&&o<=a)return n();const h=i||(o>a?"bottom":"top");return s.animateScrollIntoView(e,h)}))}K_(){return ht(this.Ni)}Q_(){return rt(this.Ni.win).promise(330)}j_(){if(this.isInLandscape())return Promise.resolve(this.S_);this.S_=null;const t=this.E_.filter(this.Y_).map((t=>ut(t.element)));return Promise.all(t).then((t=>{const i=t.sort(this.D_)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((t=>this.S_=t)):this.S_}))}W_(t,i){const{boundingClientRect:n,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=i,r=e-o;if(Math.abs(r)>.1)return r;const a=ht(this.Ni),h=Yt(a,n),l=Yt(a,s);return h<l||h>l?h-l:n.top-s.top}L_(t){return this.x_.getPlayingState(t)}}(this.ampdoc,this))),this.Ie.delay(this.V_,1e3)}dispose(){if(this.q_().dispose(),this.w_.disconnect(),this.w_=null,this.E_)for(let t=0;t<this.E_.length;t++)this.E_[t].dispose()}I_(){for(let t=0;t<this.E_.length;t++){const i=this.E_[t];i.getPlayingState()!==qt&&(Nt(i,"video-seconds-played"),this.X_(i))}this.Ie.delay(this.V_,1e3)}X_(t){const i="timeUpdate",n=t.video.getCurrentTime(),e=t.video.getDuration();if(c(n)&&c(e)&&e>0){const s=n/e,o=pt(this.ampdoc.win,`${jt}.${i}`,{"time":n,"percent":s});this.T_.trigger(t.video.element,i,o,1)}}register(t){W(t);const i=t;if(this.tP(t),!t.supportsPlatform())return;if(this.iP(t))return;if(!this.w_){const t=t=>t.forEach((({isIntersecting:t,target:i})=>{this.nP(i).updateVisibility(t)}));this.w_=lt(t,this.ampdoc.win,{threshold:.5})}this.w_.observe(i.element),vt(i.element,"reloaded",(()=>n.videoLoaded())),this.E_=this.E_||[];const n=new class{constructor(t,i){this.x_=t,this.Ni=t.ampdoc,this.video=i,this.eP=!0,this.sP=!1,this.gf=!1,this.oP=!1,this.rs=!1,this.rP=new gt,this.rP.onSessionEnd((()=>Nt(this,"video-session"))),this.aP=new gt,this.aP.onSessionEnd((()=>Nt(this,"video-session-visible"))),this.hP=z((()=>new class{constructor(t,i){this.Ie=rt(t),this.lP=i,this.F_=null,this.uP=0,this.cP=0}start(){const{element:t}=this.lP.video;this.stop(),this.F_=this.F_||[],this.dP()?this.fP(this.cP):this.F_.push(function(t,i,n,e){let s=n;const o=mt(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,(()=>{this.dP()&&this.fP(this.cP)}))),this.F_.push(vt(t,Vt,(()=>{this.dP()&&this.mP(100)})))}stop(){if(this.F_){for(;this.F_.length>0;)this.F_.pop()();this.cP++}}dP(){const{video:t}=this.lP,i=t.getDuration();if(!Dt(i))return!1;if(zt(i)<250){const i=Math.ceil(5);this.pP("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0}pP(...t){N().warn.apply(N(),[jt].concat(t))}fP(t){if(t!=this.cP)return;const{lP:i,Ie:n}=this,{video:e}=i,s=()=>this.fP(t);if(i.getPlayingState()==qt)return void n.delay(s,500);const o=e.getDuration();if(!Dt(o))return void n.delay(s,500);const r=(l=zt(o),d(!0),Math.min(Math.max(l,250),4e3)),a=e.getCurrentTime()/o*100,h=5*Math.floor(a/5);var l;W(c(h)),this.mP(h),n.delay(s,r)}mP(t){t<=0||this.uP!=t&&(this.uP=t,this.vP(t))}vP(t){Nt(this.lP,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.Ni.win,this))),this._P=!1,this.gP=!1,this.PP=null,this.dt=!1,this.AP=!1,this.hasAutoplay=i.element.hasAttribute("autoplay"),this.hasAutoplay&&this.x_.installAutoplayStyles(),this.yP=Mt,this.bP=()=>{ft(this.video,!1)},this.MP=()=>{this.video.pause()},vt(i.element,Et,(()=>this.videoLoaded())),vt(i.element,Rt,(()=>this.EP())),vt(i.element,"play",(()=>{this.AP=!0,Nt(this,Ot)})),vt(i.element,It,(()=>this.wP())),vt(i.element,Tt,(()=>this.dt=!0)),vt(i.element,kt,(()=>{this.dt=!1,this.x_.pauseOtherVideos(this)})),vt(i.element,"amp:video:tick",(t=>{const i=_t(t),n=i.eventType;n&&this.RP(n,i.vars)})),vt(i.element,Vt,(()=>{this.oP=!1,Nt(this,"video-ended")})),vt(i.element,Ct,(()=>{this.oP=!0,Nt(this,"video-ad-start")})),vt(i.element,St,(()=>{this.oP=!1,Nt(this,"video-ad-end")})),i.signals().whenSignal(wt).then((()=>this.TP())),this.VP=z((()=>{const t="firstPlay",i=pt(this.Ni.win,t,{}),{element:n}=this.video;st(n).trigger(n,t,i,1)})),this.IP()}dispose(){this.hP().stop()}RP(t,i){const n={"__amp:eventType":t};Object.keys(i).forEach((t=>{n[`custom_${t}`]=i[t]})),Nt(this,"video-hosted-custom",n)}IP(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.eP=!1,this.gf&&this.video.pause()}))}isMuted(){return this.dt}isPlaybackManaged(){return this.eP}TP(){this.kP()&&this.x_.registerForAutoFullscreen(this),this.hasAutoplay&&this.qP()}kP(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&B(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}wP(){this.gf=!0,this.getPlayingState()==xt&&(this.VP(),this.x_.pauseOtherVideos(this));const{video:t}=this,{element:i}=t;t.preimplementsMediaSessionAPI()||i.classList.contains("i-amphtml-disable-mediasession")||(function(t,i){const n=at(t);if(i&&i.artwork){const{artwork:t}=i;W(o(t)),t.forEach((t=>{if(t){const i=l(t)?t.src:t;B(n.isProtocolValid(i))}}))}}(i,this.yP),function(t,i,n,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(Mt),s.mediaSession.metadata=new t.MediaMetadata(i),s.mediaSession.setActionHandler("play",n),s.mediaSession.setActionHandler("pause",e))}(this.Ni.win,this.yP,this.bP,this.MP)),this.rP.beginSession(),this.rs&&this.aP.beginSession(),this.AP||Nt(this,Ot)}EP(){Nt(this,"video-pause"),this.gf=!1,this.gP?this.gP=!1:this.rP.endSession()}videoLoaded(){this.sP=!0,this.PP=dt(this.video.element),this.xP(),this.hP().start(),this.rs&&this.CP()}xP(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.yP=u(this.video.getMetadata()));const t=this.Ni.win.document;if(!this.yP.artwork||0==this.yP.artwork.length){const i=function(t){const i=t.querySelector('script[type="application/ld+json"]');if(!i)return;const n=f(i.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}(t)||function(t){const i=t.querySelector('meta[property="og:image"]');return i?i.getAttribute("content"):void 0}(t)||function(t){const i=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return i?i.getAttribute("href"):void 0}(t);i&&(this.yP.artwork=[{"src":i}])}if(!this.yP.title){const i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.PP.getAttribute("title")||this.PP.getAttribute("aria-label")||t.title;i&&(this.yP.title=i)}}SP(){this.sP&&this.CP()}CP(){this.Ni.isVisible()&&ct(this.Ni.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.FP():this.OP()}))}qP(){this.video.isInteractive()&&this.video.hideControls(),ct(this.Ni.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.jP()):this.video.showControls()}))}jP(){const{video:t}=this,{element:i,win:n}=this.video;if(i.hasAttribute("noaudio")||i.signals().get($t))return;const e=function(t,i){const n=b(i)(yt),e=n.firstElementChild;for(let t=0;t<4;t++){const i=e.cloneNode(!0),s=i.children;for(let i=0;i<s.length;i++)s[i].classList.add(`amp-video-eq-${t+1}-${i+1}`);n.appendChild(i)}return g(e),n}(0,i),s=[e];function o(i){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,i)}))}))}function r(i){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",i)))}const a=[vt(i,Rt,(()=>r(!1))),vt(i,It,(()=>r(!0))),vt(i,Ct,(()=>{o(!1),t.showControls()})),vt(i,St,(()=>{o(!0),t.hideControls()})),vt(i,kt,(()=>Ft(t)))];if(t.isInteractive()){t.hideControls();const n=function(t,i){const n=b(t)(Pt);return i&&i.title&&n.setAttribute("aria-label",i.title),n}(i,this.yP);s.push(n),a.push(vt(n,"click",(()=>Ft(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{i.appendChild(t)}))})),this.oP&&o(!1),t.signals().whenSignal($t).then((()=>{this.VP(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{g(t)}))}))}))}FP(){this.eP&&(this.rs?(this.aP.beginSession(),ft(this.video,!0),this._P=!0):(this.gf&&this.aP.endSession(),this.video.pause(),this.gP=!0))}OP(){this.rs?this.aP.beginSession():this.gf&&this.aP.endSession()}updateVisibility(t){const i=this.rs;this.rs=t,t!=i&&this.SP()}getPlayingState(){return this.gf?this.gf&&this._P&&!this.userInteracted()?"playing_auto":xt:qt}isRollingAd(){return this.oP}userInteracted(){return null!=this.video.signals().get($t)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([ct(this.Ni.win),ut(t.element)]).then((i=>{const n=i[0],e=i[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&n,a=t.getPlayedRanges(),h=a.reduce(((t,i)=>t+i[1]-i[0]),0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.dt,"playedTotal":h,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.E_.push(n);const{element:e}=n.video;P(e,wt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(wt),e.classList.add("i-amphtml-video-interface")}tP(t){n("play",(()=>ft(t,!1))),n("pause",(()=>t.pause())),n("mute",(()=>t.mute())),n("unmute",(()=>t.unmute()));const i=()=>t.fullscreenEnter();function n(i,n){t.registerAction(i,(()=>{Ft(t),n()}),1)}n("fullscreenenter",i),n("fullscreen",i)}iP(t){if(Ut(this.R_,t))return this.R_;for(let i=0;this.E_&&i<this.E_.length;i++){const n=this.E_[i];if(Ut(n,t))return this.R_=n,n}return null}nP(t){return W(this.iP(t))}registerForAutoFullscreen(t){this.q_().register(t)}YP(){return this.q_()}getVideoStateProperty(t,i){const e=this.ampdoc.getRootNode(),s=N().assertElement(e.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),o=this.nP(s);return(o?o.getAnalyticsDetails():n()).then((t=>t?t[i]:""))}getPlayingState(t){return this.nP(t).getPlayingState()}isMuted(t){return this.nP(t).isMuted()}userInteracted(t){return this.nP(t).userInteracted()}isRollingAd(t){return this.nP(t).isRollingAd()}pauseOtherVideos(t){this.E_.forEach((i=>{i.isPlaybackManaged()&&i!==t&&i.getPlayingState()==xt&&i.video.pause()}))}})}(t,"video-manager")}var Wt=["<iframe frameborder=0 allowfullscreen></iframe>"];new Set(["c","v","a","ad"]);var Bt=["<img placeholder referrerpolicy=origin>"],Jt="amp-youtube",Ht=class extends t.BaseElement{constructor(t){super(t),this.KA=null,this.$M=null,this.dt=!1,this.UM=!1,this.Av=!1,this.eb=null,this.Po=null,this.BP=null,this.Sv=null,this.gv=null,this.kv=null,this.YM=null,this.bf=new class{constructor(t){this._f=t,this.gf=!1,this.Pf=!1,this.Af=this.Af.bind(this)}updatePlaying(t){t!==this.gf&&(this.gf=t,t?(this.Pf=!1,function(t,i){!function(t,i,n){const e=t.ownerDocument.defaultView;if(!e)return;let s=$.get(t);if(s||(s=[],$.set(t,s),j(e).observe(t)),!s.some((t=>t.callback===n&&1===t.type))){s.push({type:1,callback:n});const i=F.get(t);i&&setTimeout((()=>Y(1,n,i)))}}(t,0,i)}(this._f,this.Af)):function(t,i){!function(t,i,n){const e=$.get(t);if(e&&(function(t,i){const e=[];let s=0;for(let i=0;i<t.length;i++){const r=t[i];(o=r).callback===n&&1===o.type?e.push(r):(s<i&&(t[s]=r),s++)}var o;s<t.length&&(t.length=s)}(e),0==e.length)){$.delete(t),F.delete(t);const i=t.ownerDocument.defaultView;i&&j(i).unobserve(t)}}(t,0,i)}(this._f,this.Af))}Af({blockSize:t,inlineSize:i}){const n=i>0&&t>0;if(n===this.Pf)return;this.Pf=n;const e=this._f;n||e.pause()}}(this.element)}preconnectCallback(t){const i=J(this.win,"preconnect"),n=this.getAmpDoc();i.url(n,this.nb()),i.url(n,"https://s.ytimg.com",t),i.url(n,"https://i.ytimg.com",t)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}renderOutsideViewport(){return.75}buildCallback(){this.KA=this.QA(),this.$M=this.DM(),this.NM();const t=new e;this.Sv=t.promise,this.gv=t.resolve,Lt(this.element)}LM(){return this.NM(),`https://www.youtube${"omit"===this.WM()?"-nocookie":""}.com/embed/${this.KA?`${encodeURIComponent(this.KA||"")}?`:`live_stream?channel=${encodeURIComponent(this.$M||"")}&`}enablejsapi=1&amp=1`}nb(){if(this.BP)return this.BP;let t=this.LM();const{element:i}=this,n=function(t,i,n){const{dataset:e}=t,s={},o=/^param(.+)/;for(const t in e){const i=t.match(o);i&&(s[i[1][0].toLowerCase()+i[1].substr(1)]=e[t])}return s}(i);return"autoplay"in n&&(delete n.autoplay,this.user().error("AMP-YOUTUBE","Use autoplay attribute instead of data-param-autoplay")),"playsinline"in n||(n.playsinline="1"),i.hasAttribute("autoplay")&&("iv_load_policy"in n||(n.iv_load_policy="3"),n.playsinline="1"),"loop"in n&&this.user().warn("AMP-YOUTUBE","Use loop attribute instead of the deprecated data-param-loop"),this.UM=i.hasAttribute("loop")||"loop"in n&&"1"==n.loop,this.Av="playlist"in n,this.UM&&(this.Av?n.loop="1":"loop"in n&&delete n.loop),t=function(t,i){return function(t,i,n){if(!i)return t;const e=t.split("#",2),s=e[0].split("?",2);let o=s[0]+(s[1]?`?${s[1]}&${i}`:`?${i}`);return o+=e[1]?`#${e[1]}`:"",o}(t,function(t){const i=[];for(const s in t){let o=t[s];if(null!=o){o=r(o);for(let t=0;t<o.length;t++)i.push((n=s,e=o[t],`${encodeURIComponent(n)}=${encodeURIComponent(e)}`))}}var n,e;return i.join("&")}(i))}(t,n),this.BP=t}layoutCallback(){const t=function(t,i,n,e){const{element:s}=t,o=b(s)(Wt);return A(["referrerpolicy"],t.element,o),o.src=at(s).assertHttpsUrl(i,s),y(o),s.appendChild(o),o}(this,this.nb());var i;t.title=this.element.title||"YouTube video",function(t){let i=t.getAttribute("allow")||"";i+="autoplay;",t.setAttribute("allow",i)}(t),this.eb=t,(i=this.element,H(i,"video-manager")).register(this),this.kv=vt(this.win,"message",this.BM.bind(this)),this.UM&&!this.Av&&(this.YM=vt(this.element,Vt,(t=>this.play(!1))));const n=this.loadPromise(this.eb).then((()=>rt(this.win).promise(300))).then((()=>{this.LP(),P(this.element,Et)}));return this.gv(n),n}unlayoutCallback(){this.eb&&(g(this.eb),this.eb=null),this.kv&&this.kv(),this.YM&&this.YM();const t=new e;return this.Sv=t.promise,this.gv=t.resolve,this.bf.updatePlaying(!1),!0}pauseCallback(){this.eb&&this.eb.contentWindow&&this.pause()}mutatedAttributesCallback(t){null!=t["data-videoid"]&&(this.KA=this.QA(),this.eb&&this.Ov("loadVideoById",[this.KA]))}DM(){return this.element.getAttribute("data-live-channelid")}QA(){return this.element.getAttribute("data-videoid")}WM(){return this.element.getAttribute("credentials")||"include"}NM(){B(!(this.KA&&this.$M)&&(this.KA||this.$M),"Exactly one of data-videoid or data-live-channelid should be present for <amp-youtube> %s",this.element)}Ov(t,i){this.Sv.then((()=>{if(this.eb&&this.eb.contentWindow){const n=JSON.stringify({"event":"command","func":t,"args":i||""});this.eb.contentWindow.postMessage(n,"*")}}))}BM(t){if(!function(t,i,n){return!(!i||t.source!=i.contentWindow)&&"https://www.youtube.com"==t.origin}(t,this.eb))return;const i=_t(t);if(!(n=i)||!l(n)&&!n.startsWith("{"))return;var n;const e=l(s=i)?s:f(s);var s;if(null==e)return;const r=e.event,a=e.info||{},{element:h}=this,u=a.playerState;if("infoDelivery"==r&&null!=u){switch(u){case 1:this.bf.updatePlaying(!0);break;case 2:case 0:this.bf.updatePlaying(!1)}return void function(t,i,n){if(null==n[i])return!1;const e=n[i];(o(e)?e:[e]).forEach((i=>{P(t,i)}))}(h,u.toString(),{1:It,2:Rt,0:[Vt,Rt]})}const c=a.muted;if("infoDelivery"==r&&a&&null!=c){if(this.dt==c)return;return this.dt=c,void P(h,(d=this.dt,d?Tt:kt))}var d;if("initialDelivery"==r)return this.Po=a,void P(h,"loadedmetadata");"infoDelivery"!=r||void 0===a.currentTime||(this.Po.currentTime=a.currentTime)}LP(){this.eb&&this.eb.contentWindow.postMessage(JSON.stringify({"event":"listening"}),"*")}createPlaceholderCallback(){if(!this.KA)return null;const{element:t}=this,i=b(t)(Bt),n=this.KA;return x(i,{"object-fit":"cover","visibility":"hidden"}),A(["aria-label"],this.element,i),i.src=`https://i.ytimg.com/vi/${encodeURIComponent(n)}/sddefault.jpg#404_is_fine`,i.hasAttribute("aria-label")?i.setAttribute("alt","Loading video - "+i.getAttribute("aria-label")):i.setAttribute("alt","Loading video"),y(i),this.loadPromise(i).then((()=>{if(120==i.naturalWidth&&90==i.naturalHeight)throw new Error("sddefault.jpg is not found")})).catch((()=>(i.src=`https://i.ytimg.com/vi/${encodeURIComponent(n)}/hqdefault.jpg`,this.loadPromise(i)))).then((()=>{this.getVsync().mutate((()=>{x(i,{"visibility":""})}))})),i}supportsPlatform(){return!0}isInteractive(){return!0}play(t){this.Ov("playVideo")}pause(){this.Ov("pauseVideo")}mute(){this.Ov("mute")}unmute(){this.Ov("unMute")}showControls(){}hideControls(){}fullscreenEnter(){this.eb&&function(t){const i=t.requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen;i&&i.call(t)}(this.eb)}fullscreenExit(){this.eb&&function(t){const i=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(i)return void i.call(t);const{ownerDocument:n}=t;if(!n)return;const e=n.cancelFullScreen||n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen;e&&e.call(n)}(this.eb)}isFullscreen(){return!!this.eb&&function(t){const{webkitDisplayingFullscreen:i}=t;if(void 0!==i)return i;const{ownerDocument:n}=t;return!!n&&(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.webkitCurrentFullScreenElement)==t}(this.eb)}getMetadata(){}preimplementsMediaSessionAPI(){return!0}preimplementsAutoFullscreen(){return!1}getCurrentTime(){return this.Po?this.Po.currentTime:NaN}getDuration(){return this.Po?this.Po.duration:NaN}getPlayedRanges(){return[]}seekTo(t){this.user().error(Jt,"`seekTo` not supported.")}};t.registerElement(Jt,Ht)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-youtube-0.1.mjs.map