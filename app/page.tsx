"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const { login } = useAuth();

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <input
          type="text"
          className="border p-2 w-full mb-4"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 w-full rounded"
          onClick={() => login(username)}
        >
          Login
        </button>
      </div>
    </div>
  );
}
