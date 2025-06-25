/* app/refund-policy/page.tsx */
"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function RefundPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* ─────────────  GLOBAL HEADER  ───────────── */}
      <Header />

      {/* ─────────────  MAIN CONTENT  ───────────── */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>

        <p className="mb-4">
          At RankRace, we’re committed to delivering high-quality SEO services tailored to your Shopify
          store’s unique needs. Because our work is digital and consultative, we follow a strict&nbsp;but
          fair refund policy as outlined below.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Eligibility for Refund</h2>
        <p className="mb-4">
          You may request a <strong>full refund within 48&nbsp;hours (2 days)</strong> of purchase&nbsp;
          <strong>only if SEO work has not begun</strong>. Once we start research, audits, strategy, or any
          implementation tasks, the order becomes non-refundable.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. When Refunds Are Not Possible</h2>
        <ul className="list-disc list-inside mb-4">
          <li>The request is made after the initial 2-day window.</li>
          <li>Any SEO work, audits, or keyword research has already started or been delivered.</li>
          <li>The request is due to change of mind, budget issues, or misunderstanding of the SEO process.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. How to Request a Refund</h2>
        <p className="mb-4">
          Email&nbsp;
          <a href="mailto:info@rankrace.com" className="text-indigo-600 underline">
            info@rankrace.com
          </a>{" "}
          with your order details and the reason for your request. Our support team will review and respond
          within two business days.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Refund Timeline</h2>
        <p className="mb-4">
          If your refund is approved, funds will be returned to your original payment method within
          5–7&nbsp;business days (processing times may vary by bank or provider).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Chargebacks</h2>
        <p className="mb-4">
          Filing a chargeback without first attempting to resolve the matter with our support team will be
          treated as fraudulent and may result in legal action.
        </p>

        <p className="text-sm text-gray-500 mt-10">Last updated: June 2025</p>
      </main>

      {/* ─────────────  GLOBAL FOOTER  ───────────── */}
      <Footer />
    </div>
  )
}
