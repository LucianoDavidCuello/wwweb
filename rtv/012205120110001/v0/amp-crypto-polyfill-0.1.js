;
(self.AMP=self.AMP||[]).push({m:0,v:"2205120110001",n:"amp-crypto-polyfill",ev:"0.1",l:!0,f:function(r,n){!function(){function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(n)}var n,t,i,e={Uint8Array:Uint8Array},o=function(n){var t=this||self;function i(r,n){function t(){}t.prototype=n.prototype,r.D=n.prototype,r.prototype=new t,r.prototype.constructor=r,r.C=function(r,t,i){for(var e=Array(arguments.length-2),o=2;o<arguments.length;o++)e[o-2]=arguments[o];return n.prototype[t].apply(r,e)}}function e(r,n){this.h=0|r,this.g=0|n}function o(r){return 4294967296*r.g+(r.h>>>0)}function u(r){return 0==r.h&&0==r.g}function f(r,n){return r.h==n.h&&r.g==n.g}function a(r,n){return r.g==n.g?r.h==n.h?0:r.h>>>0>n.h>>>0?1:-1:r.g>n.g?1:-1}function s(r){var n=1+~r.h|0;return l(n,~r.g+!n|0)}function h(r,n){if(u(r))return r;if(u(n))return n;var t=r.g>>>16,i=65535&r.g,e=r.h>>>16;r=65535&r.h;var o=n.g>>>16,f=65535&n.g,a=n.h>>>16,s=r*(n=65535&n.h),h=(s>>>16)+e*n,c=h>>>16;c+=(h=(65535&h)+r*a)>>>16;var v=(c+=i*n)>>>16;return l((65535&h)<<16|65535&s,(v=(v+=(c=(65535&c)+e*a)>>>16)+((c=(65535&c)+r*f)>>>16)+(t*n+i*a+e*f+r*o)&65535)<<16|65535&c)}function c(r,n){if(u(n))throw Error("division by zero");if(0>r.g){if(f(r,p)){if(f(n,w)||f(n,b))return p;if(f(n,p))return w;var t=1;if(0==t)t=r;else{var i=r.g;t=32>t?l(r.h>>>t|i<<32-t,i>>t):l(i>>t-32,0<=i?0:-1)}if(t=c(t,n),0!=(i=1)){var e=t.h;t=32>i?l(e<<i,t.g<<i|e>>>32-i):l(0,e<<i-32)}return f(t,y)?0>n.g?w:b:(r=r.add(s(h(n,t))),t.add(c(r,n)))}return 0>n.g?c(s(r),s(n)):s(c(s(r),n))}if(u(r))return y;if(0>n.g)return f(n,p)?y:s(c(r,s(n)));for(i=y;0<=a(r,n);){t=Math.max(1,Math.floor(o(r)/o(n))),e=48>=(e=Math.ceil(Math.log(t)/Math.LN2))?1:Math.pow(2,e-48);for(var m=v(t),A=h(m,n);0>A.g||0<a(A,r);)A=h(m=v(t-=e),n);u(m)&&(m=w),i=i.add(m),r=r.add(s(A))}return i}function v(r){return 0<r?0x8000000000000000<=r?m:new e(r,r/4294967296):0>r?-0x8000000000000000>=r?p:s(new e(-r,-r/4294967296)):y}function l(r,n){return new e(r,n)}e.prototype.toString=function(r){if(2>(r=r||10)||36<r)throw Error("radix out of range: "+r);var n=this.g>>21;if(0==n||-1==n&&(0!=this.h||-2097152!=this.g))return n=o(this),10==r?""+n:n.toString(r);n=14-(r>>2);var t=Math.pow(r,n),i=l(t,t/4294967296);t=c(this,i),i=Math.abs(o(this.add(s(h(t,i)))));var e=10==r?""+i:i.toString(r);return e.length<n&&(e="0000000000000".substr(e.length-n)+e),i=o(t),(10==r?i:i.toString(r))+e},e.prototype.add=function(r){var n=this.g>>>16,t=65535&this.g,i=this.h>>>16,e=r.g>>>16,o=65535&r.g,u=r.h>>>16;return i=(u=((r=(65535&this.h)+(65535&r.h))>>>16)+(i+u))>>>16,l((65535&u)<<16|65535&r,(n=((i+=t+o)>>>16)+(n+e)&65535)<<16|65535&i)},e.prototype.and=function(r){return l(this.h&r.h,this.g&r.g)},e.prototype.or=function(r){return l(this.h|r.h,this.g|r.g)},e.prototype.xor=function(r){return l(this.h^r.h,this.g^r.g)};var y=l(0,0),w=l(1,0),b=l(-1,-1),m=l(4294967295,2147483647),p=l(0,2147483648);function A(r,n){if(this.j=128,this.m=t.Uint8Array?new Uint8Array(this.j):Array(this.j),this.s=this.l=0,this.i=[],this.u=r,this.B=[],this.A=j(n),this.o=!1,this.s=this.l=0,0<(n=(r=this.A).length)){for(var i=Array(n),e=0;e<n;e++)i[e]=r[e];r=i}else r=[];this.i=r,this.o=!1}i(A,(function(){this.j=-1}));for(var d=[],M=0;127>M;M++)d[M]=0;var E=function(r){return Array.prototype.concat.apply([],arguments)}([128],d);function S(n,t,i){if(i=void 0!==i?i:t.length,n.o)throw Error("this hasher needs to be reset");var e=n.l;if("string"==typeof t)for(var o=0;o<i;o++){var u=t.charCodeAt(o);if(255<u)throw Error("Characters must be in range [0,255]");n.m[e++]=u,e==n.j&&(g(n),e=0)}else{if("array"!=(o="object"!=(o=r(t))?o:t?Array.isArray(t)?"array":o:"null")&&("object"!=o||"number"!=typeof t.length))throw Error("message must be string or array");for(o=0;o<i;o++){if("number"!=typeof(u=t[o])||0>u||255<u||u!=(0|u))throw Error("message must be a byte array");n.m[e++]=u,e==n.j&&(g(n),e=0)}}n.l=e,n.s+=i}function g(r){for(var n=r.m,t=r.B,i=0;16>i;i++){var o=8*i;t[i]=new e(n[o+4]<<24|n[o+5]<<16|n[o+6]<<8|n[o+7],n[o]<<24|n[o+1]<<16|n[o+2]<<8|n[o+3])}for(i=16;80>i;i++){n=(o=t[i-15]).h,o=o.g;var u=t[i-2],f=u.h;u=u.g,t[i]=r.v(t[i-16],t[i-7],new e(n>>>1^o<<31^n>>>8^o<<24^n>>>7^o<<25,o>>>1^n<<31^o>>>8^n<<24^o>>>7),new e(f>>>19^u<<13^u>>>29^f<<3^f>>>6^u<<26,u>>>19^f<<13^f>>>29^u<<3^u>>>6))}n=r.i[0],o=r.i[1],f=r.i[2],u=r.i[3];var a=r.i[4],s=r.i[5],h=r.i[6],c=r.i[7];for(i=0;80>i;i++){var v=n.h,l=n.g;v=new e(v>>>28^l<<4^l>>>2^v<<30^l>>>7^v<<25,l>>>28^v<<4^v>>>2^l<<30^v>>>7^l<<25).add(new e(n.h&o.h|o.h&f.h|n.h&f.h,n.g&o.g|o.g&f.g|n.g&f.g)),l=a.h;var y=a.g,w=a.h,b=a.g;l=r.v(c,new e(l>>>14^y<<18^l>>>18^y<<14^y>>>9^l<<23,y>>>14^l<<18^y>>>18^l<<14^l>>>9^y<<23),new e(w&s.h|~w&h.h,b&s.g|~b&h.g),x[i],t[i]),c=h,h=s,s=a,a=u.add(l),u=f,f=o,o=n,n=l.add(v)}r.i[0]=r.i[0].add(n),r.i[1]=r.i[1].add(o),r.i[2]=r.i[2].add(f),r.i[3]=r.i[3].add(u),r.i[4]=r.i[4].add(a),r.i[5]=r.i[5].add(s),r.i[6]=r.i[6].add(h),r.i[7]=r.i[7].add(c)}function j(r){for(var n=[],t=0;t<r.length;t+=2)n.push(new e(r[t+1],r[t]));return n}A.prototype.v=function(r,n,t){for(var i=(2147483648^r.h)+(2147483648^n.h),o=r.g+n.g,u=arguments.length-1;2<=u;--u)i+=2147483648^arguments[u].h,o+=arguments[u].g;return 1&arguments.length&&(i+=2147483648),o+=arguments.length>>1,new e(i,o+=Math.floor(i/4294967296))};var x=j([1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591]);function U(){A.call(this,6,_)}i(U,A);var _=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428];function I(r){var n=new U;if(S(n,r),r=Uint8Array,n.o)throw Error("this hasher needs to be reset");var t=8*n.s;112>n.l?S(n,E,112-n.l):S(n,E,n.j-n.l+112);for(var i=127;112<=i;i--)n.m[i]=255&t,t/=256;g(n),t=0;var e=Array(8*n.u);for(i=0;i<n.u;i++){var o=n.i[i],u=o.g;o=o.h;for(var f=24;0<=f;f-=8)e[t++]=u>>f&255;for(f=24;0<=f;f-=8)e[t++]=o>>f&255}return n.o=!0,new r(e)}var O,z=["__AMP_SHA384_DIGEST"],C=n||t;z[0]in C||void 0===C.execScript||C.execScript("var "+z[0]);for(;z.length&&(O=z.shift());)z.length||void 0===I?C=C[O]&&C[O]!==Object.prototype[O]?C[O]:C[O]={}:C[O]=I;return n.__AMP_SHA384_DIGEST}.call(e,e),u=(Array.isArray,Object.prototype);function f(r,n,t,i,e,o,u,f,a,s,h){return r}function a(r,n){f(function(r,n){var t=r.__AMP_SERVICES&&r.__AMP_SERVICES[n];return!(!t||!t.ctor)}(r,n));var t=s(r)[n];return t.obj||(f(t.ctor),f(t.context),t.obj=new t.ctor(t.context),f(t.obj),t.context=null,t.resolve&&t.resolve(t.obj)),t.obj}function s(r){var n=r.__AMP_SERVICES;return n||(n=r.__AMP_SERVICES={}),n}u.hasOwnProperty,u.toString,self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null},self.__AMP_LOG,t="crypto-polyfill",i=function(){return o},function(r,n,t,i,e,o){var u=s(r),f=u[t];f||(f=u[t]={obj:null,promise:null,resolve:null,reject:null,context:null,ctor:null,sharedInstance:!1}),f.ctor||(f.ctor=i,f.context=n,f.sharedInstance=!1,f.resolve&&a(r,t))}(n=function(r){return r.__AMP_TOP||(r.__AMP_TOP=r)}(n=window),n,t,i)}()}});
//# sourceMappingURL=amp-crypto-polyfill-0.1.js.map