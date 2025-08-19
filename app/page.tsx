"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import NavigationLink from "@/components/navigation-link"
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
              <NavigationLink href="/marketplace" className="text-gray-600 hover:text-green-600">
                Marketplace
              </NavigationLink>
              <NavigationLink href="/equipment" className="text-gray-600 hover:text-green-600">
                Equipment
              </NavigationLink>
              <NavigationLink href="/jobs" className="text-gray-600 hover:text-green-600">
                Jobs
              </NavigationLink>
              <NavigationLink href="/services" className="text-gray-600 hover:text-green-600">
                Services
              </NavigationLink>
              <NavigationLink href="/events" className="text-gray-600 hover:text-green-600">
                Events
              </NavigationLink>
              <NavigationLink href="/livestock" className="text-gray-600 hover:text-green-600">
                Livestock
              </NavigationLink>
              <NavigationLink href="/legal-compliance" className="text-gray-600 hover:text-green-600">
                Legal Compliance
              </NavigationLink>
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
                 Musika Wethu
                 <span className="text-green-600"> - Our Market</span>
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
                 src="/images/mbare_market.png"
                 alt="Mbare Market - Zimbabwe's largest agricultural market showcasing fresh produce and local farmers"
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

             {/* Connection & Payment Section */}
       <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
         <div className="container mx-auto px-4">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-gray-900 mb-4">Direct Connections, Flexible Payments</h2>
             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
               Musika Wethu connects buyers and sellers directly, allowing you to negotiate and handle payments using your preferred method. 
               We facilitate the connection, you handle the transaction your way.
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
                   <Users className="h-6 w-6 text-green-600" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold mb-2">Direct Connections</h3>
                   <p className="text-gray-600">
                     Connect directly with buyers and sellers. Negotiate terms, prices, and payment methods that work best for both parties.
                   </p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                   <CreditCard className="h-6 w-6 text-blue-600" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold mb-2">Flexible Payment Options</h3>
                   <p className="text-gray-600">
                     Use EcoCash, OneMoney, InnBucks, bank transfers, or cash - whatever payment method you and your trading partner prefer.
                   </p>
                 </div>
               </div>

               <div className="flex items-start space-x-4">
                 <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                   <Shield className="h-6 w-6 text-purple-600" />
                 </div>
                 <div>
                   <h3 className="text-xl font-semibold mb-2">Secure Communication</h3>
                   <p className="text-gray-600">
                     Communicate safely through our platform while handling payments directly with your trading partners using trusted local methods.
                   </p>
                 </div>
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

      {/* Trusted Partners Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
          
                     <div className="relative overflow-hidden">
             <div className="flex animate-marquee">
               {/* Partners list */}
               <div className="flex space-x-8 flex-shrink-0">
                 {[
                   { name: "Ministry of Lands", logo: "/images/ministryoflandslogo.png" },
                   { name: "Agricultural Marketing Authority", logo: "/images/agriculturalmarketingauthority.jpg" },
                   { name: "Landini Tractors", logo: "/images/landini.jpg.png" },
                   { name: "Massey Ferguson", logo: "/images/masseyFerguson.png" },
                   { name: "John Deere", logo: "/images/john-deere-logo.jpg" },
                   { name: "SeedCo", logo: "/images/seedco.png" },
                   { name: "Commercial Farmers Union", logo: "/images/cfu.png" },
                   { name: "Windmill", logo: "/images/windmill.png" },
                   { name: "AFC", logo: "/images/afc.png" },
                 ].map((partner, index) => (
                   <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg min-w-[200px] shadow-sm hover:shadow-md transition-shadow">
                     <div className="w-32 h-16 flex items-center justify-center mb-2 p-2">
                       <Image
                         src={partner.logo}
                         alt={`${partner.name} logo`}
                         width={120}
                         height={60}
                         className="max-w-full max-h-full object-contain"
                         style={{ background: "transparent" }}
                       />
                     </div>
                     <p className="text-xs text-center text-gray-600 font-medium">{partner.name}</p>
                   </div>
                 ))}
               </div>

               {/* Duplicate for seamless loop */}
               <div className="flex space-x-8 flex-shrink-0">
                 {[
                   { name: "Ministry of Lands", logo: "/images/ministryoflandslogo.png" },
                   { name: "Agricultural Marketing Authority", logo: "/images/agriculturalmarketingauthority.jpg" },
                   { name: "Landini Tractors", logo: "/images/landini.jpg.png" },
                   { name: "Massey Ferguson", logo: "/images/masseyFerguson.png" },
                   { name: "John Deere", logo: "/images/john-deere-logo.jpg" },
                   { name: "SeedCo", logo: "/images/seedco.png" },
                   { name: "Commercial Farmers Union", logo: "/images/cfu.png" },
                   { name: "Windmill", logo: "/images/windmill.png" },
                   { name: "AFC", logo: "/images/afc.png" },
                 ].map((partner, index) => (
                   <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg min-w-[200px] shadow-sm hover:shadow-md transition-shadow">
                     <div className="w-32 h-16 flex items-center justify-center mb-2 p-2">
                       <Image
                         src={partner.logo}
                         alt={`${partner.name} logo`}
                         width={120}
                         height={60}
                         className="max-w-full max-h-full object-contain"
                         style={{ background: "transparent" }}
                       />
                     </div>
                     <p className="text-xs text-center text-gray-600 font-medium">{partner.name}</p>
                   </div>
                 ))}
               </div>
             </div>
           </div>

          <div className="text-center mt-8">
            <p className="text-lg text-gray-600 mb-6">
              Partnering with leading organizations to support Zimbabwe's agricultural sector
            </p>
            <Link href="/auth">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Join Our Network
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
                  <p>📞 +263 78 233 9300</p>
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
