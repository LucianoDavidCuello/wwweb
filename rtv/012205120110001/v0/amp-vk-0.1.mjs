;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-vk",ev:"0.1",l:!0,f:function(t,i){(()=>{var{isArray:i}=Array,{hasOwnProperty:r,toString:e}=Object.prototype;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var s=self.__AMP_LOG;function n(t){return function(t,i){throw new Error("failed to call initLogConstructor")}()}function l(t,i,r,e,s,n,l,o,a,u,h){return t}function o(t,i,r,e,l,o,a,u,h,c,d){return(s.user||(s.user=n()),void s.user.win?s.userForEmbed||(s.userForEmbed=n()):s.user).assert(t,i,r,e,l,o,a,u,h,c,d)}function a(t,i){return h(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),i)}function u(t){return t.nodeType?(r=t,i=(r.ownerDocument||r).defaultView,a(i,"ampdoc")).getAmpDoc(t):t;var i,r}function h(t,i){l(function(t,i){const r=t.__AMP_SERVICES&&t.__AMP_SERVICES[i];return!(!r||!r.ctor)}(t,i));const r=function(t){let i=t.__AMP_SERVICES;return i||(i=t.__AMP_SERVICES={}),i}(t)[i];return r.obj||(l(r.ctor),l(r.context),r.obj=new r.ctor(r.context),l(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}var c,d=t=>function(t,i){return h(function(t){const i=u(t);return i.isSingleDoc()?i.win:i}(u(t)),i)}(t,"viewer");function p(t,i,r){if(!i)return t;const e=t.split("#",2),s=e[0].split("?",2);let n=s[0]+(s[1]?r?`?${i}&${s[1]}`:`?${s[1]}&${i}`:`?${i}`);return n+=e[1]?`#${e[1]}`:"",n}function f(t,r){return p(t,function(t){const r=[];for(const l in t){let o=t[l];if(null!=o){o=i(n=o)?n:[n];for(let t=0;t<o.length;t++)r.push((e=l,s=o[t],`${encodeURIComponent(e)}=${encodeURIComponent(s)}`))}}var e,s,n;return r.join("&")}(r))}new Set(["c","v","a","ad"]);var v="post",m="poll",_=class extends t.BaseElement{constructor(t){super(t),this.eb=null,this.tk=0,this.kv=null,this.qg=null,this.ik=null,this.rk=null,this.ek=null,this.sk=null,this.nk=null}preconnectCallback(t){var i;(i=this.win,a(i,"preconnect")).url(this.getAmpDoc(),"https://vk.com",t)}lk(){const t=Date.now().toString(16);let i;return this.qg===v?i=this.ak():this.qg===m&&(i=this.uk()),i.then((i=>p(i,t)))}ak(){return d(this.element).getReferrerUrl().then((t=>{const i=this.element.offsetWidth,r=this.getAmpDoc().getUrl();return f("https://vk.com/widget_post.php",{"app":"0","width":"100%","_ver":"1","owner_id":this.ik,"post_id":this.rk,"hash":this.ek,"amp":"1","startWidth":i,"url":r,"referrer":t,"title":"AMP Post"})}))}uk(){return d(this.element).getReferrerUrl().then((t=>{const i=this.getAmpDoc().getUrl();return f("https://vk.com/al_widget_poll.php",{"app":this.sk,"width":"100%","_ver":"1","poll_id":this.nk,"amp":"1","url":i,"title":"AMP Poll","description":"","referrer":t})}))}buildCallback(){var t;this.qg=o(this.element.getAttribute("data-embedtype"),"The data-embedtype attribute is required for <amp-vk> %s",this.element),o("post"===(t=this.qg)||"poll"===t,`Unknown data-embedtype: ${this.qg}`),this.qg===v?this.hk():this.qg===m&&this.ck()}hk(){this.ik=o(this.element.getAttribute("data-owner-id"),"The data-owner-id attribute is required for <amp-vk> Post %s",this.element),this.rk=o(this.element.getAttribute("data-post-id"),"The data-post-id attribute is required for <amp-vk> Post %s",this.element),this.ek=o(this.element.getAttribute("data-hash"),"The data-hash attribute is required for <amp-vk> Post %s",this.element)}ck(){this.sk=o(this.element.getAttribute("data-api-id"),"The data-api-id attribute is required for <amp-vk> Poll %s",this.element),this.nk=o(this.element.getAttribute("data-poll-id"),"The data-poll-id attribute is required for <amp-vk> Poll %s",this.element)}layoutCallback(){const t=this.element.ownerDocument.createElement("iframe");return this.eb=t,this.kv=function(t,i,r,e){let s=t,n=r,l=t=>{try{return n(t)}catch(t){var i,r;throw null===(i=(r=self).__AMP_REPORT_ERROR)||void 0===i||i.call(r,t),t}};const o=function(){if(void 0!==c)return c;c=!1;try{const t={get capture(){return c=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return c}();return s.addEventListener(i,l,!!o&&e),()=>{null==s||s.removeEventListener(i,l,!!o&&e),n=null,s=null,l=null}}(this.win,"message",this.dk.bind(this),void 0),this.lk().then((i=>(t.src=i,t.setAttribute("name","fXD"),t.setAttribute("scrolling","no"),t.setAttribute("frameborder","0"),t.setAttribute("allowfullscreen","true"),t.classList.add("i-amphtml-fill-content"),this.element.appendChild(t),this.loadPromise(t))))}dk(t){if("https://vk.com"!==t.origin||t.source!==this.eb.contentWindow)return;const i=t.data;if(i){const t=/\[\"resize",\[(\d+)\]]/.exec(i);if(t&&t[1]){const i=parseInt(t[1],10);this.tk!==i&&(this.tk=i,this.forceChangeHeight(i))}}}isLayoutSupported(t){return"responsive"===t||"flex-item"===t||"fixed"===t}unlayoutOnPause(){return!0}unlayoutCallback(){var t,i;return this.eb&&(null===(i=(t=this.eb).parentElement)||void 0===i||i.removeChild(t),this.eb=null),this.kv&&this.kv(),!0}};t.registerElement("amp-vk",_)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-vk-0.1.mjs.map