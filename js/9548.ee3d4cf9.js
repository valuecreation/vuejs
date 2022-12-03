"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[9548],{68577:function(e,t,r){r.d(t,{dp:function(){return a},yZ:function(){return n}});var i=r(17321);const s=96;function n(e,t){const r=t||e.extent,n=e.width,a=(0,i.c9)(r&&r.spatialReference);return r&&n?r.width/n*a*i.hd*s:0}function a(e,t){return e/((0,i.c9)(t)*i.hd*s)}},59468:function(e,t,r){function i(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function s(e){let t=0,r=0;for(let i=0;i<e.length;i++){const s=e[i].size;"number"==typeof s&&(t+=s,r++)}return t/r}function n(e,t){return"number"==typeof e?e:e&&e.stops&&e.stops.length?s(e.stops):t}function a(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(n(r,e)+n(i,e))/2}));let i=0;const s=r.length;if(0===s)return e;for(let n=0;n<s;n++)i+=r[n];const a=Math.floor(i/s);return Math.max(a,e)}function o(e){const t=e&&e.renderer,r="touch"===(e&&e.event&&e.event.pointerType)?9:6;if(!t)return r;const s="visualVariables"in t?a(r,t.visualVariables):r;if("simple"===t.type)return i(s,t.symbol);if("unique-value"===t.type){let e=s;return t.uniqueValueInfos?.forEach((t=>{e=i(e,t.symbol)})),e}if("class-breaks"===t.type){let e=s;return t.classBreakInfos.forEach((t=>{e=i(e,t.symbol)})),e}return"dot-density"===t.type||t.type,s}r.d(t,{k:function(){return o}})},89548:function(e,t,r){r.r(t),r.d(t,{default:function(){return ue}});var i=r(36663),s=r(80085),n=r(33511),a=r(13802),o=r(78668),l=r(76868),p=r(81977),u=(r(7753),r(7283)),h=r(40266),c=r(12688),d=r(81885),y=r(9332),f=r(14945),m=r(75291),g=r(26216),b=(r(59338),r(70375)),w=r(39994),v=r(86114),x=r(61681),_=r(17321),C=r(91772),I=r(68577),R=r(31e3),P=r(24065),E=r(21586),F=r(59468),S=r(66341),j=r(51033),V=r(84238),M=r(84684),N=r(53736),G=r(93698);const O=e=>e.spatialReference.wkid||JSON.stringify(e.spatialReference);function T(e,t){const{dpi:r,gdbVersion:i,geometry:s,geometryPrecision:n,height:a,layerOption:o,mapExtent:l,maxAllowableOffset:p,returnFieldName:u,returnGeometry:h,returnUnformattedValues:c,returnZ:d,spatialReference:y,timeExtent:f,tolerance:m,width:g}=e.toJSON(),{dynamicLayers:b,layerDefs:w,layerIds:v}=Z(e),_=t&&(0,x.pC)(t.geometry)?t.geometry:null,C={geometryPrecision:n,maxAllowableOffset:p,returnFieldName:u,returnGeometry:h,returnUnformattedValues:c,returnZ:d,tolerance:m},I=_&&_.toJSON()||s;if(C.imageDisplay=`${g},${a},${r}`,i&&(C.gdbVersion=i),I&&(delete I.spatialReference,C.geometry=JSON.stringify(I),C.geometryType=(0,N.Ji)(I)),y?C.sr=y.wkid||JSON.stringify(y):I&&I.spatialReference?C.sr=O(I):l&&l.spatialReference&&(C.sr=O(l)),C.time=f?[f.start,f.end].join(","):null,l){const{xmin:e,ymin:t,xmax:r,ymax:i}=l;C.mapExtent=`${e},${t},${r},${i}`}return w&&(C.layerDefs=w),b&&!w&&(C.dynamicLayers=b),C.layers="popup"===o?"visible":o,v&&!b&&(C.layers+=`:${v.join(",")}`),C}function Z(e){const{mapExtent:t,floors:r,width:i,sublayers:s,layerIds:n,layerOption:a,gdbVersion:o}=e,l=s?.find((e=>null!=e.layer))?.layer?.serviceSublayers,p="popup"===a,u={},h=(0,I.yZ)({extent:t,width:i,spatialReference:t?.spatialReference}),c=[],d=e=>{const t=0===h,r=0===e.minScale||h<=e.minScale,i=0===e.maxScale||h>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(d);else{if(!1===n?.includes(e.id)||p&&(!e.popupTemplate||!e.popupEnabled))return;c.unshift(e)}};if(s?.forEach(d),s&&!c.length)u.layerIds=[];else{const e=(0,G.FN)(c,l,o),t=c.map((e=>{const t=(0,E.f)(r,e);return e.toExportImageJSON(t)}));if(e)u.dynamicLayers=JSON.stringify(t);else{if(s){let e=c.map((({id:e})=>e));n&&(e=e.filter((e=>n.includes(e)))),u.layerIds=e}else n?.length&&(u.layerIds=n);const e=U(r,c);if((0,x.pC)(e)&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(u.layerDefs=JSON.stringify(t))}}}return u}function U(e,t){const r=!!e?.length,i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,E.f)(e,t),i=(0,M._)(r,t.definitionExpression);return{id:t.id,definitionExpression:i}})):null}var q,A=r(91957),L=r(37956),k=r(72285),H=r(14685);let J=q=class extends k.wq{constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}static from(e){return(0,u.TJ)(q,e)}};(0,i._)([(0,p.Cb)({type:Number,json:{write:!0}})],J.prototype,"dpi",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"floors",void 0),(0,i._)([(0,p.Cb)({type:String,json:{write:!0}})],J.prototype,"gdbVersion",void 0),(0,i._)([(0,p.Cb)({types:A.qM,json:{read:N.im,write:!0}})],J.prototype,"geometry",void 0),(0,i._)([(0,p.Cb)({type:Number,json:{write:!0}})],J.prototype,"geometryPrecision",void 0),(0,i._)([(0,p.Cb)({type:Number,json:{write:!0}})],J.prototype,"height",void 0),(0,i._)([(0,p.Cb)({type:[Number],json:{write:!0}})],J.prototype,"layerIds",void 0),(0,i._)([(0,p.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],J.prototype,"layerOption",void 0),(0,i._)([(0,p.Cb)({type:C.Z,json:{write:!0}})],J.prototype,"mapExtent",void 0),(0,i._)([(0,p.Cb)({type:Number,json:{write:!0}})],J.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],J.prototype,"returnFieldName",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],J.prototype,"returnGeometry",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],J.prototype,"returnM",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],J.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,p.Cb)({type:Boolean,json:{write:!0}})],J.prototype,"returnZ",void 0),(0,i._)([(0,p.Cb)({type:H.Z,json:{write:!0}})],J.prototype,"spatialReference",void 0),(0,i._)([(0,p.Cb)()],J.prototype,"sublayers",void 0),(0,i._)([(0,p.Cb)({type:L.Z,json:{write:!0}})],J.prototype,"timeExtent",void 0),(0,i._)([(0,p.Cb)({type:Number,json:{write:!0}})],J.prototype,"tolerance",void 0),(0,i._)([(0,p.Cb)({type:Number,json:{write:!0}})],J.prototype,"width",void 0),J=q=(0,i._)([(0,h.j)("esri.rest.support.IdentifyParameters")],J);const B=J;var z=r(34248),$=r(39835),Q=r(59659);let D=class extends k.wq{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return s.Z.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),(0,x.pC)(i)&&(t.geometry=i.toJSON(),t.geometryType=Q.P$.toJSON(i.type))}};(0,i._)([(0,p.Cb)({type:String,json:{write:!0}})],D.prototype,"displayFieldName",void 0),(0,i._)([(0,p.Cb)({type:s.Z})],D.prototype,"feature",void 0),(0,i._)([(0,z.r)("feature",["attributes","geometry"])],D.prototype,"readFeature",null),(0,i._)([(0,$.c)("feature")],D.prototype,"writeFeature",null),(0,i._)([(0,p.Cb)({type:Number,json:{write:!0}})],D.prototype,"layerId",void 0),(0,i._)([(0,p.Cb)({type:String,json:{write:!0}})],D.prototype,"layerName",void 0),D=(0,i._)([(0,h.j)("esri.rest.support.IdentifyResult")],D);const W=D;async function K(e,t,r){const i=(t=X(t)).geometry?[t.geometry]:[],s=(0,V.en)(e);return s.path+="/identify",(0,j.aX)(i).then((e=>{const i=T(t,{geometry:e&&e[0]}),n=(0,V.cv)({...s.query,f:"json",...i}),a=(0,V.lA)(n,r);return(0,S["default"])(s.path,a).then(Y).then((e=>ee(e,t.sublayers)))}))}function Y(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>W.fromJSON(e))),t}function X(e){return B.from(e)}function ee(e,t){if(!t?.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const s of e.results)s.feature.sourceLayer=r.get(s.layerId);return e}var te=r(30879),re=r(94449),ie=r(59439),se=r(1759);let ne=null;const ae=e=>{let t=class extends e{constructor(){super(...arguments),this._featuresResolutions=new WeakMap,this.highlightGraphics=new re.J,this.updateHighlightedFeatures=(0,o.Ds)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){this.exportImageParameters=new P.R({layer:this.layer}),this.handles.add([(0,l.on)((()=>this.highlightGraphics),"change",(e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e.added).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)}))])}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}async fetchPopupFeatures(e,t){const{layer:r}=this;if(!e)throw new b.Z("mapimagelayer:fetchPopupFeatures","Nothing to fetch without area",{layer:r});const i=this.layer.capabilities?.operations?.supportsQuery??!0;if(!((this.layer.capabilities?.operations?.supportsIdentify??1)&&this.layer.version>=10.5)&&!i)throw new b.Z("mapimagelayer:fetchPopupFeatures-not-supported","query operation is disabled for this service",{layer:r});return i?this._fetchPopupFeaturesUsingQueries(e,t):this._fetchPopupFeaturesUsingIdentify(e,t)}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}async _updateHighlightedFeaturesSymbols(e){for(const t of e){const e="renderer"in t.sourceLayer&&t.sourceLayer.renderer;"geometryType"in t.sourceLayer&&"point"===t.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(t).then((async i=>{let s="width"in i&&"height"in i&&null!=i.width&&null!=i.height?Math.max(i.width,i.height):"size"in i?i.size:null;const n="visualVariables"in e&&e.visualVariables?.find((e=>"size"===e.type));n&&(ne||(ne=(await Promise.resolve().then(r.bind(r,36496))).getSize),s=ne(n,t,{view:this.view.type,scale:this.view.scale,shape:"simple-marker"===i.type?i.style:null})),this.highlightGraphics.includes(t)&&(t.symbol=new se.Z({style:"square",size:s,xoffset:"xoffset"in i?i.xoffset:0,yoffset:"yoffset"in i?i.yoffset:0}),t.visible=!0,this.highlightGraphicUpdated(t,"symbol"))}))}}async _updateHighlightedFeaturesGeometries(e){this._highlightGeometriesResolution=e;const t=this.highlightGraphics;if(!t.length||!this.layer.capabilities.operations.supportsQuery)return;const r=this._getTargetResolution(e),i=new Map;for(const a of t)if(!this._featuresResolutions.has(a)||this._featuresResolutions.get(a)>r){const e=a.sourceLayer;(0,v.s1)(i,e,(()=>new Map)).set(a.getObjectId(),a)}const s=Array.from(i,(([e,t])=>{const i=e.createQuery();return i.objectIds=[...t.keys()],i.outFields=[e.objectIdField],i.returnGeometry=!0,i.maxAllowableOffset=r,i.outSpatialReference=this.view.spatialReference,e.queryFeatures(i)})),n=await Promise.all(s);if(!this.destroyed)for(const{features:a}of n)for(const e of a){const t=e.sourceLayer,s=i.get(t).get(e.getObjectId());s&&this.highlightGraphics.includes(s)&&(s.geometry=e.geometry,this.highlightGraphicUpdated(s,"geometry"),this._featuresResolutions.set(s,r))}}_getTargetResolution(e){const t=e*(0,_.c9)(this.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t){const r=await this._createIdentifyParameters(e,t);if((0,x.Wi)(r))return[];const{results:i}=await K(this.layer.parsedUrl,r);return i.map((e=>e.feature))}async _createIdentifyParameters(e,t){const{floors:r,spatialReference:i,scale:s}=this.view,n=(0,x.pC)(t)?t.event:null,a=await this._collectPopupProviders(this.layer.sublayers,s,t);if(!a.length)return null;await Promise.all(a.map((({sublayer:e})=>e.load().catch((()=>{})))));const o=Math.min((0,w.Z)("mapimagelayer-popup-identify-max-tolerance"),this.layer.allSublayers.reduce(((e,t)=>t.renderer?(0,F.k)({renderer:t.renderer,event:n}):e),2)),l=this.createFetchPopupFeaturesQueryGeometry(e,o),p=(0,I.dp)(s,i),u=Math.round(l.width/p),h=new C.Z({xmin:l.center.x-p*u,ymin:l.center.y-p*u,xmax:l.center.x+p*u,ymax:l.center.y+p*u,spatialReference:l.spatialReference});return new B({floors:r,gdbVersion:this.layer.gdbVersion,geometry:e,height:u,layerOption:"popup",mapExtent:h,returnGeometry:!0,spatialReference:i,sublayers:this.layer.sublayers,timeExtent:this.timeExtent,tolerance:o,width:u})}async _fetchPopupFeaturesUsingQueries(e,t){const r=await this._collectPopupProviders(this.layer.sublayers,this.view.scale,t),i=(0,x.pC)(t)?t.event:null,s=r.map((async({sublayer:t,popupTemplate:r})=>{await t.load().catch((()=>{}));const s=t.createQuery(),n=(0,F.k)({renderer:t.renderer,event:i}),a=this.createFetchPopupFeaturesQueryGeometry(e,n);if(s.geometry=a,s.outFields=await(0,ie.e)(t,r),s.timeExtent=this.timeExtent,"floors"in this.view){const e=this.view?.floors?.clone(),r=(0,E.f)(e,t);(0,x.pC)(r)&&(s.where=s.where?`(${s.where}) AND (${r})`:r)}const o=this._getTargetResolution(a.width/n),l=await this._loadArcadeModules(r),p="point"===t.geometryType||l&&l.arcadeUtils.hasGeometryOperations(r);p||(s.maxAllowableOffset=o);const{features:u}=await t.queryFeatures(s),h=p?0:o;for(const e of u)this._featuresResolutions.set(e,h);return u}));return(await(0,o.as)(s)).reverse().reduce(((e,t)=>t.value?[...e,...t.value]:e),[]).filter((e=>null!=e))}async _collectPopupProviders(e,t,r){const i=[],s=async e=>{const n=0===e.minScale||t<=e.minScale,a=0===e.maxScale||t>=e.maxScale;if(e.visible&&n&&a)if(e.sublayers)e.sublayers.forEach(s);else if(e.popupEnabled){const t=(0,ie.V)(e,{...r,defaultPopupTemplateEnabled:!1});(0,x.pC)(t)&&i.unshift({sublayer:e,popupTemplate:t})}},n=e.toArray().reverse().map(s);return await Promise.all(n),i}_loadArcadeModules(e){if(e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type)))return(0,te.LC)()}};return(0,i._)([(0,p.Cb)()],t.prototype,"highlightGraphics",void 0),(0,i._)([(0,p.Cb)()],t.prototype,"exportImageParameters",void 0),(0,i._)([(0,p.Cb)({readOnly:!0})],t.prototype,"exportImageVersion",null),(0,i._)([(0,p.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,p.Cb)()],t.prototype,"suspended",void 0),(0,i._)([(0,p.Cb)(R.qG)],t.prototype,"timeExtent",void 0),t=(0,i._)([(0,h.j)("esri.views.layers.MapImageLayerView")],t),t};var oe=r(55068),le=r(99621);let pe=class extends(ae((0,oe.Z)((0,d.y)(g.Z)))){update(e){this.strategy.update(e).catch((e=>{(0,o.D_)(e)||a.Z.getLogger(this.declaredClass).error(e)})),e.stationary&&this.updateHighlightedFeatures(e.state.resolution),this._highlightView.processUpdate(e)}attach(){const{imageMaxWidth:e,imageMaxHeight:t,version:r}=this.layer,i=r>=10.3,s=r>=10;this._bitmapContainer=new c.c,this.container.addChild(this._bitmapContainer),this._highlightView=new y.Z({view:this.view,graphics:this.highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new f.Z(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container),this.strategy=new m.Z({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:e,imageMaxHeight:t,imageRotationSupported:i,imageNormalizationSupported:s,hidpi:!0}),this.handles.add((0,l.YP)((()=>this.exportImageVersion),(()=>this.requestUpdate())),"exportImageVersion"),this.handles.add((0,l.YP)((()=>this.view?.floors),(()=>this.requestUpdate())),"view.floors"),this.requestUpdate()}detach(){this.handles.remove("exportImageVersion"),this.handles.remove("view.floors"),this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(e){let t=null;if(e instanceof s.Z?t=[e]:n.Z.isCollection(e)&&e.length>0?t=e.toArray():Array.isArray(e)&&e.length>0&&(t=e),t=t?.filter(Boolean),!t||!t.length)return{remove:()=>{}};for(const r of t)"geometryType"in r.sourceLayer&&"point"===r.sourceLayer.geometryType&&(r.visible=!1);return this.highlightGraphics.addMany(t),{remove:()=>{this.highlightGraphics.removeMany(t)}}}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}createFetchPopupFeaturesQueryGeometry(e,t){return(0,le.K)(e,t,this.view)}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}highlightGraphicUpdated(e,t){this._highlightView.graphicUpdateHandler({graphic:e,property:t})}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}fetchImageBitmap(e,t,r,i){return this.layer.fetchImageBitmap(e,t,r,{timeExtent:this.timeExtent,floors:this.view.floors,...i})}};(0,i._)([(0,p.Cb)()],pe.prototype,"strategy",void 0),(0,i._)([(0,p.Cb)()],pe.prototype,"updating",void 0),pe=(0,i._)([(0,h.j)("esri.views.2d.layers.MapImageLayerView2D")],pe);const ue=pe},14945:function(e,t,r){r.d(t,{Z:function(){return p}});var i=r(36663),s=(r(13802),r(7283),r(7753),r(70375),r(39994),r(40266)),n=r(38716),a=r(76661),o=r(91907);let l=class extends a.Z{doRender(e){e.drawPhase===n.jx.HIGHLIGHT&&super.doRender(e)}renderChildren(e){if(this.attributeView.update(),!this.children.some((e=>e.hasData)))return;this.attributeView.bindTextures(e.context),super.renderChildren(e);const{painter:t}=e,r=t.effects.highlight;r.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(o.lk.COLOR_BUFFER_BIT),this._renderChildren(e,r.defines.concat(["highlightAll"])),r.draw(e),r.unbind()}};l=(0,i._)([(0,s.j)("esri.views.2d.layers.support.HighlightGraphicContainer")],l);const p=l},59439:function(e,t,r){r.d(t,{V:function(){return a},e:function(){return n}});var i=r(61681),s=r(99294);async function n(e,t=e.popupTemplate){if((0,i.Wi)(t))return[];const r=await t.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:n}=t,{objectIdField:a,typeIdField:o,globalIdField:l,relationships:p}=e;if(r.includes("*"))return["*"];const u=n?await(0,s.CH)(e):[],h=(0,s.Q0)(e.fieldsIndex,[...r,...u]);return o&&h.push(o),h&&a&&e.fieldsIndex.has(a)&&!h.includes(a)&&h.push(a),h&&l&&e.fieldsIndex.has(l)&&!h.includes(l)&&h.push(l),p&&p.forEach((t=>{const{keyField:r}=t;h&&r&&e.fieldsIndex.has(r)&&!h.includes(r)&&h.push(r)})),h}function a(e,t){return e.popupTemplate?e.popupTemplate:(0,i.pC)(t)&&t.defaultPopupTemplateEnabled&&(0,i.pC)(e.defaultPopupTemplate)?e.defaultPopupTemplate:null}},99621:function(e,t,r){r.d(t,{K:function(){return a}});r(91957);var i=r(61681),s=r(17321),n=r(91772);function a(e,t,r,a=new n.Z){let o;if("2d"===r.type)o=t*r.resolution;else if("3d"===r.type){const n=r.overlayPixelSizeInMapUnits(e),a=r.basemapSpatialReference;o=(0,i.pC)(a)&&!a.equals(r.spatialReference)?(0,s.c9)(a)/(0,s.c9)(r.spatialReference):t*n}const l=e.x-o,p=e.y-o,u=e.x+o,h=e.y+o,{spatialReference:c}=r;return a.xmin=Math.min(l,u),a.ymin=Math.min(p,h),a.xmax=Math.max(l,u),a.ymax=Math.max(p,h),a.spatialReference=c,a}new n.Z}}]);
//# sourceMappingURL=9548.ee3d4cf9.js.map