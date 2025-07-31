// app/layout.tsx
import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'
import { manrope } from '@/app/ui/fonts';

export const metadata = {
  title: 'Math Made Simple',
  description: 'Explore. Understand. Thrive.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative text-gray-100">
        {/* Background image */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1] opacity-40"
          style={{ backgroundImage: "url('/background.png')" }}
        ></div>

        {/* Navigation Bar */}
        <header className="bg-blue-900/80 backdrop-blur-sm shadow-md sticky top-0 z-10">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-end space-x-4 text-white">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/tutoring" className="hover:underline">Tutoring</Link>
            <Link href="/events" className="hover:underline">Community Events</Link>
            <Link href="/about" className="hover:underline">About Us</Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className={`${manrope.className} max-w-5xl mx-auto px-6 py-10 backdrop-blur-md bg-white/80 rounded-lg shadow-xl my-10`}>
          {children}
        </main>
      </body>
    </html>
  )
}
