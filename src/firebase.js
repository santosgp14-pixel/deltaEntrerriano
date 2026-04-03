import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDz0SrMIVShBrG78XKrrnTwQ--vaqk3j0o",
  authDomain: "delta-entrerriano.firebaseapp.com",
  projectId: "delta-entrerriano",
  storageBucket: "delta-entrerriano.firebasestorage.app",
  messagingSenderId: "508752370141",
  appId: "1:508752370141:web:fbfc975d256bfa760c3e34",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const messaging = ('serviceWorker' in navigator) ? getMessaging(app) : null;
