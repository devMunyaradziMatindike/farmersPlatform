"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Upload, DollarSign, Tractor, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

export default function CreateListingPage() {
  const [listingType, setListingType] = useState("product")
  const [images, setImages] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState("")

  const addTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      setTags([...tags, newTag.trim()])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      // In a real app, you'd upload these to a server
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setImages([...images, ...newImages])
    }
  }

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/dashboard" className="flex items-center space-x-2 text-gray-600 hover:text-green-600">
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Dashboard</span>
              </Link>
            </div>
            <Link href="/" className="flex items-center space-x-2">
              <Tractor className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-green-600">ZimFarm</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Listing</h1>
            <p className="text-gray-600">Share your products, services, or opportunities with the farming community</p>
          </div>

          <Tabs value={listingType} onValueChange={setListingType} className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="equipment">Equipment</TabsTrigger>
              <TabsTrigger value="job">Job</TabsTrigger>
              <TabsTrigger value="service">Service</TabsTrigger>
              <TabsTrigger value="event">Event</TabsTrigger>
            </TabsList>

            <form className="space-y-6">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                  <CardDescription>Provide the essential details about your listing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      placeholder={
                        listingType === "product"
                          ? "e.g., Fresh Maize - Grade A Quality"
                          : listingType === "equipment"
                            ? "e.g., John Deere Tractor for Rent"
                            : listingType === "job"
                              ? "e.g., Experienced Farm Manager Needed"
                              : listingType === "service"
                                ? "e.g., Agricultural Consultation Services"
                                : "e.g., Modern Farming Techniques Workshop"
                      }
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Provide a detailed description..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {listingType === "product" && (
                            <>
                              <SelectItem value="grains">Grains & Cereals</SelectItem>
                              <SelectItem value="vegetables">Vegetables</SelectItem>
                              <SelectItem value="fruits">Fruits</SelectItem>
                              <SelectItem value="livestock">Livestock</SelectItem>
                              <SelectItem value="animal-production">Animal Production</SelectItem>
                              <SelectItem value="dairy">Dairy Products</SelectItem>
                              <SelectItem value="seeds">Seeds & Seedlings</SelectItem>
                              <SelectItem value="agricultural-inputs">Agricultural Inputs</SelectItem>
                              <SelectItem value="farm-chemicals">Farm Chemicals</SelectItem>
                              <SelectItem value="organic">Organic Products</SelectItem>
                            </>
                          )}
                          {listingType === "equipment" && (
                            <>
                              <SelectItem value="tractors">Tractors</SelectItem>
                              <SelectItem value="harvesters">Harvesters</SelectItem>
                              <SelectItem value="seeders">Seeders</SelectItem>
                              <SelectItem value="hoppers">Hoppers</SelectItem>
                              <SelectItem value="spray-equipment">Spray Equipment</SelectItem>
                              <SelectItem value="plows">Plows & Tillers</SelectItem>
                              <SelectItem value="irrigation">Irrigation Equipment</SelectItem>
                              <SelectItem value="tools">Hand Tools</SelectItem>
                              <SelectItem value="general-equipment">General Equipment</SelectItem>
                            </>
                          )}
                          {listingType === "job" && (
                            <>
                              <SelectItem value="management">Farm Management</SelectItem>
                              <SelectItem value="labor">General Labor</SelectItem>
                              <SelectItem value="operators">Equipment Operators</SelectItem>
                              <SelectItem value="livestock">Livestock Care</SelectItem>
                              <SelectItem value="technical">Technical Roles</SelectItem>
                            </>
                          )}
                          {listingType === "service" && (
                            <>
                              <SelectItem value="consultation">Agricultural Consultation</SelectItem>
                              <SelectItem value="veterinary">Veterinary Services</SelectItem>
                              <SelectItem value="repair">Equipment Repair</SelectItem>
                              <SelectItem value="testing">Soil Testing</SelectItem>
                              <SelectItem value="training">Training & Education</SelectItem>
                            </>
                          )}
                          {listingType === "event" && (
                            <>
                              <SelectItem value="conference">Conference</SelectItem>
                              <SelectItem value="workshop">Workshop</SelectItem>
                              <SelectItem value="trade-show">Trade Show</SelectItem>
                              <SelectItem value="auction">Auction</SelectItem>
                              <SelectItem value="networking">Networking</SelectItem>
                            </>
                          )}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="location">Location *</Label>
                      <Select>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select location" />
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
                  </div>
                </CardContent>
              </Card>

              {/* Pricing & Details */}
              <TabsContent value="product">
                <Card>
                  <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>Specify pricing and product information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="price">Price *</Label>
                        <div className="relative mt-1">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="price" placeholder="0.00" className="pl-10" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="unit">Unit</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select unit" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="kg">per kg</SelectItem>
                            <SelectItem value="tonne">per tonne</SelectItem>
                            <SelectItem value="piece">per piece</SelectItem>
                            <SelectItem value="head">per head</SelectItem>
                            <SelectItem value="litre">per litre</SelectItem>
                            <SelectItem value="bag">per bag</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="quantity">Available Quantity</Label>
                        <Input id="quantity" placeholder="e.g., 100" className="mt-1" />
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="negotiable" />
                      <Label htmlFor="negotiable">Price is negotiable</Label>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="equipment">
                <Card>
                  <CardHeader>
                    <CardTitle>Equipment Details</CardTitle>
                    <CardDescription>Specify rental rates and equipment information</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="daily-rate">Daily Rate *</Label>
                        <div className="relative mt-1">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="daily-rate" placeholder="0.00" className="pl-10" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="weekly-rate">Weekly Rate</Label>
                        <div className="relative mt-1">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="weekly-rate" placeholder="0.00" className="pl-10" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="monthly-rate">Monthly Rate</Label>
                        <div className="relative mt-1">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="monthly-rate" placeholder="0.00" className="pl-10" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="condition">Condition</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select condition" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="excellent">Excellent</SelectItem>
                            <SelectItem value="very-good">Very Good</SelectItem>
                            <SelectItem value="good">Good</SelectItem>
                            <SelectItem value="fair">Fair</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="year">Year of Manufacture</Label>
                        <Input id="year" placeholder="e.g., 2020" className="mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="job">
                <Card>
                  <CardHeader>
                    <CardTitle>Job Details</CardTitle>
                    <CardDescription>Specify salary and job requirements</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="salary">Salary/Wage *</Label>
                        <div className="relative mt-1">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="salary" placeholder="0.00" className="pl-10" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="salary-period">Period</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hour">per hour</SelectItem>
                            <SelectItem value="day">per day</SelectItem>
                            <SelectItem value="week">per week</SelectItem>
                            <SelectItem value="month">per month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="job-type">Job Type</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time</SelectItem>
                            <SelectItem value="part-time">Part-time</SelectItem>
                            <SelectItem value="seasonal">Seasonal</SelectItem>
                            <SelectItem value="temporary">Temporary</SelectItem>
                            <SelectItem value="contract">Contract</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="requirements">Requirements</Label>
                      <Textarea
                        id="requirements"
                        placeholder="List the job requirements, qualifications, and experience needed..."
                        rows={3}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="benefits">Benefits (Optional)</Label>
                      <Textarea
                        id="benefits"
                        placeholder="List any benefits offered (housing, meals, insurance, etc.)..."
                        rows={2}
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="service">
                <Card>
                  <CardHeader>
                    <CardTitle>Service Details</CardTitle>
                    <CardDescription>Specify your service rates and expertise</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="service-rate">Rate *</Label>
                        <div className="relative mt-1">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="service-rate" placeholder="0.00" className="pl-10" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="rate-period">Rate Period</Label>
                        <Select>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hour">per hour</SelectItem>
                            <SelectItem value="day">per day</SelectItem>
                            <SelectItem value="visit">per visit</SelectItem>
                            <SelectItem value="consultation">per consultation</SelectItem>
                            <SelectItem value="project">per project</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="qualifications">Qualifications & Experience</Label>
                      <Textarea
                        id="qualifications"
                        placeholder="Describe your qualifications, certifications, and experience..."
                        rows={3}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="availability">Availability</Label>
                      <Input
                        id="availability"
                        placeholder="e.g., Monday to Friday, 24/7 emergency, Weekends only"
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="event">
                <Card>
                  <CardHeader>
                    <CardTitle>Event Details</CardTitle>
                    <CardDescription>Specify event date, time, and pricing</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="event-date">Event Date *</Label>
                        <Input id="event-date" type="date" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="event-time">Event Time *</Label>
                        <Input id="event-time" placeholder="e.g., 09:00 - 17:00" className="mt-1" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ticket-price">Ticket Price</Label>
                        <div className="relative mt-1">
                          <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input id="ticket-price" placeholder="0.00 (or 'Free')" className="pl-10" />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="capacity">Capacity</Label>
                        <Input id="capacity" placeholder="Maximum attendees" className="mt-1" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="organizer">Organizer</Label>
                      <Input
                        id="organizer"
                        placeholder="Organization or person organizing the event"
                        className="mt-1"
                      />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Images */}
              <Card>
                <CardHeader>
                  <CardTitle>Images</CardTitle>
                  <CardDescription>Add photos to make your listing more attractive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Click to upload images or drag and drop</p>
                    <p className="text-sm text-gray-500">PNG, JPG up to 10MB each (max 5 images)</p>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <Label htmlFor="image-upload" className="cursor-pointer">
                      <Button type="button" className="mt-4">
                        Choose Images
                      </Button>
                    </Label>
                  </div>

                  {images.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {images.map((image, index) => (
                        <div key={index} className="relative">
                          <img
                            src={image || "/placeholder.svg"}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                          <Button
                            type="button"
                            variant="destructive"
                            size="icon"
                            className="absolute -top-2 -right-2 h-6 w-6"
                            onClick={() => removeImage(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags (Optional)</CardTitle>
                  <CardDescription>Add relevant tags to help people find your listing</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add a tag..."
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                    />
                    <Button type="button" onClick={addTag}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>

                  {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <X className="h-3 w-3 cursor-pointer" onClick={() => removeTag(tag)} />
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>How should interested parties contact you?</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                          <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" placeholder="+263 78 233 9300" className="mt-1" />
                      </div>
                      <div>
                        <Label htmlFor="whatsapp">WhatsApp Number</Label>
                        <Input id="whatsapp" placeholder="+263 78 233 9300" className="mt-1" />
                      </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-1" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="show-profile" defaultChecked />
                    <Label htmlFor="show-profile">Show my profile information to interested parties</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit */}
              <div className="flex gap-4">
                <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
                  Publish Listing
                </Button>
                <Button type="button" variant="outline" className="flex-1 bg-transparent">
                  Save as Draft
                </Button>
              </div>
            </form>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
