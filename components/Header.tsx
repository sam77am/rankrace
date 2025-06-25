/* components/Header.tsx */
"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RankRaceLogo } from "@/components/logo"

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname        = usePathname()
  const router          = useRouter()

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  const nav = [
    { href: "/#services", label: "Shopify SEO Services" },
    { href: "/#about",    label: "About" },
    { href: "/#pricing",  label: "Pricing" },
    { href: "/#results",  label: "Results" },
    { href: "/#contact",  label: "Contact" },
  ] as const

  const handleNav = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault()
    const isHome = pathname === "/"
    const hash   = href.split("#")[1]

    isHome && hash ? scrollTo(hash) : router.push(href)
    setOpen(false)
  }

  return (
    <header className="border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">

        {/* ── hamburger (< lg) ── */}
        <button
          onClick={() => setOpen(p => !p)}
          className="lg:hidden mr-2 text-gray-700 hover:text-indigo-600"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* ── logo ── */}
        <Link href="/" aria-label="RankRace home">
          <RankRaceLogo />
        </Link>

        {/* ── desktop nav (≥ lg) ── */}
        <nav className="hidden lg:flex items-center space-x-8">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium whitespace-nowrap"
              onClick={(e) => handleNav(e, href)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* ── CTA (always visible) ── */}
        <Button
          className="inline-flex bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-4 sm:px-5 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          onClick={() =>
            pathname === "/" ? scrollTo("contact") : router.push("/#contact")
          }
        >
          Free SEO Audit
        </Button>
      </div>

      {/* ── mobile drop-down nav ── */}
      {open && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-100">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            {nav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-gray-700 font-medium hover:text-indigo-600"
                onClick={(e) => handleNav(e, href)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
