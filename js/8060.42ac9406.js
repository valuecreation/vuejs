"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[8060],{8060:function(e,r,t){t.r(r),t.d(r,{getGeometryServiceURL:function(){return l},projectGeometry:function(){return u}});var n=t(51366),i=t(70375),o=t(81577),c=t(94466),a=t(41268);async function l(e=null,r){if(n.Z.geometryServiceUrl)return n.Z.geometryServiceUrl;if(!e)throw new i.Z("internal:geometry-service-url-not-configured");let t;t="portal"in e?e.portal||o.Z.getDefault():e,await t.load({signal:r});const c=t.helperServices?.geometry?.url;if(!c)throw new i.Z("internal:geometry-service-url-not-configured");return c}async function u(e,r,t=null,n){const o=await l(t,n),u=new a.Z;u.geometries=[e],u.outSpatialReference=r;const s=await(0,c.i)(o,u,{signal:n});if(s&&Array.isArray(s)&&1===s.length)return s[0];throw new i.Z("internal:geometry-service-projection-failed")}}}]);
//# sourceMappingURL=8060.42ac9406.js.map