import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { websiteUrl, contactName, email, message } = body

    // Validate required fields
    if (!websiteUrl || !contactName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Email content
    const emailContent = `
      New Shopify SEO Audit Request from RankRace Website
      
      Contact Details:
      - Name: ${contactName}
      - Email: ${email}
      - Website URL: ${websiteUrl}
      
      Message:
      ${message || "No additional message provided"}
      
      ---
      This request was submitted through the RankRace Shopify SEO landing page.
    `

    // Send email using Resend
    await resend.emails.send({
      from: "RankRace Contact <noreply@rankrace.com>",
      to: ["info@kashyapllc.com"],
      subject: "New Shopify SEO Inquiry from RankRace",
      text: emailContent,
    })

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
