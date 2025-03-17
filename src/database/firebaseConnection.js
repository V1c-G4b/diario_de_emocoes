
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, query, where }  from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDystxXG8jDF6aQlY-3AHXwxB9JJZnXEE8",
  authDomain: "meudiario-9c09b.firebaseapp.com",
  projectId: "meudiario-9c09b",
  storageBucket: "meudiario-9c09b.firebasestorage.app",
  messagingSenderId: "1054402279334",
  appId: "1:1054402279334:web:030824067a59e4e939c167",
  measurementId: "G-PDFLJTTVS6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs, query, where };