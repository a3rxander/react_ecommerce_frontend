import { Search, ShoppingCart, User, Menu, Heart, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartItemCount = 3 // This would come from your cart state

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm text-center">
        Free shipping on orders over $50 | 30-day return policy
      </div>
      
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">ShopHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="/products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="/categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="/deals" className="text-foreground hover:text-primary transition-colors">
              Deals
            </a>
            <a href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Search Bar */}
          <div className="hidden sm:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            {/* Search button for mobile */}
            <Button variant="ghost" size="icon" className="sm:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile search bar */}
        <div className="sm:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-10 pr-4"
            />
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-foreground hover:text-primary transition-colors py-2">
                Home
              </a>
              <a href="/products" className="text-foreground hover:text-primary transition-colors py-2">
                Products
              </a>
              <a href="/categories" className="text-foreground hover:text-primary transition-colors py-2">
                Categories
              </a>
              <a href="/deals" className="text-foreground hover:text-primary transition-colors py-2">
                Deals
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors py-2">
                About
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}