import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LegalAid() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557]">
            Legal Aid Resources
          </h1>
          <p className="text-gray-600 md:text-xl">
            If you have a civil legal problem but cannot afford to hire a private lawyer, you still may have access to
            the legal system through your local legal services-legal aid organization which provides free or low cost
            legal services to persons with low incomes in Palm Beach County.
          </p>
        </div>

        <Tabs defaultValue="national" className="w-full">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3">
            <TabsTrigger value="national">National & State-Wide</TabsTrigger>
            <TabsTrigger value="local">Local Resources</TabsTrigger>
            <TabsTrigger value="palm-beach">Palm Beach County</TabsTrigger>
          </TabsList>

          <TabsContent value="national" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>National and State-Wide Resources</CardTitle>
                <CardDescription>Organizations providing legal aid across Florida and nationwide</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <Link
                        href="https://www.lawhelp.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1d3557] hover:underline flex items-center"
                      >
                        LawHelp.org <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                      <p className="text-sm text-gray-600">The gateway to legal aid providers in every state.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <Link
                        href="https://www.floridalawhelp.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1d3557] hover:underline flex items-center"
                      >
                        FloridaLawHelp.org <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                      <p className="text-sm text-gray-600">The gateway to Florida legal resources.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <Link
                        href="https://frls.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1d3557] hover:underline flex items-center"
                      >
                        Florida Rural Legal Services <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                      <p className="text-sm text-gray-600">
                        Provides high-quality civil legal services to address the special legal needs of migrant and
                        seasonal farmworkers throughout Florida.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <Link
                        href="https://florida.freelegalanswers.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1d3557] hover:underline flex items-center"
                      >
                        Free Legal Answers <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                      <p className="text-sm text-gray-600">
                        A virtual legal advice clinic where you can ask a question and get an answer.
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="local" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Local Legal Aid Resources</CardTitle>
                <CardDescription>Organizations serving specific regions in Florida</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://frls.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Florida Rural Legal Services <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                        <p className="text-xs text-gray-600">
                          Serving 13 counties: Hardee, Highlands, Polk, Charlotte, Desoto, Glades, Hendry, Lee, Martin,
                          Okeechobee, Indian River, St. Lucie and Palm Beach.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://bals.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Bay Area Legal Services <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                        <p className="text-xs text-gray-600">Serving the Tampa Bay area</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.brevardlegalaid.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Brevard County Legal Aid, Inc. <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.clsmf.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Community Legal Services of Mid-Florida <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                        <p className="text-xs text-gray-600">Serving 12 counties in Central Florida</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.myfloridacounty.com/child_support/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          MyFloridaCounty.com (Child Support) <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.floridalegal.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Florida Legal Services, Inc. <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                        <p className="text-xs text-gray-600">Serving clients in all Florida counties</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.floridajusticeinstitute.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Florida Justice Institute - Miami <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://gulfcoastlegal.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Gulfcoast Legal Services <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                        <p className="text-xs text-gray-600">
                          Serving Hillsborough, Manatee, Pasco, Pinellas and Sarasota counties
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.jaxlegalaid.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Jacksonville Area Legal Aid <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.leecountylegalaid.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Lee County Legal Aid Society, Inc. <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.legalaidofmanasota.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Legal Aid of Manasota <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                        <p className="text-xs text-gray-600">Sarasota, Bradenton and Venice</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.legalaid.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Legal Aid Society of Collier County, Inc. <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://www.legalaidocba.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Legal Aid Society of the Orange County Bar Association{" "}
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                      <div>
                        <Link
                          href="https://legalaidpbc.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#1d3557] hover:underline flex items-center"
                        >
                          Legal Aid Society of Palm Beach County <ExternalLink className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-medium mb-3">Additional Local Resources</h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <Link
                            href="https://www.lsnf.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#1d3557] hover:underline flex items-center"
                          >
                            Legal Services of North Florida <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <Link
                            href="https://www.legalservicesmiami.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#1d3557] hover:underline flex items-center"
                          >
                            Legal Services of Greater Miami, Inc. <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <Link
                            href="https://www.scbalas.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#1d3557] hover:underline flex items-center"
                          >
                            Seminole County Bar Association Legal Aid Society <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <Link
                            href="https://www.southernlegal.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#1d3557] hover:underline flex items-center"
                          >
                            Southern Legal Counsel <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <Link
                            href="https://www.trls.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#1d3557] hover:underline flex items-center"
                          >
                            Three Rivers Legal Services <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <Link
                            href="https://www.browardlegalaid.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-[#1d3557] hover:underline flex items-center"
                          >
                            Legal Aid Service of Broward County <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="palm-beach" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Palm Beach County Legal Aid Resources</CardTitle>
                <CardDescription>Organizations specifically serving Palm Beach County</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <Link
                        href="https://legalaidpbc.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1d3557] hover:underline flex items-center"
                      >
                        Legal Aid Society of Palm Beach County <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                      <p className="text-sm text-gray-600">
                        Provides free legal services to disadvantaged children, families, and individuals in Palm Beach
                        County.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <Link
                        href="https://frls.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1d3557] hover:underline flex items-center"
                      >
                        Florida Rural Legal Services <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                      <p className="text-sm text-gray-600">
                        Serves Palm Beach County along with 12 other counties in Florida.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <Link
                        href="https://www.coasttocoastlegalaid.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[#1d3557] hover:underline flex items-center"
                      >
                        Coast to Coast Legal Aid of South Florida <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                      <p className="text-sm text-gray-600">
                        Provides legal assistance to residents of South Florida, including Palm Beach County.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="rounded-lg bg-[#f8f9fa] p-4 mt-4">
                  <h3 className="font-medium mb-2 text-[#1d3557]">Palm Beach County Bar Association</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    The Palm Beach County Bar Association may offer referrals to attorneys who provide pro bono or
                    reduced-fee services.
                  </p>
                  <Link
                    href="https://www.palmbeachbar.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#1d3557] hover:underline flex items-center"
                  >
                    Visit Palm Beach County Bar Association <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="rounded-lg border p-6 bg-[#f8f9fa]">
          <h2 className="text-xl font-bold mb-4 text-[#1d3557]">How to Access Legal Aid</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                <strong>Check eligibility:</strong> Most legal aid organizations have income requirements. You may need
                to provide proof of income and assets.
              </p>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                <strong>Contact the organization:</strong> Reach out to the legal aid organization that serves your
                area. Many have intake processes by phone or online.
              </p>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                <strong>Be prepared:</strong> Have documents related to your legal issue ready when you contact legal
                aid. This helps them determine if they can assist you.
              </p>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                <strong>Be patient:</strong> Legal aid organizations often have limited resources and high demand. There
                may be a waiting period before you can receive assistance.
              </p>
            </li>
          </ul>
        </div>

        <h3 className="font-medium text-[#1d3557]">
          How can I volunteer with the People's Grand Jury Oversight Committee?
        </h3>

        <div className="flex justify-between items-center pt-6">
          <Link href="/" passHref>
            <Button variant="outline" className="w-full sm:w-auto">
              Back to Home
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button className="w-full sm:w-auto bg-[#1d3557] hover:bg-[#2a4a73]">
              Contact Us <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
