"use client"

import { Button } from "@/components/ui/button"
import { RankRaceLogo } from "@/components/logo"

/**
 * Top-level site navigation / CTA bar.
 * Add / remove links by editing the `nav` array.
 */
export function Header() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  /** links that live in the centre nav */
  const nav = [
    { href: "/#services", label: "Shopify SEO Services" },
    { href: "/#about",    label: "About" },
    { href: "/#pricing",  label: "Pricing" },
    { href: "/#results",  label: "Results" },
    { href: "/#contact",  label: "Contact" },
  ] as const

  return (
    <header className="border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <RankRaceLogo />

        {/* desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {nav.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              onClick={e => {
                e.preventDefault()
                scrollTo(href.replace("#", ""))
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <Button
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => scrollTo("contact")}
        >
          Free SEO Audit
        </Button>
      </div>
    </header>
  )
}
