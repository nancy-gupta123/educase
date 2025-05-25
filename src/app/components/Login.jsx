'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [entry, setEntry] = useState({
    emailAddress: '',
    password: '',
  });

  const router = useRouter();

  const dummyUsers = [
    {
      fullName: 'John Doe',
      emailAddress: 'john@example.com',
      password: 'password123',
    },
    {
      fullName: 'Jane Smith',
      emailAddress: 'jane@example.com',
      password: 'secret456',
    },
  ];

  const submitHandler = (e) => {
    e.preventDefault();

    // Check if the user exists in dummyUsers
    const matchedUser = dummyUsers.find(
      (user) =>
        user.emailAddress === entry.emailAddress &&
        user.password === entry.password
    );

    if (matchedUser) {
      // Store the logged-in user
      localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
      alert('Login successful!');
      router.push('/profile');
    } else {
      alert('Invalid credentials!');
    }
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEntry((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-purple-700 font-serif">
            Welcome Back to <span className="text-4xl text-purple-900">PopX</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={submitHandler} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="emailAddress"
              value={entry.emailAddress}
              onChange={changeHandler}
              required
              placeholder="you@example.com"
              className="w-full p-3 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={entry.password}
              onChange={changeHandler}
              required
              placeholder="••••••••"
              className="w-full p-3 border text-black border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{' '}
          <span
            onClick={() => router.push('/signin')}
            className="text-purple-600 font-medium cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

