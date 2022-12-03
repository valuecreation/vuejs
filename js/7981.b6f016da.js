"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[7981],{87981:function(n,t,e){function r(n,t){for(var e=0;e<t.length;e++){const r=t[e];if("string"!=typeof r&&!Array.isArray(r))for(const t in r)if("default"!==t&&!(t in n)){const e=Object.getOwnPropertyDescriptor(r,t);e&&Object.defineProperty(n,t,e.get?e:{enumerable:!0,get:()=>r[t]})}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}e.r(t),e.d(t,{l:function(){return s}});var o,i,u,a={exports:{}};o=a,i=function(){function n(n){const t=n.locateFile,e={};var r=void 0!==r?r:{};const i=(()=>{let n;return{resolve:t=>n(t),promise:new Promise((t=>n=t))}})(),u=()=>i.promise;r.locateFile=t,r.onRuntimeInitialized=()=>{i.resolve(e)},e.Module=r,e.whenLoaded=u;var a,s={};for(a in r)r.hasOwnProperty(a)&&(s[a]=r[a]);var f,c,l,p,m,h="object"==typeof window,d="function"==typeof importScripts,y="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,g="";function v(n){return r.locateFile?r.locateFile(n,g):g+n}y?(g=d?require("path").dirname(g)+"/":__dirname+"/",f=function(n,t){return p||(p=require("fs")),m||(m=require("path")),n=m.normalize(n),p.readFileSync(n,t?null:"utf8")},l=function(n){var t=f(n,!0);return t.buffer||(t=new Uint8Array(t)),j(t.buffer),t},c=function(n,t,e){p||(p=require("fs")),m||(m=require("path")),n=m.normalize(n),p.readFile(n,(function(n,r){n?e(n):t(r.buffer)}))},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),o.exports=r,process.on("uncaughtException",(function(n){if(!(n instanceof Pn))throw n})),process.on("unhandledRejection",Q),r.inspect=function(){return"[Emscripten Module object]"}):(h||d)&&(d?g=self.location.href:"undefined"!=typeof document&&document.currentScript&&(g=document.currentScript.src),g=0!==g.indexOf("blob:")?g.substr(0,g.lastIndexOf("/")+1):"",f=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},d&&(l=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}),c=function(n,t,e){var r=new XMLHttpRequest;r.open("GET",n,!0),r.responseType="arraybuffer",r.onload=function(){200==r.status||0==r.status&&r.response?t(r.response):e()},r.onerror=e,r.send(null)});var w=r.print||console.log.bind(console),b=r.printErr||console.warn.bind(console);for(a in s)s.hasOwnProperty(a)&&(r[a]=s[a]);s=null,r.arguments&&r.arguments,r.thisProgram&&r.thisProgram,r.quit&&r.quit;var A,_,E=0,R=function(n){E=n},P=function(){return E};r.wasmBinary&&(A=r.wasmBinary),r.noExitRuntime,"object"!=typeof WebAssembly&&Q("no native wasm support detected");var S=!1;function j(n,t){n||Q("Assertion failed: "+t)}var T,I,x,H,M="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function C(n,t,e){for(var r=t+e,o=t;n[o]&&!(o>=r);)++o;if(o-t>16&&n.subarray&&M)return M.decode(n.subarray(t,o));for(var i="";t<o;){var u=n[t++];if(128&u){var a=63&n[t++];if(192!=(224&u)){var s=63&n[t++];if((u=224==(240&u)?(15&u)<<12|a<<6|s:(7&u)<<18|a<<12|s<<6|63&n[t++])<65536)i+=String.fromCharCode(u);else{var f=u-65536;i+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else i+=String.fromCharCode((31&u)<<6|a)}else i+=String.fromCharCode(u)}return i}function F(n,t){return n?C(I,n,t):""}function k(n,t){return n%t>0&&(n+=t-n%t),n}function q(n){T=n,r.HEAP8=new Int8Array(n),r.HEAP16=new Int16Array(n),r.HEAP32=x=new Int32Array(n),r.HEAPU8=I=new Uint8Array(n),r.HEAPU16=new Uint16Array(n),r.HEAPU32=new Uint32Array(n),r.HEAPF32=new Float32Array(n),r.HEAPF64=new Float64Array(n)}r.INITIAL_MEMORY;var O=[],W=[],U=[];function L(){if(r.preRun)for("function"==typeof r.preRun&&(r.preRun=[r.preRun]);r.preRun.length;)z(r.preRun.shift());on(O)}function B(){on(W)}function D(){if(r.postRun)for("function"==typeof r.postRun&&(r.postRun=[r.postRun]);r.postRun.length;)G(r.postRun.shift());on(U)}function z(n){O.unshift(n)}function N(n){W.unshift(n)}function G(n){U.unshift(n)}var X=0,Y=null;function J(n){X++,r.monitorRunDependencies&&r.monitorRunDependencies(X)}function K(n){if(X--,r.monitorRunDependencies&&r.monitorRunDependencies(X),0==X&&Y){var t=Y;Y=null,t()}}function Q(n){throw r.onAbort&&r.onAbort(n),b(n+=""),S=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(n)}r.preloadedImages={},r.preloadedAudios={};var V,Z="data:application/octet-stream;base64,";function $(n){return n.startsWith(Z)}function nn(n){return n.startsWith("file://")}function tn(n){try{if(n==V&&A)return new Uint8Array(A);if(l)return l(n);throw"both async and sync fetching of the wasm failed"}catch(b){Q(b)}}function en(){if(!A&&(h||d)){if("function"==typeof fetch&&!nn(V))return fetch(V,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+V+"'";return n.arrayBuffer()})).catch((function(){return tn(V)}));if(c)return new Promise((function(n,t){c(V,(function(t){n(new Uint8Array(t))}),t)}))}return Promise.resolve().then((function(){return tn(V)}))}function rn(){var n={a:hn};function t(n,t){var e=n.exports;r.asm=e,q((_=r.asm.m).buffer),H=r.asm.q,N(r.asm.n),K()}function e(n){t(n.instance)}function o(t){return en().then((function(t){return WebAssembly.instantiate(t,n)})).then(t,(function(n){b("failed to asynchronously prepare wasm: "+n),Q(n)}))}function i(){return A||"function"!=typeof WebAssembly.instantiateStreaming||$(V)||nn(V)||"function"!=typeof fetch?o(e):fetch(V,{credentials:"same-origin"}).then((function(t){return WebAssembly.instantiateStreaming(t,n).then(e,(function(n){return b("wasm streaming compile failed: "+n),b("falling back to ArrayBuffer instantiation"),o(e)}))}))}if(J(),r.instantiateWasm)try{return r.instantiateWasm(n,t)}catch(u){return b("Module.instantiateWasm callback failed with error: "+u),!1}return i(),{}}function on(n){for(;n.length>0;){var t=n.shift();if("function"!=typeof t){var e=t.func;"number"==typeof e?void 0===t.arg?H.get(e)():H.get(e)(t.arg):e(void 0===t.arg?null:t.arg)}else t(r)}}function un(){throw"longjmp"}function an(n,t,e){I.copyWithin(n,t,t+e)}function sn(n){try{return _.grow(n-T.byteLength+65535>>>16),q(_.buffer),1}catch(o){}}function fn(n){var t=I.length,e=2147483648;if((n>>>=0)>e)return!1;for(var r=1;r<=4;r*=2){var o=t*(1+.2/r);if(o=Math.min(o,n+100663296),sn(Math.min(e,k(Math.max(n,o),65536))))return!0}return!1}$(V="libtess.wasm")||(V=v(V));var cn={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=cn.buffers[n];0===t||10===t?((1===n?w:b)(C(e,0)),e.length=0):e.push(t)},varargs:void 0,get:function(){return cn.varargs+=4,x[cn.varargs-4>>2]},getStr:function(n){return F(n)},get64:function(n,t){return n}};function ln(n,t,e,r){for(var o=0,i=0;i<e;i++){for(var u=x[t+8*i>>2],a=x[t+(8*i+4)>>2],s=0;s<a;s++)cn.printChar(n,I[u+s]);o+=a}return x[r>>2]=o,0}function pn(){return P()}function mn(n){R(n)}var hn={h:un,l:an,g:fn,f:ln,b:pn,k:_n,d:An,j:En,i:Rn,e:bn,c:wn,a:mn};rn(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.n).apply(null,arguments)},r._malloc=function(){return(r._malloc=r.asm.o).apply(null,arguments)},r._free=function(){return(r._free=r.asm.p).apply(null,arguments)},r._triangulate=function(){return(r._triangulate=r.asm.r).apply(null,arguments)};var dn,yn=r.stackSave=function(){return(yn=r.stackSave=r.asm.s).apply(null,arguments)},gn=r.stackRestore=function(){return(gn=r.stackRestore=r.asm.t).apply(null,arguments)},vn=r._setThrew=function(){return(vn=r._setThrew=r.asm.u).apply(null,arguments)};function wn(n,t,e){var o=yn();try{H.get(n)(t,e)}catch(r){if(gn(o),r!==r+0&&"longjmp"!==r)throw r;vn(1,0)}}function bn(n,t){var r=yn();try{H.get(n)(t)}catch(e){if(gn(r),e!==e+0&&"longjmp"!==e)throw e;vn(1,0)}}function An(n,t){var r=yn();try{return H.get(n)(t)}catch(e){if(gn(r),e!==e+0&&"longjmp"!==e)throw e;vn(1,0)}}function _n(n){var e=yn();try{return H.get(n)()}catch(t){if(gn(e),t!==t+0&&"longjmp"!==t)throw t;vn(1,0)}}function En(n,t,e){var o=yn();try{return H.get(n)(t,e)}catch(r){if(gn(o),r!==r+0&&"longjmp"!==r)throw r;vn(1,0)}}function Rn(n,t,e,r){var o=yn();try{return H.get(n)(t,e,r)}catch(i){if(gn(o),i!==i+0&&"longjmp"!==i)throw i;vn(1,0)}}function Pn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Sn(n){function t(){dn||(dn=!0,r.calledRun=!0,S||(B(),r.onRuntimeInitialized&&r.onRuntimeInitialized(),D()))}X>0||(L(),X>0||(r.setStatus?(r.setStatus("Running..."),setTimeout((function(){setTimeout((function(){r.setStatus("")}),1),t()}),1)):t()))}if(Y=function n(){dn||Sn(),dn||(Y=n)},r.run=Sn,r.preInit)for("function"==typeof r.preInit&&(r.preInit=[r.preInit]);r.preInit.length>0;)r.preInit.pop()();Sn();let jn=null,Tn=null,In=null,xn=null;const Hn=e.Module,Mn=2,Cn=4e3;let Fn=0;const kn=(n,t,e)=>{jn||(jn=Hn._triangulate);let r=Hn.HEAPF32;const o=Hn.HEAP32.BYTES_PER_ELEMENT,i=2,u=r.BYTES_PER_ELEMENT;e>Fn&&(Fn=e,In&&(Hn._free(In),In=0),Tn&&(Hn._free(Tn),Tn=0)),In||(In=Hn._malloc(e*u)),xn||(xn=Hn._malloc(Cn*o));const a=e*Mn;Tn||(Tn=Hn._malloc(a*u)),r=Hn.HEAPF32,r.set(n,In/u),Hn.HEAP32.set(t,xn/o);const s=a/i,f=jn(In,xn,Math.min(t.length,Cn),i,Tn,s),c=f*i;r=Hn.HEAPF32;const l=r.slice(Tn/u,Tn/u+c),p={};return p.buffer=l,p.vertexCount=f,p};return e.triangulate=kn,e.whenLoaded()}return{load:n}},void 0!==(u=i())&&(o.exports=u);const s=r({__proto__:null,default:a.exports},[a.exports])}}]);
//# sourceMappingURL=7981.b6f016da.js.map