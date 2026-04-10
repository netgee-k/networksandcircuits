'use client';

interface Project {
  id: number;
  title: string;
  year: string;
  size: 'large' | 'small';
  description: string;
  tags: string[];
  github: string;
  url: string;
  video: string;
  cover: string;
  gallery: string[];
  position: number;
}

import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import Script from 'next/script';

const ThreeBackground = lazy(() => import('@/components/ThreeBackground'));
const AiBrain = lazy(() => import('@/components/AiBrain'));

const CONFIG = {
  paystack: {
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || 'pk_test_your_key_here',
    emailFallback: process.env.NEXT_PUBLIC_PAYSTACK_EMAIL || 'netg3ek@gmail.com'
  },
  binance: { payLink: process.env.NEXT_PUBLIC_BINANCE_PAY_LINK || 'https://pay.binance.com/en' },
};
const CONTACT = {
  email:    process.env.NEXT_PUBLIC_CONTACT_EMAIL   || 'netg3ek@gmail.com',
  github:   process.env.NEXT_PUBLIC_GITHUB_URL      || 'https://github.com/netgee-k',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '254707540010',
  location: process.env.NEXT_PUBLIC_LOCATION        || 'Nairobi, Kenya 🇰🇪',
  twitter:  '#',
  linkedin: '#',
};
const CRYPTO = {
  btc: process.env.NEXT_PUBLIC_BTC_ADDRESS || 'bc1qxy2kgdygjrsqtzq2n0yrf249wfj5ygr4hmx2n9',
  eth: process.env.NEXT_PUBLIC_ETH_ADDRESS || '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
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
const CERTS = [
  { short:'PT+',   full:'CompTIA PenTest+',            org:'CompTIA', date:'May 2023', color:'#ff6b35', desc:'Planning, scoping, scanning and executing penetration testing engagements at enterprise scale.' },
  { short:'OPSWAT',full:'OPSWAT Data Transfer Security',org:'OPSWAT',  date:'Dec 2022', color:'#00f5d4', desc:'Critical infrastructure protection, secure data transfer protocols and advanced malware prevention.' },
  { short:'CCNA',  full:'Cisco CCNA',                  org:'Cisco',   date:'2021',     color:'#7b2fff', desc:'Installing, configuring, operating and troubleshooting routed and switched enterprise networks.' },
];
const B_AMT = [1,3,5,10,20,50];
const P_AMT = [150,400,700,1500,3000,7000];

export default function Home() {
  const heroRef = useRef<HTMLCanvasElement>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typed, setTyped] = useState('');
  const [modal, setModal] = useState<'binance'|'paystack'|null>(null);
  const [selB, setSelB] = useState(5);
  const [selP, setSelP] = useState(700);
  const [custB, setCustB] = useState('');
  const [custP, setCustP] = useState('');
  const [psEmail, setPsEmail] = useState('');
  const [toast, setToast] = useState('');
  const [form, setForm] = useState({name:'',email:'',subject:'',message:''});
  const [currentSlide, setCurrentSlide] = useState<Record<number, number>>({});
  const [slideIntervals, setSlideIntervals] = useState<Record<number, NodeJS.Timeout>>({});

  // Projects fetch
  useEffect(() => {
    const abortController = new AbortController();
    
    async function loadProjects() {
      try {
        setProjectsLoading(true);
        const response = await fetch('/api/projects', { 
          signal: abortController.signal 
        });
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
          setProjects(data);
          // Initialize slide index for each project
          const initialSlides: Record<number, number> = {};
          data.forEach((p: Project) => {
            initialSlides[p.id] = 0;
          });
          setCurrentSlide(initialSlides);
        } else if (data && Array.isArray(data.projects)) {
          setProjects(data.projects);
          const initialSlides: Record<number, number> = {};
          data.projects.forEach((p: Project) => {
            initialSlides[p.id] = 0;
          });
          setCurrentSlide(initialSlides);
        } else {
          setProjects([]);
        }
      } catch (err) {
        console.error('Failed to fetch projects:', err);
        setProjects([]);
      } finally {
        setProjectsLoading(false);
      }
    }
    
    loadProjects();
    return () => abortController.abort();
  }, []);

  // Start/stop slideshow when project is hovered
  const startSlideshow = (projectId: number, mediaItems: string[]) => {
    if (mediaItems.length <= 1) return;
    
    // Clear existing interval
    if (slideIntervals[projectId]) {
      clearInterval(slideIntervals[projectId]);
    }
    
    // Start new interval
    const interval = setInterval(() => {
      setCurrentSlide(prev => ({
        ...prev,
        [projectId]: ((prev[projectId] || 0) + 1) % mediaItems.length
      }));
    }, 3000); // Change slide every 3 seconds
    
    setSlideIntervals(prev => ({ ...prev, [projectId]: interval }));
  };
  
  const stopSlideshow = (projectId: number) => {
    if (slideIntervals[projectId]) {
      clearInterval(slideIntervals[projectId]);
      setSlideIntervals(prev => {
        const newIntervals = { ...prev };
        delete newIntervals[projectId];
        return newIntervals;
      });
    }
  };
  
  const goToSlide = (projectId: number, index: number, mediaItems: string[]) => {
    setCurrentSlide(prev => ({ ...prev, [projectId]: index }));
  };

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(slideIntervals).forEach(interval => clearInterval(interval));
    };
  }, [slideIntervals]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { 
        if (e.isIntersecting) e.target.classList.add('visible'); 
      });
    }, { threshold: 0.08, rootMargin: '40px' });
    
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [projects]);

  useEffect(() => {
    let ri = 0, ci = 0, del = false;
    let t: ReturnType<typeof setTimeout>;
    const tick = () => {
      const w = ROLES[ri];
      setTyped(del ? w.slice(0, ci--) : w.slice(0, ci++));
      if (!del && ci > w.length) { 
        del = true;  
        t = setTimeout(tick, 2000); 
        return; 
      }
      if (del && ci < 0) { 
        del = false; 
        ri = (ri + 1) % ROLES.length; 
        ci = 0; 
        t = setTimeout(tick, 400); 
        return; 
      }
      t = setTimeout(tick, del ? 50 : 100);
    };
    t = setTimeout(tick, 600);
    return () => clearTimeout(t);
  }, []);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(''), 5000);
  };

  const handleBinancePay = () => {
    window.open(`${CONFIG.binance.payLink}?amount=${parseFloat(custB) || selB}&currency=USDT&memo=CoffeeJesse`, '_blank');
    setModal(null);
    showToast('Redirecting to Binance Pay...');
  };

  const handlePaystackPay = () => {
    const amount = (parseFloat(custP) || selP) * 100;
    const email = psEmail || CONFIG.paystack.emailFallback;
    if (!email.includes('@')) { 
      alert('Please enter a valid email.'); 
      return; 
    }
    const PS = (window as any).PaystackPop;
    if (!PS) { 
      alert('Payment loading, try again.'); 
      return; 
    }
    PS.setup({ 
      key: CONFIG.paystack.publicKey, 
      email, 
      amount, 
      currency: 'KES', 
      ref: 'coffee_' + Date.now(),
      callback: (r: any) => { 
        setModal(null); 
        showToast('Thank you! ☕ Ref: ' + r.reference); 
      },
      onClose: () => {} 
    }).openIframe();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Message sent! I'll reply soon 🚀");
    setForm({name:'',email:'',subject:'',message:''});
  };

  // Helper to check if URL is a video
  const isVideoUrl = (url: string) => {
    if (!url) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.mkv'];
    const videoDomains = ['youtube.com', 'youtu.be', 'vimeo.com'];
    return videoExtensions.some(ext => url.toLowerCase().includes(ext)) ||
           videoDomains.some(domain => url.toLowerCase().includes(domain));
  };

  // Get embed URL for YouTube/Vimeo
  const getEmbedUrl = (url: string) => {
    if (!url) return null;
    
    // YouTube
    const youtubeMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?#]+)/);
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }
    
    // Vimeo
    const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }
    
    return null;
  };

  // Get all media items (cover + gallery + video)
  const getAllMedia = (project: Project): Array<{type: 'image' | 'video', url: string, embedUrl?: string}> => {
    const media: Array<{type: 'image' | 'video', url: string, embedUrl?: string}> = [];
    
    // Add cover image
    if (project.cover) {
      media.push({ type: 'image', url: project.cover });
    }
    
    // Add video if exists
    if (project.video && project.video.trim()) {
      const embedUrl = getEmbedUrl(project.video);
      media.push({ 
        type: 'video', 
        url: project.video,
        embedUrl: embedUrl || undefined
      });
    }
    
    // Add gallery images
    if (project.gallery && project.gallery.length > 0) {
      project.gallery.forEach(img => {
        if (img && img.trim() && img !== project.cover) {
          media.push({ type: 'image', url: img });
        }
      });
    }
    
    return media;
  };

  return (
    <>
      <Script src="https://js.paystack.co/v1/inline.js" strategy="lazyOnload" />

      <style>{`
        :root {
          --cyan:   #00f5d4;
          --purple: #7b2fff;
          --pink:   #f500a0;
          --bg:     #04040d;
          --bg2:    #0a0a18;
          --card:   rgba(10,10,24,.65);
          --text:   #d4d4e8;
          --muted:  #5a5a7a;
          --border: rgba(255,255,255,.08);
          --bh:     rgba(0,245,212,.28);
          --grad:   linear-gradient(135deg, #00f5d4, #7b2fff);
          --ease:   cubic-bezier(.4,0,.2,1);
        }
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; overflow-x:hidden; }
        body { font-family:'Plus Jakarta Sans',sans-serif; background:var(--bg); color:var(--text); overflow-x:hidden; min-height:100vh; }
        ::selection { background:var(--cyan); color:var(--bg); }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-thumb { background:var(--grad); border-radius:3px; }

        body::before {
          content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
          background-image: linear-gradient(rgba(0,245,212,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,.025) 1px, transparent 1px);
          background-size:55px 55px;
        }
        body::after {
          content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
          background:
            radial-gradient(circle at 50% 0%,   rgba(0,245,212,.08)  0%, transparent 50%),
            radial-gradient(circle at 0%   50%,  rgba(123,47,255,.08) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(245,0,160,.07)  0%, transparent 50%);
        }

        /* NAV */
        .navbar {
          position:fixed; top:0; left:0; right:0; z-index:200;
          padding:20px clamp(20px,5vw,64px);
          transition: all .35s var(--ease);
        }
        .navbar.scrolled {
          background:rgba(4,4,13,.92); backdrop-filter:blur(22px);
          border-bottom:1px solid rgba(0,245,212,.1); padding:12px clamp(20px,5vw,64px);
        }
        .nav-inner { max-width:1400px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; }
        .nav-logo  { font-size:1.5rem; font-weight:800; color:var(--text); text-decoration:none; letter-spacing:-1px; }
        .nav-logo em { color:var(--cyan); font-style:normal; }
        .nav-links { display:flex; gap:36px; list-style:none; }
        .nav-links a {
          font-family:'IBM Plex Mono',monospace; font-size:.72rem; font-weight:500;
          letter-spacing:2px; text-transform:uppercase; color:var(--muted);
          text-decoration:none; transition:color .2s; position:relative; padding-bottom:3px;
        }
        .nav-links a::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:var(--grad); transition:width .3s; }
        .nav-links a:hover { color:var(--cyan); }
        .nav-links a:hover::after { width:100%; }
        .menu-btn { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:8px; }
        .menu-btn span { display:block; width:22px; height:2px; background:var(--text); border-radius:2px; transition:all .3s; }

        .mob-menu {
          position:fixed; inset:0; z-index:199;
          background:rgba(4,4,13,.97); backdrop-filter:blur(20px);
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:28px;
          opacity:0; visibility:hidden; transition:all .35s;
        }
        .mob-menu.open { opacity:1; visibility:visible; }
        .mob-menu a { font-size:2rem; font-weight:800; color:var(--text); text-decoration:none; transition:color .2s; }
        .mob-menu a:hover { color:var(--cyan); }
        .mob-close { position:absolute; top:20px; right:24px; background:none; border:none; color:var(--muted); font-size:1.8rem; cursor:pointer; transition:all .2s; line-height:1; }
        .mob-close:hover { color:var(--cyan); transform:rotate(90deg); }

        /* HERO */
        .hero {
          position:relative; z-index:1;
          min-height:100vh; display:flex; align-items:center;
          padding:100px clamp(20px,5vw,64px) 60px;
        }
        .hero-inner { max-width:1400px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; width:100%; }
        .eyebrow {
          display:inline-flex; align-items:center; gap:10px; margin-bottom:28px;
          font-family:'IBM Plex Mono',monospace; font-size:.68rem; letter-spacing:4px;
          text-transform:uppercase; color:var(--cyan);
        }
        .eyebrow::before { content:''; width:28px; height:1px; background:var(--cyan); }
        .hero h1 { font-size:clamp(2.6rem,5.5vw,5.2rem); font-weight:800; letter-spacing:-3px; line-height:1.05; margin-bottom:18px; font-family:'Plus Jakarta Sans',sans-serif; }
        .hero h1 .grad { display:block; background:var(--grad); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
        .typed-line { font-family:'IBM Plex Mono',monospace; font-size:clamp(.88rem,1.5vw,1.05rem); color:var(--cyan); margin-bottom:24px; min-height:28px; }
        .cursor { animation:blink 1s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-desc { font-size:clamp(.9rem,1.2vw,.98rem); color:var(--muted); line-height:1.9; max-width:500px; margin-bottom:40px; }
        .hero-btns { display:flex; gap:14px; flex-wrap:wrap; }
        .btn-g {
          display:inline-flex; align-items:center; gap:9px;
          padding:15px 30px; border-radius:8px; border:none;
          background:var(--grad); color:var(--bg);
          font-family:'Plus Jakarta Sans',sans-serif; font-weight:800; font-size:.9rem;
          cursor:pointer; text-decoration:none; transition:all .25s;
        }
        .btn-g:hover { opacity:.87; transform:translateY(-2px); box-shadow:0 14px 32px rgba(0,245,212,.28); }
        .btn-o {
          display:inline-flex; align-items:center; gap:9px;
          padding:14px 30px; border-radius:8px;
          border:1px solid rgba(255,255,255,.15); background:transparent;
          color:var(--text); font-family:'Plus Jakarta Sans',sans-serif; font-weight:700;
          font-size:.9rem; cursor:pointer; text-decoration:none; transition:all .25s;
        }
        .btn-o:hover { border-color:var(--cyan); color:var(--cyan); background:rgba(0,245,212,.05); transform:translateY(-2px); }
        .hero-canvas-wrap {
          display:flex; justify-content:center; align-items:center; position:relative;
          animation:float 6s ease-in-out infinite;
        }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
        .hero-canvas-wrap::before {
          content:''; position:absolute; inset:-50px;
          background:radial-gradient(circle, rgba(0,245,212,.12) 0%, transparent 70%);
          border-radius:50%; pointer-events:none;
          animation:pulse 4s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:.9;transform:scale(1.08)} }
        .hero-canvas-wrap canvas { display:block; width:100%; max-width:480px; aspect-ratio:1; border-radius:50%; }

        .section { position:relative; z-index:1; padding:clamp(70px,10vw,120px) clamp(20px,5vw,64px); }
        .section-alt { background:rgba(255,255,255,.02); }
        .s-inner { max-width:1400px; margin:0 auto; }
        .s-eyebrow {
          display:inline-flex; align-items:center; gap:10px; margin-bottom:14px;
          font-family:'IBM Plex Mono',monospace; font-size:.65rem; letter-spacing:4px;
          text-transform:uppercase; color:var(--cyan);
        }
        .s-eyebrow::before { content:''; width:22px; height:1px; background:var(--cyan); }
        .s-title { font-size:clamp(1.9rem,3.5vw,3rem); font-weight:800; letter-spacing:-1px; line-height:1.15; margin-bottom:clamp(40px,6vw,70px); }
        .s-title em { color:var(--cyan); font-style:normal; }

        .reveal { opacity:0; transform:translateY(22px); transition:opacity .6s ease, transform .6s ease; }
        .reveal.visible { opacity:1; transform:none; }

        .about-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:clamp(40px,6vw,80px); align-items:start; }
        .about-p { font-size:.95rem; color:var(--muted); line-height:1.95; margin-bottom:18px; }
        .skills-lbl { font-family:'IBM Plex Mono',monospace; font-size:.62rem; letter-spacing:3px; text-transform:uppercase; color:var(--muted); margin:22px 0 12px; }
        .chips { display:flex; flex-wrap:wrap; gap:7px; }
        .chip { padding:5px 12px; border-radius:4px; background:rgba(0,245,212,.07); border:1px solid rgba(0,245,212,.16); font-family:'IBM Plex Mono',monospace; font-size:.7rem; color:var(--cyan); transition:all .2s; cursor:default; }
        .chip:hover { background:var(--cyan); color:var(--bg); transform:translateY(-2px); }
        .stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .stat-card { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:26px; text-align:center; transition:all .3s; backdrop-filter:blur(10px); }
        .stat-card:hover { border-color:var(--bh); transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,245,212,.1); }
        .stat-n { font-size:clamp(2rem,2.8vw,2.6rem); font-weight:800; color:var(--cyan); line-height:1; margin-bottom:6px; }
        .stat-l { font-family:'IBM Plex Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:1px; }

        .srv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.06); border-radius:14px; overflow:hidden; }
        .srv-card { background:var(--card); padding:clamp(22px,3vw,38px); position:relative; overflow:hidden; transition:background .3s; cursor:default; }
        .srv-card:hover { background:rgba(0,245,212,.03); }
        .srv-card::after { content:''; position:absolute; bottom:0; left:0; width:100%; height:2px; background:var(--grad); transform:scaleX(0); transform-origin:left; transition:transform .4s; }
        .srv-card:hover::after { transform:scaleX(1); }
        .srv-n { font-family:'IBM Plex Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:2px; margin-bottom:14px; }
        .srv-icon { font-size:1.6rem; color:var(--cyan); display:block; margin-bottom:16px; }
        .srv-title { font-size:1rem; font-weight:700; margin-bottom:10px; }
        .srv-desc { font-size:.84rem; color:var(--muted); line-height:1.75; }

        /* PROJECTS SLIDESHOW STYLES */
        .proj-grid { display:grid; grid-template-columns:repeat(12,1fr); gap:18px; }
        .proj-card { 
          background:var(--card); 
          border:1px solid var(--border); 
          border-radius:14px; 
          overflow:hidden; 
          transition:all .35s var(--ease); 
          display:flex; 
          flex-direction:column; 
          backdrop-filter:blur(8px);
        }
        .proj-card:hover { 
          border-color:var(--bh); 
          transform:translateY(-8px) scale(1.01); 
          box-shadow:0 22px 50px rgba(0,0,0,.45); 
        }
        .proj-card.large { grid-column:span 7; }
        .proj-card.small { grid-column:span 5; }
        
        /* Slideshow Container */
        .slideshow-container {
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(0,0,0,0.3), rgba(0,0,0,0.5));
        }
        .proj-card.large .slideshow-container { height: 240px; }
        .proj-card.small .slideshow-container { height: 180px; }
        
        .slideshow-slide {
          width: 100%;
          height: 100%;
          position: relative;
        }
        .slideshow-slide img,
        .slideshow-slide video,
        .slideshow-slide iframe {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s var(--ease);
        }
        .proj-card:hover .slideshow-slide img,
        .proj-card:hover .slideshow-slide video {
          transform: scale(1.05);
        }
        
        /* Navigation Arrows */
        .slide-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          color: white;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          z-index: 10;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .proj-card:hover .slide-nav {
          opacity: 1;
        }
        .slide-nav:hover {
          background: var(--cyan);
          color: var(--bg);
          transform: translateY(-50%) scale(1.1);
        }
        .slide-prev { left: 10px; }
        .slide-next { right: 10px; }
        
        /* Dots Indicator */
        .slide-dots {
          position: absolute;
          bottom: 10px;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          gap: 8px;
          z-index: 10;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.2s;
        }
        .dot.active {
          background: var(--cyan);
          width: 20px;
          border-radius: 4px;
        }
        .dot:hover {
          background: var(--cyan);
          transform: scale(1.2);
        }
        
        /* Media Badge */
        .media-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 0.7rem;
          font-family: 'IBM Plex Mono', monospace;
          color: var(--cyan);
          z-index: 10;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .proj-body { padding:22px; flex:1; display:flex; flex-direction:column; }
        .feat-tag { font-family:'IBM Plex Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:2px; text-transform:uppercase; background:var(--grad); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:8px; display:block; }
        .proj-year { font-family:'IBM Plex Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:2px; margin-bottom:6px; }
        .proj-title { font-size:1.1rem; font-weight:800; margin-bottom:10px; }
        .proj-desc { font-size:.84rem; color:var(--muted); line-height:1.7; margin-bottom:16px; flex:1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .proj-tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:16px; }
        .proj-tag { font-family:'IBM Plex Mono',monospace; font-size:.65rem; padding:3px 9px; background:rgba(123,47,255,.15); color:#b09eff; border-radius:4px; transition:all 0.2s; }
        .proj-tag:hover { background:rgba(0,245,212,.2); color:var(--cyan); transform:translateY(-2px); }
        .proj-links { display:flex; gap:18px; margin-top:auto; }
        .proj-link { font-family:'IBM Plex Mono',monospace; font-size:.78rem; color:var(--muted); text-decoration:none; transition:color .2s; }
        .proj-link:hover { color:var(--cyan); }

        .proj-loading, .proj-empty {
          grid-column: span 12;
          text-align: center;
          padding: 60px 20px;
          font-family: 'IBM Plex Mono', monospace;
          color: var(--muted);
          background: var(--card);
          border-radius: 14px;
          border: 1px solid var(--border);
        }

        .cert-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .cert-card { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:30px; position:relative; overflow:hidden; transition:all .35s; backdrop-filter:blur(8px); }
        .cert-card:hover { transform:translateY(-5px); box-shadow:0 22px 50px rgba(0,0,0,.4); }
        .cert-strip { position:absolute; top:0; left:0; right:0; height:3px; }
        .cert-badge { width:50px; height:50px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-family:'IBM Plex Mono',monospace; font-weight:800; font-size:.78rem; margin-bottom:18px; transition:transform .3s; }
        .cert-card:hover .cert-badge { transform:scale(1.08); }
        .cert-title { font-size:1.05rem; font-weight:800; margin-bottom:5px; }
        .cert-org { font-family:'IBM Plex Mono',monospace; font-size:.68rem; margin-bottom:12px; }
        .cert-desc { font-size:.84rem; color:var(--muted); line-height:1.7; margin-bottom:14px; }
        .cert-date { font-family:'IBM Plex Mono',monospace; font-size:.68rem; }

        .coffee-wrap { max-width:800px; margin:0 auto; text-align:center; }
        .coffee-emoji { font-size:4.5rem; display:block; margin-bottom:28px; animation:floatcof 3.5s ease-in-out infinite; }
        @keyframes floatcof { 0%,100%{transform:translateY(0) rotate(-4deg)} 50%{transform:translateY(-14px) rotate(4deg)} }
        .coffee-desc { font-size:.97rem; color:var(--muted); line-height:1.9; margin:0 auto 44px; max-width:560px; }
        .pay-grid { display:grid; grid-template-columns:1fr 1fr; gap:18px; margin-bottom:24px; }
        .pay-card { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:28px; cursor:pointer; text-align:left; transition:all .3s; backdrop-filter:blur(8px); }
        .pay-card:hover { transform:translateY(-4px); box-shadow:0 18px 44px rgba(0,0,0,.4); }
        .pay-head { display:flex; align-items:center; gap:12px; margin-bottom:12px; }
        .pay-icon { font-size:1.7rem; }
        .pay-name { font-size:1.05rem; font-weight:800; }
        .pay-desc { font-size:.84rem; color:var(--muted); line-height:1.6; margin-bottom:20px; }
        .crypto-box { font-family:'IBM Plex Mono',monospace; font-size:.72rem; color:var(--muted); background:rgba(255,255,255,.02); border:1px solid var(--border); border-radius:10px; padding:18px 22px; text-align:left; line-height:2.1; }
        .crypto-box strong { color:var(--text); }
        .crypto-box em { color:var(--cyan); font-style:normal; }

        .contact-grid { display:grid; grid-template-columns:1fr 1.5fr; gap:clamp(40px,6vw,80px); }
        .contact-title { font-size:clamp(1.5rem,2.5vw,2rem); font-weight:800; letter-spacing:-1px; margin-bottom:16px; }
        .contact-desc { font-size:.95rem; color:var(--muted); line-height:1.9; margin-bottom:36px; }
        .contact-item { display:flex; align-items:center; gap:16px; margin-bottom:22px; transition:transform .2s; }
        .contact-item:hover { transform:translateX(8px); }
        .contact-icon { width:44px; height:44px; border-radius:10px; background:rgba(0,245,212,.08); border:1px solid rgba(0,245,212,.18); display:flex; align-items:center; justify-content:center; font-size:1.1rem; flex-shrink:0; transition:all .2s; }
        .contact-item:hover .contact-icon { background:var(--cyan); color:var(--bg); }
        .contact-lbl { font-family:'IBM Plex Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:2px; text-transform:uppercase; margin-bottom:3px; }
        .contact-val { font-size:.9rem; color:var(--text); text-decoration:none; transition:color .2s; }
        .contact-val:hover { color:var(--cyan); }
        .socials { display:flex; gap:10px; margin-top:28px; }
        .soc-link { width:40px; height:40px; border-radius:8px; background:rgba(255,255,255,.04); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:.9rem; color:var(--muted); text-decoration:none; transition:all .25s; }
        .soc-link:hover { background:var(--cyan); color:var(--bg); border-color:var(--cyan); transform:translateY(-3px); }
        .contact-form { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:clamp(24px,4vw,40px); backdrop-filter:blur(10px); }
        .form-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .form-group { display:flex; flex-direction:column; gap:7px; margin-bottom:16px; }
        .form-lbl { font-family:'IBM Plex Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:2px; text-transform:uppercase; }
        .form-in, .form-ta { background:rgba(255,255,255,.03); border:1px solid var(--border); border-radius:8px; padding:13px 15px; color:var(--text); font-family:'Plus Jakarta Sans',sans-serif; font-size:.9rem; outline:none; transition:all .25s; width:100%; }
        .form-in:focus, .form-ta:focus { border-color:var(--cyan); background:rgba(0,245,212,.04); box-shadow:0 0 0 2px rgba(0,245,212,.1); }
        .form-ta { min-height:130px; resize:vertical; }

        .footer { position:relative; z-index:1; border-top:1px solid var(--border); background:rgba(4,4,13,.94); padding:36px clamp(20px,5vw,64px); backdrop-filter:blur(10px); }
        .footer-inner { max-width:1400px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:18px; }
        .footer-logo { font-size:1.2rem; font-weight:800; text-decoration:none; color:var(--text); letter-spacing:-.5px; }
        .footer-logo em { color:var(--cyan); font-style:normal; }
        .footer-nav { display:flex; gap:22px; flex-wrap:wrap; }
        .footer-nav a { font-size:.78rem; color:var(--muted); text-decoration:none; transition:color .2s; }
        .footer-nav a:hover { color:var(--cyan); }
        .wa-btn { display:inline-flex; align-items:center; gap:8px; background:#25D366; color:#fff; padding:9px 20px; border-radius:30px; font-size:.83rem; font-weight:700; text-decoration:none; transition:all .25s; }
        .wa-btn:hover { background:#1ebe5d; transform:translateY(-2px); box-shadow:0 10px 22px rgba(37,211,102,.28); }
        .footer-copy { font-family:'IBM Plex Mono',monospace; font-size:.64rem; color:#3a3a5e; width:100%; text-align:center; margin-top:12px; }

        .modal-ov { display:none; position:fixed; inset:0; z-index:1000; background:rgba(4,4,13,.88); backdrop-filter:blur(20px); align-items:center; justify-content:center; padding:20px; }
        .modal-ov.open { display:flex; }
        .modal-box { background:var(--bg2); border:1px solid rgba(0,245,212,.22); border-radius:18px; padding:38px; width:100%; max-width:450px; animation:slideUp .3s ease; }
        @keyframes slideUp { from{transform:translateY(20px);opacity:0} to{transform:none;opacity:1} }
        .mhead { display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; }
        .mtit { font-size:1.35rem; font-weight:800; }
        .mx { background:none; border:none; color:var(--muted); font-size:1.4rem; cursor:pointer; transition:all .2s; line-height:1; }
        .mx:hover { color:var(--text); transform:rotate(90deg); }
        .msub { font-size:.88rem; color:var(--muted); margin-bottom:22px; }
        .amts { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:14px; }
        .ab { padding:12px 5px; border:1px solid var(--border); border-radius:6px; background:none; color:var(--text); font-family:'IBM Plex Mono',monospace; font-size:.85rem; font-weight:700; cursor:pointer; transition:all .2s; }
        .ab:hover, .ab.on { background:var(--cyan); color:var(--bg); border-color:var(--cyan); }
        .mi { width:100%; padding:13px 15px; background:rgba(255,255,255,.03); border:1px solid var(--border); border-radius:6px; color:var(--text); font-family:'IBM Plex Mono',monospace; font-size:.9rem; outline:none; margin-bottom:14px; transition:all .25s; }
        .mi:focus { border-color:var(--cyan); box-shadow:0 0 0 2px rgba(0,245,212,.1); }

        .toast { position:fixed; bottom:22px; right:22px; z-index:2000; background:#00ff88; color:#001a0a; padding:14px 22px; border-radius:8px; font-weight:800; font-family:'Plus Jakarta Sans',sans-serif; box-shadow:0 10px 32px rgba(0,255,136,.3); animation:slideUp .3s ease; max-width:320px; }

        .pgp-grid { display:grid; grid-template-columns:1fr 1.4fr; gap:clamp(30px,5vw,60px); align-items:start; }
        .pgp-intro { font-size:.95rem; color:var(--muted); line-height:1.9; margin-bottom:28px; }
        .pgp-meta { display:flex; flex-direction:column; gap:10px; margin-bottom:28px; }
        .pgp-row { display:flex; gap:16px; align-items:baseline; }
        .pgp-lbl { font-family:'IBM Plex Mono',monospace; font-size:.65rem; letter-spacing:2px; text-transform:uppercase; color:var(--muted); min-width:90px; flex-shrink:0; }
        .pgp-val { font-size:.88rem; color:var(--text); }
        .pgp-val.mono { font-family:'IBM Plex Mono',monospace; font-size:.78rem; color:var(--cyan); word-break:break-all; }
        .pgp-actions { display:flex; gap:12px; flex-wrap:wrap; align-items:center; }
        .pgp-block { background:rgba(0,0,0,.4); border:1px solid rgba(0,245,212,.2); border-radius:12px; overflow:hidden; }
        .pgp-block-header { display:flex; justify-content:space-between; align-items:center; padding:12px 18px; border-bottom:1px solid rgba(0,245,212,.12); background:rgba(0,245,212,.04); }
        .pgp-copy-btn { background:none; border:1px solid rgba(0,245,212,.25); border-radius:4px; color:var(--cyan); font-family:'IBM Plex Mono',monospace; font-size:.68rem; padding:4px 10px; cursor:pointer; transition:all .2s; }
        .pgp-copy-btn:hover { background:rgba(0,245,212,.1); }
        .pgp-key-text { font-family:'IBM Plex Mono',monospace; font-size:.7rem; color:rgba(0,245,212,.6); line-height:1.7; padding:18px; margin:0; white-space:pre-wrap; word-break:break-all; max-height:280px; overflow-y:auto; }
        .pgp-key-text::-webkit-scrollbar { width:3px; }
        .pgp-key-text::-webkit-scrollbar-thumb { background:rgba(0,245,212,.3); }
        @media (max-width:900px) { .pgp-grid { grid-template-columns:1fr; } }
        
        @media (max-width:1024px) {
          .proj-card.large, .proj-card.small { grid-column:span 6; }
          .srv-grid { grid-template-columns:1fr 1fr; }
        }
        @media (max-width:900px) {
          .hero-inner { grid-template-columns:1fr; }
          .hero-canvas-wrap { display:none; }
          .about-grid, .contact-grid { grid-template-columns:1fr; }
          .cert-grid { grid-template-columns:1fr 1fr; }
          .pay-grid { grid-template-columns:1fr; }
          .nav-links { display:none; }
          .menu-btn { display:flex; }
        }
        @media (max-width:640px) {
          .proj-card.large, .proj-card.small { grid-column:span 12; }
          .srv-grid { grid-template-columns:1fr; }
          .cert-grid { grid-template-columns:1fr; }
          .form-row { grid-template-columns:1fr; }
          .footer-inner { flex-direction:column; align-items:flex-start; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`navbar${scrolled?' scrolled':''}`}>
        <div className="nav-inner">
          <a href="#" className="nav-logo">Jesse<em>.</em></a>
          <ul className="nav-links">
            {NAV.map(n=><li key={n}><a href={`#${n.toLowerCase()}`}>{n==='Coffee'?'☕ Coffee':n}</a></li>)}
          </ul>
          <button className="menu-btn" onClick={()=>setMenu(true)} aria-label="Open menu">
            <span/><span/><span/>
          </button>
        </div>
      </nav>

      <div className={`mob-menu${menu?' open':''}`}>
        <button className="mob-close" onClick={()=>setMenu(false)}>✕</button>
        {NAV.map(n=><a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setMenu(false)}>{n==='Coffee'?'☕ Coffee':n}</a>)}
      </div>

      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      {/* HERO */}
      <section id="hero" className="hero">
        <div className="hero-inner">
          <div>
            <div className="eyebrow">Available for freelance</div>
            <h1>Hi, I&apos;m<span className="grad">Jesse Kimani</span></h1>
            <div className="typed-line">{typed}<span className="cursor">|</span></div>
            <p className="hero-desc">Building secure, scalable, and resilient infrastructure with a focus on cybersecurity and distributed systems. I break things so others don&apos;t have to.</p>
            <div className="hero-btns">
              <a href="#projects" className="btn-g">⬡ View Projects</a>
              <a href="#contact"  className="btn-o">✉ Contact Me</a>
            </div>
          </div>
          <div className="hero-canvas-wrap">
            <Suspense fallback={<div style={{width:500,height:500,display:'flex',alignItems:'center',justifyContent:'center',color:'rgba(0,245,212,.3)',fontFamily:'IBM Plex Mono',fontSize:'.8rem'}}>initializing...</div>}>
              <AiBrain />
            </Suspense>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-alt">
        <div className="s-inner">
          <div className="s-eyebrow reveal">Who I Am</div>
          <h2 className="s-title reveal">Network &amp;<br /><em>Cybersecurity</em> Pro</h2>
          <div className="about-grid">
            <div className="reveal">
              <p className="about-p">Experienced Network Engineer and Penetration Tester specializing in secure infrastructure design, vulnerability assessment, and threat mitigation. CompTIA PenTest+ certified with hands-on expertise across the full attack and defense lifecycle.</p>
              <p className="about-p">I help organizations build resilient systems ensuring data confidentiality, integrity, and availability through comprehensive security and optimized network design.</p>
              <div className="skills-lbl">Technical Arsenal</div>
              <div className="chips">{SKILLS.map(s=><span key={s} className="chip">{s}</span>)}</div>
            </div>
            <div className="reveal" style={{transitionDelay:'.12s'}}>
              <div className="stats-grid">
                {[['3+','Years Experience'],['15+','Projects Done'],['3','Certifications'],['∞','Packets Analyzed']].map(([n,l])=>(
                  <div key={l} className="stat-card">
                    <div className="stat-n">{n}</div>
                    <div className="stat-l">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="s-inner">
          <div className="s-eyebrow reveal">What I Do</div>
          <h2 className="s-title reveal">Professional<br /><em>Services</em></h2>
          <div className="srv-grid">
            {SERVICES.map((s,i)=>(
              <div key={s.title} className="srv-card reveal" style={{transitionDelay:`${(i%3)*.08}s`}}>
                <div className="srv-n">{s.n}</div>
                <span className="srv-icon">{s.icon}</span>
                <div className="srv-title">{s.title}</div>
                <div className="srv-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS with SLIDESHOW */}
      <section id="projects" className="section section-alt">
        <div className="s-inner">
          <div className="s-eyebrow reveal">My Work</div>
          <h2 className="s-title reveal">Featured<br /><em>Projects</em></h2>
          
          {projectsLoading ? (
            <div className="proj-loading reveal">
              <span style={{display: 'inline-block', animation: 'pulse 1.5s ease-in-out infinite'}}>⟳</span> Loading projects...
            </div>
          ) : projects.length === 0 ? (
            <div className="proj-empty reveal">
              ⚡ No projects found. Check back soon for updates!
            </div>
          ) : (
            <div className="proj-grid">
              {projects.map((project, i) => {
                const mediaItems = getAllMedia(project);
                const currentIndex = currentSlide[project.id] || 0;
                const currentMedia = mediaItems[currentIndex];
                const hasMultipleMedia = mediaItems.length > 1;
                
                return (
                  <div 
                    key={project.id || project.title} 
                    className={`proj-card ${project.size} reveal`} 
                    style={{transitionDelay: `${i * 0.07}s`}}
                    onMouseEnter={() => hasMultipleMedia && startSlideshow(project.id, mediaItems.map(m => m.url))}
                    onMouseLeave={() => hasMultipleMedia && stopSlideshow(project.id)}
                  >
                    <div className="slideshow-container">
                      {currentMedia && (
                        <div className="slideshow-slide">
                          {currentMedia.type === 'video' ? (
                            currentMedia.embedUrl ? (
                              <iframe
                                src={currentMedia.embedUrl}
                                title={project.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            ) : (
                              <video 
                                autoPlay={false}
                                loop 
                                muted 
                                playsInline
                                controls={false}
                              >
                                <source src={currentMedia.url} type="video/mp4" />
                              </video>
                            )
                          ) : (
                            <img 
                              src={currentMedia.url} 
                              alt={project.title} 
                              loading="lazy"
                              onError={(e) => {
                                (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/0a0a18/00f5d4?text=Image+Not+Found';
                              }}
                            />
                          )}
                        </div>
                      )}
                      
                      {/* Media counter badge */}
                      {hasMultipleMedia && (
                        <div className="media-badge">
                          📷 {currentIndex + 1}/{mediaItems.length}
                        </div>
                      )}
                      
                      {/* Navigation Arrows */}
                      {hasMultipleMedia && (
                        <>
                          <button 
                            className="slide-nav slide-prev"
                            onClick={(e) => {
                              e.stopPropagation();
                              const newIndex = (currentIndex - 1 + mediaItems.length) % mediaItems.length;
                              goToSlide(project.id, newIndex, mediaItems);
                              stopSlideshow(project.id);
                            }}
                          >
                            ‹
                          </button>
                          <button 
                            className="slide-nav slide-next"
                            onClick={(e) => {
                              e.stopPropagation();
                              const newIndex = (currentIndex + 1) % mediaItems.length;
                              goToSlide(project.id, newIndex, mediaItems);
                              stopSlideshow(project.id);
                            }}
                          >
                            ›
                          </button>
                        </>
                      )}
                      
                      {/* Dots indicator */}
                      {hasMultipleMedia && (
                        <div className="slide-dots">
                          {mediaItems.map((_, idx) => (
                            <button
                              key={idx}
                              className={`dot ${idx === currentIndex ? 'active' : ''}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                goToSlide(project.id, idx, mediaItems);
                                stopSlideshow(project.id);
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    
                    <div className="proj-body">
                      {project.size === 'large' && <span className="feat-tag">★ FEATURED PROJECT</span>}
                      <div className="proj-year">{project.year}</div>
                      <div className="proj-title">{project.title}</div>
                      <div className="proj-desc">{project.description}</div>
                      <div className="proj-tags">
                        {project.tags && project.tags.map(tag => <span key={tag} className="proj-tag">{tag}</span>)}
                      </div>
                      <div className="proj-links">
                        <a href={project.github} target="_blank" rel="noreferrer" className="proj-link">⬡ GitHub</a>
                        <a href={project.url} className="proj-link">↗ View</a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CERTS */}
      <section id="certifications" className="section">
        <div className="s-inner">
          <div className="s-eyebrow reveal">Credentials</div>
          <h2 className="s-title reveal"><em>Certifications</em></h2>
          <div className="cert-grid">
            {CERTS.map((c,i)=>(
              <div key={c.full} className="cert-card reveal" style={{transitionDelay:`${i*.1}s`}}>
                <div className="cert-strip" style={{background:`linear-gradient(90deg,${c.color},transparent)`}} />
                <div className="cert-badge" style={{background:`${c.color}18`,color:c.color}}>{c.short}</div>
                <div className="cert-title">{c.full}</div>
                <div className="cert-org" style={{color:c.color}}>{c.org}</div>
                <div className="cert-desc">{c.desc}</div>
                <div className="cert-date" style={{color:c.color}}>Issued {c.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COFFEE */}
      <section id="coffee" className="section section-alt">
        <div className="s-inner">
          <div className="coffee-wrap">
            <span className="coffee-emoji">☕</span>
            <div className="s-eyebrow reveal" style={{justifyContent:'center'}}>Support My Work</div>
            <h2 className="s-title reveal" style={{textAlign:'center',marginBottom:16}}>Buy Me a<br /><em>Coffee</em></h2>
            <p className="coffee-desc reveal">If my open-source work, writeups, or tools have helped you — buy me a coffee! Pay via crypto on Binance or card/M-Pesa via Paystack.</p>
            <div className="pay-grid reveal">
              <div className="pay-card" style={{borderTop:'3px solid #F0B90B'}} onClick={()=>setModal('binance')}>
                <div className="pay-head"><span className="pay-icon">₿</span><span className="pay-name" style={{color:'#F0B90B'}}>Binance Pay</span></div>
                <p className="pay-desc">Send crypto instantly. Zero fees. BTC, ETH, BNB, USDT all supported.</p>
                <button className="btn-g" style={{background:'#F0B90B',width:'100%',justifyContent:'center'}}>Pay with Crypto</button>
              </div>
              <div className="pay-card" style={{borderTop:'3px solid #00C3F7'}} onClick={()=>setModal('paystack')}>
                <div className="pay-head"><span className="pay-icon">💳</span><span className="pay-name" style={{color:'#00C3F7'}}>Paystack</span></div>
                <p className="pay-desc">Card, M-Pesa or bank transfer. KES, USD, NGN all supported.</p>
                <button className="btn-g" style={{background:'#00C3F7',color:'#001a22',width:'100%',justifyContent:'center'}}>Pay with Card / M-Pesa</button>
              </div>
            </div>
            <div className="crypto-box reveal">
              <strong>Direct crypto?</strong><br />
              <em>BTC: </em>{CRYPTO.btc}<br />
              <em>ETH/USDT: </em>{CRYPTO.eth}<br />
              <span style={{opacity:.45,fontSize:'.64rem'}}>* Update your real wallet addresses in .env.local before going live</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="s-inner">
          <div className="s-eyebrow reveal">Get In Touch</div>
          <h2 className="s-title reveal">Let&apos;s<br /><em>Connect</em></h2>
          <div className="contact-grid">
            <div className="reveal">
              <div className="contact-title">Let&apos;s build something <em style={{color:'var(--cyan)',fontStyle:'normal'}}>amazing</em></div>
              <p className="contact-desc">Always open to new projects, collaboration, or just chatting about tech and security. Reach out any time.</p>
              {[
                {icon:'✉',label:'Email',    val:CONTACT.email,            href:`mailto:${CONTACT.email}`},
                {icon:'📍',label:'Based',   val:CONTACT.location,         href:'#'},
                {icon:'⬡',label:'GitHub',   val:'github.com/netgee-k',    href:CONTACT.github},
              ].map(c=>(
                <div key={c.label} className="contact-item">
                  <div className="contact-icon">{c.icon}</div>
                  <div>
                    <div className="contact-lbl">{c.label}</div>
                    <a href={c.href} target="_blank" rel="noreferrer" className="contact-val">{c.val}</a>
                  </div>
                </div>
              ))}
              <div className="socials">
                {[
                  {icon:'𝕏', href:CONTACT.twitter},
                  {icon:'⬡', href:CONTACT.github},
                  {icon:'in',href:CONTACT.linkedin},
                  {icon:'💬',href:`https://wa.me/${CONTACT.whatsapp}`},
                ].map((s,i)=><a key={i} href={s.href} target="_blank" rel="noreferrer" className="soc-link">{s.icon}</a>)}
              </div>
            </div>
            <div className="reveal" style={{transitionDelay:'.12s'}}>
              <div className="contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-lbl">Name</label>
                      <input className="form-in" required placeholder="Your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-lbl">Email</label>
                      <input className="form-in" type="email" required placeholder="you@email.com" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-lbl">Subject</label>
                    <input className="form-in" required placeholder="What's this about?" value={form.subject} onChange={e=>setForm({...form,subject:e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-lbl">Message</label>
                    <textarea className="form-ta" required placeholder="Tell me more..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
                  </div>
                  <button type="submit" className="btn-g" style={{width:'100%',justifyContent:'center',padding:'16px'}}>Send Message ↗</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PGP */}
      <section id="pgp" className="section">
        <div className="s-inner">
          <div className="s-eyebrow reveal">Cryptographic Identity</div>
          <h2 className="s-title reveal">PGP <em>Signature</em></h2>
          <div className="pgp-grid reveal">
            <div className="pgp-info">
              <div className="pgp-intro">
                Verify my identity cryptographically. All official communications, signed commits, and security advisories are signed with my PGP key. If it's not signed, it's not me.
              </div>
              <div className="pgp-meta">
                <div className="pgp-row"><span className="pgp-lbl">Key ID</span><span className="pgp-val mono">0xB3C0C1480CB85B5F</span></div>
                <div className="pgp-row"><span className="pgp-lbl">Algorithm</span><span className="pgp-val mono">RSA-4096</span></div>
                <div className="pgp-row"><span className="pgp-lbl">Fingerprint</span><span className="pgp-val mono" style={{fontSize:'.7rem'}}>7780 FA39 1A53 5DB7 020E  8454 B3C0 C148 0CB8 5B5F</span></div>
                <div className="pgp-row"><span className="pgp-lbl">Created</span><span className="pgp-val mono">2026-03-08</span></div>
                <div className="pgp-row"><span className="pgp-lbl">Expires</span><span className="pgp-val mono">Never</span></div>
              </div>
              <div className="pgp-actions">
                <a href="https://keys.openpgp.org" target="_blank" rel="noreferrer" className="btn-g" style={{display:'inline-flex',alignItems:'center',gap:8,padding:'13px 24px',fontSize:'.88rem'}}>
                  🔑 Fetch from Keyserver
                </a>
                <button className="btn-o" style={{padding:'12px 22px',fontSize:'.88rem'}}
                  onClick={()=>{navigator.clipboard?.writeText(`-----BEGIN PGP PUBLIC KEY BLOCK-----\nmQINBGmtoPYBEACjPNsC79blyL/hwntpz0k+hv4w/DF9k041T5TZPpjlBa4HOnA3\n...\n=NJlL\n-----END PGP PUBLIC KEY BLOCK-----`);showToast('PGP key copied to clipboard 🔑');}}>
                  Copy Key
                </button>
              </div>
            </div>
            <div className="pgp-block">
              <div className="pgp-block-header">
                <span className="mono" style={{fontSize:'.65rem',color:'var(--muted)',letterSpacing:'2px'}}>PUBLIC KEY BLOCK</span>
                <button className="pgp-copy-btn" onClick={()=>{navigator.clipboard?.writeText(document.querySelector('.pgp-key-text')?.textContent||'');showToast('PGP key copied! 🔑');}}>⎘ copy</button>
              </div>
              <pre className="pgp-key-text">
{`-----BEGIN PGP PUBLIC KEY BLOCK-----
mQINBGmtoPYBEACjPNsC79blyL/hwntpz0k+hv4w/DF9k041T5TZPpjlBa4HOnA3
PSEUK3Ql4Ea2PZ2cGPTteRhxuyHx9LrDPbrjewWJJIyneuKJ2XPg0YFPROBFqyYv
jeLoGcrF3fRbg28qCEXtZi3Wm8Ie03SqgC5itI6Z7GJKDzA0T/OVX4B7WPGq4ib+
NgJm6HrGg0MvGukYjLayd/rvI4tvP4R5bPHXCDp6hgM+t87v829jGNhhQOFR0GOx
M+2xJBmM+1IZx1L8iceJ2pM4p1XU8Pek/s3j7zzDMRGiXgFz/siBOxINR18/thyO
5doPv2W+Pjq5Kc8tAXVSjzkX78jMeBPlzBHjhHBUhPDJBQJ2ZdGStU21bM4JIneR
E2IM7q1NmlZR2OcwyjoZkbox2SzTozRRImfKWiA3LWkR1DotifyGeDl7Wsv1vlF3
5Aisl8DUL7iBFOjO0Km8m/tRzZGMF8kaPiXttYP9qlbRXPBJVTXH5w95DNJVsI4H
sec7wK4oIAYqg0d4eq2D7F1X5NaVEwE9AYg3OkPaowbM/F8MLgRxhhgT51UPACI4
mSvRjh/l4gZ0G13c3WBmFjXEzyAWUtb0NW4ol7JrlJzDptqGHgnULLZvQ+nqPTUa
aSlXGV8dYMdfQlAIBItDtU1AeGftFTmykFsWQKxS9CKtNidRkuiDozmgzQARAQAB
tCdKRVNTRSAoaGVsbG8gd29ybGQpIDxORVRHM2VrQEdNQUlMLkNPTT6JAlEEEwEK
ADsWIQR3gPo5GlNdtwIOhFSzwMFIDLhbXwUCaa2g9gIbAwULCQgHAgIiAgYVCgkI
CwIEFgIDAQIeBwIXgAAKCRCzwMFIDLhbXyvpD/0aKf4N7O8lCaJohbFypFKK2+d6
N343jy7+Jyh+ws9ODJIs0qJ5koPRlSipM0Pz0a5VEgHdxo+t3Lf9fuh0FyspD8Vt
ayET7G/7BUaHhjE2+te536P7ZEfrBoZXIPa3qPQIIM0I6jSSJrdp10xNc30TOBN6
YOmHzdokfpiyWkYQu5CcOyZUM1hhWbNdW0erM17/pkevYHrUVGev89FfFmNA+a2f
b/+kJ6ttz1YTTi4nW5STyN9TFGe+ELHLyfr4x8BA28z6nw+sC8wsNrNl0yMDGbuM
I7Jp0+dh1gZHav59GTfEMUiGhwyKVO2WnqtONCx2vx93MPvI0mfVLphDn7R/sM4Q
ZjCe4c3SGF+vteMzrJNvWFKxZxLfmVeqcdKu06uKTAtcEVqLnM5u+uXkCKy7auff
Gjbk5CW3iE54XyslYLHSHqnAVuPsBe1dQc0wokxqdK5g8EuzKnMdnHQLHJIMxehw
sTZp0IM3SvkDT5x2IOzlwAFm1d7S2fK3I0S3pKJY7PPi2TRksqUkcrzJKiz49PYR
jOC8UmyEgcPUfy2PN/2VKSoYWGdwuaojScrdj00e+pBNkxHaaqibQnME26kxstlk
3HZyQSvLFB6aXp/RIyAHXPPO1h/JuD8fkiWMFJhViV+hRoq9zB3Xsh7yFYxA5Spg
eALVKN6D2ICM/1lh2rkCDQRpraD2ARAAuIyEDkDv4D/lrtFBconEhUuviXFtQnwC
T+s6sq20Qlf0vmU9uOEwf30Bapzz0PSVAgd4aFtjVrtS+euRJuO8lOnhThemeL02
KuyNN/v24zPQpAbp5Ti7DRWtct+MK+BbzdHeVOTp9hc2RZBTbAsqJ15xXFNZz7pQ
YdbjKL4OZsYqYa1DQ227Z9ntjXQt8lGmIhDrGNB2aFjeq/WVSGC7vx/qA8GgiT5t
Dbv2APwR3N5a7i5hq8PIrX+lK/t4Y/xLeqiqLfmTj43kMIdX6nSFY7QHoAyF7GjP
IDsPnoa4to8RDzchRFwa1ZvwEcnWS5rIO9AKjAnnmhZPM/Ce+jpGWfQziLExXxbY
86v8263D5Vn88OFFuBHo6OyQLoJBQDO/WnN7v5GiXXtLg8wx+NwuiNFStyxnOapb
NI65BE74+CMrijKATXMJ0QEvFU4/4qDRHcBB6qcHrnc/HJg8/JRwXfHaQ8PntcHF
lz0fcN+DnMtwWsbeFwhyutYbyuEbYrFgdqA6NGKf3CTWQ/hW6BebMhOGBBVbXpyI
RuSXzcMA2aEWEXuU6GiS+Lm/QLMFaQ9PRyqW9UNJ2AmYIaW2H9SNsQXco97NibQx
/KSUfeYOa8qBeJKhry0tAwIvYGV8ZTunX1RzVpxXOfKbTVKGh1x9/wHqonOmq+Z5
7xof27XYsUMAEQEAAYkCNgQYAQoAIBYhBHeA+jkaU123Ag6EVLPAwUgMuFtfBQJp
raD2AhsMAAoJELPAwUgMuFtfl+wQAIdZ+iEdSStWXVxHHiRFdjwELJ6oT5V2n64x
SeZ1isO8ZcEmNBGEd9Ep6RBDZmV5/+pzZFnZHhTfhQElGakdLy/VkUatFq7w6+Pt
WiaJg/bA6ruWHUvTSdu7FUpJAM4Cu5++YLLyMVM0/teIj63aok8erDUbsNEwaD0W
z7+lZrYBFPJdqH0BSsM9rcI9jda1hB+pvpK7/naWZo1jXU/Cxgno2cWQSv5S752x
aDDjrlwjURdBSGb8MrDx6JABlV4c8QV9uy78/z5YpGz5ey4FzSRexwKhEJgKMttT
hQJt12a18Yp6cG06GwNVKQuGoikY2MgoTFbLZzEYAN9cAJi62CLU+I6b76i3WzcP
5aF5S2xER/C02QL/fgrf2VUPR2/h8En6XxF8qAv3tKl6kqPpivF8paeZituPodxv
FDZUwVZIY2dFMidYCmavJhmmEA312ltyJ8hVxUOlRwNl0YylxbAOzKkVeXY3oAyM
EoKFNzKa42OhZMdIDAmou9I8gJN7qjxzgAyOmFiU+EdY1K0mTD+0ndBhz5Du3wbG
8S6GKLGNdudHOexMCL4Frrhv0HJArL0Xke3TtTqKImwqFh/X0mrZZnckrsmRwlfq
FSmSpruORkZFWdDNSrQfDNpKjlM1HMBdAN/0ocO+Yti6bnkEVWIgcy8wZC5F6pDo
P+J/hTNn
=NJlL
-----END PGP PUBLIC KEY BLOCK-----`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-inner">
          <a href="#" className="footer-logo">Jesse<em>.</em></a>
          <nav className="footer-nav">{NAV.map(n=><a key={n} href={`#${n.toLowerCase()}`}>{n}</a>)}</nav>
          <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="wa-btn">💬 WhatsApp</a>
          <p className="footer-copy">© 2025 Jesse Kimani — All rights reserved.</p>
        </div>
      </footer>

      {/* MODALS */}
      <div className={`modal-ov${modal==='binance'?' open':''}`} onClick={e=>{if(e.target===e.currentTarget)setModal(null);}}>
        <div className="modal-box">
          <div className="mhead"><span className="mtit">☕ Buy Me a Coffee</span><button className="mx" onClick={()=>setModal(null)}>✕</button></div>
          <p className="msub">Via <strong style={{color:'#F0B90B'}}>Binance Pay</strong> — pick an amount:</p>
          <div className="amts">
            {B_AMT.map(a=><button key={a} className={`ab${selB===a&&!custB?' on':''}`} onClick={()=>{setSelB(a);setCustB('');}}>${a}</button>)}
          </div>
          <input className="mi" type="number" placeholder="Custom amount (USD)" min="1" value={custB} onChange={e=>setCustB(e.target.value)} />
          <button className="btn-g" style={{width:'100%',justifyContent:'center',background:'#F0B90B',padding:'14px'}} onClick={handleBinancePay}>Proceed with Binance Pay</button>
        </div>
      </div>

      <div className={`modal-ov${modal==='paystack'?' open':''}`} onClick={e=>{if(e.target===e.currentTarget)setModal(null);}}>
        <div className="modal-box">
          <div className="mhead"><span className="mtit">☕ Buy Me a Coffee</span><button className="mx" onClick={()=>setModal(null)}>✕</button></div>
          <p className="msub">Via <strong style={{color:'#00C3F7'}}>Paystack</strong> — card, M-Pesa or bank:</p>
          <div className="amts">
            {P_AMT.map(a=><button key={a} className={`ab${selP===a&&!custP?' on':''}`} onClick={()=>{setSelP(a);setCustP('');}}>{a>=1000?`${a/1000}k`:a}</button>)}
          </div>
          <input className="mi" type="number" placeholder="Custom amount (KES)" min="100" value={custP} onChange={e=>setCustP(e.target.value)} />
          <input className="mi" type="email" placeholder="Your email (for receipt)" value={psEmail} onChange={e=>setPsEmail(e.target.value)} />
          <button className="btn-g" style={{width:'100%',justifyContent:'center',background:'#00C3F7',color:'#001a22',padding:'14px'}} onClick={handlePaystackPay}>Pay with Paystack</button>
        </div>
      </div>

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}