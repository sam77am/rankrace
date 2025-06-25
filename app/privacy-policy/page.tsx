import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">
          At RankRace, your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect
          your personal information.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
        <p className="mb-4">
          We may collect information such as your name, email address, website URL, and any message you submit via our forms.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
        <p className="mb-4">
          Your data is used solely for communication, analysis, and service improvement. We do not sell your information.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
        <p className="mb-4">
          You can request access, correction, or deletion of your data at any time by emailing us at info@kashyapllc.com.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Changes</h2>
        <p className="mb-4">
          We may update this policy periodically. Changes will be posted on this page with a revised "last updated" date.
        </p>
        <p className="text-sm text-gray-500 mt-10">Last updated: June 2025</p>
      </main>
      <Footer />
    </>
  )
}
