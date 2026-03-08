'use client';

import { useEffect, useRef } from 'react';

export default function AiBrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SIZE = 500;
    canvas.width  = SIZE;
    canvas.height = SIZE;
    const cx = SIZE / 2, cy = SIZE / 2;

    // ── NODE GRAPH ──────────────────────────────────────────
    type Node = {
      x: number; y: number; vx: number; vy: number;
      r: number; layer: number; pulse: number; pulseSpeed: number;
      active: boolean; activeCooldown: number; color: string;
    };

    const COLORS = ['#00f5d4','#7b2fff','#f500a0','#00c9b0','#a87fff'];
    const nodeCount = 42;
    const nodes: Node[] = [];

    // Build layered brain shape
    for (let i = 0; i < nodeCount; i++) {
      const layer  = Math.floor(i / 14); // 0=core,1=mid,2=outer
      const radMin = [0, 90, 165][layer];
      const radMax = [80, 155, 220][layer];
      const rad    = radMin + Math.random() * (radMax - radMin);
      const angle  = Math.random() * Math.PI * 2;
      // Squish vertically to look brain-like
      const xOff   = Math.cos(angle) * rad;
      const yOff   = Math.sin(angle) * rad * 0.72;
      nodes.push({
        x: cx + xOff, y: cy + yOff,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.20,
        r: layer === 0 ? 5 : layer === 1 ? 3.5 : 2.5,
        layer, pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.025 + Math.random() * 0.04,
        active: false, activeCooldown: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    // Signal packets travelling along edges
    type Packet = { from: number; to: number; t: number; speed: number; color: string; };
    const packets: Packet[] = [];
    let frame = 0;

    // Thought bubble strings
    const thoughts = ['ANALYZING...','THREAT DETECTED','PATCHING...','SCANNING NET','ENCRYPTION OK','RUNNING NMAP','EXPLOIT FOUND','SECURE CONN','OSINT SCAN','DATA BREACH?','FIREWALL UP','CTF MODE'];
    let thoughtIdx = 0, thoughtAlpha = 0, thoughtTimer = 0;

    const getEdges = () => {
      const edges: [number,number][] = [];
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.sqrt(dx*dx + dy*dy);
          // Connect within layer or adjacent layers within range
          const maxDist = nodes[i].layer === nodes[j].layer ? 110 : 90;
          if (d < maxDist) edges.push([i, j]);
        }
      }
      return edges;
    };

    let edges = getEdges();

    const animate = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);
      frame++;

      // Brain outline glow
      const grd = ctx.createRadialGradient(cx, cy-10, 20, cx, cy, 240);
      grd.addColorStop(0,   'rgba(0,245,212,.04)');
      grd.addColorStop(0.5, 'rgba(123,47,255,.03)');
      grd.addColorStop(1,   'rgba(0,0,0,0)');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.ellipse(cx, cy, 235, 175, 0, 0, Math.PI*2);
      ctx.fill();

      // ── EDGES ──
      edges.forEach(([i,j]) => {
        const a = nodes[i], b = nodes[j];
        const dx = a.x-b.x, dy = a.y-b.y;
        const d  = Math.sqrt(dx*dx+dy*dy);
        const alpha = Math.max(0, 1 - d/110) * 0.18;
        ctx.strokeStyle = `rgba(0,245,212,${alpha})`;
        ctx.lineWidth   = 0.6;
        ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
      });

      // ── SIGNAL PACKETS ──
      if (frame % 18 === 0 && edges.length > 0) {
        const e = edges[Math.floor(Math.random()*edges.length)];
        packets.push({ from:e[0], to:e[1], t:0, speed:0.028+Math.random()*0.02, color:COLORS[Math.floor(Math.random()*COLORS.length)] });
      }
      for (let i = packets.length-1; i >= 0; i--) {
        const p = packets[i];
        p.t += p.speed;
        if (p.t >= 1) {
          // activate destination node
          nodes[p.to].active = true; nodes[p.to].activeCooldown = 40;
          packets.splice(i,1); continue;
        }
        const a = nodes[p.from], b = nodes[p.to];
        const px = a.x + (b.x-a.x)*p.t;
        const py = a.y + (b.y-a.y)*p.t;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();
        // trail
        ctx.beginPath();
        ctx.arc(a.x+(b.x-a.x)*Math.max(0,p.t-.12), a.y+(b.y-a.y)*Math.max(0,p.t-.12), 1, 0, Math.PI*2);
        ctx.fillStyle = p.color.replace(')',',0.3)').replace('rgb','rgba');
        ctx.fill();
      }

      // ── NODES ──
      nodes.forEach(n => {
        // Drift
        n.x += n.vx; n.y += n.vy;
        // Soft attract to origin position (keeps brain shape)
        const dx = n.x - cx, dy = n.y - cy;
        const boundary = [80, 155, 220][n.layer];
        const d = Math.sqrt(dx*dx + (dy/0.72)*(dy/0.72));
        if (d > boundary) { n.vx -= dx*0.0008; n.vy -= dy*0.0008; }
        // Damping
        n.vx *= 0.995; n.vy *= 0.995;

        n.pulse += n.pulseSpeed;
        const glow = 0.6 + 0.4*Math.sin(n.pulse);

        if (n.activeCooldown > 0) n.activeCooldown--;
        else n.active = false;

        const baseR = n.r * (n.active ? 1.6 : 1) * (0.9+0.1*glow);

        // Outer glow — hex alpha suffix, no conversion needed
        ctx.beginPath();
        ctx.arc(n.x, n.y, baseR * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = n.color + (n.active ? '44' : '18');
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, baseR, 0, Math.PI*2);
        ctx.fillStyle = n.active ? '#ffffff' : n.color;
        ctx.fill();
      });

      // Rebuild edges occasionally (nodes drift)
      if (frame % 90 === 0) edges = getEdges();

      // ── THOUGHT BUBBLE ──
      thoughtTimer++;
      if (thoughtTimer < 80)       thoughtAlpha = Math.min(1, thoughtAlpha+0.05);
      else if (thoughtTimer < 120)  thoughtAlpha = Math.max(0, thoughtAlpha-0.05);
      else { thoughtTimer=0; thoughtIdx=(thoughtIdx+1)%thoughts.length; }

      if (thoughtAlpha > 0.01) {
        const text  = thoughts[thoughtIdx];
        const tx = cx + 90 + Math.sin(frame*0.02)*6;
        const ty = cy - 140 + Math.cos(frame*0.015)*4;
        ctx.save();
        ctx.globalAlpha = thoughtAlpha * 0.9;
        ctx.font = "bold 11px 'JetBrains Mono', monospace";
        const tw = ctx.measureText(text).width;
        // Bubble bg
        ctx.fillStyle   = 'rgba(0,245,212,.12)';
        ctx.strokeStyle = 'rgba(0,245,212,.4)';
        ctx.lineWidth   = 1;
        const bpad = 8, bh = 26, bw = tw + bpad*2;
        ctx.beginPath();
        ctx.roundRect(tx-bpad, ty-16, bw, bh, 6);
        ctx.fill(); ctx.stroke();
        // Tail
        ctx.beginPath();
        ctx.moveTo(tx+4, ty+10); ctx.lineTo(cx+40, cy-110); ctx.lineTo(tx+14, ty+10);
        ctx.strokeStyle = 'rgba(0,245,212,.25)'; ctx.stroke();
        // Text
        ctx.fillStyle = '#00f5d4';
        ctx.fillText(text, tx, ty);
        ctx.restore();
      }

      // ── OUTER RING ──
      ctx.beginPath();
      ctx.ellipse(cx, cy, 238, 180, 0, 0, Math.PI*2);
      ctx.strokeStyle = 'rgba(0,245,212,.08)';
      ctx.lineWidth   = 1;
      ctx.setLineDash([4,8]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Rotating scan line
      const scanAngle = (frame * 0.012) % (Math.PI*2);
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(scanAngle)*240, cy + Math.sin(scanAngle)*185);
      const scanGrad = ctx.createLinearGradient(cx,cy, cx+Math.cos(scanAngle)*240, cy+Math.sin(scanAngle)*185);
      scanGrad.addColorStop(0,   'rgba(0,245,212,.25)');
      scanGrad.addColorStop(0.6, 'rgba(0,245,212,.06)');
      scanGrad.addColorStop(1,   'rgba(0,245,212,0)');
      ctx.strokeStyle = scanGrad;
      ctx.lineWidth   = 2;
      ctx.stroke();

      requestAnimationFrame(animate);
    };
    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: '100%', maxWidth: 500, height: 'auto', aspectRatio: '1', display: 'block' }}
    />
  );
}
