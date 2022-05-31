;
(()=>{var t,{hasOwnProperty:i,toString:s}=Object.prototype,e=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;function n(t,i=""){try{return decodeURIComponent(t)}catch(t){return i}}function o(t){return t.data}function r(i,s){return t||(t=self.document.createElement("a")),function(t,i,s){return t.href="",new URL(i,t.href)}(t,i)}self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG,new Set(["c","v","a","ad"]);var h=class{constructor(t){t||(t={debug:!1,windowContext:window}),this.Z={},this.Wf={},this.Ff=t.debug,this.Gf=!1,this.Kf=!1,this.Gs=!1,this.Hf=null,this.Jf=null,this.Bf=null,this.Qf=null,this.Zf=null,this.Xf=t.windowContext||window}listen(t){return new Promise(((i,s)=>{this.Gs?s(new Error("Already connected.")):this.Gf?s(new Error("Already listening for connections.")):Array.isArray(t)?(this.Bf=this.Yf.bind(this,t,i,s),this.Xf.addEventListener("message",this.Bf),this.Ff):s(new Error("allowedOrigins should be a string array of allowed origins to accept messages from. Got:",t))})).then((()=>{this.send(h.Topics.CONNECT_HANDSHAKE,null),this.Gs=!0}))}Ol(t,i){const s=r(t).origin;for(let t=0;t<i.length;t++)if(r(i[t]).origin===s)return!0;return!1}Yf(t,i,s,e){const n=o(e),{origin:r,ports:c}=e;this.Ff,this.Ol(r,t)&&n&&n.topic===h.Topics.CONNECT_HANDSHAKE&&(this.Xf.removeEventListener("message",this.Bf),this.Jf=c[0],this.Zf=this.td.bind(this),this.Jf.addEventListener("message",this.Zf,!1),this.Jf.start(),i())}connect(t,i){return new Promise(((s,e)=>{t||e(new Error("Provide a valid Window context to connect to.")),i||e(new Error("Provide an expected origin for the remote Window or provide the wildcard *.")),this.Gs?e(new Error("Already connected.")):this.Kf?e(new Error("Already connecting.")):(this.Hf=new MessageChannel,this.Jf=this.Hf.port1,this.Qf=this.ed.bind(this,this.Jf,i,s),this.Jf.addEventListener("message",this.Qf),this.Jf.start(),t.postMessage({topic:h.Topics.CONNECT_HANDSHAKE},"*"===i?"*":r(i).origin,[this.Hf.port2]))}))}ed(t,i,s){this.Gs=!0,this.Ff,t.removeEventListener("message",this.Qf),this.Zf=this.td.bind(this),t.addEventListener("message",this.Zf,!1),s()}static get Topics(){return{CONNECT_HANDSHAKE:"topic-connect-handshake",NOTIFICATION_PERMISSION_STATE:"topic-notification-permission-state",SERVICE_WORKER_STATE:"topic-service-worker-state",SERVICE_WORKER_REGISTRATION:"topic-service-worker-registration",SERVICE_WORKER_QUERY:"topic-service-worker-query",STORAGE_GET:"topic-storage-get"}}td(t){const i=o(t);if(this.Z[i.id]&&i.isReply){const t=this.Z[i.id];delete this.Z[i.id];const{promiseResolver:s}=t;t.message=i.data,this.Ff,s([i.data,this.nd.bind(this,i.id,t.topic)])}else{const t=this.Wf[i.topic];if(!t)return;this.Ff;for(let s=0;s<t.length;s++)(0,t[s])(i.data,this.nd.bind(this,i.id,i.topic))}}on(t,i){this.Wf[t]?this.Wf[t].push(i):this.Wf[t]=[i]}off(t,i){if(i){const s=this.Wf[t].indexOf(i);-1!==s&&this.Wf[t].splice(s,1)}else this.Wf[t]&&delete this.Wf[t]}nd(t,i,s){const e={id:t,topic:i,data:s,isReply:!0};return this.Jf.postMessage(e),new Promise((t=>{this.Z[e.id]={message:s,topic:i,promiseResolver:t}}))}send(t,i){const s={id:crypto.getRandomValues(new Uint8Array(10)).join(""),topic:t,data:i};return this.Ff,this.Jf.postMessage(s),new Promise((e=>{this.Z[s.id]={message:i,topic:t,promiseResolver:e}}))}};window._ampWebPushPermissionDialog=new class{constructor(t){this.Ff=t&&t.debug,this.Xf=t.windowContext||window,this.rd=new h({debug:this.Ff,windowContext:this.Xf})}isCurrentDialogPopup(){return!!this.Xf.opener&&this.Xf.opener!==this.Xf}requestNotificationPermission(){return new Promise(((t,i)=>{try{this.Xf.Notification.requestPermission((i=>t(i)))}catch(t){i(t)}}))}run(){this.iw(),this.sw(),this.ow(),this.rw(),"denied"!==this.Xf.Notification.permission?this.hw():this.cw()}iw(){const t=this.Xf.document.querySelector("#close");t&&t.addEventListener("click",(()=>{this.closeDialog()}))}closeDialog(){if(this.isCurrentDialogPopup())this.Xf.close();else{const t=function(t){const i=function(t){const i=Object.create(null);return i}();if(!t)return i;let s;for(;s=e.exec(t);){const t=n(s[1],s[1]),e=s[2]?n(s[2].replace(/\+/g," "),s[2]):"";i[t]=e}return i}((this.Xf.fakeLocation||this.Xf.location).search);if(!t.return)throw new Error("Missing required parameter.");const i=n(t.return);this.redirectToUrl(i)}}cw(){navigator.permissions.query({name:"notifications"}).then((t=>{t.onchange=()=>{switch(this.sw(),this.Xf.Notification.permission){case"default":case"granted":this.hw()}}}))}sw(){this.Xf.localStorage.setItem("amp-web-push-notification-permission",this.Xf.Notification.permission)}ow(){const t=this.Xf.document.querySelectorAll("[permission]");for(let i=0;i<t.length;i++){const s=t[i];this.aw(s,!1)}const i=this.Xf.document.querySelector(`[permission=${s=this.Xf.Notification.permission,CSS.escape(s)}]`);var s;i&&this.aw(i,!0)}rw(){const t=this.Xf.document.querySelector("#preload"),i=this.Xf.document.querySelector("#postload");t&&i&&(this.aw(t,!1),this.aw(i,!0))}aw(t,i){if(!t)return;const s="invisible";i?t.classList.remove(s):t.classList.add(s)}hw(){return this.requestNotificationPermission().then((t=>{if(this.sw(),this.isCurrentDialogPopup())return this.rd.connect(opener,"*"),this.rd.send(h.Topics.NOTIFICATION_PERMISSION_STATE,t).then((t=>{const i=t[0];i&&i.closeFrame&&this.closeDialog()}));this.closeDialog()}))}redirectToUrl(t){const i=r(t);!i||"http:"!==i.protocol&&"https:"!==i.protocol||(this.Xf.location.href=t)}}({debug:!1}),window._ampWebPushPermissionDialog.run()})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
//# sourceMappingURL=amp-web-push-permission-dialog.mjs.map