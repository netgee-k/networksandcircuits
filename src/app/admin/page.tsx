'use client';
// src/app/admin/page.tsx
// Visit /admin  → password prompt → full project CMS
// Visitors never see this page linked anywhere — it's just for you.

import { useEffect, useState, useRef } from 'react';
import { Project } from '@/types/project';

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || 'changeme-set-in-env';

const EMPTY: Omit<Project, 'id'> = {
  title: '', year: String(new Date().getFullYear()), size: 'small',
  desc: '', tags: [], github: '', url: '', video: '', cover: '', gallery: [],
};

export default function AdminPage() {
  const [authed, setAuthed]     = useState(false);
  const [passInput, setPass]    = useState('');
  const [passErr, setPassErr]   = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading]   = useState(false);
  const [toast, setToast]       = useState('');
  const [editing, setEditing]   = useState<Project | null>(null);
  const [isNew, setIsNew]       = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [galInput, setGalInput] = useState('');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const toastRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    if (toastRef.current) clearTimeout(toastRef.current);
    toastRef.current = setTimeout(() => setToast(''), 4000);
  };

  const login = () => {
    if (passInput === ADMIN_KEY) { setAuthed(true); setPassErr(false); }
    else setPassErr(true);
  };

  const fetchProjects = async () => {
    setLoading(true);
    const r = await fetch('/api/projects');
    setProjects(await r.json());
    setLoading(false);
  };

  const saveAll = async (updated: Project[]) => {
    const r = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-admin-key': ADMIN_KEY },
      body: JSON.stringify(updated),
    });
    if (r.ok) { setProjects(updated); showToast('Saved ✓'); }
    else showToast('Save failed — check your key');
  };

  const deleteProject = async (id: number) => {
    if (!confirm('Delete this project?')) return;
    const r = await fetch(`/api/projects?id=${id}`, {
      method: 'DELETE',
      headers: { 'x-admin-key': ADMIN_KEY },
    });
    if (r.ok) { setProjects(p => p.filter(x => x.id !== id)); showToast('Deleted'); }
  };

  const openNew = () => {
    setEditing({ id: Date.now(), ...EMPTY });
    setTagInput('');
    setGalInput('');
    setIsNew(true);
  };

  const openEdit = (p: Project) => {
    setEditing({ ...p });
    setTagInput('');
    setGalInput(p.gallery.join('\n'));
    setIsNew(false);
  };

  const saveEditing = async () => {
    if (!editing) return;
    if (!editing.title.trim()) { showToast('Title is required'); return; }
    const gallery = galInput.split('\n').map(s => s.trim()).filter(Boolean);
    const proj = { ...editing, gallery };
    let updated: Project[];
    if (isNew) updated = [...projects, proj];
    else updated = projects.map(p => p.id === proj.id ? proj : p);
    await saveAll(updated);
    setEditing(null);
  };

  const addTag = () => {
    const t = tagInput.trim();
    if (!t || !editing) return;
    if (!editing.tags.includes(t)) setEditing({ ...editing, tags: [...editing.tags, t] });
    setTagInput('');
  };

  const removeTag = (t: string) => {
    if (!editing) return;
    setEditing({ ...editing, tags: editing.tags.filter(x => x !== t) });
  };

  const moveUp = (i: number) => {
    if (i === 0) return;
    const p = [...projects];
    [p[i - 1], p[i]] = [p[i], p[i - 1]];
    saveAll(p);
  };

  const moveDown = (i: number) => {
    if (i === projects.length - 1) return;
    const p = [...projects];
    [p[i], p[i + 1]] = [p[i + 1], p[i]];
    saveAll(p);
  };

  useEffect(() => { if (authed) fetchProjects(); }, [authed]);

  // ── LOGIN ──
  if (!authed) return (
    <div style={S.loginWrap}>
      <div style={S.loginBox}>
        <div style={S.loginLogo}>Jesse<span style={{ color: '#00f5d4' }}>.</span></div>
        <div style={S.loginTitle}>Admin access</div>
        <div style={S.loginSub}>Projects CMS — enter your password</div>
        <input
          style={{ ...S.inp, marginBottom: 8 }}
          type="password"
          placeholder="Password"
          value={passInput}
          onChange={e => setPass(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()}
          autoFocus
        />
        {passErr && <div style={S.err}>Wrong password</div>}
        <button style={S.btnPrimary} onClick={login}>Log in →</button>
      </div>
    </div>
  );

  // ── EDIT FORM ──
  if (editing) return (
    <div style={S.page}>
      <div style={S.topbar}>
        <button style={S.btnGhost} onClick={() => setEditing(null)}>← Back</button>
        <span style={S.topTitle}>{isNew ? 'New project' : `Edit: ${editing.title}`}</span>
        <button style={S.btnPrimary} onClick={saveEditing}>Save project</button>
      </div>

      <div style={S.formWrap}>
        <div style={S.formGrid}>
          <div style={S.formCol}>
            <Field label="Title">
              <input style={S.inp} value={editing.title} onChange={e => setEditing({ ...editing, title: e.target.value })} placeholder="Project name" />
            </Field>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Field label="Year">
                <input style={S.inp} value={editing.year} onChange={e => setEditing({ ...editing, year: e.target.value })} placeholder="2024" />
              </Field>
              <Field label="Size">
                <select style={S.inp} value={editing.size} onChange={e => setEditing({ ...editing, size: e.target.value as 'large' | 'small' })}>
                  <option value="small">Small</option>
                  <option value="large">Large (featured)</option>
                </select>
              </Field>
            </div>
            <Field label="Description">
              <textarea style={{ ...S.inp, minHeight: 90, resize: 'vertical' }} value={editing.desc} onChange={e => setEditing({ ...editing, desc: e.target.value })} placeholder="What does this project do?" />
            </Field>
            <Field label="Tags">
              <div style={S.tagWrap}>
                {editing.tags.map(t => (
                  <span key={t} style={S.tagChip}>{t}<button style={S.tagX} onClick={() => removeTag(t)}>×</button></span>
                ))}
                <input
                  style={{ border: 'none', outline: 'none', background: 'none', color: '#d4d4e8', fontSize: 13, minWidth: 90, flex: 1 }}
                  placeholder="Type + Enter"
                  value={tagInput}
                  onChange={e => setTagInput(e.target.value)}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addTag(); } }}
                />
              </div>
            </Field>
            <Field label="GitHub URL">
              <input style={S.inp} value={editing.github} onChange={e => setEditing({ ...editing, github: e.target.value })} placeholder="https://github.com/..." />
            </Field>
            <Field label="Live site URL">
              <input style={S.inp} value={editing.url} onChange={e => setEditing({ ...editing, url: e.target.value })} placeholder="https://..." />
            </Field>
            <Field label="Video URL (YouTube / Vimeo)">
              <input style={S.inp} value={editing.video} onChange={e => setEditing({ ...editing, video: e.target.value })} placeholder="https://youtube.com/..." />
            </Field>
          </div>

          <div style={S.formCol}>
            <Field label="Cover image URL">
              <input style={S.inp} value={editing.cover} onChange={e => setEditing({ ...editing, cover: e.target.value })} placeholder="https://images.unsplash.com/..." />
            </Field>
            {editing.cover && (
              <img
                src={editing.cover}
                alt="cover preview"
                style={{ width: '100%', height: 180, objectFit: 'cover', borderRadius: 10, border: '1px solid rgba(255,255,255,.08)', marginBottom: 18 }}
                onError={e => (e.currentTarget.style.display = 'none')}
              />
            )}
            <Field label="Gallery images — one URL per line">
              <textarea
                style={{ ...S.inp, minHeight: 100, resize: 'vertical', fontFamily: 'IBM Plex Mono, monospace', fontSize: 12 }}
                value={galInput}
                onChange={e => setGalInput(e.target.value)}
                placeholder={'https://img1.com/photo.jpg\nhttps://img2.com/photo.jpg'}
              />
            </Field>
            {galInput.split('\n').filter(Boolean).length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 8, marginBottom: 18 }}>
                {galInput.split('\n').map(u => u.trim()).filter(Boolean).slice(0, 12).map((u, i) => (
                  <img
                    key={i}
                    src={u}
                    alt=""
                    style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 8, border: '1px solid rgba(255,255,255,.08)', cursor: 'zoom-in' }}
                    onClick={() => setLightbox(u)}
                    onError={e => (e.currentTarget.style.opacity = '0.2')}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 8 }}>
          <button style={S.btnGhost} onClick={() => setEditing(null)}>Cancel</button>
          <button style={S.btnPrimary} onClick={saveEditing}>Save project</button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div style={S.lightboxOv} onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 12, objectFit: 'contain' }} />
        </div>
      )}
      {toast && <div style={S.toast}>{toast}</div>}
    </div>
  );

  // ── PROJECT LIST ──
  return (
    <div style={S.page}>
      <div style={S.topbar}>
        <span style={S.topTitle}>Projects CMS</span>
        <div style={{ display: 'flex', gap: 12 }}>
          <button style={S.btnGhost} onClick={fetchProjects}>↻ Refresh</button>
          <button style={S.btnPrimary} onClick={openNew}>+ New project</button>
        </div>
      </div>

      <div style={S.listWrap}>
        {loading && <div style={S.muted}>Loading...</div>}
        {!loading && projects.length === 0 && <div style={S.muted}>No projects yet. Add your first one!</div>}
        {projects.map((p, i) => (
          <div key={p.id} style={S.projRow}>
            {p.cover
              ? <img src={p.cover} alt={p.title} style={S.rowThumb} onError={e => (e.currentTarget.style.display = 'none')} />
              : <div style={{ ...S.rowThumb, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>📂</div>
            }
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#d4d4e8', marginBottom: 4 }}>
                {p.title}
                {p.size === 'large' && <span style={S.featBadge}>featured</span>}
              </div>
              <div style={{ fontSize: 12, color: '#5a5a7a', marginBottom: 6 }}>
                {p.year} · {p.tags.join(', ')}
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {p.video && <span style={S.badge}>video</span>}
                {p.gallery.length > 0 && <span style={S.badge}>{p.gallery.length} imgs</span>}
                {p.github && <span style={S.badge}>github</span>}
              </div>
            </div>
            {/* Gallery preview strip */}
            {p.gallery.length > 0 && (
              <div style={{ display: 'flex', gap: 4, flexShrink: 0 }}>
                {p.gallery.slice(0, 3).map((u, j) => (
                  <img
                    key={j}
                    src={u}
                    alt=""
                    style={{ width: 44, height: 44, objectFit: 'cover', borderRadius: 6, border: '1px solid rgba(255,255,255,.08)', cursor: 'zoom-in' }}
                    onClick={e => { e.stopPropagation(); setLightbox(u); }}
                    onError={e => (e.currentTarget.style.display = 'none')}
                  />
                ))}
                {p.gallery.length > 3 && <div style={{ width: 44, height: 44, borderRadius: 6, background: 'rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#5a5a7a' }}>+{p.gallery.length - 3}</div>}
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flexShrink: 0 }}>
              <button style={S.iconBtn} onClick={() => moveUp(i)} title="Move up">↑</button>
              <button style={S.iconBtn} onClick={() => moveDown(i)} title="Move down">↓</button>
            </div>
            <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
              <button style={S.btnGhost} onClick={() => openEdit(p)}>Edit</button>
              <button style={S.btnDanger} onClick={() => deleteProject(p.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div style={S.lightboxOv} onClick={() => setLightbox(null)}>
          <img src={lightbox} alt="" style={{ maxWidth: '90vw', maxHeight: '85vh', borderRadius: 12, objectFit: 'contain' }} />
        </div>
      )}
      {toast && <div style={S.toast}>{toast}</div>}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 7, marginBottom: 16 }}>
      <label style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: 11, color: '#5a5a7a', letterSpacing: '2px', textTransform: 'uppercase' }}>{label}</label>
      {children}
    </div>
  );
}

