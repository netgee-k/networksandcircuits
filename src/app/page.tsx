'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import * as THREE from 'three';

const CONFIG = {
  paystack: { publicKey: 'pk_live_YOUR_PAYSTACK_PUBLIC_KEY', emailFallback: 'netg3ek@gmail.com' },
  binance:  { payLink: 'https://pay.binance.com/en' },
};
const NAV      = ['About','Services','Projects','Certifications','Coffee','Contact'];
const ROLES    = ['Network Engineer','Cybersecurity Specialist','Penetration Tester','DevOps Engineer'];
const SKILLS   = ['Penetration Testing','Network Security','Cisco / CCNA','AWS','Azure','Docker','Kubernetes','Python','JavaScript','TypeScript','Bash','Metasploit','Wireshark','Burp Suite','Nmap','SIEM','OSINT','PCI DSS','Digital Forensics'];
const SERVICES = [
  { n:'01', icon:'◈', title:'Penetration Testing',      desc:'Full security assessments, vulnerability scanning, ethical hacking and remediation to fortify your defenses.' },
  { n:'02', icon:'◎', title:'Network Design & Security', desc:'Security-first architectures: SDN, VLANs, routing protocols and hardened remote access solutions.' },
  { n:'03', icon:'⟨/⟩',title:'Web Development',          desc:'Secure full-stack apps from polished frontends to hardened APIs, built with security from day one.' },
  { n:'04', icon:'⊕', title:'Digital Forensics',         desc:'Incident response, evidence collection and court-ready analysis after breaches or investigations.' },
  { n:'05', icon:'◉', title:'Telemetry & Monitoring',    desc:'Grafana, Prometheus and custom dashboards for full network and security visibility.' },
  { n:'06', icon:'⬡', title:'Cloud Security',            desc:'AWS and Azure hardening: IAM policies, secure VPC design and cloud-native security tooling.' },
];
const PROJECTS = [
  { img:'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=80', title:'Autoshift v3', year:'2024', desc:'Intelligent automation platform streamlining shift management, scheduling and workforce coordination with a modern React frontend and robust Node.js API.', tags:['React','Node.js','Automation','Dashboard'], github:'https://github.com/netgee-k/Autoshift-v3', link:'#', size:'large' },
  { img:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',    title:'Metasploitable2 Guide',   year:'2023', desc:'Full exploitation chain on deliberately vulnerable VMs. Documented for security training and research.', tags:['PenTest','Security','VMs'],    github:'https://github.com/netgee-k', link:'#', size:'small' },
  { img:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',    title:'SDN DDoS Detection',     year:'2023', desc:'Research comparing DDoS resilience between Software Defined Networks and traditional architectures.', tags:['SDN','Research','Network'], github:'https://github.com/netgee-k', link:'#', size:'small' },
  { img:'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',    title:'TillBase POS',           year:'2022', desc:'Secure cloud-based POS and inventory system with PCI DSS compliance and real-time analytics.', tags:['Python','PCI DSS','Cloud'],    github:'https://github.com/netgee-k', link:'#', size:'small' },
];
const CERTS = [
  { short:'PT+',  full:'CompTIA PenTest+',              org:'CompTIA', date:'May 2023', color:'#ff6b35', desc:'Planning, scoping, scanning and executing penetration testing engagements at enterprise scale.' },
  { short:'OPSWAT',full:'OPSWAT Data Transfer Security',org:'OPSWAT',  date:'Dec 2022', color:'#00f5d4', desc:'Critical infrastructure protection, secure data transfer protocols and advanced malware prevention.' },
  { short:'CCNA', full:'Cisco CCNA',                    org:'Cisco',   date:'2021',     color:'#7b2fff', desc:'Installing, configuring, operating and troubleshooting routed and switched enterprise networks.' },
];
const B_AMT = [1,3,5,10,20,50];
const P_AMT = [150,400,700,1500,3000,7000];

export default function Home() {
  const bgRef   = useRef<HTMLCanvasElement>(null);
  const heroRef = useRef<HTMLCanvasElement>(null);

  const [menu,    setMenu]   = useState(false);
  const [scrolled,setScroll] = useState(false);
  const [typed,   setTyped]  = useState('');
  const [modal,   setModal]  = useState<'binance'|'paystack'|null>(null);
  const [selB,    setSelB]   = useState(5);
  const [selP,    setSelP]   = useState(700);
  const [custB,   setCustB]  = useState('');
  const [custP,   setCustP]  = useState('');
  const [psEmail, setPsEmail]= useState('');
  const [toast,   setToast]  = useState('');
  const [form,    setForm]   = useState({name:'',email:'',subject:'',message:''});
  const [mounted, setMounted]= useState(false);

  useEffect(()=>{
    setMounted(true);
    const fn=()=>setScroll(window.scrollY>50);
    window.addEventListener('scroll',fn);
    return ()=>window.removeEventListener('scroll',fn);
  },[]);

  useEffect(()=>{
    let ri=0,ci=0,del=false,t:ReturnType<typeof setTimeout>;
    const tick=()=>{
      const w=ROLES[ri];
      setTyped(del?w.slice(0,ci--):w.slice(0,ci++));
      if(!del&&ci>w.length){del=true;t=setTimeout(tick,2000);return;}
      if(del&&ci<0){del=false;ri=(ri+1)%ROLES.length;ci=0;t=setTimeout(tick,400);return;}
      t=setTimeout(tick,del?55:105);
    };
    t=setTimeout(tick,800);
    return ()=>clearTimeout(t);
  },[]);

  useEffect(()=>{
    const o=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('vis');}}),{threshold:0.07});
    document.querySelectorAll('.rv').forEach(el=>o.observe(el));
    return ()=>o.disconnect();
  },[]);

  // THREE BG
  useEffect(()=>{
    if(!bgRef.current||!document.createElement('canvas').getContext('webgl'))return;
    let r:THREE.WebGLRenderer;
    try{r=new THREE.WebGLRenderer({canvas:bgRef.current,alpha:true,antialias:true});}catch{return;}
    r.setPixelRatio(Math.min(devicePixelRatio,2));
    r.setSize(innerWidth,innerHeight);
    const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(60,innerWidth/innerHeight,0.1,1000);
    cam.position.z=30;
    const pa=new Float32Array(500*3);
    for(let i=0;i<pa.length;i++)pa[i]=(Math.random()-.5)*80;
    const pg=new THREE.BufferGeometry();
    pg.setAttribute('position',new THREE.BufferAttribute(pa,3));
    const pts=new THREE.Points(pg,new THREE.PointsMaterial({color:0x00f5d4,size:0.08,transparent:true,opacity:0.25}));
    sc.add(pts);
    const addS=(rad:number,col:number,x:number,y:number,z:number)=>{
      const m=new THREE.Mesh(new THREE.IcosahedronGeometry(rad,1),new THREE.MeshBasicMaterial({color:col,wireframe:true,transparent:true,opacity:0.035}));
      m.position.set(x,y,z);sc.add(m);return m;
    };
    const s1=addS(9,0x00f5d4,-18,6,-12),s2=addS(6,0x7b2fff,20,-10,-6),s3=addS(4,0xf500a0,6,14,-18);
    let mx=0,my=0,raf:number;
    const onM=(e:MouseEvent)=>{mx=(e.clientX/innerWidth-.5)*2;my=-(e.clientY/innerHeight-.5)*2;};
    window.addEventListener('mousemove',onM);
    const an=()=>{raf=requestAnimationFrame(an);const t=Date.now()*.0003;pts.rotation.y=t*.08+mx*.03;pts.rotation.x=my*.015;s1.rotation.y=t*.35;s2.rotation.y=-t*.28;s3.rotation.x=t*.45;r.render(sc,cam);};
    an();
    const onR=()=>{r.setSize(innerWidth,innerHeight);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix();};
    window.addEventListener('resize',onR);
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener('mousemove',onM);window.removeEventListener('resize',onR);r.dispose();};
  },[]);

  // THREE HERO
  useEffect(()=>{
    if(!heroRef.current||!document.createElement('canvas').getContext('webgl'))return;
    let r:THREE.WebGLRenderer;
    try{r=new THREE.WebGLRenderer({canvas:heroRef.current,alpha:true,antialias:true});}catch{return;}
    r.setPixelRatio(Math.min(devicePixelRatio,2));r.setSize(480,480);
    const sc=new THREE.Scene(),cam=new THREE.PerspectiveCamera(48,1,0.1,100);
    cam.position.set(0,0,5.5);
    const core=new THREE.Mesh(new THREE.IcosahedronGeometry(.75,4),new THREE.MeshBasicMaterial({color:0x00f5d4,wireframe:true}));
    const fill=new THREE.Mesh(new THREE.IcosahedronGeometry(.6,2),new THREE.MeshBasicMaterial({color:0x001510,transparent:true,opacity:.95}));
    sc.add(core,fill);
    const mkR=(rad:number,col:number,rx:number,ry:number,rz:number)=>{const m=new THREE.Mesh(new THREE.TorusGeometry(rad,.014,8,100),new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:.38}));m.rotation.set(rx,ry,rz);sc.add(m);return m;};
    const r1=mkR(1.55,0x00f5d4,Math.PI/2,0,0);
    const r2=mkR(1.8,0x7b2fff,Math.PI/3,Math.PI/5,0);
    const r3=mkR(2.05,0xf500a0,Math.PI/5,0,Math.PI/4);
    const ng=new THREE.SphereGeometry(.065,8,8);
    const nc=[0x00f5d4,0x7b2fff,0xf500a0];
    const nd:[number,number,number][]= [[1.55,0,0],[-1.55,0,0],[0,1.55,0],[0,-1.55,0],[0,0,1.7],[0,0,-1.7]];
    const nodes=nd.map(([x,y,z],i)=>{const m=new THREE.Mesh(ng,new THREE.MeshBasicMaterial({color:nc[i%3]}));m.position.set(x,y,z);sc.add(m);return m;});
    const cube=new THREE.Mesh(new THREE.BoxGeometry(3.2,3.2,3.2),new THREE.MeshBasicMaterial({color:0x7b2fff,wireframe:true,transparent:true,opacity:.07}));
    sc.add(cube);
    let hmx=0,hmy=0,raf:number;
    const onM=(e:MouseEvent)=>{hmx=e.clientX/innerWidth-.5;hmy=-(e.clientY/innerHeight-.5);};
    window.addEventListener('mousemove',onM);
    const an=()=>{raf=requestAnimationFrame(an);const t=Date.now()*.001;core.rotation.y=t*.45;core.rotation.x=t*.28;fill.rotation.y=-t*.35;r1.rotation.z=t*.38;r2.rotation.y=t*.32;r3.rotation.x=t*.28;cube.rotation.y=t*.12+hmx*.5;cube.rotation.x=hmy*.5;nodes.forEach((n,i)=>{n.position.x=Math.cos(t*.55+i*1.05)*1.55;n.position.y=Math.sin(t*.45+i*1.05)*1.55;n.position.z=Math.sin(t*.38+i*1.05)*.85;});r.render(sc,cam);};
    an();
    return ()=>{cancelAnimationFrame(raf);window.removeEventListener('mousemove',onM);r.dispose();};
  },[]);

  const showT=(m:string)=>{setToast(m);setTimeout(()=>setToast(''),5000);};
  const payB=()=>{window.open(`${CONFIG.binance.payLink}?amount=${parseFloat(custB)||selB}&currency=USDT&memo=CoffeeJesse`,'_blank');setModal(null);};
  const payP=()=>{
    const a=(parseFloat(custP)||selP)*100,e=psEmail||CONFIG.paystack.emailFallback;
    if(!e.includes('@')){alert('Enter a valid email.');return;}
    const P=(window as any).PaystackPop;
    if(!P){alert('Paystack still loading, retry.');return;}
    P.setup({key:CONFIG.paystack.publicKey,email:e,amount:a,currency:'KES',ref:'coffee_'+Date.now(),
      callback:(res:any)=>{setModal(null);showT('Thank you! ☕ Ref: '+res.reference);},onClose:()=>{}}).openIframe();
  };
  const onSub=(e:React.FormEvent)=>{e.preventDefault();showT("Message sent! I'll reply soon 🚀");setForm({name:'',email:'',subject:'',message:''});};

  if(!mounted)return null;

  return (
    <>
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload"/>
      <style>{`
        /* ─ RESET + BASE ─ */
        *, *::before, *::after { box-sizing: border-box; }
        html { scroll-behavior: smooth; overflow-x: hidden; }

        /* ─ GRID TEXTURE ─ */
        body::before {
          content: '';
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(0,245,212,.018) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,212,.018) 1px, transparent 1px);
          background-size: 72px 72px;
        }
        body::after {
          content: '';
          position: fixed; inset: 0; z-index: 0; pointer-events: none;
          background: radial-gradient(ellipse 80% 80% at 50% -10%, rgba(0,245,212,.06) 0%, transparent 60%);
        }

        #bg-cv { position: fixed; inset: 0; z-index: 0; pointer-events: none; }

        /* ─ NAV ─ */
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 200;
          display: flex; align-items: center; padding: 0 clamp(20px,5vw,64px);
          height: 70px; transition: all .4s;
        }
        .nav.up {
          background: rgba(4,4,13,.9);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(0,245,212,.1);
          height: 60px;
        }
        .logo {
          font-size: 1.45rem; font-weight: 800; color: #d4d4e8;
          text-decoration: none; letter-spacing: -1px; margin-right: auto;
        }
        .logo b { color: #00f5d4; font-weight: 800; }
        .nav-ul { display: flex; gap: 40px; list-style: none; }
        .nav-ul a {
          font-family: 'JetBrains Mono', monospace;
          font-size: .72rem; font-weight: 500; letter-spacing: 2px;
          text-transform: uppercase; color: #5a5a7e; text-decoration: none;
          transition: color .2s;
        }
        .nav-ul a:hover { color: #00f5d4; }
        .hbg { display: none; background: none; border: none; cursor: pointer; padding: 6px; flex-direction: column; gap: 5px; }
        .hbg s { display: block; width: 22px; height: 2px; background: #d4d4e8; border-radius: 1px; transition: .3s; text-decoration: none; }

        /* ─ MOBILE OVERLAY ─ */
        .mob {
          display: none; position: fixed; inset: 0; z-index: 190;
          background: rgba(4,4,13,.97); backdrop-filter: blur(20px);
          flex-direction: column; align-items: center; justify-content: center; gap: 40px;
        }
        .mob.on { display: flex; }
        .mob a { font-size: 2.2rem; font-weight: 800; color: #d4d4e8; text-decoration: none; transition: color .2s; }
        .mob a:hover { color: #00f5d4; }
        .mob-x { position: absolute; top: 22px; right: 24px; background: none; border: none; color: #5a5a7e; font-size: 1.8rem; cursor: pointer; }

        /* ─ HERO ─ */
        .hero-wrap {
          position: relative; z-index: 1; min-height: 100vh;
          display: grid; grid-template-columns: 55% 45%;
          align-items: center;
          padding: clamp(100px,14vh,140px) clamp(20px,5vw,64px) clamp(60px,8vh,100px);
          max-width: 1400px; margin: 0 auto;
        }
        .hero-lhs { max-width: 640px; }
        .eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .68rem; letter-spacing: 4px; text-transform: uppercase;
          color: #00f5d4; margin-bottom: 32px;
        }
        .eyebrow::before { content: ''; width: 28px; height: 1px; background: #00f5d4; flex-shrink: 0; }
        .hero-h1 {
          font-size: clamp(3.2rem, 6.5vw, 6rem);
          font-weight: 800; line-height: 1.0; letter-spacing: -3px;
          margin-bottom: 22px;
        }
        .hero-h1 .name {
          display: block;
          background: linear-gradient(110deg, #00f5d4 0%, #7b2fff 55%, #f500a0 100%);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .tw {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(.85rem,1.8vw,1.05rem);
          color: #00f5d4; margin-bottom: 28px; min-height: 30px;
          display: flex; align-items: center; gap: 1px;
        }
        .cur { animation: blink 1s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-p {
          font-size: clamp(.93rem,1.4vw,1.05rem);
          color: #5a5a7e; line-height: 1.9; max-width: 500px; margin-bottom: 48px;
        }
        .btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn-g {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 15px 34px; border-radius: 9px; font-family: 'Syne', sans-serif;
          font-weight: 800; font-size: .92rem; text-decoration: none;
          background: linear-gradient(135deg, #00f5d4 0%, #7b2fff 100%);
          color: #04040d; border: none; cursor: pointer; transition: all .25s;
        }
        .btn-g:hover { opacity: .87; transform: translateY(-2px); box-shadow: 0 14px 36px rgba(0,245,212,.3); }
        .btn-o {
          display: inline-flex; align-items: center; gap: 9px;
          padding: 14px 34px; border-radius: 9px; font-family: 'Syne', sans-serif;
          font-weight: 700; font-size: .92rem; text-decoration: none;
          background: transparent; color: #d4d4e8;
          border: 1px solid rgba(212,212,232,.18); cursor: pointer; transition: all .25s;
        }
        .btn-o:hover { border-color: #00f5d4; color: #00f5d4; background: rgba(0,245,212,.06); }

        /* hero 3D side */
        .hero-rhs {
          display: flex; justify-content: center; align-items: center;
          position: relative;
        }
        .hero-rhs::before {
          content: '';
          position: absolute; width: 520px; height: 520px;
          background: radial-gradient(ellipse, rgba(0,245,212,.09) 0%, rgba(123,47,255,.05) 40%, transparent 70%);
          border-radius: 50%; pointer-events: none;
        }
        .hero-rhs canvas { display: block; border-radius: 999px; }

        /* ─ SECTION STRUCTURE ─ */
        .s { position: relative; z-index: 1; }
        .s-alt { background: rgba(255,255,255,.015); }
        .si { max-width: 1400px; margin: 0 auto; padding: clamp(72px,10vw,120px) clamp(20px,5vw,64px); }
        .sh {
          font-size: clamp(2.2rem,4.5vw,3.6rem);
          font-weight: 800; letter-spacing: -2px; line-height: 1.08;
          margin-bottom: clamp(48px,7vw,80px);
        }
        .sh em { color: #00f5d4; font-style: normal; }
        .ey2 {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'JetBrains Mono', monospace;
          font-size: .66rem; letter-spacing: 4px; text-transform: uppercase;
          color: #00f5d4; margin-bottom: 20px;
        }
        .ey2::before { content: ''; width: 22px; height: 1px; background: #00f5d4; }

        /* ─ ABOUT ─ */
        .about-g { display: grid; grid-template-columns: 1.2fr 1fr; gap: clamp(40px,6vw,80px); align-items: start; }
        .about-p { font-size: .97rem; color: #5a5a7e; line-height: 1.95; margin-bottom: 22px; }
        .sk-lbl { font-family: 'JetBrains Mono', monospace; font-size: .63rem; letter-spacing: 3px; text-transform: uppercase; color: #5a5a7e; margin-bottom: 14px; margin-top: 4px; }
        .chips { display: flex; flex-wrap: wrap; gap: 7px; }
        .chip {
          padding: 5px 12px; border-radius: 5px;
          background: rgba(0,245,212,.07); border: 1px solid rgba(0,245,212,.16);
          font-family: 'JetBrains Mono', monospace; font-size: .71rem; color: #00f5d4;
          transition: all .2s; cursor: default; white-space: nowrap;
        }
        .chip:hover { background: #00f5d4; color: #04040d; }
        .stats { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .stat {
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          border-radius: 14px; padding: clamp(20px,3vw,32px); text-align: center;
          transition: border-color .3s;
        }
        .stat:hover { border-color: rgba(0,245,212,.3); }
        .stat-n { font-size: clamp(2.2rem,4vw,3rem); font-weight: 800; color: #00f5d4; line-height: 1; margin-bottom: 8px; }
        .stat-l { font-family: 'JetBrains Mono', monospace; font-size: .63rem; color: #5a5a7e; letter-spacing: 1px; }

        /* ─ SERVICES ─ */
        .srv-g {
          display: grid; grid-template-columns: repeat(3, 1fr);
          border: 1px solid rgba(255,255,255,.07); border-radius: 18px; overflow: hidden;
        }
        .srv {
          padding: clamp(24px,3vw,40px);
          border-right: 1px solid rgba(255,255,255,.06);
          border-bottom: 1px solid rgba(255,255,255,.06);
          background: rgba(255,255,255,.02);
          position: relative; overflow: hidden; transition: background .3s;
        }
        .srv:hover { background: rgba(0,245,212,.04); }
        .srv::after { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, #00f5d4, #7b2fff); transform: scaleX(0); transform-origin: left; transition: transform .4s; }
        .srv:hover::after { transform: scaleX(1); }
        .srv-n { font-family: 'JetBrains Mono', monospace; font-size: .62rem; color: #5a5a7e; letter-spacing: 2px; margin-bottom: 14px; }
        .srv-ic { font-size: 1.5rem; color: #00f5d4; display: block; margin-bottom: 14px; }
        .srv-t { font-size: .98rem; font-weight: 700; margin-bottom: 10px; }
        .srv-d { font-size: .84rem; color: #5a5a7e; line-height: 1.75; }

        /* ─ PROJECTS ─ */
        .proj-g {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: auto;
          gap: 18px;
        }
        .pc {
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          border-radius: 16px; overflow: hidden; display: flex; flex-direction: column;
          transition: all .35s;
        }
        .pc:hover { border-color: rgba(0,245,212,.3); transform: translateY(-5px); box-shadow: 0 24px 60px rgba(0,0,0,.5); }
        .pc.lg { grid-column: span 7; }
        .pc.sm { grid-column: span 5; }
        .pc.sm2 { grid-column: span 4; }
        .pimg { overflow: hidden; flex-shrink: 0; }
        .pimg img { width: 100%; object-fit: cover; display: block; transition: transform .55s; }
        .pc.lg .pimg img { height: 260px; }
        .pc.sm .pimg img { height: 200px; }
        .pc.sm2 .pimg img { height: 180px; }
        .pc:hover .pimg img { transform: scale(1.06); }
        .pb { padding: 24px; flex: 1; display: flex; flex-direction: column; }
        .py { font-family: 'JetBrains Mono', monospace; font-size: .62rem; color: #5a5a7e; letter-spacing: 2px; margin-bottom: 6px; }
        .pt { font-size: 1.08rem; font-weight: 800; margin-bottom: 10px; }
        .pd { font-size: .84rem; color: #5a5a7e; line-height: 1.65; margin-bottom: 16px; flex: 1; }
        .ptags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px; }
        .ptag { font-family: 'JetBrains Mono', monospace; font-size: .66rem; padding: 3px 10px; background: rgba(123,47,255,.14); color: #b09eff; border-radius: 4px; }
        .plinks { display: flex; gap: 20px; margin-top: auto; }
        .plink { font-size: .8rem; color: #5a5a7e; text-decoration: none; transition: color .2s; font-family: 'JetBrains Mono', monospace; }
        .plink:hover { color: #00f5d4; }

        /* featured star */
        .feat-tag {
          font-family: 'JetBrains Mono', monospace; font-size: .62rem; font-weight: 700;
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;
          background: linear-gradient(135deg,#00f5d4,#7b2fff);
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        /* ─ CERTS ─ */
        .cert-g { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .cert {
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          border-radius: 16px; padding: clamp(24px,3vw,36px); position: relative; overflow: hidden;
          transition: transform .35s, box-shadow .35s;
        }
        .cert:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,.45); }
        .cert-top { position: absolute; top: 0; left: 0; right: 0; height: 3px; }
        .cert-badge {
          width: 58px; height: 58px; border-radius: 14px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'JetBrains Mono', monospace; font-weight: 800; font-size: .78rem;
          margin-bottom: 20px; margin-top: 10px; letter-spacing: 1px;
        }
        .cert-tit { font-size: 1.05rem; font-weight: 800; margin-bottom: 5px; }
        .cert-org { font-family: 'JetBrains Mono', monospace; font-size: .68rem; letter-spacing: 1px; margin-bottom: 14px; }
        .cert-d { font-size: .85rem; color: #5a5a7e; line-height: 1.7; margin-bottom: 16px; }
        .cert-dt { font-family: 'JetBrains Mono', monospace; font-size: .68rem; }

        /* ─ COFFEE ─ */
        .coffee-c { max-width: 780px; margin: 0 auto; text-align: center; }
        .cof-em { font-size: 4.5rem; display: block; margin-bottom: 24px; animation: fl 3.5s ease-in-out infinite; }
        @keyframes fl { 0%,100%{transform:translateY(0) rotate(-5deg)} 50%{transform:translateY(-14px) rotate(5deg)} }
        .cof-p { font-size: 1rem; color: #5a5a7e; line-height: 1.9; margin-bottom: 52px; max-width: 540px; margin-left: auto; margin-right: auto; }
        .pay-g { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-bottom: 24px; }
        .pay-c {
          background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07);
          border-radius: 16px; padding: clamp(22px,3vw,30px); text-align: left;
          cursor: pointer; transition: all .3s; display: flex; flex-direction: column; gap: 0;
        }
        .pay-c:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,.45); }
        .pay-h { display: flex; align-items: center; gap: 12px; margin-bottom: 12px; }
        .pay-ico { font-size: 1.8rem; }
        .pay-name { font-size: 1.05rem; font-weight: 800; }
        .pay-desc { font-size: .84rem; color: #5a5a7e; line-height: 1.65; margin-bottom: 22px; flex: 1; }
        .crypto-box {
          font-family: 'JetBrains Mono', monospace; font-size: .71rem; color: #5a5a7e;
          background: rgba(255,255,255,.02); border: 1px solid rgba(255,255,255,.07);
          border-radius: 12px; padding: 20px 24px; text-align: left; line-height: 2.1;
        }
        .crypto-box b { color: #d4d4e8; }
        .crypto-box em { color: #00f5d4; font-style: normal; }

        /* ─ CONTACT ─ */
        .contact-g { display: grid; grid-template-columns: 1fr 1.6fr; gap: clamp(40px,6vw,80px); }
        .ci-title { font-size: clamp(1.6rem,3vw,2.2rem); font-weight: 800; letter-spacing: -1px; margin-bottom: 16px; }
        .ci-p { font-size: .97rem; color: #5a5a7e; line-height: 1.9; margin-bottom: 36px; }
        .citem { display: flex; align-items: center; gap: 16px; margin-bottom: 22px; }
        .cico {
          width: 44px; height: 44px; border-radius: 11px; flex-shrink: 0;
          background: rgba(0,245,212,.08); border: 1px solid rgba(0,245,212,.16);
          display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
        }
        .clbl { font-family: 'JetBrains Mono', monospace; font-size: .62rem; color: #5a5a7e; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 3px; }
        .cval { font-size: .9rem; color: #d4d4e8; text-decoration: none; transition: color .2s; }
        .cval:hover { color: #00f5d4; }
        .socs { display: flex; gap: 10px; margin-top: 30px; }
        .soc {
          width: 42px; height: 42px; border-radius: 11px;
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.09);
          display: flex; align-items: center; justify-content: center;
          font-size: .95rem; color: #5a5a7e; text-decoration: none; transition: all .25s;
        }
        .soc:hover { background: #00f5d4; color: #04040d; border-color: #00f5d4; transform: translateY(-3px); }
        .form-box {
          background: rgba(255,255,255,.025); border: 1px solid rgba(255,255,255,.08);
          border-radius: 18px; padding: clamp(24px,4vw,44px);
        }
        .frow { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 0; }
        .fg { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }
        .fl { font-family: 'JetBrains Mono', monospace; font-size: .62rem; color: #5a5a7e; letter-spacing: 2px; text-transform: uppercase; }
        .fi, .fta {
          background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1);
          border-radius: 9px; padding: 13px 16px; color: #d4d4e8;
          font-family: 'Syne', sans-serif; font-size: .92rem; outline: none; width: 100%;
          transition: border-color .25s;
        }
        .fi:focus, .fta:focus { border-color: #00f5d4; background: rgba(0,245,212,.03); }
        .fi::placeholder, .fta::placeholder { color: #3a3a5e; }
        .fta { min-height: 150px; resize: vertical; }

        /* ─ FOOTER ─ */
        .foot {
          position: relative; z-index: 1;
          border-top: 1px solid rgba(255,255,255,.07);
          background: rgba(4,4,13,.95); padding: 36px clamp(20px,5vw,64px);
        }
        .foot-in {
          max-width: 1400px; margin: 0 auto;
          display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px;
        }
        .f-logo { font-size: 1.2rem; font-weight: 800; text-decoration: none; color: #d4d4e8; letter-spacing: -0.5px; }
        .f-logo b { color: #00f5d4; }
        .f-nav { display: flex; gap: 24px; flex-wrap: wrap; }
        .f-nav a { font-size: .78rem; color: #5a5a7e; text-decoration: none; transition: color .2s; }
        .f-nav a:hover { color: #00f5d4; }
        .wa { display: inline-flex; align-items: center; gap: 8px; background: #25D366; color: white; padding: 10px 22px; border-radius: 50px; font-size: .82rem; font-weight: 700; text-decoration: none; font-family: 'Syne',sans-serif; transition: all .25s; }
        .wa:hover { background: #1ebe5d; transform: translateY(-2px); }
        .f-cp { font-family: 'JetBrains Mono', monospace; font-size: .66rem; color: #3a3a5e; width: 100%; text-align: center; margin-top: 8px; }

        /* ─ MODAL ─ */
        .mo { display: none; position: fixed; inset: 0; z-index: 999; background: rgba(4,4,13,.88); backdrop-filter: blur(16px); align-items: center; justify-content: center; padding: 20px; }
        .mo.on { display: flex; }
        .mbox { background: #0c0c1f; border: 1px solid rgba(0,245,212,.2); border-radius: 20px; padding: 38px; width: 100%; max-width: 440px; animation: su .3s ease; }
        @keyframes su { from{transform:translateY(20px);opacity:0} to{transform:none;opacity:1} }
        .mhead { display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; }
        .mtit { font-size: 1.3rem; font-weight: 800; }
        .mx { background: none; border: none; color: #5a5a7e; font-size: 1.4rem; cursor: pointer; line-height: 1; transition: color .2s; }
        .mx:hover { color: #d4d4e8; }
        .msub { font-size: .87rem; color: #5a5a7e; margin-bottom: 24px; }
        .amts { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; margin-bottom: 14px; }
        .ab { padding: 11px 4px; border: 1px solid rgba(255,255,255,.12); border-radius: 8px; background: none; color: #d4d4e8; font-family: 'JetBrains Mono', monospace; font-size: .84rem; font-weight: 700; cursor: pointer; transition: all .2s; }
        .ab:hover, .ab.on { background: #00f5d4; color: #04040d; border-color: #00f5d4; }
        .mi { width: 100%; padding: 12px 14px; background: rgba(255,255,255,.04); border: 1px solid rgba(255,255,255,.1); border-radius: 9px; color: #d4d4e8; font-family: 'JetBrains Mono', monospace; font-size: .87rem; outline: none; margin-bottom: 14px; transition: border-color .2s; }
        .mi:focus { border-color: #00f5d4; }
        .mi::placeholder { color: #3a3a5e; }

        /* ─ TOAST ─ */
        .toast { position: fixed; bottom: 28px; right: 28px; z-index: 9999; background: #00ff88; color: #001a0a; padding: 16px 24px; border-radius: 12px; font-weight: 800; font-family: 'Syne', sans-serif; box-shadow: 0 12px 48px rgba(0,255,136,.4); max-width: 360px; animation: su .3s ease; }

        /* reveal */
        .rv { opacity: 0; transform: translateY(20px); transition: opacity .6s ease, transform .6s ease; }
        .rv.vis { opacity: 1; transform: none; }

        /* ─ RESPONSIVE ─ */
        @media(max-width:1024px){
          .proj-g .pc.lg { grid-column: span 12; }
          .proj-g .pc.sm { grid-column: span 6; }
          .proj-g .pc.sm2 { grid-column: span 6; }
        }
        @media(max-width:900px){
          .hero-wrap { grid-template-columns: 1fr; }
          .hero-rhs { display: none; }
          .about-g { grid-template-columns: 1fr; }
          .srv-g { grid-template-columns: 1fr 1fr; }
          .cert-g { grid-template-columns: 1fr 1fr; }
          .contact-g { grid-template-columns: 1fr; }
          .pay-g { grid-template-columns: 1fr; }
          .nav-ul { display: none; }
          .hbg { display: flex; }
        }
        @media(max-width:640px){
          .srv-g { grid-template-columns: 1fr; }
          .proj-g .pc.sm,.proj-g .pc.sm2 { grid-column: span 12; }
          .cert-g { grid-template-columns: 1fr; }
          .frow { grid-template-columns: 1fr; }
          .foot-in { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <canvas id="bg-cv" ref={bgRef} />

      {/* NAV */}
      <nav className={`nav${scrolled?' up':''}`}>
        <a href="#" className="logo">Jesse<b>.</b></a>
        <ul className="nav-ul">
          {NAV.map(n=><li key={n}><a href={`#${n.toLowerCase()}`}>{n==='Coffee'?'☕ Coffee':n}</a></li>)}
        </ul>
        <button className="hbg" onClick={()=>setMenu(true)} aria-label="Menu">
          <s/><s/><s/>
        </button>
      </nav>

      <div className={`mob${menu?' on':''}`}>
        <button className="mob-x" onClick={()=>setMenu(false)}>✕</button>
        {NAV.map(n=><a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setMenu(false)}>{n==='Coffee'?'☕ Coffee':n}</a>)}
      </div>

      {/* HERO */}
      <section id="hero">
        <div className="hero-wrap">
          <div className="hero-lhs">
            <div className="eyebrow">Available for freelance</div>
            <h1 className="hero-h1">
              Hi, I&apos;m
              <span className="name">Jesse Kimani</span>
            </h1>
            <div className="tw">
              <span>{typed}</span><span className="cur">|</span>
            </div>
            <p className="hero-p">Building secure, scalable, and resilient infrastructure with a focus on cybersecurity and distributed systems. I break things so others don&apos;t have to.</p>
            <div className="btns">
              <a href="#projects" className="btn-g">⬡ View Projects</a>
              <a href="#contact" className="btn-o">✉ Contact Me</a>
            </div>
          </div>
          <div className="hero-rhs">
            <canvas ref={heroRef} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <div className="s s-alt" id="about">
        <div className="si">
          <div className="ey2">Who I Am</div>
          <div className="about-g">
            <div className="rv">
              <h2 className="sh">Network &amp;<br/><em>Cybersecurity</em> Pro</h2>
              <p className="about-p">Experienced Network Engineer and Penetration Tester specializing in secure infrastructure design, vulnerability assessment, and threat mitigation. CompTIA PenTest+ certified with hands-on expertise across the full attack and defense lifecycle.</p>
              <p className="about-p">I help organizations build resilient systems ensuring data confidentiality, integrity, and availability through comprehensive security and optimized network design.</p>
              <div className="sk-lbl">Technical Arsenal</div>
              <div className="chips">{SKILLS.map(s=><span key={s} className="chip">{s}</span>)}</div>
            </div>
            <div className="rv" style={{transitionDelay:'.12s'}}>
              <div className="stats">
                {[['3+','Years Exp'],['15+','Projects'],['3','Certifications'],['∞','Packets']].map(([n,l])=>(
                  <div key={l} className="stat">
                    <div className="stat-n">{n}</div>
                    <div className="stat-l">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div className="s" id="services">
        <div className="si">
          <div className="ey2">What I Do</div>
          <h2 className="sh rv">Professional<br/><em>Services</em></h2>
          <div className="srv-g">
            {SERVICES.map((sv,i)=>(
              <div key={sv.title} className="srv rv" style={{transitionDelay:`${(i%3)*.08}s`}}>
                <div className="srv-n">{sv.n}</div>
                <span className="srv-ic">{sv.icon}</span>
                <div className="srv-t">{sv.title}</div>
                <div className="srv-d">{sv.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="s s-alt" id="projects">
        <div className="si">
          <div className="ey2">My Work</div>
          <h2 className="sh rv">Featured<br/><em>Projects</em></h2>
          <div className="proj-g">
            {PROJECTS.map((p,i)=>(
              <div key={p.title} className={`pc rv ${p.size==='large'?'lg':i===1?'sm':'sm2'}`} style={{transitionDelay:`${i*.07}s`}}>
                <div className="pimg"><img src={p.img} alt={p.title} loading="lazy"/></div>
                <div className="pb">
                  {p.size==='large'&&<span className="feat-tag">★ FEATURED PROJECT</span>}
                  <div className="py">{p.year}</div>
                  <div className="pt">{p.title}</div>
                  <div className="pd">{p.desc}</div>
                  <div className="ptags">{p.tags.map(t=><span key={t} className="ptag">{t}</span>)}</div>
                  <div className="plinks">
                    <a href={p.github} target="_blank" rel="noreferrer" className="plink">⬡ GitHub</a>
                    <a href={p.link} className="plink">↗ View</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CERTS */}
      <div className="s" id="certifications">
        <div className="si">
          <div className="ey2">Credentials</div>
          <h2 className="sh rv"><em>Certifications</em></h2>
          <div className="cert-g">
            {CERTS.map((c,i)=>(
              <div key={c.full} className="cert rv" style={{transitionDelay:`${i*.1}s`, borderTopColor:c.color}}>
                <div className="cert-top" style={{background:`linear-gradient(90deg,${c.color},transparent)`}}/>
                <div className="cert-badge" style={{background:`${c.color}15`,color:c.color}}>{c.short}</div>
                <div className="cert-tit">{c.full}</div>
                <div className="cert-org" style={{color:c.color}}>{c.org}</div>
                <div className="cert-d">{c.desc}</div>
                <div className="cert-dt" style={{color:c.color}}>Issued {c.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* COFFEE */}
      <div className="s s-alt" id="coffee">
        <div className="si">
          <div className="coffee-c">
            <span className="cof-em">☕</span>
            <div className="ey2" style={{justifyContent:'center'}}>Support My Work</div>
            <h2 className="sh rv" style={{marginBottom:20}}>Buy Me a<br/><em>Coffee</em></h2>
            <p className="cof-p">If my open-source work, writeups, or tools have helped you — buy me a coffee! Pay via crypto on Binance or card/M-Pesa via Paystack.</p>
            <div className="pay-g rv">
              <div className="pay-c" style={{borderTop:'3px solid #F0B90B'}} onClick={()=>setModal('binance')}>
                <div className="pay-h">
                  <span className="pay-ico">₿</span>
                  <span className="pay-name" style={{color:'#F0B90B'}}>Binance Pay</span>
                </div>
                <p className="pay-desc">Send crypto instantly. Zero fees. BTC, ETH, BNB, USDT all supported.</p>
                <button className="btn-g" style={{background:'#F0B90B',width:'100%',justifyContent:'center'}}>Pay with Crypto</button>
              </div>
              <div className="pay-c" style={{borderTop:'3px solid #00C3F7'}} onClick={()=>setModal('paystack')}>
                <div className="pay-h">
                  <span className="pay-ico">💳</span>
                  <span className="pay-name" style={{color:'#00C3F7'}}>Paystack</span>
                </div>
                <p className="pay-desc">Card, M-Pesa or bank transfer. KES, USD, NGN supported.</p>
                <button className="btn-g" style={{background:'#00C3F7',color:'#001a22',width:'100%',justifyContent:'center'}}>Pay with Card / M-Pesa</button>
              </div>
            </div>
            <div className="crypto-box rv">
              <b>Direct crypto?  </b>
              <em>BTC: </em>bc1qxy2kgdygjrsqtzq2n0yrf249wfj5ygr4hmx2n9<br/>
              <em>ETH/USDT: </em>0x71C7656EC7ab88b098defB751B7401B5f6d8976F<br/>
              <span style={{opacity:.5,fontSize:'.65rem'}}>* Replace with your real wallet addresses before going live</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div className="s" id="contact">
        <div className="si">
          <div className="ey2">Get In Touch</div>
          <div className="contact-g">
            <div className="rv">
              <div className="ci-title">Let&apos;s<br/><em style={{color:'#00f5d4',fontStyle:'normal'}}>Connect</em></div>
              <p className="ci-p">Always open to new projects, collaboration, or just chatting about tech and security. Reach out any time.</p>
              {[
                {ico:'✉',lbl:'Email',   val:'netg3ek@gmail.com',  href:'mailto:netg3ek@gmail.com'},
                {ico:'📍',lbl:'Based',  val:'Nairobi, Kenya 🇰🇪',href:'#'},
                {ico:'⬡',lbl:'GitHub', val:'github.com/netgee-k', href:'https://github.com/netgee-k'},
              ].map(c=>(
                <div key={c.lbl} className="citem">
                  <div className="cico">{c.ico}</div>
                  <div>
                    <div className="clbl">{c.lbl}</div>
                    <a href={c.href} target="_blank" rel="noreferrer" className="cval">{c.val}</a>
                  </div>
                </div>
              ))}
              <div className="socs">
                {[{i:'𝕏',h:'#'},{i:'⬡',h:'https://github.com/netgee-k'},{i:'in',h:'#'},{i:'💬',h:'https://wa.me/254707540010'}].map((s,idx)=>(
                  <a key={idx} href={s.h} target="_blank" rel="noreferrer" className="soc">{s.i}</a>
                ))}
              </div>
            </div>
            <div className="rv" style={{transitionDelay:'.12s'}}>
              <div className="form-box">
                <form onSubmit={onSub}>
                  <div className="frow">
                    <div className="fg">
                      <label className="fl">Name</label>
                      <input className="fi" required placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
                    </div>
                    <div className="fg">
                      <label className="fl">Email</label>
                      <input className="fi" type="email" required placeholder="you@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
                    </div>
                  </div>
                  <div className="fg">
                    <label className="fl">Subject</label>
                    <input className="fi" required placeholder="What's this about?" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})}/>
                  </div>
                  <div className="fg">
                    <label className="fl">Message</label>
                    <textarea className="fta" required placeholder="Tell me more..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
                  </div>
                  <button type="submit" className="btn-g" style={{width:'100%',justifyContent:'center',padding:'16px',marginTop:4}}>
                    Send Message ↗
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="foot">
        <div className="foot-in">
          <a href="#" className="f-logo">Jesse<b>.</b></a>
          <nav className="f-nav">
            {NAV.map(n=><a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}
          </nav>
          <a href="https://wa.me/254707540010" target="_blank" rel="noreferrer" className="wa">💬 WhatsApp</a>
          <p className="f-cp">© 2025 Jesse Kimani — All rights reserved.</p>
        </div>
      </footer>

      {/* BINANCE MODAL */}
      <div className={`mo${modal==='binance'?' on':''}`} onClick={e=>{if(e.target===e.currentTarget)setModal(null);}}>
        <div className="mbox">
          <div className="mhead">
            <span className="mtit">☕ Buy Me a Coffee</span>
            <button className="mx" onClick={()=>setModal(null)}>✕</button>
          </div>
          <p className="msub">Via <strong style={{color:'#F0B90B'}}>Binance Pay</strong> — pick an amount:</p>
          <div className="amts">
            {B_AMT.map(a=><button key={a} className={`ab${selB===a&&!custB?' on':''}`} onClick={()=>{setSelB(a);setCustB('');}}>${a}</button>)}
          </div>
          <input className="mi" type="number" placeholder="Custom amount (USD)" min="1" value={custB} onChange={e=>setCustB(e.target.value)}/>
          <button className="btn-g" style={{width:'100%',justifyContent:'center',background:'#F0B90B',padding:'14px'}} onClick={payB}>Proceed with Binance Pay</button>
        </div>
      </div>

      {/* PAYSTACK MODAL */}
      <div className={`mo${modal==='paystack'?' on':''}`} onClick={e=>{if(e.target===e.currentTarget)setModal(null);}}>
        <div className="mbox">
          <div className="mhead">
            <span className="mtit">☕ Buy Me a Coffee</span>
            <button className="mx" onClick={()=>setModal(null)}>✕</button>
          </div>
          <p className="msub">Via <strong style={{color:'#00C3F7'}}>Paystack</strong> — card, M-Pesa or bank:</p>
          <div className="amts">
            {P_AMT.map(a=><button key={a} className={`ab${selP===a&&!custP?' on':''}`} onClick={()=>{setSelP(a);setCustP('');}}>{a>=1000?`${a/1000}k`:a}</button>)}
          </div>
          <input className="mi" type="number" placeholder="Custom amount (KES)" min="100" value={custP} onChange={e=>setCustP(e.target.value)}/>
          <input className="mi" type="email" placeholder="Your email (for receipt)" value={psEmail} onChange={e=>setPsEmail(e.target.value)}/>
          <button className="btn-g" style={{width:'100%',justifyContent:'center',background:'#00C3F7',color:'#001a22',padding:'14px'}} onClick={payP}>Pay with Paystack</button>
        </div>
      </div>

      {toast&&<div className="toast">{toast}</div>}
    </>
  );
}
