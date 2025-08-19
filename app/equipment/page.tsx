"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import NavigationLink from "@/components/navigation-link"
import { Search, MapPin, Phone, MessageCircle, Star, Tractor, Droplets, Wheat, Settings, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function EquipmentPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const equipmentCategories = [
    { id: "all", name: "All Equipment", icon: "🚜" },
    { id: "tractors", name: "Tractors", icon: "🚜" },
    { id: "harvesters", name: "Harvesters", icon: "🌾" },
    { id: "seeders", name: "Seeders", icon: "🌱" },
    { id: "hoppers", name: "Hoppers", icon: "📦" },
    { id: "spray-equipment", name: "Spray Equipment", icon: "💧" },
    { id: "plows", name: "Plows & Tillers", icon: "⚒️" },
    { id: "irrigation", name: "Irrigation", icon: "💧" },
    { id: "tools", name: "Hand Tools", icon: "🔧" },
    { id: "vehicles", name: "Farm Vehicles", icon: "🚛" },
  ]

  const equipment = [
    {
      id: 1,
      title: "John Deere 5075E Tractor",
      description: "75HP utility tractor perfect for medium-scale farming operations. Well maintained with low hours.",
      dailyRate: 45,
      weeklyRate: 280,
      monthlyRate: 1000,
      location: "Harare, Zimbabwe",
      owner: {
        name: "AgriRent Services",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.8,
        totalRentals: 156,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "tractors",
      specifications: {
        horsepower: "75 HP",
        fuelType: "Diesel",
        transmission: "Manual",
        condition: "Excellent",
      },
      availability: "Available Now",
      featured: true,
      reviews: 23,
    },
    {
      id: 2,
      title: "Case IH Combine Harvester",
      description: "High-capacity combine harvester suitable for wheat, maize, and soybean harvesting.",
      dailyRate: 120,
      weeklyRate: 750,
      monthlyRate: 2800,
      location: "Bulawayo, Zimbabwe",
      owner: {
        name: "Harvest Solutions",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.9,
        totalRentals: 89,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "harvesters",
      specifications: {
        capacity: "8 tonnes/hour",
        fuelType: "Diesel",
        headerWidth: "6 meters",
        condition: "Very Good",
      },
      availability: "Available from March 15",
      featured: true,
      reviews: 18,
    },
    {
      id: 3,
      title: "Massey Ferguson Disc Plow",
      description: "Heavy-duty disc plow for primary tillage. Suitable for various soil conditions.",
      dailyRate: 25,
      weeklyRate: 150,
      monthlyRate: 550,
      location: "Gweru, Zimbabwe",
      owner: {
        name: "Farm Tools Zimbabwe",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.6,
        totalRentals: 67,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "plows",
      specifications: {
        workingWidth: "3 meters",
        discSize: "24 inches",
        weight: "850 kg",
        condition: "Good",
      },
      availability: "Available Now",
      featured: false,
      reviews: 12,
    },
    {
      id: 4,
      title: "Irrigation Sprinkler System",
      description: "Complete center pivot irrigation system for large-scale crop irrigation.",
      dailyRate: 35,
      weeklyRate: 220,
      monthlyRate: 800,
      location: "Mutare, Zimbabwe",
      owner: {
        name: "AquaFarm Systems",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.7,
        totalRentals: 34,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "irrigation",
      specifications: {
        coverage: "50 hectares",
        waterFlow: "500 L/min",
        powerSource: "Electric",
        condition: "Excellent",
      },
      availability: "Available Now",
      featured: false,
      reviews: 8,
    },
    {
      id: 5,
      title: "Farm Truck - Isuzu NPR",
      description: "Reliable farm truck for transporting produce and equipment. 3-tonne capacity.",
      dailyRate: 40,
      weeklyRate: 250,
      monthlyRate: 900,
      location: "Chinhoyi, Zimbabwe",
      owner: {
        name: "Transport Solutions",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.5,
        totalRentals: 78,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "vehicles",
      specifications: {
        capacity: "3 tonnes",
        fuelType: "Diesel",
        transmission: "Manual",
        condition: "Good",
      },
      availability: "Available from next week",
      featured: false,
      reviews: 15,
    },
    {
      id: 6,
      title: "Seed Drill Planter",
      description: "Precision seed drill for accurate planting of various crops. GPS-guided system.",
      dailyRate: 30,
      weeklyRate: 180,
      monthlyRate: 650,
      location: "Masvingo, Zimbabwe",
      owner: {
        name: "Precision Farming Co.",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.8,
        totalRentals: 45,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "tools",
      specifications: {
        rowSpacing: "Variable",
        seedCapacity: "500 kg",
        gpsGuided: "Yes",
        condition: "Excellent",
      },
      availability: "Available Now",
      featured: true,
      reviews: 11,
    },
  ]

  const filteredEquipment = equipment.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const EquipmentCard = ({ item }: { item: (typeof equipment)[0] }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={item.images[0] || "/placeholder.svg"}
          alt={item.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        {item.featured && <Badge className="absolute top-2 left-2 bg-orange-500">Featured</Badge>}
        <Badge
          variant={item.availability === "Available Now" ? "default" : "secondary"}
          className="absolute top-2 right-2"
        >
          {item.availability}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

        <div className="grid grid-cols-3 gap-2 mb-3 text-center">
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Daily</p>
            <p className="font-semibold text-green-600">${item.dailyRate}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Weekly</p>
            <p className="font-semibold text-green-600">${item.weeklyRate}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded">
            <p className="text-xs text-gray-500">Monthly</p>
            <p className="font-semibold text-green-600">${item.monthlyRate}</p>
          </div>
        </div>

        <div className="space-y-2 mb-3">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{item.location}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={item.owner.avatar || "/placeholder.svg"} alt={item.owner.name} />
                <AvatarFallback className="text-xs">
                  {item.owner.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{item.owner.name}</p>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-gray-500 ml-1">
                    {item.owner.rating} ({item.reviews})
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
            <Phone className="h-4 w-4 mr-1" />
            Call Owner
          </Button>
          <Button size="sm" variant="outline" className="flex-1 bg-transparent">
            <MessageCircle className="h-4 w-4 mr-1" />
            WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
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
              <NavigationLink href="/equipment" className="text-green-600 font-medium">
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
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link href="/create-listing">
                <Button className="bg-green-600 hover:bg-green-700">List Equipment</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Equipment Background */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/irrigation-system.png"
            alt="Farm Equipment Background"
            width={1920}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Farm Equipment Rental</h1>
            <p className="text-xl mb-8">
              Rent tractors, harvesters, and farming equipment from trusted owners across Zimbabwe
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for tractors, harvesters, plows..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Showcase Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Professional Farm Equipment</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Access Zimbabwe's most comprehensive collection of modern agricultural machinery from trusted suppliers.
              From precision planters to powerful harvesters, find the right equipment for your farming needs.
            </p>
          </div>

          {/* Main Equipment Showcase Grid */}
          <div className="grid lg:grid-cols-2 gap-10 mb-20">
            {/* Irrigation Systems */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80">
                <Image
                  src="/images/irrigation-system.png"
                  alt="Center Pivot Irrigation System in Action"
                  width={800}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-4">
                  <Droplets className="h-10 w-10 text-blue-600" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Irrigation Systems</h3>
                  <p className="text-sm opacity-90">Advanced water management technology</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  State-of-the-art center pivot and sprinkler systems for efficient water management across large
                  agricultural areas. Perfect for maximizing crop yields while conserving water resources.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                    <span className="font-medium">Water-efficient technology</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                    <span className="font-medium">GPS-controlled systems</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                    <span className="font-medium">Coverage up to 100 hectares</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3" />
                    <span className="font-medium">Automated scheduling</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Combine Harvesters */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80">
                <Image
                  src="/images/combine-harvester.png"
                  alt="John Deere Combine Harvester in Field"
                  width={800}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-4">
                  <Wheat className="h-10 w-10 text-yellow-600" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Combine Harvesters</h3>
                  <p className="text-sm opacity-90">High-capacity grain harvesting</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  High-capacity harvesters for wheat, maize, soybean and other grain crops with advanced threshing
                  technology. Maximize your harvest efficiency with precision agriculture features.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3" />
                    <span className="font-medium">Multi-crop capability</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3" />
                    <span className="font-medium">GPS guidance systems</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3" />
                    <span className="font-medium">Real-time yield monitoring</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3" />
                    <span className="font-medium">Large grain tank capacity</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modern Tractors */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80">
                <Image
                  src="/images/landini-tractor.jpeg"
                  alt="Modern Landini Tractor"
                  width={800}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-4">
                  <Tractor className="h-10 w-10 text-green-600" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Modern Tractors</h3>
                  <p className="text-sm opacity-90">Powerful & fuel-efficient</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  Powerful and fuel-efficient tractors from leading brands like Landini, Massey Ferguson, and John
                  Deere. Built for reliability and performance in Zimbabwe's diverse farming conditions.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                    <span className="font-medium">40-200 HP range</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                    <span className="font-medium">4WD capability</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                    <span className="font-medium">Air-conditioned cabins</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3" />
                    <span className="font-medium">PTO & hydraulic systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Precision Planters */}
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-80">
                <Image
                  src="/images/precision-planter.webp"
                  alt="Precision Planter Equipment"
                  width={800}
                  height={320}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full p-4">
                  <Settings className="h-10 w-10 text-red-600" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Precision Planters</h3>
                  <p className="text-sm opacity-90">Accurate seed placement</p>
                </div>
              </div>
              <CardContent className="p-8">
                <p className="text-gray-600 mb-6 text-lg">
                  State-of-the-art planting equipment for accurate seed placement and optimal crop establishment.
                  Maximize your planting efficiency with precision agriculture technology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3" />
                    <span className="font-medium">Variable rate seeding</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3" />
                    <span className="font-medium">GPS guidance</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3" />
                    <span className="font-medium">Multiple row configurations</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-3" />
                    <span className="font-medium">Seed monitoring systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Equipment Gallery Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Equipment Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src="/images/boom-sprayer.jpeg"
                  alt="Boom Sprayer Equipment"
                  width={400}
                  height={160}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold text-lg">Sprayers</h4>
                    <p className="text-sm opacity-90">Crop protection equipment</p>
                  </div>
                </div>
              </div>

              <div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src="/images/seeding-equipment.png"
                  alt="John Deere Seeding Equipment"
                  width={400}
                  height={160}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-600/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold text-lg">Seeders</h4>
                    <p className="text-sm opacity-90">Precision seeding systems</p>
                  </div>
                </div>
              </div>

              <div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src="/images/massey-ferguson-tractor.jpeg"
                  alt="Massey Ferguson Tractor"
                  width={400}
                  height={160}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold text-lg">Tractors</h4>
                    <p className="text-sm opacity-90">Multi-purpose farm power</p>
                  </div>
                </div>
              </div>

              <div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer">
                <Image
                  src="/images/warehouse-planters.png"
                  alt="Warehouse Planters"
                  width={400}
                  height={160}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h4 className="font-bold text-lg">Planters</h4>
                    <p className="text-sm opacity-90">Professional planting solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Types Overview */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            <div className="relative h-28 rounded-lg overflow-hidden group">
              <Image
                src="/images/john-deere-harvester.png"
                alt="John Deere Harvester"
                width={200}
                height={112}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-green-600/70 flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">Harvesters</span>
              </div>
            </div>

            <div className="relative h-28 rounded-lg overflow-hidden group">
              <Image
                src="/images/planter-equipment.png"
                alt="Planter Equipment"
                width={200}
                height={112}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-red-600/70 flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">Planters</span>
              </div>
            </div>

            <div className="relative h-28 rounded-lg overflow-hidden group">
              <Image
                src="/images/boom-sprayer.jpeg"
                alt="Sprayer Equipment"
                width={200}
                height={112}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-blue-600/70 flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">Sprayers</span>
              </div>
            </div>

            <div className="relative h-28 rounded-lg overflow-hidden group">
              <Image
                src="/images/seeding-equipment.png"
                alt="Seeding Equipment"
                width={200}
                height={112}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-yellow-600/70 flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">Seeders</span>
              </div>
            </div>

            <div className="relative h-28 rounded-lg overflow-hidden group">
              <Image
                src="/images/landini-tractor.jpeg"
                alt="Tractor Equipment"
                width={200}
                height={112}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-purple-600/70 flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">Tractors</span>
              </div>
            </div>

            <div className="relative h-28 rounded-lg overflow-hidden group">
              <Image
                src="/images/irrigation-system.png"
                alt="Irrigation Equipment"
                width={200}
                height={112}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-orange-600/70 flex items-center justify-center">
                <span className="text-white font-bold text-sm text-center">Irrigation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-100 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {equipmentCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2 px-6 py-3"
              >
                <span className="text-lg">{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Listings */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Available Equipment</h2>
              <p className="text-gray-600 text-lg">{filteredEquipment.length} items available for rent</p>
            </div>

            <Select defaultValue="featured">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🚜</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-3">No equipment found</h3>
              <p className="text-gray-500 text-lg">Try adjusting your search or category filters</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How Equipment Rental Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">1. Search & Browse</h3>
              <p className="text-gray-600 text-lg">
                Find the equipment you need by location, type, and availability using our advanced search filters.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">2. Contact Owner</h3>
              <p className="text-gray-600 text-lg">
                Call or WhatsApp the equipment owner directly to discuss terms, availability, and arrange pickup.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">3. Rent & Farm</h3>
              <p className="text-gray-600 text-lg">
                Complete the rental agreement, get your equipment, and boost your farming productivity!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
