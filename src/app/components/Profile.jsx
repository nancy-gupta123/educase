'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      alert('Please login first!');
      router.push('/');
    }
  }, []);

  if (!user) return null;

  return (
    <div className="max-w-sm mx-auto border rounded-md overflow-hidden shadow-sm bg-white">
      <div className="px-4 py-3 border-b bg-gray-50">
        <h2 className="text-gray-700 font-semibold text-sm">Account Settings</h2>
      </div>

      <div className="flex items-start gap-4 px-4 py-4">
        <div className="relative">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <span className="absolute bottom-0 right-0 bg-purple-600 border-2 border-white rounded-full p-1">
            <svg
              className="w-3 h-3 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.52 3.73 10.1 8.78 11.49.64.12.87-.28.87-.61 0-.3-.01-1.1-.02-2.15-3.57.78-4.32-1.72-4.32-1.72-.58-1.48-1.42-1.87-1.42-1.87-1.16-.79.09-.77.09-.77 1.28.09 1.95 1.32 1.95 1.32 1.14 1.95 2.99 1.39 3.72 1.06.11-.83.45-1.39.82-1.71-2.85-.32-5.85-1.43-5.85-6.36 0-1.4.5-2.54 1.32-3.44-.13-.33-.58-1.65.13-3.44 0 0 1.08-.35 3.54 1.32a12.4 12.4 0 0 1 6.44 0c2.46-1.67 3.54-1.32 3.54-1.32.71 1.79.26 3.11.13 3.44.82.9 1.32 2.04 1.32 3.44 0 4.94-3 6.03-5.86 6.35.46.4.87 1.18.87 2.38 0 1.72-.02 3.11-.02 3.53 0 .33.23.73.88.61C20.27 22.1 24 17.52 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-md font-semibold text-gray-800">{user.fullName}</h3>
          <p className="text-sm text-gray-500">{user.emailAddress}</p>

          
        </div>
        
      </div>

      <div className="h-64 border-t bg-gray-50" ><p className="mt-2 text-sm text-gray-600 leading-snug">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p></div>
    </div>
  );
}
