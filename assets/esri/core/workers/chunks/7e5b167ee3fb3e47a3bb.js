"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[639],{92908:(e,t,s)=>{s.d(t,{S:()=>r,X:()=>i});const i=1;function r(e,t){let s=0;for(const i of t){const t=i.attributes?.[e];"number"==typeof t&&isFinite(t)&&(s=Math.max(s,t))}return s}},30639:(e,t,s)=>{s.r(t),s.d(t,{default:()=>_});var i=s(20102),r=s(70586),n=s(33955),a=s(8744),o=s(98732),l=s(92908),u=s(57191),d=s(37427),p=s(50245),c=s(25278),y=s(23095),f=s(99514),h=s(86719),m=s(35671);const g=a.Zn,I={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:a.Zn},b={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};function F(e){return(0,n.wp)(e)?null!=e.z:!!e.hasZ}function S(e){return(0,n.wp)(e)?null!=e.m:!!e.hasM}class _{constructor(){this._queryEngine=null,this._nextObjectId=null}destroy(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e){const t=[],{features:s}=e,r=this._inferLayerProperties(s,e.fields),n=e.fields||[],a=null!=e.hasM?e.hasM:r.hasM,o=null!=e.hasZ?e.hasZ:r.hasZ,y=!e.spatialReference&&!r.spatialReference,F=y?g:e.spatialReference||r.spatialReference,S=y?I:null,_=e.geometryType||r.geometryType,E=!_;let T=e.objectIdField||r.objectIdField,x=e.timeInfo;if(!E&&(y&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!_))throw new i.Z("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!T)throw new i.Z("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");if(r.objectIdField&&T!==r.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:`Provided objectIdField "${T}" doesn't match the field name "${r.objectIdField}", found in the provided fields`}),T=r.objectIdField),T&&!r.objectIdField){let e=null;n.some((t=>t.name===T&&(e=t,!0)))?(e.type="esriFieldTypeOID",e.editable=!1,e.nullable=!1):n.unshift({alias:T,name:T,type:"esriFieldTypeOID",editable:!1,nullable:!1})}for(const l of n){if(null==l.name&&(l.name=l.alias),null==l.alias&&(l.alias=l.name),!l.name)throw new i.Z("feature-layer:invalid-field-name","field name is missing",{field:l});if(l.name===T&&(l.type="esriFieldTypeOID"),!h.v.jsonValues.includes(l.type))throw new i.Z("feature-layer:invalid-field-type",`invalid type for field "${l.name}"`,{field:l})}const q={};for(const i of n)if("esriFieldTypeOID"!==i.type&&"esriFieldTypeGlobalID"!==i.type){const e=(0,m.os)(i);void 0!==e&&(q[i.name]=e)}if(this._fieldsIndex=new f.Z(n),this._createDefaultAttributes=(0,c.Dm)(q,T),x){if(x.startTimeField){const e=this._fieldsIndex.get(x.startTimeField);e?(x.startTimeField=e.name,e.type="esriFieldTypeDate"):x.startTimeField=null}if(x.endTimeField){const e=this._fieldsIndex.get(x.endTimeField);e?(x.endTimeField=e.name,e.type="esriFieldTypeDate"):x.endTimeField=null}if(x.trackIdField){const e=this._fieldsIndex.get(x.trackIdField);e?x.trackIdField=e.name:(x.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:x}}))}x.startTimeField||x.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:x}}),x=null)}const R={warnings:t,featureErrors:[],layerDefinition:{...b,drawingInfo:(0,c.bU)(_),templates:(0,c.Hq)(q),extent:S,geometryType:_,objectIdField:T,fields:n,hasZ:!!o,hasM:!!a,timeInfo:x},assignedObjectIds:{}};if(this._queryEngine=new p.q({fields:n,geometryType:_,hasM:a,hasZ:o,objectIdField:T,spatialReference:F,featureStore:new u.Z({geometryType:_,hasM:a,hasZ:o}),timeInfo:x,cacheSpatialQueries:!0}),!s||!s.length)return this._nextObjectId=l.X,R;const j=(0,l.S)(T,s);return this._nextObjectId=j+1,await(0,d._W)(s,F),this._loadInitialFeatures(R,s)}async applyEdits(e){const{spatialReference:t,geometryType:s}=this._queryEngine;return await Promise.all([(0,y.b)(t,s),(0,d._W)(e.adds,t),(0,d._W)(e.updates,t)]),this._applyEdits(e)}queryFeatures(e,t={}){return this._queryEngine.executeQuery(e,t.signal)}queryFeatureCount(e,t={}){return this._queryEngine.executeQueryForCount(e,t.signal)}queryObjectIds(e,t={}){return this._queryEngine.executeQueryForIds(e,t.signal)}queryExtent(e,t={}){return this._queryEngine.executeQueryForExtent(e,t.signal)}querySnapping(e,t={}){return this._queryEngine.executeQueryForSnapping(e,t.signal)}_inferLayerProperties(e,t){let s,i,a=null,o=null,l=null;for(const u of e){const e=u.geometry;if(!(0,r.Wi)(e)&&(a||(a=(0,n.Ji)(e)),o||(o=e.spatialReference),null==s&&(s=F(e)),null==i&&(i=S(e)),a&&o&&null!=s&&null!=i))break}if(t&&t.length){let e=null;t.some((t=>{const s="esriFieldTypeOID"===t.type,i=!t.type&&t.name&&"objectid"===t.name.toLowerCase();return e=t,s||i}))&&(l=e.name)}return{geometryType:a,spatialReference:o,objectIdField:l,hasM:i,hasZ:s}}_loadInitialFeatures(e,t){const{geometryType:s,hasM:i,hasZ:a,objectIdField:l,spatialReference:u,featureStore:p}=this._queryEngine,c=[];for(const o of t){if(null!=o.uid&&(e.assignedObjectIds[o.uid]=-1),o.geometry&&s!==(0,n.Ji)(o.geometry)){e.featureErrors.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),i=(0,y.O0)(this._fieldsIndex,t,o.attributes,!0,e.warnings);i?e.featureErrors.push(i):(this._assignObjectId(t,o.attributes,!0),o.attributes=t,null!=o.uid&&(e.assignedObjectIds[o.uid]=o.attributes[l]),(0,r.pC)(o.geometry)&&(o.geometry=(0,d.iV)(o.geometry,o.geometry.spatialReference,u)),c.push(o))}if(p.addMany((0,o.Yn)([],c,s,a,i,l)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){const{start:t,end:s}=this._queryEngine.timeExtent;e.layerDefinition.timeInfo.timeExtent=[t,s]}return e}_applyEdits(e){const{adds:t,updates:s,deletes:i}=e,r={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(r,t),s&&s.length&&this._applyUpdateEdits(r,s),i&&i.length){for(const e of i)r.deleteResults.push((0,y.d1)(e));this._queryEngine.featureStore.removeManyById(i)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:r}}_applyAddEdits(e,t){const{addResults:s}=e,{geometryType:i,hasM:a,hasZ:l,objectIdField:u,spatialReference:p,featureStore:c}=this._queryEngine,f=[];for(const o of t){if(o.geometry&&i!==(0,n.Ji)(o.geometry)){s.push((0,y.av)("Incorrect geometry type."));continue}const t=this._createDefaultAttributes(),a=(0,y.O0)(this._fieldsIndex,t,o.attributes);if(a)s.push(a);else{if(this._assignObjectId(t,o.attributes),o.attributes=t,null!=o.uid){const t=o.attributes[u];e.uidToObjectId[o.uid]=t}if((0,r.pC)(o.geometry)){const e=o.geometry.spatialReference??p;o.geometry=(0,d.iV)((0,y.og)(o.geometry,e),e,p)}f.push(o),s.push((0,y.d1)(o.attributes[u]))}}c.addMany((0,o.Yn)([],f,i,l,a,u))}_applyUpdateEdits({updateResults:e},t){const{geometryType:s,hasM:i,hasZ:a,objectIdField:l,spatialReference:u,featureStore:p}=this._queryEngine;for(const c of t){const{attributes:t,geometry:f}=c,h=t&&t[l];if(null==h){e.push((0,y.av)(`Identifier field ${l} missing`));continue}if(!p.has(h)){e.push((0,y.av)(`Feature with object id ${h} missing`));continue}const m=(0,o.EI)(p.getFeature(h),s,a,i);if((0,r.pC)(f)){if(s!==(0,n.Ji)(f)){e.push((0,y.av)("Incorrect geometry type."));continue}const t=f.spatialReference??u;m.geometry=(0,d.iV)((0,y.og)(f,t),t,u)}if(t){const s=(0,y.O0)(this._fieldsIndex,m.attributes,t);if(s){e.push(s);continue}}p.add((0,o.XA)(m,s,a,i,l)),e.push((0,y.d1)(h))}}_assignObjectId(e,t,s=!1){const i=this._queryEngine.objectIdField;s&&t&&isFinite(t[i])?e[i]=t[i]:e[i]=this._nextObjectId++}}},25278:(e,t,s)=>{s.d(t,{Dm:()=>d,Hq:()=>p,MS:()=>c,bU:()=>o});var i=s(80442),r=s(22974),n=s(61159),a=s(58333);function o(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?a.I4:"esriGeometryPolyline"===e?a.ET:a.lF}}}const l=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let u=1;function d(e,t){if((0,i.Z)("esri-csp-restrictions"))return()=>({[t]:null,...e});try{let s=`this.${t} = null;`;for(const t in e)s+=`this${l.test(t)?`.${t}`:`["${t}"]`} = ${JSON.stringify(e[t])};`;const i=new Function(`\n      return class AttributesClass$${u++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `)();return()=>new i}catch(s){return()=>({[t]:null,...e})}}function p(e={}){return[{name:"New Feature",description:"",prototype:{attributes:(0,r.d9)(e)}}]}function c(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:t,supportsDelete:t,supportsEditing:t,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:t,supportsExceedsLimitStatistics:!0},query:n.g,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsGeometryUpdate:t,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1}}}},58333:(e,t,s)=>{s.d(t,{ET:()=>n,I4:()=>r,eG:()=>l,lF:()=>a,lj:()=>d,qP:()=>o,wW:()=>u});const i=[252,146,31,255],r={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},a={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},o={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},d={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);