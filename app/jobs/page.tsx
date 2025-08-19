"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import NavigationLink from "@/components/navigation-link"
import { Search, MapPin, Phone, MessageCircle, Clock, DollarSign, Users, Briefcase, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [activeTab, setActiveTab] = useState("jobs")

  const jobCategories = [
    { id: "all", name: "All Jobs", icon: "💼" },
    { id: "general-labor", name: "General Labor", icon: "👷" },
    { id: "tractor-operator", name: "Tractor Operators", icon: "🚜" },
    { id: "harvest-workers", name: "Harvest Workers", icon: "🌾" },
    { id: "livestock", name: "Livestock Care", icon: "🐄" },
    { id: "management", name: "Farm Management", icon: "📊" },
    { id: "technical", name: "Technical Roles", icon: "🔧" },
  ]

  const jobs = [
    {
      id: 1,
      title: "Experienced Farm Manager Needed",
      company: "Green Valley Farms",
      location: "Mutare, Zimbabwe",
      salary: "$600-800/month",
      type: "Full-time",
      category: "management",
      description:
        "Seeking an experienced farm manager to oversee 200-hectare mixed farming operation. Must have 5+ years experience in crop and livestock management.",
      requirements: [
        "5+ years farm management experience",
        "Knowledge of crop rotation and livestock care",
        "Leadership and team management skills",
        "Valid driver's license",
      ],
      benefits: ["Competitive salary", "Housing provided", "Medical insurance", "Performance bonuses"],
      postedDate: "2 days ago",
      employer: {
        name: "Green Valley Farms",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        rating: 4.7,
      },
      urgent: true,
      featured: true,
    },
    {
      id: 2,
      title: "Tractor Operator - Seasonal Work",
      company: "AgriWorks Zimbabwe",
      location: "Harare, Zimbabwe",
      salary: "$25/day",
      type: "Seasonal",
      category: "tractor-operator",
      description:
        "Looking for skilled tractor operators for planting and cultivation season. Must be able to operate various tractor models and implements.",
      requirements: [
        "Valid tractor operator license",
        "2+ years operating experience",
        "Knowledge of farming implements",
        "Ability to work long hours during season",
      ],
      benefits: ["Daily payment", "Overtime opportunities", "Equipment training provided", "Meals during work"],
      postedDate: "1 day ago",
      employer: {
        name: "AgriWorks Zimbabwe",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        rating: 4.5,
      },
      urgent: false,
      featured: true,
    },
    {
      id: 3,
      title: "General Farm Workers (5 positions)",
      company: "Sunrise Agriculture",
      location: "Bulawayo, Zimbabwe",
      salary: "$15/day",
      type: "Temporary",
      category: "general-labor",
      description:
        "Multiple positions available for general farm work including planting, weeding, and harvesting. No experience required - training provided.",
      requirements: [
        "Physical fitness for manual labor",
        "Willingness to learn",
        "Reliable attendance",
        "Basic English communication",
      ],
      benefits: ["On-the-job training", "Daily payment", "Transport provided", "Potential for permanent employment"],
      postedDate: "3 days ago",
      employer: {
        name: "Sunrise Agriculture",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        rating: 4.3,
      },
      urgent: true,
      featured: false,
    },
    {
      id: 4,
      title: "Livestock Specialist",
      company: "Cattle Ranch Co.",
      location: "Gweru, Zimbabwe",
      salary: "$450-600/month",
      type: "Full-time",
      category: "livestock",
      description:
        "Seeking a livestock specialist to manage cattle breeding program and general herd health. Experience with Brahman and Mashona cattle preferred.",
      requirements: [
        "Diploma in Animal Science or equivalent",
        "3+ years livestock experience",
        "Knowledge of cattle breeding",
        "Basic veterinary skills",
      ],
      benefits: ["Monthly salary", "Housing allowance", "Professional development", "Health insurance"],
      postedDate: "5 days ago",
      employer: {
        name: "Cattle Ranch Co.",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        rating: 4.6,
      },
      urgent: false,
      featured: false,
    },
    {
      id: 5,
      title: "Harvest Crew Leader",
      company: "Harvest Masters",
      location: "Chinhoyi, Zimbabwe",
      salary: "$30/day",
      type: "Seasonal",
      category: "harvest-workers",
      description:
        "Lead a team of harvest workers during maize and tobacco season. Must have leadership experience and knowledge of harvest operations.",
      requirements: [
        "Previous harvest experience",
        "Leadership skills",
        "Knowledge of crop handling",
        "Ability to work under pressure",
      ],
      benefits: ["Leadership premium pay", "Performance bonuses", "Accommodation provided", "Meals included"],
      postedDate: "1 week ago",
      employer: {
        name: "Harvest Masters",
        avatar: "/placeholder.svg?height=40&width=40",
        verified: true,
        rating: 4.4,
      },
      urgent: false,
      featured: false,
    },
  ]

  const workers = [
    {
      id: 1,
      name: "James Mukamuri",
      title: "Experienced Farm Manager",
      location: "Harare, Zimbabwe",
      experience: "8 years",
      specialties: ["Crop Management", "Livestock", "Team Leadership"],
      availability: "Available immediately",
      rate: "$700/month",
      description:
        "Experienced farm manager with expertise in mixed farming operations. Successfully managed farms up to 300 hectares.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.9,
      completedJobs: 12,
      verified: true,
      featured: true,
    },
    {
      id: 2,
      name: "Sarah Chikwanha",
      title: "Tractor Operator",
      location: "Bulawayo, Zimbabwe",
      experience: "5 years",
      specialties: ["Tractor Operation", "Plowing", "Planting"],
      availability: "Available for seasonal work",
      rate: "$28/day",
      description:
        "Skilled tractor operator with experience on various tractor models. Specializes in precision farming techniques.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.8,
      completedJobs: 28,
      verified: true,
      featured: true,
    },
    {
      id: 3,
      name: "Michael Ndoro",
      title: "Livestock Specialist",
      location: "Gweru, Zimbabwe",
      experience: "6 years",
      specialties: ["Cattle Breeding", "Animal Health", "Pasture Management"],
      availability: "Available full-time",
      rate: "$550/month",
      description:
        "Livestock specialist with diploma in Animal Science. Expert in cattle breeding and herd management.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.7,
      completedJobs: 15,
      verified: true,
      featured: false,
    },
    {
      id: 4,
      name: "Grace Mutasa",
      title: "Harvest Supervisor",
      location: "Mutare, Zimbabwe",
      experience: "4 years",
      specialties: ["Harvest Management", "Quality Control", "Team Coordination"],
      availability: "Available for harvest season",
      rate: "$32/day",
      description:
        "Experienced harvest supervisor with strong leadership skills. Ensures quality and efficiency in harvest operations.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 4.6,
      completedJobs: 22,
      verified: true,
      featured: false,
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || job.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const filteredWorkers = workers.filter((worker) => {
    const matchesSearch =
      worker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      worker.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesSearch
  })

  const JobCard = ({ job }: { job: (typeof jobs)[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-semibold text-lg">{job.title}</h3>
              {job.urgent && (
                <Badge variant="destructive" className="text-xs">
                  Urgent
                </Badge>
              )}
              {job.featured && <Badge className="text-xs bg-orange-500">Featured</Badge>}
            </div>
            <p className="text-gray-600 font-medium">{job.company}</p>
          </div>
          <Avatar className="h-12 w-12">
            <AvatarImage src={job.employer.avatar || "/placeholder.svg"} alt={job.employer.name} />
            <AvatarFallback>
              {job.employer.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </div>

        <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{job.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <DollarSign className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium text-green-600">{job.salary}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">{job.type}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{job.postedDate}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {job.employer.verified && (
              <Badge variant="secondary" className="text-xs">
                Verified Employer
              </Badge>
            )}
            <span className="text-sm text-gray-500">★ {job.employer.rating}</span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Phone className="h-4 w-4 mr-1" />
              Apply
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

  const WorkerCard = ({ worker }: { worker: (typeof workers)[0] }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={worker.avatar || "/placeholder.svg"} alt={worker.name} />
            <AvatarFallback>
              {worker.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-lg">{worker.name}</h3>
              {worker.featured && <Badge className="text-xs bg-orange-500">Featured</Badge>}
            </div>
            <p className="text-gray-600 font-medium mb-1">{worker.title}</p>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{worker.location}</span>
              <span className="mx-2">•</span>
              <span>{worker.experience} experience</span>
            </div>
          </div>
        </div>

        <p className="text-gray-700 mb-4 text-sm">{worker.description}</p>

        <div className="mb-4">
          <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
          <div className="flex flex-wrap gap-1">
            {worker.specialties.map((specialty, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {specialty}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <span className="text-gray-500">Rate: </span>
            <span className="font-medium text-green-600">{worker.rate}</span>
          </div>
          <div>
            <span className="text-gray-500">Jobs: </span>
            <span className="font-medium">{worker.completedJobs}</span>
          </div>
          <div className="col-span-2">
            <span className="text-gray-500">Availability: </span>
            <span className="font-medium">{worker.availability}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {worker.verified && (
              <Badge variant="secondary" className="text-xs">
                Verified
              </Badge>
            )}
            <span className="text-sm text-gray-500">★ {worker.rating}</span>
          </div>
          <div className="flex gap-2">
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <Phone className="h-4 w-4 mr-1" />
              Hire
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
              <NavigationLink href="/marketplace" className="text-gray-600 hover:text-green-600">
                Marketplace
              </NavigationLink>
              <NavigationLink href="/equipment" className="text-gray-600 hover:text-green-600">
                Equipment
              </NavigationLink>
              <NavigationLink href="/jobs" className="text-green-600 font-medium">
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
                <Button className="bg-green-600 hover:bg-green-700">Post Job</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Farm Jobs & Workers</h1>
            <p className="text-xl mb-8">Connect with skilled farm workers or find your next agricultural opportunity</p>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for jobs, workers, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <div className="flex items-center justify-between">
              <TabsList>
                <TabsTrigger value="jobs" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  Find Jobs
                </TabsTrigger>
                <TabsTrigger value="workers" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Find Workers
                </TabsTrigger>
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

                <Select defaultValue="newest">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="salary-high">Highest Salary</SelectItem>
                    <SelectItem value="salary-low">Lowest Salary</SelectItem>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <TabsContent value="jobs" className="space-y-6">
              {/* Job Categories */}
              <div className="flex flex-wrap gap-2">
                {jobCategories.map((category) => (
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

              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Available Jobs</h2>
                <p className="text-gray-600">{filteredJobs.length} jobs found</p>
              </div>

              <div className="grid gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="workers" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Available Workers</h2>
                <p className="text-gray-600">{filteredWorkers.length} workers found</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {filteredWorkers.map((worker) => (
                  <WorkerCard key={worker.id} worker={worker} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
