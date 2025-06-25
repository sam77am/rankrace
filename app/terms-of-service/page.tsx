/* app/terms-of-service/page.tsx */
"use client"

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      {/* ─────────────  GLOBAL HEADER  ───────────── */}
      <Header />

      {/* ─────────────  MAIN CONTENT  ───────────── */}
      <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <p className="mb-4">
          Welcome to RankRace! These Terms of Service govern your use of our website and the SEO services we
          provide. By accessing or using our services, you agree to be bound by these terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Services</h2>
        <p className="mb-4">
          RankRace offers Shopify SEO audits, consulting, and optimization services tailored to e-commerce
          stores. We do not guarantee rankings but use industry best practices to help improve your organic
          visibility and traffic.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Client Responsibilities</h2>
        <p className="mb-4">
          Clients must provide accurate, timely information about their business, products, and goals. Failure
          to provide access to necessary systems (e.g., Shopify admin, Google Analytics, Google Search Console)
          may limit our ability to deliver results.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Payments</h2>
        <p className="mb-4">
          All payments must be made in advance unless otherwise agreed. Custom service packages may require
          milestone payments. Late payments may result in delays or suspension of services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. No Guarantee</h2>
        <p className="mb-4">
          While we follow the latest SEO strategies, RankRace makes no guarantees regarding rankings, traffic,
          or sales improvements. SEO is a long-term process and outcomes depend on multiple factors outside our
          control.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Intellectual Property</h2>
        <p className="mb-4">
          All content, strategies, and deliverables created by RankRace remain our intellectual property unless
          otherwise specified in writing. Clients may use deliverables for their business needs only.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Termination</h2>
        <p className="mb-4">
          Either party may terminate the agreement with written notice. In case of early termination, any
          completed work will be billed, and access to SEO recommendations and reports may be revoked.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Limitation of Liability</h2>
        <p className="mb-4">
          RankRace shall not be liable for any indirect, incidental, or consequential damages, including loss
          of profits, arising out of the use or inability to use our services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Changes to Terms</h2>
        <p className="mb-4">
          We may update these terms from time to time. Continued use of our website and services after updates
          implies acceptance of the new terms.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact</h2>
        <p className="mb-4">
          For questions about these Terms of Service, please email&nbsp;
          <a href="mailto:info@rankrace.com" className="text-indigo-600 underline">
            info@rankrace.com
          </a>
          .
        </p>

        <p className="text-sm text-gray-500 mt-10">Last updated: June 2025</p>
      </main>

      {/* ─────────────  GLOBAL FOOTER  ───────────── */}
      <Footer />
    </div>
  )
}
