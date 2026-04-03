'use strict';

const { onDocumentCreated, onDocumentUpdated } = require('firebase-functions/v2/firestore');
const { onSchedule } = require('firebase-functions/v2/scheduler');
const { initializeApp } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const { getMessaging } = require('firebase-admin/messaging');

initializeApp();

// ─── HELPERS ─────────────────────────────────────────────────────────────────

async function getTokens() {
  const snap = await getFirestore().collection('fcm_tokens').get();
  return snap.docs.map(d => d.id).filter(Boolean);
}

async function removeToken(token) {
  await getFirestore().collection('fcm_tokens').doc(token).delete().catch(() => {});
}

async function sendToAll(title, body) {
  const tokens = await getTokens();
  if (tokens.length === 0) return;

  const messaging = getMessaging();
  const BATCH_SIZE = 500;

  for (let i = 0; i < tokens.length; i += BATCH_SIZE) {
    const batch = tokens.slice(i, i + BATCH_SIZE);
    const res = await messaging.sendEachForMulticast({
      tokens: batch,
      notification: { title, body },
      webpush: {
        notification: {
          icon: '/deltaEntrerriano/icons/icon-192.png',
          badge: '/deltaEntrerriano/icons/icon-192.png',
          vibrate: [200, 100, 200],
        },
      },
    });

    // Eliminar tokens inválidos/vencidos de Firestore
    res.responses.forEach((r, idx) => {
      const code = r.error?.code ?? '';
      if (
        !r.success &&
        (code === 'messaging/registration-token-not-registered' ||
          code === 'messaging/invalid-registration-token')
      ) {
        removeToken(batch[idx]);
      }
    });
  }
}

// ─── 1. NUEVO PARTIDO AGREGADO ────────────────────────────────────────────────
exports.onMatchCreated = onDocumentCreated('matches/{id}', async (event) => {
  const match = event.data?.data();
  if (!match) return;

  const dateStr = match.date
    ? new Date(match.date + 'T00:00:00').toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'long',
      })
    : '';

  await sendToAll(
    '📅 Nuevo Partido Programado',
    `vs ${match.rival} · ${dateStr} ${match.time ?? ''}`.trim(),
  );
});

// ─── 2. RESULTADO CARGADO ─────────────────────────────────────────────────────
exports.onMatchUpdated = onDocumentUpdated('matches/{id}', async (event) => {
  const before = event.data?.before.data();
  const after  = event.data?.after.data();
  if (!before || !after) return;

  // Solo cuando se agrega el resultado por primera vez
  if (!before.result && after.result) {
    const [a, b] = after.result.split('-').map(Number);
    const win  = after.home ? a > b : b > a;
    const draw = a === b;
    const emoji = draw ? '🤝' : win ? '🏆' : '💪';
    const label = draw ? 'Empate' : win ? 'Victoria' : 'Derrota';

    await sendToAll(
      `${emoji} Resultado · Delta ${after.result} vs ${after.rival}`,
      label,
    );
  }
});

// ─── 3. NUEVA NOVEDAD EN EL FEED ─────────────────────────────────────────────
exports.onPostCreated = onDocumentCreated('posts/{id}', async (event) => {
  const post = event.data?.data();
  if (!post) return;

  await sendToAll(
    `📰 ${post.title}`,
    (post.content ?? 'Nueva novedad del equipo').substring(0, 120),
  );
});

// ─── 4. RECORDATORIO 2 HORAS ANTES DEL PARTIDO ───────────────────────────────
// Corre cada 30 minutos en horario de Argentina
exports.matchDayReminder = onSchedule(
  { schedule: 'every 30 minutes', timeZone: 'America/Argentina/Buenos_Aires' },
  async () => {
    const db  = getFirestore();
    const now = Date.now();

    const snap = await db
      .collection('matches')
      .where('status', '==', 'upcoming')
      .get();

    for (const matchDoc of snap.docs) {
      const match = matchDoc.data();

      // Saltar si ya se mandó el aviso de 2h
      if (match.notified2h) continue;

      const time = match.time ?? '00:00';
      // Parsear en horario de Argentina (UTC-3)
      const matchDateTime = new Date(`${match.date}T${time}:00-03:00`);
      const diffMin = (matchDateTime.getTime() - now) / 60_000;

      // Ventana: 110-130 minutos antes (2h ± 10 min) para no disparar dos veces
      if (diffMin >= 110 && diffMin <= 130) {
        await sendToAll(
          '⏰ ¡Partido en 2 horas!',
          `vs ${match.rival} · Revisá los convocados 📋`,
        );
        await matchDoc.ref.update({ notified2h: true });
      }
    }
  },
);
