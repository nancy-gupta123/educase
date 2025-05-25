'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  function handleSignInClick() {
    router.push('/signin'); // fixed path
  }

  function handleLogInClick() {
    router.push('/login'); // fixed path
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-50">
      <div className="bg-slate-100 flex flex-col items-center p-10 text-center rounded-xl shadow-lg">
        <h1 className=" font-serif text-4xl m-5 text-purple-700 font-extrabold">
          Welcome to PopX
        </h1>
        <p className="text-slate-500 font-serif m-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
          Dicta soluta commodi fugiat officiis necessitatibus.
        </p>
        <button
          className="py-2 bg-gray-300 text-black  hover:bg-purple-700 hover:text-white shadow  font-bold px-10 font-serif rounded m-2"
          onClick={handleSignInClick}
        >
          Create Account
        </button>
        <button
          className="py-2 bg-gray-300  text-black hover:bg-purple-700 shadow hover:text-white font-bold px-10 rounded m-2"
          onClick={handleLogInClick}
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
