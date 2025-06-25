import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
        <p className="mb-4 text-gray-700">
          At RankRace, your privacy is our priority. We collect only necessary data to improve our services.
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Information Collected:</strong> We collect name, email, and website URL via our contact forms.
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Usage:</strong> This data is used for providing Shopify SEO consultations and to send relevant
          information.
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Data Sharing:</strong> We do not sell or share your information with third parties.
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Security:</strong> We implement strong security practices to protect your data.
        </p>
        <p className="mb-4 text-gray-700">
          If you have questions or concerns, please email us at info@rankrace.com.
        </p>
      </main>
      <Footer />
    </>
  )
}
