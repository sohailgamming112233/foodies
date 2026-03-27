import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtgp64bGFqzqT9UIEfoXNMD8AtnKDfOiE",
  authDomain: "foodies-91abf.firebaseapp.com",
  projectId: "foodies-91abf",
  storageBucket: "foodies-91abf.appspot.com",
  messagingSenderId: "42297069628",
  appId: "1:42297069628:web:bb570bde4c6be1a28a3339",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
