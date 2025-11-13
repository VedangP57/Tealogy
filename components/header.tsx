"use client"

import Image from "next/image"
import Link from "next/link"
import { memo } from "react"

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo only */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Teaology Café logo"
            width={140} // adjust to your logo’s natural size
            height={50}
            priority
            className="object-contain"
          />
        </Link>

        {/* Right-side nav */}
        <nav className="flex items-center gap-6">
          <Link
            href="/menu"
            className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
          >
            Menu
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default memo(Header)