// ── STYLES ──
const S: Record<string, React.CSSProperties> = {
  page: { minHeight: '100vh', background: '#04040d', color: '#d4d4e8', fontFamily: "'Plus Jakarta Sans', sans-serif" },
  topbar: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', borderBottom: '1px solid rgba(255,255,255,.07)', background: 'rgba(4,4,13,.95)', position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(16px)' },
  topTitle: { fontSize: 16, fontWeight: 800, color: '#d4d4e8', letterSpacing: -0.5 },
  listWrap: { maxWidth: 900, margin: '0 auto', padding: '32px 24px', display: 'flex', flexDirection: 'column', gap: 12 },
  formWrap: { maxWidth: 1100, margin: '0 auto', padding: '32px 24px' },
  formGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 24 },
  formCol: { display: 'flex', flexDirection: 'column' },
  projRow: { display: 'flex', alignItems: 'center', gap: 16, background: 'rgba(10,10,24,.65)', border: '1px solid rgba(255,255,255,.07)', borderRadius: 12, padding: '14px 18px' },
  rowThumb: { width: 70, height: 50, objectFit: 'cover', borderRadius: 8, border: '1px solid rgba(255,255,255,.08)', flexShrink: 0, background: 'rgba(255,255,255,.04)' },
  inp: { background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, padding: '11px 14px', color: '#d4d4e8', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, outline: 'none', width: '100%' },
  tagWrap: { display: 'flex', flexWrap: 'wrap', gap: 6, padding: '8px 10px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.1)', borderRadius: 8, minHeight: 42, alignItems: 'center' },
  tagChip: { display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12, padding: '2px 10px', background: 'rgba(0,245,212,.12)', color: '#00f5d4', borderRadius: 999 },
  tagX: { background: 'none', border: 'none', cursor: 'pointer', fontSize: 15, color: 'inherit', padding: 0, lineHeight: 1 },
  btnPrimary: { background: 'linear-gradient(135deg, #00f5d4, #7b2fff)', color: '#04040d', border: 'none', borderRadius: 8, padding: '10px 22px', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 800, fontSize: 13, cursor: 'pointer' },
  btnGhost: { background: 'none', border: '1px solid rgba(255,255,255,.12)', borderRadius: 8, padding: '9px 18px', color: '#d4d4e8', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, cursor: 'pointer' },
  btnDanger: { background: 'none', border: '1px solid rgba(255,80,80,.3)', borderRadius: 8, padding: '9px 18px', color: '#ff6b6b', fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, cursor: 'pointer' },
  iconBtn: { background: 'none', border: '1px solid rgba(255,255,255,.08)', borderRadius: 6, padding: '3px 8px', color: '#5a5a7a', cursor: 'pointer', fontSize: 13 },
  featBadge: { marginLeft: 8, fontSize: 10, padding: '2px 8px', background: 'rgba(0,245,212,.12)', color: '#00f5d4', borderRadius: 999 },
  badge: { fontSize: 11, padding: '2px 8px', background: 'rgba(255,255,255,.06)', color: '#5a5a7a', borderRadius: 999 },
  muted: { color: '#5a5a7a', fontSize: 14, textAlign: 'center', padding: '3rem 0' },
  err: { fontSize: 12, color: '#ff6b6b', marginBottom: 10 },
  toast: { position: 'fixed', bottom: 24, right: 24, background: '#00ff88', color: '#001a0a', padding: '13px 22px', borderRadius: 8, fontWeight: 800, fontSize: 13, fontFamily: "'Plus Jakarta Sans', sans-serif", zIndex: 9999 },
  lightboxOv: { position: 'fixed', inset: 0, background: 'rgba(0,0,0,.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999, cursor: 'zoom-out' },
  loginWrap: { minHeight: '100vh', background: '#04040d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Plus Jakarta Sans', sans-serif" },
  loginBox: { background: 'rgba(10,10,24,.9)', border: '1px solid rgba(0,245,212,.15)', borderRadius: 18, padding: 40, width: '100%', maxWidth: 360, textAlign: 'center' },
  loginLogo: { fontSize: 28, fontWeight: 800, color: '#d4d4e8', marginBottom: 20, letterSpacing: -1 },
  loginTitle: { fontSize: 18, fontWeight: 800, marginBottom: 6, color: '#d4d4e8' },
  loginSub: { fontSize: 13, color: '#5a5a7a', marginBottom: 24 },
};