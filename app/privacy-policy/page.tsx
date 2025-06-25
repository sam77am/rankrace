/* app/privacy-policy/page.tsx */

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Privacy Policy - RankRace",
  description:
    "Learn how RankRace collects, uses, and protects your personal information when you use our Shopify SEO services.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <Header />

      <main className="flex-grow max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4">
          At RankRace, your privacy is important to us. This Privacy Policy explains how we collect, use,
          and safeguard your personal information.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">
          When you fill out our contact form, we collect your name, email address, website URL, and any message
          you choose to share. We do <strong>not</strong> use tracking scripts or marketing pixels, and we
          don’t store unnecessary cookies beyond what’s essential for site functionality.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="mb-4">
          Your data is used solely to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Respond to your enquiry</li>
          <li>Provide auditing or SEO services you request</li>
          <li>Send occasional, relevant updates (only if you opt-in)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Sharing & Security</h2>
        <p className="mb-4">
          We never sell, rent, or trade your personal information. Access is restricted to authorized RankRace
          team members, and all data is protected with industry-standard encryption and access controls.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, update, or request deletion of your personal data at any time. Simply
          email us at{" "}
          <a href="mailto:info@rankrace.com" className="text-indigo-600 underline">
            info@rankrace.com
          </a>
          , and we’ll respond within 30 days.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Updates to This Policy</h2>
        <p className="mb-4">
          We may revise this Privacy Policy periodically to reflect changes in our practices or legal
          requirements. Any updates will be posted on this page with a new “Last updated” date.
        </p>

        <p className="text-sm text-gray-500 mt-10">Last updated: June 2025</p>
      </main>

      <Footer />
    </div>
  )
}
