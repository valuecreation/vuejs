/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as t,c as i,h as a,H as e,g as o}from"./p-452677fb.js";import{g as s}from"./p-a0074e38.js";import{a as n,f as r,t as c}from"./p-0d071f85.js";import{c as d,d as l,g as h}from"./p-49891df2.js";import{c as u,d as m,H as p}from"./p-34aa594d.js";import{g as f}from"./p-e0437ddc.js";import{u as b}from"./p-2ccf0c96.js";import"./p-237be014.js";const v=class{constructor(e){t(this,e),this.calciteInternalRadioButtonBlur=i(this,"calciteInternalRadioButtonBlur",6),this.calciteRadioButtonChange=i(this,"calciteRadioButtonChange",6),this.calciteInternalRadioButtonCheckedChange=i(this,"calciteInternalRadioButtonCheckedChange",6),this.calciteInternalRadioButtonFocus=i(this,"calciteInternalRadioButtonFocus",6),this.checked=!1,this.disabled=!1,this.focused=!1,this.hidden=!1,this.hovered=!1,this.required=!1,this.scale="m",this.selectItem=(t,e)=>{t[e].click()},this.queryButtons=()=>Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden])")).filter((t=>t.name===this.name)),this.isDefaultSelectable=()=>{const t=this.queryButtons();return!t.some((t=>t.checked))&&t[0]===this.el},this.check=()=>{this.disabled||(this.uncheckAllRadioButtonsInGroup(),this.checked=!0,this.focused=!0,this.calciteRadioButtonChange.emit(),this.setFocus())},this.clickHandler=()=>{this.check()},this.setContainerEl=t=>{this.containerEl=t},this.handleKeyDown=t=>{const{key:e}=t,{el:i}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(e))return;if(" "===e)return this.check(),void t.preventDefault();let a=e;"rtl"===n(i)&&("ArrowRight"===e&&(a="ArrowLeft"),"ArrowLeft"===e&&(a="ArrowRight"));const o=Array.from(this.rootNode.querySelectorAll("calcite-radio-button:not([hidden]")).filter((t=>t.name===this.name));let c=0;const s=o.length;switch(o.some(((t,e)=>{if(t.checked)return c=e,!0})),a){case"ArrowLeft":case"ArrowUp":return t.preventDefault(),void this.selectItem(o,f(Math.max(c-1,-1),s));case"ArrowRight":case"ArrowDown":return t.preventDefault(),void this.selectItem(o,f(c+1,s));default:return}},this.onContainerBlur=()=>{this.focused=!1,this.calciteInternalRadioButtonBlur.emit()},this.onContainerFocus=()=>{this.disabled||(this.focused=!0,this.calciteInternalRadioButtonFocus.emit())}}checkedChanged(t){t&&this.uncheckOtherRadioButtonsInGroup(),this.calciteInternalRadioButtonCheckedChange.emit()}nameChanged(){this.checkLastRadioButton()}async setFocus(){this.disabled||r(this.containerEl)}onLabelClick(t){if(!this.disabled&&!this.hidden){this.uncheckOtherRadioButtonsInGroup();const e=t.currentTarget,i=e.for?this.rootNode.querySelector(`calcite-radio-button[id="${e.for}"]`):e.querySelector(`calcite-radio-button[name="${this.name}"]`);i&&(i.checked=!0,i.focused=!0),this.calciteRadioButtonChange.emit(),this.setFocus()}}checkLastRadioButton(){const t=this.queryButtons().filter((t=>t.checked));if((null==t?void 0:t.length)>1){const e=t[t.length-1];t.filter((t=>t!==e)).forEach((t=>{t.checked=!1,t.emitCheckedChange()}))}}async emitCheckedChange(){this.calciteInternalRadioButtonCheckedChange.emit()}uncheckAllRadioButtonsInGroup(){this.queryButtons().forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}uncheckOtherRadioButtonsInGroup(){this.queryButtons().filter((t=>t.guid!==this.guid)).forEach((t=>{t.checked&&(t.checked=!1,t.focused=!1)}))}getTabIndex(){if(!this.disabled)return this.checked||this.isDefaultSelectable()?0:-1}mouseenter(){this.hovered=!0}mouseleave(){this.hovered=!1}connectedCallback(){this.rootNode=this.el.getRootNode(),this.guid=this.el.id||`calcite-radio-button-${s()}`,this.name&&this.checkLastRadioButton(),d(this),u(this)}componentDidLoad(){this.focused&&!this.disabled&&this.setFocus()}disconnectedCallback(){l(this),m(this)}componentDidRender(){b(this)}render(){const t=this.getTabIndex();return a(e,{onClick:this.clickHandler,onKeyDown:this.handleKeyDown},a("div",{"aria-checked":c(this.checked),"aria-label":h(this),class:"container",onBlur:this.onContainerBlur,onFocus:this.onContainerFocus,ref:this.setContainerEl,role:"radio",tabIndex:t},a("div",{class:"radio"})),a(p,{component:this}))}get el(){return o(this)}static get watchers(){return{checked:["checkedChanged"],name:["nameChanged"]}}};v.style='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:block;cursor:pointer}:host .container{position:relative;outline:2px solid transparent;outline-offset:2px}:host .radio{cursor:pointer;border-radius:9999px;background-color:var(--calcite-ui-foreground-1);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([hovered]) .radio,:host(:not([checked])[focused]:not([disabled])) .radio{box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([focused]) .radio{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host([disabled]) .radio{cursor:default;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hovered][disabled]) .radio{box-shadow:inset 0 0 0 1px var(--calcite-ui-border-input)}:host([scale=s]){--calcite-radio-size:var(--calcite-font-size--2)}:host([scale=m]){--calcite-radio-size:var(--calcite-font-size--1)}:host([scale=l]){--calcite-radio-size:var(--calcite-font-size-0)}.radio{block-size:var(--calcite-radio-size);max-inline-size:var(--calcite-radio-size);min-inline-size:var(--calcite-radio-size)}:host([scale=s][checked]) .radio,:host([hovered][scale=s][checked][disabled]) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand)}:host([scale=s][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 4px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=m][checked]) .radio,:host([hovered][scale=m][checked][disabled]) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand)}:host([scale=m][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 5px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}:host([scale=l][checked]) .radio,:host([hovered][scale=l][checked][disabled]) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand)}:host([scale=l][focused][checked]:not([disabled])) .radio{box-shadow:inset 0 0 0 6px var(--calcite-ui-brand), 0 0 0 2px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host([checked]) .radio::after,:host([checked][disabled]) .radio::after{content:"";inline-size:var(--calcite-radio-size);block-size:var(--calcite-radio-size);background-color:windowText;display:block}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}';export{v as calcite_radio_button};