/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as t,c as i,h as e,F as a,g as n}from"./p-452677fb.js";import{S as l,C as s,I as c,T as o,H as r}from"./p-ee0626c8.js";import{a as d,t as h}from"./p-0d071f85.js";import{H as m}from"./p-e73d3b3e.js";import{S as p}from"./p-4f5d5947.js";import{u}from"./p-2ccf0c96.js";import{c as f}from"./p-420e1a42.js";import"./p-237be014.js";import"./p-a0074e38.js";const b=class{constructor(e){t(this,e),this.calcitePanelClose=i(this,"calcitePanelClose",6),this.calcitePanelDismiss=i(this,"calcitePanelDismiss",6),this.calcitePanelDismissedChange=i(this,"calcitePanelDismissedChange",6),this.calcitePanelScroll=i(this,"calcitePanelScroll",6),this.calcitePanelBackClick=i(this,"calcitePanelBackClick",6),this.dismissed=!1,this.closed=!1,this.disabled=!1,this.dismissible=!1,this.closable=!1,this.showBackButton=!1,this.loading=!1,this.menuOpen=!1,this.resizeObserver=f("resize",(()=>this.resizeHandler())),this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.resizeHandler=()=>{const{panelScrollEl:e}=this;e&&"number"==typeof e.scrollHeight&&"number"==typeof e.offsetHeight&&(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.setCloseRef=e=>{this.closeButtonEl=e},this.setBackRef=e=>{this.backButtonEl=e},this.panelKeyDownHandler=e=>{this.closable&&"Escape"===e.key&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelDismiss.emit(),this.calcitePanelClose.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.backButtonClick=()=>{this.calcitePanelBackClick.emit()},this.handleHeaderActionsStartSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasStartActions=!!t.length},this.handleHeaderActionsEndSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasEndActions=!!t.length},this.handleHeaderMenuActionsSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasMenuItems=!!t.length},this.handleHeaderContentSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasHeaderContent=!!t.length},this.handleFooterSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFooterContent=!!t.length},this.handleFooterActionsSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFooterActions=!!t.length},this.handleFabSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFab=!!t.length},this.setPanelScrollEl=e=>{var t,i;this.panelScrollEl=e,null===(t=this.resizeObserver)||void 0===t||t.disconnect(),e&&(null===(i=this.resizeObserver)||void 0===i||i.observe(e),this.resizeHandler())}}dismissedHandler(e){this.closed=e,this.calcitePanelDismissedChange.emit()}closedHandler(e){this.dismissed=e}dismissibleHandler(e){this.closable=e}closableHandler(e){this.dismissible=e}componentDidRender(){u(this)}connectedCallback(){const e=this.dismissed||this.closed,t=this.dismissible||this.closable;e&&(this.dismissedHandler(e),this.closedHandler(e)),t&&(this.dismissibleHandler(t),this.closableHandler(t))}disconnectedCallback(){var e;null===(e=this.resizeObserver)||void 0===e||e.disconnect()}async setFocus(e){const{backButtonEl:t,closeButtonEl:i,containerEl:a}=this;"back-button"!==e?"dismiss-button"!==e?t?t.setFocus():i?i.setFocus():null==a||a.focus():null==i||i.setFocus():null==t||t.setFocus()}async scrollContentTo(e){var t;null===(t=this.panelScrollEl)||void 0===t||t.scrollTo(e)}renderBackButton(){const{el:t}=this,i="rtl"===d(t),{showBackButton:a,intlBack:n,backButtonClick:r}=this,h=n||o.back;return a?e("calcite-action",{"aria-label":h,class:s.backButton,icon:i?c.backRight:c.backLeft,key:"back-button",onClick:r,ref:this.setBackRef,scale:"s",slot:l.headerActionsStart,text:h}):null}renderHeaderContent(){const{heading:t,headingLevel:i,summary:a,description:n,hasHeaderContent:l}=this,o=t?e(m,{class:s.heading,level:i||r},t):null,c=n||a?e("span",{class:s.description},n||a):null;return l||!o&&!c?null:e("div",{class:s.headerContent,key:"header-content"},o,c)}renderHeaderSlottedContent(){return e("div",{class:s.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},e("slot",{name:l.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:t}=this;return e("div",{class:{[s.headerActionsStart]:!0,[s.headerActions]:!0},hidden:!t,key:"header-actions-start"},e("slot",{name:l.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{close:t,hasEndActions:i,intlClose:a,closable:n}=this,r=a||o.close,d=n?e("calcite-action",{"aria-label":r,icon:c.close,onClick:t,ref:this.setCloseRef,text:r}):null,h=e("slot",{name:l.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange});return e("div",{class:{[s.headerActionsEnd]:!0,[s.headerActions]:!0},hidden:!(i||d),key:"header-actions-end"},h,d)}renderMenu(){const{hasMenuItems:t,intlOptions:i,menuOpen:a}=this;return e("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!t,key:"menu",label:i||o.options,open:a,placement:"bottom-end"},e("calcite-action",{icon:c.menu,slot:p.trigger,text:i||o.options}),e("slot",{name:l.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{showBackButton:t,hasHeaderContent:i,hasStartActions:a,hasEndActions:n,closable:l,hasMenuItems:o}=this,c=this.renderHeaderContent();return e("header",{class:s.header,hidden:!(t||i||c||a||n||l||o)},this.renderBackButton(),this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),c,this.renderHeaderActionsEnd(),this.renderMenu())}renderFooterNode(){const{hasFooterContent:t,hasFooterActions:i}=this;return e("footer",{class:s.footer,hidden:!(t||i)},e("slot",{key:"footer-slot",name:l.footer,onSlotchange:this.handleFooterSlotChange}),e("slot",{key:"footer-actions-slot",name:l.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){const{hasFab:t}=this,i=e("slot",{key:"default-slot"}),a=t?e("section",{class:s.contentContainer},i):i;return e("div",{class:{[s.contentWrapper]:!0,[s.contentContainer]:!t,[s.contentHeight]:t},onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},a,this.renderFab())}renderFab(){return e("div",{class:s.fabContainer,hidden:!this.hasFab},e("slot",{name:l.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:t,panelKeyDownHandler:i,closed:n,closable:l}=this,o=e("article",{"aria-busy":h(t),class:s.container,hidden:n,onKeyDown:i,ref:this.setContainerRef,tabIndex:l?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return e(a,null,t?e("calcite-scrim",{loading:t}):null,o)}get el(){return n(this)}static get watchers(){return{dismissed:["dismissedHandler"],closed:["closedHandler"],dismissible:["dismissibleHandler"],closable:["closableHandler"]}}};b.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3);--calcite-panel-max-height:unset;--calcite-panel-width:100%;--calcite-panel-min-width:unset;--calcite-panel-max-width:unset}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;max-block-size:var(--calcite-panel-max-height);inline-size:var(--calcite-panel-width);max-inline-size:var(--calcite-panel-max-width);min-inline-size:var(--calcite-panel-min-width);transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}:host([height-scale=s]){--calcite-panel-max-height:40vh}:host([height-scale=m]){--calcite-panel-max-height:60vh}:host([height-scale=l]){--calcite-panel-max-height:80vh}:host([width-scale=s]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 12vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 300px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 150px)}:host([width-scale=m]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 20vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 420px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 240px)}:host([width-scale=l]){--calcite-panel-width:calc(var(--calcite-panel-width-multiplier) * 45vw);--calcite-panel-max-width:calc(var(--calcite-panel-width-multiplier) * 680px);--calcite-panel-min-width:calc(var(--calcite-panel-width-multiplier) * 340px)}.container[hidden]{display:none}.header{border-block-end:1px solid;position:sticky;inset-block-start:0px;z-index:400;inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;position:sticky;inset-block-end:0px;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;min-block-size:3rem;padding:0.5rem}.fab-container{position:sticky;inset-block-end:0px;z-index:300;margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}";export{b as calcite_panel};