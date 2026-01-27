'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, Heart, Settings } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="hidden sm:inline font-bold text-xl text-foreground">Ni Plug</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/shops" className="text-foreground hover:text-primary transition-colors">
              Discover
            </Link>
            <Link href="/requests" className="text-foreground hover:text-primary transition-colors">
              Request
            </Link>
            <Link href="/admin" className="text-foreground hover:text-primary transition-colors">
              Admin
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Search size={20} className="text-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Heart size={20} className="text-foreground" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link href="/shops" className="block text-foreground hover:text-primary py-2">
              Discover Shops
            </Link>
            <Link href="/requests" className="block text-foreground hover:text-primary py-2">
              Request Product
            </Link>
            <Link href="/admin" className="block text-foreground hover:text-primary py-2">
              Admin Dashboard
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
