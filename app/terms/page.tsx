"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
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
              <Link href="/livestock" className="text-gray-600 hover:text-green-600">
                Livestock
              </Link>
              <Link href="/legal-compliance" className="text-gray-600 hover:text-green-600">
                Legal Compliance
              </Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Link href="/auth">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/auth">
                <Button className="bg-green-600 hover:bg-green-700">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Terms of <span className="text-green-600">Service</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Please read these terms carefully before using Musika Wethu. By using our platform, you agree to these terms and conditions.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Last Updated */}
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <p className="text-blue-800 font-medium">
                  <strong>Last Updated:</strong> January 2025
                </p>
              </CardContent>
            </Card>

            {/* 1. Acceptance of Terms */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using Musika Wethu ("the Platform"), you accept and agree to be bound by the terms and provision of this agreement. 
                  If you do not agree to abide by the above, please do not use this service.
                </p>
                <p className="text-gray-600">
                  These Terms of Service apply to all users of the Platform, including without limitation users who are browsers, vendors, customers, merchants, 
                  and/or contributors of content.
                </p>
              </CardContent>
            </Card>

            {/* 2. Platform Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Platform Description</h2>
                <p className="text-gray-600 mb-4">
                  Musika Wethu is an agricultural marketplace platform that connects farmers, buyers, service providers, and equipment owners across Zimbabwe. 
                  Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Agricultural produce buying and selling</li>
                  <li>Equipment rental and sales</li>
                  <li>Job postings and labor services</li>
                  <li>Agricultural consulting and services</li>
                  <li>Event listings and management</li>
                  <li>Livestock trading</li>
                </ul>
              </CardContent>
            </Card>

            {/* 3. User Accounts */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
                <p className="text-gray-600 mb-4">
                  To access certain features of the Platform, you must create an account. You are responsible for:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Providing accurate and complete information</li>
                  <li>Maintaining the security of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Notifying us immediately of any unauthorized use</li>
                  <li>Ensuring you are at least 18 years old or have parental consent</li>
                </ul>
              </CardContent>
            </Card>

            {/* 4. User Responsibilities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
                <p className="text-gray-600 mb-4">As a user of Musika Wethu, you agree to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide accurate and truthful information about products and services</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not engage in fraudulent, deceptive, or illegal activities</li>
                  <li>Respect the intellectual property rights of others</li>
                  <li>Not use the platform for spam or harassment</li>
                  <li>Maintain appropriate insurance for equipment rentals</li>
                  <li>Ensure all agricultural products meet safety standards</li>
                </ul>
              </CardContent>
            </Card>

            {/* 5. Transaction and Payment Terms */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Transaction and Payment Terms</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Important:</strong> Musika Wethu acts as a connection platform only. We do not process payments or handle transactions directly.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>All transactions are conducted directly between buyers and sellers</li>
                  <li>Users are responsible for negotiating terms, prices, and payment methods</li>
                  <li>We recommend using secure payment methods (EcoCash, OneMoney, bank transfers)</li>
                  <li>Users should verify product quality and seller credibility before payment</li>
                  <li>We are not liable for any disputes arising from transactions</li>
                </ul>
              </CardContent>
            </Card>

            {/* 6. Prohibited Activities */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Prohibited Activities</h2>
                <p className="text-gray-600 mb-4">You may not use the Platform to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Sell illegal or prohibited agricultural products</li>
                  <li>List stolen or counterfeit equipment</li>
                  <li>Engage in price manipulation or market abuse</li>
                  <li>Post false or misleading information</li>
                  <li>Harass, threaten, or discriminate against other users</li>
                  <li>Attempt to gain unauthorized access to the platform</li>
                  <li>Use automated systems to scrape or collect data</li>
                  <li>Violate any applicable agricultural regulations</li>
                </ul>
              </CardContent>
            </Card>

            {/* 7. Intellectual Property */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  The Platform and its original content, features, and functionality are owned by Nesso Systems (Pvt) Ltd and are protected by international 
                  copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
                <p className="text-gray-600">
                  Users retain ownership of content they post but grant us a license to use, display, and distribute such content on the Platform.
                </p>
              </CardContent>
            </Card>

            {/* 8. Privacy and Data Protection */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
                <p className="text-gray-600 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Platform, to understand our practices.
                </p>
                <p className="text-gray-600">
                  We collect and process personal data in accordance with applicable data protection laws and our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            {/* 9. Disclaimers and Limitations */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimers and Limitations</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Platform Disclaimer:</strong> Musika Wethu is provided "as is" without warranties of any kind. We do not guarantee:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>The accuracy of user-provided information</li>
                  <li>The quality or safety of products listed</li>
                  <li>The reliability of equipment or services</li>
                  <li>Uninterrupted or error-free service</li>
                  <li>The outcome of any transactions</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  <strong>Limitation of Liability:</strong> Nesso Systems (Pvt) Ltd shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages arising from your use of the Platform.
                </p>
              </CardContent>
            </Card>

            {/* 10. Indemnification */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
                <p className="text-gray-600">
                  You agree to indemnify and hold harmless Nesso Systems (Pvt) Ltd, its officers, directors, employees, and agents from any claims, damages, 
                  losses, or expenses arising from your use of the Platform, violation of these Terms, or violation of any rights of another party.
                </p>
              </CardContent>
            </Card>

            {/* 11. Termination */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Termination</h2>
                <p className="text-gray-600 mb-4">
                  We may terminate or suspend your account and access to the Platform immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
                <p className="text-gray-600">
                  Upon termination, your right to use the Platform will cease immediately, and we may delete your account and data.
                </p>
              </CardContent>
            </Card>

            {/* 12. Governing Law */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Governing Law</h2>
                <p className="text-gray-600">
                  These Terms shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes arising from these Terms or your use of 
                  the Platform shall be subject to the exclusive jurisdiction of the courts of Zimbabwe.
                </p>
              </CardContent>
            </Card>

            {/* 13. Changes to Terms */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on the Platform. 
                  Your continued use of the Platform after such modifications constitutes acceptance of the updated Terms.
                </p>
              </CardContent>
            </Card>

            {/* 14. Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>📞 Phone: +263 78 233 9300</p>
                  <p>📧 Email: info@nessosystems.co.zw</p>
                  <p>📍 Address: Farm 42 Coburn Estate, Chegutu, Zimbabwe</p>
                </div>
              </CardContent>
            </Card>

            {/* Acceptance Section */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-green-800 mb-4">Acceptance of Terms</h3>
                <p className="text-green-700 mb-6">
                  By using Musika Wethu, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/auth">
                    <Button className="bg-green-600 hover:bg-green-700">
                      Create Account
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
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
              <h3 className="font-semibold mb-4">Marketplace</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/marketplace" className="hover:text-white">
                    Farm Produce
                  </Link>
                </li>
                <li>
                  <Link href="/equipment" className="hover:text-white">
                    Equipment Rental
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="hover:text-white">
                    Jobs & Labor
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
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
