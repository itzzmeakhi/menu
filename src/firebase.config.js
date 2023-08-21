import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA0yP468a6AQiCNveMkFnCDYKviTu1Uoec",
  authDomain: "menu-2d5a4.firebaseapp.com",
  projectId: "menu-2d5a4",
  storageBucket: "menu-2d5a4.appspot.com",
  messagingSenderId: "442848789566",
  appId: "1:442848789566:web:bc5791833e216a63befd6f",
  measurementId: "G-V325RRBQL2"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'page_loaded');

export const db = getFirestore(app);
export { analytics };