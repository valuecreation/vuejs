"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[6252],{45584:function(e,t,r){r.d(t,{D:function(){return k},b:function(){return W}});var i=r(61681),n=r(39100),o=r(95650),a=r(57218),s=r(35031),c=r(5885),l=r(4731),u=r(99163),d=r(27125),h=r(91636),f=r(45658),m=r(82082),p=r(6502),v=r(78549),g=r(78183),x=r(34091),_=r(3417),T=r(69828),b=r(21640),S=r(58749),A=r(73393),C=r(2833),w=r(74839),y=r(3864),O=r(29262),M=r(30228),P=r(27641),E=r(44391),R=r(41330),I=r(42727),N=r(5614),L=r(43036),H=r(63371),D=r(24603),F=r(23410),z=r(87621),B=r(3961),V=r(15176),U=r(42842),G=r(21414);function W(e){const t=new B.kG,{vertex:r,fragment:W,varyings:k}=t;return(0,N.Sv)(r,e),t.include(h.f),k.add("vpos","vec3"),t.include(P.k,e),t.include(u.f,e),t.include(g.L,e),e.hasColorTextureTransform&&t.include(M.av),e.output!==s.H.Color&&e.output!==s.H.Alpha||(e.hasNormalTextureTransform&&t.include(M.NI),e.hasEmissionTextureTransform&&t.include(M.R5),e.hasOcclusionTextureTransform&&t.include(M.jF),e.hasMetallicRoughnessTextureTransform&&t.include(M.DT),(0,N.hY)(r,e),t.include(d.O,e),t.include(l.w,e),e.normalType===d.h.Attribute&&e.offsetBackfaces&&t.include(a.w),t.include(_.Q,e),t.include(v.Bb,e),e.instancedColor&&t.attributes.add(G.T.INSTANCECOLOR,"vec4"),k.add("localvpos","vec3"),t.include(m.D,e),t.include(o.qj,e),t.include(f.R,e),t.include(p.c,e),r.uniforms.add(new H.N("externalColor",(e=>e.externalColor))),k.add("vcolorExt","vec4"),e.hasMultipassTerrain&&k.add("depth","float"),e.hasModelTransformation&&r.uniforms.add(new z.g("model",(e=>(0,i.pC)(e.modelTransformation)?e.modelTransformation:n.I))),r.code.add(F.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${F.H.float(E.b)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${e.normalType===d.h.Attribute?F.H`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, ${e.hasModelTransformation?"model,":""} vpos);
          ${e.normalType===d.h.Attribute&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        ${e.hasColorTextureTransform?F.H`forwardColorUV();`:""}
        ${e.hasNormalTextureTransform?F.H`forwardNormalUV();`:""}
        ${e.hasEmissionTextureTransform?F.H`forwardEmissiveUV();`:""}
        ${e.hasOcclusionTextureTransform?F.H`forwardOcclusionUV();`:""}
        ${e.hasMetallicRoughnessTextureTransform?F.H`forwardMetallicRoughnessUV();`:""}
      }
    `)),e.output===s.H.Alpha&&(t.include(c.f5,e),t.include(R.z,e),t.include(A.l,e),W.uniforms.add([new D.p("opacity",(e=>e.opacity)),new D.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new V.A("tex",(e=>e.texture))),W.include(I.y),W.code.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?F.H`colorUV`:F.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?F.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===s.H.Color&&(t.include(c.f5,e),t.include(b.XP,e),t.include(T.K,e),t.include(R.z,e),t.include(e.instancedDoublePrecision?O.hb:O.XE,e),t.include(A.l,e),(0,N.hY)(W,e),W.uniforms.add([r.uniforms.get("localOrigin"),new L.J("ambient",(e=>e.ambient)),new L.J("diffuse",(e=>e.diffuse)),new D.p("opacity",(e=>e.opacity)),new D.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&W.uniforms.add(new V.A("tex",(e=>e.texture))),t.include(y.jV,e),t.include(w.T,e),W.include(I.y),t.include(C.k,e),(0,b.PN)(W),(0,b.sC)(W),(0,S.F1)(W),W.code.add(F.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
        ${e.hasColorTexture?F.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?F.H`colorUV`:F.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:F.H`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===d.h.ScreenDerivative?F.H`
                vec3 normal = screenDerivativeNormal(localvpos);`:F.H`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===y.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?F.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:F.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?F.H`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, vuv0);`:F.H`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?F.H`normalize(posWorld);`:F.H`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?F.H`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===y.f7.Normal||e.pbrMode===y.f7.Schematic?F.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?F.H`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:F.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===U.A.Color?F.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:""}
      }
    `)),t.include(x.s,e),t}const k=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},60926:function(e,t,r){r.d(t,{R:function(){return F},b:function(){return D}});var i=r(95650),n=r(57218),o=r(35031),a=r(5885),s=r(4731),c=r(99163),l=r(27125),u=r(91636),d=r(45658),h=r(82082),f=r(6502),m=r(78183),p=r(34091),v=r(69828),g=r(21640),x=r(58749),_=r(73393),T=r(74839),b=r(3864),S=r(29262),A=r(27641),C=r(44391),w=r(41330),y=r(42727),O=r(5614),M=r(43036),P=r(63371),E=r(24603),R=r(23410),I=r(3961),N=r(15176),L=r(42842),H=r(21414);function D(e){const t=new I.kG,{vertex:r,fragment:D,varyings:F}=t;return(0,O.Sv)(r,e),t.include(u.f),F.add("vpos","vec3"),t.include(A.k,e),t.include(c.f,e),t.include(m.L,e),e.output!==o.H.Color&&e.output!==o.H.Alpha||((0,O.hY)(t.vertex,e),t.include(l.O,e),t.include(s.w,e),e.offsetBackfaces&&t.include(n.w),e.instancedColor&&t.attributes.add(H.T.INSTANCECOLOR,"vec4"),F.add("vNormalWorld","vec3"),F.add("localvpos","vec3"),e.hasMultipassTerrain&&F.add("depth","float"),t.include(h.D,e),t.include(i.qj,e),t.include(d.R,e),t.include(f.c,e),r.uniforms.add(new P.N("externalColor",(e=>e.externalColor))),F.add("vcolorExt","vec4"),r.code.add(R.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${R.H.float(C.b)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.hasMultipassTerrain?R.H`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===o.H.Alpha&&(t.include(a.f5,e),t.include(w.z,e),t.include(_.l,e),D.uniforms.add([new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&D.uniforms.add(new N.A("tex",(e=>e.texture))),D.include(y.y),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?R.H`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        gl_FragColor = vec4(opacity_);
      }
    `)),e.output===o.H.Color&&(t.include(a.f5,e),t.include(g.XP,e),t.include(v.K,e),t.include(w.z,e),t.include(e.instancedDoublePrecision?S.hb:S.XE,e),t.include(_.l,e),(0,O.hY)(t.fragment,e),(0,x.Pe)(D),(0,g.PN)(D),(0,g.sC)(D),D.uniforms.add([r.uniforms.get("localOrigin"),r.uniforms.get("view"),new M.J("ambient",(e=>e.ambient)),new M.J("diffuse",(e=>e.diffuse)),new E.p("opacity",(e=>e.opacity)),new E.p("layerOpacity",(e=>e.layerOpacity))]),e.hasColorTexture&&D.uniforms.add(new N.A("tex",(e=>e.texture))),t.include(b.jV,e),t.include(T.T,e),D.include(y.y),t.extensions.add("GL_OES_standard_derivatives"),(0,x.F1)(D),D.code.add(R.H`
      void main() {
        discardBySlice(vpos);
        ${e.hasMultipassTerrain?R.H`terrainDepthTest(gl_FragCoord, depth);`:""}
        ${e.hasColorTexture?R.H`
                vec4 texColor = texture2D(tex, ${e.hasColorTextureTransform?R.H`colorUV`:R.H`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:R.H`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===b.f7.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?R.H`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:R.H`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?R.H`albedo = mix(albedo, vec3(1), 0.9);`:R.H``}
        ${R.H`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?e.spherical?R.H`vec3 normalGround = normalize(vpos + localOrigin);`:R.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:R.H``}
        ${e.pbrMode===b.f7.Normal||e.pbrMode===b.f7.Schematic?R.H`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?R.H`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:R.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===L.A.Color?R.H`gl_FragColor = premultiplyAlpha(gl_FragColor);`:R.H``}
      }
    `)),t.include(p.s,e),t}const F=Object.freeze(Object.defineProperty({__proto__:null,build:D},Symbol.toStringTag,{value:"Module"}))},91800:function(e,t,r){r.d(t,{S:function(){return _},b:function(){return v}});var i=r(61681),n=r(55709),o=r(69666),a=r(41383),s=r(6665),c=r(77334),l=r(93072),u=r(24603),d=r(23410),h=r(3961),f=r(15176);const m=16,p=.5;function v(){const e=new h.kG,t=e.fragment;return e.include(a.k),t.include(s.S),e.include(c.G),t.uniforms.add(new u.p("radius",((e,t)=>g(t)))),t.code.add(d.H`vec3 sphere[16];
void fillSphere() {
sphere[0] = vec3(0.186937, 0.0, 0.0);
sphere[1] = vec3(0.700542, 0.0, 0.0);
sphere[2] = vec3(-0.864858, -0.481795, -0.111713);
sphere[3] = vec3(-0.624773, 0.102853, -0.730153);
sphere[4] = vec3(-0.387172, 0.260319, 0.007229);
sphere[5] = vec3(-0.222367, -0.642631, -0.707697);
sphere[6] = vec3(-0.01336, -0.014956, 0.169662);
sphere[7] = vec3(0.122575, 0.1544, -0.456944);
sphere[8] = vec3(-0.177141, 0.85997, -0.42346);
sphere[9] = vec3(-0.131631, 0.814545, 0.524355);
sphere[10] = vec3(-0.779469, 0.007991, 0.624833);
sphere[11] = vec3(0.308092, 0.209288,0.35969);
sphere[12] = vec3(0.359331, -0.184533, -0.377458);
sphere[13] = vec3(0.192633, -0.482999, -0.065284);
sphere[14] = vec3(0.233538, 0.293706, -0.055139);
sphere[15] = vec3(0.417709, -0.386701, 0.442449);
}
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn-bias, 0.0);
}`),t.code.add(d.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add([new l.A("nearFar",((e,t)=>t.camera.nearFar)),new f.A("normalMap",(e=>e.normalTexture)),new f.A("depthMap",(e=>e.depthTexture)),new l.A("zScale",((e,t)=>(0,c.R)(t))),new u.p("projScale",(e=>e.projScale)),new f.A("rnm",(e=>e.noiseTexture)),new l.A("rnmScale",((e,t)=>(0,n.s)(x,t.camera.fullWidth/(0,i.Wg)(e.noiseTexture).descriptor.width,t.camera.fullHeight/(0,i.Wg)(e.noiseTexture).descriptor.height))),new u.p("intensity",((e,t)=>4*p/g(t)**6)),new l.A("screenSize",((e,t)=>(0,n.s)(x,t.camera.fullWidth,t.camera.fullHeight)))]),t.code.add(d.H`
    void main(void) {
      fillSphere();
      vec3 fres = normalize((texture2D(rnm, uv * rnmScale).xyz * 2.0) - vec3(1.0));
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
        gl_FragColor = vec4(0.0);
        return;
      }

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy,currentPixelDepth);

      // get the normal of current fragment
      vec4 norm4 = texture2D(normalMap, uv);
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;
      bool isTerrain = norm4.w<0.5;

      float sum = .0;
      vec3 tapPixelPos;

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${d.H.int(m)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        //don't use current or very nearby samples
        if ( abs(offset.x)<2.0 || abs(offset.y)<2.0) continue;

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        if (isTerrain) {
          bool isTerrainTap = texture2D(normalMap, tcTap).w<0.5;
          if (isTerrainTap) {
            continue;
          }
        }

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum+= aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${d.H.int(m)}),0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4)/2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;
      gl_FragColor = vec4(A);
    }
  `),e}function g(e){return Math.max(10,20*e.camera.computeRenderPixelSizeAtDist(Math.abs(4*e.camera.relativeElevation)))}const x=(0,o.a)(),_=Object.freeze(Object.defineProperty({__proto__:null,build:v},Symbol.toStringTag,{value:"Module"}))},24756:function(e,t,r){r.d(t,{S:function(){return p},b:function(){return m}});var i=r(6766),n=r(41383),o=r(6665),a=r(26482),s=r(93072),c=r(24603),l=r(23410),u=r(3961),d=r(37649),h=r(15176);const f=4;function m(){const e=new u.kG,t=e.fragment;e.include(n.k);const r=(f+1)/2,m=1/(2*r*r);return t.include(o.S),t.uniforms.add([new h.A("depthMap",(e=>e.depthTexture)),new d.R("tex",(e=>e.colorTexture)),new a.q("blurSize",(e=>e.blurSize)),new c.p("projScale",((e,t)=>{const r=(0,i.i)(t.camera.eye,t.camera.center);return r>5e4?Math.max(0,e.projScale-(r-5e4)):e.projScale})),new s.A("nearFar",((e,t)=>t.camera.nearFar))]),t.code.add(l.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture2D(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${l.H.float(m)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.code.add(l.H`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${l.H.int(f)}; r <= ${l.H.int(f)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      gl_FragColor = vec4(b / w_total);
    }
  `),e}const p=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}))},42116:function(e,t,r){r.d(t,{a:function(){return b},c:function(){return p},g:function(){return S},h:function(){return v},j:function(){return M},m:function(){return B}});r(39994);var i,n=r(13802),o=r(19431),a=r(61681),s=r(24455),c=r(6766),l=r(8909),u=r(88589),d=r(1983);!function(e){e[e.X=0]="X",e[e.Y=1]="Y",e[e.Z=2]="Z"}(i||(i={}));var h=r(97537),f=r(5700),m=r(28888);function p(){return(0,d.c)()}function v(e,t=p()){return(0,u.c)(t,e)}function g(e,t){return(0,d.f)(e[0],e[1],e[2],t)}function x(e){return e}function _(e){e[0]=e[1]=e[2]=e[3]=0}function T(e,t){return e[0]=e[1]=e[2]=0,e[3]=t,e}function b(e){return e[3]}function S(e){return e}function A(e,t,r,i){return(0,d.f)(e,t,r,i)}function C(e,t,r){return e!==r&&(0,c.c)(r,e),r[3]=e[3]+t,r}function w(e,t,r){return n.Z.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),e===r?r:v(e,r)}function y(e,t,r){if((0,a.Wi)(t))return!1;const{origin:i,direction:n}=t,o=O;o[0]=i[0]-e[0],o[1]=i[1]-e[1],o[2]=i[2]-e[2];const s=n[0]*n[0]+n[1]*n[1]+n[2]*n[2];if(0===s)return!1;const c=2*(n[0]*o[0]+n[1]*o[1]+n[2]*o[2]),l=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-e[3]*e[3]);if(l<0)return!1;const u=Math.sqrt(l);let d=(-c-u)/(2*s);const h=(-c+u)/(2*s);return(d<0||h<d&&h>0)&&(d=h),!(d<0)&&(r&&(r[0]=i[0]+n[0]*d,r[1]=i[1]+n[1]*d,r[2]=i[2]+n[2]*d),!0)}const O=(0,l.c)();function M(e,t){return y(e,t,null)}function P(e,t,r){if(y(e,t,r))return r;const i=E(e,t,m.WM.get());return(0,c.a)(r,t.origin,(0,c.g)(m.WM.get(),t.direction,(0,c.i)(t.origin,i)/(0,c.l)(t.direction))),r}function E(e,t,r){const i=m.WM.get(),n=m.MP.get();(0,c.f)(i,t.origin,t.direction);const o=b(e);(0,c.f)(r,i,t.origin),(0,c.g)(r,r,1/(0,c.l)(r)*o);const a=L(e,t.origin),l=(0,f.EU)(t.origin,r);return(0,s.d)(n,l+a,i),(0,c.m)(r,r,n),r}function R(e,t,r){return y(e,t,r)?r:((0,h.JI)(t,S(e),r),I(e,r,r))}function I(e,t,r){const i=(0,c.b)(m.WM.get(),t,S(e)),n=(0,c.g)(m.WM.get(),i,e[3]/(0,c.l)(i));return(0,c.a)(r,n,S(e))}function N(e,t){const r=(0,c.b)(m.WM.get(),t,S(e)),i=(0,c.p)(r),n=e[3]*e[3];return Math.sqrt(Math.abs(i-n))}function L(e,t){const r=(0,c.b)(m.WM.get(),t,S(e)),i=(0,c.l)(r),n=b(e),a=n+Math.abs(n-i);return(0,o.ZF)(n/a)}const H=(0,l.c)();function D(e,t,r,n){const a=(0,c.b)(H,t,S(e));switch(r){case i.X:{const e=(0,o.jE)(a,H)[2];return(0,c.s)(n,-Math.sin(e),Math.cos(e),0)}case i.Y:{const e=(0,o.jE)(a,H),t=e[1],r=e[2],i=Math.sin(t);return(0,c.s)(n,-i*Math.cos(r),-i*Math.sin(r),Math.cos(t))}case i.Z:return(0,c.n)(n,a);default:return}}function F(e,t){const r=(0,c.b)(V,t,S(e));return(0,c.l)(r)-e[3]}function z(e,t,r,n){const o=F(e,t),a=D(e,t,i.Z,V),s=(0,c.g)(V,a,r-o);return(0,c.a)(n,t,s)}function B(e,t){const r=(0,c.d)(S(e),t),i=b(e);return r<=i*i}const V=(0,l.c)(),U=p();Object.freeze(Object.defineProperty({__proto__:null,create:p,copy:v,fromCenterAndRadius:g,wrap:x,clear:_,fromRadius:T,getRadius:b,getCenter:S,fromValues:A,elevate:C,setExtent:w,intersectRay:y,intersectsRay:M,intersectRayClosestSilhouette:P,closestPointOnSilhouette:E,closestPoint:R,projectPoint:I,distanceToSilhouette:N,angleToSilhouette:L,axisAt:D,altitudeAt:F,setAltitudeAt:z,containsPoint:B,tmpSphere:U},Symbol.toStringTag,{value:"Module"}))},79912:function(e,t,r){function i(){return new Float32Array(3)}function n(e){const t=new Float32Array(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t}function o(e,t,r){const i=new Float32Array(3);return i[0]=e,i[1]=t,i[2]=r,i}function a(e,t){return new Float32Array(e,t,3)}function s(){return i()}function c(){return o(1,1,1)}function l(){return o(1,0,0)}function u(){return o(0,1,0)}function d(){return o(0,0,1)}r.d(t,{b:function(){return n},c:function(){return i},f:function(){return o}});const h=s(),f=c(),m=l(),p=u(),v=d();Object.freeze(Object.defineProperty({__proto__:null,create:i,clone:n,fromValues:o,createView:a,zeros:s,ones:c,unitX:l,unitY:u,unitZ:d,ZEROS:h,ONES:f,UNIT_X:m,UNIT_Y:p,UNIT_Z:v},Symbol.toStringTag,{value:"Module"}))},19480:function(e,t,r){r.d(t,{x:function(){return n}});var i=r(66581);class n{constructor(e){this._allocator=e,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,i.Y)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const e=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(e,this._items.length),this._itemsPtr=0}_grow(){for(let e=0;e<Math.max(8,Math.min(this._items.length,o));e++)this._items.push(this._allocator())}}const o=1024},56215:function(e,t,r){r.d(t,{Ue:function(){return c},nF:function(){return u},zk:function(){return l}});var i=r(19431),n=r(19480),o=r(6766),a=r(8909),s=r(28888);function c(e){return e?{origin:(0,a.a)(e.origin),vector:(0,a.a)(e.vector)}:{origin:(0,a.c)(),vector:(0,a.c)()}}function l(e,t,r=c()){return(0,o.c)(r.origin,e),(0,o.b)(r.vector,t,e),r}function u(e,t,r){return d(e,t,0,1,r)}function d(e,t,r,n,a){const{vector:c,origin:l}=e,u=(0,o.b)(s.WM.get(),t,l),d=(0,o.e)(c,u)/(0,o.p)(c);return(0,o.g)(a,c,(0,i.uZ)(d,r,n)),(0,o.a)(a,a,e.origin)}(0,a.c)(),(0,a.c)(),new n.x((()=>c()))},97537:function(e,t,r){r.d(t,{JI:function(){return l},Ue:function(){return a},re:function(){return c}});r(7753);var i=r(19480),n=r(6766),o=r(8909);r(28888);function a(e){return e?s((0,o.a)(e.origin),(0,o.a)(e.direction)):s((0,o.c)(),(0,o.c)())}function s(e,t){return{origin:e,direction:t}}function c(e,t){const r=u.get();return r.origin=e,r.direction=t,r}function l(e,t,r){const i=(0,n.e)(e.direction,(0,n.b)(r,t,e.origin));return(0,n.a)(r,e.origin,(0,n.g)(r,e.direction,i)),r}const u=new i.x((()=>a()))},5700:function(e,t,r){r.d(t,{EU:function(){return a}});var i=r(19431),n=r(6766),o=r(8909);function a(e,t){const r=(0,n.e)(e,t)/((0,n.l)(e)*(0,n.l)(t));return-(0,i.ZF)(r)}(0,o.c)(),(0,o.c)()},28888:function(e,t,r){r.d(t,{MP:function(){return m},WM:function(){return f}});var i=r(4745),n=r(66581),o=r(34344),a=r(39100),s=r(61044),c=r(69666),l=r(8909),u=r(1983);class d{constructor(e,t,r){this._itemByteSize=e,this._itemCreate=t,this._buffers=new Array,this._items=new Array,this._itemsPtr=0,this._itemsPerBuffer=Math.ceil(r/this._itemByteSize)}get(){0===this._itemsPtr&&(0,n.Y)((()=>this._reset()));const e=Math.floor(this._itemsPtr/this._itemsPerBuffer);for(;this._buffers.length<=e;){const e=new ArrayBuffer(this._itemsPerBuffer*this._itemByteSize);for(let t=0;t<this._itemsPerBuffer;++t)this._items.push(this._itemCreate(e,t*this._itemByteSize));this._buffers.push(e)}return this._items[this._itemsPtr++]}_reset(){const e=2*(Math.floor(this._itemsPtr/this._itemsPerBuffer)+1);for(;this._buffers.length>e;)this._buffers.pop(),this._items.length=this._buffers.length*this._itemsPerBuffer;this._itemsPtr=0}static createVec2f64(e=h){return new d(16,c.c,e)}static createVec3f64(e=h){return new d(24,l.b,e)}static createVec4f64(e=h){return new d(32,u.a,e)}static createMat3f64(e=h){return new d(72,o.a,e)}static createMat4f64(e=h){return new d(128,a.a,e)}static createQuatf64(e=h){return new d(32,s.c,e)}get test(){return{size:this._buffers.length*this._itemsPerBuffer*this._itemByteSize}}}const h=4*i.Y8.KILOBYTES,f=(d.createVec2f64(),d.createVec3f64()),m=(d.createVec4f64(),d.createMat3f64(),d.createMat4f64());d.createQuatf64()},44883:function(e,t,r){r.d(t,{t:function(){return n}});var i=r(66341);async function n(e,t){const{data:r}=await(0,i["default"])(e,{responseType:"image",...t});return r}},56252:function(e,t,r){r.r(t),r.d(t,{fetch:function(){return Br},gltfToEngineResources:function(){return Ur},parseUrl:function(){return Vr}});var i=r(57989),n=r(61681),o=r(1662),a=r(34344),s=r(24455),c=r(39100),l=r(6766),u=r(8909),d=r(37116),h=r(63338),f=r(86717),m=r(56999),p=r(64122),v=r(91420),g=r(64987),x=r(1731),_=r(19710),T=r(55542);function b(e){if((0,n.Wi)(e))return null;const t=(0,n.pC)(e.offset)?e.offset:T.Z,r=(0,n.pC)(e.rotation)?e.rotation:0,i=(0,n.pC)(e.scale)?e.scale:T.O,a=(0,_.f)(1,0,0,0,1,0,t[0],t[1],1),s=(0,_.f)(Math.cos(r),-Math.sin(r),0,Math.sin(r),Math.cos(r),0,0,0,1),c=(0,_.f)(i[0],0,0,0,i[1],0,0,0,1),l=(0,_.c)();return(0,o.m)(l,s,c),(0,o.m)(l,a,l),l}class S{constructor(e,t,r,i,n){this.name=e,this.stageResources=t,this.lodThreshold=r,this.pivotOffset=i,this.numberOfVertices=n}}var A=r(66341),C=r(67979),w=r(4745),y=r(70375),O=r(13802),M=r(78668),P=r(26139),E=r(44883),R=r(70984),I=r(17993),N=r(15095);class L{constructor(e,t,r,i){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.indices=r,this.position=i,this.center=(0,u.c)(),this._children=void 0,(0,N.hu)(e.length>=1),(0,N.hu)(r.length%this._numIndexPerPrimitive==0),(0,N.hu)(r.length>=e.length*this._numIndexPerPrimitive),(0,N.hu)(3===i.size||4===i.size);const{data:n,size:o}=i,a=e.length;let s=o*r[this._numIndexPerPrimitive*e[0]];H.clear(),H.push(s),this.bbMin=(0,u.f)(n[s],n[s+1],n[s+2]),this.bbMax=(0,u.a)(this.bbMin);for(let l=0;l<a;++l){const t=this._numIndexPerPrimitive*e[l];for(let e=0;e<this._numIndexPerPrimitive;++e){s=o*r[t+e],H.push(s);let i=n[s];this.bbMin[0]=Math.min(i,this.bbMin[0]),this.bbMax[0]=Math.max(i,this.bbMax[0]),i=n[s+1],this.bbMin[1]=Math.min(i,this.bbMin[1]),this.bbMax[1]=Math.max(i,this.bbMax[1]),i=n[s+2],this.bbMin[2]=Math.min(i,this.bbMin[2]),this.bbMax[2]=Math.max(i,this.bbMax[2])}}(0,l.h)(this.center,this.bbMin,this.bbMax,.5),this.radius=.5*Math.max(Math.max(this.bbMax[0]-this.bbMin[0],this.bbMax[1]-this.bbMin[1]),this.bbMax[2]-this.bbMin[2]);let c=this.radius*this.radius;for(let l=0;l<H.length;++l){s=H.getItemAt(l);const e=n[s]-this.center[0],t=n[s+1]-this.center[1],r=n[s+2]-this.center[2],i=e*e+t*t+r*r;if(i<=c)continue;const o=Math.sqrt(i),a=.5*(o-this.radius);this.radius=this.radius+a,c=this.radius*this.radius;const u=a/o;this.center[0]+=e*u,this.center[1]+=t*u,this.center[2]+=r*u}H.clear()}getCenter(){return this.center}getBSRadius(){return this.radius}getBBMin(){return this.bbMin}getBBMax(){return this.bbMax}getChildren(){if(this._children)return this._children;if((0,l.d)(this.bbMin,this.bbMax)>1){const e=(0,l.h)((0,u.c)(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,r=new Uint8Array(t),i=new Array(8);for(let c=0;c<8;++c)i[c]=0;const{data:n,size:o}=this.position;for(let c=0;c<t;++c){let t=0;const a=this._numIndexPerPrimitive*this.primitiveIndices[c];let s=o*this.indices[a],l=n[s],u=n[s+1],d=n[s+2];for(let e=1;e<this._numIndexPerPrimitive;++e){s=o*this.indices[a+e];const t=n[s],r=n[s+1],i=n[s+2];t<l&&(l=t),r<u&&(u=r),i<d&&(d=i)}l<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),r[c]=t,++i[t]}let a=0;for(let c=0;c<8;++c)i[c]>0&&++a;if(a<2)return;const s=new Array(8);for(let c=0;c<8;++c)s[c]=i[c]>0?new Uint32Array(i[c]):void 0;for(let c=0;c<8;++c)i[c]=0;for(let c=0;c<t;++c){const e=r[c];s[e][i[e]++]=this.primitiveIndices[c]}this._children=new Array(8);for(let c=0;c<8;++c)void 0!==s[c]&&(this._children[c]=new L(s[c],this._numIndexPerPrimitive,this.indices,this.position))}return this._children}static prune(){H.prune()}}const H=new I.Z({deallocator:null});var D=r(10107),F=r(95399),z=r(19480),B=r(56215);r(28888);function V(e){return e?{p0:(0,u.a)(e.p0),p1:(0,u.a)(e.p1),p2:(0,u.a)(e.p2)}:{p0:(0,u.c)(),p1:(0,u.c)(),p2:(0,u.c)()}}function U(e,t,r){return(0,l.b)(G,t,e),(0,l.b)(W,r,e),(0,l.l)((0,l.f)(G,G,W))/2}new z.x(B.Ue),new z.x((()=>V()));const G=(0,u.c)(),W=(0,u.c)();function k(e,t,r){if(!e||!t)return!1;const{size:i,data:n}=e;(0,l.s)(r,0,0,0),(0,l.s)(X,0,0,0);let o=0,a=0;for(let s=0;s<t.length-2;s+=3){const e=t[s+0]*i,c=t[s+1]*i,u=t[s+2]*i;(0,l.s)(j,n[e+0],n[e+1],n[e+2]),(0,l.s)(q,n[c+0],n[c+1],n[c+2]),(0,l.s)(J,n[u+0],n[u+1],n[u+2]);const d=U(j,q,J);d?((0,l.a)(j,j,q),(0,l.a)(j,j,J),(0,l.g)(j,j,1/3*d),(0,l.a)(r,r,j),o+=d):((0,l.a)(X,X,j),(0,l.a)(X,X,q),(0,l.a)(X,X,J),a+=3)}return(0!==a||0!==o)&&(0!==o?((0,l.g)(r,r,1/o),!0):0!==a&&((0,l.g)(r,X,1/a),!0))}function $(e,t,r){if(!e||!t)return!1;const{size:i,data:n}=e;(0,l.s)(r,0,0,0);let o=-1,a=0;for(let s=0;s<t.length;s++){const e=t[s]*i;o!==e&&(r[0]+=n[e+0],r[1]+=n[e+1],r[2]+=n[e+2],a++),o=e}return a>1&&(0,l.g)(r,r,1/a),a>0}const j=(0,u.c)(),q=(0,u.c)(),J=(0,u.c)(),X=(0,u.c)();var K=r(71454),Y=r(21414);class Z extends D.c{constructor(e,t=[],r=R.MX.Triangle,i=null,n=-1){super(),this._primitiveType=r,this.objectAndLayerIdColor=i,this.edgeIndicesLength=n,this.type=F.U.Geometry,this._vertexAttributes=new Map,this._indices=new Map,this._boundingInfo=null;for(const[o,a]of e)a&&this._vertexAttributes.set(o,{...a});if(null==t||0===t.length){const e=Q(this._vertexAttributes),t=(0,K.p)(e);this.edgeIndicesLength=this.edgeIndicesLength<0?e:this.edgeIndicesLength;for(const r of this._vertexAttributes.keys())this._indices.set(r,t)}else for(const[o,a]of t)a&&(this._indices.set(o,(0,K.mi)(a)),o===Y.T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._indices.get(o).length:this.edgeIndicesLength))}cloneShallow(){const e=new Z([],void 0,this._primitiveType,this.objectAndLayerIdColor,void 0),{_vertexAttributes:t,_indices:r}=e;return this._vertexAttributes.forEach(((e,r)=>t.set(r,e))),this._indices.forEach(((e,t)=>r.set(t,e))),e.screenToWorldRatio=this.screenToWorldRatio,e._boundingInfo=this._boundingInfo,e}get vertexAttributes(){return this._vertexAttributes}getMutableAttribute(e){const t=this._vertexAttributes.get(e);return t&&!t.exclusive&&(t.data=Array.from(t.data),t.exclusive=!0),t}get indices(){return this._indices}get indexCount(){const e=this._indices.values().next().value;return e?e.length:0}get primitiveType(){return this._primitiveType}get faceCount(){return this.indexCount/3}get boundingInfo(){return(0,n.Wi)(this._boundingInfo)&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return this.primitiveType===R.MX.Triangle?this._computeAttachmentOriginTriangles(e):this._computeAttachmentOriginPoints(e)}_computeAttachmentOriginTriangles(e){const t=this.indices.get(Y.T.POSITION),r=this.vertexAttributes.get(Y.T.POSITION);return k(r,t,e)}_computeAttachmentOriginPoints(e){const t=this.indices.get(Y.T.POSITION),r=this.vertexAttributes.get(Y.T.POSITION);return $(r,t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.indices.get(Y.T.POSITION);if(!e||0===e.length)return null;const t=this.primitiveType===R.MX.Triangle?3:1;(0,N.hu)(e.length%t==0,"Indexing error: "+e.length+" not divisible by "+t);const r=(0,K.p)(e.length/t),i=this.vertexAttributes.get(Y.T.POSITION);return i?new L(r,t,e,i):null}}function Q(e){const t=e.values().next().value;return null==t?0:t.data.length/t.size}var ee=r(27755),te=r(31355),re=r(19431),ie=r(86098),ne=r(3466),oe=r(73401),ae=r(1983),se=r(41383),ce=r(63371),le=r(23410),ue=r(3961),de=r(15176);class he extends le.K{constructor(){super(...arguments),this.color=(0,ae.f)(1,1,1,1)}}function fe(){const e=new ue.kG;return e.include(se.k),e.fragment.uniforms.add([new de.A("tex",(e=>e.texture)),new ce.N("uColor",(e=>e.color))]),e.fragment.code.add(le.H`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:he,build:fe},Symbol.toStringTag,{value:"Module"}));var me=r(36567);function pe(){if((0,n.Wi)(ve)){const e=e=>(0,me.V)(`esri/libs/basisu/${e}`);ve=r.e(1681).then(r.bind(r,21681)).then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return ve}let ve;var ge;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(ge||(ge={}));var xe=r(91907),_e=r(43487),Te=r(62486);let be=null,Se=null;async function Ae(){return(0,n.Wi)(Se)&&(Se=pe(),be=await Se),Se}function Ce(e,t){if((0,n.Wi)(be))return e.byteLength;const r=new be.BasisFile(new Uint8Array(e)),i=Oe(r)?ye(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),i}function we(e,t){if((0,n.Wi)(be))return e.byteLength;const r=new be.KTX2File(new Uint8Array(e)),i=Me(r)?ye(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),i}function ye(e,t,r,i,n){const o=(0,Te.RG)(t?xe.q_.COMPRESSED_RGBA8_ETC2_EAC:xe.q_.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*i*o*a)}function Oe(e){return e.getNumImages()>=1&&!e.isUASTC()}function Me(e){return e.getFaces()>=1&&e.isETC1S()}async function Pe(e,t,r){(0,n.Wi)(be)&&(be=await Ae());const i=new be.BasisFile(new Uint8Array(r));if(!Oe(i))return null;i.startTranscoding();const o=Re(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,r)=>i.transcodeImage(r,0,e,t,0,0)));return i.close(),i.delete(),o}async function Ee(e,t,r){(0,n.Wi)(be)&&(be=await Ae());const i=new be.KTX2File(new Uint8Array(r));if(!Me(i))return null;i.startTranscoding();const o=Re(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,r)=>i.transcodeImage(r,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),o}function Re(e,t,r,i,n,o,a,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[u,d]=c?i?[ge.ETC2_RGBA,xe.q_.COMPRESSED_RGBA8_ETC2_EAC]:[ge.ETC1_RGB,xe.q_.COMPRESSED_RGB8_ETC2]:l?i?[ge.BC3_RGBA,xe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[ge.BC1_RGB,xe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]:[ge.RGBA32,xe.VI.RGBA],h=t.hasMipmap?r:Math.min(1,r),f=[];for(let g=0;g<h;g++)f.push(new Uint8Array(a(g,u))),s(g,u,f[g]);const m=f.length>1,p=m?xe.cw.LINEAR_MIPMAP_LINEAR:xe.cw.LINEAR,v={...t,samplingMode:p,hasMipmap:m,internalFormat:d,width:n,height:o};return new _e.x(e,v,{type:"compressed",levels:f})}const Ie=O.Z.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Ne=542327876,Le=131072,He=4;function De(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Fe(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const ze=De("DXT1"),Be=De("DXT3"),Ve=De("DXT5"),Ue=31,Ge=0,We=1,ke=2,$e=3,je=4,qe=7,Je=20,Xe=21;function Ke(e,t,r){const{textureData:i,internalFormat:o,width:a,height:s}=(0,n.s3)(Ye(r,t.hasMipmap??!1));return t.samplingMode=i.levels.length>1?xe.cw.LINEAR_MIPMAP_LINEAR:xe.cw.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=o,t.width=a,t.height=s,new _e.x(e,t,i)}function Ye(e,t){const r=new Int32Array(e,0,Ue);if(r[Ge]!==Ne)return Ie.error("Invalid magic number in DDS header"),null;if(!(r[Je]&He))return Ie.error("Unsupported format, must contain a FourCC code"),null;const i=r[Xe];let n,o;switch(i){case ze:n=8,o=xe.q_.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Be:n=16,o=xe.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Ve:n=16,o=xe.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ie.error("Unsupported FourCC code:",Fe(i)),null}let a=1,s=r[je],c=r[$e];0==(3&s)&&0==(3&c)||(Ie.warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,u=c;let d,h;r[ke]&Le&&!1!==t&&(a=Math.max(1,r[qe])),1===a||(0,re.wt)(s)&&(0,re.wt)(c)||(Ie.warn("Ignoring mipmaps of non power of two sized compressed texture."),a=1);let f=r[We]+4;const m=[];for(let p=0;p<a;++p)h=(s+3>>2)*(c+3>>2)*n,d=new Uint8Array(e,f,h),m.push(d),f+=h,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:m},internalFormat:o,width:l,height:u}}var Ze,Qe=r(66521),et=r(18567),tt=r(79193);class rt extends D.c{constructor(e,t){super(),this._data=e,this.type=F.U.Texture,this._glTexture=null,this._powerOfTwoStretchInfo=null,this._loadingPromise=null,this._loadingController=null,this.events=new te.Z,this._passParameters=new he,this.params=t||{},this.params.mipmap=!1!==this.params.mipmap,this.params.noUnpackFlip=this.params.noUnpackFlip||!1,this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1,this.params.wrap=this.params.wrap||{s:xe.e8.REPEAT,t:xe.e8.REPEAT},this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||R.CE.STRETCH,this.estimatedTexMemRequired=rt._estimateTexMemRequired(this._data,this.params),this._startPreload()}_startPreload(){const e=this._data;(0,n.Wi)(e)||(e instanceof HTMLVideoElement?this._startPreloadVideoElement(e):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!((0,ne.jc)(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){(0,ne.HK)(e.src)||(0,ne.jc)(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}static _getDataDimensions(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}static _estimateTexMemRequired(e,t){if((0,n.Wi)(e))return 0;if((0,ie.eP)(e)||(0,ie.lq)(e))return t.encoding===rt.KTX2_ENCODING?we(e,t.mipmap):t.encoding===rt.BASIS_ENCODING?Ce(e,t.mipmap):e.byteLength;const{width:r,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?rt._getDataDimensions(e):t;return(t.mipmap?4/3:1)*r*i*(t.components||4)||0}dispose(){this._data=void 0}get width(){return this.params.width}get height(){return this.params.height}_createDescriptor(e){return{target:xe.No.TEXTURE_2D,pixelFormat:xe.VI.RGBA,dataType:xe.Br.UNSIGNED_BYTE,wrapMode:this.params.wrap,flipped:!this.params.noUnpackFlip,samplingMode:this.params.mipmap?xe.cw.LINEAR_MIPMAP_LINEAR:xe.cw.LINEAR,hasMipmap:this.params.mipmap,preMultiplyAlpha:this.params.preMultiplyAlpha,maxAnisotropy:this.params.maxAnisotropy??(this.params.mipmap?e.parameters.maxMaxAnisotropy:1)}}get glTexture(){return this._glTexture}load(e,t){if((0,n.pC)(this._glTexture))return this._glTexture;if((0,n.pC)(this._loadingPromise))return this._loadingPromise;const r=this._data;return(0,n.Wi)(r)?(this._glTexture=new _e.x(e,this._createDescriptor(e),null),this._glTexture):"string"==typeof r?this._loadFromURL(e,t,r):r instanceof Image?this._loadFromImageElement(e,t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(e,t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(e,r,t):((0,ie.eP)(r)||(0,ie.lq)(r))&&this.params.encoding===rt.DDS_ENCODING?(this._data=void 0,this._loadFromDDSData(e,r)):((0,ie.eP)(r)||(0,ie.lq)(r))&&this.params.encoding===rt.KTX2_ENCODING?(this._data=void 0,this._loadFromKTX2(e,r)):((0,ie.eP)(r)||(0,ie.lq)(r))&&this.params.encoding===rt.BASIS_ENCODING?(this._data=void 0,this._loadFromBasis(e,r)):(0,ie.lq)(r)?this._loadFromPixelData(e,r):(0,ie.eP)(r)?this._loadFromPixelData(e,new Uint8Array(r)):null}get requiresFrameUpdates(){return this._data instanceof HTMLVideoElement}frameUpdate(e,t,r){if(!(this._data instanceof HTMLVideoElement)||(0,n.Wi)(this._glTexture))return r;if(this._data.readyState<Ze.HAVE_CURRENT_DATA||r===this._data.currentTime)return r;if((0,n.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:r,vao:i,sourceTexture:n}=this._powerOfTwoStretchInfo;n.setData(this._data),this._drawStretchedTexture(e,t,r,i,n,this._glTexture)}else{const{videoWidth:e,videoHeight:t}=this._data,{width:r,height:i}=this._glTexture.descriptor;e!==r||t!==i?this._glTexture.updateData(0,0,0,Math.min(e,r),Math.min(t,i),this._data):this._glTexture.setData(this._data)}return this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this.params.updateCallback&&this.params.updateCallback(),this._data.currentTime}_loadFromDDSData(e,t){return this._glTexture=Ke(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>Ee(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>Pe(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){(0,N.hu)(this.params.width>0&&this.params.height>0);const r=this._createDescriptor(e);return r.pixelFormat=1===this.params.components?xe.VI.LUMINANCE:3===this.params.components?xe.VI.RGB:xe.VI.RGBA,r.width=this.params.width,r.height=this.params.height,this._glTexture=new _e.x(e,r,t),this._glTexture}_loadFromURL(e,t,r){return this._loadAsync((async i=>{const n=await(0,E.t)(r,{signal:i});return(0,M.k_)(i),this._loadFromImage(e,n,t)}))}_loadFromImageElement(e,t,r){return r.complete?this._loadFromImage(e,r,t):this._loadAsync((async i=>{const n=await(0,oe.fY)(r,r.src,!1,i);return(0,M.k_)(i),this._loadFromImage(e,n,t)}))}_loadFromVideoElement(e,t,r){return r.readyState>=Ze.HAVE_CURRENT_DATA?this._loadFromImage(e,r,t):this._loadFromVideoElementAsync(e,t,r)}_loadFromVideoElementAsync(e,t,r){return this._loadAsync((i=>new Promise(((o,a)=>{const s=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),(0,n.hw)(u)},c=()=>{r.readyState>=Ze.HAVE_CURRENT_DATA&&(s(),o(this._loadFromImage(e,r,t)))},l=e=>{s(),a(e||new y.Z("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const u=(0,M.fu)(i,(()=>l((0,M.zE)())))}))))}_loadFromImage(e,t,r){const i=rt._getDataDimensions(t);this.params.width=i.width,this.params.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this.params.components?xe.VI.RGB:xe.VI.RGBA,!this._requiresPowerOfTwo(e,n)||(0,re.wt)(i.width)&&(0,re.wt)(i.height)?(n.width=i.width,n.height=i.height,this._glTexture=new _e.x(e,n,t),this._glTexture):(this._glTexture=this._makePowerOfTwoTexture(e,t,i,n,r),this._glTexture)}_loadAsync(e){const t=new AbortController;this._loadingController=t;const r=e(t.signal);this._loadingPromise=r;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===r&&(this._loadingPromise=null)};return r.then(i,i),r}_requiresPowerOfTwo(e,t){const r=xe.e8.CLAMP_TO_EDGE,i="number"==typeof t.wrapMode?t.wrapMode===r:t.wrapMode.s===r&&t.wrapMode.t===r;return!(0,tt.Z)(e.gl)&&(t.hasMipmap||!i)}_makePowerOfTwoTexture(e,t,r,i,n){const{width:o,height:a}=r,s=(0,re.Sf)(o),c=(0,re.Sf)(a);let l;switch(i.width=s,i.height=c,this.params.powerOfTwoResizeMode){case R.CE.PAD:i.textureCoordinateScaleFactor=[o/s,a/c],l=new _e.x(e,i),l.updateData(0,0,0,o,a,t);break;case R.CE.STRETCH:case null:case void 0:l=this._stretchToPowerOfTwo(e,t,i,n());break;default:(0,ee.Bg)(this.params.powerOfTwoResizeMode)}return i.hasMipmap&&l.generateMipmap(),l}_stretchToPowerOfTwo(e,t,r,i){const n=new _e.x(e,r),o=new et.X(e,{colorTarget:xe.Lm.TEXTURE,depthStencilTarget:xe.OU.NONE},n),a=new _e.x(e,{target:xe.No.TEXTURE_2D,pixelFormat:r.pixelFormat,dataType:xe.Br.UNSIGNED_BYTE,wrapMode:xe.e8.CLAMP_TO_EDGE,samplingMode:xe.cw.LINEAR,flipped:!!r.flipped,maxAnisotropy:8,preMultiplyAlpha:r.preMultiplyAlpha},t),s=(0,Qe.ow)(e),c=e.getBoundFramebufferObject();return this._drawStretchedTexture(e,i,o,s,a,n),this.requiresFrameUpdates?this._powerOfTwoStretchInfo={vao:s,sourceTexture:a,framebuffer:o}:(s.dispose(!0),a.dispose(),o.detachColorTexture(),o.dispose()),e.bindFramebuffer(c),n}_drawStretchedTexture(e,t,r,i,n,o){this._passParameters.texture=n,e.bindFramebuffer(r);const a=e.getViewport();e.setViewport(0,0,o.descriptor.width,o.descriptor.height),e.bindTechnique(t,this._passParameters,null),e.bindVAO(i),e.drawArrays(xe.MX.TRIANGLE_STRIP,0,(0,Te._V)(i,"geometry")),e.bindFramebuffer(null),e.setViewport(a.x,a.y,a.width,a.height),this._passParameters.texture=null}unload(){if((0,n.pC)(this._powerOfTwoStretchInfo)){const{framebuffer:e,vao:t,sourceTexture:r}=this._powerOfTwoStretchInfo;t.dispose(!0),r.dispose(),e.dispose(),this._glTexture=null,this._powerOfTwoStretchInfo=null}if((0,n.pC)(this._glTexture)&&(this._glTexture.dispose(),this._glTexture=null),(0,n.pC)(this._loadingController)){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}rt.DDS_ENCODING="image/vnd-ms.dds",rt.KTX2_ENCODING="image/ktx2",rt.BASIS_ENCODING="image/x.basis",function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(Ze||(Ze={}));var it,nt=r(39994),ot=r(65684),at=r(44685),st=r(35031),ct=r(27125),lt=r(2833),ut=r(3864),dt=r(66865),ht=r(7358),ft=r(12045);!function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.TRANSPARENT_MATERIAL=3]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_TERRAIN=4]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=5]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=6]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=7]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=8]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=9]="OCCLUSION_PIXELS",e[e.POSTPROCESSING_ENVIRONMENT_OPAQUE=10]="POSTPROCESSING_ENVIRONMENT_OPAQUE",e[e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT=11]="POSTPROCESSING_ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=12]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=13]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=14]="HUD_MATERIAL",e[e.LABEL_MATERIAL=15]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=16]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=17]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=18]="DRAPED_MATERIAL",e[e.DRAPED_WATER=19]="DRAPED_WATER",e[e.VOXEL=20]="VOXEL",e[e.MAX_SLOTS=21]="MAX_SLOTS"}(it||(it={}));var mt=r(10663),pt=r(61044),vt=r(79912),gt=r(42116);class xt{constructor(e=0){this.offset=e,this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const i=e+this.localOrigin[0],n=t+this.localOrigin[1],o=r+this.localOrigin[2],a=this.offset/Math.sqrt(i*i+n*n+o*o);return this.tmpVertex[0]=e+i*a,this.tmpVertex[1]=t+n*a,this.tmpVertex[2]=r+o*a,this.tmpVertex}applyToAabb(e){for(let n=0;n<3;++n)_t[n]=e[0+n]+this.localOrigin[n],Tt[n]=e[3+n]+this.localOrigin[n],bt[n]=_t[n];const t=this.applyToVertex(_t[0],_t[1],_t[2]);for(let n=0;n<3;++n)e[n]=t[n],e[n+3]=t[n];const r=t=>{const r=this.applyToVertex(t[0],t[1],t[2]);for(let i=0;i<3;++i)e[i+0]=Math.min(e[i+0],r[i]),e[i+3]=Math.max(e[i+3],r[i])};for(let n=1;n<8;++n){for(let e=0;e<3;++e)bt[e]=0==(n&1<<e)?_t[e]:Tt[e];r(bt)}let i=0;for(let n=0;n<3;++n)_t[n]*Tt[n]<0&&(i|=1<<n);if(0!==i&&7!==i)for(let n=0;n<8;++n)if(0==(i&n)){for(let e=0;e<3;++e)i[e]?bt[e]=0:bt[e]=0!=(n&1<<e)?_t[e]:Tt[e];r(bt)}for(let n=0;n<3;++n)e[n+0]-=this.localOrigin[n],e[n+3]-=this.localOrigin[n];return e}}const _t=(0,u.c)(),Tt=(0,u.c)(),bt=(0,u.c)();class St{constructor(e=0){this.componentLocalOriginLength=0,this._tmpVertex=(0,u.c)(),this._mbs=(0,gt.c)(),this._obb={center:(0,u.c)(),halfSize:(0,vt.c)(),quaternion:null},this._totalOffset=0,this._offset=0,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2])}applyToVertex(e,t,r){const i=e,n=t,o=r+this.componentLocalOriginLength,a=this._totalOffset/Math.sqrt(i*i+n*n+o*o);return this._tmpVertex[0]=e+i*a,this._tmpVertex[1]=t+n*a,this._tmpVertex[2]=r+o*a,this._tmpVertex}applyToAabb(e){const t=e[0],r=e[1],i=e[2]+this.componentLocalOriginLength,n=e[3],o=e[4],a=e[5]+this.componentLocalOriginLength,s=t*n<0?0:Math.min(Math.abs(t),Math.abs(n)),c=r*o<0?0:Math.min(Math.abs(r),Math.abs(o)),l=i*a<0?0:Math.min(Math.abs(i),Math.abs(a)),u=Math.sqrt(s*s+c*c+l*l);if(u<this._totalOffset)return e[0]-=t<0?this._totalOffset:0,e[1]-=r<0?this._totalOffset:0,e[2]-=i<0?this._totalOffset:0,e[3]+=n>0?this._totalOffset:0,e[4]+=o>0?this._totalOffset:0,e[5]+=a>0?this._totalOffset:0,e;const d=Math.max(Math.abs(t),Math.abs(n)),h=Math.max(Math.abs(r),Math.abs(o)),f=Math.max(Math.abs(i),Math.abs(a)),m=Math.sqrt(d*d+h*h+f*f),p=this._totalOffset/m,v=this._totalOffset/u;return e[0]+=t*(t>0?p:v),e[1]+=r*(r>0?p:v),e[2]+=i*(i>0?p:v),e[3]+=n*(n<0?p:v),e[4]+=o*(o<0?p:v),e[5]+=a*(a<0?p:v),e}applyToMbs(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this._totalOffset/t;return this._mbs[0]=e[0]+e[0]*r,this._mbs[1]=e[1]+e[1]*r,this._mbs[2]=e[2]+e[2]*r,this._mbs[3]=e[3]+e[3]*this._totalOffset/t,this._mbs}applyToObb(e){const t=e.center,r=this._totalOffset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);this._obb.center[0]=t[0]+t[0]*r,this._obb.center[1]=t[1]+t[1]*r,this._obb.center[2]=t[2]+t[2]*r,(0,l.q)(this._obb.halfSize,e.halfSize,e.quaternion),(0,l.a)(this._obb.halfSize,this._obb.halfSize,e.center);const i=this._totalOffset/Math.sqrt(this._obb.halfSize[0]*this._obb.halfSize[0]+this._obb.halfSize[1]*this._obb.halfSize[1]+this._obb.halfSize[2]*this._obb.halfSize[2]);return this._obb.halfSize[0]+=this._obb.halfSize[0]*i,this._obb.halfSize[1]+=this._obb.halfSize[1]*i,this._obb.halfSize[2]+=this._obb.halfSize[2]*i,(0,l.b)(this._obb.halfSize,this._obb.halfSize,e.center),(0,mt.c)(yt,e.quaternion),(0,l.q)(this._obb.halfSize,this._obb.halfSize,yt),this._obb.halfSize[0]*=this._obb.halfSize[0]<0?-1:1,this._obb.halfSize[1]*=this._obb.halfSize[1]<0?-1:1,this._obb.halfSize[2]*=this._obb.halfSize[2]<0?-1:1,this._obb.quaternion=e.quaternion,this._obb}}class At{constructor(e=0){this.offset=e,this.sphere=(0,gt.c)(),this.tmpVertex=(0,u.c)()}applyToVertex(e,t,r){const i=this.objectTransform.transform;let n=i[0]*e+i[4]*t+i[8]*r+i[12],o=i[1]*e+i[5]*t+i[9]*r+i[13],a=i[2]*e+i[6]*t+i[10]*r+i[14];const s=this.offset/Math.sqrt(n*n+o*o+a*a);n+=n*s,o+=o*s,a+=a*s;const c=this.objectTransform.inverse;return this.tmpVertex[0]=c[0]*n+c[4]*o+c[8]*a+c[12],this.tmpVertex[1]=c[1]*n+c[5]*o+c[9]*a+c[13],this.tmpVertex[2]=c[2]*n+c[6]*o+c[10]*a+c[14],this.tmpVertex}applyToMinMax(e,t){const r=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*r,e[1]+=e[1]*r,e[2]+=e[2]*r;const i=this.offset/Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2]);t[0]+=t[0]*i,t[1]+=t[1]*i,t[2]+=t[2]*i}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const r=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*r,e[4]+=e[4]*r,e[5]+=e[5]*r,e}applyToBoundingSphere(e){const t=Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]),r=this.offset/t;return this.sphere[0]=e[0]+e[0]*r,this.sphere[1]=e[1]+e[1]*r,this.sphere[2]=e[2]+e[2]*r,this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const Ct=new At;function wt(e){return(0,n.pC)(e)?(Ct.offset=e,Ct):null}new St;new xt;const yt=(0,pt.a)();function Ot(e,t,r,i){const n=r.typedBuffer,o=r.typedBufferStride,a=e.length;i*=o;for(let s=0;s<a;++s){const r=2*e[s];n[i]=t[r],n[i+1]=t[r+1],i+=o}}function Mt(e,t,r,i,n){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,null==n||1===n)for(let c=0;c<s;++c){const r=3*e[c];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=a}else for(let c=0;c<s;++c){const r=3*e[c];for(let e=0;e<n;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],i+=a}}function Pt(e,t,r,i,n=1){const o=r.typedBuffer,a=r.typedBufferStride,s=e.length;if(i*=a,1===n)for(let c=0;c<s;++c){const r=4*e[c];o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=a}else for(let c=0;c<s;++c){const r=4*e[c];for(let e=0;e<n;++e)o[i]=t[r],o[i+1]=t[r+1],o[i+2]=t[r+2],o[i+3]=t[r+3],i+=a}}function Et(e,t,r,i,n,o=1){if(!r)return void Mt(e,t,i,n,o);const a=i.typedBuffer,s=i.typedBufferStride,c=e.length,l=r[0],u=r[1],d=r[2],h=r[4],f=r[5],m=r[6],p=r[8],v=r[9],g=r[10],x=r[12],_=r[13],T=r[14];n*=s;let b=0,S=0,A=0;const C=Dt(r)?e=>{b=t[e]+x,S=t[e+1]+_,A=t[e+2]+T}:e=>{const r=t[e],i=t[e+1],n=t[e+2];b=l*r+h*i+p*n+x,S=u*r+f*i+v*n+_,A=d*r+m*i+g*n+T};if(1===o)for(let w=0;w<c;++w)C(3*e[w]),a[n]=b,a[n+1]=S,a[n+2]=A,n+=s;else for(let w=0;w<c;++w){C(3*e[w]);for(let e=0;e<o;++e)a[n]=b,a[n+1]=S,a[n+2]=A,n+=s}}function Rt(e,t,r,i,n,o=1){if(!r)return void Mt(e,t,i,n,o);const a=r,c=i.typedBuffer,l=i.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],m=a[4],p=a[5],v=a[6],g=a[8],x=a[9],_=a[10],T=!(0,s.x)(a),b=1e-6,S=1-b;n*=l;let A=0,C=0,w=0;const y=Dt(a)?e=>{A=t[e],C=t[e+1],w=t[e+2]}:e=>{const r=t[e],i=t[e+1],n=t[e+2];A=d*r+m*i+g*n,C=h*r+p*i+x*n,w=f*r+v*i+_*n};if(1===o)if(T)for(let s=0;s<u;++s){y(3*e[s]);const t=A*A+C*C+w*w;if(t<S&&t>b){const e=1/Math.sqrt(t);c[n]=A*e,c[n+1]=C*e,c[n+2]=w*e}else c[n]=A,c[n+1]=C,c[n+2]=w;n+=l}else for(let s=0;s<u;++s)y(3*e[s]),c[n]=A,c[n+1]=C,c[n+2]=w,n+=l;else for(let s=0;s<u;++s){if(y(3*e[s]),T){const e=A*A+C*C+w*w;if(e<S&&e>b){const t=1/Math.sqrt(e);A*=t,C*=t,w*=t}}for(let e=0;e<o;++e)c[n]=A,c[n+1]=C,c[n+2]=w,n+=l}}function It(e,t,r,i,n,o=1){if(!r)return void Pt(e,t,i,n,o);const a=r,c=i.typedBuffer,l=i.typedBufferStride,u=e.length,d=a[0],h=a[1],f=a[2],m=a[4],p=a[5],v=a[6],g=a[8],x=a[9],_=a[10],T=!(0,s.x)(a),b=1e-6,S=1-b;if(n*=l,1===o)for(let s=0;s<u;++s){const r=4*e[s],i=t[r],o=t[r+1],a=t[r+2],u=t[r+3];let A=d*i+m*o+g*a,C=h*i+p*o+x*a,w=f*i+v*o+_*a;if(T){const e=A*A+C*C+w*w;if(e<S&&e>b){const t=1/Math.sqrt(e);A*=t,C*=t,w*=t}}c[n]=A,c[n+1]=C,c[n+2]=w,c[n+3]=u,n+=l}else for(let s=0;s<u;++s){const r=4*e[s],i=t[r],a=t[r+1],u=t[r+2],A=t[r+3];let C=d*i+m*a+g*u,w=h*i+p*a+x*u,y=f*i+v*a+_*u;if(T){const e=C*C+w*w+y*y;if(e<S&&e>b){const t=1/Math.sqrt(e);C*=t,w*=t,y*=t}}for(let e=0;e<o;++e)c[n]=C,c[n+1]=w,c[n+2]=y,c[n+3]=A,n+=l}}function Nt(e,t,r,i,n,o=1){const a=i.typedBuffer,s=i.typedBufferStride,c=e.length;if(n*=s,r!==t.length||4!==r)if(1!==o)if(4!==r)for(let l=0;l<c;++l){const r=3*e[l];for(let e=0;e<o;++e)a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=255,n+=s}else for(let l=0;l<c;++l){const r=4*e[l];for(let e=0;e<o;++e)a[n]=t[r],a[n+1]=t[r+1],a[n+2]=t[r+2],a[n+3]=t[r+3],n+=s}else{if(4===r){for(let r=0;r<c;++r){const i=4*e[r];a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=t[i+3],n+=s}return}for(let r=0;r<c;++r){const i=3*e[r];a[n]=t[i],a[n+1]=t[i+1],a[n+2]=t[i+2],a[n+3]=255,n+=s}}else{a[n]=t[0],a[n+1]=t[1],a[n+2]=t[2],a[n+3]=t[3];const e=new Uint32Array(i.typedBuffer.buffer,i.start),r=s/4,l=e[n/=4];n+=r;const u=c*o;for(let t=1;t<u;++t)e[n]=l,n+=r}}function Lt(e,t,r,i,n=1){const o=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let s=0;s<r;++s)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a;else for(let s=0;s<r;++s)for(let t=0;t<n;++t)o[i]=e[0],o[i+1]=e[1],o[i+2]=e[2],o[i+3]=e[3],i+=a}function Ht(e,t,r,i,o,a){for(const s of t.fieldNames){const t=e.vertexAttributes.get(s),c=e.indices.get(s);if(t&&c)switch(s){case Y.T.POSITION:{(0,N.hu)(3===t.size);const e=o.getField(s,h.ct);e&&Et(c,t.data,r,e,a);break}case Y.T.NORMAL:{(0,N.hu)(3===t.size);const e=o.getField(s,h.ct);e&&Rt(c,t.data,i,e,a);break}case Y.T.UV0:{(0,N.hu)(2===t.size);const e=o.getField(s,h.Eu);e&&Ot(c,t.data,e,a);break}case Y.T.COLOR:{(0,N.hu)(3===t.size||4===t.size);const e=o.getField(s,h.mc);e&&Nt(c,t.data,t.size,e,a);break}case Y.T.SYMBOLCOLOR:{(0,N.hu)(3===t.size||4===t.size);const e=o.getField(s,h.mc);e&&Nt(c,t.data,t.size,e,a);break}case Y.T.TANGENT:{(0,N.hu)(4===t.size);const e=o.getField(s,h.ek);e&&It(c,t.data,i,e,a);break}}else if(s===Y.T.OBJECTANDLAYERIDCOLOR&&(0,n.pC)(e.objectAndLayerIdColor)&&4===e.objectAndLayerIdColor.length){const t=e.indices.get(Y.T.POSITION);if(t){const r=t.length,i=o.getField(s,h.mc);Lt(e.objectAndLayerIdColor,i,r,a)}}}}function Dt(e){return 1===e[0]&&0===e[1]&&0===e[2]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[8]&&0===e[9]&&1===e[10]}var Ft=r(16318),zt=r(82082),Bt=r(78549),Vt=r(44391),Ut=r(5331),Gt=r(9969),Wt=r(52756),kt=r(5474),$t=r(95194);xe.wb.LESS,xe.wb.ALWAYS;const jt={mask:255},qt={function:{func:xe.wb.ALWAYS,ref:R.hU.OutlineVisualElementMask,mask:R.hU.OutlineVisualElementMask},operation:{fail:xe.xS.KEEP,zFail:xe.xS.KEEP,zPass:xe.xS.ZERO}},Jt={function:{func:xe.wb.ALWAYS,ref:R.hU.OutlineVisualElementMask,mask:R.hU.OutlineVisualElementMask},operation:{fail:xe.xS.KEEP,zFail:xe.xS.KEEP,zPass:xe.xS.REPLACE}};xe.wb.EQUAL,R.hU.OutlineVisualElementMask,R.hU.OutlineVisualElementMask,xe.xS.KEEP,xe.xS.KEEP,xe.xS.KEEP,xe.wb.NOTEQUAL,R.hU.OutlineVisualElementMask,R.hU.OutlineVisualElementMask,xe.xS.KEEP,xe.xS.KEEP,xe.xS.KEEP;var Xt=r(42842),Kt=r(45584),Yt=r(36172),Zt=r(17346);class Qt extends Bt.d4{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=(0,u.f)(0,1,.5),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=R.Vr.Back,this.emissiveFactor=(0,u.f)(0,0,0),this.instancedDoublePrecision=!1,this.normals="default",this.receiveSSAO=!0,this.receiveShadows=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=(0,u.f)(.2,.2,.2),this.diffuse=(0,u.f)(.8,.8,.8),this.externalColor=(0,ae.f)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,u.c)(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSizeEnabled=!1,this.vvSizeMinSize=[1,1,1],this.vvSizeMaxSize=[100,100,100],this.vvSizeOffset=[0,0,0],this.vvSizeFactor=[1,1,1],this.vvSizeValue=[1,1,1],this.vvColorEnabled=!1,this.vvColorValues=[0,0,0,0,0,0,0,0],this.vvColorColors=[1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0],this.vvSymbolAnchor=[0,0,0],this.vvSymbolRotationMatrix=(0,a.c)(),this.vvOpacityEnabled=!1,this.vvOpacityValues=[],this.vvOpacityOpacities=[],this.transparent=!1,this.writeDepth=!0,this.customDepthTest=R.Gv.Less,this.textureAlphaMode=R.JJ.Blend,this.textureAlphaCutoff=Vt.F,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=ht.yD.Occlude}}class er extends Wt.A{initializeConfiguration(e,t){t.hasWebGL2Context=e.rctx.type===Yt.zO.WEBGL2,t.spherical=e.viewingMode===ot.JY.Global,t.doublePrecisionRequiresObfuscation=(0,Ut.I)(e.rctx),t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?zt.N.Default:zt.N.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,er.shader)}_initializeProgram(e,t){return new $t.$(e.rctx,t.get().build(this.configuration),kt.i)}_convertDepthTestFunction(e){return e===R.Gv.Lequal?xe.wb.LEQUAL:xe.wb.LESS}_makePipeline(e,t){const r=this.configuration,i=e===Xt.A.NONE,n=e===Xt.A.FrontFace;return(0,Zt.sm)({blending:r.output!==st.H.Color&&r.output!==st.H.Alpha||!r.transparent?null:i?ft.wu:(0,ft.j7)(e),culling:tr(r)&&(0,Zt.zp)(r.cullFace),depthTest:{func:(0,ft.Bh)(e,this._convertDepthTestFunction(r.customDepthTest))},depthWrite:i||n?r.writeDepth&&Zt.LZ:null,colorWrite:Zt.BK,stencilWrite:r.hasOccludees?jt:null,stencilTest:r.hasOccludees?t?Jt:qt:null,polygonOffset:i||n?null:(0,ft.je)(r.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}function tr(e){return e.cullFace!==R.Vr.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}er.shader=new Gt.J(Kt.D,(()=>r.e(1180).then(r.bind(r,1180))));var rr=r(36663),ir=r(67197),nr=r(40017);class or extends ir.m{constructor(){super(...arguments),this.hasWebGL2Context=!1}}(0,rr._)([(0,ir.o)({constValue:!0})],or.prototype,"hasSliceHighlight",void 0),(0,rr._)([(0,ir.o)({constValue:!1})],or.prototype,"hasSliceInVertexProgram",void 0),(0,rr._)([(0,ir.o)({constValue:!1})],or.prototype,"instancedDoublePrecision",void 0),(0,rr._)([(0,ir.o)({constValue:!1})],or.prototype,"useLegacyTerrainShading",void 0),(0,rr._)([(0,ir.o)({constValue:!1})],or.prototype,"hasModelTransformation",void 0),(0,rr._)([(0,ir.o)({constValue:nr.P.Pass})],or.prototype,"pbrTextureBindType",void 0),(0,rr._)([(0,ir.o)()],or.prototype,"hasWebGL2Context",void 0);class ar extends or{constructor(){super(...arguments),this.output=st.H.Color,this.alphaDiscardMode=R.JJ.Opaque,this.doubleSidedMode=lt.q.None,this.pbrMode=ut.f7.Disabled,this.cullFace=R.Vr.None,this.transparencyPassType=Xt.A.NONE,this.normalType=ct.h.Attribute,this.textureCoordinateType=zt.N.None,this.customDepthTest=R.Gv.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasMultipassTerrain=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}(0,rr._)([(0,ir.o)({count:st.H.COUNT})],ar.prototype,"output",void 0),(0,rr._)([(0,ir.o)({count:R.JJ.COUNT})],ar.prototype,"alphaDiscardMode",void 0),(0,rr._)([(0,ir.o)({count:lt.q.COUNT})],ar.prototype,"doubleSidedMode",void 0),(0,rr._)([(0,ir.o)({count:ut.f7.COUNT})],ar.prototype,"pbrMode",void 0),(0,rr._)([(0,ir.o)({count:R.Vr.COUNT})],ar.prototype,"cullFace",void 0),(0,rr._)([(0,ir.o)({count:Xt.A.COUNT})],ar.prototype,"transparencyPassType",void 0),(0,rr._)([(0,ir.o)({count:ct.h.COUNT})],ar.prototype,"normalType",void 0),(0,rr._)([(0,ir.o)({count:zt.N.COUNT})],ar.prototype,"textureCoordinateType",void 0),(0,rr._)([(0,ir.o)({count:R.Gv.COUNT})],ar.prototype,"customDepthTest",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"spherical",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasVertexColors",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasSymbolColors",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasVerticalOffset",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasSlicePlane",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasSliceHighlight",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasColorTexture",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasMetallicRoughnessTexture",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasEmissionTexture",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasOcclusionTexture",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasNormalTexture",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasScreenSizePerspective",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasVertexTangents",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasOccludees",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasMultipassTerrain",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasModelTransformation",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"offsetBackfaces",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"vvSize",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"vvColor",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"receiveShadows",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"receiveAmbientOcclusion",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"textureAlphaPremultiplied",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"instanced",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"instancedColor",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"objectAndLayerIdColorInstanced",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"instancedDoublePrecision",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"doublePrecisionRequiresObfuscation",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"writeDepth",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"transparent",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"enableOffset",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"cullAboveGround",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"snowCover",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasColorTextureTransform",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasEmissionTextureTransform",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasNormalTextureTransform",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasOcclusionTextureTransform",void 0),(0,rr._)([(0,ir.o)()],ar.prototype,"hasMetallicRoughnessTextureTransform",void 0),(0,rr._)([(0,ir.o)({constValue:!0})],ar.prototype,"hasVvInstancing",void 0),(0,rr._)([(0,ir.o)({constValue:!1})],ar.prototype,"useCustomDTRExponentForWater",void 0),(0,rr._)([(0,ir.o)({constValue:!1})],ar.prototype,"supportsTextureAtlas",void 0),(0,rr._)([(0,ir.o)({constValue:!0})],ar.prototype,"useFillLights",void 0);var sr=r(60926);class cr extends er{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=ct.h.Attribute,t.doubleSidedMode=lt.q.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,cr.shader)}}cr.shader=new Gt.J(sr.R,(()=>r.e(6353).then(r.bind(r,56353))));class lr extends ht.F5{constructor(e){super(e,hr),this.supportsEdges=!0,this._configuration=new ar,this._vertexBufferLayout=mr(this.parameters),this._instanceBufferLayout=e.instanced?pr(this.parameters):null}isVisibleForOutput(e){return e!==st.H.Shadow&&e!==st.H.ShadowExludeHighlight&&e!==st.H.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{instanced:t,hasVertexColors:r,hasSymbolColors:i,vvColorEnabled:o}=e,a=(0,n.pC)(t)&&t.includes("color"),s="replace"===e.colorMixMode,c=e.opacity>0,l=e.externalColor&&e.externalColor[3]>0;return r&&(a||o||i)?!!s||c:r?s?l:c:a||o||i?!!s||c:s?l:c}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=!!this.parameters.instanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=this.parameters.vvSizeEnabled,this._configuration.hasVerticalOffset=(0,n.pC)(this.parameters.verticalOffset),this._configuration.hasScreenSizePerspective=(0,n.pC)(this.parameters.screenSizePerspective),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType="screenDerivative"===this.parameters.normals?ct.h.ScreenDerivative:ct.h.Attribute,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,(0,n.pC)(this.parameters.customDepthTest)&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?R.Vr.None:this.parameters.cullFace,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=(0,n.pC)(this.parameters.modelTransformation),e!==st.H.Color&&e!==st.H.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=lt.q.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?lt.q.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?lt.q.WindingOrder:lt.q.None,this._configuration.instancedColor=(0,n.pC)(this.parameters.instanced)&&this.parameters.instanced.includes("color"),this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=!!t.ssaoHelper.ready&&this.parameters.receiveSSAO,this._configuration.vvColor=this.parameters.vvColorEnabled,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?ut.f7.Schematic:ut.f7.Normal:ut.f7.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<ft.ve,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return(0,n.pC)(e.weather)&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,r,i,o,a,s){if((0,n.pC)(this.parameters.verticalOffset)){const e=i.camera;(0,l.s)(br,r[12],r[13],r[14]);let t=null;switch(i.viewingMode){case ot.JY.Global:t=(0,l.n)(_r,br);break;case ot.JY.Local:t=(0,l.c)(_r,xr)}let n=0;const s=(0,l.b)(Sr,br,e.eye),c=(0,l.l)(s),u=(0,l.g)(s,s,1/c);let d=null;this.parameters.screenSizePerspective&&(d=(0,l.e)(t,u)),n+=(0,Ft.Hx)(e,c,this.parameters.verticalOffset,d,this.parameters.screenSizePerspective),(0,l.g)(t,t,n),(0,l.t)(Tr,t,i.transform.inverseRotation),o=(0,l.b)(vr,o,Tr),a=(0,l.b)(gr,a,Tr)}(0,Ft.Bw)(e,t,i,o,a,wt(i.verticalOffset),s)}requiresSlot(e,t){return(t===st.H.Color||t===st.H.Alpha||t===st.H.Depth||t===st.H.Normal||t===st.H.Shadow||t===st.H.ShadowHighlight||t===st.H.ShadowExludeHighlight||t===st.H.Highlight||t===st.H.ObjectAndLayerIdColor)&&(e===(this.parameters.transparent?this.parameters.writeDepth?it.TRANSPARENT_MATERIAL:it.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:it.OPAQUE_MATERIAL)||e===it.DRAPED_MATERIAL||t===st.H.ObjectAndLayerIdColor)}createGLMaterial(e){return new ur(e)}createBufferWriter(){return new fr(this._vertexBufferLayout,this._instanceBufferLayout)}}class ur extends dt.F{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){const t=this._material.parameters;this.updateTexture(t.textureId);const r=e.camera.viewInverseTransposeMatrix;return(0,l.s)(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?cr:er,e)}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){return this._output!==st.H.Color&&this._output!==st.H.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e)),this._updateParameters(e)}}class dr extends Qt{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const hr=new dr;class fr{constructor(e,t){this.vertexBufferLayout=e,this.instanceBufferLayout=t}allocate(e){return this.vertexBufferLayout.createBuffer(e)}elementCount(e){return e.indices.get(Y.T.POSITION).length}write(e,t,r,i,n){Ht(r,this.vertexBufferLayout,e,t,i,n)}}function mr(e){const t=e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId,r=(0,at.U$)().vec3f(Y.T.POSITION).vec3f(Y.T.NORMAL);return e.hasVertexTangents&&r.vec4f(Y.T.TANGENT),t&&r.vec2f(Y.T.UV0),e.hasVertexColors&&r.vec4u8(Y.T.COLOR),e.hasSymbolColors&&r.vec4u8(Y.T.SYMBOLCOLOR),(0,nt.Z)("enable-feature:objectAndLayerId-rendering")&&r.vec4u8(Y.T.OBJECTANDLAYERIDCOLOR),r}function pr(e){let t=(0,at.U$)();return t=e.instancedDoublePrecision?t.vec3f(Y.T.MODELORIGINHI).vec3f(Y.T.MODELORIGINLO).mat3f(Y.T.MODEL).mat3f(Y.T.MODELNORMAL):t.mat4f(Y.T.MODEL).mat4f(Y.T.MODELNORMAL),(0,n.pC)(e.instanced)&&e.instanced.includes("color")&&(t=t.vec4f(Y.T.INSTANCECOLOR)),(0,n.pC)(e.instanced)&&e.instanced.includes("featureAttribute")&&(t=t.vec4f(Y.T.INSTANCEFEATUREATTRIBUTE)),(0,n.pC)(e.instanced)&&e.instanced.includes("objectAndLayerIdColor")&&(t=t.vec4u8(Y.T.OBJECTANDLAYERIDCOLOR_INSTANCED)),t}const vr=(0,u.c)(),gr=(0,u.c)(),xr=(0,u.f)(0,0,1),_r=(0,u.c)(),Tr=(0,u.c)(),br=(0,u.c)(),Sr=(0,u.c)(),Ar=O.Z.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Cr(e,t){const r=await wr(e,t),i=await Rr(r.textureDefinitions,t);let n=0;for(const o in i)if(i.hasOwnProperty(o)){const e=i[o];n+=e?.image?e.image.width*e.image.height*4:0}return{resource:r,textures:i,size:n+(0,w.Ul)(r)}}async function wr(e,t){const r=(0,n.pC)(t)&&t.streamDataRequester;if(r)return yr(e,r,t);const i=await(0,C.q6)((0,A["default"])(e,(0,n.Wg)(t)));if(!0===i.ok)return i.value.data;(0,M.r9)(i.error),Or(i.error)}async function yr(e,t,r){const i=await(0,C.q6)(t.request(e,"json",r));if(!0===i.ok)return i.value;(0,M.r9)(i.error),Or(i.error.details.url)}function Or(e){throw new y.Z("",`Request for object resource failed: ${e}`)}function Mr(e){const t=e.params,r=t.topology;let i=!0;switch(t.vertexAttributes||(Ar.warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const r in t.vertexAttributes){const t=e[r];t&&t.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Ar.warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Ar.warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Ar.warn(`Indexed geometry does not specify face indices for '${r}' attribute`),i=!1)}}else Ar.warn("Indexed geometries must specify faces"),i=!1;break}default:Ar.warn(`Unsupported topology '${r}'`),i=!1}e.params.material||(Ar.warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const o in n)n[o].values||(Ar.warn("Geometries with externally defined attributes are not yet supported"),i=!1);return i}function Pr(e,t){const r=[],i=[],o=[],a=[],s=e.resource,c=P.G.parse(s.version||"1.0","wosr");Lr.validate(c);const l=s.model.name,d=s.model.geometries,h=s.materialDefinitions,f=e.textures;let m=0;const p=new Map;for(let v=0;v<d.length;v++){const e=d[v];if(!Mr(e))continue;const s=Nr(e),c=e.params.vertexAttributes,l=[];for(const t in c){const e=c[t],r=e.values;l.push([t,{data:r,size:e.valuesPerElement,exclusive:!0}])}const g=[];if("PerAttributeArray"!==e.params.topology){const t=e.params.faces;for(const e in t)g.push([e,t[e].values])}const x=f&&f[s.texture];if(x&&!p.has(s.texture)){const{image:e,params:t}=x,r=new rt(e,t);a.push(r),p.set(s.texture,r)}const _=p.get(s.texture),T=_?_.id:void 0;let b=o[s.material]?o[s.material][s.texture]:null;if(!b){const e=h[s.material.substring(s.material.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const r=x&&x.alphaChannelUsage,i=e.transparency>0||"transparency"===r||"maskAndTransparency"===r,a=x?Ir(x.alphaChannelUsage):void 0,c={ambient:(0,u.d)(e.diffuse),diffuse:(0,u.d)(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:a,textureAlphaCutoff:.33,textureId:T,initTextureTransparent:!0,doubleSided:!0,cullFace:R.Vr.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:!!x&&!!x.params.preMultiplyAlpha};(0,n.pC)(t)&&t.materialParamsMixin&&Object.assign(c,t.materialParamsMixin),b=new lr(c),o[s.material]||(o[s.material]={}),o[s.material][s.texture]=b}i.push(b);const S=new Z(l,g);m+=g.position?g.position.length:0,r.push(S)}return{engineResources:[{name:l,stageResources:{textures:a,materials:i,geometries:r},pivotOffset:s.model.pivotOffset,numberOfVertices:m,lodThreshold:null}],referenceBoundingBox:Er(r)}}function Er(e){const t=(0,d.cS)();return e.forEach((e=>{const r=e.boundingInfo;(0,n.pC)(r)&&((0,d.pp)(t,r.getBBMin()),(0,d.pp)(t,r.getBBMax()))})),t}async function Rr(e,t){const r=[];for(const a in e){const i=e[a],o=i.images[0].data;if(!o){Ar.warn("Externally referenced texture data is not yet supported");continue}const s=i.encoding+";base64,"+o,c="/textureDefinitions/"+a,l="rgba"===i.channels?i.alphaChannelUsage||"transparency":"none",u={noUnpackFlip:!0,wrap:{s:xe.e8.REPEAT,t:xe.e8.REPEAT},preMultiplyAlpha:Ir(l)!==R.JJ.Opaque},d=(0,n.pC)(t)&&t.disableTextures?Promise.resolve(null):(0,E.t)(s,t);r.push(d.then((e=>({refId:c,image:e,params:u,alphaChannelUsage:l}))))}const i=await Promise.all(r),o={};for(const n of i)o[n.refId]=n;return o}function Ir(e){switch(e){case"mask":return R.JJ.Mask;case"maskAndTransparency":return R.JJ.MaskBlend;case"none":return R.JJ.Opaque;default:return R.JJ.Blend}}function Nr(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const Lr=new P.G(1,2,"wosr");var Hr=r(14634),Dr=r(385),Fr=r(32101),zr=r(14789);async function Br(e,t){const r=Vr((0,i.pJ)(e));if("wosr"===r.fileType){const e=await(t.cache?t.cache.loadWOSR(r.url,t):Cr(r.url,t)),{engineResources:i,referenceBoundingBox:n}=Pr(e,t);return{lods:i,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}const o=await(t.cache?t.cache.loadGLTF(r.url,t,t.usePBR):(0,g.Q)(new v.C(t.streamDataRequester),r.url,t,t.usePBR)),a=(0,n.U2)(o.model.meta,"ESRI_proxyEllipsoid"),s=o.meta.isEsriSymbolResource&&(0,n.pC)(a)&&o.meta.uri.includes("/RealisticTrees/");s&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,jr(o,a));const c=o.meta.isEsriSymbolResource?{usePBR:t.usePBR,isSchematic:!1,treeRendering:s,mrrFactors:[0,1,.2]}:{usePBR:t.usePBR,isSchematic:!1,treeRendering:!1,mrrFactors:[0,1,.5]},l={...t.materialParamsMixin,treeRendering:s},{engineResources:u,referenceBoundingBox:d}=Ur(o,c,l,t.skipHighLods&&null==r.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:r.specifiedLodIndex});return{lods:u,referenceBoundingBox:d,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function Vr(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return t?{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null}:e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function Ur(e,t,r,i){const o=e.model,a=new Array,s=new Map,c=new Map,l=o.lods.length,u=(0,d.cS)();return o.lods.forEach(((e,h)=>{const f=!0===i.skipHighLods&&(l>1&&0===h||l>3&&1===h)||!1===i.skipHighLods&&null!=i.singleLodIndex&&h!==i.singleLodIndex;if(f&&0!==h)return;const m=new Array;let p=0;if(e.parts.forEach((e=>{const{geometry:t,vertexCount:r}=Gr(e);m.push(t),p+=r;const i=t.boundingInfo;(0,n.pC)(i)&&0===h&&((0,d.pp)(u,i.getBBMin()),(0,d.pp)(u,i.getBBMax()))})),f)return;const v=new S(e.name,{textures:new Array,materials:new Array,geometries:m},e.lodThreshold,[0,0,0],p);a.push(v),e.parts.forEach((e=>{const i=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),a=o.materials.get(e.material),l=(0,n.pC)(e.attributes.texCoord0),u=(0,n.pC)(e.attributes.normal);if((0,n.Wi)(a))return;const d=kr(a.alphaMode);if(!s.has(i)){if(l){const e=(e,t=!1)=>{if((0,n.pC)(e)&&!c.has(e)){const r=o.textures.get(e);(0,n.pC)(r)&&c.set(e,new rt(r.data,t?{...r.parameters,preMultiplyAlpha:t}:r.parameters))}};e(a.textureColor,d!==R.JJ.Opaque),e(a.textureNormal),e(a.textureOcclusion),e(a.textureEmissive),e(a.textureMetallicRoughness)}const h=a.color[0]**(1/Hr.K),f=a.color[1]**(1/Hr.K),m=a.color[2]**(1/Hr.K),p=a.emissiveFactor[0]**(1/Hr.K),v=a.emissiveFactor[1]**(1/Hr.K),g=a.emissiveFactor[2]**(1/Hr.K),x=(0,n.pC)(a.textureColor)&&l?c.get(a.textureColor):null;s.set(i,new lr({...t,transparent:d===R.JJ.Blend,customDepthTest:R.Gv.Lequal,textureAlphaMode:d,textureAlphaCutoff:a.alphaCutoff,diffuse:[h,f,m],ambient:[h,f,m],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",cullFace:a.doubleSided?R.Vr.None:R.Vr.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normals:u?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,textureId:(0,n.pC)(x)?x.id:void 0,colorMixMode:a.colorMixMode,normalTextureId:(0,n.pC)(a.textureNormal)&&l?c.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:(0,n.pC)(x)&&!!x.params.preMultiplyAlpha,occlusionTextureId:(0,n.pC)(a.textureOcclusion)&&l?c.get(a.textureOcclusion).id:void 0,emissiveTextureId:(0,n.pC)(a.textureEmissive)&&l?c.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:(0,n.pC)(a.textureMetallicRoughness)&&l?c.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[p,v,g],mrrFactors:[a.metallicFactor,a.roughnessFactor,t.mrrFactors[2]],isSchematic:!1,colorTextureTransformMatrix:b(a.colorTextureTransform),normalTextureTransformMatrix:b(a.normalTextureTransform),occlusionTextureTransformMatrix:b(a.occlusionTextureTransform),emissiveTextureTransformMatrix:b(a.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:b(a.metallicRoughnessTextureTransform),...r}))}if(v.stageResources.materials.push(s.get(i)),l){const e=e=>{(0,n.pC)(e)&&v.stageResources.textures.push(c.get(e))};e(a.textureColor),e(a.textureNormal),e(a.textureOcclusion),e(a.textureEmissive),e(a.textureMetallicRoughness)}}))})),{engineResources:a,referenceBoundingBox:u}}function Gr(e){const t=$r(e.indices||e.attributes.position.count,e.primitiveType),r=e.attributes.position.count,i=(0,p.gS)(h.ct,r);(0,f.t)(i,e.attributes.position,e.transform);const a=[[Y.T.POSITION,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]],s=[[Y.T.POSITION,t]];if((0,n.pC)(e.attributes.normal)){const i=(0,p.gS)(h.ct,r);(0,o.b)(Wr,e.transform),(0,f.a)(i,e.attributes.normal,Wr),a.push([Y.T.NORMAL,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([Y.T.NORMAL,t])}if((0,n.pC)(e.attributes.tangent)){const i=(0,p.gS)(h.ek,r);(0,o.b)(Wr,e.transform),(0,m.t)(i,e.attributes.tangent,Wr),a.push([Y.T.TANGENT,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([Y.T.TANGENT,t])}if((0,n.pC)(e.attributes.texCoord0)){const i=(0,p.gS)(h.Eu,r);(0,Dr.n)(i,e.attributes.texCoord0),a.push([Y.T.UV0,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([Y.T.UV0,t])}if((0,n.pC)(e.attributes.color)){const i=(0,p.gS)(h.mc,r);if(4===e.attributes.color.elementCount)e.attributes.color instanceof h.ek?(0,m.s)(i,e.attributes.color,255):e.attributes.color instanceof h.mc?(0,Fr.c)(i,e.attributes.color):e.attributes.color instanceof h.v6&&(0,m.s)(i,e.attributes.color,1/256);else{(0,Fr.f)(i,255,255,255,255);const t=new h.ne(i.buffer,0,4);e.attributes.color instanceof h.ct?(0,f.s)(t,e.attributes.color,255):e.attributes.color instanceof h.ne?(0,zr.c)(t,e.attributes.color):e.attributes.color instanceof h.mw&&(0,f.s)(t,e.attributes.color,1/256)}a.push([Y.T.COLOR,{data:i.typedBuffer,size:i.elementCount,exclusive:!0}]),s.push([Y.T.COLOR,t])}return{geometry:new Z(a,s),vertexCount:r}}const Wr=(0,a.c)();function kr(e){switch(e){case"BLEND":return R.JJ.Blend;case"MASK":return R.JJ.Mask;case"OPAQUE":case null:case void 0:return R.JJ.Opaque}}function $r(e,t){switch(t){case xe.MX.TRIANGLES:return(0,x.nh)(e);case xe.MX.TRIANGLE_STRIP:return(0,x.DA)(e);case xe.MX.TRIANGLE_FAN:return(0,x.jX)(e)}}function jr(e,t){for(let r=0;r<e.model.lods.length;++r){const i=e.model.lods[r];for(const o of i.parts){const i=o.attributes.normal;if((0,n.Wi)(i))return;const a=o.attributes.position,d=a.count,f=(0,u.c)(),m=(0,u.c)(),v=(0,u.c)(),g=(0,p.gS)(h.mc,d),x=(0,p.gS)(h.ct,d),_=(0,s.a)((0,c.c)(),o.transform);for(let n=0;n<d;n++){a.getVec(n,m),i.getVec(n,f),(0,l.m)(m,m,o.transform),(0,l.b)(v,m,t.center),(0,l.C)(v,v,t.radius);const s=v[2],c=(0,l.l)(v),u=Math.min(.45+.55*c*c,1);(0,l.C)(v,v,t.radius),null!==_&&(0,l.m)(v,v,_),(0,l.n)(v,v),r+1!==e.model.lods.length&&e.model.lods.length>1&&(0,l.h)(v,v,f,s>-1?.2:Math.min(-4*s-3.8,1)),x.setVec(n,v),g.set(n,0,255*u),g.set(n,1,255*u),g.set(n,2,255*u),g.set(n,3,255)}o.attributes.normal=x,o.attributes.color=g}}}},66352:function(e,t,r){r.d(t,{a9:function(){return i}});var i;r(19431);!function(e){e[e.Multiply=1]="Multiply",e[e.Ignore=2]="Ignore",e[e.Replace=3]="Replace",e[e.Tint=4]="Tint"}(i||(i={}))},44685:function(e,t,r){r.d(t,{U$:function(){return s}});var i=r(63338),n=r(90331);class o{constructor(e,t){this.layout=e,this.buffer="number"==typeof t?new ArrayBuffer(t*e.stride):t;for(const r of e.fieldNames){const t=e.fields.get(r);this[r]=new t.constructor(this.buffer,t.offset,this.stride)}}get stride(){return this.layout.stride}get count(){return this.buffer.byteLength/this.stride}get byteLength(){return this.buffer.byteLength}getField(e,t){const r=this[e];return r&&r.elementCount===t.ElementCount&&r.elementType===t.ElementType?r:null}slice(e,t){return new o(this.layout,this.buffer.slice(e*this.stride,t*this.stride))}copyFrom(e,t,r,i){const n=this.stride;if(n%4==0){const o=new Uint32Array(e.buffer,t*n,i*n/4);new Uint32Array(this.buffer,r*n,i*n/4).set(o)}else{const o=new Uint8Array(e.buffer,t*n,i*n);new Uint8Array(this.buffer,r*n,i*n).set(o)}}}class a{constructor(){this.stride=0,this.fields=new Map,this.fieldNames=[]}vec2f(e,t){return this._appendField(e,i.Eu,t),this}vec2f64(e,t){return this._appendField(e,i.q6,t),this}vec3f(e,t){return this._appendField(e,i.ct,t),this}vec3f64(e,t){return this._appendField(e,i.fP,t),this}vec4f(e,t){return this._appendField(e,i.ek,t),this}vec4f64(e,t){return this._appendField(e,i.Cd,t),this}mat3f(e,t){return this._appendField(e,i.gK,t),this}mat3f64(e,t){return this._appendField(e,i.ey,t),this}mat4f(e,t){return this._appendField(e,i.bj,t),this}mat4f64(e,t){return this._appendField(e,i.O1,t),this}vec4u8(e,t){return this._appendField(e,i.mc,t),this}f32(e,t){return this._appendField(e,i.ly,t),this}f64(e,t){return this._appendField(e,i.oS,t),this}u8(e,t){return this._appendField(e,i.D_,t),this}u16(e,t){return this._appendField(e,i.av,t),this}i8(e,t){return this._appendField(e,i.Hz,t),this}vec2i8(e,t){return this._appendField(e,i.Vs,t),this}vec2i16(e,t){return this._appendField(e,i.or,t),this}vec2u8(e,t){return this._appendField(e,i.xA,t),this}vec4u16(e,t){return this._appendField(e,i.v6,t),this}u32(e,t){return this._appendField(e,i.Nu,t),this}_appendField(e,t,r){const i=t.ElementCount*(0,n.n1)(t.ElementType),o=this.stride;this.fields.set(e,{size:i,constructor:t,offset:o,optional:r}),this.stride+=i,this.fieldNames.push(e)}alignTo(e){return this.stride=Math.floor((this.stride+e-1)/e)*e,this}hasField(e){return this.fieldNames.includes(e)}createBuffer(e){return new o(this,e)}createView(e){return new o(this,e)}clone(){const e=new a;return e.stride=this.stride,e.fields=new Map,this.fields.forEach(((t,r)=>e.fields.set(r,t))),e.fieldNames=this.fieldNames.slice(),e.BufferType=this.BufferType,e}}function s(){return new a}},95650:function(e,t,r){r.d(t,{Zu:function(){return c},bA:function(){return l},qj:function(){return u}});var i=r(35031),n=r(62295),o=r(93072),a=r(23410);function s(e){e.varyings.add("linearDepth","float")}function c(e){e.vertex.uniforms.add(new o.A("nearFar",((e,t)=>t.camera.nearFar)))}function l(e){e.vertex.code.add(a.H`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function u(e,t){const{vertex:r}=e;switch(t.output){case i.H.Color:if(t.receiveShadows)return s(e),void r.code.add(a.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case i.H.Depth:case i.H.Shadow:case i.H.ShadowHighlight:case i.H.ShadowExludeHighlight:return e.include(n.up,t),s(e),c(e),l(e),void r.code.add(a.H`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}r.code.add(a.H`void forwardLinearDepth() {}`)}},57218:function(e,t,r){r.d(t,{w:function(){return n}});var i=r(23410);function n(e){e.vertex.code.add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},41383:function(e,t,r){r.d(t,{k:function(){return o}});var i=r(23410),n=r(21414);function o(e,t=!0){e.attributes.add(n.T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(i.H`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?i.H`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}},35031:function(e,t,r){var i;r.d(t,{H:function(){return i}}),function(e){e[e.Color=0]="Color",e[e.Depth=1]="Depth",e[e.Normal=2]="Normal",e[e.Shadow=3]="Shadow",e[e.ShadowHighlight=4]="ShadowHighlight",e[e.ShadowExludeHighlight=5]="ShadowExludeHighlight",e[e.Highlight=6]="Highlight",e[e.Alpha=7]="Alpha",e[e.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",e[e.COUNT=9]="COUNT"}(i||(i={}))},5885:function(e,t,r){r.d(t,{f5:function(){return u}});var i=r(61681),n=r(24455),o=r(39100),a=r(6766),s=r(8909),c=r(32006),l=(r(43036),r(23410));function u(e,t){d(e,t,[new c.B("slicePlaneOrigin",((e,r)=>p(t,e,r))),new c.B("slicePlaneBasis1",((e,r)=>v(t,e,r,(0,i.Wg)(r.slicePlane)?.basis1))),new c.B("slicePlaneBasis2",((e,r)=>v(t,e,r,(0,i.Wg)(r.slicePlane)?.basis2)))])}function d(e,t,r){if(!t.hasSlicePlane){const r=l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(r),void e.fragment.code.add(r)}e.extensions.add("GL_OES_standard_derivatives"),t.hasSliceInVertexProgram&&e.vertex.uniforms.add(r),e.fragment.uniforms.add(r);const i=l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=t.hasSliceHighlight?l.H`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:l.H`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(o)}function h(e,t,r){return e.instancedDoublePrecision?(0,a.s)(g,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function f(e,t){return(0,i.pC)(e)?(0,a.b)(x,t.origin,e):t.origin}function m(e,t,r){return e.hasSliceTranslatedView?(0,i.pC)(t)?(0,n.v)(T,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function p(e,t,r){if((0,i.Wi)(r.slicePlane))return s.Z;const n=h(e,t,r),o=f(n,r.slicePlane),c=m(e,n,r);return(0,i.pC)(c)?(0,a.m)(x,o,c):o}function v(e,t,r,n){if((0,i.Wi)(n)||(0,i.Wi)(r.slicePlane))return s.Z;const o=h(e,t,r),c=f(o,r.slicePlane),l=m(e,o,r);return(0,i.pC)(l)?((0,a.a)(_,n,c),(0,a.m)(x,c,l),(0,a.m)(_,_,l),(0,a.b)(_,_,x)):n}const g=(0,s.c)(),x=(0,s.c)(),_=(0,s.c)(),T=(0,o.c)()},4731:function(e,t,r){r.d(t,{w:function(){return o}});var i=r(95650),n=r(23410);function o(e,t){if((0,i.bA)(e),t.hasModelTransformation)return e.vertex.code.add(n.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = calculateLinearDepth(nearFar, eye.z);
return proj * eye;
}`),void e.vertex.code.add(n.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);e.vertex.code.add(n.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(n.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}},99163:function(e,t,r){r.d(t,{f:function(){return p}});var i=r(36663),n=r(6766),o=r(8909),a=r(35031),s=r(5331),c=r(5614),l=r(32006),u=r(23410),d=r(67197),h=r(21414),f=r(30560);class m extends d.m{constructor(){super(...arguments),this.instancedDoublePrecision=!1}}function p(e,t){t.instanced&&t.instancedDoublePrecision&&(e.attributes.add(h.T.MODELORIGINHI,"vec3"),e.attributes.add(h.T.MODELORIGINLO,"vec3"),e.attributes.add(h.T.MODEL,"mat3"),e.attributes.add(h.T.MODELNORMAL,"mat3"));const r=e.vertex;t.instancedDoublePrecision&&(r.include(s.$,t),r.uniforms.add(new l.B("viewOriginHi",((e,t)=>(0,f.U8)((0,n.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),v)))),r.uniforms.add(new l.B("viewOriginLo",((e,t)=>(0,f.GB)((0,n.s)(v,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),v))))),r.code.add(u.H`
    vec3 calculateVPos() {
      ${t.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"}
    }
    `),r.code.add(u.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${t.instancedDoublePrecision?u.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(u.H`
    vec3 dpNormal(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"}
    }
    `),t.output===a.H.Normal&&((0,c._8)(r),r.code.add(u.H`
    vec3 dpNormalView(vec4 _normal) {
      ${t.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"}
    }
    `)),t.hasVertexTangents&&r.code.add(u.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}

    }
    `)}(0,i._)([(0,d.o)()],m.prototype,"instancedDoublePrecision",void 0);const v=(0,o.c)()},27125:function(e,t,r){r.d(t,{O:function(){return s},h:function(){return o}});var i=r(23410);function n(e){const t=i.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;e.vertex.code.add(t)}var o,a=r(21414);function s(e,t){t.normalType===o.Attribute&&(e.attributes.add(a.T.NORMAL,"vec3"),e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`)),t.normalType===o.CompressedAttribute&&(e.include(n),e.attributes.add(a.T.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(i.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),t.normalType===o.ScreenDerivative&&(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`))}!function(e){e[e.Attribute=0]="Attribute",e[e.CompressedAttribute=1]="CompressedAttribute",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(o||(o={}))},91636:function(e,t,r){r.d(t,{f:function(){return o}});var i=r(23410),n=r(21414);function o(e){e.attributes.add(n.T.POSITION,"vec3"),e.vertex.code.add(i.H`vec3 positionModel() { return position; }`)}},45658:function(e,t,r){r.d(t,{R:function(){return l}});var i=r(66352),n=r(23410);function o(e){e.vertex.code.add(n.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${n.H.int(i.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${n.H.int(i.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${n.H.int(i.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${n.H.int(i.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}var a=r(59842),s=r(21414),c=r(16318);function l(e,t){t.hasSymbolColors?(e.include(o),e.attributes.add(s.T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(n.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new a._("colorMixMode",(e=>c.FZ[e.colorMixMode]))),e.vertex.code.add(n.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},82082:function(e,t,r){r.d(t,{D:function(){return s},N:function(){return i}});var i,n=r(27755),o=r(23410),a=r(21414);function s(e,t){switch(t.textureCoordinateType){case i.Default:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case i.Compressed:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(o.H`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case i.Atlas:return e.attributes.add(a.T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(a.T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(o.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:(0,n.Bg)(t.textureCoordinateType);case i.None:return void e.vertex.code.add(o.H`void forwardTextureCoordinates() {}`);case i.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(i||(i={}))},6502:function(e,t,r){r.d(t,{c:function(){return o}});var i=r(23410),n=r(21414);function o(e,t){t.hasVertexColors?(e.attributes.add(n.T.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(i.H`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}},78549:function(e,t,r){r.d(t,{Bb:function(){return l},d4:function(){return u}});var i=r(34344),n=(r(1983),r(27125)),o=r(62295),a=r(23410),s=r(55784),c=r(11125);function l(e,t){t.normalType===n.h.Attribute||t.normalType===n.h.CompressedAttribute?(e.include(n.O,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add([new s.j("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new c.c("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))]),e.vertex.code.add(a.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`)):t.normalType===n.h.Ground?(e.include(o.up,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(a.H`
    void forwardNormal() {
      vNormalWorld = ${t.spherical?a.H`normalize(vPositionWorldCameraRelative);`:a.H`vec3(0.0, 0.0, 1.0);`}
    }
    `)):e.vertex.code.add(a.H`void forwardNormal() {}`)}class u extends o.su{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.c)()}}},62295:function(e,t,r){r.d(t,{su:function(){return p},up:function(){return m}});var i=r(34344),n=r(39100),o=(r(79912),r(8909)),a=r(91636),s=r(5331),c=r(32006),l=r(43036),u=r(23410),d=r(55784),h=r(11125),f=r(87621);function m(e,t){e.include(a.f);const r=e.vertex;r.include(s.$,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add([new l.J("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new l.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new h.c("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new f.g("transformProjFromView",(e=>e.transformProjFromView)),new d.j("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new c.B("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new c.B("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))]),r.code.add(u.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(u.H`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?u.H`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:u.H`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new l.J("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),r.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(u.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class p extends u.K{constructor(){super(...arguments),this.transformWorldFromViewTH=(0,o.c)(),this.transformWorldFromViewTL=(0,o.c)(),this.transformViewFromCameraRelativeRS=(0,i.c)(),this.transformProjFromView=(0,n.c)()}}},512:function(e,t,r){r.d(t,{i:function(){return s}});var i=r(27755),n=r(82082),o=r(23410);function a(e){e.extensions.add("GL_EXT_shader_texture_lod"),e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`)}function s(e,t){switch(e.include(n.D,t),e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas?"vec2 size;":""}
  } vtc;
  `),t.textureCoordinateType){case n.N.Default:case n.N.Compressed:return void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return texture2D(texture, params.uv);
}`);case n.N.Atlas:return e.include(a),void e.fragment.code.add(o.H`vec4 textureLookup(sampler2D texture, TextureLookupParameter params) {
return textureAtlasLookup(texture, params.size, params.uv, vuvRegion);
}`);default:(0,i.Bg)(t.textureCoordinateType);case n.N.None:case n.N.COUNT:return}}},78183:function(e,t,r){r.d(t,{L:function(){return h}});var i=r(88589),n=r(1983),o=r(63371),a=r(23410);function s(e){e.vertex.code.add(a.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),e.vertex.code.add(a.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(a.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),e.vertex.code.add(a.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),e.vertex.code.add(a.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(a.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),e.vertex.code.add(a.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function c(e){e.uniforms.add(new o.N("screenSizePerspectiveAlignment",(e=>l(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function l(e){return(0,i.s)(u,e.parameters.divisor,e.parameters.offset,e.parameters.minPixelSize,e.paddingPixelsOverride)}const u=(0,n.c)();var d=r(5614);function h(e,t){const r=e.vertex;t.hasVerticalOffset?(m(r),t.hasScreenSizePerspective&&(e.include(s),c(r),(0,d.hY)(e.vertex,t)),r.code.add(a.H`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?a.H`vec3 worldNormal = normalize(worldPos + localOrigin);`:a.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?a.H`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:a.H`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):r.code.add(a.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const f=(0,n.c)();function m(e){e.uniforms.add(new o.N("verticalOffset",((e,t)=>{const{minWorldLength:r,maxWorldLength:n,screenLength:o}=e.verticalOffset,a=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),s=t.camera.pixelRatio||1;return(0,i.s)(f,o*s,a,r,n)})))}},34091:function(e,t,r){r.d(t,{s:function(){return P}});var i=r(61681),n=r(39100),o=r(95650),a=r(35031),s=r(5885),c=r(4731),l=r(27125),u=r(23410),d=r(21414);function h(e,t){const r=t.output===a.H.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(d.T.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):e.attributes.add(d.T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(u.H`
     void forwardObjectAndLayerIdColor() {
      ${r?i?u.H`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:u.H`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:u.H``} }`),e.fragment.code.add(u.H`
      void outputObjectAndLayerIdColor() {
        ${r?u.H`gl_FragColor = objectAndLayerIdColorVarying;`:u.H``} }`)}var f=r(82082),m=r(78549),p=r(9794);function v(e,t){switch(e.fragment.include(p.n),t.output){case a.H.Shadow:case a.H.ShadowHighlight:case a.H.ShadowExludeHighlight:e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(u.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case a.H.Depth:e.fragment.code.add(u.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}var g=r(1983),x=r(4251),_=r(15176),T=r(89979);const b=(0,g.f)(1,1,0,1),S=(0,g.f)(1,0,1,1);function A(e,t){e.fragment.uniforms.add((0,_.J)("depthTex",((e,t)=>t.highlightDepthTexture),t.hasWebGL2Context?T.D.None:T.D.InvSize)),e.fragment.constants.add("occludedHighlightFlag","vec4",b).add("unoccludedHighlightFlag","vec4",S),e.fragment.code.add(u.H`
    void outputHighlight() {
      vec3 fragCoord = gl_FragCoord.xyz;

      float sceneDepth = ${(0,x.b6)(t,"depthTex","fragCoord.xy")}.x;
      if (fragCoord.z > sceneDepth + 5e-7) {
        gl_FragColor = occludedHighlightFlag;
      }
      else {
        gl_FragColor = unoccludedHighlightFlag;
      }
    }
  `)}var C=r(27641),w=r(41330),y=r(5614),O=r(87621),M=r(70984);function P(e,t){const{vertex:r,fragment:d}=e,p=t.hasModelTransformation;p&&r.uniforms.add(new O.g("model",(e=>(0,i.pC)(e.modelTransformation)?e.modelTransformation:n.I)));const g=t.hasColorTexture&&t.alphaDiscardMode!==M.JJ.Opaque;switch(t.output){case a.H.Depth:case a.H.Shadow:case a.H.ShadowHighlight:case a.H.ShadowExludeHighlight:case a.H.ObjectAndLayerIdColor:(0,y.Sv)(r,t),e.include(c.w,t),e.include(f.D,t),e.include(C.k,t),e.include(v,t),e.include(s.f5,t),e.include(h,t),(0,o.Zu)(e),e.varyings.add("depth","float"),g&&d.uniforms.add(new _.A("tex",(e=>e.texture))),r.code.add(u.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPositionWithDepth(proj, view, ${p?"model,":""} vpos, nearFar, depth);
            forwardTextureCoordinates();
            forwardObjectAndLayerIdColor();
          }
        `),e.include(w.z,t),d.code.add(u.H`
          void main(void) {
            discardBySlice(vpos);
            ${g?u.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?u.H`colorUV`:u.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===a.H.ObjectAndLayerIdColor?u.H`outputObjectAndLayerIdColor();`:u.H`outputDepth(depth);`}
          }
        `);break;case a.H.Normal:(0,y.Sv)(r,t),e.include(c.w,t),e.include(l.O,t),e.include(m.Bb,t),e.include(f.D,t),e.include(C.k,t),g&&d.uniforms.add(new _.A("tex",(e=>e.texture))),e.varyings.add("vPositionView","vec3"),r.code.add(u.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            ${t.normalType===l.h.Attribute?u.H`
            vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:""}
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(w.z,t),d.code.add(u.H`
          void main() {
            discardBySlice(vpos);
            ${g?u.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?u.H`colorUV`:u.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===l.h.ScreenDerivative?u.H`
                vec3 normal = screenDerivativeNormal(vPositionView);`:u.H`
                vec3 normal = normalize(vNormalWorld);
                if (gl_FrontFacing == false) normal = -normal;`}
            gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
          }
        `);break;case a.H.Highlight:(0,y.Sv)(r,t),e.include(c.w,t),e.include(f.D,t),e.include(C.k,t),g&&d.uniforms.add(new _.A("tex",(e=>e.texture))),r.code.add(u.H`
          void main(void) {
            vpos = calculateVPos();
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, ${p?"model,":""} vpos);
            forwardTextureCoordinates();
          }
        `),e.include(s.f5,t),e.include(w.z,t),e.include(A,t),d.code.add(u.H`
          void main() {
            discardBySlice(vpos);
            ${g?u.H`
                    vec4 texColor = texture2D(tex, ${t.hasColorTextureTransform?u.H`colorUV`:u.H`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}},6665:function(e,t,r){r.d(t,{S:function(){return o}});var i=r(9794),n=r(23410);function o(e){e.include(i.n),e.code.add(n.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}},3417:function(e,t,r){r.d(t,{Q:function(){return f}});var i=r(82082),n=r(512),o=r(2833),a=r(4251),s=r(23410),c=r(37649),l=r(15176),u=r(89979),d=r(40017),h=r(21414);function f(e,t){const r=e.fragment;if(t.hasVertexTangents?(e.attributes.add(h.T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===o.q.WindingOrder?r.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(s.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),r.code.add(s.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),t.textureCoordinateType!==i.N.None){e.include(n.i,t);const i=t.supportsTextureAtlas?t.hasWebGL2Context?u.D.None:u.D.Size:u.D.None;r.uniforms.add(t.pbrTextureBindType===d.P.Pass?(0,l.J)("normalTexture",(e=>e.textureNormal),i):(0,c.F)("normalTexture",(e=>e.textureNormal),i)),r.code.add(s.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas?s.H`vtc.size = ${(0,a.w_)(t,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}},69828:function(e,t,r){r.d(t,{K:function(){return g}});var i=r(4251),n=r(23410),o=r(15176),a=r(89979),s=(r(55709),r(44883),r(66521),r(9969)),c=r(52756),l=r(5474),u=r(95194),d=r(24756),h=r(17346);class f extends c.A{initializeProgram(e){return new u.$(e.rctx,f.shader.get().build(),l.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}f.shader=new s.J(d.S,(()=>r.e(9018).then(r.bind(r,99018))));var m=r(91800);class p extends c.A{initializeProgram(e){return new u.$(e.rctx,p.shader.get().build(),l.i)}initializePipeline(){return(0,h.sm)({colorWrite:h.BK})}}p.shader=new s.J(m.S,(()=>r.e(4168).then(r.bind(r,4168))));r(69666);r(91907),r(18567),r(43487),r(62486);const v=2;function g(e,t){const r=e.fragment;t.receiveAmbientOcclusion?(r.uniforms.add((0,o.J)("ssaoTex",((e,t)=>t.ssaoHelper.colorTexture),t.hasWebGL2Context?a.D.None:a.D.InvSize)),r.constants.add("blurSizePixelsInverse","float",1/v),r.code.add(n.H`
      float evaluateAmbientOcclusionInverse() {
        vec2 ssaoTextureSizeInverse = ${(0,i.w_)(t,"ssaoTex",!0)};
        return texture2D(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).a;
      }

      float evaluateAmbientOcclusion() {
        return 1.0 - evaluateAmbientOcclusionInverse();
      }
    `)):r.code.add(n.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},21640:function(e,t,r){r.d(t,{XP:function(){return y},PN:function(){return C},sC:function(){return w}});var i=r(27755),n=r(6766),o=r(8909),a=r(88589),s=r(1983),c=r(3864),l=r(43036),u=r(63371),d=r(23410);function h(e,t){const r=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(r.uniforms.add(new l.J("lightingAmbientSH0",((e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(r.uniforms.add([new u.N("lightingAmbientSH_R",((e,t)=>(0,a.s)(m,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new u.N("lightingAmbientSH_G",((e,t)=>(0,a.s)(m,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new u.N("lightingAmbientSH_B",((e,t)=>(0,a.s)(m,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(r.uniforms.add([new l.J("lightingAmbientSH0",((e,t)=>(0,n.s)(f,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new u.N("lightingAmbientSH_R1",((e,t)=>(0,a.s)(m,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new u.N("lightingAmbientSH_G1",((e,t)=>(0,a.s)(m,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new u.N("lightingAmbientSH_B1",((e,t)=>(0,a.s)(m,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new u.N("lightingAmbientSH_R2",((e,t)=>(0,a.s)(m,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new u.N("lightingAmbientSH_G2",((e,t)=>(0,a.s)(m,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new u.N("lightingAmbientSH_B2",((e,t)=>(0,a.s)(m,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))]),r.code.add(d.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==c.f7.Normal&&t.pbrMode!==c.f7.Schematic||r.code.add(d.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const f=(0,o.c)(),m=(0,s.c)();var p=r(69828),v=r(58749),g=r(74839),x=r(95509),_=r(91013),T=r(40017);class b extends _.x{constructor(e,t){super(e,"bool",T.P.Pass,((r,i,n)=>r.setUniform1b(e,t(i,n))))}}var S=r(24603);r(19431);(0,o.c)();const A=.4;(0,o.c)();function C(e){e.constants.add("ambientBoostFactor","float",A)}function w(e){e.uniforms.add(new S.p("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function y(e,t){const r=e.fragment;switch(e.include(p.K,t),t.pbrMode!==c.f7.Disabled&&e.include(g.T,t),e.include(h,t),e.include(x.e),r.code.add(d.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===c.f7.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),C(r),w(r),(0,v.Pe)(r),r.code.add(d.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?d.H`normalize(vPosWorld)`:d.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,v.F1)(r),r.code.add(d.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case c.f7.Disabled:case c.f7.WaterOnIntegratedMesh:case c.f7.Water:e.include(v.kR,t),r.code.add(d.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case c.f7.Normal:case c.f7.Schematic:r.code.add(d.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),r.code.add(d.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?r.uniforms.add(new b("hasFillLights",((e,t)=>t.enableFillLights))):r.constants.add("hasFillLights","bool",!1),r.code.add(d.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),r.uniforms.add([new S.p("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new S.p("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))]),r.code.add(d.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),r.code.add(d.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode===c.f7.Schematic?d.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:d.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:(0,i.Bg)(t.pbrMode);case c.f7.COUNT:}}},58749:function(e,t,r){r.d(t,{F1:function(){return s},Pe:function(){return a},kR:function(){return l}});var i=r(43036),n=r(24603),o=r(23410);function a(e){e.uniforms.add(new i.J("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function s(e){e.uniforms.add(new i.J("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function c(e,t){t.useLegacyTerrainShading?e.uniforms.add(new n.p("lightingFixedFactor",((e,t)=>t.lighting.noonFactor*(1-t.lighting.globalFactor)))):e.constants.add("lightingFixedFactor","float",0)}function l(e,t){const r=e.fragment;a(r),s(r),c(r,t),r.code.add(o.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}},73393:function(e,t,r){r.d(t,{l:function(){return s}});var i=r(6665),n=r(93072),o=r(23410),a=r(15176);function s(e,t){t.hasMultipassTerrain&&(e.fragment.include(i.S),e.fragment.uniforms.add(new a.A("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepthTexture))),e.fragment.uniforms.add(new n.A("nearFar",((e,t)=>t.camera.nearFar))),e.fragment.uniforms.add(new n.A("inverseViewport",((e,t)=>t.inverseViewport))),e.fragment.code.add(o.H`
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){
      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround?">":"<="} terrainDepth){
        discard;
      }
    }
  `))}},2833:function(e,t,r){r.d(t,{k:function(){return a},q:function(){return i}});var i,n=r(27755),o=r(23410);function a(e,t){const r=e.fragment;switch(r.code.add(o.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case i.None:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case i.View:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case i.WindingOrder:r.code.add(o.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,n.Bg)(t.doubleSidedMode);case i.COUNT:}}!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(i||(i={}))},74839:function(e,t,r){r.d(t,{T:function(){return s}});var i=r(23410);function n(e){const t=e.fragment.code;t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}var o=r(3864),a=r(95509);function s(e,t){const r=e.fragment.code;e.include(a.e),t.pbrMode===o.f7.Water||t.pbrMode===o.f7.WaterOnIntegratedMesh?(r.add(i.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
    `),r.add(i.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(i.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(i.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(i.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)):t.pbrMode!==o.f7.Normal&&t.pbrMode!==o.f7.Schematic||(e.include(n),r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}},3864:function(e,t,r){r.d(t,{f7:function(){return f},jV:function(){return m}});var i=r(79912),n=r(512),o=r(4251),a=r(32006),s=r(43036),c=r(23410),l=r(37649),u=r(15176),d=r(89979),h=r(40017);r(66865);(0,i.f)(0,.6,.2);var f;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(f||(f={}));function m(e,t){const r=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===f.Normal&&i&&e.include(n.i,t),t.pbrMode!==f.Schematic)if(t.pbrMode!==f.Disabled){if(t.pbrMode===f.Normal){r.code.add(c.H`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas?t.hasWebGL2Context?d.D.None:d.D.Size:d.D.None,n=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(n===h.P.Pass?(0,u.J)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):(0,l.F)("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),r.code.add(c.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(n===h.P.Pass?(0,u.J)("texEmission",(e=>e.textureEmissive),e):(0,l.F)("texEmission",(e=>e.textureEmissive),e)),r.code.add(c.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(n===h.P.Pass?(0,u.J)("texOcclusion",(e=>e.textureOcclusion),e):(0,l.F)("texOcclusion",(e=>e.textureOcclusion),e)),r.code.add(c.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(c.H`float getBakedOcclusion() { return 1.0; }`),r.uniforms.add(n===h.P.Pass?[new s.J("emissionFactor",(e=>e.emissiveFactor)),new s.J("mrrFactors",(e=>e.mrrFactors))]:[new a.B("emissionFactor",(e=>e.emissiveFactor)),new a.B("mrrFactors",(e=>e.mrrFactors))]),r.code.add(c.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?c.H`vtc.uv = vuv0;`:""}
      ${t.hasMetallicRoughnessTextureTransform?c.H`vtc.uv = metallicRoughnessUV;`:""}
      ${t.hasMetallicRoughnessTexture?t.supportsTextureAtlas?c.H`
                vtc.size = ${(0,o.w_)(t,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:c.H`applyMetallnessAndRoughness(vtc);`:""}
      ${t.hasEmissiveTextureTransform?c.H`vtc.uv = emissiveUV;`:""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?c.H`
                vtc.size = ${(0,o.w_)(t,"texEmission")};
                applyEmission(vtc);`:c.H`applyEmission(vtc);`:""}
      ${t.hasOcclusionTextureTransform?c.H`vtc.uv = occlusionUV;`:""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?c.H`
                vtc.size = ${(0,o.w_)(t,"texOcclusion")};
                applyOcclusion(vtc);`:c.H`applyOcclusion(vtc);`:""}
    }
  `)}}else r.code.add(c.H`float getBakedOcclusion() { return 1.0; }`);else r.code.add(c.H`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}},95509:function(e,t,r){r.d(t,{e:function(){return n}});var i=r(23410);function n(e){e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}},29262:function(e,t,r){r.d(t,{XE:function(){return p},hb:function(){return m}});r(8909);var i=r(9794),n=r(4251),o=r(63371),a=r(59842),s=r(23410),c=r(91013),l=r(40017);class u extends c.x{constructor(e,t,r){super(e,"mat4",l.P.Draw,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))),r)}}class d extends c.x{constructor(e,t,r){super(e,"mat4",l.P.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))),r)}}var h=r(15176),f=r(89979);function m(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new d("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e,t))}function p(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new u("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),v(e,t))}function v(e,t){const r=e.fragment;r.include(i.n),r.uniforms.add([...(0,h.J)("shadowMapTex",((e,t)=>t.shadowMap.depthTexture),t.hasWebGL2Context?f.D.None:f.D.Size),new a._("numCascades",((e,t)=>t.shadowMap.numCascades)),new o.N("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))]),r.code.add(s.H`
    int chooseCascade(float depth, out mat4 mat) {
      vec4 distance = cascadeDistances;

      // choose correct cascade
      int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;

      mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];

      return i;
    }

    vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
      vec4 lv = mat * vec4(_vpos, 1.0);
      lv.xy /= lv.w;
      return 0.5 * lv.xyz + vec3(0.5);
    }

    vec2 cascadeCoordinates(int i, vec3 lvpos) {
      return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
    }

    float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
      return rgba2float(texture2D(_depthTex, uv));
    }

    float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
      return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
    }

    float filterShadow(vec2 uv, vec3 lvpos, float textureSize, sampler2D _depthTex) {
      float halfPixelSize = 0.5 / textureSize;

      // filter, offset by half pixels
      vec2 st = fract((vec2(halfPixelSize) + uv) * textureSize);

      float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
      float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
      float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);

      return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
    }

    float readShadowMap(const in vec3 _vpos, float _linearDepth) {
      mat4 mat;
      int i = chooseCascade(_linearDepth, mat);

      if (i >= numCascades) { return 0.0; }

      vec3 lvpos = lightSpacePosition(_vpos, mat);

      // vertex completely outside? -> no shadow
      if (lvpos.z >= 1.0) { return 0.0; }
      if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }

      // calc coord in cascade texture
      vec2 uv = cascadeCoordinates(i, lvpos);

      vec2 textureSize = ${(0,n.w_)(t,"shadowMapTex")};

      return filterShadow(uv, lvpos, textureSize.x, shadowMapTex);
    }
  `)}},30228:function(e,t,r){r.d(t,{DT:function(){return d},NI:function(){return c},R5:function(){return l},av:function(){return s},jF:function(){return u}});var i=r(61681),n=r(19710),o=r(23410),a=r(11125);function s(e){e.vertex.uniforms.add(new a.c("colorTextureTransformMatrix",(e=>(0,i.pC)(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:(0,n.c)()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function c(e){e.vertex.uniforms.add(new a.c("normalTextureTransformMatrix",(e=>(0,i.pC)(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:(0,n.c)()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(o.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function l(e){e.vertex.uniforms.add(new a.c("emissiveTextureTransformMatrix",(e=>(0,i.pC)(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:(0,n.c)()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(o.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new a.c("occlusionTextureTransformMatrix",(e=>(0,i.pC)(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:(0,n.c)()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(o.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function d(e){e.vertex.uniforms.add(new a.c("metallicRoughnessTextureTransformMatrix",(e=>(0,i.pC)(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:(0,n.c)()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(o.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}},27641:function(e,t,r){r.d(t,{k:function(){return h}});var i=r(43036),n=r(91013),o=r(40017);class a extends n.x{constructor(e,t,r){super(e,"vec4",o.P.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))),r)}}class s extends n.x{constructor(e,t,r){super(e,"float",o.P.Pass,((r,i,n)=>r.setUniform1fv(e,t(i,n))),r)}}var c=r(23410),l=r(11125),u=r(21414);r(34344),r(8909),r(7358);const d=8;function h(e,t){t.hasVvInstancing&&(t.vvSize||t.vvColor)&&e.attributes.add(u.T.INSTANCEFEATUREATTRIBUTE,"vec4");const r=e.vertex;t.vvSize?(r.uniforms.add(new i.J("vvSizeMinSize",(e=>e.vvSizeMinSize))),r.uniforms.add(new i.J("vvSizeMaxSize",(e=>e.vvSizeMaxSize))),r.uniforms.add(new i.J("vvSizeOffset",(e=>e.vvSizeOffset))),r.uniforms.add(new i.J("vvSizeFactor",(e=>e.vvSizeFactor))),r.uniforms.add(new l.c("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),r.uniforms.add(new i.J("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),r.code.add(c.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(c.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?c.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(c.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",d),t.hasVvInstancing&&r.uniforms.add([new s("vvColorValues",(e=>e.vvColorValues),d),new a("vvColorColors",(e=>e.vvColorColors),d)]),r.code.add(c.H`
      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${t.hasVvInstancing?c.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`:""}
    `)):r.code.add(c.H`vec4 vvColor() { return vec4(1.0); }`)}},44391:function(e,t,r){r.d(t,{F:function(){return i},b:function(){return n}});const i=.1,n=.001},41330:function(e,t,r){r.d(t,{z:function(){return c}});var i=r(44391),n=r(23410);function o(e){e.fragment.code.add(n.H`
    #define discardOrAdjustAlpha(color) { if (color.a < ${n.H.float(i.b)}) { discard; } }
  `)}r(91013),r(40017);var a=r(24603),s=r(70984);function c(e,t){l(e,t,new a.p("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function l(e,t,r){const i=e.fragment;switch(t.alphaDiscardMode!==s.JJ.Mask&&t.alphaDiscardMode!==s.JJ.MaskBlend||i.uniforms.add(r),t.alphaDiscardMode){case s.JJ.Blend:return e.include(o);case s.JJ.Opaque:i.code.add(n.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case s.JJ.Mask:i.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case s.JJ.MaskBlend:e.fragment.code.add(n.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}},77334:function(e,t,r){r.d(t,{G:function(){return u},R:function(){return f}});var i=r(55709),n=r(69666),o=r(88589),a=r(1983),s=r(93072),c=r(63371),l=r(23410);function u(e){e.fragment.uniforms.add(new c.N("projInfo",((e,t)=>d(t)))),e.fragment.uniforms.add(new s.A("zScale",((e,t)=>f(t)))),e.fragment.code.add(l.H`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function d(e){const t=e.camera.projectionMatrix;return 0===t[11]?(0,o.s)(h,2/(e.camera.fullWidth*t[0]),2/(e.camera.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):(0,o.s)(h,-2/(e.camera.fullWidth*t[0]),-2/(e.camera.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const h=(0,a.c)();function f(e){return 0===e.camera.projectionMatrix[11]?(0,i.s)(m,0,1):(0,i.s)(m,1,0)}const m=(0,n.a)()},5331:function(e,t,r){r.d(t,{$:function(){return o},I:function(){return a}});var i=r(39994),n=r(23410);function o({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(n.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(n.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}function a(e){return!!(0,i.Z)("force-double-precision-obfuscation")||e.driverTest.doublePrecisionRequiresObfuscation}},42727:function(e,t,r){r.d(t,{y:function(){return a}});var i=r(66352),n=r(23410);function o(e){e.code.add(n.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function a(e){e.include(o),e.code.add(n.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${n.H.int(i.a9.Multiply)}) {
        return allMixed;
      }
      if (mode == ${n.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.a9.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${n.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${n.H.int(i.a9.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},9794:function(e,t,r){r.d(t,{n:function(){return n}});var i=r(23410);function n(e){e.code.add(i.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}},5614:function(e,t,r){r.d(t,{hY:function(){return f},Sv:function(){return m},_8:function(){return g}});var i=r(24455),n=r(64790),o=r(6766),a=r(8909),s=r(32006),c=r(43036),l=r(91013),u=r(40017);class d extends l.x{constructor(e,t){super(e,"mat4",u.P.Draw,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}var h=r(87621);function f(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",a.Z):e.uniforms.add(new s.B("cameraPosition",((e,t)=>(0,o.s)(v,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function m(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new d("view",((e,t)=>(0,i.v)(p,t.camera.viewMatrix,e.origin))),new s.B("localOrigin",(e=>e.origin))]);const r=e=>(0,o.s)(v,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add([new h.g("proj",((e,t)=>t.camera.projectionMatrix)),new h.g("view",((e,t)=>(0,i.v)(p,t.camera.viewMatrix,r(t)))),new c.J("localOrigin",((e,t)=>r(t)))])}const p=(0,n.c)(),v=(0,a.c)();function g(e){e.uniforms.add(new h.g("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}},4251:function(e,t,r){r.d(t,{aU:function(){return o},b6:function(){return s},o_:function(){return n},w_:function(){return a}});var i=r(23410);const n="Size",o="InvSize";function a(e,t,r=!1,a=0){if(e.hasWebGL2Context){const e=i.H`vec2(textureSize(${t}, ${i.H.int(a)}))`;return r?"(1.0 / "+e+")":e}return r?t+o:t+n}function s(e,t,r,n=null,a=0){if(e.hasWebGL2Context)return i.H`texelFetch(${t}, ivec2(${r}), ${i.H.int(a)})`;let s=i.H`texture2D(${t}, ${r} * `;return s+=n?i.H`(${n}))`:i.H`${t+o})`,s}},26482:function(e,t,r){r.d(t,{q:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"vec2",n.P.Draw,((r,i,n,o)=>r.setUniform2fv(e,t(i,n,o))))}}},93072:function(e,t,r){r.d(t,{A:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"vec2",n.P.Pass,((r,i,n)=>r.setUniform2fv(e,t(i,n))))}}},32006:function(e,t,r){r.d(t,{B:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"vec3",n.P.Draw,((r,i,n,o)=>r.setUniform3fv(e,t(i,n,o))))}}},43036:function(e,t,r){r.d(t,{J:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"vec3",n.P.Pass,((r,i,n)=>r.setUniform3fv(e,t(i,n))))}}},63371:function(e,t,r){r.d(t,{N:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"vec4",n.P.Pass,((r,i,n)=>r.setUniform4fv(e,t(i,n))))}}},24603:function(e,t,r){r.d(t,{p:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"float",n.P.Pass,((r,i,n)=>r.setUniform1f(e,t(i,n))))}}},59842:function(e,t,r){r.d(t,{_:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"int",n.P.Pass,((r,i,n)=>r.setUniform1i(e,t(i,n))))}}},55784:function(e,t,r){r.d(t,{j:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"mat3",n.P.Draw,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},11125:function(e,t,r){r.d(t,{c:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"mat3",n.P.Pass,((r,i,n)=>r.setUniformMatrix3fv(e,t(i,n))))}}},87621:function(e,t,r){r.d(t,{g:function(){return o}});var i=r(91013),n=r(40017);class o extends i.x{constructor(e,t){super(e,"mat4",n.P.Pass,((r,i,n)=>r.setUniformMatrix4fv(e,t(i,n))))}}},3961:function(e,t,r){r.d(t,{kG:function(){return c}});var i=r(70375),n=r(13802),o=r(61681);const a=n.Z.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class s{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const r=this._includedModules.get(e);if(r!==t){a.error("Trying to include shader module multiple times with different sets of options.");const t=new Set;for(const i of Object.keys(r))r[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))r[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${r[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class c extends s{constructor(){super(...arguments),this.vertex=new d,this.fragment=new d,this.attributes=new h,this.varyings=new f,this.extensions=new m,this.constants=new p}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),r=this.attributes.generateSource(e),i=this.varyings.generateSource(),n="vertex"===e?this.vertex:this.fragment,o=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?g:v,c=this.constants.generateSource().concat(n.constants.generateSource());return`\n${t.join("\n")}\n\n${s}\n\n${c.join("\n")}\n\n${o.join("\n")}\n\n${r.join("\n")}\n\n${i.join("\n")}\n\n${a.join("\n")}`}generateBind(e,t){const r=new Map;this.vertex.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,o.pC)(i)&&r.set(t.name,i)})),this.fragment.uniforms.entries.forEach((t=>{const i=t.bind[e];(0,o.pC)(i)&&r.set(t.name,i)}));const i=Array.from(r.values()),n=i.length;return(e,r,o)=>{for(let a=0;a<n;++a)i[a](t,e,r,o)}}}class l{constructor(){this._entries=new Map}add(e){if(!Array.isArray(e))return this._add(e);for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if((0,o.Wi)(e))a.error(`Trying to add null Uniform from ${(new Error).stack}.`);else{if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new i.Z(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}}generateSource(){return Array.from(this._entries.values()).map((e=>(0,o.pC)(e.arraySize)?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class u{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class d extends s{constructor(){super(...arguments),this.uniforms=new l,this.code=new u,this.constants=new p}get builder(){return this}}class h{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`attribute ${e[1]} ${e[0]};`))}}class f{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(){return this._entries.map((e=>`varying ${e[1]} ${e[0]};`))}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}m.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],m.ALLOWLIST_VERTEX=[];class p{constructor(){this._entries=new Set}add(e,t,r){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=p._numberToFloatStr(r);break;case"int":i=p._numberToIntStr(r);break;case"bool":i=r.toString();break;case"vec2":i=`vec2(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])})`;break;case"vec3":i=`vec3(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])})`;break;case"vec4":i=`vec4(${p._numberToFloatStr(r[0])},                            ${p._numberToFloatStr(r[1])},                            ${p._numberToFloatStr(r[2])},                            ${p._numberToFloatStr(r[3])})`;break;case"ivec2":i=`ivec2(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])})`;break;case"ivec3":i=`ivec3(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])})`;break;case"ivec4":i=`ivec4(${p._numberToIntStr(r[0])},                             ${p._numberToIntStr(r[1])},                             ${p._numberToIntStr(r[2])},                             ${p._numberToIntStr(r[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(r,(e=>p._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const v="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",g="precision highp float;\nprecision highp sampler2D;"},37649:function(e,t,r){r.d(t,{F:function(){return h},R:function(){return d}});var i=r(61681),n=r(55709),o=r(69666),a=r(4251),s=r(26482),c=r(89979),l=r(91013),u=r(40017);class d extends l.x{constructor(e,t){super(e,"sampler2D",u.P.Draw,((r,i,n)=>r.bindTexture(e,t(i,n))))}}function h(e,t,r=c.D.None){const l=[new d(e,t)];if(r&c.D.Size){const r=e+a.o_;l.push(new s.q(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,n.s)(f,a.descriptor.width,a.descriptor.height):o.Z})))}if(r&c.D.InvSize){const r=e+a.aU;l.push(new s.q(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,n.s)(f,1/a.descriptor.width,1/a.descriptor.height):o.Z})))}return l}const f=(0,o.a)()},15176:function(e,t,r){r.d(t,{A:function(){return d},J:function(){return h}});var i=r(61681),n=r(55709),o=r(69666),a=r(4251),s=r(93072),c=r(89979),l=r(91013),u=r(40017);class d extends l.x{constructor(e,t){super(e,"sampler2D",u.P.Pass,((r,i,n)=>r.bindTexture(e,t(i,n))))}}function h(e,t,r=c.D.None){const l=[new d(e,t)];if(r&c.D.Size){const r=e+a.o_;l.push(new s.A(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,n.s)(f,a.descriptor.width,a.descriptor.height):o.Z})))}if(r&c.D.InvSize){const r=e+a.aU;l.push(new s.A(r,((e,r)=>{const a=t(e,r);return(0,i.pC)(a)?(0,n.s)(f,1/a.descriptor.width,1/a.descriptor.height):o.Z})))}return l}const f=(0,o.a)()},89979:function(e,t,r){var i;r.d(t,{D:function(){return i}}),function(e){e[e.None=0]="None",e[e.Size=1]="Size",e[e.InvSize=2]="InvSize"}(i||(i={}))},91013:function(e,t,r){r.d(t,{x:function(){return o}});var i=r(61681),n=r(40017);class o{constructor(e,t,r,o,a=null){this.name=e,this.type=t,this.arraySize=a,this.bind={[n.P.Pass]:null,[n.P.Draw]:null},(0,i.pC)(r)&&(0,i.pC)(o)&&(this.bind[r]=o)}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}},23410:function(e,t,r){r.d(t,{H:function(){return n},K:function(){return i}});class i{}function n(e,...t){let r="";for(let i=0;i<t.length;i++)r+=e[i]+t[i];return r+=e[e.length-1],r}!function(e){function t(e){return Math.round(e).toString()}function r(e){return e.toPrecision(8)}e.int=t,e.float=r}(n||(n={}))},40017:function(e,t,r){var i;r.d(t,{P:function(){return i}}),function(e){e[e.Pass=0]="Pass",e[e.Draw=1]="Draw"}(i||(i={}))},9969:function(e,t,r){r.d(t,{J:function(){return i}});class i{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}},52756:function(e,t,r){r.d(t,{A:function(){return o}});var i=r(61681),n=r(91907);class o{constructor(e,t,r){this.release=r,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}destroy(){this._program=(0,i.M2)(this._program),this._pipeline=this._configuration=null}reload(e){(0,i.M2)(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e.rctx.capabilities)}get program(){return this._program}get compiled(){return this.program.isCompiled}get key(){return this._configuration.key}get configuration(){return this._configuration}bindPipelineState(e,t=null,r){e.setPipelineState(this.getPipelineState(t,r))}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return n.MX.TRIANGLES}getPipelineState(e,t){return this._pipeline}initializeConfiguration(e,t){}}},67197:function(e,t,r){r.d(t,{m:function(){return i},o:function(){return n}});class i{constructor(){this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const r of e)t[r]=this[r];return t}}function n(e={}){return(t,r)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(r),null!=e.constValue)Object.defineProperty(t,r,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,n=e.count||2,o=Math.ceil(Math.log2(n)),a=t._parameterBits??[0];let s=0;for(;a[s]+o>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const c=a[s],l=(1<<o)-1<<c;a[s]+=o,Object.defineProperty(t,r,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~l|+e<<c&l,"number"!=typeof e&&"boolean"!=typeof e))throw"Configuration value for "+r+" must be boolean or number, got "+typeof e}})}}}},10107:function(e,t,r){r.d(t,{c:function(){return n}});var i=r(7958);class n{constructor(){this.id=(0,i.D)()}unload(){}}},95399:function(e,t,r){var i;r.d(t,{U:function(){return i}}),function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Geometry=2]="Geometry",e[e.Material=3]="Material",e[e.Texture=4]="Texture",e[e.COUNT=5]="COUNT"}(i||(i={}))},5474:function(e,t,r){r.d(t,{i:function(){return n}});var i=r(21414);const n=new Map([[i.T.POSITION,0],[i.T.NORMAL,1],[i.T.UV0,2],[i.T.COLOR,3],[i.T.SIZE,4],[i.T.TANGENT,4],[i.T.AUXPOS1,5],[i.T.SYMBOLCOLOR,5],[i.T.AUXPOS2,6],[i.T.FEATUREATTRIBUTE,6],[i.T.INSTANCEFEATUREATTRIBUTE,6],[i.T.INSTANCECOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR,7],[i.T.OBJECTANDLAYERIDCOLOR_INSTANCED,7],[i.T.MODEL,8],[i.T.MODELNORMAL,12],[i.T.MODELORIGINHI,11],[i.T.MODELORIGINLO,15]])},66865:function(e,t,r){r.d(t,{F:function(){return c}});var i=r(61681),n=r(78668),o=r(23410),a=r(70984);class s{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}ensureTechnique(e,t,r=this._output){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(r,t),this._technique),this._technique}ensureResources(e){return a.Rw.LOADED}}class c extends s{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRep,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=(0,i.RY)(this._texture),this._textureNormal=(0,i.RY)(this._textureNormal),this._textureEmissive=(0,i.RY)(this._textureEmissive),this._textureOcclusion=(0,i.RY)(this._textureOcclusion),this._textureMetallicRoughness=(0,i.RY)(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?a.Rw.LOADED:a.Rw.LOADING}get textureBindParameters(){return new l((0,i.pC)(this._texture)?this._texture.glTexture:null,(0,i.pC)(this._textureNormal)?this._textureNormal.glTexture:null,(0,i.pC)(this._textureEmissive)?this._textureEmissive.glTexture:null,(0,i.pC)(this._textureOcclusion)?this._textureOcclusion.glTexture:null,(0,i.pC)(this._textureMetallicRoughness)?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){((0,i.Wi)(this._texture)||e!==this._texture.id)&&(this._texture=(0,i.RY)(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if((0,i.Wi)(e))return void t(null);const r=this._textureRepository.acquire(e);if((0,n.y8)(r))return++this._numLoading,void r.then((e=>{if(this._disposed)return(0,i.RY)(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(r)}}class l extends o.K{constructor(e=null,t=null,r=null,i=null,n=null){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=r,this.textureOcclusion=i,this.textureMetallicRoughness=n}}},7358:function(e,t,r){r.d(t,{F5:function(){return l},yD:function(){return i}});var i,n=r(61681),o=(r(23410),r(10107)),a=r(95399),s=r(5474),c=r(16318);class l extends o.c{constructor(e,t){super(),this.type=a.U.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._insertOrder=0,this._vertexAttributeLocations=s.i,this._parameters=(0,c.Uf)(e,t),this.validateParameters(this._parameters)}dispose(){}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){(0,c.LO)(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&0!=(this.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderOccluded(){return this.parameters.renderOccluded}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get insertOrder(){return this._insertOrder}set insertOrder(e){e!==this._insertOrder&&(this._insertOrder=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){(0,n.pC)(this.repository)&&this.repository.materialChanged(this)}}!function(e){e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(i||(i={}))},12045:function(e,t,r){r.d(t,{Bh:function(){return f},IB:function(){return c},j7:function(){return l},je:function(){return h},ve:function(){return u},wu:function(){return a}});var i=r(42842),n=r(91907),o=r(17346);const a=(0,o.wK)(n.zi.SRC_ALPHA,n.zi.ONE,n.zi.ONE_MINUS_SRC_ALPHA,n.zi.ONE_MINUS_SRC_ALPHA),s=(0,o["if"])(n.zi.ONE,n.zi.ONE),c=(0,o["if"])(n.zi.ZERO,n.zi.ONE_MINUS_SRC_ALPHA);function l(e){return e===i.A.FrontFace?null:e===i.A.Alpha?c:s}const u=5e5,d={factor:-1,units:-2};function h(e){return e?d:null}function f(e,t=n.wb.LESS){return e===i.A.NONE||e===i.A.FrontFace?t:n.wb.LEQUAL}},95194:function(e,t,r){r.d(t,{$:function(){return s}});var i=r(61681),n=r(17993),o=r(40017),a=r(6174);class s{constructor(e,t,r){this._context=e,this._locations=r,this._textures=new Map,this._freeTextureUnits=new n.Z({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),r),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBind(o.P.Pass,this),this.bindDraw=t.generateBind(o.P.Draw,this),this._fragmentUniforms=(0,a.hZ)()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get isCompiled(){return this._glProgram.isCompiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if((0,i.Wi)(t)||null==t.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let r=this._textures.get(e);return null==r?(r=this._allocTextureUnit(t),this._textures.set(e,r)):r.texture=t,this._context.useProgram(this),this.setUniform1i(e,r.unit),this._context.bindTexture(t,r.unit),r.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),(0,i.pC)(this._fragmentUniforms)&&this._fragmentUniforms.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}},42842:function(e,t,r){var i;r.d(t,{A:function(){return i}}),function(e){e[e.Color=0]="Color",e[e.Alpha=1]="Alpha",e[e.FrontFace=2]="FrontFace",e[e.NONE=3]="NONE",e[e.COUNT=4]="COUNT"}(i||(i={}))},15095:function(e,t,r){r.d(t,{hu:function(){return o},yK:function(){return a}});r(69666),r(88589);var i=r(1983);(0,i.c)();class n{constructor(e){this.message=e}toString(){return`AssertException: ${this.message}`}}function o(e,t){if(!e)throw t=t||"assert",console.log(new Error(t).stack),new n(t)}function a(e,t,r,i){let n,o=(r[0]-e[0])/t[0],a=(i[0]-e[0])/t[0];o>a&&(n=o,o=a,a=n);let s=(r[1]-e[1])/t[1],c=(i[1]-e[1])/t[1];if(s>c&&(n=s,s=c,c=n),o>c||s>a)return!1;s>o&&(o=s),c<a&&(a=c);let l=(r[2]-e[2])/t[2],u=(i[2]-e[2])/t[2];return l>u&&(n=l,l=u,u=n),!(o>u||l>a)&&(u<a&&(a=u),!(a<0))}},21414:function(e,t,r){var i;r.d(t,{T:function(){return i}}),function(e){e.POSITION="position",e.NORMAL="normal",e.UV0="uv0",e.AUXPOS1="auxpos1",e.AUXPOS2="auxpos2",e.MAPPOS="mapPos",e.COLOR="color",e.SYMBOLCOLOR="symbolColor",e.SIZE="size",e.TANGENT="tangent",e.OFFSET="offset",e.SUBDIVISIONFACTOR="subdivisionFactor",e.COLORFEATUREATTRIBUTE="colorFeatureAttribute",e.SIZEFEATUREATTRIBUTE="sizeFeatureAttribute",e.OPACITYFEATUREATTRIBUTE="opacityFeatureAttribute",e.DISTANCETOSTART="distanceToStart",e.UVMAPSPACE="uvMapSpace",e.BOUNDINGRECT="boundingRect",e.UVREGION="uvRegion",e.NORMALCOMPRESSED="normalCompressed",e.PROFILERIGHT="profileRight",e.PROFILEUP="profileUp",e.PROFILEVERTEXANDNORMAL="profileVertexAndNormal",e.FEATUREVALUE="featureValue",e.MODELORIGINHI="modelOriginHi",e.MODELORIGINLO="modelOriginLo",e.MODEL="model",e.MODELNORMAL="modelNormal",e.INSTANCECOLOR="instanceColor",e.INSTANCEFEATUREATTRIBUTE="instanceFeatureAttribute",e.LOCALTRANSFORM="localTransform",e.GLOBALTRANSFORM="globalTransform",e.BOUNDINGSPHERE="boundingSphere",e.MODELORIGIN="modelOrigin",e.MODELSCALEFACTORS="modelScaleFactors",e.FEATUREATTRIBUTE="featureAttribute",e.STATE="state",e.LODLEVEL="lodLevel",e.POSITION0="position0",e.POSITION1="position1",e.NORMALA="normalA",e.NORMALB="normalB",e.COMPONENTINDEX="componentIndex",e.VARIANTOFFSET="variantOffset",e.VARIANTSTROKE="variantStroke",e.VARIANTEXTENSION="variantExtension",e.U8PADDING="u8padding",e.U16PADDING="u16padding",e.SIDENESS="sideness",e.START="start",e.END="end",e.UP="up",e.EXTRUDE="extrude",e.OBJECTANDLAYERIDCOLOR="objectAndLayerIdColor",e.OBJECTANDLAYERIDCOLOR_INSTANCED="objectAndLayerIdColor_instanced"}(i||(i={}))},70984:function(e,t,r){var i,n,o,a,s,c,l,u,d,h,f,m;r.d(t,{CE:function(){return d},Gv:function(){return n},JJ:function(){return f},MX:function(){return u},Rw:function(){return a},Vr:function(){return i},hU:function(){return s}}),function(e){e[e.None=0]="None",e[e.Front=1]="Front",e[e.Back=2]="Back",e[e.COUNT=3]="COUNT"}(i||(i={})),function(e){e[e.Less=0]="Less",e[e.Lequal=1]="Lequal",e[e.COUNT=2]="COUNT"}(n||(n={})),function(e){e[e.BACKGROUND=0]="BACKGROUND",e[e.UPDATE=1]="UPDATE"}(o||(o={})),function(e){e[e.NOT_LOADED=0]="NOT_LOADED",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(a||(a={})),function(e){e[e.IntegratedMeshMaskExcluded=1]="IntegratedMeshMaskExcluded",e[e.OutlineVisualElementMask=2]="OutlineVisualElementMask"}(s||(s={})),function(e){e[e.ASYNC=0]="ASYNC",e[e.SYNC=1]="SYNC"}(c||(c={})),function(e){e[e.Highlight=0]="Highlight",e[e.MaskOccludee=1]="MaskOccludee",e[e.COUNT=2]="COUNT"}(l||(l={})),function(e){e[e.Triangle=0]="Triangle",e[e.Point=1]="Point",e[e.Line=2]="Line"}(u||(u={})),function(e){e[e.STRETCH=1]="STRETCH",e[e.PAD=2]="PAD"}(d||(d={})),function(e){e[e.CHANGED=0]="CHANGED",e[e.UNCHANGED=1]="UNCHANGED"}(h||(h={})),function(e){e[e.Blend=0]="Blend",e[e.Opaque=1]="Opaque",e[e.Mask=2]="Mask",e[e.MaskBlend=3]="MaskBlend",e[e.COUNT=4]="COUNT"}(f||(f={})),function(e){e[e.OFF=0]="OFF",e[e.ON=1]="ON"}(m||(m={}))},66521:function(e,t,r){r.d(t,{ow:function(){return h}});var i=r(5474),n=r(21414),o=r(91907),a=r(41163);new a.G(n.T.POSITION,3,o.g.FLOAT,0,12),new a.G(n.T.POSITION,3,o.g.FLOAT,0,20),new a.G(n.T.UV0,2,o.g.FLOAT,12,20),new a.G(n.T.POSITION,3,o.g.FLOAT,0,32),new a.G(n.T.NORMAL,3,o.g.FLOAT,12,32),new a.G(n.T.UV0,2,o.g.FLOAT,24,32),new a.G(n.T.POSITION,3,o.g.FLOAT,0,16),new a.G(n.T.COLOR,4,o.g.UNSIGNED_BYTE,12,16);const s=[new a.G(n.T.POSITION,2,o.g.FLOAT,0,8)],c=[new a.G(n.T.POSITION,2,o.g.FLOAT,0,16),new a.G(n.T.UV0,2,o.g.FLOAT,8,16)];var l=r(29620);class u extends l.U{}var d=r(78951);r(43487);function h(e,t=s,r=i.i,n=-1,a=1){let l=null;return l=t===c?new Float32Array([n,n,0,0,a,n,1,0,n,a,0,1,a,a,1,1]):new Float32Array([n,n,a,n,n,a,a,a]),new u(e,r,{geometry:t},{geometry:d.f.createVertex(e,o.l1.STATIC_DRAW,l)})}},16318:function(e,t,r){r.d(t,{FZ:function(){return F},Uf:function(){return L},Bw:function(){return b},LO:function(){return H},Hx:function(){return N}});var i=r(7753),n=r(19431),o=r(61681),a=r(6766),s=r(8909),c=r(37116),l=r(70984);r(65684);function u(e){return Math.abs(e*e*e)}function d(e,t,r){const i=r.parameters,n=r.paddingPixelsOverride;return p.scale=Math.min(i.divisor/(t-i.offset),1),p.factor=u(e),p.minPixelSize=i.minPixelSize,p.paddingPixels=n,p}function h(e,t){return 0===e?t.minPixelSize:t.minPixelSize*(1+2*t.paddingPixels/e)}function f(e,t){return Math.max((0,n.t7)(e*t.scale,e,t.factor),h(e,t))}function m(e,t,r,i){return f(e,d(t,r,i))}(0,n.Vl)(10),(0,n.Vl)(12),(0,n.Vl)(70),(0,n.Vl)(40);const p={scale:0,factor:0,minPixelSize:0,paddingPixels:0};var v=r(15095),g=r(21414),x=(r(24455),r(39100));r(30560);function _(e){return!!(0,o.pC)(e)&&!e.visible}new Float64Array(3),new Float32Array(6),(0,x.c)();const T=(0,c.Ue)();function b(e,t,r,i,n,o,a){if(!_(t))if(e.boundingInfo){(0,v.hu)(e.primitiveType===l.MX.Triangle);const t=r.tolerance;A(e.boundingInfo,i,n,t,o,a)}else{const t=e.indices.get(g.T.POSITION),r=e.vertexAttributes.get(g.T.POSITION);w(i,n,0,t.length/3,t,r,void 0,o,a)}}const S=(0,s.c)();function A(e,t,r,i,n,a){if((0,o.Wi)(e))return;const s=E(t,r,S);if((0,c.op)(T,e.getBBMin()),(0,c.Tn)(T,e.getBBMax()),(0,o.pC)(n)&&n.applyToAabb(T),R(T,t,s,i)){const{primitiveIndices:o,indices:s,position:c}=e,l=o?o.length:s.length/3;if(l>z){const o=e.getChildren();if(void 0!==o){for(let e=0;e<8;++e)void 0!==o[e]&&A(o[e],t,r,i,n,a);return}}w(t,r,0,l,s,c,o,n,a)}}const C=(0,s.c)();function w(e,t,r,i,n,a,s,c,l){if(s)return y(e,t,r,i,n,a,s,c,l);const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,v=t[1]-f,g=t[2]-m;for(let x=r,_=3*r;x<i;++x){let e=d*n[_++],t=u[e++],r=u[e++],i=u[e];e=d*n[_++];let a=u[e++],s=u[e++],T=u[e];e=d*n[_++];let b=u[e++],S=u[e++],A=u[e];(0,o.pC)(c)&&([t,r,i]=c.applyToVertex(t,r,i,x),[a,s,T]=c.applyToVertex(a,s,T,x),[b,S,A]=c.applyToVertex(b,S,A,x));const w=a-t,y=s-r,O=T-i,M=b-t,E=S-r,R=A-i,I=v*R-E*g,N=g*M-R*p,L=p*E-M*v,H=w*I+y*N+O*L;if(Math.abs(H)<=Number.EPSILON)continue;const D=h-t,F=f-r,z=m-i,B=D*I+F*N+z*L;if(H>0){if(B<0||B>H)continue}else if(B>0||B<H)continue;const V=F*O-y*z,U=z*w-O*D,G=D*y-w*F,W=p*V+v*U+g*G;if(H>0){if(W<0||B+W>H)continue}else if(W>0||B+W<H)continue;const k=(M*V+E*U+R*G)/H;k>=0&&l(k,P(w,y,O,M,E,R,C),x,!1)}}function y(e,t,r,i,n,a,s,c,l){const u=a.data,d=a.stride||a.size,h=e[0],f=e[1],m=e[2],p=t[0]-h,v=t[1]-f,g=t[2]-m;for(let x=r;x<i;++x){const e=s[x];let t=3*e,r=d*n[t++],i=u[r++],a=u[r++],_=u[r];r=d*n[t++];let T=u[r++],b=u[r++],S=u[r];r=d*n[t];let A=u[r++],w=u[r++],y=u[r];(0,o.pC)(c)&&([i,a,_]=c.applyToVertex(i,a,_,x),[T,b,S]=c.applyToVertex(T,b,S,x),[A,w,y]=c.applyToVertex(A,w,y,x));const O=T-i,M=b-a,E=S-_,R=A-i,I=w-a,N=y-_,L=v*N-I*g,H=g*R-N*p,D=p*I-R*v,F=O*L+M*H+E*D;if(Math.abs(F)<=Number.EPSILON)continue;const z=h-i,B=f-a,V=m-_,U=z*L+B*H+V*D;if(F>0){if(U<0||U>F)continue}else if(U>0||U<F)continue;const G=B*E-M*V,W=V*O-E*z,k=z*M-O*B,$=p*G+v*W+g*k;if(F>0){if($<0||U+$>F)continue}else if($>0||U+$<F)continue;const j=(R*G+I*W+N*k)/F;j>=0&&l(j,P(O,M,E,R,I,N,C),e,!1)}}const O=(0,s.c)(),M=(0,s.c)();function P(e,t,r,i,n,o,s){return(0,a.s)(O,e,t,r),(0,a.s)(M,i,n,o),(0,a.f)(s,O,M),(0,a.n)(s,s),s}function E(e,t,r){return(0,a.s)(r,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function R(e,t,r,i){return I(e,t,r,i,1/0)}function I(e,t,r,i,n){const o=(e[0]-i-t[0])*r[0],a=(e[3]+i-t[0])*r[0];let s=Math.min(o,a),c=Math.max(o,a);const l=(e[1]-i-t[1])*r[1],u=(e[4]+i-t[1])*r[1];if(c=Math.min(c,Math.max(l,u)),c<0)return!1;if(s=Math.max(s,Math.min(l,u)),s>c)return!1;const d=(e[2]-i-t[2])*r[2],h=(e[5]+i-t[2])*r[2];return c=Math.min(c,Math.max(d,h)),!(c<0)&&(s=Math.max(s,Math.min(d,h)),!(s>c)&&s<n)}function N(e,t,r,i,a){let s=(r.screenLength||0)*e.pixelRatio;(0,o.pC)(a)&&(s=m(s,i,t,a));const c=s*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return(0,n.uZ)(c*t,r.minWorldLength||0,null!=r.maxWorldLength?r.maxWorldLength:1/0)}function L(e,t){const r=t?L(t):{};for(const i in e){let t=e[i];t&&t.forEach&&(t=D(t)),null==t&&i in r||(r[i]=t)}return r}function H(e,t){let r=!1;for(const n in t){const o=t[n];void 0!==o&&(Array.isArray(o)?null===e[n]?(e[n]=o.slice(),r=!0):(0,i.Vx)(e[n],o)&&(r=!0):e[n]!==o&&(r=!0,e[n]=o))}return r}function D(e){const t=[];return e.forEach((e=>t.push(e))),t}const F={multiply:1,ignore:2,replace:3,tint:4},z=1e3},41163:function(e,t,r){r.d(t,{G:function(){return i}});class i{constructor(e,t,r,i,n,o=!1,a=0){this.name=e,this.count=t,this.type=r,this.offset=i,this.stride=n,this.normalized=o,this.divisor=a}}},30560:function(e,t,r){function i(e,t,r){for(let i=0;i<r;++i)t[2*i]=e[i],t[2*i+1]=e[i]-t[2*i]}function n(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],t[i]=a[0];return t}function o(e,t){const r=e.length;for(let i=0;i<r;++i)a[0]=e[i],a[1]=e[i]-a[0],t[i]=a[1];return t}r.d(t,{GB:function(){return o},LF:function(){return i},U8:function(){return n}});const a=new Float32Array(2)},17346:function(e,t,r){r.d(t,{BK:function(){return d},LZ:function(){return u},if:function(){return o},jp:function(){return U},sm:function(){return T},wK:function(){return a},zp:function(){return l}});var i=r(70984),n=r(91907);function o(e,t,r=n.db.ADD,i=[0,0,0,0]){return{srcRgb:e,srcAlpha:e,dstRgb:t,dstAlpha:t,opRgb:r,opAlpha:r,color:{r:i[0],g:i[1],b:i[2],a:i[3]}}}function a(e,t,r,i,o=n.db.ADD,a=n.db.ADD,s=[0,0,0,0]){return{srcRgb:e,srcAlpha:t,dstRgb:r,dstAlpha:i,opRgb:o,opAlpha:a,color:{r:s[0],g:s[1],b:s[2],a:s[3]}}}const s={face:n.LR.BACK,mode:n.Wf.CCW},c={face:n.LR.FRONT,mode:n.Wf.CCW},l=e=>e===i.Vr.Back?s:e===i.Vr.Front?c:null,u={zNear:0,zFar:1},d={r:!0,g:!0,b:!0,a:!0};function h(e){return A.intern(e)}function f(e){return w.intern(e)}function m(e){return O.intern(e)}function p(e){return P.intern(e)}function v(e){return R.intern(e)}function g(e){return N.intern(e)}function x(e){return H.intern(e)}function _(e){return F.intern(e)}function T(e){return B.intern(e)}class b{constructor(e,t){this._makeKey=e,this._makeRef=t,this._interns=new Map}intern(e){if(!e)return null;const t=this._makeKey(e),r=this._interns;return r.has(t)||r.set(t,this._makeRef(e)),r.get(t)??null}}function S(e){return"["+e.join(",")+"]"}const A=new b(C,(e=>({__tag:"Blending",...e})));function C(e){return e?S([e.srcRgb,e.srcAlpha,e.dstRgb,e.dstAlpha,e.opRgb,e.opAlpha,e.color.r,e.color.g,e.color.b,e.color.a]):null}const w=new b(y,(e=>({__tag:"Culling",...e})));function y(e){return e?S([e.face,e.mode]):null}const O=new b(M,(e=>({__tag:"PolygonOffset",...e})));function M(e){return e?S([e.factor,e.units]):null}const P=new b(E,(e=>({__tag:"DepthTest",...e})));function E(e){return e?S([e.func]):null}const R=new b(I,(e=>({__tag:"StencilTest",...e})));function I(e){return e?S([e.function.func,e.function.ref,e.function.mask,e.operation.fail,e.operation.zFail,e.operation.zPass]):null}const N=new b(L,(e=>({__tag:"DepthWrite",...e})));function L(e){return e?S([e.zNear,e.zFar]):null}const H=new b(D,(e=>({__tag:"ColorWrite",...e})));function D(e){return e?S([e.r,e.g,e.b,e.a]):null}const F=new b(z,(e=>({__tag:"StencilWrite",...e})));function z(e){return e?S([e.mask]):null}const B=new b(V,(e=>({blending:h(e.blending),culling:f(e.culling),polygonOffset:m(e.polygonOffset),depthTest:p(e.depthTest),stencilTest:v(e.stencilTest),depthWrite:g(e.depthWrite),colorWrite:x(e.colorWrite),stencilWrite:_(e.stencilWrite)})));function V(e){return e?S([C(e.blending),y(e.culling),M(e.polygonOffset),E(e.depthTest),I(e.stencilTest),L(e.depthWrite),D(e.colorWrite),z(e.stencilWrite)]):null}class U{constructor(e){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=e}setPipeline(e){(this._pipelineInvalid||e!==this._pipeline)&&(this._setBlending(e.blending),this._setCulling(e.culling),this._setPolygonOffset(e.polygonOffset),this._setDepthTest(e.depthTest),this._setStencilTest(e.stencilTest),this._setDepthWrite(e.depthWrite),this._setColorWrite(e.colorWrite),this._setStencilWrite(e.stencilWrite),this._pipeline=e),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}_setBlending(e){this._blending=this._setSubState(e,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(e){this._culling=this._setSubState(e,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(e){this._polygonOffset=this._setSubState(e,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(e){this._depthTest=this._setSubState(e,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(e){this._stencilTest=this._setSubState(e,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(e){this._depthWrite=this._setSubState(e,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(e){this._colorWrite=this._setSubState(e,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(e){this._stencilWrite=this._setSubState(e,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setSubState(e,t,r,i){return(r||e!==t)&&(i(e),this._pipelineInvalid=!0),e}}}}]);
//# sourceMappingURL=6252.146ad35f.js.map