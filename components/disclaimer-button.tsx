"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function DisclaimerButton() {
  const [isOpen, setIsOpen] = useState(false)

  const openDisclaimer = () => {
    setIsOpen(true)
  }

  const closeDisclaimer = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={openDisclaimer}
        className="text-sm text-muted-foreground hover:text-[#1d3557] hover:underline underline-offset-4"
      >
        Disclaimer
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-auto rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={closeDisclaimer}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close disclaimer"
            >
              <X className="h-5 w-5" />
            </button>

            <h2 className="mb-4 text-xl font-bold text-[#1d3557]">Important Disclaimer</h2>

            <div className="space-y-4 text-gray-700">
              <p>
                The Palm Beach County Grand Jury Oversight Committee is a private, independent citizen-led initiative
                and is not affiliated with, or operated as an official government entity at any level—local, state, or
                federal.
              </p>

              <p>We are guided by the Holy Spirit and the US Constitution based upon:</p>

              <ul className="ml-6 list-disc space-y-1">
                <li>Amendment V</li>
                <li>18 USC 3332</li>
                <li>18 USC 241</li>
                <li>18 USC 242</li>
              </ul>

              <p>
                Our mission is to educate citizens and advocate for transparency and justice in grand jury processes, in
                accordance with constitutional principles.
              </p>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={closeDisclaimer}
                className="rounded-md bg-[#1d3557] px-4 py-2 text-white hover:bg-[#2a4a6d] focus:outline-none focus:ring-2 focus:ring-[#1d3557] focus:ring-offset-2"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
