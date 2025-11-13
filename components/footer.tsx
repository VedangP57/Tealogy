import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="Teaology Café logo"
                width={140}
                height={50}
                className="object-contain brightness-0 invert"
              />
            </Link>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <div className="text-sm text-slate-300 space-y-3">
              <div>
                <p className="font-semibold text-white mb-1">Address</p>
                <p>
                  Ground floor, Velocity Business Hub, G/7, LP Savani Rd, near Madhuvan Circle, TGB, Adajan Gam, Adajan,
                  Surat, Gujarat 395009
                </p>
              </div>
              <div>
                <p className="font-semibold text-white">Phone</p>
                <a href="tel:07019431834" className="hover:text-accent transition-colors">
                  070194 31834
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Hours</h4>
            <p className="text-sm text-slate-300">Mon - Sun: 9:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-8">
          <p className="text-center text-sm text-slate-400">© {currentYear} Tealogy Cafe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
