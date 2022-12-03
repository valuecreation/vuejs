"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[4547],{83305:(e,t,n)=>{n.d(t,{e:()=>E,f:()=>P,g:()=>l,h:()=>C,i:()=>s,j:()=>N,l:()=>u,p:()=>G});var r=n(99880),o=n(80442);let _,i=null;function s(){return!!i}function u(){return _||(_=n.e(6774).then(n.bind(n,66774)).then((e=>e.p)).then((({default:e})=>e({locateFile:e=>(0,r.V)(`esri/geometry/support/${e}`)}))).then((e=>{T(e)})),_)}var l,P,E,c;!function(e){function t(e,t,n){i.ensureCache.prepare();const r=h(n),o=n===r,_=i.ensureFloat64(r),s=i._pe_geog_to_proj(i.getPointer(e),t,_);return s&&L(n,t,_,o),s}function n(e,t,n){return r(e,t,n,0)}function r(e,t,n,r){i.ensureCache.prepare();const o=h(n),_=n===o,s=i.ensureFloat64(o),u=i._pe_proj_to_geog_center(i.getPointer(e),t,s,r);return u&&L(n,t,s,_),u}e.geogToProj=t,e.projGeog=function(e,r,o,_){switch(_){case P.PE_TRANSFORM_P_TO_G:return n(e,r,o);case P.PE_TRANSFORM_G_TO_P:return t(e,r,o)}return 0},e.projToGeog=n,e.projToGeogCenter=r}(l||(l={})),(c=P||(P={})).init=function(){c.PE_BUFFER_MAX=i.PeDefs.prototype.PE_BUFFER_MAX,c.PE_NAME_MAX=i.PeDefs.prototype.PE_NAME_MAX,c.PE_MGRS_MAX=i.PeDefs.prototype.PE_MGRS_MAX,c.PE_USNG_MAX=i.PeDefs.prototype.PE_USNG_MAX,c.PE_DD_MAX=i.PeDefs.prototype.PE_DD_MAX,c.PE_DDM_MAX=i.PeDefs.prototype.PE_DDM_MAX,c.PE_DMS_MAX=i.PeDefs.prototype.PE_DMS_MAX,c.PE_UTM_MAX=i.PeDefs.prototype.PE_UTM_MAX,c.PE_PARM_MAX=i.PeDefs.prototype.PE_PARM_MAX,c.PE_TYPE_NONE=i.PeDefs.prototype.PE_TYPE_NONE,c.PE_TYPE_GEOGCS=i.PeDefs.prototype.PE_TYPE_GEOGCS,c.PE_TYPE_PROJCS=i.PeDefs.prototype.PE_TYPE_PROJCS,c.PE_TYPE_GEOGTRAN=i.PeDefs.prototype.PE_TYPE_GEOGTRAN,c.PE_TYPE_COORDSYS=i.PeDefs.prototype.PE_TYPE_COORDSYS,c.PE_TYPE_UNIT=i.PeDefs.prototype.PE_TYPE_UNIT,c.PE_TYPE_LINUNIT=i.PeDefs.prototype.PE_TYPE_LINUNIT,c.PE_STR_OPTS_NONE=i.PeDefs.prototype.PE_STR_OPTS_NONE,c.PE_STR_AUTH_NONE=i.PeDefs.prototype.PE_STR_AUTH_NONE,c.PE_STR_AUTH_TOP=i.PeDefs.prototype.PE_STR_AUTH_TOP,c.PE_STR_NAME_CANON=i.PeDefs.prototype.PE_STR_NAME_CANON,c.PE_PARM_X0=i.PeDefs.prototype.PE_PARM_X0,c.PE_PARM_ND=i.PeDefs.prototype.PE_PARM_ND,c.PE_TRANSFORM_1_TO_2=i.PeDefs.prototype.PE_TRANSFORM_1_TO_2,c.PE_TRANSFORM_2_TO_1=i.PeDefs.prototype.PE_TRANSFORM_2_TO_1,c.PE_TRANSFORM_P_TO_G=i.PeDefs.prototype.PE_TRANSFORM_P_TO_G,c.PE_TRANSFORM_G_TO_P=i.PeDefs.prototype.PE_TRANSFORM_G_TO_P,c.PE_HORIZON_RECT=i.PeDefs.prototype.PE_HORIZON_RECT,c.PE_HORIZON_POLY=i.PeDefs.prototype.PE_HORIZON_POLY,c.PE_HORIZON_LINE=i.PeDefs.prototype.PE_HORIZON_LINE,c.PE_HORIZON_DELTA=i.PeDefs.prototype.PE_HORIZON_DELTA},function(e){const t={},n={},r=e=>{if(e){const t=e.getType();switch(t){case P.PE_TYPE_GEOGCS:e=i.castObject(e,i.PeGeogcs);break;case P.PE_TYPE_PROJCS:e=i.castObject(e,i.PeProjcs);break;case P.PE_TYPE_GEOGTRAN:e=i.castObject(e,i.PeGeogtran);break;default:t&P.PE_TYPE_UNIT&&(e=i.castObject(e,i.PeUnit))}}return e};function o(e,n){let o=null,_=t[e];if(_||(_={},t[e]=_),_.hasOwnProperty(String(n)))o=_[n];else{const t=i.PeFactory.prototype.factoryByType(e,n);i.compare(t,i.NULL)||(o=t,_[n]=o)}return o=r(o),o}e.initialize=function(){i.PeFactory.prototype.initialize(null)},e.coordsys=function(e){return o(P.PE_TYPE_COORDSYS,e)},e.factoryByType=o,e.fromString=function(e,t){let o=null,_=n[e];if(_||(_={},n[e]=_),_.hasOwnProperty(t))o=_[t];else{const n=i.PeFactory.prototype.fromString(e,t);i.compare(n,i.NULL)||(o=n,_[t]=o)}return o=r(o),o},e.geogcs=function(e){return o(P.PE_TYPE_GEOGCS,e)},e.geogtran=function(e){return o(P.PE_TYPE_GEOGTRAN,e)},e.getCode=function(e){return i.PeFactory.prototype.getCode(e)},e.projcs=function(e){return o(P.PE_TYPE_PROJCS,e)},e.unit=function(e){return o(P.PE_TYPE_UNIT,e)}}(E||(E={}));let a=null;var S,f,C,p,A,R,O,N,M;function T(e){function t(e,t,n){e[t]=n(e[t])}i=e,P.init(),S.init(),A.init(),O.init(),N.init(),a=class extends i.PeGCSExtent{destroy(){i.destroy(this)}};const n=[i.PeDatum,i.PeGeogcs,i.PeGeogtran,i.PeObject,i.PeParameter,i.PePrimem,i.PeProjcs,i.PeSpheroid,i.PeUnit];for(const _ of n)t(_.prototype,"getName",(e=>function(){return e.call(this,new Array(P.PE_NAME_MAX))}));for(const _ of[i.PeGeogtran,i.PeProjcs])t(_.prototype,"getParameters",(e=>function(){const t=new Array(P.PE_PARM_MAX);let n=e.call(this);for(let e=0;e<t.length;e++){const r=i.getValue(n,"*");t[e]=r?i.wrapPointer(r,i.PeParameter):null,n+=Int32Array.BYTES_PER_ELEMENT}return t}));t(i.PeHorizon.prototype,"getCoord",(e=>function(){const t=this.getSize();if(!t)return null;const n=[];return L(n,t,e.call(this)),n})),t(i.PeGTlistExtendedEntry.prototype,"getEntries",(e=>{const t=i._pe_getPeGTlistExtendedGTsSize();return function(){let n=null;const r=e.call(this);if(!i.compare(r,i.NULL)){n=[r];const e=this.getSteps();if(e>1){const o=i.getPointer(r);for(let r=1;r<e;r++)n.push(i.wrapPointer(o+t*r,i.PeGTlistExtendedGTs))}}return n}}));const r=i._pe_getPeHorizonSize(),o=e=>function(){let t=this._cache;if(t||(t=new Map,this._cache=t),t.has(e))return t.get(e);let n=null;const o=e.call(this);if(!i.compare(o,i.NULL)){n=[o];const e=o.getNump();if(e>1){const t=i.getPointer(o);for(let o=1;o<e;o++)n.push(i.wrapPointer(t+r*o,i.PeHorizon))}}return t.set(e,n),n};t(i.PeProjcs.prototype,"horizonGcsGenerate",o),t(i.PeProjcs.prototype,"horizonPcsGenerate",o),i.PeObject.prototype.toString=function(e=P.PE_STR_OPTS_NONE){i.ensureCache.prepare();const t=i.getPointer(this),n=i.ensureInt8(new Array(P.PE_BUFFER_MAX));return i.UTF8ToString(i._pe_object_to_string_ext(t,e,n))}}function g(e){if(!e)return;const t=i.getClass(e);if(!t)return;const n=i.getCache(t);if(!n)return;const r=i.getPointer(e);r&&delete n[r]}function d(e,t){const n=[],r=new Array(t);for(let o=0;o<e;o++)n.push(i.ensureInt8(r));return n}function h(e){let t;return Array.isArray(e[0])?(t=[],e.forEach((e=>{t.push(e[0],e[1])}))):t=e,t}function L(e,t,n,r=!1){if(r)for(let o=0;o<2*t;o++)e[o]=i.getValue(n+o*Float64Array.BYTES_PER_ELEMENT,"double");else{const r=0===e.length;for(let o=0;o<t;o++)r&&(e[o]=new Array(2)),e[o][0]=i.getValue(n,"double"),e[o][1]=i.getValue(n+Float64Array.BYTES_PER_ELEMENT,"double"),n+=2*Float64Array.BYTES_PER_ELEMENT}}!function(e){let t;e.init=function(){e.PE_GTLIST_OPTS_COMMON=i.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,t=i._pe_getPeGTlistExtendedEntrySize()},e.getGTlist=function(e,n,r,o,_,s){let u=null;const l=new i.PeInteger(s);try{const P=i.PeGTlistExtended.prototype.getGTlist(e,n,r,o,_,l);if((s=l.val)&&(u=[P],s>1)){const e=i.getPointer(P);for(let n=1;n<s;n++)u.push(i.wrapPointer(e+t*n,i.PeGTlistExtendedEntry))}}finally{i.destroy(l)}return u}}(S||(S={})),function(e){e.destroy=function(e){if(e&&e.length){for(const t of e)g(t),t.getEntries().forEach((e=>{g(e);const t=e.getGeogtran();g(t),t.getParameters().forEach(g),[t.getGeogcs1(),t.getGeogcs2()].forEach((e=>{g(e);const t=e.getDatum();g(t),g(t.getSpheroid()),g(e.getPrimem()),g(e.getUnit())}))}));i.PeGTlistExtendedEntry.prototype.Delete(e[0])}}}(f||(f={})),function(e){e.geogToGeog=function(e,t,n,r,o){i.ensureCache.prepare();const _=h(n),s=n===_,u=i.ensureFloat64(_);let l=0;r&&(l=i.ensureFloat64(r));const P=i._pe_geog_to_geog(i.getPointer(e),t,u,l,o);return P&&L(n,t,u,s),P}}(C||(C={})),function(e){const t=(e,t,n,r,o,_)=>{let s,u;switch(i.ensureCache.prepare(),e){case"dd":s=i._pe_geog_to_dd,u=P.PE_DD_MAX;break;case"ddm":s=i._pe_geog_to_ddm,u=P.PE_DDM_MAX;break;case"dms":s=i._pe_geog_to_dms,u=P.PE_DMS_MAX}let l=0;t&&(l=i.getPointer(t));const E=h(r),c=i.ensureFloat64(E),a=d(n,u),S=s(l,n,c,o,i.ensureInt32(a));if(S)for(let P=0;P<n;P++)_[P]=i.UTF8ToString(a[P]);return S},n=(e,t,n,r,o)=>{let _;switch(i.ensureCache.prepare(),e){case"dd":_=i._pe_dd_to_geog;break;case"ddm":_=i._pe_ddm_to_geog;break;case"dms":_=i._pe_dms_to_geog}let s=0;t&&(s=i.getPointer(t));const u=r.map((e=>i.ensureString(e))),l=i.ensureInt32(u),P=i.ensureFloat64(new Array(2*n)),E=_(s,n,l,P);return E&&L(o,n,P),E};e.geogToDms=function(e,n,r,o,_){return t("dms",e,n,r,o,_)},e.dmsToGeog=function(e,t,r,o){return n("dms",e,t,r,o)},e.geogToDdm=function(e,n,r,o,_){return t("ddm",e,n,r,o,_)},e.ddmToGeog=function(e,t,r,o){return n("ddm",e,t,r,o)},e.geogToDd=function(e,n,r,o,_){return t("dd",e,n,r,o,_)},e.ddToGeog=function(e,t,r,o){return n("dd",e,t,r,o)}}(p||(p={})),function(e){e.init=function(){e.PE_MGRS_STYLE_NEW=i.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=i.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=i.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=i.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=i.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES},e.geogToMgrsExtended=function(e,t,n,r,o,_,s){i.ensureCache.prepare();let u=0;e&&(u=i.getPointer(e));const l=h(n),E=i.ensureFloat64(l),c=d(t,P.PE_MGRS_MAX),a=i.ensureInt32(c),S=i._pe_geog_to_mgrs_extended(u,t,E,r,o,_,a);if(S)for(let P=0;P<t;P++)s[P]=i.UTF8ToString(c[P]);return S},e.mgrsToGeogExtended=function(e,t,n,r,o){i.ensureCache.prepare();let _=0;e&&(_=i.getPointer(e));const s=n.map((e=>i.ensureString(e))),u=i.ensureInt32(s),l=i.ensureFloat64(new Array(2*t)),P=i._pe_mgrs_to_geog_extended(_,t,u,r,l);return P&&L(o,t,l),P}}(A||(A={})),function(e){e.geogToUsng=function(e,t,n,r,o,_,s){i.ensureCache.prepare();let u=0;e&&(u=i.getPointer(e));const l=h(n),E=i.ensureFloat64(l),c=d(t,P.PE_MGRS_MAX),a=i.ensureInt32(c),S=i._pe_geog_to_usng(u,t,E,r,o,_,a);if(S)for(let P=0;P<t;P++)s[P]=i.UTF8ToString(c[P]);return S},e.usngToGeog=function(e,t,n,r){i.ensureCache.prepare();let o=0;e&&(o=i.getPointer(e));const _=n.map((e=>i.ensureString(e))),s=i.ensureInt32(_),u=i.ensureFloat64(new Array(2*t)),l=i._pe_usng_to_geog(o,t,s,u);return l&&L(r,t,u),l}}(R||(R={})),function(e){e.init=function(){e.PE_UTM_OPTS_NONE=i.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=i.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=i.PeNotationUtm.prototype.PE_UTM_OPTS_NS},e.geogToUtm=function(e,t,n,r,o){i.ensureCache.prepare();let _=0;e&&(_=i.getPointer(e));const s=h(n),u=i.ensureFloat64(s),l=d(t,P.PE_UTM_MAX),E=i.ensureInt32(l),c=i._pe_geog_to_utm(_,t,u,r,E);if(c)for(let P=0;P<t;P++)o[P]=i.UTF8ToString(l[P]);return c},e.utmToGeog=function(e,t,n,r,o){i.ensureCache.prepare();let _=0;e&&(_=i.getPointer(e));const s=n.map((e=>i.ensureString(e))),u=i.ensureInt32(s),l=i.ensureFloat64(new Array(2*t)),P=i._pe_utm_to_geog(_,t,u,r,l);return P&&L(o,t,l),P}}(O||(O={})),function(e){const t=new Map;e.init=function(){e.PE_PCSINFO_OPTION_NONE=i.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=i.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=i.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=i.PePCSInfo.prototype.PE_POLE_POINT},e.generate=function(n,r=e.PE_PCSINFO_OPTION_DOMAIN){let o=null,_=null;return t.has(n)&&(_=t.get(n),_[r]&&(o=_[r])),o||(o=i.PePCSInfo.prototype.generate(n,r),_||(_=[],t.set(n,_)),_[r]=o),o}}(N||(N={})),function(e){e.versionString=function(){return i.PeVersion.prototype.version_string()}}(M||(M={}));const G=Object.freeze(Object.defineProperty({__proto__:null,get _pe(){return i},isLoaded:s,isSupported:function(){return!!(0,o.Z)("esri-wasm")},load:u,get PeCSTransformations(){return l},get PeDefs(){return P},get PeFactory(){return E},get PeGCSExtent(){return a},get PeGTlistExtended(){return S},get PeGTlistExtendedEntry(){return f},get PeGTTransformations(){return C},get PeNotationDms(){return p},get PeNotationMgrs(){return A},get PeNotationUsng(){return R},get PeNotationUtm(){return O},get PePCSInfo(){return N},get PeVersion(){return M},_init:T},Symbol.toStringTag,{value:"Module"}))},44547:(e,t,n)=>{n.d(t,{Up:()=>Y,Bm:()=>z,iQ:()=>B,kR:()=>F,zD:()=>m,iV:()=>w,CM:()=>X,oj:()=>U,dz:()=>D,JY:()=>H,KC:()=>Z,Wt:()=>x});var r=n(20102),o=n(22021),_=n(70586),i=n(95330),s=n(67900),u=n(58971),l=n(10661),P=n(52138),E=(n(17896),n(65617)),c=n(6570),a=n(65091),S=n(83305),f=n(94139),C=n(38913),p=n(58901),A=n(24678),R=(n(24470),n(68441));Math.PI;const O=R.sv.radius,N=R.sv.eccentricitySquared,M={a1:O*N,a2:O*N*O*N,a3:O*N*N/2,a4:O*N*O*N*2.5,a5:O*N+O*N*N/2,a6:1-N};R.sv.radius,R.sv.flattening,R.Z1.radius,R.Z1.flattening,R.yr.radius,R.yr.flattening,R.yr.radius;var T=n(18571),g=n(8744),d=n(56726),h=n(69285);let L=null,G=null,I=null,y={};const W=new l.s;function F(){return!!L&&(0,S.i)()}function m(e){return(0,_.Wi)(I)&&(I=Promise.all([(0,S.l)(),n.e(5837).then(n.bind(n,45837)).then((e=>e.g)),n.e(819).then(n.bind(n,80819))])),I.then((([,t,{hydratedAdapter:n}])=>{(0,i.k_)(e),G=n,L=t.default,L._enableProjection(S.p),W.notify()}))}function w(e,t,n=null,r=null){return Array.isArray(e)?0===e.length?[]:U(G,e,e[0].spatialReference,t,n,r):U(G,[e],e.spatialReference,t,n,r)[0]}function U(e,t,n,r,o=null,i=null){if((0,_.Wi)(n)||(0,_.Wi)(r))return t;if(Y(n,r,o))return t.map((e=>(0,_.Wg)(function(e,t,n){return e?"x"in e?function(e,t,n,r,o){he[0]=e.x,he[1]=e.y;const _=e.z;return he[2]=void 0!==_?_:o,X(he,t,0,he,r,0,1)?(n.x=he[0],n.y=he[1],n.spatialReference=r,void 0===_?(n.z=void 0,n.hasZ=!1):(n.z=he[2],n.hasZ=!0),void 0===e.m?(n.m=void 0,n.hasM=!1):(n.m=e.m,n.hasM=!0),n):null}(e,t,new f.Z,n,0):"xmin"in e?function(e,t,n,r,o){const{xmin:_,ymin:i,xmax:s,ymax:u,hasZ:l,hasM:P}=e;return K(_,i,l?e.zmin:o,t,he,r)?(n.xmin=he[0],n.ymin=he[1],l&&(n.zmin=he[2]),K(s,u,l?e.zmax:o,t,he,r)?(n.xmax=he[0],n.ymax=he[1],l&&(n.zmax=he[2]),P&&(n.mmin=e.mmin,n.mmax=e.mmax),n.spatialReference=r,n):null):null}(e,t,new c.Z,n,0):"rings"in e?j(e,t,new C.Z,n,0):"paths"in e?function(e,t,n,r,o){const{paths:_,hasZ:i,hasM:s}=e,u=[];return b(_,i??!1,s??!1,t,u,r,o)?(n.paths=u,n.spatialReference=r,n.hasZ=i,n.hasM=s,n):null}(e,t,new p.Z,n,0):"points"in e?function(e,t,n,r,o){const{points:_,hasZ:i,hasM:s}=e,u=[],l=_.length,P=[];for(const E of _)P.push(E[0],E[1],i?E[2]:o);if(!X(P,t,0,P,r,0,l))return null;for(let E=0;E<l;++E){const e=3*E,t=P[e],n=P[e+1];i&&s?u.push([t,n,P[e+2],_[E][3]]):i?u.push([t,n,P[e+2]]):s?u.push([t,n,_[E][2]]):u.push([t,n])}return n.points=u,n.spatialReference=r,n.hasZ=i,n.hasM=s,n}(e,t,new a.Z,n,0):null:null}(e,n,r))));if((0,_.Wi)(o)){const e=T.Z.cacheKey(n,r);void 0!==y[e]?o=y[e]:(o=function(e,t,n=null){if((0,_.Wi)(e)||(0,_.Wi)(t))return null;if((0,_.Wi)(L)||(0,_.Wi)(G))throw new k;const r=L._getTransformation(G,e,t,n,n?.spatialReference);return null!==r?T.Z.fromGE(r):null}(n,r,void 0),(0,_.Wi)(o)&&(o=new T.Z),y[e]=o)}if((0,_.Wi)(L)||(0,_.Wi)(e))throw new k;return(0,_.pC)(i)?L._project(e,t,n,r,o,i):L._project(e,t,n,r,o)}function D(e,t){const n=H([e],t);return(0,_.pC)(n.pending)?{pending:n.pending,geometry:null}:(0,_.pC)(n.geometries)?{pending:null,geometry:n.geometries[0]}:{pending:null,geometry:null}}function H(e,t){if(!F())for(const n of e)if((0,_.pC)(n)&&!(0,g.fS)(n.spatialReference,t)&&(0,g.JY)(n.spatialReference)&&(0,g.JY)(t)&&!Y(n.spatialReference,t))return(0,u.it)(W),{pending:m(),geometries:null};return{pending:null,geometries:e.map((e=>(0,_.Wi)(e)?null:(0,g.fS)(e.spatialReference,t)?e:(0,g.JY)(e.spatialReference)&&(0,g.JY)(t)?function(e,t){try{const n=w(e,t);if(null==n)return null;"xmin"in e&&"xmin"in n&&(n.zmin=e.zmin,n.zmax=e.zmax);const r=(0,h.k)(n.type,e.spatialReference,t);return(0,_.pC)(r)&&r(n),n}catch(e){if(!(e instanceof k))throw e;return null}}(e,t):null))}}class k extends r.Z{constructor(){super("projection:not-loaded","projection engine not fully loaded yet, please call load()")}}var v;function Y(e,t,n){return!n&&(!!(0,g.fS)(e,t)||(0,g.JY)(e)&&(0,g.JY)(t)&&!!Ce(e,t,Oe))}async function B(e,t,n,r){if(F())return(0,i.Yn)(r);if(Array.isArray(e)){for(const{source:o,dest:_,geographicTransformation:i}of e)if(!Y(o,_,i))return m(r)}else if(!Y(e,t,n))return m(r);return(0,i.Yn)(r)}function x(e,t,n=t.spatialReference,r=0){return(0,_.pC)(e.spatialReference)&&(0,_.pC)(n)&&(0,_.pC)(j(e,e.spatialReference,t,n,r))}function j(e,t,n,r,o){const{rings:_,hasZ:i,hasM:s}=e,u=[];return b(_,i??!1,s??!1,t,u,r,o)?(n.rings=u,n.spatialReference=r,n.hasZ=i,n.hasM=s,n):null}function Z(e,t,n,r=0){he[0]=e.x,he[1]=e.y;const o=e.z;return he[2]=void 0!==o?o:r,X(he,e.spatialReference,0,t,n,0,1)}function K(e,t,n,r,o,_){return Te[0]=e,Te[1]=t,Te[2]=n,X(Te,r,0,o,_,0,1)}function X(e,t,n,r,o,i,s=1){const u=Ce(t,o,Oe);if((0,_.Wi)(u))return!1;if(u===Q){if(e===r&&n===i)return!0;const t=n+3*s;for(let o=n,_=i;o<t;o++,_++)r[_]=e[o];return!0}const l=n+3*s;for(let _=n,P=i;_<l;_+=3,P+=3)u(e,_,r,P);return!0}function b(e,t,n,r,o,_,i=0){const s=new Array;for(const l of e)for(const e of l)s.push(e[0],e[1],t?e[2]:i);if(!X(s,r,0,s,_,0,s.length/3))return!1;let u=0;o.length=0;for(const l of e){const e=new Array;for(const r of l)t&&n?e.push([s[u++],s[u++],s[u++],r[3]]):t?e.push([s[u++],s[u++],s[u++]]):n?(e.push([s[u++],s[u++],r[2]]),u++):(e.push([s[u++],s[u++]]),u++);o.push(e)}return!0}function z(e,t,n,r){if((0,_.Wi)(e)||(0,_.Wi)(r))return!1;const o=J(e,Ae),i=J(r,Re);if(o===i&&!V(i)&&(o!==v.UNKNOWN||(0,g.fS)(e,r)))return(0,P.f)(n,t),!0;if(V(i)){const e=fe[o][v.LON_LAT],r=fe[v.LON_LAT][i];return!(0,_.Wi)(e)&&!(0,_.Wi)(r)&&(e(t,0,ge,0),r(ge,0,de,0),q(Ne*ge[0],Ne*ge[1],n),n[12]=de[0],n[13]=de[1],n[14]=de[2],!0)}if((i===v.WEB_MERCATOR||i===v.PLATE_CARREE)&&(o===v.WGS84||o===v.CGCS2000&&i===v.PLATE_CARREE||o===v.SPHERICAL_ECEF||o===v.WEB_MERCATOR)){const e=fe[o][v.LON_LAT],r=fe[v.LON_LAT][i];return!(0,_.Wi)(e)&&!(0,_.Wi)(r)&&(e(t,0,ge,0),r(ge,0,de,0),o===v.SPHERICAL_ECEF?function(e,t,n){q(e,t,n),(0,P.t)(n,n)}(Ne*ge[0],Ne*ge[1],n):(0,P.i)(n),n[12]=de[0],n[13]=de[1],n[14]=de[2],!0)}return!1}function V(e){return e===v.SPHERICAL_ECEF||e===v.SPHERICAL_MARS_PCPF||e===v.SPHERICAL_MOON_PCPF}function q(e,t,n){const r=Math.sin(e),o=Math.cos(e),_=Math.sin(t),i=Math.cos(t),s=n;return s[0]=-r,s[4]=-_*o,s[8]=i*o,s[12]=0,s[1]=o,s[5]=-_*r,s[9]=i*r,s[13]=0,s[2]=0,s[6]=i,s[10]=_,s[14]=0,s[3]=0,s[7]=0,s[11]=0,s[15]=1,s}function J(e,t){return e?t.spatialReference===e?t.spatialReferenceId:(t.spatialReference=e,"metersPerUnit"in t&&(t.metersPerUnit=(0,s.c9)(e,1)),e.wkt===A.GG.wkt?t.spatialReferenceId=v.SPHERICAL_ECEF:(0,g.oR)(e)?t.spatialReferenceId=v.WGS84:(0,g.sS)(e)?t.spatialReferenceId=v.WEB_MERCATOR:(0,g.QM)(e)?t.spatialReferenceId=v.PLATE_CARREE:e.wkt===A.wY.wkt?t.spatialReferenceId=v.WGS84_ECEF:e.wkid===d.W.CGCS2000?t.spatialReferenceId=v.CGCS2000:e.wkt===A.HQ.wkt?t.spatialReferenceId=v.SPHERICAL_MARS_PCPF:e.wkt===A.VY.wkt?t.spatialReferenceId=v.SPHERICAL_MOON_PCPF:(0,g.BZ)(e)?t.spatialReferenceId=v.GCSMARS2000:(0,g.V2)(e)?t.spatialReferenceId=v.GCSMOON2000:t.spatialReferenceId=v.UNKNOWN):v.UNKNOWN}function Q(e,t,n,r){e!==n&&(n[r++]=e[t++],n[r++]=e[t++],n[r]=e[t])}function $(e,t,n,r){n[r++]=Me*(e[t++]/R.sv.radius),n[r++]=Me*(Math.PI/2-2*Math.atan(Math.exp(-e[t++]/R.sv.radius))),n[r]=e[t]}function ee(e,t,n,r){!function(e,t,n,r,_){const i=.4999999*Math.PI,s=(0,o.uZ)(Ne*e[t+1],-i,i),u=Math.sin(s);n[r++]=Ne*e[t]*_.radius,n[r++]=_.halfSemiMajorAxis*Math.log((1+u)/(1-u)),n[r]=e[t+2]}(e,t,n,r,R.sv)}!function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",e[e.WGS84=2]="WGS84",e[e.WEB_MERCATOR=3]="WEB_MERCATOR",e[e.WGS84_ECEF=4]="WGS84_ECEF",e[e.CGCS2000=5]="CGCS2000",e[e.WGS84_COMPARABLE_LON_LAT=6]="WGS84_COMPARABLE_LON_LAT",e[e.SPHERICAL_MARS_PCPF=7]="SPHERICAL_MARS_PCPF",e[e.GCSMARS2000=8]="GCSMARS2000",e[e.SPHERICAL_MOON_PCPF=9]="SPHERICAL_MOON_PCPF",e[e.GCSMOON2000=10]="GCSMOON2000",e[e.LON_LAT=11]="LON_LAT",e[e.PLATE_CARREE=12]="PLATE_CARREE"}(v||(v={}));const te=R.sv.radius*Math.PI/180,ne=180/(R.sv.radius*Math.PI);function re(e,t,n,r){n[r]=e[t]*te,n[r+1]=e[t+1]*te,n[r+2]=e[t+2]}function oe(e,t,n,r){n[r]=e[t]*ne,n[r+1]=e[t+1]*ne,n[r+2]=e[t+2]}function _e(e,t,n,r,o){const _=o+e[t+2],i=Ne*e[t+1],s=Ne*e[t],u=Math.cos(i);n[r++]=Math.cos(s)*u*_,n[r++]=Math.sin(s)*u*_,n[r]=Math.sin(i)*_}function ie(e,t,n,r){_e(e,t,n,r,R.Z1.radius)}function se(e,t,n,r){_e(e,t,n,r,R.yr.radius)}function ue(e,t,n,r){_e(e,t,n,r,R.sv.radius)}function le(e,t,n,r,_){const i=e[t],s=e[t+1],u=e[t+2],l=Math.sqrt(i*i+s*s+u*u),P=(0,o.Kt)(u/(0===l?1:l)),E=Math.atan2(s,i);n[r++]=Me*E,n[r++]=Me*P,n[r]=l-_}function Pe(e,t,n,r){le(e,t,n,r,R.Z1.radius)}function Ee(e,t,n,r){le(e,t,n,r,R.yr.radius)}function ce(e,t,n,r){le(e,t,n,r,R.sv.radius)}function ae(e,t,n,r){!function(e,t,n,r,o){const _=Ne*e[t],i=Ne*e[t+1],s=e[t+2],u=Math.sin(i),l=Math.cos(i),P=o.radius/Math.sqrt(1-o.eccentricitySquared*u*u);n[r++]=(P+s)*l*Math.cos(_),n[r++]=(P+s)*l*Math.sin(_),n[r++]=(P*(1-o.eccentricitySquared)+s)*u}(e,t,n,r,R.sv)}function Se(e,t,n,r){const o=M,_=e[t],i=e[t+1],s=e[t+2];let u,l,P,E,c,a,S,f,C,p,A,O,N,T,g,d,h,L,G,I,y;u=Math.abs(s),l=_*_+i*i,P=Math.sqrt(l),E=l+s*s,c=Math.sqrt(E),I=Math.atan2(i,_),a=s*s/E,S=l/E,T=o.a2/c,g=o.a3-o.a4/c,S>.3?(f=u/c*(1+S*(o.a1+T+a*g)/c),G=Math.asin(f),p=f*f,C=Math.sqrt(1-p)):(C=P/c*(1-a*(o.a5-T-S*g)/c),G=Math.acos(C),p=1-C*C,f=Math.sqrt(p)),A=1-R.sv.eccentricitySquared*p,O=R.sv.radius/Math.sqrt(A),N=o.a6*O,T=P-O*C,g=u-N*f,h=C*T+f*g,d=C*g-f*T,L=d/(N/A+h),G+=L,y=h+d*L/2,s<0&&(G=-G),n[r++]=Me*I,n[r++]=Me*G,n[r]=y}const fe={[v.WGS84]:{[v.CGCS2000]:null,[v.GCSMARS2000]:null,[v.GCSMOON2000]:null,[v.LON_LAT]:Q,[v.WGS84_COMPARABLE_LON_LAT]:Q,[v.SPHERICAL_ECEF]:ue,[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:ee,[v.PLATE_CARREE]:re,[v.WGS84]:Q,[v.WGS84_ECEF]:ae},[v.CGCS2000]:{[v.CGCS2000]:Q,[v.GCSMARS2000]:null,[v.GCSMOON2000]:null,[v.LON_LAT]:Q,[v.WGS84_COMPARABLE_LON_LAT]:Q,[v.SPHERICAL_ECEF]:ue,[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:null,[v.PLATE_CARREE]:re,[v.WGS84]:null,[v.WGS84_ECEF]:ae},[v.GCSMARS2000]:{[v.CGCS2000]:null,[v.GCSMARS2000]:Q,[v.GCSMOON2000]:null,[v.LON_LAT]:Q,[v.WGS84_COMPARABLE_LON_LAT]:null,[v.SPHERICAL_ECEF]:null,[v.SPHERICAL_MARS_PCPF]:se,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:null,[v.PLATE_CARREE]:null,[v.WGS84]:null,[v.WGS84_ECEF]:null},[v.GCSMOON2000]:{[v.CGCS2000]:null,[v.GCSMARS2000]:null,[v.GCSMOON2000]:Q,[v.LON_LAT]:Q,[v.WGS84_COMPARABLE_LON_LAT]:null,[v.SPHERICAL_ECEF]:null,[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:ie,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:null,[v.PLATE_CARREE]:null,[v.WGS84]:null,[v.WGS84_ECEF]:null},[v.WEB_MERCATOR]:{[v.CGCS2000]:null,[v.GCSMARS2000]:null,[v.GCSMOON2000]:null,[v.LON_LAT]:$,[v.WGS84_COMPARABLE_LON_LAT]:$,[v.SPHERICAL_ECEF]:function(e,t,n,r){$(e,t,n,r),ue(n,r,n,r)},[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:Q,[v.PLATE_CARREE]:function(e,t,n,r){$(e,t,n,r),re(n,r,n,r)},[v.WGS84]:$,[v.WGS84_ECEF]:function(e,t,n,r){$(e,t,n,r),ae(n,r,n,r)}},[v.WGS84_ECEF]:{[v.CGCS2000]:Se,[v.GCSMARS2000]:null,[v.GCSMOON2000]:null,[v.LON_LAT]:Se,[v.WGS84_COMPARABLE_LON_LAT]:Se,[v.SPHERICAL_ECEF]:function(e,t,n,r){Se(e,t,n,r),ue(n,r,n,r)},[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:function(e,t,n,r){Se(e,t,n,r),ee(n,r,n,r)},[v.PLATE_CARREE]:function(e,t,n,r){Se(e,t,n,r),re(n,r,n,r)},[v.WGS84]:Se,[v.WGS84_ECEF]:Q},[v.SPHERICAL_ECEF]:{[v.CGCS2000]:ce,[v.GCSMARS2000]:null,[v.GCSMOON2000]:null,[v.LON_LAT]:ce,[v.WGS84_COMPARABLE_LON_LAT]:ce,[v.SPHERICAL_ECEF]:Q,[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:function(e,t,n,r){ce(e,t,n,r),ee(n,r,n,r)},[v.PLATE_CARREE]:function(e,t,n,r){ce(e,t,n,r),re(n,r,n,r)},[v.WGS84]:ce,[v.WGS84_ECEF]:function(e,t,n,r){ce(e,t,n,r),ae(n,r,n,r)}},[v.SPHERICAL_MARS_PCPF]:{[v.CGCS2000]:null,[v.GCSMARS2000]:Ee,[v.GCSMOON2000]:null,[v.LON_LAT]:Ee,[v.WGS84_COMPARABLE_LON_LAT]:null,[v.SPHERICAL_ECEF]:null,[v.SPHERICAL_MARS_PCPF]:Q,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:null,[v.PLATE_CARREE]:null,[v.WGS84]:null,[v.WGS84_ECEF]:null},[v.SPHERICAL_MOON_PCPF]:{[v.CGCS2000]:null,[v.GCSMARS2000]:null,[v.GCSMOON2000]:Pe,[v.LON_LAT]:Pe,[v.WGS84_COMPARABLE_LON_LAT]:null,[v.SPHERICAL_ECEF]:null,[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:Q,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:null,[v.PLATE_CARREE]:null,[v.WGS84]:null,[v.WGS84_ECEF]:null},[v.UNKNOWN]:{[v.CGCS2000]:null,[v.GCSMARS2000]:null,[v.GCSMOON2000]:null,[v.LON_LAT]:null,[v.WGS84_COMPARABLE_LON_LAT]:null,[v.SPHERICAL_ECEF]:null,[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:Q,[v.WEB_MERCATOR]:null,[v.PLATE_CARREE]:null,[v.WGS84]:null,[v.WGS84_ECEF]:null},[v.LON_LAT]:{[v.CGCS2000]:Q,[v.GCSMARS2000]:Q,[v.GCSMOON2000]:Q,[v.LON_LAT]:Q,[v.WGS84_COMPARABLE_LON_LAT]:Q,[v.SPHERICAL_ECEF]:ue,[v.SPHERICAL_MARS_PCPF]:se,[v.SPHERICAL_MOON_PCPF]:ie,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:ee,[v.PLATE_CARREE]:re,[v.WGS84]:Q,[v.WGS84_ECEF]:ae},[v.WGS84_COMPARABLE_LON_LAT]:{[v.CGCS2000]:null,[v.GCSMARS2000]:null,[v.GCSMOON2000]:null,[v.LON_LAT]:Q,[v.WGS84_COMPARABLE_LON_LAT]:Q,[v.SPHERICAL_ECEF]:ue,[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:null,[v.PLATE_CARREE]:re,[v.WGS84]:Q,[v.WGS84_ECEF]:ae},[v.PLATE_CARREE]:{[v.CGCS2000]:oe,[v.GCSMARS2000]:null,[v.GCSMOON2000]:null,[v.LON_LAT]:oe,[v.WGS84_COMPARABLE_LON_LAT]:oe,[v.SPHERICAL_ECEF]:function(e,t,n,r){oe(e,t,n,r),ue(n,r,n,r)},[v.SPHERICAL_MARS_PCPF]:null,[v.SPHERICAL_MOON_PCPF]:null,[v.UNKNOWN]:null,[v.WEB_MERCATOR]:function(e,t,n,r){oe(e,t,n,r),ee(n,r,n,r)},[v.PLATE_CARREE]:Q,[v.WGS84]:oe,[v.WGS84_ECEF]:function(e,t,n,r){oe(e,t,n,r),ae(n,r,n,r)}}};function Ce(e,t,n=pe()){return(0,_.Wi)(e)||(0,_.Wi)(t)?null:function(e,t,n){if((0,_.Wi)(e)||(0,_.Wi)(t)||n.source.spatialReference===e&&n.dest.spatialReference===t)return n;const r=J(e,n.source),o=J(t,n.dest);return r===v.UNKNOWN&&o===v.UNKNOWN?(0,g.fS)(e,t)?n.projector=Q:n.projector=null:n.projector=fe[r][o],n}(e,t,n).projector}function pe(){return{source:{spatialReference:null,spatialReferenceId:v.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:v.UNKNOWN,metersPerUnit:1},projector:Q}}const Ae={spatialReference:null,spatialReferenceId:v.UNKNOWN},Re={spatialReference:null,spatialReferenceId:v.UNKNOWN},Oe=pe(),Ne=(pe(),(0,o.Vl)(1)),Me=(0,o.BV)(1),Te=(0,E.c)(),ge=(0,E.c)(),de=(0,E.c)(),he=(0,E.c)();(0,E.c)()},18571:(e,t,n)=>{n.d(t,{Z:()=>_});let r=0;class o{constructor(e){this.uid=r++,e?(this._wkt=null!=e.wkt?e.wkt:null,this._wkid=null!=e.wkid?e.wkid:-1,this._isInverse=null!=e.isInverse&&!0===e.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}static fromGE(e){const t=new o;return t._wkt=e.wkt,t._wkid=e.wkid,t._isInverse=e.isInverse,t}get wkt(){return this._wkt}set wkt(e){this._wkt=e,this.uid=r++}get wkid(){return this._wkid}set wkid(e){this._wkid=e,this.uid=r++}get isInverse(){return this._isInverse}set isInverse(e){this._isInverse=e,this.uid=r++}getInverse(){const e=new o;return e._wkt=this.wkt,e._wkid=this._wkid,e._isInverse=!this.isInverse,e}}class _{constructor(e){if(this.steps=[],this._cachedProjection={},this._chain="",this._gtlistentry=null,e&&e.steps)for(const t of e.steps)t instanceof o?this.steps.push(t):this.steps.push(new o({wkid:t.wkid,wkt:t.wkt,isInverse:t.isInverse}))}static cacheKey(e,t){return[void 0!==e.wkid&&null!==e.wkid?e.wkid.toString():"-1",void 0!==e.wkt&&null!==e.wkt?e.wkt.toString():"",void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():""].join(",")}static fromGE(e){const t=new _;let n="";for(const r of e.steps){const e=o.fromGE(r);t.steps.push(e),n+=e.uid.toString()+","}return t._cachedProjection={},t._gtlistentry=null,t._chain=n,t}getInverse(){const e=new _;e.steps=[];for(let t=this.steps.length-1;t>=0;t--){const n=this.steps[t];e.steps.push(n.getInverse())}return e}getGTListEntry(){let e="";for(const t of this.steps)e+=t.uid.toString()+",";return e!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=e),this._gtlistentry}assignCachedGe(e,t,n){this._cachedProjection[_.cacheKey(e,t)]=n}getCachedGeTransformation(e,t){let n="";for(const o of this.steps)n+=o.uid.toString()+",";n!==this._chain&&(this._gtlistentry=null,this._cachedProjection={},this._chain=n);const r=this._cachedProjection[_.cacheKey(e,t)];return void 0===r?null:r}}}}]);