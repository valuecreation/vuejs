/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as a,h as t,g as i}from"./p-452677fb.js";import{c as e}from"./p-420e1a42.js";const n=class{constructor(t){a(this,t),this.flowDirection=null,this.itemCount=0,this.items=[],this.itemMutationObserver=e("mutation",(()=>this.updateFlowProps())),this.getFlowDirection=(t,a)=>t&&a>1||t>1?a<t?"retreating":"advancing":null,this.updateFlowProps=()=>{const{el:t,items:a}=this,i=Array.from(t.querySelectorAll("calcite-flow-item, calcite-panel")).filter((t=>!t.matches("calcite-flow-item calcite-flow-item, calcite-panel calcite-panel"))),e=a.length,n=i.length,o=i[n-1],r=i[n-2];if(n&&o&&i.forEach((t=>{t.showBackButton=t===o&&n>1,t.hidden=t!==o})),r&&(r.menuOpen=!1),this.items=i,e!==n){const t=this.getFlowDirection(e,n);this.itemCount=n,this.flowDirection=t}}}async back(){const{items:t}=this,a=t[t.length-1];if(a)return(a.beforeBack?a.beforeBack:()=>Promise.resolve()).call(a).then((()=>(a.remove(),a)))}connectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0}),this.updateFlowProps()}disconnectedCallback(){var t;null===(t=this.itemMutationObserver)||void 0===t||t.disconnect()}handleItemBackClick(){this.back()}render(){const{flowDirection:a}=this;return t("div",{class:{frame:!0,"frame--advancing":"advancing"===a,"frame--retreating":"retreating"===a}},t("slot",null))}get el(){return i(this)}};n.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0px}:host ::slotted(calcite-flow-item),:host ::slotted(calcite-panel){block-size:100%}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation:calcite-frame-advance var(--calcite-animation-timing)}:host .frame--retreating{animation:calcite-frame-retreat var(--calcite-animation-timing)}@keyframes calcite-frame-advance{0%{--tw-bg-opacity:0.5;transform:translate3d(50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity:0.5;transform:translate3d(-50px, 0, 0)}100%{--tw-bg-opacity:1;transform:translate3d(0, 0, 0)}}";export{n as calcite_flow};