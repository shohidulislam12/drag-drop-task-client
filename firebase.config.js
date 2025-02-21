
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBtZLmNkwUZMxDNFTuPMHhRceHm-8hAhwU",
  authDomain: "emaol-firebase-auth.firebaseapp.com",
  projectId: "emaol-firebase-auth",
  storageBucket: "emaol-firebase-auth.firebasestorage.app",
  messagingSenderId: "141436360468",
  appId: "1:141436360468:web:cfb7ef511971f0c8825401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);