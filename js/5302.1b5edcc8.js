"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[5302],{34344:function(t,e,n){function i(){return[1,0,0,0,1,0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]}function s(t,e,n,i,r,s,o,c,u){return[t,e,n,i,r,s,o,c,u]}function o(t,e){return new Float64Array(t,e,9)}n.d(e,{a:function(){return o},c:function(){return i}});Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:r,fromValues:s,createView:o},Symbol.toStringTag,{value:"Module"}))},39100:function(t,e,n){function i(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}function s(t,e,n,i,r,s,o,c,u,a,h,f,l,d,_,m){return[t,e,n,i,r,s,o,c,u,a,h,f,l,d,_,m]}function o(t,e){return new Float64Array(t,e,16)}n.d(e,{I:function(){return c},a:function(){return o},b:function(){return r},c:function(){return i}});const c=i();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:r,fromValues:s,createView:o,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},61044:function(t,e,n){function i(){return[0,0,0,1]}function r(t){return[t[0],t[1],t[2],t[3]]}function s(t,e,n,i){return[t,e,n,i]}function o(t,e){return new Float64Array(t,e,4)}n.d(e,{I:function(){return c},a:function(){return i},b:function(){return r},c:function(){return o}});const c=i();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:r,fromValues:s,createView:o,IDENTITY:c},Symbol.toStringTag,{value:"Module"}))},42116:function(t,e,n){n.d(e,{a:function(){return O},c:function(){return m},g:function(){return E},h:function(){return g},j:function(){return S},m:function(){return Z}});n(39994);var i,r=n(13802),s=n(19431),o=n(61681),c=n(24455),u=n(6766),a=n(8909),h=n(88589),f=n(1983);!function(t){t[t.X=0]="X",t[t.Y=1]="Y",t[t.Z=2]="Z"}(i||(i={}));var l=n(97537),d=n(5700),_=n(28888);function m(){return(0,f.c)()}function g(t,e=m()){return(0,h.c)(e,t)}function p(t,e){return(0,f.f)(t[0],t[1],t[2],e)}function T(t){return t}function b(t){t[0]=t[1]=t[2]=t[3]=0}function M(t,e){return t[0]=t[1]=t[2]=0,t[3]=e,t}function O(t){return t[3]}function E(t){return t}function x(t,e,n,i){return(0,f.f)(t,e,n,i)}function R(t,e,n){return t!==n&&(0,u.c)(n,t),n[3]=t[3]+e,n}function N(t,e,n){return r.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t===n?n:g(t,n)}function A(t,e,n){if((0,o.Wi)(e))return!1;const{origin:i,direction:r}=e,s=P;s[0]=i[0]-t[0],s[1]=i[1]-t[1],s[2]=i[2]-t[2];const c=r[0]*r[0]+r[1]*r[1]+r[2]*r[2];if(0===c)return!1;const u=2*(r[0]*s[0]+r[1]*s[1]+r[2]*s[2]),a=u*u-4*c*(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]-t[3]*t[3]);if(a<0)return!1;const h=Math.sqrt(a);let f=(-u-h)/(2*c);const l=(-u+h)/(2*c);return(f<0||l<f&&l>0)&&(f=l),!(f<0)&&(n&&(n[0]=i[0]+r[0]*f,n[1]=i[1]+r[1]*f,n[2]=i[2]+r[2]*f),!0)}const P=(0,a.c)();function S(t,e){return A(t,e,null)}function y(t,e,n){if(A(t,e,n))return n;const i=F(t,e,_.WM.get());return(0,u.a)(n,e.origin,(0,u.g)(_.WM.get(),e.direction,(0,u.i)(e.origin,i)/(0,u.l)(e.direction))),n}function F(t,e,n){const i=_.WM.get(),r=_.MP.get();(0,u.f)(i,e.origin,e.direction);const s=O(t);(0,u.f)(n,i,e.origin),(0,u.g)(n,n,1/(0,u.l)(n)*s);const o=w(t,e.origin),a=(0,d.EU)(e.origin,n);return(0,c.d)(r,a+o,i),(0,u.m)(n,n,r),n}function v(t,e,n){return A(t,e,n)?n:((0,l.JI)(e,E(t),n),I(t,n,n))}function I(t,e,n){const i=(0,u.b)(_.WM.get(),e,E(t)),r=(0,u.g)(_.WM.get(),i,t[3]/(0,u.l)(i));return(0,u.a)(n,r,E(t))}function j(t,e){const n=(0,u.b)(_.WM.get(),e,E(t)),i=(0,u.p)(n),r=t[3]*t[3];return Math.sqrt(Math.abs(i-r))}function w(t,e){const n=(0,u.b)(_.WM.get(),e,E(t)),i=(0,u.l)(n),r=O(t),o=r+Math.abs(r-i);return(0,s.ZF)(r/o)}const B=(0,a.c)();function z(t,e,n,r){const o=(0,u.b)(B,e,E(t));switch(n){case i.X:{const t=(0,s.jE)(o,B)[2];return(0,u.s)(r,-Math.sin(t),Math.cos(t),0)}case i.Y:{const t=(0,s.jE)(o,B),e=t[1],n=t[2],i=Math.sin(e);return(0,u.s)(r,-i*Math.cos(n),-i*Math.sin(n),Math.cos(e))}case i.Z:return(0,u.n)(r,o);default:return}}function L(t,e){const n=(0,u.b)(G,e,E(t));return(0,u.l)(n)-t[3]}function C(t,e,n,r){const s=L(t,e),o=z(t,e,i.Z,G),c=(0,u.g)(G,o,n-s);return(0,u.a)(r,e,c)}function Z(t,e){const n=(0,u.d)(E(t),e),i=O(t);return n<=i*i}const G=(0,a.c)(),D=m();Object.freeze(Object.defineProperty({__proto__:null,create:m,copy:g,fromCenterAndRadius:p,wrap:T,clear:b,fromRadius:M,getRadius:O,getCenter:E,fromValues:x,elevate:R,setExtent:N,intersectRay:A,intersectsRay:S,intersectRayClosestSilhouette:y,closestPointOnSilhouette:F,closestPoint:v,projectPoint:I,distanceToSilhouette:j,angleToSilhouette:w,axisAt:z,altitudeAt:L,setAltitudeAt:C,containsPoint:Z,tmpSphere:D},Symbol.toStringTag,{value:"Module"}))},19480:function(t,e,n){n.d(e,{x:function(){return r}});var i=n(66581);class r{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*s);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,s));t++)this._items.push(this._allocator())}}const s=1024},61107:function(t,e,n){n.d(e,{N:function(){return i}});const i={convertToGEGeometry:r,exportPoint:o,exportPolygon:u,exportPolyline:h,exportMultipoint:l,exportExtent:_};function r(t,e){return null==e?null:t.convertJSONToGeometry(e)}class s{constructor(t,e,n){this.x=t,this.y=e,this.spatialReference=n,this.z=void 0,this.m=void 0}}function o(t,e,n){const i=new s(t.getPointX(e),t.getPointY(e),n),r=t.hasZ(e),o=t.hasM(e);return r&&(i.z=t.getPointZ(e)),o&&(i.m=t.getPointM(e)),i}class c{constructor(t,e,n,i){this.rings=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}function u(t,e,n){return new c(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))}class a{constructor(t,e,n,i){this.paths=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}function h(t,e,n){return new a(t.exportPaths(e),n,t.hasZ(e),t.hasM(e))}class f{constructor(t,e,n,i){this.points=t,this.spatialReference=e,this.hasZ=void 0,this.hasM=void 0,n&&(this.hasZ=n),i&&(this.hasM=i)}}function l(t,e,n){return new f(t.exportPoints(e),n,t.hasZ(e),t.hasM(e))}class d{constructor(t,e,n,i,r){this.xmin=t,this.ymin=e,this.xmax=n,this.ymax=i,this.spatialReference=r,this.zmin=void 0,this.zmax=void 0,this.mmin=void 0,this.mmax=void 0}}function _(t,e,n){const i=t.hasZ(e),r=t.hasM(e),s=new d(t.getXMin(e),t.getYMin(e),t.getXMax(e),t.getYMax(e),n);if(i){const n=t.getZExtent(e);s.zmin=n.vmin,s.zmax=n.vmax}if(r){const n=t.getMExtent(e);s.mmin=n.vmin,s.mmax=n.vmax}return s}},56215:function(t,e,n){n.d(e,{Ue:function(){return u},nF:function(){return h},zk:function(){return a}});var i=n(19431),r=n(19480),s=n(6766),o=n(8909),c=n(28888);function u(t){return t?{origin:(0,o.a)(t.origin),vector:(0,o.a)(t.vector)}:{origin:(0,o.c)(),vector:(0,o.c)()}}function a(t,e,n=u()){return(0,s.c)(n.origin,t),(0,s.b)(n.vector,e,t),n}function h(t,e,n){return f(t,e,0,1,n)}function f(t,e,n,r,o){const{vector:u,origin:a}=t,h=(0,s.b)(c.WM.get(),e,a),f=(0,s.e)(u,h)/(0,s.p)(u);return(0,s.g)(o,u,(0,i.uZ)(f,n,r)),(0,s.a)(o,o,t.origin)}(0,o.c)(),(0,o.c)(),new r.x((()=>u()))},82217:function(t,e,n){n(19431),n(6766);var i=n(8909);n(42116),n(5700),n(28888);(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)();(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)(),(0,i.c)();var r;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(r||(r={}));r.INFINITE_MIN,r.INFINITE_MAX,r.INFINITE_MAX},97537:function(t,e,n){n.d(e,{JI:function(){return a},Ue:function(){return o},re:function(){return u}});n(7753);var i=n(19480),r=n(6766),s=n(8909);n(28888);function o(t){return t?c((0,s.a)(t.origin),(0,s.a)(t.direction)):c((0,s.c)(),(0,s.c)())}function c(t,e){return{origin:t,direction:e}}function u(t,e){const n=h.get();return n.origin=t,n.direction=e,n}function a(t,e,n){const i=(0,r.e)(t.direction,(0,r.b)(n,e,t.origin));return(0,r.a)(n,t.origin,(0,r.g)(n,t.direction,i)),n}const h=new i.x((()=>o()))},5700:function(t,e,n){n.d(e,{EU:function(){return o}});var i=n(19431),r=n(6766),s=n(8909);function o(t,e){const n=(0,r.e)(t,e)/((0,r.l)(t)*(0,r.l)(e));return-(0,i.ZF)(n)}(0,s.c)(),(0,s.c)()},28888:function(t,e,n){n.d(e,{MP:function(){return _},WM:function(){return d}});var i=n(4745),r=n(66581),s=n(34344),o=n(39100),c=n(61044),u=n(69666),a=n(8909),h=n(1983);class f{constructor(t,e,n){this._itemByteSize=t,this._itemCreate=e,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(n/this._itemByteSize)}get(){0===this._itemsPtr&&(0,r.Y)((()=>this._reset()));const t=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=t;){const t=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let e=0;e<this._itemsPerBuffer;++e)this._items.push(this._itemCreate(t,e*this._itemByteSize));this._buffers.push(t)}return this._items[this._itemsPtr++]}_reset(){const t=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>t;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(t=l){return new f(16,u.c,t)}static createVec3f64(t=l){return new f(24,a.b,t)}static createVec4f64(t=l){return new f(32,h.a,t)}static createMat3f64(t=l){return new f(72,s.a,t)}static createMat4f64(t=l){return new f(128,o.a,t)}static createQuatf64(t=l){return new f(32,c.c,t)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const l=4*i.Y8.KILOBYTES,d=(f.createVec2f64(),f.createVec3f64()),_=(f.createVec4f64(),f.createMat3f64(),f.createMat4f64());f.createQuatf64()},66069:function(t,e,n){n.d(e,{_W:function(){return l},iV:function(){return m},oj:function(){return T}});var i=n(61681),r=n(4757),s=n(61107),o=n(35925),c=n(39536);const u=[0,0];function a(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,u),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,u),[n.xmax,n.ymax]=t(e.xmax,e.ymax,u),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:h(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:h(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:f(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:null}function h(t,e){const n=[];for(const i of t)n.push(f(i,e));return n}function f(t,e){const n=[];for(const i of t){const t=e(i[0],i[1],[0,0]);n.push(t),i.length>2&&t.push(i[2]),i.length>3&&t.push(i[3])}return n}async function l(t,e){if(!t||!e)return;const n=Array.isArray(t)?t.map((t=>(0,i.pC)(t.geometry)?t.geometry.spatialReference:null)).filter(i.pC):[t];await(0,r.iQ)(n.map((t=>({source:t,dest:e}))))}const d=a.bind(null,c.hG),_=a.bind(null,c.R6);function m(t,e,n,i){if(!t)return t;if(n||(n=e,e=t.spatialReference),!(0,o.JY)(e)||!(0,o.JY)(n)||(0,o.fS)(e,n))return t;if((0,c.Q8)(e,n)){const e=(0,o.sS)(n)?d(t):_(t);return e.spatialReference=n,e}return(0,r.oj)(s.N,[t],e,n,null,i)[0]}class g{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,n){if(!t||!t.length||!e||!n||(0,o.fS)(e,n))return t;const i={geometries:t,inSpatialReference:e,outSpatialReference:n,resolve:null};return this._jobs.push(i),new Promise((t=>{i.resolve=t,null===this._timer&&(this._timer=setTimeout(this._process,10))}))}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:i,resolve:u}=t;(0,c.Q8)(n,i)?(0,o.sS)(i)?u(e.map(d)):u(e.map(_)):u((0,r.oj)(s.N,e,n,i,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const p=new g;function T(t,e,n){return p.push(t,e,n)}},15095:function(t,e,n){n.d(e,{hu:function(){return s},yK:function(){return o}});n(69666),n(88589);var i=n(1983);(0,i.c)();class r{constructor(t){this.message=t}toString(){return`AssertException: ${this.message}`}}function s(t,e){if(!t)throw e=e||"assert",console.log(new Error(e).stack),new r(e)}function o(t,e,n,i){let r,s=(n[0]-t[0])/e[0],o=(i[0]-t[0])/e[0];s>o&&(r=s,s=o,o=r);let c=(n[1]-t[1])/e[1],u=(i[1]-t[1])/e[1];if(c>u&&(r=c,c=u,u=r),s>u||c>o)return!1;c>s&&(s=c),u<o&&(o=u);let a=(n[2]-t[2])/e[2],h=(i[2]-t[2])/e[2];return a>h&&(r=a,a=h,h=r),!(s>h||a>o)&&(h<o&&(o=h),!(o<0))}},54095:function(t,e,n){n.r(e),n.d(e,{default:function(){return it}});var i=n(36663),r=n(61681),s=n(78668),o=(n(13802),n(7283),n(7753),n(70375),n(39994),n(40266)),c=n(6766),u=n(8909),a=n(56215),h=n(42116),f=n(95775),l=n(34596),d=n(17993),_=n(19480),m=(n(24455),n(88589),n(1983)),g=n(97537);n(28888);function p(t){return t?{ray:(0,g.Ue)(t.ray),c0:t.c0,c1:t.c1}:{ray:(0,g.Ue)(),c0:0,c1:Number.MAX_VALUE}}new _.x((()=>p()));var T,b;n(82217);function M(){return[(0,u.c)(),(0,u.c)(),(0,u.c)(),(0,u.c)(),(0,u.c)(),(0,u.c)(),(0,u.c)(),(0,u.c)()]}function O(t,e){for(let n=0;n<E.NUM;n++){const i=t[n];if(i[0]*e[0]+i[1]*e[1]+i[2]*e[2]+i[3]>=e[3])return!1}return!0}!function(t){t[t.LEFT=0]="LEFT",t[t.RIGHT=1]="RIGHT",t[t.BOTTOM=2]="BOTTOM",t[t.TOP=3]="TOP",t[t.NEAR=4]="NEAR",t[t.FAR=5]="FAR"}(T||(T={})),function(t){t[t.NEAR_BOTTOM_LEFT=0]="NEAR_BOTTOM_LEFT",t[t.NEAR_BOTTOM_RIGHT=1]="NEAR_BOTTOM_RIGHT",t[t.NEAR_TOP_RIGHT=2]="NEAR_TOP_RIGHT",t[t.NEAR_TOP_LEFT=3]="NEAR_TOP_LEFT",t[t.FAR_BOTTOM_LEFT=4]="FAR_BOTTOM_LEFT",t[t.FAR_BOTTOM_RIGHT=5]="FAR_BOTTOM_RIGHT",t[t.FAR_TOP_RIGHT=6]="FAR_TOP_RIGHT",t[t.FAR_TOP_LEFT=7]="FAR_TOP_LEFT"}(b||(b={}));b.FAR_BOTTOM_RIGHT,b.NEAR_BOTTOM_RIGHT,b.NEAR_BOTTOM_LEFT,b.FAR_BOTTOM_LEFT,b.NEAR_BOTTOM_LEFT,b.NEAR_BOTTOM_RIGHT,b.NEAR_TOP_RIGHT,b.NEAR_TOP_LEFT,b.FAR_BOTTOM_RIGHT,b.FAR_BOTTOM_LEFT,b.FAR_TOP_LEFT,b.FAR_TOP_RIGHT,b.NEAR_BOTTOM_RIGHT,b.FAR_BOTTOM_RIGHT,b.FAR_TOP_RIGHT,b.NEAR_TOP_RIGHT,b.FAR_BOTTOM_LEFT,b.NEAR_BOTTOM_LEFT,b.NEAR_TOP_LEFT,b.FAR_TOP_LEFT,b.FAR_TOP_LEFT,b.NEAR_TOP_LEFT,b.NEAR_TOP_RIGHT,b.FAR_TOP_RIGHT;var E,x;!function(t){t[t.NUM=6]="NUM"}(E||(E={})),function(t){t[t.NUM=8]="NUM"}(x||(x={}));(0,m.f)(-1,-1,-1,1),(0,m.f)(1,-1,-1,1),(0,m.f)(1,1,-1,1),(0,m.f)(-1,1,-1,1),(0,m.f)(-1,-1,1,1),(0,m.f)(1,-1,1,1),(0,m.f)(1,1,1,1),(0,m.f)(-1,1,1,1),new _.x(p),M();var R=n(15095);class N{constructor(t,e){this._objectToBoundingSphere=t,this._maximumObjectsPerNode=10,this._maximumDepth=20,this._degenerateObjects=new Set,this._root=new A,this._objectCount=0,e&&(void 0!==e.maximumObjectsPerNode&&(this._maximumObjectsPerNode=e.maximumObjectsPerNode),void 0!==e.maximumDepth&&(this._maximumDepth=e.maximumDepth))}get bounds(){return this._root.bounds}get halfSize(){return this._root.halfSize}get root(){return this._root.node}get maximumObjectsPerNode(){return this._maximumObjectsPerNode}get maximumDepth(){return this._maximumDepth}get objectCount(){return this._objectCount}destroy(){this._degenerateObjects.clear(),A.clearPool(),C[0]=null,W.prune(),K.prune()}add(t,e=t.length){this._objectCount+=e,this._grow(t,e);const n=A.acquire();for(let i=0;i<e;i++){const e=t[i];this._isDegenerate(e)?this._degenerateObjects.add(e):(n.init(this._root),this._add(e,n))}A.release(n)}remove(t,e=null){this._objectCount-=t.length;const n=A.acquire();for(const i of t){const t=(0,r.pC)(e)?e:(0,h.h)(this._objectToBoundingSphere(i),k);w(t[3])?(n.init(this._root),this._remove(i,t,n)):this._degenerateObjects.delete(i)}A.release(n),this._shrink()}update(t,e){if(!w(e[3])&&this._isDegenerate(t))return;const n=Z(t);this.remove(n,e),this.add(n)}forEachAlongRay(t,e,n){const i=(0,g.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNode(i,t))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObject(i,t)&&n(t)})),!0}))}forEachAlongRayWithVerticalOffset(t,e,n,i){const r=(0,g.re)(t,e);this._forEachNode(this._root,(t=>{if(!this._intersectsNodeWithOffset(r,t,i))return!1;const e=t.node;return e.terminals.forAll((t=>{this._intersectsObjectWithOffset(r,t,i)&&n(t)})),null!==e.residents&&e.residents.forAll((t=>{this._intersectsObjectWithOffset(r,t,i)&&n(t)})),!0}))}forEach(t){this._forEachNode(this._root,(e=>{const n=e.node;return n.terminals.forAll(t),null!==n.residents&&n.residents.forAll(t),!0})),this._degenerateObjects.forEach(t)}forEachDegenerateObject(t){this._degenerateObjects.forEach(t)}findClosest(t,e,n,i=(()=>!0),r=1/0){let s=1/0,o=1/0,u=null;const a=I(t,e),f=c=>{if(--r,!i(c))return;const a=this._objectToBoundingSphere(c);if(!O(n,a))return;const f=j(t,e,(0,h.g)(a)),l=f-a[3],d=f+a[3];l<s&&(s=l,o=d,u=c)};return this._forEachNodeDepthOrdered(this._root,(i=>{if(r<=0||!O(n,i.bounds))return!1;if((0,c.g)(D,a,i.halfSize),(0,c.a)(D,D,i.bounds),j(t,e,D)>o)return!1;const s=i.node;return s.terminals.forAll((t=>f(t))),null!==s.residents&&s.residents.forAll((t=>f(t))),!0}),t,e),u}forEachInDepthRange(t,e,n,i,r,s,o){let u=-1/0,a=1/0;const f={setRange:t=>{n===N.DepthOrder.FRONT_TO_BACK?(u=Math.max(u,t.near),a=Math.min(a,t.far)):(u=Math.max(u,-t.far),a=Math.min(a,-t.near))}};f.setRange(i);const l=j(e,n,t),d=I(e,n),_=I(e,-n),m=t=>{if(!o(t))return;const i=this._objectToBoundingSphere(t),c=(0,h.g)(i),d=j(e,n,c)-l,_=d-i[3],m=d+i[3];_>a||m<u||!O(s,i)||r(t,f)};this._forEachNodeDepthOrdered(this._root,(t=>{if(!O(s,t.bounds))return!1;if((0,c.g)(D,d,t.halfSize),(0,c.a)(D,D,t.bounds),j(e,n,D)-l>a)return!1;if((0,c.g)(D,_,t.halfSize),(0,c.a)(D,D,t.bounds),j(e,n,D)-l<u)return!1;const i=t.node;return i.terminals.forAll((t=>m(t))),null!==i.residents&&i.residents.forAll((t=>m(t))),!0}),e,n)}forEachNode(t){this._forEachNode(this._root,(e=>t(e.node,e.bounds,e.halfSize)))}forEachNeighbor(t,e){const n=(0,h.a)(e),i=(0,h.g)(e),r=e=>{const r=this._objectToBoundingSphere(e),s=(0,h.a)(r),o=n+s;return!((0,c.d)((0,h.g)(r),i)-o*o<=0)||t(e)};let s=!0;const o=t=>{s&&(s=r(t))};this._forEachNode(this._root,(t=>{const e=(0,h.a)(t.bounds),r=n+e;if((0,c.d)((0,h.g)(t.bounds),i)-r*r>0)return!1;const u=t.node;return u.terminals.forAll(o),s&&null!==u.residents&&u.residents.forAll(o),s})),s&&this.forEachDegenerateObject(o)}_intersectsNode(t,e){return y(e.bounds,2*-e.halfSize,V),y(e.bounds,2*e.halfSize,H),(0,R.yK)(t.origin,t.direction,V,H)}_intersectsNodeWithOffset(t,e,n){return y(e.bounds,2*-e.halfSize,V),y(e.bounds,2*e.halfSize,H),n.applyToMinMax(V,H),(0,R.yK)(t.origin,t.direction,V,H)}_intersectsObject(t,e){const n=this._objectToBoundingSphere(e);return!(n[3]>0)||(0,h.j)(n,t)}_intersectsObjectWithOffset(t,e,n){const i=this._objectToBoundingSphere(e);return!(i[3]>0)||(0,h.j)(n.applyToBoundingSphere(i),t)}_forEachNode(t,e){let n=A.acquire().init(t);const i=[n];for(;0!==i.length;){if(n=i.pop(),e(n)&&!n.isLeaf())for(let t=0;t<n.node.children.length;t++)n.node.children[t]&&i.push(A.acquire().init(n).advance(t));A.release(n)}}_forEachNodeDepthOrdered(t,e,n,i=N.DepthOrder.FRONT_TO_BACK){let r=A.acquire().init(t);const s=[r];for(v(n,i,J);0!==s.length;){if(r=s.pop(),e(r)&&!r.isLeaf())for(let t=7;t>=0;--t){const e=J[t];r.node.children[e]&&s.push(A.acquire().init(r).advance(e))}A.release(r)}}_remove(t,e,n){W.clear();const i=n.advanceTo(e,((t,e)=>{W.push(t.node),W.push(e)}))?n.node.terminals:n.node.residents;if(i.removeUnordered(t),0===i.length)for(let r=W.length-2;r>=0;r-=2){const t=W.data[r],e=W.data[r+1];if(!this._purge(t,e))break}}_nodeIsEmpty(t){if(0!==t.terminals.length)return!1;if(null!==t.residents)return 0===t.residents.length;for(let e=0;e<t.children.length;e++)if(t.children[e])return!1;return!0}_purge(t,e){return e>=0&&(t.children[e]=null),!!this._nodeIsEmpty(t)&&(null===t.residents&&(t.residents=new d.Z({shrink:!0})),!0)}_add(t,e){e.advanceTo(this._objectToBoundingSphere(t))?e.node.terminals.push(t):(e.node.residents.push(t),e.node.residents.length>this._maximumObjectsPerNode&&e.depth<this._maximumDepth&&this._split(e))}_split(t){const e=t.node.residents;t.node.residents=null;for(let n=0;n<e.length;n++){const i=A.acquire().init(t);this._add(e.getItemAt(n),i),A.release(i)}}_grow(t,e){if(0!==e&&(F(t,e,(t=>this._objectToBoundingSphere(t)),q),w(q[3])&&!this._fitsInsideTree(q)))if(this._nodeIsEmpty(this._root.node))(0,h.h)(q,this._root.bounds),this._root.halfSize=1.25*q[3];else{const t=this._rootBoundsForRootAsSubNode(q);this._placingRootViolatesMaxDepth(t)?this._rebuildTree(q,t):this._growRootAsSubNode(t),A.release(t)}}_rebuildTree(t,e){(0,c.c)(U,e.bounds),U[3]=e.halfSize,F([t,U],2,(t=>t),Y);const n=A.acquire().init(this._root);this._root.initFrom(null,Y,1.25*Y[3]),this._forEachNode(n,(t=>(this.add(t.node.terminals.data,t.node.terminals.length),null!==t.node.residents&&this.add(t.node.residents.data,t.node.residents.length),!0))),A.release(n)}_placingRootViolatesMaxDepth(t){const e=Math.log(t.halfSize/this._root.halfSize)*Math.LOG2E;let n=0;return this._forEachNode(this._root,(t=>(n=Math.max(n,t.depth),n+e<=this._maximumDepth))),n+e>this._maximumDepth}_rootBoundsForRootAsSubNode(t){const e=t[3],n=t;let i=-1/0;const r=this._root.bounds,s=this._root.halfSize;for(let o=0;o<3;o++){const t=r[o]-s-(n[o]-e),c=n[o]+e-(r[o]+s),u=Math.max(0,Math.ceil(t/(2*s))),a=Math.max(0,Math.ceil(c/(2*s)))+1,h=2**Math.ceil(Math.log(u+a)*Math.LOG2E);i=Math.max(i,h),X[o].min=u,X[o].max=a}for(let o=0;o<3;o++){let t=X[o].min,e=X[o].max;const n=(i-(t+e))/2;t+=Math.ceil(n),e+=Math.floor(n);const c=r[o]-s-t*s*2;G[o]=c+(e+t)*s}return G[3]=i*s*L,A.acquire().initFrom(null,G,i*s,0)}_growRootAsSubNode(t){const e=this._root.node;(0,c.c)(q,this._root.bounds),q[3]=this._root.halfSize,this._root.init(t),t.advanceTo(q,null,!0),t.node.children=e.children,t.node.residents=e.residents,t.node.terminals=e.terminals}_shrink(){for(;;){const t=this._findShrinkIndex();if(-1===t)break;this._root.advance(t),this._root.depth=0}}_findShrinkIndex(){if(0!==this._root.node.terminals.length||this._root.isLeaf())return-1;let t=null;const e=this._root.node.children;let n=0,i=0;for(;i<e.length&&null==t;)n=i++,t=e[n];for(;i<e.length;)if(e[i++])return-1;return n}_isDegenerate(t){return!w(this._objectToBoundingSphere(t)[3])}_fitsInsideTree(t){const e=this._root.bounds,n=this._root.halfSize;return t[3]<=n&&t[0]>=e[0]-n&&t[0]<=e[0]+n&&t[1]>=e[1]-n&&t[1]<=e[1]+n&&t[2]>=e[2]-n&&t[2]<=e[2]+n}}class A{constructor(){this.bounds=(0,h.c)(),this.halfSize=0,this.initFrom(null,null,0,0)}init(t){return this.initFrom(t.node,t.bounds,t.halfSize,t.depth)}initFrom(t,e,n,i=this.depth){return this.node=(0,r.pC)(t)?t:A.createEmptyNode(),(0,r.pC)(e)&&(0,h.h)(e,this.bounds),this.halfSize=n,this.depth=i,this}advance(t){let e=this.node.children[t];e||(e=A.createEmptyNode(),this.node.children[t]=e),this.node=e,this.halfSize/=2,this.depth++;const n=B[t];return this.bounds[0]+=n[0]*this.halfSize,this.bounds[1]+=n[1]*this.halfSize,this.bounds[2]+=n[2]*this.halfSize,this.bounds[3]=this.halfSize*L,this}advanceTo(t,e,n=!1){for(;;){if(this.isTerminalFor(t))return e&&e(this,-1),!0;if(this.isLeaf()){if(!n)return e&&e(this,-1),!1;this.node.residents=null}const i=this._childIndex(t);e&&e(this,i),this.advance(i)}}isLeaf(){return null!=this.node.residents}isTerminalFor(t){return t[3]>this.halfSize/2}_childIndex(t){const e=this.bounds;return(e[0]<t[0]?1:0)+(e[1]<t[1]?2:0)+(e[2]<t[2]?4:0)}static createEmptyNode(){return{children:[null,null,null,null,null,null,null,null],terminals:new d.Z({shrink:!0}),residents:new d.Z({shrink:!0})}}static acquire(){return A._pool.acquire()}static release(t){A._pool.release(t)}static clearPool(){A._pool.prune()}}function P(t,e){t[0]=Math.min(t[0],e[0]-e[3]),t[1]=Math.min(t[1],e[1]-e[3]),t[2]=Math.min(t[2],e[2]-e[3])}function S(t,e){t[0]=Math.max(t[0],e[0]+e[3]),t[1]=Math.max(t[1],e[1]+e[3]),t[2]=Math.max(t[2],e[2]+e[3])}function y(t,e,n){n[0]=t[0]+e,n[1]=t[1]+e,n[2]=t[2]+e}function F(t,e,n,i){if(1===e){const e=n(t[0]);(0,h.h)(e,i)}else{V[0]=1/0,V[1]=1/0,V[2]=1/0,H[0]=-1/0,H[1]=-1/0,H[2]=-1/0;for(let i=0;i<e;i++){const e=n(t[i]);w(e[3])&&(P(V,e),S(H,e))}(0,c.h)(i,V,H,.5),i[3]=Math.max(H[0]-V[0],H[1]-V[1],H[2]-V[2])/2}}function v(t,e,n){if(!K.length)for(let i=0;i<8;++i)K.push({index:0,distance:0});for(let i=0;i<8;++i){const n=B[i];K.data[i].index=i,K.data[i].distance=j(t,e,n)}K.sort(((t,e)=>t.distance-e.distance));for(let i=0;i<8;++i)n[i]=K.data[i].index}function I(t,e){let n,i=1/0;for(let r=0;r<8;++r){const s=j(t,e,z[r]);s<i&&(i=s,n=z[r])}return n}function j(t,e,n){return e*(t[0]*n[0]+t[1]*n[1]+t[2]*n[2])}function w(t){return!isNaN(t)&&t!==-1/0&&t!==1/0&&t>0}A._pool=new l.Z(A),function(t){var e;(e=t.DepthOrder||(t.DepthOrder={}))[e.FRONT_TO_BACK=1]="FRONT_TO_BACK",e[e.BACK_TO_FRONT=-1]="BACK_TO_FRONT"}(N||(N={}));const B=[(0,u.f)(-1,-1,-1),(0,u.f)(1,-1,-1),(0,u.f)(-1,1,-1),(0,u.f)(1,1,-1),(0,u.f)(-1,-1,1),(0,u.f)(1,-1,1),(0,u.f)(-1,1,1),(0,u.f)(1,1,1)],z=[(0,u.f)(-1,-1,-1),(0,u.f)(-1,-1,1),(0,u.f)(-1,1,-1),(0,u.f)(-1,1,1),(0,u.f)(1,-1,-1),(0,u.f)(1,-1,1),(0,u.f)(1,1,-1),(0,u.f)(1,1,1)],L=Math.sqrt(3),C=[null];function Z(t){return C[0]=t,C}const G=(0,h.c)(),D=(0,u.c)(),V=(0,u.c)(),H=(0,u.c)(),W=new d.Z,k=(0,h.c)(),q=(0,h.c)(),U=(0,h.c)(),Y=(0,h.c)(),X=[{min:0,max:0},{min:0,max:0},{min:0,max:0}],K=new d.Z,J=[0,0,0,0,0,0,0,0],Q=N;var $=n(12744);const tt=1e3;function et(t,e,n){const i=(0,h.c)(),r=(0,h.g)(i);return(0,c.z)(r,r,t,.5),(0,c.z)(r,r,e,.5),i[3]=(0,c.i)(r,t),(0,c.a)(r,r,n),i}let nt=class{constructor(){this._idToComponent=new Map,this._components=new Q((t=>t.bounds)),this._edges=new Q((t=>t.bounds)),this._tmpLineSegment=(0,a.Ue)(),this._tmpP1=(0,u.c)(),this._tmpP2=(0,u.c)(),this._tmpP3=(0,u.c)(),this.remoteClient=null}async fetchCandidates(t,e){await Promise.resolve(),(0,s.k_)(e),await this._ensureEdgeLocations(t,e);const n=[];return this._edges.forEachNeighbor((e=>(this._addCandidates(t,e,n),n.length<tt)),t.bounds),{result:{candidates:n}}}async _ensureEdgeLocations(t,e){const n=[];if(this._components.forEachNeighbor((t=>{if((0,r.Wi)(t.info)){const{id:e,uid:i}=t;n.push({id:e,uid:i})}return!0}),t.bounds),!n.length)return;const i={components:n},s=await this.remoteClient.invoke("fetchAllEdgeLocations",i,(0,r.Pt)(e,{}));for(const r of s.components)this._setFetchEdgeLocations(r)}async add(t){const e=new rt(t.id,t.bounds);return this._idToComponent.set(e.id,e),this._components.add([e]),{result:{}}}async remove(t){const e=this._idToComponent.get(t.id);if(e){const t=[];this._edges.forEachNeighbor((n=>(n.component===e&&t.push(n),!0)),e.bounds),this._edges.remove(t),this._components.remove([e]),this._idToComponent.delete(e.id)}return{result:{}}}_setFetchEdgeLocations(t){const e=this._idToComponent.get(t.id);if((0,r.Wi)(e)||t.uid!==e.uid)return;const n=$.n_.createView(t.locations),i=new Array(n.count),s=(0,u.c)(),o=(0,u.c)();for(let r=0;r<n.count;r++){n.position0.getVec(r,s),n.position1.getVec(r,o);const c=et(s,o,t.origin),u=new st(e,r,c);i[r]=u}this._edges.add(i);const{objectIds:c,origin:a}=t;e.info={locations:n,objectIds:c,origin:a}}_addCandidates(t,e,n){const{locations:i,origin:r,objectIds:s}=e.component.info,o=i.position0.getVec(e.index,this._tmpP1),u=i.position1.getVec(e.index,this._tmpP2);(0,c.a)(o,o,r),(0,c.a)(u,u,r);const a=s[i.componentIndex.get(e.index)];this._addEdgeCandidate(t,a,o,u,n),this._addVertexCandidate(t,a,o,n),this._addVertexCandidate(t,a,u,n)}_addEdgeCandidate(t,e,n,i,r){if(!(t.types&f.r.EDGE))return;const s=(0,h.g)(t.bounds),o=(0,a.zk)(n,i,this._tmpLineSegment),l=(0,a.nF)(o,s,this._tmpP3);if(!(0,h.m)(t.bounds,l))return null;r.push({type:"edge",objectId:e,target:(0,u.a)(l),distance:(0,c.i)(s,l),start:(0,u.a)(n),end:(0,u.a)(i)})}_addVertexCandidate(t,e,n,i){if(!(t.types&f.r.VERTEX))return;const r=(0,h.g)(t.bounds);if(!(0,h.m)(t.bounds,n))return null;i.push({type:"vertex",objectId:e,target:(0,u.a)(n),distance:(0,c.i)(r,n)})}};nt=(0,i._)([(0,o.j)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],nt);const it=nt;class rt{constructor(t,e){this.id=t,this.bounds=e,this.info=null,this.uid=++rt.uid}}rt.uid=0;class st{constructor(t,e,n){this.component=t,this.index=e,this.bounds=n}}}}]);
//# sourceMappingURL=5302.1b5edcc8.js.map