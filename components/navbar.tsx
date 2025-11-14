"use client"

import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-white font-bold text-xl sm:text-2xl" style={{fontFamily: "var(--font-space-grotesk)"}}>
            PILOT
          </Link>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
              Home
            </Link>
            <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
              About
            </Link>
            <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
              Projects
            </Link>
            <Link href="#" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
