"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
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
            Privacy <span className="text-green-600">Policy</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information on Musika Wethu.
          </p>
        </div>
      </section>

      {/* Privacy Content */}
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

            {/* 1. Introduction */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  Nesso Systems (Pvt) Ltd ("we," "our," or "us") operates Musika Wethu, an agricultural marketplace platform. 
                  We are committed to protecting your privacy and ensuring the security of your personal information.
                </p>
                <p className="text-gray-600">
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform. 
                  By using Musika Wethu, you consent to the data practices described in this policy.
                </p>
              </CardContent>
            </Card>

            {/* 2. Information We Collect */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
                <p className="text-gray-600 mb-4">When you create an account or use our services, we may collect:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-6">
                  <li>Name, email address, and phone number</li>
                  <li>Business information (farm name, location, type of operation)</li>
                  <li>Profile information and preferences</li>
                  <li>Payment information (when applicable)</li>
                  <li>Communication preferences</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">2.2 Usage Information</h3>
                <p className="text-gray-600 mb-4">We automatically collect information about your use of the platform:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-6">
                  <li>IP address and device information</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on the platform</li>
                  <li>Search queries and interactions</li>
                  <li>Location data (with your consent)</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">2.3 Content Information</h3>
                <p className="text-gray-600 mb-4">When you use our marketplace features, we may collect:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Product listings and descriptions</li>
                  <li>Images and media files you upload</li>
                  <li>Reviews and ratings</li>
                  <li>Messages and communications with other users</li>
                  <li>Transaction history and preferences</li>
                </ul>
              </CardContent>
            </Card>

            {/* 3. How We Use Your Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
                  <li>Provide and maintain our agricultural marketplace services</li>
                  <li>Connect buyers and sellers effectively</li>
                  <li>Process transactions and facilitate communications</li>
                  <li>Send you important updates and notifications</li>
                  <li>Improve our platform and user experience</li>
                  <li>Provide customer support and resolve issues</li>
                  <li>Ensure platform security and prevent fraud</li>
                  <li>Comply with legal obligations and regulations</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Analyze usage patterns and trends</li>
                </ul>
              </CardContent>
            </Card>

            {/* 4. Information Sharing and Disclosure */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
                <p className="text-gray-600 mb-4">We may share your information in the following circumstances:</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4.1 With Other Users</h3>
                <p className="text-gray-600 mb-4">
                  When you create listings or interact with other users, certain information may be visible to them, including:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-6">
                  <li>Your business name and location</li>
                  <li>Product listings and descriptions</li>
                  <li>Contact information (as provided by you)</li>
                  <li>Reviews and ratings</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">4.2 Service Providers</h3>
                <p className="text-gray-600 mb-4">
                  We may share information with trusted third-party service providers who assist us in:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-6">
                  <li>Platform hosting and maintenance</li>
                  <li>Payment processing and security</li>
                  <li>Customer support services</li>
                  <li>Analytics and data analysis</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">4.3 Legal Requirements</h3>
                <p className="text-gray-600">
                  We may disclose your information if required by law, regulation, or legal process, 
                  or to protect our rights, property, or safety, or that of our users.
                </p>
              </CardContent>
            </Card>

            {/* 5. Data Security */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information against:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                  <li>Unauthorized access, alteration, or disclosure</li>
                  <li>Data loss or destruction</li>
                  <li>Malicious attacks and security breaches</li>
                </ul>
                <p className="text-gray-600">
                  However, no method of transmission over the internet or electronic storage is 100% secure. 
                  We cannot guarantee absolute security but we continuously work to improve our security measures.
                </p>
              </CardContent>
            </Card>

            {/* 6. Data Retention */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                <p className="text-gray-600 mb-4">
                  We retain your personal information for as long as necessary to:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                  <li>Provide our services to you</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes and enforce agreements</li>
                  <li>Improve our platform and services</li>
                </ul>
                <p className="text-gray-600">
                  When you delete your account, we will delete or anonymize your personal information, 
                  except where we are required to retain it for legal or regulatory purposes.
                </p>
              </CardContent>
            </Card>

            {/* 7. Your Rights and Choices */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
                <p className="text-gray-600 mb-4">You have the following rights regarding your personal information:</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-3">7.1 Access and Update</h3>
                <p className="text-gray-600 mb-4">
                  You can access, update, or correct your personal information through your account settings or by contacting us.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">7.2 Data Portability</h3>
                <p className="text-gray-600 mb-4">
                  You can request a copy of your personal information in a structured, machine-readable format.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">7.3 Deletion</h3>
                <p className="text-gray-600 mb-4">
                  You can request deletion of your personal information, subject to certain legal and contractual obligations.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">7.4 Marketing Communications</h3>
                <p className="text-gray-600 mb-4">
                  You can opt out of marketing communications at any time by following the unsubscribe instructions 
                  in our emails or updating your preferences in your account settings.
                </p>

                <h3 className="text-lg font-semibold text-gray-800 mb-3">7.5 Cookies and Tracking</h3>
                <p className="text-gray-600">
                  You can control cookies and tracking technologies through your browser settings. 
                  However, disabling certain cookies may affect the functionality of our platform.
                </p>
              </CardContent>
            </Card>

            {/* 8. Cookies and Tracking Technologies */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking Technologies</h2>
                <p className="text-gray-600 mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our platform:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4 mb-4">
                  <li><strong>Essential Cookies:</strong> Required for basic platform functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how users interact with our platform</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used for targeted advertising (with your consent)</li>
                </ul>
                <p className="text-gray-600">
                  You can manage your cookie preferences through your browser settings or our cookie consent banner.
                </p>
              </CardContent>
            </Card>

            {/* 9. Third-Party Services */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Services</h2>
                <p className="text-gray-600 mb-4">
                  Our platform may contain links to third-party websites or integrate with third-party services. 
                  We are not responsible for the privacy practices of these third parties.
                </p>
                <p className="text-gray-600">
                  When you use third-party services (such as payment processors or social media platforms), 
                  their privacy policies will govern how your information is handled.
                </p>
              </CardContent>
            </Card>

            {/* 10. Children's Privacy */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-600">
                  Our platform is not intended for children under the age of 18. We do not knowingly collect 
                  personal information from children under 18. If you believe we have collected information 
                  from a child under 18, please contact us immediately.
                </p>
              </CardContent>
            </Card>

            {/* 11. International Data Transfers */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. International Data Transfers</h2>
                <p className="text-gray-600">
                  Your information may be transferred to and processed in countries other than Zimbabwe. 
                  We ensure that such transfers comply with applicable data protection laws and implement 
                  appropriate safeguards to protect your information.
                </p>
              </CardContent>
            </Card>

            {/* 12. Changes to This Policy */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Policy</h2>
                <p className="text-gray-600">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes 
                  by posting the new policy on our platform and updating the "Last Updated" date. 
                  Your continued use of the platform after such changes constitutes acceptance of the updated policy.
                </p>
              </CardContent>
            </Card>

            {/* 13. Contact Information */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>📞 Phone: +263 78 233 9300</p>
                  <p>📧 Email: info@nessosystems.co.zw</p>
                  <p>📍 Address: Farm 42 Coburn Estate, Chegutu, Zimbabwe</p>
                </div>
                <p className="text-gray-600 mt-4">
                  <strong>Data Protection Officer:</strong> For privacy-related inquiries, please email privacy@nessosystems.co.zw
                </p>
              </CardContent>
            </Card>

            {/* Acceptance Section */}
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-green-800 mb-4">Your Privacy Matters</h3>
                <p className="text-green-700 mb-6">
                  We are committed to protecting your privacy and ensuring transparency in how we handle your data. 
                  If you have any concerns, please don't hesitate to contact us.
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
