"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[4764],{86602:function(e,t,i){i.d(t,{JZ:function(){return p},RL:function(){return g},eY:function(){return _}});var s=i(61681),r=i(78668),n=i(1662),h=i(19710),o=i(55542),a=i(51118),l=i(7349),u=i(36172),d=i(91907),c=i(43487);function p(e){return e&&"render"in e}function g(e){const t=document.createElement("canvas");return t.width=e.width,t.height=e.height,e.render(t.getContext("2d")),t}function f(e){return p(e)?e instanceof l.Z?(0,s.yw)(e.getRenderedRasterPixels(),(e=>e.renderedRasterPixels)):g(e):e}class _ extends a.s{constructor(e=null,t){super(),this.blendFunction="standard",this._sourceWidth=0,this._sourceHeight=0,this._textureInvalidated=!1,this.stencilRef=0,this.coordScale=[1,1],this._height=void 0,this.pixelRatio=1,this.resolution=0,this.rotation=0,this._source=null,this._width=void 0,this.x=0,this.y=0,this.immutable=t.immutable??!1,this.requestRenderOnSourceChangedEnabled=t.requestRenderOnSourceChangedEnabled??!0,this.source=e,this.requestRender=this.requestRender.bind(this)}destroy(){this._texture&&(this._texture.dispose(),this._texture=null),(0,s.pC)(this._uploadStatus)&&(this._uploadStatus.controller.abort(),this._uploadStatus=null)}get isSourceScaled(){return this.width!==this._sourceWidth||this.height!==this._sourceHeight}get height(){return void 0!==this._height?this._height:this._sourceHeight}set height(e){this._height=e}get source(){return this._source}set source(e){null==e&&null==this._source||(this._source=e,this._source instanceof HTMLImageElement?(this._sourceHeight=this._source.naturalHeight,this._sourceWidth=this._source.naturalWidth):(this._sourceHeight=this._source.height,this._sourceWidth=this._source.width),this.invalidateTexture())}get width(){return void 0!==this._width?this._width:this._sourceWidth}set width(e){this._width=e}beforeRender(e){super.beforeRender(e),this.updateTexture(e)}async setSourceAsync(e,t){(0,s.pC)(this._uploadStatus)&&this._uploadStatus.controller.abort();const i=new AbortController,n=(0,r.hh)();return(0,r.$F)(t,(()=>i.abort())),(0,r.$F)(i,(e=>n.reject(e))),this._uploadStatus={controller:i,resolver:n},this.source=e,n.promise}invalidateTexture(){this._textureInvalidated||(this._textureInvalidated=!0,this.requestRenderOnSourceChangedEnabled&&this.requestRender())}updateTransitionProperties(e,t){e>=64&&(this.fadeTransitionEnabled=!1,this.inFadeTransition=!1),super.updateTransitionProperties(e,t)}setTransform(e){const t=(0,n.g)(this.transforms.dvs),[i,s]=e.toScreenNoRotation([0,0],[this.x,this.y]),r=this.resolution/this.pixelRatio/e.resolution,h=r*this.width,a=r*this.height,l=Math.PI*this.rotation/180;(0,n.h)(t,t,(0,o.f)(i,s)),(0,n.h)(t,t,(0,o.f)(h/2,a/2)),(0,n.r)(t,t,-l),(0,n.h)(t,t,(0,o.f)(-h/2,-a/2)),(0,n.k)(t,t,(0,o.f)(h,a)),(0,n.m)(this.transforms.dvs,e.displayViewMat3,t)}setSamplingProfile(e){this._texture&&(e.mips&&!this._texture.descriptor.hasMipmap&&this._texture.generateMipmap(),this._texture.setSamplingMode(e.samplingMode))}bind(e,t){this._texture&&e.bindTexture(this._texture,t)}async updateTexture({context:e,painter:t}){if(!this._textureInvalidated)return;if(this._textureInvalidated=!1,this._texture||(this._texture=this._createTexture(e)),!this.source)return void this._texture.setData(null);this._texture.resize(this._sourceWidth,this._sourceHeight);const i=f(this.source);try{if((0,s.pC)(this._uploadStatus)){const{controller:e,resolver:s}=this._uploadStatus,r={signal:e.signal},{width:n,height:h}=this,o=this._texture,a=t.textureUploadManager;await a.enqueueTextureUpdate({data:i,texture:o,width:n,height:h},r),s.resolve(),this._uploadStatus=null}else this._texture.setData(i);this.ready()}catch(n){(0,r.H9)(n)}}onDetach(){this.destroy()}_createTransforms(){return{dvs:(0,h.c)()}}_createTexture(e){const t=this.immutable&&e.type===u.zO.WEBGL2;return new c.x(e,{target:d.No.TEXTURE_2D,pixelFormat:d.VI.RGBA,internalFormat:t?d.lP.RGBA8:d.VI.RGBA,dataType:d.Br.UNSIGNED_BYTE,wrapMode:d.e8.CLAMP_TO_EDGE,isImmutable:t,width:this._sourceWidth,height:this._sourceHeight})}}},7909:function(e,t,i){i.d(t,{s:function(){return d}});var s=i(24568),r=i(19710),n=i(86602),h=i(27954);class o extends h.I{constructor(e,t,i,s,r,h,o=null){super(e,t,i,s,r,h),this.bitmap=new n.eY(o,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[r,h],this.bitmap.once("isReady",(()=>this.ready()))}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e)}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{dvs:(0,r.c)(),tileMat3:(0,r.c)()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}}var a=i(16943),l=i(38716),u=i(70179);class d extends u.Z{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(e){const t=this._tileInfoView.getTileBounds((0,s.Ue)(),e),i=this._tileInfoView.getTileResolution(e.level),[r,n]=this._tileInfoView.tileInfo.size;return new o(e,i,t[0],t[3],r,n)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[a.U.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:l.jx.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===l.jx.MAP&&super.doRender(e)}}},7349:function(e,t,i){i.d(t,{Z:function(){return r}});var s=i(61681);class r{constructor(e,t,i){this.pixelBlock=e,this.extent=t,this.originalPixelBlock=i}get width(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.width:0}get height(){return(0,s.pC)(this.pixelBlock)?this.pixelBlock.height:0}render(e){const t=this.pixelBlock;if((0,s.Wi)(t))return;const i=this.filter({pixelBlock:t});if((0,s.Wi)(i.pixelBlock))return;const r=i.pixelBlock.getAsRGBA(),n=e.createImageData(i.pixelBlock.width,i.pixelBlock.height);n.data.set(r),e.putImageData(n,0,0)}getRenderedRasterPixels(){const e=this.filter({pixelBlock:this.pixelBlock});return(0,s.Wi)(e.pixelBlock)?null:{width:e.pixelBlock.width,height:e.pixelBlock.height,renderedRasterPixels:new Uint8Array(e.pixelBlock.getAsRGBA().buffer)}}}},70179:function(e,t,i){i.d(t,{Z:function(){return l}});var s=i(39994),r=i(38716),n=i(2443),h=i(26894),o=i(22598);const a=(e,t)=>e.key.level-t.key.level!=0?e.key.level-t.key.level:e.key.row-t.key.row!=0?e.key.row-t.key.row:e.key.col-t.key.col;class l extends n.Z{constructor(e){super(),this._tileInfoView=e}get requiresDedicatedFBO(){return!1}renderChildren(e){this.sortChildren(a),this.setStencilReference(e),super.renderChildren(e)}createRenderParams(e){const{state:t}=e,i=super.createRenderParams(e);return i.requiredLevel=this._tileInfoView.getClosestInfoForScale(t.scale).level,i.displayLevel=this._tileInfoView.tileInfo.scaleToZoom(t.scale),i}prepareRenderPasses(e){const t=super.prepareRenderPasses(e);return t.push(e.registerRenderPass({name:"stencil",brushes:[o.Z],drawPhase:r.jx.DEBUG|r.jx.MAP|r.jx.HIGHLIGHT,target:()=>this.getStencilTarget()})),(0,s.Z)("esri-tiles-debug")&&t.push(e.registerRenderPass({name:"tileInfo",brushes:[h.Z],drawPhase:r.jx.DEBUG,target:()=>this.children})),t}getStencilTarget(){return this.children}setStencilReference(e){let t=1;for(const i of this.children)i.stencilRef=t++}}},27954:function(e,t,i){i.d(t,{I:function(){return h}});var s=i(1662),r=i(51118),n=i(87241);class h extends r.s{constructor(e,t,i,s,r,h,o=r,a=h){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new n.Z(e),this.resolution=t,this.x=i,this.y=s,this.width=r,this.height=h,this.rangeX=o,this.rangeY=a}destroy(){this.texture&&(this.texture.dispose(),this.texture=null)}setTransform(e){const t=this.resolution/(e.resolution*e.pixelRatio),i=this.transforms.tileMat3,[r,n]=e.toScreenNoRotation([0,0],[this.x,this.y]),h=this.width/this.rangeX*t,o=this.height/this.rangeY*t;(0,s.s)(i,h,0,0,0,o,0,r,n,1),(0,s.m)(this.transforms.dvs,e.displayViewMat3,i)}}},25970:function(e,t,i){i.d(t,{Z:function(){return a}});var s=i(36663),r=i(53280),n=i(81977),h=(i(7753),i(7283),i(40266));let o=class extends r.r{constructor(e){super(e),this.tiles=new Map}destroy(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null}get updating(){return this.isUpdating()}acquireTile(e){const t=this.createTile(e);return t.once("isReady",(()=>this.notifyChange("updating"))),this.tiles.set(e.id,t),t}forceAttributeTextureUpload(){}forEachTile(e){this.tiles.forEach(e)}releaseTile(e){this.tiles.delete(e.key.id),this.disposeTile(e)}isUpdating(){let e=!0;return this.tiles.forEach((t=>{e=e&&t.isReady})),!e}setHighlight(){}invalidateLabels(){}requestUpdate(){this.layerView.requestUpdate()}};(0,s._)([(0,n.Cb)()],o.prototype,"layer",void 0),(0,s._)([(0,n.Cb)()],o.prototype,"layerView",void 0),(0,s._)([(0,n.Cb)()],o.prototype,"tileInfoView",void 0),(0,s._)([(0,n.Cb)()],o.prototype,"updating",null),o=(0,s._)([(0,h.j)("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],o);const a=o},84764:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var s=i(36663),r=(i(13802),i(7283),i(7753),i(70375),i(39994),i(40266)),n=i(94672),h=i(7909),o=i(25970);class a{constructor(){this.gradient=null,this.height=512,this.width=512}render(e){(0,n.hy)(e,512,this.intensities,this.gradient,this.minDensity,this.maxDensity)}}let l=class extends o.Z{constructor(e){super(e),this._intensityInfo={minDensity:0,maxDensity:0},this.type="heatmap",this.featuresView={attributeView:{initialize:()=>{},requestUpdate:()=>{}},requestRender:()=>{}},this._container=new h.s(e.tileInfoView)}createTile(e){const t=this._container.createTile(e);return this.tileInfoView.getTileCoords(t.bitmap,e),t.bitmap.resolution=this.tileInfoView.getTileResolution(e),t}onConfigUpdate(){const e=this.layer.renderer;if("heatmap"===e.type){const{minDensity:t,maxDensity:i,colorStops:s}=e;this._intensityInfo.minDensity=t,this._intensityInfo.maxDensity=i,this._gradient=(0,n.uI)(s),this.tiles.forEach((e=>{const s=e.bitmap.source;s&&(s.minDensity=t,s.maxDensity=i,s.gradient=this._gradient,e.bitmap.invalidateTexture())}))}}hitTest(){return Promise.resolve([])}install(e){e.addChild(this._container)}uninstall(e){this._container.removeAllChildren(),e.removeChild(this._container)}disposeTile(e){this._container.removeChild(e),e.destroy()}supportsRenderer(e){return e&&"heatmap"===e.type}onTileData(e){const t=this.tiles.get(e.tileKey);if(!t)return;const i=e.intensityInfo,{minDensity:s,maxDensity:r}=this._intensityInfo,n=t.bitmap.source||new a;n.intensities=i&&i.matrix||null,n.minDensity=s,n.maxDensity=r,n.gradient=this._gradient,t.bitmap.source=n,this._container.addChild(t),this._container.requestRender(),this.requestUpdate()}onTileError(e){console.error(e)}lockGPUUploads(){}unlockGPUUploads(){}fetchResource(e,t){return console.error(e),Promise.reject()}};l=(0,s._)([(0,r.j)("esri.views.2d.layers.features.tileRenderers.HeatmapTileRenderer")],l);const u=l}}]);
//# sourceMappingURL=4764.12731dfe.js.map