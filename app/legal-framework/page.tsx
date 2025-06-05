import Link from "next/link"
import { ChevronRight, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LegalFramework() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557]">
            Legal Framework
          </h1>
          <p className="text-gray-600 md:text-xl">
            Understanding the legal foundations that support citizen engagement with grand jury processes in Palm Beach
            County through the People's Grand Jury Oversight Committee.
          </p>
        </div>

        <Tabs defaultValue="uscode3332" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="uscode3332">18 U.S. Code § 3332</TabsTrigger>
            <TabsTrigger value="uscode241242">18 USC 241 & 242</TabsTrigger>
            <TabsTrigger value="quowarranto">Quo Warranto</TabsTrigger>
          </TabsList>

          <TabsContent value="uscode3332" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>18 U.S. Code § 3332 - Powers and Duties of Grand Jury</CardTitle>
                <CardDescription>Understanding the role and responsibilities of a federal grand jury</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h3 className="mb-2 font-semibold">Statutory Text:</h3>
                  <p className="text-sm">
                    (a) It shall be the duty of each grand jury impaneled within any judicial district to inquire into
                    offenses against the criminal laws of the United States alleged to have been committed within that
                    district. Such alleged offenses may be brought to the attention of the grand jury by the court or by
                    any attorney appearing on behalf of the United States for the presentation of evidence. Any such
                    attorney receiving information concerning such an alleged offense from any other person shall, if
                    requested by such other person, inform the grand jury of such alleged offense, the identity of such
                    other person, and such attorney&apos;s action or recommendation.
                  </p>
                  <p className="mt-2 text-sm">
                    (b) Whenever the district court determines that the volume of business of the special grand jury
                    exceeds the capacity of the grand jury to discharge its obligations, the district court may order an
                    additional special grand jury for that district to be impaneled.
                  </p>
                </div>

                <h3 className="font-semibold">Key Points:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Grand juries have the duty to inquire into federal criminal offenses within their district</li>
                  <li>Offenses can be brought to the grand jury&apos;s attention by the court or U.S. attorneys</li>
                  <li>
                    U.S. attorneys must inform the grand jury of alleged offenses when requested by the person providing
                    the information
                  </li>
                </ul>

                <h3 className="font-semibold">Significance:</h3>
                <p>
                  This statute establishes that citizens have a pathway to bring information about potential federal
                  crimes to a grand jury through U.S. attorneys. It creates a mechanism for citizen participation in the
                  grand jury process.
                </p>

                <div className="flex justify-between items-center border-t pt-4 mt-4">
                  <Link
                    href="https://www.law.cornell.edu/uscode/text/18/3332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1d3557] hover:underline flex items-center"
                  >
                    View full statute on Cornell Law <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href="/submit-complaint" passHref>
                    <Button size="sm">
                      Submit a Complaint <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Historical Context and Court Interpretations</AccordionTrigger>
                <AccordionContent className="space-y-4">
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
                  <p>Notable cases discussing this provision include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>In re Grand Jury Application (N.D. Cal. 1986)</li>
                    <li>Sargeant v. Dixon (D.C. Cir. 1997)</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Practical Applications and Limitations</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p>
                    While this statute provides a mechanism for citizen input into the grand jury process, there are
                    practical considerations and limitations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>U.S. Attorneys retain prosecutorial discretion in how information is presented</li>
                    <li>The grand jury operates under the direction of the court</li>
                    <li>Grand jury proceedings are secret under Federal Rule of Criminal Procedure 6(e)</li>
                    <li>There is limited judicial review of grand jury proceedings</li>
                  </ul>
                  <p>
                    Citizens seeking to utilize this provision should understand these limitations and work within
                    established legal channels.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="uscode241242" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>18 U.S. Code §§ 241 & 242 - Civil Rights Statutes</CardTitle>
                <CardDescription>Federal criminal statutes protecting civil rights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h3 className="mb-2 font-semibold">18 U.S.C. § 241 - Conspiracy Against Rights:</h3>
                  <p className="text-sm">
                    If two or more persons conspire to injure, oppress, threaten, or intimidate any person in any State,
                    Territory, Commonwealth, Possession, or District in the free exercise or enjoyment of any right or
                    privilege secured to him by the Constitution or laws of the United States, or because of his having
                    so exercised the same...
                  </p>

                  <h3 className="mt-4 mb-2 font-semibold">
                    18 U.S.C. § 242 - Deprivation of Rights Under Color of Law:
                  </h3>
                  <p className="text-sm">
                    Whoever, under color of any law, statute, ordinance, regulation, or custom, willfully subjects any
                    person in any State, Territory, Commonwealth, Possession, or District to the deprivation of any
                    rights, privileges, or immunities secured or protected by the Constitution or laws of the United
                    States...
                  </p>
                </div>

                <h3 className="font-semibold">Key Elements:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Section 241:</strong> Prohibits conspiracies to interfere with constitutional rights
                  </li>
                  <li>
                    <strong>Section 242:</strong> Criminalizes deprivation of rights by those acting under color of law
                  </li>
                  <li>Both statutes protect constitutional and federal statutory rights</li>
                  <li>These are criminal statutes enforced by federal prosecutors</li>
                </ul>

                <h3 className="font-semibold">Significance:</h3>
                <p>
                  These statutes provide federal criminal penalties for violations of civil rights, particularly when
                  committed by public officials or through conspiracy. They are important tools for addressing systemic
                  violations of constitutional rights.
                </p>

                <div className="flex justify-between items-center border-t pt-4 mt-4">
                  <Link
                    href="https://www.justice.gov/crt/deprivation-rights-under-color-law"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1d3557] hover:underline flex items-center"
                  >
                    DOJ Civil Rights Division resources <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href="/submit-complaint" passHref>
                    <Button size="sm">
                      Submit a Complaint <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Historical Development and Landmark Cases</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p>
                    These statutes were originally enacted during Reconstruction following the Civil War to protect the
                    rights of formerly enslaved people. They have since evolved through judicial interpretation to
                    address a wide range of civil rights violations.
                  </p>
                  <p>Landmark Supreme Court cases interpreting these statutes include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Screws v. United States (1945):</strong> Established the "willfulness" requirement for §
                      242 violations
                    </li>
                    <li>
                      <strong>United States v. Price (1966):</strong> Expanded the definition of "under color of law" to
                      include private individuals acting in concert with state officials
                    </li>
                    <li>
                      <strong>United States v. Guest (1966):</strong> Addressed the scope of § 241 in protecting
                      Fourteenth Amendment rights
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Modern Applications and Enforcement</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p>
                    Today, these statutes are primarily enforced by the Civil Rights Division of the U.S. Department of
                    Justice. They are used to prosecute:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Excessive force by law enforcement</li>
                    <li>Sexual misconduct by officials acting under color of law</li>
                    <li>Deliberate indifference to serious medical needs of detainees</li>
                    <li>Conspiracies to interfere with voting rights</li>
                    <li>Hate crimes (in conjunction with other federal statutes)</li>
                  </ul>
                  <p>
                    Prosecutions under these statutes typically require evidence of specific intent to deprive
                    individuals of their constitutional rights, making them challenging but important tools for
                    addressing civil rights violations.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>

          <TabsContent value="quowarranto" className="space-y-6 pt-6">
            <Card>
              <CardHeader>
                <CardTitle>Quo Warranto Process</CardTitle>
                <CardDescription>
                  A legal proceeding that challenges an individual&apos;s right to hold public office
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-lg bg-muted p-4">
                  <h3 className="mb-2 font-semibold">Definition:</h3>
                  <p className="text-sm">
                    Quo warranto (Latin for "by what warrant or authority") is a legal proceeding during which an
                    individual&apos;s right to hold an office or governmental privilege is challenged. In modern
                    practice, it is typically used to challenge a person&apos;s right to hold public office.
                  </p>
                </div>

                <h3 className="font-semibold">Key Features:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Historical writ from English common law incorporated into American jurisprudence</li>
                  <li>Typically codified in state statutes rather than federal law</li>
                  <li>
                    Generally requires standing and is often limited to government attorneys or those with special
                    interest
                  </li>
                  <li>Challenges the legal authority by which a public official holds office</li>
                </ul>

                <h3 className="font-semibold">Significance:</h3>
                <p>
                  Quo warranto provides a mechanism to ensure that public officials legitimately hold their positions
                  and have not usurped authority. It serves as a check on unauthorized exercise of public power.
                </p>

                <div className="flex justify-between items-center border-t pt-4 mt-4">
                  <Link
                    href="https://www.law.cornell.edu/wex/quo_warranto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1d3557] hover:underline flex items-center"
                  >
                    Cornell Law School Wex definition <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href="/submit-complaint" passHref>
                    <Button size="sm">
                      Submit a Complaint <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Historical Development and Modern Status</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p>
                    Quo warranto originated in medieval England as a prerogative writ used by the Crown to challenge a
                    subject&apos;s claim to office or franchise. It evolved from a criminal proceeding to a civil one
                    over time.
                  </p>
                  <p>
                    In the United States, quo warranto has been incorporated into state legal systems in various forms:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Some states maintain it as a common law writ</li>
                    <li>Many states have codified the procedure in statutes</li>
                    <li>Federal quo warranto actions are limited and governed by D.C. Code §§ 16-3501 to 16-3503</li>
                  </ul>
                  <p>
                    The availability and scope of quo warranto varies significantly by jurisdiction, with most states
                    restricting who has standing to bring such actions.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Practical Applications and Limitations</AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p>Modern applications of quo warranto include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Challenging qualifications of elected officials</li>
                    <li>Contesting appointments to public office</li>
                    <li>Addressing usurpation of public authority</li>
                    <li>Challenging corporate charters in some jurisdictions</li>
                  </ul>
                  <p>Important limitations to consider:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Standing requirements often limit who can bring quo warranto actions</li>
                    <li>
                      Many jurisdictions require the action to be brought by the attorney general or with their approval
                    </li>
                    <li>Statutes of limitations may apply</li>
                    <li>Courts generally defer to political processes for elected officials</li>
                    <li>Alternative remedies (e.g., elections, impeachment) may be considered more appropriate</li>
                  </ul>
                  <p>
                    Those interested in quo warranto should consult the specific laws of their jurisdiction, as
                    procedures and availability vary widely.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>

        <div className="rounded-lg border p-6 mt-8">
          <h2 className="text-xl font-bold mb-4 text-[#1d3557]">Additional Resources</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5" />
              <div>
                <Link
                  href="https://www.uscourts.gov/services-forms/jury-service/types-juries"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1d3557] hover:underline"
                >
                  U.S. Courts: Types of Juries
                </Link>
                <p className="text-sm text-gray-600">
                  Official information about different types of juries in the federal system
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5" />
              <div>
                <Link
                  href="https://www.justice.gov/archives/jm/criminal-resource-manual-159-grand-jury-law-and-practice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1d3557] hover:underline"
                >
                  DOJ Criminal Resource Manual: Grand Jury Law and Practice
                </Link>
                <p className="text-sm text-gray-600">
                  Comprehensive resource on grand jury procedures from the Department of Justice
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <ChevronRight className="h-5 w-5 text-[#1d3557] mr-2 mt-0.5" />
              <div>
                <Link
                  href="https://constitution.congress.gov/constitution/amendment-5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1d3557] hover:underline"
                >
                  Fifth Amendment to the U.S. Constitution
                </Link>
                <p className="text-sm text-gray-600">
                  Constitutional foundation for the grand jury in the federal system
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center pt-6">
          <Link href="/" passHref>
            <Button variant="outline">Back to Home</Button>
          </Link>
          <Link href="/submit-complaint" passHref>
            <Button className="bg-[#1d3557] hover:bg-[#2a4a73]">
              Submit a Complaint <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
