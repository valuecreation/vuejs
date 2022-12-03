/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as t,c as i,h as a,g as e,H as n}from"./p-452677fb.js";import{S as s}from"./p-682e9096.js";import{g as o,m as r,d as c,a as l,s as d,h,b as m,k as u,c as p,i as f,e as v,f as g,j as w,r as b,l as y,n as x,o as k,p as D,L as _,I,C,S as $}from"./p-37d82340.js";import{c as j}from"./p-420e1a42.js";import{u as A}from"./p-2ccf0c96.js";import{g as H}from"./p-a0074e38.js";import{g as L}from"./p-0d071f85.js";import{c as z,d as S}from"./p-b5c3a997.js";import"./p-e0437ddc.js";import"./p-98d174f0.js";import"./p-237be014.js";var F;function R(t,e,a){const{items:i,intlDragHandleIdle:n,intlDragHandleActive:s,intlDragHandleChange:l,intlDragHandleCommit:r}=a,c=i.length,d=o(a,t)+1;return"idle"===e?n?B(n,t.label,d,c):`${t.label}, press space and use arrow keys to reorder content. Current position ${d} of ${c}.`:"active"===e?s?B(s,t.label,d,c):`Reordering ${t.label}, current position ${d} of ${c}.`:"change"===e?l?B(l,t.label,d,c):`${t.label}, new position ${d} of ${c}. Press space to confirm.`:r?B(r,t.label,d,c):`${t.label}, current position ${d} of ${c}.`}function U(t){return{handle:t.composedPath().find((t=>{var e;return void 0!==(null===(e=t.dataset)||void 0===e?void 0:e.jsHandle)})),item:t.composedPath().find((t=>{var e;return"calcite-value-list-item"===(null===(e=t.tagName)||void 0===e?void 0:e.toLowerCase())}))}}function B(t,e,a,i){return t.replace("${position}",a.toString()).replace("${item.label}",e).replace("${total}",i.toString())}!function(t){t.grip="grip"}(F||(F={}));const K=class{constructor(e){t(this,e),this.calciteListChange=i(this,"calciteListChange",6),this.calciteListOrderChange=i(this,"calciteListOrderChange",6),this.disabled=!1,this.dragEnabled=!1,this.filterEnabled=!1,this.loading=!1,this.multiple=!1,this.selectionFollowsFocus=!1,this.selectedValues=new Map,this.dataForFilter=[],this.lastSelectedItem=null,this.mutationObserver=j("mutation",r.bind(this)),this.setFilterEl=t=>{this.filterEl=t},this.deselectRemovedItems=c.bind(this),this.deselectSiblingItems=l.bind(this),this.selectSiblings=d.bind(this),this.handleFilter=h.bind(this),this.getItemData=m.bind(this),this.keyDownHandler=t=>{if(t.defaultPrevented)return;const{handle:e,item:a}=U(t);if(e&&!a.handleActivated&&" "===t.key&&this.updateScreenReaderText(R(a,"commit",this)),!e||!a.handleActivated)return void u.call(this,t);const{items:i}=this;if(" "===t.key&&this.updateScreenReaderText(R(a,"active",this)),"ArrowUp"!==t.key&&"ArrowDown"!==t.key||i.length<=1)return;t.preventDefault();const{el:n}=this,s=p(this,a,"ArrowUp"===t.key?"up":"down");if(s===i.length-1)n.appendChild(a);else{const t=n.children[s];n.insertBefore(a,t===a.nextElementSibling?t.nextElementSibling:t)}this.items=this.getItems(),this.calciteListOrderChange.emit(this.items.map((({value:t})=>t))),requestAnimationFrame((()=>null==e?void 0:e.focus())),a.handleActivated=!0,this.updateHandleAriaLabel(e,R(a,"change",this))},this.storeAssistiveEl=t=>{this.assistiveTextEl=t},this.handleFocusIn=t=>{const{handle:e,item:a}=U(t);!(null==a?void 0:a.handleActivated)&&a&&e&&this.updateHandleAriaLabel(e,R(a,"idle",this))}}connectedCallback(){f.call(this),v.call(this)}componentDidLoad(){this.setUpDragAndDrop()}componentDidRender(){A(this)}disconnectedCallback(){g.call(this),this.cleanUpDragAndDrop()}calciteListFocusOutHandler(t){w.call(this,t)}calciteListItemRemoveHandler(t){b.call(this,t)}calciteListItemChangeHandler(t){y.call(this,t)}calciteInternalListItemPropsChangeHandler(t){t.stopPropagation(),this.setUpFilter()}calciteInternalListItemValueChangeHandler(t){x.call(this,t),t.stopPropagation()}getItems(){return Array.from(this.el.querySelectorAll("calcite-value-list-item"))}setUpItems(){k.call(this,"calcite-value-list-item")}setUpFilter(){this.filterEnabled&&(this.dataForFilter=this.getItemData())}setUpDragAndDrop(){this.cleanUpDragAndDrop(),this.dragEnabled&&(this.sortable=s.create(this.el,{dataIdAttr:"id",handle:".handle",draggable:"calcite-value-list-item",group:this.group,onSort:()=>{this.items=Array.from(this.el.querySelectorAll("calcite-value-list-item"));const t=this.items.map((t=>t.value));this.calciteListOrderChange.emit(t)}}))}cleanUpDragAndDrop(){var t;null===(t=this.sortable)||void 0===t||t.destroy(),this.sortable=null}handleBlur(){this.dragEnabled&&this.updateScreenReaderText("")}async getSelectedItems(){return this.selectedValues}async setFocus(t){return D.call(this,t)}getIconType(){let t=null;return this.dragEnabled&&(t=F.grip),t}updateScreenReaderText(t){this.assistiveTextEl.textContent=t}updateHandleAriaLabel(t,e){t.ariaLabel=e}render(){return a(_,{onBlur:this.handleBlur,onFocusin:this.handleFocusIn,onKeyDown:this.keyDownHandler,props:this})}get el(){return e(this)}};K.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;box-sizing:border-box;display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;align-items:stretch;background-color:transparent;font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host *{box-sizing:border-box}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}calcite-value-list-item:last-of-type{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header{margin-block-end:0.25rem;display:flex;align-items:center;justify-content:flex-end;background-color:var(--calcite-ui-foreground-1);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([filter-enabled]) header.sticky-pos{position:sticky;inset-block-start:0px;z-index:300}calcite-filter{margin-block-end:1px}.assistive-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}";const O=class{constructor(e){t(this,e),this.calciteListItemRemove=i(this,"calciteListItemRemove",7),this.disabled=!1,this.disableDeselect=!1,this.nonInteractive=!1,this.handleActivated=!1,this.icon=null,this.removable=!1,this.selected=!1,this.pickListItem=null,this.guid=`calcite-value-list-item-${H()}`,this.getPickListRef=t=>this.pickListItem=t,this.handleKeyDown=t=>{" "===t.key&&(this.handleActivated=!this.handleActivated)},this.handleBlur=()=>{this.handleActivated=!1},this.handleSelectChange=t=>{this.selected=t.detail.selected}}connectedCallback(){z(this)}disconnectedCallback(){S(this)}componentDidRender(){A(this,!!this.el.closest("calcite-value-list")&&"managed")}async toggleSelected(t){this.pickListItem.toggleSelected(t)}async setFocus(){var t;null===(t=this.pickListItem)||void 0===t||t.setFocus()}calciteListItemChangeHandler(t){t.detail.item=this.el}renderActionsEnd(){const{el:t}=this;return L(t,"actions-end")?a("slot",{name:"actions-end",slot:$.actionsEnd}):null}renderActionsStart(){const{el:t}=this;return L(t,"actions-start")?a("slot",{name:"actions-start",slot:$.actionsStart}):null}renderHandle(){const{icon:t}=this;if(t===I.grip)return a("span",{class:{[C.handle]:!0,[C.handleActivated]:this.handleActivated},"data-js-handle":!0,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,role:"button",tabindex:"0"},a("calcite-icon",{icon:"drag",scale:"s"}))}render(){return a(n,{id:this.el.id||this.guid},this.renderHandle(),a("calcite-pick-list-item",{description:this.description,disableDeselect:this.disableDeselect,disabled:this.disabled,label:this.label,metadata:this.metadata,nonInteractive:this.nonInteractive,onCalciteListItemChange:this.handleSelectChange,ref:this.getPickListRef,removable:this.removable,selected:this.selected,value:this.value},this.renderActionsStart(),this.renderActionsEnd()))}get el(){return e(this)}};O.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{margin-block-end:1px;box-sizing:border-box;display:flex;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2);--tw-shadow:0 1px 0 var(--calcite-ui-border-3);--tw-shadow-colored:0 1px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition:background-color var(--calcite-animation-timing), box-shadow var(--calcite-animation-timing)}:host *{box-sizing:border-box}calcite-pick-list-item{position:relative;margin:0px;flex-grow:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([active]),:host([selected]){--tw-shadow:0 0 0 1px var(--calcite-ui-brand);--tw-shadow-colored:0 0 0 1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.handle{display:flex;cursor:move;align-items:center;justify-content:center;border-style:none;background-color:transparent;padding-block:0px;padding-inline:0.25rem;color:var(--calcite-ui-border-input);outline-color:transparent}.handle:hover{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.handle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.handle--activated{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}.handle calcite-icon{color:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";export{K as calcite_value_list,O as calcite_value_list_item};