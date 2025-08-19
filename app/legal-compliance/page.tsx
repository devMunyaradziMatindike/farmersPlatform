"use client"

import Link from "next/link"
import Image from "next/image"
import NavigationLink from "@/components/navigation-link"
import {
  Shield,
  Scale,
  FileCheck,
  CreditCard,
  Lock,
  Globe,
  Building,
  CheckCircle,
  AlertTriangle,
  Gavel,
  BookOpen,
  Award,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function LegalCompliancePage() {
  const complianceAreas = [
    {
      title: "Agricultural Marketing Authority (AMA)",
      icon: Scale,
      status: "Fully Compliant",
      description: "Musika Wethu operates under full AMA registration and compliance",
      laws: [
        {
          name: "Agricultural Marketing Authority Act",
          chapter: "Chapter 18:24 (Act 26/2004)",
          compliance: "Registered as agricultural marketplace platform",
        },
      ],
      statutoryInstruments: [
        "SI 129/2017 - Livestock Development Levy (LDL)",
        "SI 218/2020 - Industrial Hemp Regulations",
      ],
      requirements: [
        "Annual registration with AMA as commodity trader/processor",
        "Compliance with commodity-specific licensing requirements",
        "Payment of applicable AMA fees and levies",
        "Adherence to fair pricing and market development standards",
      ],
    },
    {
      title: "Digital Payment Systems",
      icon: CreditCard,
      status: "RBZ Authorized",
      description: "All payments processed through RBZ-approved systems",
      laws: [
        {
          name: "National Payment Systems Act",
          chapter: "Chapter 24:23",
          compliance: "Integrated with ZIMSWITCH and licensed mobile money services",
        },
      ],
      statutoryInstruments: ["2017 Guidelines for Retail Payment Systems", "RBZ Anti-Money Laundering Regulations"],
      requirements: [
        "Integration with RBZ-designated ZIMSWITCH national switch",
        "Partnership with licensed mobile money services (EcoCash, OneMoney)",
        "Compliance with anti-money laundering rules",
        "No unregulated payment mechanisms",
      ],
    },
    {
      title: "Data Protection & Privacy",
      icon: Lock,
      status: "POTRAZ Licensed",
      description: "Full compliance with Zimbabwe's data protection laws",
      laws: [
        {
          name: "Cyber and Data Protection Act",
          chapter: "Chapter 12:07 (2021)",
          compliance: "Licensed data controller with appointed Data Protection Officer",
        },
      ],
      statutoryInstruments: ["SI 155/2024 - Data Protection Regulations"],
      requirements: [
        "POTRAZ license obtained using Form DP1",
        "Qualified Data Protection Officer appointed",
        "24-hour breach notification to POTRAZ",
        "72-hour breach notification to affected individuals",
        "Encrypted data storage and privacy impact assessments",
      ],
    },
    {
      title: "Consumer Protection",
      icon: Shield,
      status: "CPA Compliant",
      description: "Transparent e-commerce practices protecting consumer rights",
      laws: [
        {
          name: "Consumer Protection Act",
          chapter: "Chapter 14:44 (2019)",
          compliance: "E-transaction provisions fully implemented",
        },
      ],
      statutoryInstruments: ["Sections 52-54 - Electronic Transaction Requirements"],
      requirements: [
        "Clear product descriptions, pricing, and delivery terms",
        "Consumer cooling-off period implementation",
        "Prohibition of unsolicited goods or communications",
        "Transparent refund and cancellation policies",
      ],
    },
    {
      title: "Export Regulations",
      icon: Globe,
      status: "Export Ready",
      description: "Supporting farmers with export compliance guidance",
      laws: [
        {
          name: "Export Control System",
          chapter: "Ministry of Lands, Agriculture, Fisheries and Rural Resettlement",
          compliance: "Export permit guidance and phytosanitary certificate support",
        },
      ],
      statutoryInstruments: [
        "SADC Certificate of Origin procedures",
        "COMESA trade agreement compliance",
        "EU interim Economic Partnership Agreement (iEPA)",
      ],
      requirements: [
        "AMA registration for exporters",
        "Ministry export permit acquisition",
        "Phytosanitary certificates for plant exports",
        "RBZ CD1 form completion",
        "ZIMRA customs Bill of Entry",
      ],
    },
    {
      title: "Business & Trade Licensing",
      icon: Building,
      status: "Fully Licensed",
      description: "Complete business registration and trade licensing",
      laws: [
        {
          name: "Shop Licences Act",
          chapter: "Chapter 14:17",
          compliance: "Local council trade licenses obtained",
        },
      ],
      statutoryInstruments: ["ZIMRA tax registration requirements", "VAT/Sales Tax compliance procedures"],
      requirements: [
        "Legal entity registration (Company/SOLEPROPRIETOR)",
        "Local council shop/trade licenses",
        "ZIMRA tax registration (Income Tax, VAT)",
        "Physical office licensing compliance",
      ],
    },
    {
      title: "ICT & Communications",
      icon: FileCheck,
      status: "POTRAZ Approved",
      description: "All ICT services through licensed providers",
      laws: [
        {
          name: "Postal and Telecommunications Act",
          chapter: "Chapter 12:05",
          compliance: "POTRAZ-licensed service providers only",
        },
      ],
      statutoryInstruments: ["Electronic Communications Network licensing", "Mobile app and SMS system regulations"],
      requirements: [
        "POTRAZ-licensed internet service providers",
        "Licensed telecommunications for mobile apps",
        "Compliant web hosting and domain registration",
        "Electronic communications network compliance",
      ],
    },
  ]

  const additionalCompliance = [
    {
      title: "Advertising Standards",
      description: "All advertisements are legal, decent, honest and truthful",
      authority: "Advertising Standards Authority of Zimbabwe (ASAZIM)",
    },
    {
      title: "Quality Standards",
      description: "Guidance on GLOBALGAP, HACCP, and Zimbabwe Standards Authority requirements",
      authority: "Zimbabwe Standards Authority",
    },
    {
      title: "Tobacco Marketing",
      description: "Separate compliance for tobacco products under Tobacco Marketing Act",
      authority: "Chapter 18:20 - Tobacco Marketing and Levy Act",
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
              <NavigationLink href="/events" className="text-gray-600 hover:text-green-600">
                Events
              </NavigationLink>
              <NavigationLink href="/livestock" className="text-gray-600 hover:text-green-600">
                Livestock
              </NavigationLink>
              <NavigationLink href="/legal-compliance" className="text-green-600 font-medium">
                Legal Compliance
              </NavigationLink>
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
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Gavel className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">Legal & Regulatory Compliance</h1>
            <p className="text-xl mb-8">
              Musika Wethu operates in full compliance with Zimbabwe's legal and regulatory framework for online
              agricultural marketplaces, ensuring trust, security, and legal protection for all users.
            </p>
            <div className="flex justify-center">
              <Badge className="bg-green-500 text-white px-6 py-2 text-lg">
                <CheckCircle className="h-5 w-5 mr-2" />
                Fully Compliant Platform
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Compliance Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Musika Wethu adheres to all relevant Zimbabwean laws, acts, and statutory instruments governing online
              agricultural marketplaces.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceAreas.map((area, index) => {
              const Icon = area.icon
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {area.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Primary Laws */}
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        Primary Legislation
                      </h4>
                      {area.laws.map((law, lawIndex) => (
                        <div key={lawIndex} className="bg-gray-50 p-3 rounded-lg mb-2">
                          <p className="font-medium text-sm">{law.name}</p>
                          <p className="text-xs text-gray-600">{law.chapter}</p>
                          <p className="text-xs text-green-600 mt-1">✓ {law.compliance}</p>
                        </div>
                      ))}
                    </div>

                    {/* Statutory Instruments */}
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center">
                        <FileCheck className="h-4 w-4 mr-1" />
                        Statutory Instruments
                      </h4>
                      <ul className="space-y-1">
                        {area.statutoryInstruments.map((si, siIndex) => (
                          <li key={siIndex} className="text-xs text-gray-600 flex items-start">
                            <span className="text-green-500 mr-1">•</span>
                            {si}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Requirements */}
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        Compliance Requirements
                      </h4>
                      <ul className="space-y-1">
                        {area.requirements.slice(0, 3).map((req, reqIndex) => (
                          <li key={reqIndex} className="text-xs text-gray-600 flex items-start">
                            <CheckCircle className="h-3 w-3 text-green-500 mr-1 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                        {area.requirements.length > 3 && (
                          <li className="text-xs text-gray-500">+{area.requirements.length - 3} more requirements</li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Compliance Areas */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Additional Compliance Areas</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {additionalCompliance.map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{item.description}</p>
                  <Badge variant="outline" className="text-xs">
                    {item.authority}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Your Trust & Security is Our Priority</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardContent className="p-6">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Legal Protection</h3>
                  <p className="text-gray-600">
                    All transactions are protected under Zimbabwe's Consumer Protection Act, ensuring your rights as a
                    buyer or seller.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Lock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Data Security</h3>
                  <p className="text-gray-600">
                    Your personal and business data is protected under the Cyber and Data Protection Act with
                    enterprise-grade security.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <AlertTriangle className="h-8 w-8 text-amber-500 mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-4">Important Notice</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                This compliance summary is based on current Zimbabwe legislation as of 2024. Laws and regulations may
                change. Users should consult with qualified legal advisors for specific compliance requirements. Musika
                Wethu continuously monitors regulatory changes to maintain full compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Trade with Confidence</h2>
          <p className="text-xl text-green-100 mb-8">
            Join Zimbabwe's most compliant and secure agricultural marketplace
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth">
              <Button size="lg" variant="secondary">
                Start Trading Safely
              </Button>
            </Link>
            <Link href="/marketplace">
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
              >
                Explore Marketplace
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
              <h3 className="font-semibold mb-4">Legal Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/legal-compliance" className="hover:text-white">
                    Compliance Framework
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
                <li>
                  <Link href="/data-protection" className="hover:text-white">
                    Data Protection
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Regulatory Bodies</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Agricultural Marketing Authority (AMA)</li>
                <li>Reserve Bank of Zimbabwe (RBZ)</li>
                <li>POTRAZ</li>
                <li>ZIMRA</li>
              </ul>
            </div>
            <div>
                              <h3 className="font-semibold mb-4">Contact</h3>
                <div className="space-y-2 text-gray-400">
                  <p>📞 +263 78 233 9300</p>
                  <p>📧 legal@musikawethu.co.zw</p>
                  <p>📍 Harare, Zimbabwe</p>
                </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-gray-400">
            <p>
              &copy; 2025 Nesso Systems (Pvt) Ltd. All rights reserved. | Fully compliant with Zimbabwe's legal
              framework.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
