"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import NavigationLink from "@/components/navigation-link"
import { Search, MapPin, Calendar, Clock, Users, DollarSign, ExternalLink, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("upcoming")

  const eventCategories = [
    { id: "all", name: "All Events", icon: "📅" },
    { id: "conferences", name: "Conferences", icon: "🎤" },
    { id: "workshops", name: "Workshops", icon: "🛠️" },
    { id: "trade-shows", name: "Trade Shows", icon: "🏪" },
    { id: "auctions", name: "Auctions", icon: "🔨" },
    { id: "training", name: "Training", icon: "📚" },
    { id: "networking", name: "Networking", icon: "🤝" },
  ]

  const events = [
    {
      id: 1,
      title: "Zimbabwe Agricultural Show 2024",
      description:
        "The premier agricultural event in Zimbabwe featuring the latest farming technology, livestock competitions, and networking opportunities.",
      date: "2024-08-15",
      time: "08:00 - 18:00",
      location: "Harare Agricultural Showgrounds, Harare",
      organizer: "Agricultural Society of Zimbabwe",
      category: "trade-shows",
      price: "Free entry",
      capacity: 5000,
      registered: 3200,
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
      status: "upcoming",
      tags: ["Technology", "Livestock", "Networking", "Equipment"],
      website: "https://agrishow.co.zw",
    },
    {
      id: 2,
      title: "Modern Irrigation Techniques Workshop",
      description:
        "Hands-on workshop covering drip irrigation, sprinkler systems, and water conservation techniques for small to medium farms.",
      date: "2024-07-20",
      time: "09:00 - 16:00",
      location: "Mutare Training Center, Mutare",
      organizer: "AquaFarm Institute",
      category: "workshops",
      price: "$25 per person",
      capacity: 50,
      registered: 38,
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
      status: "upcoming",
      tags: ["Irrigation", "Water Management", "Training", "Hands-on"],
      website: "https://aquafarm.co.zw",
    },
    {
      id: 3,
      title: "Cattle Auction - Premium Brahman Stock",
      description:
        "Monthly cattle auction featuring premium Brahman and crossbred cattle from registered breeders across Zimbabwe.",
      date: "2024-07-25",
      time: "10:00 - 15:00",
      location: "Bulawayo Livestock Market, Bulawayo",
      organizer: "Zimbabwe Cattle Breeders Association",
      category: "auctions",
      price: "Free to attend, registration required",
      capacity: 200,
      registered: 156,
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      status: "upcoming",
      tags: ["Cattle", "Auction", "Breeding", "Livestock"],
      website: "https://cattlebreeders.co.zw",
    },
    {
      id: 4,
      title: "Sustainable Farming Conference",
      description:
        "Two-day conference on sustainable farming practices, climate-smart agriculture, and organic farming methods.",
      date: "2024-08-05",
      time: "08:30 - 17:00",
      location: "Rainbow Towers Hotel, Harare",
      organizer: "Sustainable Agriculture Zimbabwe",
      category: "conferences",
      price: "$75 per person (includes meals)",
      capacity: 300,
      registered: 187,
      image: "/placeholder.svg?height=200&width=300",
      featured: true,
      status: "upcoming",
      tags: ["Sustainability", "Climate-Smart", "Organic", "Conference"],
      website: "https://sustainableag.co.zw",
    },
    {
      id: 5,
      title: "Farm Machinery Demonstration Day",
      description:
        "Live demonstrations of the latest tractors, harvesters, and farming equipment from leading manufacturers.",
      date: "2024-07-30",
      time: "09:00 - 16:00",
      location: "Gweru Agricultural College, Gweru",
      organizer: "Farm Equipment Dealers Association",
      category: "trade-shows",
      price: "Free entry",
      capacity: 800,
      registered: 445,
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      status: "upcoming",
      tags: ["Machinery", "Demonstration", "Equipment", "Technology"],
      website: "https://farmequipment.co.zw",
    },
    {
      id: 6,
      title: "Young Farmers Networking Event",
      description:
        "Networking event for young farmers under 35, featuring panel discussions, mentorship opportunities, and social activities.",
      date: "2024-06-15",
      time: "18:00 - 22:00",
      location: "Chinhoyi University of Technology, Chinhoyi",
      organizer: "Young Farmers Association Zimbabwe",
      category: "networking",
      price: "$15 per person",
      capacity: 150,
      registered: 150,
      image: "/placeholder.svg?height=200&width=300",
      featured: false,
      status: "past",
      tags: ["Networking", "Young Farmers", "Mentorship", "Social"],
      website: "https://youngfarmers.co.zw",
    },
  ]

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory
    const matchesTab = activeTab === "all" || event.status === activeTab
    return matchesSearch && matchesCategory && matchesTab
  })

  const EventCard = ({ event }: { event: (typeof events)[0] }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={event.image || "/placeholder.svg"}
          alt={event.title}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
        {event.featured && <Badge className="absolute top-2 left-2 bg-orange-500">Featured</Badge>}
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
          <Heart className="h-4 w-4" />
        </Button>
        <Badge variant={event.status === "upcoming" ? "default" : "secondary"} className="absolute bottom-2 left-2">
          {event.status === "upcoming" ? "Upcoming" : "Past Event"}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{event.title}</h3>
          <p className="text-gray-600 text-sm line-clamp-2">{event.description}</p>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{new Date(event.date).toLocaleDateString("en-GB")}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.time}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium text-green-600">{event.price}</span>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-600">Registration</span>
            <span className="font-medium">
              {event.registered}/{event.capacity}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full"
              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {event.tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
            {event.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{event.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          {event.status === "upcoming" ? (
            <Button size="sm" className="flex-1 bg-green-600 hover:bg-green-700">
              Register Now
            </Button>
          ) : (
            <Button size="sm" variant="outline" className="flex-1 bg-transparent">
              View Details
            </Button>
          )}
          <Button size="sm" variant="outline">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-3 pt-3 border-t">
          <p className="text-xs text-gray-500">Organized by {event.organizer}</p>
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
              <NavigationLink href="/equipment" className="text-gray-600 hover:text-green-600">
                Equipment
              </NavigationLink>
              <NavigationLink href="/jobs" className="text-gray-600 hover:text-green-600">
                Jobs
              </NavigationLink>
              <NavigationLink href="/services" className="text-gray-600 hover:text-green-600">
                Services
              </NavigationLink>
              <NavigationLink href="/events" className="text-green-600 font-medium">
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
                <Button className="bg-green-600 hover:bg-green-700">Create Event</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Agricultural Events</h1>
            <p className="text-xl mb-8">
              Discover conferences, workshops, trade shows, and networking events across Zimbabwe
            </p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for events, workshops, conferences..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs and Filters */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <TabsList>
                <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
                <TabsTrigger value="past">Past Events</TabsTrigger>
                <TabsTrigger value="all">All Events</TabsTrigger>
              </TabsList>

              <div className="flex gap-4">
                <Select defaultValue="all">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="harare">Harare</SelectItem>
                    <SelectItem value="bulawayo">Bulawayo</SelectItem>
                    <SelectItem value="mutare">Mutare</SelectItem>
                    <SelectItem value="gweru">Gweru</SelectItem>
                  </SelectContent>
                </Select>

                <Select defaultValue="date">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">By Date</SelectItem>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {eventCategories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex items-center space-x-1"
                >
                  <span>{category.icon}</span>
                  <span>{category.name}</span>
                </Button>
              ))}
            </div>

            <TabsContent value={activeTab} className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">
                  {activeTab === "upcoming" ? "Upcoming Events" : activeTab === "past" ? "Past Events" : "All Events"}
                </h2>
                <p className="text-gray-600">{filteredEvents.length} events found</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>

              {filteredEvents.length === 0 && (
                <div className="text-center py-12">
                  <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Attend Agricultural Events?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Network & Connect</h3>
              <p className="text-gray-600">
                Meet fellow farmers, suppliers, and industry experts to build valuable connections.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🚜</div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Technology</h3>
              <p className="text-gray-600">
                Discover the newest farming equipment, techniques, and innovations in agriculture.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Badge className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn & Grow</h3>
              <p className="text-gray-600">
                Attend workshops and training sessions to improve your farming knowledge and skills.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
