// app/layout.jsx
import './globals.css';

export const metadata = {
  title: 'PopX',
  description: 'Next.js version of PopX onboarding',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
