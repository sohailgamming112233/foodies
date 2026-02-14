"use client";

import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../Components/firebase";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const router = useRouter();

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful");
      router.replace("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });

      await signInWithPopup(auth, provider);
      toast.success("Google Login Successful");
      router.replace("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleSignup = async (username, email, password) => {
    try {
      const userCredential =
        await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: username,
      });

      toast.success("Account Created Successfully");
      router.replace("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{ handleLogin, handleGoogleLogin, handleSignup }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
