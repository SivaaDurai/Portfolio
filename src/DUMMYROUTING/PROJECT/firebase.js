// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
/*
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
*/
const firebaseConfig = {
  apiKey: "AIzaSyDULW5ocYECJBb52d4vFPFdlgW3nc4PkQA",
  authDomain: "portfolio-website-52a16.firebaseapp.com",
  projectId: "portfolio-website-52a16",
  storageBucket: "portfolio-website-52a16.firebasestorage.app",
  messagingSenderId: "593969817237",
  appId: "1:593969817237:web:fc2b05356f551503129d9c",
  measurementId: "G-RXB9LWYMGS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export authentication
export const auth = getAuth(app);
