'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Star, MapPin, Phone, Globe, Heart, Share2 } from 'lucide-react'
import { useState } from 'react'

// Mock shop details
const mockShopDetails = {
  1: {
    name: 'Nairobi Fashion Hub',
    location: 'Nairobi, Kenya',
    category: 'Clothing & Accessories',
    rating: 4.8,
    reviews: 156,
    verified: true,
    description: 'Premium selection of African fashion, clothing, and accessories. Quality assured and authentic designs.',
    phone: '+254 712 345 678',
    website: 'www.nairobi-fashion.ke',
    hours: 'Mon-Sat: 9am-6pm, Sun: 10am-4pm',
    products: [
      { id: 1, name: 'Kente Cloth Dress', price: '5,500 KES', category: 'Dresses' },
      { id: 2, name: 'Ankara Fabric Set', price: '3,200 KES', category: 'Fabrics' },
      { id: 3, name: 'Beaded Necklace', price: '1,800 KES', category: 'Accessories' },
      { id: 4, name: 'Wax Print Skirt', price: '2,400 KES', category: 'Skirts' }
    ]
  }
}

export default function ShopDetailPage({ params }: { params: { id: string } }) {
  const shop = mockShopDetails[params.id as keyof typeof mockShopDetails] || mockShopDetails[1]
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/20 to-accent/20 py-12 px-4 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h1 className="text-4xl font-bold text-foreground mb-2">{shop.name}</h1>
                <p className="text-lg text-muted-foreground mb-4">{shop.category}</p>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={i < Math.floor(shop.rating) ? 'fill-primary text-primary' : 'text-border'}
                      />
                    ))}
                    <span className="font-semibold text-foreground">{shop.rating}</span>
                    <span className="text-muted-foreground">({shop.reviews} reviews)</span>
                  </div>
                  {shop.verified && (
                    <div className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium flex items-center gap-2">
                      ✓ Verified Shop
                    </div>
                  )}
                </div>

                <p className="text-foreground leading-relaxed mb-6">{shop.description}</p>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                      isWishlisted
                        ? 'bg-primary text-primary-foreground'
                        : 'border-2 border-primary text-primary hover:bg-primary/5'
                    }`}
                  >
                    <Heart size={20} className={isWishlisted ? 'fill-current' : ''} />
                    {isWishlisted ? 'Saved' : 'Save Shop'}
                  </button>
                  <button className="px-6 py-3 rounded-lg font-semibold border-2 border-border text-foreground hover:bg-muted transition-colors flex items-center gap-2">
                    <Share2 size={20} />
                    Share
                  </button>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-card rounded-xl p-6 border border-border h-fit">
                <h3 className="font-bold text-lg text-foreground mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">{shop.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">{shop.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Website</p>
                      <p className="font-medium text-foreground text-sm">{shop.website}</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-2">Hours</p>
                    <p className="text-sm font-medium text-foreground">{shop.hours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shop.products.map(product => (
                <div key={product.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-lg font-semibold text-primary/40">{product.category}</div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-foreground mb-2">{product.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">{product.category}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-lg text-primary">{product.price}</p>
                      <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90 transition-opacity">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-12 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8">Customer Reviews</h2>
            <div className="space-y-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-semibold text-foreground">Customer {i}</p>
                      <div className="flex items-center gap-2 mt-1">
                        {[...Array(5)].map((_, j) => (
                          <Star
                            key={j}
                            size={14}
                            className={j < 4 + i % 2 ? 'fill-primary text-primary' : 'text-border'}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">2 weeks ago</span>
                  </div>
                  <p className="text-foreground leading-relaxed">
                    Excellent quality and fast service! The staff is very helpful and knowledgeable about their products. Highly recommend this shop to anyone looking for authentic African fashion.
                  </p>
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
