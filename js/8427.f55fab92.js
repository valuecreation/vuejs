"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[8427],{48427:function(e,n,t){t.r(n),t.d(n,{hydratedAdapter:function(){return i}});var a=t(91772),o=t(74304),r=t(70909),s=t(89542),c=t(90819);const i={convertToGEGeometry:h,exportPoint:u,exportPolygon:p,exportPolyline:x,exportMultipoint:g,exportExtent:m};function h(e,n){if(null==n)return null;let t="cache"in n?n.cache._geVersion:void 0;return null==t&&(t=e.convertJSONToGeometry(n),"cache"in n&&(n.cache._geVersion=t)),t}function u(e,n,t){const a=e.hasZ(n),o=e.hasM(n),s=new r.Z({x:e.getPointX(n),y:e.getPointY(n),spatialReference:t});return a&&(s.z=e.getPointZ(n)),o&&(s.m=e.getPointM(n)),s.cache._geVersion=n,s}function p(e,n,t){const a=new s.Z({rings:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a}function x(e,n,t){const a=new c.Z({paths:e.exportPaths(n),hasZ:e.hasZ(n),hasM:e.hasM(n),spatialReference:t});return a.cache._geVersion=n,a}function g(e,n,t){const a=new o.Z({hasZ:e.hasZ(n),hasM:e.hasM(n),points:e.exportPoints(n),spatialReference:t});return a.cache._geVersion=n,a}function m(e,n,t){const o=e.hasZ(n),r=e.hasM(n),s=new a.Z({xmin:e.getXMin(n),ymin:e.getYMin(n),xmax:e.getXMax(n),ymax:e.getYMax(n),spatialReference:t});if(o){const t=e.getZExtent(n);s.zmin=t.vmin,s.zmax=t.vmax}if(r){const t=e.getMExtent(n);s.mmin=t.vmin,s.mmax=t.vmax}return s.cache._geVersion=n,s}}}]);
//# sourceMappingURL=8427.f55fab92.js.map