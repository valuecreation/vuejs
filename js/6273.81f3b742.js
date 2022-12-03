"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[6273],{34344:function(t,e,n){function r(){return[1,0,0,0,1,0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]}function i(t,e,n,r,o,i,c,u,a){return[t,e,n,r,o,i,c,u,a]}function c(t,e){return new Float64Array(t,e,9)}n.d(e,{a:function(){return c},c:function(){return r}});Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:i,createView:c},Symbol.toStringTag,{value:"Module"}))},10663:function(t,e,n){n.d(e,{c:function(){return A},g:function(){return l},j:function(){return D},k:function(){return I},m:function(){return d},s:function(){return f}});var r=n(34344),o=n(61044),i=n(8909),c=n(93011),u=n(6766),a=n(88589);function s(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function f(t,e,n){n*=.5;const r=Math.sin(n);return t[0]=r*e[0],t[1]=r*e[1],t[2]=r*e[2],t[3]=Math.cos(n),t}function l(t,e){const n=2*Math.acos(e[3]),r=Math.sin(n/2);return r>(0,c.g)()?(t[0]=e[0]/r,t[1]=e[1]/r,t[2]=e[2]/r):(t[0]=1,t[1]=0,t[2]=0),n}function d(t,e,n){const r=e[0],o=e[1],i=e[2],c=e[3],u=n[0],a=n[1],s=n[2],f=n[3];return t[0]=r*f+c*u+o*s-i*a,t[1]=o*f+c*a+i*u-r*s,t[2]=i*f+c*s+r*a-o*u,t[3]=c*f-r*u-o*a-i*s,t}function y(t,e,n){n*=.5;const r=e[0],o=e[1],i=e[2],c=e[3],u=Math.sin(n),a=Math.cos(n);return t[0]=r*a+c*u,t[1]=o*a+i*u,t[2]=i*a-o*u,t[3]=c*a-r*u,t}function g(t,e,n){n*=.5;const r=e[0],o=e[1],i=e[2],c=e[3],u=Math.sin(n),a=Math.cos(n);return t[0]=r*a-i*u,t[1]=o*a+c*u,t[2]=i*a+r*u,t[3]=c*a-o*u,t}function h(t,e,n){n*=.5;const r=e[0],o=e[1],i=e[2],c=e[3],u=Math.sin(n),a=Math.cos(n);return t[0]=r*a+o*u,t[1]=o*a-r*u,t[2]=i*a+c*u,t[3]=c*a-i*u,t}function b(t,e){const n=e[0],r=e[1],o=e[2];return t[0]=n,t[1]=r,t[2]=o,t[3]=Math.sqrt(Math.abs(1-n*n-r*r-o*o)),t}function w(t,e,n,r){const o=e[0],i=e[1],u=e[2],a=e[3];let s,f,l,d,y,g=n[0],h=n[1],b=n[2],w=n[3];return f=o*g+i*h+u*b+a*w,f<0&&(f=-f,g=-g,h=-h,b=-b,w=-w),1-f>(0,c.g)()?(s=Math.acos(f),l=Math.sin(s),d=Math.sin((1-r)*s)/l,y=Math.sin(r*s)/l):(d=1-r,y=r),t[0]=d*o+y*g,t[1]=d*i+y*h,t[2]=d*u+y*b,t[3]=d*a+y*w,t}function p(t){const e=c.R,n=e(),r=e(),o=e(),i=Math.sqrt(1-n),u=Math.sqrt(n);return t[0]=i*Math.sin(2*Math.PI*r),t[1]=i*Math.cos(2*Math.PI*r),t[2]=u*Math.sin(2*Math.PI*o),t[3]=u*Math.cos(2*Math.PI*o),t}function O(t,e){const n=e[0],r=e[1],o=e[2],i=e[3],c=n*n+r*r+o*o+i*i,u=c?1/c:0;return t[0]=-n*u,t[1]=-r*u,t[2]=-o*u,t[3]=i*u,t}function A(t,e){return t[0]=-e[0],t[1]=-e[1],t[2]=-e[2],t[3]=e[3],t}function T(t,e){const n=e[0]+e[4]+e[8];let r;if(n>0)r=Math.sqrt(n+1),t[3]=.5*r,r=.5/r,t[0]=(e[5]-e[7])*r,t[1]=(e[6]-e[2])*r,t[2]=(e[1]-e[3])*r;else{let n=0;e[4]>e[0]&&(n=1),e[8]>e[3*n+n]&&(n=2);const o=(n+1)%3,i=(n+2)%3;r=Math.sqrt(e[3*n+n]-e[3*o+o]-e[3*i+i]+1),t[n]=.5*r,r=.5/r,t[3]=(e[3*o+i]-e[3*i+o])*r,t[o]=(e[3*o+n]+e[3*n+o])*r,t[i]=(e[3*i+n]+e[3*n+i])*r}return t}function I(t,e,n,r){const o=.5*Math.PI/180;e*=o,n*=o,r*=o;const i=Math.sin(e),c=Math.cos(e),u=Math.sin(n),a=Math.cos(n),s=Math.sin(r),f=Math.cos(r);return t[0]=i*a*f-c*u*s,t[1]=c*u*f+i*a*s,t[2]=c*a*s-i*u*f,t[3]=c*a*f+i*u*s,t}function M(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const m=a.c,U=a.s,C=a.a,E=d,L=a.b,S=a.d,v=a.l,F=a.e,R=F,N=a.f,P=N,Z=a.n,D=a.g,z=a.h;function B(t,e,n){const r=(0,u.e)(e,n);return r<-.999999?((0,u.f)(V,_,e),(0,u.u)(V)<1e-6&&(0,u.f)(V,x,e),(0,u.n)(V,V),f(t,V,Math.PI),t):r>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,u.f)(V,e,n),t[0]=V[0],t[1]=V[1],t[2]=V[2],t[3]=1+r,Z(t,t))}const V=(0,i.c)(),_=(0,i.f)(1,0,0),x=(0,i.f)(0,1,0);function Y(t,e,n,r,o,i){return w(j,e,o,i),w(X,n,r,i),w(t,j,X,2*i*(1-i)),t}const j=(0,o.a)(),X=(0,o.a)();function k(t,e,n,r){const o=H;return o[0]=n[0],o[3]=n[1],o[6]=n[2],o[1]=r[0],o[4]=r[1],o[7]=r[2],o[2]=-e[0],o[5]=-e[1],o[8]=-e[2],Z(t,T(t,o))}const H=(0,r.c)();Object.freeze(Object.defineProperty({__proto__:null,identity:s,setAxisAngle:f,getAxisAngle:l,multiply:d,rotateX:y,rotateY:g,rotateZ:h,calculateW:b,slerp:w,random:p,invert:O,conjugate:A,fromMat3:T,fromEuler:I,str:M,copy:m,set:U,add:C,mul:E,scale:L,dot:S,lerp:v,length:F,len:R,squaredLength:N,sqrLen:P,normalize:Z,exactEquals:D,equals:z,rotationTo:B,sqlerp:Y,setAxes:k},Symbol.toStringTag,{value:"Module"}))},70347:function(t,e,n){function r(){const t=new Float32Array(4);return t[3]=1,t}function o(t){const e=new Float32Array(4);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}function i(t,e,n,r){const o=new Float32Array(4);return o[0]=t,o[1]=e,o[2]=n,o[3]=r,o}function c(t,e){return new Float32Array(t,e,4)}n.d(e,{b:function(){return o},c:function(){return r}});Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:i,createView:c},Symbol.toStringTag,{value:"Module"}))},61044:function(t,e,n){function r(){return[0,0,0,1]}function o(t){return[t[0],t[1],t[2],t[3]]}function i(t,e,n,r){return[t,e,n,r]}function c(t,e){return new Float64Array(t,e,4)}n.d(e,{I:function(){return u},a:function(){return r},b:function(){return o},c:function(){return c}});const u=r();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:i,createView:c,IDENTITY:u},Symbol.toStringTag,{value:"Module"}))},79912:function(t,e,n){function r(){return new Float32Array(3)}function o(t){const e=new Float32Array(3);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e}function i(t,e,n){const r=new Float32Array(3);return r[0]=t,r[1]=e,r[2]=n,r}function c(t,e){return new Float32Array(t,e,3)}function u(){return r()}function a(){return i(1,1,1)}function s(){return i(1,0,0)}function f(){return i(0,1,0)}function l(){return i(0,0,1)}n.d(e,{b:function(){return o},c:function(){return r},f:function(){return i}});const d=u(),y=a(),g=s(),h=f(),b=l();Object.freeze(Object.defineProperty({__proto__:null,create:r,clone:o,fromValues:i,createView:c,zeros:u,ones:a,unitX:s,unitY:f,unitZ:l,ZEROS:d,ONES:y,UNIT_X:g,UNIT_Y:h,UNIT_Z:b},Symbol.toStringTag,{value:"Module"}))},9512:function(t,e,n){n.d(e,{I_:function(){return d},W7:function(){return b},qM:function(){return p}});var r=n(70375),o=n(67134),i=n(13802),c=n(52485),u=n(21414);const a=i.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function s(t,e,n){let o="",i=0;for(;i<n;){const c=t[e+i];if(c<128)o+=String.fromCharCode(c),i++;else if(c>=192&&c<224){if(i+1>=n)throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const u=(31&c)<<6|63&t[e+i+1];o+=String.fromCharCode(u),i+=2}else if(c>=224&&c<240){if(i+2>=n)throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const u=(15&c)<<12|(63&t[e+i+1])<<6|63&t[e+i+2];o+=String.fromCharCode(u),i+=3}else{if(!(c>=240&&c<248))throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=n)throw new r.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const u=(7&c)<<18|(63&t[e+i+1])<<12|(63&t[e+i+2])<<6|63&t[e+i+3];if(u>=65536){const t=55296+(u-65536>>10),e=56320+(1023&u);o+=String.fromCharCode(t,e)}else o+=String.fromCharCode(u);i+=4}}}return o}function f(t,e){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<e.length;o++){const i=e[o],c=i.valueType||i.type,u=A[c];n.fields[i.property]=u(t,r),r+=O[c].BYTES_PER_ELEMENT}return n.byteCount=r,n}function l(t,e,n){const o=[];let i,c,u=0;for(c=0;c<t;c+=1){if(i=e[c],i>0){if(o.push(s(n,u,i-1)),0!==n[u+i-1])throw new r.Z("string-array-error","Invalid string array: missing null termination.")}else o.push(null);u+=i}return o}function d(t,e){return new(0,O[e.valueType])(t,e.byteOffset,e.count*e.valuesPerElement)}function y(t,e){return new Uint8Array(t,e.byteOffset,e.byteCount)}function g(t,e,n){const i=null!=e.header?f(t,e.header):{byteOffset:0,byteCount:0,fields:{count:n}},c={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let u=i.byteCount;for(let a=0;a<e.ordering.length;a++){const t=e.ordering[a],n=(0,o.d9)(e[t]);if(n.count=i.fields.count,"String"===n.valueType){if(n.byteOffset=u,n.byteCount=i.fields[t+"ByteCount"],"UTF-8"!==n.encoding)throw new r.Z("unsupported-encoding","Unsupported String encoding.",{encoding:n.encoding})}else{if(!T(n.valueType))throw new r.Z("unsupported-value-type","Unsupported binary valueType",{valueType:n.valueType});{const t=I(n.valueType);u+=u%t!=0?t-u%t:0,n.byteOffset=u,n.byteCount=t*n.valuesPerElement*n.count}}u+=n.byteCount,c.entries[t]=n}return c.byteCount=u-c.byteOffset,c}function h(t,e,n){if(e!==t&&a.error(`Invalid ${n} buffer size\n expected: ${t}, actual: ${e})`),e<t)throw new r.Z("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:e})}function b(t,e){const n=f(t,e&&e.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,c=null!=i.vertexCount?i.vertexCount:i.count;for(const s of e.ordering){if(!e.vertexAttributes[s])continue;const t={...e.vertexAttributes[s],byteOffset:r,count:c},n=w[s]?w[s]:"_"+s;o.vertexAttributes[n]=t,r+=I(t.valueType)*t.valuesPerElement*c}const u=i.faceCount;if(e.faces&&u){o.faces={};for(const t of e.ordering){if(!e.faces[t])continue;const n={...e.faces[t],byteOffset:r,count:u};o.faces[t]=n,r+=I(n.valueType)*n.valuesPerElement*u}}const a=i.featureCount;if(e.featureAttributes&&e.featureAttributeOrder&&a){o.featureAttributes={};for(const t of e.featureAttributeOrder){if(!e.featureAttributes[t])continue;const n={...e.featureAttributes[t],byteOffset:r,count:a};o.featureAttributes[t]=n,r+=("UInt64"===n.valueType?8:I(n.valueType))*n.valuesPerElement*a}}return h(r,t.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}const w={position:u.T.POSITION,normal:u.T.NORMAL,color:u.T.COLOR,uv0:u.T.UV0,region:u.T.UVREGION};function p(t,e,n){if("lepcc-rgb"===t.encoding)return(0,c.IT)(e);if("lepcc-intensity"===t.encoding)return(0,c.ti)(e);if(null!=t.encoding&&""!==t.encoding)throw new r.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(a.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(a.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const o=g(e,t,n);h(o.byteOffset+o.byteCount,e.byteLength,"attribute");const i=o.entries.attributeValues||o.entries.objectIds;if(i){if("String"===i.valueType){const t=o.entries.attributeByteCounts,n=d(e,t),r=y(e,i);return l(t.count,n,r)}return d(e,i)}throw new r.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const O={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},A={Float32:(t,e)=>new DataView(t,0).getFloat32(e,!0),Float64:(t,e)=>new DataView(t,0).getFloat64(e,!0),UInt8:(t,e)=>new DataView(t,0).getUint8(e),Int8:(t,e)=>new DataView(t,0).getInt8(e),UInt16:(t,e)=>new DataView(t,0).getUint16(e,!0),Int16:(t,e)=>new DataView(t,0).getInt16(e,!0),UInt32:(t,e)=>new DataView(t,0).getUint32(e,!0),Int32:(t,e)=>new DataView(t,0).getInt32(e,!0)};function T(t){return O.hasOwnProperty(t)}function I(t){return T(t)?O[t].BYTES_PER_ELEMENT:0}},52485:function(t,e,n){n.d(e,{Gi:function(){return s},IT:function(){return g},ti:function(){return w}});var r=n(70375);const o=!0,i={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function c(t,e,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(t,n+i.identifierOffset,i.identifierLength)),version:e.getUint16(n+i.versionOffset,o),checksum:e.getUint32(n+i.checksumOffset,o)}}const u={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function a(t,e){return{sizeLo:t.getUint32(e+u.sizeLo,o),sizeHi:t.getUint32(e+u.sizeHi,o),minX:t.getFloat64(e+u.minX,o),minY:t.getFloat64(e+u.minY,o),minZ:t.getFloat64(e+u.minZ,o),maxX:t.getFloat64(e+u.maxX,o),maxY:t.getFloat64(e+u.maxY,o),maxZ:t.getFloat64(e+u.maxZ,o),errorX:t.getFloat64(e+u.errorX,o),errorY:t.getFloat64(e+u.errorY,o),errorZ:t.getFloat64(e+u.errorZ,o),count:t.getUint32(e+u.count,o),reserved:t.getUint32(e+u.reserved,o)}}function s(t){const e=new DataView(t,0);let n=0;const{identifier:o,version:s}=c(t,e,n);if(n+=i.byteCount,"LEPCC     "!==o)throw new r.Z("lepcc-decode-error","Bad identifier");if(s>1)throw new r.Z("lepcc-decode-error","Unknown version");const l=a(e,n);if(n+=u.byteCount,l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const d=new Float64Array(3*l.count),y=[],g=[],h=[],b=[];if(n=f(t,n,y),n=f(t,n,g),n=f(t,n,h),n=f(t,n,b),n!==t.byteLength)throw new r.Z("lepcc-decode-error","Bad length");let w=0,p=0;for(let r=0;r<y.length;r++){p+=y[r];let t=0;for(let e=0;e<g[r];e++){t+=h[w];const e=b[w];d[3*w]=Math.min(l.maxX,l.minX+2*l.errorX*t),d[3*w+1]=Math.min(l.maxY,l.minY+2*l.errorY*p),d[3*w+2]=Math.min(l.maxZ,l.minZ+2*l.errorZ*e),w++}}return{errorX:l.errorX,errorY:l.errorY,errorZ:l.errorZ,result:d}}function f(t,e,n){const r=[];e=l(t,e,r);const o=[];for(let i=0;i<r.length;i++){o.length=0,e=l(t,e,o);for(let t=0;t<o.length;t++)n.push(o[t]+r[i])}return e}function l(t,e,n){const i=new DataView(t,e),c=i.getUint8(0),u=31&c,a=!!(32&c),s=(192&c)>>6;let f=0;if(0===s)f=i.getUint32(1,o),e+=5;else if(1===s)f=i.getUint16(1,o),e+=3;else{if(2!==s)throw new r.Z("lepcc-decode-error","Bad count type");f=i.getUint8(1),e+=2}if(a)throw new r.Z("lepcc-decode-error","LUT not implemented");const l=Math.ceil(f*u/8),d=new Uint8Array(t,e,l);let y=0,g=0,h=0;const b=-1>>>32-u;for(let r=0;r<f;r++){for(;g<u;)y|=d[h]<<g,g+=8,h+=1;n[r]=y&b,y>>>=u,g-=u,g+u>32&&(y|=d[h-1]>>8-g)}return e+h}const d={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function y(t,e){return{sizeLo:t.getUint32(e+d.sizeLo,o),sizeHi:t.getUint32(e+d.sizeHi,o),count:t.getUint32(e+d.count,o),colorMapCount:t.getUint16(e+d.colorMapCount,o),lookupMethod:t.getUint8(e+d.lookupMethod),compressionMethod:t.getUint8(e+d.compressionMethod)}}function g(t){const e=new DataView(t,0);let n=0;const{identifier:o,version:u}=c(t,e,n);if(n+=i.byteCount,"ClusterRGB"!==o)throw new r.Z("lepcc-decode-error","Bad identifier");if(u>1)throw new r.Z("lepcc-decode-error","Unknown version");const a=y(e,n);if(n+=d.byteCount,a.sizeHi*2**32+a.sizeLo!==t.byteLength)throw new r.Z("lepcc-decode-error","Bad size");if((2===a.lookupMethod||1===a.lookupMethod)&&0===a.compressionMethod){if(3*a.colorMapCount+a.count+n!==t.byteLength||a.colorMapCount>256)throw new r.Z("lepcc-decode-error","Bad count");const e=new Uint8Array(t,n,3*a.colorMapCount),o=new Uint8Array(t,n+3*a.colorMapCount,a.count),i=new Uint8Array(3*a.count);for(let t=0;t<a.count;t++){const n=o[t];i[3*t]=e[3*n],i[3*t+1]=e[3*n+1],i[3*t+2]=e[3*n+2]}return i}if(0===a.lookupMethod&&0===a.compressionMethod){if(3*a.count+n!==t.byteLength||0!==a.colorMapCount)throw new r.Z("lepcc-decode-error","Bad count");return new Uint8Array(t,n).slice()}if(a.lookupMethod<=2&&1===a.compressionMethod){if(n+3!==t.byteLength||1!==a.colorMapCount)throw new r.Z("lepcc-decode-error","Bad count");const o=e.getUint8(n),i=e.getUint8(n+1),c=e.getUint8(n+2),u=new Uint8Array(3*a.count);for(let t=0;t<a.count;t++)u[3*t]=o,u[3*t+1]=i,u[3*t+2]=c;return u}throw new r.Z("lepcc-decode-error","Bad method "+a.lookupMethod+","+a.compressionMethod)}const h={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function b(t,e){return{sizeLo:t.getUint32(e+h.sizeLo,o),sizeHi:t.getUint32(e+h.sizeHi,o),count:t.getUint32(e+h.count,o),scaleFactor:t.getUint16(e+h.scaleFactor,o),bitsPerPoint:t.getUint8(e+h.bitsPerPoint),reserved:t.getUint8(e+h.reserved)}}function w(t){const e=new DataView(t,0);let n=0;const{identifier:o,version:u}=c(t,e,n);if(n+=i.byteCount,"Intensity "!==o)throw new r.Z("lepcc-decode-error","Bad identifier");if(u>1)throw new r.Z("lepcc-decode-error","Unknown version");const a=b(e,n);if(n+=h.byteCount,a.sizeHi*2**32+a.sizeLo!==t.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const s=new Uint16Array(a.count);if(8===a.bitsPerPoint){if(a.count+n!==t.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const e=new Uint8Array(t,n,a.count);for(let t=0;t<a.count;t++)s[t]=e[t]*a.scaleFactor}else if(16===a.bitsPerPoint){if(2*a.count+n!==t.byteLength)throw new r.Z("lepcc-decode-error","Bad size");const e=new Uint16Array(t,n,a.count);for(let t=0;t<a.count;t++)s[t]=e[t]*a.scaleFactor}else{const e=[];if(l(t,n,e)!==t.byteLength)throw new r.Z("lepcc-decode-error","Bad size");for(let t=0;t<a.count;t++)s[t]=e[t]*a.scaleFactor}return s}},21414:function(t,e,n){var r;n.d(e,{T:function(){return r}}),function(t){t.POSITION="position",t.NORMAL="normal",t.UV0="uv0",t.AUXPOS1="auxpos1",t.AUXPOS2="auxpos2",t.MAPPOS="mapPos",t.COLOR="color",t.SYMBOLCOLOR="symbolColor",t.SIZE="size",t.TANGENT="tangent",t.OFFSET="offset",t.SUBDIVISIONFACTOR="subdivisionFactor",t.COLORFEATUREATTRIBUTE="colorFeatureAttribute",t.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",t.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",t.DISTANCETOSTART="distanceToStart",t.UVMAPSPACE="uvMapSpace",t.BOUNDINGRECT="boundingRect",t.UVREGION="uvRegion",t.NORMALCOMPRESSED="normalCompressed",t.PROFILERIGHT="profileRight",t.PROFILEUP="profileUp",t.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",t.FEATUREVALUE="featureValue",t.MODELORIGINHI="modelOriginHi",t.MODELORIGINLO="modelOriginLo",t.MODEL="model",t.MODELNORMAL="modelNormal",t.INSTANCECOLOR="instanceColor",t.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",t.LOCALTRANSFORM="localTransform",t.GLOBALTRANSFORM="globalTransform",t.BOUNDINGSPHERE="boundingSphere",t.MODELORIGIN="modelOrigin",t.MODELSCALEFACTORS="modelScaleFactors",t.FEATUREATTRIBUTE="featureAttribute",t.STATE="state",t.LODLEVEL="lodLevel",t.POSITION0="position0",t.POSITION1="position1",t.NORMALA="normalA",t.NORMALB="normalB",t.COMPONENTINDEX="componentIndex",t.VARIANTOFFSET="variantOffset",t.VARIANTSTROKE="variantStroke",t.VARIANTEXTENSION="variantExtension",t.U8PADDING="u8padding",t.U16PADDING="u16padding",t.SIDENESS="sideness",t.START="start",t.END="end",t.UP="up",t.EXTRUDE="extrude",t.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",t.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(r||(r={}))}}]);
//# sourceMappingURL=6273.81f3b742.js.map