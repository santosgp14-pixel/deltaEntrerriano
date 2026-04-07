import { useState, useEffect, useRef } from "react";
import { useRegisterSW } from 'virtual:pwa-register/react';
import { db, messaging } from './firebase';
import { collection, addDoc, onSnapshot, serverTimestamp, doc, updateDoc, setDoc } from 'firebase/firestore';
import { getToken, onMessage } from 'firebase/messaging';
import html2canvas from 'html2canvas';

// ─── LOGO ─────────────────────────────────────────────────────────────────────
const LOGO_URL = import.meta.env.BASE_URL + 'logo.png';
const Shield = ({ size = 48, className = "", style = {} }) => (
  <img
    src={LOGO_URL}
    width={size}
    height={size}
    className={className}
    alt="Delta Entrerriano"
    style={{ objectFit: 'contain', display: 'block', ...style }}
  />
);

// ─── DATOS MOCK ──────────────────────────────────────────────────────────────
const PLAYERS = [];
const MATCHES = [];
const POSTS = [];

const POSITIONS = ["Portero", "Defensa", "Mediocampista", "Delantero"];

// Fútbol 9 — formaciones de 9 jugadores (1 POR + 8 de campo)
const FORMATIONS_DEF = {
  '3-1-3-1': [{ count: 1, label: 'DEL', y: 10 }, { count: 3, label: 'MCO', y: 28 }, { count: 1, label: 'MDF', y: 48 }, { count: 3, label: 'DEF', y: 67 }, { count: 1, label: 'POR', y: 87 }],
  '3-3-2':   [{ count: 2, label: 'DEL', y: 13 }, { count: 3, label: 'MED', y: 40 }, { count: 3, label: 'DEF', y: 65 }, { count: 1, label: 'POR', y: 87 }],
  '3-2-3':   [{ count: 3, label: 'DEL', y: 13 }, { count: 2, label: 'MED', y: 42 }, { count: 3, label: 'DEF', y: 65 }, { count: 1, label: 'POR', y: 87 }],
  '1-3-3-1': [{ count: 1, label: 'DEL', y: 10 }, { count: 3, label: 'MCO', y: 30 }, { count: 3, label: 'MDF', y: 52 }, { count: 1, label: 'LIB', y: 70 }, { count: 1, label: 'POR', y: 87 }],
  '2-3-3':   [{ count: 3, label: 'DEL', y: 13 }, { count: 3, label: 'MED', y: 40 }, { count: 2, label: 'DEF', y: 65 }, { count: 1, label: 'POR', y: 87 }],
  '2-4-2':   [{ count: 2, label: 'DEL', y: 13 }, { count: 4, label: 'MED', y: 40 }, { count: 2, label: 'DEF', y: 67 }, { count: 1, label: 'POR', y: 87 }],
  '3-4-1':   [{ count: 1, label: 'DEL', y: 13 }, { count: 4, label: 'MED', y: 40 }, { count: 3, label: 'DEF', y: 65 }, { count: 1, label: 'POR', y: 87 }],
  '4-3-1':   [{ count: 1, label: 'DEL', y: 13 }, { count: 3, label: 'MED', y: 40 }, { count: 4, label: 'DEF', y: 65 }, { count: 1, label: 'POR', y: 87 }],
  '4-2-2':   [{ count: 2, label: 'DEL', y: 13 }, { count: 2, label: 'MED', y: 42 }, { count: 4, label: 'DEF', y: 65 }, { count: 1, label: 'POR', y: 87 }],
};

function buildSlots(formLines) {
  if (!formLines) return [];
  const slots = [];
  formLines.forEach((line, lineIdx) => {
    for (let i = 0; i < line.count; i++) {
      const x = line.count === 1 ? 50 : 10 + (80 / (line.count - 1)) * i;
      slots.push({ id: `${lineIdx}-${i}`, label: line.label, x, y: line.y });
    }
  });
  return slots;
}

// ─── TEXTOS AUTOMÁTICOS DE PARTIDO ─────────────────────────────────────────────
const RESULT_TEXTS = {
  win: [
    { title: '¡De una, chabones! 🏆', content: 'Como siempre, los pibitos del Delta salieron a romperla y la rompieron. El rival llegó confiado y se fue con las manos en los bolsillos. ¡Eso es Delta, belén!' },
    { title: '¡Los rompimooooos! 🔥', content: 'Partido terminado, cuentas claras. Los de Delta no se anduvieron con chiquitas y le dieron un baño como la gente. ¡A festejar que se puede!' },
    { title: '¿Quién dijo miedo? 🐮‍💨', content: 'Los carpinchos salieron a la cancha con hambre y se comieron todo. El rival no sabía dónde meterse. ¡Otra vez a cobrar, muchachos!' },
    { title: '¡Victoria del alma! ★', content: 'No hubo caso, cuando Delta mete primera no para más nadie. El equipo estuvo filoso de arriba abajo y el resultado lo dice todo. ¡Arriba Delta!' },
    { title: '¡Cagándolos a cascotazos! 🧠', content: 'Le mostramos cómo se juega al fútbol. Lo que fue el partido no tiene discusión: Delta manda y punto. ¡La puta madre qué equipazo!' },
  ],
  loss: [
    { title: 'Nos rompieron bien el culo 😬', content: 'Qué queremos que te digamos... nos dieron una paliza de las bravas. Pero cabeza arriba, que el que no pierde nunca es porque no juega. La revancha viene.' },
    { title: 'Fuimos, la vimos, nos la dieron 💨', content: 'Hoy no fue el día. El rival nos encontró mál parados y nos cobró carilla. A laburar esta semana que hay mucho por mejorar. Cábeza alta.' },
    { title: 'Nos cagaron a palos ☹️', content: 'Bárbaro, perdíamos. Nos pasó el cambión por encima y no pudimos hacer nada. Ahora a masticar la bronca y volver más fuertes. ¡Dale Delta!' },
    { title: 'Una noche para olvidar... 🛌', content: 'No nos salió una. Fueron más, nos presionaron mejor y nos metieron los goles que quisieron. La seguimos, pero hoy nos ganaron bien ganado.' },
    { title: 'Nos pintaron la cara 😩', content: 'El rival vino, vio y conquistó. Nosotros pusimos los jugadores, ellos pusieron el fútbol. Hay que mirarse al espejo y salir a revertir esto en la próxima.' },
  ],
  draw: [
    { title: 'Un punto y a casa 🤝', content: 'No fue la victoria que queríamos pero tampoco nos fueron a ganar. Punto de visitante, punto igual. A seguir sumando.' },
    { title: 'Ni pa un lado ni pa el otro 🤷', content: 'Empate en un partido trabado donde los dos equipos se pelearon cada pelota. Por momentos bien, por momentos no tanto. A mejorar.' },
    { title: 'El empate sabor a poco 😐', content: '\u00c9ramos superiores pero no alcanzó. Nos faltó esa chispita para definirlo. El punto suma igual, pero las ganas están de sacar los tres.' },
    { title: 'Plata para los dos 🤜🤛', content: 'Partido parejo de principio a fin. Se repartieron los puntos y cada uno a su casa. Vendrán mejores resultados, hay equipo.' },
    { title: 'Ni modo, chicos 🙄', content: 'Dimos todo pero el gol no quería entrar. Empate y a preparar el próximo. El equipo tiene pasta para ganar, hoy no se dio.' },
  ],
};

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const autoPostForResult = (matchData) => {
  const [a, b] = (matchData.result ?? '0-0').split('-').map(Number);
  const win  = matchData.home ? a > b : b > a;
  const draw = a === b;
  const key  = draw ? 'draw' : win ? 'win' : 'loss';
  const { title, content } = pickRandom(RESULT_TEXTS[key]);
  return {
    title: `${title} (${a}-${b} vs ${matchData.rival})`,
    content,
    type: 'match',
    date: new Date().toISOString().split('T')[0],
  };
};
const STATUS_LABELS = { active: "Activo", injured: "Lesionado", suspended: "Suspendido" };
const STATUS_COLORS = { active: "#22c55e", injured: "#f97316", suspended: "#ef4444" };

