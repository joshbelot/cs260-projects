// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration.  Replace this with the block from your firebase console.
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqiLnDUcP08hWX4_0m1Xmyg0QtdJv-wx8",
  authDomain: "fir-practice-33ccd.firebaseapp.com",
  projectId: "fir-practice-33ccd",
  storageBucket: "fir-practice-33ccd.appspot.com",
  messagingSenderId: "1073649478423",
  appId: "1:1073649478423:web:18982413623d4d2ca62552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
