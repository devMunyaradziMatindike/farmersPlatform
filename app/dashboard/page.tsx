"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import NavigationLink from "@/components/navigation-link"
import { Bell, Plus, ShoppingCart, Phone, MessageCircle, Eye, Heart, Settings, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    { title: "Active Listings", value: "12", change: "+2 this week", icon: ShoppingCart },
    { title: "Total Views", value: "1,247", change: "+15% this month", icon: Eye },
    { title: "Inquiries", value: "34", change: "+8 new", icon: MessageCircle },
    { title: "Favorites", value: "89", change: "+12 this week", icon: Heart },
  ]

  const recentListings = [
    {
      id: 1,
      title: "Fresh Maize - 50 Tonnes",
      price: "$800/tonne",
      status: "Active",
      views: 156,
      inquiries: 8,
      image: "/placeholder.svg?height=80&width=80",
      category: "produce",
    },
    {
      id: 2,
      title: "John Deere Tractor Rental",
      price: "$45/day",
      status: "Active",
      views: 89,
      inquiries: 5,
      image: "/placeholder.svg?height=80&width=80",
      category: "equipment",
    },
    {
      id: 3,
      title: "Agricultural Consultation",
      price: "$50/hour",
      status: "Paused",
      views: 67,
      inquiries: 3,
      image: "/placeholder.svg?height=80&width=80",
      category: "service",
    },
  ]

  const recentInquiries = [
    {
      id: 1,
      buyer: "Sarah Chikwanha",
      listing: "Fresh Maize - 50 Tonnes",
      message: "Interested in bulk purchase. Can you deliver to Bulawayo?",
      time: "2 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      buyer: "Michael Ndoro",
      listing: "John Deere Tractor Rental",
      message: "Need tractor for 3 days next week. Is it available?",
      time: "5 hours ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      buyer: "Grace Mutasa",
      listing: "Agricultural Consultation",
      message: "Looking for help with crop rotation planning.",
      time: "1 day ago",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const partners = [
    { name: "Ministry of Agriculture", logo: "/placeholder.svg?height=60&width=120&text=Ministry" },
    { name: "Ford Zimbabwe", logo: "/placeholder.svg?height=60&width=120&text=Ford" },
    { name: "Agricultural Marketing Authority", logo: "/placeholder.svg?height=60&width=120&text=AMA" },
    { name: "Landini Tractors", logo: "/placeholder.svg?height=60&width=120&text=Landini" },
    { name: "Massey Ferguson", logo: "/placeholder.svg?height=60&width=120&text=Massey" },
    { name: "John Deere Zimbabwe", logo: "/placeholder.svg?height=60&width=120&text=Deere" },
    { name: "SeedCo", logo: "/placeholder.svg?height=60&width=120&text=SeedCo" },
    { name: "Commercial Farmers Union", logo: "/placeholder.svg?height=60&width=120&text=CFU" },
    { name: "Windmill Zimbabwe", logo: "/placeholder.svg?height=60&width=120&text=Windmill" },
    { name: "Agribank", logo: "/placeholder.svg?height=60&width=120&text=Agribank" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
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
                <NavigationLink href="/livestock" className="text-gray-600 hover:text-green-600">
                  Livestock
                </NavigationLink>
                <NavigationLink href="/legal-compliance" className="text-gray-600 hover:text-green-600">
                  Legal Compliance
                </NavigationLink>
              </nav>
            </div>

            <div className="flex items-center space-x-4">
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Create Listing
              </Button>

              <Button variant="outline" size="icon">
                <Bell className="h-4 w-4" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                      <AvatarFallback>JM</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">John Mukamuri</p>
                      <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Zimbabwe's Complete
                <br />
                <span className="text-green-600">Agricultural Marketplace</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Connect with farmers, rent equipment, find workers, hire experts, and discover agricultural events.
                Everything you need for successful farming in one place.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 px-8 py-4 text-lg font-semibold rounded-lg"
                >
                  Start Selling →
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg font-semibold rounded-lg border-2 bg-transparent"
                >
                  Browse Marketplace
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/hero-layout.png"
                alt="Zimbabwe's Complete Agricultural Marketplace hero section"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600">{stat.change}</p>
                    </div>
                    <div className="bg-green-100 p-3 rounded-full">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Agricultural Value Chain Showcase */}
        <section className="mb-8">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Supporting Zimbabwe's Complete Agricultural Value Chain</CardTitle>
              <CardDescription>From inputs to market - we connect every stage of your farming journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee space-x-8">
                  {/* First set of products */}
                  <div className="flex space-x-8 flex-shrink-0">
                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/seedco-maize-sc573.png"
                          alt="SeedCo SC 573 certified hybrid maize seeds - 10kg package"
                          width={120}
                          height={120}
                          className="w-full h-24 object-contain mx-auto"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">SeedCo SC 573</h3>
                      <p className="text-xs text-gray-600">Hybrid maize seeds</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/zfc-fertilizer-bag.jpg"
                          alt="ZFC Vegetable Blend fertilizer - NPK 9:24:20 - 50kg bag from Zimbabwe Fertilizer Company"
                          width={120}
                          height={120}
                          className="w-full h-24 object-contain mx-auto"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">ZFC Fertilizer</h3>
                      <p className="text-xs text-gray-600">Vegetable blend NPK 9:24:20</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/hero-tractor-main.png"
                          alt="Modern farming equipment and tractors"
                          width={120}
                          height={120}
                          className="w-full h-24 object-cover mx-auto rounded"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">Equipment</h3>
                      <p className="text-xs text-gray-600">Tractors & machinery</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/maize-field.png"
                          alt="Thriving maize crops in the field"
                          width={120}
                          height={120}
                          className="w-full h-24 object-cover mx-auto rounded"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">Cultivation</h3>
                      <p className="text-xs text-gray-600">Growing & care</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/potatoes.png"
                          alt="Harvested potatoes ready for market"
                          width={120}
                          height={120}
                          className="w-full h-24 object-cover mx-auto rounded"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">Harvest</h3>
                      <p className="text-xs text-gray-600">Quality produce</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/fresh-farm-produce.png"
                          alt="Fresh fruits and vegetables at market"
                          width={120}
                          height={120}
                          className="w-full h-24 object-cover mx-auto rounded"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">Market</h3>
                      <p className="text-xs text-gray-600">Fresh to consumers</p>
                    </div>
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="flex space-x-8 flex-shrink-0">
                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/seedco-maize-sc573.png"
                          alt="SeedCo SC 573 certified hybrid maize seeds - 10kg package"
                          width={120}
                          height={120}
                          className="w-full h-24 object-contain mx-auto"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">SeedCo SC 573</h3>
                      <p className="text-xs text-gray-600">Hybrid maize seeds</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/zfc-fertilizer-bag.jpg"
                          alt="ZFC Vegetable Blend fertilizer - NPK 9:24:20 - 50kg bag from Zimbabwe Fertilizer Company"
                          width={120}
                          height={120}
                          className="w-full h-24 object-contain mx-auto"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">ZFC Fertilizer</h3>
                      <p className="text-xs text-gray-600">Vegetable blend NPK 9:24:20</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/hero-tractor-main.png"
                          alt="Modern farming equipment and tractors"
                          width={120}
                          height={120}
                          className="w-full h-24 object-cover mx-auto rounded"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">Equipment</h3>
                      <p className="text-xs text-gray-600">Tractors & machinery</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/maize-field.png"
                          alt="Thriving maize crops in the field"
                          width={120}
                          height={120}
                          className="w-full h-24 object-cover mx-auto rounded"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">Cultivation</h3>
                      <p className="text-xs text-gray-600">Growing & care</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/potatoes.png"
                          alt="Harvested potatoes ready for market"
                          width={120}
                          height={120}
                          className="w-full h-24 object-cover mx-auto rounded"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">Harvest</h3>
                      <p className="text-xs text-gray-600">Quality produce</p>
                    </div>

                    <div className="text-center min-w-[180px]">
                      <div className="relative mb-3 bg-white p-4 rounded-lg shadow-sm">
                        <Image
                          src="/images/fresh-farm-produce.png"
                          alt="Fresh fruits and vegetables at market"
                          width={120}
                          height={120}
                          className="w-full h-24 object-cover mx-auto rounded"
                        />
                      </div>
                      <h3 className="font-semibold text-sm text-gray-900">Market</h3>
                      <p className="text-xs text-gray-600">Fresh to consumers</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-600 mb-4">
                  From authentic SeedCo hybrid seeds and ZFC fertilizers to market-ready produce, Musika Wethu connects
                  every stage of Zimbabwe's agricultural value chain with trusted local suppliers.
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="/marketplace">
                    <Button variant="outline" size="sm">
                      Browse Products
                    </Button>
                  </Link>
                  <Link href="/equipment">
                    <Button variant="outline" size="sm">
                      Rent Equipment
                    </Button>
                  </Link>
                  <Link href="/services">
                    <Button variant="outline" size="sm">
                      Find Services
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="inquiries">Inquiries</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Listings */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Listings</CardTitle>
                  <CardDescription>Your latest marketplace posts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentListings.map((listing) => (
                    <div key={listing.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                      <Image
                        src={listing.image || "/placeholder.svg"}
                        alt={listing.title}
                        width={60}
                        height={60}
                        className="rounded-lg object-cover"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm truncate">{listing.title}</h3>
                        <p className="text-green-600 font-semibold">{listing.price}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500 mt-1">
                          <span className="flex items-center">
                            <Eye className="h-3 w-3 mr-1" />
                            {listing.views}
                          </span>
                          <span className="flex items-center">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            {listing.inquiries}
                          </span>
                        </div>
                      </div>
                      <Badge variant={listing.status === "Active" ? "default" : "secondary"}>{listing.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Inquiries */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Inquiries</CardTitle>
                  <CardDescription>Messages from potential buyers</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-start space-x-3 p-4 border rounded-lg">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={inquiry.avatar || "/placeholder.svg"} alt={inquiry.buyer} />
                        <AvatarFallback>
                          {inquiry.buyer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-sm">{inquiry.buyer}</h3>
                          <span className="text-xs text-gray-500">{inquiry.time}</span>
                        </div>
                        <p className="text-xs text-gray-600 mb-1">{inquiry.listing}</p>
                        <p className="text-sm text-gray-800">{inquiry.message}</p>
                        <div className="flex space-x-2 mt-2">
                          <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                            <MessageCircle className="h-3 w-3 mr-1" />
                            WhatsApp
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="listings">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>All Listings</CardTitle>
                    <CardDescription>Manage your marketplace listings</CardDescription>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700">
                    <Plus className="h-4 w-4 mr-2" />
                    New Listing
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentListings.map((listing) => (
                    <div key={listing.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={listing.image || "/placeholder.svg"}
                          alt={listing.title}
                          width={80}
                          height={80}
                          className="rounded-lg object-cover"
                        />
                        <div>
                          <h3 className="font-medium">{listing.title}</h3>
                          <p className="text-green-600 font-semibold">{listing.price}</p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                            <span className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {listing.views} views
                            </span>
                            <span className="flex items-center">
                              <MessageCircle className="h-4 w-4 mr-1" />
                              {listing.inquiries} inquiries
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={listing.status === "Active" ? "default" : "secondary"}>{listing.status}</Badge>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>All Inquiries</CardTitle>
                <CardDescription>Messages and contact requests from buyers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="flex items-start space-x-4 p-4 border rounded-lg">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={inquiry.avatar || "/placeholder.svg"} alt={inquiry.buyer} />
                        <AvatarFallback>
                          {inquiry.buyer
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium">{inquiry.buyer}</h3>
                          <span className="text-sm text-gray-500">{inquiry.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">Re: {inquiry.listing}</p>
                        <p className="text-gray-800 mb-3">{inquiry.message}</p>
                        <div className="flex space-x-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            <Phone className="h-4 w-4 mr-1" />
                            Call Now
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            WhatsApp
                          </Button>
                          <Button size="sm" variant="outline">
                            Reply
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>Your listing performance this month</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Total Views</span>
                      <span className="text-2xl font-bold">1,247</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Inquiries</span>
                      <span className="text-2xl font-bold">34</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Conversion Rate</span>
                      <span className="text-2xl font-bold">2.7%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Listings</CardTitle>
                  <CardDescription>Your most viewed listings</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentListings.map((listing, index) => (
                      <div key={listing.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                          <span className="text-sm font-medium truncate">{listing.title}</span>
                        </div>
                        <span className="text-sm text-gray-600">{listing.views} views</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>


      </div>
    </div>
  )
}
