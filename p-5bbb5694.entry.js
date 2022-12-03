/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as t,c as e,h as a,H as i,g as r,F as s}from"./p-452677fb.js";import{T as o,h as n,b as c,c as l,g as h,f as d,e as u,s as p,H as g,j as f,i as v,k as m,n as w,p as y}from"./p-405f6298.js";import{c as x,d as b,n as k}from"./p-9c9227e3.js";import{c as D,a as z}from"./p-0d071f85.js";import{C as _}from"./p-237be014.js";import{u as C}from"./p-2ccf0c96.js";import{i as A}from"./p-610a4162.js";import{H as P}from"./p-e73d3b3e.js";import"./p-420e1a42.js";import"./p-a0074e38.js";const S=class{constructor(a){t(this,a),this.calciteDatePickerChange=e(this,"calciteDatePickerChange",6),this.calciteDatePickerRangeChange=e(this,"calciteDatePickerRangeChange",6),this.intlPrevMonth=o.prevMonth,this.intlNextMonth=o.nextMonth,this.intlYear=o.year,this.scale="m",this.range=!1,this.proximitySelectionDisabled=!1,this.globalAttributes={},this.effectiveLocale="",this.keyDownHandler=e=>{"Escape"===e.key&&this.reset()},this.monthHeaderSelectChange=e=>{const t=new Date(e.detail);this.range?("end"===this.activeRange?this.activeEndDate=t:this.activeStartDate=t,this.mostRecentRangeValue=t):this.activeDate=t},this.monthActiveDateChange=e=>{const t=new Date(e.detail);this.range?("end"===this.activeRange?this.activeEndDate=t:this.activeStartDate=t,this.mostRecentRangeValue=t):this.activeDate=t},this.monthHoverChange=e=>{if(!this.startAsDate)return void(this.hoverRange=void 0);const t=new Date(e.detail);if(this.hoverRange={focused:this.activeRange||"start",start:this.startAsDate,end:this.endAsDate},this.proximitySelectionDisabled)this.endAsDate?this.hoverRange=void 0:t<this.startAsDate?this.hoverRange={focused:"start",start:t,end:this.startAsDate}:(this.hoverRange.end=t,this.hoverRange.focused="end");else if(this.endAsDate){const e=n(t,this.startAsDate),a=n(t,this.endAsDate);a>0?(this.hoverRange.end=t,this.hoverRange.focused="end"):e<0||e>a?(this.hoverRange.start=t,this.hoverRange.focused="start"):(this.hoverRange.end=t,this.hoverRange.focused="end")}else t<this.startAsDate?this.hoverRange={focused:"start",start:t,end:this.startAsDate}:(this.hoverRange.end=t,this.hoverRange.focused="end");e.stopPropagation()},this.monthMouseOutChange=()=>{this.hoverRange&&(this.hoverRange=void 0)},this.reset=()=>{var e,t,a,i,r,n;!Array.isArray(this.valueAsDate)&&this.valueAsDate&&(null===(e=this.valueAsDate)||void 0===e?void 0:e.getTime())!==(null===(t=this.activeDate)||void 0===t?void 0:t.getTime())&&(this.activeDate=new Date(this.valueAsDate)),this.startAsDate&&(null===(a=this.startAsDate)||void 0===a?void 0:a.getTime())!==(null===(i=this.activeStartDate)||void 0===i?void 0:i.getTime())&&(this.activeStartDate=new Date(this.startAsDate)),this.endAsDate&&(null===(r=this.endAsDate)||void 0===r?void 0:r.getTime())!==(null===(n=this.activeEndDate)||void 0===n?void 0:n.getTime())&&(this.activeEndDate=new Date(this.endAsDate))},this.monthDateChange=e=>{const t=new Date(e.detail),a=c(t);if(this.range||a!==c(this.valueAsDate)){if(!this.range)return this.value=a||"",this.valueAsDate=t||null,this.activeDate=t||null,void this.calciteDatePickerChange.emit(t);if(!this.startAsDate||!this.endAsDate&&t<this.startAsDate)this.startAsDate&&this.setEndDate(new Date(this.startAsDate)),"end"==this.activeRange?this.setEndDate(t):this.setStartDate(t);else if(this.endAsDate)if(this.proximitySelectionDisabled)this.setStartDate(t),this.endAsDate=this.activeEndDate=this.end=void 0;else if(this.activeRange)"end"==this.activeRange?this.setEndDate(t):this.setStartDate(t);else{const e=n(t,this.startAsDate),a=n(t,this.endAsDate);0===a||e<0?this.setStartDate(t):0===e||a<0?this.setEndDate(t):e<a?this.setStartDate(t):this.setEndDate(t)}else this.setEndDate(t);this.calciteDatePickerChange.emit(t)}}}activeDateWatcher(e){"end"===this.activeRange&&(this.activeEndDate=e)}handleValueAsDate(e){!Array.isArray(e)&&e&&e!==this.activeDate&&(this.activeDate=e)}handleRangeChange(){const{startAsDate:e,endAsDate:t}=this;this.activeEndDate=t,this.activeStartDate=e}onMinChanged(e){e&&(this.minAsDate=l(e))}onMaxChanged(e){e&&(this.maxAsDate=l(e))}connectedCallback(){x(this),Array.isArray(this.value)?(this.valueAsDate=h(this.value),this.start=this.value[0],this.end=this.value[1]):this.value&&(this.valueAsDate=l(this.value)),this.start&&this.setStartAsDate(l(this.start)),this.end&&this.setEndAsDate(l(this.end)),this.min&&(this.minAsDate=l(this.min)),this.max&&(this.maxAsDate=l(this.max))}disconnectedCallback(){b(this)}async componentWillLoad(){await this.loadLocaleData(),this.onMinChanged(this.min),this.onMaxChanged(this.max)}render(){var e;const t=d(this.range&&Array.isArray(this.valueAsDate)?this.valueAsDate[0]:this.valueAsDate,this.minAsDate,this.maxAsDate);let r=this.getActiveDate(t,this.minAsDate,this.maxAsDate);const n=this.range&&Array.isArray(this.valueAsDate)?d(this.valueAsDate[1],this.minAsDate,this.maxAsDate):null,s=this.getActiveEndDate(n,this.minAsDate,this.maxAsDate);return"end"!==this.activeRange&&("end"!==(null===(e=this.hoverRange)||void 0===e?void 0:e.focused)||this.proximitySelectionDisabled&&!n)||!s||(r=s),this.range&&this.mostRecentRangeValue&&(r=this.mostRecentRangeValue),a(i,{onBlur:this.reset,onKeyDown:this.keyDownHandler,role:"application"},this.renderCalendar(r,this.range&&this.activeRange&&"start"===this.activeRange&&n||this.maxAsDate,this.range&&this.activeRange?"start"===this.activeRange?this.minAsDate:t||this.minAsDate:this.minAsDate,t,n))}valueHandler(e){Array.isArray(e)?(this.valueAsDate=h(e),this.start=e[0],this.end=e[1]):e&&(this.valueAsDate=l(e),this.start="",this.end="")}startWatcher(e){this.setStartAsDate(l(e))}endWatcher(e){this.setEndAsDate(l(e))}async loadLocaleData(){k.numberFormatOptions={numberingSystem:this.numberingSystem,locale:this.effectiveLocale,useGrouping:!1},this.localeData=await u(this.effectiveLocale)}renderCalendar(e,t,i,r,n){return this.localeData&&[a("calcite-date-picker-month-header",{activeDate:e,headingLevel:this.headingLevel||g,intlNextMonth:this.intlNextMonth,intlPrevMonth:this.intlPrevMonth,intlYear:this.intlYear,localeData:this.localeData,max:t,min:i,onCalciteDatePickerSelect:this.monthHeaderSelectChange,scale:this.scale,selectedDate:"end"===this.activeRange?n:r||new Date}),a("calcite-date-picker-month",{activeDate:e,endDate:this.range?n:void 0,hoverRange:this.hoverRange,localeData:this.localeData,max:t,min:i,onCalciteDatePickerActiveDateChange:this.monthActiveDateChange,onCalciteDatePickerSelect:this.monthDateChange,onCalciteInternalDatePickerHover:this.monthHoverChange,onCalciteInternalDatePickerMouseOut:this.monthMouseOutChange,scale:this.scale,selectedDate:"end"===this.activeRange?n:r,startDate:this.range?r:void 0})]}setStartAsDate(e,t){this.startAsDate=e,this.mostRecentRangeValue=this.startAsDate,t&&this.calciteDatePickerRangeChange.emit({startDate:e,endDate:this.endAsDate})}setEndAsDate(e,t){this.endAsDate=e?p(e):e,this.mostRecentRangeValue=this.endAsDate,t&&this.calciteDatePickerRangeChange.emit({startDate:this.startAsDate,endDate:e})}setEndDate(e){this.end=e?c(e):"",this.setEndAsDate(e,!0),this.activeEndDate=e||null}setStartDate(e){this.start=e?c(e):"",this.setStartAsDate(e,!0),this.activeStartDate=e||null}getActiveDate(e,t,a){return d(this.activeDate,t,a)||e||d(new Date,t,a)}getActiveEndDate(e,t,a){return d(this.activeEndDate,t,a)||e||d(new Date,t,a)}static get assetsDirs(){return["assets"]}get el(){return r(this)}static get watchers(){return{activeDate:["activeDateWatcher"],valueAsDate:["handleValueAsDate"],startAsDate:["handleRangeChange"],endAsDate:["handleRangeChange"],min:["onMinChanged"],max:["onMaxChanged"],value:["valueHandler"],start:["startWatcher"],end:["endWatcher"],effectiveLocale:["loadLocaleData"]}}};S.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:inline-block;inline-size:100%;overflow:visible;border-radius:0px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);vertical-align:top}:host([scale=s]){max-inline-size:216px}:host([scale=m]){max-inline-size:286px}:host([scale=l]){max-inline-size:398px}";const M=class{constructor(a){t(this,a),this.calciteDaySelect=e(this,"calciteDaySelect",6),this.calciteInternalDayHover=e(this,"calciteInternalDayHover",6),this.disabled=!1,this.currentMonth=!1,this.selected=!1,this.highlighted=!1,this.range=!1,this.startOfRange=!1,this.endOfRange=!1,this.rangeHover=!1,this.active=!1,this.onClick=()=>{!this.disabled&&this.calciteDaySelect.emit()},this.keyDownHandler=e=>{A(e.key)&&(!this.disabled&&this.calciteDaySelect.emit(),e.preventDefault())}}mouseoverHandler(){this.calciteInternalDayHover.emit()}componentWillLoad(){this.parentDatePickerEl=D(this.el,"calcite-date-picker")}render(){if(this.parentDatePickerEl){const{numberingSystem:e,lang:t}=this.parentDatePickerEl;k.numberFormatOptions={useGrouping:!1,...e&&{numberingSystem:e},...t&&{locale:t}}}const e=k.localize(String(this.day)),t=z(this.el);return a(i,{onClick:this.onClick,onKeyDown:this.keyDownHandler,role:"gridcell"},a("div",{class:{"day-v-wrapper":!0,[_.rtl]:"rtl"===t}},a("div",{class:"day-wrapper"},a("span",{class:"day"},a("span",{class:"text"},e)))))}componentDidRender(){C(this,this.isTabbable)}isTabbable(){return this.active}get el(){return r(this)}};M.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;min-inline-size:0px;cursor:pointer;justify-content:center;color:var(--calcite-ui-text-3);inline-size:14.2857142857%}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.day-v-wrapper{flex:1 1 auto}.day-wrapper{display:flex;flex-direction:column;align-items:center}.day{display:flex;align-items:center;justify-content:center;border-radius:9999px;font-size:var(--calcite-font-size--2);line-height:1rem;line-height:1;color:var(--calcite-ui-text-3);opacity:var(--calcite-ui-opacity-disabled);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;background:none;box-shadow:0 0 0 2px transparent}.text{margin-block:1px 0px;margin-inline-start:0px}:host([scale=s]) .day-v-wrapper{padding-block:0.125rem}:host([scale=s]) .day-wrapper{padding:0px}:host([scale=s]) .day{block-size:27px;inline-size:27px;font-size:var(--calcite-font-size--2)}:host([scale=m]) .day-v-wrapper{padding-block:0.25rem}:host([scale=m]) .day-wrapper{padding-inline:0.25rem}:host([scale=m]) .day{block-size:33px;inline-size:33px;font-size:var(--calcite-font-size--1)}:host([scale=l]) .day-v-wrapper{padding-block:0.25rem}:host([scale=l]) .day-wrapper{padding-inline:0.25rem}:host([scale=l]) .day{block-size:43px;inline-size:43px;font-size:var(--calcite-font-size-0)}:host([current-month]) .day{opacity:1}:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}:host(:focus),:host([active]){outline:2px solid transparent;outline-offset:2px}:host(:focus:not([disabled])) .day{outline:2px solid var(--calcite-ui-brand);outline-offset:2px;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([selected]) .day{font-weight:var(--calcite-font-weight-medium);background-color:var(--calcite-ui-brand) !important;color:var(--calcite-ui-foreground-1) !important}:host([range][selected]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([start-of-range]) .day-wrapper{border-start-start-radius:40%;border-end-start-radius:40%}:host([end-of-range]) .day-wrapper{border-start-end-radius:40%;border-end-end-radius:40%}:host([start-of-range]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range]) .calcite--rtl .day-wrapper{box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([start-of-range]) .day{opacity:1}:host([end-of-range]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset -4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range]) .calcite--rtl .day-wrapper{box-shadow:inset 4px 0 var(--calcite-ui-foreground-1)}:host([end-of-range]) .day{opacity:1}:host([start-of-range]:not(:focus)) :not(.calcite--rtl) .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([start-of-range]:not(:focus)) .calcite--rtl .day{box-shadow:0 0 0 -2px var(--calcite-ui-foreground-1)}:host([end-of-range]:not(:focus)) :not(.calcite--rtl) .day{box-shadow:0 0 0 -2px var(--calcite-ui-foreground-1)}:host([end-of-range]:not(:focus)) .calcite--rtl .day{box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host([start-of-range][scale=l]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset 8px 0 var(--calcite-ui-foreground-1)}:host([start-of-range][scale=l]) .calcite--rtl .day-wrapper{box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l]) :not(.calcite--rtl) .day-wrapper{box-shadow:inset -8px 0 var(--calcite-ui-foreground-1)}:host([end-of-range][scale=l]) .calcite--rtl .day-wrapper{box-shadow:inset 8px 0 var(--calcite-ui-foreground-1)}:host([highlighted]) .day-wrapper{background-color:var(--calcite-ui-foreground-current)}:host([highlighted]) .day-wrapper .day{color:var(--calcite-ui-text-1)}:host([highlighted]:not([active]:focus)) .day{border-radius:0px;color:var(--calcite-ui-text-1)}:host([range-hover]:not([selected])) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([range-hover]:not([selected])) .day{border-radius:0px}:host([start-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([start-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([end-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host([end-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host(:hover[end-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host(:hover[start-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host(:hover[start-of-range][range-hover]) :not(.calcite--rtl) .day-wrapper,:host(:hover[end-of-range][range-hover]) .calcite--rtl .day-wrapper{background-image:linear-gradient(to left, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1));border-radius:0px;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}:host(:hover[range-hover]:not([selected]).focused--start) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--start) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current))}:host(:hover[range-hover]:not([selected]).focused--start) .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end) :not(.calcite--rtl) .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current))}:host(:hover[range-hover]:not([selected]).focused--end) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-current), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--end) .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2))}:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) :not(.calcite--rtl) .day-wrapper,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .calcite--rtl .day-wrapper{background-image:linear-gradient(to right, var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-2), var(--calcite-ui-foreground-1), var(--calcite-ui-foreground-1))}:host(:hover[range-hover]:not([selected]).focused--end.hover--outside-range) :not(.calcite--rtl) .day,:host(:hover[range-hover]:not([selected]).focused--start.hover--outside-range) .calcite--rtl .day{border-radius:9999px;opacity:1;box-shadow:0 0 0 2px var(--calcite-ui-foreground-1)}:host(:hover[start-of-range].hover--inside-range.focused--end) .day-wrapper,:host(:hover[end-of-range].hover--inside-range.focused--start) .day-wrapper{background-image:none}:host([start-of-range].hover--inside-range.focused--end) .day-wrapper,:host([end-of-range].hover--inside-range.focused--start) .day-wrapper{background-color:var(--calcite-ui-foreground-2)}:host([highlighted]:last-child) :not(.calcite--rtl) .day-wrapper,:host([range-hover]:last-child) :not(.calcite--rtl) .day-wrapper,:host([highlighted]:first-child) .calcite--rtl .day-wrapper,:host([range-hover]:first-child) .calcite--rtl .day-wrapper{box-shadow:inset -4px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([highlighted]:first-child) :not(.calcite--rtl) .day-wrapper,:host([range-hover]:first-child) :not(.calcite--rtl) .day-wrapper,:host([highlighted]:last-child) .calcite--rtl .day-wrapper,:host([range-hover]:last-child) .calcite--rtl .day-wrapper{box-shadow:inset 4px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=s][highlighted]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][range-hover]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][highlighted]:first-child) .calcite--rtl .day-wrapper,:host([scale=s][range-hover]:first-child) .calcite--rtl .day-wrapper{box-shadow:inset -1px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=s][highlighted]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][range-hover]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=s][highlighted]:last-child) .calcite--rtl .day-wrapper,:host([scale=s][range-hover]:last-child) .calcite--rtl .day-wrapper{box-shadow:inset 1px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([scale=l][highlighted]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][range-hover]:first-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][highlighted]:last-child) .calcite--rtl .day-wrapper,:host([scale=l][range-hover]:last-child) .calcite--rtl .day-wrapper{box-shadow:inset 6px 0px 0px 0px var(--calcite-ui-foreground-1)}:host([highlighted]:first-child) .day-wrapper,:host([range-hover]:first-child) .day-wrapper{border-start-start-radius:45%;border-end-start-radius:45%}:host([highlighted]:last-child) .day-wrapper,:host([range-hover]:last-child) .day-wrapper{border-start-end-radius:45%;border-end-end-radius:45%}:host([scale=l][highlighted]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][range-hover]:last-child) :not(.calcite--rtl) .day-wrapper,:host([scale=l][highlighted]:first-child) .calcite--rtl .day-wrapper,:host([scale=l][range-hover]:first-child) .calcite--rtl .day-wrapper{box-shadow:inset -6px 0px 0px 0px var(--calcite-ui-foreground-1)}@media (forced-colors: active){:host(:hover:not([disabled])) .day,:host([active]:not([range])) .day{border-radius:0px}:host([selected]){outline:2px solid canvasText}:host([selected]) .day{border-radius:0px;background-color:highlight}:host([range][selected]) .day-wrapper,:host([highlighted]) .day-wrapper,:host([range-hover]:not([selected])) .day-wrapper{background-color:highlight}:host([range][selected][start-of-range]) .day-wrapper,:host([range][selected][end-of-range]) .day-wrapper{background-color:canvas}}";const j=class{constructor(a){t(this,a),this.calciteDatePickerSelect=e(this,"calciteDatePickerSelect",6),this.calciteInternalDatePickerHover=e(this,"calciteInternalDatePickerHover",6),this.calciteDatePickerActiveDateChange=e(this,"calciteDatePickerActiveDateChange",6),this.calciteInternalDatePickerMouseOut=e(this,"calciteInternalDatePickerMouseOut",6),this.activeDate=new Date,this.keyDownHandler=e=>{if(e.defaultPrevented)return;const t="rtl"===this.el.dir;switch(e.key){case"ArrowUp":e.preventDefault(),this.addDays(-7);break;case"ArrowRight":e.preventDefault(),this.addDays(t?-1:1);break;case"ArrowDown":e.preventDefault(),this.addDays(7);break;case"ArrowLeft":e.preventDefault(),this.addDays(t?1:-1);break;case"PageUp":e.preventDefault(),this.addMonths(-1);break;case"PageDown":e.preventDefault(),this.addMonths(1);break;case"Home":e.preventDefault(),this.activeDate.setDate(1),this.addDays();break;case"End":e.preventDefault(),this.activeDate.setDate(new Date(this.activeDate.getFullYear(),this.activeDate.getMonth()+1,0).getDate()),this.addDays();break;case"Enter":case" ":e.preventDefault();break;case"Tab":this.activeFocus=!1}},this.disableActiveFocus=()=>{this.activeFocus=!1},this.dayHover=e=>{const t=e.target;t.disabled?this.calciteInternalDatePickerMouseOut.emit():this.calciteInternalDatePickerHover.emit(t.value),e.stopPropagation()},this.daySelect=e=>{this.calciteDatePickerSelect.emit(e.target.value)}}mouseoutHandler(){this.calciteInternalDatePickerMouseOut.emit()}render(){const e=this.activeDate.getMonth(),t=this.activeDate.getFullYear(),r=this.localeData.weekStart%7,{abbreviated:n,short:s,narrow:o}=this.localeData.days,c="s"===this.scale?o||s||n:s||n||o,l=[...c.slice(r,7),...c.slice(0,r)],h=this.getCurrentMonthDays(e,t),d=this.getPrevMonthdays(e,t,r),u=this.getNextMonthDays(e,t,r),g=[...d.map((a=>{const i=new Date(t,e-1,a);return this.renderDateDay(!1,a,i)})),...h.map((a=>{const i=new Date(t,e,a),r=f(i,this.activeDate);return this.renderDateDay(r,a,i,!0,!0)})),...u.map((a=>{const i=new Date(t,e+1,a);return this.renderDateDay(!1,a,i)}))],v=[];for(let a=0;a<g.length;a+=7)v.push(g.slice(a,a+7));return a(i,{onFocusOut:this.disableActiveFocus,onKeyDown:this.keyDownHandler},a("div",{class:"calender",role:"grid"},a("div",{class:"week-headers",role:"row"},l.map((e=>a("span",{class:"week-header",role:"columnheader"},e)))),v.map((e=>a("div",{class:"week-days",role:"row"},e)))))}addMonths(e){const t=new Date(this.activeDate);t.setMonth(this.activeDate.getMonth()+e),this.calciteDatePickerActiveDateChange.emit(d(t,this.min,this.max)),this.activeFocus=!0}addDays(e=0){const t=new Date(this.activeDate);t.setDate(this.activeDate.getDate()+e),this.calciteDatePickerActiveDateChange.emit(d(t,this.min,this.max)),this.activeFocus=!0}getPrevMonthdays(e,t,a){const i=new Date(t,e,0),r=i.getDate(),n=[];if(i.getDay()-6===a)return n;for(let s=i.getDay()-a;s>=0;s--)n.push(r-s);return n}getCurrentMonthDays(e,t){const a=new Date(t,e+1,0).getDate(),i=[];for(let r=0;r<a;r++)i.push(r+1);return i}getNextMonthDays(e,t,a){const i=new Date(t,e+1,0).getDay(),r=[];if(i===(a+6)%7)return r;for(let n=0;n<(6-(i-a))%7;n++)r.push(n+1);return r}betweenSelectedRange(e){return!(!(this.startDate&&this.endDate&&e>this.startDate&&e<this.endDate)||this.isRangeHover(e))}isSelected(e){return!!(f(e,this.selectedDate)||this.startDate&&f(e,this.startDate)||this.endDate&&f(e,this.endDate))}isStartOfRange(e){return!(!this.startDate||f(this.startDate,this.endDate)||!f(this.startDate,e)||this.isEndOfRange(e))}isEndOfRange(e){return!!(this.endDate&&!f(this.startDate,this.endDate)&&f(this.endDate,e)||!this.endDate&&this.hoverRange&&f(this.startDate,this.hoverRange.end)&&f(e,this.hoverRange.end))}renderDateDay(e,t,i,r,n){var s;const o=this.isFocusedOnStart(),c=this.isHoverInRange()||!this.endDate&&this.hoverRange&&f(null===(s=this.hoverRange)||void 0===s?void 0:s.end,this.startDate);return a("calcite-date-picker-day",{active:e,class:{"hover--inside-range":this.startDate&&c,"hover--outside-range":this.startDate&&!c,"focused--start":o,"focused--end":!o},currentMonth:r,day:t,disabled:!v(i,this.min,this.max),endOfRange:this.isEndOfRange(i),highlighted:this.betweenSelectedRange(i),key:i.toDateString(),onCalciteDaySelect:this.daySelect,onCalciteInternalDayHover:this.dayHover,range:!!this.startDate&&!!this.endDate&&!f(this.startDate,this.endDate),rangeHover:this.isRangeHover(i),ref:t=>{n&&e&&this.activeFocus&&(null==t||t.focus())},scale:this.scale,selected:this.isSelected(i),startOfRange:this.isStartOfRange(i),value:i})}isFocusedOnStart(){var e;return"start"===(null===(e=this.hoverRange)||void 0===e?void 0:e.focused)}isHoverInRange(){if(!this.hoverRange)return!1;const{start:e,end:t}=this.hoverRange;return!!(!this.isFocusedOnStart()&&this.startDate&&(!this.endDate||t<this.endDate)||this.isFocusedOnStart()&&this.startDate&&e>this.startDate)}isRangeHover(e){if(!this.hoverRange)return!1;const{start:t,end:a}=this.hoverRange,i=this.isFocusedOnStart(),r=this.isHoverInRange(),n=r&&(!i&&e>this.startDate&&(e<a||f(e,a))||i&&e<this.endDate&&(e>t||f(e,t))),s=!r&&(!i&&e>=this.endDate&&(e<a||f(e,a))||i&&(e<this.startDate||this.endDate&&f(e,this.startDate))&&(e>t||f(e,t)));return n||s}get el(){return r(this)}};j.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}.calender{margin-block-end:0.25rem}.week-headers{display:flex;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding-block:0px;padding-inline:0.25rem}.week-header{text-align:center;font-weight:var(--calcite-font-weight-bold);color:var(--calcite-ui-text-3);inline-size:14.2857142857%}:host([scale=s]) .week-header{padding-inline:0px;padding-block:0.5rem 0.75rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) .week-header{padding-inline:0px;padding-block:0.75rem 1rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]) .week-header{padding-inline:0px;padding-block:1rem 1.25rem;font-size:var(--calcite-font-size--1);line-height:1rem}.week-days{display:flex;flex-direction:row;padding-block:0px;padding-inline:6px}.week-days:focus{outline:2px solid transparent;outline-offset:2px}";const H=class{constructor(a){t(this,a),this.calciteDatePickerSelect=e(this,"calciteDatePickerSelect",6),this.globalAttributes={},this.onYearKey=e=>{const t=this.parseCalendarYear(e.target.value);switch(e.key){case"ArrowDown":e.preventDefault(),this.setYear({localizedYear:t,offset:-1});break;case"ArrowUp":e.preventDefault(),this.setYear({localizedYear:t,offset:1})}},this.onYearChange=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value)})},this.onYearInput=e=>{this.setYear({localizedYear:this.parseCalendarYear(e.target.value),commit:!1})},this.prevMonthClick=e=>{this.handleArrowClick(e,this.prevMonthDate)},this.prevMonthKeydown=e=>{A(e.key)&&this.prevMonthClick(e)},this.nextMonthClick=e=>{this.handleArrowClick(e,this.nextMonthDate)},this.nextMonthKeydown=e=>{A(e.key)&&this.nextMonthClick(e)},this.handleArrowClick=(e,t)=>{e.preventDefault(),this.calciteDatePickerSelect.emit(t)}}componentWillLoad(){this.parentDatePickerEl=D(this.el,"calcite-date-picker")}connectedCallback(){this.setNextPrevMonthDates()}render(){return a("div",{class:"header"},this.renderContent())}renderContent(){var e;if(!this.activeDate||!this.localeData)return null;if(this.parentDatePickerEl){const{numberingSystem:e,lang:t}=this.parentDatePickerEl;k.numberFormatOptions={useGrouping:!1,...e&&{numberingSystem:e},...t&&{locale:t}}}const t=this.activeDate.getMonth(),{months:i,unitOrder:r}=this.localeData,n=(i.wide||i.narrow||i.abbreviated)[t],o=this.formatCalendarYear(this.activeDate.getFullYear()),c="l"===this.scale?"m":"s",l=m(r),h=l.indexOf("y")<l.indexOf("m"),d=null===(e=this.localeData.year)||void 0===e?void 0:e.suffix;return a(s,null,a("a",{"aria-disabled":`${this.prevMonthDate.getMonth()===t}`,"aria-label":this.intlPrevMonth,class:"chevron",href:"#",onClick:this.prevMonthClick,onKeyDown:this.prevMonthKeydown,role:"button",tabindex:this.prevMonthDate.getMonth()===t?-1:0},a("calcite-icon",{"flip-rtl":!0,icon:"chevron-left",scale:c})),a("div",{class:{text:!0,"text--reverse":h}},a(P,{class:"month",level:this.headingLevel},n),a("span",{class:"year-wrap"},a("input",{"aria-label":this.intlYear,class:{year:!0,"year--suffix":!!d},inputmode:"numeric",maxlength:"4",minlength:"1",onChange:this.onYearChange,onInput:this.onYearInput,onKeyDown:this.onYearKey,pattern:"\\d*",ref:e=>this.yearInput=e,type:"text",value:o}),d&&a("span",{class:"suffix"},d))),a("a",{"aria-disabled":`${this.nextMonthDate.getMonth()===t}`,"aria-label":this.intlNextMonth,class:"chevron",href:"#",onClick:this.nextMonthClick,onKeyDown:this.nextMonthKeydown,role:"button",tabindex:this.nextMonthDate.getMonth()===t?-1:0},a("calcite-icon",{"flip-rtl":!0,icon:"chevron-right",scale:c})))}setNextPrevMonthDates(){this.activeDate&&(this.nextMonthDate=d(w(this.activeDate),this.min,this.max),this.prevMonthDate=d(y(this.activeDate),this.min,this.max))}formatCalendarYear(e){const{localeData:t}=this;return k.localize(`${e+("buddhist"===t["default-calendar"]?543:0)}`)}parseCalendarYear(e){const{localeData:t}=this,a="buddhist"===t["default-calendar"]?543:0,i=Number(k.delocalize(e))-a;return k.localize(`${i}`)}getInRangeDate({localizedYear:e,offset:t=0}){const{min:a,max:i,activeDate:r}=this,n=Number(k.delocalize(e)),s=n.toString().length,o=!isNaN(n)&&n+t,c=o&&(!a||a.getFullYear()<=o)&&(!i||i.getFullYear()>=o);if(o&&c&&s===e.length){const e=new Date(r);return e.setFullYear(o),d(e,a,i)}}setYear({localizedYear:e,commit:t=!0,offset:a=0}){const{yearInput:i,activeDate:r}=this,n=this.getInRangeDate({localizedYear:e,offset:a});n&&this.calciteDatePickerSelect.emit(n),t&&(i.value=this.formatCalendarYear((n||r).getFullYear()))}get el(){return r(this)}static get watchers(){return{min:["setNextPrevMonthDates"],max:["setNextPrevMonthDates"],activeDate:["setNextPrevMonthDates"]}}};H.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block}.header{display:flex;justify-content:space-between;padding-block:0px;padding-inline:0.25rem}:host([scale=s]) .text{margin-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=s]) .chevron{block-size:2.25rem}:host([scale=m]) .text{margin-block:0.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m]) .chevron{block-size:3rem}:host([scale=l]) .text{margin-block:1rem;font-size:var(--calcite-font-size-1);line-height:1.5rem}:host([scale=l]) .chevron{block-size:3.5rem}.chevron{margin-inline:-0.25rem;box-sizing:content-box;display:flex;flex-grow:0;cursor:pointer;align-items:center;justify-content:center;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-inline:0.25rem;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;inline-size:14.2857142857%}.chevron:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}.chevron:hover,.chevron:focus{background-color:var(--calcite-ui-foreground-2);fill:var(--calcite-ui-text-1);color:var(--calcite-ui-text-1)}.chevron:active{background-color:var(--calcite-ui-foreground-3)}.chevron[aria-disabled=true]{pointer-events:none;opacity:0}.text{margin-block:auto;display:flex;inline-size:100%;flex:1 1 auto;align-items:center;justify-content:center;text-align:center;line-height:1}.text--reverse{flex-direction:row-reverse}.month,.year,.suffix{margin-inline:0.25rem;margin-block:auto;display:inline-block;background-color:var(--calcite-ui-foreground-1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-1);font-size:inherit}.year{position:relative;inline-size:2.5rem;border-style:none;background-color:transparent;text-align:center;font-family:inherit;outline-color:transparent}.year:hover{transition-duration:100ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:outline-color;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}.year:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.year--suffix{text-align:start}.year-wrap{position:relative}.suffix{inset-block-start:0px;white-space:nowrap;text-align:start;inset-inline-start:0}";export{S as calcite_date_picker,M as calcite_date_picker_day,j as calcite_date_picker_month,H as calcite_date_picker_month_header};