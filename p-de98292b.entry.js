/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as t,c as i,h as a,g as n}from"./p-452677fb.js";import{S as e}from"./p-682e9096.js";import{c as r}from"./p-420e1a42.js";import{u as s}from"./p-2ccf0c96.js";const c=class{constructor(a){t(this,a),this.calciteListOrderChange=i(this,"calciteListOrderChange",6),this.handleSelector="calcite-handle",this.layout="vertical",this.disabled=!1,this.loading=!1,this.handleActivated=!1,this.items=[],this.mutationObserver=r("mutation",(()=>{this.cleanUpDragAndDrop(),this.items=Array.from(this.el.children),this.setUpDragAndDrop()}))}connectedCallback(){this.items=Array.from(this.el.children),this.setUpDragAndDrop(),this.beginObserving()}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),this.cleanUpDragAndDrop()}componentDidRender(){s(this)}calciteHandleNudgeHandler(t){var i;const a=this.items.find((i=>i.contains(t.detail.handle)||t.composedPath().includes(i))),e=this.items.length-1,n=this.items.indexOf(a);let r,s=!1;switch(t.detail.direction){case"up":t.preventDefault(),0===n?s=!0:r=n-1;break;case"down":t.preventDefault(),n===e?r=0:n===e-1?s=!0:r=n+2;break;default:return}null===(i=this.mutationObserver)||void 0===i||i.disconnect(),s?a.parentElement.appendChild(a):a.parentElement.insertBefore(a,this.items[r]),this.items=Array.from(this.el.children),t.detail.handle.activated=!0,t.detail.handle.setFocus(),this.beginObserving()}setUpDragAndDrop(){this.cleanUpDragAndDrop();const t={dataIdAttr:"id",group:this.group,handle:this.handleSelector,onUpdate:()=>{this.items=Array.from(this.el.children),this.calciteListOrderChange.emit()},onStart:()=>{var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()},onEnd:()=>{this.beginObserving()}};this.dragSelector&&(t.draggable=this.dragSelector),this.sortable=e.create(this.el,t)}cleanUpDragAndDrop(){var t;null===(t=this.sortable)||void 0===t||t.destroy(),this.sortable=null}beginObserving(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}render(){const{layout:t}=this,i="horizontal"===t||!1;return a("div",{class:{container:!0,"container--vertical":!i,"container--horizontal":i}},a("slot",null))}get el(){return n(this)}};c.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}";export{c as calcite_sortable_list};