// ─── ESTILOS GLOBALES ────────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Barlow+Condensed:wght@400;500;600;700;800;900&display=swap');
  
  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  body {
    background: #0a1a12;
    color: #e8f0eb;
    font-family: 'Outfit', sans-serif;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }
  
  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: #0a1a12; }
  ::-webkit-scrollbar-thumb { background: #1e3d2a; border-radius: 2px; }

  .app-shell {
    display: flex;
    min-height: 100vh;
  }

  /* ── SIDEBAR ── */
  .sidebar {
    width: 72px;
    background: #0d1f16;
    border-right: 1px solid rgba(201,168,76,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;
    position: fixed;
    top: 0; left: 0; bottom: 0;
    z-index: 100;
    gap: 0;
  }
  
  .sidebar-logo {
    margin-bottom: 32px;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .sidebar-logo:hover { transform: scale(1.05); }

  .nav-item {
    width: 44px; height: 44px;
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    color: #4a7a5a;
    transition: all 0.2s;
    margin-bottom: 4px;
    border: 1px solid transparent;
    position: relative;
  }
  .nav-item:hover { background: rgba(201,168,76,0.08); color: #c9a84c; }
  .nav-item.active {
    background: rgba(201,168,76,0.12);
    color: #c9a84c;
    border-color: rgba(201,168,76,0.2);
  }
  .nav-item svg { width: 20px; height: 20px; stroke: currentColor; fill: none; stroke-width: 1.8; }
  .nav-label { display: none; }
  .btn svg { width: 16px; height: 16px; stroke: currentColor; fill: none; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; vertical-align: middle; flex-shrink: 0; }

  /* ── MAIN CONTENT ── */
  .main {
    margin-left: 72px;
    flex: 1;
    padding: 32px;
    max-width: calc(100vw - 72px);
  }

  /* ── PAGE HEADER ── */
  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  .page-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 32px;
    font-weight: 800;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #e8f0eb;
  }
  .page-subtitle {
    font-size: 14px;
    color: #4a7a5a;
    margin-top: 2px;
    font-weight: 400;
  }

  /* ── CARDS ── */
  .card {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 24px;
    transition: border-color 0.2s;
  }
  .card:hover { border-color: rgba(201,168,76,0.15); }

  .card-sm {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 20px;
  }

  /* ── STAT CARD ── */
  .stat-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }
  .stat-card {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 20px 24px;
    position: relative;
    overflow: hidden;
    transition: all 0.2s;
  }
  .stat-card:hover { border-color: rgba(201,168,76,0.2); transform: translateY(-1px); }
  .stat-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #c9a84c 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .stat-card:hover::before { opacity: 1; }
  .stat-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #4a7a5a; font-weight: 600; margin-bottom: 8px; }
  .stat-value { font-family: 'Barlow Condensed', sans-serif; font-size: 36px; font-weight: 800; color: #e8f0eb; line-height: 1; }
  .stat-sub { font-size: 12px; color: #4a7a5a; margin-top: 6px; }
  .stat-accent { color: #c9a84c; }

  /* ── BUTTONS ── */
  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.15s;
    border: none;
    font-family: 'Outfit', sans-serif;
  }
  .btn:active { transform: scale(0.97); }
  .btn-primary {
    background: #c9a84c;
    color: #0a1a12;
  }
  .btn-primary:hover { background: #d9b85c; }
  .btn-ghost {
    background: transparent;
    color: #a0c4b0;
    border: 1px solid rgba(255,255,255,0.1);
  }
  .btn-ghost:hover { background: rgba(255,255,255,0.05); border-color: rgba(255,255,255,0.15); }
  .btn-danger {
    background: rgba(239,68,68,0.1);
    color: #f87171;
    border: 1px solid rgba(239,68,68,0.2);
  }
  .btn-sm { padding: 6px 14px; font-size: 12px; border-radius: 8px; }

  /* ── BADGE ── */
  .badge {
    display: inline-flex; align-items: center;
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.03em;
  }

  /* ── PLAYER GRID ── */
  .players-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
  .player-card {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
  }
  .player-card:hover { border-color: rgba(201,168,76,0.25); transform: translateY(-2px); }
  .player-number {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 52px;
    font-weight: 900;
    color: rgba(201,168,76,0.1);
    position: absolute;
    top: 8px; right: 16px;
    line-height: 1;
    pointer-events: none;
  }
  .player-avatar {
    width: 48px; height: 48px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1a3a2a, #2a5a3a);
    display: flex; align-items: center; justify-content: center;
    font-size: 16px;
    font-weight: 700;
    color: #c9a84c;
    margin-bottom: 12px;
    border: 2px solid rgba(201,168,76,0.2);
  }
  .player-name { font-size: 15px; font-weight: 600; color: #e8f0eb; margin-bottom: 4px; }
  .player-pos { font-size: 12px; color: #4a7a5a; margin-bottom: 12px; }
  .player-stats-row { display: flex; gap: 16px; }
  .player-stat-mini { text-align: center; }
  .player-stat-mini span:first-child { display: block; font-size: 16px; font-weight: 700; color: #e8f0eb; font-family: 'Barlow Condensed', sans-serif; }
  .player-stat-mini span:last-child { display: block; font-size: 10px; color: #4a7a5a; text-transform: uppercase; letter-spacing: 0.05em; }

  /* ── MATCHES ── */
  .match-row {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 20px;
    border-radius: 14px;
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 10px;
    transition: all 0.2s;
    cursor: pointer;
  }
  .match-row:hover { border-color: rgba(201,168,76,0.2); }
  .match-rival { font-size: 15px; font-weight: 600; color: #e8f0eb; }
  .match-meta { font-size: 12px; color: #4a7a5a; margin-top: 3px; }
  .match-score {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 24px; font-weight: 800;
    color: #c9a84c;
    text-align: center;
    min-width: 60px;
  }
  .match-upcoming { font-size: 13px; font-weight: 600; color: #4a7a5a; text-align: center; }

  /* ── RANKING TABLE ── */
  .rank-table { width: 100%; border-collapse: collapse; }
  .rank-table th {
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;
    color: #4a7a5a; font-weight: 600;
    padding: 0 12px 12px;
    text-align: left;
    border-bottom: 1px solid rgba(255,255,255,0.06);
  }
  .rank-table td { padding: 12px; border-bottom: 1px solid rgba(255,255,255,0.04); }
  .rank-table tr:hover td { background: rgba(201,168,76,0.04); }
  .rank-pos {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 18px; font-weight: 800;
    color: #c9a84c; text-align: center;
  }
  .rank-pos.top3 { color: #c9a84c; }

  /* ── FEED ── */
  .post-card {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 16px;
    transition: border-color 0.2s;
  }
  .post-card:hover { border-color: rgba(201,168,76,0.15); }
  .post-type-badge {
    display: inline-block;
    padding: 3px 10px; border-radius: 20px;
    font-size: 10px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.08em;
    margin-bottom: 12px;
  }
  .post-title { font-size: 18px; font-weight: 700; color: #e8f0eb; margin-bottom: 8px; }
  .post-body { font-size: 14px; color: #7aaa8a; line-height: 1.6; }
  .post-date { font-size: 12px; color: #3a6a4a; margin-top: 12px; }

  /* ── ATTENDANCE / CONVOCATORIA ── */
  .attendance-section { max-width: 680px; }
  .attend-btn {
    display: flex; align-items: center; gap: 10px;
    padding: 14px 20px;
    border-radius: 14px;
    font-size: 14px; font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
    border: 1.5px solid transparent;
    flex: 1; justify-content: center;
    font-family: 'Outfit', sans-serif;
  }
  .attend-btn.yes { background: rgba(34,197,94,0.1); color: #4ade80; border-color: rgba(34,197,94,0.2); }
  .attend-btn.yes:hover, .attend-btn.yes.sel { background: rgba(34,197,94,0.2); border-color: #4ade80; }
  .attend-btn.maybe { background: rgba(234,179,8,0.1); color: #facc15; border-color: rgba(234,179,8,0.2); }
  .attend-btn.maybe:hover, .attend-btn.maybe.sel { background: rgba(234,179,8,0.2); border-color: #facc15; }
  .attend-btn.no { background: rgba(239,68,68,0.1); color: #f87171; border-color: rgba(239,68,68,0.2); }
  .attend-btn.no:hover, .attend-btn.no.sel { background: rgba(239,68,68,0.2); border-color: #f87171; }
  .attend-feedback {
    display: flex; align-items: center; gap: 10px;
    padding: 14px 18px;
    border-radius: 14px;
    background: rgba(34,197,94,0.08);
    border: 1px solid rgba(34,197,94,0.2);
    color: #4ade80;
    font-size: 14px; font-weight: 600;
    margin-top: 16px;
    animation: fadeSlide 0.3s ease;
  }
  @keyframes fadeSlide {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── CONVOCATORIA CARD (export) ── */
  .squad-card-wrap {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 20px;
    padding: 24px;
    margin-top: 24px;
  }
  .squad-card {
    width: 420px;
    background: linear-gradient(160deg, #0f2a1c 0%, #071510 60%, #0d1f10 100%);
    border-radius: 20px;
    padding: 36px 32px;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(201,168,76,0.2);
  }
  .squad-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse at 50% 0%, rgba(201,168,76,0.06) 0%, transparent 60%);
    pointer-events: none;
  }
  .squad-card-line {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent);
    margin: 20px 0;
  }
  .squad-name-item {
    display: flex; align-items: center; gap: 12px;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }
  .squad-name-num {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700;
    color: #c9a84c; min-width: 28px; text-align: right;
  }
  .squad-name-text { font-size: 13px; font-weight: 500; color: #e8f0eb; letter-spacing: 0.03em; }

  /* ── FORMS ── */
  .form-group { margin-bottom: 20px; }
  .form-label { font-size: 12px; font-weight: 600; color: #4a7a5a; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; display: block; }
  .form-input {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 11px 14px;
    color: #e8f0eb;
    font-size: 14px;
    font-family: 'Outfit', sans-serif;
    transition: border-color 0.2s;
    outline: none;
  }
  .form-input:focus { border-color: rgba(201,168,76,0.4); }
  .form-select {
    width: 100%;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 10px;
    padding: 11px 14px;
    color: #e8f0eb;
    font-size: 14px;
    font-family: 'Outfit', sans-serif;
    outline: none;
    cursor: pointer;
  }
  .form-select option { background: #0d1f16; }

  /* ── MODAL ── */
  .modal-overlay {
    position: fixed; inset: 0;
    background: rgba(0,0,0,0.7);
    display: flex; align-items: center; justify-content: center;
    z-index: 200;
    backdrop-filter: blur(4px);
    padding: 20px;
  }
  .modal {
    background: #0d1f16;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 24px;
    padding: 32px;
    width: 100%; max-width: 480px;
    animation: modalIn 0.25s ease;
    max-height: 90vh;
    overflow-y: auto;
  }
  @keyframes modalIn {
    from { opacity: 0; transform: scale(0.95) translateY(10px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  .modal-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 24px; font-weight: 800; text-transform: uppercase;
    letter-spacing: 0.04em; color: #e8f0eb;
    margin-bottom: 24px;
  }

  /* ── PLAYER DETAIL ── */
  .player-detail-header {
    display: flex; align-items: flex-start; gap: 24px;
    margin-bottom: 32px;
  }
  .player-detail-avatar {
    width: 80px; height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1a3a2a, #2a5a3a);
    display: flex; align-items: center; justify-content: center;
    font-size: 24px; font-weight: 700; color: #c9a84c;
    border: 2px solid rgba(201,168,76,0.3);
    flex-shrink: 0;
  }
  .player-detail-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 36px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.02em;
    color: #e8f0eb; line-height: 1;
  }
  .player-stat-box {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    background: rgba(201,168,76,0.05);
    border: 1px solid rgba(201,168,76,0.1);
    border-radius: 14px;
    padding: 20px;
    flex: 1;
  }
  .player-stat-box-val {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 42px; font-weight: 900; color: #c9a84c; line-height: 1;
  }
  .player-stat-box-label {
    font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;
    color: #4a7a5a; margin-top: 4px; font-weight: 600;
  }

  /* ── SECTION TITLE ── */
  .section-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.1em;
    color: #4a7a5a; margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .section-title::after {
    content: '';
    flex: 1; height: 1px;
    background: rgba(255,255,255,0.06);
  }

  /* ── EMPTY STATE ── */
  .empty-state {
    text-align: center; padding: 60px 20px;
    color: #3a6a4a;
  }
  .empty-state-icon { font-size: 48px; margin-bottom: 12px; opacity: 0.4; }
  .empty-state-text { font-size: 15px; }

  /* ── TOAST ── */
  .toast {
    position: fixed; bottom: 32px; right: 32px;
    background: #0d1f16;
    border: 1px solid rgba(201,168,76,0.3);
    border-radius: 14px;
    padding: 14px 20px;
    display: flex; align-items: center; gap: 10px;
    font-size: 14px; font-weight: 600; color: #e8f0eb;
    z-index: 300;
    animation: toastIn 0.3s ease;
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
  }
  @keyframes toastIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ── TABS ── */
  .tabs { display: flex; gap: 4px; background: rgba(0,0,0,0.2); border-radius: 12px; padding: 4px; margin-bottom: 24px; }
  .tab {
    padding: 8px 18px; border-radius: 8px;
    font-size: 13px; font-weight: 600;
    cursor: pointer; transition: all 0.2s;
    color: #4a7a5a; border: none; background: transparent;
    font-family: 'Outfit', sans-serif;
  }
  .tab.active { background: #0d1f16; color: #e8f0eb; }
  .tab:hover:not(.active) { color: #a0c4b0; }

  /* ── RESPONSIVE ── */
  @media (max-width: 768px) {
    /* Sidebar pasa a bottom nav */
    .sidebar {
      width: 100%;
      height: calc(60px + env(safe-area-inset-bottom));
      top: auto;
      bottom: 0;
      left: 0;
      right: 0;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      padding: 0 8px;
      padding-bottom: env(safe-area-inset-bottom);
      border-right: none;
      border-top: 1px solid rgba(201,168,76,0.12);
      z-index: 100;
    }
    .sidebar-logo { display: none; }
    .nav-item {
      width: 48px; height: 48px;
      flex-direction: column;
      gap: 2px;
      margin-bottom: 0;
      border-radius: 10px;
    }
    .nav-item svg { width: 22px; height: 22px; }
    .nav-label {
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.03em;
      color: inherit;
      text-transform: uppercase;
    }

    /* Main content */
    .main {
      margin-left: 0;
      margin-bottom: calc(60px + env(safe-area-inset-bottom));
      padding: 16px;
      max-width: 100vw;
    }

    /* Grids */
    .stat-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 20px; }
    .stat-card { padding: 14px 16px; border-radius: 14px; }
    .stat-value { font-size: 28px; }

    /* Dashboard 2-col → 1-col */
    .dashboard-two-col { grid-template-columns: 1fr !important; }

    /* Players */
    .players-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
    .player-card { padding: 14px; border-radius: 16px; }
    .player-number { font-size: 38px; }

    /* Page header */
    .page-header { margin-bottom: 20px; }
    .page-title { font-size: 24px; }

    /* Tabs overflow scroll */
    .tabs { overflow-x: auto; flex-wrap: nowrap; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
    .tabs::-webkit-scrollbar { display: none; }
    .tab { white-space: nowrap; padding: 8px 14px; }

    /* Match rows */
    .match-row { padding: 12px 14px; border-radius: 12px; }
    .match-rival { font-size: 14px; }

    /* Modal */
    .modal { border-radius: 20px 20px 0 0; position: fixed; bottom: 0; left: 0; right: 0; max-width: 100%; max-height: 85vh; }
    .modal-overlay { align-items: flex-end; padding: 0; }

    /* Convocatoria 2-col → 1-col */
    .convocatoria-two-col { grid-template-columns: 1fr !important; }
    .squad-card { width: 100%; }

    /* Stats 2-col → 1-col */
    .stats-two-col { grid-template-columns: 1fr !important; }

    /* Toast */
    .toast { bottom: calc(72px + env(safe-area-inset-bottom)); right: 12px; left: 12px; }

    /* Install banner */
    .install-banner { bottom: calc(60px + env(safe-area-inset-bottom)); }

    /* Rank table */
    .rank-table th, .rank-table td { padding: 8px 6px; font-size: 11px; }

    /* Card sm */
    .card-sm { padding: 12px 14px; border-radius: 12px; }

    /* Buttons en page header */
    .btn-header-only-icon .btn-label { display: none; }
  }

  /* ── LINEUP FIELD ── */
  .lineup-wrap { display: grid; grid-template-columns: 1fr 200px; gap: 20px; align-items: start; }
  .field-container {
    position: relative; width: 100%; height: 0; padding-bottom: 155%;
    background: linear-gradient(180deg, #1d6e32 0%, #216a30 16.7%, #1d6e32 33.3%, #216a30 50%, #1d6e32 66.7%, #216a30 83.3%, #1d6e32 100%);
    border-radius: 12px; overflow: hidden; border: 2px solid rgba(255,255,255,0.15);
  }
  .field-slot {
    position: absolute; transform: translate(-50%, -50%);
    display: flex; flex-direction: column; align-items: center; cursor: pointer; z-index: 10;
  }
  .field-slot-chip {
    width: 38px; height: 38px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; transition: transform 0.15s; box-shadow: 0 2px 8px rgba(0,0,0,0.6);
  }
  .field-slot-chip.empty {
    background: rgba(255,255,255,0.12); border: 2px dashed rgba(255,255,255,0.45);
    color: rgba(255,255,255,0.55); font-size: 16px;
  }
  .field-slot-chip.filled {
    background: linear-gradient(135deg, #c9a84c, #a07830); border: 2px solid #e8c060; color: #0a1a12;
  }
  .field-slot:hover .field-slot-chip { transform: scale(1.12); }
  .field-slot-name {
    font-size: 9px; font-weight: 700; color: #fff; text-shadow: 0 1px 3px rgba(0,0,0,0.9);
    margin-top: 3px; max-width: 52px; text-align: center;
    overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
  }
  @media (max-width: 768px) {
    .lineup-wrap { grid-template-columns: 1fr !important; }
    .field-slot-chip { width: 30px; height: 30px; font-size: 10px; }
    .field-slot-chip.empty { font-size: 14px; }
    .field-slot-name { font-size: 8px; max-width: 44px; }
  }

  /* ── FCM SIDEBAR BELL ── */
  .sidebar-bottom { margin-top: auto; }
  @media (max-width: 768px) { .sidebar-bottom { margin-top: 0; } }
`;

// ─── ICONS ───────────────────────────────────────────────────────────────────
const Icon = ({ name }) => {
  const paths = {
    home: <><path d="M3 12L12 3l9 9"/><path d="M5 10v10a1 1 0 001 1h4v-5h4v5h4a1 1 0 001-1V10"/></>,
    users: <><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    chart: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    feed: <><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    x: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    download: <><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    arrow: <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>,
    trophy: <><path d="M6 9H4a2 2 0 000 4h2"/><path d="M18 9h2a2 2 0 010 4h-2"/><path d="M6 9v6a6 6 0 0012 0V9"/><path d="M12 21v-3"/><path d="M9 21h6"/></>,
    edit: <><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    trash: <><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/></>,
    user: <><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    shirt: <><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/></>,
    news: <><path d="M4 22h16a2 2 0 002-2V4a2 2 0 00-2-2H8a2 2 0 00-2 2v16a4 4 0 01-4-4V6a2 2 0 012-2"/><path d="M10 7h6"/><path d="M10 11h6"/><path d="M10 15h4"/></>,
    ball: <><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/><path d="M2 12h20"/></>,
    clipboard: <><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></>,
    whistle: <><path d="M6 5a7 7 0 0114 0"/><path d="M3 10h18"/><path d="M6 5v5l-3 6h18l-3-6V5"/><line x1="12" y1="10" x2="12" y2="19"/></>,
    list: <><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></>,
    flag: <><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></>,
    squad: <><circle cx="9" cy="7" r="3"/><circle cx="18" cy="7" r="3"/><path d="M3 21v-1a6 6 0 016-6h3"/><path d="M12 21v-1a5 5 0 015-5h1a5 5 0 015 5v1"/></>,
    playercheck: <><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></>,
    target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
    jersey: <><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46"/><path d="M9 2a3 3 0 006 0"/><path d="M3.62 3.46L2 10h5v11a1 1 0 001 1h8a1 1 0 001-1V10h5L20.38 3.46"/></>,
    formation: <><rect x="4" y="3" width="16" height="18" rx="1"/><circle cx="12" cy="18" r="1" fill="currentColor" stroke="none"/><circle cx="7" cy="13" r="1" fill="currentColor" stroke="none"/><circle cx="17" cy="13" r="1" fill="currentColor" stroke="none"/><circle cx="7" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="17" cy="8" r="1" fill="currentColor" stroke="none"/><circle cx="12" cy="5" r="1" fill="currentColor" stroke="none"/></>,
    soccerball: <><circle cx="12" cy="12" r="10"/><path d="M12 2l3.09 9.26L22 12l-6.91 5.74L17 22l-5-3.82L7 22l1.91-4.26L2 12l6.91-.74L12 2z"/></>,
    lineup: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/><circle cx="6" cy="6" r="1" fill="currentColor" stroke="none"/></>,
    checkbox: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></>,
    usercheck: <><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></>,
    checklist: <><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></>,
    taskdone: <><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></>,
    convocatoria: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><polyline points="9 16 11 18 15 14"/></>,
    bell: <><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></>,
    belloff: <><path d="M13.73 21a2 2 0 01-3.46 0"/><path d="M18.63 13A17.89 17.89 0 0118 8"/><path d="M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"/><path d="M18 8a6 6 0 00-9.33-5"/><line x1="1" y1="1" x2="23" y2="23"/></>,

  };
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {paths[name]}
    </svg>
  );
};

// ─── FCM ─────────────────────────────────────────────────────────────────────
// ↓ Obtené tu VAPID key en: Firebase Console → Project Settings → Cloud Messaging → Web Push certificates
const VAPID_KEY = 'BOlW76xy4PbKcgmY0jjb7UjCtmk1qy7JLPngc6_AXFARe4CzlHfb5FTBaZBhEHaI-kd6CkFiufbpZGjqyIYhMmo';

function useFCM(setToastMsg) {
  const [notifStatus, setNotifStatus] = useState(() => {
    if (typeof Notification === 'undefined') return 'unsupported';
    return Notification.permission;
  });

  useEffect(() => {
    if (!messaging || notifStatus !== 'granted') return;
    const unsub = onMessage(messaging, (payload) => {
      const n = payload.notification || {};
      setToastMsg(n.title || n.body || '🔔 Nueva notificación');
    });
    return unsub;
  }, [notifStatus]);

  const subscribe = async () => {
    if (notifStatus === 'denied') {
      alert('Las notificaciones están bloqueadas. Habilitálas desde la configuración del navegador.');
      return;
    }
    if (notifStatus === 'granted') return;
    try {
      const permission = await Notification.requestPermission();
      setNotifStatus(permission);
      if (permission !== 'granted') return;
      if (!messaging) return;
      if (VAPID_KEY === 'YOUR_VAPID_KEY_HERE') {
        console.warn('[FCM] Agregá tu VAPID key en App.jsx para activar push notifications.');
        return;
      }
      const swReg = await navigator.serviceWorker.register(
        import.meta.env.BASE_URL + 'firebase-messaging-sw.js',
        { scope: import.meta.env.BASE_URL }
      );
      const token = await getToken(messaging, { vapidKey: VAPID_KEY, serviceWorkerRegistration: swReg });
      if (token) {
        await setDoc(doc(db, 'fcm_tokens', token), {
          token,
          createdAt: serverTimestamp(),
          ua: navigator.userAgent.substring(0, 150),
        });
      }
    } catch (err) {
      console.error('[FCM] Error:', err);
    }
  };

  return { notifStatus, subscribe };
}

function NotifButton({ status, onSubscribe }) {
  if (status === 'unsupported') return null;
  const granted = status === 'granted';
  return (
    <div
      className={`nav-item ${granted ? 'active' : ''}`}
      onClick={!granted ? onSubscribe : undefined}
      title={granted ? 'Notificaciones activas' : 'Activar notificaciones'}
      style={{ cursor: granted ? 'default' : 'pointer' }}
    >
      <Icon name={granted ? 'bell' : 'belloff'} />
      <span className="nav-label">Notif.</span>
    </div>
  );
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const initials = (name) => (name || '?').split(' ').slice(0,2).map(w => w[0]).join('');
const formatDate = (d) => new Date(d + 'T00:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' });
const computeStats = (matches) => {
  const stats = {};
  for (const m of matches) {
    if (m.status !== 'played') continue;
    for (const pid of (m.participants ?? [])) {
      if (!stats[pid]) stats[pid] = { goals: 0, assists: 0, matches: 0 };
      stats[pid].matches++;
    }
    for (const [pid, count] of Object.entries(m.scorers ?? {})) {
      if (!stats[pid]) stats[pid] = { goals: 0, assists: 0, matches: 0 };
      stats[pid].goals += count;
    }
    for (const [pid, count] of Object.entries(m.assistants ?? {})) {
      if (!stats[pid]) stats[pid] = { goals: 0, assists: 0, matches: 0 };
      stats[pid].assists += count;
    }
  }
  return stats;
};

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Toast({ msg, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, []);
  return <div className="toast">🔥 {msg}</div>;
}

function PlayerModal({ player, onClose, stats, onUpdate }) {
  if (!player) return null;
  const st = stats ?? { goals: 0, assists: 0, matches: 0 };
  const [nickname, setNickname] = useState(player.nickname || '');
  const [saved, setSaved] = useState(false);
  const handleSaveNickname = () => {
    if (onUpdate) onUpdate(player.id, { nickname: nickname.trim() });
    setSaved(true);
    setTimeout(() => setSaved(false), 1500);
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <span className="modal-title">Perfil</span>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ padding: '6px 10px' }}>
            <Icon name="x" />
          </button>
        </div>
        <div className="player-detail-header">
          <div className="player-detail-avatar">{initials(player.name)}</div>
          <div>
            <div className="player-detail-name">{player.name}</div>
            <div style={{ fontSize: 14, color: '#7aaa8a', marginTop: 6 }}>{player.position}</div>
            <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
              <span style={{ fontSize: 13, color: '#c9a84c', background: 'rgba(201,168,76,0.1)', padding: '3px 10px', borderRadius: 20, fontWeight: 600 }}>
                #{player.number}
              </span>
              <span className="badge" style={{ background: `${STATUS_COLORS[player.status]}18`, color: STATUS_COLORS[player.status] }}>
                {STATUS_LABELS[player.status]}
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          {[
            { val: st.goals, label: 'Goles' },
            { val: st.assists, label: 'Asistencias' },
            { val: st.matches, label: 'Partidos' },
          ].map(s => (
            <div key={s.label} className="player-stat-box">
              <div className="player-stat-box-val">{s.val}</div>
              <div className="player-stat-box-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="form-group" style={{ marginTop: 20 }}>
          <label className="form-label">Apodo (alineación)</label>
          <div style={{ display: 'flex', gap: 8 }}>
            <input className="form-input" placeholder="Ej: Toro, Pelusa..." value={nickname}
              onChange={e => { setNickname(e.target.value); setSaved(false); }} />
            <button className="btn btn-primary" style={{ flexShrink: 0 }} onClick={handleSaveNickname}>
              {saved ? '✓' : 'Guardar'}
            </button>
          </div>
          <div style={{ fontSize: 11, color: '#4a7a5a', marginTop: 4 }}>Se usa en la alineación en lugar del nombre. Dejá vacío para usar el nombre.</div>
        </div>
      </div>
    </div>
  );
}

function AddPlayerModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ name: '', nickname: '', number: '', position: POSITIONS[0] });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handle = () => {
    if (!form.name || !form.number) return;
    onAdd({ ...form, id: Date.now(), status: 'active', goals: 0, assists: 0, matches: 0, number: parseInt(form.number) });
    onClose();
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <span className="modal-title">Nuevo Jugador</span>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ padding: '6px 10px' }}><Icon name="x" /></button>
        </div>
        <div className="form-group">
          <label className="form-label">Nombre completo</label>
          <input className="form-input" placeholder="Ej: Juan Pérez" value={form.name} onChange={e => upd('name', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Apodo <span style={{ color: '#4a7a5a', fontWeight: 400 }}>(opcional · se usa en la alineación)</span></label>
          <input className="form-input" placeholder="Ej: Toro, Pelusa..." value={form.nickname} onChange={e => upd('nickname', e.target.value)} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="form-group">
            <label className="form-label">Número</label>
            <input className="form-input" type="number" placeholder="10" value={form.number} onChange={e => upd('number', e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Posición</label>
            <select className="form-select" value={form.position} onChange={e => upd('position', e.target.value)}>
              {POSITIONS.map(p => <option key={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <button className="btn btn-ghost" style={{ flex: 1 }} onClick={onClose}><Icon name="x" /> Cancelar</button>
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={handle}><Icon name="shirt" /> Agregar Jugador</button>
        </div>
      </div>
    </div>
  );
}

function MatchModal({ onClose, onAdd, onSave, initial, players = [], initialStatus }) {
  const isEdit = !!initial;
  const parseGoals = (result) => {
    if (!result) return { goalsUs: '', goalsRival: '' };
    const [a, b] = result.split('-');
    return { goalsUs: a ?? '', goalsRival: b ?? '' };
  };
  const [form, setForm] = useState(() => isEdit
    ? { rival: initial.rival, date: initial.date, time: initial.time ?? '16:00', venue: initial.venue ?? '', home: initial.home, status: initialStatus ?? initial.status, ...parseGoals(initial.result), scorers: initial.scorers ?? {}, assistants: initial.assistants ?? {}, participants: initial.participants ?? [] }
    : { rival: '', date: '', time: '16:00', venue: '', home: true, status: initialStatus ?? 'upcoming', goalsUs: '', goalsRival: '', scorers: {}, assistants: {}, participants: [] }
  );
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handle = () => {
    if (!form.rival || !form.date) return;
    const isPlayed = form.status === 'played';
    if (isPlayed && (form.goalsUs === '' || form.goalsRival === '')) return;
    const result = isPlayed ? `${form.goalsUs}-${form.goalsRival}` : null;
    const data = { rival: form.rival, date: form.date, time: form.time, venue: form.venue, home: form.home, result, status: form.status, scorers: isPlayed ? form.scorers : {}, assistants: isPlayed ? form.assistants : {}, participants: isPlayed ? form.participants : [] };
    if (isEdit) { onSave(initial.id, data); } else { onAdd({ ...data, id: Date.now() }); }
    onClose();
  };
  const title = isEdit
    ? (form.status === 'played' ? 'Cargar Resultado' : 'Editar Partido')
    : 'Nuevo Partido';
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <span className="modal-title">{title}</span>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ padding: '6px 10px' }}><Icon name="x" /></button>
        </div>
        <div className="form-group">
          <label className="form-label">Rival</label>
          <input className="form-input" placeholder="Nombre del equipo rival" value={form.rival} onChange={e => upd('rival', e.target.value)} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div className="form-group">
            <label className="form-label">Fecha</label>
            <input className="form-input" type="date" value={form.date} onChange={e => upd('date', e.target.value)} />
          </div>
          <div className="form-group">
            <label className="form-label">Hora</label>
            <input className="form-input" type="time" value={form.time} onChange={e => upd('time', e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Cancha</label>
          <input className="form-input" placeholder="Nombre del estadio o cancha" value={form.venue} onChange={e => upd('venue', e.target.value)} />
        </div>
        <div className="form-group">
          <label className="form-label">Localía</label>
          <div style={{ display: 'flex', gap: 10 }}>
            {[{ v: true, l: 'Local' }, { v: false, l: 'Visitante' }].map(o => (
              <button key={o.l}
                className="btn"
                style={{ flex: 1, background: form.home === o.v ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.03)', color: form.home === o.v ? '#c9a84c' : '#4a7a5a', border: `1px solid ${form.home === o.v ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.08)'}` }}
                onClick={() => upd('home', o.v)}
              >{o.l}</button>
            ))}
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Estado</label>
          <div style={{ display: 'flex', gap: 10 }}>
            {[{ v: 'upcoming', l: 'Próximo' }, { v: 'played', l: 'Jugado' }].map(o => (
              <button key={o.v}
                className="btn"
                style={{ flex: 1, background: form.status === o.v ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.03)', color: form.status === o.v ? '#c9a84c' : '#4a7a5a', border: `1px solid ${form.status === o.v ? 'rgba(201,168,76,0.3)' : 'rgba(255,255,255,0.08)'}` }}
                onClick={() => upd('status', o.v)}
              >{o.l}</button>
            ))}
          </div>
        </div>
        {form.status === 'played' && (
          <div className="form-group">
            <label className="form-label">Resultado</label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 10, alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 11, color: '#4a7a5a', marginBottom: 4, textAlign: 'center' }}>Delta</div>
                <input className="form-input" type="number" min="0" placeholder="0" value={form.goalsUs} onChange={e => upd('goalsUs', e.target.value)} style={{ textAlign: 'center', fontSize: 20, fontWeight: 700 }} />
              </div>
              <div style={{ color: '#4a7a5a', fontWeight: 700, fontSize: 18, paddingTop: 20 }}>-</div>
              <div>
                <div style={{ fontSize: 11, color: '#4a7a5a', marginBottom: 4, textAlign: 'center' }}>Rival</div>
                <input className="form-input" type="number" min="0" placeholder="0" value={form.goalsRival} onChange={e => upd('goalsRival', e.target.value)} style={{ textAlign: 'center', fontSize: 20, fontWeight: 700 }} />
              </div>
            </div>
          </div>
        )}
        {form.status === 'played' && players.length > 0 && (
          <div className="form-group">
            <label className="form-label">Jugadores · ✓ jugó &nbsp;⚽ goles &nbsp;🎯 asist.</label>
            <div style={{ maxHeight: 240, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 5 }}>
              {[...players].sort((a, b) => a.number - b.number).map(p => {
                const played = form.participants.includes(p.id);
                const goals   = form.scorers[p.id]   ?? 0;
                const assists = form.assistants[p.id] ?? 0;
                const toggleP = () => upd('participants', played ? form.participants.filter(id => id !== p.id) : [...form.participants, p.id]);
                const chg = (field, delta) => {
                  const cur = Math.max(0, ((form[field][p.id] ?? 0) + delta));
                  const next = { ...form[field] };
                  if (cur === 0) delete next[p.id]; else next[p.id] = cur;
                  upd(field, next);
                };
                const cBtn = { width: 22, height: 22, borderRadius: 5, border: 'none', cursor: 'pointer', background: 'rgba(255,255,255,0.07)', color: '#a0c4b0', fontSize: 14, fontWeight: 700, lineHeight: 1, padding: 0 };
                return (
                  <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 8px', borderRadius: 10, background: played ? 'rgba(34,197,94,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${played ? 'rgba(34,197,94,0.18)' : 'rgba(255,255,255,0.05)'}` }}>
                    <button onClick={toggleP} style={{ width: 24, height: 24, borderRadius: 6, border: 'none', cursor: 'pointer', background: played ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.06)', color: played ? '#4ade80' : '#3a6a4a', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{played ? '✓' : '○'}</button>
                    <span style={{ fontSize: 11, color: '#c9a84c', fontWeight: 700, minWidth: 22, textAlign: 'right' }}>#{p.number}</span>
                    <span style={{ fontSize: 12, color: '#e8f0eb', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <span style={{ fontSize: 10 }}>⚽</span>
                      <button style={cBtn} onClick={() => chg('scorers', -1)}>−</button>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#c9a84c', minWidth: 14, textAlign: 'center' }}>{goals}</span>
                      <button style={cBtn} onClick={() => chg('scorers', 1)}>+</button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <span style={{ fontSize: 10 }}>🎯</span>
                      <button style={cBtn} onClick={() => chg('assistants', -1)}>−</button>
                      <span style={{ fontSize: 12, fontWeight: 700, color: '#a0c4b0', minWidth: 14, textAlign: 'center' }}>{assists}</span>
                      <button style={cBtn} onClick={() => chg('assistants', 1)}>+</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <button className="btn btn-ghost" style={{ flex: 1 }} onClick={onClose}><Icon name="x" /> Cancelar</button>
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={handle}
            disabled={form.status === 'played' && (form.goalsUs === '' || form.goalsRival === '')}
          ><Icon name="calendar" /> {isEdit ? 'Guardar Cambios' : 'Crear Partido'}</button>
        </div>
      </div>
    </div>
  );
}

// ─── FIELD & LINEUP COMPONENTS ───────────────────────────────────────────────

function SoccerFieldView({ slots, lineup, players, captain, onSlotClick }) {
  const byId = Object.fromEntries(players.map(p => [p.id, p]));
  return (
    <div className="field-container">
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        viewBox="0 0 100 155" preserveAspectRatio="none">
        {[0,1,2,3,4,5,6,7,8,9].map(i => (
          <rect key={i} x={0} y={i*15.5} width={100} height={7.75} fill={i%2===0 ? 'rgba(0,0,0,0.08)' : 'transparent'} />
        ))}
        <rect x={4} y={4} width={92} height={147} fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="0.6" />
        <line x1={4} y1={77.5} x2={96} y2={77.5} stroke="rgba(255,255,255,0.65)" strokeWidth="0.5" />
        <circle cx={50} cy={77.5} r={13} fill="none" stroke="rgba(255,255,255,0.65)" strokeWidth="0.5" />
        <circle cx={50} cy={77.5} r={1.2} fill="rgba(255,255,255,0.65)" />
        <rect x={26} y={4} width={48} height={22} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.5" />
        <rect x={36} y={4} width={28} height={11} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.5" />
        <circle cx={50} cy={18} r={0.9} fill="rgba(255,255,255,0.55)" />
        <rect x={40} y={1.5} width={20} height={2.5} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
        <rect x={26} y={129} width={48} height={22} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.5" />
        <rect x={36} y={140} width={28} height={11} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.5" />
        <circle cx={50} cy={137} r={0.9} fill="rgba(255,255,255,0.55)" />
        <rect x={40} y={151} width={20} height={2.5} fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="0.5" />
      </svg>
      {slots.map(slot => {
        const pid = lineup[slot.id];
        const p = pid ? byId[pid] : null;
        const isCaptain = p && p.id === captain;
        return (
          <div key={slot.id} className="field-slot" style={{ left: `${slot.x}%`, top: `${slot.y}%` }}
            onClick={() => onSlotClick(slot)}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <div className={`field-slot-chip ${p ? 'filled' : 'empty'}`}>{p ? initials(p.name) : '+'}</div>
              {isCaptain && (
                <span style={{ position: 'absolute', top: -4, right: -4, background: '#c9a84c', color: '#0a1a12',
                  borderRadius: '50%', width: 14, height: 14, fontSize: 8, fontWeight: 900,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', lineHeight: 1 }}>C</span>
              )}
            </div>
            <div className="field-slot-name">{p ? (p.nickname || (p.name || '').split(' ')[0]).toUpperCase() : slot.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function PlayerPickerModal({ slot, confirmedPlayers, assignedIds, currentPlayerId, onAssign, onRemove, onClose }) {
  const currentPlayer = confirmedPlayers.find(p => p.id === currentPlayerId);
  const available = confirmedPlayers
    .filter(p => p.id !== currentPlayerId && !assignedIds.includes(p.id))
    .sort((a, b) => a.number - b.number);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 380 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
          <span className="modal-title">Posición — {slot.label}</span>
          <button className="btn btn-ghost btn-sm" onClick={onClose} style={{ padding: '6px 10px' }}><Icon name="x" /></button>
        </div>
        {currentPlayer && (
          <div style={{ marginBottom: 16 }}>
            <div className="section-title" style={{ marginBottom: 8 }}>Asignado</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', borderRadius: 12, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)' }}>
              <div className="player-avatar" style={{ width: 32, height: 32, fontSize: 11, marginBottom: 0 }}>{initials(currentPlayer.name)}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#e8f0eb' }}>{currentPlayer.name}</div>
                <div style={{ fontSize: 11, color: '#4a7a5a' }}>#{currentPlayer.number} · {currentPlayer.position}</div>
              </div>
              <button className="btn btn-danger btn-sm" onClick={() => onRemove(slot.id)}>Quitar</button>
            </div>
          </div>
        )}
        <div className="section-title" style={{ marginBottom: 8 }}>{currentPlayer ? 'Cambiar jugador' : 'Elegir jugador'}</div>
        <div style={{ maxHeight: 300, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 5 }}>
          {available.length === 0 ? (
            <div style={{ textAlign: 'center', padding: 20, color: '#4a7a5a', fontSize: 13 }}>
              Sin jugadores disponibles. Confirmá asistencias en "Convocados".
            </div>
          ) : available.map(p => (
            <div key={p.id} onClick={() => onAssign(slot.id, p.id)}
              style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', borderRadius: 10,
                cursor: 'pointer', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', transition: 'all 0.15s' }}>
              <div className="player-avatar" style={{ width: 30, height: 30, fontSize: 10, marginBottom: 0 }}>{initials(p.name)}</div>
              <span style={{ fontSize: 11, color: '#c9a84c', fontWeight: 700, minWidth: 22 }}>#{p.number}</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: '#e8f0eb', flex: 1 }}>{p.name}</span>
              <span style={{ fontSize: 11, color: '#4a7a5a' }}>{p.position}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PÁGINAS ──────────────────────────────────────────────────────────────────

function Dashboard({ players, matches, posts }) {
  const played = matches.filter(m => m.status === 'played');
  const wins = played.filter(m => {
    if (!m.result) return false;
    const [a, b] = m.result.split('-').map(Number);
    return m.home ? a > b : b > a;
  }).length;
  const upcoming = matches.find(m => m.status === 'upcoming');
  const playerStats = computeStats(matches);
  const totalGoals = played.reduce((acc, m) => acc + Object.values(m.scorers ?? {}).reduce((a, b) => a + b, 0), 0);

  return (
    <div>
      {/* HEADER */}
      <div className="page-header">
        <div>
          <div style={{ fontSize: 12, color: '#4a7a5a', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 6 }}>
            Temporada {new Date().getFullYear()}
          </div>
          <div className="page-title">Dashboard</div>
        </div>
        <Shield size={56} />
      </div>

      {/* STATS */}
      <div className="stat-grid">
        <div className="stat-card">
          <div className="stat-label">Partidos</div>
          <div className="stat-value">{played.length}</div>
          <div className="stat-sub">{wins} victorias</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Jugadores</div>
          <div className="stat-value">{players.filter(p => p.status === 'active').length}</div>
          <div className="stat-sub">activos de {players.length}</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Goles totales</div>
          <div className="stat-value stat-accent">{totalGoals}</div>
          <div className="stat-sub">en {played.length} partidos</div>
        </div>
        <div className="stat-card">
          <div className="stat-label">Porcentaje victorias</div>
          <div className="stat-value">{played.length ? Math.round(wins / played.length * 100) : 0}<span style={{ fontSize: 20 }}>%</span></div>
          <div className="stat-sub">{wins}G · {played.length - wins}P</div>
        </div>
      </div>

      <div className="dashboard-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <div>
          <div className="section-title">Próximo Partido</div>
          {upcoming ? (
            <div className="card" style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, opacity: 0.04 }}>
                <Shield size={160} />
              </div>
              <div style={{ fontSize: 12, color: '#4a7a5a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: 8 }}>
                {upcoming.home ? '🏠 LOCAL' : '✈️ VISITANTE'}
              </div>
              <div style={{ fontSize: 24, fontWeight: 700, color: '#e8f0eb', marginBottom: 12 }}>
                vs {upcoming.rival}
              </div>
              <div style={{ fontSize: 14, color: '#7aaa8a' }}>📅 {formatDate(upcoming.date)} — {upcoming.time}</div>
              <div style={{ fontSize: 14, color: '#7aaa8a', marginTop: 4 }}>📍 {upcoming.venue}</div>
            </div>
          ) : (
            <div className="card"><div className="empty-state-text" style={{ color: '#3a6a4a' }}>No hay partidos próximos</div></div>
          )}
        </div>

        {/* GOLEADORES */}
        <div>
          <div className="section-title">Top Goleadores</div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            {[...players]
              .map(p => ({ ...p, _goals: playerStats[p.id]?.goals ?? 0 }))
              .filter(p => p._goals > 0)
              .sort((a, b) => b._goals - a._goals)
              .slice(0, 4)
              .map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 800, color: i === 0 ? '#c9a84c' : '#2a5a3a', minWidth: 20, textAlign: 'center' }}>{i + 1}</div>
                <div className="player-avatar" style={{ width: 36, height: 36, fontSize: 12, marginBottom: 0 }}>{initials(p.name)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#e8f0eb' }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: '#4a7a5a' }}>{p.position}</div>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, color: '#c9a84c' }}>{p._goals}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ÚLTIMAS NOVEDADES */}
      <div style={{ marginTop: 32 }}>
        <div className="section-title">Últimas Novedades</div>
        {posts.slice(0, 2).map(p => (
          <div key={p.id} className="post-card">
            <div className="post-type-badge" style={{
              background: p.type === 'match' ? 'rgba(34,197,94,0.1)' : p.type === 'squad' ? 'rgba(201,168,76,0.1)' : 'rgba(59,130,246,0.1)',
              color: p.type === 'match' ? '#4ade80' : p.type === 'squad' ? '#c9a84c' : '#60a5fa'
            }}>
              {p.type === 'match' ? 'Partido' : p.type === 'squad' ? 'Convocatoria' : 'Entrenamiento'}
            </div>
            <div className="post-title">{p.title}</div>
            <div className="post-body">{p.content}</div>
            <div className="post-date">{formatDate(p.date)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlayersPage({ players, addPlayer, updatePlayer, matches }) {
  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [filter, setFilter] = useState('Todos');
  const tabs = ['Todos', ...POSITIONS];
  const playerStats = computeStats(matches);

  const filtered = filter === 'Todos' ? players : players.filter(p => p.position === filter);
  const sorted = [...filtered].sort((a, b) => a.number - b.number);

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">Plantel</div>
          <div className="page-subtitle">{players.length} jugadores registrados</div>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
          <Icon name="plus" /> Agregar Jugador
        </button>
      </div>

      <div className="tabs">
        {tabs.map(t => (
          <button key={t} className={`tab ${filter === t ? 'active' : ''}`} onClick={() => setFilter(t)}>{t}</button>
        ))}
      </div>

      <div className="players-grid">
        {sorted.map(p => (
          <div key={p.id} className="player-card" onClick={() => setSelected(p)}>
            <div className="player-number">#{p.number}</div>
            <div className="player-avatar">{initials(p.name)}</div>
            <div className="player-name">{p.name}</div>
            <div className="player-pos">{p.position}</div>
            <div style={{ marginBottom: 12 }}>
              <span className="badge" style={{ background: `${STATUS_COLORS[p.status]}15`, color: STATUS_COLORS[p.status] }}>
                {STATUS_LABELS[p.status]}
              </span>
            </div>
            <div className="player-stats-row">
              <div className="player-stat-mini"><span>{playerStats[p.id]?.goals ?? 0}</span><span>Goles</span></div>
              <div className="player-stat-mini"><span>{playerStats[p.id]?.assists ?? 0}</span><span>Asist.</span></div>
              <div className="player-stat-mini"><span>{playerStats[p.id]?.matches ?? 0}</span><span>PJ</span></div>
            </div>
          </div>
        ))}
        {sorted.length === 0 && (
          <div style={{ gridColumn: '1/-1' }}>
            <div className="empty-state"><div className="empty-state-icon">👕</div><div className="empty-state-text">No hay jugadores en esta posición</div></div>
          </div>
        )}
      </div>

      {selected && <PlayerModal player={selected} onClose={() => setSelected(null)} stats={playerStats[selected.id]} onUpdate={updatePlayer} />}
      {showAdd && <AddPlayerModal onClose={() => setShowAdd(false)} onAdd={addPlayer} />}
    </div>
  );
}

function MatchesPage({ matches, addMatch, updateMatch, players = [] }) {
  const [showAdd, setShowAdd] = useState(false);
  const [editing, setEditing] = useState(null);
  const [editInitialStatus, setEditInitialStatus] = useState(null);
  const played = matches.filter(m => m.status === 'played');
  const upcoming = matches.filter(m => m.status === 'upcoming');
  const openEdit = (m, forceStatus = null) => { setEditing(m); setEditInitialStatus(forceStatus); };
  const handleSave = (id, data) => {
    const prev = matches.find(m => m.id === id);
    updateMatch(id, data, prev);
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">Partidos</div>
          <div className="page-subtitle">{played.length} disputados · {upcoming.length} próximos</div>
        </div>
        <button className="btn btn-primary" onClick={() => setShowAdd(true)}>
          <Icon name="plus" /> Nuevo Partido
        </button>
      </div>

      {upcoming.length > 0 && <>
        <div className="section-title">Próximos</div>
        {upcoming.map(m => (
          <div key={m.id} className="match-row">
            <div>
              <div style={{ fontSize: 11, color: '#4a7a5a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                {m.home ? '🏠 Local' : '✈️ Visitante'}
              </div>
              <div className="match-rival">vs {m.rival}</div>
              <div className="match-meta">📅 {formatDate(m.date)} {m.time} · {m.venue}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <button className="btn btn-primary btn-sm" onClick={() => openEdit(m, 'played')} style={{ fontSize: 12 }}>⚽ Cargar Resultado</button>
              <button className="btn btn-ghost btn-sm" onClick={() => openEdit(m)} style={{ padding: '4px 8px', opacity: 0.7 }}><Icon name="edit" /></button>
            </div>
          </div>
        ))}
      </>}

      {played.length > 0 && <>
        <div className="section-title" style={{ marginTop: 24 }}>Resultados</div>
        {[...played].reverse().map(m => {
          const parts = (m.result ?? '0-0').split('-').map(Number);
          const [a, b] = [isNaN(parts[0]) ? 0 : parts[0], isNaN(parts[1]) ? 0 : parts[1]];
          const win = m.home ? a > b : b > a;
          const draw = a === b;
          return (
            <div key={m.id} className="match-row">
              <div>
                <div style={{ fontSize: 11, color: '#4a7a5a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>
                  {m.home ? 'Local' : 'Visitante'} · {formatDate(m.date)}
                </div>
                <div className="match-rival">vs {m.rival}</div>
                <div className="match-meta">{m.venue}</div>
              </div>
              <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div className="match-score">{m.result}</div>
                <span className="badge" style={{ background: draw ? 'rgba(234,179,8,0.1)' : win ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', color: draw ? '#facc15' : win ? '#4ade80' : '#f87171' }}>
                  {draw ? 'Empate' : win ? 'Victoria' : 'Derrota'}
                </span>
                <button className="btn btn-ghost btn-sm" onClick={() => openEdit(m)} style={{ padding: '4px 8px', opacity: 0.7 }}><Icon name="edit" /></button>
              </div>
            </div>
          );
        })}
      </>}

      {showAdd && <MatchModal onClose={() => setShowAdd(false)} onAdd={addMatch} onSave={handleSave} players={players} />}
      {editing && <MatchModal initial={editing} initialStatus={editInitialStatus} onClose={() => { setEditing(null); setEditInitialStatus(null); }} onAdd={addMatch} onSave={handleSave} players={players} />}
    </div>
  );
}

function StatsPage({ players, matches }) {
  const playerStats = computeStats(matches);
  const sorted = [...players].sort((a, b) => a.name.localeCompare(b.name, 'es'));
  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">Estadísticas</div>
          <div className="page-subtitle">Rendimiento individual de la temporada</div>
        </div>
      </div>

      <div className="stats-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div>
          <div className="section-title">Tabla de Goleadores</div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="rank-table">
              <thead>
                <tr>
                  <th style={{ width: 40 }}>#</th>
                  <th>Jugador</th>
                  <th style={{ textAlign: 'right' }}>⚽</th>
                  <th style={{ textAlign: 'right' }}>🎯</th>
                  <th style={{ textAlign: 'right' }}>PJ</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((p, i) => (
                  <tr key={p.id}>
                    <td><div className={`rank-pos ${i < 3 ? 'top3' : ''}`} style={{ color: i === 0 ? '#c9a84c' : i < 3 ? '#a0c4b0' : '#3a6a4a' }}>{i + 1}</div></td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div className="player-avatar" style={{ width: 28, height: 28, fontSize: 10, marginBottom: 0, flexShrink: 0 }}>{initials(p.name)}</div>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: '#e8f0eb' }}>{p.name}</div>
                          <div style={{ fontSize: 11, color: '#4a7a5a' }}>{p.position}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: '#c9a84c' }}>{playerStats[p.id]?.goals ?? 0}</td>
                    <td style={{ textAlign: 'right', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: '#a0c4b0' }}>{playerStats[p.id]?.assists ?? 0}</td>
                    <td style={{ textAlign: 'right', fontSize: 13, color: '#4a7a5a' }}>{playerStats[p.id]?.matches ?? 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ASISTIDORES */}
        <div>
          <div className="section-title">Tabla de Asistencias</div>
          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <table className="rank-table">
              <thead>
                <tr>
                  <th style={{ width: 40 }}>#</th>
                  <th>Jugador</th>
                  <th style={{ textAlign: 'right' }}>🎯</th>
                  <th style={{ textAlign: 'right' }}>⚽</th>
                </tr>
              </thead>
              <tbody>
                {[...players].sort((a, b) => a.name.localeCompare(b.name, 'es')).map((p, i) => (
                  <tr key={p.id}>
                    <td><div className="rank-pos" style={{ color: i === 0 ? '#c9a84c' : i < 3 ? '#a0c4b0' : '#3a6a4a' }}>{i + 1}</div></td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div className="player-avatar" style={{ width: 28, height: 28, fontSize: 10, marginBottom: 0, flexShrink: 0 }}>{initials(p.name)}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#e8f0eb' }}>{p.name}</div>
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: '#a0c4b0' }}>{playerStats[p.id]?.assists ?? 0}</td>
                    <td style={{ textAlign: 'right', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: '#c9a84c' }}>{playerStats[p.id]?.goals ?? 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function ConvocatoriaPage({ players, matches }) {
  const [tab, setTab] = useState('convocatoria');
  const [attendance, setAttendance] = useState({});
  const [toast, setToast] = useState(null);
  const cardRef = useRef(null);
  const fieldRef = useRef(null);

  // Lineup state
  const [formation, setFormation] = useState('3-3-2');
  const [lineup, setLineup] = useState({});
  const [captain, setCaptain] = useState(null);
  const [pickingSlot, setPickingSlot] = useState(null);

  const upcoming = matches.find(m => m.status === 'upcoming');

  // FIX: incluir lesionados que confirmaron (antes solo filtraba 'active')
  const confirmed = players
    .filter(p => p.status !== 'suspended' && attendance[p.id] === 'yes')
    .sort((a, b) => a.number - b.number);

  // Cargar asistencia desde Firestore
  useEffect(() => {
    if (!upcoming?.id) { setAttendance({}); return; }
    const ref = doc(db, 'convocatorias', upcoming.id);
    const unsub = onSnapshot(ref, snap => {
      setAttendance(snap.exists() ? (snap.data().attendance ?? {}) : {});
    });
    return unsub;
  }, [upcoming?.id]);

  // Cargar alineación guardada desde Firestore
  useEffect(() => {
    if (!upcoming?.id) { setFormation('3-3-2'); setLineup({}); setCaptain(null); return; }
    const ref = doc(db, 'alineaciones', upcoming.id);
    const unsub = onSnapshot(ref, snap => {
      if (snap.exists()) {
        const saved = snap.data().formation;
        setFormation(FORMATIONS_DEF[saved] ? saved : '3-3-2');
        setLineup(snap.data().lineup ?? {});
        setCaptain(snap.data().captain ?? null);
      } else {
        setFormation('3-3-2');
        setLineup({});
        setCaptain(null);
      }
    });
    return unsub;
  }, [upcoming?.id]);

  const handleAttend = (playerId, status) => {
    if (!upcoming?.id) return;
    const next = { ...attendance, [playerId]: status };
    setAttendance(next);
    setDoc(doc(db, 'convocatorias', upcoming.id), { attendance: next, matchId: upcoming.id, updatedAt: serverTimestamp() }, { merge: true });
    if (status === 'yes') setToast('Confirmado ✓');
  };

  const saveLineup = (newFormation, newLineup, newCaptain = captain) => {
    if (!upcoming?.id) return;
    setDoc(doc(db, 'alineaciones', upcoming.id), { formation: newFormation, lineup: newLineup, captain: newCaptain, matchId: upcoming.id, updatedAt: serverTimestamp() }, { merge: true });
  };

  const handleSetCaptain = (playerId) => {
    const next = captain === playerId ? null : playerId;
    setCaptain(next);
    saveLineup(formation, lineup, next);
  };

  const handleAssign = (slotId, playerId) => {
    const next = Object.fromEntries(Object.entries(lineup).filter(([, v]) => v !== playerId));
    next[slotId] = playerId;
    setLineup(next);
    setPickingSlot(null);
    saveLineup(formation, next);
  };

  const handleRemoveFromSlot = (slotId) => {
    const next = { ...lineup };
    delete next[slotId];
    setLineup(next);
    setPickingSlot(null);
    saveLineup(formation, next);
  };

  const changeFormation = (f) => {
    setFormation(f);
    setLineup({});
    saveLineup(f, {}, captain);
  };

  const exportCard = async () => {
    const el = cardRef.current;
    if (!el) return;
    try {
      const canvas = await html2canvas(el, { backgroundColor: '#0d1f16', scale: 2, useCORS: true });
      const link = document.createElement('a');
      link.download = `convocatoria-${upcoming ? upcoming.rival.replace(/\s+/g, '-').toLowerCase() : 'delta'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) { console.error(e); }
  };

  const exportField = async () => {
    const el = fieldRef.current;
    if (!el) return;
    try {
      const canvas = await html2canvas(el, { backgroundColor: '#0a1a12', scale: 2, useCORS: true });
      const link = document.createElement('a');
      link.download = `alineacion-${upcoming ? upcoming.rival.replace(/\s+/g, '-').toLowerCase() : 'delta'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (e) { console.error(e); }
  };

  const safeFormation = FORMATIONS_DEF[formation] ? formation : '3-3-2';
  const slots = buildSlots(FORMATIONS_DEF[safeFormation]);
  const assignedIds = Object.values(lineup ?? {});

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">{tab === 'alineacion' ? 'Alineación' : 'Convocatoria'}</div>
          <div className="page-subtitle">{upcoming ? `vs ${upcoming.rival} · ${formatDate(upcoming.date)}` : 'Sin partido próximo'}</div>
        </div>
        <button className="btn btn-primary" onClick={tab === 'alineacion' ? exportField : exportCard}>
          <Icon name="download" /> Exportar
        </button>
      </div>

      <div className="tabs">
        <button className={`tab ${tab === 'convocatoria' ? 'active' : ''}`} onClick={() => setTab('convocatoria')}>📋 Convocados</button>
        <button className={`tab ${tab === 'alineacion' ? 'active' : ''}`} onClick={() => setTab('alineacion')}>⚽ Alineación</button>
      </div>

      {tab === 'convocatoria' && (
        <div className="convocatoria-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
          {/* ASISTENCIA */}
          <div>
            <div className="section-title">Confirmar asistencia</div>
            {!upcoming && (
              <div className="card" style={{ marginBottom: 16, textAlign: 'center', color: '#4a7a5a', fontSize: 14 }}>
                Sin partido próximo. Creá uno en la sección Partidos.
              </div>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {players.filter(p => p.status !== 'suspended').map(p => (
                <div key={p.id} className="card-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', opacity: !upcoming ? 0.5 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className="player-avatar" style={{ width: 36, height: 36, fontSize: 12, marginBottom: 0 }}>{initials(p.name)}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#e8f0eb' }}>{p.name}</div>
                      <div style={{ fontSize: 11, color: p.status === 'injured' ? '#f97316' : '#4a7a5a' }}>
                        #{p.number} · {p.status === 'injured' ? '🤕 Lesionado' : p.position}
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {[{ k: 'yes', e: '✓', col: '#4ade80' }, { k: 'maybe', e: '?', col: '#facc15' }, { k: 'no', e: '✕', col: '#f87171' }].map(btn => (
                      <button key={btn.k}
                        onClick={() => upcoming && handleAttend(p.id, btn.k)}
                        style={{
                          width: 32, height: 32, borderRadius: 8, border: 'none',
                          cursor: upcoming ? 'pointer' : 'default',
                          background: attendance[p.id] === btn.k ? `${btn.col}22` : 'rgba(255,255,255,0.04)',
                          color: attendance[p.id] === btn.k ? btn.col : '#3a6a4a',
                          fontSize: 13, fontWeight: 700, transition: 'all 0.15s',
                          outline: attendance[p.id] === btn.k ? `1.5px solid ${btn.col}` : '1px solid rgba(255,255,255,0.06)',
                        }}
                      >{btn.e}</button>
                    ))}
                  </div>
                </div>
              ))}
              {players.filter(p => p.status !== 'suspended').length === 0 && (
                <div className="empty-state"><div className="empty-state-icon">👕</div><div className="empty-state-text">No hay jugadores activos</div></div>
              )}
            </div>
          </div>

          {/* CARD CONVOCATORIA */}
          <div>
            <div className="section-title">Card visual · {confirmed.length} confirmados</div>
            <div className="squad-card-wrap">
              <div ref={cardRef} className="squad-card">
                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                  <Shield size={72} style={{ margin: '0 auto' }} />
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#c9a84c', textTransform: 'uppercase', marginTop: 12, marginBottom: 2 }}>
                    Delta Entrerriano
                  </div>
                  <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 40, fontWeight: 900, letterSpacing: '0.06em', color: '#e8f0eb', textTransform: 'uppercase', lineHeight: 1 }}>
                    CONVOCADOS
                  </div>
                </div>
                <div className="squad-card-line" />
                {upcoming && (
                  <div style={{ textAlign: 'center', marginBottom: 20 }}>
                    <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, color: '#e8f0eb', letterSpacing: '0.04em' }}>
                      VS {upcoming.rival.toUpperCase()}
                    </div>
                    <div style={{ fontSize: 13, color: '#7aaa8a', marginTop: 6, letterSpacing: '0.06em' }}>
                      {formatDate(upcoming.date)} · {upcoming.time}
                    </div>
                    <div style={{ fontSize: 12, color: '#4a7a5a', marginTop: 2 }}>{upcoming.venue}</div>
                  </div>
                )}
                <div className="squad-card-line" />
                <div style={{ marginBottom: 16 }}>
                  {confirmed.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '24px 0', color: '#3a6a4a', fontSize: 13 }}>
                      Sin confirmaciones aún
                    </div>
                  ) : confirmed.map((p, i) => (
                    <div key={p.id} className="squad-name-item" style={{ borderBottom: i < confirmed.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                      <div className="squad-name-num">{p.number}</div>
                      <div className="squad-name-text">{(p.name || '').toUpperCase()}{captain === p.id && <span style={{ marginLeft: 6, fontSize: 10, fontWeight: 900, color: '#c9a84c' }}>(C)</span>}</div>
                      <div style={{ marginLeft: 'auto', fontSize: 10, color: '#3a6a4a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.position}</div>
                    </div>
                  ))}
                </div>
                <div className="squad-card-line" />
                <div style={{ textAlign: 'center', paddingTop: 4 }}>
                  <div style={{ fontSize: 11, color: '#3a6a4a', letterSpacing: '0.15em', fontWeight: 600, textTransform: 'uppercase' }}>
                    🌿 Temporada {new Date().getFullYear()}
                  </div>
                </div>
              </div>
              {confirmed.length > 0 && (
                <div className="attend-feedback" style={{ marginTop: 16 }}>
                  <span>🔥</span>
                  <span>{confirmed.length} jugadores confirmados para el partido</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {tab === 'alineacion' && (
        <div>
          {/* Selector de formación */}
          <div className="tabs" style={{ marginBottom: 20 }}>
            {Object.keys(FORMATIONS_DEF).map(f => (
              <button key={f} className={`tab ${formation === f ? 'active' : ''}`} onClick={() => changeFormation(f)}>{f}</button>
            ))}
          </div>

          <div className="lineup-wrap">
            {/* Campo de juego */}
            <div ref={fieldRef} style={{ background: '#0a1a12', borderRadius: 16, padding: 16 }}>
              <div style={{ textAlign: 'center', marginBottom: 12 }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 20, fontWeight: 900, color: '#c9a84c', letterSpacing: '0.1em' }}>
                  DELTA ENTRERRIANO
                </div>
                {upcoming && (
                  <div style={{ fontSize: 12, color: '#4a7a5a', marginTop: 2 }}>
                    vs {upcoming.rival.toUpperCase()} · {formatDate(upcoming.date)}
                  </div>
                )}
                <div style={{ fontSize: 11, color: '#3a6a4a', letterSpacing: '0.08em', fontWeight: 600, marginTop: 2 }}>{formation}</div>
              </div>
              <SoccerFieldView slots={slots} lineup={lineup} players={players} captain={captain} onSlotClick={setPickingSlot} />
              <div style={{ textAlign: 'center', marginTop: 8, fontSize: 11, color: '#3a6a4a' }}>
                Tocá una posición para asignar un jugador
              </div>
            </div>

            {/* Lista de confirmados */}
            <div>
              <div className="section-title">Confirmados ({confirmed.length})</div>
              {confirmed.length === 0 ? (
                <div className="card" style={{ textAlign: 'center', color: '#4a7a5a', fontSize: 13, padding: 16 }}>
                  Confirmá jugadores en "Convocados" primero.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {confirmed.map(p => {
                    const isAssigned = assignedIds.includes(p.id);
                    return (
                      <div key={p.id} style={{
                        display: 'flex', alignItems: 'center', gap: 8,
                        padding: '8px 10px', borderRadius: 10,
                        background: isAssigned ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.03)',
                        border: `1px solid ${isAssigned ? 'rgba(201,168,76,0.2)' : 'rgba(255,255,255,0.05)'}`,
                        opacity: isAssigned ? 0.7 : 1,
                      }}>
                        <div className="player-avatar" style={{ width: 28, height: 28, fontSize: 10, marginBottom: 0 }}>{initials(p.name)}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 12, fontWeight: 600, color: '#e8f0eb', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</div>
                          <div style={{ fontSize: 10, color: '#4a7a5a' }}>#{p.number}</div>
                        </div>
                        <button
                          onClick={() => handleSetCaptain(p.id)}
                          title={captain === p.id ? 'Quitar capitán' : 'Asignar capitán'}
                          style={{ width: 22, height: 22, borderRadius: 6, border: 'none', cursor: 'pointer', flexShrink: 0,
                            background: captain === p.id ? '#c9a84c' : 'rgba(201,168,76,0.12)',
                            color: captain === p.id ? '#0a1a12' : '#c9a84c',
                            fontSize: 10, fontWeight: 900, lineHeight: 1 }}>C</button>
                        {isAssigned && <span style={{ fontSize: 11, color: '#c9a84c', fontWeight: 700 }}>✓</span>}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {pickingSlot && (
        <PlayerPickerModal
          slot={pickingSlot}
          confirmedPlayers={confirmed}
          assignedIds={assignedIds}
          currentPlayerId={lineup[pickingSlot.id]}
          onAssign={handleAssign}
          onRemove={handleRemoveFromSlot}
          onClose={() => setPickingSlot(null)}
        />
      )}
      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
    </div>
  );
}

function FeedPage({ posts, addPost, updatePost }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', content: '', type: 'training' });
  const [editing, setEditing] = useState(null); // { id, title, content, type }

  const typeColors = {
    match:    ['rgba(34,197,94,0.1)',   '#4ade80'],
    squad:    ['rgba(201,168,76,0.1)',  '#c9a84c'],
    training: ['rgba(59,130,246,0.1)',  '#60a5fa'],
    info:     ['rgba(168,85,247,0.1)',  '#c084fc'],
  };
  const typeLabels = { match: 'Partido', squad: 'Convocatoria', training: 'Entrenamiento', info: 'Información' };

  const TYPE_OPTIONS = [
    { value: 'match',    label: 'Partido' },
    { value: 'squad',    label: 'Convocatoria' },
    { value: 'training', label: 'Entrenamiento' },
    { value: 'info',     label: 'Información' },
  ];

  const handleAddPost = () => {
    if (!form.title || !form.content) return;
    addPost({ ...form, date: new Date().toISOString().split('T')[0] });
    setForm({ title: '', content: '', type: 'training' });
    setShowForm(false);
  };

  const handleSaveEdit = () => {
    if (!editing.title || !editing.content) return;
    updatePost(editing.id, { title: editing.title, content: editing.content, type: editing.type });
    setEditing(null);
  };

  return (
    <div style={{ maxWidth: 640 }}>
      <div className="page-header">
        <div>
          <div className="page-title">Novedades</div>
          <div className="page-subtitle">Feed del equipo</div>
        </div>
        <button className="btn btn-primary" onClick={() => setShowForm(v => !v)}>
          <Icon name="plus" /> Nueva Novedad
        </button>
      </div>

      {showForm && (
        <div className="card" style={{ marginBottom: 24 }}>
          <div className="form-group">
            <label className="form-label">Título</label>
            <input className="form-input" placeholder="Título de la novedad..." value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} />
          </div>
          <div className="form-group">
            <label className="form-label">Contenido</label>
            <textarea className="form-input" rows={3} placeholder="Escribí el contenido..." value={form.content} onChange={e => setForm(f => ({ ...f, content: e.target.value }))} style={{ resize: 'vertical' }} />
          </div>
          <div className="form-group">
            <label className="form-label">Tipo</label>
            <select className="form-select" value={form.type} onChange={e => setForm(f => ({ ...f, type: e.target.value }))}>
              {TYPE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <button className="btn btn-ghost" onClick={() => setShowForm(false)} style={{ flex: 1 }}><Icon name="x" /> Cancelar</button>
            <button className="btn btn-primary" onClick={handleAddPost} style={{ flex: 1 }}><Icon name="news" /> Publicar</button>
          </div>
        </div>
      )}

      {posts.map(p => (
        <div key={p.id} className="post-card">
          {editing?.id === p.id ? (
            <>
              <div className="form-group" style={{ marginBottom: 10 }}>
                <input className="form-input" value={editing.title} onChange={e => setEditing(v => ({ ...v, title: e.target.value }))} />
              </div>
              <div className="form-group" style={{ marginBottom: 10 }}>
                <textarea className="form-input" rows={3} value={editing.content} onChange={e => setEditing(v => ({ ...v, content: e.target.value }))} style={{ resize: 'vertical' }} />
              </div>
              <div className="form-group" style={{ marginBottom: 12 }}>
                <select className="form-select" value={editing.type} onChange={e => setEditing(v => ({ ...v, type: e.target.value }))}>
                  {TYPE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button className="btn btn-ghost" onClick={() => setEditing(null)} style={{ flex: 1 }}><Icon name="x" /> Cancelar</button>
                <button className="btn btn-primary" onClick={handleSaveEdit} style={{ flex: 1 }}><Icon name="check" /> Guardar</button>
              </div>
            </>
          ) : (
            <>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 8 }}>
                <div className="post-type-badge" style={{ background: typeColors[p.type]?.[0], color: typeColors[p.type]?.[1] }}>
                  {typeLabels[p.type] || p.type}
                </div>
                <button className="btn btn-ghost btn-sm" onClick={() => setEditing({ id: p.id, title: p.title, content: p.content, type: p.type })} style={{ padding: '4px 8px', opacity: 0.7 }}>
                  <Icon name="edit" />
                </button>
              </div>
              <div className="post-title">{p.title}</div>
              <div className="post-body">{p.content}</div>
              <div className="post-date">{formatDate(p.date)}</div>
            </>
          )}
        </div>
      ))}

      {posts.length === 0 && (
        <div className="empty-state"><div className="empty-state-icon">📰</div><div className="empty-state-text">No hay novedades aún</div></div>
      )}
    </div>
  );
}

// ─── NAV CONFIG ───────────────────────────────────────────────────────────────
const NAV = [
  { key: 'dashboard', icon: 'home', label: 'Inicio' },
  { key: 'players', icon: 'users', label: 'Plantel' },
  { key: 'matches', icon: 'calendar', label: 'Partidos' },
  { key: 'convocatoria', icon: 'convocatoria', label: 'Convocatoria' },
  { key: 'stats', icon: 'chart', label: 'Estadísticas' },
  { key: 'feed', icon: 'feed', label: 'Novedades' },
];

// ─── APP ROOT ─────────────────────────────────────────────────────────────────
// ─── PWA INSTALL BANNER ───────────────────────────────────────────────────────
function InstallBanner() {
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showIOSHint, setShowIOSHint] = useState(false);
  const [dismissed, setDismissed] = useState(() => localStorage.getItem('pwa-dismissed') === '1');

  useEffect(() => {
    // Android / Chrome: capturar evento beforeinstallprompt
    const handler = (e) => { e.preventDefault(); setInstallPrompt(e); };
    window.addEventListener('beforeinstallprompt', handler);

    // iOS: detectar si no está instalada
    const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isIOS && !isStandalone) setShowIOSHint(true);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  if (dismissed) return null;
  if (!installPrompt && !showIOSHint) return null;

  const dismiss = () => { localStorage.setItem('pwa-dismissed', '1'); setDismissed(true); };

  const install = async () => {
    if (!installPrompt) return;
    installPrompt.prompt();
    const { outcome } = await installPrompt.userChoice;
    if (outcome === 'accepted') dismiss();
    setInstallPrompt(null);
  };

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0,
      background: '#0d1f16',
      borderTop: '1px solid rgba(201,168,76,0.3)',
      padding: '14px 20px',
      display: 'flex', alignItems: 'center', gap: 14,
      zIndex: 400,
      boxShadow: '0 -8px 32px rgba(0,0,0,0.5)',
    }}>
      <Shield size={36} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: '#e8f0eb' }}>Instalar Delta Entrerriano</div>
        {showIOSHint
          ? <div style={{ fontSize: 12, color: '#7aaa8a', marginTop: 2 }}>Tocá <strong>Compartir</strong> → <strong>"Agregar a pantalla de inicio"</strong></div>
          : <div style={{ fontSize: 12, color: '#7aaa8a', marginTop: 2 }}>Instalá la app para acceso rápido sin internet</div>
        }
      </div>
      {!showIOSHint && (
        <button className="btn btn-primary btn-sm" onClick={install}>Instalar</button>
      )}
      <button onClick={dismiss} style={{ background: 'none', border: 'none', color: '#4a7a5a', cursor: 'pointer', fontSize: 20, padding: '0 4px', lineHeight: 1 }}>×</button>
    </div>
  );
}

function useCollection(col) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsub = onSnapshot(collection(db, col), snap => {
      setData(snap.docs.map(d => ({ ...d.data(), id: d.id })));
      setLoading(false);
    });
    return unsub;
  }, [col]);
  return [data, loading];
}

export default function App() {
  const [page, setPage] = useState('dashboard');
  const [players, playersLoading] = useCollection('players');
  const [matches, matchesLoading] = useCollection('matches');
  const [posts, postsLoading] = useCollection('posts');

  const addPlayer    = (p) => { const { id, ...data } = p; addDoc(collection(db, 'players'), data); };
  const updatePlayer = (id, data) => { updateDoc(doc(db, 'players', id), data); };
  const addMatch     = (m) => { const { id, ...data } = m; addDoc(collection(db, 'matches'), data); };
  const updateMatch  = (id, data, prevMatch) => {
    updateDoc(doc(db, 'matches', id), data);
    // Auto-post si se acaba de cargar un resultado nuevo
    const isNewResult = data.status === 'played' && data.result && (!prevMatch?.result);
    if (isNewResult) {
      const post = autoPostForResult(data);
      addDoc(collection(db, 'posts'), { ...post, createdAt: serverTimestamp() });
    }
  };
  const addPost      = (p) => { addDoc(collection(db, 'posts'), { title: p.title, content: p.content, type: p.type, date: p.date, createdAt: serverTimestamp() }); };
  const updatePost   = (id, data) => { updateDoc(doc(db, 'posts', id), data); };

  const loading = playersLoading && matchesLoading && postsLoading;

  useRegisterSW({ immediate: true });

  const [fcmToast, setFcmToast] = useState(null);
  const { notifStatus, subscribe } = useFCM(setFcmToast);

  const pages = {
    dashboard: <Dashboard players={players} matches={matches} posts={posts} />,
    players: <PlayersPage players={players} addPlayer={addPlayer} updatePlayer={updatePlayer} matches={matches} />,
    matches: <MatchesPage matches={matches} addMatch={addMatch} updateMatch={updateMatch} players={players} />,
    convocatoria: <ConvocatoriaPage players={players} matches={matches} />,
    stats: <StatsPage players={players} matches={matches} />,
    feed: <FeedPage posts={posts} addPost={addPost} updatePost={updatePost} />,
  };

  return (
    <>
      <style>{STYLES}</style>
      <div className="app-shell">
        {/* SIDEBAR */}
        <nav className="sidebar">
          <div className="sidebar-logo" onClick={() => setPage('dashboard')}>
            <Shield size={40} />
          </div>
          {NAV.map(n => (
            <div
              key={n.key}
              className={`nav-item ${page === n.key ? 'active' : ''}`}
              onClick={() => setPage(n.key)}
              title={n.label}
            >
              <Icon name={n.icon} />
              <span className="nav-label">{n.label}</span>
            </div>
          ))}
          <div className="sidebar-bottom">
            <NotifButton status={notifStatus} onSubscribe={subscribe} />
          </div>
        </nav>

        {/* MAIN */}
        <main className="main">
          {loading
            ? <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', color: '#4a7a5a', fontSize: 14 }}>Cargando...</div>
            : pages[page]
          }
        </main>
      </div>
      <InstallBanner />
      {fcmToast && <Toast msg={fcmToast} onClose={() => setFcmToast(null)} />}
    </>
  );
}