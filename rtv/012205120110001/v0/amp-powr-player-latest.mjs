;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-powr-player",ev:"0.1",l:!0,f:function(t,i){(()=>{var i;function n(){return i||(i=Promise.resolve(void 0))}var e=class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}};function s(t){return new Promise((i=>{i(t())}))}var{isArray:o}=Array;function r(t){return o(t)?t:[t]}var{hasOwnProperty:a,toString:h}=Object.prototype;function l(t){return"[object Object]"===h.call(t)}function u(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function c(t){return"number"==typeof t&&isFinite(t)}function d(t,i,n,e,s,o,r,a,h,l,u){return t}function f(t,i){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==i||i(t),null}}function m(t){return(t.ownerDocument||t).defaultView}var p,v={bubbles:!0,cancelable:!0};function _(t){var i;null===(i=t.parentElement)||void 0===i||i.removeChild(t)}function P(t,i,n,e){const s=n||{};d(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=s;const{bubbles:r,cancelable:a}=e||v;o.initEvent(i,r,a),t.dispatchEvent(o)}function g(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:n,stack:e}=t,s=new Error(n);for(const i in t)s[i]=t[i];return s.stack=e,s}function y(t){let i=null,n="";for(const t of arguments)t instanceof Error&&!i?i=g(t):(n&&(n+=" "),n+=t);return i?n&&(i.message=n+": "+i.message):i=new Error(n),i}function A(t){var i,n;null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t)}function b(t,...i){try{return t.apply(null,i)}catch(t){!function(t){const i=y.apply(null,arguments);setTimeout((()=>{throw A(i),i}))}(t)}}function w(t){const i=y.apply(null,arguments);return i.expected=!0,i}function M(t,...i){A(w.apply(null,i))}var E=["Webkit","webkit","Moz","moz","ms","O","o"],R={"getPropertyPriority":()=>"","getPropertyValue":()=>""};function T(t,i,n,e,s){const o=function(t,i,n){if(i.startsWith("--"))return i;p||(p=u());let e=p[i];if(!e||n){if(e=i,void 0===t[i]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),s=function(t,i){for(let n=0;n<E.length;n++){const e=E[n]+i;if(void 0!==t[e])return e}return""}(t,n);void 0!==t[s]&&(e=s)}n||(p[i]=e)}return e}(t.style,i,s);if(!o)return;const r=e?n+e:n;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return E.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(o),r)}var I=/vertical/,V=new WeakMap,k=new WeakMap,S=new WeakMap;function q(t){let i=V.get(t);return i||(i=new t.ResizeObserver(x),V.set(t,i)),i}function x(t){const i=new Set;for(let n=t.length-1;n>=0;n--){const e=t[n],{target:s}=e;if(i.has(s))continue;i.add(s);const o=k.get(s);if(o){S.set(s,e);for(let t=0;t<o.length;t++){const{callback:i,type:n}=o[t];C(n,i,e)}}}}function C(t,i,n){if(0==t){const{contentRect:t}=n,{height:e,width:s}=t;b(i,{width:s,height:e})}else if(1==t){const{borderBoxSize:t}=n;let e;if(t)e=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=n,i=m(t),s=I.test(function(t,i){return t.getComputedStyle(i)||R}(i,t).writingMode),{offsetHeight:o,offsetWidth:r}=t;let a,h;s?(h=r,a=o):(a=r,h=o),e={inlineSize:a,blockSize:h}}b(i,e)}}function O(t){let i=!1,n=null,e=t;return(...t)=>(i||(n=e.apply(self,t),i=!0,e=null),n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var F=self.__AMP_LOG;function $(t){return F.user||(F.user=z()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(F.user.win,t)?F.userForEmbed||(F.userForEmbed=z()):F.user}function z(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function j(t,i,n,e,s,o,r,a,h,l,u){return t}function Y(t,i,n,e,s,o,r,a,h,l,u){return $().assert(t,i,n,e,s,o,r,a,h,l,u)}function W(t,i){return B(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function L(t,i){return B(U(N(t)),i)}function D(t,i){const n=U(N(t));return H(n,i)?B(n,i):null}function N(t){return t.nodeType?(i=m(t),W(i,"ampdoc")).getAmpDoc(t):t;var i}function U(t){const i=N(t);return i.isSingleDoc()?i.win:i}function B(t,i){j(H(t,i));const n=J(t)[i];return n.obj||(j(n.ctor),j(n.context),n.obj=new n.ctor(n.context),j(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function J(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function H(t,i){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var Z,G,K,Q=t=>D(t,"action"),X=t=>W(t,"platform"),tt=t=>B(t,"timer"),it=t=>D(t,"url"),nt=t=>L(t,"viewport");function et(t,i,n={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=n,r=function(t){return t.parent&&t.parent!=t}(i)&&(e||s)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function st(t){var i;let n=null===(i=Z)||void 0===i?void 0:i.get(t);if(!n){const i=function(t){Z||(Z=new WeakMap,G=new WeakMap),d(G);let i=G.get(t);return i||(i=et((t=>{const n=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];n.has(o)||(n.add(o),d(i),i.unobserve(o),d(Z),null===(e=Z.get(o))||void 0===e||e.resolve(t[s]),Z.delete(o))}}),t,{needsRootBounds:!0}),G.set(t,i)),i}(m(t));d(Z),i.observe(t),n=new e,Z.set(t,n)}return n.promise}function ot(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const i=t.document.createElement("video");var n;return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,i){for(const n in i)T(t,n,i[n])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,s((()=>n.play())).catch((()=>{})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function rt(t){return t.querySelector("video, iframe")}function at(t,i){const n=s((()=>t.play(!!i)));return n.catch((t=>{M(0,t)})),n}function ht(t,i,n,e){let s=t,o=n,r=t=>{try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}};const a=function(){if(void 0!==K)return K;K=!1;try{const t={get capture(){return K=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return K}(),h=!(null==e||!e.capture);return s.addEventListener(i,r,a?e:h),()=>{null==s||s.removeEventListener(i,r,a?e:h),o=null,s=null,r=null}}function lt(t,i,n,e){const s={detail:n};return Object.assign(s,e),new t.CustomEvent(i,s)}function ut(t,i,n,e){return ht(t,i,n,e)}function ct(t){return t.data}new WeakMap,new WeakMap;var dt,ft=class{constructor(){this.y_=!1,this.M_=new class{constructor(){this.St=null}add(t){return this.St||(this.St=[]),this.St.push(t),()=>{this.remove(t)}}remove(t){this.St&&function(t,i){const n=t.indexOf(i);-1!=n&&t.splice(n,1)}(this.St,t)}removeAll(){this.St&&(this.St.length=0)}fire(t){if(this.St)for(const i of this.St.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.St)||void 0===i?void 0:i.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.M_.add(t)}beginSession(){this.y_=!0}endSession(){this.y_&&this.M_.fire(),this.y_=!1}isSessionActive(){return this.y_}};function mt(t){const i=t.ownerDocument||t;return dt&&dt.ownerDocument===i||(dt=i.createElement("div")),pt}function pt(t){return function(t,i){d(1===i.length),t.innerHTML=i[0];const n=t.firstElementChild;return d(n),d(!n.nextElementSibling),t.removeChild(n),n}(dt,t)}var vt=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],_t=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Pt(t,i,n){if(i[n])return i[n];const e=t.querySelector(`style[${n}], link[${n}]`);return e?(i[n]=e,e):null}function gt(t,i){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==i)return!0;return!1}var yt={"title":"","artist":"","album":"","artwork":[{"src":""}]},At="registered",bt="load",wt="playing",Mt="pause",Et="ended",Rt="muted",Tt="unmuted",It="ad_start",Vt="ad_end",kt="playing_manual",St="paused",qt="video-play",xt="user-interacted";function Ct(t){t.signals().signal(xt)}var Ot="video-manager",Ft=(t,i)=>!!t&&(t.video===i||t.video.element===i);function $t(t,i){const n=i.top+i.height/2,e=t.getSize().height/2;return Math.abs(n-e)}function zt(t){return 10*t*5}var jt=t=>!!t&&!isNaN(t)&&t>1;function Yt(t,i,n){const{video:e}=t;t.getAnalyticsDetails().then((t=>{n&&Object.assign(t,n),P(e.element,i,t)}))}function Wt(t){!function(t,i,e,s){const r=N(t),a=U(r);!function(t,i,n,e,s,o){const r=J(t);let a=r[n];a||(a=r[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=i,a.sharedInstance=!1,a.resolve&&B(t,n))}(a,r,i,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=O((()=>function(t){!function(t,i,n,e,s){const o=t.getHeadNode(),r=function(t,i,n,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=u());const o=!n&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,r=n?"amp-runtime":o?`amp-extension=${e}`:null;if(r){const n=Pt(t,s,r);if(n)return"STYLE"==n.tagName&&n.textContent!==i&&(n.textContent=i),n}const a=(t.ownerDocument||t).createElement("style");a.textContent=i;let h=null;return n?a.setAttribute("amp-runtime",""):o?(a.setAttribute("amp-extension",e||""),h=Pt(t,s,"amp-runtime")):(e&&a.setAttribute(e,""),h=t.lastChild),function(t,i,n=null){if(!n)return void function(t,i){t.insertBefore(i,t.firstChild)}(t,i);const e=n.nextSibling;t.insertBefore(i,e)}(t,a,h),r&&(s[r]=a),a}(o,function(t,i){const n=t.__AMP_CSS_TR;return n?n(i):i}(o,i),e||!1,s||null);if(n){const i=t.getRootNode();if(gt(i,r))return n(r),r;const e=setInterval((()=>{gt(i,r)&&(clearInterval(e),n(r))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.E_=null,this.w_=null,this.R_=null,this.Ie=tt(t.win),this.T_=Q(t.getHeadNode()),this.V_=()=>this.I_(),this.q_=O((()=>new class{constructor(t,i){this.x_=i,this.Ni=t,this.C_=null,this.S_=null,this.E_=[],this.F_=[],this.O_=()=>this.j_(),this.Y_=t=>this.L_(t)==kt,this.D_=(t,i)=>this.W_(t,i),this.z_(),this.N_()}dispose(){this.F_.forEach((t=>t())),this.F_.length=0}register(t){const{video:i}=t,{element:n}=i;this.U_(n)&&(this.E_.push(i),ut(n,Mt,this.O_),ut(n,wt,this.O_),ut(n,Et,this.O_),i.signals().whenSignal(xt).then(this.O_),this.j_())}N_(){const t=this.Ni.getRootNode(),i=()=>this.B_();this.F_.push(ut(t,"webkitfullscreenchange",i),ut(t,"mozfullscreenchange",i),ut(t,"fullscreenchange",i),ut(t,"MSFullscreenChange",i))}isInLandscape(){return(t=this.Ni.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}U_(t){if("video"==rt(t).tagName.toLowerCase())return!0;const i=X(this.Ni.win);return!i.isIos()&&!i.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}B_(){this.C_=null}z_(){const{win:t}=this.Ni,{screen:i}=t;if(i&&"orientation"in i){const t=i.orientation;this.F_.push(ut(t,"change",(()=>this.J_())))}this.F_.push(ut(t,"orientationchange",(()=>this.J_())))}J_(){this.isInLandscape()?null!=this.S_&&this.H_(this.S_):this.C_&&this.Z_(this.C_)}H_(t){const i=X(this.Ni.win);this.C_=t,i.isAndroid()&&i.isChrome()?t.fullscreenEnter():this.G_(t).then((()=>t.fullscreenEnter()))}Z_(t){this.C_=null,this.G_(t,"center").then((()=>t.fullscreenExit()))}G_(t,i=null){const{element:e}=t,s=this.K_();return this.Q_().then((()=>st(e))).then((({boundingClientRect:t})=>{const{bottom:o,top:r}=t,a=s.getSize().height;if(r>=0&&o<=a)return n();const h=i||(o>a?"bottom":"top");return s.animateScrollIntoView(e,h)}))}K_(){return nt(this.Ni)}Q_(){return tt(this.Ni.win).promise(330)}j_(){if(this.isInLandscape())return Promise.resolve(this.S_);this.S_=null;const t=this.E_.filter(this.Y_).map((t=>st(t.element)));return Promise.all(t).then((t=>{const i=t.sort(this.D_)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((t=>this.S_=t)):this.S_}))}W_(t,i){const{boundingClientRect:n,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=i,r=e-o;if(Math.abs(r)>.1)return r;const a=nt(this.Ni),h=$t(a,n),l=$t(a,s);return h<l||h>l?h-l:n.top-s.top}L_(t){return this.x_.getPlayingState(t)}}(this.ampdoc,this))),this.Ie.delay(this.V_,1e3)}dispose(){if(this.q_().dispose(),this.w_.disconnect(),this.w_=null,this.E_)for(let t=0;t<this.E_.length;t++)this.E_[t].dispose()}I_(){for(let t=0;t<this.E_.length;t++){const i=this.E_[t];i.getPlayingState()!==St&&(Yt(i,"video-seconds-played"),this.X_(i))}this.Ie.delay(this.V_,1e3)}X_(t){const i="timeUpdate",n=t.video.getCurrentTime(),e=t.video.getDuration();if(c(n)&&c(e)&&e>0){const s=n/e,o=lt(this.ampdoc.win,`${Ot}.${i}`,{"time":n,"percent":s});this.T_.trigger(t.video.element,i,o,1)}}register(t){j(t);const i=t;if(this.tP(t),!t.supportsPlatform())return;if(this.iP(t))return;if(!this.w_){const t=t=>t.forEach((({isIntersecting:t,target:i})=>{this.nP(i).updateVisibility(t)}));this.w_=et(t,this.ampdoc.win,{threshold:.5})}this.w_.observe(i.element),ut(i.element,"reloaded",(()=>n.videoLoaded())),this.E_=this.E_||[];const n=new class{constructor(t,i){this.x_=t,this.Ni=t.ampdoc,this.video=i,this.eP=!0,this.sP=!1,this.gf=!1,this.oP=!1,this.rs=!1,this.rP=new ft,this.rP.onSessionEnd((()=>Yt(this,"video-session"))),this.aP=new ft,this.aP.onSessionEnd((()=>Yt(this,"video-session-visible"))),this.hP=O((()=>new class{constructor(t,i){this.Ie=tt(t),this.lP=i,this.F_=null,this.uP=0,this.cP=0}start(){const{element:t}=this.lP.video;this.stop(),this.F_=this.F_||[],this.dP()?this.fP(this.cP):this.F_.push(function(t,i,n,e){let s=n;const o=ht(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,(()=>{this.dP()&&this.fP(this.cP)}))),this.F_.push(ut(t,Et,(()=>{this.dP()&&this.mP(100)})))}stop(){if(this.F_){for(;this.F_.length>0;)this.F_.pop()();this.cP++}}dP(){const{video:t}=this.lP,i=t.getDuration();if(!jt(i))return!1;if(zt(i)<250){const i=Math.ceil(5);this.pP("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0}pP(...t){$().warn.apply($(),[Ot].concat(t))}fP(t){if(t!=this.cP)return;const{lP:i,Ie:n}=this,{video:e}=i,s=()=>this.fP(t);if(i.getPlayingState()==St)return void n.delay(s,500);const o=e.getDuration();if(!jt(o))return void n.delay(s,500);const r=(l=zt(o),d(!0),Math.min(Math.max(l,250),4e3)),a=e.getCurrentTime()/o*100,h=5*Math.floor(a/5);var l;j(c(h)),this.mP(h),n.delay(s,r)}mP(t){t<=0||this.uP!=t&&(this.uP=t,this.vP(t))}vP(t){Yt(this.lP,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.Ni.win,this))),this._P=!1,this.gP=!1,this.PP=null,this.dt=!1,this.AP=!1,this.hasAutoplay=i.element.hasAttribute("autoplay"),this.hasAutoplay&&this.x_.installAutoplayStyles(),this.yP=yt,this.bP=()=>{at(this.video,!1)},this.MP=()=>{this.video.pause()},ut(i.element,bt,(()=>this.videoLoaded())),ut(i.element,Mt,(()=>this.EP())),ut(i.element,"play",(()=>{this.AP=!0,Yt(this,qt)})),ut(i.element,wt,(()=>this.wP())),ut(i.element,Rt,(()=>this.dt=!0)),ut(i.element,Tt,(()=>{this.dt=!1,this.x_.pauseOtherVideos(this)})),ut(i.element,"amp:video:tick",(t=>{const i=ct(t),n=i.eventType;n&&this.RP(n,i.vars)})),ut(i.element,Et,(()=>{this.oP=!1,Yt(this,"video-ended")})),ut(i.element,It,(()=>{this.oP=!0,Yt(this,"video-ad-start")})),ut(i.element,Vt,(()=>{this.oP=!1,Yt(this,"video-ad-end")})),i.signals().whenSignal(At).then((()=>this.TP())),this.VP=O((()=>{const t="firstPlay",i=lt(this.Ni.win,t,{}),{element:n}=this.video;Q(n).trigger(n,t,i,1)})),this.IP()}dispose(){this.hP().stop()}RP(t,i){const n={"__amp:eventType":t};Object.keys(i).forEach((t=>{n[`custom_${t}`]=i[t]})),Yt(this,"video-hosted-custom",n)}IP(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.eP=!1,this.gf&&this.video.pause()}))}isMuted(){return this.dt}isPlaybackManaged(){return this.eP}TP(){this.kP()&&this.x_.registerForAutoFullscreen(this),this.hasAutoplay&&this.qP()}kP(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&Y(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}wP(){this.gf=!0,this.getPlayingState()==kt&&(this.VP(),this.x_.pauseOtherVideos(this));const{video:t}=this,{element:i}=t;t.preimplementsMediaSessionAPI()||i.classList.contains("i-amphtml-disable-mediasession")||(function(t,i){const n=it(t);if(i&&i.artwork){const{artwork:t}=i;j(o(t)),t.forEach((t=>{if(t){const i=l(t)?t.src:t;Y(n.isProtocolValid(i))}}))}}(i,this.yP),function(t,i,n,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(yt),s.mediaSession.metadata=new t.MediaMetadata(i),s.mediaSession.setActionHandler("play",n),s.mediaSession.setActionHandler("pause",e))}(this.Ni.win,this.yP,this.bP,this.MP)),this.rP.beginSession(),this.rs&&this.aP.beginSession(),this.AP||Yt(this,qt)}EP(){Yt(this,"video-pause"),this.gf=!1,this.gP?this.gP=!1:this.rP.endSession()}videoLoaded(){this.sP=!0,this.PP=rt(this.video.element),this.xP(),this.hP().start(),this.rs&&this.CP()}xP(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.yP=u(this.video.getMetadata()));const t=this.Ni.win.document;if(!this.yP.artwork||0==this.yP.artwork.length){const i=function(t){const i=t.querySelector('script[type="application/ld+json"]');if(!i)return;const n=f(i.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}(t)||function(t){const i=t.querySelector('meta[property="og:image"]');return i?i.getAttribute("content"):void 0}(t)||function(t){const i=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return i?i.getAttribute("href"):void 0}(t);i&&(this.yP.artwork=[{"src":i}])}if(!this.yP.title){const i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.PP.getAttribute("title")||this.PP.getAttribute("aria-label")||t.title;i&&(this.yP.title=i)}}SP(){this.sP&&this.CP()}CP(){this.Ni.isVisible()&&ot(this.Ni.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.FP():this.OP()}))}qP(){this.video.isInteractive()&&this.video.hideControls(),ot(this.Ni.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.jP()):this.video.showControls()}))}jP(){const{video:t}=this,{element:i,win:n}=this.video;if(i.hasAttribute("noaudio")||i.signals().get(xt))return;const e=function(t,i){const n=mt(i)(_t),e=n.firstElementChild;for(let t=0;t<4;t++){const i=e.cloneNode(!0),s=i.children;for(let i=0;i<s.length;i++)s[i].classList.add(`amp-video-eq-${t+1}-${i+1}`);n.appendChild(i)}return _(e),n}(0,i),s=[e];function o(i){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,i)}))}))}function r(i){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",i)))}const a=[ut(i,Mt,(()=>r(!1))),ut(i,wt,(()=>r(!0))),ut(i,It,(()=>{o(!1),t.showControls()})),ut(i,Vt,(()=>{o(!0),t.hideControls()})),ut(i,Tt,(()=>Ct(t)))];if(t.isInteractive()){t.hideControls();const n=function(t,i){const n=mt(t)(vt);return i&&i.title&&n.setAttribute("aria-label",i.title),n}(i,this.yP);s.push(n),a.push(ut(n,"click",(()=>Ct(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{i.appendChild(t)}))})),this.oP&&o(!1),t.signals().whenSignal(xt).then((()=>{this.VP(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{_(t)}))}))}))}FP(){this.eP&&(this.rs?(this.aP.beginSession(),at(this.video,!0),this._P=!0):(this.gf&&this.aP.endSession(),this.video.pause(),this.gP=!0))}OP(){this.rs?this.aP.beginSession():this.gf&&this.aP.endSession()}updateVisibility(t){const i=this.rs;this.rs=t,t!=i&&this.SP()}getPlayingState(){return this.gf?this.gf&&this._P&&!this.userInteracted()?"playing_auto":kt:St}isRollingAd(){return this.oP}userInteracted(){return null!=this.video.signals().get(xt)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([ot(this.Ni.win),st(t.element)]).then((i=>{const n=i[0],e=i[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&n,a=t.getPlayedRanges(),h=a.reduce(((t,i)=>t+i[1]-i[0]),0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.dt,"playedTotal":h,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.E_.push(n);const{element:e}=n.video;P(e,At),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(At),e.classList.add("i-amphtml-video-interface")}tP(t){n("play",(()=>at(t,!1))),n("pause",(()=>t.pause())),n("mute",(()=>t.mute())),n("unmute",(()=>t.unmute()));const i=()=>t.fullscreenEnter();function n(i,n){t.registerAction(i,(()=>{Ct(t),n()}),1)}n("fullscreenenter",i),n("fullscreen",i)}iP(t){if(Ft(this.R_,t))return this.R_;for(let i=0;this.E_&&i<this.E_.length;i++){const n=this.E_[i];if(Ft(n,t))return this.R_=n,n}return null}nP(t){return j(this.iP(t))}registerForAutoFullscreen(t){this.q_().register(t)}YP(){return this.q_()}getVideoStateProperty(t,i){const e=this.ampdoc.getRootNode(),s=$().assertElement(e.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),o=this.nP(s);return(o?o.getAnalyticsDetails():n()).then((t=>t?t[i]:""))}getPlayingState(t){return this.nP(t).getPlayingState()}isMuted(t){return this.nP(t).isMuted()}userInteracted(t){return this.nP(t).userInteracted()}isRollingAd(t){return this.nP(t).isRollingAd()}pauseOtherVideos(t){this.E_.forEach((i=>{i.isPlaybackManaged()&&i!==t&&i.getPlayingState()==kt&&i.video.pause()}))}})}(t,"video-manager")}var Lt=["<iframe frameborder=0 allowfullscreen></iframe>"];function Dt(t,i){return function(t,i,n){if(!i)return t;const e=t.split("#",2),s=e[0].split("?",2);let o=s[0]+(s[1]?`?${s[1]}&${i}`:`?${i}`);return o+=e[1]?`#${e[1]}`:"",o}(t,function(t){const i=[];for(const s in t){let o=t[s];if(null!=o){o=r(o);for(let t=0;t<o.length;t++)i.push((n=s,e=o[t],`${encodeURIComponent(n)}=${encodeURIComponent(e)}`))}}var n,e;return i.join("&")}(i))}new Set(["c","v","a","ad"]);var Nt="amp-powr-player",Ut={"ready":bt,"playing":wt,"pause":Mt,"ended":Et,"ads-ad-started":It,"ads-ad-ended":Vt},Bt=class extends t.BaseElement{constructor(t){super(t),this.eb=null,this.Rp=!1,this.dt=!1,this.SM=!1,this.Sv=null,this.gv=null,this.kv=null,this.bv=null,this.Xy=null,this.bf=new class{constructor(t){this._f=t,this.gf=!1,this.Pf=!1,this.Af=this.Af.bind(this)}updatePlaying(t){t!==this.gf&&(this.gf=t,t?(this.Pf=!1,function(t,i){!function(t,i,n){const e=t.ownerDocument.defaultView;if(!e)return;let s=k.get(t);if(s||(s=[],k.set(t,s),q(e).observe(t)),!s.some((t=>t.callback===n&&1===t.type))){s.push({type:1,callback:n});const i=S.get(t);i&&setTimeout((()=>C(1,n,i)))}}(t,0,i)}(this._f,this.Af)):function(t,i){!function(t,i,n){const e=k.get(t);if(e&&(function(t,i){const e=[];let s=0;for(let i=0;i<t.length;i++){const r=t[i];(o=r).callback===n&&1===o.type?e.push(r):(s<i&&(t[s]=r),s++)}var o;s<t.length&&(t.length=s)}(e),0==e.length)){k.delete(t),S.delete(t);const i=t.ownerDocument.defaultView;i&&q(i).unobserve(t)}}(t,0,i)}(this._f,this.Af))}Af({blockSize:t,inlineSize:i}){const n=i>0&&t>0;if(n===this.Pf)return;this.Pf=n;const e=this._f;n||e.pause()}}(this.element)}preconnectCallback(){var t;(t=this.win,W(t,"preconnect")).url(this.getAmpDoc(),"https://player.powr.com")}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){this.Xy=D(this.element,"url-replace");const t=new e;this.Sv=t.promise,this.gv=t.resolve}layoutCallback(){const t=function(t,i,n,e){const{element:s}=t,o=mt(s)(Lt);return function(t,i,n,e){const s=r(["referrerpolicy"]);for(const t of s){const e=i.getAttribute(t);null!==e&&n.setAttribute(t,e)}}(0,t.element,o),o.src=it(s).assertHttpsUrl(i,s),function(t,i){t.classList.add("i-amphtml-fill-content")}(o),s.appendChild(o),o}(this,this.Mv());return this.eb=t,this.kv=ut(this.win,"message",(t=>this.Cb(t))),this.bf.updatePlaying(!0),this.loadPromise(t).then((()=>this.Sv))}Ov(t,i){this.Sv.then((()=>{this.eb&&this.eb.contentWindow&&this.eb.contentWindow.postMessage(JSON.stringify({"command":t,"args":i}),"https://player.powr.com")}))}Cb(t){const{element:i}=this;if(t.source!=this.eb.contentWindow)return;const n=ct(t);if(!(e=n)||!l(e)&&!e.startsWith("{"))return;var e;const s=l(r=n)?r:f(r);var r;if(null==s)return;const a=s.event;var h;if(a&&("ready"===a&&this.$A(s),"playing"===a&&(this.Rp=!0),"pause"===a&&(this.Rp=!1),!function(t,i,n){if(null==n[i])return!1;const e=n[i];return(o(e)?e:[e]).forEach((i=>{P(t,i)})),!0}(i,a,Ut)&&"volumechange"===a)){const t=s.muted;if(null==t||this.dt==t)return;return this.dt=t,void P(i,(h=this.dt,h?Rt:Tt))}}$A(t){this.SM=!0;const{element:i}=this;var n;Wt(i),(n=i,L(n,"video-manager")).register(this),this.gv(this.eb)}Mv(){const{element:t}=this,i=Y(t.getAttribute("data-account"),"The data-account attribute is required for <amp-powr-player> %s",t);this.bv=Y(t.getAttribute("data-player"),"The data-player attribute is required for <amp-powr-player> %s",t);const n=t.getAttribute("data-video"),e=t.getAttribute("data-terms");Y(n||e,"The data-video or data-terms attribute is required for <amp-powr-player> %s",t);const s={"account":i,"player":this.bv};n&&(s.video=n),e&&(s.terms=e);const o=Dt("https://player.powr.com/iframe.html",s),r=t.getAttribute("data-referrer");return r&&t.setAttribute("data-param-referrer",this.Xy.expandUrlSync(r)),t.setAttribute("data-param-playsinline","true"),Dt(o,function(t,i,n){const{dataset:e}=t,s={},o=/^param(.+)/;for(const t in e){const i=t.match(o);i&&(s[i[1][0].toLowerCase()+i[1].substr(1)]=e[t])}return s}(t))}mutatedAttributesCallback(t){const i=t["data-account"],n=t["data-player"]||t["data-player-id"],e=t["data-video"];void 0===i&&void 0===n&&void 0===e||this.eb&&(this.eb.src=this.Mv())}pauseCallback(){this.eb&&this.eb.contentWindow&&this.SM&&this.Rp&&this.pause()}unlayoutOnPause(){return!this.SM}unlayoutCallback(){this.eb&&(_(this.eb),this.eb=null),this.kv&&this.kv();const t=new e;return this.Sv=t.promise,this.gv=t.resolve,this.bf.updatePlaying(!1),!0}supportsPlatform(){return!0}isInteractive(){return!0}play(t){this.Ov("play")}pause(){this.Ov("pause")}mute(){this.Ov("muted",!0)}unmute(){this.Ov("muted",!1)}showControls(){this.Ov("controls",!0)}hideControls(){this.Ov("controls",!1)}fullscreenEnter(){this.eb&&function(t){const i=t.requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen;i&&i.call(t)}(this.eb)}fullscreenExit(){this.eb&&function(t){const i=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(i)return void i.call(t);const{ownerDocument:n}=t;if(!n)return;const e=n.cancelFullScreen||n.exitFullscreen||n.webkitExitFullscreen||n.webkitCancelFullScreen||n.mozCancelFullScreen||n.msExitFullscreen;e&&e.call(n)}(this.eb)}isFullscreen(){return!!this.eb&&function(t){const{webkitDisplayingFullscreen:i}=t;if(void 0!==i)return i;const{ownerDocument:n}=t;return!!n&&(n.fullscreenElement||n.webkitFullscreenElement||n.mozFullScreenElement||n.webkitCurrentFullScreenElement)==t}(this.eb)}preimplementsAutoFullscreen(){return!1}getMetadata(){}preimplementsMediaSessionAPI(){return!0}getCurrentTime(){return 0}getDuration(){return 1}getPlayedRanges(){return[]}seekTo(t){this.user().error(Nt,"`seekTo` not supported.")}};t.registerElement(Nt,Bt)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-powr-player-0.1.mjs.map