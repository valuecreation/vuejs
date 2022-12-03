"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[8723],{58723:function(t,e,i){i.r(e),i.d(e,{calcite_flow:function(){return c}});var a=i(95963),n=i(52080);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
const r={frame:"frame",frameAdvancing:"frame--advancing",frameRetreating:"frame--retreating"},o="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}",c=class{constructor(t){(0,a.r)(this,t),this.flowDirection=null,this.itemCount=0,this.items=[],this.itemMutationObserver=(0,n.c)("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,e)=>{const i=t>1,a=t&&e>1;return a||i?e<t?"retreating":"advancing":null},this.updateFlowProps=()=>{const{el:t,items:e}=this,i=Array.from(t.querySelectorAll("calcite-flow-item, calcite-panel")).filter((t=>!t.matches("calcite-flow-item calcite-flow-item, calcite-panel calcite-panel"))),a=e.length,n=i.length,r=i[n-1],o=i[n-2];if(n&&r&&i.forEach((t=>{t.showBackButton=t===r&&n>1,t.hidden=t!==r})),o&&(o.menuOpen=!1),this.items=i,a!==n){const t=this.getFlowDirection(a,n);this.itemCount=n,this.flowDirection=t}}}async back(){const{items:t}=this,e=t[t.length-1];if(!e)return;const i=e.beforeBack?e.beforeBack:()=>Promise.resolve();return i.call(e).then((()=>(e.remove(),e)))}connectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}disconnectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.disconnect()}handleItemBackClick(){this.back()}render(){const{flowDirection:t}=this,e={[r.frame]:!0,[r.frameAdvancing]:"advancing"===t,[r.frameRetreating]:"retreating"===t};return(0,a.h)("div",{class:e},(0,a.h)("slot",null))}get el(){return(0,a.g)(this)}};c.style=o},52080:function(t,e,i){
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
function a(t,e,i){const a=n(t);return new a(e,i)}function n(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return function(){return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}()}i.d(e,{c:function(){return a}})}}]);
//# sourceMappingURL=8723.d935a932.js.map