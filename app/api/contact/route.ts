import { type NextRequest, NextResponse } from "next/server"

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

    // In a real implementation, you would integrate with an email service like:
    // - SendGrid
    // - Mailgun
    // - AWS SES
    // - Resend

    // For now, we'll simulate the email sending
    console.log("Email would be sent to: info@kashyapllc.com")
    console.log("Email content:", emailContent)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({ message: "Contact form submitted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
