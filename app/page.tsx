import Link from "next/link"
import Image from "next/image"
import { ChevronRight, FileText, Users, Scale } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <div className="rounded-lg bg-white p-4 md:p-6 lg:p-10 shadow-sm">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/images/palm-beach-county-logo.png"
                    alt="Palm Beach County Grand Jury Oversight Committee Logo"
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557] mb-4 md:mb-6">
                  Palm Beach County Grand Jury Oversight Committee
                </h1>
                <p className="max-w-[700px] mx-auto text-sm md:text-base lg:text-xl text-gray-700 mb-3 md:mb-4">
                  Ensuring accountability and transparency in our community.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row justify-center">
                  <Link href="/submit-complaint" passHref className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-[#1d3557] hover:bg-[#2a4a73]">
                      Submit a Complaint
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/reports" passHref className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto">
                      View Reports & Documents
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557]">
                  Our Mission
                </h2>
                <p className="max-w-[900px] text-sm md:text-base lg:text-xl text-gray-600">
                  The Oversight Committee is dedicated to restoring and safeguarding the natural, constitutional, and
                  historical authority of Grand Juries to independently investigate crime and corruption by public
                  officials or private actors—free from undue interference. We ensure that grand juries are lawfully
                  selected, properly instructed, and fully empowered to fulfill their essential role as impartial bodies
                  serving the interests of the People.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Resources Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557]">
                  Key Resources
                </h2>
                <p className="max-w-[900px] text-sm md:text-base lg:text-xl text-gray-600">
                  Access important information and tools to understand the grand jury process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-8 md:py-12 md:grid-cols-3">
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <Scale className="h-8 w-8 md:h-10 md:w-10 text-[#1d3557] mb-2" />
                  <CardTitle className="text-[#1d3557]">Legal Framework</CardTitle>
                  <CardDescription>Understanding grand jury powers and responsibilities</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm md:text-base text-gray-600">
                    Learn about the legal foundations that support citizen-initiated grand jury processes.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/reports" passHref className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <FileText className="h-8 w-8 md:h-10 md:w-10 text-[#1d3557] mb-2" />
                  <CardTitle className="text-[#1d3557]">Complaint Submission</CardTitle>
                  <CardDescription>Submit your complaint for consideration</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm md:text-base text-gray-600">
                    Our structured submission process helps ensure your complaint is properly documented.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/submit-complaint" passHref className="w-full">
                    <Button variant="outline" className="w-full">
                      Submit Now
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              <Card className="flex flex-col items-center text-center">
                <CardHeader>
                  <Users className="h-8 w-8 md:h-10 md:w-10 text-[#1d3557] mb-2" />
                  <CardTitle className="text-[#1d3557]">About Us</CardTitle>
                  <CardDescription>Learn about our oversight committee</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm md:text-base text-gray-600">
                    Our committee works to ensure grand juries are lawfully selected, properly charged, and equipped
                    with necessary resources.
                  </p>
                </CardContent>
                <CardFooter>
                  <Link href="/about" passHref className="w-full">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
