"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  CheckCircle,
  TrendingUp,
  Search,
  ShoppingCart,
  Users,
  Award,
  ArrowRight,
  BarChart3,
  Target,
  Zap,
  Rocket,
  Crown,
} from "lucide-react"
import Image from "next/image"
import { RankRaceLogo } from "@/components/logo"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <RankRaceLogo />
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Shopify SEO Services
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              About
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Pricing
            </a>
            <a
              href="#results"
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Results
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 transition-colors font-medium"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact
            </a>
          </nav>
          <Button
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Free SEO Audit
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-800 hover:from-indigo-200 hover:to-purple-200 border-0 px-4 py-2 text-sm font-semibold">
                    #1 Shopify SEO Expert Agency
                  </Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Premium{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Shopify SEO
                    </span>{" "}
                    Services That Drive Results
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    As the leading <strong>Shopify SEO expert</strong>, we help e-commerce stores dominate search
                    rankings with our proven <strong>Shopify SEO services</strong>. Increase organic traffic by 400%+
                    and boost revenue through data-driven SEO strategies.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Free Shopify SEO Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 py-4 rounded-full border-2 border-gray-300 hover:border-indigo-300 hover:bg-indigo-50 font-semibold transition-all duration-300"
                    onClick={() => document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View SEO Case Studies
                  </Button>
                </div>
                <div className="flex items-center space-x-8 pt-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      500+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Shopify Stores Optimized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      400%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Avg Traffic Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      $75M+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Revenue Generated</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-3xl opacity-20 -z-10"></div>
                <Image
                  src="/Shopify-SEO-Services.png"
                  alt="Professional Shopify SEO dashboard showing organic traffic growth, keyword rankings, and revenue analytics for e-commerce stores optimized by RankRace SEO experts"
                  width={800}
                  height={600}
                  className="rounded-3xl shadow-2xl border border-gray-200"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                      <TrendingUp className="h-8 w-8 text-green-600" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">Shopify SEO Growth</div>
                      <div className="text-green-600 font-bold text-xl">+425% This Quarter</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
                Complete{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Shopify SEO Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive <strong>Shopify SEO services</strong> are designed by certified{" "}
                <strong>Shopify SEO experts</strong> to maximize your store's visibility, drive qualified traffic, and
                increase conversions through proven search engine optimization strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: <Search className="h-12 w-12 text-indigo-600" />,
                  title: "Technical Shopify SEO Audit",
                  description:
                    "Comprehensive technical analysis of your Shopify store's SEO foundation, including site speed, mobile optimization, crawlability, and Core Web Vitals assessment.",
                },
                {
                  icon: <Target className="h-12 w-12 text-purple-600" />,
                  title: "Shopify Keyword Research",
                  description:
                    "Advanced keyword research specifically for Shopify stores to identify high-converting search terms and product-focused keywords your customers use.",
                },
                {
                  icon: <ShoppingCart className="h-12 w-12 text-green-600" />,
                  title: "Product Page SEO Optimization",
                  description:
                    "Optimize product titles, descriptions, images, and schema markup to rank higher for product searches and increase organic visibility.",
                },
                {
                  icon: <BarChart3 className="h-12 w-12 text-orange-600" />,
                  title: "Shopify Content Marketing",
                  description:
                    "Create SEO-optimized blog content, buying guides, and category pages that drive organic traffic and support your Shopify SEO strategy.",
                },
                {
                  icon: <Zap className="h-12 w-12 text-red-600" />,
                  title: "Shopify Speed Optimization",
                  description:
                    "Improve your Shopify store's loading speed and Core Web Vitals to enhance user experience and search engine rankings.",
                },
                {
                  icon: <Award className="h-12 w-12 text-blue-600" />,
                  title: "Local Shopify SEO",
                  description:
                    "Optimize your Shopify store for local searches if you have physical locations or serve specific geographic markets.",
                },
              ].map((service, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg group"
                >
                  <CardHeader className="pb-4">
                    <div className="mb-4 p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl w-fit group-hover:from-indigo-50 group-hover:to-purple-50 transition-all duration-300">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="container mx-auto px-4 lg:px-6">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-indigo-100">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                    Why Choose RankRace for{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Shopify SEO
                    </span>
                    ?
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Certified Shopify SEO experts with 6+ years of specialized experience",
                      "Proven track record of 400%+ organic traffic increases for Shopify stores",
                      "White-hat Shopify SEO techniques that comply with Google guidelines",
                      "Transparent monthly reporting with detailed Shopify SEO metrics",
                      "Dedicated Shopify SEO specialist assigned to your account",
                      "ROI-focused approach with measurable Shopify SEO results",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-1 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mt-1">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur-2xl opacity-20 -z-10"></div>
                  <Image
                    src="/RankRace-for-Shopify-SEO.png?height=400&width=500"
                    alt="Shopify SEO experts working on store optimization"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl border border-gray-200"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-3xl blur-3xl opacity-20 -z-10"></div>
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Shopify SEO experts analyzing store performance and search rankings"
                  width={600}
                  height={500}
                  className="rounded-3xl shadow-2xl border border-gray-200"
                />
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      6+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">Years Shopify SEO</div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                    About RankRace - Your Trusted{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Shopify SEO Expert
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    RankRace is a specialized <strong>Shopify SEO</strong> agency focused exclusively on helping
                    e-commerce stores dominate search rankings. Our team of certified{" "}
                    <strong>Shopify SEO experts</strong> has optimized over 500 Shopify stores, generating over $75M in
                    additional revenue.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Founded in 2018, we've developed proprietary <strong>Shopify SEO</strong> methodologies specifically
                    designed for Shopify's unique architecture, helping our clients achieve an average of 400% increase
                    in organic traffic within 6 months.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="p-3 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl w-fit mx-auto mb-3">
                      <Users className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600 font-medium">Shopify Stores</div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                    <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl w-fit mx-auto mb-3">
                      <Award className="h-8 w-8 text-green-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">99%</div>
                    <div className="text-sm text-gray-600 font-medium">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Shopify SEO Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why{" "}
                  <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Shopify SEO
                  </span>{" "}
                  is Critical for Your E-commerce Success
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Understanding the importance of <strong>Shopify SEO</strong> and how it differs from traditional SEO
                  is crucial for e-commerce success. Our <strong>Shopify SEO experts</strong> explain why specialized{" "}
                  <strong>Shopify SEO services</strong> are essential.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">The Shopify SEO Challenge</h3>
                  <div className="space-y-4 text-gray-600 leading-relaxed">
                    <p>
                      <strong>Shopify SEO</strong> presents unique challenges that generic SEO approaches can't address.
                      Unlike WordPress or custom websites, Shopify has specific technical limitations and opportunities
                      that require specialized <strong>Shopify SEO</strong> knowledge.
                    </p>
                    <p>
                      Our <strong>Shopify SEO experts</strong> understand these platform-specific nuances, including URL
                      structure limitations, duplicate content issues, and the importance of optimizing for Shopify's
                      built-in features like collections and product variants.
                    </p>
                    <p>
                      Without proper <strong>Shopify SEO services</strong>, your store may struggle with technical SEO
                      issues, poor site architecture, and missed opportunities for product visibility in search results.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Shopify SEO challenges and solutions diagram"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-lg border border-gray-200"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-indigo-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                  Key Benefits of Professional Shopify SEO Services
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Increased Organic Visibility",
                      description:
                        "Professional Shopify SEO services improve your store's visibility in search results, helping potential customers find your products when they're ready to buy.",
                    },
                    {
                      title: "Higher Quality Traffic",
                      description:
                        "Shopify SEO experts target high-intent keywords that bring qualified visitors who are more likely to convert into paying customers.",
                    },
                    {
                      title: "Better User Experience",
                      description:
                        "Our Shopify SEO services optimize site speed, navigation, and mobile experience, leading to higher conversion rates and customer satisfaction.",
                    },
                    {
                      title: "Long-term Growth",
                      description:
                        "Unlike paid advertising, Shopify SEO provides sustainable, long-term growth that continues to drive traffic and sales over time.",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h4 className="font-bold text-gray-900 mb-3">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost of No SEO Section */}
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                The Hidden Cost of{" "}
                <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  No Shopify SEO
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Research shows that e-commerce stores without proper <strong>Shopify SEO</strong> lose significant
                revenue opportunities. Here's what stores are missing without professional{" "}
                <strong>Shopify SEO services</strong>.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-red-100 mb-12">
                <div className="overflow-x-auto">
                  <table className="w-full rounded-2xl overflow-hidden">
                    <thead className="bg-gradient-to-r from-red-600 to-orange-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Store Revenue Range</th>
                        <th className="px-6 py-4 text-center font-bold">Monthly Lost Revenue</th>
                        <th className="px-6 py-4 text-center font-bold">Annual Lost Revenue</th>
                        <th className="px-6 py-4 text-center font-bold">Missed Organic Traffic</th>
                        <th className="px-6 py-4 text-center font-bold">Extra Ad Spend Needed</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-red-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">$10K - $50K/month</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-red-600">-$8,500</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-red-600">-$102K</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-orange-600">-65%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-purple-600">+$3,200</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-red-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">$50K - $100K/month</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-red-600">-$18,500</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-red-600">-$222K</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-orange-600">-70%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-purple-600">+$7,500</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-red-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">$100K - $500K/month</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-red-600">-$45,000</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-red-600">-$540K</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-orange-600">-75%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-purple-600">+$18K</span>
                        </td>
                      </tr>
                      <tr className="bg-gradient-to-r from-red-100 to-orange-100 hover:from-red-200 hover:to-orange-200 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">$500K+ /month</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-3xl font-bold text-red-600">-$125K+</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-3xl font-bold text-red-600">-$1.5M+</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-3xl font-bold text-orange-600">-80%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-3xl font-bold text-purple-600">+$50K+</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why E-commerce Stores Lose Without SEO</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Invisible to Search Engines",
                        desc: "Without proper Shopify SEO, your products don't appear when customers search for them.",
                      },
                      {
                        title: "Higher Customer Acquisition Costs",
                        desc: "Relying solely on paid ads costs 5-10x more than organic traffic from Shopify SEO.",
                      },
                      {
                        title: "Poor User Experience",
                        desc: "Slow loading times and poor site structure hurt conversions and search rankings.",
                      },
                      {
                        title: "Competitor Advantage",
                        desc: "Competitors with Shopify SEO capture your potential customers and market share.",
                      },
                      {
                        title: "Limited Growth Potential",
                        desc: "Without SEO foundation, scaling becomes expensive and unsustainable.",
                      },
                    ].map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-red-600 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-bold text-gray-900">{point.title}:</span>
                          <span className="text-gray-600 ml-2">{point.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl blur-2xl opacity-20 -z-10"></div>
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="E-commerce store losing revenue without Shopify SEO optimization"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl border border-gray-200"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-3xl p-8 lg:p-12 text-white text-center mt-12">
                <h3 className="text-2xl font-bold mb-4">Don't Let Your Store Fall Behind</h3>
                <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
                  Every month without proper <strong>Shopify SEO</strong> is lost revenue and missed opportunities. Our{" "}
                  <strong>Shopify SEO experts</strong> can help you reclaim this lost potential and start growing
                  sustainably.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Stop Losing Revenue - Get Free Audit
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-black hover:bg-white hover:text-red-600 font-semibold px-8 py-4 rounded-full transition-all duration-300"
                    onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    View Shopify SEO Pricing
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Our Shopify SEO Process Works */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Proven{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Shopify SEO
                </span>{" "}
                Process
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our <strong>Shopify SEO experts</strong> follow a systematic approach to deliver exceptional results.
                Here's how our comprehensive <strong>Shopify SEO services</strong> work to transform your e-commerce
                store's search performance.
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Comprehensive Shopify SEO Audit",
                    description:
                      "Our Shopify SEO experts begin with a thorough analysis of your store's current SEO performance. We examine technical SEO factors, content quality, site architecture, and identify opportunities for improvement specific to Shopify platforms.",
                    details: [
                      "Technical SEO analysis including site speed and mobile optimization",
                      "Content audit of product pages, collections, and blog posts",
                      "Competitor analysis and keyword gap identification",
                      "Shopify-specific SEO issues assessment",
                    ],
                  },
                  {
                    step: "02",
                    title: "Strategic Shopify SEO Planning",
                    description:
                      "Based on our audit findings, we develop a customized Shopify SEO strategy tailored to your business goals. Our Shopify SEO services include keyword research, content planning, and technical optimization roadmap.",
                    details: [
                      "Target keyword research and mapping",
                      "Content strategy development for products and blog",
                      "Technical SEO implementation timeline",
                      "Conversion optimization recommendations",
                    ],
                  },
                  {
                    step: "03",
                    title: "Shopify SEO Implementation",
                    description:
                      "Our team implements the Shopify SEO strategy, optimizing your store's technical foundation, content, and structure. We ensure all changes align with Shopify best practices and search engine guidelines.",
                    details: [
                      "On-page optimization for products and collections",
                      "Technical SEO fixes and improvements",
                      "Schema markup implementation",
                      "Site speed and performance optimization",
                    ],
                  },
                  {
                    step: "04",
                    title: "Ongoing Shopify SEO Optimization",
                    description:
                      "Shopify SEO is an ongoing process. Our experts continuously monitor performance, create new content, build quality backlinks, and adapt strategies based on algorithm updates and market changes.",
                    details: [
                      "Monthly performance monitoring and reporting",
                      "Continuous content creation and optimization",
                      "Link building and authority development",
                      "Algorithm update adaptation and strategy refinement",
                    ],
                  },
                ].map((process, index) => (
                  <div key={index} className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
                          {process.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{process.title}</h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">{process.description}</p>
                      <div className="space-y-3">
                        {process.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl blur-2xl opacity-20 -z-10"></div>
                      <Image
                        src="/placeholder.svg?height=400&width=500"
                        alt={`${process.title} - Shopify SEO process step ${process.step}`}
                        width={500}
                        height={400}
                        className="rounded-2xl shadow-xl border border-gray-200"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Shopify SEO Services
                </span>{" "}
                for Every Industry
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our <strong>Shopify SEO experts</strong> have extensive experience across diverse e-commerce industries.
                We understand the unique challenges and opportunities each sector presents for{" "}
                <strong>Shopify SEO</strong> optimization.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  industry: "Fashion & Apparel",
                  description:
                    "Specialized Shopify SEO for fashion brands, focusing on seasonal trends, product variants, and visual search optimization.",
                  keywords: ["fashion SEO", "apparel optimization", "seasonal trends"],
                },
                {
                  industry: "Electronics & Tech",
                  description:
                    "Technical product SEO for electronics stores, emphasizing specifications, comparisons, and technical content optimization.",
                  keywords: ["tech product SEO", "electronics optimization", "product comparisons"],
                },
                {
                  industry: "Health & Beauty",
                  description:
                    "Shopify SEO for beauty and wellness brands, focusing on ingredient-based searches and lifestyle content marketing.",
                  keywords: ["beauty SEO", "wellness optimization", "ingredient searches"],
                },
                {
                  industry: "Home & Garden",
                  description:
                    "Home improvement and garden store SEO, targeting DIY searches, seasonal products, and how-to content optimization.",
                  keywords: ["home improvement SEO", "garden optimization", "DIY content"],
                },
                {
                  industry: "Sports & Fitness",
                  description:
                    "Athletic and fitness equipment SEO, focusing on performance-based keywords and activity-specific optimization.",
                  keywords: ["fitness SEO", "sports optimization", "equipment searches"],
                },
                {
                  industry: "Food & Beverage",
                  description:
                    "Specialty food and beverage SEO, emphasizing dietary restrictions, ingredients, and local search optimization.",
                  keywords: ["food SEO", "beverage optimization", "dietary searches"],
                },
              ].map((industry, index) => (
                <Card key={index} className="border-2 hover:border-indigo-200 transition-all duration-300 group">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {industry.industry}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-gray-600 leading-relaxed">{industry.description}</CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {industry.keywords.map((keyword, keywordIndex) => (
                        <Badge
                          key={keywordIndex}
                          variant="secondary"
                          className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                        >
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-indigo-100 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Don't See Your Industry? We've Got You Covered!</h3>
              <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto leading-relaxed">
                Our <strong>Shopify SEO experts</strong> have worked with businesses across dozens of industries. No
                matter your niche, we can develop a customized <strong>Shopify SEO</strong> strategy that drives results
                for your specific market.
              </p>
              <Button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Discuss Your Industry Needs
              </Button>
            </div>
          </div>
        </section>

        {/* Common Shopify SEO Problems */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Common{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Shopify SEO
                </span>{" "}
                Problems We Solve
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Many Shopify store owners struggle with platform-specific SEO challenges. Our {" "}
                <strong><a href = "https://rankrace.com/">Shopify SEO experts</a></strong> identify and resolve these common issues that prevent stores from
                ranking well in search results.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900">Technical Shopify SEO Issues</h3>
                  <div className="space-y-6">
                    {[
                      {
                        problem: "Duplicate Content Issues",
                        solution:
                          "Shopify automatically creates multiple URLs for the same product, causing duplicate content. Our Shopify SEO services implement proper canonical tags and URL structure optimization.",
                      },
                      {
                        problem: "Poor Site Speed Performance",
                        solution:
                          "Heavy themes and apps slow down Shopify stores. We optimize images, minimize code, and implement caching strategies to improve Core Web Vitals.",
                      },
                      {
                        problem: "Limited URL Customization",
                        solution:
                          "Shopify's URL structure limitations can hurt SEO. Our experts work within these constraints to create the most SEO-friendly URLs possible.",
                      },
                      {
                        problem: "Missing Schema Markup",
                        solution:
                          "Many Shopify stores lack proper structured data. We implement comprehensive schema markup for products, reviews, and business information.",
                      },
                    ].map((issue, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-red-600 mb-3">❌ {issue.problem}</h4>
                        <p className="text-gray-600 leading-relaxed">
                          <span className="font-semibold text-green-600">✅ Our Solution:</span> {issue.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900">Content & Strategy Problems</h3>
                  <div className="space-y-6">
                    {[
                      {
                        problem: "Poor Product Page Optimization",
                        solution:
                          "Generic product descriptions and missing optimization elements. We create compelling, SEO-optimized product content that ranks and converts.",
                      },
                      {
                        problem: "Lack of Content Marketing Strategy",
                        solution:
                          "No blog or educational content to capture top-funnel traffic. Our Shopify SEO services include comprehensive content strategies.",
                      },
                      {
                        problem: "Inadequate Keyword Research",
                        solution:
                          "Targeting wrong keywords or missing opportunities. We conduct thorough keyword research specific to your products and industry.",
                      },
                      {
                        problem: "Poor Internal Linking Structure",
                        solution:
                          "Weak site architecture that doesn't distribute page authority effectively. We optimize internal linking for better SEO performance.",
                      },
                    ].map((issue, index) => (
                      <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-red-600 mb-3">❌ {issue.problem}</h4>
                        <p className="text-gray-600 leading-relaxed">
                          <span className="font-semibold text-green-600">✅ Our Solution:</span> {issue.solution}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Is Your Shopify Store Suffering from These SEO Problems?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Don't let common <strong>Shopify SEO</strong> issues hold back your store's growth. Our{" "}
                  <strong>Shopify SEO experts</strong> can quickly identify and resolve these problems, often seeing
                  improvements within the first month.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Free SEO Problem Analysis
                  </Button>
                  <Button
                    variant="outline"
                    className="border-2 border-indigo-300 hover:border-indigo-400 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-full"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Schedule Expert Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions About{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Shopify SEO
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get answers to the most common questions about <strong>Shopify SEO services</strong> and how our{" "}
                <strong>Shopify SEO experts</strong> can help your e-commerce store succeed.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What makes Shopify SEO different from regular SEO?",
                  answer:
                    "Shopify SEO requires specialized knowledge of the platform's unique architecture, limitations, and opportunities. Unlike WordPress or custom sites, Shopify has specific URL structures, built-in features, and technical constraints that require expert Shopify SEO services. Our Shopify SEO experts understand these nuances and optimize accordingly, addressing issues like duplicate content from product variants, limited URL customization, and platform-specific schema markup opportunities.",
                },
                {
                  question: "How long does it take to see results from Shopify SEO services?",
                  answer:
                    "Most clients see initial improvements within 30-60 days of implementing our Shopify SEO services, with significant traffic increases typically occurring within 3-6 months. However, Shopify SEO is a long-term strategy, and the best results come from consistent optimization over time. Our Shopify SEO experts focus on sustainable growth that continues to compound, with many clients seeing 300-400% traffic increases within the first year.",
                },
                {
                  question: "Do you work with all Shopify plans and themes?",
                  answer:
                    "Yes, our Shopify SEO experts work with all Shopify plans (Basic, Shopify, Advanced, and Plus) and can optimize any theme. We understand the SEO implications of different themes and can recommend optimizations or theme changes if necessary. Our Shopify SEO services are tailored to work within your current setup while maximizing your store's search potential.",
                },
                {
                  question: "What's included in your Shopify SEO audit?",
                  answer:
                    "Our comprehensive Shopify SEO audit includes technical analysis (site speed, mobile optimization, crawlability), content evaluation (product pages, collections, blog), keyword research and gap analysis, competitor benchmarking, schema markup assessment, and identification of Shopify-specific SEO opportunities. You'll receive a detailed report with prioritized recommendations and a custom Shopify SEO strategy roadmap.",
                },
                {
                  question: "Can you help with Shopify SEO if I'm just starting my store?",
                  answer:
                    "Starting with proper Shopify SEO from day one is actually ideal. Our Shopify SEO experts can help you choose the right theme, set up optimal site structure, create SEO-friendly product pages, and establish a strong foundation for long-term growth. Early Shopify SEO implementation prevents common mistakes and sets your store up for faster ranking success.",
                },
                {
                  question: "How do you measure Shopify SEO success?",
                  answer:
                    "We track comprehensive Shopify SEO metrics including organic traffic growth, keyword rankings, conversion rates, revenue from organic traffic, page load speeds, and search visibility. Our monthly reports show clear ROI from our Shopify SEO services, with detailed analytics on which optimizations are driving the best results for your store.",
                },
                {
                  question: "Do you provide ongoing Shopify SEO services or just one-time optimization?",
                  answer:
                    "We offer both options! Our $450 one-time implementation package provides essential Shopify SEO setup, while our $750/month ongoing service includes continuous optimization, content creation, monitoring, and adaptation to algorithm changes. Most successful stores benefit from ongoing Shopify SEO services as search engines and competition constantly evolve.",
                },
                {
                  question: "Will Shopify SEO work for my specific product category?",
                  answer:
                    "Yes! Our Shopify SEO experts have experience across dozens of product categories and industries. Whether you sell fashion, electronics, home goods, beauty products, or any other category, we understand the unique search behaviors and optimization opportunities for your market. We customize our Shopify SEO services to match your specific industry and target audience.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-colors">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-gray-600 mb-6">Still have questions about our Shopify SEO services?</p>
              <Button
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-full"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Our Shopify SEO Experts
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Transparent{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Shopify SEO
                </span>{" "}
                Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect <strong>Shopify SEO services</strong> package for your store. Our pricing is
                transparent with no hidden fees, designed to deliver maximum ROI for your Shopify SEO investment.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Free Audit */}
              <Card className="border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl relative">
                <CardHeader className="text-center pb-8">
                  <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl w-fit mx-auto mb-4">
                    <Search className="h-12 w-12 text-gray-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Free SEO Audit</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">Perfect for getting started</CardDescription>
                  <div className="mt-6">
                    <div className="text-4xl font-bold text-gray-900">FREE</div>
                    <div className="text-gray-600 mt-2">Comprehensive analysis</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      "Complete Shopify SEO audit",
                      "Technical SEO analysis",
                      "Keyword opportunity report",
                      "Competitor analysis",
                      "Custom SEO strategy roadmap",
                      "30-minute consultation call",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-3 rounded-full transition-all duration-300"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Free Audit
                  </Button>
                </CardContent>
              </Card>

              {/* One-time Implementation */}
              <Card className="border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
                <CardHeader className="text-center pb-8 pt-8">
                  <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl w-fit mx-auto mb-4">
                    <Rocket className="h-12 w-12 text-indigo-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">SEO Implementation</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">One-time setup & optimization</CardDescription>
                  <div className="mt-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      $450
                    </div>
                    <div className="text-gray-600 mt-2">One-time payment</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      "Complete Shopify SEO setup",
                      "Technical SEO implementation",
                      "Product page optimization (25 pages)",
                      "Meta tags & schema markup",
                      "Site speed optimization",
                      "XML sitemap setup",
                      "Google Search Console setup",
                      "2 weeks of support",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Get Started Now
                  </Button>
                </CardContent>
              </Card>

              {/* Monthly Service */}
              <Card className="border-2 border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl relative">
                <CardHeader className="text-center pb-8">
                  <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl w-fit mx-auto mb-4">
                    <Crown className="h-12 w-12 text-purple-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Ongoing SEO</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">Continuous optimization & growth</CardDescription>
                  <div className="mt-6">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      $750
                    </div>
                    <div className="text-gray-600 mt-2">per month</div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      "Everything in Implementation",
                      "Monthly SEO optimization",
                      "Content creation (4 blog posts)",
                      "Link building campaigns",
                      "Monthly performance reports",
                      "Dedicated SEO specialist",
                      "Priority support",
                      "Competitor monitoring",
                      "Conversion rate optimization",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Start Growing
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6 text-lg">All plans include a 30-day money-back guarantee</p>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-indigo-300 hover:border-indigo-400 hover:bg-indigo-50 font-semibold px-8 py-3 rounded-full transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Schedule Free Shopify SEO Consultation
              </Button>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section id="results" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Proven{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Shopify SEO
                </span>{" "}
                Results
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See how our expert <strong>Shopify SEO services</strong> have helped e-commerce stores achieve
                remarkable growth in organic traffic, search rankings, and revenue through our specialized{" "}
                <strong>Shopify SEO</strong> strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  store: "Fashion Forward",
                  industry: "Apparel & Fashion",
                  traffic: "+485%",
                  revenue: "+$220K",
                  timeframe: "6 months",
                },
                {
                  store: "TechHub Electronics",
                  industry: "Consumer Electronics",
                  traffic: "+420%",
                  revenue: "+$350K",
                  timeframe: "8 months",
                },
                {
                  store: "Home Essentials",
                  industry: "Home & Garden",
                  traffic: "+340%",
                  revenue: "+$180K",
                  timeframe: "5 months",
                },
              ].map((result, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                >
                  <CardHeader className="pb-4">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt={`${result.store} Shopify SEO case study showing traffic and revenue growth`}
                        width={300}
                        height={200}
                        className="rounded-xl mb-4 border border-gray-200"
                      />
                      <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-full text-xs font-semibold text-indigo-600 border border-indigo-200">
                        Shopify SEO
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{result.store}</CardTitle>
                    <CardDescription className="text-gray-600">{result.industry}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl">
                        <div className="text-2xl font-bold text-green-600">{result.traffic}</div>
                        <div className="text-xs text-gray-600 font-medium">Traffic Growth</div>
                      </div>
                      <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                        <div className="text-2xl font-bold text-purple-600">{result.revenue}</div>
                        <div className="text-xs text-gray-600 font-medium">Revenue Increase</div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-indigo-50 text-indigo-700">
                        Achieved in {result.timeframe}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Achieve Similar Results?</h3>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
                Join hundreds of successful Shopify store owners who have transformed their businesses with our proven{" "}
                <strong>Shopify SEO services</strong>. Get your free audit today and discover your growth potential.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Start Your Shopify SEO Success Story
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Average Results Table Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Average{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Shopify SEO Results
                </span>{" "}
                Across All Clients
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Real data from our <strong>Shopify SEO services</strong> showing consistent growth patterns across
                different store sizes and industries. These results demonstrate the power of professional{" "}
                <strong>Shopify SEO</strong> optimization.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-indigo-100 mb-12">
                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                    <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Time Period</th>
                        <th className="px-6 py-4 text-center font-bold">Organic Traffic Increase</th>
                        <th className="px-6 py-4 text-center font-bold">Keyword Rankings (Top 10)</th>
                        <th className="px-6 py-4 text-center font-bold">Revenue Growth</th>
                        <th className="px-6 py-4 text-center font-bold">Conversion Rate Improvement</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Month 1-3</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-green-600">+85%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-indigo-600">+45</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-purple-600">+65%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-orange-600">+25%</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Month 4-6</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-green-600">+185%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-indigo-600">+120</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-purple-600">+145%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-orange-600">+45%</span>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">Month 7-12</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-green-600">+385%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-indigo-600">+285</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-purple-600">+320%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-2xl font-bold text-orange-600">+75%</span>
                        </td>
                      </tr>
                      <tr className="bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">Year 1+ Average</td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-3xl font-bold text-green-600">+425%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-3xl font-bold text-indigo-600">+350</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-3xl font-bold text-purple-600">+380%</span>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <span className="text-3xl font-bold text-orange-600">+85%</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                  <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl w-fit mx-auto mb-4">
                    <TrendingUp className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Consistent Growth</h3>
                  <p className="text-gray-600">
                    Our <strong>Shopify SEO services</strong> deliver predictable, month-over-month growth for all
                    client stores.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                  <div className="p-4 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-2xl w-fit mx-auto mb-4">
                    <Target className="h-12 w-12 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Methodology</h3>
                  <p className="text-gray-600">
                    Our <strong>Shopify SEO experts</strong> use data-driven strategies that work across all industries
                    and store sizes.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
                  <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl w-fit mx-auto mb-4">
                    <Award className="h-12 w-12 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Long-term Success</h3>
                  <p className="text-gray-600">
                    Results compound over time, with most stores seeing their best performance after 12+ months of{" "}
                    <strong>Shopify SEO</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Get Your Free{" "}
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Shopify SEO
                </span>{" "}
                Audit Today
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Ready to transform your Shopify store with expert <strong>Shopify SEO services</strong>? Our{" "}
                <strong>Shopify SEO experts</strong> are standing by to analyze your store and create a custom growth
                strategy that delivers real results.
              </p>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <RankRaceLogo className="h-8 w-8" />
                <span className="text-xl font-bold text-white">RankRace</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Leading <strong>Shopify SEO experts</strong> helping e-commerce stores dominate search rankings and
                drive sustainable growth through proven <strong>Shopify SEO services</strong>.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Shopify SEO Services</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#services" className="hover:text-indigo-400 transition-colors">
                    Technical SEO Audit
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-indigo-400 transition-colors">
                    Keyword Research
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-indigo-400 transition-colors">
                    Product Page Optimization
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-indigo-400 transition-colors">
                    Content Marketing
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-indigo-400 transition-colors">
                    Speed Optimization
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#about"
                    className="hover:text-indigo-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    About RankRace
                  </a>
                </li>
                <li>
                  <a
                    href="#results"
                    className="hover:text-indigo-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-indigo-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-indigo-400 transition-colors"
                    onClick={(e) => {
                      e.preventDefault()
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6">Contact Info</h3>
              <ul className="space-y-3">
                <li className="text-gray-400">
                  <strong className="text-white">Email:</strong>
                  <br />
                  rankraceseo@gmail.com
                </li>
                <li className="text-gray-400">
                  <strong className="text-white">Response Time:</strong>
                  <br />
                  Within 24 hours
                </li>
                <li className="text-gray-400">
                  <strong className="text-white">Consultation:</strong>
                  <br />
                  Free Shopify SEO audit
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2024 RankRace. All rights reserved. Expert <strong><a href = "https://rankrace.com/">Shopify SEO services</a></strong> and{" "}
                <strong>Shopify SEO</strong> solutions.
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="/privacy-policy" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="/terms-of-service" className="hover:text-indigo-400 transition-colors">
                  Terms of Service
                </a>
                <a href="/cookie-policy" className="hover:text-indigo-400 transition-colors">
                  Cookie Policy
                </a>
                <a href="/refund-policy" className="hover:text-indigo-400 transition-colors">
                  Refund Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
