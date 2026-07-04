import './globals.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jesus Salas',
  description: 'Personal website boilerplate',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="brand">Jesus Salas</div>
          <nav className="site-nav">
            <Link href="/">Home</Link>
            <Link href="/Hobbies">Hobbies</Link>
            <Link href="/Photography">Photography</Link>
          </nav>
        </header>
        <main className="app-shell">{children}</main>
      </body>
    </html>
  );
}
