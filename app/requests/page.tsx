'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function ProductRequestPage() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    category: '',
    budget: '',
    email: '',
    phone: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const categories = [
    'Clothing & Fashion',
    'Food & Spices',
    'Electronics',
    'Handmade Crafts',
    'Beauty & Personal Care',
    'Home & Garden',
    'Books & Media',
    'Other'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-primary/5 py-12 px-4 border-b border-border">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Request a Product</h1>
            <p className="text-lg text-muted-foreground">
              Can't find what you're looking for? Request it from our verified sellers. We'll connect you with shops that match your needs.
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto">
            {submitted ? (
              <div className="bg-primary/10 border border-primary rounded-xl p-8 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✓</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">Request Submitted!</h2>
                <p className="text-muted-foreground mb-6">
                  Thank you for your request. Sellers will review it and contact you shortly with available options.
                </p>
                <button
                  onClick={() => window.location.href = '/shops'}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Browse Shops
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    What product are you looking for? *
                  </label>
                  <input
                    type="text"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    placeholder="e.g., Ankara fabric, Ethiopian coffee beans"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a category</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Description
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Provide details about what you're looking for, specifications, colors, sizes, etc."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Budget Range
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    placeholder="e.g., 1,000 - 5,000 KES"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+254 712 345 678"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 px-4 bg-muted">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-6">How It Works</h2>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Submit Your Request', desc: 'Tell us what you\'re looking for with as much detail as possible' },
                { step: '2', title: 'We Match You', desc: 'Our system matches your request with relevant shops in our network' },
                { step: '3', title: 'Connect & Negotiate', desc: 'Sellers contact you directly to discuss options and pricing' },
                { step: '4', title: 'Complete Your Order', desc: 'Finalize your purchase directly with the seller' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
