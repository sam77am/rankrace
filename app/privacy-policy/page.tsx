import Link from "next/link"
import { RankRaceLogo } from "@/components/logo"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <RankRaceLogo />
            <span className="text-xl font-semibold text-gray-800">RankRace</span>
          </Link>
          <nav className="space-x-4 text-sm text-gray-600">
            <Link href="/">Home</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
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
      <footer className="bg-gray-100 py-6 text-sm text-gray-500 text-center">
        &copy; {new Date().getFullYear()} RankRace. All rights reserved.
      </footer>
    </div>
  )
}
