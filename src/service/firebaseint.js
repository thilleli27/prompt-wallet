// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbQNi4Yty5nFbJTtVHfEujqbhR7FifhqE",
  authDomain: "prompt-wallet-81bf7.firebaseapp.com",
  projectId: "prompt-wallet-81bf7",
  storageBucket: "prompt-wallet-81bf7.firebasestorage.app",
  messagingSenderId: "1072509290556",
  appId: "1:1072509290556:web:f6d3c8aa13f231e3865b39",
  measurementId: "G-7TE03KNKFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
