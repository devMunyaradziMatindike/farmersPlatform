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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function AuthPage() {
  const [step, setStep] = useState("contact") // contact, otp, password, profile
  const [contactMethod, setContactMethod] = useState("phone")
  const [showPassword, setShowPassword] = useState(false)
  const [userType, setUserType] = useState("farmer")
  const [formData, setFormData] = useState({
    contact: "",
    otp: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    location: "",
    userType: "farmer",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === "contact") {
      setStep("otp")
    } else if (step === "otp") {
      setStep("password")
    } else if (step === "password") {
      setStep("profile")
    } else {
      // Complete registration
      window.location.href = "/dashboard"
    }
  }

  const renderContactStep = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="contact-method">How would you like to sign up?</Label>
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
          placeholder={contactMethod === "phone" ? "+263 123 456 789" : "your@email.com"}
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="user-type">I am a:</Label>
        <Select value={userType} onValueChange={setUserType}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
                     <SelectContent>
             <SelectItem value="farmer">Farmer/Seller</SelectItem>
             <SelectItem value="buyer">Buyer</SelectItem>
             <SelectItem value="service-provider">Service Provider</SelectItem>
           </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Send Verification Code
      </Button>
    </div>
  )

  const renderOTPStep = () => (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-sm text-gray-600">We sent a verification code to {formData.contact}</p>
      </div>

      <div>
        <Label htmlFor="otp">Verification Code</Label>
        <Input
          id="otp"
          type="text"
          placeholder="Enter 6-digit code"
          value={formData.otp}
          onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
          className="mt-1 text-center text-2xl tracking-widest"
          maxLength={6}
        />
      </div>

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Verify Code
      </Button>

      <div className="text-center">
        <Button variant="link" className="text-sm">
          Didn't receive code? Resend
        </Button>
      </div>
    </div>
  )

  const renderPasswordStep = () => (
    <div className="space-y-4">
      <div>
        <Label htmlFor="password">Create Password</Label>
        <div className="relative mt-1">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
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

      <div>
        <Label htmlFor="confirm-password">Confirm Password</Label>
        <Input
          id="confirm-password"
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          className="mt-1"
        />
      </div>

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Set Password
      </Button>
    </div>
  )

  const renderProfileStep = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="first-name">First Name</Label>
          <Input
            id="first-name"
            placeholder="John"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="last-name">Last Name</Label>
          <Input
            id="last-name"
            placeholder="Mukamuri"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className="mt-1"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="location">Location</Label>
        <Select>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select your location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="harare">Harare</SelectItem>
            <SelectItem value="bulawayo">Bulawayo</SelectItem>
            <SelectItem value="chitungwiza">Chitungwiza</SelectItem>
            <SelectItem value="mutare">Mutare</SelectItem>
            <SelectItem value="gweru">Gweru</SelectItem>
            <SelectItem value="kwekwe">Kwekwe</SelectItem>
            <SelectItem value="kadoma">Kadoma</SelectItem>
            <SelectItem value="masvingo">Masvingo</SelectItem>
            <SelectItem value="chinhoyi">Chinhoyi</SelectItem>
            <SelectItem value="norton">Norton</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="profile-photo">Profile Photo</Label>
        <Input id="profile-photo" type="file" accept="image/*" className="mt-1" />
        <p className="text-xs text-gray-500 mt-1">Upload a clear photo of yourself for trust and verification</p>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="text-sm">
          I agree to the{" "}
          <Link href="/terms" className="text-green-600 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-green-600 hover:underline">
            Privacy Policy
          </Link>
        </Label>
      </div>

      <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
        Complete Registration
      </Button>
    </div>
  )

  const getStepTitle = () => {
    switch (step) {
      case "contact":
        return "Create Your Account"
      case "otp":
        return "Verify Your Contact"
      case "password":
        return "Secure Your Account"
      case "profile":
        return "Complete Your Profile"
      default:
        return "Create Your Account"
    }
  }

  const getStepDescription = () => {
    switch (step) {
      case "contact":
        return "Join Zimbabwe's largest agricultural marketplace"
      case "otp":
        return "Enter the verification code we sent you"
      case "password":
        return "Create a strong password for your account"
      case "profile":
        return "Tell us a bit about yourself"
      default:
        return "Join Zimbabwe's largest agricultural marketplace"
    }
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
              <CardTitle className="text-2xl text-gray-900">{getStepTitle()}</CardTitle>
              <CardDescription className="text-gray-700">{getStepDescription()}</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                {step === "contact" && renderContactStep()}
                {step === "otp" && renderOTPStep()}
                {step === "password" && renderPasswordStep()}
                {step === "profile" && renderProfileStep()}
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link href="/login" className="text-green-600 hover:underline font-medium">
                    Sign in here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Progress Indicator */}
          <div className="mt-6">
            <div className="flex justify-center space-x-2">
              {["contact", "otp", "password", "profile"].map((stepName, index) => (
                <div
                  key={stepName}
                  className={`w-3 h-3 rounded-full ${
                    step === stepName
                      ? "bg-green-600"
                      : ["contact", "otp", "password", "profile"].indexOf(step) > index
                        ? "bg-green-300"
                        : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
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
              <p className="text-lg opacity-90">Connect with farmers, buyers, and service providers across the country</p>
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
