import { Resend } from 'resend'
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { websiteUrl, contactName, email, message } = body

    console.log("🔍 Received form data:", body)

    if (!websiteUrl || !contactName || !email) {
      console.warn("⚠️ Missing fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const emailContent = `
      New Shopify SEO Audit Request from RankRace Website
      
      Contact Details:
      - Name: ${contactName}
      - Email: ${email}
      - Website URL: ${websiteUrl}
      
      Message:
      ${message || "No additional message provided"}
    `

    console.log("📤 Sending email...")

    const { error, id } = await resend.emails.send({
      from: "RankRace <noreply@rankrace.com>",
      to: "info@kashyapllc.com",
      subject: "New Shopify SEO Inquiry",
      text: emailContent,
    })

    if (error) {
      console.error("❌ Email send error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    console.log("✅ Email sent successfully:", id)

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (err) {
    console.error("🔥 Unexpected error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
