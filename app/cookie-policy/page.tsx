import Link from "next/link"
import { RankRaceLogo } from "@/components/logo"

export default function CookiePolicyPage() {
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
        <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

        <p className="mb-4">
          This Cookie Policy explains how RankRace uses cookies and similar technologies on our website. By using our site,
          you consent to the use of cookies as outlined in this policy.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files stored on your device when you visit a website. They help websites remember your
          actions and preferences, such as login, language, and other display settings, so you don’t have to re-enter them
          each time you return.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Cookies</h2>
        <p className="mb-4">
          RankRace uses cookies to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Improve website functionality and performance</li>
          <li>Understand user behavior through analytics tools</li>
          <li>Enhance the user experience</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Types of Cookies</h2>
        <p className="mb-4">
          We may use the following types of cookies:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Essential cookies:</strong> Required for the website to function properly.</li>
          <li><strong>Analytics cookies:</strong> Help us analyze how users interact with our site.</li>
          <li><strong>Functionality cookies:</strong> Remember user preferences and settings.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Cookies</h2>
        <p className="mb-4">
          We may use third-party services like Google Analytics. These providers may set their own cookies to help analyze
          traffic and usage patterns. You can review their privacy and cookie policies for more details.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Managing Cookies</h2>
        <p className="mb-4">
          You can control or delete cookies through your browser settings. However, disabling essential cookies may affect
          website functionality.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Updates to This Policy</h2>
        <p className="mb-4">
          We may occasionally update this Cookie Policy to reflect changes in law or our practices. Please check this page
          periodically for the latest version.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions about our Cookie Policy, email us at{" "}
          <a href="mailto:info@rankrace.com" className="text-indigo-600 underline">info@rankrace.com</a>.
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
