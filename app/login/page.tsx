"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "../Context/Authentication";

export default function Login() {
  const { handleLogin, handleGoogleLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md p-8 bg-gray-900 rounded-xl"
      >
        <h2 className="text-2xl text-white mb-6">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-yellow-400 p-3 rounded font-bold mb-3">
          Login
        </button>

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black p-3 rounded font-bold"
        >
          Continue with Google
        </button>

        <p className="text-white mt-4">
          Don’t have account?{" "}
          <Link href="/signup" className="text-yellow-400">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
