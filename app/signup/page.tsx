"use client";

import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../Components/firebase";
import { toast, ToastContainer } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential =
        await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(userCredential.user, {
        displayName: username,
      });

      toast.success("Account Created Successfully ");
      router.replace("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-4">
      <form
        onSubmit={handleSignup}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold text-center text-white mb-8">
          Create Account 
        </h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded-xl bg-black/40 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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
          className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold py-3 rounded-xl hover:scale-105 transition duration-300 shadow-lg"
        >
          Sign Up
        </button>

        <p className="text-gray-300 text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-yellow-400 hover:underline">
            Login
          </Link>
        </p>
      </form>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
