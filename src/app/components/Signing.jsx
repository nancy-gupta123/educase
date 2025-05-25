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
      <div className="bg-white p-8 w-full max-w-md rounded-xl shadow-2xl border border-gray-200 overflow-y-auto">
        <h1 className="text-3xl font-extrabold font-serif text-center text-purple-700 mb-1">
          Create your PopX account
        </h1>
        <p className="text-center text-gray-600 text-sm mb-6">Sign in to get started</p>

        <form onSubmit={submitHandler} className="space-y-5">
          <input
            type="text"
            name="fullName"
            value={entry.fullName}
            onChange={changeHandler}
            placeholder="Full Name"
            required
            className="w-full px-4 py-3 text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />

          <input
            type="text"
            name="phoneNumber"
            value={entry.phoneNumber}
            onChange={changeHandler}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-3 border text-black border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />

          <input
            type="email"
            name="emailAddress"
            value={entry.emailAddress}
            onChange={changeHandler}
            placeholder="Email Address"
            required
            className="w-full px-4 py-3  text-black border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
          />

          <input
            type="password"
            name="password"
            value={entry.password}
            onChange={changeHandler}
            placeholder="Password"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-purple-400 focus:outline-none text-black"
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

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 transition duration-200 text-white font-bold py-3 rounded-md shadow-md"
          >
            Create my account
          </button>
        </form>
      </div>
    </div>
  );
}
