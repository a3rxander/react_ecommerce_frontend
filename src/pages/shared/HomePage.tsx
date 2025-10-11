import { ShoppingBag, Star, Truck, Shield, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 124,
      image: "https://via.placeholder.com/300x300?text=Headphones",
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 299.99,
      originalPrice: 349.99,
      rating: 4.6,
      reviews: 89,
      image: "https://via.placeholder.com/300x300?text=Smart+Watch",
      badge: "New"
    },
    {
      id: 3,
      name: "Ergonomic Office Chair",
      price: 449.99,
      originalPrice: 599.99,
      rating: 4.9,
      reviews: 203,
      image: "https://via.placeholder.com/300x300?text=Office+Chair",
      badge: "Sale"
    },
    {
      id: 4,
      name: "4K Webcam",
      price: 149.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 67,
      image: "https://via.placeholder.com/300x300?text=Webcam",
      badge: null
    }
  ]

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to ShopHub
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Discover amazing products at unbeatable prices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Shop Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Deals
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground">Handpicked items just for you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                {product.badge && (
                  <Badge 
                    variant={product.badge === "Sale" ? "destructive" : "default"} 
                    className="absolute top-2 left-2"
                  >
                    {product.badge}
                  </Badge>
                )}
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg line-clamp-2">{product.name}</CardTitle>
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="sm">
                  <ShoppingBag className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose ShopHub?</h2>
            <p className="text-lg text-muted-foreground">We're committed to your satisfaction</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-muted-foreground">
                Free delivery on all orders over $50. Fast and reliable shipping worldwide.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
              <p className="text-muted-foreground">
                Your payment information is always safe and secure with our encryption technology.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-muted-foreground">
                Not satisfied? Return your purchase within 30 days for a full refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Get exclusive deals and be the first to know about new products
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-foreground"
            />
            <Button variant="secondary" size="lg" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}