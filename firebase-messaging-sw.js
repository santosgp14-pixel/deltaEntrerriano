// Service Worker para Firebase Cloud Messaging (notificaciones en segundo plano)
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDz0SrMIVShBrG78XKrrnTwQ--vaqk3j0o",
  authDomain: "delta-entrerriano.firebaseapp.com",
  projectId: "delta-entrerriano",
  storageBucket: "delta-entrerriano.firebasestorage.app",
  messagingSenderId: "508752370141",
  appId: "1:508752370141:web:fbfc975d256bfa760c3e34",
});

const messaging = firebase.messaging();

// Maneja notificaciones cuando la app está en segundo plano o cerrada
messaging.onBackgroundMessage((payload) => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'Delta Entrerriano', {
    body: body || '',
    icon: icon || '/deltaEntrerriano/icons/icon-192.png',
    badge: '/deltaEntrerriano/icons/icon-192.png',
    data: payload.data || {},
  });
});
