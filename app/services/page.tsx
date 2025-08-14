"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Search,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Award,
  Clock,
  DollarSign,
  Users,
  BookOpen,
  Stethoscope,
  Wrench,
  Leaf,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const serviceCategories = [
    { id: "all", name: "All Services", icon: Users },
    { id: "consultation", name: "Agricultural Consultation", icon: BookOpen },
    { id: "veterinary", name: "Veterinary Services", icon: Stethoscope },
    { id: "equipment-repair", name: "Equipment Repair", icon: Wrench },
    { id: "soil-testing", name: "Soil Testing", icon: Leaf },
    { id: "training", name: "Training & Education", icon: Award },
    { id: "financial", name: "Financial Services", icon: DollarSign },
  ]

  const services = [
    {
      id: 1,
      title: "Agricultural Consultation & Farm Planning",
      provider: "Dr. Sarah Chikwanha",
      location: "Harare, Zimbabwe",
      rate: "$50/hour",
      category: "consultation",
      description:
        "Comprehensive agricultural consultation services including crop selection, farm planning, and sustainable farming practices. 15+ years experience.",
      specialties: ["Crop Management", "Soil Health", "Sustainable Farming", "Farm Business Planning"],
      qualifications: [
        "PhD in Agricultural Science",
        "15+ years field experience",
        "Certified Crop Advisor",
        "Published researcher",
      ],
      availability: "Available weekdays",
      rating: 4.9,
      reviews: 47,
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      featured: true,
      responseTime: "Within 2 hours",
      completedProjects: 156,
    },
    {
      id: 2,
      title: "Mobile Veterinary Services",
      provider: "Dr. Michael Ndoro",
      location: "Bulawayo, Zimbabwe",
      rate: "$40/visit + travel",
      category: "veterinary",
      description:
        "Mobile veterinary services for livestock including cattle, goats, sheep, and poultry. Emergency services available 24/7.",
      specialties: ["Cattle Health", "Poultry Medicine", "Vaccination Programs", "Emergency Care"],
      qualifications: [
        "Doctor of Veterinary Medicine",
        "10+ years livestock experience",
        "Licensed veterinarian",
        "Emergency care certified",
      ],
      availability: "24/7 emergency, weekdays regular",
      rating: 4.8,
      reviews: 89,
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      featured: true,
      responseTime: "Within 1 hour",
      completedProjects: 234,
    },
    {
      id: 3,
      title: "Tractor & Equipment Repair Service",
      provider: "TechFarm Solutions",
      location: "Gweru, Zimbabwe",
      rate: "$35/hour + parts",
      category: "equipment-repair",
      description:
        "Professional repair and maintenance services for tractors, harvesters, and other farm equipment. Mobile service available.",
      specialties: ["Tractor Repair", "Hydraulic Systems", "Engine Overhaul", "Preventive Maintenance"],
      qualifications: [
        "Certified mechanics",
        "20+ years combined experience",
        "Authorized service center",
        "Genuine parts supplier",
      ],
      availability: "Monday to Saturday",
      rating: 4.7,
      reviews: 62,
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      featured: false,
      responseTime: "Same day",
      completedProjects: 189,
    },
    {
      id: 4,
      title: "Comprehensive Soil Testing Laboratory",
      provider: "AgriLab Zimbabwe",
      location: "Mutare, Zimbabwe",
      rate: "$25/sample",
      category: "soil-testing",
      description:
        "Professional soil testing services including pH, nutrient analysis, and fertilizer recommendations. Fast turnaround time.",
      specialties: ["Soil pH Testing", "Nutrient Analysis", "Fertilizer Recommendations", "Soil Health Assessment"],
      qualifications: [
        "ISO certified laboratory",
        "Qualified soil scientists",
        "Modern testing equipment",
        "Government approved",
      ],
      availability: "Monday to Friday",
      rating: 4.6,
      reviews: 34,
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      featured: false,
      responseTime: "3-5 business days",
      completedProjects: 567,
    },
    {
      id: 5,
      title: "Modern Farming Techniques Training",
      provider: "AgriEducate Institute",
      location: "Chinhoyi, Zimbabwe",
      rate: "$100/day (group), $200/day (individual)",
      category: "training",
      description:
        "Training programs on modern farming techniques, precision agriculture, and sustainable farming practices.",
      specialties: ["Precision Agriculture", "Irrigation Systems", "Crop Rotation", "Pest Management"],
      qualifications: [
        "Certified trainers",
        "University partnerships",
        "Hands-on experience",
        "International standards",
      ],
      availability: "Flexible scheduling",
      rating: 4.8,
      reviews: 28,
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      featured: true,
      responseTime: "Within 24 hours",
      completedProjects: 78,
    },
    {
      id: 6,
      title: "Farm Financial Planning & Loans",
      provider: "AgriFinance Consultants",
      location: "Masvingo, Zimbabwe",
      rate: "Free consultation, 2% loan processing",
      category: "financial",
      description:
        "Financial planning services for farmers including loan applications, budget planning, and investment advice.",
      specialties: ["Loan Applications", "Financial Planning", "Investment Advice", "Insurance Services"],
      qualifications: [
        "Licensed financial advisors",
        "Agricultural finance specialists",
        "Bank partnerships",
        "Insurance brokers",
      ],
      availability: "Monday to Friday",
      rating: 4.5,
      reviews: 41,
      avatar: "/placeholder.svg?height=60&width=60",
      verified: true,
      featured: false,
      responseTime: "Within 4 hours",
      completedProjects: 123,
    },
  ]

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const ServiceCard = ({ service }: { service: (typeof services)[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={service.avatar || "/placeholder.svg"} alt={service.provider} />
            <AvatarFallback>
              {service.provider
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg line-clamp-1">{service.title}</h3>
              {service.featured && <Badge className="text-xs bg-orange-500">Featured</Badge>}
            </div>
            <p className="text-gray-600 font-medium mb-1">{service.provider}</p>
            <div className="flex items-center text-gray-500 text-sm mb-2">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{service.location}</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                <span className="font-medium">{service.rating}</span>
                <span className="text-gray-500 ml-1">({service.reviews})</span>
              </div>
              {service.verified && (
                <Badge variant="secondary" className="text-xs">
                  Verified
                </Badge>
              )}
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4 text-sm line-clamp-2">{service.description}</p>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
          <div className="flex flex-wrap gap-1">
            {service.specialties.slice(0, 3).map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
            {service.specialties.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{service.specialties.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1 text-green-600" />
            <span className="font-medium text-green-600">{service.rate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1 text-gray-500" />
            <span className="text-gray-600">{service.responseTime}</span>
          </div>
          <div className="col-span-2">
            <span className="text-gray-500">Availability: </span>
            <span className="font-medium">{service.availability}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">{service.completedProjects} projects completed</div>
          <div className="flex gap-2">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Phone className="h-4 w-4 mr-1" />
              Contact
            </Button>
            <Button size="sm" variant="outline">
              <MessageCircle className="h-4 w-4 mr-1" />
              WhatsApp
            </Button>
          </div>
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
              <Link href="/marketplace" className="text-gray-600 hover:text-green-600">
                Marketplace
              </Link>
              <Link href="/equipment" className="text-gray-600 hover:text-green-600">
                Equipment
              </Link>
              <Link href="/jobs" className="text-gray-600 hover:text-green-600">
                Jobs
              </Link>
              <Link href="/services" className="text-green-600 font-medium">
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
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link href="/create-listing">
                <Button className="bg-green-600 hover:bg-green-700">Offer Service</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Agricultural Services</h1>
            <p className="text-xl mb-8">
              Connect with expert agricultural consultants, veterinarians, and service providers
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for consultants, veterinarians, soil testing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {serviceCategories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-2"
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Listings */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Available Services</h2>
              <p className="text-gray-600">{filteredServices.length} service providers found</p>
            </div>

            <Select defaultValue="featured">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12">
              <Users className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No services found</h3>
              <p className="text-gray-500">Try adjusting your search or category filters</p>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Our Services Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Find Experts</h3>
              <p className="text-gray-600">Browse qualified agricultural service providers in your area.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Contact & Discuss</h3>
              <p className="text-gray-600">Call or WhatsApp service providers to discuss your needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Get Expert Help</h3>
              <p className="text-gray-600">Receive professional agricultural services and advice.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
