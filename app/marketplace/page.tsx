"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, MapPin, Phone, MessageCircle, Heart, SlidersHorizontal, Grid3X3, List } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function MarketplacePage() {
  const [viewMode, setViewMode] = useState("grid")
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 1000])

  const categories = [
    "All Categories",
    "Grains & Cereals",
    "Vegetables",
    "Fruits",
    "Livestock",
    "Animal Production",
    "Dairy Products",
    "Seeds & Seedlings",
    "Agricultural Inputs",
    "Farm Chemicals",
    "Tractors",
    "Harvesters",
    "Seeders",
    "Hoppers",
    "Spray Equipment",
    "Tools & Equipment",
    "Organic Products",
  ]

  const locations = [
    "All Locations",
    "Harare",
    "Bulawayo",
    "Chitungwiza",
    "Mutare",
    "Gweru",
    "Kwekwe",
    "Kadoma",
    "Masvingo",
    "Chinhoyi",
    "Norton",
  ]

  const products = [
    {
      id: 1,
      title: "Premium White Maize - Grade A",
      description: "High quality white maize, freshly harvested. Perfect for commercial use or resale.",
      price: 850,
      unit: "per tonne",
      quantity: "50 tonnes available",
      location: "Harare, Zimbabwe",
      seller: {
        name: "John Mukamuri",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.8,
        verified: true,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "Grains & Cereals",
      featured: true,
      postedDate: "2 days ago",
      views: 234,
      likes: 18,
    },
    {
      id: 2,
      title: "Fresh Tomatoes - Bulk Sale",
      description: "Fresh, ripe tomatoes perfect for markets and restaurants. Harvested this morning.",
      price: 2.5,
      unit: "per kg",
      quantity: "2000 kg available",
      location: "Mutare, Zimbabwe",
      seller: {
        name: "Grace Mutasa",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.9,
        verified: true,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "Vegetables",
      featured: false,
      postedDate: "1 day ago",
      views: 156,
      likes: 12,
    },
    {
      id: 3,
      title: "Organic Beef Cattle - Brahman Cross",
      description: "Healthy Brahman cross cattle, grass-fed and ready for sale. Excellent breeding stock.",
      price: 1200,
      unit: "per head",
      quantity: "15 cattle available",
      location: "Bulawayo, Zimbabwe",
      seller: {
        name: "Michael Ndoro",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.7,
        verified: true,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "Livestock",
      featured: true,
      postedDate: "3 days ago",
      views: 189,
      likes: 25,
    },
    {
      id: 4,
      title: "Hybrid Maize Seeds - SC719",
      description: "High-yielding hybrid maize seeds suitable for Zimbabwe's climate. Drought resistant.",
      price: 45,
      unit: "per 25kg bag",
      quantity: "100 bags available",
      location: "Gweru, Zimbabwe",
      seller: {
        name: "AgriSeeds Zimbabwe",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.6,
        verified: true,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "Seeds & Seedlings",
      featured: false,
      postedDate: "1 week ago",
      views: 298,
      likes: 31,
    },
    {
      id: 5,
      title: "Fresh Milk - Daily Supply",
      description: "Fresh cow milk available daily. Perfect for retailers and consumers. Pasteurized.",
      price: 1.2,
      unit: "per litre",
      quantity: "500 litres daily",
      location: "Chinhoyi, Zimbabwe",
      seller: {
        name: "Dairy Fresh Farms",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.8,
        verified: true,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "Dairy Products",
      featured: false,
      postedDate: "5 days ago",
      views: 167,
      likes: 14,
    },
    {
      id: 6,
      title: "Organic Butternut Squash",
      description: "Organically grown butternut squash. No chemicals used. Perfect for health-conscious buyers.",
      price: 3,
      unit: "per kg",
      quantity: "800 kg available",
      location: "Masvingo, Zimbabwe",
      seller: {
        name: "Organic Valley Co-op",
        avatar: "/placeholder.svg?height=40&width=40",
        rating: 4.9,
        verified: true,
      },
      images: ["/placeholder.svg?height=300&width=400"],
      category: "Organic Products",
      featured: true,
      postedDate: "4 days ago",
      views: 143,
      likes: 19,
    },
  ]

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const ProductCard = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && <Badge className="absolute top-2 left-2 bg-orange-500">Featured</Badge>}
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
          <Heart className="h-4 w-4" />
        </Button>
        <Badge variant="secondary" className="absolute bottom-2 left-2">
          {product.category}
        </Badge>
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg line-clamp-2 flex-1">{product.title}</h3>
        </div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>

        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-2xl font-bold text-green-600">${product.price}</span>
            <span className="text-gray-500 text-sm ml-1">{product.unit}</span>
          </div>
          <span className="text-sm text-gray-500">{product.quantity}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{product.location}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={product.seller.avatar || "/placeholder.svg"} alt={product.seller.name} />
              <AvatarFallback>
                {product.seller.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{product.seller.name}</p>
              <div className="flex items-center">
                <span className="text-xs text-gray-500">★ {product.seller.rating}</span>
                {product.seller.verified && (
                  <Badge variant="secondary" className="ml-1 text-xs">
                    Verified
                  </Badge>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">{product.views} views</p>
            <p className="text-xs text-gray-500">{product.postedDate}</p>
          </div>
        </div>

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
  )

  const ProductListItem = ({ product }: { product: (typeof products)[0] }) => (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative flex-shrink-0">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.title}
              width={120}
              height={120}
              className="w-30 h-30 object-cover rounded-lg"
            />
            {product.featured && <Badge className="absolute -top-1 -left-1 bg-orange-500 text-xs">Featured</Badge>}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-semibold text-lg line-clamp-1">{product.title}</h3>
              <Button variant="ghost" size="icon" className="flex-shrink-0">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>

            <div className="flex items-center gap-4 mb-2">
              <div>
                <span className="text-xl font-bold text-green-600">${product.price}</span>
                <span className="text-gray-500 text-sm ml-1">{product.unit}</span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {product.category}
              </Badge>
              <span className="text-sm text-gray-500">{product.quantity}</span>
            </div>

            <div className="flex items-center text-gray-600 mb-3">
              <MapPin className="h-4 w-4 mr-1" />
              <span className="text-sm">{product.location}</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={product.seller.avatar || "/placeholder.svg"} alt={product.seller.name} />
                  <AvatarFallback className="text-xs">
                    {product.seller.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{product.seller.name}</p>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-500">★ {product.seller.rating}</span>
                    {product.seller.verified && (
                      <Badge variant="secondary" className="ml-1 text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button size="sm" className="bg-green-600 hover:bg-green-700">
                  <Phone className="h-4 w-4 mr-1" />
                  Call
                </Button>
                <Button size="sm" variant="outline">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  WhatsApp
                </Button>
              </div>
            </div>
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
                alt="Musika Wethu Logo"
                width={270}
                height={90}
                className="h-20 w-auto"
                style={{ background: "transparent" }}
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/marketplace" className="text-green-600 font-medium">
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
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link href="/create-listing">
                <Button className="bg-green-600 hover:bg-green-700">Sell Now</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search for products, sellers, or locations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Select defaultValue="all-categories">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category.toLowerCase().replace(/\s+/g, "-")}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="all-locations">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location.toLowerCase().replace(/\s+/g, "-")}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="px-4 bg-transparent">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                    <SheetDescription>Narrow down your search with these filters</SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-6">
                    <div>
                      <Label className="text-base font-medium">Price Range ($)</Label>
                      <div className="mt-2">
                        <Slider
                          value={priceRange}
                          onValueChange={setPriceRange}
                          max={2000}
                          step={10}
                          className="w-full"
                        />
                        <div className="flex justify-between text-sm text-gray-500 mt-1">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Product Type</Label>
                      <div className="mt-3 space-y-3">
                        {["Fresh Produce", "Processed Goods", "Livestock", "Seeds", "Equipment"].map((type) => (
                          <div key={type} className="flex items-center space-x-2">
                            <Checkbox id={type} />
                            <Label htmlFor={type} className="text-sm">
                              {type}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Seller Rating</Label>
                      <div className="mt-3 space-y-3">
                        {["4.5+ Stars", "4.0+ Stars", "3.5+ Stars", "Any Rating"].map((rating) => (
                          <div key={rating} className="flex items-center space-x-2">
                            <Checkbox id={rating} />
                            <Label htmlFor={rating} className="text-sm">
                              {rating}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Availability</Label>
                      <div className="mt-3 space-y-3">
                        {["In Stock", "Pre-order", "Seasonal"].map((availability) => (
                          <div key={availability} className="flex items-center space-x-2">
                            <Checkbox id={availability} />
                            <Label htmlFor={availability} className="text-sm">
                              {availability}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Farm Products</h1>
            <p className="text-gray-600">{filteredProducts.length} products found</p>
          </div>

          <div className="flex items-center gap-4">
            <Select defaultValue="newest">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
