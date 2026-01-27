export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground mt-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-foreground mb-4">About Ni Plug</h3>
            <p className="text-sm leading-relaxed">
              Connecting African communities with authentic local products and trusted shops.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-foreground transition">Browse Shops</a></li>
              <li><a href="#" className="hover:text-foreground transition">Request Products</a></li>
              <li><a href="#" className="hover:text-foreground transition">Seller Dashboard</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-foreground transition">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-foreground transition">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-foreground transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm">
          <p>&copy; 2025 Ni Plug. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
