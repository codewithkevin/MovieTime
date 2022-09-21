// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhwim4dcpJ_jA91W9YE_PMmAHl3m-6DRU",
  authDomain: "meme-5dd7e.firebaseapp.com",
  projectId: "meme-5dd7e",
  storageBucket: "meme-5dd7e.appspot.com",
  messagingSenderId: "594309913272",
  appId: "1:594309913272:web:ee835f43b931d7723cb24d",
  measurementId: "G-2XFR4R53RH",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
