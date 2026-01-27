import React, { useState } from 'react';
import { Search, MapPin, Clock, Phone, Star, ChevronRight, Grid, Home, Store, ShoppingBag } from 'lucide-react';

// Hardcoded test data
const CATEGORIES = [
  { id: 1, name: 'Groceries', icon: '🛒' },
  { id: 2, name: 'Electronics', icon: '📱' },
  { id: 3, name: 'Clothing', icon: '👕' },
  { id: 4, name: 'Pharmacy', icon: '💊' },
  { id: 5, name: 'Hardware', icon: '🔧' },
  { id: 6, name: 'Cosmetics', icon: '💄' },
];

const LOCATIONS = [
  { town: 'Nairobi', estates: ['Westlands', 'Kilimani', 'Eastleigh', 'South B'] },
  { town: 'Mombasa', estates: ['Nyali', 'Bamburi', 'Likoni'] },
  { town: 'Kisumu', estates: ['Milimani', 'Mamboleo'] },
];

const SHOPS = [
  {
    id: 1,
    name: 'Fresh Harvest Grocers',
    category: 'Groceries',
    town: 'Nairobi',
    estate: 'Westlands',
    location: 'Ring Road, next to Sarit Center',
    phone: '+254712345678',
    whatsapp: '+254712345678',
    hours: '7am - 9pm Daily',
    priceRange: 'KSh 50 - 5,000',
    rating: 4.5,
    reviewCount: 127,
    description: 'Fresh fruits, vegetables, and daily essentials at affordable prices.',
    photos: ['https://images.unsplash.com/photo-1534723452862-4c874018d66d?w=400', 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400'],
    verified: true,
  },
  {
    id: 2,
    name: 'TechHub Electronics',
    category: 'Electronics',
    town: 'Nairobi',
    estate: 'Eastleigh',
    location: '1st Avenue, opposite General Waruinge Street',
    phone: '+254723456789',
    whatsapp: '+254723456789',
    hours: '8am - 8pm Mon-Sat',
    priceRange: 'KSh 500 - 50,000',
    rating: 4.2,
    reviewCount: 89,
    description: 'Phones, laptops, accessories. New and refurbished electronics.',
    photos: ['https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400'],
    verified: true,
  },
  {
    id: 3,
    name: 'Style Point Boutique',
    category: 'Clothing',
    town: 'Nairobi',
    estate: 'Kilimani',
    location: 'Yaya Center, Ground Floor Shop 12',
    phone: '+254734567890',
    whatsapp: '+254734567890',
    hours: '9am - 7pm Daily',
    priceRange: 'KSh 200 - 8,000',
    rating: 4.7,
    reviewCount: 203,
    description: 'Trendy clothes for men, women, and kids. Quality at good prices.',
    photos: ['https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400'],
    verified: true,
  },
  {
    id: 4,
    name: 'CareFirst Pharmacy',
    category: 'Pharmacy',
    town: 'Nairobi',
    estate: 'South B',
    location: 'Mombasa Road, South B Shopping Center',
    phone: '+254745678901',
    whatsapp: '+254745678901',
    hours: '24/7',
    priceRange: 'KSh 50 - 3,000',
    rating: 4.8,
    reviewCount: 156,
    description: 'Prescription drugs, OTC medicine, health products. Always open.',
    photos: ['https://images.unsplash.com/photo-1576602976047-174e57a47881?w=400'],
    verified: true,
  },
  {
    id: 5,
    name: 'BuildRight Hardware',
    category: 'Hardware',
    town: 'Mombasa',
    estate: 'Nyali',
    location: 'Links Road, near Nyali Bridge',
    phone: '+254756789012',
    whatsapp: '+254756789012',
    hours: '7am - 6pm Mon-Sat',
    priceRange: 'KSh 100 - 20,000',
    rating: 4.3,
    reviewCount: 67,
    description: 'Construction materials, tools, paint, and hardware supplies.',
    photos: ['https://images.unsplash.com/photo-1504148455328-c376907d081c?w=400'],
    verified: true,
  },
];

const REVIEWS = {
  1: [
    { user: 'Jane K.', rating: 5, comment: 'Very fresh produce. Good prices.', date: '2 days ago' },
    { user: 'Peter M.', rating: 4, comment: 'Nice shop. Sometimes crowded.', date: '1 week ago' },
  ],
  2: [
    { user: 'David O.', rating: 4, comment: 'Got a good phone deal here.', date: '3 days ago' },
    { user: 'Mary N.', rating: 5, comment: 'Helpful staff. Fair prices.', date: '1 week ago' },
  ],
  3: [
    { user: 'Grace W.', rating: 5, comment: 'Love their collection!', date: '1 day ago' },
  ],
  4: [
    { user: 'John K.', rating: 5, comment: 'Quick service. Open late.', date: '4 days ago' },
  ],
  5: [
    { user: 'Ahmed S.', rating: 4, comment: 'Good quality materials.', date: '2 weeks ago' },
  ],
};

export default function NiPlug() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedShop, setSelectedShop] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTown, setSelectedTown] = useState('');
  const [selectedEstate, setSelectedEstate] = useState('');

  // Filter shops based on search and filters
  const filteredShops = SHOPS.filter(shop => {
    const matchesSearch = searchQuery === '' || 
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || shop.category === selectedCategory;
    const matchesTown = selectedTown === '' || shop.town === selectedTown;
    const matchesEstate = selectedEstate === '' || shop.estate === selectedEstate;
    
    return matchesSearch && matchesCategory && matchesTown && matchesEstate;
  });

  const viewShop = (shop) => {
    setSelectedShop(shop);
    setCurrentPage('shop');
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map(i => (
          <Star
            key={i}
            className={`w-4 h-4 ${i <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  // HOME PAGE
  if (currentPage === 'home') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-emerald-600 text-white p-4">
          <h1 className="text-2xl font-bold">Ni Plug</h1>
          <p className="text-sm text-emerald-100">Find trusted shops near you</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-4 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search shops or products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
          {searchQuery && (
            <button
              onClick={() => setCurrentPage('listings')}
              className="mt-2 w-full bg-emerald-600 text-white py-2 rounded-lg font-medium"
            >
              Search
            </button>
          )}
        </div>

        {/* Categories */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <div className="grid grid-cols-3 gap-3">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.name);
                  setCurrentPage('listings');
                }}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-1">{cat.icon}</div>
                <div className="text-sm font-medium">{cat.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Popular Locations */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-3">Popular Locations</h2>
          {LOCATIONS.map(loc => (
            <div key={loc.town} className="bg-white p-4 rounded-lg shadow-sm mb-3">
              <div className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-600" />
                {loc.town}
              </div>
              <div className="flex flex-wrap gap-2">
                {loc.estates.map(estate => (
                  <button
                    key={estate}
                    onClick={() => {
                      setSelectedTown(loc.town);
                      setSelectedEstate(estate);
                      setCurrentPage('listings');
                    }}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {estate}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Browse */}
        <div className="p-4 pb-6">
          <button
            onClick={() => setCurrentPage('listings')}
            className="w-full bg-white border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
          >
            <Grid className="w-5 h-5" />
            Browse All Shops
          </button>
        </div>
      </div>
    );
  }

  // SHOP LISTINGS PAGE
  if (currentPage === 'listings') {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-emerald-600 text-white p-4">
          <button
            onClick={() => {
              setCurrentPage('home');
              setSearchQuery('');
              setSelectedCategory('');
              setSelectedTown('');
              setSelectedEstate('');
            }}
            className="text-sm mb-2 flex items-center gap-1"
          >
            ← Back to Home
          </button>
          <h1 className="text-xl font-bold">
            {searchQuery ? `Results for "${searchQuery}"` : 
             selectedCategory ? selectedCategory :
             selectedEstate ? `${selectedEstate}, ${selectedTown}` : 'All Shops'}
          </h1>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 border-b">
          <div className="grid grid-cols-2 gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">All Categories</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.name}>{cat.name}</option>
              ))}
            </select>
            <select
              value={selectedTown}
              onChange={(e) => {
                setSelectedTown(e.target.value);
                setSelectedEstate('');
              }}
              className="px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">All Towns</option>
              {LOCATIONS.map(loc => (
                <option key={loc.town} value={loc.town}>{loc.town}</option>
              ))}
            </select>
          </div>
          {selectedTown && (
            <select
              value={selectedEstate}
              onChange={(e) => setSelectedEstate(e.target.value)}
              className="mt-2 w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">All Estates in {selectedTown}</option>
              {LOCATIONS.find(l => l.town === selectedTown)?.estates.map(estate => (
                <option key={estate} value={estate}>{estate}</option>
              ))}
            </select>
          )}
        </div>

        {/* Shop List */}
        <div className="p-4 space-y-3">
          {filteredShops.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No shops found. Try different filters.
            </div>
          ) : (
            filteredShops.map(shop => (
              <div
                key={shop.id}
                onClick={() => viewShop(shop)}
                className="bg-white rounded-lg shadow-sm p-4 cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="flex gap-3">
                  <img
                    src={shop.photos[0]}
                    alt={shop.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-gray-900 truncate">{shop.name}</h3>
                      {shop.verified && (
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full whitespace-nowrap">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-0.5">{shop.category}</p>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span className="truncate">{shop.estate}, {shop.town}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      {renderStars(shop.rating)}
                      <span className="text-xs text-gray-500">({shop.reviewCount})</span>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="text-gray-600">{shop.priceRange}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    );
  }

  // SHOP PROFILE PAGE
  if (currentPage === 'shop' && selectedShop) {
    const shopReviews = REVIEWS[selectedShop.id] || [];
    
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-emerald-600 text-white p-4">
          <button
            onClick={() => setCurrentPage('listings')}
            className="text-sm mb-2"
          >
            ← Back to Listings
          </button>
        </div>

        {/* Photos */}
        <div className="bg-white">
          <div className="overflow-x-auto flex gap-2 p-2">
            {selectedShop.photos.map((photo, idx) => (
              <img
                key={idx}
                src={photo}
                alt={`${selectedShop.name} ${idx + 1}`}
                className="h-48 w-72 object-cover rounded-lg flex-shrink-0"
              />
            ))}
          </div>
        </div>

        {/* Shop Info */}
        <div className="bg-white p-4 mt-2">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h1 className="text-xl font-bold text-gray-900">{selectedShop.name}</h1>
            {selectedShop.verified && (
              <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full">
                Verified
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-3">{selectedShop.description}</p>
          
          <div className="space-y-2.5 text-sm">
            <div className="flex items-start gap-2">
              <Store className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{selectedShop.category}</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium text-gray-900">{selectedShop.estate}, {selectedShop.town}</div>
                <div className="text-gray-600">{selectedShop.location}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <span className="text-gray-700">{selectedShop.hours}</span>
            </div>
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-gray-400 flex-shrink-0" />
              <span className="text-gray-700">Price range: {selectedShop.priceRange}</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="p-4">
          <a
            href={`https://wa.me/${selectedShop.whatsapp.replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-600 text-white py-3.5 rounded-lg font-medium text-center flex items-center justify-center gap-2"
          >
            <Phone className="w-5 h-5" />
            Contact on WhatsApp
          </a>
        </div>

        {/* Rating Summary */}
        <div className="bg-white p-4 mt-2">
          <h2 className="font-semibold text-lg mb-3">Reviews</h2>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{selectedShop.rating}</div>
              <div className="text-sm text-gray-600">{selectedShop.reviewCount} reviews</div>
            </div>
            <div className="flex-1">
              {renderStars(selectedShop.rating)}
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-4 mt-4">
            {shopReviews.map((review, idx) => (
              <div key={idx} className="border-t pt-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium text-gray-900">{review.user}</div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700 text-sm">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="h-6"></div>
      </div>
    );
  }

  return null;
}