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
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicon.ico",
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
    <html lang="en" dir="ltr" data-theme="light">
      <head>
        {/* Extra favicon links for full compatibility */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
