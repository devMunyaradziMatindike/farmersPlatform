"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Menu, X, MapPin, Phone, Mail, Tractor, Wheat, Users, Star, ChevronRight } from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Wheat className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">FarmersZW</span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/marketplace"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Marketplace
                </Link>
                <Link
                  href="/equipment"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Equipment
                </Link>
                <Link
                  href="/livestock"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Livestock
                </Link>
                <Link
                  href="/jobs"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Jobs
                </Link>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="/events"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Events
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/auth">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link href="/create-listing">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  Post Listing
                </Button>
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-green-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/marketplace" className="block px-3 py-2 text-gray-600 hover:text-green-600">
                Marketplace
              </Link>
              <Link href="/equipment" className="block px-3 py-2 text-gray-600 hover:text-green-600">
                Equipment
              </Link>
              <Link href="/livestock" className="block px-3 py-2 text-gray-600 hover:text-green-600">
                Livestock
              </Link>
              <Link href="/jobs" className="block px-3 py-2 text-gray-600 hover:text-green-600">
                Jobs
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-600 hover:text-green-600">
                Services
              </Link>
              <Link href="/events" className="block px-3 py-2 text-gray-600 hover:text-green-600">
                Events
              </Link>
              <div className="border-t pt-2">
                <Link href="/auth" className="block px-3 py-2 text-gray-600 hover:text-green-600">
                  Sign In
                </Link>
                <Link href="/create-listing" className="block px-3 py-2 text-green-600 font-medium">
                  Post Listing
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Zimbabwe's Premier
                <span className="block text-yellow-400">Agricultural Platform</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Connect with farmers, buy quality produce, rent equipment, and grow your agricultural business across
                Zimbabwe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/marketplace">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    Explore Marketplace
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/create-listing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
                  >
                    Start Selling
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/hero-tractor-main.png"
                alt="Modern farming equipment"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-900">1,200+ Active Farmers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5,000+</div>
              <div className="text-gray-600">Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
              <div className="text-gray-600">Products Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">$2M+</div>
              <div className="text-gray-600">Transactions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Districts Covered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything You Need to Grow Your Farm</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From buying and selling produce to renting equipment and finding agricultural services, we've got you
              covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Wheat className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle>Fresh Produce Marketplace</CardTitle>
                <CardDescription>
                  Buy and sell fresh agricultural produce directly from farmers across Zimbabwe.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/marketplace">
                  <Button variant="outline" className="w-full bg-transparent">
                    Browse Products
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Tractor className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>Equipment Rental</CardTitle>
                <CardDescription>
                  Rent or lease modern farming equipment to boost your agricultural productivity.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/equipment">
                  <Button variant="outline" className="w-full bg-transparent">
                    View Equipment
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Agricultural Services</CardTitle>
                <CardDescription>
                  Connect with agricultural experts, consultants, and service providers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href="/services">
                  <Button variant="outline" className="w-full bg-transparent">
                    Find Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600">Quality agricultural products from verified farmers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/seedco-maize-sc573.png"
                  alt="Premium Maize Seeds"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-green-600">Featured</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Premium Maize Seeds</h3>
                <p className="text-gray-600 text-sm mb-3">High-yield SC573 variety</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">$45/bag</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/zfc-fertilizer-bag.jpg"
                  alt="Organic Fertilizer"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-blue-600">Popular</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Organic Fertilizer</h3>
                <p className="text-gray-600 text-sm mb-3">ZFC Premium Grade</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">$32/bag</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.6</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/fresh-farm-produce.png"
                  alt="Fresh Vegetables"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Fresh Vegetables</h3>
                <p className="text-gray-600 text-sm mb-3">Mixed seasonal produce</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">$15/crate</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.9</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-square relative overflow-hidden rounded-t-lg">
                <img src="/images/potatoes.png" alt="Premium Potatoes" className="w-full h-full object-cover" />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2">Premium Potatoes</h3>
                <p className="text-gray-600 text-sm mb-3">Grade A quality</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-green-600">$25/bag</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">4.7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/marketplace">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                View All Products
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Agricultural Business?</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join thousands of farmers who are already using our platform to buy, sell, and grow their agricultural
            businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
            <Link href="/create-listing">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Post Your First Listing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Wheat className="h-8 w-8 text-green-400" />
                <span className="ml-2 text-xl font-bold">FarmersZW</span>
              </div>
              <p className="text-gray-400 mb-4">
                Zimbabwe's premier agricultural marketplace connecting farmers, buyers, and service providers.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-xs">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/marketplace" className="hover:text-white">
                    Browse Products
                  </Link>
                </li>
                <li>
                  <Link href="/equipment" className="hover:text-white">
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link href="/livestock" className="hover:text-white">
                    Livestock
                  </Link>
                </li>
                <li>
                  <Link href="/create-listing" className="hover:text-white">
                    Sell Products
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Agricultural Services
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="hover:text-white">
                    Job Board
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/legal-compliance" className="hover:text-white">
                    Legal Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +263 4 123 456
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@farmerszw.com
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Harare, Zimbabwe
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FarmersZW. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
