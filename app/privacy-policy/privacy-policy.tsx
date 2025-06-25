import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-6 text-gray-800">
<h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
<p>
  At RankRace, your privacy is important to us. This policy outlines how we collect, use, and protect your personal data when you visit our website or use our services.
</p>
<h2 className="text-2xl font-semibold mt-6">Information We Collect</h2>
<p>We may collect personal information including your name, email, website URL, and any details you submit through forms.</p>
<h2 className="text-2xl font-semibold mt-6">How We Use Your Information</h2>
<p>We use your information to analyze and improve our SEO services, and to contact you for business purposes.</p>
<h2 className="text-2xl font-semibold mt-6">Third-Party Sharing</h2>
<p>We do not sell your data. We may share your info with service providers (like analytics or email providers) under strict data privacy agreements.</p>
<h2 className="text-2xl font-semibold mt-6">Your Rights</h2>
<p>You may contact us anytime to view, correct, or delete your personal data.</p>

      </main>
      <Footer />
    </>
  )
}