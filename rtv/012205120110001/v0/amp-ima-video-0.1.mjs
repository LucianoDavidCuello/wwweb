;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-ima-video",ev:"0.1",l:!0,f:function(t,n){(()=>{var n,i=class{constructor(){this.currentTime=0,this.duration=1,this.playedRanges=[]}update(t){this.currentTime=t.currentTime,this.duration=t.duration;const{played:n}=t,{length:i}=n;this.playedRanges=[];for(let t=0;t<i;t++)this.playedRanges.push([n.start(t),n.end(t)])}};function e(){return n||(n=Promise.resolve(void 0))}i.IMA_PLAYER_DATA="imaPlayerData";var s=class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}};function o(t){return new Promise((n=>{n(t())}))}function r(t){return t?Array.prototype.slice.call(t):[]}var{isArray:a}=Array,{hasOwnProperty:l,toString:u}=Object.prototype;function c(t){return"[object Object]"===u.call(t)}function h(t){const n=Object.create(null);return t&&Object.assign(n,t),n}function d(t){return"number"==typeof t&&isFinite(t)}function f(t,n,i,e,s,o,r,a,l,u,c){return t}function m(t){return JSON.parse(t)}function p(t,n){try{return m(t)}catch(t){return null==n||n(t),null}}function v(t){return(t.ownerDocument||t).defaultView}function g(t,n){return f(/^[\w-]+$/.test(n)),i=`> ${n}`,t.querySelectorAll(function(t,n){return t.replace(/^|,/g,"$&:scope ")}(i));var i}var _,P={bubbles:!0,cancelable:!0};function y(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function b(t,n,i,e){const s=i||{};f(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=s;const{bubbles:r,cancelable:a}=e||P;o.initEvent(n,r,a),t.dispatchEvent(o)}function A(t){const n=parseFloat(t);return d(n)?n:void 0}function w(t,n){t.classList.add("i-amphtml-fill-content"),n&&t.classList.add("i-amphtml-replaced-content")}function M(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:i,stack:e}=t,s=new Error(i);for(const n in t)s[n]=t[n];return s.stack=e,s}function R(t){let n=null,i="";for(const t of arguments)t instanceof Error&&!n?n=M(t):(i&&(i+=" "),i+=t);return n?i&&(n.message=i+": "+n.message):n=new Error(i),n}function T(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function E(t,...n){try{return t.apply(null,n)}catch(t){!function(t){const n=R.apply(null,arguments);setTimeout((()=>{throw T(n),n}))}(t)}}function I(t){const n=R.apply(null,arguments);return n.expected=!0,n}function V(t,...n){T(I.apply(null,n))}var k=["Webkit","webkit","Moz","moz","ms","O","o"],S={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function O(t,n,i,e,s){const o=function(t,n,i){if(n.startsWith("--"))return n;_||(_=h());let e=_[n];if(!e||i){if(e=n,void 0===t[n]){const i=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),s=function(t,n){for(let i=0;i<k.length;i++){const e=k[i]+n;if(void 0!==t[e])return e}return""}(t,i);void 0!==t[s]&&(e=s)}i||(_[n]=e)}return e}(t.style,n,s);if(!o)return;const r=e?i+e:i;t.style.setProperty(function(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return k.some((t=>n.startsWith(t+"-")))?`-${n}`:n}(o),r)}var x=/vertical/,C=new WeakMap,j=new WeakMap,q=new WeakMap;function F(t,n,i){const e=t.ownerDocument.defaultView;if(!e)return;let s=j.get(t);if(s||(s=[],j.set(t,s),z(e).observe(t)),!s.some((t=>t.callback===i&&t.type===n))){s.push({type:n,callback:i});const e=q.get(t);e&&setTimeout((()=>L(n,i,e)))}}function $(t,n,i){const e=j.get(t);if(e&&(function(t,e){const s=[];let o=0;for(let e=0;e<t.length;e++){const a=t[e];(r=a).callback===i&&r.type===n?s.push(a):(o<e&&(t[o]=a),o++)}var r;o<t.length&&(t.length=o)}(e),0==e.length)){j.delete(t),q.delete(t);const n=t.ownerDocument.defaultView;n&&z(n).unobserve(t)}}function z(t){let n=C.get(t);return n||(n=new t.ResizeObserver(N),C.set(t,n)),n}function N(t){const n=new Set;for(let i=t.length-1;i>=0;i--){const e=t[i],{target:s}=e;if(n.has(s))continue;n.add(s);const o=j.get(s);if(o){q.set(s,e);for(let t=0;t<o.length;t++){const{callback:n,type:i}=o[t];L(i,n,e)}}}}function L(t,n,i){if(0==t){const{contentRect:t}=i,{height:e,width:s}=t;E(n,{width:s,height:e})}else if(1==t){const{borderBoxSize:t}=i;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=i,n=v(t),s=x.test(function(t,n){return t.getComputedStyle(n)||S}(n,t).writingMode),{offsetHeight:o,offsetWidth:r}=t;let a,l;s?(l=r,a=o):(a=r,l=o),e={inlineSize:a,blockSize:l}}E(n,e)}}var U=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function W(t,n=""){try{return decodeURIComponent(t)}catch(t){return n}}function Y(t){const n=h();if(!t)return n;let i;for(;i=U.exec(t);){const t=W(i[1],i[1]),e=i[2]?W(i[2].replace(/\+/g," "),i[2]):"";n[t]=e}return n}function D(t){const{location:n}=t||self;return Y(n.originalHash||n.hash)}var J="";function B(t){const n=t||self;return n.__AMP_MODE?n.__AMP_MODE:n.__AMP_MODE=function(t){return{localDev:!1,development:G(t,D(t)),esm:!0,test:!1,rtvVersion:H(t)}}(n)}function H(t){var n;return J||(J=(null===(n=t.AMP_CONFIG)||void 0===n?void 0:n.v)||"012205120110001"),J}function G(t,n){const i=n||D(t);return["1","actions","amp","amp4ads","amp4email"].includes(i.development)||!!t.AMP_DEV_MODE}function K(t){let n=!1,i=null,e=t;return(...t)=>(n||(i=e.apply(self,t),n=!0,e=null),i)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var X=self.__AMP_LOG;function Z(t){return X.user||(X.user=Q()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(X.user.win,t)?X.userForEmbed||(X.userForEmbed=Q()):X.user}function Q(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function tt(t,n,i,e,s,o,r,a,l,u,c){return t}function nt(t,n,i,e,s,o,r,a,l,u,c){return Z().assert(t,n,i,e,s,o,r,a,l,u,c)}function it(t,n){return lt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function et(t,n){return lt(at(rt(t)),n)}function st(t,n){const i=at(rt(t));return ht(i,n)?lt(i,n):null}function ot(t,n){return ut(at(t),n)}function rt(t){return t.nodeType?(n=v(t),it(n,"ampdoc")).getAmpDoc(t):t;var n}function at(t){const n=rt(t);return n.isSingleDoc()?n.win:n}function lt(t,n){tt(ht(t,n));const i=ct(t)[n];return i.obj||(tt(i.ctor),tt(i.context),i.obj=new i.ctor(i.context),tt(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function ut(t,n){const i=ct(t)[n];return i?i.promise?i.promise:(lt(t,n),i.promise=Promise.resolve(i.obj)):null}function ct(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function ht(t,n){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var dt,ft,mt,pt=t=>st(t,"action"),vt=t=>it(t,"platform"),gt=t=>lt(t,"timer"),_t=t=>function(t,n,i,e){const o=ot(t,n);if(o)return o;const r=rt(t);return r.whenExtensionsKnown().then((()=>{const t=r.getExtensionVersion(i);return t?it(r.win,"extensions").waitForExtension(i,t):null})).then((i=>i?function(t,n){return function(t,n){const i=ut(t,n);if(i)return i;const e=ct(t);return e[n]=function(){const t=new s,{promise:n,reject:i,resolve:e}=t;return n.catch((()=>{})),{obj:null,promise:n,resolve:e,reject:i,context:null,ctor:null}}(),e[n].promise}(at(t),n)}(t,n):null))}(t,"consentPolicyManager","amp-consent"),Pt=t=>et(t,"viewport");function yt(t,n,i={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=i,r=function(t){return t.parent&&t.parent!=t}(n)&&(e||s)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function bt(t){var n;let i=null===(n=dt)||void 0===n?void 0:n.get(t);if(!i){const n=function(t){dt||(dt=new WeakMap,ft=new WeakMap),f(ft);let n=ft.get(t);return n||(n=yt((t=>{const i=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];i.has(o)||(i.add(o),f(n),n.unobserve(o),f(dt),null===(e=dt.get(o))||void 0===e||e.resolve(t[s]),dt.delete(o))}}),t,{needsRootBounds:!0}),ft.set(t,n)),n}(v(t));f(dt),n.observe(t),i=new s,dt.set(t,i)}return i.promise}function At(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const n=t.document.createElement("video");var i;return n.setAttribute("muted",""),n.setAttribute("playsinline",""),n.setAttribute("webkit-playsinline",""),n.setAttribute("height","0"),n.setAttribute("width","0"),n.muted=!0,n.playsInline=!0,n.playsinline=!0,n.webkitPlaysinline=!0,function(t,n){for(const i in n)O(t,i,n[i])}(n,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),i=n,o((()=>i.play())).catch((()=>{})),Promise.resolve(!n.paused)}(t)),t.__AMP_AUTOPLAY}function wt(t){return t.querySelector("video, iframe")}function Mt(t,n){const i=o((()=>t.play(!!n)));return i.catch((t=>{V(0,t)})),i}function Rt(t,n,i,e){let s=t,o=i,r=t=>{try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}};const a=function(){if(void 0!==mt)return mt;mt=!1;try{const t={get capture(){return mt=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return mt}(),l=!(null==e||!e.capture);return s.addEventListener(n,r,a?e:l),()=>{null==s||s.removeEventListener(n,r,a?e:l),o=null,s=null,r=null}}function Tt(t,n,i,e){const s={detail:i};return Object.assign(s,e),new t.CustomEvent(n,s)}function Et(t,n,i,e){return Rt(t,n,i,e)}function It(t){return t.data}new WeakMap,new WeakMap;var Vt,kt=class{constructor(){this.y_=!1,this.M_=new class{constructor(){this.St=null}add(t){return this.St||(this.St=[]),this.St.push(t),()=>{this.remove(t)}}remove(t){this.St&&function(t,n){const i=t.indexOf(n);-1!=i&&t.splice(i,1)}(this.St,t)}removeAll(){this.St&&(this.St.length=0)}fire(t){if(this.St)for(const n of this.St.slice())n(t)}getHandlerCount(){var t,n;return null!==(t=null===(n=this.St)||void 0===n?void 0:n.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.M_.add(t)}beginSession(){this.y_=!0}endSession(){this.y_&&this.M_.fire(),this.y_=!1}isSessionActive(){return this.y_}};function St(t){const n=t.ownerDocument||t;return Vt&&Vt.ownerDocument===n||(Vt=n.createElement("div")),Ot}function Ot(t){return function(t,n){f(1===n.length),t.innerHTML=n[0];const i=t.firstElementChild;return f(i),f(!i.nextElementSibling),t.removeChild(i),i}(Vt,t)}var xt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Ct=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function jt(t,n,i){if(n[i])return n[i];const e=t.querySelector(`style[${i}], link[${i}]`);return e?(n[i]=e,e):null}function qt(t,n){const i=t.styleSheets;for(let t=0;t<i.length;t++)if(i[t].ownerNode==n)return!0;return!1}var Ft={"title":"","artist":"","album":"","artwork":[{"src":""}]},$t="registered",zt="load",Nt="play",Lt="playing",Ut="pause",Wt="ended",Yt="unmuted",Dt="ad_start",Jt="ad_end",Bt="playing_manual",Ht="paused",Gt="video-play",Kt="user-interacted";function Xt(t){t.signals().signal(Kt)}var Zt="video-manager",Qt=(t,n)=>!!t&&(t.video===n||t.video.element===n);function tn(t,n){const i=n.top+n.height/2,e=t.getSize().height/2;return Math.abs(i-e)}function nn(t){return 10*t*5}var en=t=>!!t&&!isNaN(t)&&t>1;function sn(t,n,i){const{video:e}=t;t.getAnalyticsDetails().then((t=>{i&&Object.assign(t,i),b(e.element,n,t)}))}function on(t){!function(t,n,i,s){const o=rt(t),r=at(o);!function(t,n,i,e,s,o){const r=ct(t);let a=r[i];a||(a=r[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=n,a.sharedInstance=!1,a.resolve&&lt(t,i))}(r,o,n,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=K((()=>function(t){!function(t,n,i,e,s){const o=t.getHeadNode(),r=function(t,n,i,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=h());const o=!i&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,r=i?"amp-runtime":o?`amp-extension=${e}`:null;if(r){const i=jt(t,s,r);if(i)return"STYLE"==i.tagName&&i.textContent!==n&&(i.textContent=n),i}const a=(t.ownerDocument||t).createElement("style");a.textContent=n;let l=null;return i?a.setAttribute("amp-runtime",""):o?(a.setAttribute("amp-extension",e||""),l=jt(t,s,"amp-runtime")):(e&&a.setAttribute(e,""),l=t.lastChild),function(t,n,i=null){if(!i)return void function(t,n){t.insertBefore(n,t.firstChild)}(t,n);const e=i.nextSibling;t.insertBefore(n,e)}(t,a,l),r&&(s[r]=a),a}(o,function(t,n){const i=t.__AMP_CSS_TR;return i?i(n):n}(o,n),e||!1,s||null);if(i){const n=t.getRootNode();if(qt(n,r))return i(r),r;const e=setInterval((()=>{qt(n,r)&&(clearInterval(e),i(r))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.E_=null,this.w_=null,this.R_=null,this.Ie=gt(t.win),this.T_=pt(t.getHeadNode()),this.V_=()=>this.I_(),this.q_=K((()=>new class{constructor(t,n){this.x_=n,this.Ni=t,this.C_=null,this.S_=null,this.E_=[],this.F_=[],this.O_=()=>this.j_(),this.Y_=t=>this.L_(t)==Bt,this.D_=(t,n)=>this.W_(t,n),this.z_(),this.N_()}dispose(){this.F_.forEach((t=>t())),this.F_.length=0}register(t){const{video:n}=t,{element:i}=n;this.U_(i)&&(this.E_.push(n),Et(i,Ut,this.O_),Et(i,Lt,this.O_),Et(i,Wt,this.O_),n.signals().whenSignal(Kt).then(this.O_),this.j_())}N_(){const t=this.Ni.getRootNode(),n=()=>this.B_();this.F_.push(Et(t,"webkitfullscreenchange",n),Et(t,"mozfullscreenchange",n),Et(t,"fullscreenchange",n),Et(t,"MSFullscreenChange",n))}isInLandscape(){return(t=this.Ni.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}U_(t){if("video"==wt(t).tagName.toLowerCase())return!0;const n=vt(this.Ni.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}B_(){this.C_=null}z_(){const{win:t}=this.Ni,{screen:n}=t;if(n&&"orientation"in n){const t=n.orientation;this.F_.push(Et(t,"change",(()=>this.J_())))}this.F_.push(Et(t,"orientationchange",(()=>this.J_())))}J_(){this.isInLandscape()?null!=this.S_&&this.H_(this.S_):this.C_&&this.Z_(this.C_)}H_(t){const n=vt(this.Ni.win);this.C_=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.G_(t).then((()=>t.fullscreenEnter()))}Z_(t){this.C_=null,this.G_(t,"center").then((()=>t.fullscreenExit()))}G_(t,n=null){const{element:i}=t,s=this.K_();return this.Q_().then((()=>bt(i))).then((({boundingClientRect:t})=>{const{bottom:o,top:r}=t,a=s.getSize().height;if(r>=0&&o<=a)return e();const l=n||(o>a?"bottom":"top");return s.animateScrollIntoView(i,l)}))}K_(){return Pt(this.Ni)}Q_(){return gt(this.Ni.win).promise(330)}j_(){if(this.isInLandscape())return Promise.resolve(this.S_);this.S_=null;const t=this.E_.filter(this.Y_).map((t=>bt(t.element)));return Promise.all(t).then((t=>{const n=t.sort(this.D_)[0];return n&&n.intersectionRatio>.5?n.target.getImpl().then((t=>this.S_=t)):this.S_}))}W_(t,n){const{boundingClientRect:i,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=n,r=e-o;if(Math.abs(r)>.1)return r;const a=Pt(this.Ni),l=tn(a,i),u=tn(a,s);return l<u||l>u?l-u:i.top-s.top}L_(t){return this.x_.getPlayingState(t)}}(this.ampdoc,this))),this.Ie.delay(this.V_,1e3)}dispose(){if(this.q_().dispose(),this.w_.disconnect(),this.w_=null,this.E_)for(let t=0;t<this.E_.length;t++)this.E_[t].dispose()}I_(){for(let t=0;t<this.E_.length;t++){const n=this.E_[t];n.getPlayingState()!==Ht&&(sn(n,"video-seconds-played"),this.X_(n))}this.Ie.delay(this.V_,1e3)}X_(t){const n="timeUpdate",i=t.video.getCurrentTime(),e=t.video.getDuration();if(d(i)&&d(e)&&e>0){const s=i/e,o=Tt(this.ampdoc.win,`${Zt}.${n}`,{"time":i,"percent":s});this.T_.trigger(t.video.element,n,o,1)}}register(t){tt(t);const n=t;if(this.tP(t),!t.supportsPlatform())return;if(this.iP(t))return;if(!this.w_){const t=t=>t.forEach((({isIntersecting:t,target:n})=>{this.nP(n).updateVisibility(t)}));this.w_=yt(t,this.ampdoc.win,{threshold:.5})}this.w_.observe(n.element),Et(n.element,"reloaded",(()=>i.videoLoaded())),this.E_=this.E_||[];const i=new class{constructor(t,n){this.x_=t,this.Ni=t.ampdoc,this.video=n,this.eP=!0,this.sP=!1,this.gf=!1,this.oP=!1,this.rs=!1,this.rP=new kt,this.rP.onSessionEnd((()=>sn(this,"video-session"))),this.aP=new kt,this.aP.onSessionEnd((()=>sn(this,"video-session-visible"))),this.hP=K((()=>new class{constructor(t,n){this.Ie=gt(t),this.lP=n,this.F_=null,this.uP=0,this.cP=0}start(){const{element:t}=this.lP.video;this.stop(),this.F_=this.F_||[],this.dP()?this.fP(this.cP):this.F_.push(function(t,n,i,e){let s=i;const o=Rt(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,(()=>{this.dP()&&this.fP(this.cP)}))),this.F_.push(Et(t,Wt,(()=>{this.dP()&&this.mP(100)})))}stop(){if(this.F_){for(;this.F_.length>0;)this.F_.pop()();this.cP++}}dP(){const{video:t}=this.lP,n=t.getDuration();if(!en(n))return!1;if(nn(n)<250){const n=Math.ceil(5);this.pP("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",n,"seconds long.",t.element)}return!0}pP(...t){Z().warn.apply(Z(),[Zt].concat(t))}fP(t){if(t!=this.cP)return;const{lP:n,Ie:i}=this,{video:e}=n,s=()=>this.fP(t);if(n.getPlayingState()==Ht)return void i.delay(s,500);const o=e.getDuration();if(!en(o))return void i.delay(s,500);const r=(u=nn(o),f(!0),Math.min(Math.max(u,250),4e3)),a=e.getCurrentTime()/o*100,l=5*Math.floor(a/5);var u;tt(d(l)),this.mP(l),i.delay(s,r)}mP(t){t<=0||this.uP!=t&&(this.uP=t,this.vP(t))}vP(t){sn(this.lP,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.Ni.win,this))),this._P=!1,this.gP=!1,this.PP=null,this.dt=!1,this.AP=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.x_.installAutoplayStyles(),this.yP=Ft,this.bP=()=>{Mt(this.video,!1)},this.MP=()=>{this.video.pause()},Et(n.element,zt,(()=>this.videoLoaded())),Et(n.element,Ut,(()=>this.EP())),Et(n.element,Nt,(()=>{this.AP=!0,sn(this,Gt)})),Et(n.element,Lt,(()=>this.wP())),Et(n.element,"muted",(()=>this.dt=!0)),Et(n.element,Yt,(()=>{this.dt=!1,this.x_.pauseOtherVideos(this)})),Et(n.element,"amp:video:tick",(t=>{const n=It(t),i=n.eventType;i&&this.RP(i,n.vars)})),Et(n.element,Wt,(()=>{this.oP=!1,sn(this,"video-ended")})),Et(n.element,Dt,(()=>{this.oP=!0,sn(this,"video-ad-start")})),Et(n.element,Jt,(()=>{this.oP=!1,sn(this,"video-ad-end")})),n.signals().whenSignal($t).then((()=>this.TP())),this.VP=K((()=>{const t="firstPlay",n=Tt(this.Ni.win,t,{}),{element:i}=this.video;pt(i).trigger(i,t,n,1)})),this.IP()}dispose(){this.hP().stop()}RP(t,n){const i={"__amp:eventType":t};Object.keys(n).forEach((t=>{i[`custom_${t}`]=n[t]})),sn(this,"video-hosted-custom",i)}IP(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.eP=!1,this.gf&&this.video.pause()}))}isMuted(){return this.dt}isPlaybackManaged(){return this.eP}TP(){this.kP()&&this.x_.registerForAutoFullscreen(this),this.hasAutoplay&&this.qP()}kP(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&nt(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}wP(){this.gf=!0,this.getPlayingState()==Bt&&(this.VP(),this.x_.pauseOtherVideos(this));const{video:t}=this,{element:n}=t;t.preimplementsMediaSessionAPI()||n.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){const i=(t=>st(t,"url"))(t);if(n&&n.artwork){const{artwork:t}=n;tt(a(t)),t.forEach((t=>{if(t){const n=c(t)?t.src:t;nt(i.isProtocolValid(n))}}))}}(n,this.yP),function(t,n,i,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(Ft),s.mediaSession.metadata=new t.MediaMetadata(n),s.mediaSession.setActionHandler("play",i),s.mediaSession.setActionHandler("pause",e))}(this.Ni.win,this.yP,this.bP,this.MP)),this.rP.beginSession(),this.rs&&this.aP.beginSession(),this.AP||sn(this,Gt)}EP(){sn(this,"video-pause"),this.gf=!1,this.gP?this.gP=!1:this.rP.endSession()}videoLoaded(){this.sP=!0,this.PP=wt(this.video.element),this.xP(),this.hP().start(),this.rs&&this.CP()}xP(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.yP=h(this.video.getMetadata()));const t=this.Ni.win.document;if(!this.yP.artwork||0==this.yP.artwork.length){const n=function(t){const n=t.querySelector('script[type="application/ld+json"]');if(!n)return;const i=p(n.textContent);return i&&i.image?"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0:void 0}(t)||function(t){const n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){const n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.yP.artwork=[{"src":n}])}if(!this.yP.title){const n=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.PP.getAttribute("title")||this.PP.getAttribute("aria-label")||t.title;n&&(this.yP.title=n)}}SP(){this.sP&&this.CP()}CP(){this.Ni.isVisible()&&At(this.Ni.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.FP():this.OP()}))}qP(){this.video.isInteractive()&&this.video.hideControls(),At(this.Ni.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.jP()):this.video.showControls()}))}jP(){const{video:t}=this,{element:n,win:i}=this.video;if(n.hasAttribute("noaudio")||n.signals().get(Kt))return;const e=function(t,n){const i=St(n)(Ct),e=i.firstElementChild;for(let t=0;t<4;t++){const n=e.cloneNode(!0),s=n.children;for(let n=0;n<s.length;n++)s[n].classList.add(`amp-video-eq-${t+1}-${n+1}`);i.appendChild(n)}return y(e),i}(0,n),s=[e];function o(n){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,n)}))}))}function r(n){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",n)))}const a=[Et(n,Ut,(()=>r(!1))),Et(n,Lt,(()=>r(!0))),Et(n,Dt,(()=>{o(!1),t.showControls()})),Et(n,Jt,(()=>{o(!0),t.hideControls()})),Et(n,Yt,(()=>Xt(t)))];if(t.isInteractive()){t.hideControls();const i=function(t,n){const i=St(t)(xt);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(n,this.yP);s.push(i),a.push(Et(i,"click",(()=>Xt(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{n.appendChild(t)}))})),this.oP&&o(!1),t.signals().whenSignal(Kt).then((()=>{this.VP(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{y(t)}))}))}))}FP(){this.eP&&(this.rs?(this.aP.beginSession(),Mt(this.video,!0),this._P=!0):(this.gf&&this.aP.endSession(),this.video.pause(),this.gP=!0))}OP(){this.rs?this.aP.beginSession():this.gf&&this.aP.endSession()}updateVisibility(t){const n=this.rs;this.rs=t,t!=n&&this.SP()}getPlayingState(){return this.gf?this.gf&&this._P&&!this.userInteracted()?"playing_auto":Bt:Ht}isRollingAd(){return this.oP}userInteracted(){return null!=this.video.signals().get(Kt)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([At(this.Ni.win),bt(t.element)]).then((n=>{const i=n[0],e=n[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&i,a=t.getPlayedRanges(),l=a.reduce(((t,n)=>t+n[1]-n[0]),0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.dt,"playedTotal":l,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.E_.push(i);const{element:e}=i.video;b(e,$t),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal($t),e.classList.add("i-amphtml-video-interface")}tP(t){i("play",(()=>Mt(t,!1))),i("pause",(()=>t.pause())),i("mute",(()=>t.mute())),i("unmute",(()=>t.unmute()));const n=()=>t.fullscreenEnter();function i(n,i){t.registerAction(n,(()=>{Xt(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)}iP(t){if(Qt(this.R_,t))return this.R_;for(let n=0;this.E_&&n<this.E_.length;n++){const i=this.E_[n];if(Qt(i,t))return this.R_=i,i}return null}nP(t){return tt(this.iP(t))}registerForAutoFullscreen(t){this.q_().register(t)}YP(){return this.q_()}getVideoStateProperty(t,n){const i=this.ampdoc.getRootNode(),s=Z().assertElement(i.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),o=this.nP(s);return(o?o.getAnalyticsDetails():e()).then((t=>t?t[n]:""))}getPlayingState(t){return this.nP(t).getPlayingState()}isMuted(t){return this.nP(t).isMuted()}userInteracted(t){return this.nP(t).userInteracted()}isRollingAd(t){return this.nP(t).isRollingAd()}pauseOtherVideos(t){this.E_.forEach((n=>{n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==Bt&&n.video.pause()}))}})}(t,"video-manager")}var rn=class{static generate(t){return function(t){const{length:n}=t;let i=5381;for(let e=0;e<n;e++)i=33*i^t.charCodeAt(e);return String(i>>>0)}(function(t){const n=[];let i=0;for(;1==(null==(e=t)?void 0:e.nodeType)&&i<25;){let e="";t.id&&(e=`/${t.id}`);const s=t.nodeName.toLowerCase();n.push(`${s}${e}${an(t)}`),i++,t=t.parentElement}var e;return n.join()}(t))}};function an(t){const{nodeName:n}=t;let i=0,e=0,s=t.previousElementSibling;for(;s&&e<25&&i<100;)s.nodeName==n&&e++,i++,s=s.previousElementSibling;return e<25&&i<100?`.${e}`:""}function ln(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function un(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),i.push.apply(i,e)}return i}function cn(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?un(Object(i),!0).forEach((function(n){ln(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):un(Object(i)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(i,n))}))}return t}var hn="__AMP__EXPERIMENT_TOGGLES";function dn(t){var n,i,e,s,o;if(t[hn])return t[hn];t[hn]=h();const r=t[hn];f(r);const l=cn(cn({},null!==(n=t.AMP_CONFIG)&&void 0!==n?n:{}),null!==(i=t.AMP_EXP)&&void 0!==i?i:m((null===(e=t.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}"));for(const t in l){const n=l[t];"number"==typeof n&&n>=0&&n<=1&&(r[t]=Math.random()<n)}const u=null===(s=t.AMP_CONFIG)||void 0===s?void 0:s["allow-doc-opt-in"];if(a(u)&&u.length){const n=t.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(n){var c;const t=(null===(c=n.getAttribute("content"))||void 0===c?void 0:c.split(","))||[];for(const n of t)u.includes(n)&&(r[n]=!0)}}Object.assign(r,function(t){var n;let i="";try{var e;"localStorage"in t&&(i=null!==(e=t.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(t){}const s=(null===(n=i)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],o=h();for(const t of s)t&&("-"==t[0]?o[t.substr(1)]=!1:o[t]=!0);return o}(t));const d=null===(o=t.AMP_CONFIG)||void 0===o?void 0:o["allow-url-opt-in"];if(a(d)&&d.length){const n=Y(t.location.originalHash||t.location.hash);for(const t of d){const i=n[`e-${t}`];"1"==i&&(r[t]=!0),"0"==i&&(r[t]=!1)}}return r}var fn,mn=(()=>self.AMP.config.urls)();function pn(t,n){return fn||(fn=self.document.createElement("a")),function(t,n,i){return t.href="",new URL(n,t.href)}(fn,t)}function vn(t,n,i="source"){return nt(null!=t,"%s %s must be available",n,i),nt("https:"==(e=(t=>"string"==typeof t?pn(t):t)(e=t)).protocol||"localhost"==e.hostname||"127.0.0.1"==e.hostname||function(t,n){const i=t.length-n.length;return i>=0&&t.indexOf(n,i)==i}(e.hostname,".localhost")||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',n,i,t),t;var e}new Set(["c","v","a","ad"]);var gn=(()=>self.AMP.config.urls)(),_n={};function Pn(t,n,i,e){const s=i||n.getAttribute("type");nt(s,"Attribute type required for <amp-ad>: %s",n);const o=function(t){let n=0;for(let i=t;i&&i!=i.parent;i=i.parent)n++;return String(n)+"-"+An(t)}(t);let r={};return function(t,n){const{dataset:i}=t;for(const t in i)t.startsWith("vars")||(n[t]=i[t]);const e=t.getAttribute("json");if(e){const i=p(e);if(void 0===i)throw Z().createError("Error parsing JSON in json attribute in element %s",t);for(const t in i)n[t]=i[t]}}(n,r),r=function(t,n,i,e){const s=Date.now(),o=n.getAttribute("width"),r=n.getAttribute("height");(e=e||{}).width=A(o),e.height=A(r),n.getAttribute("title")&&(e.title=n.getAttribute("title"));let a=t.location.href;"about:srcdoc"==a&&(a=t.parent.location.href);const l=rt(n),u=et(n,"documentInfo").get(),c=(d=n,et(d,"viewer")).getUnconfirmedReferrerUrl(),h=function(t){const n=t.ownerDocument.body;let i=0,e=0;for(let s=t;s&&s!=n;s=s.offsetParent)i+=s.offsetLeft,e+=s.offsetTop;const{offsetHeight:s,offsetWidth:o}=t;return function(t,n,i,e){return{left:t,top:n,width:i,height:e,bottom:n+e,right:t+i,x:t,y:n}}(i,e,o,s)}(n);var d,f,m,p;e._context={"ampcontextVersion":"2205120110001","ampcontextFilepath":`${mn.thirdParty}/2205120110001/ampcontext-v0.js`,"sourceUrl":u.sourceUrl,"referrer":c,"canonicalUrl":u.canonicalUrl,"pageViewId":u.pageViewId,"location":{"href":a},"startTime":s,"tagName":n.tagName,"mode":{localDev:!1,development:!1,esm:B(p).esm,test:!1,rtvVersion:B(p).rtvVersion},"canary":(f=t,!(null===(m=f.AMP_CONFIG)||void 0===m||!m.canary)),"hidden":!l.isVisible(),"initialLayoutRect":h?{"left":h.left,"top":h.top,"width":h.width,"height":h.height}:null,"domFingerprint":rn.generate(n),"experimentToggles":dn(t),"sentinel":i};const v=n.getAttribute("src");return v&&(e.src=v),e}(t,n,o,r),r.type=s,Object.assign(r._context,e),r}function yn(t){return`${gn.thirdParty}/2205120110001/vendor/${t}.mjs`}function bn(t,n,i){return function(t,n,i){const e=n.getMetaByName("amp-3p-iframe-src");if(!e)return null;const s=vn(e,'meta[name="amp-3p-iframe-src"]');nt(-1==s.indexOf("?"),"3p iframe url must not include query string %s in element %s.",s,e);const o=pn(s);return nt("localhost"==o.hostname&&!i||o.origin!=pn(t.location.href).origin,"3p iframe url must not be on the same origin as the current document %s (%s) in element %s. See https://github.com/ampproject/amphtml/blob/main/docs/spec/amp-iframe-origin-policy.md for details.",s,o.origin,e),`${s}?2205120110001`}(t,n,i)||function(t,n){return t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN=t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN||"d-"+An(t),"https://"+t.__AMP_DEFAULT_BOOTSTRAP_SUBDOMAIN+`.${gn.thirdPartyFrameHost}/2205120110001/frame.html`}(t)}function An(t){let n;if(t.crypto&&t.crypto.getRandomValues){const i=new Uint32Array(2);t.crypto.getRandomValues(i),n=String(i[0])+i[1]}else n=String(t.Math.random()).substr(2)+"0";return n}var wn="amp-ima-video";function Mn(t){const{attributes:n}=t,i={};for(let t=0;t<n.length;t++){const{name:e,value:s}=n[t];i[e]=s}return i}var Rn=class extends t.BaseElement{constructor(t){super(t),this.eb=null,this.Uu=null,this.Sv=null,this.gv=null,this.kv=null,this.KM=null,this.XM=null,this.ZM=null,this.Hy=!1,this.F_={},this.QM=new i,this.Iv=this.Iv.bind(this),this.bf=new class{constructor(t){this._f=t,this.gf=!1,this.Pf=!1,this.Af=this.Af.bind(this)}updatePlaying(t){t!==this.gf&&(this.gf=t,t?(this.Pf=!1,F(this._f,1,this.Af)):function(t,n){$(t,1,n)}(this._f,this.Af))}Af({blockSize:t,inlineSize:n}){const i=n>0&&t>0;if(i===this.Pf)return;this.Pf=i;const e=this._f;i||e.pause()}}(this.element)}buildCallback(){this.Uu=this.getViewport(),"true"===this.element.getAttribute("data-delay-ad-request")&&(this.F_.onFirstScroll=this.Uu.onScroll((()=>{this.Ov("onFirstScroll")})),gt(this.win).delay((()=>{this.Ov("onAdRequestDelayTimeout")}),3e3)),vn(this.element.getAttribute("data-tag"),"The data-tag attribute is required for <amp-video-ima> and must be https");const t=g(this.element,"SOURCE"),n=g(this.element,"TRACK"),i=r(t).concat(r(n));this.KM=i.map((t=>{const{tagName:n}=t,i=t.getAttribute("src");return"SOURCE"!=n||this.XM?"TRACK"!=n||this.ZM||(this.ZM=i):this.XM=i,[n,Mn(t)]}));const e=g(this.element,"SCRIPT")[0];var s,o;e&&"SCRIPT"==(s=e).tagName&&"APPLICATION/JSON"==(null===(o=s.getAttribute("type"))||void 0===o?void 0:o.toUpperCase())&&this.element.setAttribute("data-ima-settings",e.innerHTML)}preconnectCallback(){const{element:t}=this,n=it(this.win,"preconnect");n.preload(this.getAmpDoc(),"https://imasdk.googleapis.com/js/sdkloader/ima3.js","script");const i=t.getAttribute("data-src");i&&n.url(this.getAmpDoc(),i),this.XM&&n.url(this.getAmpDoc(),this.XM),this.ZM&&n.url(this.getAmpDoc(),this.ZM),n.url(this.getAmpDoc(),t.getAttribute("data-tag")),function(t,n,i,e){const s=bn(t,i);e.preload(i,s,"document"),e.preload(i,yn("ima-video"),"script")}(this.win,0,this.getAmpDoc(),n)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}getConsentPolicy(){return null}layoutCallback(){const{element:t,win:n}=this,i=super.getConsentPolicy(),e=i?function(t,n="default"){return _t(t).then((t=>t?t.whenPolicyResolved(n):null))}(t,i):Promise.resolve(null);return t.setAttribute("data-source-children",JSON.stringify(this.KM)),e.then((i=>{const e=function(t,n,i,e,s={}){const{allowFullscreen:o=!1,initialIntersection:r}=s;tt(void 0===n.isConnected||!0===n.isConnected);const a=Pn(t,n,i,e);r&&(a._context.initialIntersection=r);const l=t.document.createElement("iframe");_n[a.type]||(_n[a.type]=0),_n[a.type]+=1;const u=bn(t,n.getAmpDoc()),c=pn(u).hostname,h=JSON.stringify({"host":c,"bootstrap":yn(a.type),"type":a.type,"count":_n[a.type],"attributes":a});return l.src=u,l.ampLocation=pn(u),l.name=h,a.width&&(l.width=a.width),a.height&&(l.height=a.height),a.title&&(l.title=a.title),o&&l.setAttribute("allowfullscreen","true"),l.setAttribute("scrolling","no"),O(l,"border","none"),l.onload=function(){this.readyState="complete"},l.setAttribute("allow","sync-xhr 'none';"),["facebook"].includes(i)||function(t){if(!t.sandbox||!t.sandbox.supports)return;const n=["allow-top-navigation-by-user-activation","allow-popups-to-escape-sandbox"];for(let i=0;i<n.length;i++){const e=n[i];if(!t.sandbox.supports(e))return}t.sandbox=n.join(" ")+" "+["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"].join(" ")}(l),l.setAttribute("data-amp-3p-sentinel",a._context.sentinel),l}(n,t,"ima-video",{initialConsentState:i},{allowFullscreen:!0});e.title=this.element.title||"IMA video",w(e),function(t){let n=t.getAttribute("allow")||"";n+="autoplay;",t.setAttribute("allow",n)}(e),this.eb=e;const o=new s;return this.Sv=o.promise,this.gv=o.resolve,this.kv=Et(this.win,"message",(t=>this.Cb(t))),t.appendChild(e),on(t),(r=t,et(r,"video-manager")).register(this),function(t,n){F(t,0,n)}(this.element,this.Iv),this.loadPromise(e).then((()=>this.Sv));var r}))}unlayoutCallback(){this.eb&&(y(this.eb),this.eb=null),this.kv&&this.kv(),$(this.element,0,this.Iv);const t=new s;return this.Sv=t.promise,this.gv=t.resolve,this.bf.updatePlaying(!1),!0}Iv({height:t,width:n}){this.eb&&this.Ov("resize",{"width":n,"height":t})}Ov(t,n){this.Sv&&this.Sv.then((()=>{this.eb&&this.eb.contentWindow&&this.eb.contentWindow.postMessage(JSON.stringify({"event":"command","func":t,"args":n||""}),"*")})),this.F_[t]&&this.F_[t]()}Cb(t){if(t.source!=this.eb.contentWindow)return;const n=It(t);if(!c(n))return;const e=n.event;if("registered"!==(s=e)&&"load"!==s&&"loadedmetadata"!==s&&"loadeddata"!==s&&"play"!==s&&"playing"!==s&&"pause"!==s&&"ended"!==s&&"muted"!==s&&"unmuted"!==s&&"amp:video:visibility"!==s&&"reloaded"!==s&&"ad_start"!==s&&"ad_end"!==s&&"amp:video:tick"!==s){var s;if(e==i.IMA_PLAYER_DATA)return this.QM=n.data,void b(this.element,"loadedmetadata");"fullscreenchange"!=e||(this.Hy=!!n.isFullscreen)}else{switch(e){case zt:this.gv(this.eb);break;case Dt:case Nt:case Lt:this.bf.updatePlaying(!0);break;case Ut:case Wt:this.bf.updatePlaying(!1)}b(this.element,e)}}createPlaceholderCallback(){const{poster:t}=this.element.dataset;if(!t)return null;const n=new Image;return n.src=t,n.setAttribute("placeholder",""),n.setAttribute("loading","lazy"),w(n),n}pauseCallback(){this.pause()}supportsPlatform(){return!0}isInteractive(){return!0}play(t){this.Ov("play")}pause(){this.Ov("pause")}mute(){this.Ov("mute")}unmute(){this.Ov("unmute")}showControls(){this.Ov("showControls")}hideControls(){this.Ov("hideControls")}fullscreenEnter(){this.Ov("requestFullscreen")}fullscreenExit(){this.Ov("exitFullscreen")}isFullscreen(){return this.Hy}getMetadata(){}preimplementsMediaSessionAPI(){return!1}preimplementsAutoFullscreen(){return!1}getCurrentTime(){return this.QM.currentTime}getDuration(){return this.QM.duration}getPlayedRanges(){return this.QM.playedRanges}seekTo(t){this.user().error(wn,"`seekTo` not supported.")}};t.registerElement(wn,Rn)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-ima-video-0.1.mjs.map