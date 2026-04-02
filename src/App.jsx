import { useState, useEffect, useRef } from "react";
import { useRegisterSW } from 'virtual:pwa-register/react';
import { db } from './firebase';
import { collection, addDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import html2canvas from 'html2canvas';

// ─── ESCUDO SVG (Carpincho) ──────────────────────────────────────────────────
const Shield = ({ size = 48, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 80 90" className={className} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#1a3a2a" />
        <stop offset="100%" stopColor="#0d2018" />
      </linearGradient>
    </defs>
    {/* Escudo forma */}
    <path d="M40 2 L75 15 L75 52 Q75 75 40 88 Q5 75 5 52 L5 15 Z" fill="url(#shieldGrad)" stroke="#c9a84c" strokeWidth="2.5" />
    {/* Banda horizontal dorada */}
    <path d="M5 38 L75 38 L75 52 L5 52 Z" fill="#c9a84c" opacity="0.25" />
    {/* Carpincho minimalista */}
    <g transform="translate(40, 42) scale(1)">
      {/* Cuerpo */}
      <ellipse cx="0" cy="4" rx="14" ry="9" fill="#c9a84c" opacity="0.9" />
      {/* Cabeza */}
      <ellipse cx="-7" cy="-2" rx="9" ry="7" fill="#c9a84c" opacity="0.9" />
      {/* Nariz */}
      <ellipse cx="-13" cy="-1" rx="3" ry="2.5" fill="#c9a84c" />
      {/* Ojo */}
      <circle cx="-9" cy="-4" r="1.2" fill="#0d2018" />
      {/* Pata delantera */}
      <rect x="-11" y="9" width="4" height="6" rx="2" fill="#c9a84c" opacity="0.85" />
      {/* Pata trasera */}
      <rect x="7" y="10" width="4" height="6" rx="2" fill="#c9a84c" opacity="0.85" />
    </g>
    {/* Letras DE */}
    <text x="40" y="26" textAnchor="middle" fill="#c9a84c" fontSize="8" fontWeight="700" fontFamily="serif" letterSpacing="2">DELTA</text>
  </svg>
);

// ─── DATOS MOCK ──────────────────────────────────────────────────────────────
const PLAYERS = [];
const MATCHES = [];
const POSTS = [];

const POSITIONS = ["Portero", "Defensa", "Mediocampista", "Delantero"];
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

  };
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      {paths[name]}
    </svg>
  );
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const initials = (name) => name.split(' ').slice(0,2).map(w => w[0]).join('');
const formatDate = (d) => new Date(d + 'T00:00:00').toLocaleDateString('es-AR', { day: 'numeric', month: 'short', year: 'numeric' });

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function Toast({ msg, onClose }) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, []);
  return <div className="toast">🔥 {msg}</div>;
}

function PlayerModal({ player, onClose }) {
  if (!player) return null;
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
            { val: player.goals, label: 'Goles' },
            { val: player.assists, label: 'Asistencias' },
            { val: player.matches, label: 'Partidos' },
          ].map(s => (
            <div key={s.label} className="player-stat-box">
              <div className="player-stat-box-val">{s.val}</div>
              <div className="player-stat-box-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AddPlayerModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ name: '', number: '', position: POSITIONS[0] });
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

function AddMatchModal({ onClose, onAdd }) {
  const [form, setForm] = useState({ rival: '', date: '', time: '16:00', venue: '', home: true });
  const upd = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const handle = () => {
    if (!form.rival || !form.date) return;
    onAdd({ ...form, id: Date.now(), result: null, status: 'upcoming' });
    onClose();
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <span className="modal-title">Nuevo Partido</span>
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
        <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
          <button className="btn btn-ghost" style={{ flex: 1 }} onClick={onClose}><Icon name="x" /> Cancelar</button>
          <button className="btn btn-primary" style={{ flex: 1 }} onClick={handle}><Icon name="calendar" /> Crear Partido</button>
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
  const topScorer = [...players].sort((a, b) => b.goals - a.goals)[0];

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
          <div className="stat-value stat-accent">{players.reduce((a, p) => a + p.goals, 0)}</div>
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
            {[...players].filter(p => p.goals > 0).sort((a, b) => b.goals - a.goals).slice(0, 4).map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 20px', borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 18, fontWeight: 800, color: i === 0 ? '#c9a84c' : '#2a5a3a', minWidth: 20, textAlign: 'center' }}>{i + 1}</div>
                <div className="player-avatar" style={{ width: 36, height: 36, fontSize: 12, marginBottom: 0 }}>{initials(p.name)}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#e8f0eb' }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: '#4a7a5a' }}>{p.position}</div>
                </div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 22, fontWeight: 800, color: '#c9a84c' }}>{p.goals}</div>
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

function PlayersPage({ players, addPlayer }) {
  const [selected, setSelected] = useState(null);
  const [showAdd, setShowAdd] = useState(false);
  const [filter, setFilter] = useState('Todos');
  const tabs = ['Todos', ...POSITIONS];

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
              <div className="player-stat-mini"><span>{p.goals}</span><span>Goles</span></div>
              <div className="player-stat-mini"><span>{p.assists}</span><span>Asist.</span></div>
              <div className="player-stat-mini"><span>{p.matches}</span><span>PJ</span></div>
            </div>
          </div>
        ))}
        {sorted.length === 0 && (
          <div style={{ gridColumn: '1/-1' }}>
            <div className="empty-state"><div className="empty-state-icon">👕</div><div className="empty-state-text">No hay jugadores en esta posición</div></div>
          </div>
        )}
      </div>

      {selected && <PlayerModal player={selected} onClose={() => setSelected(null)} />}
      {showAdd && <AddPlayerModal onClose={() => setShowAdd(false)} onAdd={addPlayer} />}
    </div>
  );
}

