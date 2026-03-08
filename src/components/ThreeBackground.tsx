'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// BG-only version — hero orb is now handled by AiBrain canvas component
export default function ThreeBackground() {
  const bgRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = bgRef.current;
    if (!canvas) return;
    const test = document.createElement('canvas');
    if (!test.getContext('webgl') && !test.getContext('experimental-webgl')) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    const count = 550;
    const pos   = new Float32Array(count * 3);
    for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * 80;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x00f5d4, size: 0.08, transparent: true, opacity: 0.28 }));
    scene.add(pts);
    const addS = (r: number, c: number, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 1), new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.035 }));
      m.position.set(x, y, z); scene.add(m); return m;
    };
    const s1 = addS(8, 0x00f5d4, -15, 5, -10);
    const s2 = addS(5, 0x7b2fff, 18, -8, -5);
    const s3 = addS(3, 0xf500a0, 5, 12, -15);
    let mx = 0, my = 0;
    const onM = (e: MouseEvent) => { mx = (e.clientX / window.innerWidth - 0.5) * 2; my = -(e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener('mousemove', onM);
    let raf: number;
    const an = () => {
      raf = requestAnimationFrame(an);
      const t = Date.now() * 0.0003;
      pts.rotation.y = t * 0.1 + mx * 0.04; pts.rotation.x = my * 0.02;
      s1.rotation.y = t * 0.4; s2.rotation.y = -t * 0.3; s3.rotation.x = t * 0.5;
      renderer.render(scene, camera);
    };
    an();
    const onR = () => { renderer.setSize(window.innerWidth, window.innerHeight); camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); };
    window.addEventListener('resize', onR);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('mousemove', onM); window.removeEventListener('resize', onR); renderer.dispose(); geo.dispose(); };
  }, []);

  return (
    <canvas ref={bgRef} style={{ position: 'fixed', inset: 0, zIndex: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />
  );
}
