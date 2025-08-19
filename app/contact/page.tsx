"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/musika-wethu-logo.png"
                alt="Musika Wethu - Zimbabwe's Agricultural Marketplace"
                width={270}
                height={90}
                className="h-20 w-auto"
                style={{ background: "transparent" }}
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-600 hover:text-green-600">
                Marketplace
              </Link>
              <Link href="/equipment" className="text-gray-600 hover:text-green-600">
                Equipment
              </Link>
              <Link href="/jobs" className="text-gray-600 hover:text-green-600">
                Jobs
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-green-600">
                Services
              </Link>
              <Link href="/events" className="text-gray-600 hover:text-green-600">
                Events
              </Link>
              <Link href="/livestock" className="text-gray-600 hover:text-green-600">
                Livestock
              </Link>
              <Link href="/legal-compliance" className="text-gray-600 hover:text-green-600">
                Legal Compliance
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Link href="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact <span className="text-green-600">Musika Wethu</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us for any questions, support, or partnership opportunities. 
            We're here to help you succeed in your agricultural journey.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              {/* Phone & WhatsApp */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Call & WhatsApp</h3>
                    <p className="text-gray-600 mb-3">+263 78 233 9300</p>
                    <div className="flex space-x-3">
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => window.open('tel:+263 78 233 9300')}
                      >
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                        onClick={() => window.open('https://wa.me/263782339300')}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600 mb-3">info@nessosystems.co.zw</p>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => window.open('mailto:info@nessosystems.co.zw')}
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Address */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
                    <p className="text-gray-600 mb-3">
                      Farm 42 Coburn Estate<br />
                      Chegutu, Zimbabwe
                    </p>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-purple-600 text-purple-600 hover:bg-purple-50"
                      onClick={() => window.open('https://maps.app.goo.gl/YhVQ42a3BHpCVmVZ6')}
                    >
                      <MapPin className="h-4 w-4 mr-2" />
                      View on Google Maps
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 3:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
              
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                                         <iframe
                       src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Chegutu+Zimbabwe"
                       width="100%"
                       height="400"
                       style={{ border: 0 }}
                       allowFullScreen
                       loading="lazy"
                       referrerPolicy="no-referrer-when-downgrade"
                       title="Matindike Farm Location"
                     ></iframe>
                    <div className="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-lg">
                      <h3 className="font-semibold text-green-600">Matindike Farm</h3>
                      <p className="text-sm text-gray-600">Farm 42 Coburn Estate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

                             <div className="bg-green-50 p-6 rounded-lg">
                 <h3 className="text-lg font-semibold text-green-800 mb-3">Why visit Nesso Systems Group of farms</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    See our agricultural operations firsthand
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Meet our team and discuss partnerships
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Experience sustainable farming practices
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                    Learn about our technology solutions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of Zimbabwean farmers already using Musika Wethu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" variant="secondary">
                Create Free Account
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Explore Marketplace
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/musika-wethu-logo.png"
                  alt="Musika Wethu"
                  width={180}
                  height={60}
                  className="h-12 w-auto brightness-0 invert"
                  style={{ background: "transparent" }}
                />
              </div>
              <p className="text-gray-400">
                Zimbabwe's premier agricultural marketplace connecting farmers, buyers, and service providers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/marketplace" className="hover:text-white">
                    Farm Produce
                  </Link>
                </li>
                <li>
                  <Link href="/equipment" className="hover:text-white">
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="hover:text-white">
                    Jobs & Labor
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 +263 78 233 9300</p>
                <p>📧 info@nessosystems.co.zw</p>
                <p>📍 Farm 42 Coburn Estate, Chegutu</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Nesso Systems (Pvt) Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
