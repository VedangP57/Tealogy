import { Clock, MapPin, Phone } from "lucide-react"
import type { Metadata } from "next"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata: Metadata = {
  title: "Contact Us — Teaology Café Adajan, Surat",
  description:
    "Visit Teaology Café in Adajan, Surat. Ground floor, Velocity Business Hub, near Madhuvan Circle. Call +91 70194 31834. Open 10:00 AM–10:00 PM daily.",
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4 text-center">
              Visit Us
            </h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Come experience handcrafted teas, shakes, and bites at our café in
              Adajan, Surat.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Contact Information */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <address className="not-italic">
                      <h3 className="font-semibold text-lg text-primary mb-2">
                        Address
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Ground floor, Velocity Business Hub, G/7, LP Savani Rd,
                        near Madhuvan Circle, TGB, Adajan Gam, Adajan, Surat,
                        Gujarat 395009
                      </p>
                    </address>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">
                        Phone
                      </h3>
                      <a
                        href="tel:+917019431834"
                        className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        +91 70194 31834
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border border-border">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-primary mb-2">
                        Opening Hours
                      </h3>
                      <p className="text-muted-foreground">Monday - Sunday</p>
                      <p className="text-muted-foreground font-semibold">
                        10:00 AM – 10:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+917019431834"
                    className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                  >
                    Call Now
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=21.192571,72.799736"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors text-center"
                  >
                    Get Directions
                  </a>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5!2d72.799736!3d21.192571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDExJzMzLjMiTiA3MsKwNDcnNTkuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Teaology Café location"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
