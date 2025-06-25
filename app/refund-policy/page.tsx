import Link from "next/link"
import { RankRaceLogo } from "@/components/logo"

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" aria-label="RankRace logo">
            <RankRaceLogo />
          </Link>
          <nav className="space-x-6 text-sm font-medium text-gray-600">
            <Link href="/#services">Services</Link>
            <Link href="/#process">Process</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#faq">FAQs</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

        <p className="mb-4">
          At RankRace, we are committed to delivering high-quality SEO services tailored to your Shopify store’s unique
          needs. Due to the nature of our digital and consultative work, we follow a strict but fair refund policy as
          outlined below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility for Refund</h2>
        <p className="mb-4">
          You may request a full refund within <strong>48 hours (2 days)</strong> of purchase <strong>only if SEO work has not begun</strong>.
          Once we initiate research, audits, strategy, or any implementation tasks, your order becomes non-refundable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. When Refunds Are Not Possible</h2>
        <ul className="list-disc list-inside mb-4">
          <li>The refund request is made after the initial 2-day window.</li>
          <li>Any SEO work, audits, or keyword research has already started or been delivered.</li>
          <li>The request is made due to change of mind, budget issues, or lack of understanding of SEO process.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. How to Request a Refund</h2>
        <p className="mb-4">
          You must submit a written request by emailing{" "}
          <a href="mailto:info@rankrace.com" className="text-indigo-600 underline">info@rankrace.com</a> with your order details and reason for
          refund. Our support team will review the request and respond within 2 business days.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Refund Timeline</h2>
        <p className="mb-4">
          If your refund request is approved, the funds will be returned to your original payment method within 5–7 business
          days, depending on your bank or provider.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Chargebacks</h2>
        <p className="mb-4">
          Any chargebacks without first attempting to resolve the issue with our support team will be treated as fraudulent
          and may result in legal action.
        </p>

        <p className="text-sm text-gray-500 mt-10">Last updated: June 2025</p>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 text-sm py-8">
        <div className="max-w-6xl mx-auto px-4 text-center space-y-3">
          <div className="space-x-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
          <div>&copy; {new Date().getFullYear()} RankRace. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
