"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[6857],{10110:function(e,t,i){i.d(t,{G:function(){return n}});var s=i(2443),r=i(91907);class n extends s.Z{constructor(){super(...arguments),this.requiresDedicatedFBO=!1}dispose(){}doRender(e){const t=this.createRenderParams(e),{context:i,painter:s,profiler:n}=t;this._prevFBO=i.getBoundFramebufferObject(),n.recordContainerStart(this.name);const a=this._getFbo(t),o=s.getRenderTarget();i.bindFramebuffer(a),s.setRenderTarget(a),i.setDepthWriteEnabled(!0),i.setColorMask(!0,!0,!0,!0),i.setClearColor(0,0,0,0),i.setClearDepth(1),i.clear(i.gl.COLOR_BUFFER_BIT|i.gl.DEPTH_BUFFER_BIT),i.setDepthWriteEnabled(!1);for(const r of this.children)r.beforeRender(e);for(const r of this.children)r.processRender(t);for(const r of this.children)r.afterRender(e);s.setRenderTarget(o),s.releaseFbo(a),i.bindFramebuffer(this._prevFBO),s.beforeRenderLayer(t,this._clippingInfos?255:0,this.computedOpacity),i.setStencilTestEnabled(!1),i.setStencilWriteMask(0),s.blitTexture(i,a.colorTexture,r.cw.NEAREST),s.compositeLayer(t,this.computedOpacity),n.recordContainerEnd()}createRenderParams(e){return{...super.createRenderParams(e),blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:1}}_getFbo(e){const{context:t,painter:i}=e,{width:s,height:r}=t.getViewport();return i.acquireFbo(s,r)}}},81885:function(e,t,i){i.d(t,{y:function(){return I}});var s=i(36663),r=i(33511),n=i(58811),a=i(70375),o=i(76868),h=i(81977),l=(i(7753),i(7283),i(40266)),p=i(10530),d=i(72285);let c=class extends d.wq{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,h.Cb)({readOnly:!0})],c.prototype,"version",null),c=(0,s._)([(0,l.j)("esri.views.layers.support.ClipArea")],c);const u=c;var y;let g=y=class extends u{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new y({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"left",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"right",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"top",void 0),(0,s._)([(0,h.Cb)({type:[Number,String],json:{write:!0}})],g.prototype,"bottom",void 0),g=y=(0,s._)([(0,l.j)("esri.views.layers.support.ClipRect")],g);const f=g;i(91957);var b,v=i(20031),w=i(53736),m=i(91772),_=i(89542);const C={base:v.Z,key:"type",typeMap:{extent:m.Z,polygon:_.Z}};let R=b=class extends u{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){return new b({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,s._)([(0,h.Cb)({types:C,json:{read:w.im,write:!0}})],R.prototype,"geometry",void 0),R=b=(0,s._)([(0,l.j)("esri.views.layers.support.Geometry")],R);const S=R;let V=class extends u{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,s._)([(0,h.Cb)({type:[[[Number]]],json:{write:!0}})],V.prototype,"path",void 0),V=(0,s._)([(0,l.j)("esri.views.layers.support.Path")],V);const P=V,T=r.Z.ofType({key:"type",base:null,typeMap:{rect:f,path:P,geometry:S}}),I=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new T,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1}initialize(){const e=this.view?.spatialReferenceLocked??!0,t=this.view?.spatialReference;t&&e&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new p.W),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.handles.add([(0,o.YP)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e),this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),o.tX),(0,o.YP)((()=>this.layer?.opacity??1),(e=>{this.container&&(this.container.opacity=e)}),o.tX),(0,o.YP)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),o.tX),(0,o.YP)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),o.tX),(0,o.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),o.tX),(0,o.YP)((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:e})=>{const t=e&&this.isVisibleAtScale(e);t!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",t)}),o.tX)]),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){const e=this.view?.spatialReference;return null==e||this.supportsSpatialReference(e)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this.updatingHandles?.updating)}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0===i||e<=i)&&(0===s||e>=s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.suspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.suspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}};return(0,s._)([(0,h.Cb)()],t.prototype,"attached",void 0),(0,s._)([(0,h.Cb)({type:T,set(e){const t=(0,n.Z)(e,this._get("clips"),T);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"container",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"moving",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updateRequested",void 0),(0,s._)([(0,h.Cb)()],t.prototype,"updating",null),(0,s._)([(0,h.Cb)()],t.prototype,"view",void 0),(0,s._)([(0,h.Cb)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),t=(0,s._)([(0,l.j)("esri.views.2d.layers.LayerView2D")],t),t}},96857:function(e,t,i){i.r(t),i.d(t,{default:function(){return w}});var s=i(36663),r=i(80085),n=i(33511),a=i(61681),o=i(76868),h=(i(13802),i(7283),i(7753),i(70375),i(39994),i(40266)),l=i(10530),p=i(10110),d=i(81885),c=i(68114),u=i(9332),y=i(26216);const g="sublayers",f="layerView",b=Object.freeze({remove(){},pause(){},resume(){}});let v=class extends((0,d.y)(y.Z)){constructor(){super(...arguments),this._highlightIds=new Map,this.container=new p.G}async fetchPopupFeatures(e){return Array.from(this.graphicsViews(),(t=>t.hitTest(e).filter((e=>!!e.popupTemplate)))).flat()}*graphicsViews(){(0,a.pC)(this._graphicsViewsFeatureCollectionMap)?yield*this._graphicsViewsFeatureCollectionMap.keys():(0,a.pC)(this._graphicsViews)?yield*this._graphicsViews:yield*[]}async hitTest(e,t){return Array.from(this.graphicsViews(),(t=>{const i=t.hitTest(e);if((0,a.pC)(this._graphicsViewsFeatureCollectionMap)){const e=this._graphicsViewsFeatureCollectionMap.get(t);for(const t of i)!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate),t.sourceLayer=t.layer=this.layer}return i})).flat().map((t=>({type:"graphic",graphic:t,layer:this.layer,mapPoint:e})))}highlight(e){let t;return"number"==typeof e?t=[e]:e instanceof r.Z?t=[e.uid]:Array.isArray(e)&&e.length>0?t="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):n.Z.isCollection(e)&&(t=e.map((e=>e&&e.uid)).toArray()),t=t.filter((e=>null!=e)),t.length?(this._addHighlight(t),{remove:()=>{this._removeHighlight(t)}}):b}update(e){for(const t of this.graphicsViews())t.processUpdate(e)}attach(){const e=this.view,t=()=>this.requestUpdate(),i=this.layer.featureCollections;if((0,a.pC)(i)&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of i){const i=new c.Z(this.view.featuresTilingScheme),r=new u.Z({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:i});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.handles.add([(0,o.YP)((()=>s.visible),(e=>r.container.visible=e),o.nn),(0,o.YP)((()=>r.updating),(()=>this.notifyChange("updating")),o.nn)],f)}this._updateHighlight()}else(0,a.pC)(this.layer.sublayers)&&this.handles.add((0,o.on)((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),g)}detach(){this._destroyGraphicsViews(),this.handles.remove(g)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.handles.remove(f);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),(0,a.Wi)(this.layer.sublayers))return;const e=[],t=this.view,i=()=>this.requestUpdate();for(const s of this.layer.sublayers){const r=new l.W,n=new c.Z(this.view.featuresTilingScheme);n.fadeTransitionEnabled=!0;const a=new u.Z({view:t,graphics:s.graphics,requestUpdateCallback:i,container:n});this.handles.add([s.on("graphic-update",a.graphicUpdateHandler),(0,o.YP)((()=>s.visible),(e=>a.container.visible=e),o.nn),(0,o.YP)((()=>a.updating),(()=>this.notifyChange("updating")),o.nn)],f),r.addChild(a.container),this.container.addChild(r),e.push(a)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys());for(const t of this.graphicsViews())t.setHighlight(e)}};v=(0,s._)([(0,h.j)("esri.views.2d.layers.MapNotesLayerView2D")],v);const w=v},68114:function(e,t,i){i.d(t,{Z:function(){return n}});var s=i(38716),r=i(76661);class n extends r.Z{renderChildren(e){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(e.context,!1),super.renderChildren(e),e.drawPhase===s.jx.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===s.jx.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))}_renderHighlight(e){const{painter:t}=e,i=t.effects.highlight;i.bind(e),this._renderChildren(e,i.defines),i.draw(e),i.unbind()}}},26216:function(e,t,i){i.d(t,{Z:function(){return y}});var s=i(36663),r=i(53404),n=i(31355),a=i(53280),o=i(86618),h=i(13802),l=i(61681),p=i(64189),d=i(81977),c=(i(7753),i(7283),i(40266));let u=class extends((0,a.p)((0,o.IG)((0,p.v)(n.Z.EventedMixin(r.Z))))){constructor(e){super(e),this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){const t=this.layer&&this.layer.id||"no id",i=this.layer&&this.layer.title||"no title";h.Z.getLogger(this.declaredClass).error("#resolve()",`Failed to resolve layer view (layer title: '${i}', id: '${t}')`,e)}}))}get fullOpacity(){return(0,l.Pt)(this.get("layer.opacity"),1)*(0,l.Pt)(this.get("parent.fullOpacity"),1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this.updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){return!0===this.layer?.visible}set visible(e){this._overrideIfSome("visible",e)}canResume(){return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready||!1}getSuspendInfo(){const e=this.parent&&this.parent.suspended?this.parent.suspendInfo:{},t=this;return t.view&&t.view.ready||(e.viewNotReady=!0),this.layer&&this.layer.loaded||(e.layerNotLoaded=!0),this.visible||(e.layerInvisible=!0),e}isUpdating(){return!1}};(0,s._)([(0,d.Cb)()],u.prototype,"fullOpacity",null),(0,s._)([(0,d.Cb)()],u.prototype,"layer",void 0),(0,s._)([(0,d.Cb)()],u.prototype,"parent",void 0),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspended",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,s._)([(0,d.Cb)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,d.Cb)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,s._)([(0,d.Cb)()],u.prototype,"visible",null),(0,s._)([(0,d.Cb)()],u.prototype,"view",void 0),u=(0,s._)([(0,c.j)("esri.views.layers.LayerView")],u);const y=u}}]);
//# sourceMappingURL=6857.262a5dea.js.map