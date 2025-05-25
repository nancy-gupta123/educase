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
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="bg-white rounded-2xl shadow-xl w-[375px] max-w-full h-[650px] p-6 flex flex-col justify-between border border-purple-100">
        
        {/* Top Spacer */}
        <div className="flex-1"></div>

        {/* Main Content */}
        <div className="text-left">
          <h1 className="text-4xl font-extrabold text-purple-700 font-serif mb-2">
            Welcome to PopX
          </h1>
          <p className="text-gray-500 font-serif text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing<br />
            Dicta soluta commodi fugiat officiis necessitatibus.
          </p>
        </div>

        {/* Bottom Buttons */}
        <div className="mt-auto">
          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={handleSignInClick}
              className="py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition"
            >
              Create Account
            </button>
            <button
              onClick={handleLogInClick}
              className="py-3 bg-purple-100 text-purple-700 font-bold rounded-lg hover:bg-purple-200 transition"
            >
              Already Registered? Login
            </button>
          </div>
          <footer className="text-xs text-gray-400 font-mono text-left mt-6">
            PopX © 2025
          </footer>
        </div>
      </div>
    </div>
  );
}



