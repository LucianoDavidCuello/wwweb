;
(self.AMP=self.AMP||[]).push({m:0,v:"2205120110001",n:"amp-inline-gallery",ev:"0.1",l:!0,f:function(i,n){!function(){function n(i,t){return(n=Object.setPrototypeOf||function(i,n){return i.__proto__=n,i})(i,t)}function t(i,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,writable:!0,configurable:!0}}),t&&n(i,t)}function e(i){return(e=Object.setPrototypeOf?Object.getPrototypeOf:function(i){return i.__proto__||Object.getPrototypeOf(i)})(i)}function a(i){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(i){return typeof i}:function(i){return i&&"function"==typeof Symbol&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i})(i)}function l(i,n){if(n&&("object"===a(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(void 0===i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(i)}function r(i){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(i){return!1}}();return function(){var t,a=e(i);if(n){var r=e(this).constructor;t=Reflect.construct(a,arguments,r)}else t=a.apply(this,arguments);return l(this,t)}}function o(i){return i?Array.prototype.slice.call(i):[]}var s=Array.isArray;function u(i,n){(null==n||n>i.length)&&(n=i.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=i[t];return e}function c(i,n){var t="undefined"!=typeof Symbol&&i[Symbol.iterator]||i["@@iterator"];if(t)return(t=t.call(i)).next.bind(t);if(Array.isArray(i)||(t=function(i,n){if(i){if("string"==typeof i)return u(i,n);var t=Object.prototype.toString.call(i).slice(8,-1);return"Object"===t&&i.constructor&&(t=i.constructor.name),"Map"===t||"Set"===t?Array.from(i):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(i,n):void 0}}(i))||n&&i&&"number"==typeof i.length){t&&(i=t);var e=0;return function(){return e>=i.length?{done:!0}:{done:!1,value:i[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var p=Object.prototype;function m(i){var n=Object.create(null);return i&&Object.assign(n,i),n}function g(i,n,t,e,a,l,r,o,s,u,c){return i}p.hasOwnProperty,p.toString;var f,h="fixed-height",d="flex-item";function v(i){return"fixed"==i||i==h||"responsive"==i||"fill"==i||i==d||"fluid"==i||"intrinsic"==i}function y(i){return void 0!==f?f:f=function(i){try{var n=i.ownerDocument,t=n.createElement("div"),e=n.createElement("div");return t.appendChild(e),t.querySelector(":scope div")===e}catch(i){return!1}}(i)}function b(i,n){return i.replace(/^|,/g,"$&".concat(n," "))}function x(i,n){var t=i.classList,e="i-amphtml-scoped";t.add(e);var a=b(n,".".concat(e)),l=i.querySelectorAll(a);return t.remove(e),l}function w(i,n){if(y(i))return i.querySelector(b(n,":scope"));var t=x(i,n)[0];return void 0===t?null:t}function j(i,n){return y(i)?i.querySelectorAll(b(n,":scope")):x(i,n)}function O(i,n){var t=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||i.oMatchesSelector;return!!t&&t.call(i,n)}function k(i,n,t){return n in i?Object.defineProperty(i,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[n]=t,i}var S=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function z(i){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";try{return decodeURIComponent(i)}catch(i){return n}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var E,R=self.__AMP_LOG;function M(i,n){throw new Error("failed to call initLogConstructor")}function A(i){return M()}function L(i,n,t,e,a,l,r,o,s,u,c){return i}function U(i,n,t,e,a,l,r,o,s,u,c){return(R.user||(R.user=A()),void R.user.win?R.userForEmbed||(R.userForEmbed=A()):R.user).assert(i,n,t,e,a,l,r,o,s,u,c)}function I(i,n,t,e){var a={detail:t};if(Object.assign(a,e),"function"==typeof i.CustomEvent)return new i.CustomEvent(n,a);var l=i.document.createEvent("CustomEvent");return l.initCustomEvent(n,!!a.bubbles,!!a.cancelable,t),l}function P(i){return i.detail}var T=["Webkit","webkit","Moz","moz","ms","O","o"];function N(i){var n=i.replace(/[A-Z]/g,(function(i){return"-"+i.toLowerCase()}));return T.some((function(i){return n.startsWith(i+"-")}))?"-".concat(n):n}function _(i,n,t){if(n.startsWith("--"))return n;E||(E=m());var e=E[n];if(!e||t){if(e=n,void 0===i[n]){var a=function(i){return i.charAt(0).toUpperCase()+i.slice(1)}(n),l=function(i,n){for(var t=0;t<T.length;t++){var e=T[t]+n;if(void 0!==i[e])return e}return""}(i,a);void 0!==i[l]&&(e=l)}t||(E[n]=e)}return e}function C(i,n){var t=i.style;for(var e in n)t.setProperty(N(_(t,e)),String(n[e]),"important")}function B(i,n){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),t.push.apply(t,e)}return t}function F(i){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?B(Object(t),!0).forEach((function(n){k(i,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):B(Object(t)).forEach((function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))}))}return i}var G,X="__AMP__EXPERIMENT_TOGGLES";function Z(i,n){var t=function(i){var n,t,e,a,l;if(i[X])return i[X];i[X]=m();var r=i[X];g(r);var o,u=F(F({},null!==(n=i.AMP_CONFIG)&&void 0!==n?n:{}),null!==(t=i.AMP_EXP)&&void 0!==t?t:(o=(null===(e=i.__AMP_EXP)||void 0===e?void 0:e.textContent)||"{}",JSON.parse(o)));for(var p in u){var f=u[p];"number"==typeof f&&f>=0&&f<=1&&(r[p]=Math.random()<f)}var h=null===(a=i.AMP_CONFIG)||void 0===a?void 0:a["allow-doc-opt-in"];if(s(h)&&h.length){var d=i.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(d)for(var v,y,b=c((null===(v=d.getAttribute("content"))||void 0===v?void 0:v.split(","))||[],!0);!(y=b()).done;){var x=y.value;h.includes(x)&&(r[x]=!0)}}Object.assign(r,function(i){var n,t="";try{var e;"localStorage"in i&&(t=null!==(e=i.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(i){(R.dev||(R.dev=M())).warn("EXPERIMENTS","Failed to retrieve experiments from localStorage.")}for(var a,l=(null===(n=t)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],r=m(),o=c(l,!0);!(a=o()).done;){var s=a.value;s&&("-"==s[0]?r[s.substr(1)]=!1:r[s]=!0)}return r}(i));var w=null===(l=i.AMP_CONFIG)||void 0===l?void 0:l["allow-url-opt-in"];if(s(w)&&w.length)for(var j,O=function(i){var n,t=m();if(!i)return t;for(;n=S.exec(i);){var e=z(n[1],n[1]),a=n[2]?z(n[2].replace(/\+/g," "),n[2]):"";t[e]=a}return t}(i.location.originalHash||i.location.hash),k=c(w,!0);!(j=k()).done;){var E=j.value,A=O["e-".concat(E)];"1"==A&&(r[E]=!0),"0"==A&&(r[E]=!1)}return r}(i);return!!t[n]}function $(i){var n=i.ownerDocument||i;return G&&G.ownerDocument===n||(G=n.createElement("div")),q}function q(i){return function(i,n){g(1===n.length),i.innerHTML=n[0];var t=i.firstElementChild;return g(t),g(!t.nextElementSibling),i.removeChild(t),t}(G,i)}var D="amp-inline-gallery:go-to-slide",J=["<div class=i-amphtml-inline-gallery-pagination-container aria-hidden=true><div class=i-amphtml-inline-gallery-pagination-dots hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div></div><div class=i-amphtml-inline-gallery-pagination-numbers hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div><div class=i-amphtml-inline-gallery-pagination-count><span class=i-amphtml-inline-gallery-pagination-index></span> <span>/ </span><span class=i-amphtml-inline-gallery-pagination-total></span></div></div></div>"],W=["<div class=i-amphtml-inline-gallery-pagination-dot-container><div class=i-amphtml-inline-gallery-pagination-dot><div class=i-amphtml-inline-gallery-pagination-dot-progress></div></div></div>"];function H(i,n){return L(i>=0),L(i<=1),L(n>=1),Math.max(0,1-1/Math.pow(i,-1/n))}var K=function(i){t(e,i);var n=r(e);function e(i){var t;return(t=n.call(this,i)).iB=0,t.eB=null,t.aB=null,t.lB=null,t.rB=null,t.oB=null,t}e.prerenderAllowed=function(){return!0};var a=e.prototype;return a.isLayoutSupported=function(i){return i==h},a.buildCallback=function(){this.element.appendChild(this.sB()),this.aB=this.element.querySelector(".i-amphtml-inline-gallery-pagination-dots"),this.lB=this.element.querySelector(".i-amphtml-inline-gallery-pagination-numbers"),this.rB=this.element.querySelector(".i-amphtml-inline-gallery-pagination-index"),this.oB=this.element.querySelector(".i-amphtml-inline-gallery-pagination-total")},a.sB=function(){return $(this.element)(J)},a.uB=function(i){var n=this,t=$(this.element)(W);return t.onclick=function(){var t=I(n.win,D,{"index":i},{bubbles:!0});n.element.dispatchEvent(t)},t},a.cB=function(i){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(i!=this.iB||n){var t=i<=8,e=t?i:0;i===this.iB&&t===this.eB||(this.iB=i,this.eB=t,this.aB.hidden=!t,this.lB.hidden=t,this.oB.textContent=i,this.pB(e))}},a.mB=function(){return o(j(L(this.aB),"> .i-amphtml-inline-gallery-pagination-dot-container"))},a.pB=function(i){for(var n=this.mB(),t=i;t<n.length;t++)this.aB.removeChild(n[t]);for(var e=n.length;e<i;e++)this.aB.appendChild(this.uB(e))},a.gB=function(i,n){this.mB().forEach((function(t,e){var a=e-(i+n);C(t,{"--percentage-falloff":H(Math.max(1-Math.abs(a),0),2)}),0==n&&t.setAttribute("i-amphtml-inline-gallery-pagination-dot-active",e===i)}))},a.fB=function(i){this.rB.textContent=i+1},a.updateProgress=function(i,n,t,e){var a=this;this.mutateElement((function(){a.cB(i),a.gB(n,t),a.fB(n)}))},e}(i.BaseElement),Q=function(i){t(e,i);var n=r(e);function e(i){return n.call(this,i)}var a=e.prototype;return a.isRelayoutNeeded=function(){return!0},a.isLayoutSupported=function(i){return U(Z(this.win,"amp-inline-gallery-captions")||'expected "amp-inline-gallery-captions" experiment to be enabled'),v(i)},a.layoutCallback=function(){var i,n,t=this.getLayoutBox().height;C((i=this.element,n="amp-inline-gallery",i.closest?i.closest(n):function(i,n,t){var e;for(e=i;e&&void 0!==e;e=e.parentElement)if(n(e))return e;return null}(i,(function(i){return O(i,n)}))),{"--i-amphtml-caption-height":"".concat(t,"px")})},a.updateProgress=function(i,n,t,e){var a=this;this.mutateElement((function(){a.hB(e,n,t)}))},a.hB=function(i,n,t){i.forEach((function(i,e){var a=Math.abs(n+t-e),l=H(Math.min(2*a,1),3);C(i,{"--caption-opacity":l,"pointer-events":0==l?"none":"all"})}))},e}(i.BaseElement),V=function(i){return function(i,n){return function(i,n){L(function(i,n){var t=i.__AMP_SERVICES&&i.__AMP_SERVICES[n];return!(!t||!t.ctor)}(i,n));var t=function(i){var n=i.__AMP_SERVICES;return n||(n=i.__AMP_SERVICES={}),n}(i)[n];return t.obj||(L(t.ctor),L(t.context),t.obj=new t.ctor(t.context),L(t.obj),t.context=null,t.resolve&&t.resolve(t.obj)),t.obj}(i=function(i){return i.__AMP_TOP||(i.__AMP_TOP=i)}(i),n)}(i,"extensions")},Y=["<figure class=i-amphtml-inline-gallery-slide-container><div class=i-amphtml-inline-gallery-slide-content-slot></div><figcaption class=i-amphtml-inline-gallery-slide-caption><amp-truncate-text layout=fill><span class=i-amphtml-inline-gallery-slide-caption-slot></span> <button class=i-amphtml-inline-gallery-slide-see-more slot=collapsed>See more</button><div class=i-amphtml-inline-gallery-slide-persistent-slot slot=persistent></div></amp-truncate-text></figcaption></figure>"],ii=function(i){t(a,i);var n=r(a),e=a.prototype;function a(i){return n.call(this,i)}return e.sB=function(){var i=this;U(Z(this.win,"amp-inline-gallery-captions")||'expected "amp-inline-gallery-captions" experiment to be enabled');var n=$(this.element)(Y);return n.querySelector('[slot="collapsed"]').addEventListener("click",(function(n){i.openLightbox(),n.stopPropagation()})),n},e.openLightbox=function(){var i=this;V(this.win).installExtensionForDoc(this.getAmpDoc(),"amp-lightbox-gallery").then((function(){return document.querySelector("amp-lightbox-gallery").getImpl()})).then((function(n){n.open(i.element,!0)}))},e.isLayoutSupported=function(){return d},e.buildCallback=function(){var i=this.sB(),n=i.querySelector(".i-amphtml-inline-gallery-slide-caption-slot"),t=i.querySelector(".i-amphtml-inline-gallery-slide-content-slot"),e=i.querySelector(".i-amphtml-inline-gallery-slide-persistent-slot");this.element.childNodes.forEach((function(i){var a,l=null===(a=i.getAttribute)||void 0===a?void 0:a.call(i,"slot");"caption"===l?n.appendChild(i):"attribution"===l?e.appendChild(i):null==l&&t.appendChild(i)})),this.element.appendChild(i)},a}(i.BaseElement),ni="amp-carousel:offsetchange",ti="amp-carousel:indexchange",ei=["<div class=i-amphtml-inline-gallery-thumbnails-container><div class=i-amphtml-inline-gallery-thumbnails-thumbnail><div class=i-amphtml-inline-gallery-thumbnails-resizer></div></div></div>"],ai=['<amp-base-carousel layout=fill loop=true mixed-length=true snap=false snap-align=center controls="(pointer: fine) always, never" aria-hidden=true></amp-base-carousel>'],li=function(i){t(e,i);var n=r(e);function e(i){var t;return(t=n.call(this,i)).dB=null,t.vB=null,t}e.prerenderAllowed=function(){return!0};var a=e.prototype;return a.isLayoutSupported=function(i){return v(i)},a.buildCallback=function(){var i=Number(this.element.getAttribute("aspect-ratio-width"))||0,n=Number(this.element.getAttribute("aspect-ratio-height"))||0;i&&n&&(this.vB=i/n),this.element.addEventListener(ni,(function(i){i.stopPropagation()})),this.element.addEventListener(ti,(function(i){i.stopPropagation()}))},a.setSlides=function(i){var n=this,t=i.map((function(i,t){return n.yB(i,t)}));this.mutateElement((function(){n.bB(t)}))},a.yB=function(i,n){var t=this,e=$(this.element)(ei),a=i.offsetWidth/i.offsetHeight,l=this.vB||a||1;return function(i,n,t,e,a){var l=_(i.style,"padding-right",void 0);if(l){var r=t+"%";i.style.setProperty(N(l),r)}}(e.querySelector(".i-amphtml-inline-gallery-thumbnails-resizer"),0,100*l),e.querySelector(".i-amphtml-inline-gallery-thumbnails-thumbnail").appendChild(this.xB(i)),e.onclick=function(){t.element.dispatchEvent(I(t.win,D,{"index":n},{bubbles:!0})),t.dB.getImpl().then((function(i){i.goToSlide(n,{smoothScroll:!0})}))},e},a.wB=function(){var i=document.createElement("div");return i.className="i-amphtml-inline-gallery-thumbnails-default",i},a.xB=function(i){var n=O(i,"amp-img, img")?i:w(i,"> amp-img, > img");if(!n)return this.wB();var t=document.createElement("amp-img");t.className="i-amphtml-inline-gallery-thumbnails-image",t.setAttribute("layout","fill");var e=n.getAttribute("src");e&&t.setAttribute("src",e);var a=n.getAttribute("srcset");a&&t.setAttribute("srcset",a);var l=n.getAttribute("sizes");return l&&t.setAttribute("sizes",l),t},a.bB=function(i){this.dB&&this.element.removeChild(this.dB);var n=$(this.element);this.dB=n(ai);for(var t,e=c(i,!0);!(t=e()).done;){var a=t.value;this.dB.appendChild(a)}(function(i,n,t,e){for(var a,l,r=c(s(a=["loop"])?a:[a],!0);!(l=r()).done;){var o=l.value,u=n.getAttribute(o);null!==u&&t.setAttribute(o,u)}})(0,this.element,this.dB),this.element.appendChild(this.dB)},e}(i.BaseElement),ri="> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel",oi=function(i){t(e,i);var n=r(e);function e(i){return n.call(this,i)}e.prerenderAllowed=function(){return!0};var a=e.prototype;return a.buildCallback=function(){var i=this;this.element.addEventListener(ni,(function(n){i.jB(n)})),this.element.addEventListener(ti,(function(n){i.OB(n)})),this.element.addEventListener(D,(function(n){i.kB(n)})),Promise.all([w(this.element,ri).getImpl(),Promise.all(o(j(this.element,"amp-inline-gallery-thumbnails")).map((function(i){return i.getImpl()})))]).then((function(i){var n=i[0],t=i[1],e=n.getSlides();o(t).forEach((function(i){return i.setSlides(e)}))}))},a.isLayoutSupported=function(i){return"container"===i},a.SB=function(i,n,t,e){j(this.element,"amp-inline-gallery-pagination, amp-inline-gallery-captions").forEach((function(a){a.getImpl().then((function(a){a.updateProgress(i,n,t,e)}))}))},a.OB=function(i){var n=P(i),t=n.total,e=n.index,a=n.slides;this.SB(t,e,0,a)},a.jB=function(i){var n=P(i),t=n.total,e=n.index,a=n.offset,l=n.slides;this.SB(t,e,a,l)},a.kB=function(i){var n=P(i).index;j(this.element,ri).forEach((function(i){i.getImpl().then((function(i){i.goToSlide(n,{smoothScroll:!0})}))}))},e}(i.BaseElement);i.registerElement("amp-inline-gallery-captions",Q,"amp-inline-gallery-captions{pointer-events:none;padding-top:var(--caption-margin-top);margin-top:calc(var(--i-amphtml-caption-height, 0)*-1)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-captions.css*/"),i.registerElement("amp-inline-gallery-pagination",K,"amp-inline-gallery-pagination{font-size:12px;font-family:sans-serif;line-height:1}.i-amphtml-inline-gallery-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.i-amphtml-inline-gallery-pagination-dots{-ms-flex-item-align:center;align-self:center;z-index:0;-ms-flex-align:center;align-items:center;height:100%;max-width:60%}.i-amphtml-inline-gallery-pagination-dot-container,.i-amphtml-inline-gallery-pagination-dots{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.i-amphtml-inline-gallery-pagination-dot-container{z-index:1;width:16px;min-width:14px}.i-amphtml-inline-gallery-pagination-dot{position:relative;background-color:rgba(0,0,0,0.2)}.i-amphtml-inline-gallery-pagination-dot-progress{position:absolute;top:0;background-color:rgba(0,0,0,0.6);opacity:0;opacity:calc(1 - var(--percentage-falloff))}[i-amphtml-inline-gallery-pagination-dot-active=true] .i-amphtml-inline-gallery-pagination-dot-progress{opacity:1;opacity:calc(1 - var(--percentage-falloff))}.i-amphtml-inline-gallery-pagination-dot,.i-amphtml-inline-gallery-pagination-dot-progress{width:8px;height:8px;border-radius:50%}.i-amphtml-inline-gallery-pagination-numbers{position:relative;-ms-flex-item-align:end;align-self:flex-end;z-index:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;padding:0 8px}.i-amphtml-inline-gallery-pagination-count{z-index:1}.i-amphtml-inline-gallery-pagination-dots[hidden],.i-amphtml-inline-gallery-pagination-numbers[hidden]{display:none}amp-inline-gallery-pagination[inset]:not(.i-amphtml-hidden-by-media-query){position:absolute!important;left:0;right:0;bottom:0;bottom:var(--i-amphtml-caption-height,0);display:-ms-flexbox!important;display:flex!important}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-container{margin:18px;height:20px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:12px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop{-webkit-backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);opacity:0.5}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background{background-color:rgba(0,0,0,0.3)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dots{padding:0 4px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-numbers{color:#fff}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot{background-color:hsla(0,0%,100%,0.35)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot-progress{background-color:#fff}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-pagination.css*/"),i.registerElement("amp-inline-gallery-slide",ii,"amp-inline-gallery-slide{position:static!important;transform:none!important;will-change:auto!important}amp-inline-gallery-slide.i-amphtml-layout-size-defined{overflow:visible!important}.i-amphtml-inline-gallery-slide-container{width:100%;height:100%;margin:0}.i-amphtml-inline-gallery-slide-content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:calc(100% - var(--i-amphtml-caption-height, 0px));transform:var(--content-transform,translateZ(1px));will-change:transform;overflow:hidden}.i-amphtml-inline-gallery-slide-caption{position:absolute;left:6px;right:6px;margin-top:var(--caption-margin-top);height:var(--i-amphtml-caption-height,0);overflow:hidden;opacity:var(--caption-opacity)}.i-amphtml-inline-gallery-slide-see-more{float:right;padding:0 0 0 6px;border:0;color:#48f;background-color:transparent;outline:none;font-family:inherit;font-size:inherit;line-height:1.25em}.i-amphtml-inline-gallery-slide-persistent-slot{clear:both}.i-amphtml-inline-gallery-slide-content-slot>*{height:100%;width:100%}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-slide.css*/"),i.registerElement("amp-inline-gallery-thumbnails",li,"amp-inline-gallery-thumbnails .i-amphtml-carousel-content{padding:0;padding:0 calc(var(--thumbnail-margin, 0)/2)}.i-amphtml-inline-gallery-thumbnails-container{box-sizing:border-box;width:auto!important;height:100%;-ms-flex-preferred-size:content;flex-basis:content;padding:0;padding:var(--thumbnail-margin,0) calc(var(--thumbnail-margin, 0)/2);-ms-writing-mode:tb-lr;writing-mode:vertical-lr}.i-amphtml-inline-gallery-thumbnails-thumbnail{position:relative;width:auto;height:100%}.i-amphtml-inline-gallery-thumbnails-resizer{position:static;height:100%}.i-amphtml-inline-gallery-thumbnails-default,.i-amphtml-inline-gallery-thumbnails-image{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-inline-gallery-thumbnails-default{background-color:#999}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-thumbnails.css*/"),i.registerElement("amp-inline-gallery",oi,"amp-inline-gallery{--i-amphtml-caption-height:0px}amp-inline-gallery>amp-base-carousel{padding-bottom:var(--i-amphtml-caption-height)}amp-inline-gallery .i-amphtml-base-carousel-arrow-next-slot,amp-inline-gallery .i-amphtml-base-carousel-arrow-prev-slot{margin-bottom:var(--i-amphtml-caption-height)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-inline-gallery-0.1.js.map