;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-inline-gallery",ev:"0.1",l:!0,f:function(i,n){(()=>{function n(i){return i?Array.prototype.slice.call(i):[]}var{isArray:t}=Array,{hasOwnProperty:e,toString:l}=Object.prototype;function a(i){const n=Object.create(null);return i&&Object.assign(n,i),n}function r(i,n,t,e,l,a,r,o,s,p,m){return i}var o="fixed-height",s="flex-item";function p(i){return"fixed"==i||i==o||"responsive"==i||"fill"==i||i==s||"fluid"==i||"intrinsic"==i}function m(i,n){return i.replace(/^|,/g,`$&${n} `)}function c(i,n){return i.querySelector(m(n,":scope"))}function g(i,n){return i.querySelectorAll(m(n,":scope"))}var h=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function u(i,n=""){try{return decodeURIComponent(i)}catch(i){return n}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var d,f=self.__AMP_LOG;function y(i){return function(i,n){throw new Error("failed to call initLogConstructor")}()}function b(i,n,t,e,l,a,r,o,s,p,m){return i}function v(i,n,t,e,l,a,r,o,s,p,m){return(f.user||(f.user=y()),void f.user.win?f.userForEmbed||(f.userForEmbed=y()):f.user).assert(i,n,t,e,l,a,r,o,s,p,m)}function x(i,n,t,e){const l={detail:t};return Object.assign(l,e),new i.CustomEvent(n,l)}function _(i){return i.detail}var P=["Webkit","webkit","Moz","moz","ms","O","o"];function A(i){const n=i.replace(/[A-Z]/g,(i=>"-"+i.toLowerCase()));return P.some((i=>n.startsWith(i+"-")))?`-${n}`:n}function w(i,n,t){if(n.startsWith("--"))return n;d||(d=a());let e=d[n];if(!e||t){if(e=n,void 0===i[n]){const t=function(i){return i.charAt(0).toUpperCase()+i.slice(1)}(n),l=function(i,n){for(let t=0;t<P.length;t++){const e=P[t]+n;if(void 0!==i[e])return e}return""}(i,t);void 0!==i[l]&&(e=l)}t||(d[n]=e)}return e}function k(i,n){const{style:t}=i;for(const i in n)t.setProperty(A(w(t,i)),String(n[i]),"important")}function M(i,n,t){return n in i?Object.defineProperty(i,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[n]=t,i}function R(i,n){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(i);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(i,n).enumerable}))),t.push.apply(t,e)}return t}function E(i){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){M(i,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))}))}return i}var T,O="__AMP__EXPERIMENT_TOGGLES";function I(i,n){const e=function(i){var n,e,l,o,s;if(i[O])return i[O];i[O]=a();const p=i[O];r(p);const m=E(E({},null!==(n=i.AMP_CONFIG)&&void 0!==n?n:{}),null!==(e=i.AMP_EXP)&&void 0!==e?e:(c=(null===(l=i.__AMP_EXP)||void 0===l?void 0:l.textContent)||"{}",JSON.parse(c)));var c;for(const i in m){const n=m[i];"number"==typeof n&&n>=0&&n<=1&&(p[i]=Math.random()<n)}const g=null===(o=i.AMP_CONFIG)||void 0===o?void 0:o["allow-doc-opt-in"];if(t(g)&&g.length){const n=i.document.head.querySelector('meta[name="amp-experiments-opt-in"]');if(n){var d;const i=(null===(d=n.getAttribute("content"))||void 0===d?void 0:d.split(","))||[];for(const n of i)g.includes(n)&&(p[n]=!0)}}Object.assign(p,function(i){var n;let t="";try{var e;"localStorage"in i&&(t=null!==(e=i.localStorage.getItem("amp-experiment-toggles"))&&void 0!==e?e:"")}catch(i){}const l=(null===(n=t)||void 0===n?void 0:n.split(/\s*,\s*/g))||[],r=a();for(const i of l)i&&("-"==i[0]?r[i.substr(1)]=!1:r[i]=!0);return r}(i));const f=null===(s=i.AMP_CONFIG)||void 0===s?void 0:s["allow-url-opt-in"];if(t(f)&&f.length){const n=function(i){const n=a();if(!i)return n;let t;for(;t=h.exec(i);){const i=u(t[1],t[1]),e=t[2]?u(t[2].replace(/\+/g," "),t[2]):"";n[i]=e}return n}(i.location.originalHash||i.location.hash);for(const i of f){const t=n[`e-${i}`];"1"==t&&(p[i]=!0),"0"==t&&(p[i]=!1)}}return p}(i);return!!e[n]}function j(i){const n=i.ownerDocument||i;return T&&T.ownerDocument===n||(T=n.createElement("div")),V}function V(i){return function(i,n){r(1===n.length),i.innerHTML=n[0];const t=i.firstElementChild;return r(t),r(!t.nextElementSibling),i.removeChild(t),t}(T,i)}var z="amp-inline-gallery:go-to-slide",S=["<div class=i-amphtml-inline-gallery-pagination-container aria-hidden=true><div class=i-amphtml-inline-gallery-pagination-dots hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div></div><div class=i-amphtml-inline-gallery-pagination-numbers hidden><div class=i-amphtml-inline-gallery-pagination-frosting></div><div class=i-amphtml-inline-gallery-pagination-backdrop></div><div class=i-amphtml-inline-gallery-pagination-background></div><div class=i-amphtml-inline-gallery-pagination-count><span class=i-amphtml-inline-gallery-pagination-index></span> <span>/ </span><span class=i-amphtml-inline-gallery-pagination-total></span></div></div></div>"],L=["<div class=i-amphtml-inline-gallery-pagination-dot-container><div class=i-amphtml-inline-gallery-pagination-dot><div class=i-amphtml-inline-gallery-pagination-dot-progress></div></div></div>"];function C(i,n){return b(i>=0),b(i<=1),b(n>=1),Math.max(0,1-1/Math.pow(i,-1/n))}var D=class extends i.BaseElement{static prerenderAllowed(){return!0}constructor(i){super(i),this.D1=0,this.G1=null,this.Z1=null,this.q1=null,this.J1=null,this.K1=null}isLayoutSupported(i){return i==o}buildCallback(){this.element.appendChild(this.Q1()),this.Z1=this.element.querySelector(".i-amphtml-inline-gallery-pagination-dots"),this.q1=this.element.querySelector(".i-amphtml-inline-gallery-pagination-numbers"),this.J1=this.element.querySelector(".i-amphtml-inline-gallery-pagination-index"),this.K1=this.element.querySelector(".i-amphtml-inline-gallery-pagination-total")}Q1(){return j(this.element)(S)}Y1(i){const n=j(this.element)(L);return n.onclick=()=>{const n=x(this.win,z,{"index":i},{bubbles:!0});this.element.dispatchEvent(n)},n}i2(i,n=!1){if(i==this.D1&&!n)return;const t=i<=8,e=t?i:0;i===this.D1&&t===this.G1||(this.D1=i,this.G1=t,this.Z1.hidden=!t,this.q1.hidden=t,this.K1.textContent=i,this.n2(e))}t2(){return n(g(b(this.Z1),"> .i-amphtml-inline-gallery-pagination-dot-container"))}n2(i){const n=this.t2();for(let t=i;t<n.length;t++)this.Z1.removeChild(n[t]);for(let t=n.length;t<i;t++)this.Z1.appendChild(this.Y1(t))}e2(i,n){this.t2().forEach(((t,e)=>{const l=e-(i+n);k(t,{"--percentage-falloff":C(Math.max(1-Math.abs(l),0),2)}),0==n&&t.setAttribute("i-amphtml-inline-gallery-pagination-dot-active",e===i)}))}l2(i){this.J1.textContent=i+1}updateProgress(i,n,t,e){this.mutateElement((()=>{this.i2(i),this.e2(n,t),this.l2(n)}))}},N=class extends i.BaseElement{constructor(i){super(i)}isRelayoutNeeded(){return!0}isLayoutSupported(i){return v(I(this.win,"amp-inline-gallery-captions")||'expected "amp-inline-gallery-captions" experiment to be enabled'),p(i)}layoutCallback(){const{height:i}=this.getLayoutBox();k(this.element.closest("amp-inline-gallery"),{"--i-amphtml-caption-height":`${i}px`})}updateProgress(i,n,t,e){this.mutateElement((()=>{this.a2(e,n,t)}))}a2(i,n,t){i.forEach(((i,e)=>{const l=Math.abs(n+t-e),a=C(Math.min(2*l,1),3);k(i,{"--caption-opacity":a,"pointer-events":0==a?"none":"all"})}))}},U=i=>function(i,n){return function(i,n){b(function(i,n){const t=i.__AMP_SERVICES&&i.__AMP_SERVICES[n];return!(!t||!t.ctor)}(i,n));const t=function(i){let n=i.__AMP_SERVICES;return n||(n=i.__AMP_SERVICES={}),n}(i)[n];return t.obj||(b(t.ctor),b(t.context),t.obj=new t.ctor(t.context),b(t.obj),t.context=null,t.resolve&&t.resolve(t.obj)),t.obj}(i=function(i){return i.__AMP_TOP||(i.__AMP_TOP=i)}(i),n)}(i,"extensions"),$=["<figure class=i-amphtml-inline-gallery-slide-container><div class=i-amphtml-inline-gallery-slide-content-slot></div><figcaption class=i-amphtml-inline-gallery-slide-caption><amp-truncate-text layout=fill><span class=i-amphtml-inline-gallery-slide-caption-slot></span> <button class=i-amphtml-inline-gallery-slide-see-more slot=collapsed>See more</button><div class=i-amphtml-inline-gallery-slide-persistent-slot slot=persistent></div></amp-truncate-text></figcaption></figure>"],G=class extends i.BaseElement{Q1(){v(I(this.win,"amp-inline-gallery-captions")||'expected "amp-inline-gallery-captions" experiment to be enabled');const i=j(this.element)($);return i.querySelector('[slot="collapsed"]').addEventListener("click",(i=>{this.openLightbox(),i.stopPropagation()})),i}constructor(i){super(i)}openLightbox(){U(this.win).installExtensionForDoc(this.getAmpDoc(),"amp-lightbox-gallery").then((()=>document.querySelector("amp-lightbox-gallery").getImpl())).then((i=>{i.open(this.element,!0)}))}isLayoutSupported(){return s}buildCallback(){const i=this.Q1(),n=i.querySelector(".i-amphtml-inline-gallery-slide-caption-slot"),t=i.querySelector(".i-amphtml-inline-gallery-slide-content-slot"),e=i.querySelector(".i-amphtml-inline-gallery-slide-persistent-slot");this.element.childNodes.forEach((i=>{var l;const a=null===(l=i.getAttribute)||void 0===l?void 0:l.call(i,"slot");"caption"===a?n.appendChild(i):"attribution"===a?e.appendChild(i):null==a&&t.appendChild(i)})),this.element.appendChild(i)}},F="amp-carousel:offsetchange",Z="amp-carousel:indexchange",q=["<div class=i-amphtml-inline-gallery-thumbnails-container><div class=i-amphtml-inline-gallery-thumbnails-thumbnail><div class=i-amphtml-inline-gallery-thumbnails-resizer></div></div></div>"],J=['<amp-base-carousel layout=fill loop=true mixed-length=true snap=false snap-align=center controls="(pointer: fine) always, never" aria-hidden=true></amp-base-carousel>'],W=class extends i.BaseElement{static prerenderAllowed(){return!0}constructor(i){super(i),this.AN=null,this.o2=null}isLayoutSupported(i){return p(i)}buildCallback(){const i=Number(this.element.getAttribute("aspect-ratio-width"))||0,n=Number(this.element.getAttribute("aspect-ratio-height"))||0;i&&n&&(this.o2=i/n),this.element.addEventListener(F,(i=>{i.stopPropagation()})),this.element.addEventListener(Z,(i=>{i.stopPropagation()}))}setSlides(i){const n=i.map(((i,n)=>this.s2(i,n)));this.mutateElement((()=>{this.m2(n)}))}s2(i,n){const t=j(this.element)(q),e=i.offsetWidth/i.offsetHeight,l=this.o2||e||1;return function(i,n,t,e,l){const a=w(i.style,"padding-right",void 0);if(!a)return;const r=t+"%";i.style.setProperty(A(a),r)}(t.querySelector(".i-amphtml-inline-gallery-thumbnails-resizer"),0,100*l),t.querySelector(".i-amphtml-inline-gallery-thumbnails-thumbnail").appendChild(this.c2(i)),t.onclick=()=>{this.element.dispatchEvent(x(this.win,z,{"index":n},{bubbles:!0})),this.AN.getImpl().then((i=>{i.goToSlide(n,{smoothScroll:!0})}))},t}g2(){const i=document.createElement("div");return i.className="i-amphtml-inline-gallery-thumbnails-default",i}c2(i){const n=("amp-img, img",i.matches("amp-img, img")?i:c(i,"> amp-img, > img"));if(!n)return this.g2();const t=document.createElement("amp-img");t.className="i-amphtml-inline-gallery-thumbnails-image",t.setAttribute("layout","fill");const e=n.getAttribute("src");e&&t.setAttribute("src",e);const l=n.getAttribute("srcset");l&&t.setAttribute("srcset",l);const a=n.getAttribute("sizes");return a&&t.setAttribute("sizes",a),t}m2(i){this.AN&&this.element.removeChild(this.AN);const n=j(this.element);this.AN=n(J);for(const n of i)this.AN.appendChild(n);(function(i,n,e,l){const a=t(r=["loop"])?r:[r];var r;for(const i of a){const t=n.getAttribute(i);null!==t&&e.setAttribute(i,t)}})(0,this.element,this.AN),this.element.appendChild(this.AN)}},X="> amp-base-carousel, :not(amp-inline-gallery-thumbnails) > amp-base-carousel",B=class extends i.BaseElement{static prerenderAllowed(){return!0}constructor(i){super(i)}buildCallback(){this.element.addEventListener(F,(i=>{this.h2(i)})),this.element.addEventListener(Z,(i=>{this.u2(i)})),this.element.addEventListener(z,(i=>{this.d2(i)})),Promise.all([c(this.element,X).getImpl(),Promise.all(n(g(this.element,"amp-inline-gallery-thumbnails")).map((i=>i.getImpl())))]).then((i=>{const t=i[0],e=i[1],l=t.getSlides();n(e).forEach((i=>i.setSlides(l)))}))}isLayoutSupported(i){return"container"===i}f2(i,n,t,e){g(this.element,"amp-inline-gallery-pagination, amp-inline-gallery-captions").forEach((l=>{l.getImpl().then((l=>{l.updateProgress(i,n,t,e)}))}))}u2(i){const n=_(i),t=n.total,e=n.index,l=n.slides;this.f2(t,e,0,l)}h2(i){const n=_(i),t=n.total,e=n.index,l=n.offset,a=n.slides;this.f2(t,e,l,a)}d2(i){const n=_(i).index;g(this.element,X).forEach((i=>{i.getImpl().then((i=>{i.goToSlide(n,{smoothScroll:!0})}))}))}};i.registerElement("amp-inline-gallery-captions",N,"amp-inline-gallery-captions{pointer-events:none;padding-top:var(--caption-margin-top);margin-top:calc(var(--i-amphtml-caption-height, 0)*-1)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-captions.css*/"),i.registerElement("amp-inline-gallery-pagination",D,"amp-inline-gallery-pagination{font-size:12px;font-family:sans-serif;line-height:1}.i-amphtml-inline-gallery-pagination-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.i-amphtml-inline-gallery-pagination-dots{-ms-flex-item-align:center;align-self:center;z-index:0;-ms-flex-align:center;align-items:center;height:100%;max-width:60%}.i-amphtml-inline-gallery-pagination-dot-container,.i-amphtml-inline-gallery-pagination-dots{position:relative;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.i-amphtml-inline-gallery-pagination-dot-container{z-index:1;width:16px;min-width:14px}.i-amphtml-inline-gallery-pagination-dot{position:relative;background-color:rgba(0,0,0,0.2)}.i-amphtml-inline-gallery-pagination-dot-progress{position:absolute;top:0;background-color:rgba(0,0,0,0.6);opacity:0;opacity:calc(1 - var(--percentage-falloff))}[i-amphtml-inline-gallery-pagination-dot-active=true] .i-amphtml-inline-gallery-pagination-dot-progress{opacity:1;opacity:calc(1 - var(--percentage-falloff))}.i-amphtml-inline-gallery-pagination-dot,.i-amphtml-inline-gallery-pagination-dot-progress{width:8px;height:8px;border-radius:50%}.i-amphtml-inline-gallery-pagination-numbers{position:relative;-ms-flex-item-align:end;align-self:flex-end;z-index:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;height:100%;padding:0 8px}.i-amphtml-inline-gallery-pagination-count{z-index:1}.i-amphtml-inline-gallery-pagination-dots[hidden],.i-amphtml-inline-gallery-pagination-numbers[hidden]{display:none}amp-inline-gallery-pagination[inset]:not(.i-amphtml-hidden-by-media-query){position:absolute!important;left:0;right:0;bottom:0;bottom:var(--i-amphtml-caption-height,0);display:-ms-flexbox!important;display:flex!important}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-container{margin:18px;height:20px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background,amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{position:absolute;top:0;bottom:0;left:0;right:0;border-radius:12px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-frosting{-webkit-backdrop-filter:blur(3px);backdrop-filter:blur(3px)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-backdrop{-webkit-backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);backdrop-filter:blur(12px) invert(1) grayscale(0.6) brightness(0.8);opacity:0.5}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-background{background-color:rgba(0,0,0,0.3)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dots{padding:0 4px}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-numbers{color:#fff}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot{background-color:hsla(0,0%,100%,0.35)}amp-inline-gallery-pagination[inset] .i-amphtml-inline-gallery-pagination-dot-progress{background-color:#fff}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-pagination.css*/"),i.registerElement("amp-inline-gallery-slide",G,"amp-inline-gallery-slide{position:static!important;transform:none!important;will-change:auto!important}amp-inline-gallery-slide.i-amphtml-layout-size-defined{overflow:visible!important}.i-amphtml-inline-gallery-slide-container{width:100%;height:100%;margin:0}.i-amphtml-inline-gallery-slide-content-slot{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:calc(100% - var(--i-amphtml-caption-height, 0px));transform:var(--content-transform,translateZ(1px));will-change:transform;overflow:hidden}.i-amphtml-inline-gallery-slide-caption{position:absolute;left:6px;right:6px;margin-top:var(--caption-margin-top);height:var(--i-amphtml-caption-height,0);overflow:hidden;opacity:var(--caption-opacity)}.i-amphtml-inline-gallery-slide-see-more{float:right;padding:0 0 0 6px;border:0;color:#48f;background-color:transparent;outline:none;font-family:inherit;font-size:inherit;line-height:1.25em}.i-amphtml-inline-gallery-slide-persistent-slot{clear:both}.i-amphtml-inline-gallery-slide-content-slot>*{height:100%;width:100%}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-slide.css*/"),i.registerElement("amp-inline-gallery-thumbnails",W,"amp-inline-gallery-thumbnails .i-amphtml-carousel-content{padding:0;padding:0 calc(var(--thumbnail-margin, 0)/2)}.i-amphtml-inline-gallery-thumbnails-container{box-sizing:border-box;width:auto!important;height:100%;-ms-flex-preferred-size:content;flex-basis:content;padding:0;padding:var(--thumbnail-margin,0) calc(var(--thumbnail-margin, 0)/2);-ms-writing-mode:tb-lr;writing-mode:vertical-lr}.i-amphtml-inline-gallery-thumbnails-thumbnail{position:relative;width:auto;height:100%}.i-amphtml-inline-gallery-thumbnails-resizer{position:static;height:100%}.i-amphtml-inline-gallery-thumbnails-default,.i-amphtml-inline-gallery-thumbnails-image{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-inline-gallery-thumbnails-default{background-color:#999}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery-thumbnails.css*/"),i.registerElement("amp-inline-gallery",B,"amp-inline-gallery{--i-amphtml-caption-height:0px}amp-inline-gallery>amp-base-carousel{padding-bottom:var(--i-amphtml-caption-height)}amp-inline-gallery .i-amphtml-base-carousel-arrow-next-slot,amp-inline-gallery .i-amphtml-base-carousel-arrow-prev-slot{margin-bottom:var(--i-amphtml-caption-height)}\n/*# sourceURL=/extensions/amp-inline-gallery/0.1/amp-inline-gallery.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-inline-gallery-0.1.mjs.map