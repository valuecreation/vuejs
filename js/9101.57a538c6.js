"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[9101],{29101:function(t,e,i){i.r(e),i.d(e,{calcite_value_list:function(){return f},calcite_value_list_item:function(){return x}});var a=i(95963),n=i(64771),l=i(13080),s=i(52080),o=i(59188),r=i(91278),c=i(76992),d=i(9747);i(9948),i(91642);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
const h={container:"container",handle:"handle"};var m;function u(t,e,i){const{items:a,intlDragHandleIdle:n,intlDragHandleActive:s,intlDragHandleChange:o,intlDragHandleCommit:r}=i,c=a.length,d=(0,l.g)(i,t)+1;if("idle"===e){const e=n?g(n,t.label,d,c):`${t.label}, press space and use arrow keys to reorder content. Current position ${d} of ${c}.`;return e}if("active"===e){const e=s?g(s,t.label,d,c):`Reordering ${t.label}, current position ${d} of ${c}.`;return e}if("change"===e){const e=o?g(o,t.label,d,c):`${t.label}, new position ${d} of ${c}. Press space to confirm.`;return e}{const e=r?g(r,t.label,d,c):`${t.label}, current position ${d} of ${c}.`;return e}}function p(t){const e=t.composedPath().find((t=>{var e;return void 0!==(null===(e=t.dataset)||void 0===e?void 0:e.jsHandle)})),i=t.composedPath().find((t=>{var e;return"calcite-value-list-item"===(null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase())}));return{handle:e,item:i}}function g(t,e,i,a){const n=t.replace("${position}",i.toString()),l=n.replace("${item.label}",e);return l.replace("${total}",a.toString())}(function(t){t["grip"]="grip"})(m||(m={}));const v="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:300}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}",f=class{constructor(t){(0,a.r)(this,t),this.calciteListChange=(0,a.c)(this,"calciteListChange",6),this.calciteListOrderChange=(0,a.c)(this,"calciteListOrderChange",6),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.mutationObserver=(0,s.c)("mutation",l.m.bind(this)),this.setFilterEl=t=>{this.filterEl=t},this.deselectRemovedItems=l.d.bind(this),this.deselectSiblingItems=l.a.bind(this),this.selectSiblings=l.s.bind(this),this.handleFilter=l.h.bind(this),this.getItemData=l.b.bind(this),this.keyDownHandler=t=>{if(t.defaultPrevented)return;const{handle:e,item:i}=p(t);if(e&&!i.handleActivated&&" "===t.key&&this.updateScreenReaderText(u(i,"commit",this)),!e||!i.handleActivated)return void l.k.call(this,t);const{items:a}=this;if(" "===t.key&&this.updateScreenReaderText(u(i,"active",this)),"ArrowUp"!==t.key&&"ArrowDown"!==t.key||a.length<=1)return;t.preventDefault();const{el:n}=this,s=(0,l.c)(this,i,"ArrowUp"===t.key?"up":"down");if(s===a.length-1)n.appendChild(i);else{const t=n.children[s],e=t===i.nextElementSibling?t.nextElementSibling:t;n.insertBefore(i,e)}this.items=this.getItems(),this.calciteListOrderChange.emit(this.items.map((({value:t})=>t))),requestAnimationFrame((()=>null===e||void 0===e?void 0:e.focus())),i.handleActivated=!0,this.updateHandleAriaLabel(e,u(i,"change",this))},this.storeAssistiveEl=t=>{this.assistiveTextEl=t},this.handleFocusIn=t=>{const{handle:e,item:i}=p(t);!(null===i||void 0===i?void 0:i.handleActivated)&&i&&e&&this.updateHandleAriaLabel(e,u(i,"idle",this))}}connectedCallback(){l.i.call(this),l.e.call(this)}componentDidLoad(){this.setUpDragAndDrop()}componentDidRender(){(0,o.u)(this)}disconnectedCallback(){l.f.call(this),this.cleanUpDragAndDrop()}calciteListFocusOutHandler(t){l.j.call(this,t)}calciteListItemRemoveHandler(t){l.r.call(this,t)}calciteListItemChangeHandler(t){l.l.call(this,t)}calciteInternalListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteInternalListItemValueChangeHandler(t){l.n.call(this,t),t.stopPropagation()}getItems(){return Array.from(this.el.querySelectorAll("calcite-value-list-item"))}setUpItems(){l.o.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.cleanUpDragAndDrop(),this.dragEnabled&&(this.sortable=n.S.create(this.el,{dataIdAttr:"id",handle:`.${h.handle}`,draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map((t=>t.value));this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){var t;null===(t=this.sortable)||void 0===t||t.destroy(),this.sortable=null}handleBlur(){this.dragEnabled&&this.updateScreenReaderText("")}async getSelectedItems(){return this.selectedValues}async setFocus(t){return l.p.call(this,t)}getIconType(){let t=null;return this.dragEnabled&&(t=m.grip),t}updateScreenReaderText(t){this.assistiveTextEl.textContent=t}updateHandleAriaLabel(t,e){t.ariaLabel=e}render(){return(0,a.h)(l.L,{onBlur:this.handleBlur,onFocusin:this.handleFocusIn,onKeyDown:this.keyDownHandler,props:this})}get el(){return(0,a.g)(this)}};f.style=v;const b={drag:"drag"},w={actionsEnd:"actions-end",actionsStart:"actions-start"},y="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{margin-block-end:1px;box-sizing:border-box;display:flex;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}:host *{box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-ui-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:flex;cursor:move;align-items:center;justify-content:center;border-style:none;background-color:transparent;padding-block:0px;padding-inline:0.25rem;color:var(--calcite-ui-border-input);outline-color:transparent}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}",x=class{constructor(t){(0,a.r)(this,t),this.calciteListItemRemove=(0,a.c)(this,"calciteListItemRemove",7),this.disabled=!1,this.disableDeselect=!1,this.nonInteractive=!1,this.handleActivated=!1,this.icon=null,this.removable=!1,this.selected=!1,this.pickListItem=null,this.guid=`calcite-value-list-item-${(0,r.g)()}`,this.getPickListRef=t=>this.pickListItem=t,this.handleKeyDown=t=>{" "===t.key&&(this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1},this.handleSelectChange=t=>{this.selected=t.detail.selected}}connectedCallback(){(0,d.c)(this)}disconnectedCallback(){(0,d.d)(this)}componentDidRender(){(0,o.u)(this,!!this.el.closest("calcite-value-list")&&"managed")}async toggleSelected(t){this.pickListItem.toggleSelected(t)}async setFocus(){var t;null===(t=this.pickListItem)||void 0===t||t.setFocus()}calciteListItemChangeHandler(t){t.detail.item=this.el}renderActionsEnd(){const{el:t}=this,e=(0,c.g)(t,w.actionsEnd);return e?(0,a.h)("slot",{name:w.actionsEnd,slot:l.S.actionsEnd}):null}renderActionsStart(){const{el:t}=this,e=(0,c.g)(t,w.actionsStart);return e?(0,a.h)("slot",{name:w.actionsStart,slot:l.S.actionsStart}):null}renderHandle(){const{icon:t}=this;if(t===l.I.grip)return(0,a.h)("span",{class:{[l.C.handle]:!0,[l.C.handleActivated]:this.handleActivated},"data-js-handle":!0,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0"},(0,a.h)("calcite-icon",{icon:b.drag,scale:"s"}))}render(){return(0,a.h)(a.H,{id:this.el.id||this.guid},this.renderHandle(),(0,a.h)("calcite-pick-list-item",{description:this.description,disableDeselect:this.disableDeselect,disabled:this.disabled,label:this.label,metadata:this.metadata,nonInteractive:this.nonInteractive,onCalciteListItemChange:this.handleSelectChange,ref:this.getPickListRef,removable:this.removable,selected:this.selected,value:this.value},this.renderActionsStart(),this.renderActionsEnd()))}get el(){return(0,a.g)(this)}};x.style=y}}]);
//# sourceMappingURL=9101.57a538c6.js.map