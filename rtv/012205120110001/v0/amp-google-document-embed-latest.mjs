;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-google-document-embed",ev:"0.1",l:!0,f:function(e,t){(()=>{var{isArray:t}=Array,{hasOwnProperty:n,toString:r}=Object.prototype;function o(e,n,r,o){const i=t(u=e)?u:[u];var u;for(const e of i){const t=n.getAttribute(e);null!==t?r.setAttribute(e,t):o&&r.removeAttribute(e)}}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var i=self.__AMP_LOG;function u(e){return function(e,t){throw new Error("failed to call initLogConstructor")}()}function l(e,t,n,r,o,i,u,l,s,c,d){return e}new Set(["c","v","a","ad"]);var s=["title"],c=/^https?:\/\/docs\.google\.com.+\/pub.*\??/,d=class extends e.BaseElement{constructor(e){super(e),this.eb=null}preconnectCallback(e){var t,n,r;(t=this.win,n=t,r="preconnect",function(e,t){l(function(e,t){const n=e.__AMP_SERVICES&&e.__AMP_SERVICES[t];return!(!n||!n.ctor)}(e,t));const n=function(e){let t=e.__AMP_SERVICES;return t||(t=e.__AMP_SERVICES={}),t}(e)[t];return n.obj||(l(n.ctor),l(n.context),n.obj=new n.ctor(n.context),l(n.obj),n.context=null,n.resolve&&n.resolve(n.obj)),n.obj}(n=function(e){return e.__AMP_TOP||(e.__AMP_TOP=e)}(n),r)).url(this.getAmpDoc(),"https://docs.google.com",e)}renderOutsideViewport(){return.75}isLayoutSupported(e){return function(e){return"fixed"==e||"fixed-height"==e||"responsive"==e||"fill"==e||"flex-item"==e||"fluid"==e||"intrinsic"==e}(e)}buildCallback(){var e,t;e=this.element.getAttribute("src"),t=this.element,(i.user||(i.user=u()),void i.user.win?i.userForEmbed||(i.userForEmbed=u()):i.user).assert(e,"The src attribute is required for <amp-google-document-embed> %s",t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)}layoutCallback(){const e=this.element.ownerDocument.createElement("iframe");return this.eb=e,e.setAttribute("frameborder","0"),e.setAttribute("allowfullscreen",""),o(s,this.element,e),e.src=this.$v(this.element.getAttribute("src")),e.classList.add("i-amphtml-fill-content"),this.element.appendChild(e),this.loadPromise(e)}mutatedAttributesCallback(e){const t=s.filter((t=>void 0!==e[t])),n=this.eb;o(t,this.element,n,!0);const r=e.src;r&&(n.src=this.$v(r))}$v(e){return e.match(c)?e:function(e,t,n){if(!t)return e;const r=e.split("#",2),o=r[0].split("?",2);let i=o[0]+(o[1]?`?${o[1]}&${t}`:`?${t}`);return i+=r[1]?`#${r[1]}`:"",i}("https://docs.google.com/gview?embedded=true",(t=e,`${encodeURIComponent("url")}=${encodeURIComponent(t)}`));var t}unlayoutOnPause(){return!0}unlayoutCallback(){var e,t;return this.eb&&(null===(t=(e=this.eb).parentElement)||void 0===t||t.removeChild(e),this.eb=null),!0}};e.registerElement("amp-google-document-embed",d)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-google-document-embed-0.1.mjs.map