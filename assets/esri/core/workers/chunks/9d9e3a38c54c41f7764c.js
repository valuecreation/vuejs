"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[247],{20178:(e,n,t)=>{t.d(n,{A:()=>z,B:()=>C,C:()=>V,D:()=>E,E:()=>H,F:()=>I,G:()=>j,H:()=>k,I:()=>q,J:()=>B,K:()=>P,L:()=>_,M:()=>M,N:()=>F,a:()=>u,b:()=>f,c:()=>o,d:()=>a,e:()=>c,f:()=>l,g:()=>J,h:()=>s,i:()=>p,j:()=>N,k:()=>m,l:()=>x,m:()=>D,n:()=>R,o:()=>g,p:()=>S,q:()=>v,r:()=>h,s:()=>y,t:()=>G,u:()=>w,v:()=>A,w:()=>d,x:()=>L,y:()=>b,z:()=>T});var r=t(45837),i=t(37455);function c(e){return r.G.extendedSpatialReferenceInfo(e)}function o(e,n,t){return r.G.clip(i.N,e,n,t)}function u(e,n,t){return r.G.cut(i.N,e,n,t)}function f(e,n,t){return r.G.contains(i.N,e,n,t)}function a(e,n,t){return r.G.crosses(i.N,e,n,t)}function l(e,n,t,c){return r.G.distance(i.N,e,n,t,c)}function s(e,n,t){return r.G.equals(i.N,e,n,t)}function p(e,n,t){return r.G.intersects(i.N,e,n,t)}function G(e,n,t){return r.G.touches(i.N,e,n,t)}function d(e,n,t){return r.G.within(i.N,e,n,t)}function N(e,n,t){return r.G.disjoint(i.N,e,n,t)}function g(e,n,t){return r.G.overlaps(i.N,e,n,t)}function h(e,n,t,c){return r.G.relate(i.N,e,n,t,c)}function m(e,n){return r.G.isSimple(i.N,e,n)}function y(e,n){return r.G.simplify(i.N,e,n)}function x(e,n,t=!1){return r.G.convexHull(i.N,e,n,t)}function D(e,n,t){return r.G.difference(i.N,e,n,t)}function R(e,n,t){return r.G.symmetricDifference(i.N,e,n,t)}function S(e,n,t){return r.G.intersect(i.N,e,n,t)}function w(e,n,t=null){return r.G.union(i.N,e,n,t)}function v(e,n,t,c,o,u,f){return r.G.offset(i.N,e,n,t,c,o,u,f)}function A(e,n,t,c,o=!1){return r.G.buffer(i.N,e,n,t,c,o)}function L(e,n,t,c,o,u,f){return r.G.geodesicBuffer(i.N,e,n,t,c,o,u,f)}function b(e,n,t,c=!0){return r.G.nearestCoordinate(i.N,e,n,t,c)}function T(e,n,t){return r.G.nearestVertex(i.N,e,n,t)}function z(e,n,t,c,o){return r.G.nearestVertices(i.N,e,n,t,c,o)}function C(e,n,t,i){if(null==n||null==i)throw new Error("Illegal Argument Exception");const c=r.G.rotate(n,t,i);return c.spatialReference=e,c}function V(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipHorizontal(n,t);return i.spatialReference=e,i}function E(e,n,t){if(null==n||null==t)throw new Error("Illegal Argument Exception");const i=r.G.flipVertical(n,t);return i.spatialReference=e,i}function H(e,n,t,c,o){return r.G.generalize(i.N,e,n,t,c,o)}function I(e,n,t,c){return r.G.densify(i.N,e,n,t,c)}function j(e,n,t,c,o=0){return r.G.geodesicDensify(i.N,e,n,t,c,o)}function k(e,n,t){return r.G.planarArea(i.N,e,n,t)}function q(e,n,t){return r.G.planarLength(i.N,e,n,t)}function B(e,n,t,c){return r.G.geodesicArea(i.N,e,n,t,c)}function P(e,n,t,c){return r.G.geodesicLength(i.N,e,n,t,c)}function _(e,n,t){return null==n||null==t?[]:r.G.intersectLinesToPoints(i.N,e,n,t)}function M(e,n){r.G.changeDefaultSpatialReferenceTolerance(e,n)}function F(e){r.G.clearDefaultSpatialReferenceTolerance(e)}const J=Object.freeze(Object.defineProperty({__proto__:null,extendedSpatialReferenceInfo:c,clip:o,cut:u,contains:f,crosses:a,distance:l,equals:s,intersects:p,touches:G,within:d,disjoint:N,overlaps:g,relate:h,isSimple:m,simplify:y,convexHull:x,difference:D,symmetricDifference:R,intersect:S,union:w,offset:v,buffer:A,geodesicBuffer:L,nearestCoordinate:b,nearestVertex:T,nearestVertices:z,rotate:C,flipHorizontal:V,flipVertical:E,generalize:H,densify:I,geodesicDensify:j,planarArea:k,planarLength:q,geodesicArea:B,geodesicLength:P,intersectLinesToPoints:_,changeDefaultSpatialReferenceTolerance:M,clearDefaultSpatialReferenceTolerance:F},Symbol.toStringTag,{value:"Module"}))},30247:(e,n,t)=>{t.r(n),t.d(n,{buffer:()=>r.v,changeDefaultSpatialReferenceTolerance:()=>r.M,clearDefaultSpatialReferenceTolerance:()=>r.N,clip:()=>r.c,contains:()=>r.b,convexHull:()=>r.l,crosses:()=>r.d,cut:()=>r.a,densify:()=>r.F,difference:()=>r.m,disjoint:()=>r.j,distance:()=>r.f,equals:()=>r.h,extendedSpatialReferenceInfo:()=>r.e,flipHorizontal:()=>r.C,flipVertical:()=>r.D,generalize:()=>r.E,geodesicArea:()=>r.J,geodesicBuffer:()=>r.x,geodesicDensify:()=>r.G,geodesicLength:()=>r.K,intersect:()=>r.p,intersectLinesToPoints:()=>r.L,intersects:()=>r.i,isSimple:()=>r.k,nearestCoordinate:()=>r.y,nearestVertex:()=>r.z,nearestVertices:()=>r.A,offset:()=>r.q,overlaps:()=>r.o,planarArea:()=>r.H,planarLength:()=>r.I,relate:()=>r.r,rotate:()=>r.B,simplify:()=>r.s,symmetricDifference:()=>r.n,touches:()=>r.t,union:()=>r.u,within:()=>r.w}),t(45837),t(37455);var r=t(20178)}}]);