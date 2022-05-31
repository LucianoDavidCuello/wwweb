;
(self.AMP=self.AMP||[]).push({m:0,v:"2205120110001",n:"amp-imgur",ev:"0.1",l:!0,f:function(n,t){!function(){function t(n,r){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,r)}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function i(n,t){if(t&&("object"===e(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}var u=function(){var n=this;this.promise=new Promise((function(t,r){n.resolve=t,n.reject=r}))};Array.isArray;var o=Object.prototype,f=(o.hasOwnProperty,o.toString);function c(n){return"[object Object]"===f.call(n)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var l=self.__AMP_LOG;function s(n){return l.user||(l.user=a()),function(n,t){return t&&t.ownerDocument.defaultView!=n}(l.user.win,n)?l.userForEmbed||(l.userForEmbed=a()):l.user}function a(n){return function(n,t){throw new Error("failed to call initLogConstructor")}()}function h(n,t,r,e,i,u,o,f,c,l,s){return n}var d,v="amp-imgur",m=function(n){!function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(r&&r.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),r&&t(n,r)}(l,n);var e,o,f=(e=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,t=r(e);if(o){var u=r(this).constructor;n=Reflect.construct(t,arguments,u)}else n=t.apply(this,arguments);return i(this,n)});function l(n){var t;return(t=f.call(this,n)).tb=null,t.Bb=null,t.Cb=null,t}var a=l.prototype;return a.isLayoutSupported=function(n){return function(n){return"fixed"==n||"fixed-height"==n||"responsive"==n||"fill"==n||"flex-item"==n||"fluid"==n||"intrinsic"==n}(n)},a.buildCallback=function(){var n,t;n=this.element.dataset.imgurId,t=this.element,s().assert(n,"The data-imgur-id attribute is required for <amp-imgur> %s",t,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined)},a.layoutCallback=function(){var n,t,r,e,i,u,o,f,c=this;this.Bb=(n=this.win,t="message",r=this.Fb.bind(this),e=void 0,i=n,u=r,o=function(n){try{return u(n)}catch(n){var t,r;throw null===(t=(r=self).__AMP_REPORT_ERROR)||void 0===t||t.call(r,n),n}},f=function(){if(void 0!==d)return d;d=!1;try{var n={get capture(){return d=!0,!1}};self.addEventListener("test-options",null,n),self.removeEventListener("test-options",null,n)}catch(n){}return d}(),i.addEventListener(t,o,!!f&&e),function(){null==i||i.removeEventListener(t,o,!!f&&e),u=null,i=null,o=null});var l=this.element.dataset.imgurId.replace(/^(a\/)?(.*)/,(function(n,t,r){return(t||"")+encodeURIComponent(r)}));return this.qb(l).catch((function(n){if(l.startsWith("a/"))throw n;var t="a/".concat(l);return c.qb(t).then((function(){s().warn(v,'id should be prefixed with "a/", loaded album using data-imgur-id="'.concat(t,'". This element should be updated to use "a/".'))}))})).catch((function(){s().error(v,'Failed to load. Is "'.concat(l,'" a correct id?'))}))},a.qb=function(n){var t,r,e=this,i=this.element,o=(t=i.ownerDocument,r={"scrolling":"no","frameborder":"0","allowfullscreen":"true","title":i.title||"imgur post"},function(n,t){for(var r in t)n.setAttribute(r,t[r]);return n}(t.createElement("iframe"),r));o.src="https://imgur.com/".concat(n,"/embed?pub=true"),this.tb&&i.removeChild(this.tb),this.tb=o,i.appendChild(o),function(n,t){n.classList.add("i-amphtml-fill-content")}(o);var f=new u,c=f.promise,l=f.resolve;return this.Cb=l,this.loadPromise(this.tb).then((function(){return(n=e.win,function(n,t){h(function(n,t){var r=n.__AMP_SERVICES&&n.__AMP_SERVICES.timer;return!(!r||!r.ctor)}(n));var r=function(n){var t=n.__AMP_SERVICES;return t||(t=n.__AMP_SERVICES={}),t}(n)[t];return r.obj||(h(r.ctor),h(r.context),r.obj=new r.ctor(r.context),h(r.obj),r.context=null,r.resolve&&r.resolve(r.obj)),r.obj}(n,"timer")).timeoutPromise(500,c);var n}))},a.Fb=function(n){if("https://imgur.com"==n.origin&&n.source==this.tb.contentWindow){var t=function(n){return n.data}(n);if(t&&(c(t)||t.startsWith("{"))){null==this||this.Cb();var r=c(t)?t:function(n,t){try{return function(n){return JSON.parse(n)}(n)}catch(n){return null}}(t);if("resize_imgur"==r.message){var e=r.height;this.attemptChangeHeight(e).catch((function(){}))}}}},a.unlayoutCallback=function(){var n,t;return this.tb&&(null===(t=(n=this.tb).parentElement)||void 0===t||t.removeChild(n),this.tb=null),this.Bb&&this.Bb(),!0},l}(n.BaseElement);n.registerElement(v,m)}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-imgur-0.1.js.map