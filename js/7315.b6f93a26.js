"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[7315],{87315:function(e,t,o){o.r(t),o.d(t,{validateNetworkTopology:function(){return u}});var r=o(66341),i=o(84238),s=o(36663),n=o(72285),a=o(81977),d=(o(7753),o(7283),o(40266));let l=class extends n.wq{constructor(e){super(e),this.moment=null,this.fullUpdate=!1,this.validateErrorsCreated=!1,this.dirtyAreaCount=null,this.exceededTransferLimit=null,this.serviceEdits=null}};(0,s._)([(0,a.Cb)({type:Date,json:{type:Number,write:{writer:(e,t)=>{t.moment=e?e.getTime():null}}}})],l.prototype,"moment",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],l.prototype,"fullUpdate",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],l.prototype,"validateErrorsCreated",void 0),(0,s._)([(0,a.Cb)({type:Number,json:{write:!0}})],l.prototype,"dirtyAreaCount",void 0),(0,s._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],l.prototype,"exceededTransferLimit",void 0),(0,s._)([(0,a.Cb)({type:[Object],json:{write:!0}})],l.prototype,"serviceEdits",void 0),l=(0,s._)([(0,d.j)("esri.rest.networks.support.ValidateNetworkTopologyResult")],l);const p=l;async function u(e,t,o){const s=(0,i.en)(e),n=t.toJSON();t.validationSet&&(n.validationSet=JSON.stringify(t.validationSet));const a={...n,f:"json"},d=(0,i.cv)({...s.query,...a}),l=(0,i.lA)(d,{...o,method:"post"}),u=`${s.path}/validateNetworkTopology`,{data:c}=await(0,r["default"])(u,l);if(!c)return null;const y=p.fromJSON(c);return y.serviceEdits=y.serviceEdits.map((e=>({layerId:e.id,editedFeatures:e.editedFeatures}))),y}}}]);
//# sourceMappingURL=7315.b6f93a26.js.map