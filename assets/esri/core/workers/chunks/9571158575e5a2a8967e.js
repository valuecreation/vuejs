"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[9356,4202,8694,3492],{3920:(e,t,i)=>{i.d(t,{p:()=>d,r:()=>p});var r=i(43697),o=i(15923),n=i(61247),s=i(5600),l=i(52011),a=i(72762);const d=e=>{let t=class extends e{destroy(){this.destroyed||(this._get("handles")?.destroy(),this._get("updatingHandles")?.destroy())}get handles(){return this._get("handles")||new n.Z}get updatingHandles(){return this._get("updatingHandles")||new a.t}};return(0,r._)([(0,s.Cb)({readOnly:!0})],t.prototype,"handles",null),(0,r._)([(0,s.Cb)({readOnly:!0})],t.prototype,"updatingHandles",null),t=(0,r._)([(0,l.j)("esri.core.HandleOwner")],t),t};let p=class extends(d(o.Z)){};p=(0,r._)([(0,l.j)("esri.core.HandleOwner")],p)},42033:(e,t,i)=>{i.d(t,{E:()=>o,_:()=>n});var r=i(70586);async function o(e,t){const{WhereClause:r}=await i.e(1534).then(i.bind(i,41534));return r.create(e,t)}function n(e,t){return(0,r.pC)(e)?(0,r.pC)(t)?`(${e}) AND (${t})`:e:t}},72762:(e,t,i)=>{i.d(t,{t:()=>u});var r=i(43697),o=i(15923),n=i(61247),s=i(70586),l=i(17445),a=i(1654),d=i(5600),p=i(52011);let u=class extends o.Z{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._handles=new n.Z,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll(),this._handles.destroy()}add(e,t,i={}){return this._installWatch(e,t,i,l.YP)}addWhen(e,t,i={}){return this._installWatch(e,t,i,l.gx)}addOnCollectionChange(e,t,{initial:i=!1,final:r=!1}={}){const o=++this._handleId;return this._handles.add([(0,l.on)(e,"after-changes",this._createSyncUpdatingCallback(),l.Z_),(0,l.on)(e,"change",t,{onListenerAdd:i?e=>t({added:e.toArray(),removed:[]}):void 0,onListenerRemove:r?e=>t({added:[],removed:e.toArray()}):void 0})],o),{remove:()=>this._handles.remove(o)}}addPromise(e){if((0,s.Wi)(e))return e;const t=++this._handleId;this._handles.add({remove:()=>{this._pendingPromises.delete(e)&&(0!==this._pendingPromises.size||this._handles.has(c)||this._set("updating",!1))}},t),this._pendingPromises.add(e),this._set("updating",!0);const i=()=>this._handles.remove(t);return e.then(i,i),e}removeAll(){this._pendingPromises.clear(),this._handles.removeAll(),this._set("updating",!1)}_installWatch(e,t,i={},r){const o=++this._handleId;i.sync||this._installSyncUpdatingWatch(e,o);const n=r(e,t,i);return this._handles.add(n,o),{remove:()=>this._handles.remove(o)}}_installSyncUpdatingWatch(e,t){const i=this._createSyncUpdatingCallback(),r=(0,l.YP)(e,i,{sync:!0,equals:()=>!1});return this._handles.add(r,t),r}_createSyncUpdatingCallback(){return()=>{this._handles.remove(c),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this._handles.add((0,a.Os)((()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this._handles.remove(c))})),c)}}};(0,r._)([(0,d.Cb)({readOnly:!0})],u.prototype,"updating",void 0),u=(0,r._)([(0,p.j)("esri.core.support.WatchUpdatingTracking")],u);const c=-42},69285:(e,t,i)=>{i.d(t,{k:()=>s});var r=i(70586),o=i(67900),n=i(8744);function s(e,t,i){if((0,r.Wi)(t)||(0,r.Wi)(i)||i.vcsWkid||(0,n.fS)(t,i))return null;const s=(0,o._R)(t)/(0,o._R)(i);if(1===s)return null;switch(e){case"point":case"esriGeometryPoint":return e=>function(e,t){e&&null!=e.z&&(e.z*=t)}(e,s);case"polyline":case"esriGeometryPolyline":return e=>function(e,t){if(e)for(const i of e.paths)for(const e of i)e.length>2&&(e[2]*=t)}(e,s);case"polygon":case"esriGeometryPolygon":return e=>function(e,t){if(e)for(const i of e.rings)for(const e of i)e.length>2&&(e[2]*=t)}(e,s);case"multipoint":case"esriGeometryMultipoint":return e=>function(e,t){if(e)for(const i of e.points)i.length>2&&(i[2]*=t)}(e,s);case"extent":case"esriGeometryExtent":return e=>function(e,t){e&&null!=e.zmin&&null!=e.zmax&&(e.zmin*=t,e.zmax*=t)}(e,s);default:return null}}},76604:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var r=i(43697),o=i(20102),n=i(5600),s=(i(67676),i(75215),i(52011)),l=i(19238);let a=class extends l.default{constructor(e){super(e),this.geometryType="point",this.type="oriented-imagery",this.operationalLayerType="OrientedImageryLayer"}_verifySource(){if(super._verifySource(),"point"!==this.geometryType)throw new o.Z("feature-layer:invalid-geometry-type","OrientedImageryLayer only supports point geometry type")}};(0,r._)([(0,n.Cb)()],a.prototype,"cameraProperties",void 0),(0,r._)([(0,n.Cb)()],a.prototype,"coverage",void 0),(0,r._)([(0,n.Cb)()],a.prototype,"coveragePercent",void 0),(0,r._)([(0,n.Cb)()],a.prototype,"defaultSearchLocation",void 0),(0,r._)([(0,n.Cb)()],a.prototype,"depthImage",void 0),(0,r._)([(0,n.Cb)()],a.prototype,"digitalElevationModel",void 0),(0,r._)([(0,n.Cb)()],a.prototype,"geometryType",void 0),(0,r._)([(0,n.Cb)()],a.prototype,"imageProperties",void 0),(0,r._)([(0,n.Cb)()],a.prototype,"maximumDistance",void 0),(0,r._)([(0,n.Cb)({json:{read:!1},value:"oriented-imagery",readOnly:!0})],a.prototype,"type",void 0),(0,r._)([(0,n.Cb)({type:["OrientedImageryLayer"]})],a.prototype,"operationalLayerType",void 0),a=(0,r._)([(0,s.j)("esri.layers.OrientedImageryLayer")],a);const d=a},54295:(e,t,i)=>{i.d(t,{V:()=>s});var r=i(43697),o=i(5600),n=(i(67676),i(75215),i(52011));const s=e=>{let t=class extends e{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):"portalItem"in this?this.portalItem?.apiKey:null}set apiKey(e){null!=e?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,r._)([(0,o.Cb)({type:String})],t.prototype,"apiKey",null),t=(0,r._)([(0,n.j)("esri.layers.mixins.APIKeyMixin")],t),t}},17287:(e,t,i)=>{i.d(t,{Y:()=>d});var r=i(43697),o=i(92604),n=i(70586),s=i(5600),l=(i(67676),i(75215),i(52011)),a=i(66677);const d=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,a.Qc)(this.url);if((0,n.pC)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,a.Nm)(e,o.Z.getLogger(this.declaredClass)))}};return(0,r._)([(0,s.Cb)()],t.prototype,"title",null),(0,r._)([(0,s.Cb)({type:String})],t.prototype,"url",null),t=(0,r._)([(0,l.j)("esri.layers.mixins.ArcGISService")],t),t}},70082:(e,t,i)=>{i.d(t,{Z:()=>u});var r=i(43697),o=i(2368),n=i(35454),s=i(96674),l=i(5600),a=(i(67676),i(75215),i(52011));const d=new n.X({esriFeatureEditToolAutoCompletePolygon:"auto-complete-polygon",esriFeatureEditToolCircle:"circle",esriFeatureEditToolEllipse:"ellipse",esriFeatureEditToolFreehand:"freehand",esriFeatureEditToolLine:"line",esriFeatureEditToolNone:"none",esriFeatureEditToolPoint:"point",esriFeatureEditToolPolygon:"polygon",esriFeatureEditToolRectangle:"rectangle",esriFeatureEditToolArrow:"arrow",esriFeatureEditToolTriangle:"triangle",esriFeatureEditToolLeftArrow:"left-arrow",esriFeatureEditToolRightArrow:"right-arrow",esriFeatureEditToolUpArrow:"up-arrow",esriFeatureEditToolDownArrow:"down-arrow"});let p=class extends((0,o.J)(s.wq)){constructor(e){super(e),this.name=null,this.description=null,this.drawingTool=null,this.prototype=null,this.thumbnail=null}};(0,r._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"name",void 0),(0,r._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"description",void 0),(0,r._)([(0,l.Cb)({json:{read:d.read,write:d.write}})],p.prototype,"drawingTool",void 0),(0,r._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"prototype",void 0),(0,r._)([(0,l.Cb)({json:{write:!0}})],p.prototype,"thumbnail",void 0),p=(0,r._)([(0,a.j)("esri.layers.support.FeatureTemplate")],p);const u=p},16451:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(43697),o=i(2368),n=i(96674),s=i(5600),l=(i(67676),i(75215),i(71715)),a=i(52011),d=i(30556),p=i(72729),u=i(70082);let c=class extends((0,o.J)(n.wq)){constructor(e){super(e),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(e){const t={};for(const i of Object.keys(e))t[i]=(0,p.im)(e[i]);return t}writeDomains(e,t){const i={};for(const r of Object.keys(e))e[r]&&(i[r]=e[r]?.toJSON());t.domains=i}};(0,r._)([(0,s.Cb)({json:{write:!0}})],c.prototype,"id",void 0),(0,r._)([(0,s.Cb)({json:{write:!0}})],c.prototype,"name",void 0),(0,r._)([(0,s.Cb)({json:{write:!0}})],c.prototype,"domains",void 0),(0,r._)([(0,l.r)("domains")],c.prototype,"readDomains",null),(0,r._)([(0,d.c)("domains")],c.prototype,"writeDomains",null),(0,r._)([(0,s.Cb)({type:[u.Z],json:{write:!0}})],c.prototype,"templates",void 0),c=(0,r._)([(0,a.j)("esri.layers.support.FeatureType")],c);const h=c},56765:(e,t,i)=>{i.d(t,{Z:()=>p});var r,o=i(43697),n=i(46791),s=i(96674),l=i(5600),a=(i(67676),i(75215),i(52011));let d=r=class extends s.wq{constructor(e){super(e),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new n.Z}clone(){return new r({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,o._)([(0,l.Cb)({type:String,json:{write:!0}})],d.prototype,"floorField",void 0),(0,o._)([(0,l.Cb)({json:{read:!1,write:!1}})],d.prototype,"viewAllMode",void 0),(0,o._)([(0,l.Cb)({json:{read:!1,write:!1}})],d.prototype,"viewAllLevelIds",void 0),d=r=(0,o._)([(0,a.j)("esri.layers.support.LayerFloorInfo")],d);const p=d},51706:(e,t,i)=>{var r,o;function n(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function s(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?r.Expression:e.field&&"string"==typeof e.field?r.Field:r.Unknown}function a(e,t){const i=t||l(e),n=e.valueUnit||"unknown";return i===r.Unknown?o.Constant:e.stops?o.Stops:null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?o.ClampedLinear:"unknown"===n?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?o.Proportional:o.Additive:o.Identity:o.RealWorldSize}i.d(t,{PS:()=>l,QW:()=>a,RY:()=>r,hL:()=>o,iY:()=>n,qh:()=>s}),function(e){e.Unknown="unknown",e.Expression="expression",e.Field="field"}(r||(r={})),function(e){e.Unknown="unknown",e.Stops="stops",e.ClampedLinear="clamped-linear",e.Proportional="proportional",e.Additive="additive",e.Constant="constant",e.Identity="identity",e.RealWorldSize="real-world-size"}(o||(o={}))},28694:(e,t,i)=>{i.d(t,{p:()=>n});var r=i(70586),o=i(69285);function n(e,t,i){if(!i||!i.features||!i.hasZ)return;const n=(0,o.k)(i.geometryType,t,e.outSpatialReference);if(!(0,r.Wi)(n))for(const r of i.features)n(r.geometry)}},58333:(e,t,i)=>{i.d(t,{ET:()=>n,I4:()=>o,eG:()=>a,lF:()=>s,lj:()=>p,qP:()=>l,wW:()=>d});const r=[252,146,31,255],o={type:"esriSMS",style:"esriSMSCircle",size:6,color:r,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},n={type:"esriSLS",style:"esriSLSSolid",width:.75,color:r},s={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},l={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},a={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},d={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},p={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);