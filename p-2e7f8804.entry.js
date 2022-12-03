/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as i,c as t,h as a,F as n,g as e}from"./p-452677fb.js";import{g as s}from"./p-a0074e38.js";import{c as o,d as r}from"./p-49891df2.js";import{c,d as l,H as d}from"./p-34aa594d.js";import{u as h}from"./p-2ccf0c96.js";import{i as p}from"./p-610a4162.js";import"./p-0d071f85.js";import"./p-237be014.js";const m=class{constructor(a){i(this,a),this.calciteRatingChange=t(this,"calciteRatingChange",6),this.scale="m",this.value=0,this.readOnly=!1,this.disabled=!1,this.showChip=!1,this.intlRating="Rating",this.intlStars="Stars: ${num}",this.required=!1,this.onKeyboardPressed=i=>{!this.required&&p(i.key)&&(i.preventDefault(),this.updateValue(0))},this.onFocusChange=i=>{this.hasFocus=!0,this.required||this.focusValue!==i?this.focusValue=i:this.updateValue(0)},this.guid=`calcite-ratings-${s()}`}connectedCallback(){o(this),c(this)}disconnectedCallback(){r(this),l(this)}componentDidRender(){h(this)}blurHandler(){this.hasFocus=!1}renderStars(){return[1,2,3,4,5].map((i=>{const t=this.value>=i,e=this.average&&!this.value&&i<=this.average,n=i<=this.hoverValue,s=this.average&&this.average+1-i,o=!this.value&&!n&&s>0&&s<1;return a("span",{class:{wrapper:!0}},a("label",{class:{star:!0,focused:this.hasFocus&&this.focusValue===i,selected:t,average:e,hovered:n,partial:o},htmlFor:`${this.guid}-${i}`,onPointerOver:()=>{this.hoverValue=i}},a("calcite-icon",{"aria-hidden":"true",class:"icon",icon:t||e||this.readOnly?"star-f":"star",scale:this.scale}),o&&a("div",{class:"fraction",style:{width:100*s+"%"}},a("calcite-icon",{icon:"star-f",scale:this.scale})),a("span",{class:"visually-hidden"},this.intlStars.replace("${num}",`${i}`))),a("input",{checked:i===this.value,class:"visually-hidden",disabled:this.disabled||this.readOnly,id:`${this.guid}-${i}`,name:this.guid,onChange:()=>this.updateValue(i),onClick:i=>i.stopPropagation(),onFocus:()=>this.onFocusChange(i),onKeyDown:this.onKeyboardPressed,ref:a=>(1===i||i===this.value)&&(this.inputFocusRef=a),type:"radio",value:i}))}))}render(){const{disabled:i,intlRating:t,showChip:e,scale:s,count:o,average:r}=this;return a(n,null,a("fieldset",{class:"fieldset",disabled:i,onBlur:()=>this.hoverValue=null,onPointerLeave:()=>this.hoverValue=null,onTouchEnd:()=>this.hoverValue=null},a("legend",{class:"visually-hidden"},t),this.renderStars()),(o||r)&&e?a("calcite-chip",{scale:s,value:null==o?void 0:o.toString()},!!r&&a("span",{class:"number--average"},r.toString()),!!o&&a("span",{class:"number--count"},"(",null==o?void 0:o.toString(),")")):null,a(d,{component:this}))}onLabelClick(){this.setFocus()}updateValue(i){this.value=i,this.calciteRatingChange.emit({value:i})}async setFocus(){var i;null===(i=this.inputFocusRef)||void 0===i||i.focus()}get el(){return e(this)}};m.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;align-items:center;inline-size:-moz-fit-content;inline-size:fit-content}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]){block-size:1.5rem;--calcite-rating-spacing-unit:0.25rem}:host([scale=m]){block-size:2rem;--calcite-rating-spacing-unit:0.5rem}:host([scale=l]){block-size:2.75rem;--calcite-rating-spacing-unit:0.75rem}:host([read-only]){pointer-events:none}.fieldset{margin:0px;display:flex;border-width:0px;padding:0px}.wrapper{display:inline-block;margin-inline-end:var(--calcite-rating-spacing-unit)}.star{position:relative;display:flex;cursor:pointer;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;color:var(--calcite-ui-border-input)}.focused{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.average,.fraction{color:var(--calcite-ui-warning)}.hovered,.selected,:host([read-only]) .average,:host([read-only]) .fraction{color:var(--calcite-ui-brand)}:host .fraction{pointer-events:none;position:absolute;inset-block-start:0px;overflow:hidden;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inset-inline-start:0}calcite-chip{pointer-events:none;cursor:default}.number--average{font-weight:var(--calcite-font-weight-bold)}.number--count{color:var(--calcite-ui-text-2);font-style:italic}.number--count:not(:first-child){margin-inline-start:var(--calcite-rating-spacing-unit)}.visually-hidden{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";export{m as calcite_rating};