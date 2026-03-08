'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Props {
  heroRef: React.RefObject<HTMLCanvasElement | null>;
}

export default function ThreeBackground({ heroRef }: Props) {
  const bgRef = useRef<HTMLCanvasElement>(null);

  // BG particles
  useEffect(() => {
    const canvas = bgRef.current;
    if (!canvas) return;

    // WebGL check
    const test = document.createElement('canvas');
    const ctx = test.getContext('webgl') || test.getContext('experimental-webgl');
    if (!ctx) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    // Particles
    const count = 600;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < pos.length; i++) pos[i] = (Math.random() - 0.5) * 80;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({
      color: 0x00f5d4, size: 0.09, transparent: true, opacity: 0.3
    }));
    scene.add(pts);

    // Wireframe spheres
    const addSphere = (r: number, c: number, x: number, y: number, z: number) => {
      const m = new THREE.Mesh(
        new THREE.IcosahedronGeometry(r, 1),
        new THREE.MeshBasicMaterial({ color: c, wireframe: true, transparent: true, opacity: 0.04 })
      );
      m.position.set(x, y, z);
      scene.add(m);
      return m;
    };
    const s1 = addSphere(8, 0x00f5d4, -15, 5, -10);
    const s2 = addSphere(5, 0x7b2fff, 18, -8, -5);
    const s3 = addSphere(3, 0xf500a0, 5, 12, -15);

    let mx = 0, my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouse);

    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = Date.now() * 0.0003;
      pts.rotation.y = t * 0.1 + mx * 0.04;
      pts.rotation.x = my * 0.02;
      s1.rotation.y = t * 0.4; s1.rotation.x = t * 0.2;
      s2.rotation.y = -t * 0.3; s2.rotation.z = t * 0.15;
      s3.rotation.x = t * 0.5; s3.rotation.z = t * 0.3;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      geo.dispose();
    };
  }, []);

  // Hero orb
  useEffect(() => {
    const canvas = heroRef.current;
    if (!canvas) return;

    const test = document.createElement('canvas');
    const ctx = test.getContext('webgl') || test.getContext('experimental-webgl');
    if (!ctx) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    } catch {
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(480, 480);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.72, 3),
      new THREE.MeshBasicMaterial({ color: 0x00f5d4, wireframe: true })
    );
    const inner = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.56, 2),
      new THREE.MeshBasicMaterial({ color: 0x001a16, transparent: true, opacity: 0.92 })
    );
    scene.add(core, inner);

    const mkRing = (r: number, c: number, rx: number, rz: number) => {
      const m = new THREE.Mesh(
        new THREE.TorusGeometry(r, 0.016, 8, 90),
        new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.4 })
      );
      m.rotation.x = rx; m.rotation.z = rz;
      scene.add(m); return m;
    };
    const r1 = mkRing(1.5, 0x00f5d4, Math.PI / 2, 0);
    const r2 = mkRing(1.75, 0x7b2fff, Math.PI / 4, Math.PI / 6);
    const r3 = mkRing(2.0, 0xf500a0, Math.PI / 6, Math.PI / 3);

    const nodeGeo = new THREE.SphereGeometry(0.07, 8, 8);
    const nodeColors = [0x00f5d4, 0x7b2fff, 0xf500a0];
    const nodePositions: [number, number, number][] = [
      [1.5,0,0],[-1.5,0,0],[0,1.5,0],[0,-1.5,0],[0,0,1.6],[0,0,-1.6]
    ];
    const nodes = nodePositions.map(([x, y, z], i) => {
      const m = new THREE.Mesh(nodeGeo, new THREE.MeshBasicMaterial({ color: nodeColors[i % 3] }));
      m.position.set(x, y, z);
      scene.add(m);
      return m;
    });

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshBasicMaterial({ color: 0x7b2fff, wireframe: true, transparent: true, opacity: 0.09 })
    );
    scene.add(cube);

    let hmx = 0, hmy = 0;
    const onMouse = (e: MouseEvent) => {
      hmx = e.clientX / window.innerWidth - 0.5;
      hmy = -(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', onMouse);

    let raf: number;
    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = Date.now() * 0.001;
      core.rotation.y = t * 0.5; core.rotation.x = t * 0.3;
      inner.rotation.y = -t * 0.4;
      r1.rotation.z = t * 0.4;
      r2.rotation.y = t * 0.35;
      r3.rotation.x = t * 0.3;
      cube.rotation.y = t * 0.15 + hmx * 0.5;
      cube.rotation.x = hmy * 0.5;
      nodes.forEach((n, i) => {
        n.position.x = Math.cos(t * 0.6 + i * 1.05) * 1.5;
        n.position.y = Math.sin(t * 0.5 + i * 1.05) * 1.5;
        n.position.z = Math.sin(t * 0.4 + i * 1.05) * 0.8;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMouse);
      renderer.dispose();
    };
  }, [heroRef]);

  return (
    <canvas
      ref={bgRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
