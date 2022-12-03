"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[2247],{92247:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});r(91957);var s=r(61681),o=r(34550),i=r(5856),n=r(21859),a=r(31329),c=r(43026),l=r(18486),m=r(18015),f=r(7928),u=r(14581),p=r(26903),S=r(88243),d=r(91772);class h{convertVectorFieldData(e){const t=i.Z.fromJSON(e.pixelBlock),r=(0,f.KC)(t,e.type);return Promise.resolve((0,s.pC)(r)&&r.toJSON())}async decode(e){const t=await(0,n.J)(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.Z.fromJSON(e.pixelBlock),e.extent=e.extent?d.Z.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve((0,s.pC)(t)&&t.toJSON())}async updateSymbolizer(e){this.symbolizer=p.Z.fromJSON(e.symbolizerJSON),e.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=(0,c.Ue)(e.rasterFunctionJSON)}async process(e){const t=this.rasterFunction.process({extent:d.Z.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map((e=>(0,s.pC)(e)?i.Z.fromJSON(e):null)),primaryRasterIds:e.primaryRasterIds});return(0,s.pC)(t)?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(i.Z.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve((0,s.pC)(t)&&t.toJSON())}estimateStatisticsHistograms(e){const t=(0,m.Hv)(i.Z.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=(0,a.Vl)(i.Z.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel);return t&&t.forEach(((e,r)=>{t.set(r,e?.toJSON())})),Promise.resolve(t)}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map((e=>e?new i.Z(e):null)),r=(0,a.us)(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,n=r;return e.coefs&&(n=(0,a.Uk)(r,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=(0,a.Qh)(e.destDimension,e.gcsGrid),n=(0,s.Wg)((0,f.xQ)(n,e.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:n?.toJSON(),localNorthDirections:o}}async createFlowMesh(e,t){const r={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:s,indexData:o}=await(0,S.GE)(e.meshType,e.simulationSettings,r,t.signal);return{result:{vertexBuffer:s.buffer,indexBuffer:o.buffer},transferList:[s.buffer,o.buffer]}}async getProjectionOffsetGrid(e){const t=d.Z.fromJSON(e.projectedExtent),r=d.Z.fromJSON(e.srcBufferExtent);let s=null;e.datumTransformationSteps&&(s=new o.Z({steps:e.datumTransformationSteps})),(e.includeGCSGrid||(0,l.Mk)(t.spatialReference,r.spatialReference,s))&&await(0,l.zD)();const i=e.rasterTransform?(0,u.c)(e.rasterTransform):null;return(0,l.Qp)({...e,projectedExtent:t,srcBufferExtent:r,datumTransformation:s,rasterTransform:i})}}}}]);
//# sourceMappingURL=2247.61644587.js.map