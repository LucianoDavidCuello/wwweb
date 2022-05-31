;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-soundcloud",ev:"0.1",l:!0,f:function(t,n){(()=>{var{hasOwnProperty:n,toString:e}=Object.prototype;function i(t){const n=Object.getOwnPropertyDescriptor(t,"message");if(null!=n&&n.writable)return t;const{message:e,stack:i}=t,o=new Error(e);for(const n in t)o[n]=t[n];return o.stack=i,o}function o(t){let n=null,e="";for(const t of arguments)t instanceof Error&&!n?n=i(t):(e&&(e+=" "),e+=t);return n?e&&(n.message=e+": "+n.message):n=new Error(e),n}function s(t){var n,e;null===(n=(e=self).__AMP_REPORT_ERROR)||void 0===n||n.call(e,t)}function r(t,...n){try{return t.apply(null,n)}catch(t){!function(t){const n=o.apply(null,arguments);setTimeout((()=>{throw s(n),n}))}(t)}}var c={"getPropertyPriority":()=>"","getPropertyValue":()=>""},l=/vertical/,u=new WeakMap,a=new WeakMap,d=new WeakMap;function f(t){let n=u.get(t);return n||(n=new t.ResizeObserver(h),u.set(t,n)),n}function h(t){const n=new Set;for(let e=t.length-1;e>=0;e--){const i=t[e],{target:o}=i;if(n.has(o))continue;n.add(o);const s=a.get(o);if(s){d.set(o,i);for(let t=0;t<s.length;t++){const{callback:n,type:e}=s[t];p(e,n,i)}}}}function p(t,n,e){if(0==t){const{contentRect:t}=e,{height:i,width:o}=t;r(n,{width:o,height:i})}else if(1==t){const{borderBoxSize:t}=e;let o;if(t)o=t.length>0?t[0]:{inlineSize:0,blockSize:0};else{const{target:t}=e,n=((i=t).ownerDocument||i).defaultView,s=l.test(function(t,n){return t.getComputedStyle(n)||c}(n,t).writingMode),{offsetHeight:r,offsetWidth:u}=t;let a,d;s?(d=u,a=r):(a=u,d=r),o={inlineSize:a,blockSize:d}}r(n,o)}var i}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var m=self.__AMP_LOG;function k(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function v(t,n,e,i,o,s,r,c,l,u,a){return t}var b=class extends t.BaseElement{constructor(t){super(t),this.eb=null,this.bf=new class{constructor(t){this._f=t,this.gf=!1,this.Pf=!1,this.Af=this.Af.bind(this)}updatePlaying(t){t!==this.gf&&(this.gf=t,t?(this.Pf=!1,function(t,n){!function(t,n,e){const i=t.ownerDocument.defaultView;if(!i)return;let o=a.get(t);if(o||(o=[],a.set(t,o),f(i).observe(t)),!o.some((t=>t.callback===e&&1===t.type))){o.push({type:1,callback:e});const n=d.get(t);n&&setTimeout((()=>p(1,e,n)))}}(t,0,n)}(this._f,this.Af)):function(t,n){!function(t,n,e){const i=a.get(t);if(i&&(function(t,n){const i=[];let o=0;for(let n=0;n<t.length;n++){const r=t[n];(s=r).callback===e&&1===s.type?i.push(r):(o<n&&(t[o]=r),o++)}var s;o<t.length&&(t.length=o)}(i),0==i.length)){a.delete(t),d.delete(t);const n=t.ownerDocument.defaultView;n&&f(n).unobserve(t)}}(t,0,n)}(this._f,this.Af))}Af({blockSize:t,inlineSize:n}){const e=n>0&&t>0;if(e===this.Pf)return;this.Pf=e;const i=this._f;e||i.pause()}}(this.element)}preconnectCallback(t){var n,e,i;(n=this.win,e=n,i="preconnect",function(t,n){v(function(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}(t,n));const e=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(v(e.ctor),v(e.context),e.obj=new e.ctor(e.context),v(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}(e=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(e),i)).url(this.getAmpDoc(),"https://api.soundcloud.com/",t)}isLayoutSupported(t){return function(t){return"fixed"==t||"fixed-height"==t||"responsive"==t||"fill"==t||"flex-item"==t||"fluid"==t||"intrinsic"==t}(t)}buildCallback(){this.element.classList.add("i-amphtml-media-component")}layoutCallback(){const t=this.element.getAttribute("height"),n=this.element.getAttribute("data-color"),e=this.element.getAttribute("data-visual"),i="https://api.soundcloud.com/"+(this.element.hasAttribute("data-trackid")?"tracks":"playlists")+"/",o=(c=this.element.getAttribute("data-trackid")||this.element.getAttribute("data-playlistid"),"data-trackid or data-playlistid is required for <amp-soundcloud> %s",l=this.element,(m.user||(m.user=k()),void m.user.win?m.userForEmbed||(m.userForEmbed=k()):m.user).assert(c,"data-trackid or data-playlistid is required for <amp-soundcloud> %s",l,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)),s=this.element.getAttribute("data-secret-token"),r=this.element.ownerDocument.createElement("iframe");var c,l;r.setAttribute("frameborder","no"),r.setAttribute("scrolling","no");let u="https://w.soundcloud.com/player/?url="+encodeURIComponent(i+o);return s&&(u+=encodeURIComponent("?secret_token="+s)),"true"===e?u+="&visual=true":n&&(u+="&color="+encodeURIComponent(n)),r.src=u,r.classList.add("i-amphtml-fill-content"),r.height=t,this.element.appendChild(r),this.eb=r,this.bf.updatePlaying(!0),this.loadPromise(r)}unlayoutCallback(){const t=this.eb;return t&&(this.element.removeChild(t),this.eb=null),this.bf.updatePlaying(!1),!0}unlayoutCallback(){const t=this.eb;return t&&(this.element.removeChild(t),this.eb=null),!0}pauseCallback(){this.eb&&this.eb.contentWindow&&this.eb.contentWindow.postMessage(JSON.stringify({"method":"pause"}),"https://w.soundcloud.com")}};t.registerElement("amp-soundcloud",b)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-soundcloud-0.1.mjs.map