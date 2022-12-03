"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[3478],{23478:function(t,e,i){i.r(e),i.d(e,{calcite_tooltip:function(){return f},calcite_tooltip_manager:function(){return p}});var n=i(95963),o=i(91278),r=i(89707),a=i(76992);i(9948),i(91642);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
const c={container:"container",arrow:"arrow"},s=500,l="aria-describedby";class u{constructor(){this.registeredElements=new WeakMap,this.hoverTimeouts=new WeakMap,this.registeredElementCount=0,this.queryTooltip=t=>{const{registeredElements:e}=this,i=t.find((t=>e.has(t)));return e.get(i)},this.keyDownHandler=t=>{if("Escape"===t.key){const{activeTooltipEl:t}=this;t&&(this.clearHoverTimeout(t),this.toggleTooltip(t,!1))}},this.mouseEnterShow=t=>{this.hoverEvent(t,!0)},this.mouseLeaveHide=t=>{this.hoverEvent(t,!1)},this.clickHandler=t=>{if(!(0,a.i)(t))return;const e=this.queryTooltip(t.composedPath());this.clickedTooltip=e,(null===e||void 0===e?void 0:e.closeOnClick)&&(this.toggleTooltip(e,!1),this.clearHoverTimeout(e))},this.focusShow=t=>{this.focusEvent(t,!0)},this.blurHide=t=>{this.focusEvent(t,!1)},this.hoverToggle=(t,e)=>{const{hoverTimeouts:i}=this;i.delete(t),e&&this.closeExistingTooltip(),this.toggleTooltip(t,e)}}registerElement(t,e){this.registeredElementCount++,this.registeredElements.set(t,e),1===this.registeredElementCount&&this.addListeners()}unregisterElement(t){this.registeredElements.delete(t)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler),document.addEventListener("pointerover",this.mouseEnterShow,{capture:!0}),document.addEventListener("pointerout",this.mouseLeaveHide,{capture:!0}),document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("focusin",this.focusShow,{capture:!0}),document.addEventListener("focusout",this.blurHide,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler),document.removeEventListener("pointerover",this.mouseEnterShow,{capture:!0}),document.removeEventListener("pointerout",this.mouseLeaveHide,{capture:!0}),document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("focusin",this.focusShow,{capture:!0}),document.removeEventListener("focusout",this.blurHide,{capture:!0})}clearHoverTimeout(t){const{hoverTimeouts:e}=this;e.has(t)&&(window.clearTimeout(e.get(t)),e.delete(t))}closeExistingTooltip(){const{activeTooltipEl:t}=this;t&&this.toggleTooltip(t,!1)}focusTooltip(t,e){this.closeExistingTooltip(),e&&this.clearHoverTimeout(t),this.toggleTooltip(t,e)}toggleTooltip(t,e){t.open=e,e&&(this.activeTooltipEl=t)}hoverTooltip(t,e){this.clearHoverTimeout(t);const{hoverTimeouts:i}=this,n=window.setTimeout((()=>this.hoverToggle(t,e)),s);i.set(t,n)}activeTooltipHover(t){const{activeTooltipEl:e,hoverTimeouts:i}=this,{type:n}=t;e&&("pointerover"===n&&t.composedPath().includes(e)?this.clearHoverTimeout(e):"pointerout"!==n||i.has(e)||this.hoverTooltip(e,!1))}hoverEvent(t,e){const i=this.queryTooltip(t.composedPath());this.activeTooltipHover(t),i&&this.hoverTooltip(i,e)}focusEvent(t,e){const i=this.queryTooltip(t.composedPath());i&&i!==this.clickedTooltip?this.focusTooltip(i,e):this.clickedTooltip=null}}const d='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=right]) .arrow,:host([data-placement^=left]) .arrow{direction:ltr;text-align:start}:host([data-placement^=left]) .arrow{inset-inline-end:-4px}:host([data-placement^=right]) .arrow{inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}',m=new u,f=class{constructor(t){(0,n.r)(this,t),this.closeOnClick=!1,this.offsetDistance=r.b,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.guid=`calcite-tooltip-${(0,o.g)()}`,this.hasLoaded=!1,this.setUpReferenceElement=(t=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),(0,r.c)(this,this.effectiveReferenceElement,this.el);const{el:e,referenceElement:i,effectiveReferenceElement:n}=this;t&&i&&!n&&console.warn(`${e.tagName}: reference-element id "${i}" was not found.`,{el:e}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:t}=this;if(!t)return;const e=this.getId();"setAttribute"in t&&t.setAttribute(l,e),m.registerElement(t,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:t}=this;t&&("removeAttribute"in t&&t.removeAttribute(l),m.unregisterElement(t))}}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(t){t?this.reposition(!0):(0,r.u)(this.el)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),(0,r.a)(this,this.effectiveReferenceElement,this.el)}async reposition(t=!1){const{el:e,effectiveReferenceElement:i,placement:n,overlayPositioning:o,offsetDistance:a,offsetSkidding:c,arrowEl:s}=this;return(0,r.r)(this,{floatingEl:e,referenceEl:i,overlayPositioning:o,placement:n,offsetDistance:a,offsetSkidding:c,includeArrow:!0,arrowEl:s,type:"tooltip"},t)}getReferenceElement(){const{referenceElement:t,el:e}=this;return("string"===typeof t?(0,a.q)(e,{id:t}):t)||null}render(){const{effectiveReferenceElement:t,label:e,open:i}=this,o=t&&i,s=!o;return(0,n.h)(n.H,{"aria-hidden":(0,a.t)(s),"aria-label":e,"aria-live":"polite","calcite-hydrated-hidden":s,id:this.getId(),role:"tooltip"},(0,n.h)("div",{class:{[r.F.animation]:!0,[r.F.animationActive]:o}},(0,n.h)("div",{class:c.arrow,ref:t=>this.arrowEl=t}),(0,n.h)("div",{class:c.container},(0,n.h)("slot",null))))}get el(){return(0,n.g)(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};f.style=d;const h="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:block}",p=class{constructor(t){(0,n.r)(this,t),this.selector="[data-calcite-tooltip-reference]"}render(){return(0,n.h)("slot",null)}};p.style=h},76992:function(t,e,i){i.d(e,{a:function(){return s},b:function(){return v},c:function(){return f},d:function(){return c},e:function(){return l},f:function(){return y},g:function(){return E},h:function(){return r},i:function(){return R},j:function(){return g},k:function(){return L},l:function(){return u},m:function(){return x},n:function(){return a},q:function(){return m},s:function(){return H},t:function(){return D}});var n=i(91642),o=i(91278);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
function r(t){return t?t.id=t.id||`${t.tagName.toLowerCase()}-${(0,o.g)()}`:""}function a(t){return Array.isArray(t)?t:Array.from(t)}function c(t){const e=f(t,`.${n.C.darkTheme}, .${n.C.lightTheme}`);return(null===e||void 0===e?void 0:e.classList.contains("calcite-theme-dark"))?"dark":"light"}function s(t){const e="dir",i=`[${e}]`,n=f(t,i);return n?n.getAttribute(e):"ltr"}function l(t,e,i){const n=`[${e}]`,o=t.closest(n);return o?o.getAttribute(e):i}function u(t){return t.getRootNode()}function d(t){return t.host||null}function m(t,{selector:e,id:i}){function n(t){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const o=u(t),r=i?"getElementById"in o?o.getElementById(i):null:e?o.querySelector(e):null,a=d(o);return r||(a?n(a):null)}return n(t)}function f(t,e){function i(t){return t?t.closest(e)||i(d(u(t))):null}return i(t)}function h(t,e){return p(t,e)}function p(t,e){if(!t)return;const i=e(t);if(void 0!==i)return i;const{parentNode:n}=t;return p(n instanceof ShadowRoot?n.host:n,e)}function v(t,e){return!!h(e,(e=>e===t||void 0))}function g(t){return"function"===typeof(null===t||void 0===t?void 0:t.setFocus)}async function y(t){if(t)return g(t)?t.setFocus():t.focus()}const w=":not([slot])";function E(t,e,i){e&&!Array.isArray(e)&&"string"!==typeof e&&(i=e,e=null);const n=e?Array.isArray(e)?e.map((t=>`[slot="${t}"]`)).join(","):`[slot="${e}"]`:w;return(null===i||void 0===i?void 0:i.all)?k(t,n,i):T(t,n,i)}function b(t,e){return t?Array.from(t.children||[]).filter((t=>null===t||void 0===t?void 0:t.matches(e))):[]}function k(t,e,i){let n=e===w?b(t,w):Array.from(t.querySelectorAll(e));n=i&&!1===i.direct?n:n.filter((e=>e.parentElement===t)),n=(null===i||void 0===i?void 0:i.matches)?n.filter((t=>null===t||void 0===t?void 0:t.matches(i.matches))):n;const o=null===i||void 0===i?void 0:i.selector;return o?n.map((t=>Array.from(t.querySelectorAll(o)))).reduce(((t,e)=>[...t,...e]),[]).filter((t=>!!t)):n}function T(t,e,i){let n=e===w?b(t,w)[0]||null:t.querySelector(e);n=i&&!1===i.direct||(null===n||void 0===n?void 0:n.parentElement)===t?n:null,n=(null===i||void 0===i?void 0:i.matches)?(null===n||void 0===n?void 0:n.matches(i.matches))?n:null:n;const o=null===i||void 0===i?void 0:i.selector;return o?null===n||void 0===n?void 0:n.querySelector(o):n}function x(t,e){return Array.from(t.children).filter((t=>t.matches(e)))}function H(t,e,i){return"string"===typeof e&&""!==e?e:""===e?t[i]:void 0}function L(t,e){return!(e.left>t.right||e.right<t.left||e.top>t.bottom||e.bottom<t.top)}function D(t){return Boolean(t).toString()}function R(t){return!(!t.isPrimary||0!==t.button)}},91278:function(t,e,i){
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
function n(t){return t.map((t=>{let e="";for(let i=0;i<t;i++)e+=(65536*(1+Math.random())|0).toString(16).substring(1);return e})).join("-")}i.d(e,{g:function(){return o}});const o=()=>n([2,1,1,1,3])}}]);
//# sourceMappingURL=3478.576d0545.js.map