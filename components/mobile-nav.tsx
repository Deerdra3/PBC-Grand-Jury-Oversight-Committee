"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="p-0 h-10 w-10 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[80%] sm:w-[350px] pt-10">
        <div className="flex flex-col gap-6 px-2">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/images/palm-beach-county-logo.png"
              alt="Palm Beach County Grand Jury Oversight Committee Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-[#1d3557]">Palm Beach County Grand Jury Oversight Committee</span>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/reports"
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-[#1d3557] hover:underline underline-offset-4"
            >
              Reports & Documents
            </Link>
            <Link
              href="/submit-complaint"
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-[#1d3557] hover:underline underline-offset-4"
            >
              Submit Complaint
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-[#1d3557] hover:underline underline-offset-4"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-lg font-medium hover:text-[#1d3557] hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
          <div className="border-t pt-4">
            <Link href="/submit-complaint" onClick={() => setOpen(false)} className="w-full">
              <Button className="w-full bg-[#1d3557] hover:bg-[#2a4a73]">Submit a Complaint</Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
