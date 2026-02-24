'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import * as THREE from 'three';

// MUI
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';

// MUI Icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SecurityIcon from '@mui/icons-material/Security';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import CodeIcon from '@mui/icons-material/Code';
import SearchIcon from '@mui/icons-material/Search';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import CloudIcon from '@mui/icons-material/Cloud';
import SendIcon from '@mui/icons-material/Send';
import CoffeeIcon from '@mui/icons-material/Coffee';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import VerifiedIcon from '@mui/icons-material/Verified';
import TerminalIcon from '@mui/icons-material/Terminal';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// ─── THEME ───────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary:   { main: '#00f5d4' },
    secondary: { main: '#7b2fff' },
    error:     { main: '#f500a0' },
    background:{ default: '#080810', paper: '#0d0d1a' },
    text:      { primary: '#e8e8ff', secondary: '#6a6a8a' },
  },
  typography: {
    fontFamily: "Syne, sans-serif",
    h1: { fontWeight: 800, letterSpacing: '-2px' },
    h2: { fontWeight: 800, letterSpacing: '-1px' },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontFamily: "Syne, sans-serif", fontWeight: 700, borderRadius: 6 },
        containedPrimary: {
          background: '#00f5d4', color: '#080810',
          '&:hover': { background: '#e8e8ff', boxShadow: '0 8px 24px rgba(0,245,212,.35)' },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: '#0d0d1a',
          border: '1px solid rgba(255,255,255,.07)',
          transition: 'all .35s ease',
          '&:hover': { borderColor: 'rgba(0,245,212,.35)', transform: 'translateY(-6px)', boxShadow: '0 20px 50px rgba(0,0,0,.5)' },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: "JetBrains Mono, monospace", fontSize: '.75rem',
          background: 'rgba(0,245,212,.08)', border: '1px solid rgba(0,245,212,.25)', color: '#00f5d4',
          '&:hover': { background: '#00f5d4', color: '#080810' },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'rgba(255,255,255,.12)' },
            '&:hover fieldset': { borderColor: 'rgba(0,245,212,.4)' },
            '&.Mui-focused fieldset': { borderColor: '#00f5d4' },
          },
          '& .MuiInputLabel-root.Mui-focused': { color: '#00f5d4' },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: { background: '#0d0d1a', border: '1px solid rgba(0,245,212,.25)', borderRadius: 16 },
      },
    },
    MuiAppBar: {
      styleOverrides: { root: { background: 'transparent', boxShadow: 'none' } },
    },
  },
});

// ─── DATA ────────────────────────────────────────────────────
const CONFIG = {
  paystack: { publicKey: 'pk_live_YOUR_PAYSTACK_PUBLIC_KEY', emailFallback: 'netg3ek@gmail.com' },
  binance:  { payLink: 'https://pay.binance.com/en' },
};
const NAV = ['About','Services','Projects','Certifications','Coffee','Contact'];
const ROLES = ['Network Engineer.','Cybersecurity Specialist.','Penetration Tester.','DevOps Engineer.'];
const SKILLS = ['Penetration Testing','Network Security','Cisco / CCNA','AWS / Azure','Docker','Kubernetes','Python','JavaScript','TypeScript','Bash','Metasploit','Wireshark','Burp Suite','Nmap','SIEM','OSINT','PCI DSS','Digital Forensics'];
const SERVICES = [
  { Icon: SecurityIcon,     title: 'Penetration Testing',    desc: 'Comprehensive security assessments, vulnerability scanning, ethical hacking and remediation guidance to fortify your defenses.' },
  { Icon: NetworkCheckIcon, title: 'Network Design & Security',desc: 'Security-first network architectures: SDN, VLANs, routing protocols, and secure remote access solutions.' },
  { Icon: CodeIcon,         title: 'Web Development',         desc: 'Secure full-stack applications from polished frontends to hardened APIs, built with security best practices from day one.' },
  { Icon: SearchIcon,       title: 'Digital Forensics',       desc: 'Incident response, evidence collection and court-ready analysis following security breaches or internal investigations.' },
  { Icon: ShowChartIcon,    title: 'Telemetry & Monitoring',  desc: 'Grafana, Prometheus and custom dashboards for full network and security visibility, alerting and observability.' },
  { Icon: CloudIcon,        title: 'Cloud Security',          desc: 'AWS and Azure security hardening: IAM policies, secure VPC design, and cloud-native security tools.' },
];
const PROJECTS = [
  {
    img: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&fit=crop&w=800&q=80',
    title: 'Autoshift v3',
    desc: 'Intelligent automation platform that streamlines shift management, scheduling and workforce coordination. Built with a modern React frontend and robust backend API.',
    tags: ['React','Node.js','Automation','Dashboard'],
    github: 'https://github.com/netgee-k/Autoshift-v3',
    link: '#',
    linkLabel: 'Live Demo',
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    title: 'Metasploitable2 Walkthrough',
    desc: 'Comprehensive penetration testing guide on deliberately vulnerable VMs — full exploitation chain documented for training purposes.',
    tags: ['Security','PenTest','Virtualization'],
    github: 'https://github.com/netgee-k',
    link: '#',
    linkLabel: 'Docs',
    featured: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
    title: 'SDN DDoS Detection',
    desc: 'Research comparing DDoS susceptibility of Software Defined Networks vs traditional architectures, with mitigation recommendations.',
    tags: ['Network Security','SDN','Research'],
    github: 'https://github.com/netgee-k',
    link: '#',
    linkLabel: 'Paper',
    featured: false,
  },
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    title: 'TillBase POS',
    desc: 'Secure cloud-based point of sale and inventory management system with PCI DSS compliance and real-time analytics.',
    tags: ['Web App','Python','PCI DSS'],
    github: 'https://github.com/netgee-k',
    link: '#',
    linkLabel: 'Live Demo',
    featured: false,
  },
];
const CERTS = [
  { Icon: SecurityIcon,     title: 'CompTIA PenTest+',          desc: 'Planning, scoping, vulnerability scanning and executing penetration testing engagements.', date: 'May 2023',  color: '#ff6b35' },
  { Icon: VerifiedIcon,     title: 'OPSWAT Data Transfer Security', desc: 'Critical infrastructure protection, secure data transfer and malware prevention.', date: 'Dec 2022',  color: '#00f5d4' },
  { Icon: NetworkCheckIcon, title: 'CCNA',                       desc: 'Installing, configuring, operating and troubleshooting routed and switched networks.', date: '2021',       color: '#7b2fff' },
];
const BINANCE_AMOUNTS  = [1,3,5,10,20,50];
const PAYSTACK_AMOUNTS = [150,400,700,1500,3000,7000];

