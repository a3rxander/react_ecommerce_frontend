import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      {/* Trust badges */}
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">Free Shipping</h4>
                <p className="text-sm text-muted-foreground">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-sm text-muted-foreground">100% secure checkout</p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CreditCard className="h-8 w-8 text-primary" />
              <div>
                <h4 className="font-semibold">Easy Returns</h4>
                <p className="text-sm text-muted-foreground">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ShopHub</h3>
            <p className="text-muted-foreground text-sm">
              Your one-stop destination for quality products at unbeatable prices. 
              We're committed to delivering excellence in every purchase.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="/shipping" className="text-muted-foreground hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="/returns" className="text-muted-foreground hover:text-foreground transition-colors">Returns</a></li>
              <li><a href="/size-guide" className="text-muted-foreground hover:text-foreground transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/electronics" className="text-muted-foreground hover:text-foreground transition-colors">Electronics</a></li>
              <li><a href="/clothing" className="text-muted-foreground hover:text-foreground transition-colors">Clothing</a></li>
              <li><a href="/home-garden" className="text-muted-foreground hover:text-foreground transition-colors">Home & Garden</a></li>
              <li><a href="/sports" className="text-muted-foreground hover:text-foreground transition-colors">Sports</a></li>
              <li><a href="/books" className="text-muted-foreground hover:text-foreground transition-colors">Books</a></li>
              <li><a href="/toys" className="text-muted-foreground hover:text-foreground transition-colors">Toys & Games</a></li>
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to our newsletter for exclusive deals and updates.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" type="email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@shophub.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Commerce St, City, State 12345</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t bg-muted/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 ShopHub. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">We accept:</span>
              <div className="flex space-x-1">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}