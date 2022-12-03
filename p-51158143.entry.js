/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as i,c as t,h as a,H as e,g as n}from"./p-452677fb.js";import{a as o,e as r,t as l}from"./p-0d071f85.js";import{c,d as s}from"./p-49891df2.js";import{a as m,c as d,d as h,H as u}from"./p-34aa594d.js";import{u as p}from"./p-2ccf0c96.js";import"./p-237be014.js";import"./p-a0074e38.js";const g=class{constructor(e){i(this,e),this.calciteRadioGroupChange=t(this,"calciteRadioGroupChange",6),this.appearance="solid",this.disabled=!1,this.required=!1,this.layout="horizontal",this.scale="m",this.value=null,this.width="auto",this.handleClick=t=>{"calcite-radio-group-item"===t.target.localName&&this.selectItem(t.target,!0)}}valueHandler(t){this.getItems().forEach((i=>i.checked=i.value===t))}handleSelectedItemChange(t,i){if(this.value=null==t?void 0:t.value,t===i)return;const e=this.getItems(),a=Array.from(e).filter((i=>i===t)).pop();a?this.selectItem(a):e[0]&&(e[0].tabIndex=0)}componentWillLoad(){const t=this.getItems(),i=Array.from(t).filter((t=>t.checked)).pop();i?this.selectItem(i):t[0]&&(t[0].tabIndex=0)}componentDidLoad(){m(this,this.value)}connectedCallback(){c(this),d(this)}disconnectedCallback(){s(this),h(this)}componentDidRender(){p(this)}render(){return a(e,{onClick:this.handleClick,role:"radiogroup"},a("slot",null),a(u,{component:this}))}handleSelected(t){t.preventDefault(),this.selectItem(t.target),t.stopPropagation()}handleKeyDown(t){const{key:i}=t,{el:e,selectedItem:a}=this;if(-1===["ArrowLeft","ArrowUp","ArrowRight","ArrowDown"," "].indexOf(i))return;let n=i;"rtl"===o(e)&&("ArrowRight"===i&&(n="ArrowLeft"),"ArrowLeft"===i&&(n="ArrowRight"));const l=this.getItems();let r=-1;switch(l.forEach(((t,i)=>{t===a&&(r=i)})),n){case"ArrowLeft":case"ArrowUp":t.preventDefault();const i=l.item(r<1?l.length-1:r-1);return void this.selectItem(i,!0);case"ArrowRight":case"ArrowDown":t.preventDefault();const e=-1===r?l.item(1):l.item(r+1)||l.item(0);return void this.selectItem(e,!0);case" ":return t.preventDefault(),void this.selectItem(t.target,!0);default:return}}async setFocus(){var t;null===(t=this.selectedItem||this.getItems()[0])||void 0===t||t.focus()}onLabelClick(){this.setFocus()}getItems(){return this.el.querySelectorAll("calcite-radio-group-item")}selectItem(t,i=!1){if(t===this.selectedItem)return;const e=this.getItems();let a=null;e.forEach((e=>{const n=e.value===t.value;(n&&!e.checked||!n&&e.checked)&&(e.checked=n),e.tabIndex=n?0:-1,n&&(a=e,i&&this.calciteRadioGroupChange.emit(a.value))})),this.selectedItem=a,a&&a.focus()}get el(){return n(this)}static get watchers(){return{value:["valueHandler"],selectedItem:["handleSelectedItemChange"]}}};g.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;background-color:var(--calcite-ui-foreground-1);inline-size:-moz-fit-content;inline-size:fit-content;outline:1px solid var(--calcite-ui-border-input);outline-offset:-1px}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([layout=vertical]){flex-direction:column;align-items:flex-start;align-self:flex-start}:host([width=full]){inline-size:100%;min-inline-size:-moz-fit-content;min-inline-size:fit-content}:host([width=full]) ::slotted(calcite-radio-group-item){flex:1 1 auto}:host([width=full][layout=vertical]) ::slotted(calcite-radio-group-item){justify-content:flex-start}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";const f=class{constructor(e){i(this,e),this.calciteInternalRadioGroupItemChange=t(this,"calciteInternalRadioGroupItemChange",6),this.checked=!1,this.iconFlipRtl=!1,this.iconPosition="start"}handleCheckedChange(){this.calciteInternalRadioGroupItemChange.emit()}render(){const{checked:t,value:i}=this,n=r(this.el,"scale","m"),o=r(this.el,"appearance","solid"),c=r(this.el,"layout","horizontal"),s=this.iconStart?a("calcite-icon",{class:"radio-group-item-icon",flipRtl:this.iconFlipRtl,icon:this.iconStart,key:"icon-start",scale:"s"}):null,m=this.iconEnd?a("calcite-icon",{class:"radio-group-item-icon",flipRtl:this.iconFlipRtl,icon:this.iconEnd,key:"icon-end",scale:"s"}):null,d=a("calcite-icon",{class:"radio-group-item-icon",flipRtl:this.iconFlipRtl,icon:this.icon,key:"icon",scale:"s"}),u=this.icon&&"start"===this.iconPosition&&!this.iconStart?d:null,h=this.icon&&"end"===this.iconPosition&&!this.iconEnd?d:null;return a(e,{"aria-checked":l(t),"aria-label":i,role:"radio"},a("label",{class:{"label--scale-s":"s"===n,"label--scale-m":"m"===n,"label--scale-l":"l"===n,"label--horizontal":"horizontal"===c,"label--outline":"outline"===o}},u,this.iconStart?s:null,a("slot",null,i),a("slot",{name:"input"}),h,this.iconEnd?m:null))}get el(){return n(this)}static get watchers(){return{checked:["handleCheckedChange"]}}};f.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:flex;cursor:pointer;align-self:stretch;font-weight:var(--calcite-font-weight-normal);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-animation-timing) ease-in-out}:host label{pointer-events:none;margin:0.125rem;box-sizing:border-box;display:flex;flex:1 1 0%;align-items:center;color:var(--calcite-ui-text-3);transition:background-color var(--calcite-internal-animation-timing-fast) ease-in-out, border-color var(--calcite-internal-animation-timing-fast) ease-in-out, color var(--calcite-internal-animation-timing-fast) ease-in-out}.label--horizontal{justify-content:center}:host{outline-color:transparent}:host(:focus){outline:2px solid var(--calcite-ui-brand);outline-offset:-1px}.label--scale-s{padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem;padding-block:0.125rem}.label--scale-m{padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;padding-block:0.375rem}.label--scale-l{padding-inline:1rem;padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host(:hover) label{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:active) label{background-color:var(--calcite-ui-foreground-3)}:host([checked]) label{cursor:default;border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-brand);color:var(--calcite-ui-background)}:host([checked]) .label--outline{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand);color:var(--calcite-ui-brand)}::slotted(input){display:none}@media (forced-colors: active){:host([checked]) label{background-color:highlight}:host([checked]) .label--outline{outline:2px solid transparent;outline-offset:2px}:host([checked]) label:not([class~=label--outline]) .radio-group-item-icon{color:highlightText}}.radio-group-item-icon{position:relative;margin:0px;display:inline-flex;line-height:inherit}:host([icon-position=start]) .label--scale-s .radio-group-item-icon{margin-inline-end:0.5rem}:host([icon-position=end]) .label--scale-s .radio-group-item-icon{margin-inline-end:unset;margin-inline-start:0.5rem}:host([icon-position=start]) .label--scale-m .radio-group-item-icon{margin-inline-end:0.75rem}:host([icon-position=end]) .label--scale-m .radio-group-item-icon{margin-inline-end:unset;margin-inline-start:0.75rem}:host([icon-position=start]) .label--scale-l .radio-group-item-icon{margin-inline-end:1rem}:host([icon-position=end]) .label--scale-l .radio-group-item-icon{margin-inline-end:unset;margin-inline-start:1rem}:host([icon-start]) .label--scale-s .radio-group-item-icon{margin-inline-end:0.5rem}:host([icon-end]) .label--scale-s .radio-group-item-icon{margin-inline-start:0.5rem}:host([icon-start]) .label--scale-m .radio-group-item-icon{margin-inline-end:0.75rem}:host([icon-end]) .label--scale-m .radio-group-item-icon{margin-inline-start:0.75rem}:host([icon-start]) .label--scale-l .radio-group-item-icon{margin-inline-end:1rem}:host([icon-end]) .label--scale-l .radio-group-item-icon{margin-inline-start:1rem}";export{g as calcite_radio_group,f as calcite_radio_group_item};