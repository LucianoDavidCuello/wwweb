;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-app-banner",ev:"0.1",l:!0,f:function(t,n){(()=>{var n;function i(){return n||(n=Promise.resolve(void 0))}var{hasOwnProperty:s,toString:e}=Object.prototype;function o(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:i,stack:s}=t,e=new Error(i);for(const n in t)e[n]=t[n];return e.stack=s,e}function r(t){let n=null,i="";for(const t of arguments)t instanceof Error&&!n?n=o(t):(i&&(i+=" "),i+=t);return n?i&&(n.message=i+": "+n.message):n=new Error(i),n}function a(t){var n,i;null===(n=(i=self).__AMP_REPORT_ERROR)||void 0===n||n.call(i,t)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var u=self.__AMP_LOG;function h(t,n){throw new Error("failed to call initLogConstructor")}function l(t){return u.user||(u.user=p()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(u.user.win,t)?u.userForEmbed||(u.userForEmbed=p()):u.user}function p(t){return h()}function c(){return u.dev||(u.dev=h())}function d(t,n,i,s,e,o,r,a,u,h,l){return t}function f(t,n,i,s,e,o,r,a,u,h,p){return l().assert(t,n,i,s,e,o,r,a,u,h,p)}function m(t,n){return x(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),n)}function b(t,n){return x(_(g(t)),n)}function g(t){return t.nodeType?(i=t,n=(i.ownerDocument||i).defaultView,m(n,"ampdoc")).getAmpDoc(t):t;var n,i}function _(t){const n=g(t);return n.isSingleDoc()?n.win:n}function x(t,n){d(w(t,n));const i=v(t)[n];return i.obj||(d(i.ctor),d(i.context),i.obj=new i.ctor(i.context),d(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function v(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}function w(t,n){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var P=t=>m(t,"platform"),k=t=>m(t,"preconnect"),A=t=>function(t,n){return function(t,n){const i=function(t,n){const i=v(t)[n];return i?i.promise?i.promise:(x(t,n),i.promise=Promise.resolve(i.obj)):null}(t,n);if(i)return i;const s=v(t);return s[n]=function(){const t=new class{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}},{promise:n,reject:i,resolve:s}=t;return n.catch((()=>{})),{obj:null,promise:n,resolve:s,reject:i,context:null,ctor:null}}(),s[n].promise}(_(t),n)}(t,"storage"),T=t=>x(t,"timer"),E=t=>function(t,n){const i=_(g(t));return w(i,"url")?x(i,"url"):null}(t),I=t=>b(t,"viewer");function M(t,n,i,s){let e;try{e=t.open(n,i,s)}catch(t){c().error("DOM","Failed to open url on target: ",i,t)}var o,r;return!e&&"_top"!=i&&("number"!=typeof r&&(r=0),r+"noopener".length>(o=s||"").length||-1===o.indexOf("noopener",r))&&(e=t.open(n,"_top")),e}var C="amp-app-banner",y=1500,V=class extends t.BaseElement{constructor(t){super(t),this.tK=null,this.nK=!1}openButtonClicked(t,n){}iK(t,n,i){t.addEventListener("click",(()=>{this.openButtonClicked(n,i)}))}sK(){const t=this.win.document.createElement("i-amphtml-app-banner-top-padding");this.element.appendChild(t);const n=this.win.document.createElement("button");n.classList.add("amp-app-banner-dismiss-button"),n.setAttribute("aria-label",this.element.getAttribute("data-dismiss-button-aria-label")||"Dismiss");const i=this.eK.bind(this);n.addEventListener("click",i),this.element.appendChild(n)}eK(){this.getVsync().run({measure:void 0,mutate:F},{element:this.element,viewport:this.getViewport(),storagePromise:A(this.getAmpDoc()),storageKey:this.oK()})}oK(){return"amp-app-banner:"+f(this.element.id,"amp-app-banner should have an id.")}isDismissed(){return A(this.getAmpDoc()).then((t=>t.get(this.oK()))).then((t=>!!t),(t=>(c().error(C,"Failed to read storage",t),!1)))}rK(){this.isDismissed().then((t=>{t?this.aK():(this.sK(),this.uK(),this.expand())}))}aK(){return this.getVsync().runPromise({measure:void 0,mutate:z},{element:this.element,viewport:this.getViewport()})}uK(){this.getVsync().run({measure:D,mutate:O},{element:this.element,viewport:this.getViewport()})}},R=class extends V{constructor(t){super(t),this.Fe=null,this.hK=null}preconnectCallback(t){this.element.parentNode&&k(this.win).url(this.getAmpDoc(),"https://itunes.apple.com",t)}buildCallback(){this.Fe=I(this.getAmpDoc());const t=P(this.win);this.nK=!this.Fe.isEmbedded()&&t.isSafari(),this.nK?this.aK():!this.Fe.isEmbedded()||this.Fe.hasCapability("navigateTo")?(this.hK=this.getAmpDoc().getMetaByName("apple-itunes-app"),null!==this.hK?(this.tK=f(this.element.querySelector("button[open-button]"),"<button open-button> is required inside %s: %s",C,this.element),this.lK(this.hK),this.rK()):this.aK()):this.aK()}layoutCallback(){return this.hK?(this.nK,i()):i()}openButtonClicked(t,n){this.Fe.isEmbedded()?(T(this.win).delay((()=>{this.Fe.sendMessage("navigateTo",{"url":n})}),y),this.Fe.sendMessage("navigateTo",{"url":t})):(T(this.win).delay((()=>{M(this.win,n,"_top")}),y),M(this.win,t,"_top"))}lK(t){const n=this.parseKeyValues(t),i=n["app-id"],s=n["app-argument"];s?f(E(this.element).isProtocolValid(s),"The url in app-argument has invalid protocol: %s",s):l().error(C,'<meta name="apple-itunes-app">\'s content should contain app-argument to allow opening an already installed application on iOS.');const e=`https://itunes.apple.com/us/app/id${i}`,o=s||e;this.iK(this.tK,o,e)}parseKeyValues(t){return t.replace(/\s/,"").split(",").reduce(((t,n)=>{const[i,s]=n.split("=");return t[i]=s,t}),{})}},B=class extends V{constructor(t){super(t),this.pK=null,this.cK="",this.dK=!1}preconnectCallback(t){this.element.parentNode&&(k(this.win).url(this.getAmpDoc(),"https://play.google.com",t),this.cK&&k(this.win).preload(this.getAmpDoc(),this.cK))}buildCallback(){const{element:t,win:n}=this,i=I(this.getAmpDoc());this.pK=n.document.head.querySelector("link[rel=manifest],link[rel=origin-manifest]");const s=P(n),e=E(t),o=s.isAndroid()&&s.isChrome(),r=e.isProxyOrigin(n.location);this.nK=!r&&!i.isEmbedded()&&o,this.nK?this.aK():(this.dK=s.isAndroid()&&!this.pK,this.dK?this.aK():(this.cK=this.pK.getAttribute("href"),e.assertHttpsUrl(this.cK,t,"manifest href"),this.tK=f(t.querySelector("button[open-button]"),"<button open-button> is required inside %s: %s",C,t),this.rK()))}layoutCallback(){return this.dK||this.nK?i():(t=this.win,m(t,"xhr")).fetchJson(this.cK,{}).then((t=>t.json())).then((t=>this.fK(t))).catch((t=>{this.aK(),function(t){const n=r.apply(null,arguments);setTimeout((()=>{throw a(n),n}))}(t)}));var t}openButtonClicked(t,n){T(this.win).delay((()=>{this.mK(n)}),y),M(this.win,t,"_top")}mK(t){this.win.top.location.assign(t)}fK(t){const n=t.related_applications;if(!n)return;const i=n.find((t=>"play"===t.platform));if(i){const t=`https://play.google.com/store/apps/details?id=${i.id}`,n=this.bK(i.id);this.iK(this.tK,n,t)}}bK(t){const{element:n}=this,{canonicalUrl:i}=b(n,"documentInfo").get(),s=E(n).parse(i),e=s.protocol.replace(":",""),{host:o,pathname:r}=s;return`android-app://${t}/${e}/${o}${r}`}};function F(t){z(t),t.storagePromise.then((n=>{n.set(t.storageKey,!0)}))}function z(t){var n,i;t.viewport.removeFromFixedLayer(t.element),null===(i=(n=t.element).parentElement)||void 0===i||i.removeChild(n),t.viewport.updatePaddingBottom(0)}function D(t){t.bannerHeight=t.viewport.getLayoutRect(t.element).height}function O(t){t.viewport.updatePaddingBottom(t.bannerHeight),t.viewport.addToFixedLayer(t.element)}t.registerElement(C,class extends V{constructor(t){super(t)}upgradeCallback(){const t=P(this.win);return t.isIos()?new R(this.element):t.isAndroid()?new B(this.element):null}layoutCallback(){return this.aK()}},'amp-app-banner{position:fixed!important;bottom:0!important;left:0;width:100%;max-height:100px!important;box-sizing:border-box;background:#fff;z-index:13;box-shadow:0 0 5px 0 rgba(0,0,0,0.2)!important}i-amphtml-app-banner-top-padding{position:absolute;top:0;left:0;right:0;background:#fff;height:4px;z-index:15}.amp-app-banner-dismiss-button{position:absolute;width:28px;height:28px;top:-28px;right:0;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg width="13" height="13" viewBox="341 8 13 13" xmlns="http://www.w3.org/2000/svg"><path fill="%234F4F4F" d="M354 9.31 352.69 8l-5.19 5.19L342.31 8 341 9.31l5.19 5.19-5.19 5.19 1.31 1.31 5.19-5.19 5.19 5.19 1.31-1.31-5.19-5.19z" fill-rule="evenodd"/></svg>\');background-size:13px 13px;background-position:9px;background-color:#fff;background-repeat:no-repeat;z-index:14;box-shadow:0 -1px 1px 0 rgba(0,0,0,0.2);border:none;border-radius:12px 0 0 0}.amp-app-banner-dismiss-button:before{position:absolute;content:"";top:-20px;right:0;left:-20px;bottom:0}[dir=rtl] .amp-app-banner-dismiss-button{right:auto;left:0;border-top-left-radius:0;border-top-right-radius:12px;background-position:6px}[dir=rtl] .amp-app-banner-dismiss-button:before{right:-20px;left:0}\n/*# sourceURL=/extensions/amp-app-banner/0.1/amp-app-banner.css*/')})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-app-banner-0.1.mjs.map