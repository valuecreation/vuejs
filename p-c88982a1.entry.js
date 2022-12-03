/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as t,c as i,h as a,g as s}from"./p-452677fb.js";import{e,g as n}from"./p-0d071f85.js";import{c,d as l,g as o}from"./p-49891df2.js";import{c as r}from"./p-420e1a42.js";import{u as h}from"./p-2ccf0c96.js";import"./p-237be014.js";import"./p-a0074e38.js";const d=class{constructor(e){t(this,e),this.calciteInlineEditableEditCancel=i(this,"calciteInlineEditableEditCancel",6),this.calciteInlineEditableEditConfirm=i(this,"calciteInlineEditableEditConfirm",6),this.calciteInternalInlineEditableEnableEditingChange=i(this,"calciteInternalInlineEditableEnableEditingChange",6),this.disabled=!1,this.editingEnabled=!1,this.loading=!1,this.controls=!1,this.intlEnableEditing="Click to edit",this.intlCancelEditing="Cancel",this.intlConfirmChanges="Save",this.mutationObserver=r("mutation",(()=>this.mutationObserverCallback())),this.enableEditing=()=>{var t,i;this.valuePriorToEditing=null===(t=this.inputElement)||void 0===t?void 0:t.value,this.editingEnabled=!0,null===(i=this.inputElement)||void 0===i||i.setFocus(),this.calciteInternalInlineEditableEnableEditingChange.emit()},this.disableEditing=()=>{this.editingEnabled=!1},this.cancelEditing=()=>{this.inputElement&&(this.inputElement.value=this.valuePriorToEditing),this.disableEditing(),this.enableEditingButton.setFocus(),!this.editingEnabled&&this.shouldEmitCancel&&this.calciteInlineEditableEditCancel.emit()},this.escapeKeyHandler=async t=>{var i;t.defaultPrevented||("Escape"===t.key&&(t.preventDefault(),this.cancelEditing()),"Tab"===t.key&&this.shouldShowControls&&(t.shiftKey||t.target!==this.inputElement||(t.preventDefault(),this.cancelEditingButton.setFocus()),t.shiftKey&&t.target===this.cancelEditingButton&&(t.preventDefault(),null===(i=this.inputElement)||void 0===i||i.setFocus())))},this.cancelEditingHandler=async t=>{t.preventDefault(),this.cancelEditing()},this.enableEditingHandler=async t=>{this.disabled||t.target===this.cancelEditingButton||t.target===this.confirmEditingButton||(t.preventDefault(),this.editingEnabled||this.enableEditing())},this.confirmChangesHandler=async t=>{t.preventDefault(),this.calciteInlineEditableEditConfirm.emit();try{this.afterConfirm&&(this.loading=!0,await this.afterConfirm(),this.disableEditing(),this.enableEditingButton.setFocus())}catch(t){}finally{this.loading=!1}}}disabledWatcher(t){this.inputElement&&(this.inputElement.disabled=t)}editingEnabledWatcher(t,i){this.inputElement&&(this.inputElement.editingEnabled=t),!t&&i&&(this.shouldEmitCancel=!0)}connectedCallback(){var t;c(this),null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0}),this.mutationObserverCallback()}disconnectedCallback(){var t;l(this),null===(t=this.mutationObserver)||void 0===t||t.disconnect()}componentDidRender(){h(this)}render(){return a("div",{class:"wrapper",onClick:this.enableEditingHandler,onKeyDown:this.escapeKeyHandler},a("div",{class:"input-wrapper"},a("slot",null)),a("div",{class:"controls-wrapper"},a("calcite-button",{appearance:"transparent",class:"enable-editing-button",color:"neutral",disabled:this.disabled,iconStart:"pencil",label:this.intlEnableEditing,onClick:this.enableEditingHandler,ref:t=>this.enableEditingButton=t,scale:this.scale,style:{opacity:this.editingEnabled?"0":"1",width:this.editingEnabled?"0":"inherit"},type:"button"}),this.shouldShowControls&&[a("div",{class:"cancel-editing-button-wrapper"},a("calcite-button",{appearance:"transparent",class:"cancel-editing-button",color:"neutral",disabled:this.disabled,iconStart:"x",label:this.intlCancelEditing,onClick:this.cancelEditingHandler,ref:t=>this.cancelEditingButton=t,scale:this.scale,type:"button"})),a("calcite-button",{appearance:"solid",class:"confirm-changes-button",color:"blue",disabled:this.disabled,iconStart:"check",label:this.intlConfirmChanges,loading:this.loading,onClick:this.confirmChangesHandler,ref:t=>this.confirmEditingButton=t,scale:this.scale,type:"button"})]))}blurHandler(){this.controls||this.disableEditing()}async setFocus(){var t,i;this.editingEnabled?null===(t=this.inputElement)||void 0===t||t.setFocus():null===(i=this.enableEditingButton)||void 0===i||i.setFocus()}mutationObserverCallback(){var t;this.updateSlottedInput(),this.scale=this.scale||(null===(t=this.inputElement)||void 0===t?void 0:t.scale)||e(this.el,"scale",void 0)}onLabelClick(){this.setFocus()}updateSlottedInput(){const t=n(this.el,{matches:"calcite-input"});this.inputElement=t,t&&(this.inputElement.disabled=this.disabled,this.inputElement.label=this.inputElement.label||o(this))}get shouldShowControls(){return this.editingEnabled&&this.controls}get el(){return s(this)}static get watchers(){return{disabled:["disabledWatcher"],editingEnabled:["editingEnabledWatcher"]}}};d.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) .controls-wrapper{block-size:1.5rem}:host([scale=m]) .controls-wrapper{block-size:2rem}:host([scale=l]) .controls-wrapper{block-size:2.75rem}:host(:not([editing-enabled]):not([disabled])) .wrapper:hover{background-color:var(--calcite-ui-foreground-2)}.wrapper{box-sizing:border-box;display:flex;justify-content:space-between;background-color:var(--calcite-ui-foreground-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.wrapper .input-wrapper{flex:1 1 0%}.controls-wrapper{display:flex}:host([disabled]) .cancel-editing-button-wrapper{border-color:var(--calcite-ui-border-2)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}";export{d as calcite_inline_editable};