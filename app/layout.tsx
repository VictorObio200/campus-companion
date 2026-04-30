import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campus Companion",
  description: "A student support app for campus life",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="navbar" aria-label="Main navigation">
            <Link href="/" className="logo">
              Campus Companion
            </Link>

            <div className="nav-links">
              <Link href="/events">Events</Link>
              <Link href="/directory">Directory</Link>
              <Link href="/helpdesk">Helpdesk</Link>
              <Link href="/reminders">Reminders</Link>
            </div>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}