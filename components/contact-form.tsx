"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    websiteUrl: "",
    contactName: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/mrbkozdr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          websiteUrl: formData.websiteUrl,
          contactName: formData.contactName,
          email: formData.email,
          message: formData.message,
        })
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error("❌ Submission failed:", await response.text())
        alert("There was an error submitting the form. Please try again.")
      }
    } catch (err) {
      console.error("🔥 Unexpected error:", err)
      alert("Unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (isSubmitted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full w-fit mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
          <p className="text-gray-600 leading-relaxed">
            Your message has been sent successfully. Our Shopify SEO experts will review your information and get back
            to you within 24 hours with a customized strategy for your store.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-900">Get Your Free Shopify SEO Consultation</CardTitle>
        <CardDescription className="text-gray-600">
          Fill out the form below and our Shopify SEO experts will analyze your store and send you a custom strategy.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="websiteUrl" className="text-sm font-semibold text-gray-900">
              Website URL *
            </Label>
            <Input
              id="websiteUrl"
              name="websiteUrl"
              type="url"
              placeholder="https://yourstore.myshopify.com"
              value={formData.websiteUrl}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 focus:border-indigo-500 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactName" className="text-sm font-semibold text-gray-900">
              Contact Name *
            </Label>
            <Input
              id="contactName"
              name="contactName"
              type="text"
              placeholder="Your full name"
              value={formData.contactName}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 focus:border-indigo-500 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold text-gray-900">
              Email Address *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="border-2 border-gray-200 focus:border-indigo-500 rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-semibold text-gray-900">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your Shopify store, current challenges, and SEO goals..."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="border-2 border-gray-200 focus:border-indigo-500 rounded-lg"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                Send My Free SEO Analysis
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to receive marketing communications from RankRace. Your information will
            be sent to our team for analysis.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
