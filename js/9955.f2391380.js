"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[9955],{59955:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var s=n(66341),i=n(67979),r=n(70375),o=n(13802),a=n(61681),u=n(78668),l=n(53736),c=n(35925),p=n(12065),d=n(21209),y=n(66069),f=n(14215),h=n(61957),g=n(40400),m=n(24366),_=n(28790),F=n(86349),I=n(99294);const b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class w{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this._loadOptions={url:e.url,customParameters:e.customParameters};const n=[];await this._checkProjection(e.spatialReference);let s=null;e.url&&(s=await this._fetch(t?.signal));const i=(0,h.my)(s,{geometryType:e.geometryType}),o=e.fields||i.fields||[],a=null!=e.hasZ?e.hasZ:i.hasZ,u=i.geometryType;let l=e.objectIdField||i.objectIdFieldName||"__OBJECTID";const p=e.spatialReference||c.Zn;let y=e.timeInfo;o===i.fields&&i.unknownFields.length>0&&n.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:i.unknownFields}});let m=new _.Z(o).get(l);m?("esriFieldTypeString"!==m.type&&(m.type="esriFieldTypeOID"),m.editable=!1,m.nullable=!1,l=m.name):(m={alias:l,name:l,type:"string"===i.objectIdFieldType?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(m));const w={};for(const c of o){if(null==c.name&&(c.name=c.alias),null==c.alias&&(c.alias=c.name),!c.name)throw new r.Z("geojson-layer:invalid-field-name","field name is missing",{field:c});if(!F.v.jsonValues.includes(c.type))throw new r.Z("geojson-layer:invalid-field-type",`invalid type for field "${c.name}"`,{field:c});if(c.name!==m.name){const e=(0,I.os)(c);void 0!==e&&(w[c.name]=e)}}this._fieldsIndex=new _.Z(o);const E=this._fieldsIndex.requiredFields.indexOf(m);if(E>-1&&this._fieldsIndex.requiredFields.splice(E,1),y){if(y.startTimeField){const e=this._fieldsIndex.get(y.startTimeField);e?(y.startTimeField=e.name,e.type="esriFieldTypeDate"):y.startTimeField=null}if(y.endTimeField){const e=this._fieldsIndex.get(y.endTimeField);e?(y.endTimeField=e.name,e.type="esriFieldTypeDate"):y.endTimeField=null}if(y.trackIdField){const e=this._fieldsIndex.get(y.trackIdField);e?y.trackIdField=e.name:(y.trackIdField=null,n.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:y}}))}y.startTimeField||y.endTimeField||(n.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:y}}),y=null)}const T=u?(0,g.bU)(u):null,S={warnings:n,featureErrors:[],layerDefinition:{...b,drawingInfo:T,templates:(0,g.Hq)(w),extent:null,geometryType:u,objectIdField:l,fields:o,hasZ:!!a,timeInfo:y}};this._queryEngine=new f.q({fields:o,geometryType:u,hasM:!1,hasZ:a,objectIdField:l,spatialReference:p,timeInfo:y,featureStore:new d.Z({geometryType:u,hasM:!1,hasZ:a}),cacheSpatialQueries:!0}),this._createDefaultAttributes=(0,g.Dm)(w,l);const j=await this._createFeatures(s);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,j);const q=this._normalizeFeatures(j,S.warnings,S.featureErrors);if(this._queryEngine.featureStore.addMany(q),S.layerDefinition.extent=this._queryEngine.fullExtent,S.layerDefinition.timeInfo){const{start:e,end:t}=this._queryEngine.timeExtent;S.layerDefinition.timeInfo.timeExtent=[e,t]}return S}async applyEdits(e){const{spatialReference:t,geometryType:n}=this._queryEngine;return await Promise.all([(0,m.b)(t,n),(0,y._W)(e.adds,t),(0,y._W)(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){return this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=(0,i.vr)(this._snapshotFeatures),this._snapshotTask.promise.then((e=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,e);const t=this._normalizeFeatures(e);t&&this._queryEngine.featureStore.addMany(t)}),(e=>{this._queryEngine.featureStore.clear(),(0,u.D_)(e)||o.Z.getLogger("esri.layers.GeoJSONLayer").error(new r.Z("geojson-layer:refresh","An error occurred during refresh",{error:e}))})),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:n,objectIdField:s}=this._queryEngine,i=(0,h.lG)(e,{geometryType:t,hasZ:n,objectIdField:s});if(!(0,c.fS)(this._queryEngine.spatialReference,c.Zn))for(const r of i)(0,a.pC)(r.geometry)&&(r.geometry=(0,p.GH)((0,y.iV)((0,p.di)(r.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),c.Zn,this._queryEngine.spatialReference)));return i}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:n}=this._loadOptions,i=(await(0,s["default"])(t,{responseType:"json",query:{...n},signal:e})).data;return await(0,h.O3)(i),i}_normalizeFeatures(e,t,n){const{objectIdField:s}=this._queryEngine,i=[];for(const r of e){const e=this._createDefaultAttributes(),o=(0,m.O0)(this._fieldsIndex,e,r.attributes,!0,t);o?n?.push(o):(this._assignObjectId(e,r.attributes,!0),r.attributes=e,r.objectId=e[s],i.push(r))}return i}_applyEdits(e){const{adds:t,updates:n,deletes:s}=e,i={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(i,t),n&&n.length&&this._applyUpdateEdits(i,n),s&&s.length){for(const e of s)i.deleteResults.push((0,m.d1)(e));this._queryEngine.featureStore.removeManyById(s)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:i}}_applyAddEdits(e,t){const{addResults:n}=e,{geometryType:s,hasM:i,hasZ:r,objectIdField:o,spatialReference:u,featureStore:c}=this._queryEngine,d=[];for(const p of t){if(p.geometry&&s!==(0,l.Ji)(p.geometry)){n.push((0,m.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,m.O0)(this._fieldsIndex,t,p.attributes);if(i)n.push(i);else{if(this._assignObjectId(t,p.attributes),p.attributes=t,null!=p.uid){const t=p.attributes[o];e.uidToObjectId[p.uid]=t}if((0,a.pC)(p.geometry)){const e=p.geometry.spatialReference??u;p.geometry=(0,y.iV)((0,m.og)(p.geometry,e),e,u)}d.push(p),n.push((0,m.d1)(p.attributes[o]))}}c.addMany((0,p.Yn)([],d,s,r,i,o))}_applyUpdateEdits({updateResults:e},t){const{geometryType:n,hasM:s,hasZ:i,objectIdField:r,spatialReference:o,featureStore:u}=this._queryEngine;for(const c of t){const{attributes:t,geometry:d}=c,f=t&&t[r];if(null==f){e.push((0,m.av)(`Identifier field ${r} missing`));continue}if(!u.has(f)){e.push((0,m.av)(`Feature with object id ${f} missing`));continue}const h=(0,p.EI)(u.getFeature(f),n,i,s);if((0,a.pC)(d)){if(n!==(0,l.Ji)(d)){e.push((0,m.av)("Incorrect geometry type."));continue}const t=d.spatialReference??o;h.geometry=(0,y.iV)((0,m.og)(d,t),t,o)}if(t){const n=(0,m.O0)(this._fieldsIndex,h.attributes,t);if(n){e.push(n);continue}}u.add((0,p.XA)(h,n,i,s,r)),e.push((0,m.d1)(f))}}_createObjectIdGenerator(e,t){const n=e.fieldsIndex.get(e.objectIdField);if("esriFieldTypeString"===n.type)return()=>n.name+"-"+Date.now().toString(16);let s=Number.NEGATIVE_INFINITY;for(const i of t)i.objectId&&(s=Math.max(s,i.objectId));return s=Math.max(0,s)+1,()=>s++}_assignObjectId(e,t,n=!1){const s=this._queryEngine.objectIdField;e[s]=n&&s in t?t[s]:this._objectIdGenerator()}async _checkProjection(e){try{await(0,y._W)(c.Zn,e)}catch{throw new r.Z("geojson-layer","Projection not supported")}}}},61957:function(e,t,n){n.d(t,{O3:function(){return O},lG:function(){return Z},my:function(){return P},q9:function(){return u}});var s=n(70375),i=n(59958),r=n(15540),o=n(99294);const a={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function u(e){return a[e]}function*l(e){switch(e.type){case"Feature":yield e;break;case"FeatureCollection":for(const t of e.features)t&&(yield t)}}function*c(e){if(!e)return null;switch(e.type){case"Point":yield e.coordinates;break;case"LineString":case"MultiPoint":yield*e.coordinates;break;case"MultiLineString":case"Polygon":for(const t of e.coordinates)yield*t;break;case"MultiPolygon":for(const t of e.coordinates)for(const e of t)yield*e}}function*p(e,t={}){const{geometryType:n,objectIdField:s}=t;for(const o of e){const{geometry:e,properties:a,id:l}=o;if(e&&u(e.type)!==n)continue;const c=a||{};let p=c[s]??null;s&&null!=l&&!c[s]&&(c[s]=p=l);const d=new i.u_(e?m(new r.Z,e,t):null,c,null,p);yield d}}function d(e){for(const t of e)if(t.length>2)return!0;return!1}function y(e){return!h(e)}function f(e){return h(e)}function h(e){let t=0;for(let n=0;n<e.length;n++){const s=e[n],i=e[(n+1)%e.length];t+=s[0]*i[1]-i[0]*s[1]}return t<=0}function g(e){const t=e[0],n=e[e.length-1];return t[0]===n[0]&&t[1]===n[1]&&t[2]===n[2]||e.push(t),e}function m(e,t,n){switch(t.type){case"LineString":return _(e,t,n);case"MultiLineString":return F(e,t,n);case"MultiPoint":return I(e,t,n);case"MultiPolygon":return b(e,t,n);case"Point":return w(e,t,n);case"Polygon":return E(e,t,n)}}function _(e,t,n){return j(e,t.coordinates,n),e}function F(e,t,n){for(const s of t.coordinates)j(e,s,n);return e}function I(e,t,n){return j(e,t.coordinates,n),e}function b(e,t,n){for(const s of t.coordinates){T(e,s[0],n);for(let t=1;t<s.length;t++)S(e,s[t],n)}return e}function w(e,t,n){return x(e,t.coordinates,n),e}function E(e,t,n){const s=t.coordinates;T(e,s[0],n);for(let i=1;i<s.length;i++)S(e,s[i],n);return e}function T(e,t,n){const s=g(t);y(s)?q(e,s,n):j(e,s,n)}function S(e,t,n){const s=g(t);f(s)?q(e,s,n):j(e,s,n)}function j(e,t,n){for(const s of t)x(e,s,n);e.lengths.push(t.length)}function q(e,t,n){for(let s=t.length-1;s>=0;s--)x(e,t[s],n);e.lengths.push(t.length)}function x(e,t,n){const[s,i,r]=t;e.coords.push(s,i),n.hasZ&&e.coords.push(r||0)}function k(e){switch(typeof e){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function O(e){if(!e)throw new s.Z("geojson-layer:empty","GeoJSON data is empty");if("Feature"!==e.type&&"FeatureCollection"!==e.type)throw new s.Z("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:e});const{crs:t}=e;if(!t)return;const n="string"==typeof t?t:"name"===t.type?t.properties.name:"EPSG"===t.type?t.properties.code:null,i=new RegExp(".*(CRS84H?|4326)$","i");if(!n||!i.test(n))throw new s.Z("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function P(e,t={}){const n=[],s=new Set,i=new Set;let r,a=!1,p=null,y=!1,{geometryType:f=null}=t,h=!1;for(const m of l(e)){const{geometry:e,properties:t,id:l}=m;if((!e||(f||(f=u(e.type)),u(e.type)===f))&&(a||(a=d(c(e))),y||(y=null!=l,y&&(r=typeof l,p=Object.keys(t).filter((e=>t[e]===l)))),y&&null!=l&&(p.length>1?p=p.filter((e=>t[e]===l)):1===p.length&&(p=t[p[0]]===l?p:[])),!h&&t)){let e=!0;for(const r in t){if(s.has(r))continue;const a=t[r];if(null==a){e=!1,i.add(r);continue}const u=k(a);"unknown"!==u?(i.delete(r),s.add(r),n.push({name:(0,o.q6)(r),alias:r,type:u})):i.add(r)}h=e}}const g=(0,o.q6)(1===p?.length&&p[0]||null);if(g)for(const u of n)if(u.name===g&&(0,o.H7)(u)){u.type="esriFieldTypeOID";break}return{fields:n,geometryType:f,hasZ:a,objectIdFieldName:g,objectIdFieldType:r,unknownFields:Array.from(i)}}function Z(e,t){return Array.from(p(l(e),t))}},40400:function(e,t,n){n.d(t,{Dm:function(){return c},Hq:function(){return p},MS:function(){return d},bU:function(){return a}});var s=n(39994),i=n(67134),r=n(10287),o=n(86094);function a(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?o.I4:"esriGeometryPolyline"===e?o.ET:o.lF}}}const u=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let l=1;function c(e,t){if((0,s.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let n=`this.${t} = null;`;for(const t in e)n+=`this${u.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const s=new Function(`\n      return class AttributesClass$${l++} {\n        constructor() {\n          ${n};\n        }\n      }\n    `)();return()=>new s}catch(n){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,i.d9)(e)}}]}function d(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:r.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}}}]);
//# sourceMappingURL=9955.f2391380.js.map