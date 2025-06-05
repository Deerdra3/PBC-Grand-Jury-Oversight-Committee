"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MessageSquare } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function Contact() {
  const { toast } = useToast()
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    inquiryType: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setContactForm({
      ...contactForm,
      [name]: value,
    })
  }

  const handleInquiryTypeChange = (value) => {
    setContactForm({
      ...contactForm,
      inquiryType: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // In a real application, you would send this data to your server
    console.log("Contact form submitted:", contactForm)

    toast({
      title: "Message Sent",
      description: "Thank you for your message. We will respond as soon as possible.",
    })

    // Reset form
    setContactForm({
      name: "",
      email: "",
      subject: "",
      inquiryType: "",
      message: "",
    })
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557]">Contact Us</h1>
          <p className="text-gray-600 md:text-xl">
            Have questions or need assistance? We&apos;re here to help. Reach out to us using the secure message form
            below.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#1d3557]">Contact Information</CardTitle>
              <CardDescription>Ways to reach the Palm Beach County Grand Jury Oversight Committee</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/images/palm-beach-county-logo.png"
                  alt="Palm Beach County Grand Jury Oversight Committee Logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </div>
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 text-[#1d3557] mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Secure Message</h3>
                  <p className="text-sm text-gray-600">
                    Use the secure message form on this page to send us a confidential message.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t mt-4">
                <h3 className="font-medium mb-2">Response Time</h3>
                <p className="text-sm text-gray-600">
                  We strive to respond to all inquiries within 2-3 business days. For urgent matters, please indicate
                  the urgency in the subject line of your message.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-[#1d3557]">Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about our work</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium text-[#1d3557]">
                  What is the role of the Palm Beach County Grand Jury Oversight Committee?
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  We review and evaluate the performance of the grand jury system in Palm Beach County, and make
                  recommendations for improvement.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#1d3557]">How can I submit a complaint?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  You can submit a complaint through our dedicated{" "}
                  <Link href="/submit-complaint" className="text-[#1d3557] underline">
                    Complaint Submission
                  </Link>{" "}
                  form.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-[#1d3557]">How can I get involved?</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Please use the contact form to let us know about your interest and background. We'll follow up with
                  available opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="text-2xl font-bold mb-6 text-[#1d3557]">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Your Name <span className="text-red-500">*</span>
                </Label>
                <Input id="name" name="name" value={contactForm.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">
                  Your Email <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">
                Subject <span className="text-red-500">*</span>
              </Label>
              <Input id="subject" name="subject" value={contactForm.subject} onChange={handleChange} required />
            </div>

            <div className="space-y-2">
              <Label>
                Inquiry Type <span className="text-red-500">*</span>
              </Label>
              <RadioGroup value={contactForm.inquiryType} onValueChange={handleInquiryTypeChange} required>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general">General Inquiry</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="complaint" id="complaint" />
                  <Label htmlFor="complaint">Complaint Assistance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="volunteer" id="volunteer" />
                  <Label htmlFor="volunteer">Volunteer Information</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">
                Your Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleChange}
                className="min-h-[150px]"
                required
              />
            </div>

            <div className="pt-4">
              <Button type="submit" className="bg-[#1d3557] hover:bg-[#2a4a73]">
                Send Message
              </Button>
              <p className="mt-2 text-xs text-gray-500">
                We respect your privacy. Your information will not be shared with third parties.
              </p>
            </div>
          </form>
        </div>

        <div className="flex justify-between items-center pt-6">
          <Link href="/" passHref>
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link href="/reports" passHref>
            <Button variant="link" className="text-[#1d3557]">
              View Reports & Documents
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
