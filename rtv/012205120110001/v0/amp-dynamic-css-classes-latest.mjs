;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-dynamic-css-classes",ev:"0.1",l:!0,f:function(n,t){(()=>{var t,{hasOwnProperty:r,toString:e}=Object.prototype;function c(n,t,r,e,c,u,o,s,i,f,l){return n}function u(n,t){return i(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),t)}function o(n){return n.nodeType?(r=n,t=(r.ownerDocument||r).defaultView,u(t,"ampdoc")).getAmpDoc(n):n;var t,r}function s(n){const t=o(n);return t.isSingleDoc()?t.win:t}function i(n,t){c(f(n,t));const r=function(n){let t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return r.obj||(c(r.ctor),c(r.context),r.obj=new r.ctor(r.context),c(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}function f(n,t){const r=n.__AMP_SERVICES&&n.__AMP_SERVICES[t];return!(!r||!r.ctor)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG;var l=n=>function(n,t){return i(s(o(n)),"viewer")}(n),a=n=>u(n,"vsync");function m(n){const t=n.split(".");let r="";return t.reduceRight(((n,t)=>(r&&(t+="."+r),r=t,n.push(t),n)),[])}function v(n,t){n.isBodyAvailable()?w(n.getBody(),t):n.waitForBodyOpen().then((n=>w(n,t)))}function w(n,t){const{classList:r}=n;for(let n=0;n<t.length;n++)r.add(t[n])}function d(n){!function(n){const t=function(n){const t=function(n){const t=l(n).getUnconfirmedReferrerUrl();if(!t)return"";const{hostname:r}=(e=n.getHeadNode(),function(n,t){const r=s(o(n));return f(r,"url")?i(r,"url"):null}(e)).parse(t);var e;return r}(n);return"t.co"===t?m("twitter.com"):!t&&/Pinterest/.test(n.win.navigator.userAgent)?m("www.pinterest.com"):m(t)}(n).map((n=>`amp-referrer-${n.replace(/\./g,"-")}`));a(n.win).mutate((()=>{v(n,t)}))}(n),function(n){l(n).isEmbedded()&&a(n.win).mutate((()=>{v(n,["amp-viewer"])}))}(n)}n.registerServiceForDoc("amp-dynamic-css-classes",class{constructor(n){d(n)}whenReady(){return t||(t=Promise.resolve(void 0))}})})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-dynamic-css-classes-0.1.mjs.map