'use client';
import { usePathname } from 'next/navigation';
import Home from './components/Home';
import Signing from './components/Signing';
import Login from './components/Login';
import Profile from './components/Profile';

export default function App() {
  const path = usePathname();

  if (path === "/") return <Home />;
  if (path === "/signin") return <Signing />;
  if (path === "/login") return <Login />;
  if (path === "/profile") return <Profile />;

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-slate-50">
      <h1 className="p-10 bg-slate-200 text-black font-semibold text-5xl font-serif rounded-md">
        PAGE NOT FOUND :(
      </h1>
    </div>
  );
}
