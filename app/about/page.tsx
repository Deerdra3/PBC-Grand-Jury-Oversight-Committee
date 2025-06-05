import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function About() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557]">About Us</h1>
          <p className="text-gray-600 md:text-xl">
            Learn about the Oversight Committee initiative and our commitment to ensuring proper grand jury functioning.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3 flex justify-center">
            <Image
              src="/images/palm-beach-county-logo.png"
              alt="Palm Beach County Grand Jury Oversight Committee Logo"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 text-[#1d3557]">Our Mission</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The Oversight Committee was established to restore and safeguard the natural, constitutional, and
                historical authority of Grand Juries, ensuring they function as intended—as independent bodies serving
                the interests of the People.
              </p>
              <p>We work diligently to ensure that grand juries are:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lawfully selected, in accordance with established procedures.</li>
                <li>Properly instructed, fully informed of their powers, duties, and responsibilities.</li>
                <li>Equipped with essential resources to conduct comprehensive and impartial investigations.</li>
                <li>Free from improper influence or interference in their deliberations and decisions.</li>
              </ul>
              <p>
                We affirm the Grand Jury's right and duty to independently investigate crime and corruption—whether by
                public officials or private actors—free from undue interference.
              </p>
              <p>
                Our efforts are guided by a profound respect for the rule of law and the constitutional principles upon
                which our Republic stands.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-12">
          <h2 className="text-2xl font-bold text-[#1d3557]">Historical Context</h2>
          <div className="space-y-4 text-gray-600">
            <p>Restoring a 1,000-Year Legacy of Citizen Oversight</p>
            <p>
              For over a millennium, grand juries have protected people from government abuse—rooted in natural law,
              affirmed by the Magna Carta, and enshrined in American law. Citizen-led oversight of grand juries is not
              new—it's essential.
            </p>
            <p>
              Though undermined in recent decades, this sacred duty is being revived. In 2022, Florida citizens
              reignited this tradition with TheFloridaFix.com. On April 25, 2025, Palm Beach County joined the growing
              RestoreGrandJuryRights.org movement, which began in Virginia Beach, Virginia.
            </p>
            <p>
              This movement empowers citizens to reclaim the grand jury's full authority to investigate corruption
              without interference—public or private. Recent Florida statewide grand juries exposed government failures
              on border security and COVID-19. Yet without citizen oversight, findings are ignored.
            </p>
            <p>Our mission is clear: Restore transparency. Reclaim accountability. Revive citizen grand jury power.</p>
            <p className="italic font-medium">"Local action equals national impact." — General Flynn</p>
            <p>
              Join the movement. Visit{" "}
              <a
                href="https://RestoreGrandJuryRights.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1d3557] font-medium hover:underline"
              >
                RestoreGrandJuryRights.org
              </a>{" "}
              to start a People's Grand Jury Oversight Committee in your county or city.
            </p>
            <div className="mt-4">
              <Link href="/reports" className="text-[#1d3557] font-medium hover:underline flex items-center">
                Visit our Reports section for detailed documentation <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1d3557]">Our Focus</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              The Palm Beach County Grand Jury Oversight Committee is focused on issues impacting the broader community
              and those not properly addressed through other means. Our oversight ensures that matters of public
              importance receive appropriate attention and investigation.
            </p>
            <p>We are particularly concerned with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Systemic issues affecting public trust in government</li>
              <li>Accountability of public officials</li>
              <li>Proper functioning of public institutions</li>
              <li>Matters that impact the welfare of Palm Beach County residents</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1d3557]">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1d3557]">Integrity</CardTitle>
                <CardDescription>Honesty in all our actions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We are committed to honesty, accuracy, and ethical conduct in all our activities. We believe that
                  truth is the foundation of justice.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1d3557]">Accountability</CardTitle>
                <CardDescription>Holding officials to their oaths</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe that public officials must be held accountable to their oaths of office and to the people
                  they serve.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1d3557]">Education</CardTitle>
                <CardDescription>Empowering through knowledge</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We value knowledge and understanding, believing that an informed citizenry is essential to a
                  functioning republic.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-[#1d3557]">Respect for Law</CardTitle>
                <CardDescription>Working within legal frameworks</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We respect the rule of law and work within established legal frameworks to seek justice and
                  accountability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-[#1d3557]">Palm Beach County Municipalities</h2>
          <p className="text-gray-600">
            The Oversight Committee serves all 39 municipalities within Palm Beach County:
          </p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="municipalities">
              <AccordionTrigger>View All 39 Municipalities</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-gray-600">
                  <ul className="space-y-1">
                    <li>Atlantis (City)</li>
                    <li>Belle Glade (City)</li>
                    <li>Boca Raton (City)</li>
                    <li>Boynton Beach (City)</li>
                    <li>Briny Breezes (Town)</li>
                    <li>Cloud Lake (Town)</li>
                    <li>Delray Beach (City)</li>
                    <li>Glen Ridge (Town)</li>
                    <li>Golf (Village)</li>
                    <li>Greenacres (City)</li>
                    <li>Gulf Stream (Town)</li>
                    <li>Haverhill (Town)</li>
                    <li>Highland Beach (Town)</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>Hypoluxo (Town)</li>
                    <li>Juno Beach (Town)</li>
                    <li>Jupiter (Town)</li>
                    <li>Jupiter Inlet Colony (Town)</li>
                    <li>Lake Clarke Shores (Town)</li>
                    <li>Lake Park (Town)</li>
                    <li>Lake Worth Beach (City)</li>
                    <li>Lantana (Town)</li>
                    <li>Loxahatchee Groves (Town)</li>
                    <li>Manalapan (Town)</li>
                    <li>Mangonia Park (Town)</li>
                    <li>North Palm Beach (Village)</li>
                    <li>Ocean Ridge (Town)</li>
                  </ul>
                  <ul className="space-y-1">
                    <li>Pahokee (City)</li>
                    <li>Palm Beach (Town)</li>
                    <li>Palm Beach Gardens (City)</li>
                    <li>Palm Beach Shores (Town)</li>
                    <li>Palm Springs (Village)</li>
                    <li>Riviera Beach (City)</li>
                    <li>Royal Palm Beach (Village)</li>
                    <li>South Bay (City)</li>
                    <li>South Palm Beach (Town)</li>
                    <li>Tequesta (Village)</li>
                    <li>Wellington (Village)</li>
                    <li>West Palm Beach (City)</li>
                    <li>Westlake (City)</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="rounded-lg border p-6 bg-[#f8f9fa]">
          <h2 className="text-xl font-bold mb-4 text-[#1d3557]">Get Involved</h2>
          <p className="text-gray-600 mb-6">
            There are many ways to support our mission and get involved with the People&apos;s Grand Jury initiative:
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/submit-complaint" passHref>
              <Button className="w-full bg-[#1d3557] hover:bg-[#2a4a73]">
                Submit a Complaint <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button className="w-full" variant="outline">
                Contact Us <ChevronRight className="ml-1 h-4 w-4" />
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
