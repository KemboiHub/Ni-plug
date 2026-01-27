'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { useState } from 'react'
import { Check, X, Eye, AlertCircle } from 'lucide-react'

// Mock pending shops
const mockPendingShops = [
  {
    id: 1,
    name: 'Kampala Beauty & Care',
    owner: 'Sarah Nakimuli',
    email: 'sarah@kampalabeauty.ug',
    phone: '+256 700 123 456',
    category: 'Beauty & Personal Care',
    location: 'Kampala, Uganda',
    submittedDate: '2025-01-15',
    documents: 'Verified',
    status: 'pending'
  },
  {
    id: 2,
    name: 'Dakar Digital Solutions',
    owner: 'Ibrahim Diop',
    email: 'ibrahim@dakartec.sn',
    phone: '+221 77 123 4567',
    category: 'Electronics',
    location: 'Dakar, Senegal',
    submittedDate: '2025-01-14',
    documents: 'Pending Review',
    status: 'pending'
  },
  {
    id: 3,
    name: 'Luanda Art Collective',
    owner: 'Maria Silva',
    email: 'maria@luandaart.ao',
    phone: '+244 923 123 456',
    category: 'Handmade & Art',
    location: 'Luanda, Angola',
    submittedDate: '2025-01-13',
    documents: 'Verified',
    status: 'pending'
  }
]

const mockApprovedShops = [
  {
    id: 101,
    name: 'Nairobi Fashion Hub',
    owner: 'Grace Mwangi',
    email: 'grace@nairobi-fashion.ke',
    category: 'Clothing & Accessories',
    location: 'Nairobi, Kenya',
    approvedDate: '2024-12-20',
    status: 'approved'
  },
  {
    id: 102,
    name: 'Spice Market Express',
    owner: 'Ama Osei',
    email: 'ama@spicemarket.gh',
    category: 'Food & Spices',
    location: 'Accra, Ghana',
    approvedDate: '2024-12-15',
    status: 'approved'
  }
]

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'pending' | 'approved'>('pending')
  const [selectedShop, setSelectedShop] = useState<any>(null)

  const handleApprove = (shopId: number) => {
    console.log('Approving shop:', shopId)
    alert(`Shop #${shopId} has been approved!`)
  }

  const handleReject = (shopId: number) => {
    console.log('Rejecting shop:', shopId)
    alert(`Shop #${shopId} has been rejected.`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Admin Header */}
        <section className="bg-accent/5 py-12 px-4 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Review and manage shop applications</p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 px-4 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Pending Reviews</p>
                <p className="text-3xl font-bold text-foreground">{mockPendingShops.length}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Approved Shops</p>
                <p className="text-3xl font-bold text-primary">{mockApprovedShops.length}</p>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <p className="text-sm text-muted-foreground mb-2">Total Shops</p>
                <p className="text-3xl font-bold text-foreground">{mockPendingShops.length + mockApprovedShops.length}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-4 mb-8 border-b border-border">
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
                  activeTab === 'pending'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Pending Review ({mockPendingShops.length})
              </button>
              <button
                onClick={() => setActiveTab('approved')}
                className={`px-4 py-3 font-semibold border-b-2 transition-colors ${
                  activeTab === 'approved'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Approved ({mockApprovedShops.length})
              </button>
            </div>

            {/* Pending Shops */}
            {activeTab === 'pending' && (
              <div className="space-y-4">
                {mockPendingShops.map(shop => (
                  <div key={shop.id} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{shop.name}</h3>
                        <p className="text-sm text-muted-foreground">{shop.category}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleApprove(shop.id)}
                          className="p-3 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                          title="Approve"
                        >
                          <Check size={20} />
                        </button>
                        <button
                          onClick={() => handleReject(shop.id)}
                          className="p-3 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-colors"
                          title="Reject"
                        >
                          <X size={20} />
                        </button>
                        <button
                          onClick={() => setSelectedShop(shop)}
                          className="p-3 rounded-lg bg-muted text-foreground hover:bg-border transition-colors"
                          title="View Details"
                        >
                          <Eye size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <p className="text-muted-foreground">Owner</p>
                        <p className="font-medium text-foreground">{shop.owner}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Location</p>
                        <p className="font-medium text-foreground">{shop.location}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Email</p>
                        <p className="font-medium text-foreground">{shop.email}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Submitted</p>
                        <p className="font-medium text-foreground">{shop.submittedDate}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <AlertCircle size={16} className={shop.documents === 'Verified' ? 'text-primary' : 'text-accent'} />
                      <span className={shop.documents === 'Verified' ? 'text-primary' : 'text-accent'}>
                        Documents: {shop.documents}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Approved Shops */}
            {activeTab === 'approved' && (
              <div className="space-y-4">
                {mockApprovedShops.map(shop => (
                  <div key={shop.id} className="bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-shadow opacity-75">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{shop.name}</h3>
                        <p className="text-sm text-muted-foreground">{shop.category}</p>
                      </div>
                      <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        ✓ Approved
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mt-4">
                      <div>
                        <p className="text-muted-foreground">Owner</p>
                        <p className="font-medium text-foreground">{shop.owner}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Approved Date</p>
                        <p className="font-medium text-foreground">{shop.approvedDate}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Shop Details Modal */}
        {selectedShop && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-card rounded-xl max-w-2xl w-full border border-border p-8">
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">{selectedShop.name}</h2>
                <button
                  onClick={() => setSelectedShop(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Owner Name</p>
                    <p className="font-medium text-foreground">{selectedShop.owner}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Category</p>
                    <p className="font-medium text-foreground">{selectedShop.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium text-foreground">{selectedShop.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Phone</p>
                    <p className="font-medium text-foreground">{selectedShop.phone}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    handleApprove(selectedShop.id)
                    setSelectedShop(null)
                  }}
                  className="flex-1 bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <Check size={20} /> Approve Shop
                </button>
                <button
                  onClick={() => {
                    handleReject(selectedShop.id)
                    setSelectedShop(null)
                  }}
                  className="flex-1 border-2 border-destructive text-destructive py-3 rounded-lg font-semibold hover:bg-destructive hover:text-destructive-foreground transition-colors flex items-center justify-center gap-2"
                >
                  <X size={20} /> Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
