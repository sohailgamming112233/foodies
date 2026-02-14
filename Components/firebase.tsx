import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtgp64bGFqzqT9UIEfoXNMD8AtnKDfOiE",
  authDomain: "foodies-91abf.firebaseapp.com",
  projectId: "foodies-91abf",
  storageBucket: "foodies-91abf.firebasestorage.app",
  messagingSenderId: "42297069628",
  appId: "1:42297069628:web:bb570bde4c6be1a28a3339",
};

const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);

