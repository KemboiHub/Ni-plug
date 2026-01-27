import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArrowRight, Star, MapPin, Shield, Zap } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Local Discovery',
      description: 'Find authentic shops and products from African communities near you'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Trusted Sellers',
      description: 'Verified shops with ratings and reviews from the community'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Requests',
      description: 'Request products and connect directly with shop owners'
    }
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-pretty">
                Discover Local Shops & Products
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Connect with authentic sellers and local businesses. Request products, explore collections, and support your community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/shops"
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Browse Shops
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/requests"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  Request a Product
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-foreground mb-16 text-balance">
              Why Choose Ni Plug
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Shops Preview */}
        <section className="py-20 px-4 bg-muted">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold text-foreground text-balance">
                Featured Shops
              </h2>
              <Link href="/shops" className="text-primary hover:underline font-semibold">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((shop) => (
                <Link
                  key={shop}
                  href={`/shops/${shop}`}
                  className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group"
                >
                  <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/30">Shop</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      Local Shop {shop}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin size={16} />
                      <span>Nairobi, Kenya</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < 4 ? 'fill-primary text-primary' : 'text-border'}
                        />
                      ))}
                      <span className="text-xs text-muted-foreground ml-2">(48 reviews)</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto bg-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-4xl font-bold mb-4 text-balance">Ready to Explore?</h2>
            <p className="text-lg mb-8 opacity-90">
              Join thousands of users discovering authentic products from local shops.
            </p>
            <Link
              href="/shops"
              className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Start Discovering
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
