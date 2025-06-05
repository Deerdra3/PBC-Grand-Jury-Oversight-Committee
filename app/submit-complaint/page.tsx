"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Info, Mail } from "lucide-react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SubmitComplaint() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formError, setFormError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormError("")

    const form = event.target
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mjkwlrej", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        router.push("/thank-you")
      } else {
        const data = await response.json()
        setFormError(data.error || "There was an error submitting your form. Please try again.")
        setIsSubmitting(false)
      }
    } catch (error) {
      console.error("Submission error:", error)
      setFormError("There was a network error. Please try again later.")
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
            <Image
              src="/images/palm-beach-county-logo.png"
              alt="Palm Beach County Grand Jury Oversight Committee Logo"
              width={80}
              height={80}
              className="rounded-full"
              priority
            />
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557] text-center md:text-left">
              Submit a Complaint
            </h1>
          </div>
          <p className="text-gray-600 md:text-xl">
            Use our official complaint form to submit a complaint for consideration by the Oversight Committee.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-3">
          <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-blue-800">Our Oversight Role</h3>
            <p className="text-sm text-blue-700">
              The Oversight Committee helps ensure that the Grand Jury system serves the People by:
            </p>
            <ul className="list-disc pl-5 mt-2 text-sm text-blue-700">
              <li>
                Safeguarding proper access to the Grand Jury for submitting evidence of corruption—whether by public
                officials or private actors
              </li>
              <li>Ensuring jurors are lawfully and appropriately selected</li>
              <li>Properly charging and informing jurors of their constitutional powers and responsibilities</li>
              <li>Providing necessary resources to empower effective public service</li>
            </ul>
            <p className="text-sm text-blue-700 mt-2">
              By upholding these principles, we defend the integrity of the Grand Jury as an essential instrument of
              justice and accountability.
            </p>
          </div>
        </div>

        <Card className="border-2 border-[#1d3557]">
          <CardHeader className="bg-[#1d3557] text-white">
            <CardTitle className="text-xl">
              Palm Beach County Grand Jury Oversight Committee Citizen Complaint Form
            </CardTitle>
            <CardDescription className="text-gray-200">
              Fill out and submit the form below to file your complaint
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            {formError && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">
                <p className="font-medium">Error:</p>
                <p>{formError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="_subject" value="New Grand Jury Complaint Submission" />

              <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 mb-6">
                <p className="text-sm text-amber-800">
                  <strong>Important:</strong> It is a crime to report to the Palm Beach County Grand Jury Oversight
                  Committee that a crime has been committed knowing the report to be false.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    1. Who: (Your Name) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                  />
                </div>

                <div>
                  <label htmlFor="city-state-zip" className="block text-sm font-medium text-gray-700 mb-1">
                    City, State, Zip Code
                  </label>
                  <input
                    type="text"
                    id="city-state-zip"
                    name="city-state-zip"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telephone
                  </label>
                  <input
                    type="text"
                    id="telephone"
                    name="telephone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                  />
                </div>

                <div>
                  <label htmlFor="complaint" className="block text-sm font-medium text-gray-700 mb-1">
                    2. What: Nature of Complaint <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="complaint"
                    name="complaint"
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="incident-date" className="block text-sm font-medium text-gray-700 mb-1">
                    3. When: Date(s) of Incident
                  </label>
                  <input
                    type="text"
                    id="incident-date"
                    name="incident-date"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                  />
                </div>

                <div>
                  <label htmlFor="where" className="block text-sm font-medium text-gray-700 mb-1">
                    4. Where: Involved Parties and Contact Details
                  </label>
                  <textarea
                    id="where"
                    name="where"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="why-how" className="block text-sm font-medium text-gray-700 mb-1">
                    5. Why/How: Explanation
                  </label>
                  <textarea
                    id="why-how"
                    name="why-how"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                  ></textarea>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div>
                    <label htmlFor="print-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Print Name
                    </label>
                    <input
                      type="text"
                      id="print-name"
                      name="print-name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                    />
                  </div>

                  <div className="mt-4">
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Date
                    </label>
                    <input
                      type="text"
                      id="date"
                      name="date"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d3557]"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 space-y-3">
                <h3 className="font-medium text-[#1d3557]">Submission Methods:</h3>
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-[#1d3557] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Mail:</p>
                    <p className="text-sm text-gray-600">
                      Palm Beach County Grand Jury Oversight Committee
                      <br />
                      P.O. Box 2096
                      <br />
                      Palm Beach, FL 33489
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Mail className="h-5 w-5 text-[#1d3557] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email:</p>
                    <p className="text-sm text-gray-600">justice@pbcgrandjury.org</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-[#1d3557] hover:bg-[#2a4a73] text-white font-medium py-3 px-6 rounded-md disabled:opacity-70"
                >
                  {isSubmitting ? "Submitting..." : "Submit Complaint"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="rounded-lg border p-6 bg-[#f8f9fa]">
          <h2 className="text-xl font-bold mb-4 text-[#1d3557]">Complaint Guidelines</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Receipt of all complaints will be acknowledged by mail. If a matter does not fall within the Grand Jury
              investigative authority, or the Jury determines not to investigate a complaint, no action will be taken
              and you will be notified via mail.
            </p>

            <h3 className="font-medium text-[#1d3557] mt-4">The jurisdiction of the Grand Jury includes:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Consideration of evidence of misconduct by public officials within Palm Beach County</li>
              <li>Inquiry into the condition and management of jails within the County</li>
            </ul>

            <h3 className="font-medium text-[#1d3557] mt-4">Your complaint should include:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>Specifically who or what agency is the complaint against</li>
              <li>What is the nature of the complaint</li>
              <li>What action was improper or illegal</li>
              <li>When and where did the incident(s) occur</li>
              <li>What were the consequences of this action</li>
              <li>What action or remedies are you seeking</li>
              <li>Why/How. Attach relevant documents and correspondence with dates</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center pt-6">
          <Link href="/" passHref>
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link href="/contact" passHref>
            <Button className="bg-[#1d3557] hover:bg-[#2a4a73]">
              Contact Us <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
