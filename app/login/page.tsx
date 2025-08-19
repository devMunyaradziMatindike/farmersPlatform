"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Phone, Mail, Eye, EyeOff } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [contactMethod, setContactMethod] = useState("phone")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    contact: "",
    password: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen relative flex overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-green-600 via-green-700 to-green-800"></div>
      
             {/* Left Side - Form */}
       <div className="relative z-10 w-full lg:w-1/2 flex items-center justify-center p-4 lg:p-4 pt-20">
         <div className="w-full max-w-md">
           
           

           <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-4 rounded-full">
                  <Image
                    src="/images/musika-wethu-logo.png"
                    alt="Musika Wethu Logo"
                    width={48}
                    height={48}
                    className="h-12 w-auto"
                    style={{ background: "transparent" }}
                  />
                </div>
              </div>
              <CardTitle className="text-2xl text-gray-900">Welcome Back</CardTitle>
              <CardDescription className="text-gray-700">Sign in to your Musika Wethu account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="contact-method">How would you like to sign in?</Label>
                    <Tabs value={contactMethod} onValueChange={setContactMethod} className="mt-2">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="phone" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Phone
                        </TabsTrigger>
                        <TabsTrigger value="email" className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          Email
                        </TabsTrigger>
                      </TabsList>
                    </Tabs>
                  </div>

                  <div>
                    <Label htmlFor="contact">{contactMethod === "phone" ? "Phone Number" : "Email Address"}</Label>
                    <Input
                                              id="contact"
                        type={contactMethod === "phone" ? "tel" : "email"}
                        placeholder={contactMethod === "phone" ? "+263 78 233 9300" : "your@email.com"}
                        value={formData.contact}
                        onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative mt-1">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm">
                        Remember me
                      </Label>
                    </div>
                    <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">
                      Forgot password?
                    </Link>
                  </div>

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Sign In
                  </Button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link href="/auth" className="text-green-600 hover:underline font-medium">
                    Create one here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Back to Home Button - Top Center */}
      <div className="hidden lg:flex absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
        <Link href="/" className="inline-flex items-center space-x-2 text-white hover:text-green-200 bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/20">
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Right Side - African Man Image */}
      <div className="hidden lg:flex relative z-10 w-1/2 items-center justify-center p-4 lg:p-4 pt-20">
        <div className="relative w-full max-w-md h-[540px]">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          <img 
            src="/images/african-man-harvesting-vegetables.jpg" 
            alt="African farmer harvesting vegetables" 
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute bottom-8 left-8 right-8 text-white">
            <h2 className="text-3xl font-bold mb-2">musika. market. imbala</h2>
            <p className="text-lg opacity-90">Welcome back to Zimbabwe's agricultural community</p>
          </div>
        </div>
      </div>

      {/* Mobile Image Background (for smaller screens) */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40"></div>
        <img 
          src="/images/african-man-harvesting-vegetables.jpg" 
          alt="African farmer harvesting vegetables" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  )
}
