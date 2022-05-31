;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-access-scroll",ev:"0.1",l:!0,f:function(t,s){(()=>{var{hasOwnProperty:s,toString:n}=Object.prototype;function i(t){const s=Object.create(null);return t&&Object.assign(s,t),s}function e(t,n){return s.call(t,n)}function r(t,s,n){return function(t,s){for(const n in s)t.setAttribute(n,s[n]);return t}(t.createElement(s),n)}var o=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function c(t,s=""){try{return decodeURIComponent(t)}catch(t){return s}}function l(t){const s=Object.getOwnPropertyDescriptor(t,"message");if(null!=s&&s.writable)return t;const{message:n,stack:i}=t,e=new Error(n);for(const s in t)e[s]=t[s];return e.stack=i,e}function u(t){let s=null,n="";for(const t of arguments)t instanceof Error&&!s?s=l(t):(n&&(n+=" "),n+=t);return s?n&&(s.message=n+": "+s.message):s=new Error(n),s}function a(t,...s){const n=u.apply(null,s);n.name=t||n.name,function(t){var s,n;null===(s=(n=self).__AMP_REPORT_ERROR)||void 0===s||s.call(n,t)}(n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var h=self.__AMP_LOG;function p(t){return function(t,s){throw new Error("failed to call initLogConstructor")}()}function f(t,s,n,i,e,r,o,c,l,u,a){return t}function d(t,s,n,i,e,r,o,c,l,u,a){return(h.user||(h.user=p()),void h.user.win?h.userForEmbed||(h.userForEmbed=p()):h.user).assert(t,s,n,i,e,r,o,c,l,u,a)}function m(t,s){return v(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),s)}function A(t,s){return v(R(_(t)),s)}function g(t,s){return b(R(t),s)}function _(t){return t.nodeType?(n=t,s=(n.ownerDocument||n).defaultView,m(s,"ampdoc")).getAmpDoc(t):t;var s,n}function R(t){const s=_(t);return s.isSingleDoc()?s.win:s}function v(t,s){f(function(t,s){const n=t.__AMP_SERVICES&&t.__AMP_SERVICES[s];return!(!n||!n.ctor)}(t,s));const n=E(t)[s];return n.obj||(f(n.ctor),f(n.context),n.obj=new n.ctor(n.context),f(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}function b(t,s){const n=E(t)[s];return n?n.promise?n.promise:(v(t,s),n.promise=Promise.resolve(n.obj)):null}function E(t){let s=t.__AMP_SERVICES;return s||(s=t.__AMP_SERVICES={}),s}function w(t,s,n,i){return function(t,s,n,i){const e=g(t,s);if(e)return e;const r=_(t);return r.whenExtensionsKnown().then((()=>{const t=r.getExtensionVersion(n);return t?m(r.win,"extensions").waitForExtension(n,t):null})).then((n=>n?i?g(t,s):function(t,s){return function(t,s){const n=b(t,s);if(n)return n;const i=E(t);return i[s]=function(){const t=new class{constructor(){this.promise=new Promise(((t,s)=>{this.resolve=t,this.reject=s}))}},{promise:s,reject:n,resolve:i}=t;return s.catch((()=>{})),{obj:null,promise:s,resolve:i,reject:n,context:null,ctor:null}}(),i[s].promise}(R(t),s)}(t,s):null))}(t,s,n,i).then((t=>function(t,s,n){return d(t,"Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.",s,n,n,n)}(t,s,n)))}var I,x=t=>A(t,"viewport"),P=t=>m(t,"xhr"),T=["Webkit","webkit","Moz","moz","ms","O","o"];function C(t,s,n,e,r){const o=function(t,s,n){if(s.startsWith("--"))return s;I||(I=i());let e=I[s];if(!e||n){if(e=s,void 0===t[s]){const n=function(t){return t.charAt(0).toUpperCase()+t.slice(1)}(s),i=function(t,s){for(let n=0;n<T.length;n++){const i=T[n]+s;if(void 0!==t[i])return i}return""}(t,n);void 0!==t[i]&&(e=i)}n||(I[s]=e)}return e}(t.style,s,r);if(!o)return;const c=e?n+e:n;t.style.setProperty(function(t){const s=t.replace(/[A-Z]/g,(t=>"-"+t.toLowerCase()));return T.some((t=>s.startsWith(t+"-")))?`-${s}`:s}(o),c)}var U=class{constructor(t){this.tp=t,this.rut=null,this.pu=null,this.out=null,this.ws={"width":null,"left":null,"right":null},this.window=new Promise((t=>{this.rut=t}))}el(t,s,n){const i=r(this.tp.win.document,t,s);return Array.isArray(n)&&n.forEach((t=>i.appendChild(t))),i}mount(){const t=f(this.pu);this.tp.getBody().appendChild(t),x(this.tp).addToFixedLayer(t)}mutate(t){var s;(s=this.tp.win,m(s,"vsync")).mutate(t)}toggleClass(t,s){const n=f(this.pu).classList;s?n.add(t):n.remove(t)}toggleChecked(t){f(this.pu).checked=!!t}updateHorizontalLayout(t){let s=!1;return Object.keys(this.ws).forEach((n=>{if(!e(t,n))return;const i=this.cssSize(t[n]);this.ws[n]!==i&&(this.ws[n]=i,s=!0)})),s}renderHorizontalLayout(){var t;!function(t,s){for(const n in s)C(t,n,s[n])}(f(this.pu),(t=this.ws,"display"in t&&a("STYLE","`display` style detected. You must use toggle instead."),t))}cssSize(t){return"number"==typeof t?`${t}px`:t}};function L(t,s){return t.buildUrl(`${s}?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&p=1.2&x=QUERY_PARAM(scrollx)`,!1)}var y,k=class extends U{constructor(t,s){super(t),this.kR=s,this.mo()}mo(){this.mutate((()=>{this.out||(this.cut(),this.rut(this.out.contentWindow)),this.renderHorizontalLayout()}))}cut(){this.out=this.el("iframe",{"scrolling":"no","frameborder":"0","allowtransparency":"true","title":"Twitter Blue bar","width":"100%","height":"100%","sandbox":"allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"}),this.pu=this.el("div",{"class":"amp-access-scroll-bar"},[this.out]),this.mount(),L(this.kR,(this.kR.getAdapterConfig(),"https://connect.scroll.com/html/amp/scrolltab")).then((t=>{this.out.setAttribute("src",t)}))}update(t){this.updateHorizontalLayout(t)&&this.mo()}},D=class{constructor(t){this.lut=[],this.Wf=[],this.h=t,this.ct=this.ct.bind(this),function(t,s,n,i){let e=t,r=n;const o=function(){if(void 0!==y)return y;y=!1;try{const t={get capture(){return y=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return y}();e.addEventListener("message",(t=>{try{return r(t)}catch(t){var s,n;throw null===(s=(n=self).__AMP_REPORT_ERROR)||void 0===s||s.call(n,t),t}}),!!o&&i)}(window,0,this.ct,void 0)}ct(t){const s=t.data,n=t.origin===this.h,i="object"==typeof s&&"_scramp"in s,e=this.lut.indexOf(t.source)>-1;n&&e&&i&&(this.Wf.forEach((t=>t(s))),this.lut.filter((s=>s!==t.source)).forEach((t=>{t.postMessage(s,this.h)})))}register(t,s){s&&this.Wf.push(s),Promise.resolve(t).then((t=>{-1===this.lut.indexOf(t)&&this.lut.push(t)}))}},M=class extends U{constructor(t){super(t),this.uut="Scroll Feature",this.Ai={url:"",open:!1,title:this.uut}}update(t){let s=!1;switch(t._scramp){case"au":s=this.updateHorizontalLayout(t),["open","url","title"].forEach((n=>{e(t,n)&&t[n]!==this.Ai[n]&&(this.Ai[n]=t[n],s=!0)}));break;case"st":["revealed"].forEach((n=>{e(t,n)&&t[n]!==this.Ai[n]&&(this.Ai[n]=t[n],s=!0)}))}s&&this.mo(this.Ai)}mo(t){this.mutate((()=>{var s,n;this.out||(this.cut(),this.rut(this.out.contentWindow)),this.out.src!==t.url&&this.out.setAttribute("src",t.url),this.renderHorizontalLayout(),this.out.setAttribute("title",t.title),s=this.out,void 0===(n=t.open)&&(n=s.hasAttribute("hidden")),n?s.removeAttribute("hidden"):s.setAttribute("hidden","")}))}cut(){this.out=this.el("iframe",{"class":"amp-access-scroll-sheet","scrolling":"no","frameborder":"0","allowtransparency":"true","title":this.uut,"sandbox":"allow-scripts allow-same-origin allow-top-navigation allow-popups allow-popups-to-escape-sandbox"}),this.pu=this.out,this.mount()}};function O(t,s,n){if(s[n])return s[n];const i=t.querySelector(`style[${n}], link[${n}]`);return i?(s[n]=i,i):null}function N(t,s){const n=t.styleSheets;for(let t=0;t<n.length;t++)if(n[t].ownerNode==s)return!0;return!1}var z,S=(()=>self.AMP.config.urls)(),$=(new Set(["c","v","a","ad"]),t=>"string"==typeof t?function(t,s){return z||(z=self.document.createElement("a")),function(t,s,n){return t.href="",new URL(s,t.href)}(z,t)}(t):t);function V(t,s,n="source"){var i;return d(null!=t,"%s %s must be available",s,n),d("https:"==(i=$(i=t)).protocol||"localhost"==i.hostname||"127.0.0.1"==i.hostname||function(t,s){const n=t.length-s.length;return n>=0&&t.indexOf(s,n)==n}(i.hostname,".localhost")||/^\/\//.test(t),'%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s',s,n,t),t}var j=class{static shouldCheck(t){return!function(t){const s=i();if(!t)return s;let n;for(;n=o.exec(t);){const t=c(n[1],n[1]),i=n[2]?c(n[2].replace(/\+/g," "),n[2]):"";s[t]=i}return s}(t.win.location.search).scrollnoblockerrefresh}constructor(t,s,n){this.Ni=t,this.kR=s,this.aut=n}check(){P(this.Ni.win).fetchJson("https://block.scroll.com/check.json").then((t=>t.json().then((t=>!0===t.dns))),(t=>this.hut(t.message))).then((t=>{!0===t&&this.fut()}))}fut(){if(this.aut&&(t=this.Ni.win.location,!S.cdnProxyRegex.test($(t).origin)))L(this.kR,"https://scroll.com/loginwithapp").then((t=>{var s;(s=this.Ni,A(s,"navigation")).navigateTo(this.Ni.win,function(t,s,n,i){return function(t,s,n){if(!s)return t;const i=t.split("#",2),e=i[0].split("?",2);let r=e[0]+(e[1]?`?${e[1]}&${s}`:`?${s}`);return r+=i[1]?`#${i[1]}`:"",r}(t,`${encodeURIComponent("feature")}=${encodeURIComponent("r")}`)}(t))}));else{const t=(this.kR.getAdapterConfig(),"https://connect.scroll.com"),s=new k(this.Ni,this.kR);new D(t).register(s.window,(t=>{"st"===t._scramp&&s.update(t)}))}var t}hut(t){return 0===t.indexOf("XHR Failed fetching (https://block.scroll.com/...): Resource blocked by content blocker")}};t.registerServiceForDoc("scroll",(function(t){return(s=t.getHeadNode(),w(s,"access","amp-access")).then((s=>{const n=s.getVendorSource("scroll"),e=new class extends class{constructor(t,s,n){this.ampdoc=t,this.nf=n,this.dut=d(s.authorization,'"authorization" URL must be specified'),V(this.dut,'"authorization"'),this.mut=!s.noPingback,this.Aut=s.pingback,this.mut&&(d(this.Aut,'"pingback" URL must be specified'),V(this.Aut,'"pingback"')),this.gut=this._ut(s),this.NR=P(t.win),this.Ie=v(t.win,"timer")}_ut(t){if(!t.authorizationTimeout)return 3e3;let s=t.authorizationTimeout;return d("number"==typeof s,'"authorizationTimeout" must be a number'),s=Math.min(s,3e3),s}getConfig(){return{"authorizationUrl":this.dut,"pingbackEnabled":this.mut,"pingbackUrl":this.Aut,"authorizationTimeout":this.gut}}getAuthorizationUrl(){return this.dut}isAuthorizationEnabled(){return!0}getAuthorizationTimeout(){return this.gut}authorize(){return this.nf.buildUrl(this.dut,!1).then((t=>this.Ie.timeoutPromise(this.gut,this.NR.fetchJson(t,{credentials:"include"})).then((t=>t.json()))))}isPingbackEnabled(){return this.mut}pingback(){return this.nf.buildUrl(f(this.Aut),!0).then((t=>this.NR.sendSignal(t,{method:"POST",credentials:"include",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:""})))}postAction(){}}{constructor(t,s){s.getAdapterConfig();const n="https://connect.scroll.com";super(t,(t=>({"authorization":`${t}/amp/access?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&x=QUERY_PARAM(scrollx)&p=1.2`,"pingback":`${t}/amp/pingback?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll)&v=AUTHDATA(visitId)&p=1.2`,"namespace":"scroll"}))(n),{buildUrl:s.buildUrl.bind(s),collectUrlVars:s.collectUrlVars.bind(s)}),function(t,s,n,e,r){const o=t.getHeadNode(),c=function(t,s,n,e){let r=t.__AMP_CSS_SM;r||(r=t.__AMP_CSS_SM=i());const o=`amp-extension=${e}`;if(o){const n=O(t,r,o);if(n)return"STYLE"==n.tagName&&n.textContent!==s&&(n.textContent=s),n}const c=(t.ownerDocument||t).createElement("style");c.textContent=s;let l=null;return c.setAttribute("amp-extension",e),l=O(t,r,"amp-runtime"),function(t,s,n=null){if(!n)return void function(t,s){t.insertBefore(s,t.firstChild)}(t,s);const i=n.nextSibling;t.insertBefore(s,i)}(t,c,l),o&&(r[o]=c),c}(o,function(t,s){const n=t.__AMP_CSS_TR;return n?n(s):s}(o,".amp-access-scroll-bar{bottom:0;height:60px;left:auto;right:0px;width:48px;margin:0;padding:0}.amp-access-scroll-bar,.amp-access-scroll-sheet{position:fixed;background:transparent;z-index:2147483647}@media (max-width:599px){.amp-access-scroll-sheet{bottom:60px;height:100px;left:0!important;right:0!important;width:100%!important}}@media (min-width:600px){.amp-access-scroll-sheet{bottom:76px;height:56px;left:auto;right:16px;width:475px}}\n/*# sourceURL=/extensions/amp-access-scroll/0.1/amp-access-scroll.css*/"),0,"amp-access-scroll-elt");if(n){const s=t.getRootNode();if(N(s,c))return c;const n=setInterval((()=>{N(s,c)&&clearInterval(n)}),4)}}(t,0,(()=>{})),this.kR=s,this.zv=n}authorize(){return super.authorize().then((t=>{const s=this.ampdoc.getRootNode().querySelector("amp-story[standalone]");if(t&&t.scroll){if(!s){const s=new k(this.ampdoc,this.kR),n=new M(this.ampdoc),i=new D(this.zv);i.register(n.window,(t=>{"au"!==t._scramp&&"st"!==t._scramp||n.update(t)})),i.register(s.window,(t=>{"st"===t._scramp&&(n.update(t),s.update(t))}));const e=this.kR.getAdapterConfig();!function(t,s){if(s.disableAnalytics)return;const n=t.win.document,i={"trigger":"immediate"};s.dataConsentId&&(i["data-block-on-consent"]="");const e=r(n,"amp-analytics",i),o=r(n,"script",{"type":"application/json"}),c={"requests":{"scroll":"https://connect.scroll.com/amp/analytics?rid=ACCESS_READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&r=DOCUMENT_REFERRER&x=QUERY_PARAM(scrollx)&d=AUTHDATA(scroll.scroll)&v=AUTHDATA(scroll.visitId)&h=SOURCE_HOSTNAME&s=${totalEngagedTime}&p=1.2"},"triggers":{"trackInterval":{"on":"timer","timerSpec":{"interval":15,"maxTimerLength":7200},"request":"scroll"}}};var l;o.textContent=JSON.stringify(c),e.appendChild(o),e.CONFIG=c,(l=t.win,m(l,"extensions")).installExtensionForDoc(t,"amp-analytics"),t.getBody().appendChild(e)}(this.ampdoc,e),t.features&&t.features.d&&new class{constructor(t,s,n){this.Ni=t,this.Rut=null,this.kR=s,this.vut=n;const i=function(t,s,n){let i=0,e=0,r=null;function o(){i=0;const n=1e3-(t.Date.now()-e);var c;n>0?i=t.setTimeout(o,n):(c=r,r=null,s.apply(null,c))}return function(...s){e=t.Date.now(),r=s,i||(i=t.setTimeout(o,1e3))}}(t.win,this.but.bind(this));this.Uu=x(t),this.Eut=[],t.whenReady().then((()=>{this.Uu.onChanged(i),this.Eut=t.getBody().getElementsByTagName("p")}))}but(){return Promise.all([].slice.call(this.Eut).map((t=>this.Uu.getClientRectAsync(t)))).then((t=>{let s=null,n=null;for(let i=t.length-1;i>=0;i--){const e=t[i].bottom;e<=0&&(null===n||n<e)&&(s=i,n=e)}null!==s&&this.wut(s)}))}wut(t){this.Rut!==t&&(this.Rut=t,this.Iut(this.Eut[t].innerText.substring(0,50)))}Iut(t){this.kR.buildUrl(`${this.vut}/amp/updatedepth?rid=READER_ID&cid=CLIENT_ID(scroll1)&c=CANONICAL_URL&o=AMPDOC_URL&rd=`+encodeURIComponent(t),!1).then((t=>{P(this.Ni.win).fetch(t)}))}}(this.ampdoc,this.kR,"https://connect.scroll.com")}}else t&&t.blocker&&j.shouldCheck(this.ampdoc)&&new j(this.ampdoc,this.kR,t.features&&t.features.r).check();return t}))}}(t,n);return n.getAdapter().registerVendor(e),e}));var s}))})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-access-scroll-0.1.mjs.map