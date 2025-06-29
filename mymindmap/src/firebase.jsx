// src/firebase.js
import { initializeApp } from 'firebase/app';
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDahufpLkZYjR1-3smig8ik7pQ7F8KZimc",
  authDomain: "mymindmap-8f37d.firebaseapp.com",
  projectId: "mymindmap-8f37d",
  storageBucket: "mymindmap-8f37d.firebasestorage.app",
  messagingSenderId: "841046806619",
  appId: "1:841046806619:web:9ec12b82c004d8bd41af7e",
  measurementId: "G-QZL7K1GBGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;