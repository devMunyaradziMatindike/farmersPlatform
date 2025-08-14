"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Users,
  Tractor,
  Briefcase,
  Calendar,
  ShoppingCart,
  MapPin,
  Phone,
  MessageCircle,
  CreditCard,
  Shield,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All", icon: ShoppingCart },
    { id: "produce", name: "Farm Produce", icon: ShoppingCart },
    { id: "equipment", name: "Equipment Rental", icon: Tractor },
    { id: "jobs", name: "Jobs & Labor", icon: Briefcase },
    { id: "services", name: "Services", icon: Users },
    { id: "events", name: "Events", icon: Calendar },
  ]

  const featuredListings = [
    {
      id: 1,
      title: "Fresh Maize - 50 Tonnes Available",
      price: "$800/tonne",
      location: "Harare, Zimbabwe",
      seller: "John Mukamuri",
      image: "/placeholder.svg?height=200&width=300",
      category: "produce",
      type: "Product",
    },
    {
      id: 2,
      title: "John Deere Tractor for Hire",
      price: "$45/day",
      location: "Bulawayo, Zimbabwe",
      seller: "Agri-Rent Services",
      image: "/placeholder.svg?height=200&width=300",
      category: "equipment",
      type: "Equipment",
    },
    {
      id: 3,
      title: "Experienced Farm Manager Needed",
      price: "$600/month",
      location: "Mutare, Zimbabwe",
      seller: "Green Valley Farms",
      image: "/placeholder.svg?height=200&width=300",
      category: "jobs",
      type: "Job",
    },
    {
      id: 4,
      title: "Agricultural Consultant Available",
      price: "$50/consultation",
      location: "Gweru, Zimbabwe",
      seller: "Dr. Sarah Chikwanha",
      image: "/placeholder.svg?height=200&width=300",
      category: "services",
      type: "Service",
    },
  ]

  const filteredListings =
    activeCategory === "all"
      ? featuredListings
      : featuredListings.filter((listing) => listing.category === activeCategory)

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
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Zimbabwe's Complete
                <span className="text-green-600"> Agricultural Marketplace</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with farmers, rent equipment, find workers, hire experts, and discover agricultural events.
                Everything you need for successful farming in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/auth">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Start Selling <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/marketplace">
                  <Button size="lg" variant="outline">
                    Browse Marketplace
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-tractor-main.png"
                alt="Modern John Deere tractor in agricultural field - Zimbabwe farming equipment"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Marketplace</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-lg ${
                    activeCategory === category.id ? "ring-2 ring-green-600 bg-green-50" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <CardContent className="p-6 text-center">
                    <Icon
                      className={`h-8 w-8 mx-auto mb-3 ${
                        activeCategory === category.id ? "text-green-600" : "text-gray-600"
                      }`}
                    />
                    <p className="font-medium text-sm">{category.name}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Featured Listings */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-green-600">{listing.type}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{listing.title}</h3>
                  <p className="text-2xl font-bold text-green-600 mb-2">{listing.price}</p>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{listing.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">by {listing.seller}</p>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
                      <Phone className="h-4 w-4 mr-1" />
                      Call
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Integration Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Seamless Payment Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Supporting Zimbabwe's agricultural value chain with integrated local payment methods. Pay and get paid
              using your preferred mobile money or banking solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <Image
                  src="/images/payment-partners.png"
                  alt="Payment Partners - EcoCash, OneMoney, InnBucks, BancABC Visa"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Multiple Payment Options</h3>
                  <p className="text-gray-600">
                    Accept payments through EcoCash, OneMoney, InnBucks, and major banking cards. Choose what works best
                    for your customers.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                  <p className="text-gray-600">
                    All payments are processed through secure, regulated financial institutions ensuring your money is
                    safe and transactions are protected.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Settlements</h3>
                  <p className="text-gray-600">
                    Get paid instantly when transactions are completed. No waiting periods - your money is available
                    immediately for reinvestment in your farm.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/auth">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700">
                    Start Accepting Payments
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Musika Wethu?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Marketplace</h3>
              <p className="text-gray-600">Buy and sell farm produce, chemicals, and equipment all in one place.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tractor className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipment Rental</h3>
              <p className="text-gray-600">
                Rent tractors, harvesters, and other farming equipment when you need them.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Find Workers & Experts</h3>
              <p className="text-gray-600">Connect with farmworkers, consultants, and agricultural experts.</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Local Focus</h3>
              <p className="text-gray-600">Find everything you need within your local area across Zimbabwe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Farming Business?</h2>
          <p className="text-xl text-green-100 mb-8">Join thousands of Zimbabwean farmers already using Musika Wethu</p>
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
                <p>📞 +263 123 456 789</p>
                <p>📧 info@musikawethu.co.zw</p>
                <p>📍 Harare, Zimbabwe</p>
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
