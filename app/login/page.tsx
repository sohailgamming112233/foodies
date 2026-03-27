"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../context/Authentication";

export default function Login() {
  const { handleLogin, handleGoogleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h2>

        {/* Email */}
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded-lg bg-gray-800/70 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {/* Login Button */}
        <button className="w-full bg-yellow-400 text-black p-3 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 shadow-md">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-1 border-gray-600" />
          <span className="px-3 text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-600" />
        </div>

        {/* Google Button */}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black p-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300 shadow-md"
        >
          Continue with Google
        </button>

        {/* Signup */}
        <p className="text-center text-gray-300 mt-5 text-sm">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-yellow-400 hover:underline">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
