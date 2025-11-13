"use client"

import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo only */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Teaology Café logo"
            width={140}  // adjust to your logo’s natural size
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* Right-side nav */}
        <nav className="flex items-center gap-6">
          {/* <Link
            href="/login"
            className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
          >
            Login
          </Link> */}

          {/* <button
            aria-label="Open cart"
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            type="button"
          >
            <ShoppingCart size={20} className="text-primary" />
          </button> */}
        </nav>
      </div>
    </header>
  )
}
