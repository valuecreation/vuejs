"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[8611],{68611:function(e,t,r){r.r(t),r.d(t,{addOrUpdateResource:function(){return c},contentToBlob:function(){return m},fetchResources:function(){return u},getSiblingOfSameType:function(){return h},getSiblingOfSameTypeI:function(){return v},removeAllResources:function(){return l},removeResource:function(){return i},splitPrefixFileNameAndExtension:function(){return d}});var n=r(66341),a=r(70375),o=r(61681),s=r(3466);async function u(e,t={},r){await e.load(r);const n=(0,s.v_)(e.itemUrl,"resources"),{start:a=1,num:u=10,sortOrder:c="asc",sortField:i="created"}=t,l={query:{start:a,num:u,sortOrder:c,sortField:i,token:e.apiKey},signal:(0,o.U2)(r,"signal")},p=await e.portal._request(n,l);return{total:p.total,nextStart:p.nextStart,resources:p.resources.map((({created:t,size:r,resource:n})=>({created:new Date(t),size:r,resource:e.resourceFromPath(n)})))}}async function c(e,t,r,n){if(!e.hasPath())throw new a.Z(`portal-item-resource-${t}:invalid-path`,"Resource does not have a valid path");const u=e.portalItem;await u.load(n);const c=(0,s.v_)(u.userItemUrl,"add"===t?"addResources":"updateResources"),[i,l]=p(e.path),d=await m(r),f=new FormData;return i&&"."!==i&&f.append("resourcesPrefix",i),(0,o.pC)(n)&&n.compress&&f.append("compress","true"),f.append("fileName",l),f.append("file",d,l),f.append("f","json"),(0,o.pC)(n)&&n.access&&f.append("access",n.access),await u.portal._request(c,{method:"post",body:f,signal:(0,o.U2)(n,"signal")}),e}async function i(e,t,r){if(!t.hasPath())throw new a.Z("portal-item-resources-remove:invalid-path","Resource does not have a valid path");await e.load(r);const n=(0,s.v_)(e.userItemUrl,"removeResources");await e.portal._request(n,{method:"post",query:{resource:t.path},signal:(0,o.U2)(r,"signal")}),t.portalItem=null}async function l(e,t){await e.load(t);const r=(0,s.v_)(e.userItemUrl,"removeResources");return e.portal._request(r,{method:"post",query:{deleteAll:!0},signal:(0,o.U2)(t,"signal")})}function p(e){const t=e.lastIndexOf("/");return-1===t?[".",e]:[e.slice(0,t),e.slice(t+1)]}function d(e){const[t,r]=f(e),[n,a]=p(t);return[n,a,r]}function f(e){const t=(0,s.Ml)(e);return(0,o.Wi)(t)?[e,""]:[e.slice(0,e.length-t.length-1),`.${t}`]}async function m(e){return e instanceof Blob?e:(await(0,n["default"])(e.url,{responseType:"blob"})).data}function h(e,t){if(!e.hasPath())return null;const[r,,n]=d(e.path);return e.portalItem.resourceFromPath((0,s.v_)(r,t+n))}function v(e,t){if(!e.hasPath())return null;const[r,,n]=d(e.path);return e.portalItem.resourceFromPath((0,s.v_)(r,t+n))}}}]);
//# sourceMappingURL=8611.9fa2d4ae.js.map