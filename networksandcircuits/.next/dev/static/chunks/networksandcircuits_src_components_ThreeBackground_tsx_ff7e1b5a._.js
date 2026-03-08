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
function ThreeBackground({ heroRef }) {
    _s();
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // BG particles
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeBackground.useEffect": ()=>{
            const canvas = bgRef.current;
            if (!canvas) return;
            // WebGL check
            const test = document.createElement('canvas');
            const ctx = test.getContext('webgl') || test.getContext('experimental-webgl');
            if (!ctx) return;
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
            // Particles
            const count = 600;
            const pos = new Float32Array(count * 3);
            for(let i = 0; i < pos.length; i++)pos[i] = (Math.random() - 0.5) * 80;
            const geo = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
            geo.setAttribute('position', new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](pos, 3));
            const pts = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](geo, new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                color: 0x00f5d4,
                size: 0.09,
                transparent: true,
                opacity: 0.3
            }));
            scene.add(pts);
            // Wireframe spheres
            const addSphere = {
                "ThreeBackground.useEffect.addSphere": (r, c, x, y, z)=>{
                    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](r, 1), new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: c,
                        wireframe: true,
                        transparent: true,
                        opacity: 0.04
                    }));
                    m.position.set(x, y, z);
                    scene.add(m);
                    return m;
                }
            }["ThreeBackground.useEffect.addSphere"];
            const s1 = addSphere(8, 0x00f5d4, -15, 5, -10);
            const s2 = addSphere(5, 0x7b2fff, 18, -8, -5);
            const s3 = addSphere(3, 0xf500a0, 5, 12, -15);
            let mx = 0, my = 0;
            const onMouse = {
                "ThreeBackground.useEffect.onMouse": (e)=>{
                    mx = (e.clientX / window.innerWidth - 0.5) * 2;
                    my = -(e.clientY / window.innerHeight - 0.5) * 2;
                }
            }["ThreeBackground.useEffect.onMouse"];
            window.addEventListener('mousemove', onMouse);
            let raf;
            const animate = {
                "ThreeBackground.useEffect.animate": ()=>{
                    raf = requestAnimationFrame(animate);
                    const t = Date.now() * 0.0003;
                    pts.rotation.y = t * 0.1 + mx * 0.04;
                    pts.rotation.x = my * 0.02;
                    s1.rotation.y = t * 0.4;
                    s1.rotation.x = t * 0.2;
                    s2.rotation.y = -t * 0.3;
                    s2.rotation.z = t * 0.15;
                    s3.rotation.x = t * 0.5;
                    s3.rotation.z = t * 0.3;
                    renderer.render(scene, camera);
                }
            }["ThreeBackground.useEffect.animate"];
            animate();
            const onResize = {
                "ThreeBackground.useEffect.onResize": ()=>{
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    camera.aspect = window.innerWidth / window.innerHeight;
                    camera.updateProjectionMatrix();
                }
            }["ThreeBackground.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            return ({
                "ThreeBackground.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener('mousemove', onMouse);
                    window.removeEventListener('resize', onResize);
                    renderer.dispose();
                    geo.dispose();
                }
            })["ThreeBackground.useEffect"];
        }
    }["ThreeBackground.useEffect"], []);
    // Hero orb
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThreeBackground.useEffect": ()=>{
            const canvas = heroRef.current;
            if (!canvas) return;
            const test = document.createElement('canvas');
            const ctx = test.getContext('webgl') || test.getContext('experimental-webgl');
            if (!ctx) return;
            let renderer;
            try {
                renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    alpha: true,
                    antialias: true
                });
            } catch  {
                return;
            }
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(480, 480);
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](48, 1, 0.1, 100);
            camera.position.set(0, 0, 5);
            const core = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.72, 3), new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x00f5d4,
                wireframe: true
            }));
            const inner = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IcosahedronGeometry"](0.56, 2), new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x001a16,
                transparent: true,
                opacity: 0.92
            }));
            scene.add(core, inner);
            const mkRing = {
                "ThreeBackground.useEffect.mkRing": (r, c, rx, rz)=>{
                    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TorusGeometry"](r, 0.016, 8, 90), new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: c,
                        transparent: true,
                        opacity: 0.4
                    }));
                    m.rotation.x = rx;
                    m.rotation.z = rz;
                    scene.add(m);
                    return m;
                }
            }["ThreeBackground.useEffect.mkRing"];
            const r1 = mkRing(1.5, 0x00f5d4, Math.PI / 2, 0);
            const r2 = mkRing(1.75, 0x7b2fff, Math.PI / 4, Math.PI / 6);
            const r3 = mkRing(2.0, 0xf500a0, Math.PI / 6, Math.PI / 3);
            const nodeGeo = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.07, 8, 8);
            const nodeColors = [
                0x00f5d4,
                0x7b2fff,
                0xf500a0
            ];
            const nodePositions = [
                [
                    1.5,
                    0,
                    0
                ],
                [
                    -1.5,
                    0,
                    0
                ],
                [
                    0,
                    1.5,
                    0
                ],
                [
                    0,
                    -1.5,
                    0
                ],
                [
                    0,
                    0,
                    1.6
                ],
                [
                    0,
                    0,
                    -1.6
                ]
            ];
            const nodes = nodePositions.map({
                "ThreeBackground.useEffect.nodes": ([x, y, z], i)=>{
                    const m = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](nodeGeo, new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: nodeColors[i % 3]
                    }));
                    m.position.set(x, y, z);
                    scene.add(m);
                    return m;
                }
            }["ThreeBackground.useEffect.nodes"]);
            const cube = new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BoxGeometry"](3, 3, 3), new __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                color: 0x7b2fff,
                wireframe: true,
                transparent: true,
                opacity: 0.09
            }));
            scene.add(cube);
            let hmx = 0, hmy = 0;
            const onMouse = {
                "ThreeBackground.useEffect.onMouse": (e)=>{
                    hmx = e.clientX / window.innerWidth - 0.5;
                    hmy = -(e.clientY / window.innerHeight - 0.5);
                }
            }["ThreeBackground.useEffect.onMouse"];
            window.addEventListener('mousemove', onMouse);
            let raf;
            const animate = {
                "ThreeBackground.useEffect.animate": ()=>{
                    raf = requestAnimationFrame(animate);
                    const t = Date.now() * 0.001;
                    core.rotation.y = t * 0.5;
                    core.rotation.x = t * 0.3;
                    inner.rotation.y = -t * 0.4;
                    r1.rotation.z = t * 0.4;
                    r2.rotation.y = t * 0.35;
                    r3.rotation.x = t * 0.3;
                    cube.rotation.y = t * 0.15 + hmx * 0.5;
                    cube.rotation.x = hmy * 0.5;
                    nodes.forEach({
                        "ThreeBackground.useEffect.animate": (n, i)=>{
                            n.position.x = Math.cos(t * 0.6 + i * 1.05) * 1.5;
                            n.position.y = Math.sin(t * 0.5 + i * 1.05) * 1.5;
                            n.position.z = Math.sin(t * 0.4 + i * 1.05) * 0.8;
                        }
                    }["ThreeBackground.useEffect.animate"]);
                    renderer.render(scene, camera);
                }
            }["ThreeBackground.useEffect.animate"];
            animate();
            return ({
                "ThreeBackground.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    window.removeEventListener('mousemove', onMouse);
                    renderer.dispose();
                }
            })["ThreeBackground.useEffect"];
        }
    }["ThreeBackground.useEffect"], [
        heroRef
    ]);
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
        lineNumber: 196,
        columnNumber: 5
    }, this);
}
_s(ThreeBackground, "RimaRfmTz36bVDWbNE8keRM8UY0=");
_c = ThreeBackground;
var _c;
__turbopack_context__.k.register(_c, "ThreeBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=networksandcircuits_src_components_ThreeBackground_tsx_ff7e1b5a._.js.map