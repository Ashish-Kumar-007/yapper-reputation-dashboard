// app/page.tsx
"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function HomePage() {
  const [username, setUsername] = useState("");

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-sm w-full text-center">
        <div className="mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Sign in to Yapper
          </h1>
          <p className="text-gray-600">
            Welcome back! Please sign in to continue.
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter Twitter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-3 mt-6 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
        <button
          onClick={() => signIn("credentials", { username })}
          className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white cursor-pointer text-lg font-bold px-8 py-3 rounded-lg hover:bg-gradient-to-l focus:outline-none transition"
        >
          Sign in as {username || "elonmusk"}
        </button>
      </div>
    </div>
  );
}
