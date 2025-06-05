"use client"
import Link from "next/link"
import { ChevronRight, Heart, Users, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

// Remove the viewport export from here

export default function Support() {
  const { toast } = useToast()
  // Remove these state variables as they're no longer needed

  // Delete these handler functions:

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557]">
            Support Our Work
          </h1>
          <div className="bg-[#f8f9fa] border border-gray-200 rounded-lg p-4 mt-4 text-center">
            <p className="text-lg md:text-xl font-medium text-[#1d3557] italic">
              "A grassroots movement of American Patriots who wish to protect the U.S. Constitution"
            </p>
          </div>
          <p className="text-gray-600 md:text-xl mt-6">
            Your support helps us continue our mission of educating citizens and promoting accountability through
            established legal channels in Palm Beach County.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#1d3557]">Why Support Us</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The Palm Beach County People's Grand Jury Oversight Committee initiative relies on the support of
              concerned citizens to continue our important work. Your contributions help us:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <BookOpen className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                <span>Develop educational resources about grand jury processes and legal frameworks</span>
              </li>
              <li className="flex items-start">
                <Users className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                <span>Organize community events and workshops to inform citizens about their rights</span>
              </li>
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                <span>Provide support for individuals navigating the complaint submission process</span>
              </li>
            </ul>
            <p>
              Your support makes it possible for us to continue advocating for transparency, accountability, and justice
              through established legal channels.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1d3557]">Ways to Support</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-[#1d3557] mb-2" />
                <CardTitle className="text-[#1d3557]">Volunteer</CardTitle>
                <CardDescription>Contribute your time and skills</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We welcome volunteers with various skills, from legal expertise to community organizing and technical
                  support.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/contact" passHref>
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-[#1d3557] mb-2" />
                <CardTitle className="text-[#1d3557]">Spread Awareness</CardTitle>
                <CardDescription>Share our mission with others</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Help us reach more people by sharing our resources and mission with your community and social
                  networks.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/" passHref>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="rounded-lg border p-6 bg-[#f8f9fa]">
          <h2 className="text-xl font-bold mb-4 text-[#1d3557]">Other Ways to Support</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <Users className="h-5 w-5 text-[#1d3557] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-[#1d3557]">Volunteer Your Skills</h3>
                <p className="text-sm text-gray-600 mt-1">
                  We welcome volunteers with various skills and backgrounds. Contact us to learn about current
                  opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BookOpen className="h-5 w-5 text-[#1d3557] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-[#1d3557]">Educational Partnerships</h3>
                <p className="text-sm text-gray-600 mt-1">
                  If you represent an educational institution or organization interested in our resources, we welcome
                  collaboration opportunities.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Heart className="h-5 w-5 text-[#1d3557] mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-[#1d3557]">Spread the Word</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Share our mission and resources with your community. Raising awareness is a valuable form of support.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/contact" passHref>
              <Button variant="outline" className="w-full">
                Contact Us to Learn More
              </Button>
            </Link>
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
