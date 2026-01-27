'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Star, MapPin, Search, Filter } from 'lucide-react'
import { useState } from 'react'

// Mock shop data
const mockShops = [
  {
    id: 1,
    name: 'Nairobi Fashion Hub',
    location: 'Nairobi, Kenya',
    category: 'Clothing',
    rating: 4.8,
    reviews: 156,
    verified: true
  },
  {
    id: 2,
    name: 'Spice Market Express',
    location: 'Accra, Ghana',
    category: 'Food & Spices',
    rating: 4.6,
    reviews: 89,
    verified: true
  },
  {
    id: 3,
    name: 'Lagos Tech Supplies',
    location: 'Lagos, Nigeria',
    category: 'Electronics',
    rating: 4.5,
    reviews: 203,
    verified: true
  },
  {
    id: 4,
    name: 'Johannesburg Crafts',
    location: 'Johannesburg, South Africa',
    category: 'Handmade',
    rating: 4.7,
    reviews: 112,
    verified: true
  },
  {
    id: 5,
    name: 'Kampala Beauty & Care',
    location: 'Kampala, Uganda',
    category: 'Beauty',
    rating: 4.4,
    reviews: 67,
    verified: false
  },
  {
    id: 6,
    name: 'Dar es Salaam Books',
    location: 'Dar es Salaam, Tanzania',
    category: 'Books',
    rating: 4.9,
    reviews: 134,
    verified: true
  }
]

export default function ShopsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Clothing', 'Food & Spices', 'Electronics', 'Handmade', 'Beauty', 'Books']

  const filteredShops = mockShops.filter(shop => {
    const matchesSearch = shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shop.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || shop.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="bg-primary/5 py-12 px-4 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-2 text-balance">Discover Shops</h1>
            <p className="text-muted-foreground mb-8">Browse {mockShops.length} verified shops from across Africa</p>

            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search shops by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </section>

        {/* Filters and Results */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Filter size={18} /> Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-foreground hover:bg-border'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShops.map(shop => (
                <Link
                  key={shop.id}
                  href={`/shops/${shop.id}`}
                  className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-colors">
                    <div className="text-3xl font-bold text-primary/30">{shop.name.charAt(0)}</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-lg text-foreground">{shop.name}</h3>
                        <p className="text-sm text-muted-foreground">{shop.category}</p>
                      </div>
                      {shop.verified && (
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-bold">
                          ✓
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin size={16} />
                      <span>{shop.location}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(shop.rating) ? 'fill-primary text-primary' : 'text-border'}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-2">
                        {shop.rating} ({shop.reviews})
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredShops.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No shops found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
