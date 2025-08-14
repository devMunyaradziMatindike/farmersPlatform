"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Heart,
  TrendingUp,
  Users,
  Shield,
  Award,
  MapPin,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function LivestockPage() {
  const livestockCategories = [
    {
      title: "Cattle Farming",
      description: "Premium beef and dairy cattle breeds including Brahman, Mashona, and crossbreeds",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cattle3.jpg-nRtZHl4dTi4nC1cfY2zDB3zp6Bv1LB.jpeg",
      alt: "Herd of Brahman cattle with ear tags in Zimbabwe pasture",
      stats: { listings: "450+", avgPrice: "$1,200", topBreed: "Brahman Cross" },
      benefits: ["High heat tolerance", "Disease resistance", "Excellent meat quality", "Fast growth rates"],
    },
    {
      title: "Goat Production",
      description: "Hardy goat breeds perfect for Zimbabwe's climate, including Boer and indigenous varieties",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20goats-ilgNftKEFzkZnyA4kjCLYVCNjYaDet.png",
      alt: "Two Boer goats with distinctive brown and white markings",
      stats: { listings: "320+", avgPrice: "$180", topBreed: "Boer Goats" },
      benefits: ["Low maintenance", "Drought resistant", "High reproduction rate", "Multiple income streams"],
    },
    {
      title: "Poultry Farming",
      description: "Commercial and free-range chicken operations for meat and egg production",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/free-range-chickens.jpg-pZURgDJYRKGQzbw1wQeHFmS5XfkcCM.jpeg",
      alt: "Free-range chickens grazing on green pasture",
      stats: { listings: "280+", avgPrice: "$8", topBreed: "Broilers & Layers" },
      benefits: ["Quick returns", "High demand", "Scalable operations", "Year-round production"],
    },
  ]

  const valueChainStages = [
    {
      stage: "Breeding & Genetics",
      description: "Quality breeding stock and genetic improvement programs",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brahman1.jpg-X1V7nWlMtOZG9yzXJI0zIiaIrbxUYz.jpeg",
      alt: "Premium Brahman bull with excellent conformation",
      features: ["Registered breeding stock", "AI services", "Genetic testing", "Performance records"],
    },
    {
      stage: "Feed & Nutrition",
      description: "Quality feeds, supplements, and nutritional programs",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chickens-fo47EzqarTQqQzchUePjDJMQpPnT0c.png",
      alt: "Young chicks with feeding and watering systems",
      features: ["Starter feeds", "Growth supplements", "Mineral blocks", "Custom feed formulations"],
    },
    {
      stage: "Health & Veterinary",
      description: "Comprehensive animal health and veterinary services",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cattle2.jpg-JminllSqoplePxMEHCiNJVEmmubTtt.jpeg",
      alt: "Healthy Brahman cattle in natural Zimbabwe landscape",
      features: ["Vaccination programs", "Disease prevention", "Mobile vet services", "Health monitoring"],
    },
    {
      stage: "Marketing & Sales",
      description: "Direct market access and premium pricing opportunities",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/huku.jpg-RkD2rmxC5nGH6stcEScgy2nE1eEMIc.jpeg",
      alt: "Large flock of mixed chickens in commercial setting",
      features: ["Live animal sales", "Processed products", "Export opportunities", "Contract farming"],
    },
  ]

  const featuredListings = [
    {
      id: 1,
      title: "Premium Brahman Bulls - Breeding Stock",
      price: "$2,500",
      location: "Masvingo, Zimbabwe",
      seller: "Sunrise Cattle Ranch",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cattle2.jpg-JminllSqoplePxMEHCiNJVEmmubTtt.jpeg",
      rating: 4.9,
      verified: true,
      description: "Top quality Brahman bulls with excellent genetics for breeding programs.",
    },
    {
      id: 2,
      title: "Boer Goat Breeding Pair",
      price: "$450",
      location: "Bulawayo, Zimbabwe",
      seller: "Heritage Goat Farm",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boergoat.jpg-OsNqROtBsQ6ZDBFVBYVisrcm67WLvc.jpeg",
      rating: 4.8,
      verified: true,
      description: "Registered Boer goat breeding pair with proven bloodlines.",
    },
    {
      id: 3,
      title: "Day-Old Chicks - Broiler Strain",
      price: "$1.20/chick",
      location: "Harare, Zimbabwe",
      seller: "ZimPoultry Hatchery",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jongwe-JXwmwVydLWaYFRTiA3nCI2AO7QQArK.png",
      rating: 4.7,
      verified: true,
      description: "Fast-growing broiler chicks from imported parent stock.",
    },
  ]

  const platformBenefits = [
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Real-time pricing data and market trends for informed decision-making",
    },
    {
      icon: Users,
      title: "Expert Network",
      description: "Connect with veterinarians, nutritionists, and livestock specialists",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Verified sellers and health-certified livestock for peace of mind",
    },
    {
      icon: Award,
      title: "Best Practices",
      description: "Access to modern farming techniques and sustainable practices",
    },
  ]

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
              <Link href="/services" className="text-gray-600 hover:text-green-600">
                Services
              </Link>
              <Link href="/events" className="text-gray-600 hover:text-green-600">
                Events
              </Link>
              <Link href="/livestock" className="text-green-600 font-medium">
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
              <Link href="/auth">
                <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Zimbabwe's Premier
                <span className="block text-green-200">Livestock Marketplace</span>
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Connecting livestock farmers, breeders, and buyers across Zimbabwe. From cattle and goats to poultry -
                discover quality livestock and build sustainable farming operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/marketplace">
                  <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
                    Browse Livestock <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/auth">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
                  >
                    List Your Animals
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cattle3.jpg-nRtZHl4dTi4nC1cfY2zDB3zp6Bv1LB.jpeg"
                    alt="Herd of Brahman cattle in Zimbabwe"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/goats-SXgJHIRfgBsTV9u8gbEvMlZRrO7yJH.png"
                    alt="Boer goats in Zimbabwe farm setting"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/free-range-chickens.jpg-pZURgDJYRKGQzbw1wQeHFmS5XfkcCM.jpeg"
                    alt="Free-range chickens on green pasture"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brahman1.jpg-X1V7nWlMtOZG9yzXJI0zIiaIrbxUYz.jpeg"
                    alt="Premium Brahman bull breeding stock"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Livestock Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Livestock Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of livestock categories, each tailored to Zimbabwe's agricultural
              conditions and market demands.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {livestockCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image src={category.image || "/placeholder.svg"} alt={category.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{category.stats.listings}</p>
                      <p className="text-xs text-gray-500">Active Listings</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{category.stats.avgPrice}</p>
                      <p className="text-xs text-gray-500">Average Price</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold text-green-600">{category.stats.topBreed}</p>
                      <p className="text-xs text-gray-500">Popular Breed</p>
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    {category.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">Explore {category.title}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Chain Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Livestock Value Chain</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Musika Wethu supports every stage of the livestock value chain, from breeding to market, ensuring
              sustainable and profitable livestock farming.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueChainStages.map((stage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src={stage.image || "/placeholder.svg"}
                      alt={stage.alt}
                      width={200}
                      height={150}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{stage.stage}</h3>
                  <p className="text-gray-600 text-sm mb-4">{stage.description}</p>
                  <div className="space-y-1">
                    {stage.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                        <Star className="h-3 w-3 text-green-600 mr-1 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Livestock</h2>
            <p className="text-xl text-gray-600">Premium livestock from verified sellers across Zimbabwe</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredListings.map((listing) => (
              <Card key={listing.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 left-2 bg-orange-500">Featured</Badge>
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{listing.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{listing.description}</p>

                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-green-600">{listing.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{listing.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{listing.location}</span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <span className="text-sm font-medium">{listing.seller}</span>
                      {listing.verified && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          Verified
                        </Badge>
                      )}
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
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Musika Wethu for Livestock?</h2>
            <p className="text-xl text-gray-600">
              Our platform provides comprehensive support for livestock farmers and buyers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Livestock Showcase Gallery */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Zimbabwe's Livestock Excellence</h2>
            <p className="text-xl text-gray-600">
              Showcasing the diversity and quality of livestock across Zimbabwe's agricultural landscape
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cattle3.jpg-nRtZHl4dTi4nC1cfY2zDB3zp6Bv1LB.jpeg"
                alt="Brahman cattle herd with ear tags"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chickens-fo47EzqarTQqQzchUePjDJMQpPnT0c.png"
                alt="Young chicks in brooding setup"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="space-y-4 mt-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20goats-ilgNftKEFzkZnyA4kjCLYVCNjYaDet.png"
                alt="Boer goats with distinctive markings"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/huku.jpg-RkD2rmxC5nGH6stcEScgy2nE1eEMIc.jpeg"
                alt="Commercial chicken flock"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="space-y-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cattle2.jpg-JminllSqoplePxMEHCiNJVEmmubTtt.jpeg"
                alt="Premium Brahman bull in field"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jongwe-JXwmwVydLWaYFRTiA3nCI2AO7QQArK.png"
                alt="Colorful rooster showing breed quality"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
            <div className="space-y-4 mt-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boergoat.jpg-OsNqROtBsQ6ZDBFVBYVisrcm67WLvc.jpeg"
                alt="Boer goat buck with excellent conformation"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/free-range-chickens.jpg-pZURgDJYRKGQzbw1wQeHFmS5XfkcCM.jpeg"
                alt="Free-range chickens on pasture"
                width={300}
                height={200}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Livestock Business?</h2>
          <p className="text-xl text-green-100 mb-8">
            Join Zimbabwe's largest livestock marketplace and connect with buyers and sellers nationwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" variant="secondary">
                Start Selling Livestock
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Browse Available Animals
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
              <h3 className="font-semibold mb-4">Livestock</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/livestock" className="hover:text-white">
                    Cattle
                  </Link>
                </li>
                <li>
                  <Link href="/livestock" className="hover:text-white">
                    Goats
                  </Link>
                </li>
                <li>
                  <Link href="/livestock" className="hover:text-white">
                    Poultry
                  </Link>
                </li>
                <li>
                  <Link href="/livestock" className="hover:text-white">
                    Breeding Stock
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services" className="hover:text-white">
                    Veterinary Services
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Animal Nutrition
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Breeding Consultation
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Market Intelligence
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 +263 123 456 789</p>
                <p>📧 livestock@musikawethu.co.zw</p>
                <p>📍 Harare, Zimbabwe</p>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Nesso Systems (Pvt) Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
