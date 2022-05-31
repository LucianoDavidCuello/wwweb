"use strict";var WorkerThread=function(e){function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){return v.has(e)?v.get(e):(v.set(e,y),m.push(e),y++)}function c(e,t){0<p&&e[58]&&(b=!0,g=g.concat(t),Promise.resolve().then((function(t){if(b){var n;t=new Uint16Array(function(){var e=h;return h=[],e}().reduce((function(e,t){return e.concat(t[8])}),[])).buffer;var r=new Uint16Array(g).buffer;e.postMessage((i(n={},54,p),i(n,12,2===p?3:2),i(n,37,t),i(n,41,function(){var e=m;return m=[],e}()),i(n,36,r),n),[t,r]),g=[],b=!1,p=2}})))}function u(e,t,n){n=Object.assign(Object.create(null),n);var r=Object.defineProperty;return r(n,"length",{get:function(){return Object.keys(this).length}}),r(n,"key",{value:function(e){var t=Object.keys(this);return 0<=e&&e<t.length?t[e]:null}}),r(n,"getItem",{value:function(e){return(e=this[e])?e:null}}),r(n,"setItem",{value:function(n,r){r=String(r),this[n]=r,c(e,[12,2,t,a(n),a(r)])}}),r(n,"removeItem",{value:function(n){delete this[n],c(e,[12,2,t,a(n),0])}}),r(n,"clear",{value:function(){var n=this;Object.keys(this).forEach((function(e){delete n[e]})),c(e,[12,2,t,0,0])}}),n}var s,f,l,d,y=0,m=[],v=new Map,p=0,h=[],b=!1,g=[],E=function(){function e(t){n(this,e),this.document=t}return o(e,[{key:"getState",value:function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return new Promise((function(n){e.document.addGlobalEventListener("message",(function r(o){11===(o=o.data)[12]&&o[74]===t&&(e.document.removeGlobalEventListener("message",r),n(o[21]))})),c(e.document,[12,1,2,a(t),0]),setTimeout(n,500,null)}))}},{key:"setState",value:function(e){try{var t=JSON.stringify(e)}catch(e){throw Error("AMP.setState only accepts valid JSON as input.")}c(this.document,[12,2,2,0,a(t)])}}]),e}(),w={},S=function(){function e(){n(this,e),this.removeGlobalEventListener=this.addGlobalEventListener=this.postMessage=this.defaultView=void 0,this[58]=!0,this[7]=-1,this.defaultView={document:this}}return o(e,[{key:"59",value:function(){p=2}}]),e}(),O={Array:!0,ArrayBuffer:!0,BigInt:!0,BigInt64Array:!0,BigUint64Array:!0,Boolean:!0,Cache:!0,CustomEvent:!0,DataView:!0,Date:!0,Error:!0,EvalError:!0,Event:!0,EventTarget:!0,Float32Array:!0,Float64Array:!0,Function:!0,Infinity:!0,Int16Array:!0,Int32Array:!0,Int8Array:!0,Intl:!0,JSON:!0,Map:!0,Math:!0,NaN:!0,Number:!0,Object:!0,Promise:!0,Proxy:!0,RangeError:!0,ReferenceError:!0,Reflect:!0,RegExp:!0,Set:!0,String:!0,Symbol:!0,SyntaxError:!0,TextDecoder:!0,TextEncoder:!0,TypeError:!0,URIError:!0,URL:!0,Uint16Array:!0,Uint32Array:!0,Uint8Array:!0,Uint8ClampedArray:!0,WeakMap:!0,WeakSet:!0,WebAssembly:!0,WebSocket:!0,XMLHttpRequest:!0,atob:!0,addEventListener:!0,removeEventListener:!0,btoa:!0,caches:!0,clearInterval:!0,clearTimeout:!0,console:!0,decodeURI:!0,decodeURIComponent:!0,document:!0,encodeURI:!0,encodeURIComponent:!0,escape:!0,fetch:!0,indexedDB:!0,isFinite:!0,isNaN:!0,location:!0,navigator:!0,onerror:!0,onrejectionhandled:!0,onunhandledrejection:!0,parseFloat:!0,parseInt:!0,performance:!0,requestAnimationFrame:!0,cancelAnimationFrame:!0,self:!0,setTimeout:!0,setInterval:!0,unescape:!0},A=function(){},k=(s=postMessage.bind(self)||A,f=addEventListener.bind(self)||A,l=removeEventListener.bind(self)||A,(d=new S).postMessage=s,d.addGlobalEventListener=f,d.removeGlobalEventListener=l,d.defaultView);return function(e){var t=e;for(e=function(){Object.getOwnPropertyNames(t).forEach((function(e){var n=t;if(!O.hasOwnProperty(e))try{delete n[e]}catch(e){}})),t=Object.getPrototypeOf(t)};t&&t.constructor!==EventTarget;)e()}(self),self.AMP=new E(k.document),self.exportFunction=function(e,n){if(!e||""===e)throw Error("[worker-dom]: Attempt to export function was missing an identifier.");if("function"!=typeof n)throw Error('[worker-dom]: Attempt to export non-function failed: ("'.concat(e,'", ').concat(t(n),")."));if(e in w)throw Error('[worker-dom]: Attempt to re-export function failed: "'.concat(e,'".'));w[e]=n},addEventListener("message",(function(e){return function(e,t){if(12===(e=e.data)[12]){var n=e[77],r=JSON.parse(e[78]),o=e[7];(e=w[n])?Promise.resolve(e).then((function(e){return e.apply(null,r)})).then((function(e){c(t,[13,1,o,a(JSON.stringify(e))])}),(function(e){e=JSON.stringify(e.message||e),c(t,[13,2,o,a(JSON.stringify('[worker-dom]: Function "'.concat(n,'" threw: "').concat(e,'"')))])})):c(t,[13,2,o,a(JSON.stringify('[worker-dom]: Exported function "'.concat(n,'" could not be found.')))])}}(e,k.document)})),e.hydrate=function(e,t,n,r,o,i,a,c){t=e.defaultView,a.storage&&(t.localStorage=u(e,0,a.storage)),c.storage&&(t.sessionStorage=u(e,1,c.storage))},e.workerDOM=k,Object.defineProperty(e,"__esModule",{value:!0}),e}({});
//# sourceMappingURL=worker.nodom.js.map
