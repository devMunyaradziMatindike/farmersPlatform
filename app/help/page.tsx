"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/musika-wethu-logo.png"
                alt="Musika Wethu"
                width={270}
                height={90}
                className="h-20 w-auto"
                style={{ background: "transparent" }}
              />
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/marketplace" className="text-gray-600 hover:text-green-600">Marketplace</Link>
              <Link href="/equipment" className="text-gray-600 hover:text-green-600">Equipment</Link>
              <Link href="/jobs" className="text-gray-600 hover:text-green-600">Jobs</Link>
              <Link href="/services" className="text-gray-600 hover:text-green-600">Services</Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Link href="/auth"><Button variant="outline">Sign In</Button></Link>
              <Link href="/auth"><Button className="bg-green-600 hover:bg-green-700">Get Started</Button></Link>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Help <span className="text-green-600">Center</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with Musika Wethu easily. Find simple step-by-step guides to help you navigate our agricultural marketplace.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Getting Started</h2>
              
              <Card className="mb-8">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Sign Up</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Visit the Sign Up Page</h4>
                        <p className="text-gray-600">Click the "Get Started" button at the top of any page.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Fill in Your Information</h4>
                        <p className="text-gray-600">Enter your name, phone number, email, and password. We'll send you a verification code.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Choose Your User Type</h4>
                        <p className="text-gray-600">Select whether you're a Farmer, Equipment Owner, Service Provider, or Buyer.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Verify Your Phone Number</h4>
                        <p className="text-gray-600">Enter the 6-digit code we sent to your phone to verify your account.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">5</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Complete Your Profile</h4>
                        <p className="text-gray-600">Add your business information and location to help other users find you.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Sign In</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Go to Sign In Page</h4>
                        <p className="text-gray-600">Click the "Sign In" button at the top of any page.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Enter Your Credentials</h4>
                        <p className="text-gray-600">Use your phone number or email address with your password.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Access Your Account</h4>
                        <p className="text-gray-600">You'll be taken to your dashboard to manage your listings and account.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-900 mb-2">🔐 Forgot Password?</h4>
                    <p className="text-yellow-800 text-sm">Click "Forgot Password?" on the sign-in page for a reset link.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Buying & Selling</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">How to Sell Your Products</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Create a Listing</h4>
                          <p className="text-gray-600 text-sm">Go to "Create Listing" from your dashboard.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Add Product Details</h4>
                          <p className="text-gray-600 text-sm">Fill in product name, description, quantity, price, and location.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Upload Photos</h4>
                          <p className="text-gray-600 text-sm">Add clear photos of your product.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5">4</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Publish Your Listing</h4>
                          <p className="text-gray-600 text-sm">Review and click "Publish" to make it visible to buyers.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">How to Buy Products</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5">1</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Browse the Marketplace</h4>
                          <p className="text-gray-600 text-sm">Visit the Marketplace section to see all products.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5">2</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Review Product Details</h4>
                          <p className="text-gray-600 text-sm">Read descriptions, check photos, and review seller profiles.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5">3</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Contact the Seller</h4>
                          <p className="text-gray-600 text-sm">Click "Contact Seller" to send a message and ask questions.</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="bg-green-100 text-green-800 rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs mt-0.5">4</div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Complete the Transaction</h4>
                          <p className="text-gray-600 text-sm">Meet safely, inspect the product, make payment, and leave a review.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Safety & Security</h2>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Important Safety Tips</h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-2">🤝 Meet in Safe Locations</h4>
                      <p className="text-green-800 text-sm">Always meet in public places like markets or police stations.</p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">📱 Verify Contact Information</h4>
                      <p className="text-blue-800 text-sm">Call the person before meeting to verify their identity.</p>
                    </div>

                    <div className="p-4 bg-yellow-50 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">💰 Be Careful with Money</h4>
                      <p className="text-yellow-800 text-sm">Count money carefully and verify it's genuine.</p>
                    </div>

                    <div className="p-4 bg-red-50 rounded-lg">
                      <h4 className="font-semibold text-red-900 mb-2">✅ Verify Product Quality</h4>
                      <p className="text-red-800 text-sm">Always inspect products before payment.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-green-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-green-800 mb-4">Still Need Help?</h3>
                <p className="text-green-700 mb-6">
                  Our support team is here to help you succeed on Musika Wethu.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-green-600 hover:bg-green-700">Contact Support</Button>
                  </Link>
                  <Link href="/auth">
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">Get Started</Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-white font-bold text-xl">
                  Musika Wethu
                </div>
              </div>
              <p className="text-gray-400">
                Zimbabwe's premier agricultural marketplace connecting farmers, buyers, and service providers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/marketplace" className="hover:text-white">Farm Produce</Link></li>
                <li><Link href="/equipment" className="hover:text-white">Equipment Rental</Link></li>
                <li><Link href="/jobs" className="hover:text-white">Jobs & Labor</Link></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Help Center</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>📞 +263 78 233 9300</p>
                <p>📧 info@nessosystems.co.zw</p>
                <p>📍 Farm 42 Coburn Estate, Chegutu</p>
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
