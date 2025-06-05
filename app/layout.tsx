import type React from "react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

import { ThemeProvider } from "@/components/theme-provider"
import { MobileNav } from "@/components/mobile-nav"
import { DisclaimerModal } from "@/components/disclaimer-modal"
import { DisclaimerButton } from "@/components/disclaimer-button"
import { FooterDisclaimer } from "@/components/footer-disclaimer"
import "./globals.css"

export const metadata: Metadata = {
  title: "Palm Beach County Grand Jury Oversight Committee",
  description: "Ensuring accountability and transparency in our community.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <DisclaimerModal />
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src="/images/palm-beach-county-logo.png"
                    alt="Palm Beach County Grand Jury Oversight Committee Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-bold text-lg text-[#1d3557]">
                    Palm Beach County Grand Jury Oversight Committee
                  </span>
                </Link>
                <nav className="hidden md:flex gap-6">
                  <Link
                    href="/reports"
                    className="text-sm font-medium hover:text-[#1d3557] hover:underline underline-offset-4"
                  >
                    Reports & Documents
                  </Link>
                  <Link
                    href="/submit-complaint"
                    className="text-sm font-medium hover:text-[#1d3557] hover:underline underline-offset-4"
                  >
                    Submit Complaint
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:text-[#1d3557] hover:underline underline-offset-4"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm font-medium hover:text-[#1d3557] hover:underline underline-offset-4"
                  >
                    Contact
                  </Link>
                </nav>
                <div className="flex md:hidden">
                  <MobileNav />
                </div>
              </div>
            </header>
            {children}
            <FooterDisclaimer />
            <footer className="border-t py-6 md:py-0">
              <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                  <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/images/palm-beach-county-logo.png"
                      alt="Palm Beach County Grand Jury Oversight Committee Logo"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span className="font-medium text-[#1d3557]">Palm Beach County Grand Jury Oversight Committee</span>
                  </Link>
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Palm Beach County Grand Jury Oversight Committee. All rights
                    reserved.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/reports"
                    className="text-sm text-muted-foreground hover:text-[#1d3557] hover:underline underline-offset-4"
                  >
                    Reports & Documents
                  </Link>
                  <Link
                    href="/submit-complaint"
                    className="text-sm text-muted-foreground hover:text-[#1d3557] hover:underline underline-offset-4"
                  >
                    Submit Complaint
                  </Link>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-[#1d3557] hover:underline underline-offset-4"
                  >
                    Contact
                  </Link>
                  <DisclaimerButton />
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
