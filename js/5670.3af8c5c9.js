"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[5670],{67766:function(e,t,s){s.d(t,{Z:function(){return l}});var r=s(36663),i=s(53280),o=s(81977),n=(s(7753),s(7283),s(40266));let a=class extends i.r{initialize(){}destroy(){}get supportsTileUpdates(){return!1}get spatialReference(){const e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null}};(0,r._)([(0,o.Cb)({readOnly:!0})],a.prototype,"supportsTileUpdates",null),(0,r._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"remoteClient",void 0),(0,r._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"service",void 0),(0,r._)([(0,o.Cb)()],a.prototype,"spatialReference",null),(0,r._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"tileInfo",void 0),(0,r._)([(0,o.Cb)({constructOnly:!0})],a.prototype,"tileStore",void 0),a=(0,r._)([(0,n.j)("esri.views.2d.layers.features.processors.BaseProcessor")],a);const l=a},5670:function(e,t,s){s.r(t),s.d(t,{default:function(){return y}});var r=s(36663),i=(s(39994),s(61681)),o=(s(13802),s(7283),s(7753),s(70375),s(40266)),n=s(27281),a=s(94672),l=s(14266),c=s(67766),d=s(6413);class p{constructor(e,t){this.offset=e,this.extent=t}}function u(e){const t=e.key,s=new Map,r=256,i=l.I_,o=e.tileInfoView.tileInfo.isWrappable;return s.set((0,d.M)(t,-1,-1,o).id,new p([-i,-i],[i-r,i-r,i,i])),s.set((0,d.M)(t,0,-1,o).id,new p([0,-i],[0,i-r,i,i])),s.set((0,d.M)(t,1,-1,o).id,new p([i,-i],[0,i-r,r,i])),s.set((0,d.M)(t,-1,0,o).id,new p([-i,0],[i-r,0,i,i])),s.set((0,d.M)(t,1,0,o).id,new p([i,0],[0,0,r,i])),s.set((0,d.M)(t,-1,1,o).id,new p([-i,i],[i-r,0,i,r])),s.set((0,d.M)(t,0,1,o).id,new p([0,i],[0,0,i,r])),s.set((0,d.M)(t,1,1,o).id,new p([i,i],[0,0,r,r])),s}let h=class extends c.Z{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))])}async update(e,t){const s=t.schema.processors[0];"heatmap"===s.type&&(0,n.Hg)(this._schema,s)&&(e.mesh=!0,this._schema=s)}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id)}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,t,s){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const r=this._tileKeyToFeatureSets.get(e.key.id);if((0,i.pC)(t.addOrUpdate)&&t.addOrUpdate.hasFeatures&&r.set(t.addOrUpdate.instance,t),t.end){const t=[],r=u(e);this._tileKeyToFeatureSets.forEach(((s,o)=>{if(o===e.key.id)s.forEach((e=>(0,i.yw)(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o)){const e=r.get(o),[n,a]=e.offset;s.forEach((e=>(0,i.yw)(e.addOrUpdate,(e=>{const s=e.transform(n,a,1,1);t.push(s)}))))}}));const o=(0,a.QM)(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:o},l=[o.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...s,transferList:l})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};h=(0,r._)([(0,o.j)("esri.views.2d.layers.features.processors.HeatmapProcessor")],h);const y=h},6413:function(e,t,s){s.d(t,{M:function(){return r}});s(2290);function r(e,t,s,r){const i=e.clone(),o=1<<i.level,n=i.col+t,a=i.row+s;return r&&n<0?(i.col=n+o,i.world-=1):n>=o?(i.col=n-o,i.world+=1):i.col=n,i.row=a,i}}}]);
//# sourceMappingURL=5670.3af8c5c9.js.map