// ─── COMPONENT ───────────────────────────────────────────────
export default function Home() {
  const bgCanvasRef   = useRef<HTMLCanvasElement>(null);
  const heroCanvasRef = useRef<HTMLCanvasElement>(null);

  const [drawerOpen,      setDrawerOpen]      = useState(false);
  const [typedText,       setTypedText]       = useState('');
  const [modal,           setModal]           = useState<'binance'|'paystack'|null>(null);
  const [selBinance,      setSelBinance]      = useState(5);
  const [selPaystack,     setSelPaystack]     = useState(400);
  const [custBinance,     setCustBinance]     = useState('');
  const [custPaystack,    setCustPaystack]    = useState('');
  const [psEmail,         setPsEmail]         = useState('');
  const [snack,           setSnack]           = useState('');
  const [form,            setForm]            = useState({ name:'', email:'', subject:'', message:'' });

  // scroll elevation for AppBar
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 60 });

  // Typewriter
  useEffect(() => {
    let ri=0,ci=0,del=false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const cur = ROLES[ri];
      setTypedText(del ? cur.slice(0,ci--) : cur.slice(0,ci++));
      if (!del && ci>cur.length)  { del=true;  t=setTimeout(tick,1800); return; }
      if  (del && ci<0)           { del=false; ri=(ri+1)%ROLES.length; ci=0; t=setTimeout(tick,400); return; }
      t=setTimeout(tick, del?60:110);
    };
    t=setTimeout(tick,900);
    return ()=>clearTimeout(t);
  },[]);

  // Scroll reveal
  useEffect(()=>{
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('visible'); });
    },{ threshold:0.1 });
    els.forEach(el=>obs.observe(el));
    return ()=>obs.disconnect();
  },[]);

  // THREE.JS BG
  useEffect(()=>{
    if(!bgCanvasRef.current) return;
    const test = document.createElement('canvas').getContext('webgl');
    if(!test) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ canvas: bgCanvasRef.current, alpha:true, antialias:true }); }
    catch { return; }
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.z = 30;
    const pos = new Float32Array(800*3);
    for(let i=0;i<pos.length;i++) pos[i]=(Math.random()-.5)*80;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos,3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color:0x00f5d4, size:0.1, transparent:true, opacity:0.4 }));
    scene.add(pts);
    const addS = (r:number,c:number,x:number,y:number,z:number)=>{ const m=new THREE.Mesh(new THREE.IcosahedronGeometry(r,1),new THREE.MeshBasicMaterial({color:c,wireframe:true,transparent:true,opacity:0.05})); m.position.set(x,y,z); scene.add(m); return m; };
    const s1=addS(8,0x00f5d4,-15,5,-10), s2=addS(5,0x7b2fff,18,-8,-5), s3=addS(3,0xf500a0,5,12,-15);
    let mx=0,my=0;
    const onM=(e:MouseEvent)=>{ mx=(e.clientX/window.innerWidth-.5)*2; my=-(e.clientY/window.innerHeight-.5)*2; };
    window.addEventListener('mousemove',onM);
    let raf:number;
    const animate=()=>{ raf=requestAnimationFrame(animate); const t=Date.now()*.0003; pts.rotation.y=t*.1+mx*.04; pts.rotation.x=my*.02; s1.rotation.y=t*.4; s1.rotation.x=t*.2; s2.rotation.y=-t*.3; s2.rotation.z=t*.15; s3.rotation.x=t*.5; s3.rotation.z=t*.3; renderer.render(scene,camera); };
    animate();
    const onR=()=>{ renderer.setSize(window.innerWidth,window.innerHeight); camera.aspect=window.innerWidth/window.innerHeight; camera.updateProjectionMatrix(); };
    window.addEventListener('resize',onR);
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('mousemove',onM); window.removeEventListener('resize',onR); renderer.dispose(); };
  },[]);

  // THREE.JS HERO
  useEffect(()=>{
    if(!heroCanvasRef.current) return;
    const test = document.createElement('canvas').getContext('webgl');
    if(!test) return;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ canvas: heroCanvasRef.current, alpha:true, antialias:true }); }
    catch { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
    renderer.setSize(420,420);
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50,1,0.1,100);
    camera.position.set(0,0,5);
    const core  = new THREE.Mesh(new THREE.IcosahedronGeometry(.7,3), new THREE.MeshBasicMaterial({color:0x00f5d4,wireframe:true}));
    const inner = new THREE.Mesh(new THREE.IcosahedronGeometry(.55,2),new THREE.MeshBasicMaterial({color:0x001a16,transparent:true,opacity:.9}));
    scene.add(core,inner);
    const mkR=(r:number,c:number,rx:number,rz:number)=>{ const m=new THREE.Mesh(new THREE.TorusGeometry(r,.018,8,80),new THREE.MeshBasicMaterial({color:c,transparent:true,opacity:.45})); m.rotation.x=rx; m.rotation.z=rz; scene.add(m); return m; };
    const r1=mkR(1.4,0x00f5d4,Math.PI/2,0), r2=mkR(1.6,0x7b2fff,Math.PI/4,Math.PI/6), r3=mkR(1.8,0xf500a0,Math.PI/6,Math.PI/3);
    const nGeo=new THREE.SphereGeometry(.08,8,8);
    const nColors=[0x00f5d4,0x7b2fff,0xf500a0];
    const nData:[[number,number,number]][] = [[[1.4,0,0]],[[-1.4,0,0]],[[0,1.4,0]],[[0,-1.4,0]],[[0,0,1.6]],[[0,0,-1.6]]];
    const nodes = nData.map(([[x,y,z]],i)=>{ const m=new THREE.Mesh(nGeo,new THREE.MeshBasicMaterial({color:nColors[i%3]})); m.position.set(x,y,z); scene.add(m); return m; });
    const cube=new THREE.Mesh(new THREE.BoxGeometry(2.8,2.8,2.8),new THREE.MeshBasicMaterial({color:0x7b2fff,wireframe:true,transparent:true,opacity:.12}));
    scene.add(cube);
    let hmx=0,hmy=0;
    const onM=(e:MouseEvent)=>{ hmx=e.clientX/window.innerWidth-.5; hmy=-(e.clientY/window.innerHeight-.5); };
    window.addEventListener('mousemove',onM);
    let raf:number;
    const animate=()=>{ raf=requestAnimationFrame(animate); const t=Date.now()*.001; core.rotation.y=t*.5; core.rotation.x=t*.3; inner.rotation.y=-t*.4; r1.rotation.z=t*.4; r2.rotation.y=t*.35; r3.rotation.x=t*.3; cube.rotation.y=t*.15+hmx*.5; cube.rotation.x=hmy*.5; nodes.forEach((n,i)=>{ n.position.x=Math.cos(t*.6+i*1.05)*1.4; n.position.y=Math.sin(t*.5+i*1.05)*1.4; n.position.z=Math.sin(t*.4+i*1.05)*.8; }); renderer.render(scene,camera); };
    animate();
    return ()=>{ cancelAnimationFrame(raf); window.removeEventListener('mousemove',onM); renderer.dispose(); };
  },[]);

  const toast  = (msg:string)=>{ setSnack(msg); };
  const payBinance  = ()=>{ const a=parseFloat(custBinance)||selBinance; window.open(`${CONFIG.binance.payLink}?amount=${a}&currency=USDT&memo=CoffeeForJesse`,'_blank'); setModal(null); };
  const payPaystack = ()=>{
    const a=(parseFloat(custPaystack)||selPaystack)*100;
    const e=psEmail||CONFIG.paystack.emailFallback;
    if(!e.includes('@')){ alert('Enter a valid email.'); return; }
    const P=(window as any).PaystackPop;
    if(!P){ alert('Paystack loading, try again.'); return; }
    P.setup({ key:CONFIG.paystack.publicKey, email:e, amount:a, currency:'KES', ref:'coffee_'+Date.now(),
      callback:(r:any)=>{ setModal(null); toast('Thank you! ☕ Ref: '+r.reference); },
      onClose:()=>{} }).openIframe();
  };
  const handleSubmit=(e:React.FormEvent)=>{ e.preventDefault(); toast("Message sent! I'll get back to you soon 🚀"); setForm({name:'',email:'',subject:'',message:''}); };

  // ── STYLES ──────────────────────────────────────────────────
  const sectionLabel = { fontFamily:"JetBrains Mono, monospace", fontSize:'.72rem', color:'primary.main', letterSpacing:'4px', textTransform:'uppercase' as const, display:'flex', alignItems:'center', gap:1.5, mb:1.5, '&::after':{content:'""'} };
  const glowBtn = { background:'linear-gradient(135deg,#00f5d4,#7b2fff)', color:'#080810', fontWeight:800, px:4, py:1.4, borderRadius:2, fontSize:'.9rem', '&:hover':{opacity:.9, transform:'translateY(-2px)', boxShadow:'0 12px 30px rgba(0,245,212,.35)'} };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@300;400;500&display=swap');
        @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
        html { scroll-behavior: smooth; }
        body { font-family: 'Syne', sans-serif !important; }
        #bg-canvas { position:fixed; inset:0; z-index:0; pointer-events:none; width:100%; height:100%; }
        .reveal { opacity:0; transform:translateY(24px); transition:all .6s ease; }
        .reveal.visible { opacity:1; transform:none; }
        .glow-border { border:1px solid rgba(0,245,212,.15); transition:border-color .3s,box-shadow .3s; }
        .glow-border:hover { border-color:rgba(0,245,212,.5); box-shadow:0 0 24px rgba(0,245,212,.08); }
        .featured-badge { position:absolute; top:14px; right:14px; background:linear-gradient(135deg,#00f5d4,#7b2fff); color:#080810; font-size:.7rem; font-weight:800; padding:4px 10px; border-radius:20px; font-family:'JetBrains Mono',monospace; letter-spacing:1px; text-transform:uppercase; z-index:2; }
        .mono { font-family:'JetBrains Mono',monospace !important; }
        ::-webkit-scrollbar { width:6px; }
        ::-webkit-scrollbar-track { background:#040408; }
        ::-webkit-scrollbar-thumb { background:#00f5d4; border-radius:3px; }
        ::selection { background:#00f5d4; color:#080810; }
      `}</style>

      <canvas id="bg-canvas" ref={bgCanvasRef} />

      {/* ── APPBAR ─────────────────────────────────────── */}
      <AppBar position="fixed" sx={{ zIndex:1200, transition:'all .4s', ...(scrolled ? { background:'rgba(8,8,16,.9)', backdropFilter:'blur(20px)', borderBottom:'1px solid rgba(0,245,212,.1)' } : {}) }}>
        <Toolbar sx={{ maxWidth:1200, mx:'auto', width:'100%', px:{xs:2,md:4} }}>
          <Typography variant="h6" sx={{ flexGrow:1, fontWeight:800, fontSize:'1.3rem', letterSpacing:'-0.5px' }}>
            Jesse<Box component="span" sx={{ color:'primary.main' }}>.</Box>
          </Typography>
          <Box sx={{ display:{xs:'none',md:'flex'}, gap:4 }}>
            {NAV.map(n=>(
              <Box key={n} component="a" href={`#${n.toLowerCase()}`}
                sx={{ color:'text.secondary', textDecoration:'none', fontSize:'.82rem', fontWeight:600, letterSpacing:'1px', textTransform:'uppercase', transition:'color .2s', '&:hover':{color:'primary.main'} }}>
                {n === 'Coffee' ? '☕ Coffee' : n}
              </Box>
            ))}
          </Box>
          <IconButton sx={{ display:{md:'none'}, ml:2, color:'text.primary' }} onClick={()=>setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={()=>setDrawerOpen(false)}
        PaperProps={{ sx:{ width:260, background:'#080810', borderLeft:'1px solid rgba(0,245,212,.15)' } }}>
        <Box sx={{ p:2, display:'flex', justifyContent:'flex-end' }}>
          <IconButton onClick={()=>setDrawerOpen(false)} sx={{ color:'text.secondary' }}><CloseIcon /></IconButton>
        </Box>
        <List>
          {NAV.map(n=>(
            <ListItem key={n} disablePadding>
              <ListItemButton component="a" href={`#${n.toLowerCase()}`} onClick={()=>setDrawerOpen(false)}
                sx={{ py:1.5, '& .MuiListItemText-primary':{ fontFamily:"Syne, sans-serif", fontWeight:700, fontSize:'1.1rem' } }}>
                <ListItemText primary={n === 'Coffee' ? '☕ Coffee' : n} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* ── HERO ───────────────────────────────────────── */}
      <Box id="hero" component="section" sx={{ position:'relative', zIndex:1, minHeight:'100vh', display:'flex', alignItems:'center', pt:'80px' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ fontFamily:"JetBrains Mono, monospace", fontSize:'.78rem', color:'primary.main', letterSpacing:'3px', textTransform:'uppercase', mb:2.5, display:'flex', alignItems:'center', gap:1.5 }}>
                <Box sx={{ width:28, height:1, background:'primary.main', bgcolor:'primary.main' }} />
                Available for freelance
              </Box>
              <Typography variant="h1" sx={{ fontSize:{xs:'2.6rem',md:'4.2rem'}, lineHeight:1.05, mb:2 }}>
                Hi, I&apos;m<br />
                <Box component="span" sx={{ background:'linear-gradient(135deg,#00f5d4 0%,#7b2fff 50%,#f500a0 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  Jesse Kimani
                </Box>
              </Typography>
              <Box className="mono" sx={{ fontSize:'1rem', color:'primary.main', mb:2.5, minHeight:28 }}>
                {typedText}<Box component="span" sx={{ animation:'blink 1s infinite', '@keyframes blink':{'0%,100%':{opacity:1},'50%':{opacity:0}} }}>|</Box>
              </Box>
              <Typography color="text.secondary" sx={{ fontSize:'1rem', lineHeight:1.85, maxWidth:500, mb:4.5 }}>
                Building secure, scalable, and resilient infrastructure with a focus on cybersecurity and distributed systems. I break things so others don&apos;t have to.
              </Typography>
              <Box sx={{ display:'flex', gap:2, flexWrap:'wrap' }}>
                <Button variant="contained" href="#projects" startIcon={<TerminalIcon />} sx={glowBtn}>View Projects</Button>
                <Button variant="outlined" href="#contact" startIcon={<EmailIcon />}
                  sx={{ borderColor:'rgba(255,255,255,.2)', color:'text.primary', px:4, py:1.4, borderRadius:2, fontSize:'.9rem', '&:hover':{borderColor:'primary.main', color:'primary.main'} }}>
                  Contact Me
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display:{xs:'none',md:'flex'}, justifyContent:'center' }}>
              <canvas ref={heroCanvasRef} style={{ width:420, height:420, borderRadius:20 }} />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── ABOUT ──────────────────────────────────────── */}
      <Box id="about" component="section" sx={{ position:'relative', zIndex:1, py:14, background:'rgba(4,4,8,.7)', backdropFilter:'blur(4px)' }}>
        <Container maxWidth="lg">
          <Box sx={sectionLabel}>Who I Am</Box>
          <Grid container spacing={8} alignItems="flex-start">
            <Grid item xs={12} md={7} className="reveal">
              <Typography variant="h2" sx={{ fontSize:{xs:'2rem',md:'2.8rem'}, mb:4 }}>
                Network &<br />Cybersecurity Pro
              </Typography>
              <Typography color="text.secondary" sx={{ mb:2.5, lineHeight:1.9 }}>
                Experienced Network Engineer and Penetration Tester specializing in secure infrastructure design, vulnerability assessment, and threat mitigation. CompTIA PenTest+ certified professional with hands-on expertise across the full attack and defense lifecycle.
              </Typography>
              <Typography color="text.secondary" sx={{ mb:4, lineHeight:1.9 }}>
                I help organizations build resilient systems that ensure data confidentiality, integrity, and availability through comprehensive security measures and optimized network solutions.
              </Typography>
              <Typography className="mono" sx={{ fontSize:'.72rem', color:'text.secondary', letterSpacing:'3px', textTransform:'uppercase', mb:2 }}>Technical Arsenal</Typography>
              <Box sx={{ display:'flex', flexWrap:'wrap', gap:1 }}>
                {SKILLS.map(s=><Chip key={s} label={s} size="small" />)}
              </Box>
            </Grid>
            <Grid item xs={12} md={5} className="reveal" sx={{ transitionDelay:'.15s' }}>
              <Grid container spacing={2}>
                {[['3+','Years Experience'],['15+','Projects Done'],['3','Certifications'],['∞','Packets Analyzed']].map(([n,l])=>(
                  <Grid item xs={6} key={l}>
                    <Card className="glow-border" sx={{ p:3, textAlign:'center' }}>
                      <Typography sx={{ fontSize:'2.8rem', fontWeight:800, color:'primary.main', lineHeight:1, mb:.5 }}>{n}</Typography>
                      <Typography className="mono" sx={{ fontSize:'.72rem', color:'text.secondary', letterSpacing:'1px' }}>{l}</Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── SERVICES ───────────────────────────────────── */}
      <Box id="services" component="section" sx={{ position:'relative', zIndex:1, py:14 }}>
        <Container maxWidth="lg">
          <Box sx={sectionLabel}>What I Do</Box>
          <Typography variant="h2" className="reveal" sx={{ fontSize:{xs:'2rem',md:'2.8rem'}, mb:7 }}>Professional Services</Typography>
          <Grid container spacing={.25} sx={{ border:'1px solid rgba(255,255,255,.06)', borderRadius:3, overflow:'hidden' }}>
            {SERVICES.map((s,i)=>(
              <Grid item xs={12} sm={6} md={4} key={s.title}>
                <Box className="reveal glow-border" sx={{ p:4.5, height:'100%', background:'#0d0d1a', cursor:'default', transition:'background .3s', transitionDelay:`${(i%3)*.08}s`, position:'relative', overflow:'hidden',
                  '&::after':{content:'""'  , position:'absolute', bottom:0, left:0, width:'100%', height:2, background:'linear-gradient(90deg,#00f5d4,#7b2fff)', transform:'scaleX(0)', transition:'transform .35s', transformOrigin:'left'},
                  '&:hover':{background:'#111125'}, '&:hover::after':{transform:'scaleX(1)'} }}>
                  <Avatar sx={{ width:48, height:48, background:'rgba(0,245,212,.1)', color:'primary.main', mb:2.5, borderRadius:2 }}><s.Icon /></Avatar>
                  <Typography variant="h6" sx={{ mb:1.5 }}>{s.title}</Typography>
                  <Typography color="text.secondary" sx={{ fontSize:'.88rem', lineHeight:1.75 }}>{s.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── PROJECTS ───────────────────────────────────── */}
      <Box id="projects" component="section" sx={{ position:'relative', zIndex:1, py:14, background:'rgba(4,4,8,.7)', backdropFilter:'blur(4px)' }}>
        <Container maxWidth="lg">
          <Box sx={sectionLabel}>My Work</Box>
          <Typography variant="h2" className="reveal" sx={{ fontSize:{xs:'2rem',md:'2.8rem'}, mb:7 }}>Featured Projects</Typography>
          <Grid container spacing={3}>
            {PROJECTS.map((p,i)=>(
              <Grid item xs={12} sm={6} md={p.featured?6:4} key={p.title}>
                <Card className="reveal" sx={{ height:'100%', position:'relative', transitionDelay:`${i*.08}s` }}>
                  {p.featured && <Box className="featured-badge">Featured</Box>}
                  <CardMedia component="img" height={p.featured?220:180} image={p.img} alt={p.title} sx={{ transition:'transform .5s', '&:hover':{transform:'scale(1.05)'} }} />
                  <CardContent sx={{ p:3 }}>
                    <Typography variant="h6" sx={{ mb:1 }}>{p.title}</Typography>
                    <Typography color="text.secondary" sx={{ fontSize:'.88rem', mb:2, lineHeight:1.65 }}>{p.desc}</Typography>
                    <Box sx={{ display:'flex', flexWrap:'wrap', gap:.8, mb:2.5 }}>
                      {p.tags.map(t=>(
                        <Box key={t} className="mono" sx={{ fontSize:'.7rem', px:1.2, py:.4, background:'rgba(123,47,255,.15)', color:'#a87fff', borderRadius:1 }}>{t}</Box>
                      ))}
                    </Box>
                    <Box sx={{ display:'flex', gap:2 }}>
                      <Button size="small" href={p.github} target="_blank" startIcon={<GitHubIcon />} sx={{ color:'text.secondary', fontSize:'.8rem', p:0, '&:hover':{color:'primary.main'} }}>GitHub</Button>
                      <Button size="small" href={p.link} startIcon={<OpenInNewIcon />} sx={{ color:'text.secondary', fontSize:'.8rem', p:0, '&:hover':{color:'primary.main'} }}>{p.linkLabel}</Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── CERTIFICATIONS ─────────────────────────────── */}
      <Box id="certifications" component="section" sx={{ position:'relative', zIndex:1, py:14 }}>
        <Container maxWidth="lg">
          <Box sx={sectionLabel}>Credentials</Box>
          <Typography variant="h2" className="reveal" sx={{ fontSize:{xs:'2rem',md:'2.8rem'}, mb:7 }}>Certifications</Typography>
          <Grid container spacing={3}>
            {CERTS.map((c,i)=>(
              <Grid item xs={12} md={4} key={c.title}>
                <Card className="reveal glow-border" sx={{ p:3, height:'100%', transitionDelay:`${i*.1}s`, borderTop:`3px solid ${c.color}` }}>
                  <Avatar sx={{ width:52, height:52, background:`${c.color}18`, color:c.color, mb:2, borderRadius:2 }}><c.Icon /></Avatar>
                  <Typography variant="h6" sx={{ mb:1 }}>{c.title}</Typography>
                  <Typography color="text.secondary" sx={{ fontSize:'.85rem', lineHeight:1.65, mb:2 }}>{c.desc}</Typography>
                  <Box className="mono" sx={{ fontSize:'.72rem', color:c.color }}>Issued {c.date}</Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ── COFFEE ─────────────────────────────────────── */}
      <Box id="coffee" component="section" sx={{ position:'relative', zIndex:1, py:14, background:'rgba(4,4,8,.7)', backdropFilter:'blur(4px)', textAlign:'center' }}>
        <Container maxWidth="sm">
          <Box sx={{ fontSize:'3.5rem', mb:3, animation:'float 3s ease-in-out infinite', '@keyframes float':{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-12px)'}} }}>☕</Box>
          <Box sx={sectionLabel} justifyContent="center">Support My Work</Box>
          <Typography variant="h2" className="reveal" sx={{ fontSize:{xs:'1.8rem',md:'2.5rem'}, mb:2 }}>Buy Me a Coffee</Typography>
          <Typography color="text.secondary" sx={{ mb:6, lineHeight:1.8 }}>
            If my open-source work, writeups, or tools have helped you — buy me a coffee! Supports via crypto on Binance or card/M-Pesa via Paystack.
          </Typography>
          <Grid container spacing={3} className="reveal">
            {/* Binance */}
            <Grid item xs={12} sm={6}>
              <Card className="glow-border" sx={{ p:3.5, textAlign:'left', borderTop:'3px solid #F0B90B', cursor:'pointer' }} onClick={()=>setModal('binance')}>
                <Box sx={{ display:'flex', alignItems:'center', gap:1.5, mb:2 }}>
                  <CurrencyBitcoinIcon sx={{ color:'#F0B90B', fontSize:'2rem' }} />
                  <Typography sx={{ fontWeight:800, color:'#F0B90B', fontSize:'1.1rem' }}>Binance Pay</Typography>
                </Box>
                <Typography color="text.secondary" sx={{ fontSize:'.85rem', mb:2.5, lineHeight:1.6 }}>Send crypto instantly. Zero fees. BTC, ETH, BNB, USDT.</Typography>
                <Button variant="contained" fullWidth sx={{ background:'#F0B90B', color:'#1a1000', fontWeight:800, '&:hover':{background:'#ffd03a'} }} startIcon={<CurrencyBitcoinIcon />}>Pay with Crypto</Button>
              </Card>
            </Grid>
            {/* Paystack */}
            <Grid item xs={12} sm={6}>
              <Card className="glow-border" sx={{ p:3.5, textAlign:'left', borderTop:'3px solid #00C3F7', cursor:'pointer' }} onClick={()=>setModal('paystack')}>
                <Box sx={{ display:'flex', alignItems:'center', gap:1.5, mb:2 }}>
                  <CreditCardIcon sx={{ color:'#00C3F7', fontSize:'2rem' }} />
                  <Typography sx={{ fontWeight:800, color:'#00C3F7', fontSize:'1.1rem' }}>Paystack</Typography>
                </Box>
                <Typography color="text.secondary" sx={{ fontSize:'.85rem', mb:2.5, lineHeight:1.6 }}>Card, M-Pesa, or bank transfer. KES, USD, NGN supported.</Typography>
                <Button variant="contained" fullWidth sx={{ background:'#00C3F7', color:'#001a22', fontWeight:800, '&:hover':{background:'#40d4ff'} }} startIcon={<CreditCardIcon />}>Pay with Card / M-Pesa</Button>
              </Card>
            </Grid>
          </Grid>
          {/* Direct crypto */}
          <Box className="mono reveal" sx={{ mt:4, p:2.5, background:'rgba(255,255,255,.02)', border:'1px solid rgba(255,255,255,.07)', borderRadius:2, textAlign:'left', fontSize:'.75rem', color:'text.secondary', lineHeight:2 }}>
            <Box component="span" sx={{ color:'text.primary', fontWeight:700 }}>Direct crypto? </Box>
            <Box component="span" sx={{ color:'primary.main' }}>BTC: </Box>bc1qxy2kgdygjrsqtzq2n0yrf249wfj5ygr4hmx2n9<br />
            <Box component="span" sx={{ color:'primary.main' }}>ETH/USDT: </Box>0x71C7656EC7ab88b098defB751B7401B5f6d8976F<br />
            <Box sx={{ color:'text.secondary', opacity:.6, mt:.5 }}>* Replace with your real wallet addresses</Box>
          </Box>
        </Container>
      </Box>

      {/* ── CONTACT ────────────────────────────────────── */}
      <Box id="contact" component="section" sx={{ position:'relative', zIndex:1, py:14 }}>
        <Container maxWidth="lg">
          <Box sx={sectionLabel}>Get In Touch</Box>
          <Grid container spacing={8}>
            <Grid item xs={12} md={5} className="reveal">
              <Typography variant="h3" sx={{ mb:2 }}>Let&apos;s Connect</Typography>
              <Typography color="text.secondary" sx={{ mb:5, lineHeight:1.8 }}>Always open to new projects, collaboration, or chatting about tech and security. Reach out any time.</Typography>
              {[
                { Icon:EmailIcon,       label:'Email',    val:'netg3ek@gmail.com',        href:'mailto:netg3ek@gmail.com' },
                { Icon:LocationOnIcon,  label:'Location', val:'Nairobi, Kenya 🇰🇪',      href:'#' },
                { Icon:GitHubIcon,      label:'GitHub',   val:'github.com/netgee-k',     href:'https://github.com/netgee-k' },
              ].map(c=>(
                <Box key={c.label} sx={{ display:'flex', alignItems:'center', gap:2, mb:3 }}>
                  <Avatar sx={{ background:'rgba(0,245,212,.1)', border:'1px solid rgba(0,245,212,.2)', color:'primary.main', width:46, height:46, borderRadius:2 }}><c.Icon /></Avatar>
                  <Box>
                    <Typography className="mono" sx={{ fontSize:'.68rem', color:'text.secondary', letterSpacing:'1px', textTransform:'uppercase', mb:.3 }}>{c.label}</Typography>
                    <Box component="a" href={c.href} target="_blank" rel="noreferrer" sx={{ color:'text.primary', textDecoration:'none', fontSize:'.9rem', '&:hover':{color:'primary.main'} }}>{c.val}</Box>
                  </Box>
                </Box>
              ))}
              <Box sx={{ display:'flex', gap:1.5, mt:4 }}>
                {[
                  { Icon:TwitterIcon,  href:'#' },
                  { Icon:GitHubIcon,   href:'https://github.com/netgee-k' },
                  { Icon:LinkedInIcon, href:'#' },
                  { Icon:WhatsAppIcon, href:'https://wa.me/254707540010' },
                ].map(({Icon,href},i)=>(
                  <Tooltip key={i} title="">
                    <IconButton component="a" href={href} target="_blank"
                      sx={{ background:'rgba(255,255,255,.05)', border:'1px solid rgba(255,255,255,.1)', borderRadius:2, '&:hover':{background:'primary.main', bgcolor:'primary.main', color:'#080810', borderColor:'primary.main'} }}>
                      <Icon sx={{ fontSize:'1.1rem' }} />
                    </IconButton>
                  </Tooltip>
                ))}
              </Box>
            </Grid>
            <Grid item xs={12} md={7} className="reveal" sx={{ transitionDelay:'.12s' }}>
              <Card sx={{ p:4 }}>
                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={2.5}>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Name" required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField fullWidth label="Email" type="email" required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Subject" required value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField fullWidth label="Message" multiline rows={4} required value={form.message} onChange={e=>setForm({...form,message:e.target.value})} variant="outlined" />
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" fullWidth size="large" endIcon={<SendIcon />} sx={{ ...glowBtn, py:1.6 }}>Send Message</Button>
                    </Grid>
                  </Grid>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <Box component="footer" sx={{ position:'relative', zIndex:1, borderTop:'1px solid rgba(255,255,255,.06)', py:4, background:'rgba(4,4,8,.9)' }}>
        <Container maxWidth="lg">
          <Box sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:3 }}>
            <Typography sx={{ fontWeight:800 }}>Jesse<Box component="span" sx={{ color:'primary.main' }}>.</Box></Typography>
            <Box sx={{ display:'flex', gap:3, flexWrap:'wrap' }}>
              {NAV.map(n=>(
                <Box key={n} component="a" href={`#${n.toLowerCase()}`} sx={{ color:'text.secondary', textDecoration:'none', fontSize:'.8rem', '&:hover':{color:'primary.main'} }}>
                  {n === 'Coffee' ? 'Coffee' : n}
                </Box>
              ))}
            </Box>
            <Button component="a" href="https://wa.me/254707540010" target="_blank" startIcon={<WhatsAppIcon />}
              sx={{ background:'#25D366', color:'white', fontWeight:700, borderRadius:'50px', px:2.5, fontSize:'.82rem', '&:hover':{background:'#1ebe5d'} }}>
              WhatsApp
            </Button>
            <Typography className="mono" sx={{ fontSize:'.72rem', color:'text.secondary', width:'100%', textAlign:'center', mt:1 }}>
              © 2025 Jesse Kimani — All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── BINANCE MODAL ──────────────────────────────── */}
      <Dialog open={modal==='binance'} onClose={()=>setModal(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', pb:1 }}>
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}><CoffeeIcon sx={{ color:'#F0B90B' }} /><span>Buy Me a Coffee</span></Box>
          <IconButton onClick={()=>setModal(null)} size="small"><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography color="text.secondary" sx={{ mb:3, fontSize:'.9rem' }}>Send via <Box component="span" sx={{ color:'#F0B90B', fontWeight:800 }}>Binance Pay</Box> — choose an amount:</Typography>
          <Grid container spacing={1} sx={{ mb:2 }}>
            {BINANCE_AMOUNTS.map(a=>(
              <Grid item xs={4} key={a}>
                <Button fullWidth variant={selBinance===a&&!custBinance?'contained':'outlined'} onClick={()=>{setSelBinance(a);setCustBinance('');}}
                  sx={{ fontFamily:"JetBrains Mono, monospace", borderColor:'rgba(255,255,255,.15)', ...(selBinance===a&&!custBinance?{background:'#00f5d4',color:'#080810'}:{color:'text.primary'}) }}>
                  ${a}
                </Button>
              </Grid>
            ))}
          </Grid>
          <TextField fullWidth label="Custom amount (USD)" type="number" value={custBinance} onChange={e=>setCustBinance(e.target.value)} size="small" sx={{ mb:3 }} />
          <Button fullWidth variant="contained" size="large" onClick={payBinance} startIcon={<CurrencyBitcoinIcon />}
            sx={{ background:'#F0B90B', color:'#1a1000', fontWeight:800, '&:hover':{background:'#ffd03a'} }}>
            Proceed with Binance Pay
          </Button>
        </DialogContent>
      </Dialog>

      {/* ── PAYSTACK MODAL ─────────────────────────────── */}
      <Dialog open={modal==='paystack'} onClose={()=>setModal(null)} maxWidth="xs" fullWidth>
        <DialogTitle sx={{ display:'flex', justifyContent:'space-between', alignItems:'center', pb:1 }}>
          <Box sx={{ display:'flex', alignItems:'center', gap:1 }}><CoffeeIcon sx={{ color:'#00C3F7' }} /><span>Buy Me a Coffee</span></Box>
          <IconButton onClick={()=>setModal(null)} size="small"><CloseIcon /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography color="text.secondary" sx={{ mb:3, fontSize:'.9rem' }}>Pay via <Box component="span" sx={{ color:'#00C3F7', fontWeight:800 }}>Paystack</Box> — card, M-Pesa, or bank:</Typography>
          <Grid container spacing={1} sx={{ mb:2 }}>
            {PAYSTACK_AMOUNTS.map(a=>(
              <Grid item xs={4} key={a}>
                <Button fullWidth variant={selPaystack===a&&!custPaystack?'contained':'outlined'} onClick={()=>{setSelPaystack(a);setCustPaystack('');}}
                  sx={{ fontFamily:"JetBrains Mono, monospace", fontSize:'.72rem', borderColor:'rgba(255,255,255,.15)', ...(selPaystack===a&&!custPaystack?{background:'#00f5d4',color:'#080810'}:{color:'text.primary'}) }}>
                  {a>=1000?`${a/1000}k`:a}
                </Button>
              </Grid>
            ))}
          </Grid>
          <TextField fullWidth label="Custom amount (KES)" type="number" value={custPaystack} onChange={e=>setCustPaystack(e.target.value)} size="small" sx={{ mb:2 }} />
          <TextField fullWidth label="Your email (for receipt)" type="email" value={psEmail} onChange={e=>setPsEmail(e.target.value)} size="small" sx={{ mb:3 }} />
          <Button fullWidth variant="contained" size="large" onClick={payPaystack} startIcon={<CreditCardIcon />}
            sx={{ background:'#00C3F7', color:'#001a22', fontWeight:800, '&:hover':{background:'#40d4ff'} }}>
            Pay with Paystack
          </Button>
        </DialogContent>
      </Dialog>

      {/* ── SNACKBAR ───────────────────────────────────── */}
      <Snackbar open={!!snack} autoHideDuration={5000} onClose={()=>setSnack('')} anchorOrigin={{ vertical:'bottom', horizontal:'right' }}>
        <Alert onClose={()=>setSnack('')} severity="success" variant="filled" sx={{ background:'#00ff88', color:'#001a0a', fontWeight:700 }}>{snack}</Alert>
      </Snackbar>

    </ThemeProvider>
  );
}
