// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-ef84e.firebaseapp.com",
  projectId: "estate-ef84e",
  storageBucket: "estate-ef84e.appspot.com",
  messagingSenderId: "344218404380",
  appId: "1:344218404380:web:2c92a452c0eeccfb1c41d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);