function MatchesPage({ matches, addMatch }) {
  const [showAdd, setShowAdd] = useState(false);
  const played = matches.filter(m => m.status === 'played');
  const upcoming = matches.filter(m => m.status === 'upcoming');

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
            <div>
              <span className="badge" style={{ background: 'rgba(59,130,246,0.1)', color: '#60a5fa' }}>Próximo</span>
            </div>
          </div>
        ))}
      </>}

      {played.length > 0 && <>
        <div className="section-title" style={{ marginTop: 24 }}>Resultados</div>
        {[...played].reverse().map(m => {
          const [a, b] = m.result.split('-').map(Number);
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
              <div style={{ textAlign: 'center' }}>
                <div className="match-score">{m.result}</div>
                <span className="badge" style={{ background: draw ? 'rgba(234,179,8,0.1)' : win ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', color: draw ? '#facc15' : win ? '#4ade80' : '#f87171' }}>
                  {draw ? 'Empate' : win ? 'Victoria' : 'Derrota'}
                </span>
              </div>
            </div>
          );
        })}
      </>}

      {showAdd && <AddMatchModal onClose={() => setShowAdd(false)} onAdd={addMatch} />}
    </div>
  );
}

function StatsPage({ players }) {
  const sorted = [...players].filter(p => p.goals > 0).sort((a, b) => b.goals - a.goals);
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
                    <td style={{ textAlign: 'right', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: '#c9a84c' }}>{p.goals}</td>
                    <td style={{ textAlign: 'right', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: '#a0c4b0' }}>{p.assists}</td>
                    <td style={{ textAlign: 'right', fontSize: 13, color: '#4a7a5a' }}>{p.matches}</td>
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
                {[...players].sort((a, b) => b.assists - a.assists).map((p, i) => (
                  <tr key={p.id}>
                    <td><div className="rank-pos" style={{ color: i === 0 ? '#c9a84c' : i < 3 ? '#a0c4b0' : '#3a6a4a' }}>{i + 1}</div></td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div className="player-avatar" style={{ width: 28, height: 28, fontSize: 10, marginBottom: 0, flexShrink: 0 }}>{initials(p.name)}</div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: '#e8f0eb' }}>{p.name}</div>
                      </div>
                    </td>
                    <td style={{ textAlign: 'right', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: '#a0c4b0' }}>{p.assists}</td>
                    <td style={{ textAlign: 'right', fontFamily: "'Barlow Condensed',sans-serif", fontSize: 16, fontWeight: 700, color: '#c9a84c' }}>{p.goals}</td>
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
  const [attendance, setAttendance] = useState({});
  const [toast, setToast] = useState(null);
  const cardRef = useRef(null);

  const upcoming = matches.find(m => m.status === 'upcoming');
  const confirmed = players.filter(p => p.status === 'active' && attendance[p.id] === 'yes').sort((a, b) => a.number - b.number);

  const handleAttend = (playerId, status) => {
    setAttendance(prev => ({ ...prev, [playerId]: status }));
    if (status === 'yes') setToast('Ya estás en la convocatoria');
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
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <div className="page-title">Convocatoria</div>
          <div className="page-subtitle">{upcoming ? `vs ${upcoming.rival} · ${formatDate(upcoming.date)}` : 'Sin partido próximo'}</div>
        </div>
        <button className="btn btn-primary" onClick={exportCard}>
          <Icon name="download" /> Exportar PNG
        </button>
      </div>

      <div className="convocatoria-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>
        {/* ASISTENCIA */}
        <div>
          <div className="section-title">Confirmar asistencia</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {players.filter(p => p.status !== 'suspended').map(p => (
              <div key={p.id} className="card-sm" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div className="player-avatar" style={{ width: 36, height: 36, fontSize: 12, marginBottom: 0 }}>{initials(p.name)}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#e8f0eb' }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: '#4a7a5a' }}>#{p.number} · {p.position}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[{ k: 'yes', e: '✓', col: '#4ade80' }, { k: 'maybe', e: '?', col: '#facc15' }, { k: 'no', e: '✕', col: '#f87171' }].map(btn => (
                    <button key={btn.k}
                      onClick={() => handleAttend(p.id, btn.k)}
                      style={{
                        width: 32, height: 32, borderRadius: 8, border: 'none', cursor: 'pointer',
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
          </div>
        </div>

        {/* CARD CONVOCATORIA */}
        <div>
          <div className="section-title">Card visual · {confirmed.length} confirmados</div>
          <div className="squad-card-wrap">
            <div ref={cardRef} className="squad-card">
              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: 20 }}>
                <Shield size={72} />
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', color: '#c9a84c', textTransform: 'uppercase', marginTop: 12, marginBottom: 2 }}>
                  Delta Entrerriano
                </div>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: 40, fontWeight: 900, letterSpacing: '0.06em', color: '#e8f0eb', textTransform: 'uppercase', lineHeight: 1 }}>
                  CONVOCADOS
                </div>
              </div>

              <div className="squad-card-line" />

              {/* Match info */}
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

              {/* Players list */}
              <div style={{ marginBottom: 16 }}>
                {confirmed.length === 0 ? (
                  <div style={{ textAlign: 'center', padding: '24px 0', color: '#3a6a4a', fontSize: 13 }}>
                    Sin confirmaciones aún
                  </div>
                ) : (
                  confirmed.map((p, i) => (
                    <div key={p.id} className="squad-name-item" style={{ borderBottom: i < confirmed.length - 1 ? '1px solid rgba(255,255,255,0.04)' : 'none' }}>
                      <div className="squad-name-num">{p.number}</div>
                      <div className="squad-name-text">{p.name.toUpperCase()}</div>
                      <div style={{ marginLeft: 'auto', fontSize: 10, color: '#3a6a4a', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{p.position}</div>
                    </div>
                  ))
                )}
              </div>

              <div className="squad-card-line" />

              {/* Footer */}
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

      {toast && <Toast msg={toast} onClose={() => setToast(null)} />}
    </div>
  );
}

function FeedPage({ posts, addPost }) {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: '', content: '', type: 'training' });

  const handleAddPost = () => {
    if (!form.title || !form.content) return;
    addPost({ ...form, date: new Date().toISOString().split('T')[0] });
    setForm({ title: '', content: '', type: 'training' });
    setShowForm(false);
  };

  const typeColors = { match: ['rgba(34,197,94,0.1)', '#4ade80'], squad: ['rgba(201,168,76,0.1)', '#c9a84c'], training: ['rgba(59,130,246,0.1)', '#60a5fa'] };
  const typeLabels = { match: 'Partido', squad: 'Convocatoria', training: 'Entrenamiento' };

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
              <option value="match">Partido</option>
              <option value="squad">Convocatoria</option>
              <option value="training">Entrenamiento</option>
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
          <div className="post-type-badge" style={{ background: typeColors[p.type]?.[0], color: typeColors[p.type]?.[1] }}>
            {typeLabels[p.type] || p.type}
          </div>
          <div className="post-title">{p.title}</div>
          <div className="post-body">{p.content}</div>
          <div className="post-date">{formatDate(p.date)}</div>
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

  const addPlayer = (p) => { const { id, ...data } = p; addDoc(collection(db, 'players'), data); };
  const addMatch  = (m) => { const { id, ...data } = m; addDoc(collection(db, 'matches'), data); };
  const addPost   = (p) => { addDoc(collection(db, 'posts'), { title: p.title, content: p.content, type: p.type, date: p.date, createdAt: serverTimestamp() }); };

  const loading = playersLoading && matchesLoading && postsLoading;

  useRegisterSW({ immediate: true });

  const pages = {
    dashboard: <Dashboard players={players} matches={matches} posts={posts} />,
    players: <PlayersPage players={players} addPlayer={addPlayer} />,
    matches: <MatchesPage matches={matches} addMatch={addMatch} />,
    convocatoria: <ConvocatoriaPage players={players} matches={matches} />,
    stats: <StatsPage players={players} />,
    feed: <FeedPage posts={posts} addPost={addPost} />,
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
    </>
  );
}