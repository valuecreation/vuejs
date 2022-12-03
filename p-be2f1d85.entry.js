/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.0-beta.98
 */
import{r as i,h as a,g as t}from"./p-452677fb.js";import{h as e,i as n}from"./p-307dbb99.js";import{d as r}from"./p-0d071f85.js";import"./p-237be014.js";import"./p-a0074e38.js";const c=class{constructor(a){i(this,a),this.scale="m",this.thumbnailFailedToLoad=!1}render(){return this.determineContent()}determineContent(){if(this.thumbnail&&!this.thumbnailFailedToLoad)return a("img",{alt:"",class:"thumbnail",onError:()=>this.thumbnailFailedToLoad=!0,src:this.thumbnail});const i=this.generateInitials(),t=this.generateFillColor();return a("span",{class:"background",style:{backgroundColor:t}},i?a("span",{"aria-hidden":"true",class:"initials"},i):a("calcite-icon",{class:"icon",icon:"user",scale:this.scale}))}generateFillColor(){const{userId:a,username:i,fullName:t,el:o}=this,s=r(o),c=a&&`#${a.substr(a.length-6)}`,l=i||t||"",m=c&&n(c)?c:function(a){let i=0;for(let e=0;e<a.length;e++)i=a.charCodeAt(e)+((i<<5)-i);let t="#";for(let e=0;e<3;e++)t+=("00"+(i>>8*e&255).toString(16)).substr(-2);return t}(l);return(a||l)&&n(m)?`hsl(${function(a){return function(a){let{r:i,g:t,b:e}=a;i/=255,t/=255,e/=255;const n=Math.max(i,t,e),r=Math.min(i,t,e),o=n-r;if(n===r)return 0;let s=(n+r)/2;switch(n){case i:s=(t-e)/o+(t<e?6:0);break;case t:s=(e-i)/o+2;break;case e:s=(i-t)/o+4}return Math.round(60*s)}(e(a))}(m)}, 60%, ${"dark"===s?20:90}%)`:"var(--calcite-ui-foreground-2)"}generateInitials(){const{fullName:a,username:i}=this;return a?a.trim().split(" ").map((a=>a.substring(0,1))).join(""):!!i&&i.substring(0,2)}get el(){return t(this)}};c.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0.01}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing)}:host([hidden]){display:none}:host{display:inline-block;overflow:hidden;border-radius:50%}:host([scale=s]){block-size:1.5rem;inline-size:1.5rem;font-size:var(--calcite-font-size--3)}:host([scale=m]){block-size:2rem;inline-size:2rem;font-size:var(--calcite-font-size--2)}:host([scale=l]){block-size:2.75rem;inline-size:2.75rem;font-size:var(--calcite-font-size-0)}.icon{display:flex}.background{display:flex;block-size:100%;inline-size:100%;align-items:center;justify-content:center;border-radius:50%}.initials{font-weight:var(--calcite-font-weight-bold);text-transform:uppercase;color:var(--calcite-ui-text-3)}.thumbnail{block-size:100%;inline-size:100%;border-radius:50%}";export{c as calcite_avatar};