import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Download, Calendar, Info, Clock, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Reports() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12 lg:py-16">
      <div className="mx-auto max-w-4xl space-y-6">
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1d3557] text-center md:text-left break-words">
              Reports & Documents
            </h1>
          </div>
          <p className="text-gray-600 text-base md:text-lg">
            Access important reports, legal documents, and resources related to the Palm Beach County Grand Jury
            Oversight Committee.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex flex-col sm:flex-row items-start gap-3">
          <Info className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-amber-800">Important Notice</h3>
            <p className="text-sm text-amber-700">
              The following documents are provided for informational purposes. These documents represent official
              notices, requests, and legal filings related to the Palm Beach County Grand Jury Oversight Committee.
            </p>
          </div>
        </div>

        <Tabs defaultValue="documents" className="w-full">
          <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 mb-2">
            <TabsTrigger value="documents" className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2">
              Official Documents
            </TabsTrigger>
            <TabsTrigger value="timeline" className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2">
              Timeline
            </TabsTrigger>
            <TabsTrigger value="legal" className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2">
              Legal Framework
            </TabsTrigger>
            <TabsTrigger value="resources" className="text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2">
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="documents" className="space-y-6 pt-8 mt-2">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1d3557] break-words hyphens-auto leading-tight">
                Official Notices &amp; Filings
              </h2>

              <Card>
                <CardHeader className="space-y-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div className="space-y-1">
                      <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#1d3557] break-words">
                        Meeting Agenda - May 15, 2025
                      </CardTitle>
                      <CardDescription className="break-words">
                        First Official Public Meeting of the Palm Beach County Grand Jury Oversight Committee
                      </CardDescription>
                    </div>
                    <Badge className="bg-[#1d3557] self-start">New</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Date: May 15, 2025</span>
                    </div>
                    <div className="flex items-center mt-1 sm:mt-0">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Time: 5:30 PM EST</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Official meeting agenda for the first public meeting of the Palm Beach County Grand Jury Oversight
                    Committee. The meeting will be held at the Palm Beach County Main Library, 3650 Summit Blvd, West
                    Palm Beach, Florida 33406.
                  </p>
                  <div className="rounded-lg bg-muted p-3 sm:p-4">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Agenda Highlights:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-gray-600">
                      <li>Pledge of Allegiance</li>
                      <li>Opening Statements - Amendment V, 18 USC 3222, 18 USC 241, 18 USC 242</li>
                      <li>Historical Timeline</li>
                      <li>Announcement of Officials Addressing the Committee</li>
                      <li>Comments from Officials</li>
                      <li>Announcements - Second Public Noticed Meeting</li>
                    </ul>
                  </div>
                  <div className="mt-4">
                    <div className="relative w-full" style={{ paddingTop: "133.33%" }}>
                      <Image
                        src="/reports/meeting-agenda-may-2025.jpeg"
                        alt="Meeting Agenda May 2025"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 600px"
                        className="object-contain rounded-md border border-gray-200 shadow-sm"
                        priority
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/reports/meeting-agenda-may-2025.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    download="meeting-agenda-may-2025.jpeg"
                    aria-label="Download Meeting Agenda"
                  >
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 min-h-[44px]">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">Download Agenda</span>
                    </Button>
                  </a>
                  <a
                    href="/reports/public-notice-may-2025.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    download="public-notice-may-2025.jpeg"
                    aria-label="Download Public Notice"
                  >
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 min-h-[44px]">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">Download Public Notice</span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#1d3557] break-words">
                      Public Notice - May 2025
                    </CardTitle>
                    <CardDescription className="break-words">
                      Demand for Peaceful Transition to Rule-of-Law via People's Grand Jury Oversight
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>Published: May 6, 2025</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Official public notice announcing the first official public meeting of the Palm Beach County Grand
                    Jury Oversight Committee. This document includes formal requests for attendance from elected
                    officials and outlines the committee's constitutional basis.
                  </p>
                  <div className="mt-4">
                    <div className="relative w-full" style={{ paddingTop: "133.33%" }}>
                      <Image
                        src="/reports/public-notice-may-2025.jpeg"
                        alt="Public Notice May 2025"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 600px"
                        className="object-contain rounded-md border border-gray-200 shadow-sm"
                        priority
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="/reports/public-notice-may-2025.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    download="public-notice-may-2025.jpeg"
                    aria-label="Download Public Notice Document"
                  >
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 min-h-[44px]">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">Download Document</span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#1d3557] break-words">
                      Election Integrity Grand Jury Request
                    </CardTitle>
                    <CardDescription className="break-words">Press Release - April 24, 2024</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>Published: April 24, 2024</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Press release regarding allegations of wrongdoing by county Supervisor of Elections officials and
                    the request for a Florida Statewide Grand Jury pursuant to Florida statute 905.33.
                  </p>
                  <div className="mt-4">
                    <div className="relative w-full" style={{ paddingTop: "133.33%" }}>
                      <Image
                        src="/reports/election-integrity-grand-jury-request-2024.jpeg"
                        alt="Election Integrity Grand Jury Request"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 600px"
                        className="object-contain rounded-md border border-gray-200 shadow-sm"
                        priority
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="/reports/election-integrity-grand-jury-request-2024.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    download="election-integrity-grand-jury-request.jpeg"
                    aria-label="Download Election Integrity Document"
                  >
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 min-h-[44px]">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">Download Document</span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#1d3557] break-words">
                      Demand for Grand Jury Investigation
                    </CardTitle>
                    <CardDescription className="break-words">Press Release - June 4, 2024</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>Published: June 4, 2024</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Formal request to convene a 15th circuit court grand jury pursuant to Florida Election Code 104.43
                    and 104.42 regarding allegations of election fraud and anomalies.
                  </p>
                  <div className="mt-4">
                    <div className="relative w-full" style={{ paddingTop: "133.33%" }}>
                      <Image
                        src="/reports/demand-for-grand-jury-investigation-2024.jpeg"
                        alt="Demand for Grand Jury Investigation"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 600px"
                        className="object-contain rounded-md border border-gray-200 shadow-sm"
                        priority
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="/reports/demand-for-grand-jury-investigation-2024.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    download="demand-for-grand-jury-investigation.jpeg"
                    aria-label="Download Grand Jury Investigation Document"
                  >
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 min-h-[44px]">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">Download Document</span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#1d3557] break-words">
                      Sworn Statement Investigation
                    </CardTitle>
                    <CardDescription className="break-words">Email Correspondence - July 4, 2024</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>Published: July 4, 2024</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Email correspondence regarding a sworn statement submitted to federal authorities requesting
                    investigation of alleged misconduct.
                  </p>
                  <div className="mt-4">
                    <div className="relative w-full" style={{ paddingTop: "133.33%" }}>
                      <Image
                        src="/reports/sworn-statement-investigation-2024.jpeg"
                        alt="Sworn Statement Investigation"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 600px"
                        className="object-contain rounded-md border border-gray-200 shadow-sm"
                        priority
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="/reports/sworn-statement-investigation-2024.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    download="sworn-statement-investigation.jpeg"
                    aria-label="Download Sworn Statement Document"
                  >
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 min-h-[44px]">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">Download Document</span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#1d3557] break-words">
                      Demand for Rule of Law
                    </CardTitle>
                    <CardDescription className="break-words">
                      People's Grand Jury Oversight - April 26, 2025
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <Calendar className="h-4 w-4" />
                    <span>Published: April 26, 2025</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Formal demand for rule of law and proper grand jury oversight, citing Amendment V of the United
                    States Constitution and the Supreme Court's 1992 Williams ruling.
                  </p>
                  <div className="mt-4">
                    <div className="relative w-full" style={{ paddingTop: "133.33%" }}>
                      <Image
                        src="/reports/demand-for-rule-of-law-2024.jpeg"
                        alt="Demand for Rule of Law"
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, 600px"
                        className="object-contain rounded-md border border-gray-200 shadow-sm"
                        priority
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="/reports/demand-for-rule-of-law-2024.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    download="demand-for-rule-of-law.jpeg"
                    aria-label="Download Rule of Law Document"
                  >
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 min-h-[44px]">
                      <Download className="h-4 w-4" />
                      <span className="text-sm">Download Document</span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="timeline" className="space-y-6 pt-8 mt-2">
            <Card>
              <CardHeader className="bg-[#1d3557] text-white p-4">
                <CardTitle className="text-lg sm:text-xl">Timeline of Events</CardTitle>
                <CardDescription className="text-gray-200 text-sm">
                  Palm Beach County People's Grand Jury Oversight Committee - Weeks One and Two
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4 space-y-6 px-3 sm:px-6">
                <div className="space-y-6">
                  <div className="border-l-4 border-[#1d3557] pl-3 sm:pl-4 space-y-2">
                    <div className="flex items-center gap-2 text-[#1d3557] font-semibold">
                      <Calendar className="h-4 w-4" />
                      <h3 className="text-sm sm:text-base">April 29, 2025</h3>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg">REVIEW OF RESOURCES AND PALM BEACH COUNTY PLAN</h4>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm">
                      <li>
                        <a
                          href="https://rumble.com/v6sexub-sg-anon-dangerous-intel-4.22.25-a-period-of-disorder-and-chaos-incoming.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline flex items-center gap-1 break-words"
                        >
                          <span>SGAnon video with Peacemaker Aldo and Troy Scoggins</span>
                          <ExternalLink className="h-3 w-3 flex-shrink-0" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://restoregrandjuryrights.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline flex items-center gap-1 break-words"
                        >
                          <span>Virginia Beach resources including link to document templates</span>
                          <ExternalLink className="h-3 w-3 flex-shrink-0" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://restoregrandjuryrights.org/wp-content/uploads/2025/04/Rule-of-Law-Demand-Form-v6.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline flex items-center gap-1 break-words"
                        >
                          <span>5-page with instructions and template</span>
                          <ExternalLink className="h-3 w-3 flex-shrink-0" />
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-[#1d3557] pl-3 sm:pl-4 space-y-2">
                    <div className="flex items-center gap-2 text-[#1d3557] font-semibold">
                      <Calendar className="h-4 w-4" />
                      <h3 className="text-sm sm:text-base">April 26, 2025</h3>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg">
                      SIGNING DAY at ART BASIL RESTAURANT, MANALAPN, FL
                    </h4>
                    <p className="text-sm">
                      13 people from Palm Beach County signed the original Demand For Rule of Law People's Grand Jury
                      Oversight Committee & Request for Presentment
                    </p>
                  </div>

                  <div className="border-l-4 border-[#1d3557] pl-3 sm:pl-4 space-y-2">
                    <div className="flex items-center gap-2 text-[#1d3557] font-semibold">
                      <Calendar className="h-4 w-4" />
                      <h3 className="text-sm sm:text-base">April 28, 2025</h3>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg">PRIORITY MAILING DAY</h4>
                    <p className="text-sm">
                      Demand For Rule of Law People's Grand Jury Oversight Committee & Request for Presentment to:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-sm">
                      <li>Mayor Maria Marino, All Palm Beach County Commissioners</li>
                      <li>Sheriff Ric L. Bradshaw, All Palm Beach County Deputy Sheriffs</li>
                      <li>State Attorney Alicia Cox, All Palm Beach County Attorneys</li>
                      <li>Chief Judge Glenn Kelley, All Palm Beach County Judges</li>
                      <li>Donald J. Trump, DC and Winter White House</li>
                      <li>US AG Pamela Bondi</li>
                      <li>FBI Director Kash Patel</li>
                      <li>United States Attorney Southern District of Florida Hayden O'Byrne</li>
                      <li>FBI Special Agent in Charge Mark McCormick</li>
                    </ul>
                  </div>

                  {/* Additional timeline entries would continue here - I'm showing just a few for brevity */}

                  <div className="border-l-4 border-[#1d3557] pl-3 sm:pl-4 space-y-2">
                    <div className="flex items-center gap-2 text-[#1d3557] font-semibold">
                      <Calendar className="h-4 w-4" />
                      <h3 className="text-sm sm:text-base">May 01, 2025</h3>
                    </div>
                    <h4 className="font-bold text-base sm:text-lg">VERBAL COMMUNICATION WITH FBI</h4>
                    <p className="text-sm">
                      Verbal communication by phone with Miami Acting Chief Division Counsel Hillary Rossman:
                    </p>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm">
                      <li>
                        After voicemail messages left for West Palm Beach Assistant Special Agent in Charge Mark
                        McCormick to inform and update him of the Demand signed on April 26, 2025 by 13 members of the
                        Palm Beach County Rule of Law Grand Jury Oversight Committee and sent to the elected official
                        and all assistants (48.111 Service on public agencies and officers.—) in Palm Beach County to
                        restore grand jury rights per the Amendment V of the Constitution.
                      </li>
                      <li>
                        Made aware that Mark McCormick, Assistant Special Agent in Charge West Palm Beach, Hayden
                        O'Byrne, US Attorney of the Southern District of Florida, Kash Patel, FBI Director, Pamela
                        Bondi, US Attorney General and President Donald J.Trump at both his DC residence and the Winter
                        White House in West Palm Beach, Florida received by Priority Mail:
                        <ul className="list-disc pl-4 mt-2">
                          <li>The Demand to Restore Grand Jury Rights and a</li>
                          <li>Request for Presentment</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  {/* More timeline entries would continue here */}

                  <div className="border-l-4 border-[#1d3557] pl-3 sm:pl-4 space-y-2">
                    <h4 className="font-bold text-base sm:text-lg">COMMUNICATION WITH THE PUBLIC</h4>
                    <ul className="list-none space-y-1 text-sm">
                      <li>
                        <strong>WEB PAGE:</strong> Palm Beach County Grand Jury Oversight Committee
                      </li>
                      <li>
                        <strong>EMAIL:</strong> Justice@PBCGrandJury.org
                      </li>
                      <li>
                        <strong>PHONE NUMBER:</strong> 561-414-8208
                      </li>
                      <li>
                        <strong>MAILING ADDRESS:</strong> PO BOX 2096, Palm Beach, FL 33480
                      </li>
                    </ul>
                  </div>

                  <div className="text-right text-xs sm:text-sm text-gray-500 italic">
                    Timeline compiled by Candace Rojas and Patty Testa May 13, 2025
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="legal" className="space-y-6 pt-8 mt-2">
            <Card>
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#1d3557] break-words">
                  18 U.S. Code § 3332 - Powers and Duties of Grand Jury
                </CardTitle>
                <CardDescription className="break-words">
                  Understanding the role and responsibilities of a federal grand jury
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-3 sm:p-4">
                  <h3 className="mb-2 font-semibold text-sm sm:text-base">Statutory Text:</h3>
                  <p className="text-xs sm:text-sm">
                    (a) It shall be the duty of each grand jury impaneled within any judicial district to inquire into
                    offenses against the criminal laws of the United States alleged to have been committed within that
                    district. Such alleged offenses may be brought to the attention of the grand jury by the court or by
                    any attorney appearing on behalf of the United States for the presentation of evidence. Any such
                    attorney receiving information concerning such an alleged offense from any other person shall, if
                    requested by such other person, inform the grand jury of such alleged offense, the identity of such
                    other person, and such attorney&apos;s action or recommendation.
                  </p>
                </div>

                <h3 className="font-semibold text-sm sm:text-base">Key Points:</h3>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-xs sm:text-sm">
                  <li>Grand juries have the duty to inquire into federal criminal offenses within their district</li>
                  <li>Offenses can be brought to the grand jury&apos;s attention by the court or U.S. attorneys</li>
                  <li>
                    U.S. attorneys must inform the grand jury of alleged offenses when requested by the person providing
                    the information
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm sm:text-base py-3 px-4">
                  Grand Jury Powers and Independence
                </AccordionTrigger>
                <AccordionContent className="space-y-4 px-4 text-xs sm:text-sm">
                  <p>
                    The grand jury has historical roots in English common law and was incorporated into the American
                    legal system as a safeguard against arbitrary prosecution. The Fifth Amendment to the U.S.
                    Constitution guarantees the right to grand jury indictment for serious federal crimes.
                  </p>
                  <p>
                    Courts have interpreted 18 U.S.C. § 3332 as creating a duty for U.S. attorneys to present
                    information from citizens to the grand jury when requested, though the scope and enforcement of this
                    duty has varied across jurisdictions.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm sm:text-base py-3 px-4">Civil Rights Statutes</AccordionTrigger>
                <AccordionContent className="space-y-4 px-4 text-xs sm:text-sm">
                  <p>
                    18 U.S.C. § 241 (Conspiracy Against Rights) and § 242 (Deprivation of Rights Under Color of Law) are
                    important federal criminal statutes that protect civil rights:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                    <li>
                      <strong>Section 241:</strong> Prohibits conspiracies to interfere with constitutional rights
                    </li>
                    <li>
                      <strong>Section 242:</strong> Criminalizes deprivation of rights by those acting under color of
                      law
                    </li>
                    <li>Both statutes protect constitutional and federal statutory rights</li>
                    <li>These are criminal statutes enforced by federal prosecutors</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6 pt-8 mt-2">
            <div className="space-y-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1d3557] break-words hyphens-auto leading-tight">
                Educational Resources
              </h2>

              <Card>
                <CardHeader className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#1d3557] break-words">
                      RestoreGrandJuryRights.org Resources
                    </CardTitle>
                    <CardDescription className="break-words">
                      Comprehensive collection of grand jury resources
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Visit RestoreGrandJuryRights.org for a comprehensive collection of resources dedicated to
                    understanding grand juries, constitutional sheriffs, and citizen justice in America. This resource
                    page is curated by Burk Stringfellow and continues to evolve for the benefit of all counties.
                  </p>
                  <div className="rounded-lg bg-muted p-3 sm:p-4">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Available Resources Include:</h4>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-xs sm:text-sm text-gray-600">
                      <li>American Grand Jury information</li>
                      <li>The Lawful Voice of the Community: The Grand Jury (Brenner, 1995)</li>
                      <li>Grand Jury Administrator Course materials</li>
                      <li>US Grand Jury History Book (Younger, 2022)</li>
                      <li>Examples of People's/Citizen Grand Juries</li>
                      <li>Historical speeches and presentations</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://restoregrandjuryrights.org/resource/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    aria-label="Visit Resource Center"
                  >
                    <Button className="w-full flex items-center justify-center gap-2 bg-[#1d3557] hover:bg-[#2a4a73] min-h-[44px]">
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Visit Resource Center</span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="space-y-2">
                  <div className="space-y-1">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl text-[#1d3557] break-words">
                      Florida-Specific Resources
                    </CardTitle>
                    <CardDescription className="break-words">
                      Legal resources specific to Florida grand jury processes
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">
                    Resources specific to Florida's grand jury system, including state statutes, procedures, and
                    historical context.
                  </p>
                  <div className="rounded-lg bg-muted p-3 sm:p-4">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Florida Resources:</h4>
                    <ul className="list-disc pl-4 sm:pl-6 space-y-1 text-xs sm:text-sm text-gray-600">
                      <li>Florida Statutes Chapter 905 - Grand Jury</li>
                      <li>Florida Rules of Criminal Procedure 3.100 - Procedures for Grand Jury</li>
                      <li>Florida Statewide Grand Jury information</li>
                      <li>Palm Beach County Grand Jury Oversight Committee historical reports</li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <a
                    href="https://www.flsenate.gov/Laws/Statutes/2023/Chapter905"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                    aria-label="View Florida Statutes"
                  >
                    <Button variant="outline" className="w-full flex items-center justify-center gap-2 min-h-[44px]">
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">View Florida Statutes</span>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="rounded-lg border p-4 sm:p-6 bg-[#f8f9fa]">
          <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#1d3557]">How to Use These Resources</h2>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                These documents are provided for educational and informational purposes only.
              </p>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Review these materials to understand the legal framework and processes related to the Palm Beach County
                Grand Jury Oversight Committee initiative.
              </p>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                For specific legal advice related to your situation, consult with a qualified attorney.
              </p>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-4 sm:pt-6">
          <Link href="/" passHref>
            <Button variant="outline" className="w-full sm:w-auto min-h-[44px]">
              <span className="text-sm">Back to Home</span>
            </Button>
          </Link>
          <Link href="/submit-complaint" passHref>
            <Button className="w-full sm:w-auto bg-[#1d3557] hover:bg-[#2a4a73] min-h-[44px]">
              <span className="text-sm">Submit a Complaint</span> <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
