;
(self.AMP=self.AMP||[]).push({m:0,v:"2205120110001",n:"amp-ooyala-player",ev:"0.1",l:!0,f:function(t,n){!function(){function n(t,i){return(n=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,i)}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var i=0,r=new Array(n);i<n;i++)r[i]=t[i];return r}function u(t,n){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(i)return(i=i.call(t)).next.bind(i);if(Array.isArray(t)||(i=function(t,n){if(t){if("string"==typeof t)return o(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var r=0;return function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a;function s(){return a||(a=Promise.resolve(void 0))}var f=function(){var t=this;this.promise=new Promise((function(n,i){t.resolve=n,t.reject=i}))};function c(t){return new Promise((function(n){n(t())}))}var h=Array.isArray,l=Object.prototype,v=(l.hasOwnProperty,l.toString);function d(t){return"[object Object]"===v.call(t)}function m(t){var n=Object.create(null);return t&&Object.assign(n,t),n}function p(t){return"number"==typeof t&&isFinite(t)}function y(t,n,i,r,e,o,u,a,s,f,c){return t}function b(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null==n||n(t),null}}function w(t){return(t.ownerDocument||t).defaultView}var g,k={bubbles:!0,cancelable:!0};function q(t){var n;null===(n=t.parentElement)||void 0===n||n.removeChild(t)}function x(t,n){t.insertBefore(n,t.firstChild)}function j(t){return t.parent&&t.parent!=t}function S(t,n,i,r){var e=i||{};y(t.ownerDocument);var o=t.ownerDocument.createEvent("Event");o.data=e;var u=r||k,a=u.bubbles,s=u.cancelable;o.initEvent(n,a,s),t.dispatchEvent(o)}function O(t){var n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;var i=t.message,r=t.stack,e=new Error(i);for(var o in t)e[o]=t[o];return e.stack=r,e}function M(t){for(var n,i=null,r="",e=u(arguments,!0);!(n=e()).done;){var o=n.value;o instanceof Error&&!i?i=O(o):(r&&(r+=" "),r+=o)}return i?r&&(i.message=r+": "+i.message):i=new Error(r),i}function T(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}function R(t){var n=M.apply(null,arguments);setTimeout((function(){throw T(n),n}))}function E(t){try{for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];return t.apply(null,i)}catch(t){R(t)}}function P(t){var n=M.apply(null,arguments);return n.expected=!0,n}var A=["Webkit","webkit","Moz","moz","ms","O","o"],Y={"getPropertyPriority":function(){return""},"getPropertyValue":function(){return""}};function z(t,n,i,r,e){var o=function(t,n,i){if(n.startsWith("--"))return n;g||(g=m());var r=g[n];if(!r||i){if(r=n,void 0===t[n]){var e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),o=function(t,n){for(var i=0;i<A.length;i++){var r=A[i]+n;if(void 0!==t[r])return r}return""}(t,e);void 0!==t[o]&&(r=o)}i||(g[n]=r)}return r}(t.style,n,e);if(o){var u,a=r?i+r:i;t.style.setProperty((u=o.replace(/[A-Z]/g,(function(t){return"-"+t.toLowerCase()})),A.some((function(t){return u.startsWith(t+"-")}))?"-".concat(u):u),a)}}var C=/vertical/,I=new WeakMap,_=new WeakMap,U=new WeakMap;function W(t){var n=I.get(t);return n||(n=new t.ResizeObserver(F),I.set(t,n)),n}function F(t){for(var n=new Set,i=t.length-1;i>=0;i--){var r=t[i],e=r.target;if(!n.has(e)){n.add(e);var o=_.get(e);if(o){U.set(e,r);for(var u=0;u<o.length;u++){var a=o[u],s=a.callback;L(a.type,s,r)}}}}}function L(t,n,i){if(0==t){var r=i.contentRect,e=r.height;E(n,{width:r.width,height:e})}else if(1==t){var o,u=i.borderBoxSize;if(u)o=u.length>0?u[0]:{inlineSize:0,blockSize:0};else{var a,s,f=i.target,c=w(f),h=C.test(function(t,n){return t.getComputedStyle(n)||Y}(c,f).writingMode),l=f,v=l.offsetHeight,d=l.offsetWidth;h?(s=d,a=v):(a=d,s=v),o={inlineSize:a,blockSize:s}}E(n,o)}}var N=function(){function t(t){this.Gn=t,this.Zn=!1,this.Un=!1,this.Jn=this.Jn.bind(this)}var n=t.prototype;return n.updatePlaying=function(t){t!==this.Zn&&(this.Zn=t,t?(this.Un=!1,function(t,n,i){var r=t.ownerDocument.defaultView;if(r){var e=_.get(t);if(e||(e=[],_.set(t,e),W(r).observe(t)),!e.some((function(t){return t.callback===i&&1===t.type}))){e.push({type:1,callback:i});var o=U.get(t);o&&setTimeout((function(){return L(1,i,o)}))}}}(this.Gn,0,this.Jn)):function(t,n){!function(t,n,i){var r=_.get(t);if(r&&(function(t,n){for(var r=[],e=0,o=0;o<t.length;o++){var u=t[o];(a=u).callback===i&&1===a.type?r.push(u):(e<o&&(t[e]=u),e++)}var a;e<t.length&&(t.length=e)}(r),0==r.length)){_.delete(t),U.delete(t);var e=t.ownerDocument.defaultView;e&&W(e).unobserve(t)}}(t,0,n)}(this.Gn,this.Jn))},n.Jn=function(t){var n=t.blockSize,i=t.inlineSize>0&&n>0;if(i!==this.Un){this.Un=i;var r=this.Gn;i||r.pause()}},t}();function B(t){var n=!1,i=null,r=t;return function(){if(!n){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];i=r.apply(self,e),n=!0,r=null}return i}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var J=self.__AMP_LOG;function D(t){return J.user||(J.user=V()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(J.user.win,t)?J.userForEmbed||(J.userForEmbed=V()):J.user}function V(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function Z(t,n,i,r,e,o,u,a,s,f,c){return t}function $(t,n,i,r,e,o,u,a,s,f,c){return D().assert(t,n,i,r,e,o,u,a,s,f,c)}function G(t,n){return tt(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function H(t,n){return tt(X(Q(t)),n)}function K(t,n){var i=X(Q(t));return it(i,n)?tt(i,n):null}function Q(t){return t.nodeType?(n=w(t),G(n,"ampdoc")).getAmpDoc(t):t;var n}function X(t){var n=Q(t);return n.isSingleDoc()?n.win:n}function tt(t,n){Z(it(t,n));var i=nt(t)[n];return i.obj||(Z(i.ctor),Z(i.context),i.obj=new i.ctor(i.context),Z(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function nt(t){var n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function it(t,n){var i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var rt,et,ot,ut=function(t){return K(t,"action")},at=function(t){return G(t,"platform")},st=function(t){return tt(t,"timer")},ft=function(t){return K(t,"url")},ct=function(t){return H(t,"viewport")};function ht(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.needsRootBounds,e=i.rootMargin,o=i.threshold,u=j(n)&&(r||e)?n.document:void 0;return new n.IntersectionObserver(t,{threshold:o,root:u,rootMargin:e})}function lt(t){var n,i=null===(n=rt)||void 0===n?void 0:n.get(t);if(!i){var r=function(t){rt||(rt=new WeakMap,et=new WeakMap),y(et);var n=et.get(t);return n||(n=ht((function(t){for(var i=new Set,r=t.length-1;r>=0;r--){var e,o=t[r].target;i.has(o)||(i.add(o),y(n),n.unobserve(o),y(rt),null===(e=rt.get(o))||void 0===e||e.resolve(t[r]),rt.delete(o))}}),t,{needsRootBounds:!0}),et.set(t,n)),n}(w(t));y(rt),r.observe(t),i=new f,rt.set(t,i)}return i.promise}function vt(t){return null==t.__AMP_AUTOPLAY&&(t.__AMP_AUTOPLAY=function(t){var n,i=t.document.createElement("video");return i.setAttribute("muted",""),i.setAttribute("playsinline",""),i.setAttribute("webkit-playsinline",""),i.setAttribute("height","0"),i.setAttribute("width","0"),i.muted=!0,i.playsInline=!0,i.playsinline=!0,i.webkitPlaysinline=!0,function(t,n){for(var i in n)z(t,i,n[i])}(i,{position:"fixed",top:"0",width:"0",height:"0",opacity:"0"}),n=i,c((function(){return n.play()})).catch((function(){})),Promise.resolve(!i.paused)}(t)),t.__AMP_AUTOPLAY}function dt(t){return t.querySelector("video, iframe")}function mt(t,n){var i=c((function(){return t.play(!!n)}));return i.catch((function(t){!function(t){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];T(P.apply(null,i))}("TRYPLAY",t)})),i}function pt(t,n,i,r){var e=t,o=i,u=function(t){try{return o(t)}catch(t){var n,i;throw null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t),t}},a=function(){if(void 0!==ot)return ot;ot=!1;try{var t={get capture(){return ot=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return ot}(),s=!(null==r||!r.capture);return e.addEventListener(n,u,a?r:s),function(){null==e||e.removeEventListener(n,u,a?r:s),o=null,e=null,u=null}}function yt(t,n,i,r){var e={detail:i};if(Object.assign(e,r),"function"==typeof t.CustomEvent)return new t.CustomEvent(n,e);var o=t.document.createEvent("CustomEvent");return o.initCustomEvent(n,!!e.bubbles,!!e.cancelable,i),o}function bt(t,n,i,r){return pt(t,n,i,r)}function wt(t){return t.data}new WeakMap,new WeakMap;var gt,kt=function(){function t(){this.Wt=null}var n=t.prototype;return n.add=function(t){var n=this;return this.Wt||(this.Wt=[]),this.Wt.push(t),function(){n.remove(t)}},n.remove=function(t){var n,i,r;this.Wt&&(i=t,-1!=(r=(n=this.Wt).indexOf(i))&&n.splice(r,1))},n.removeAll=function(){this.Wt&&(this.Wt.length=0)},n.fire=function(t){if(this.Wt)for(var n,i=u(this.Wt.slice(),!0);!(n=i()).done;)(0,n.value)(t)},n.getHandlerCount=function(){var t,n;return null!==(t=null===(n=this.Wt)||void 0===n?void 0:n.length)&&void 0!==t?t:0},t}(),qt=function(){function t(){this.ky=!1,this.qy=new kt}var n=t.prototype;return n.onSessionEnd=function(t){this.qy.add(t)},n.beginSession=function(){this.ky=!0},n.endSession=function(){this.ky&&this.qy.fire(),this.ky=!1},n.isSessionActive=function(){return this.ky},t}();function xt(t){var n=t.ownerDocument||t;return gt&&gt.ownerDocument===n||(gt=n.createElement("div")),jt}function jt(t){return function(t,n){y(1===n.length),t.innerHTML=n[0];var i=t.firstElementChild;return y(i),y(!i.nextElementSibling),t.removeChild(i),i}(gt,t)}var St=['<button aria-label="Unmute video" class="i-amphtml-video-mask i-amphtml-fill-content" tabindex=0></button>'],Ot=["<i-amphtml-video-icon class=amp-video-eq><div class=amp-video-eq-col><div class=amp-video-eq-filler></div><div class=amp-video-eq-filler></div></div></i-amphtml-video-icon>"];function Mt(t,n,i){if(n[i])return n[i];var r=t.querySelector("style[".concat(i,"], link[").concat(i,"]"));return r?(n[i]=r,r):null}var Tt={"title":"","artist":"","album":"","artwork":[{"src":""}]},Rt="registered",Et="load",Pt="playing",At="pause",Yt="ended",zt="muted",Ct="unmuted",It="ad_start",_t="ad_end",Ut="playing_manual",Wt="paused",Ft="video-play",Lt="user-interacted";function Nt(t){t.signals().signal(Lt)}var Bt="video-manager",Jt=function(){function t(t){var n=this;this.ampdoc=t,this.installAutoplayStyles=B((function(){return function(t){!function(t,n,i,r,e){var o=t.getHeadNode();!function(t,n,i,r){var e=t.__AMP_CSS_SM;e||(e=t.__AMP_CSS_SM=m());var o="amp-extension=".concat(r);if(o){var u=Mt(t,e,o);if(u)return"STYLE"==u.tagName&&u.textContent!==n&&(u.textContent=n),u}var a=(t.ownerDocument||t).createElement("style");a.textContent=n;a.setAttribute("amp-extension",r),function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(i){var r=i.nextSibling;t.insertBefore(n,r)}else x(t,n)}(t,a,Mt(t,e,"amp-runtime")),o&&(e[o]=a)}(o,function(t,n){var i=t.__AMP_CSS_TR;return i?i(n):n}(o,".i-amphtml-video-mask{display:block;z-index:1;-webkit-appearance:none;appearance:none;background:transparent;border:none}.amp-video-eq{display:none}.i-amphtml-video-interface:not(amp-video) .amp-video-eq,amp-story .amp-video-eq,amp-video[controls] .amp-video-eq{display:-ms-flexbox;display:flex}[noaudio] .amp-video-eq{display:none!important}.amp-video-eq{pointer-events:none!important;-ms-flex-align:end;align-items:flex-end;bottom:7px;height:12px;opacity:0.8;overflow:hidden;position:absolute;right:7px;width:20px;z-index:1}.amp-video-eq-col{-ms-flex:1;flex:1;height:100%;margin-right:1px;position:relative}.amp-video-eq-col div{animation-name:amp-video-eq-animation;animation-timing-function:linear;animation-iteration-count:infinite;animation-direction:alternate;background-color:#fafafa;height:100%;position:absolute;width:100%;will-change:transform;animation-play-state:paused}.amp-video-eq-play .amp-video-eq-col div{animation-play-state:running}.amp-video-eq-1-1{animation-duration:0.3s;transform:translateY(60%)}.amp-video-eq-1-2{animation-duration:0.45s;transform:translateY(60%)}.amp-video-eq-2-1{animation-duration:0.5s;transform:translateY(30%)}.amp-video-eq-2-2{animation-duration:0.4s;transform:translateY(30%)}.amp-video-eq-3-1{animation-duration:0.3s;transform:translateY(70%)}.amp-video-eq-3-2{animation-duration:0.35s;transform:translateY(70%)}.amp-video-eq-4-1{animation-duration:0.4s;transform:translateY(50%)}.amp-video-eq-4-2{animation-duration:0.25s;transform:translateY(50%)}@keyframes amp-video-eq-animation{0%{transform:translateY(100%)}to{transform:translateY(0)}}\n/*# sourceURL=/css/video-autoplay.css*/"),0,"amp-video-autoplay")}(t)}(n.ampdoc)})),this.Py=null,this.Ay=null,this.Cy=null,this.Pe=st(t.win),this.Yy=ut(t.getHeadNode()),this.zy=function(){return n.Uy()},this.Wy=B((function(){return new Zt(n.ampdoc,n)})),this.Pe.delay(this.zy,1e3)}var n=t.prototype;return n.dispose=function(){if(this.Wy().dispose(),this.Ay.disconnect(),this.Ay=null,this.Py)for(var t=0;t<this.Py.length;t++)this.Py[t].dispose()},n.Uy=function(){for(var t=0;t<this.Py.length;t++){var n=this.Py[t];n.getPlayingState()!==Wt&&(Qt(n,"video-seconds-played"),this._y(n))}this.Pe.delay(this.zy,1e3)},n._y=function(t){var n="timeUpdate",i=t.video.getCurrentTime(),r=t.video.getDuration();if(p(i)&&p(r)&&r>0){var e=i/r,o=yt(this.ampdoc.win,"".concat(Bt,".").concat(n),{"time":i,"percent":e});this.Yy.trigger(t.video.element,n,o,1)}},n.register=function(t){var n=this;Z(t);var i=t;if(this.Fy(t),t.supportsPlatform()&&!this.Ly(t)){this.Ay||(this.Ay=ht((function(t){return t.forEach((function(t){var i=t.isIntersecting,r=t.target;n.By(r).updateVisibility(i)}))}),this.ampdoc.win,{threshold:.5})),this.Ay.observe(i.element),bt(i.element,"reloaded",(function(){return r.videoLoaded()})),this.Py=this.Py||[];var r=new Vt(this,t);this.Py.push(r);var e=r.video.element;S(e,Rt),function(t){t.classList.add("i-amphtml-media-component")}(e),t.signals().signal(Rt),e.classList.add("i-amphtml-video-interface")}},n.Fy=function(t){i("play",(function(){return mt(t,!1)})),i("pause",(function(){return t.pause()})),i("mute",(function(){return t.mute()})),i("unmute",(function(){return t.unmute()}));var n=function(){return t.fullscreenEnter()};function i(n,i){t.registerAction(n,(function(){Nt(t),i()}),1)}i("fullscreenenter",n),i("fullscreen",n)},n.Ly=function(t){if(Dt(this.Cy,t))return this.Cy;for(var n=0;this.Py&&n<this.Py.length;n++){var i=this.Py[n];if(Dt(i,t))return this.Cy=i,i}return null},n.By=function(t){return Z(this.Ly(t))},n.registerForAutoFullscreen=function(t){this.Wy().register(t)},n.Ny=function(){return this.Wy()},n.getVideoStateProperty=function(t,n){var i=this.ampdoc.getRootNode(),r=D().assertElement(i.getElementById(t),'Could not find an element with id="'.concat(t,'" for VIDEO_STATE')),e=this.By(r);return(e?e.getAnalyticsDetails():s()).then((function(t){return t?t[n]:""}))},n.getPlayingState=function(t){return this.By(t).getPlayingState()},n.isMuted=function(t){return this.By(t).isMuted()},n.userInteracted=function(t){return this.By(t).userInteracted()},n.isRollingAd=function(t){return this.By(t).isRollingAd()},n.pauseOtherVideos=function(t){this.Py.forEach((function(n){n.isPlaybackManaged()&&n!==t&&n.getPlayingState()==Ut&&n.video.pause()}))},t}(),Dt=function(t,n){return!!t&&(t.video===n||t.video.element===n)},Vt=function(){function t(t,n){var i=this;this.Jy=t,this.Bi=t.ampdoc,this.video=n,this.Gy=!0,this.Vy=!1,this.Zn=!1,this.Zy=!1,this.dr=!1,this.$y=new qt,this.$y.onSessionEnd((function(){return Qt(i,"video-session")})),this.Hy=new qt,this.Hy.onSessionEnd((function(){return Qt(i,"video-session-visible")})),this.Ky=B((function(){return new Kt(i.Bi.win,i)})),this.Qy=!1,this.Xy=!1,this.qg=null,this.G=!1,this.Yg=!1,this.hasAutoplay=n.element.hasAttribute("autoplay"),this.hasAutoplay&&this.Jy.installAutoplayStyles(),this.Bg=Tt,this.Dg=function(){mt(i.video,!1)},this.Jg=function(){i.video.pause()},bt(n.element,Et,(function(){return i.videoLoaded()})),bt(n.element,At,(function(){return i.Vg()})),bt(n.element,"play",(function(){i.Yg=!0,Qt(i,Ft)})),bt(n.element,Pt,(function(){return i.Zg()})),bt(n.element,zt,(function(){return i.G=!0})),bt(n.element,Ct,(function(){i.G=!1,i.Jy.pauseOtherVideos(i)})),bt(n.element,"amp:video:tick",(function(t){var n=wt(t),r=n.eventType;r&&i.$g(r,n.vars)})),bt(n.element,Yt,(function(){i.Zy=!1,Qt(i,"video-ended")})),bt(n.element,It,(function(){i.Zy=!0,Qt(i,"video-ad-start")})),bt(n.element,_t,(function(){i.Zy=!1,Qt(i,"video-ad-end")})),n.signals().whenSignal(Rt).then((function(){return i.Hg()})),this.Kg=B((function(){var t="firstPlay",n=yt(i.Bi.win,t,{}),r=i.video.element;ut(r).trigger(r,t,n,1)})),this.Qg()}var n=t.prototype;return n.dispose=function(){this.Ky().stop()},n.$g=function(t,n){var i,r,e,o=(e=t,(r="__amp:eventType")in(i={})?Object.defineProperty(i,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):i[r]=e,i);Object.keys(n).forEach((function(t){o["custom_".concat(t)]=n[t]})),Qt(this,"video-hosted-custom",o)},n.Qg=function(){var t=this;this.video.signals().whenSignal("playback-delegated").then((function(){t.Gy=!1,t.Zn&&t.video.pause()}))},n.isMuted=function(){return this.G},n.isPlaybackManaged=function(){return this.Gy},n.Hg=function(){this.Xg()&&this.Jy.registerForAutoFullscreen(this),this.hasAutoplay&&this.uw()},n.Xg=function(){var t=this.video.element;return!(this.video.preimplementsAutoFullscreen()||!t.hasAttribute("rotate-to-fullscreen"))&&$(this.video.isInteractive(),"Only interactive videos are allowed to enter fullscreen on rotate. Set the `controls` attribute on %s to enable.",t)},n.Zg=function(){this.Zn=!0,this.getPlayingState()==Ut&&(this.Kg(),this.Jy.pauseOtherVideos(this));var t,n,i,r,e,o=this.video,u=o.element;o.preimplementsMediaSessionAPI()||u.classList.contains("i-amphtml-disable-mediasession")||(function(t,n){var i=ft(t);if(n&&n.artwork){var r=n.artwork;Z(h(r)),r.forEach((function(t){if(t){var n=d(t)?t.src:t;$(i.isProtocolValid(n))}}))}}(u,this.Bg),t=this.Bi.win,n=this.Bg,i=this.Dg,r=this.Jg,"mediaSession"in(e=t.navigator)&&t.MediaMetadata&&(e.mediaSession.metadata=new t.MediaMetadata(Tt),e.mediaSession.metadata=new t.MediaMetadata(n),e.mediaSession.setActionHandler("play",i),e.mediaSession.setActionHandler("pause",r))),this.$y.beginSession(),this.dr&&this.Hy.beginSession(),this.Yg||Qt(this,Ft)},n.Vg=function(){Qt(this,"video-pause"),this.Zn=!1,this.Xy?this.Xy=!1:this.$y.endSession()},n.videoLoaded=function(){this.Vy=!0,this.qg=dt(this.video.element),this.aw(),this.Ky().start(),this.dr&&this.fw()},n.aw=function(){if(!this.video.preimplementsMediaSessionAPI()){this.video.getMetadata()&&(this.Bg=m(this.video.getMetadata()));var t=this.Bi.win.document;if(!this.Bg.artwork||0==this.Bg.artwork.length){var n=function(t){var n=t.querySelector('script[type="application/ld+json"]');if(n){var i=b(n.textContent);if(i&&i.image)return"string"==typeof i.image?i.image:i.image["@list"]&&"string"==typeof i.image["@list"][0]?i.image["@list"][0]:"string"==typeof i.image.url?i.image.url:"string"==typeof i.image[0]?i.image[0]:void 0}}(t)||function(t){var n=t.querySelector('meta[property="og:image"]');return n?n.getAttribute("content"):void 0}(t)||function(t){var n=t.querySelector('link[rel="shortcut icon"]')||t.querySelector('link[rel="icon"]');return n?n.getAttribute("href"):void 0}(t);n&&(this.Bg.artwork=[{"src":n}])}if(!this.Bg.title){var i=this.video.element.getAttribute("title")||this.video.element.getAttribute("aria-label")||this.qg.getAttribute("title")||this.qg.getAttribute("aria-label")||t.title;i&&(this.Bg.title=i)}}},n.cw=function(){this.Vy&&this.fw()},n.fw=function(){var t=this;this.Bi.isVisible()&&vt(this.Bi.win).then((function(n){t.hasAutoplay&&!t.userInteracted()&&n?t.hw():t.lw()}))},n.uw=function(){var t=this;this.video.isInteractive()&&this.video.hideControls(),vt(this.Bi.win).then((function(n){n||!t.video.isInteractive()?(t.video.mute(),t.dw()):t.video.showControls()}))},n.dw=function(){var t=this,n=this.video,i=this.video,r=i.element;if(i.win,!r.hasAttribute("noaudio")&&!r.signals().get(Lt)){var e=function(t,n){for(var i=xt(n)(Ot),r=i.firstElementChild,e=0;e<4;e++){for(var o=r.cloneNode(!0),u=o.children,a=0;a<u.length;a++)u[a].classList.add("amp-video-eq-".concat(e+1,"-").concat(a+1));i.appendChild(o)}return q(r),i}(0,r),o=[e],u=[bt(r,At,(function(){return f(!1)})),bt(r,Pt,(function(){return f(!0)})),bt(r,It,(function(){s(!1),n.showControls()})),bt(r,_t,(function(){s(!0),n.hideControls()})),bt(r,Ct,(function(){return Nt(n)}))];if(n.isInteractive()){n.hideControls();var a=function(t,n){var i=xt(t)(St);return n&&n.title&&i.setAttribute("aria-label",n.title),i}(r,this.Bg);o.push(a),u.push(bt(a,"click",(function(){return Nt(n)})))}n.mutateElementSkipRemeasure((function(){o.forEach((function(t){r.appendChild(t)}))})),this.Zy&&s(!1),n.signals().whenSignal(Lt).then((function(){t.Kg(),n.isInteractive()&&n.showControls(),n.unmute(),u.forEach((function(t){t()})),n.mutateElementSkipRemeasure((function(){o.forEach((function(t){q(t)}))}))}))}function s(t){n.mutateElementSkipRemeasure((function(){o.forEach((function(n){!function(t,n){void 0===n&&(n=t.hasAttribute("hidden")),n?t.removeAttribute("hidden"):t.setAttribute("hidden","")}(n,t)}))}))}function f(t){n.mutateElementSkipRemeasure((function(){return e.classList.toggle("amp-video-eq-play",t)}))}},n.hw=function(){this.Gy&&(this.dr?(this.Hy.beginSession(),mt(this.video,!0),this.Qy=!0):(this.Zn&&this.Hy.endSession(),this.video.pause(),this.Xy=!0))},n.lw=function(){this.dr?this.Hy.beginSession():this.Zn&&this.Hy.endSession()},n.updateVisibility=function(t){var n=this.dr;this.dr=t,t!=n&&this.cw()},n.getPlayingState=function(){return this.Zn?this.Zn&&this.Qy&&!this.userInteracted()?"playing_auto":Ut:Wt},n.isRollingAd=function(){return this.Zy},n.userInteracted=function(){return null!=this.video.signals().get(Lt)},n.getAnalyticsDetails=function(){var t=this,n=this.video;return Promise.all([vt(this.Bi.win),lt(n.element)]).then((function(i){var r=i[0],e=i[1].boundingClientRect,o=e.height,u=e.width,a=t.hasAutoplay&&r,s=n.getPlayedRanges(),f=s.reduce((function(t,n){return t+n[1]-n[0]}),0);return{"autoplay":a,"currentTime":n.getCurrentTime(),"duration":n.getDuration(),"height":o,"id":n.element.id,"muted":t.G,"playedTotal":f,"playedRangesJson":JSON.stringify(s),"state":t.getPlayingState(),"width":u}}))},t}(),Zt=function(){function t(t,n){var i=this;this.Jy=n,this.Bi=t,this.pw=null,this.mw=null,this.Py=[],this.yw=[],this.bw=function(){return i.gw()},this.ww=function(t){return i.kw(t)==Ut},this.qw=function(t,n){return i.Sw(t,n)},this.jw(),this.xw()}var n=t.prototype;return n.dispose=function(){this.yw.forEach((function(t){return t()})),this.yw.length=0},n.register=function(t){var n=t.video,i=n.element;this.Ow(i)&&(this.Py.push(n),bt(i,At,this.bw),bt(i,Pt,this.bw),bt(i,Yt,this.bw),n.signals().whenSignal(Lt).then(this.bw),this.gw())},n.xw=function(){var t=this,n=this.Bi.getRootNode(),i=function(){return t.Mw()};this.yw.push(bt(n,"webkitfullscreenchange",i),bt(n,"mozfullscreenchange",i),bt(n,"fullscreenchange",i),bt(n,"MSFullscreenChange",i))},n.isInLandscape=function(){return(t=this.Bi.win).screen&&"orientation"in t.screen?t.screen.orientation.type.startsWith("landscape"):90==Math.abs(t.orientation);var t},n.Ow=function(t){if("video"==dt(t).tagName.toLowerCase())return!0;var n=at(this.Bi.win);return!n.isIos()&&!n.isSafari()||function(t){return!!{"amp-dailymotion":!0,"amp-ima-video":!0}[t.tagName.toLowerCase()]}(t)},n.Mw=function(){this.pw=null},n.jw=function(){var t=this,n=this.Bi.win,i=n.screen;if(i&&"orientation"in i){var r=i.orientation;this.yw.push(bt(r,"change",(function(){return t.Pw()})))}this.yw.push(bt(n,"orientationchange",(function(){return t.Pw()})))},n.Pw=function(){this.isInLandscape()?null!=this.mw&&this.Rw(this.mw):this.pw&&this.Aw(this.pw)},n.Rw=function(t){var n=at(this.Bi.win);this.pw=t,n.isAndroid()&&n.isChrome()?t.fullscreenEnter():this.Tw(t).then((function(){return t.fullscreenEnter()}))},n.Aw=function(t){this.pw=null,this.Tw(t,"center").then((function(){return t.fullscreenExit()}))},n.Tw=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=t.element,r=this.Ew();return this.Cw().then((function(){return lt(i)})).then((function(t){var e=t.boundingClientRect,o=e.bottom,u=e.top,a=r.getSize().height;if(u>=0&&o<=a)return s();var f=n||(o>a?"bottom":"top");return r.animateScrollIntoView(i,f)}))},n.Ew=function(){return ct(this.Bi)},n.Cw=function(){return st(this.Bi.win).promise(330)},n.gw=function(){var t=this;if(this.isInLandscape())return Promise.resolve(this.mw);this.mw=null;var n=this.Py.filter(this.ww).map((function(t){return lt(t.element)}));return Promise.all(n).then((function(n){var i=n.sort(t.qw)[0];return i&&i.intersectionRatio>.5?i.target.getImpl().then((function(n){return t.mw=n})):t.mw}))},n.Sw=function(t,n){var i=t.boundingClientRect,r=t.intersectionRatio,e=n.boundingClientRect,o=r-n.intersectionRatio;if(Math.abs(o)>.1)return o;var u=ct(this.Bi),a=$t(u,i),s=$t(u,e);return a<s||a>s?a-s:i.top-e.top},n.kw=function(t){return this.Jy.getPlayingState(t)},t}();function $t(t,n){var i=n.top+n.height/2,r=t.getSize().height/2;return Math.abs(i-r)}function Gt(t){return 10*t*5}var Ht=function(t){return!!t&&!isNaN(t)&&t>1},Kt=function(){function t(t,n){this.Pe=st(t),this.Yw=n,this.yw=null,this.Iw=0,this.zw=0}var n=t.prototype;return n.start=function(){var t=this,n=this.Yw.video.element;this.stop(),this.yw=this.yw||[],this.Uw()?this.Ww(this.zw):this.yw.push(function(n,i,r,e){var o=function(){t.Uw()&&t.Ww(t.zw)},u=pt(n,"loadedmetadata",(function(t){try{o(t)}finally{o=null,u()}}),void 0);return u}(n)),this.yw.push(bt(n,Yt,(function(){t.Uw()&&t._w(100)})))},n.stop=function(){if(this.yw){for(;this.yw.length>0;)this.yw.pop()();this.zw++}},n.Uw=function(){var t=this.Yw.video,n=t.getDuration();if(!Ht(n))return!1;if(Gt(n)<250){var i=Math.ceil(5);this.Fw("This video is too short for `video-percentage-played`. Reports may be innacurate. For best results, use videos over",i,"seconds long.",t.element)}return!0},n.Fw=function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];D().warn.apply(D(),[Bt].concat(n))},n.Ww=function(t){var n,i=this;if(t==this.zw){var r=this.Yw,e=this.Pe,o=r.video,u=function(){return i.Ww(t)};if(r.getPlayingState()!=Wt){var a=o.getDuration();if(Ht(a)){var s=(n=Gt(a),y(!0),Math.min(Math.max(n,250),4e3)),f=o.getCurrentTime()/a*100,c=5*Math.floor(f/5);Z(p(c)),this._w(c),e.delay(u,s)}else e.delay(u,500)}else e.delay(u,500)}},n._w=function(t){t<=0||this.Iw!=t&&(this.Iw=t,this.Lw(t))},n.Lw=function(t){Qt(this.Yw,"video-percentage-played",{"normalizedPercentage":t.toString()})},t}();function Qt(t,n,i){var r=t.video;t.getAnalyticsDetails().then((function(t){i&&Object.assign(t,i),S(r.element,n,t)}))}var Xt=["<iframe frameborder=0 allowfullscreen></iframe>"],tn="amp-ooyala-player",nn=function(t){!function(t,i){if("function"!=typeof i&&null!==i)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(i&&i.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),i&&n(t,i)}(s,t);var r,o,a=(r=s,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=i(r);if(o){var u=i(this).constructor;t=Reflect.construct(n,arguments,u)}else t=n.apply(this,arguments);return e(this,t)});function s(t){var n;return(n=a.call(this,t)).tb=null,n.aq="",n.sq="",n.kb="",n.Qb=null,n.Oy=null,n.Bb=null,n.yt=new N(n.element),n}var c=s.prototype;return c.preconnectCallback=function(t){var n;(n=this.win,G(n,"preconnect")).url(this.getAmpDoc(),"https://player.ooyala.com",t)},c.buildCallback=function(){var t=this.element;this.aq=$(t.getAttribute("data-embedcode"),"The data-embedcode attribute is required for %s",t),this.sq=$(t.getAttribute("data-pcode"),"The data-pcode attribute is required for %s",t),this.kb=$(t.getAttribute("data-playerid"),"The data-playerid attribute is required for %s",t);var n,i,r,e,o=new f;this.Qb=o.promise,this.Oy=o.resolve,i="video-manager",r=Jt,function(t,n,i,r,e,o){var u=nt(t),a=u[i];a||(a=u[i]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),a.ctor||(a.ctor=r,a.context=n,a.sharedInstance=!1,a.resolve&&tt(t,i))}(X(e=Q(t)),e,i,r),(n=t,H(n,"video-manager")).register(this)},c.layoutCallback=function(){var t=this,n=this.element,i="https://player.ooyala.com/iframe.html?platform=html5-priority";if("v4"==(n.getAttribute("data-playerversion")||"").toLowerCase()){i="https://player.ooyala.com/static/v4/production/latest/skin-plugin/amp_iframe.html?pcode="+encodeURIComponent(this.sq);var r=n.getAttribute("data-config");r&&(i+="&options[skin.config]="+encodeURIComponent(r))}var e=function(t,n,i,r){var e=t.element,o=xt(e)(Xt);return function(t,n,i,r){for(var e,o,a=u(h(e=["referrerpolicy"])?e:[e],!0);!(o=a()).done;){var s=o.value,f=n.getAttribute(s);null!==f&&i.setAttribute(s,f)}}(0,t.element,o),o.src=ft(e).assertHttpsUrl(n,e),function(t,n){t.classList.add("i-amphtml-fill-content")}(o),e.appendChild(o),o}(this,i+="&ec="+encodeURIComponent(this.aq)+"&pbid="+encodeURIComponent(this.kb));this.tb=e,this.Bb=bt(this.win,"message",(function(n){t.fq(n)}));var o=this.loadPromise(this.tb).then((function(){S(n,Et)}));return this.Oy(o),this.yt.updatePlaying(!0),o},c.unlayoutCallback=function(){this.tb&&(q(this.tb),this.tb=null),this.Bb&&this.Bb();var t=new f;return this.Qb=t.promise,this.Oy=t.resolve,this.yt.updatePlaying(!1),!0},c.isLayoutSupported=function(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)},c.pauseCallback=function(){this.tb&&this.pause()},c.fq=function(t){if(t.source==this.tb.contentWindow){var n,i=d(n=wt(t))?n:b(n);null!=i&&function(t,n,i){if(null==i[n])return!1;var r=i[n];(h(r)?r:[r]).forEach((function(n){S(t,n)}))}(this.element,i.data,{"playing":Pt,"paused":At,"muted":zt,"unmuted":Ct})}},c.xy=function(t){var n=this;this.Qb.then((function(){n.tb&&n.tb.contentWindow&&n.tb.contentWindow.postMessage(t,"*")}))},c.play=function(t){this.xy("play")},c.pause=function(){this.xy("pause")},c.mute=function(){this.xy("mute")},c.unmute=function(){this.xy("unmute")},c.supportsPlatform=function(){return!0},c.isInteractive=function(){return!0},c.showControls=function(){},c.hideControls=function(){},c.fullscreenEnter=function(){var t,n;this.tb&&(n=(t=this.tb).requestFullscreen||t.requestFullScreen||t.webkitRequestFullscreen||t.webkitEnterFullscreen||t.msRequestFullscreen||t.mozRequestFullScreen)&&n.call(t)},c.fullscreenExit=function(){this.tb&&function(t){var n=t.cancelFullScreen||t.exitFullscreen||t.webkitExitFullscreen||t.webkitCancelFullScreen||t.mozCancelFullScreen||t.msExitFullscreen;if(n)n.call(t);else{var i=t.ownerDocument;if(i){var r=i.cancelFullScreen||i.exitFullscreen||i.webkitExitFullscreen||i.webkitCancelFullScreen||i.mozCancelFullScreen||i.msExitFullscreen;r&&r.call(i)}}}(this.tb)},c.isFullscreen=function(){return!!this.tb&&function(t){var n=t.webkitDisplayingFullscreen;if(void 0!==n)return n;var i=t.ownerDocument;return!!i&&(i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.webkitCurrentFullScreenElement)==t}(this.tb)},c.getMetadata=function(){},c.preimplementsMediaSessionAPI=function(){return!1},c.preimplementsAutoFullscreen=function(){return!1},c.getCurrentTime=function(){return 0},c.getDuration=function(){return 1},c.getPlayedRanges=function(){return[]},c.seekTo=function(t){this.user().error(tn,"`seekTo` not supported.")},s}(t.BaseElement);t.registerElement(tn,nn)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-ooyala-player-0.1.js.map