"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "../Context/Authentication";

export default function Signup() {
  const { handleSignup } = useAuth();
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await handleSignup(username, email, password);

    if (success) {
      router.push("/login");   // 🔥 Redirect after signup
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md p-8 bg-gray-900 rounded-xl"
      >
        <h2 className="text-2xl text-white mb-6">Create Account</h2>

        <input
          type="text"
          placeholder="Username"
          className="w-full p-3 mb-4 rounded bg-gray-800 text-white"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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

        <button className="w-full bg-yellow-400 p-3 rounded font-bold">
          Sign Up
        </button>

        <p className="text-white mt-4">
          Already have account?{" "}
          <Link href="/login" className="text-yellow-400">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
