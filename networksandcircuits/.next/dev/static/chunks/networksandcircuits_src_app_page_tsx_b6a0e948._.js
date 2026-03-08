(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/networksandcircuits/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/networksandcircuits/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/networksandcircuits/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/networksandcircuits/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/networksandcircuits/node_modules/next/script.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const ThreeBackground = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(()=>__turbopack_context__.A("[project]/networksandcircuits/src/components/ThreeBackground.tsx [app-client] (ecmascript, async loader)"));
_c = ThreeBackground;
const CONFIG = {
    paystack: {
        publicKey: ("TURBOPACK compile-time value", "pk_live_your_real_key_here") || 'pk_test_your_key_here',
        emailFallback: ("TURBOPACK compile-time value", "netg3ek@gmail.com") || 'netg3ek@gmail.com'
    },
    binance: {
        payLink: ("TURBOPACK compile-time value", "https://pay.binance.com/en") || 'https://pay.binance.com/en'
    }
};
const CONTACT = {
    email: ("TURBOPACK compile-time value", "netg3ek@gmail.com") || 'netg3ek@gmail.com',
    github: ("TURBOPACK compile-time value", "https://github.com/netgee-k") || 'https://github.com/netgee-k',
    whatsapp: ("TURBOPACK compile-time value", "254707540010") || '254707540010',
    location: ("TURBOPACK compile-time value", "Nairobi, Kenya 🇰🇪") || 'Nairobi, Kenya 🇰🇪',
    twitter: '#',
    linkedin: '#'
};
const CRYPTO = {
    btc: ("TURBOPACK compile-time value", "bc1qxy2kgdygjrsqtzq2n0yrf249wfj5ygr4hmx2n9") || 'bc1qxy2kgdygjrsqtzq2n0yrf249wfj5ygr4hmx2n9',
    eth: ("TURBOPACK compile-time value", "0x71C7656EC7ab88b098defB751B7401B5f6d8976F") || '0x71C7656EC7ab88b098defB751B7401B5f6d8976F'
};
const NAV = [
    'About',
    'Services',
    'Projects',
    'Certifications',
    'Coffee',
    'Contact'
];
const ROLES = [
    'Network Engineer',
    'Cybersecurity Specialist',
    'Penetration Tester',
    'DevOps Engineer'
];
const SKILLS = [
    'Penetration Testing',
    'Network Security',
    'Cisco / CCNA',
    'AWS',
    'Azure',
    'Docker',
    'Kubernetes',
    'Python',
    'JavaScript',
    'TypeScript',
    'Bash',
    'Metasploit',
    'Wireshark',
    'Burp Suite',
    'Nmap',
    'SIEM',
    'OSINT',
    'PCI DSS',
    'Digital Forensics'
];
const SERVICES = [
    {
        n: '01',
        icon: '◈',
        title: 'Penetration Testing',
        desc: 'Full security assessments, vulnerability scanning, ethical hacking and remediation to fortify your defenses.'
    },
    {
        n: '02',
        icon: '◎',
        title: 'Network Design & Security',
        desc: 'Security-first architectures: SDN, VLANs, routing protocols and hardened remote access solutions.'
    },
    {
        n: '03',
        icon: '⟨/⟩',
        title: 'Web Development',
        desc: 'Secure full-stack apps from polished frontends to hardened APIs, built with security from day one.'
    },
    {
        n: '04',
        icon: '⊕',
        title: 'Digital Forensics',
        desc: 'Incident response, evidence collection and court-ready analysis after breaches or investigations.'
    },
    {
        n: '05',
        icon: '◉',
        title: 'Telemetry & Monitoring',
        desc: 'Grafana, Prometheus and custom dashboards for full network and security visibility.'
    },
    {
        n: '06',
        icon: '⬡',
        title: 'Cloud Security',
        desc: 'AWS and Azure hardening: IAM policies, secure VPC design and cloud-native security tooling.'
    }
];
const PROJECTS = [
    {
        img: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=1200&q=80',
        title: 'Autoshift v3',
        year: '2024',
        desc: 'Intelligent automation platform streamlining shift management, scheduling and workforce coordination with a modern React frontend and robust Node.js API.',
        tags: [
            'React',
            'Node.js',
            'Automation',
            'Dashboard'
        ],
        github: 'https://github.com/netgee-k/Autoshift-v3',
        link: '#',
        size: 'large'
    },
    {
        img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
        title: 'Metasploitable2 Guide',
        year: '2023',
        desc: 'Full exploitation chain on deliberately vulnerable VMs. Documented for security training and research.',
        tags: [
            'PenTest',
            'Security',
            'VMs'
        ],
        github: 'https://github.com/netgee-k',
        link: '#',
        size: 'small'
    },
    {
        img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        title: 'SDN DDoS Detection',
        year: '2023',
        desc: 'Research comparing DDoS resilience between Software Defined Networks and traditional architectures.',
        tags: [
            'SDN',
            'Research',
            'Network'
        ],
        github: 'https://github.com/netgee-k',
        link: '#',
        size: 'small'
    },
    {
        img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
        title: 'TillBase POS',
        year: '2022',
        desc: 'Secure cloud-based POS and inventory system with PCI DSS compliance and real-time analytics.',
        tags: [
            'Python',
            'PCI DSS',
            'Cloud'
        ],
        github: 'https://github.com/netgee-k',
        link: '#',
        size: 'small'
    }
];
const CERTS = [
    {
        short: 'PT+',
        full: 'CompTIA PenTest+',
        org: 'CompTIA',
        date: 'May 2023',
        color: '#ff6b35',
        desc: 'Planning, scoping, scanning and executing penetration testing engagements at enterprise scale.'
    },
    {
        short: 'OPSWAT',
        full: 'OPSWAT Data Transfer Security',
        org: 'OPSWAT',
        date: 'Dec 2022',
        color: '#00f5d4',
        desc: 'Critical infrastructure protection, secure data transfer protocols and advanced malware prevention.'
    },
    {
        short: 'CCNA',
        full: 'Cisco CCNA',
        org: 'Cisco',
        date: '2021',
        color: '#7b2fff',
        desc: 'Installing, configuring, operating and troubleshooting routed and switched enterprise networks.'
    }
];
const B_AMT = [
    1,
    3,
    5,
    10,
    20,
    50
];
const P_AMT = [
    150,
    400,
    700,
    1500,
    3000,
    7000
];
function Home() {
    _s();
    const heroRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [typed, setTyped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selB, setSelB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(5);
    const [selP, setSelP] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(700);
    const [custB, setCustB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [custP, setCustP] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [psEmail, setPsEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [toast, setToast] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const onScroll = {
                "Home.useEffect.onScroll": ()=>setScrolled(window.scrollY > 50)
            }["Home.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll);
            return ({
                "Home.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const obs = new IntersectionObserver({
                "Home.useEffect": (entries)=>{
                    entries.forEach({
                        "Home.useEffect": (e)=>{
                            if (e.isIntersecting) e.target.classList.add('visible');
                        }
                    }["Home.useEffect"]);
                }
            }["Home.useEffect"], {
                threshold: 0.08,
                rootMargin: '40px'
            });
            document.querySelectorAll('.reveal').forEach({
                "Home.useEffect": (el)=>obs.observe(el)
            }["Home.useEffect"]);
            return ({
                "Home.useEffect": ()=>obs.disconnect()
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            let ri = 0, ci = 0, del = false;
            let t;
            const tick = {
                "Home.useEffect.tick": ()=>{
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
                }
            }["Home.useEffect.tick"];
            t = setTimeout(tick, 600);
            return ({
                "Home.useEffect": ()=>clearTimeout(t)
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const showToast = (msg)=>{
        setToast(msg);
        setTimeout(()=>setToast(''), 5000);
    };
    const handleBinancePay = ()=>{
        window.open(`${CONFIG.binance.payLink}?amount=${parseFloat(custB) || selB}&currency=USDT&memo=CoffeeJesse`, '_blank');
        setModal(null);
        showToast('Redirecting to Binance Pay...');
    };
    const handlePaystackPay = ()=>{
        const amount = (parseFloat(custP) || selP) * 100;
        const email = psEmail || CONFIG.paystack.emailFallback;
        if (!email.includes('@')) {
            alert('Please enter a valid email.');
            return;
        }
        const PS = window.PaystackPop;
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
            callback: (r)=>{
                setModal(null);
                showToast('Thank you! ☕ Ref: ' + r.reference);
            },
            onClose: ()=>{}
        }).openIframe();
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        showToast("Message sent! I'll reply soon 🚀");
        setForm({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "https://js.paystack.co/v1/inline.js",
                strategy: "lazyOnload"
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
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
        body { font-family:'Syne',sans-serif; background:var(--bg); color:var(--text); overflow-x:hidden; min-height:100vh; }
        ::selection { background:var(--cyan); color:var(--bg); }
        ::-webkit-scrollbar { width:5px; }
        ::-webkit-scrollbar-thumb { background:var(--grad); border-radius:3px; }

        /* Grid overlay */
        body::before {
          content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
          background-image: linear-gradient(rgba(0,245,212,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,.025) 1px, transparent 1px);
          background-size:55px 55px;
        }
        /* Radial glows */
        body::after {
          content:''; position:fixed; inset:0; z-index:0; pointer-events:none;
          background:
            radial-gradient(circle at 50% 0%,   rgba(0,245,212,.08)  0%, transparent 50%),
            radial-gradient(circle at 0%   50%,  rgba(123,47,255,.08) 0%, transparent 50%),
            radial-gradient(circle at 100% 100%, rgba(245,0,160,.07)  0%, transparent 50%);
        }

        /* ── NAV ── */
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
          font-family:'JetBrains Mono',monospace; font-size:.72rem; font-weight:500;
          letter-spacing:2px; text-transform:uppercase; color:var(--muted);
          text-decoration:none; transition:color .2s; position:relative; padding-bottom:3px;
        }
        .nav-links a::after { content:''; position:absolute; bottom:0; left:0; width:0; height:1px; background:var(--grad); transition:width .3s; }
        .nav-links a:hover { color:var(--cyan); }
        .nav-links a:hover::after { width:100%; }
        .menu-btn { display:none; flex-direction:column; gap:5px; background:none; border:none; cursor:pointer; padding:8px; }
        .menu-btn span { display:block; width:22px; height:2px; background:var(--text); border-radius:2px; transition:all .3s; }

        /* ── MOBILE MENU ── */
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

        /* ── HERO ── */
        .hero {
          position:relative; z-index:1;
          min-height:100vh; display:flex; align-items:center;
          padding:100px clamp(20px,5vw,64px) 60px;
        }
        .hero-inner { max-width:1400px; margin:0 auto; display:grid; grid-template-columns:1fr 1fr; gap:60px; align-items:center; width:100%; }
        .eyebrow {
          display:inline-flex; align-items:center; gap:10px; margin-bottom:28px;
          font-family:'JetBrains Mono',monospace; font-size:.68rem; letter-spacing:4px;
          text-transform:uppercase; color:var(--cyan);
        }
        .eyebrow::before { content:''; width:28px; height:1px; background:var(--cyan); }
        .hero h1 { font-size:clamp(2.5rem,5.5vw,5rem); font-weight:800; letter-spacing:-2px; line-height:1.08; margin-bottom:18px; }
        .hero h1 .grad { display:block; background:var(--grad); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; }
        .typed-line { font-family:'JetBrains Mono',monospace; font-size:clamp(.88rem,1.5vw,1.05rem); color:var(--cyan); margin-bottom:24px; min-height:28px; }
        .cursor { animation:blink 1s infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .hero-desc { font-size:clamp(.9rem,1.2vw,.98rem); color:var(--muted); line-height:1.9; max-width:500px; margin-bottom:40px; }
        .hero-btns { display:flex; gap:14px; flex-wrap:wrap; }
        .btn-g {
          display:inline-flex; align-items:center; gap:9px;
          padding:15px 30px; border-radius:8px; border:none;
          background:var(--grad); color:var(--bg);
          font-family:'Syne',sans-serif; font-weight:800; font-size:.9rem;
          cursor:pointer; text-decoration:none; transition:all .25s;
        }
        .btn-g:hover { opacity:.87; transform:translateY(-2px); box-shadow:0 14px 32px rgba(0,245,212,.28); }
        .btn-o {
          display:inline-flex; align-items:center; gap:9px;
          padding:14px 30px; border-radius:8px;
          border:1px solid rgba(255,255,255,.15); background:transparent;
          color:var(--text); font-family:'Syne',sans-serif; font-weight:700;
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

        /* ── SECTIONS ── */
        .section { position:relative; z-index:1; padding:clamp(70px,10vw,120px) clamp(20px,5vw,64px); }
        .section-alt { background:rgba(255,255,255,.02); }
        .s-inner { max-width:1400px; margin:0 auto; }
        .s-eyebrow {
          display:inline-flex; align-items:center; gap:10px; margin-bottom:14px;
          font-family:'JetBrains Mono',monospace; font-size:.65rem; letter-spacing:4px;
          text-transform:uppercase; color:var(--cyan);
        }
        .s-eyebrow::before { content:''; width:22px; height:1px; background:var(--cyan); }
        .s-title { font-size:clamp(1.9rem,3.5vw,3rem); font-weight:800; letter-spacing:-1px; line-height:1.15; margin-bottom:clamp(40px,6vw,70px); }
        .s-title em { color:var(--cyan); font-style:normal; }

        /* Reveal */
        .reveal { opacity:0; transform:translateY(22px); transition:opacity .6s ease, transform .6s ease; }
        .reveal.visible { opacity:1; transform:none; }

        /* ── ABOUT ── */
        .about-grid { display:grid; grid-template-columns:1.2fr 1fr; gap:clamp(40px,6vw,80px); align-items:start; }
        .about-p { font-size:.95rem; color:var(--muted); line-height:1.95; margin-bottom:18px; }
        .skills-lbl { font-family:'JetBrains Mono',monospace; font-size:.62rem; letter-spacing:3px; text-transform:uppercase; color:var(--muted); margin:22px 0 12px; }
        .chips { display:flex; flex-wrap:wrap; gap:7px; }
        .chip { padding:5px 12px; border-radius:4px; background:rgba(0,245,212,.07); border:1px solid rgba(0,245,212,.16); font-family:'JetBrains Mono',monospace; font-size:.7rem; color:var(--cyan); transition:all .2s; cursor:default; }
        .chip:hover { background:var(--cyan); color:var(--bg); transform:translateY(-2px); }
        .stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .stat-card { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:26px; text-align:center; transition:all .3s; backdrop-filter:blur(10px); }
        .stat-card:hover { border-color:var(--bh); transform:translateY(-4px); box-shadow:0 16px 40px rgba(0,245,212,.1); }
        .stat-n { font-size:clamp(2rem,2.8vw,2.6rem); font-weight:800; color:var(--cyan); line-height:1; margin-bottom:6px; }
        .stat-l { font-family:'JetBrains Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:1px; }

        /* ── SERVICES ── */
        .srv-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.06); border-radius:14px; overflow:hidden; }
        .srv-card { background:var(--card); padding:clamp(22px,3vw,38px); position:relative; overflow:hidden; transition:background .3s; cursor:default; }
        .srv-card:hover { background:rgba(0,245,212,.03); }
        .srv-card::after { content:''; position:absolute; bottom:0; left:0; width:100%; height:2px; background:var(--grad); transform:scaleX(0); transform-origin:left; transition:transform .4s; }
        .srv-card:hover::after { transform:scaleX(1); }
        .srv-n { font-family:'JetBrains Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:2px; margin-bottom:14px; }
        .srv-icon { font-size:1.6rem; color:var(--cyan); display:block; margin-bottom:16px; }
        .srv-title { font-size:1rem; font-weight:700; margin-bottom:10px; }
        .srv-desc { font-size:.84rem; color:var(--muted); line-height:1.75; }

        /* ── PROJECTS ── */
        .proj-grid { display:grid; grid-template-columns:repeat(12,1fr); gap:18px; }
        .proj-card { background:var(--card); border:1px solid var(--border); border-radius:14px; overflow:hidden; transition:all .35s; display:flex; flex-direction:column; backdrop-filter:blur(8px); }
        .proj-card:hover { border-color:var(--bh); transform:translateY(-5px); box-shadow:0 22px 50px rgba(0,0,0,.45); }
        .proj-card.large { grid-column:span 7; }
        .proj-card.small { grid-column:span 5; }
        .proj-img { overflow:hidden; }
        .proj-img img { width:100%; object-fit:cover; display:block; transition:transform .5s; }
        .proj-card.large .proj-img img { height:240px; }
        .proj-card.small .proj-img img  { height:180px; }
        .proj-card:hover .proj-img img { transform:scale(1.07); }
        .proj-body { padding:22px; flex:1; display:flex; flex-direction:column; }
        .feat-tag { font-family:'JetBrains Mono',monospace; font-size:.6rem; font-weight:700; letter-spacing:2px; text-transform:uppercase; background:var(--grad); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:8px; display:block; }
        .proj-year { font-family:'JetBrains Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:2px; margin-bottom:6px; }
        .proj-title { font-size:1.1rem; font-weight:800; margin-bottom:10px; }
        .proj-desc { font-size:.84rem; color:var(--muted); line-height:1.7; margin-bottom:16px; flex:1; }
        .proj-tags { display:flex; flex-wrap:wrap; gap:6px; margin-bottom:16px; }
        .proj-tag { font-family:'JetBrains Mono',monospace; font-size:.65rem; padding:3px 9px; background:rgba(123,47,255,.15); color:#b09eff; border-radius:4px; }
        .proj-links { display:flex; gap:18px; margin-top:auto; }
        .proj-link { font-family:'JetBrains Mono',monospace; font-size:.78rem; color:var(--muted); text-decoration:none; transition:color .2s; }
        .proj-link:hover { color:var(--cyan); }

        /* ── CERTS ── */
        .cert-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .cert-card { background:var(--card); border:1px solid var(--border); border-radius:14px; padding:30px; position:relative; overflow:hidden; transition:all .35s; backdrop-filter:blur(8px); }
        .cert-card:hover { transform:translateY(-5px); box-shadow:0 22px 50px rgba(0,0,0,.4); }
        .cert-strip { position:absolute; top:0; left:0; right:0; height:3px; }
        .cert-badge { width:50px; height:50px; border-radius:10px; display:flex; align-items:center; justify-content:center; font-family:'JetBrains Mono',monospace; font-weight:800; font-size:.78rem; margin-bottom:18px; transition:transform .3s; }
        .cert-card:hover .cert-badge { transform:scale(1.08); }
        .cert-title { font-size:1.05rem; font-weight:800; margin-bottom:5px; }
        .cert-org { font-family:'JetBrains Mono',monospace; font-size:.68rem; margin-bottom:12px; }
        .cert-desc { font-size:.84rem; color:var(--muted); line-height:1.7; margin-bottom:14px; }
        .cert-date { font-family:'JetBrains Mono',monospace; font-size:.68rem; }

        /* ── COFFEE ── */
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
        .crypto-box { font-family:'JetBrains Mono',monospace; font-size:.72rem; color:var(--muted); background:rgba(255,255,255,.02); border:1px solid var(--border); border-radius:10px; padding:18px 22px; text-align:left; line-height:2.1; }
        .crypto-box strong { color:var(--text); }
        .crypto-box em { color:var(--cyan); font-style:normal; }

        /* ── CONTACT ── */
        .contact-grid { display:grid; grid-template-columns:1fr 1.5fr; gap:clamp(40px,6vw,80px); }
        .contact-title { font-size:clamp(1.5rem,2.5vw,2rem); font-weight:800; letter-spacing:-1px; margin-bottom:16px; }
        .contact-desc { font-size:.95rem; color:var(--muted); line-height:1.9; margin-bottom:36px; }
        .contact-item { display:flex; align-items:center; gap:16px; margin-bottom:22px; transition:transform .2s; }
        .contact-item:hover { transform:translateX(8px); }
        .contact-icon { width:44px; height:44px; border-radius:10px; background:rgba(0,245,212,.08); border:1px solid rgba(0,245,212,.18); display:flex; align-items:center; justify-content:center; font-size:1.1rem; flex-shrink:0; transition:all .2s; }
        .contact-item:hover .contact-icon { background:var(--cyan); color:var(--bg); }
        .contact-lbl { font-family:'JetBrains Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:2px; text-transform:uppercase; margin-bottom:3px; }
        .contact-val { font-size:.9rem; color:var(--text); text-decoration:none; transition:color .2s; }
        .contact-val:hover { color:var(--cyan); }
        .socials { display:flex; gap:10px; margin-top:28px; }
        .soc-link { width:40px; height:40px; border-radius:8px; background:rgba(255,255,255,.04); border:1px solid var(--border); display:flex; align-items:center; justify-content:center; font-size:.9rem; color:var(--muted); text-decoration:none; transition:all .25s; }
        .soc-link:hover { background:var(--cyan); color:var(--bg); border-color:var(--cyan); transform:translateY(-3px); }
        .contact-form { background:var(--card); border:1px solid var(--border); border-radius:16px; padding:clamp(24px,4vw,40px); backdrop-filter:blur(10px); }
        .form-row { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
        .form-group { display:flex; flex-direction:column; gap:7px; margin-bottom:16px; }
        .form-lbl { font-family:'JetBrains Mono',monospace; font-size:.62rem; color:var(--muted); letter-spacing:2px; text-transform:uppercase; }
        .form-in, .form-ta { background:rgba(255,255,255,.03); border:1px solid var(--border); border-radius:8px; padding:13px 15px; color:var(--text); font-family:'Syne',sans-serif; font-size:.9rem; outline:none; transition:all .25s; width:100%; }
        .form-in:focus, .form-ta:focus { border-color:var(--cyan); background:rgba(0,245,212,.04); box-shadow:0 0 0 2px rgba(0,245,212,.1); }
        .form-ta { min-height:130px; resize:vertical; }

        /* ── FOOTER ── */
        .footer { position:relative; z-index:1; border-top:1px solid var(--border); background:rgba(4,4,13,.94); padding:36px clamp(20px,5vw,64px); backdrop-filter:blur(10px); }
        .footer-inner { max-width:1400px; margin:0 auto; display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:18px; }
        .footer-logo { font-size:1.2rem; font-weight:800; text-decoration:none; color:var(--text); letter-spacing:-.5px; }
        .footer-logo em { color:var(--cyan); font-style:normal; }
        .footer-nav { display:flex; gap:22px; flex-wrap:wrap; }
        .footer-nav a { font-size:.78rem; color:var(--muted); text-decoration:none; transition:color .2s; }
        .footer-nav a:hover { color:var(--cyan); }
        .wa-btn { display:inline-flex; align-items:center; gap:8px; background:#25D366; color:#fff; padding:9px 20px; border-radius:30px; font-size:.83rem; font-weight:700; text-decoration:none; transition:all .25s; }
        .wa-btn:hover { background:#1ebe5d; transform:translateY(-2px); box-shadow:0 10px 22px rgba(37,211,102,.28); }
        .footer-copy { font-family:'JetBrains Mono',monospace; font-size:.64rem; color:#3a3a5e; width:100%; text-align:center; margin-top:12px; }

        /* ── MODAL ── */
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
        .ab { padding:12px 5px; border:1px solid var(--border); border-radius:6px; background:none; color:var(--text); font-family:'JetBrains Mono',monospace; font-size:.85rem; font-weight:700; cursor:pointer; transition:all .2s; }
        .ab:hover, .ab.on { background:var(--cyan); color:var(--bg); border-color:var(--cyan); }
        .mi { width:100%; padding:13px 15px; background:rgba(255,255,255,.03); border:1px solid var(--border); border-radius:6px; color:var(--text); font-family:'JetBrains Mono',monospace; font-size:.9rem; outline:none; margin-bottom:14px; transition:all .25s; }
        .mi:focus { border-color:var(--cyan); box-shadow:0 0 0 2px rgba(0,245,212,.1); }

        /* ── TOAST ── */
        .toast { position:fixed; bottom:22px; right:22px; z-index:2000; background:#00ff88; color:#001a0a; padding:14px 22px; border-radius:8px; font-weight:800; font-family:'Syne',sans-serif; box-shadow:0 10px 32px rgba(0,255,136,.3); animation:slideUp .3s ease; max-width:320px; }

        /* ── RESPONSIVE ── */
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
      `
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `navbar${scrolled ? ' scrolled' : ''}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "nav-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "nav-logo",
                            children: [
                                "Jesse",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 418,
                                    columnNumber: 49
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 418,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "nav-links",
                            children: NAV.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `#${n.toLowerCase()}`,
                                        children: n === 'Coffee' ? '☕ Coffee' : n
                                    }, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 420,
                                        columnNumber: 37
                                    }, this)
                                }, n, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 420,
                                    columnNumber: 25
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "menu-btn",
                            onClick: ()=>setMenu(true),
                            "aria-label": "Open menu",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 20
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 423,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 422,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 417,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 416,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `mob-menu${menu ? ' open' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "mob-close",
                        onClick: ()=>setMenu(false),
                        children: "✕"
                    }, void 0, false, {
                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                        lineNumber: 430,
                        columnNumber: 9
                    }, this),
                    NAV.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${n.toLowerCase()}`,
                            onClick: ()=>setMenu(false),
                            children: n === 'Coffee' ? '☕ Coffee' : n
                        }, n, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 431,
                            columnNumber: 21
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 429,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                fallback: null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThreeBackground, {
                    heroRef: heroRef
                }, void 0, false, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 436,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 435,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "hero",
                className: "hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "eyebrow",
                                    children: "Available for freelance"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: [
                                        "Hi, I'm",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "grad",
                                            children: "Jesse Kimani"
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 444,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 444,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "typed-line",
                                    children: [
                                        typed,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "cursor",
                                            children: "|"
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 445,
                                            columnNumber: 48
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "hero-desc",
                                    children: "Building secure, scalable, and resilient infrastructure with a focus on cybersecurity and distributed systems. I break things so others don't have to."
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "hero-btns",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#projects",
                                            className: "btn-g",
                                            children: "⬡ View Projects"
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 448,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "btn-o",
                                            children: "✉ Contact Me"
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 449,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-canvas-wrap",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                                ref: heroRef
                            }, void 0, false, {
                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                lineNumber: 453,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 452,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "about",
                className: "section section-alt",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "s-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "s-eyebrow reveal",
                            children: "Who I Am"
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "s-title reveal",
                            children: [
                                "Network &",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 55
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Cybersecurity"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 462,
                                    columnNumber: 61
                                }, this),
                                " Pro"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 462,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "about-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "reveal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "about-p",
                                            children: "Experienced Network Engineer and Penetration Tester specializing in secure infrastructure design, vulnerability assessment, and threat mitigation. CompTIA PenTest+ certified with hands-on expertise across the full attack and defense lifecycle."
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 465,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "about-p",
                                            children: "I help organizations build resilient systems ensuring data confidentiality, integrity, and availability through comprehensive security and optimized network design."
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 466,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "skills-lbl",
                                            children: "Technical Arsenal"
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 467,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "chips",
                                            children: SKILLS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "chip",
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 468,
                                                    columnNumber: 53
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 464,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "reveal",
                                    style: {
                                        transitionDelay: '.12s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "stats-grid",
                                        children: [
                                            [
                                                '3+',
                                                'Years Experience'
                                            ],
                                            [
                                                '15+',
                                                'Projects Done'
                                            ],
                                            [
                                                '3',
                                                'Certifications'
                                            ],
                                            [
                                                '∞',
                                                'Packets Analyzed'
                                            ]
                                        ].map(([n, l])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "stat-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "stat-n",
                                                        children: n
                                                    }, void 0, false, {
                                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                        lineNumber: 474,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "stat-l",
                                                        children: l
                                                    }, void 0, false, {
                                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                        lineNumber: 475,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, l, true, {
                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                lineNumber: 473,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 463,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 460,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 459,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services",
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "s-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "s-eyebrow reveal",
                            children: "What I Do"
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 487,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "s-title reveal",
                            children: [
                                "Professional",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 54
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 488,
                                    columnNumber: 60
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 488,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "srv-grid",
                            children: SERVICES.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "srv-card reveal",
                                    style: {
                                        transitionDelay: `${i % 3 * .08}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "srv-n",
                                            children: s.n
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 492,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "srv-icon",
                                            children: s.icon
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 493,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "srv-title",
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 494,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "srv-desc",
                                            children: s.desc
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 495,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, s.title, true, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 491,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 489,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 486,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "projects",
                className: "section section-alt",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "s-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "s-eyebrow reveal",
                            children: "My Work"
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 505,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "s-title reveal",
                            children: [
                                "Featured",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 50
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Projects"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 506,
                                    columnNumber: 56
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "proj-grid",
                            children: PROJECTS.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `proj-card ${p.size} reveal`,
                                    style: {
                                        transitionDelay: `${i * .07}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "proj-img",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: p.img,
                                                alt: p.title,
                                                loading: "lazy"
                                            }, void 0, false, {
                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 43
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 510,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "proj-body",
                                            children: [
                                                p.size === 'large' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "feat-tag",
                                                    children: "★ FEATURED PROJECT"
                                                }, void 0, false, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 512,
                                                    columnNumber: 40
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "proj-year",
                                                    children: p.year
                                                }, void 0, false, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 513,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "proj-title",
                                                    children: p.title
                                                }, void 0, false, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 514,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "proj-desc",
                                                    children: p.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 515,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "proj-tags",
                                                    children: p.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "proj-tag",
                                                            children: t
                                                        }, t, false, {
                                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                            lineNumber: 516,
                                                            columnNumber: 61
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "proj-links",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: p.github,
                                                            target: "_blank",
                                                            rel: "noreferrer",
                                                            className: "proj-link",
                                                            children: "⬡ GitHub"
                                                        }, void 0, false, {
                                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                            lineNumber: 518,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: p.link,
                                                            className: "proj-link",
                                                            children: "↗ View"
                                                        }, void 0, false, {
                                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 517,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 511,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, p.title, true, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 509,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 507,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 504,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 503,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "certifications",
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "s-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "s-eyebrow reveal",
                            children: "Credentials"
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 531,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "s-title reveal",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: "Certifications"
                            }, void 0, false, {
                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                lineNumber: 532,
                                columnNumber: 42
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cert-grid",
                            children: CERTS.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "cert-card reveal",
                                    style: {
                                        transitionDelay: `${i * .1}s`
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cert-strip",
                                            style: {
                                                background: `linear-gradient(90deg,${c.color},transparent)`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 536,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cert-badge",
                                            style: {
                                                background: `${c.color}18`,
                                                color: c.color
                                            },
                                            children: c.short
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 537,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cert-title",
                                            children: c.full
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 538,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cert-org",
                                            style: {
                                                color: c.color
                                            },
                                            children: c.org
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 539,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cert-desc",
                                            children: c.desc
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 540,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "cert-date",
                                            style: {
                                                color: c.color
                                            },
                                            children: [
                                                "Issued ",
                                                c.date
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 541,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, c.full, true, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 535,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 533,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 530,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "coffee",
                className: "section section-alt",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "s-inner",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "coffee-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "coffee-emoji",
                                children: "☕"
                            }, void 0, false, {
                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                lineNumber: 552,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "s-eyebrow reveal",
                                style: {
                                    justifyContent: 'center'
                                },
                                children: "Support My Work"
                            }, void 0, false, {
                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                lineNumber: 553,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "s-title reveal",
                                style: {
                                    textAlign: 'center',
                                    marginBottom: 16
                                },
                                children: [
                                    "Buy Me a",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 554,
                                        columnNumber: 97
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "Coffee"
                                    }, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 554,
                                        columnNumber: 103
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                lineNumber: 554,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "coffee-desc reveal",
                                children: "If my open-source work, writeups, or tools have helped you — buy me a coffee! Pay via crypto on Binance or card/M-Pesa via Paystack."
                            }, void 0, false, {
                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                lineNumber: 555,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pay-grid reveal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pay-card",
                                        style: {
                                            borderTop: '3px solid #F0B90B'
                                        },
                                        onClick: ()=>setModal('binance'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pay-head",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pay-icon",
                                                        children: "₿"
                                                    }, void 0, false, {
                                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 43
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pay-name",
                                                        style: {
                                                            color: '#F0B90B'
                                                        },
                                                        children: "Binance Pay"
                                                    }, void 0, false, {
                                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                        lineNumber: 558,
                                                        columnNumber: 78
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                lineNumber: 558,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "pay-desc",
                                                children: "Send crypto instantly. Zero fees. BTC, ETH, BNB, USDT all supported."
                                            }, void 0, false, {
                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                lineNumber: 559,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-g",
                                                style: {
                                                    background: '#F0B90B',
                                                    width: '100%',
                                                    justifyContent: 'center'
                                                },
                                                children: "Pay with Crypto"
                                            }, void 0, false, {
                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                lineNumber: 560,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 557,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pay-card",
                                        style: {
                                            borderTop: '3px solid #00C3F7'
                                        },
                                        onClick: ()=>setModal('paystack'),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pay-head",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pay-icon",
                                                        children: "💳"
                                                    }, void 0, false, {
                                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 43
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "pay-name",
                                                        style: {
                                                            color: '#00C3F7'
                                                        },
                                                        children: "Paystack"
                                                    }, void 0, false, {
                                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                        lineNumber: 563,
                                                        columnNumber: 79
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                lineNumber: 563,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "pay-desc",
                                                children: "Card, M-Pesa or bank transfer. KES, USD, NGN all supported."
                                            }, void 0, false, {
                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                lineNumber: 564,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn-g",
                                                style: {
                                                    background: '#00C3F7',
                                                    color: '#001a22',
                                                    width: '100%',
                                                    justifyContent: 'center'
                                                },
                                                children: "Pay with Card / M-Pesa"
                                            }, void 0, false, {
                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                lineNumber: 565,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 562,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                lineNumber: 556,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "crypto-box reveal",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Direct crypto?"
                                    }, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 569,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 569,
                                        columnNumber: 46
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "BTC: "
                                    }, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 15
                                    }, this),
                                    CRYPTO.btc,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 41
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        children: "ETH/USDT: "
                                    }, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 15
                                    }, this),
                                    CRYPTO.eth,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 571,
                                        columnNumber: 46
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            opacity: .45,
                                            fontSize: '.64rem'
                                        },
                                        children: "* Update your real wallet addresses in .env.local before going live"
                                    }, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 572,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                lineNumber: 568,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                        lineNumber: 551,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 550,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 549,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "contact",
                className: "section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "s-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "s-eyebrow reveal",
                            children: "Get In Touch"
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 581,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "s-title reveal",
                            children: [
                                "Let's",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 52
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "Connect"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 582,
                                    columnNumber: 58
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 582,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "contact-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "reveal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "contact-title",
                                            children: [
                                                "Let's build something ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                                    style: {
                                                        color: 'var(--cyan)',
                                                        fontStyle: 'normal'
                                                    },
                                                    children: "amazing"
                                                }, void 0, false, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 585,
                                                    columnNumber: 73
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 585,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "contact-desc",
                                            children: "Always open to new projects, collaboration, or just chatting about tech and security. Reach out any time."
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 586,
                                            columnNumber: 15
                                        }, this),
                                        [
                                            {
                                                icon: '✉',
                                                label: 'Email',
                                                val: CONTACT.email,
                                                href: `mailto:${CONTACT.email}`
                                            },
                                            {
                                                icon: '📍',
                                                label: 'Based',
                                                val: CONTACT.location,
                                                href: '#'
                                            },
                                            {
                                                icon: '⬡',
                                                label: 'GitHub',
                                                val: 'github.com/netgee-k',
                                                href: CONTACT.github
                                            }
                                        ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "contact-item",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "contact-icon",
                                                        children: c.icon
                                                    }, void 0, false, {
                                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "contact-lbl",
                                                                children: c.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                                lineNumber: 595,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: c.href,
                                                                target: "_blank",
                                                                rel: "noreferrer",
                                                                className: "contact-val",
                                                                children: c.val
                                                            }, void 0, false, {
                                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                                lineNumber: 596,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, c.label, true, {
                                                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                lineNumber: 592,
                                                columnNumber: 17
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "socials",
                                            children: [
                                                {
                                                    icon: '𝕏',
                                                    href: CONTACT.twitter
                                                },
                                                {
                                                    icon: '⬡',
                                                    href: CONTACT.github
                                                },
                                                {
                                                    icon: 'in',
                                                    href: CONTACT.linkedin
                                                },
                                                {
                                                    icon: '💬',
                                                    href: `https://wa.me/${CONTACT.whatsapp}`
                                                }
                                            ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: s.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "soc-link",
                                                    children: s.icon
                                                }, i, false, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 606,
                                                    columnNumber: 30
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 584,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "reveal",
                                    style: {
                                        transitionDelay: '.12s'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "contact-form",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "form-lbl",
                                                                    children: "Name"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                                    lineNumber: 614,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: "form-in",
                                                                    required: true,
                                                                    placeholder: "Your name",
                                                                    value: form.name,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            name: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                                    lineNumber: 615,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                            lineNumber: 613,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "form-group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "form-lbl",
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                                    lineNumber: 618,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: "form-in",
                                                                    type: "email",
                                                                    required: true,
                                                                    placeholder: "you@email.com",
                                                                    value: form.email,
                                                                    onChange: (e)=>setForm({
                                                                            ...form,
                                                                            email: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                                    lineNumber: 619,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 612,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-lbl",
                                                            children: "Subject"
                                                        }, void 0, false, {
                                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                            lineNumber: 623,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            className: "form-in",
                                                            required: true,
                                                            placeholder: "What's this about?",
                                                            value: form.subject,
                                                            onChange: (e)=>setForm({
                                                                    ...form,
                                                                    subject: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "form-group",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "form-lbl",
                                                            children: "Message"
                                                        }, void 0, false, {
                                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                            lineNumber: 627,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            className: "form-ta",
                                                            required: true,
                                                            placeholder: "Tell me more...",
                                                            value: form.message,
                                                            onChange: (e)=>setForm({
                                                                    ...form,
                                                                    message: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                            lineNumber: 628,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 626,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "btn-g",
                                                    style: {
                                                        width: '100%',
                                                        justifyContent: 'center',
                                                        padding: '16px'
                                                    },
                                                    children: "Send Message ↗"
                                                }, void 0, false, {
                                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                                    lineNumber: 630,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                            lineNumber: 611,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                        lineNumber: 610,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 583,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 580,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 579,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "footer-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#",
                            className: "footer-logo",
                            children: [
                                "Jesse",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 641,
                                    columnNumber: 52
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 641,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "footer-nav",
                            children: NAV.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${n.toLowerCase()}`,
                                    children: n
                                }, n, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 642,
                                    columnNumber: 51
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `https://wa.me/${CONTACT.whatsapp}`,
                            target: "_blank",
                            rel: "noreferrer",
                            className: "wa-btn",
                            children: "💬 WhatsApp"
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 643,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "footer-copy",
                            children: "© 2025 Jesse Kimani — All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 644,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 640,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `modal-ov${modal === 'binance' ? ' open' : ''}`,
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setModal(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mhead",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mtit",
                                    children: "☕ Buy Me a Coffee"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 651,
                                    columnNumber: 34
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mx",
                                    onClick: ()=>setModal(null),
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 651,
                                    columnNumber: 81
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 651,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "msub",
                            children: [
                                "Via ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: '#F0B90B'
                                    },
                                    children: "Binance Pay"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 652,
                                    columnNumber: 35
                                }, this),
                                " — pick an amount:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 652,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "amts",
                            children: B_AMT.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `ab${selB === a && !custB ? ' on' : ''}`,
                                    onClick: ()=>{
                                        setSelB(a);
                                        setCustB('');
                                    },
                                    children: [
                                        "$",
                                        a
                                    ]
                                }, a, true, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 654,
                                    columnNumber: 27
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 653,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "mi",
                            type: "number",
                            placeholder: "Custom amount (USD)",
                            min: "1",
                            value: custB,
                            onChange: (e)=>setCustB(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 656,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-g",
                            style: {
                                width: '100%',
                                justifyContent: 'center',
                                background: '#F0B90B',
                                padding: '14px'
                            },
                            onClick: handleBinancePay,
                            children: "Proceed with Binance Pay"
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 657,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 650,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 649,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `modal-ov${modal === 'paystack' ? ' open' : ''}`,
                onClick: (e)=>{
                    if (e.target === e.currentTarget) setModal(null);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-box",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mhead",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mtit",
                                    children: "☕ Buy Me a Coffee"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 664,
                                    columnNumber: 34
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "mx",
                                    onClick: ()=>setModal(null),
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 664,
                                    columnNumber: 81
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 664,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "msub",
                            children: [
                                "Via ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    style: {
                                        color: '#00C3F7'
                                    },
                                    children: "Paystack"
                                }, void 0, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 665,
                                    columnNumber: 35
                                }, this),
                                " — card, M-Pesa or bank:"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 665,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "amts",
                            children: P_AMT.map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `ab${selP === a && !custP ? ' on' : ''}`,
                                    onClick: ()=>{
                                        setSelP(a);
                                        setCustP('');
                                    },
                                    children: a >= 1000 ? `${a / 1000}k` : a
                                }, a, false, {
                                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                                    lineNumber: 667,
                                    columnNumber: 27
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 666,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "mi",
                            type: "number",
                            placeholder: "Custom amount (KES)",
                            min: "100",
                            value: custP,
                            onChange: (e)=>setCustP(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 669,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "mi",
                            type: "email",
                            placeholder: "Your email (for receipt)",
                            value: psEmail,
                            onChange: (e)=>setPsEmail(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 670,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn-g",
                            style: {
                                width: '100%',
                                justifyContent: 'center',
                                background: '#00C3F7',
                                color: '#001a22',
                                padding: '14px'
                            },
                            onClick: handlePaystackPay,
                            children: "Pay with Paystack"
                        }, void 0, false, {
                            fileName: "[project]/networksandcircuits/src/app/page.tsx",
                            lineNumber: 671,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/networksandcircuits/src/app/page.tsx",
                    lineNumber: 663,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 662,
                columnNumber: 7
            }, this),
            toast && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$networksandcircuits$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "toast",
                children: toast
            }, void 0, false, {
                fileName: "[project]/networksandcircuits/src/app/page.tsx",
                lineNumber: 675,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "cCsJZ/O0I/c49Kvz2/5rkFjdH8I=");
_c1 = Home;
var _c, _c1;
__turbopack_context__.k.register(_c, "ThreeBackground");
__turbopack_context__.k.register(_c1, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=networksandcircuits_src_app_page_tsx_b6a0e948._.js.map