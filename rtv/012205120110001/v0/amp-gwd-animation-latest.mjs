;
(self.AMP=self.AMP||[]).push({m:1,v:"2205120110001",n:"amp-gwd-animation",ev:"0.1",l:!0,f:function(t,n){(()=>{var{hasOwnProperty:n,toString:i}=Object.prototype;function e(t,i){return n.call(t,i)}function s(t){return(t.ownerDocument||t).defaultView}function o(t){return CSS.escape(t)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var a=self.__AMP_LOG;function r(t){return a.user||(a.user=c()),function(t,n){return n&&n.ownerDocument.defaultView!=t}(a.user.win,t)?a.userForEmbed||(a.userForEmbed=c()):a.user}function c(t){return function(t,n){throw new Error("failed to call initLogConstructor")}()}function u(t,n,i,e,s,o,a,r,c,u,l){return t}function l(t,n,i,e,s,o,a,c,u,l,d){return r().assert(t,n,i,e,s,o,a,c,u,l,d)}function d(t,n){const i=function(t){const n=f(t);return n.isSingleDoc()?n.win:n}(f(t));return _(i,n)?g(i,n):null}function h(t){return t.__AMP_TOP||(t.__AMP_TOP=t)}function f(t){return t.nodeType?(n=s(t),function(t,n){return g(t=h(t),"ampdoc")}(n)).getAmpDoc(t):t;var n}function g(t,n){u(_(t,n));const i=function(t){let n=t.__AMP_SERVICES;return n||(n=t.__AMP_SERVICES={}),n}(t)[n];return i.obj||(u(i.ctor),u(i.context),i.obj=new i.ctor(i.context),u(i.obj),i.context=null,i.resolve&&i.resolve(i.obj)),i.obj}function _(t,n){const i=t.__AMP_SERVICES&&t.__AMP_SERVICES[n];return!(!i||!i.ctor)}var m=t=>d(t,"action"),P="gwd-page-wrapper",A="gwd-pause-animation",v="gwd-play-animation",E="data-gwd-label-animation",w="gwd.timelineEvent",p=["animationend","webkitAnimationEnd"],T="__AMP_GWD_GOTO_COUNTERS__",b="GWD";new Set(["c","v","a","ad"]);var R="amp-gwd-animation",I={"play":["args.id"],"pause":["args.id"],"togglePlay":["args.id"],"gotoAndPlay":["args.id","args.label"],"gotoAndPause":["args.id","args.label"],"gotoAndPlayNTimes":["args.id","args.label","args.N","event.detail.eventName"],"setCurrentPage":["args.index"]},M=class extends t.BaseElement{constructor(t){super(t),this.t$="",this.n$=null,this.i$=this.e$.bind(this)}buildCallback(){this.t$=this.element.getAttribute("timeline-event-prefix")||"";const t=function(t,n){const i=(t.ownerDocument||t).defaultView,e=n||h(i);if(i&&i!=e&&h(i)==e)try{return i.frameElement}catch(t){}return null}(this.element,this.getAmpDoc().win);t&&(this.n$=t.__AMP_EMBED__),this.s$().addEventListener(w,this.i$,!0);const n=this.o$();if(n){l(this.element.id,`The ${R} element must have an id.`);const t=`${this.element.id}.setCurrentPage(index=event.index)`;!function(t,n,i,e){let s;const o=n.getAttribute("on")||"",a="slideChange:",r=o.indexOf(a);if(-1!=r){const t=r+a.length;s=o.substr(0,t)+e+","+o.substr(t)}else s=o,s&&(s+=";"),s+=`slideChange:${e}`;m(t).setActions(n,s)}(this.element,n,0,t)}const i=this.a$.bind(this);for(const t in I)this.registerAction(t,i)}s$(){return this.n$?this.n$.win.document:this.getAmpDoc().getRootNode()}o$(){return this.s$().getElementById("pagedeck")}a$(t){this.r$(t)&&this.c$(t)}r$(t){if("setCurrentPage"==t.method){const n=this.o$();return n&&t.source==n}return!0}c$(t){const n=l(d(this.element,"gwd"),"Cannot execute action because the GWD service is not registered."),i=I[t.method].map((n=>function(t,n){const i=n.split(".");let e=t;for(let t=0;t<i.length;t++){const n=i[t];if(!n||!e||void 0===e[n]){e=void 0;break}e=e[n]}return e}(t,n)));n[t.method].apply(n,i)}e$(t){const n=m(this.element),i=function(t){return t.detail}(t).eventName,e=`${this.t$}${i}`;n.trigger(this.element,e,t,3)}detachedCallback(){return this.s$().removeEventListener(w,this.i$,!0),!0}};t.registerServiceForDoc("gwd",class{constructor(t){this.Ni=t,this.i=t.win,this.tp=this.i.document,this.u$=this.l$.bind(this),t.whenReady().then((()=>{const t=this.tp.body;!function(t,n,i){if(n())i();else{const e=new(s(t).MutationObserver)((()=>{n()&&(e.disconnect(),i())}));e.observe(t,{childList:!0})}}(t,(()=>!!t.querySelector(`.${o(P)}`)),this.pe.bind(this))}))}pe(){this.d$(),this.setCurrentPage(0)}setEnabled(t){this.tp.body.classList.toggle("i-amphtml-gwd-animation-disabled",!t)}setCurrentPage(t){const n=this.tp.body.querySelectorAll(`.${o(P)}`);if(0==n.length)return;const i=(e=`.${o(P)}.${o(v)}`,this.tp.body.querySelector(function(t,n){return t.replace(/^|,/g,"$&:scope ")}(e)));var e;i&&this.h$(i);const s=n[t];s?this.f$(s):r().error(b,"Could not find page with index "+t+".")}f$(t){t.classList.add(v)}h$(t){var n;t.classList.remove(v),[t].concat((n=t.querySelectorAll("*"),n?Array.prototype.slice.call(n):[])).forEach((t=>this.g$(t)))}g$(t){if(t.classList.remove(A),t.hasAttribute(E)){const n=t.getAttribute(E);t.classList.remove(n),t.removeAttribute(E)}delete t[T]}play(t){const n=this.getReceiver(t);n&&n.classList.remove(A)}pause(t){const n=this.getReceiver(t);n&&n.classList.add(A)}togglePlay(t){const n=this.getReceiver(t);n&&n.classList.toggle(A)}gotoAndPlay(t,n){const i=this.getReceiver(t);i&&this._$(i,n)}gotoAndPause(t,n){const i=this.getReceiver(t);i&&(this._$(i,n),this.i.setTimeout((()=>{this.pause(t)}),40))}gotoAndPlayNTimes(t,n,i,s){if(i<=0)return void r().error(b,`Invalid maxCount parameter: ${i}`);if(!s)return void r().error(b,"Event name required but not specified.");const o=this.getReceiver(t);if(!o)return;const a=`${s}_${n}`,c=function(t,n){return t[T]&&e(t[T],n)?t[T][n]:0}(o,a);c<i&&(this._$(o,n),function(t,n,i){t[T]||(t[T]={}),e(t[T],n)||(t[T][n]=0),t[T][n]=i}(o,a,c+1))}getReceiver(t){if("document.body"==t)return this.tp.body;const n=this.tp.getElementById(t);return n&&n.classList?n:(r().error(b,`Could not get receiver with id ${t}.`),null)}_$(t,n){t.classList.remove(A);const i=t.getAttribute(E);i&&(t.classList.remove(i),t.removeAttribute(E)),i==n&&function(t){const n="__AMP_GWD_TEMP";self[n]=t.offsetWidth,delete self[n]}(t),t.classList.add(n),t.setAttribute(E,n)}l$(t){const n=t.target.getAttribute("data-event-name");if(!n)return;const i={"eventName":n,"sourceEvent":t},e=function(t,n,i,e){const s={detail:i};return Object.assign(s,void 0),new t.CustomEvent("gwd.timelineEvent",s)}(this.i,0,i);this.tp.dispatchEvent(e)}d$(){for(let t=0;t<p.length;t++)this.tp.body.addEventListener(p[t],this.u$,!0)}m$(){for(let t=0;t<p.length;t++)this.tp.body.removeEventListener(p[t],this.u$,!0)}dispose(){this.m$()}}),t.registerElement(R,M,".i-amphtml-gwd-animation-disabled [class*=-animation],.i-amphtml-gwd-animation-disabled [class*=gwdanimation]{animation:none!important}\n/*# sourceURL=/extensions/amp-gwd-animation/0.1/amp-gwd-animation.css*/")})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */}});
//# sourceMappingURL=amp-gwd-animation-0.1.mjs.map