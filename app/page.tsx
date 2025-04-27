"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  return (
    <div className="h-screen flex justify-center items-center flex-col bg-gray-200">
      <h1 className="text-4xl font-bold mb-8 font-serif">Inspirational Quotes</h1>
      <div className="bg-white rounded shadow-md p-8 w-80">
        <h2 className="text-3xl font-bold mb-4 text-center">Sign In</h2>
        <label htmlFor="username" className="block mb-2">
          Username
        </label>
        <input
          type="text"
          className="border rounded-s-sm p-2 w-full mb-4"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded-md px-4 py-2 w-full"
          onClick={() => login(username)}
          disabled={!username}
        >
          Login
        </button>
      </div>
    </div>
  );
}

