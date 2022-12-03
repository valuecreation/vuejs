"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[8191],{18191:function(t,i,e){e.r(i),e.d(i,{calcite_sortable_list:function(){return s}});var a=e(95963),n=e(64771),r=e(52080),c=e(59188);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
const o={sortItem:"sort-item",container:"container",containerHorizontal:"container--horizontal",containerVertical:"container--vertical"},l="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}",s=class{constructor(t){(0,a.r)(this,t),this.calciteListOrderChange=(0,a.c)(this,"calciteListOrderChange",6),this.handleSelector="calcite-handle",this.layout="vertical",this.disabled=!1,this.loading=!1,this.handleActivated=!1,this.items=[],this.mutationObserver=(0,r.c)("mutation",(()=>{this.cleanUpDragAndDrop(),this.items=Array.from(this.el.children),this.setUpDragAndDrop()}))}connectedCallback(){this.items=Array.from(this.el.children),this.setUpDragAndDrop(),this.beginObserving()}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),this.cleanUpDragAndDrop()}componentDidRender(){(0,c.u)(this)}calciteHandleNudgeHandler(t){var i;const e=this.items.find((i=>i.contains(t.detail.handle)||t.composedPath().includes(i))),a=this.items.length-1,n=this.items.indexOf(e);let r,c=!1;switch(t.detail.direction){case"up":t.preventDefault(),0===n?c=!0:r=n-1;break;case"down":t.preventDefault(),n===a?r=0:n===a-1?c=!0:r=n+2;break;default:return}null===(i=this.mutationObserver)||void 0===i||i.disconnect(),c?e.parentElement.appendChild(e):e.parentElement.insertBefore(e,this.items[r]),this.items=Array.from(this.el.children),t.detail.handle.activated=!0,t.detail.handle.setFocus(),this.beginObserving()}setUpDragAndDrop(){this.cleanUpDragAndDrop();const t={dataIdAttr:"id",group:this.group,handle:this.handleSelector,onUpdate:()=>{this.items=Array.from(this.el.children),this.calciteListOrderChange.emit()},onStart:()=>{var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect()},onEnd:()=>{this.beginObserving()}};this.dragSelector&&(t.draggable=this.dragSelector),this.sortable=n.S.create(this.el,t)}cleanUpDragAndDrop(){var t;null===(t=this.sortable)||void 0===t||t.destroy(),this.sortable=null}beginObserving(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}render(){const{layout:t}=this,i="horizontal"===t||!1;return(0,a.h)("div",{class:{[o.container]:!0,[o.containerVertical]:!i,[o.containerHorizontal]:i}},(0,a.h)("slot",null))}get el(){return(0,a.g)(this)}};s.style=l}}]);
//# sourceMappingURL=8191.cf409443.js.map