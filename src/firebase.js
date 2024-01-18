// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK6JYQELFQqOT9omNsTbj8S8r3vIFZP6g",
  authDomain: "react-firebase-auth-6fffe.firebaseapp.com",
  projectId: "react-firebase-auth-6fffe",
  storageBucket: "react-firebase-auth-6fffe.appspot.com",
  messagingSenderId: "895201781535",
  appId: "1:895201781535:web:1f283e6be1d1a13f45b22a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;