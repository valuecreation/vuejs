"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[3667],{13667:function(e,r,t){t.r(r),t.d(r,{createLabelFunction:function(){return h},formatField:function(){return y}});var n=t(70375),a=t(13802),u=t(61681),l=t(72057),i=t(25741),o=t(99294),s=t(1110),c=t(30879);const f=a.Z.getLogger("esri.layers.support.labelFormatUtils"),p={type:"simple",evaluate:()=>null},d={getAttribute:(e,r)=>e.field(r)};async function h(e,r,a){if(!e||!e.symbol)return p;const l=e.where,i=(0,s.hV)(e),o=l?await t.e(9559).then(t.bind(t,99559)):null;let h;if("arcade"===i.type){const e=await(0,c.WW)(i.expression,a,r);if((0,u.Wi)(e))return p;h={type:"arcade",evaluate(t){try{const r=e.evaluate({$feature:"attributes"in t?e.repurposeFeature(t):t});if(null!=r)return r.toString()}catch(r){f.error(new n.Z("arcade-expression-error","Encountered an error when evaluating label expression for feature",{feature:t,expression:i}))}return null},needsHydrationToEvaluate:()=>null==(0,s.el)(i.expression)}}else h={type:"simple",evaluate:e=>i.expression.replace(/{[^}]*}/g,(t=>{const n=t.slice(1,-1),a=r.get(n);if(!a)return t;let u=null;return"attributes"in e?e&&e.attributes&&(u=e.attributes[a.name]):u=e.field(a.name),null==u?"":y(u,a)}))};if(l){let e;try{e=o.WhereClause.create(l,r)}catch(g){return f.error(new n.Z("bad-where-clause","Encountered an error when evaluating where clause, ignoring",{where:l,error:g})),p}const t=h.evaluate;h.evaluate=r=>{const a="attributes"in r?void 0:d;try{if(e.testFeature(r,a))return t(r)}catch(g){f.error(new n.Z("bad-where-clause","Encountered an error when evaluating where clause for feature",{where:l,feature:r,error:g}))}return null}}return h}function y(e,r){if(null==e)return"";const t=r.domain;if(t)if("codedValue"===t.type||"coded-value"===t.type){const r=e;for(const e of t.codedValues)if(e.code===r)return e.name}else if("range"===t.type){const r=+e,n="range"in t?t.range[0]:t.minValue,a="range"in t?t.range[1]:t.maxValue;if(n<=r&&r<=a)return t.name}let n=e;return"date"===r.type||"esriFieldTypeDate"===r.type?n=(0,l.p6)(n,(0,l.Ze)("short-date")):(0,o.H7)(r)&&(n=(0,i.uf)(+n)),n||""}}}]);
//# sourceMappingURL=3667.7093424a.js.map