;
(self.AMP=self.AMP||[]).push({m:0,v:"2205120110001",n:"amp-nested-menu",ev:"0.1",l:!0,f:function(n,e){!function(){var e;function t(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function i(n,e){return(i=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function s(n,e){if(e&&("object"===u(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return t(n)}var o="ArrowLeft",a="ArrowUp",m="ArrowDown",c="Home";function f(n){return n?Array.prototype.slice.call(n):[]}Array.isArray;var p,d=Object.prototype;function l(n,e){return n.replace(/^|,/g,"$&".concat(e," "))}function h(n,e){if(void 0!==p?p:p=function(n){try{var e=n.ownerDocument,t=e.createElement("div"),i=e.createElement("div");return t.appendChild(i),t.querySelector(":scope div")===i}catch(n){return!1}}(n))return n.querySelector(l(e,":scope"));var t=function(n,e){var t=n.classList,i="i-amphtml-scoped";t.add(i);var r=l(e,".".concat(i)),u=n.querySelectorAll(r);return t.remove(i),u}(n,e)[0];return void 0===t?null:t}function b(n,e,t){var i;for(i=n;i&&i!==t;i=i.parentElement)if(e(i))return i;return null}function v(n,e){return n.closest?n.closest(e):b(n,(function(n){return function(n,e){var t=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector;return!!t&&t.call(n,e)}(n,e)}))}function y(n){try{n.focus()}catch(n){}}d.hasOwnProperty,d.toString,self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var w=self.__AMP_LOG;function g(n){return function(n,e){throw new Error("failed to call initLogConstructor")}()}function x(n,e,t,i,r,u,s,o,a,m,c){return n}function j(n,e,t,i,r,u,s,o,a,m,c){return(w.user||(w.user=g()),void w.user.win?w.userForEmbed||(w.userForEmbed=g()):w.user).assert(n,e,t,i,r,u,s,o,a,m,c)}function E(n){return n.nodeType?(t=n,e=(t.ownerDocument||t).defaultView,function(n,e){return R(n=function(n){return n.__AMP_TOP||(n.__AMP_TOP=n)}(n),"ampdoc")}(e)).getAmpDoc(n):n;var e,t}function R(n,e){x(A(n,e));var t=function(n){var e=n.__AMP_SERVICES;return e||(e=n.__AMP_SERVICES={}),e}(n)[e];return t.obj||(x(t.ctor),x(t.context),t.obj=new t.ctor(t.context),x(t.obj),t.context=null,t.resolve&&t.resolve(t.obj)),t.obj}function A(n,e){var t=n.__AMP_SERVICES&&n.__AMP_SERVICES[e];return!(!t||!t.ctor)}var O=function(n){return R(n,"timer")},S="amp-nested-menu",L="left",k="right",X=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&i(n,e)}(l,n);var u,p,d=(u=l,p=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}(),function(){var n,e=r(u);if(p){var t=r(this).constructor;n=Reflect.construct(e,arguments,t)}else n=e.apply(this,arguments);return s(this,n)});function l(n){var e;return(e=d.call(this,n)).Vf=e.win.document,e.Ue=null,e.nL=null,e.eL=n,e.tL=e.Fo.bind(t(e)),e.iL=e.rL.bind(t(e)),e}l.prerenderAllowed=function(){return!0};var w=l.prototype;return w.buildCallback=function(){var n,e=this.element;this.Ue=function(n){return e="action",t=E(n),A(r=(i=E(t)).isSingleDoc()?i.win:i,e)?R(r,e):null;var e,t,i,r}(this.element),this.nL=e.getAttribute("side"),this.nL!=L&&this.nL!=k&&(this.nL="rtl"==((n=this.Vf).body.getAttribute("dir")||n.documentElement.getAttribute("dir")||"ltr")?L:k,e.setAttribute("side",this.nL)),this.registerAction("reset",this.reset.bind(this)),e.addEventListener("click",this.tL),e.addEventListener("keydown",this.iL)},w.layoutCallback=function(){return this.uL(),e||(e=Promise.resolve(void 0))},w.uL=function(){var n=this;f(this.element.querySelectorAll("[amp-nested-submenu-open],[amp-nested-submenu-close]")).forEach((function(e){e.hasAttribute("tabindex")||e.setAttribute("tabindex",0),e.setAttribute("role","button"),e.hasAttribute("amp-nested-submenu-open")&&e.setAttribute("aria-expanded","false"),j(0==n.Ue.hasAction(e,"tap"),"submenu open/close buttons should not have tap actions registered.")}))},w.isLayoutSupported=function(n){return"fill"==n},w.Fo=function(n){var e=n.target,t=v(n.target,"[amp-nested-submenu-open],[amp-nested-submenu-close]");t&&this.I_(e,t)&&(t.hasAttribute("amp-nested-submenu-open")?this.sL(t):this.oL(t))},w.I_=function(n,e){var t=!!b(n,(function(n){return"A"==n.tagName}),e),i=this.Ue.hasAction(n,"tap",e);return!t&&!i},w.sL=function(n){var e=h(n.parentElement,">[amp-nested-submenu]");j(e,"".concat(S," requires each submenu open button to have a submenu as its sibling")),this.aL(e)},w.aL=function(n){var e=this;if(!n.hasAttribute("open")){var t=this.mL(n);t&&(t.setAttribute("child-open",""),n.setAttribute("open",""),this.eL=n,O(this.win).delay((function(){h(n.parentElement,">[amp-nested-submenu-open]").setAttribute("aria-expanded","true");var t=f(n.querySelectorAll("[amp-nested-submenu-close]")).filter((function(t){return e.mL(t)==n}))[0];j(t,"".concat(S," requires each submenu to contain at least one submenu close button")),y(t)}),350))}},w.oL=function(n){var e=v(n,"[amp-nested-submenu]");j(e,"".concat(S,": submenu close buttons are only allowed inside submenus")),this.cL(e)},w.cL=function(n){if(n.hasAttribute("open")){var e=this.mL(n);e&&(e.removeAttribute("child-open"),n.removeAttribute("open"),this.eL=e,O(this.win).delay((function(){var e=h(n.parentElement,">[amp-nested-submenu-open]");e.setAttribute("aria-expanded","false"),y(e)}),350))}},w.reset=function(){for(;this.element.hasAttribute("child-open");)this.cL(this.eL)},w.rL=function(n){if(!n.defaultPrevented)switch(n.key){case"Enter":case" ":return void this.Fo(n);case o:case"ArrowRight":this.fL(n);break;case a:case m:case c:case"End":this.pL(n)}},w.fL=function(n){var e=n.key==o;if(this.nL==L&&(e=!e),e)this.cL(this.eL);else{var t=n.target;t.hasAttribute("amp-nested-submenu-open")&&this.sL(t)}},w.pL=function(n){var e=n.target,t=b(e,(function(n){return"LI"==n.tagName}),this.mL(e));if(t){var i;if(n.key===a)i=t.previousElementSibling;else if(n.key===m)i=t.nextElementSibling;else if(n.key===c)i=t.parentElement.firstElementChild;else{if("End"!==n.key)return;i=t.parentElement.lastElementChild}if(i){var r=i.querySelector("button,a[href],[tabindex]");r&&(n.preventDefault(),y(r))}}},w.mL=function(n){return v(n.parentElement,"amp-nested-menu,[amp-nested-submenu]")},l}(n.BaseElement);n.registerElement(S,X,"amp-nested-menu,amp-nested-menu [amp-nested-submenu]{position:absolute!important;top:0!important;width:100%!important;height:100%!important;margin:0!important;padding:0!important;transform:translateX(0)!important}amp-nested-menu.i-amphtml-layout-size-defined{overflow:visible!important}amp-nested-menu ol,amp-nested-menu ul{list-style-type:none;padding:0}amp-nested-menu [amp-nested-submenu-close],amp-nested-menu [amp-nested-submenu-open]{cursor:pointer}amp-nested-menu [amp-nested-submenu]{opacity:0!important;visibility:hidden!important;transition:transform 233ms,opacity 233ms,visibility 0s 233ms}amp-nested-menu,amp-nested-menu [amp-nested-submenu][open]{opacity:1!important;visibility:visible!important;transition:transform 233ms}amp-nested-menu [amp-nested-submenu][child-open],amp-nested-menu[child-open]{visibility:hidden!important;transition:transform 233ms,visibility 0s 233ms}amp-nested-menu[side=left] [amp-nested-submenu]{right:100%!important}amp-nested-menu[side=right] [amp-nested-submenu]{left:100%!important}amp-nested-menu[side=left] [amp-nested-submenu][child-open],amp-nested-menu[side=left][child-open]{transform:translateX(100%)!important}amp-nested-menu[side=right] [amp-nested-submenu][child-open],amp-nested-menu[side=right][child-open]{transform:translateX(-100%)!important}\n/*# sourceURL=/extensions/amp-nested-menu/0.1/amp-nested-menu.css*/")}();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-nested-menu-0.1.js.map