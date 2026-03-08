(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/networksandcircuits/src/components/ThreeBackground.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/networksandcircuits/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/networksandcircuits/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/networksandcircuits/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/networksandcircuits/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ThreeBackground() {
    _s();
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeBackground.useEffect": ()=>{
            const canvas = bgRef.current;
            if (!canvas) return;
            const test = document.createElement('canvas');
            if (!test.getContext('webgl') && !test.getContext('experimental-webgl')) return;
            let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    alpha: true,
                    antialias: false
                });
            } catch  {
                return;
            }
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
            renderer.setSize(window.innerWidth, window.innerHeight);
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](60, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.z = 30;
            const count = 550;
            const pos = new Float32Array(count * 3);
            for(let i = 0; i < pos.length; i++)pos[i] = (Math.random() - 0.5) * 80;
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geo.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](pos, 3));
            const pts = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geo, new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                color: 0x00f5d4,
                size: 0.08,
                transparent: true,
                opacity: 0.28
            }));
            scene.add(pts);
            const addS = {
                "ThreeBackground.useEffect.addS": (r, c, x, y, z)=>{
                    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](r, 1), new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: c,
                        wireframe: true,
                        transparent: true,
                        opacity: 0.035
                    }));
                    m.position.set(x, y, z);
                    scene.add(m);
                    return m;
                }
            }["ThreeBackground.useEffect.addS"];
            const s1 = addS(8, 0x00f5d4, -15, 5, -10);
            const s2 = addS(5, 0x7b2fff, 18, -8, -5);
            const s3 = addS(3, 0xf500a0, 5, 12, -15);
            let mx = 0, my = 0;
            const onM = {
                "ThreeBackground.useEffect.onM": (e)=>{
                    mx = (e.clientX / window.innerWidth - 0.5) * 2;
                    my = -(e.clientY / window.innerHeight - 0.5) * 2;
                }
            }["ThreeBackground.useEffect.onM"];
            window.addEventListener('mousemove', onM);
            let raf;
            const an = {
                "ThreeBackground.useEffect.an": ()=>{
                    raf = requestAnimationFrame(an);
                    const t = Date.now() * 0.0003;
                    pts.rotation.y = t * 0.1 + mx * 0.04;
                    pts.rotation.x = my * 0.02;
                    s1.rotation.y = t * 0.4;
                    s2.rotation.y = -t * 0.3;
                    s3.rotation.x = t * 0.5;
                    renderer.render(scene, camera);
                }
            }["ThreeBackground.useEffect.an"];
            an();
            const onR = {
                "ThreeBackground.useEffect.onR": ()=>{
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                }
            }["ThreeBackground.useEffect.onR"];
            window.addEventListener('resize', onR);
            return ({
                "ThreeBackground.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener('mousemove', onM);
                    window.removeEventListener('resize', onR);
                    renderer.dispose();
                    geo.dispose();
                }
            })["ThreeBackground.useEffect"];
        }
    }["ThreeBackground.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: bgRef,
        style: {
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none'
        }
    }, void 0, false, {
        fileName: "[project]/networksandcircuits/src/components/ThreeBackground.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(ThreeBackground, "vM3WLC9rlFsMNA27Y5KH3HR1/Ig=");
_c = ThreeBackground;
var _c;
__turbopack_context__.k.register(_c, "ThreeBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=networksandcircuits_src_components_ThreeBackground_tsx_ff7e1b5a._.js.map