"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[9739],{54734:function(t,e,i){i.r(e),i.d(e,{calcite_alert:function(){return m}});var n=i(95963),r=i(76992),o=i(35989),a=i(39708),s=i(17459);i(91642);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
const l={intlClose:"Close"},c={slow:14e3,medium:1e4,fast:6e3},u={title:"title",message:"message",link:"link"},d='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([scale=s]){--calcite-alert-width:40em;--calcite-alert-spacing-token-small:0.5rem;--calcite-alert-spacing-token-large:0.75rem}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .alert-queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-alert-min-height:3.5rem}:host([scale=s]) .alert-close{padding:0.5rem}:host([scale=m]){--calcite-alert-width:50em;--calcite-alert-spacing-token-small:0.75rem;--calcite-alert-spacing-token-large:1rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .alert-queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-alert-min-height:4.1875rem}:host([scale=l]){--calcite-alert-width:60em;--calcite-alert-spacing-token-small:1rem;--calcite-alert-spacing-token-large:1.25rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .alert-queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-alert-min-height:5.625rem}:host{--calcite-alert-edge-distance:2rem;display:block}:host .container{pointer-events:none;position:fixed;z-index:500;margin-block:0px;margin-inline:auto;display:flex;align-items:center;justify-content:center;background-color:var(--calcite-ui-foreground-1);opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);border-radius:var(--calcite-border-radius);border-block-start:0px solid transparent;border-inline:1px solid var(--calcite-ui-border-3);border-block-end:1px solid var(--calcite-ui-border-3);min-block-size:var(--calcite-alert-min-height);inline-size:var(--calcite-alert-width);max-inline-size:calc(100% - (var(--calcite-alert-edge-distance) * 2 + 2px));max-block-size:0;transition:var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}:host .container.bottom,:host .container.top{inset-inline-end:0;inset-inline-start:0}:host .container[class*=bottom]{transform:translate3d(0, var(--calcite-alert-edge-distance), 0);inset-block-end:var(--calcite-alert-edge-distance)}:host .container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), 0);inset-block-start:var(--calcite-alert-edge-distance)}:host .container[class*=-start]{inset-inline-start:var(--calcite-alert-edge-distance);inset-inline-end:auto}:host .container[class*=-end]{inset-inline-end:var(--calcite-alert-edge-distance);inset-inline-start:auto}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.container{display:flex;inline-size:100%;align-items:center;justify-content:center}.alert-close{outline-color:transparent}.alert-close:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}:host([open]) .container:not(.queued){max-block-size:100%;border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container:not(.queued)[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-alert-edge-distance)), inherit)}:host([open]) .container:not(.queued)[class*=top]{transform:translate3d(0, var(--calcite-alert-edge-distance), inherit)}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2);margin-inline-end:0.5rem}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-ui-text-link)}.alert-content{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;overflow-wrap:break-word;background-color:var(--calcite-ui-foreground-1);flex:1 1 auto;min-inline-size:0;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:0 var(--calcite-alert-spacing-token-small);border-end-start-radius:var(--calcite-border-radius);border-end-end-radius:var(--calcite-border-radius)}.alert-content:first-of-type:not(:only-child){padding-inline-start:var(--calcite-alert-spacing-token-large)}.alert-content:only-child{padding:var(--calcite-alert-spacing-token-small)}.alert-icon{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;display:flex;align-items:center;align-self:stretch;background-color:var(--calcite-ui-foreground-1);padding-block:0px}.alert-close{transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-alert-spacing-token-small);padding-inline:var(--calcite-alert-spacing-token-large);flex:0 0 auto;cursor:pointer;align-self:stretch;overflow:hidden;border-style:none;background-color:var(--calcite-ui-foreground-1);padding-block:0px;color:var(--calcite-ui-text-3);outline:2px solid transparent;outline-offset:2px;border-end-end-radius:var(--calcite-border-radius)}.alert-close:hover,.alert-close:focus{background-color:var(--calcite-ui-foreground-2);color:var(--calcite-ui-text-1)}.alert-close:open{background-color:var(--calcite-ui-foreground-3)}.alert-queue-count{visibility:hidden;display:flex;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;background-color:var(--calcite-ui-foreground-1);text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2);opacity:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0px solid transparent;border-start-end-radius:0}.alert-queue-count.active{visibility:visible;opacity:1}:host([auto-dismiss])>.alert-queue-count{border-inline-end:0px solid transparent}.alert-dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.alert-dismiss-progress:after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:"";background-color:var(--calcite-alert-dismiss-progress-background);inset-inline-end:0}:host([color=blue]) .container{border-block-start-color:var(--calcite-ui-info)}:host([color=blue]) .container .alert-icon{color:var(--calcite-ui-info)}:host([color=red]) .container{border-block-start-color:var(--calcite-ui-danger)}:host([color=red]) .container .alert-icon{color:var(--calcite-ui-danger)}:host([color=yellow]) .container{border-block-start-color:var(--calcite-ui-warning)}:host([color=yellow]) .container .alert-icon{color:var(--calcite-ui-warning)}:host([color=green]) .container{border-block-start-color:var(--calcite-ui-success)}:host([color=green]) .container .alert-icon{color:var(--calcite-ui-success)}:host([auto-dismiss-duration=fast]) .alert-dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host([auto-dismiss-duration=medium]) .alert-dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host([auto-dismiss-duration=slow]) .alert-dismiss-progress:after{animation:dismissProgress 14000ms ease-out}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}',m=class{constructor(t){(0,n.r)(this,t),this.calciteAlertBeforeClose=(0,n.c)(this,"calciteAlertBeforeClose",6),this.calciteAlertClose=(0,n.c)(this,"calciteAlertClose",6),this.calciteAlertBeforeOpen=(0,n.c)(this,"calciteAlertBeforeOpen",6),this.calciteAlertOpen=(0,n.c)(this,"calciteAlertOpen",6),this.calciteInternalAlertSync=(0,n.c)(this,"calciteInternalAlertSync",6),this.calciteInternalAlertRegister=(0,n.c)(this,"calciteInternalAlertRegister",6),this.active=!1,this.open=!1,this.autoDismiss=!1,this.autoDismissDuration=this.autoDismiss?"medium":null,this.color="blue",this.intlClose=l.intlClose,this.placement="bottom",this.scale="m",this.effectiveLocale="",this.queue=[],this.queueLength=0,this.queued=!1,this.autoDismissTimeoutId=null,this.trackTimer=Date.now(),this.openTransitionProp="opacity",this.setTransitionEl=t=>{this.transitionEl=t,(0,a.c)(this)},this.closeAlert=()=>{this.autoDismissTimeoutId=null,this.queued=!1,this.open=!1,this.queue=this.queue.filter((t=>t!==this.el)),this.determineActiveAlert(),this.calciteInternalAlertSync.emit({queue:this.queue})}}activeHandler(t){this.open=t}openHandler(t){this.open&&!this.queued&&(this.calciteInternalAlertRegister.emit(),this.active=t),this.open||(this.queue=this.queue.filter((t=>t!==this.el)),this.calciteInternalAlertSync.emit({queue:this.queue}),this.active=!1)}updateRequestedIcon(){this.requestedIcon=(0,r.s)(o.S,this.icon,this.color)}updateDuration(){this.autoDismiss&&this.autoDismissTimeoutId&&(window.clearTimeout(this.autoDismissTimeoutId),this.autoDismissTimeoutId=window.setTimeout((()=>this.closeAlert()),c[this.autoDismissDuration]-(Date.now()-this.trackTimer)))}connectedCallback(){(0,s.c)(this);const t=this.open||this.active;t&&!this.queued&&(this.activeHandler(t),this.openHandler(t),this.calciteInternalAlertRegister.emit()),(0,a.c)(this)}componentWillLoad(){this.requestedIcon=(0,r.s)(o.S,this.icon,this.color)}disconnectedCallback(){window.clearTimeout(this.autoDismissTimeoutId),(0,a.d)(this),(0,s.d)(this)}render(){const t=(0,n.h)("button",{"aria-label":this.intlClose,class:"alert-close",onClick:this.closeAlert,ref:t=>this.closeButton=t,type:"button"},(0,n.h)("calcite-icon",{icon:"x",scale:"l"===this.scale?"m":"s"}));s.n.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"};const e=this.queueLength>2?this.queueLength-1:1,i=s.n.numberFormatter.format(e),o=(0,n.h)("div",{class:(this.queueLength>1?"active ":"")+"alert-queue-count"},(0,n.h)("calcite-chip",{scale:this.scale,value:i},i)),{active:a,autoDismiss:l,label:c,placement:d,queued:m,requestedIcon:h}=this,g=l?"alert":"alertdialog",f=!a;return(0,n.h)(n.H,{"aria-hidden":(0,r.t)(f),"aria-label":c,"calcite-hydrated-hidden":f,role:g},(0,n.h)("div",{class:{container:!0,queued:m,[d]:!0},ref:this.setTransitionEl},h?(0,n.h)("div",{class:"alert-icon"},(0,n.h)("calcite-icon",{icon:h,scale:"l"===this.scale?"m":"s"})):null,(0,n.h)("div",{class:"alert-content"},(0,n.h)("slot",{name:u.title}),(0,n.h)("slot",{name:u.message}),(0,n.h)("slot",{name:u.link})),o,l?null:t,a&&!m&&l?(0,n.h)("div",{class:"alert-dismiss-progress"}):null))}alertSync(t){this.queue!==t.detail.queue&&(this.queue=t.detail.queue),this.queueLength=this.queue.length,this.determineActiveAlert(),t.stopPropagation()}alertRegister(){this.open&&!this.queue.includes(this.el)&&(this.queued=!0,this.queue.push(this.el)),this.calciteInternalAlertSync.emit({queue:this.queue}),this.determineActiveAlert()}async setFocus(){const t=(0,r.g)(this.el,{selector:"calcite-link"});(this.closeButton||t)&&(t?t.setFocus():this.closeButton&&this.closeButton.focus())}determineActiveAlert(){var t;(null===(t=this.queue)||void 0===t?void 0:t[0])===this.el&&(this.openAlert(),this.autoDismiss&&!this.autoDismissTimeoutId&&(this.trackTimer=Date.now(),this.autoDismissTimeoutId=window.setTimeout((()=>this.closeAlert()),c[this.autoDismissDuration])))}onBeforeOpen(){this.calciteAlertBeforeOpen.emit()}onOpen(){this.calciteAlertOpen.emit()}onBeforeClose(){this.calciteAlertBeforeClose.emit()}onClose(){this.calciteAlertClose.emit()}openAlert(){window.clearTimeout(this.queueTimeout),this.queueTimeout=window.setTimeout((()=>this.queued=!1),300)}get el(){return(0,n.g)(this)}static get watchers(){return{active:["activeHandler"],open:["openHandler"],icon:["updateRequestedIcon"],color:["updateRequestedIcon"],autoDismissDuration:["updateDuration"]}}};m.style=d},76992:function(t,e,i){i.d(e,{a:function(){return l},b:function(){return p},c:function(){return h},d:function(){return s},e:function(){return c},f:function(){return b},g:function(){return w},h:function(){return o},i:function(){return D},j:function(){return v},k:function(){return E},l:function(){return u},m:function(){return S},n:function(){return a},q:function(){return m},s:function(){return I},t:function(){return q}});var n=i(91642),r=i(91278);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
function o(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,r.g)()}`:""}function a(t){return Array.isArray(t)?t:Array.from(t)}function s(t){const e=h(t,`.${n.C.darkTheme}, .${n.C.lightTheme}`);return(null===e||void 0===e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function l(t){const e="dir",i=`[${e}]`,n=h(t,i);return n?n.getAttribute(e):"ltr"}function c(t,e,i){const n=`[${e}]`,r=t.closest(n);return r?r.getAttribute(e):i}function u(t){return t.getRootNode()}function d(t){return t.host||null}function m(t,{selector:e,id:i}){function n(t){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const r=u(t),o=i?"getElementById"in r?r.getElementById(i):null:e?r.querySelector(e):null,a=d(r);return o||(a?n(a):null)}return n(t)}function h(t,e){function i(t){return t?t.closest(e)||i(d(u(t))):null}return i(t)}function g(t,e){return f(t,e)}function f(t,e){if(!t)return;const i=e(t);if(void 0!==i)return i;const{parentNode:n}=t;return f(n instanceof ShadowRoot?n.host:n,e)}function p(t,e){return!!g(e,(e=>e===t||void 0))}function v(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}async function b(t){if(t)return v(t)?t.setFocus():t.focus()}const y=":not([slot])";function w(t,e,i){e&&!Array.isArray(e)&&"string"!==typeof e&&(i=e,e=null);const n=e?Array.isArray(e)?e.map((t=>`[slot="${t}"]`)).join(","):`[slot="${e}"]`:y;return(null===i||void 0===i?void 0:i.all)?x(t,n,i):A(t,n,i)}function k(t,e){return t?Array.from(t.children||[]).filter((t=>null===t||void 0===t?void 0:t.matches(e))):[]}function x(t,e,i){let n=e===y?k(t,y):Array.from(t.querySelectorAll(e));n=i&&!1===i.direct?n:n.filter((e=>e.parentElement===t)),n=(null===i||void 0===i?void 0:i.matches)?n.filter((t=>null===t||void 0===t?void 0:t.matches(i.matches))):n;const r=null===i||void 0===i?void 0:i.selector;return r?n.map((t=>Array.from(t.querySelectorAll(r)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):n}function A(t,e,i){let n=e===y?k(t,y)[0]||null:t.querySelector(e);n=i&&!1===i.direct||(null===n||void 0===n?void 0:n.parentElement)===t?n:null,n=(null===i||void 0===i?void 0:i.matches)?(null===n||void 0===n?void 0:n.matches(i.matches))?n:null:n;const r=null===i||void 0===i?void 0:i.selector;return r?null===n||void 0===n?void 0:n.querySelector(r):n}function S(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function I(t,e,i){return"string"===typeof e&&""!==e?e:""===e?t[i]:void 0}function E(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function q(t){return Boolean(t).toString()}function D(t){return!(!t.isPrimary||0!==t.button)}},91278:function(t,e,i){
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
function n(t){return t.map((t=>{let e="";for(let i=0;i<t;i++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}i.d(e,{g:function(){return r}});const r=()=>n([2,1,1,1,3])},35989:function(t,e,i){
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
var n;i.d(e,{S:function(){return n}}),function(t){t["green"]="checkCircle",t["yellow"]="exclamationMarkTriangle",t["red"]="exclamationMarkTriangle",t["blue"]="lightbulb"}(n||(n={}))},91188:function(t,e,i){
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
function n(t){return"Enter"===t||" "===t}i.d(e,{i:function(){return n},n:function(){return r}});const r=["0","1","2","3","4","5","6","7","8","9"]},17459:function(t,e,i){i.d(e,{a:function(){return k},b:function(){return x},c:function(){return I},d:function(){return q},g:function(){return A},i:function(){return s},n:function(){return z},p:function(){return l},s:function(){return h},u:function(){return E}});var n=i(91188),r=i(52080),o=i(76992);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
class a{constructor(t){if(t instanceof a)return t;const[e,i]=String(t).split(".").concat("");this.value=BigInt(e+i.padEnd(a.DECIMALS,"0").slice(0,a.DECIMALS))+BigInt(a.ROUNDED&&i[a.DECIMALS]>="5"),this.isNegative="-"===t.charAt(0)}static _divRound(t,e){return a.fromBigInt(t/e+(a.ROUNDED?t*BigInt(2)/e%BigInt(2):BigInt(0)))}static fromBigInt(t){return Object.assign(Object.create(a.prototype),{value:t})}toString(){const t=this.value.toString().replace(new RegExp("-","g"),"").padStart(a.DECIMALS+1,"0"),e=t.slice(0,-a.DECIMALS),i=t.slice(-a.DECIMALS).replace(/\.?0+$/,""),n=e.concat(i.length?"."+i:"");return`${this.isNegative?"-":""}${n}`}formatToParts(t){const e=this.value.toString().replace(new RegExp("-","g"),"").padStart(a.DECIMALS+1,"0"),i=e.slice(0,-a.DECIMALS),n=e.slice(-a.DECIMALS).replace(/\.?0+$/,""),r=t.formatToParts(BigInt(i));return this.isNegative&&r.unshift({type:"minusSign",value:z.minusSign}),n.length&&(r.push({type:"decimal",value:z.decimal}),n.split("").forEach((t=>r.push({type:"fraction",value:t})))),r}format(t){const e=this.value.toString().replace(new RegExp("-","g"),"").padStart(a.DECIMALS+1,"0"),i=e.slice(0,-a.DECIMALS),n=e.slice(-a.DECIMALS).replace(/\.?0+$/,""),r=`${this.isNegative?z.minusSign:""}${t.format(BigInt(i))}`,o=n.length?`${z.decimal}${t.format(BigInt(n))}`:"";return`${r}${o}`}add(t){return a.fromBigInt(this.value+new a(t).value)}subtract(t){return a.fromBigInt(this.value-new a(t).value)}multiply(t){return a._divRound(this.value*new a(t).value,a.SHIFT)}divide(t){return a._divRound(this.value*a.SHIFT,new a(t).value)}}function s(t){return!(!t||isNaN(Number(t)))}function l(t){return t&&f(t)?g(t,(t=>{let e=!1;const i=t.split("").filter(((t,i)=>t.match(/\./g)&&!e?(e=!0,!0):!(!t.match(/\-/g)||0!==i)||n.n.includes(t))).reduce(((t,e)=>t+e));return s(i)?new a(i).toString():""})):""}a.DECIMALS=100,a.ROUNDED=!0,a.SHIFT=BigInt("1"+"0".repeat(a.DECIMALS));const c=/^([-0])0+(?=\d)/,u=/(?!^\.)\.$/,d=/(?!^-)-/g,m=/^-\b0\b\.?0*$/,h=t=>g(t,(t=>{const e=t.replace(d,"").replace(u,"").replace(c,"$1");return s(e)?m.test(e)?e:new a(e).toString():t}));function g(t,e){if(!t)return t;const i=t.toLowerCase().indexOf("e")+1;return i?t.replace(/[eE]*$/g,"").substring(0,i).concat(t.slice(i).replace(/[eE]/g,"")).split(/[eE]/).map(((t,i)=>e(1===i?t.replace(/\./g,""):t))).join("e").replace(/^e/,"1e"):e(t)}function f(t){return n.n.some((e=>t.includes(e)))}const p="en",v=["ar","bg","bs","ca","cs","da","de","de-CH","el",p,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","nb","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],b=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],y=t=>b.includes(t),w=(new Intl.NumberFormat).resolvedOptions().numberingSystem,k="arab"!==w&&y(w)?w:"latn",x=t=>y(t)?t:k;function A(t){return v.indexOf(t)>-1?t:t?(t=t.toLowerCase(),"nb"===t?"no":(t.includes("-")&&(t=t.replace(/(\w+)-(\w+)/,((t,e,i)=>`${e}-${i.toUpperCase()}`)),v.includes(t)||(t=t.split("-")[0])),v.includes(t)?t:p)):p}const S=new Set;function I(t){E(t),0===S.size&&D.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),S.add(t)}function E(t){t.effectiveLocale=_(t)}function q(t){S.delete(t),0===S.size&&D.disconnect()}const D=(0,r.c)("mutation",(t=>{t.forEach((t=>{const e=t.target;S.forEach((t=>{const i=!(!t.locale||t.el.lang),n=!(0,o.b)(e,t.el);if(i||n)return;const r=(0,o.c)(t.el,"[lang]");if(!r)return void(t.effectiveLocale=p);const a=r.lang;t.effectiveLocale=r.hasAttribute("lang")&&""===a?p:a}))}))}));function _(t){var e;return t.el.lang||t.locale||(null===(e=(0,o.c)(t.el,"[lang]"))||void 0===e?void 0:e.lang)||document.documentElement.lang||p}class C{constructor(){this.delocalize=t=>this._numberFormatOptions?g(t,(t=>t.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex))):t,this.localize=t=>this._numberFormatOptions?g(t,(t=>s(t.trim())?new a(t.trim()).format(this._numberFormatter).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):t)):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=A(null===t||void 0===t?void 0:t.locale),t.numberingSystem=x(null===t||void 0===t?void 0:t.numberingSystem),!this._numberFormatOptions&&t.locale===p&&t.numberingSystem===k&&2===Object.keys(t).length||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const e=new Map(this._digits.map(((t,e)=>[t,e]))),i=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-12345678.9);this._actualGroup=i.find((t=>"group"===t.type)).value,this._group=0===this._actualGroup.trim().length?" ":this._actualGroup,this._decimal=i.find((t=>"decimal"===t.type)).value,this._minusSign=i.find((t=>"minusSign"===t.type)).value,this._getDigitIndex=t=>e.get(t)}}const z=new C},52080:function(t,e,i){
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
function n(t,e,i){const n=r(t);return new n(e,i)}function r(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return function(){return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}()}i.d(e,{c:function(){return n}})},39708:function(t,e,i){i.d(e,{c:function(){return a},d:function(){return s}});
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
const n=new WeakMap;function r(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function o(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function a(t){if(s(t),t.transitionEl){const e=r.bind(t),i=o.bind(t);n.set(t,[t.transitionEl,e,i]),t.transitionEl.addEventListener("transitionstart",e),t.transitionEl.addEventListener("transitionend",i)}}function s(t){if(!n.has(t))return;const[e,i,r]=n.get(t);e.removeEventListener("transitionstart",i),e.removeEventListener("transitionend",r),n.delete(t)}}}]);
//# sourceMappingURL=9739.2959694b.js.map