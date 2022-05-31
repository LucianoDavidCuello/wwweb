;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-accordion",ev:"0.1",l:!0,f:function(t,n){(()=>{var{isArray:n}=Array;function e(t){return"string"==typeof t}var{hasOwnProperty:i,toString:s}=Object.prototype;function r(t,n,e,i,s,r,o,a,c,h,l){return t}var o="ArrowUp";function a(t,n,e,i){return s=>c.solveYValueFromXValue(s,0,0,t,n,e,i,1,1)}var c=class{static solveYValueFromXValue(t,n,e,i,s,r,o,a,h){return c.rr(c.hr(t,n,i,r,a),e,s,o,h)}static hr(t,n,e,i,s){const r=1e-6;let o=(t-n)/(s-n);if(o<=0)return 0;if(o>=1)return 1;let a=0,h=1,l=0;for(let u=0;u<8;u++){l=c.ur(o,n,e,i,s);const u=(c.ur(o+r,n,e,i,s)-l)/r;if(Math.abs(l-t)<r)return o;if(Math.abs(u)<r)break;l<t?a=o:h=o,o-=(l-t)/u}for(let u=0;Math.abs(l-t)>r&&u<8;u++)l<t?(a=o,o=(o+h)/2):(h=o,o=(o+a)/2),l=c.ur(o,n,e,i,s);return o}static ur(t,n,e,i,s){if(0==t)return n;if(1==t)return s;let r=c.lr(n,e,t),o=c.lr(e,i,t);const a=c.lr(i,s,t);return r=c.lr(r,o,t),o=c.lr(o,a,t),c.lr(r,o,t)}static rr(t,n,e,i,s){if(0==t)return n;if(1==t)return s;let r=c.lr(n,e,t),o=c.lr(e,i,t);const a=c.lr(i,s,t);return r=c.lr(r,o,t),o=c.lr(o,a,t),c.lr(r,o,t)}static lr(t,n,e){return t+e*(n-t)}},h={LINEAR:t=>t,EASE:t=>c.solveYValueFromXValue(t,0,0,.25,.1,.25,1,1,1),EASE_IN:t=>c.solveYValueFromXValue(t,0,0,.42,0,1,1,1,1),EASE_OUT:t=>c.solveYValueFromXValue(t,0,0,0,0,.58,1,1,1),EASE_IN_OUT:t=>c.solveYValueFromXValue(t,0,0,.42,0,.58,1,1,1)},l={"linear":h.LINEAR,"ease":h.EASE,"ease-in":h.EASE_IN,"ease-out":h.EASE_OUT,"ease-in-out":h.EASE_IN_OUT};function u(t){if(!t)return null;if(e(t)){if(-1!=(t=t).indexOf("cubic-bezier")){const n=t.match(/cubic-bezier\((.+)\)/);if(n){const t=n[1].split(",").map(parseFloat);if(4==t.length){for(let n=0;n<4;n++)if(isNaN(t[n]))return null;return a(t[0],t[1],t[2],t[3])}}return null}return l[t]}return t}var d,f={bubbles:!0,cancelable:!0};function p(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:i}=t,s=new Error(e);for(const n in t)s[n]=t[n];return s.stack=i,s}function m(t){let n=null,e="";for(const t of arguments)t instanceof Error&&!n?n=p(t):(e&&(e+=" "),e+=t);return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function _(t,...n){const e=m.apply(null,n);e.name=t||e.name,function(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}(e)}var A=["Webkit","webkit","Moz","moz","ms","O","o"];function x(t){const n=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return A.some((t=>n.startsWith(t+"-")))?`-${n}`:n}function P(t,n,e){if(b(n))return n;d||(d=Object.create(null));let i=d[n];if(!i||e){if(i=n,void 0===t[n]){const e=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(n),s=function(t,n){for(let e=0;e<A.length;e++){const i=A[e]+n;if(void 0!==t[i])return i}return""}(t,e);void 0!==t[s]&&(i=s)}e||(d[n]=i)}return i}function v(t,n,e,i,s){const r=P(t.style,n,s);if(!r)return;const o=i?e+i:e;t.style.setProperty(x(r),o)}function g(t,n){for(const e in n)v(t,e,n[e])}function b(t){return t.startsWith("--")}function E(t,n){return(e,i)=>{for(const r in n)v(t,("display"===(s=r)&&_("STYLE","`display` style detected. You must use toggle instead."),s),n[r](e,i));var s}}function M(t,n){return e=>t+(n-t)*e}function w(t){return n=>`${t(n)}px`}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var y=self.__AMP_LOG;function T(t,n){throw new Error("failed to call initLogConstructor")}function I(t){return y.user||(y.user=V()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(y.user.win,t)?y.userForEmbed||(y.userForEmbed=V()):y.user}function V(t){return T()}function R(){return y.dev||(y.dev=T())}function S(t,n,e,i,s,r,o,a,c,h,l){return t}function k(t,n,e,i,s,r,o,a,c,h,l){return I().assert(t,n,e,i,s,r,o,a,c,h,l)}function O(t,n){return N(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function F(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,O(n,"ampdoc")).getAmpDoc(t):t;var n,e}function N(t,n){S($(t,n));const e=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(S(e.ctor),S(e.context),e.obj=new e.ctor(e.context),S(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function $(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}var j="Animation",D=function(){},C=class{static animate(t,n,e,i){return new C(t).setCurve(i).add(0,n,1).start(e)}constructor(t,n){this.cr=t,this.ar=n||O(self,"vsync"),this.dr=null,this.pr=[]}setCurve(t){return t&&(this.dr=u(t)),this}add(t,n,e,i){return this.pr.push({delay:t,func:n,duration:e,curve:u(i)}),this}start(t){return new H(this.ar,this.cr,this.pr,this.dr,t)}},H=class{constructor(t,n,e,i,s){this.ar=t,this.cr=n,this.pr=[];for(let t=0;t<e.length;t++){const n=e[t];this.pr.push({delay:n.delay,func:n.func,duration:n.duration,curve:n.curve||i,started:!1,completed:!1})}this.mr=s,this.zn=Date.now(),this.be=!0,this.Ai={};const r=new class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}};this._r=r.promise,this.te=r.resolve,this.Ar=r.reject,this.gr=this.ar.createAnimTask(this.cr,{mutate:this.Pr.bind(this)}),this.ar.canAnimate(this.cr)?this.gr(this.Ai):this.vr(!1,0)}then(t,n){return t||n?this._r.then(t,n):this._r}thenAlways(t){const n=t||D;return this.then(n,n)}halt(t){this.vr(!1,t||0)}vr(t,n){if(this.be){if(this.be=!1,0!=n){this.pr.length>1&&this.pr.sort(((t,n)=>t.delay+t.duration-(n.delay+n.duration)));try{if(n>0)for(let t=0;t<this.pr.length;t++)this.pr[t].func(1,!0);else for(let t=this.pr.length-1;t>=0;t--)this.pr[t].func(0,!1)}catch(n){R().error(j,"completion failed: "+n,n),t=!1}}t?this.te():this.Ar()}}Pr(t){if(!this.be)return;const n=Date.now(),e=Math.min((n-this.zn)/this.mr,1);for(let t=0;t<this.pr.length;t++){const n=this.pr[t];!n.started&&e>=n.delay&&(n.started=!0)}for(let t=0;t<this.pr.length;t++){const n=this.pr[t];n.started&&!n.completed&&this.Er(n,e)}1==e?this.vr(!0,0):this.ar.canAnimate(this.cr)?this.gr(this.Ai):this.vr(!1,0)}Er(t,n){let e,i;if(t.duration>0){if(e=Math.min((n-t.delay)/t.duration,1),i=e,t.curve&&1!=i)try{i=t.curve(e)}catch(t){return R().error(j,"step curve failed: "+t,t),void this.vr(!1,0)}}else e=1,i=1;1==e&&(t.completed=!0);try{t.func(i,t.completed)}catch(t){return R().error(j,"step mutate failed: "+t,t),void this.vr(!1,0)}}};new Set(["c","v","a","ad"]);var L="amp-accordion",z=a(.47,0,.745,.715),U=a(.39,.575,.565,1),Y=class extends t.BaseElement{static prerenderAllowed(){return!0}constructor(t){super(t),this.xS=[],this.ES=null,this.MS=null,this.wS=!1,this.yS=null,this.tc=null,this.Yx=t.id?t.id:Math.floor(100*Math.random())}isLayoutSupported(t){return"container"==t}buildCallback(){this.tc=function(t,n){const e=function(t){const n=F(t);return n.isSingleDoc()?n.win:n}(F(t));return $(e,n)?N(e,n):null}(this.element,"action"),this.wS=this.element.hasAttribute("disable-session-states"),this.ES=this.TS(),this.MS=this.IS(),this.yS=function(t,n){const i=[];for(let n=t.firstElementChild;n;n=n.nextElementSibling)!(function(t){let n;var i;return e(t)?n=t:1==(null==(i=t)?void 0:i.nodeType)&&(n=t.tagName),!!n&&n.toLowerCase().startsWith("i-")}(s=n)||s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("placeholder")||s.hasAttribute("fallback")||s.hasAttribute("overflow")))&&i.push(n);var s;return i}(this.element),this.yS.forEach(((t,n)=>{k("section"==t.tagName.toLowerCase(),"Sections should be enclosed in a <section> tag, See https://github.com/ampproject/amphtml/blob/main/extensions/amp-accordion/amp-accordion.md. Found in: %s",this.element);const e=t.children;k(2==e.length,"Each section must have exactly two children. See https://github.com/ampproject/amphtml/blob/main/extensions/amp-accordion/amp-accordion.md. Found in: %s",this.element);const{0:i,1:s}=e;s.classList.add("i-amphtml-accordion-content");let r=s.getAttribute("id");r||(r=this.Yx+"_AMP_content_"+n,s.setAttribute("id",r));let o=i.getAttribute("id");o||(o=this.Yx+"_AMP_header_"+n,i.setAttribute("id",o)),this.registerAction("toggle",(t=>this.VS(t))),this.registerAction("expand",(t=>this.VS(t))),this.registerAction("collapse",(t=>this.VS(t))),this.tc.addToAllowlist(L,["toggle","expand","collapse"],["email"]),new this.win.MutationObserver((t=>{this.RS(t,2)})).observe(t,{attributes:!0,attributeFilter:["data-expand"]}),this.MS[r]?t.setAttribute("expanded",""):!1===this.MS[r]&&t.removeAttribute("expanded"),this.mutateElement((()=>{})),k(!t.hasAttribute("[expanded]")&&!t.hasAttribute("data-amp-bind-expanded"),'The "expanded" attribute cannot be used with amp-bind in version 0.1 of amp-accordion. Please bind to [data-expand] instead. Found in: %s',this.element);const a=t.hasAttribute("expanded");i.classList.add("i-amphtml-accordion-header"),i.hasAttribute("role")||i.setAttribute("role","button"),i.setAttribute("aria-controls",r),i.setAttribute("aria-expanded",String(a)),i.hasAttribute("tabindex")||i.setAttribute("tabindex",0),this.xS.push(i),s.setAttribute("aria-labelledby",o),s.hasAttribute("role")||s.setAttribute("role","region"),k(0==this.tc.hasAction(i,"tap",t),"amp-accordion headings should not have tap actions registered."),i.addEventListener("click",this.kT.bind(this)),i.addEventListener("keydown",this.YT.bind(this))}))}VS(t){const{args:n,method:e,trust:i}=t;let s;if("expand"===e?s=!0:"collapse"===e&&(s=!1),n){const t=n.section;let e=this.getAmpDoc().getElementById(t);e=I().assertElement(e),k(e,"No element found with id: %s",t),this.Cx(e,i,s)}else for(let t=0;t<this.yS.length;t++)this.Cx(this.yS[t],i,s)}TS(){return`amp-${this.element.id||this.element.getResourceId()}-${function(t){const n=t.indexOf("#");return-1==n?t:t.substring(0,n)}(this.win.location.href)}`}IS(){if(this.wS)return{};try{const n=this.win.sessionStorage.getItem(this.ES);return n?S((t=n,JSON.parse(t))):{}}catch(t){return{}}var t}SS(){if(this.wS)return;const t=JSON.stringify(this.MS);try{this.win.sessionStorage.setItem(this.ES,t)}catch(t){}}aO(t,n,e){const i=function(t,n,e,i){const s={detail:{}};return Object.assign(s,void 0),new t.CustomEvent(n,s)}(this.win,`accordionSection.${t}`);this.tc.trigger(n,t,i,e),function(t,n,e,i){r(t.ownerDocument);const s=t.ownerDocument.createEvent("Event");s.data={};const{bubbles:o,cancelable:a}=f;s.initEvent(n,o,a),t.dispatchEvent(s)}(this.element,t)}Cx(t,n,e){const i=t.children,s=i[0],r=i[1].getAttribute("id"),o=t.hasAttribute("expanded"),a=null==e?!t.hasAttribute("expanded"):e;a&&t.hasAttribute("expanded")||!a&&!t.hasAttribute("expanded")||(this.element.hasAttribute("animate")?a?(s.setAttribute("aria-expanded","true"),this.kS(t,n),this.element.hasAttribute("expand-single-section")&&this.yS.forEach((e=>{e!=t&&(this.OS(e,n),e.children[0].setAttribute("aria-expanded","false"))}))):(s.setAttribute("aria-expanded","false"),this.OS(t,n)):this.mutateElement((()=>{a?(this.aO("expand",t,n),t.setAttribute("expanded",""),s.setAttribute("aria-expanded","true"),this.element.hasAttribute("expand-single-section")&&this.yS.forEach((e=>{e!=t&&(e.hasAttribute("expanded")&&(this.aO("collapse",e,n),e.removeAttribute("expanded")),e.children[0].setAttribute("aria-expanded","false"))}))):(this.aO("collapse",t,n),t.removeAttribute("expanded"),s.setAttribute("aria-expanded","false"))}),t),this.MS[r]=!o,this.SS())}kS(t,n){let e,i,s,r,o;const a=t.children[1];return this.measureMutateElement((()=>{e=t.offsetWidth,o=function(t,n,e){const i=P(t.style,"width",void 0);if(i)return b(i)?t.style.getPropertyValue(i):t.style[i]}(a)}),(()=>{!function(t,n){const{style:e}=t;for(const t in n)e.setProperty(x(P(e,t)),String(n[t]),"important")}(a,{"position":"fixed","width":`${e}px`,"opacity":"0"}),t.hasAttribute("expanded")||t.setAttribute("expanded","")})).then((()=>this.measureMutateElement((()=>{i=t.offsetHeight,s=a.offsetHeight;const n=this.getViewport().getHeight();r=this.FS(Math.abs(s),n)}),(()=>{g(t,{"overflow":"hidden","height":`${i}px`}),g(a,{"position":"","opacity":"","width":o})})))).then((()=>{const e=new C(this.element);return e.setCurve(z),e.add(0,E(t,{"height":w(M(i,i+s))}),1),e.add(0,E(a,{"opacity":M(0,1)}),1),e.start(r).thenAlways((()=>{this.mutateElement((()=>{this.aO("expand",t,n),g(t,{"overflow":"","height":""}),g(a,{"opacity":""})}))}))}))}OS(t,n){let e,i,s;const r=t.firstElementChild;return this.measureMutateElement((()=>{e=t.offsetHeight,i=r.offsetHeight;const n=this.getViewport().getSize().height;s=this.FS(Math.abs(e),n)}),(()=>{g(t,{"overflow":"hidden"})})).then((()=>C.animate(t,E(t,{"height":w(M(e,i))}),s,U).thenAlways((()=>this.mutateElement((()=>{t.hasAttribute("expanded")&&(this.aO("collapse",t,n),t.removeAttribute("expanded")),g(t,{"height":"","overflow":""})}))))))}FS(t,n,e=200,i=500){return s=Math.abs(t)/n*i,r((o=e)<=(a=i)),Math.min(Math.max(s,o),a);var s,o,a}NS(t){t.preventDefault();const n=t.currentTarget.parentElement;this.Cx(n,3)}kT(t){this.XT(t)&&this.NS(t)}XT(t){const n=t.target,e=t.currentTarget,i=!!function(t,n,e){let i;for(i=t;i&&i!==e;i=i.parentElement)if("A"==i.tagName)return i;return null}(n,0,e),s=this.tc.hasAction(n,"tap",e);return!i&&!s}YT(t){if(t.defaultPrevented)return;const{key:n}=t;switch(n){case o:case"ArrowDown":return void this.uV(t);case"Enter":case" ":return void(t.target==t.currentTarget&&this.NS(t))}}uV(t){const n=t.currentTarget,e=this.xS.indexOf(n);if(-1!==e){t.preventDefault();let n=(e+(t.key==o?-1:1))%this.xS.length;n<0&&(n+=this.xS.length),function(t){try{t.focus()}catch(t){}}(this.xS[n])}}RS(t,n){t.forEach((t=>{const e=t.target,i=e.hasAttribute("data-expand");e.hasAttribute("expanded")!==i&&this.Cx(e,n,i)}))}getActionServiceForTesting(){return this.tc}};t.registerElement(L,Y,"amp-accordion>section>:last-child{display:none!important}amp-accordion>section[expanded]>:last-child{display:block!important}.i-amphtml-accordion-content,.i-amphtml-accordion-header{margin:0}.i-amphtml-accordion-header{cursor:pointer;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}amp-accordion>section:not([expanded]) .i-amphtml-media-component,amp-accordion>section:not([expanded]) .i-amphtml-media-component *{display:none!important;visibility:hidden!important}\n/*# sourceURL=/extensions/amp-accordion/0.1/amp-accordion.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-accordion-0.1.mjs.map