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
  Star,
  Heart,
  Share2,
  Wheat,
  ShoppingCart,
  Eye,
  TrendingUp,
  Clock,
} from "lucide-react"

export default function MarketplacePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [sortBy, setSortBy] = useState("newest")

  const products = [
    {
      id: 1,
      name: "Premium Maize Seeds - SC573",
      category: "Seeds",
      price: 45,
      unit: "bag",
      location: "Harare",
      seller: "Seedco Zimbabwe",
      rating: 4.8,
      reviews: 124,
      image: "/images/seedco-maize-sc573.png",
      description: "High-yield drought-resistant maize variety perfect for commercial farming",
      inStock: true,
      quantity: 500,
      featured: true,
      discount: 10,
      originalPrice: 50,
    },
    {
      id: 2,
      name: "Organic Fertilizer - ZFC Premium",
      category: "Fertilizers",
      price: 32,
      unit: "bag",
      location: "Bulawayo",
      seller: "ZFC Limited",
      rating: 4.6,
      reviews: 89,
      image: "/images/zfc-fertilizer-bag.jpg",
      description: "Premium organic fertilizer for enhanced soil fertility and crop yield",
      inStock: true,
      quantity: 200,
      featured: false,
    },
    {
      id: 3,
      name: "Fresh Farm Vegetables Mix",
      category: "Produce",
      price: 15,
      unit: "crate",
      location: "Mutare",
      seller: "Green Valley Farms",
      rating: 4.9,
      reviews: 67,
      image: "/images/fresh-farm-produce.png",
      description: "Fresh seasonal vegetables including tomatoes, onions, and leafy greens",
      inStock: true,
      quantity: 50,
      featured: true,
    },
    {
      id: 4,
      name: "Grade A Potatoes",
      category: "Produce",
      price: 25,
      unit: "bag",
      location: "Nyanga",
      seller: "Highland Potato Farm",
      rating: 4.7,
      reviews: 156,
      image: "/images/potatoes.png",
      description: "Premium quality potatoes, perfect for retail and wholesale",
      inStock: true,
      quantity: 300,
      featured: false,
    },
    {
      id: 5,
      name: "Maize Grain - White",
      category: "Grains",
      price: 380,
      unit: "tonne",
      location: "Gweru",
      seller: "Central Grain Co.",
      rating: 4.5,
      reviews: 43,
      image: "/images/maize-field.png",
      description: "High-quality white maize grain suitable for milling and animal feed",
      inStock: true,
      quantity: 100,
      featured: false,
    },
    {
      id: 6,
      name: "Compound Fertilizer NPK",
      category: "Fertilizers",
      price: 28,
      unit: "bag",
      location: "Masvingo",
      seller: "AgriSupply Plus",
      rating: 4.4,
      reviews: 78,
      image: "/images/fertilizer.jpg",
      description: "Balanced NPK fertilizer for optimal plant nutrition and growth",
      inStock: false,
      quantity: 0,
      featured: false,
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "seeds", label: "Seeds" },
    { value: "fertilizers", label: "Fertilizers" },
    { value: "produce", label: "Fresh Produce" },
    { value: "grains", label: "Grains" },
    { value: "livestock", label: "Livestock" },
    { value: "equipment", label: "Equipment" },
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

  const sortOptions = [
    { value: "newest", label: "Newest First" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
    { value: "popular", label: "Most Popular" },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category.toLowerCase() === selectedCategory
    const matchesLocation = selectedLocation === "all" || product.location.toLowerCase() === selectedLocation

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
                <Link href="/marketplace" className="text-green-600 px-3 py-2 rounded-md text-sm font-medium">
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
                  Sell Products
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
              <Link href="/marketplace" className="block px-3 py-2 text-green-600 font-medium">
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
                  Sell Products
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Agricultural Marketplace</h1>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Buy and sell quality agricultural products directly from farmers and suppliers across Zimbabwe. Fresh
              produce, seeds, fertilizers, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48">
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
              <SelectTrigger className="w-full lg:w-48">
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
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full lg:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Products Banner */}
      <section className="py-6 bg-yellow-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <TrendingUp className="h-5 w-5 text-yellow-600 mr-2" />
              <span className="font-medium text-gray-900">Featured Products</span>
              <Badge className="ml-2 bg-yellow-600">Hot Deals</Badge>
            </div>
            <div className="text-sm text-gray-600">Limited time offers available</div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Products ({filteredProducts.length})</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Filter className="h-4 w-4" />
              <span>Showing all results</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.featured && <Badge className="bg-yellow-600">Featured</Badge>}
                    {product.discount && <Badge className="bg-red-600">-{product.discount}%</Badge>}
                    {!product.inStock && <Badge className="bg-gray-600">Out of Stock</Badge>}
                  </div>

                  {/* Action buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-8 h-8 p-0">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  {/* Location */}
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center text-white text-sm bg-black/50 rounded px-2 py-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {product.location}
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-green-600 transition-colors line-clamp-1">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600">by {product.seller}</CardDescription>
                    </div>
                    <div className="flex items-center ml-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-green-600">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                        )}
                        <span className="text-sm text-gray-600">/{product.unit}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {product.quantity} {product.unit}s available
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{product.reviews} reviews</span>
                    </div>
                    <Badge variant={product.inStock ? "default" : "secondary"}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1" disabled={!product.inStock}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? "Add to Cart" : "Unavailable"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or browse all products.</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600">Find exactly what you need for your farm</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.slice(1).map((category, index) => (
              <div key={category.value} className="text-center group cursor-pointer">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Wheat className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{category.label}</h3>
                <p className="text-sm text-gray-600">Browse {category.label.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Selling Your Products Today</h2>
          <p className="text-xl mb-8 text-green-100 max-w-2xl mx-auto">
            Join thousands of farmers and suppliers who are already selling their products on our platform.
          </p>
          <Link href="/create-listing">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Create Your Listing
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
              <p className="text-gray-400">Zimbabwe's premier agricultural marketplace.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/marketplace?category=seeds" className="hover:text-white">
                    Seeds
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace?category=fertilizers" className="hover:text-white">
                    Fertilizers
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace?category=produce" className="hover:text-white">
                    Fresh Produce
                  </Link>
                </li>
                <li>
                  <Link href="/marketplace?category=grains" className="hover:text-white">
                    Grains
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
                  <Link href="/shipping" className="hover:text-white">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-white">
                    Returns
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
