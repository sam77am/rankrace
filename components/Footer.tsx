"use client"

import { RankRaceLogo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 lg:px-6">
        {/* upper grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* brand blurb */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <RankRaceLogo className="h-8 w-8" />
              <span className="text-xl font-bold text-white">RankRace</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Leading <strong>Shopify SEO experts</strong> helping e-commerce stores dominate search rankings.
            </p>
          </div>

          {/* quick links – reuse the same markup blocks you had */}
          <div>
            <h3 className="text-white font-bold mb-6">Shopify SEO Services</h3>
            <ul className="space-y-3">
              {[
                ["#services","Technical SEO Audit"],
                ["#services","Keyword Research"],
                ["#services","Product Page Optimization"],
                ["#services","Content Marketing"],
                ["#services","Speed Optimization"],
                ["/blog",    "Shopify SEO Blogs"],
              ].map(([href,label]) => (
                <li key={href}>
                  <a href={href} className="hover:text-indigo-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                ["#about","About RankRace"],
                ["#results","Case Studies"],
                ["#pricing","Pricing"],
                ["#contact","Contact"],
              ].map(([href,label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-indigo-400 transition-colors"
                    onClick={e=>{
                      if(href.startsWith("#")){
                        e.preventDefault()
                        document.getElementById(href.slice(1))?.scrollIntoView({behavior:"smooth"})
                      }
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Info</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <strong className="text-white">Email:</strong><br />
                rankraceseo@gmail.com
              </li>
              <li>
                <strong className="text-white">Response Time:</strong><br />
                Within 24&nbsp;hours
              </li>
              <li>
                <strong className="text-white">Consultation:</strong><br />
                Free Shopify SEO audit
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 RankRace. All rights reserved.
              Expert&nbsp;
              <a href="https://rankrace.com/" className="hover:text-indigo-400">
                Shopify SEO&nbsp;services
              </a>.
            </p>
            <div className="flex space-x-6 text-sm">
              {[
                ["/privacy-policy","Privacy Policy"],
                ["/terms-of-service","Terms of Service"],
                ["/cookie-policy","Cookie Policy"],
                ["/refund-policy","Refund Policy"],
              ].map(([href,label])=>(
                <a key={href} href={href} className="hover:text-indigo-400 transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
