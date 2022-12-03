/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as i,c as t,h as a,H as e,g as n}from"./p-452677fb.js";import{g as o,t as c,a as r}from"./p-0d071f85.js";import{H as l}from"./p-e73d3b3e.js";import{c as s,d}from"./p-b5c3a997.js";import{u as m}from"./p-2ccf0c96.js";import{g}from"./p-a0074e38.js";import{i as u}from"./p-610a4162.js";import"./p-237be014.js";import"./p-420e1a42.js";const p={opened:"chevron-up",closed:"chevron-down",valid:"check-circle",invalid:"exclamation-mark-triangle",refresh:"refresh"},h=class{constructor(e){i(this,e),this.calciteBlockToggle=t(this,"calciteBlockToggle",6),this.collapsible=!1,this.disabled=!1,this.dragHandle=!1,this.intlCollapse="Collapse",this.intlExpand="Expand",this.intlLoading="Loading",this.intlOptions="Options",this.loading=!1,this.open=!1,this.disablePadding=!1,this.guid=g(),this.onHeaderClick=()=>{this.open=!this.open,this.calciteBlockToggle.emit()}}componentDidRender(){m(this)}connectedCallback(){s(this)}disconnectedCallback(){d(this)}renderScrim(){const{loading:i}=this,e=a("slot",null);return[i?a("calcite-scrim",{loading:i}):null,e]}renderIcon(){const{el:i,status:e}=this,t=this.loading&&!this.open,n=t?p.refresh:p[e],c=o(i,"icon")||n,r=n?a("calcite-icon",{class:{"status-icon":!0,valid:"valid"==e,invalid:"invalid"==e,loading:t},icon:n,scale:"m"}):a("slot",{key:"icon-slot",name:"icon"});return c?a("div",{class:"icon"},r):null}renderTitle(){const{heading:i,headingLevel:e,summary:t,description:n}=this;return i||t||n?a("div",{class:"title"},a(l,{class:"heading",level:e||4},i),t||n?a("div",{class:"description"},t||n):null):null}render(){const{collapsible:i,el:t,intlCollapse:n,intlExpand:r,loading:l,open:s,intlLoading:d}=this,m=s?n||"Collapse":r||"Expand",g=a("header",{class:"header"},this.renderIcon(),this.renderTitle()),u=!!o(t,"control"),h=!!o(t,"header-menu-actions"),f=s?p.opened:p.closed,{guid:b}=this,v=`${b}-region`,x=`${b}-button`,y=a("div",{class:"header-container"},this.dragHandle?a("calcite-handle",null):null,i?a("button",{"aria-controls":v,"aria-expanded":i?c(s):null,"aria-label":m,class:"toggle",id:x,onClick:this.onHeaderClick,title:m},g,u||h?null:a("calcite-icon",{"aria-hidden":"true",class:"toggle-icon",icon:f,scale:"s"})):g,l?a("calcite-loader",{inline:!0,"is-active":!0,label:d}):u?a("div",{class:"control-container"},a("slot",{name:"control"})):null,h?a("calcite-action-menu",{label:this.intlOptions||"Options"},a("slot",{name:"header-menu-actions"})):null);return a(e,null,a("article",{"aria-busy":c(l),class:{container:!0}},y,a("section",{"aria-expanded":c(s),"aria-labelledby":x,class:{content:!0,"content--spaced":!this.disablePadding},hidden:!s,id:v},this.renderScrim())))}get el(){return n(this)}};h.style='@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{--calcite-icon-size:1rem;--calcite-spacing-eighth:0.125rem;--calcite-spacing-quarter:0.25rem;--calcite-spacing-half:0.5rem;--calcite-spacing-three-quarters:0.75rem;--calcite-spacing:1rem;--calcite-spacing-plus-quarter:1.25rem;--calcite-spacing-plus-half:1.5rem;--calcite-spacing-double:2rem;--calcite-menu-min-width:10rem;--calcite-header-min-height:3rem;--calcite-footer-min-height:3rem}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:flex;flex-shrink:0;flex-grow:0;flex-direction:column;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);padding:0px;transition-property:margin;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-timing-function:cubic-bezier(0.215, 0.440, 0.420, 0.880);flex-basis:auto}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.header{justify-content:flex-start;padding:0px}.header,.toggle{grid-area:header}.header-container{display:grid;align-items:stretch;grid-template:auto/auto 1fr auto auto;grid-template-areas:"handle header control menu";grid-column:header-start/menu-end;grid-row:1/2}.toggle{margin:0px;display:flex;cursor:pointer;flex-wrap:nowrap;align-items:center;justify-content:space-between;border-style:none;padding:0px;font-family:inherit;outline-color:transparent;text-align:initial;background-color:transparent}.toggle:hover{background-color:var(--calcite-ui-foreground-2)}.toggle:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:-2px}calcite-loader[inline]{grid-area:control;align-self:center}calcite-handle{grid-area:handle}.title{margin:0px;padding:0.75rem}.header .title .heading{padding:0px;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);line-height:1.25;color:var(--calcite-ui-text-2);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);word-wrap:break-word;word-break:break-word}.description{margin-block-start:0.125rem;padding:0px;font-size:var(--calcite-font-size--2);color:var(--calcite-ui-text-3);word-wrap:break-word;word-break:break-word}.icon{margin-inline-start:0.75rem;margin-inline-end:0px;margin-block:0.75rem}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}.status-icon.loading{animation:spin var(--calcite-internal-animation-timing-medium) linear infinite}@keyframes spin{0%{transform:rotate(0deg)}50%{transform:rotate(180deg)}100%{transform:rotate(360deg)}}.toggle-icon{margin-block:0.75rem;align-self:center;justify-self:end;color:var(--calcite-ui-text-3);transition-property:color;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);margin-inline-end:1rem;margin-inline-start:auto}.toggle:hover .toggle-icon{color:var(--calcite-ui-text-1)}.container{position:relative;display:flex;block-size:100%;flex-direction:column}.content{position:relative;flex:1 1 0%}@keyframes in{0%{opacity:0}100%{opacity:1}}.content{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out}.content--spaced{padding-block:var(--calcite-block-padding, 0.5rem);padding-inline:var(--calcite-block-padding, 0.625rem)}.control-container{margin:0px;display:flex;grid-area:control}calcite-action-menu{grid-area:menu}:host([open]){margin-block:0.5rem}:host([open]) .header .title .heading{color:var(--calcite-ui-text-1)}';const f={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},b=class{constructor(e){i(this,e),this.calciteBlockSectionToggle=t(this,"calciteBlockSectionToggle",6),this.open=!1,this.toggleDisplay="button",this.guid=g(),this.handleHeaderKeyDown=i=>{u(i.key)&&(this.toggleSection(),i.preventDefault(),i.stopPropagation())},this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()}}renderStatusIcon(){var i;const{status:e}=this,t=null!==(i=f[e])&&void 0!==i&&i;return t?a("calcite-icon",{class:{"status-icon":!0,valid:"valid"==e,invalid:"invalid"==e},icon:t,scale:"s"}):null}render(){const{el:i,intlCollapse:t,intlExpand:n,open:o,text:l,toggleDisplay:s}=this,d=r(i),m=o?f.menuOpen:"rtl"===d?f.menuClosedLeft:f.menuClosedRight,g=o?t||"Collapse":n||"Expand",{guid:p}=this,u=`${p}-region`,h=`${p}-button`,b="switch"===s?a("div",{"aria-controls":u,"aria-label":g,class:{toggle:!0,"toggle--switch":!0},id:h,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,tabIndex:0,title:g},a("div",{class:"toggle--switch__content"},a("span",{class:"toggle--switch__text"},l)),a("calcite-switch",{checked:o,label:g,scale:"s",tabIndex:-1}),this.renderStatusIcon()):a("button",{"aria-controls":u,"aria-label":g,class:{"section-header":!0,toggle:!0},id:h,name:g,onClick:this.toggleSection},a("calcite-icon",{icon:m,scale:"s"}),a("span",{class:"section-header__text"},l),this.renderStatusIcon());return a(e,null,b,a("section",{"aria-expanded":c(o),"aria-labelledby":h,class:"content",hidden:!o,id:u},a("slot",null)))}get el(){return n(this)}};b.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}";export{h as calcite_block,b as calcite_block_section};