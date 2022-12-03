"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[238],{30238:function(t,e,a){a.r(e),a.d(e,{calcite_button:function(){return d}});var o=a(95963),n=a(76992),r=a(59685),c=a(52080),i=a(59188),l=a(70290);a(91642);
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
(function(t){function e(t,e){t instanceof HTMLElement||a(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==t.type||a(TypeError,"The specified element is not a submit button"),t.form==e||a(DOMException,"The specified element is not owned by this form element","NotFoundError")}function a(t,e,a){throw new t("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+e+".",a)}"function"!=typeof t.requestSubmit&&(t.requestSubmit=function(t){t?(e(t,this),t.click()):(t=document.createElement("input"),t.type="submit",t.hidden=!0,this.appendChild(t),t.click(),this.removeChild(t))})})(HTMLFormElement.prototype);const s={buttonLoader:"calcite-button--loader",content:"content",contentSlotted:"content--slotted",icon:"icon",iconStart:"icon--start",iconEnd:"icon--end",loadingIn:"loading-in",loadingOut:"loading-out",iconStartEmpty:"icon-start-empty",iconEndEmpty:"icon-end-empty"},u={loading:"Loading"},p="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block;inline-size:auto;vertical-align:middle}:host([round]){border-radius:50px}:host([round]) a,:host([round]) button{border-radius:50px}:host button,:host a{outline-color:transparent}:host button:focus,:host a:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}:host button,:host a{--calcite-button-content-margin:0.5rem;--calcite-button-padding-x:7px;--calcite-button-padding-y:3px;padding-block:var(--calcite-button-padding-y);padding-inline:var(--calcite-button-padding-x);position:relative;box-sizing:border-box;display:flex;block-size:100%;inline-size:100%;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-appearance:none;appearance:none;align-items:center;justify-content:center;border-radius:0px;border-style:none;text-align:center;font-family:inherit;font-weight:var(--calcite-font-weight-normal);text-decoration-line:none;transition:color var(--calcite-animation-timing) ease-in-out, background-color var(--calcite-animation-timing) ease-in-out, box-shadow var(--calcite-animation-timing) ease-in-out, outline-color var(--calcite-internal-animation-timing-fast) ease-in-out}:host button:hover,:host a:hover{text-decoration-line:none}.content{display:flex;flex-basis:auto;margin-inline:var(--calcite-button-content-margin)}.icon-start-empty .content{margin-inline-start:unset}.icon-end-empty .content{margin-inline-end:unset}:host([scale=m]) button,:host([scale=m]) a{--calcite-button-content-margin:0.75rem}:host([scale=l]) button,:host([scale=l]) a{--calcite-button-content-margin:1rem}:host([width=auto]){inline-size:auto}:host([width=half]){inline-size:50%}:host([width=full]){inline-size:100%}:host([alignment=center]:not([width=auto])) a,:host([alignment=center]:not([width=auto])) button{justify-content:center}:host([alignment=start]:not([width=auto])) a,:host([alignment=start]:not([width=auto])) button{justify-content:flex-start}:host([alignment=end]:not([width=auto])) a,:host([alignment=end]:not([width=auto])) button{justify-content:flex-end}:host([alignment*=space-between]:not([width=auto])) a,:host([alignment*=space-between]:not([width=auto])) button{justify-content:space-between}:host([alignment=icon-start-space-between]:not([width=auto])) .icon--start{margin-inline-end:auto}:host([alignment=icon-start-space-between]:not([width=auto])) a,:host([alignment=icon-start-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=icon-end-space-between]:not([width=auto])) .icon--end{margin-inline-start:auto}:host([alignment=icon-end-space-between]:not([width=auto])) a,:host([alignment=icon-end-space-between]:not([width=auto])) button{text-align:unset}:host([alignment=center]) a:not(.content--slotted) .icon--start+.icon--end,:host([alignment=center]) button:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:var(--calcite-button-content-margin)}.icon{position:relative;margin:0px;display:inline-flex;font-weight:var(--calcite-font-weight-normal);line-height:inherit}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([loading]){pointer-events:none}:host([loading]) button,:host([loading]) a{pointer-events:none;opacity:var(--calcite-ui-opacity-disabled)}@keyframes loader-in{0%{inline-size:0;opacity:0;transform:scale(0.5)}100%{inline-size:1em;opacity:1;transform:scale(1)}}@keyframes loader-out{0%{inline-size:1em;opacity:1;transform:scale(1)}100%{inline-size:0;opacity:0;transform:scale(0.5)}}.calcite-button--loader{display:flex}.calcite-button--loader calcite-loader{margin:0px;transition:inline-size var(--calcite-internal-animation-timing-slow) ease-in-out, opacity var(--calcite-internal-animation-timing-slow) ease-in-out, transform var(--calcite-internal-animation-timing-slow) ease-in-out}.calcite-button--loader calcite-loader.loading-in{animation-name:loader-in;animation-duration:var(--calcite-internal-animation-timing-slow)}.calcite-button--loader calcite-loader.loading-out{animation-name:loader-out;animation-duration:var(--calcite-internal-animation-timing-slow)}:host([loading]) button.content--slotted .calcite-button--loader calcite-loader,:host([loading]) a.content--slotted .calcite-button--loader calcite-loader{margin-inline-end:var(--calcite-button-content-margin)}:host([loading]) button:not(.content--slotted) .icon--start,:host([loading]) button:not(.content--slotted) .icon--end,:host([loading]) a:not(.content--slotted) .icon--start,:host([loading]) a:not(.content--slotted) .icon--end{display:none}:host([appearance=solid]) button,:host([appearance=solid]) a{border-width:1px;border-style:solid;border-color:transparent}:host([color=blue]) button,:host([color=blue]) a{background-color:var(--calcite-ui-brand);color:var(--calcite-ui-text-inverse)}:host([color=blue]) button:hover,:host([color=blue]) button:focus,:host([color=blue]) a:hover,:host([color=blue]) a:focus{background-color:var(--calcite-ui-brand-hover)}:host([color=blue]) button:active,:host([color=blue]) a:active{background-color:var(--calcite-ui-brand-press)}:host([color=blue]) button calcite-loader,:host([color=blue]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([color=red]) button,:host([color=red]) a{background-color:var(--calcite-ui-danger);color:var(--calcite-ui-text-inverse)}:host([color=red]) button:hover,:host([color=red]) button:focus,:host([color=red]) a:hover,:host([color=red]) a:focus{background-color:var(--calcite-ui-danger-hover)}:host([color=red]) button:active,:host([color=red]) a:active{background-color:var(--calcite-ui-danger-press)}:host([color=red]) button calcite-loader,:host([color=red]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([color=neutral]) button,:host([color=neutral]) a{background-color:var(--calcite-ui-foreground-3);color:var(--calcite-ui-text-1)}:host([color=neutral]) button:hover,:host([color=neutral]) button:focus,:host([color=neutral]) a:hover,:host([color=neutral]) a:focus{background-color:var(--calcite-ui-foreground-2)}:host([color=neutral]) button:active,:host([color=neutral]) a:active{background-color:var(--calcite-ui-foreground-1)}:host([color=neutral]) button calcite-loader,:host([color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([color=inverse]) button,:host([color=inverse]) a{color:var(--calcite-ui-text-inverse);background-color:var(--calcite-ui-inverse)}:host([color=inverse]) button:hover,:host([color=inverse]) button:focus,:host([color=inverse]) a:hover,:host([color=inverse]) a:focus{background-color:var(--calcite-ui-inverse-hover)}:host([color=inverse]) button:active,:host([color=inverse]) a:active{background-color:var(--calcite-ui-inverse-press)}:host([color=inverse]) button calcite-loader,:host([color=inverse]) a calcite-loader{color:var(--calcite-ui-text-inverse)}:host([appearance=outline]) button,:host([appearance=outline]) a{border-width:1px;border-style:solid;background-color:var(--calcite-ui-foreground-1);box-shadow:inset 0 0 0 1px transparent}:host([appearance=outline][color=blue]) button,:host([appearance=outline][color=blue]) a{border-color:var(--calcite-ui-brand);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:hover,:host([appearance=outline][color=blue]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=outline][color=blue]) button:focus,:host([appearance=outline][color=blue]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=outline][color=blue]) button:active,:host([appearance=outline][color=blue]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=outline][color=blue]) button calcite-loader,:host([appearance=outline][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=outline][color=red]) button,:host([appearance=outline][color=red]) a{border-color:var(--calcite-ui-danger);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:hover,:host([appearance=outline][color=red]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=outline][color=red]) button:focus,:host([appearance=outline][color=red]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=outline][color=red]) button:active,:host([appearance=outline][color=red]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=outline][color=red]) button calcite-loader,:host([appearance=outline][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=outline][color=neutral]) button,:host([appearance=outline][color=neutral]) a{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:hover,:host([appearance=outline][color=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:focus,:host([appearance=outline][color=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button:active,:host([appearance=outline][color=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=outline][color=neutral]) button calcite-loader,:host([appearance=outline][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][color=inverse]) button,:host([appearance=outline][color=inverse]) a{background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=outline][color=inverse]) button:hover,:host([appearance=outline][color=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=outline][color=inverse]) button:focus,:host([appearance=outline][color=inverse]) a:focus{border-color:var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=outline][color=inverse]) button:active,:host([appearance=outline][color=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=outline][color=inverse]) button calcite-loader,:host([appearance=outline][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear]) button,:host([appearance=clear]) a,:host([appearance=minimal]) button,:host([appearance=minimal]) a{border-width:1px;border-style:solid;background-color:transparent;box-shadow:inset 0 0 0 1px transparent}:host([appearance=clear][color=blue]) button,:host([appearance=clear][color=blue]) a,:host([appearance=minimal][color=blue]) button,:host([appearance=minimal][color=blue]) a{border-color:var(--calcite-ui-brand);background-color:transparent;color:var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:hover,:host([appearance=clear][color=blue]) a:hover,:host([appearance=minimal][color=blue]) button:hover,:host([appearance=minimal][color=blue]) a:hover{border-color:var(--calcite-ui-brand-hover);color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}:host([appearance=clear][color=blue]) button:focus,:host([appearance=clear][color=blue]) a:focus,:host([appearance=minimal][color=blue]) button:focus,:host([appearance=minimal][color=blue]) a:focus{border-color:var(--calcite-ui-brand);color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand)}:host([appearance=clear][color=blue]) button:active,:host([appearance=clear][color=blue]) a:active,:host([appearance=minimal][color=blue]) button:active,:host([appearance=minimal][color=blue]) a:active{border-color:var(--calcite-ui-brand-press);color:var(--calcite-ui-brand-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-brand-press)}:host([appearance=clear][color=blue]) button calcite-loader,:host([appearance=clear][color=blue]) a calcite-loader,:host([appearance=minimal][color=blue]) button calcite-loader,:host([appearance=minimal][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=clear][color=red]) button,:host([appearance=clear][color=red]) a,:host([appearance=minimal][color=red]) button,:host([appearance=minimal][color=red]) a{border-color:var(--calcite-ui-danger);background-color:transparent;color:var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:hover,:host([appearance=clear][color=red]) a:hover,:host([appearance=minimal][color=red]) button:hover,:host([appearance=minimal][color=red]) a:hover{border-color:var(--calcite-ui-danger-hover);color:var(--calcite-ui-danger-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-danger-hover)}:host([appearance=clear][color=red]) button:focus,:host([appearance=clear][color=red]) a:focus,:host([appearance=minimal][color=red]) button:focus,:host([appearance=minimal][color=red]) a:focus{border-color:var(--calcite-ui-danger);color:var(--calcite-ui-danger);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger)}:host([appearance=clear][color=red]) button:active,:host([appearance=clear][color=red]) a:active,:host([appearance=minimal][color=red]) button:active,:host([appearance=minimal][color=red]) a:active{border-color:var(--calcite-ui-danger-press);color:var(--calcite-ui-danger-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-danger-press)}:host([appearance=clear][color=red]) button calcite-loader,:host([appearance=clear][color=red]) a calcite-loader,:host([appearance=minimal][color=red]) button calcite-loader,:host([appearance=minimal][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=clear][color=neutral]) button,:host([appearance=clear][color=neutral]) a,:host([appearance=minimal][color=neutral]) button,:host([appearance=minimal][color=neutral]) a{background-color:transparent;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:hover,:host([appearance=clear][color=neutral]) a:hover,:host([appearance=minimal][color=neutral]) button:hover,:host([appearance=minimal][color=neutral]) a:hover{box-shadow:inset 0 0 0 1px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:focus,:host([appearance=clear][color=neutral]) a:focus,:host([appearance=minimal][color=neutral]) button:focus,:host([appearance=minimal][color=neutral]) a:focus{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button:active,:host([appearance=clear][color=neutral]) a:active,:host([appearance=minimal][color=neutral]) button:active,:host([appearance=minimal][color=neutral]) a:active{box-shadow:inset 0 0 0 2px var(--calcite-ui-foreground-3)}:host([appearance=clear][color=neutral]) button calcite-loader,:host([appearance=clear][color=neutral]) a calcite-loader,:host([appearance=minimal][color=neutral]) button calcite-loader,:host([appearance=minimal][color=neutral]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=clear][color=inverse]) button,:host([appearance=clear][color=inverse]) a,:host([appearance=minimal][color=inverse]) button,:host([appearance=minimal][color=inverse]) a{background-color:transparent;color:var(--calcite-ui-text-1);border-color:var(--calcite-ui-inverse)}:host([appearance=clear][color=inverse]) button:hover,:host([appearance=clear][color=inverse]) a:hover,:host([appearance=minimal][color=inverse]) button:hover,:host([appearance=minimal][color=inverse]) a:hover{border-color:var(--calcite-ui-inverse-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-inverse-hover)}:host([appearance=clear][color=inverse]) button:focus,:host([appearance=clear][color=inverse]) a:focus,:host([appearance=minimal][color=inverse]) button:focus,:host([appearance=minimal][color=inverse]) a:focus{border-color:var(--calcite-ui-inverse);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse)}:host([appearance=clear][color=inverse]) button:active,:host([appearance=clear][color=inverse]) a:active,:host([appearance=minimal][color=inverse]) button:active,:host([appearance=minimal][color=inverse]) a:active{border-color:var(--calcite-ui-inverse-press);box-shadow:inset 0 0 0 2px var(--calcite-ui-inverse-press)}:host([appearance=clear][color=inverse]) button calcite-loader,:host([appearance=clear][color=inverse]) a calcite-loader,:host([appearance=minimal][color=inverse]) button calcite-loader,:host([appearance=minimal][color=inverse]) a calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=outline][split-child=primary]) button,:host([appearance=clear][split-child=primary]) button,:host([appearance=minimal][split-child=primary]) button{border-inline-end-width:0;border-inline-start-width:1px}:host([appearance=outline][split-child=secondary]) button,:host([appearance=clear][split-child=secondary]) button,:host([appearance=minimal][split-child=secondary]) button{border-inline-start-width:0;border-inline-end-width:1px}:host([appearance=transparent]:not(.enable-editing-button)) button,:host([appearance=transparent]:not(.enable-editing-button)) a{background-color:transparent}:host([appearance=transparent]:not(.enable-editing-button)) button:hover,:host([appearance=transparent]:not(.enable-editing-button)) button:focus,:host([appearance=transparent]:not(.enable-editing-button)) a:hover,:host([appearance=transparent]:not(.enable-editing-button)) a:focus{background-color:var(--calcite-button-transparent-hover)}:host([appearance=transparent]:not(.enable-editing-button)) button:active,:host([appearance=transparent]:not(.enable-editing-button)) a:active{background-color:var(--calcite-button-transparent-press)}:host([appearance=transparent][color=blue]) button,:host([appearance=transparent][color=blue]) a{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=blue]) button:hover,:host([appearance=transparent][color=blue]) a:hover{color:var(--calcite-ui-brand-hover)}:host([appearance=transparent][color=blue]) button:focus,:host([appearance=transparent][color=blue]) a:focus{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=blue]) button:active,:host([appearance=transparent][color=blue]) a:active{color:var(--calcite-ui-brand-press)}:host([appearance=transparent][color=blue]) button calcite-loader,:host([appearance=transparent][color=blue]) a calcite-loader{color:var(--calcite-ui-brand)}:host([appearance=transparent][color=red]) button,:host([appearance=transparent][color=red]) a{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=red]) button:hover,:host([appearance=transparent][color=red]) a:hover{color:var(--calcite-ui-danger-hover)}:host([appearance=transparent][color=red]) button:focus,:host([appearance=transparent][color=red]) a:focus{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=red]) button:active,:host([appearance=transparent][color=red]) a:active{color:var(--calcite-ui-danger-press)}:host([appearance=transparent][color=red]) button calcite-loader,:host([appearance=transparent][color=red]) a calcite-loader{color:var(--calcite-ui-danger)}:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) button,:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) a,:host([appearance=transparent][color=neutral]:not(.cancel-editing-button)) calcite-loader{color:var(--calcite-ui-text-1)}:host([appearance=transparent][color=neutral].cancel-editing-button) button{border-block-start-width:1px;border-block-end-width:1px;color:var(--calcite-ui-text-3);border-block-start-color:var(--calcite-ui-border-input);border-block-end-color:var(--calcite-ui-border-input);border-block-style:solid}:host([appearance=transparent][color=neutral].cancel-editing-button) button:not(.content--slotted){--calcite-button-padding-y:0}:host([appearance=transparent][color=neutral].cancel-editing-button) button:hover{color:var(--calcite-ui-text-1)}:host([appearance=transparent][color=neutral].enable-editing-button) button{background-color:transparent}:host(.confirm-changes-button) button:focus,:host(.cancel-editing-button) button:focus,:host(.enable-editing-button) button:focus{outline-offset:-2px}:host([appearance=transparent][color=inverse]) button,:host([appearance=transparent][color=inverse]) a,:host([appearance=transparent][color=inverse]) calcite-loader{color:var(--calcite-ui-text-inverse)}:host([scale=s]) button.content--slotted,:host([scale=s]) a.content--slotted{font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s][appearance=transparent]) button.content--slotted,:host([scale=s][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:0.5rem;--calcite-button-padding-y:0.25rem}:host([scale=m]) button.content--slotted,:host([scale=m]) a.content--slotted{--calcite-button-padding-x:11px;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]:not([appearance=transparent])) button.content--slotted,:host([scale=m]:not([appearance=transparent])) a.content--slotted{--calcite-button-padding-y:7px}:host([scale=m][appearance=transparent]) button.content--slotted,:host([scale=m][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:0.75rem;--calcite-button-padding-y:0.5rem}:host([scale=l]) button.content--slotted,:host([scale=l]) a.content--slotted{--calcite-button-padding-x:15px;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]:not([appearance=transparent])) button.content--slotted,:host([scale=l]:not([appearance=transparent])) a.content--slotted{--calcite-button-padding-y:11px}:host([scale=l][appearance=transparent]) button.content--slotted,:host([scale=l][appearance=transparent]) a.content--slotted{--calcite-button-padding-x:1rem;--calcite-button-padding-y:0.75rem}:host([scale=s]) button:not(.content--slotted),:host([scale=s]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:3px;inline-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:1.5rem}:host([scale=s][appearance=transparent]) button:not(.content--slotted),:host([scale=s][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.25rem}:host([scale=m]) button:not(.content--slotted),:host([scale=m]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:7px;inline-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2rem}:host([scale=m][appearance=transparent]) button:not(.content--slotted),:host([scale=m][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.5rem}:host([scale=l]) button:not(.content--slotted),:host([scale=l]) a:not(.content--slotted){--calcite-button-padding-x:0.125rem;--calcite-button-padding-y:9px;inline-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;min-block-size:2.75rem}:host([scale=l][appearance=transparent]) button:not(.content--slotted),:host([scale=l][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-y:0.625rem}:host([scale=s][icon-start][icon-end]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:23px;block-size:1.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=s][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=s][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:1.5rem}:host([scale=m][icon-start][icon-end]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:2rem;block-size:2rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=m][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=m][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:33px}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end]) a:not(.content--slotted){--calcite-button-padding-x:43px;block-size:2.75rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l][icon-start][icon-end]) button:not(.content--slotted) .icon--start+.icon--end,:host([scale=l][icon-start][icon-end]) a:not(.content--slotted) .icon--start+.icon--end{margin-inline-start:1rem}:host([scale=l][icon-start][icon-end][appearance=transparent]) button:not(.content--slotted),:host([scale=l][icon-start][icon-end][appearance=transparent]) a:not(.content--slotted){--calcite-button-padding-x:2.75rem}",d=class{constructor(t){(0,o.r)(this,t),this.alignment="center",this.appearance="solid",this.color="blue",this.disabled=!1,this.intlLoading=u.loading,this.loading=!1,this.round=!1,this.scale="m",this.splitChild=!1,this.type="button",this.width="auto",this.mutationObserver=(0,c.c)("mutation",(()=>this.updateHasContent())),this.hasContent=!1,this.hasLoader=!1,this.handleClick=()=>{const{type:t}=this;this.href||("submit"===t?(0,l.s)(this):"reset"===t&&(0,l.r)(this))}}loadingChanged(t,e){t&&!e&&(this.hasLoader=!0),!t&&e&&window.setTimeout((()=>{this.hasLoader=!1}),300)}connectedCallback(){this.hasLoader=this.loading,this.setupTextContentObserver(),(0,r.c)(this),this.formEl=(0,n.c)(this.el,this.form?`#${this.form}`:"form")}disconnectedCallback(){var t;null===(t=this.mutationObserver)||void 0===t||t.disconnect(),(0,r.d)(this),this.formEl=null}componentWillLoad(){this.updateHasContent()}componentDidRender(){(0,i.u)(this)}render(){const t=this.href?"a":"button",e=t,a=this.hasLoader?(0,o.h)("div",{class:s.buttonLoader},(0,o.h)("calcite-loader",{active:!0,class:this.loading?s.loadingIn:s.loadingOut,inline:!0,label:this.intlLoading,scale:"l"===this.scale?"m":"s"})):null,n=(0,o.h)("calcite-icon",{class:{[s.icon]:!0,[s.iconStart]:!0},flipRtl:"start"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconStart,scale:"l"===this.scale?"m":"s"}),c=(0,o.h)("calcite-icon",{class:{[s.icon]:!0,[s.iconEnd]:!0},flipRtl:"end"===this.iconFlipRtl||"both"===this.iconFlipRtl,icon:this.iconEnd,scale:"l"===this.scale?"m":"s"}),i=(0,o.h)("span",{class:s.content},(0,o.h)("slot",null));return(0,o.h)(e,{"aria-label":(0,r.g)(this),class:{[s.contentSlotted]:this.hasContent,[s.iconStartEmpty]:!this.iconStart,[s.iconEndEmpty]:!this.iconEnd},disabled:this.disabled||this.loading,href:"a"===t&&this.href,name:"button"===t&&this.name,onClick:this.handleClick,ref:t=>this.childEl=t,rel:"a"===t&&this.rel,tabIndex:this.disabled||this.loading?-1:null,target:"a"===t&&this.target,type:"button"===t&&this.type},a,this.iconStart?n:null,this.hasContent?i:null,this.iconEnd?c:null)}async setFocus(){var t;null===(t=this.childEl)||void 0===t||t.focus()}updateHasContent(){var t,e;const a=this.el.textContent.trim().length>0||this.el.childNodes.length>0;this.hasContent=1===this.el.childNodes.length&&"#text"===(null===(t=this.el.childNodes[0])||void 0===t?void 0:t.nodeName)?(null===(e=this.el.textContent)||void 0===e?void 0:e.trim().length)>0:a}setupTextContentObserver(){var t;null===(t=this.mutationObserver)||void 0===t||t.observe(this.el,{childList:!0,subtree:!0})}onLabelClick(){this.handleClick(),this.setFocus()}get el(){return(0,o.g)(this)}static get watchers(){return{loading:["loadingChanged"]}}};d.style=p},52080:function(t,e,a){
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
function o(t,e,a){const o=n(t);return new o(e,a)}function n(t){class e extends window.MutationObserver{constructor(t){super(t),this.observedEntry=[],this.callback=t}observe(t,e){return this.observedEntry.push({target:t,options:e}),super.observe(t,e)}unobserve(t){const e=this.observedEntry.filter((e=>e.target!==t));this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),e.forEach((t=>this.observe(t.target,t.options)))}}return function(){return"intersection"===t?window.IntersectionObserver:"mutation"===t?e:window.ResizeObserver}()}a.d(e,{c:function(){return o}})}}]);
//# sourceMappingURL=238.93e0778e.js.map