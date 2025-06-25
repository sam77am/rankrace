import Link from "next/link"
import { RankRaceLogo } from "@/components/logo"

export default function PrivacyPolicyPage() {
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
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At RankRace, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect
          your personal information.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4">
          We collect your name, email, website URL, and message when you fill out our contact form. No cookies or tracking scripts are used.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Use of Information</h2>
        <p className="mb-4">
          We only use your data to respond to your inquiry and provide SEO services. We never share your data with third parties.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-4">
          You can contact us to access, update, or delete your personal data at any time.
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
          </div>
          <div>&copy; {new Date().getFullYear()} RankRace. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
