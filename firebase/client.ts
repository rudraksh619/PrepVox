// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBS8cKBnnUyfXvd4n-wsBJQ7QR-IPbRiPY",
  authDomain: "prepvox-ac091.firebaseapp.com",
  projectId: "prepvox-ac091",
  storageBucket: "prepvox-ac091.firebasestorage.app",
  messagingSenderId: "159088802779",
  appId: "1:159088802779:web:cc14b0f68a39ec0bca45fe",
  measurementId: "G-8PFE1CV2WV"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);

