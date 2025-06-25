"use client"

import Link from "next/link"
import Image from "next/image"

export function RankRaceLogo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/RankRaceSmall.svg"
        alt="RankRace Logo - Shopify SEO Expert Services"
        width={32}
        height={32}
        className={className}
        priority
      />
      <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
        RankRace
      </span>
    </Link>
  )
}
