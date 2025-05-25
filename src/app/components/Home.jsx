'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  function handleSignInClick() {
    router.push('/signin');
  }

  function handleLogInClick() {
    router.push('/login');
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-50 md:hidden">
      <div className="bg-slate-100 flex flex-col items-center p-6 text-center rounded-xl shadow-lg w-full max-w-sm">
        <h1 className="font-serif text-3xl mb-4 text-purple-700 font-extrabold">
          Welcome to PopX
        </h1>
        <p className="text-slate-500 font-serif text-sm mb-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Dicta soluta commodi fugiat officiis necessitatibus.
        </p>
        <button
          className="py-2 w-full bg-gray-300 text-black hover:bg-purple-700 hover:text-white shadow font-bold px-6 font-serif rounded mb-3"
          onClick={handleSignInClick}
        >
          Create Account
        </button>
        <button
          className="py-2 w-full bg-gray-300 text-black hover:bg-purple-700 hover:text-white shadow font-bold px-6 font-serif rounded"
          onClick={handleLogInClick}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}

