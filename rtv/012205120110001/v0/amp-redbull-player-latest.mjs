;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-redbull-player",ev:"0.1",l:!0,f:function(t,i){(()=>{var{isArray:i}=Array;function n(t){return i(t)?t:[t]}var{hasOwnProperty:e,toString:s}=Object.prototype;function o(t){return"[object Object]"===s.call(t)}function r(t){const i=Object.create(null);return t&&Object.assign(i,t),i}function a(t){return"number"==typeof t&&isFinite(t)}function l(t,i,n,e,s,o,r,a,l,h,u){return t}function h(t,i){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==i||i(t),null}}function u(t){return(t.ownerDocument||t).defaultView}var c={bubbles:!0,cancelable:!0};function d(t){var i;null===(i=t.parentElement)||void 0===i||i.removeChild(t)}function f(t,i,n,e){const s=n||{};l(t.ownerDocument);const o=t.ownerDocument.createEvent("Event");o.data=s;const{bubbles:r,cancelable:a}=e||c;o.initEvent(i,r,a),t.dispatchEvent(o)}function m(t){const i=Object.getOwnPropertyDescriptor(t,"message");if(null!=i&&i.writable)return t;const{message:n,stack:e}=t,s=new Error(n);for(const i in t)s[i]=t[i];return s.stack=e,s}function p(t){let i=null,n="";for(const t of arguments)t instanceof Error&&!i?i=m(t):(n&&(n+=" "),n+=t);return i?n&&(i.message=n+": "+i.message):i=new Error(n),i}function v(t){const i=p.apply(null,arguments);return i.expected=!0,i}function _(t,...i){var n,e,s;n=v.apply(null,i),null===(e=(s=self).__AMP_REPORT_ERROR)||void 0===e||e.call(s,n)}function g(t){let i=!1,n=null,e=t;return(...t)=>(i||(n=e.apply(self,t),i=!0,e=null),n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var P,A=self.__AMP_LOG;function y(t){return A.user||(A.user=b()),function(t,i){return i&&i.ownerDocument.defaultView!=t}(A.user.win,t)?A.userForEmbed||(A.userForEmbed=b()):A.user}function b(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function M(t,i,n,e,s,o,r,a,l,h,u){return t}function E(t,i,n,e,s,o,r,a,l,h,u){return y().assert(t,i,n,e,s,o,r,a,l,h,u)}function I(){return P||(P=Promise.resolve(void 0))}function R(t){return new Promise((i=>{i(t())}))}function T(t,i){return x(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function V(t,i){return x(q(k(t)),i)}function w(t,i){const n=q(k(t));return S(n,i)?x(n,i):null}function k(t){return t.nodeType?(i=u(t),T(i,"ampdoc")).getAmpDoc(t):t;var i}function q(t){const i=k(t);return i.isSingleDoc()?i.win:i}function x(t,i){M(S(t,i));const n=C(t)[i];return n.obj||(M(n.ctor),M(n.context),n.obj=new n.ctor(n.context),M(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function C(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}function S(t,i){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!n||!n.ctor)}var O,$,F,j=t=>w(t,"action"),N=t=>T(t,"platform"),Y=t=>x(t,"timer"),L=t=>w(t,"url"),z=t=>V(t,"viewport");function U(t,i,n={}){const{needsRootBounds:e,rootMargin:s,threshold:o}=n,r=function(t){return t.parent&&t.parent!=t}(i)&&(e||s)?i.document:void 0;return new i.IntersectionObserver(t,{threshold:o,root:r,rootMargin:s})}function D(t){var i;let n=null===(i=O)||void 0===i?void 0:i.get(t);if(!n){const i=function(t){O||(O=new WeakMap,$=new WeakMap),l($);let i=$.get(t);return i||(i=U((t=>{const n=new Set;for(let s=t.length-1;s>=0;s--){var e;const{target:o}=t[s];n.has(o)||(n.add(o),l(i),i.unobserve(o),l(O),null===(e=O.get(o))||void 0===e||e.resolve(t[s]),O.delete(o))}}),t,{needsRootBounds:!0}),$.set(t,i)),i}(u(t));l(O),i.observe(t),n=new class{constructor(){this.promise=new Promise(((t,i)=>{this.resolve=t,this.reject=i}))}},O.set(t,n)}return n.promise}new WeakMap,new WeakMap;var W,B=["Webkit","webkit","Moz","moz","ms","O","o"];function J(t,i,n,e,s){const o=function(t,i,n){if(i.startsWith("--"))return i;F||(F=r());let e=F[i];if(!e||n){if(e=i,void 0===t[i]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(i),s=function(t,i){for(let n=0;n<B.length;n++){const e=B[n]+i;if(void 0!==t[e])return e}return""}(t,n);void 0!==t[s]&&(e=s)}n||(F[i]=e)}return e}(t.style,i,s);if(!o)return;const a=e?n+e:n;t.style.setProperty(function(t){const i=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return B.some((t=>i.startsWith(t+"-")))?`-${i}`:i}(o),a)}function H(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){const i=t.document.createElement("video");var n;return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,i){for(const n in i)J(t,n,i[n])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,R((()=>n.play())).catch((()=>{})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function Z(t){return t.querySelector("video, iframe")}function G(t,i){const n=R((()=>t.play(!!i)));return n.catch((t=>{_(0,t)})),n}function K(t,i,n,e){let s=t,o=n,r=t=>{try{return o(t)}catch(t){var i,n;throw null===(i=(n=self).__AMP_REPORT_ERROR)||void 0===i||i.call(n,t),t}};const a=function(){if(void 0!==W)return W;W=!1;try{const t={get capture(){return W=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return W}(),l=!(null==e||!e.capture);return s.addEventListener(i,r,a?e:l),()=>{null==s||s.removeEventListener(i,r,a?e:l),o=null,s=null,r=null}}function Q(t,i,n,e){const s={detail:n};return Object.assign(s,e),new t.CustomEvent(i,s)}function X(t,i,n,e){return K(t,i,n,e)}function tt(t){return t.data}var it,nt=class{constructor(){this.y_=!1,this.M_=new class{constructor(){this.St=null}add(t){return this.St||(this.St=[]),this.St.push(t),()=>{this.remove(t)}}remove(t){this.St&&function(t,i){const n=t.indexOf(i);-1!=n&&t.splice(n,1)}(this.St,t)}removeAll(){this.St&&(this.St.length=0)}fire(t){if(this.St)for(const i of this.St.slice())i(t)}getHandlerCount(){var t,i;return null!==(t=null===(i=this.St)||void 0===i?void 0:i.length)&&void 0!==t?t:0}}}onSessionEnd(t){this.M_.add(t)}beginSession(){this.y_=!0}endSession(){this.y_&&this.M_.fire(),this.y_=!1}isSessionActive(){return this.y_}};function et(t){const i=t.ownerDocument||t;return it&&it.ownerDocument===i||(it=i.createElement("div")),st}function st(t){return function(t,i){l(1===i.length),t.innerHTML=i[0];const n=t.firstElementChild;return l(n),l(!n.nextElementSibling),t.removeChild(n),n}(it,t)}var ot=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],rt=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function at(t,i,n){if(i[n])return i[n];const e=t.querySelector(`style[${n}], link[${n}]`);return e?(i[n]=e,e):null}function lt(t,i){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==i)return!0;return!1}var ht={"title":"","artist":"","album":"","artwork":[{"src":""}]},ut="registered",ct="playing",dt="pause",ft="ended",mt="unmuted",pt="ad_start",vt="ad_end",_t="amp:video:tick",gt="playing_manual",Pt="paused",At="video-play",yt="user-interacted";function bt(t){t.signals().signal(yt)}var Mt="video-manager",Et=(t,i)=>!!t&&(t.video===i||t.video.element===i);function It(t,i){const n=i.top+i.height/2,e=t.getSize().height/2;return Math.abs(n-e)}function Rt(t){return 10*t*5}var Tt=t=>!!t&&!isNaN(t)&&t>1;function Vt(t,i,n){const{video:e}=t;t.getAnalyticsDetails().then((t=>{n&&Object.assign(t,n),f(e.element,i,t)}))}function wt(t){!function(t,n,e,s){const u=k(t),c=q(u);!function(t,i,n,e,s,o){const r=C(t);let a=r[n];a||(a=r[n]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=e,a.context=i,a.sharedInstance=!1,a.resolve&&x(t,n))}(c,u,n,class{constructor(t){this.ampdoc=t,this.installAutoplayStyles=g((()=>function(t){!function(t,i,n,e,s){const o=t.getHeadNode(),a=function(t,i,n,e){let s=t.__AMP_CSS_SM;s||(s=t.__AMP_CSS_SM=r());const o=!n&&e&&"amp-custom"!=e&&"amp-keyframes"!=e,a=n?"amp-runtime":o?`amp-extension=${e}`:null;if(a){const n=at(t,s,a);if(n)return"STYLE"==n.tagName&&n.textContent!==i&&(n.textContent=i),n}const l=(t.ownerDocument||t).createElement("style");l.textContent=i;let h=null;return n?l.setAttribute("amp-runtime",""):o?(l.setAttribute("amp-extension",e||""),h=at(t,s,"amp-runtime")):(e&&l.setAttribute(e,""),h=t.lastChild),function(t,i,n=null){if(!n)return void function(t,i){t.insertBefore(i,t.firstChild)}(t,i);const e=n.nextSibling;t.insertBefore(i,e)}(t,l,h),a&&(s[a]=l),l}(o,function(t,i){const n=t.__AMP_CSS_TR;return n?n(i):i}(o,i),e||!1,s||null);if(n){const i=t.getRootNode();if(lt(i,a))return n(a),a;const e=setInterval((()=>{lt(i,a)&&(clearInterval(e),n(a))}),4)}}(t,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/",null,!1,"amp-video-autoplay")}(this.ampdoc))),this.E_=null,this.w_=null,this.R_=null,this.Ie=Y(t.win),this.T_=j(t.getHeadNode()),this.V_=()=>this.I_(),this.q_=g((()=>new class{constructor(t,i){this.x_=i,this.Ni=t,this.C_=null,this.S_=null,this.E_=[],this.F_=[],this.O_=()=>this.j_(),this.Y_=t=>this.L_(t)==gt,this.D_=(t,i)=>this.W_(t,i),this.z_(),this.N_()}dispose(){this.F_.forEach((t=>t())),this.F_.length=0}register(t){const{video:i}=t,{element:n}=i;this.U_(n)&&(this.E_.push(i),X(n,dt,this.O_),X(n,ct,this.O_),X(n,ft,this.O_),i.signals().whenSignal(yt).then(this.O_),this.j_())}N_(){const t=this.Ni.getRootNode(),i=()=>this.B_();this.F_.push(X(t,"webkitfullscreenchange",i),X(t,"mozfullscreenchange",i),X(t,"fullscreenchange",i),X(t,"MSFullscreenChange",i))}isInLandscape(){return(t=this.Ni.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t}U_(t){if("video"==Z(t).tagName.toLowerCase())return!0;const i=N(this.Ni.win);return!i.isIos()&&!i.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)}B_(){this.C_=null}z_(){const{win:t}=this.Ni,{screen:i}=t;if(i&&"orientation"in i){const t=i.orientation;this.F_.push(X(t,"change",(()=>this.J_())))}this.F_.push(X(t,"orientationchange",(()=>this.J_())))}J_(){this.isInLandscape()?null!=this.S_&&this.H_(this.S_):this.C_&&this.Z_(this.C_)}H_(t){const i=N(this.Ni.win);this.C_=t,i.isAndroid()&&i.isChrome()?t.fullscreenEnter():this.G_(t).then((()=>t.fullscreenEnter()))}Z_(t){this.C_=null,this.G_(t,"center").then((()=>t.fullscreenExit()))}G_(t,i=null){const{element:n}=t,e=this.K_();return this.Q_().then((()=>D(n))).then((({boundingClientRect:t})=>{const{bottom:s,top:o}=t,r=e.getSize().height;if(o>=0&&s<=r)return I();const a=i||(s>r?"bottom":"top");return e.animateScrollIntoView(n,a)}))}K_(){return z(this.Ni)}Q_(){return Y(this.Ni.win).promise(330)}j_(){if(this.isInLandscape())return Promise.resolve(this.S_);this.S_=null;const t=this.E_.filter(this.Y_).map((t=>D(t.element)));return Promise.all(t).then((t=>{const i=t.sort(this.D_)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((t=>this.S_=t)):this.S_}))}W_(t,i){const{boundingClientRect:n,intersectionRatio:e}=t,{boundingClientRect:s,intersectionRatio:o}=i,r=e-o;if(Math.abs(r)>.1)return r;const a=z(this.Ni),l=It(a,n),h=It(a,s);return l<h||l>h?l-h:n.top-s.top}L_(t){return this.x_.getPlayingState(t)}}(this.ampdoc,this))),this.Ie.delay(this.V_,1e3)}dispose(){if(this.q_().dispose(),this.w_.disconnect(),this.w_=null,this.E_)for(let t=0;t<this.E_.length;t++)this.E_[t].dispose()}I_(){for(let t=0;t<this.E_.length;t++){const i=this.E_[t];i.getPlayingState()!==Pt&&(Vt(i,"video-seconds-played"),this.X_(i))}this.Ie.delay(this.V_,1e3)}X_(t){const i="timeUpdate",n=t.video.getCurrentTime(),e=t.video.getDuration();if(a(n)&&a(e)&&e>0){const s=n/e,o=Q(this.ampdoc.win,`${Mt}.${i}`,{"time":n,"percent":s});this.T_.trigger(t.video.element,i,o,1)}}register(t){M(t);const n=t;if(this.tP(t),!t.supportsPlatform())return;if(this.iP(t))return;if(!this.w_){const t=t=>t.forEach((({isIntersecting:t,target:i})=>{this.nP(i).updateVisibility(t)}));this.w_=U(t,this.ampdoc.win,{threshold:.5})}this.w_.observe(n.element),X(n.element,"reloaded",(()=>e.videoLoaded())),this.E_=this.E_||[];const e=new class{constructor(t,i){this.x_=t,this.Ni=t.ampdoc,this.video=i,this.eP=!0,this.sP=!1,this.gf=!1,this.oP=!1,this.rs=!1,this.rP=new nt,this.rP.onSessionEnd((()=>Vt(this,"video-session"))),this.aP=new nt,this.aP.onSessionEnd((()=>Vt(this,"video-session-visible"))),this.hP=g((()=>new class{constructor(t,i){this.Ie=Y(t),this.lP=i,this.F_=null,this.uP=0,this.cP=0}start(){const{element:t}=this.lP.video;this.stop(),this.F_=this.F_||[],this.dP()?this.fP(this.cP):this.F_.push(function(t,i,n,e){let s=n;const o=K(t,"loadedmetadata",(t=>{try{s(t)}finally{s=null,o()}}),void 0);return o}(t,0,(()=>{this.dP()&&this.fP(this.cP)}))),this.F_.push(X(t,ft,(()=>{this.dP()&&this.mP(100)})))}stop(){if(this.F_){for(;this.F_.length>0;)this.F_.pop()();this.cP++}}dP(){const{video:t}=this.lP,i=t.getDuration();if(!Tt(i))return!1;if(Rt(i)<250){const i=Math.ceil(5);this.pP("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0}pP(...t){y().warn.apply(y(),[Mt].concat(t))}fP(t){if(t!=this.cP)return;const{lP:i,Ie:n}=this,{video:e}=i,s=()=>this.fP(t);if(i.getPlayingState()==Pt)return void n.delay(s,500);const o=e.getDuration();if(!Tt(o))return void n.delay(s,500);const r=(c=Rt(o),l(!0),Math.min(Math.max(c,250),4e3)),h=e.getCurrentTime()/o*100,u=5*Math.floor(h/5);var c;M(a(u)),this.mP(u),n.delay(s,r)}mP(t){t<=0||this.uP!=t&&(this.uP=t,this.vP(t))}vP(t){Vt(this.lP,"video-percentage-played",{"normalizedPercentage":t.toString()})}}(this.Ni.win,this))),this._P=!1,this.gP=!1,this.PP=null,this.dt=!1,this.AP=!1,this.hasAutoplay=i.element.hasAttribute("autoplay"),this.hasAutoplay&&this.x_.installAutoplayStyles(),this.yP=ht,this.bP=()=>{G(this.video,!1)},this.MP=()=>{this.video.pause()},X(i.element,"load",(()=>this.videoLoaded())),X(i.element,dt,(()=>this.EP())),X(i.element,"play",(()=>{this.AP=!0,Vt(this,At)})),X(i.element,ct,(()=>this.wP())),X(i.element,"muted",(()=>this.dt=!0)),X(i.element,mt,(()=>{this.dt=!1,this.x_.pauseOtherVideos(this)})),X(i.element,_t,(t=>{const i=tt(t),n=i.eventType;n&&this.RP(n,i.vars)})),X(i.element,ft,(()=>{this.oP=!1,Vt(this,"video-ended")})),X(i.element,pt,(()=>{this.oP=!0,Vt(this,"video-ad-start")})),X(i.element,vt,(()=>{this.oP=!1,Vt(this,"video-ad-end")})),i.signals().whenSignal(ut).then((()=>this.TP())),this.VP=g((()=>{const t="firstPlay",i=Q(this.Ni.win,t,{}),{element:n}=this.video;j(n).trigger(n,t,i,1)})),this.IP()}dispose(){this.hP().stop()}RP(t,i){const n={"__amp:eventType":t};Object.keys(i).forEach((t=>{n[`custom_${t}`]=i[t]})),Vt(this,"video-hosted-custom",n)}IP(){this.video.signals().whenSignal("playback-delegated").then((()=>{this.eP=!1,this.gf&&this.video.pause()}))}isMuted(){return this.dt}isPlaybackManaged(){return this.eP}TP(){this.kP()&&this.x_.registerForAutoFullscreen(this),this.hasAutoplay&&this.qP()}kP(){const{element:t}=this.video;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&E(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)}wP(){this.gf=!0,this.getPlayingState()==gt&&(this.VP(),this.x_.pauseOtherVideos(this));const{video:t}=this,{element:n}=t;t.preimplementsMediaSessionAPI()||n.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){const e=L(t);if(n&&n.artwork){const{artwork:t}=n;M(i(t)),t.forEach((t=>{if(t){const i=o(t)?t.src:t;E(e.isProtocolValid(i))}}))}}(n,this.yP),function(t,i,n,e){const{navigator:s}=t;"mediaSession"in s&&t.MediaMetadata&&(s.mediaSession.metadata=new t.MediaMetadata(ht),s.mediaSession.metadata=new t.MediaMetadata(i),s.mediaSession.setActionHandler("play",n),s.mediaSession.setActionHandler("pause",e))}(this.Ni.win,this.yP,this.bP,this.MP)),this.rP.beginSession(),this.rs&&this.aP.beginSession(),this.AP||Vt(this,At)}EP(){Vt(this,"video-pause"),this.gf=!1,this.gP?this.gP=!1:this.rP.endSession()}videoLoaded(){this.sP=!0,this.PP=Z(this.video.element),this.xP(),this.hP().start(),this.rs&&this.CP()}xP(){if(this.video.preimplementsMediaSessionAPI())return;this.video.getMetadata()&&(this.yP=r(this.video.getMetadata()));const t=this.Ni.win.document;if(!this.yP.artwork||0==this.yP.artwork.length){const i=function(t){const i=t.querySelector('script[type="application/ld+json"]');if(!i)return;const n=h(i.textContent);return n&&n.image?"string"==typeof n.image?n.image:n.image["@list"]&&"string"==typeof n.image["@list"][0]?n.image["@list"][0]:"string"==typeof n.image.url?n.image.url:"string"==typeof n.image[0]?n.image[0]:void 0:void 0}(t)||function(t){const i=t.querySelector('meta[property="og:image"]');return i?i.getAttribute("content"):void 0}(t)||function(t){const i=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return i?i.getAttribute("href"):void 0}(t);i&&(this.yP.artwork=[{"src":i}])}if(!this.yP.title){const i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.PP.getAttribute("title")||this.PP.getAttribute("aria-label")||t.title;i&&(this.yP.title=i)}}SP(){this.sP&&this.CP()}CP(){this.Ni.isVisible()&&H(this.Ni.win).then((t=>{this.hasAutoplay&&!this.userInteracted()&&t?this.FP():this.OP()}))}qP(){this.video.isInteractive()&&this.video.hideControls(),H(this.Ni.win).then((t=>{t||!this.video.isInteractive()?(this.video.mute(),this.jP()):this.video.showControls()}))}jP(){const{video:t}=this,{element:i,win:n}=this.video;if(i.hasAttribute("noaudio")||i.signals().get(yt))return;const e=function(t,i){const n=et(i)(rt),e=n.firstElementChild;for(let t=0;t<4;t++){const i=e.cloneNode(!0),s=i.children;for(let i=0;i<s.length;i++)s[i].classList.add(`amp-video-eq-${t+1}-${i+1}`);n.appendChild(i)}return d(e),n}(0,i),s=[e];function o(i){t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{!function(t,i){void 0===i&&(i=t.hasAttribute("hidden")),i?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(t,i)}))}))}function r(i){t.mutateElementSkipRemeasure((()=>e.classList.toggle("amp-video-eq-play",i)))}const a=[X(i,dt,(()=>r(!1))),X(i,ct,(()=>r(!0))),X(i,pt,(()=>{o(!1),t.showControls()})),X(i,vt,(()=>{o(!0),t.hideControls()})),X(i,mt,(()=>bt(t)))];if(t.isInteractive()){t.hideControls();const n=function(t,i){const n=et(t)(ot);return i&&i.title&&n.setAttribute("aria-label",i.title),n}(i,this.yP);s.push(n),a.push(X(n,"click",(()=>bt(t))))}t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{i.appendChild(t)}))})),this.oP&&o(!1),t.signals().whenSignal(yt).then((()=>{this.VP(),t.isInteractive()&&t.showControls(),t.unmute(),a.forEach((t=>{t()})),t.mutateElementSkipRemeasure((()=>{s.forEach((t=>{d(t)}))}))}))}FP(){this.eP&&(this.rs?(this.aP.beginSession(),G(this.video,!0),this._P=!0):(this.gf&&this.aP.endSession(),this.video.pause(),this.gP=!0))}OP(){this.rs?this.aP.beginSession():this.gf&&this.aP.endSession()}updateVisibility(t){const i=this.rs;this.rs=t,t!=i&&this.SP()}getPlayingState(){return this.gf?this.gf&&this._P&&!this.userInteracted()?"playing_auto":gt:Pt}isRollingAd(){return this.oP}userInteracted(){return null!=this.video.signals().get(yt)}getAnalyticsDetails(){const{video:t}=this;return Promise.all([H(this.Ni.win),D(t.element)]).then((i=>{const n=i[0],e=i[1],{height:s,width:o}=e.boundingClientRect,r=this.hasAutoplay&&n,a=t.getPlayedRanges(),l=a.reduce(((t,i)=>t+i[1]-i[0]),0);return{"autoplay":r,"currentTime":t.getCurrentTime(),"duration":t.getDuration(),"height":s,"id":t.element.id,"muted":this.dt,"playedTotal":l,"playedRangesJson":JSON.stringify(a),"state":this.getPlayingState(),"width":o}}))}}(this,t);this.E_.push(e);const{element:s}=e.video;f(s,ut),function(t){t.classList.add("i-amphtml-media-component")}(s),t.signals().signal(ut),s.classList.add("i-amphtml-video-interface")}tP(t){n("play",(()=>G(t,!1))),n("pause",(()=>t.pause())),n("mute",(()=>t.mute())),n("unmute",(()=>t.unmute()));const i=()=>t.fullscreenEnter();function n(i,n){t.registerAction(i,(()=>{bt(t),n()}),1)}n("fullscreenenter",i),n("fullscreen",i)}iP(t){if(Et(this.R_,t))return this.R_;for(let i=0;this.E_&&i<this.E_.length;i++){const n=this.E_[i];if(Et(n,t))return this.R_=n,n}return null}nP(t){return M(this.iP(t))}registerForAutoFullscreen(t){this.q_().register(t)}YP(){return this.q_()}getVideoStateProperty(t,i){const n=this.ampdoc.getRootNode(),e=y().assertElement(n.getElementById(t),`Could not find an element with id="${t}" for VIDEO_STATE`),s=this.nP(e);return(s?s.getAnalyticsDetails():I()).then((t=>t?t[i]:""))}getPlayingState(t){return this.nP(t).getPlayingState()}isMuted(t){return this.nP(t).isMuted()}userInteracted(t){return this.nP(t).userInteracted()}isRollingAd(t){return this.nP(t).isRollingAd()}pauseOtherVideos(t){this.E_.forEach((i=>{i.isPlaybackManaged()&&i!==t&&i.getPlayingState()==gt&&i.video.pause()}))}})}(t,"video-manager")}new Set(["c","v","a","ad"]);var kt=["<iframe frameborder=0 allowfullscreen></iframe>"],qt="amp-redbull-player",xt=["allow-scripts","allow-same-origin","allow-popups","allow-popups-to-escape-sandbox","allow-top-navigation-by-user-activation"],Ct=class extends t.BaseElement{constructor(t){super(t),this.eb=null,this.xA=null,this.Gy="",this.OA=t=>this.ct(t)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){const{element:t}=this;E(t.getAttribute("data-param-videoid"),"The data-param-videoid attribute is required for %s",t),this.Gy=t.getAttribute("id")||"rbvideo",wt(t)}layoutCallback(){const{element:t}=this,i=function(t,i,n){const{dataset:e}=t,s={},o=/^param(.+)/;for(const t in e){const i=t.match(o);i&&(s[i[1][0].toLowerCase()+i[1].substr(1)]=e[t])}return s}(t),e=i.videoid,s=i.skinid||"com",o=i.locale||"global",r=function(t,i){return function(t,i,n){if(!i)return t;const e=t.split("#",2),s=e[0].split("?",2);let o=s[0]+(s[1]?`?${s[1]}&${i}`:`?${i}`);return o+=e[1]?`#${e[1]}`:"",o}("https://player.redbull.com/amp/amp-iframe.html",function(t){const i=[];for(const o in t){let r=t[o];if(null!=r){r=n(r);for(let t=0;t<r.length;t++)i.push((e=o,s=r[t],`${encodeURIComponent(e)}=${encodeURIComponent(s)}`))}}var e,s;return i.join("&")}(i))}(0,{"videoId":e,"skinId":s,"ampTagId":this.Gy,"locale":o});var a;return this.eb=(function(t,i){for(const n in i)t.setAttribute(n,i[n])}(a=function(t,i,e,s){const{element:o}=t,r=et(o)(kt);return s&&r.setAttribute("sandbox",s.join(" ")),function(t,i,e,s){const o=n(["referrerpolicy"]);for(const t of o){const n=i.getAttribute(t);null!==n&&e.setAttribute(t,n)}}(0,t.element,r),r.src=L(o).assertHttpsUrl(i,o),function(t,i){t.classList.add("i-amphtml-fill-content")}(r),o.appendChild(r),r}(this,r,0,xt),{"scrolling":"no"}),J(a,"overflow","hidden"),a),this.xA=X(this.win,"message",this.OA),this.loadPromise(this.eb).then((()=>{this.$A()}))}$A(){var t;(t=this.element,V(t,"video-manager")).register(this),this.eb.contentWindow.postMessage(JSON.stringify({"msg":"amp-loaded","id":`${qt}-${this.Gy}`}),"*")}unlayoutCallback(){return this.UA(),!0}UA(){this.eb&&(d(this.eb),this.eb=null),this.xA&&(this.xA(),this.xA=null)}YA(t){return function(t,i,n){return!(!i||t.source!=i.contentWindow)&&("string"==typeof n?n==t.origin:n.test(t.origin))}(t,this.eb,/.*/)}ct(t){if(!this.eb)return;if(!this.YA(t))return;const i=tt(t);if(!(n=i)||!o(n)&&!n.startsWith("{"))return;var n;const e=o(s=i)?s:h(s);var s;if(null!=e&&e.id===`redbull-amp-video-tracking-${this.Gy}`){const t="video-custom-"+e.type;this.WA(t,e)}}WA(t,i){f(this.element,_t,{"eventType":`video-custom-tracking-${this.Gy}`,"vars":i})}isInteractive(){return!0}supportsPlatform(){return!0}preimplementsMediaSessionAPI(){return!1}preimplementsAutoFullscreen(){return!1}getCurrentTime(){return NaN}getDuration(){return NaN}getMetadata(){}getPlayedRanges(){return[]}play(t){}pause(){}mute(){}unmute(){}showControls(){}hideControls(){}fullscreenEnter(){}fullscreenExit(){}isFullscreen(){return!1}seekTo(t){}};t.registerElement(qt,Ct)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-redbull-player-0.1.mjs.map