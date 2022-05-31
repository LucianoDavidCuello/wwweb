;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-orientation-observer",ev:"0.1",l:!0,f:function(t,n){(()=>{function n(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function e(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function i(t){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?e(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}var{hasOwnProperty:r,toString:s}=Object.prototype;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var o=self.__AMP_LOG;function a(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function u(t,n,e,i,r,s,o,a,u,c,h){return t}function c(t){return t.nodeType?(e=t,n=(e.ownerDocument||e).defaultView,function(t,n){return h(t=function(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}(t),"ampdoc")}(n)).getAmpDoc(t):t;var n,e}function h(t,n){u(l(t,n));const e=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return e.obj||(u(e.ctor),u(e.context),e.obj=new e.ctor(e.context),u(e.obj),e.context=null,e.resolve&&e.resolve(e.obj)),e.obj}function l(t,n){const e=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!e||!e.ctor)}var f="amp-orientation-observer",d=["alpha","beta","gamma"],b={"alpha":180,"beta":0,"gamma":0},v={"alpha":[0,360],"beta":[-180,180],"gamma":[-90,90]},m=class extends t.BaseElement{constructor(t){super(t),this.Ni=c(this.element),this.tc=null,this.tO=i({},v),this.nO=i({},b),this.eO=i({},b),this.iO={beta:[],alpha:[],gamma:[]},this.rO=null}buildCallback(){this.tc=function(t,n){const e=function(t){const n=c(t);return n.isSingleDoc()?n.win:n}(c(t));return l(e,n)?h(e,n):null}(this.element,"action"),this.Ni.whenFirstVisible().then(this.Au.bind(this))}Au(){var t;t=this.win.DeviceOrientationEvent,(o.user||(o.user=a()),void o.user.win?o.userForEmbed||(o.userForEmbed=a()):o.user).assert(t,"The current browser doesn't support the `window.DeviceOrientationEvent`",undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined),d.forEach((t=>{this.tO[t]=this.Ly(`${t}-range`,this.tO[t])})),this.rO=this.element.hasAttribute("smoothing")?Number(this.element.getAttribute("smoothing"))||4:null,this.win.addEventListener("deviceorientation",(t=>{this.sO(t)}),!0)}Ly(t,n){const e=this.element.getAttribute(t);if(e){const t=e.trim().split(" ");return[parseInt(t[0],10),parseInt(t[1],10)]}return n}sO(t){if(t instanceof DeviceOrientationEvent){const{screen:n}=this.win,{alpha:e}=t;let{beta:i,gamma:r}=t;const s="orientation"in n?n.orientation.angle:n.orientation;if(90==this.win.orientation||-90==this.win.orientation){const t=r;r=i,i=t}s<0&&(r=-r,i=-i);const o={alpha:e,beta:i,gamma:r};d.forEach((t=>{Math.abs(o[t]-this.nO[t])>.1&&(this.rO?this.nO[t]=this.oO(t,o[t]):this.nO[t]=o[t],this.aO(t,this.nO[t],this.tO[t]))}))}}oO(t,n){this.iO[t].length>this.rO&&this.iO[t].shift(),this.iO[t].push(n);const e=this.iO[t].reduce((function(t,n){return t+n}))/this.rO;return this.iO[t].length>this.rO&&this.eO[t]==b[t]&&(this.eO[t]=e),e-this.eO[t]}aO(t,n,e){const i=e[0]<0?n.toFixed()-e[0]:n.toFixed(),r=function(t,n,e,i){const r={detail:e};return Object.assign(r,void 0),new t.CustomEvent(n,r)}(this.win,`${f}.${t}`,{"angle":(s=n,o=e[0],a=e[1],Math.min(Math.max(s,o),a)).toFixed(),"percent":i/(e[1]-e[0])});var s,o,a;this.tc.trigger(this.element,t,r,1)}};t.registerElement(f,m)})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-orientation-observer-0.1.mjs.map