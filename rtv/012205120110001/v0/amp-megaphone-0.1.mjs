;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-megaphone",ev:"0.1",l:!0,f:function(t,n){(()=>{var{isArray:n}=Array,{hasOwnProperty:e,toString:i}=Object.prototype;function s(t){return"[object Object]"===i.call(t)}function r(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:i}=t,s=new Error(e);for(const n in t)s[n]=t[n];return s.stack=i,s}function o(t){let n=null,e="";for(const t of arguments)t instanceof Error&&!n?n=r(t):(e&&(e+=" "),e+=t);return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function l(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}function a(t,...n){try{return t.apply(null,n)}catch(t){!function(t){const n=o.apply(null,arguments);setTimeout((()=>{throw l(n),n}))}(t)}}var u={"getPropertyPriority":()=>"","getPropertyValue":()=>""},c=/vertical/,h=new WeakMap,f=new WeakMap,d=new WeakMap;function p(t){let n=h.get(t);return n||(n=new t.ResizeObserver(m),h.set(t,n)),n}function m(t){const n=new Set;for(let e=t.length-1;e>=0;e--){const i=t[e],{target:s}=i;if(n.has(s))continue;n.add(s);const r=f.get(s);if(r){d.set(s,i);for(let t=0;t<r.length;t++){const{callback:n,type:e}=r[t];g(e,n,i)}}}}function g(t,n,e){if(0==t){const{contentRect:t}=e,{height:i,width:s}=t;a(n,{width:s,height:i})}else if(1==t){const{borderBoxSize:t}=e;let s;if(t)s=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=e,n=((i=t).ownerDocument||i).defaultView,r=c.test(function(t,n){return t.getComputedStyle(n)||u}(n,t).writingMode),{offsetHeight:o,offsetWidth:l}=t;let a,h;r?(h=l,a=o):(a=l,h=o),s={inlineSize:a,blockSize:h}}a(n,s)}var i}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var v,y=self.__AMP_LOG;function b(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function w(t,n,e,i,s,r,o,l,a,u,c){return t}new Set(["c","v","a","ad"]);var k=class extends t.BaseElement{constructor(t){super(t),this.eb=null,this.kv=null,this.Av=!1,this.zv="",this.bf=new class{constructor(t){this._f=t,this.gf=!1,this.Pf=!1,this.Af=this.Af.bind(this)}updatePlaying(t){t!==this.gf&&(this.gf=t,t?(this.Pf=!1,function(t,n){!function(t,n,e){const i=t.ownerDocument.defaultView;if(!i)return;let s=f.get(t);if(s||(s=[],f.set(t,s),p(i).observe(t)),!s.some((t=>t.callback===e&&1===t.type))){s.push({type:1,callback:e});const n=d.get(t);n&&setTimeout((()=>g(1,e,n)))}}(t,0,n)}(this._f,this.Af)):function(t,n){!function(t,n,e){const i=f.get(t);if(i&&(function(t,n){const i=[];let s=0;for(let n=0;n<t.length;n++){const o=t[n];(r=o).callback===e&&1===r.type?i.push(o):(s<n&&(t[s]=o),s++)}var r;s<t.length&&(t.length=s)}(i),0==i.length)){f.delete(t),d.delete(t);const n=t.ownerDocument.defaultView;n&&p(n).unobserve(t)}}(t,0,n)}(this._f,this.Af))}Af({blockSize:t,inlineSize:n}){const e=n>0&&t>0;if(e===this.Pf)return;this.Pf=e;const i=this._f;e||i.pause()}}(this.element)}preconnectCallback(t){const n=(i=this.win,s="preconnect",function(t,n){w(function(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}(t,n));const e=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(w(e.ctor),w(e.context),e.obj=new e.ctor(e.context),w(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}(i=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(i),s)),e=this.getAmpDoc();var i,s;n.url(e,this.zv,t),n.url(e,"https://assets.megaphone.fm",t),n.url(e,"https://megaphone.imgix.net",t)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t}(t)}buildCallback(){this.element.classList.add("i-amphtml-media-component"),this.Ev()}mutatedAttributesCallback(){this.Ev(),this.eb&&(this.eb.src=this.Mv())}layoutCallback(){const t=this.element.ownerDocument.createElement("iframe");return t.setAttribute("frameborder","no"),t.setAttribute("scrolling","no"),t.src=this.Mv(),this.kv=function(t,n,e,i){let s=t,r=e,o=t=>{try{return r(t)}catch(t){var n,e;throw null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t),t}};const l=function(){if(void 0!==v)return v;v=!1;try{const t={get capture(){return v=!0,!1}};self.addEventListener("test-options",null,t),self.removeEventListener("test-options",null,t)}catch(t){}return v}();return s.addEventListener(n,o,!!l&&i),()=>{null==s||s.removeEventListener(n,o,!!l&&i),r=null,s=null,o=null}}(this.win,"message",this.Rv.bind(this),void 0),t.classList.add("i-amphtml-fill-content"),this.element.appendChild(t),this.eb=t,this.bf.updatePlaying(!0),this.loadPromise(t)}unlayoutCallback(){var t,n;return this.eb&&(null===(n=(t=this.eb).parentElement)||void 0===n||n.removeChild(t),this.eb=null),this.kv&&this.kv(),this.bf.updatePlaying(!1),!0}Mv(){this.Ev();const t=(a=this.element.getAttribute("data-playlist")||this.element.getAttribute("data-episode"),"data-playlist or data-episode is required for <amp-megaphone> %s",u=this.element,(y.user||(y.user=b()),void y.user.win?y.userForEmbed||(y.userForEmbed=b()):y.user).assert(a,"data-playlist or data-episode is required for <amp-megaphone> %s",u,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),e=this.element.hasAttribute("data-light"),i=this.element.hasAttribute("data-sharing"),s=this.element.getAttribute("data-episodes"),r=this.element.getAttribute("data-start"),o=this.element.hasAttribute("data-tile"),l={"p":this.Av?t:void 0,"light":e||void 0,"sharing":i||void 0,"episodes":this.Av&&s||void 0,"start":!this.Av&&r||void 0,"tile":!this.Av&&o||void 0};var a,u;return function(t,n,e){if(!n)return t;const i=t.split("#",2),s=i[0].split("?",2);let r=s[0]+(s[1]?`?${s[1]}&${n}`:`?${n}`);return r+=i[1]?`#${i[1]}`:"",r}(this.zv+"/"+(this.Av?"":t+"/"),function(t){const e=[];for(const o in t){let l=t[o];if(null!=l){l=n(r=l)?r:[r];for(let t=0;t<l.length;t++)e.push((i=o,s=l[t],`${encodeURIComponent(i)}=${encodeURIComponent(s)}`))}}var i,s,r;return e.join("&")}(l))}Ev(){this.Av=this.element.hasAttribute("data-playlist"),this.zv=`https://${this.Av?"playlist":"player"}.megaphone.fm`}Rv(t){if(t.origin!=this.zv||t.source!=this.eb.contentWindow)return;const n=function(t){return t.data}(t);if(!n||!s(n)&&!n.startsWith("{"))return;const e=s(n)?n:function(t,n){try{return function(t){return JSON.parse(t)}(t)}catch(t){return null}}(n);if("iframe.resize"==e.context){const t=e.height;this.attemptChangeHeight(t).catch((()=>{}))}}pauseCallback(){this.eb&&this.eb.contentWindow&&(this.eb.contentWindow.postMessage(JSON.stringify({"method":"pause"}),this.zv),this.eb.src=this.eb.src)}};t.registerElement("amp-megaphone",k)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-megaphone-0.1.mjs.map