'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Signin() {
  const [users, setUsers] = useState([]);
  const [entry, setEntry] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    agency: '',
  });

  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();

    const emailExists = users.some((user) => user.emailAddress === entry.emailAddress);
    if (emailExists) {
      alert('User already exists.');
      router.push('/login');
    } else {
      const newUser = { ...entry };
      setUsers((prev) => [...prev, newUser]);
      alert('Account created successfully');
      router.push('/login');
    }
  };

  const changeHandler = (e) => {
    const { name, value, type, checked } = e.target;
    setEntry((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 w-full max-w-sm rounded-2xl shadow-2xl border border-gray-200 overflow-y-auto min-h-[650px] flex flex-col"
      >
        <h1 className="text-3xl font-extrabold font-serif text-left text-purple-700 mb-1">
          Create your PopX account
        </h1>
        <p className="text-left text-gray-600 text-sm mb-6">Sign in to get started</p>

        {/* Inputs & radio buttons container grows to push button down */}
        <div className="flex-grow space-y-5">
          <input
            type="text"
            name="fullName"
            value={entry.fullName}
            onChange={changeHandler}
            placeholder="Full Name"
            required
            className="w-full p-3 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="text"
            name="phoneNumber"
            value={entry.phoneNumber}
            onChange={changeHandler}
            placeholder="Phone Number"
            required
            className="w-full p-3 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="emailAddress"
            value={entry.emailAddress}
            onChange={changeHandler}
            placeholder="Email Address"
            required
            className="w-full p-3 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="password"
            name="password"
            value={entry.password}
            onChange={changeHandler}
            placeholder="Password"
            required
            className="w-full p-3 border border-gray-300 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div>
            <p className="font-medium text-gray-700 mb-2">
              Are you an Agency? <span className="text-red-500">*</span>
            </p>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="Yes"
                  onChange={changeHandler}
                  checked={entry.agency === 'Yes'}
                  required
                  className="accent-purple-600 text-black"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  value="No"
                  onChange={changeHandler}
                  checked={entry.agency === 'No'}
                  required
                  className="accent-purple-600 text-black"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>
        </div>

        {/* Button pushed to bottom with margin-top */}
        <button
          type="submit"
          className="w-full py-3 mt-8 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          Create my account
        </button>
      </form>
    </div>
  );
}
