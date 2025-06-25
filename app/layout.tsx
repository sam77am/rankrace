import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RankRace - #1 Shopify SEO Expert | Shopify SEO Services",
  description:
    "Leading Shopify SEO agency with proven results. Our Shopify SEO experts increase organic traffic by 400%+ through specialized Shopify SEO services. Get your free SEO audit today!",
  keywords:
    "Shopify SEO, Shopify SEO Expert, Shopify SEO Services, Shopify SEO Agency, E-commerce SEO, Shopify Store Optimization",
  authors: [{ name: "RankRace" }],
  creator: "RankRace",
  publisher: "RankRace",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rankrace.com",
    siteName: "RankRace - Shopify SEO Experts",
    title: "RankRace - #1 Shopify SEO Expert | Shopify SEO Services That Drive Results",
    description:
      "Leading Shopify SEO agency with proven results. Our Shopify SEO experts increase organic traffic by 400%+ through specialized Shopify SEO services. Get your free SEO audit today!",
    images: [
      {
        url: "/shopify-seo-og-image.png",
        width: 1200,
        height: 630,
        alt: "RankRace Shopify SEO Services - Increase organic traffic by 400%+ with expert Shopify SEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankRace - #1 Shopify SEO Expert",
    description:
      "Get the best Shopify SEO strategies with proven 400% traffic growth. RankRace is the #1 Shopify SEO agency.",
    creator: "@rankrace",
    images: ["/shopify-seo-og-image.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="32x32" type="image/png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
