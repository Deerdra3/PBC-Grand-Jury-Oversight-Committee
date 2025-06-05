import Link from "next/link"
import { CheckCircle, Home } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ThankYou() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl text-center space-y-8">
        <div className="flex justify-center">
          <div className="rounded-full bg-green-100 p-3">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#1d3557]">
            Thank You for Your Submission
          </h1>
          <p className="text-gray-600 md:text-xl">
            Your complaint has been successfully submitted to the Palm Beach County Grand Jury Oversight Committee.
          </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
          <h2 className="text-xl font-medium text-[#1d3557] mb-4">What Happens Next?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-2">
              <span className="font-medium">1.</span>
              <span>Your complaint will be reviewed by the Oversight Committee.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-medium">2.</span>
              <span>Receipt of your complaint will be acknowledged by mail.</span>
            </li>
            <li className="flex gap-2">
              <span className="font-medium">3.</span>
              <span>
                If your complaint falls within the Grand Jury's jurisdiction, it will be considered for investigation.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="font-medium">4.</span>
              <span>You will be notified of the status of your complaint by mail.</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-600">
          If you have any questions or need to provide additional information, please contact us at{" "}
          <span className="font-medium">justice@pbcgrandjury.com</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link href="/" passHref>
            <Button className="bg-[#1d3557] hover:bg-[#2a4a73]">
              <Home className="mr-2 h-4 w-4" /> Return to Home
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="outline">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
