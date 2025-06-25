/* components/Header.tsx */
"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { RankRaceLogo } from "@/components/logo"

export function Header() {
  const pathname = usePathname()          // current route
  const router   = useRouter()

  /** smooth-scroll helper (homepage only) */
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  /** central nav links */
  const nav = [
    { href: "/#services", label: "Shopify SEO Services" },
    { href: "/#about",    label: "About" },
    { href: "/#pricing",  label: "Pricing" },
    { href: "/#results",  label: "Results" },
    { href: "/#contact",  label: "Contact" },
  ] as const

  /** universal click behaviour */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    const isHome = pathname === "/"
    const hash   = href.split("#")[1]            // e.g. "contact"

    if (isHome && hash) {
      // we're already on the homepage → do smooth scroll
      e.preventDefault()
      scrollTo(hash)
    } else {
      // different page → let Next.js navigate
      e.preventDefault()
      router.push(href)
    }
  }

  return (
    <header className="border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* logo */}
        <Link href="/" aria-label="RankRace home">
          <RankRaceLogo />
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <Button
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => {
            pathname === "/" ? scrollTo("contact") : router.push("/#contact")
          }}
        >
          Free SEO Audit
        </Button>
      </div>
    </header>
  )
}
