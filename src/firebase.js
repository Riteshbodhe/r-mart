import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXrZrwpF9f2O6gTtRRa-ER6C-NQ8ogGDk",
  authDomain: "r--mart.firebaseapp.com",
  projectId: "r--mart",
  storageBucket: "r--mart.appspot.com",
  messagingSenderId: "895025352133",
  appId: "1:895025352133:web:5f72f77aa609ae7bf54fac",
  measurementId: "G-KE1RSMKBGV"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };