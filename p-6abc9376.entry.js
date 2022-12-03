/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as t,c as i,h as e,H as n,g as a}from"./p-452677fb.js";import{g as s,s as o,e as l,a as r}from"./p-0d071f85.js";import{c,d as h,g as u}from"./p-49891df2.js";import{s as d,c as p,d as m,H as b}from"./p-34aa594d.js";import{T as f,C as v}from"./p-237be014.js";import{c as g}from"./p-420e1a42.js";import{u as x}from"./p-2ccf0c96.js";import"./p-a0074e38.js";const y=class{constructor(e){t(this,e),this.calciteInternalInputTextFocus=i(this,"calciteInternalInputTextFocus",7),this.calciteInternalInputTextBlur=i(this,"calciteInternalInputTextBlur",7),this.calciteInputTextInput=i(this,"calciteInputTextInput",7),this.calciteInputTextChange=i(this,"calciteInputTextChange",7),this.alignment="start",this.autofocus=!1,this.clearable=!1,this.disabled=!1,this.hidden=!1,this.intlLoading=f.loading,this.iconFlipRtl=!1,this.loading=!1,this.readOnly=!1,this.required=!1,this.scale="m",this.status="idle",this.editingEnabled=!1,this.value="",this.previousValueOrigin="initial",this.mutationObserver=g("mutation",(()=>this.setDisabledAction())),this.userChangedValue=!1,this.keyDownHandler=t=>{this.readOnly||this.disabled||(this.isClearable&&"Escape"===t.key&&(this.clearInputTextValue(t),t.preventDefault()),"Enter"!==t.key||t.defaultPrevented||d(this)&&t.preventDefault())},this.clearInputTextValue=t=>{this.setValue({committing:!0,nativeEvent:t,origin:"user",value:""})},this.emitChangeIfUserModified=()=>{"user"===this.previousValueOrigin&&this.value!==this.previousEmittedValue&&this.calciteInputTextChange.emit(),this.previousEmittedValue=this.value},this.inputTextBlurHandler=()=>{this.calciteInternalInputTextBlur.emit({element:this.childEl,value:this.value}),this.emitChangeIfUserModified()},this.inputTextFocusHandler=t=>{const e=s(this.el,"action");t.target!==e&&this.setFocus(),this.calciteInternalInputTextFocus.emit({element:this.childEl,value:this.value})},this.inputTextInputHandler=t=>{this.disabled||this.readOnly||this.setValue({nativeEvent:t,origin:"user",value:t.target.value})},this.inputTextKeyDownHandler=t=>{this.disabled||this.readOnly||"Enter"===t.key&&this.emitChangeIfUserModified()},this.hiddenInputChangeHandler=t=>{t.target.name===this.name&&this.setValue({value:t.target.value,origin:"direct"}),t.stopPropagation()},this.setChildElRef=t=>{this.childEl=t},this.setInputValue=t=>{this.childEl&&(this.childEl.value=t)},this.setPreviousEmittedValue=t=>{this.previousEmittedValue=t},this.setPreviousValue=t=>{this.previousValue=t},this.setValue=({committing:t=!1,nativeEvent:e,origin:i,previousValue:a,value:n})=>{this.setPreviousValue(a||this.value),this.previousValueOrigin=i,this.userChangedValue="user"===i&&n!==this.value,this.value=n,"direct"===i&&this.setInputValue(n),e&&(this.calciteInputTextInput.emit({element:this.childEl,nativeEvent:e,value:this.value}).defaultPrevented?this.value=this.previousValue:t&&this.emitChangeIfUserModified())}}disabledWatcher(){this.setDisabledAction()}valueWatcher(t,e){this.userChangedValue||this.setValue({origin:"direct",previousValue:e,value:t||""}),this.userChangedValue=!1}updateRequestedIcon(){this.requestedIcon=o({},this.icon,"text")}get isClearable(){return this.clearable&&this.value.length>0}connectedCallback(){var t;this.scale=l(this.el,"scale",this.scale),this.status=l(this.el,"status",this.status),this.inlineEditableEl=this.el.closest("calcite-inline-editable"),this.inlineEditableEl&&(this.editingEnabled=this.inlineEditableEl.editingEnabled||!1),this.setPreviousEmittedValue(this.value),this.setPreviousValue(this.value),c(this),p(this),null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0}),this.setDisabledAction(),this.el.addEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}disconnectedCallback(){var t;h(this),m(this),null===(t=this.mutationObserver)||void 0===t||t.disconnect(),this.el.removeEventListener("calciteInternalHiddenInputChange",this.hiddenInputChangeHandler)}componentWillLoad(){this.requestedIcon=o({},this.icon,"text")}componentDidRender(){x(this)}async setFocus(){var t;null===(t=this.childEl)||void 0===t||t.focus()}async selectText(){var t;null===(t=this.childEl)||void 0===t||t.select()}onLabelClick(){this.setFocus()}onFormReset(){this.setValue({origin:"reset",value:this.defaultValue})}syncHiddenFormInput(t){null!=this.minLength&&(t.minLength=this.minLength),null!=this.maxLength&&(t.maxLength=this.maxLength)}setDisabledAction(){const t=s(this.el,"action");t&&(this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled"))}render(){const t=r(this.el),i=e("div",{class:"loader"},e("calcite-progress",{label:this.intlLoading,type:"indeterminate"})),a=e("button",{"aria-label":this.intlClear||"Clear value",class:"clear-button",disabled:this.disabled||this.readOnly,onClick:this.clearInputTextValue,tabIndex:-1,type:"button"},e("calcite-icon",{icon:"x",scale:"s"})),s=e("calcite-icon",{class:"icon",flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:"s"}),l=e("div",{class:"prefix"},this.prefixText),o=e("div",{class:"suffix"},this.suffixText),c=e("input",{"aria-label":u(this),autofocus:!!this.autofocus||null,class:{"editing-enabled":this.editingEnabled,"inline-child":!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:!!this.disabled||null,enterKeyHint:this.el.enterKeyHint,inputMode:this.el.inputMode,maxLength:this.maxLength,minLength:this.minLength,name:this.name,onBlur:this.inputTextBlurHandler,onFocus:this.inputTextFocusHandler,onInput:this.inputTextInputHandler,onKeyDown:this.inputTextKeyDownHandler,placeholder:this.placeholder||"",readOnly:this.readOnly,ref:this.setChildElRef,required:!!this.required||null,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:"text",value:this.value});return e(n,{onClick:this.inputTextFocusHandler,onKeyDown:this.keyDownHandler},e("div",{class:{wrapper:!0,[v.rtl]:"rtl"===t}},this.prefixText?l:null,e("div",{class:"element-wrapper"},c,this.isClearable?a:null,this.requestedIcon?s:null,this.loading?i:null),e("div",{class:"action-wrapper"},e("slot",{name:"action"})),this.suffixText?o:null,e(b,{component:this})))}get el(){return a(this)}static get watchers(){return{disabled:["disabledWatcher"],value:["valueWatcher"],icon:["updateRequestedIcon"]}}};y.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-ui-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-1)}:host input{border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);color:var(--calcite-ui-text-1)}:host input::placeholder,:host input:-ms-input-placeholder,:host input::-ms-input-placeholder{font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-3)}:host input:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-1)}:host input[readonly]{background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium)}:host input[readonly]:focus{color:var(--calcite-ui-text-1)}:host calcite-icon{color:var(--calcite-ui-text-3)}input{outline-color:transparent}input:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([status=invalid]) input{border-color:var(--calcite-ui-danger)}:host([status=invalid]) input:focus{outline:2px solid var(--calcite-ui-danger);outline-offset:-2px}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;z-index:1;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-ui-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-ui-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-ui-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-ui-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.clear-button:disabled{opacity:var(--calcite-ui-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-ui-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) input{text-align:start}:host([alignment=end]) input{text-align:end}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-ui-border-1)}.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.inline-child .editing-enabled{background-color:inherit}.inline-child:not(.editing-enabled){display:flex;cursor:pointer;border-color:transparent;padding-inline-start:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";export{y as calcite_input_text};