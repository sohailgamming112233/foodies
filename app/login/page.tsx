"use client";

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../Components/firebase";
import { GoogleAuthProvider } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Login Successful ");
      router.replace("/home");
    } catch (error) {
      toast.error(error.message);
    }
  };


const handleGoogleLogin = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({
      prompt: "select_account",
    });

    await signInWithPopup(auth, googleProvider);

    toast.success("Google Login Successful ");
    router.replace("/home");
  } catch (error) {
    console.log(error);
    toast.error(error.message);
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">
           Login to Your Account 
        </h2>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 rounded-xl bg-black/40 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 rounded-xl bg-black/40 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold py-3 rounded-xl hover:scale-105 transition duration-300 shadow-lg mb-4"
        >
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black font-semibold py-3 rounded-xl hover:bg-gray-200 transition duration-300 shadow-md mb-4"
        >
          Continue with Google
        </button>

        <p className="text-gray-300 text-center">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-yellow-400 hover:underline">
            Sign Up
          </Link>
        </p>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
