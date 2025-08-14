"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Menu,
  X,
  Search,
  Filter,
  MapPin,
  Calendar,
  Wheat,
  Star,
  ChevronRight,
  Tractor,
  Wrench,
  Truck,
  Zap,
} from "lucide-react"

export default function EquipmentPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")

  const equipmentData = [
    {
      id: 1,
      name: "Massey Ferguson 375 Tractor",
      category: "Tractors",
      price: "$150/day",
      location: "Harare",
      rating: 4.8,
      image: "/images/massey-ferguson-tractor.jpeg",
      description: "Powerful 75HP tractor perfect for medium to large farming operations",
      features: ["75HP Engine", "4WD", "Power Steering", "PTO"],
      availability: "Available",
      owner: "John Mukamuri",
    },
    {
      id: 2,
      name: "John Deere Combine Harvester",
      category: "Harvesters",
      price: "$300/day",
      location: "Bulawayo",
      rating: 4.9,
      image: "/images/john-deere-harvester.png",
      description: "High-capacity combine harvester for efficient grain harvesting",
      features: ["Large Capacity", "GPS Guided", "Grain Tank", "Chopper"],
      availability: "Available",
      owner: "AgriTech Solutions",
    },
    {
      id: 3,
      name: "Precision Seed Planter",
      category: "Planters",
      price: "$80/day",
      location: "Mutare",
      rating: 4.7,
      image: "/images/precision-planter.webp",
      description: "Advanced precision planter for optimal seed placement",
      features: ["GPS Precision", "12-Row", "Variable Rate", "Monitor"],
      availability: "Rented",
      owner: "Modern Farming Co.",
    },
    {
      id: 4,
      name: "Boom Sprayer System",
      category: "Sprayers",
      price: "$60/day",
      location: "Gweru",
      rating: 4.6,
      image: "/images/boom-sprayer.jpeg",
      description: "Professional boom sprayer for crop protection applications",
      features: ["24m Boom", "Auto Steer", "2000L Tank", "Rate Control"],
      availability: "Available",
      owner: "CropCare Services",
    },
    {
      id: 5,
      name: "Irrigation System Package",
      category: "Irrigation",
      price: "$200/month",
      location: "Masvingo",
      rating: 4.8,
      image: "/images/irrigation-system.png",
      description: "Complete drip irrigation system for efficient water management",
      features: ["Drip Lines", "Control Unit", "Filters", "Timers"],
      availability: "Available",
      owner: "WaterWise Irrigation",
    },
    {
      id: 6,
      name: "Multi-Row Planter Equipment",
      category: "Planters",
      price: "$120/day",
      location: "Chinhoyi",
      rating: 4.5,
      image: "/images/planter-equipment.png",
      description: "Heavy-duty multi-row planter for large-scale operations",
      features: ["8-Row Setup", "Seed Monitor", "Fertilizer Box", "Depth Control"],
      availability: "Available",
      owner: "PlantTech Zimbabwe",
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "tractors", label: "Tractors" },
    { value: "harvesters", label: "Harvesters" },
    { value: "planters", label: "Planters" },
    { value: "sprayers", label: "Sprayers" },
    { value: "irrigation", label: "Irrigation" },
  ]

  const locations = [
    { value: "all", label: "All Locations" },
    { value: "harare", label: "Harare" },
    { value: "bulawayo", label: "Bulawayo" },
    { value: "mutare", label: "Mutare" },
    { value: "gweru", label: "Gweru" },
    { value: "masvingo", label: "Masvingo" },
    { value: "chinhoyi", label: "Chinhoyi" },
  ]

  const filteredEquipment = equipmentData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || item.category.toLowerCase() === selectedCategory
    const matchesLocation = selectedLocation === "all" || item.location.toLowerCase() === selectedLocation

    return matchesSearch && matchesCategory && matchesLocation
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <Wheat className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">FarmersZW</span>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/marketplace"
                  className="text-gray-600 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Marketplace
                </Link>
                <Link href="/equipment" className="text-green-600 px-3 py-2 rounded-md text-sm font-medium">
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
                  List Equipment
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
              <Link href="/equipment" className="block px-3 py-2 text-green-600 font-medium">
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
                  List Equipment
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agricultural Equipment Rental</h1>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Access modern farming equipment to boost your productivity. Rent tractors, harvesters, planters, and more
              from verified equipment owners across Zimbabwe.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Browse Equipment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                List Your Equipment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search equipment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Available Equipment ({filteredEquipment.length})</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>Sort by: Relevance</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEquipment.map((equipment) => (
              <Card key={equipment.id} className="hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={equipment.image || "/placeholder.svg"}
                    alt={equipment.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Badge
                    className={`absolute top-3 right-3 ${
                      equipment.availability === "Available" ? "bg-green-600" : "bg-red-600"
                    }`}
                  >
                    {equipment.availability}
                  </Badge>
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-white text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {equipment.location}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {equipment.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">{equipment.category}</CardDescription>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{equipment.rating}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{equipment.description}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {equipment.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {equipment.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{equipment.features.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{equipment.price}</div>
                      <div className="text-xs text-gray-500">by {equipment.owner}</div>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-1" />
                      Book Now
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" disabled={equipment.availability !== "Available"}>
                      {equipment.availability === "Available" ? "Rent Now" : "Not Available"}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Wrench className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="text-center py-12">
              <Tractor className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No equipment found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all equipment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Equipment Types Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Equipment Categories</h2>
            <p className="text-xl text-gray-600">Find the right equipment for your farming needs</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Tractor className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tractors</h3>
              <p className="text-sm text-gray-600">Power units for various farming operations</p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Wheat className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Harvesters</h3>
              <p className="text-sm text-gray-600">Efficient crop harvesting equipment</p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Planters</h3>
              <p className="text-sm text-gray-600">Precision seeding and planting equipment</p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <Truck className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sprayers</h3>
              <p className="text-sm text-gray-600">Crop protection and fertilizer application</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Have Equipment to Rent?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            List your agricultural equipment and earn extra income by helping fellow farmers access the tools they need.
          </p>
          <Link href="/create-listing">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              List Your Equipment
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Wheat className="h-8 w-8 text-green-400" />
                <span className="ml-2 text-xl font-bold">FarmersZW</span>
              </div>
              <p className="text-gray-400">Zimbabwe's premier agricultural equipment rental platform.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Equipment</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/equipment?category=tractors" className="hover:text-white">
                    Tractors
                  </Link>
                </li>
                <li>
                  <Link href="/equipment?category=harvesters" className="hover:text-white">
                    Harvesters
                  </Link>
                </li>
                <li>
                  <Link href="/equipment?category=planters" className="hover:text-white">
                    Planters
                  </Link>
                </li>
                <li>
                  <Link href="/equipment?category=sprayers" className="hover:text-white">
                    Sprayers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
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
                  <Link href="/safety" className="hover:text-white">
                    Safety Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/insurance" className="hover:text-white">
                    Insurance
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-white">
                    Careers
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
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FarmersZW. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
