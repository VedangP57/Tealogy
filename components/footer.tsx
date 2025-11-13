import Image from "next/image"
import Link from "next/link"
import { memo } from "react"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Visible NAP Block for Local SEO */}
         <div className="pl-30 block md:hidden">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Teaology Café logo"
                width={140}
                height={50}
                className="object-contain brightness-0 invert"
                loading="lazy"
              />
            </Link>
          </div>
        <div className="mb-8 pb-8 border-b border-gray-300">
          <address className="not-italic text-center">
            <h3 className="text-xl font-bold text-accent mb-3">
              Teaology Café — Adajan, Surat
            </h3>
            <p className="text-sm text-slate-300 mb-2">
              Ground floor, Velocity Business Hub, G/7, LP Savani Rd, near
              Madhuvan Circle, Adajan, Surat, Gujarat 395009
            </p>
            <p className="text-sm text-slate-300 mb-2">
              Call:{" "}
              <a
                href="tel:+917019431834"
                className="hover:text-accent transition-colors font-semibold"
              >
                +91 70194 31834
              </a>
            </p>
            <p className="text-sm text-slate-300">
              Open daily 10:00 AM – 10:00 PM
            </p>
          </address>
        </div>

        <div>
          <p className="text-center text-sm text-slate-400">
            © {currentYear} Teaology Café. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer)
