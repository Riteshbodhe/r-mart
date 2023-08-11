import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyCXrZrwpF9f2O6gTtRRa-ER6C-NQ8ogGDk",
  authDomain: "r--mart.firebaseapp.com",
  projectId: "r--mart",
  storageBucket: "r--mart.appspot.com",
  messagingSenderId: "895025352133",
  appId: "1:895025352133:web:5f72f77aa609ae7bf54fac",
  measurementId: "G-KE1RSMKBGV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);