import { Resend } from 'resend'
import { type NextRequest, NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { websiteUrl, contactName, email, message } = body

    if (!websiteUrl || !contactName || !email) {
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

const { error } = await resend.emails.send({
  from: "RankRace <noreply@rankrace.com>", // now using your verified domain
  to: "info@kashyapllc.com",
  subject: "New Shopify SEO Inquiry",
  text: emailContent,
})

    if (error) {
      console.error("Email error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (err) {
    console.error("Unexpected error:", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
