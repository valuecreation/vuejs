/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as t,h as i,H as e,g as a}from"./p-452677fb.js";import{g as n}from"./p-a0074e38.js";import{b as o,c as r,u as s,a as c,r as l,F as m}from"./p-81faec11.js";import{i as d,q as h,t as p}from"./p-0d071f85.js";import"./p-98d174f0.js";import"./p-237be014.js";const f=new class{constructor(){this.registeredElements=new WeakMap,this.hoverTimeouts=new WeakMap,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.keyDownHandler=e=>{if("Escape"===e.key){const{activeTooltipEl:e}=this;e&&(this.clearHoverTimeout(e),this.toggleTooltip(e,!1))}},this.mouseEnterShow=e=>{this.hoverEvent(e,!0)},this.mouseLeaveHide=e=>{this.hoverEvent(e,!1)},this.clickHandler=e=>{if(!d(e))return;const t=this.queryTooltip(e.composedPath());this.clickedTooltip=t,(null==t?void 0:t.closeOnClick)&&(this.toggleTooltip(t,!1),this.clearHoverTimeout(t))},this.focusShow=e=>{this.focusEvent(e,!0)},this.blurHide=e=>{this.focusEvent(e,!1)},this.hoverToggle=(e,t)=>{const{hoverTimeouts:i}=this;i.delete(e),t&&this.closeExistingTooltip(),this.toggleTooltip(e,t)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addListeners(){document.addEventListener("keydown",this.keyDownHandler),document.addEventListener("pointerover",this.mouseEnterShow,{capture:!0}),document.addEventListener("pointerout",this.mouseLeaveHide,{capture:!0}),document.addEventListener("pointerdown",this.clickHandler,{capture:!0}),document.addEventListener("focusin",this.focusShow,{capture:!0}),document.addEventListener("focusout",this.blurHide,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler),document.removeEventListener("pointerover",this.mouseEnterShow,{capture:!0}),document.removeEventListener("pointerout",this.mouseLeaveHide,{capture:!0}),document.removeEventListener("pointerdown",this.clickHandler,{capture:!0}),document.removeEventListener("focusin",this.focusShow,{capture:!0}),document.removeEventListener("focusout",this.blurHide,{capture:!0})}clearHoverTimeout(e){const{hoverTimeouts:t}=this;t.has(e)&&(window.clearTimeout(t.get(e)),t.delete(e))}closeExistingTooltip(){const{activeTooltipEl:e}=this;e&&this.toggleTooltip(e,!1)}focusTooltip(e,t){this.closeExistingTooltip(),t&&this.clearHoverTimeout(e),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,t&&(this.activeTooltipEl=e)}hoverTooltip(e,t){this.clearHoverTimeout(e);const{hoverTimeouts:i}=this,a=window.setTimeout((()=>this.hoverToggle(e,t)),500);i.set(e,a)}activeTooltipHover(e){const{activeTooltipEl:t,hoverTimeouts:i}=this,{type:a}=e;t&&("pointerover"===a&&e.composedPath().includes(t)?this.clearHoverTimeout(t):"pointerout"!==a||i.has(t)||this.hoverTooltip(t,!1))}hoverEvent(e,t){const i=this.queryTooltip(e.composedPath());this.activeTooltipHover(e),i&&this.hoverTooltip(i,t)}focusEvent(e,t){const i=this.queryTooltip(e.composedPath());i&&i!==this.clickedTooltip?this.focusTooltip(i,t):this.clickedTooltip=null}},u=class{constructor(e){t(this,e),this.closeOnClick=!1,this.offsetDistance=o,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.guid=`calcite-tooltip-${n()}`,this.hasLoaded=!1,this.setUpReferenceElement=(e=!0)=>{this.removeReferences(),this.effectiveReferenceElement=this.getReferenceElement(),r(this,this.effectiveReferenceElement,this.el);const{el:t,referenceElement:i,effectiveReferenceElement:a}=this;e&&i&&!a&&console.warn(`${t.tagName}: reference-element id "${i}" was not found.`,{el:t}),this.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute("aria-describedby",t),f.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&e.removeAttribute("aria-describedby"),f.unregisterElement(e))}}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(e){e?this.reposition(!0):s(this.el)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(this.hasLoaded)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),c(this,this.effectiveReferenceElement,this.el)}async reposition(e=!1){const{el:t,effectiveReferenceElement:i,placement:a,overlayPositioning:o,offsetDistance:n,offsetSkidding:r,arrowEl:s}=this;return l(this,{floatingEl:t,referenceEl:i,overlayPositioning:o,placement:a,offsetDistance:n,offsetSkidding:r,includeArrow:!0,arrowEl:s,type:"tooltip"},e)}getReferenceElement(){const{referenceElement:e,el:t}=this;return("string"==typeof e?h(t,{id:e}):e)||null}render(){const{effectiveReferenceElement:t,label:a,open:o}=this,n=t&&o,r=!n;return i(e,{"aria-hidden":p(r),"aria-label":a,"aria-live":"polite","calcite-hydrated-hidden":r,id:this.getId(),role:"tooltip"},i("div",{class:{[m.animation]:!0,[m.animationActive]:n}},i("div",{class:"arrow",ref:e=>this.arrowEl=e}),i("div",{class:"container"},i("slot",null))))}get el(){return a(this)}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}};u.style='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:block;position:absolute;z-index:999}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:1;border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.arrow,.arrow::before{position:absolute;inline-size:8px;block-size:8px;z-index:-1}.arrow::before{content:"";--tw-shadow:0 4px 8px -1px rgba(0, 0, 0, 0.08), 0 2px 4px -1px rgba(0, 0, 0, 0.04);--tw-shadow-colored:0 4px 8px -1px var(--tw-shadow-color), 0 2px 4px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transform:rotate(45deg);background:var(--calcite-ui-foreground-1)}:host([data-placement^=top]) .arrow{inset-block-end:-4px}:host([data-placement^=bottom]) .arrow{inset-block-start:-4px}:host([data-placement^=right]) .arrow,:host([data-placement^=left]) .arrow{direction:ltr;text-align:start}:host([data-placement^=left]) .arrow{inset-inline-end:-4px}:host([data-placement^=right]) .arrow{inset-inline-start:-4px}.container{position:relative;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-ui-foreground-1);padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}';const v=class{constructor(e){t(this,e),this.selector="[data-calcite-tooltip-reference]"}render(){return i("slot",null)}};v.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{position:relative;display:block}";export{u as calcite_tooltip,v as calcite_tooltip_manager};