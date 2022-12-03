"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3230],{66643:(e,t,n)=>{n.d(t,{Ed:()=>l,UI:()=>c,mt:()=>f,q6:()=>d,vr:()=>m});var r=n(43697),o=n(15923),i=n(70586),a=n(95330),s=n(5600),u=(n(67676),n(75215),n(52011));function l(e,t,n){return(0,a.as)(e.map(((e,r)=>t.apply(n,[e,r]))))}async function c(e,t,n){return(await(0,a.as)(e.map(((e,r)=>t.apply(n,[e,r]))))).map((e=>e.value))}function p(e){return{ok:!0,value:e}}function y(e){return{ok:!1,error:e}}async function d(e){if((0,i.Wi)(e))return{ok:!1,error:new Error("no promise provided")};try{return p(await e)}catch(e){return y(e)}}async function f(e){try{return p(await e)}catch(e){return(0,a.r9)(e),y(e)}}function m(e,t){return new h(e,t)}let h=class extends o.Z{constructor(e,t){super({}),this._result=null,this._abortHandle=null,this.abort=()=>{this._abortController=(0,i.IM)(this._abortController)},this.remove=this.abort,this._abortController=new AbortController;const{signal:n}=this._abortController;this.promise=e(n),this.promise.then((e=>{this._result=p(e),this._cleanup()}),(e=>{this._result=y(e),this._cleanup()})),this._abortHandle=(0,a.fu)(t,this.abort)}get value(){return e=this._result,(0,i.pC)(e)&&!0===e.ok?e.value:null;var e}get error(){return e=this._result,(0,i.pC)(e)&&!1===e.ok?e.error:null;var e}get finished(){return(0,i.pC)(this._result)}normalizeCtorArgs(){return{}}destroy(){this.abort()}_cleanup(){this._abortHandle=(0,i.hw)(this._abortHandle),this._abortController=null}};(0,r._)([(0,s.Cb)()],h.prototype,"value",null),(0,r._)([(0,s.Cb)()],h.prototype,"error",null),(0,r._)([(0,s.Cb)()],h.prototype,"finished",null),(0,r._)([(0,s.Cb)()],h.prototype,"promise",void 0),(0,r._)([(0,s.Cb)()],h.prototype,"_result",void 0),h=(0,r._)([(0,u.j)("esri.core.asyncUtils.ReactiveTask")],h)},43230:(e,t,n)=>{n.r(t),n.d(t,{default:()=>g});var r=n(66643),o=n(20102),i=n(92604),a=n(70586),s=n(95330),u=n(8744),l=n(98732),c=n(57191),p=n(37427),y=n(50245),d=n(92722),f=n(23095),m=n(51432),h=n(99514);class g{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{const{objectIdField:t}=this._queryEngine,n=await(0,m.Bm)(this._getFeatureUrl??"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map((e=>e.name)),signal:e});await(0,d.O3)(n),(0,s.k_)(e);const r=(0,d.lG)(n,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!(0,u.fS)(this._queryEngine.spatialReference,u.Zn))for(const i of r)(0,a.pC)(i.geometry)&&(i.geometry=(0,l.GH)((0,p.iV)((0,l.di)(i.geometry,this._queryEngine.geometryType,!1,!1),u.Zn,this._queryEngine.spatialReference)));let o=1;for(const i of r){const e={};(0,f.O0)(this._fieldsIndex,e,i.attributes,!0),i.attributes=e,null==i.attributes[t]&&(i.objectId=i.attributes[t]=o++)}return r}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:n,getFeatureOutputFormat:r,spatialReference:o,fields:i,geometryType:u,featureType:l,objectIdField:p,customParameters:d}=e;this._featureType=l,this._customParameters=d,this._getFeatureUrl=n,this._getFeatureOutputFormat=r,this._fieldsIndex=new h.Z(i),await this._checkProjection(o),(0,s.k_)(t),this._queryEngine=new y.q({fields:i,geometryType:u,hasM:!1,hasZ:!1,objectIdField:p,spatialReference:o,timeInfo:null,featureStore:new c.Z({geometryType:u,hasM:!1,hasZ:!1})});const f=await this._snapshotFeatures((0,a.Wg)(t.signal));return this._queryEngine.featureStore.addMany(f),{extent:this._queryEngine.fullExtent}}async applyEdits(){throw new o.Z("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,r.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),e&&this._queryEngine.featureStore.addMany(e)}),(e=>{this._queryEngine.featureStore.clear(),(0,s.D_)(e)||i.Z.getLogger("esri.layers.WFSLayer").error(new o.Z("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await(0,p._W)(u.Zn,e)}catch{throw new o.Z("unsupported-projection","Projection not supported",{spatialReference:e})}}}},92722:(e,t,n)=>{n.d(t,{O3:()=>S,lG:()=>F,my:()=>C,q9:()=>u});var r=n(20102),o=n(70272),i=n(5428),a=n(35671);const s={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return s[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function p(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){let t=0;for(let n=0;n<e.length;n++){const r=e[n],o=e[(n+1)%e.length];t+=r[0]*o[1]-o[0]*r[1]}return t<=0}function d(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function f(e,t,n){switch(t.type){case"LineString":case"MultiPoint":return function(e,t,n){return g(e,t.coordinates,n),e}(e,t,n);case"MultiLineString":return function(e,t,n){for(const r of t.coordinates)g(e,r,n);return e}(e,t,n);case"MultiPolygon":return function(e,t,n){for(const r of t.coordinates){m(e,r[0],n);for(let t=1;t<r.length;t++)h(e,r[t],n)}return e}(e,t,n);case"Point":return function(e,t,n){return b(e,t.coordinates,n),e}(e,t,n);case"Polygon":return function(e,t,n){const r=t.coordinates;m(e,r[0],n);for(let o=1;o<r.length;o++)h(e,r[o],n);return e}(e,t,n)}}function m(e,t,n){const r=d(t);!function(e){return!y(e)}(r)?g(e,r,n):w(e,r,n)}function h(e,t,n){const r=d(t);!function(e){return y(e)}(r)?g(e,r,n):w(e,r,n)}function g(e,t,n){for(const r of t)b(e,r,n);e.lengths.push(t.length)}function w(e,t,n){for(let r=t.length-1;r>=0;r--)b(e,t[r],n);e.lengths.push(t.length)}function b(e,t,n){const[r,o,i]=t;e.coords.push(r,o),n.hasZ&&e.coords.push(i||0)}function _(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function S(e){if(!e)throw new r.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new r.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,o=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!o.test(n))throw new r.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function C(e,t={}){const n=[],r=new Set,o=new Set;let i,s=!1,y=null,d=!1,{geometryType:f=null}=t,m=!1;for(const g of l(e)){const{geometry:e,properties:t,id:l}=g;if((!e||(f||(f=u(e.type)),u(e.type)===f))&&(s||(s=p(c(e))),d||(d=null!=l,d&&(i=typeof l,y=Object.keys(t).filter((e=>t[e]===l)))),d&&null!=l&&(y.length>1?y=y.filter((e=>t[e]===l)):1===y.length&&(y=t[y[0]]===l?y:[])),!m&&t)){let e=!0;for(const i in t){if(r.has(i))continue;const s=t[i];if(null==s){e=!1,o.add(i);continue}const u=_(s);"unknown"!==u?(o.delete(i),r.add(i),n.push({name:(0,a.q6)(i),alias:i,type:u})):o.add(i)}m=e}}const h=(0,a.q6)(1===y?.length&&y[0]||null);if(h)for(const u of n)if(u.name===h&&(0,a.H7)(u)){u.type="esriFieldTypeOID";break}return{fields:n,geometryType:f,hasZ:s,objectIdFieldName:h,objectIdFieldType:i,unknownFields:Array.from(o)}}function F(e,t){return Array.from(function*(e,t={}){const{geometryType:n,objectIdField:r}=t;for(const a of e){const{geometry:e,properties:s,id:l}=a;if(e&&u(e.type)!==n)continue;const c=s||{};let p=c[r]??null;r&&null!=l&&!c[r]&&(c[r]=p=l);const y=new o.u_(e?f(new i.Z,e,t):null,c,null,p);yield y}}(l(e),t))}},51432:(e,t,n)=>{n.d(t,{M8:()=>S,ft:()=>E,FU:()=>T,Bm:()=>V,be:()=>k,eB:()=>P}),n(66577);var r=n(3172),o=n(20102),i=n(66374),a=n(70586),s=n(95330),u=n(17452),l=n(44547),c=n(8744),p=n(86973),y=n(92722);function d(e){return function(e){const t=f.exec(e);if(!t?.groups)return null;const n=t.groups,r=+n.year,o=+n.month-1,i=+n.day,a=+(n.hours??"0"),s=+(n.minutes??"0"),u=+(n.seconds??"0");if(a>23)return null;if(s>59)return null;if(u>59)return null;const l=n.ms??"0",c=l?+l.padEnd(3,"0").substring(0,3):0;let p;if(n.isUTC)p=Date.UTC(r,o,i,a,s,u,c);else if(n.offsetSign){const e=+n.offsetHours,t=+n.offsetMinutes;p=6e4*("+"===n.offsetSign?-1:1)*(60*e+t)+Date.UTC(r,o,i,a,s,u,c)}else p=new Date(r,o,i,a,s,u,c).getTime();return Number.isNaN(p)?null:p}(e)??function(e){const t=new Date(e).getTime();return Number.isNaN(t)?null:t}(e)}const f=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/;var m=n(88724),h=n(1231),g=n(82971),w=n(6570);const b="xlink:href",_="2.0.0",S="__esri_wfs_id__",C="wfs-layer:feature-type-not-found",F="wfs-layer:unknown-geometry-type";async function T(e,t){const n=function(e){const t=O(e);(function(e){const t=e.firstElementChild?.getAttribute("version");if(t&&t!==_)throw new o.Z("wfs-layer:unsupported-wfs-version",`Unsupported WFS version ${t}. Supported version: ${_}`)})(t),R(t);const n=t.firstElementChild,r=(0,i.Fs)(function(e){return(0,m.H)(e,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},n=new Set([4326]),r=e=>{const t=parseInt(e.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);Number.isNaN(t)||n.add(t)};return(0,m.h)(e,{Name:e=>{const{name:n,prefix:r}=G(e.textContent);t.typeName=`${r}:${n}`,t.name=n,t.namespacePrefix=r,t.namespaceUri=e.lookupNamespaceURI(r)},Abstract:e=>{t.description=e.textContent},Title:e=>{t.title=e.textContent},WGS84BoundingBox:e=>{t.extent=function(e){let t,n,r,o;for(const i of e.children)switch(i.localName){case"LowerCorner":[t,n]=i.textContent.split(" ").map((e=>Number.parseFloat(e)));break;case"UpperCorner":[r,o]=i.textContent.split(" ").map((e=>Number.parseFloat(e)))}return{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:c.Zn}}(e)},DefaultSRS:r,DefaultCRS:r,OtherSRS:r,OtherCRS:r}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...n),t}}})}(n));return{operations:x(n),get featureTypes(){return Array.from(r())},readFeatureTypes:r}}((await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:_,...t?.customParameters},signal:t?.signal})).data);return function(e,t){(0,u.$U)(e)&&((0,u.D6)(e,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=(0,u.hO)(t.operations.DescribeFeatureType.url)),(0,u.D6)(e,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=(0,u.hO)(t.operations.GetFeature.url)))}(e,n),n}const v=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function x(e){let t=!1;const n={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if((0,m.h)(e,{OperationsMetadata:{Operation:e=>{switch(e.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:e=>{n.GetCapabilities.url=e.getAttribute(b)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:e=>{n.DescribeFeatureType.url=e.getAttribute(b)}}}};case"GetFeature":return{DCP:{HTTP:{Get:e=>{n.GetFeature.url=e.getAttribute(b)}}},Parameter:e=>{if("outputFormat"===e.getAttribute("name"))return{AllowedValues:{Value:e=>{const t=e.textContent;t&&v.has(t.toLowerCase())&&(n.GetFeature.outputFormat=t)}}}}}}},Constraint:e=>{switch(e.getAttribute("name")){case"KVPEncoding":return{DefaultValue:e=>{t="true"===e.textContent.toLowerCase()}};case"ImplementsResultPaging":return{DefaultValue:e=>{n.GetFeature.supportsPagination="true"===e.textContent.toLowerCase()}}}}}}),!t)throw new o.Z("wfs-layer:kvp-encoding-not-supported","WFS service doesn't support key/value pair (KVP) encoding");if((0,a.Wi)(n.GetFeature.outputFormat))throw new o.Z("wfs-layer:geojson-not-supported","WFS service doesn't support GeoJSON output format");return n}function E(e,t,n){return(0,i.sE)(e,(e=>n?e.name===t&&e.namespaceUri===n:e.typeName===t||e.name===t))}async function k(e,t,n,r={}){const{featureType:i,extent:u}=await async function(e,t,n,r={}){const{spatialReference:i=g.Z.WGS84}=r,s=e.readFeatureTypes(),u=t?E(s,t,n):s.next().value;if((0,a.Wi)(u))throw t?new o.Z(C,`The type '${t}' could not be found in the service`):new o.Z("wfs-layer:empty-service","The service is empty");let p=new w.Z({...u.extent,spatialReference:i});if(!(0,c.fS)(i,c.Zn))try{await(0,l.iQ)(c.Zn,i,void 0,r),p=(0,l.iV)(p,c.Zn)}catch{throw new o.Z("wfs-layer:unsupported-spatial-reference","Projection not supported")}return{extent:p,spatialReference:i,featureType:u}}(e,t,n,r),{fields:p,geometryType:y,swapXY:d,objectIdField:f,geometryField:m}=await async function(e,t,n={}){const[r,i]=await(0,s.as)([j(e.operations.DescribeFeatureType.url,t,n),N(e,t,n)]);if(r.error||i.error)throw new o.Z("wfs-layer:getWFSLayerTypeInfo-error",`An error occurred while getting info about the feature type '${t}'`,{error:r.error||i.error});const{fields:u,errors:l}=r.value??{},c=r.value?.geometryType||i.value?.geometryType,p=i.value?.swapXY??!1;if((0,a.Wi)(c))throw new o.Z(F,`The geometry type could not be determined for type '${t}`,{typeName:t,geometryType:c,fields:u,errors:l});return{...P(u??[]),geometryType:c,swapXY:p}}(e,i.typeName,r);return{url:e.operations.GetCapabilities.url,name:i.name,namespaceUri:i.namespaceUri,fields:p,geometryField:m,geometryType:y,objectIdField:f,spatialReference:r.spatialReference??g.Z.WGS84,extent:u,swapXY:d,wfsCapabilities:e,customParameters:r.customParameters}}function P(e){const t=e.find((e=>"geometry"===e.type));let n=e.find((e=>"oid"===e.type));return e=e.filter((e=>"geometry"!==e.type)),n||(n=new h.Z({name:S,type:"oid",alias:S}),e.unshift(n)),{geometryField:t?.name??null,objectIdField:n.name,fields:e}}async function N(e,t,n={}){let o,i=!1;const[a,s]=await Promise.all([V(e.operations.GetFeature.url,t,e.operations.GetFeature.outputFormat,{...n,count:1}),(0,r.default)(e.operations.GetFeature.url,{responseType:"text",query:q(t,void 0,{...n,count:1}),signal:n?.signal})]),u="FeatureCollection"===a.type&&a.features[0]?.geometry;if(u){let e;switch(o=p.Mk.fromJSON((0,y.q9)(u.type)),u.type){case"Point":e=u.coordinates;break;case"LineString":case"MultiPoint":e=u.coordinates[0];break;case"MultiLineString":case"Polygon":e=u.coordinates[0][0];break;case"MultiPolygon":e=u.coordinates[0][0][0]}const t=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(s.data);if(t){const n=e[0].toFixed(3),r=e[1].toFixed(3),o=parseFloat(t[1]).toFixed(3);n===parseFloat(t[2]).toFixed(3)&&r===o&&(i=!0)}}return{geometryType:o,swapXY:i}}async function j(e,t,n){return function(e,t){const{name:n}=G(e),r=O(t);R(r);const s=(0,i.sE)((0,m.H)(r.firstElementChild,{element:e=>({name:e.getAttribute("name"),typeName:G(e.getAttribute("type")).name})}),(({name:e})=>e===n));if((0,a.pC)(s)){const e=(0,i.sE)((0,m.H)(r.firstElementChild,{complexType:e=>e}),(e=>e.getAttribute("name")===s.typeName));if((0,a.pC)(e))return function(e){const t=[],n=[];let r;const i=(0,m.H)(e,{complexContent:{extension:{sequence:{element:e=>e}}}});for(const a of i){const i=a.getAttribute("name");if(!i)continue;let s,u;if(a.hasAttribute("type")?s=G(a.getAttribute("type")).name:(0,m.h)(a,{simpleType:{restriction:e=>(s=G(e.getAttribute("base")).name,{maxLength:e=>{u=+e.getAttribute("value")}})}}),!s)continue;const l="true"===a.getAttribute("nillable");let c=!1;switch(s.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":n.push(new h.Z({name:i,alias:i,type:"integer",nullable:l}));break;case"float":case"double":case"decimal":n.push(new h.Z({name:i,alias:i,type:"double",nullable:l}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":n.push(new h.Z({name:i,alias:i,type:"string",nullable:l,length:u??255}));break;case"datetime":case"date":n.push(new h.Z({name:i,alias:i,type:"date",nullable:l,length:u??36}));break;case"pointpropertytype":r="point",c=!0;break;case"multipointpropertytype":r="multipoint",c=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":r="polyline",c=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":r="polygon",c=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":c=!0,t.push(new o.Z(F,`geometry type '${s}' is not supported`,{type:(new XMLSerializer).serializeToString(e)}));break;default:t.push(new o.Z("wfs-layer:unknown-field-type",`Unknown field type '${s}'`,{type:(new XMLSerializer).serializeToString(e)}))}c&&n.push(new h.Z({name:i,alias:i,type:"geometry",nullable:l}))}for(const o of n)if("integer"===o.type&&!o.nullable&&Z.has(o.name.toLowerCase())){o.type="oid";break}return{geometryType:r,fields:n,errors:t}}(e)}throw new o.Z(C,`Type '${e}' not found in document`,{document:(new XMLSerializer).serializeToString(r)})}(t,(await(0,r.default)(e,{responseType:"text",query:{SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:_,TYPENAME:t,...n?.customParameters},signal:n?.signal})).data)}const Z=new Set(["objectid","fid"]);async function V(e,t,n,i){let{data:a}=await(0,r.default)(e,{responseType:"text",query:q(t,n,i),signal:i?.signal});a=a.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{if(i?.dateFields?.length){const e=new Set(i.dateFields);return JSON.parse(a,((t,n)=>e.has(t)?d(n):n))}return JSON.parse(a)}catch(e){throw new o.Z("wfs-layer:malformed-json","Error while parsing the response",{response:a,error:e})}}function q(e,t,n){return{SERVICE:"WFS",REQUEST:"GetFeature",VERSION:_,TYPENAMES:e,OUTPUTFORMAT:t,SRSNAME:"EPSG:4326",STARTINDEX:n?.startIndex,COUNT:n?.count,...n?.customParameters}}function O(e){return(new DOMParser).parseFromString(e.trim(),"text/xml")}function G(e){const[t,n]=e.split(":");return{prefix:n?t:"",name:n??t}}function R(e){let t="",n="";if((0,m.h)(e.firstElementChild,{Exception:e=>(t=e.getAttribute("exceptionCode"),{ExceptionText:e=>{n=e.textContent}})}),t)throw new o.Z(`wfs-layer:${t}`,n)}},88724:(e,t,n)=>{function r(e,t){if(e&&t)for(const n of e.children)if(n.localName in t){const e=t[n.localName];if("function"==typeof e){const t=e(n);t&&r(n,t)}else r(n,e)}}function*o(e,t){for(const n of e.children)if(n.localName in t){const e=t[n.localName];"function"==typeof e?yield e(n):yield*o(n,e)}}n.d(t,{H:()=>o,h:()=>r})},1231:(e,t,n)=>{n.d(t,{Z:()=>h});var r,o=n(43697),i=n(35454),a=n(96674),s=n(5600),u=(n(67676),n(75215)),l=n(36030),c=n(71715),p=n(52011),y=n(72729),d=n(86719);const f=new i.X({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=r=class extends a.wq{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?.value??null}readValueType(e,{description:t}){let n=null;try{n=t?JSON.parse(t):null}catch(e){}return n?f.fromJSON(n.fieldValueType):null}clone(){return new r({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};(0,o._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,o._)([(0,s.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,o._)([(0,s.Cb)()],m.prototype,"description",void 0),(0,o._)([(0,c.r)("description")],m.prototype,"readDescription",null),(0,o._)([(0,s.Cb)({types:y.V5,json:{read:{reader:y.im},write:!0}})],m.prototype,"domain",void 0),(0,o._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,o._)([(0,s.Cb)({type:u.z8,json:{write:!0}})],m.prototype,"length",void 0),(0,o._)([(0,s.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,o._)([(0,s.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,o._)([(0,l.J)(d.v)],m.prototype,"type",void 0),(0,o._)([(0,s.Cb)()],m.prototype,"valueType",void 0),(0,o._)([(0,c.r)("valueType",["description"])],m.prototype,"readValueType",null),(0,o._)([(0,s.Cb)({type:Boolean,json:{read:!1}})],m.prototype,"visible",void 0),m=r=(0,o._)([(0,p.j)("esri.layers.support.Field")],m);const h=m},72729:(e,t,n)=>{n.d(t,{im:()=>T,V5:()=>F}),n(80442);var r,o=n(43697),i=n(22974),a=n(5600),s=(n(75215),n(36030)),u=n(52011),l=n(96674);n(67676);let c=r=class extends l.wq{constructor(e){super(e),this.name=null,this.code=null}clone(){return new r({name:this.name,code:this.code})}};(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],c.prototype,"name",void 0),(0,o._)([(0,a.Cb)({type:[String,Number],json:{write:!0}})],c.prototype,"code",void 0),c=r=(0,o._)([(0,u.j)("esri.layers.support.CodedValue")],c);const p=new(n(35454).X)({inherited:"inherited",codedValue:"coded-value",range:"range"});let y=class extends l.wq{constructor(e){super(e),this.name=null,this.type=null}};(0,o._)([(0,a.Cb)({type:String,json:{write:!0}})],y.prototype,"name",void 0),(0,o._)([(0,s.J)(p)],y.prototype,"type",void 0),y=(0,o._)([(0,u.j)("esri.layers.support.Domain")],y);const d=y;var f;let m=f=class extends d{constructor(e){super(e),this.codedValues=null,this.type="coded-value"}getName(e){let t=null;if(this.codedValues){const n=String(e);this.codedValues.some((e=>(String(e.code)===n&&(t=e.name),!!t)))}return t}clone(){return new f({codedValues:(0,i.d9)(this.codedValues),name:this.name})}};(0,o._)([(0,a.Cb)({type:[c],json:{write:!0}})],m.prototype,"codedValues",void 0),(0,o._)([(0,s.J)({codedValue:"coded-value"})],m.prototype,"type",void 0),m=f=(0,o._)([(0,u.j)("esri.layers.support.CodedValueDomain")],m);const h=m;var g;n(92604),n(20102);let w=g=class extends d{constructor(e){super(e),this.type="inherited"}clone(){return new g}};(0,o._)([(0,s.J)({inherited:"inherited"})],w.prototype,"type",void 0),w=g=(0,o._)([(0,u.j)("esri.layers.support.InheritedDomain")],w);const b=w;var _;let S=_=class extends d{constructor(e){super(e),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new _({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};(0,o._)([(0,a.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[1]},write:{enabled:!1,overridePolicy(){return{enabled:null!=this.maxValue&&null==this.minValue}},target:"range",writer(e,t,n){t[n]=[this.minValue||0,e]}}}})],S.prototype,"maxValue",void 0),(0,o._)([(0,a.Cb)({type:Number,json:{type:[Number],read:{source:"range",reader:(e,t)=>t.range&&t.range[0]},write:{target:"range",writer(e,t,n){t[n]=[e,this.maxValue||0]}}}})],S.prototype,"minValue",void 0),(0,o._)([(0,s.J)({range:"range"})],S.prototype,"type",void 0),S=_=(0,o._)([(0,u.j)("esri.layers.support.RangeDomain")],S);const C=S,F={key:"type",base:d,typeMap:{range:S,"coded-value":h,inherited:b}};function T(e){if(!e||!e.type)return null;switch(e.type){case"range":return C.fromJSON(e);case"codedValue":return h.fromJSON(e);case"inherited":return b.fromJSON(e)}return null}}}]);