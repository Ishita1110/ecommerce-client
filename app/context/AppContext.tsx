"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Types
interface User {
  id: string
  name: string
  email: string
  isAdmin: boolean
}

interface Product {
  _id?: string
  id?: string
  name: string
  price: number
  description: string
  image: string
  stock: number
}

interface CartItem {
  product: Product
  quantity: number
}

interface Review {
  _id?: string
  id?: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
}

interface AppContextType {
  // User stuff
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  register: (email: string, password: string, name: string) => Promise<boolean>

  // Products
  products: Product[]
  loadProducts: () => Promise<void>
  addProduct: (product: Omit<Product, "id" | "_id">) => Promise<void>
  deleteProduct: (id: string) => Promise<void>

  // Cart
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  clearCart: () => void

  // Reviews
  reviews: Review[]
  addReview: (productId: string, rating: number, comment: string) => Promise<boolean>
  getProductReviews: (productId: string) => Review[]
  loadReviews: (productId?: string) => Promise<void>

  // Loading states
  loading: boolean
}

const AppContext = createContext<AppContextType | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<CartItem[]>([])
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(false)

  // Load data when app starts
  useEffect(() => {
    loadProducts()
    loadReviews()

    // Check if user was logged in
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }

    // Load cart
    const savedCart = localStorage.getItem("cart")
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  // Save cart when it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const loadProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch("/api/products")
      if (response.ok) {
        const data = await response.json()
        setProducts(data)
      }
    } catch (error) {
      console.error("Failed to load products:", error)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setLoading(true)
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
        return true
      }
      return false
    } catch (error) {
      console.error("Login failed:", error)
      return false
    } finally {
      setLoading(false)
    }
  }

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    try {
      setLoading(true)
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, name }),
      })

      if (response.ok) {
        const userData = await response.json()
        setUser(userData)
        localStorage.setItem("user", JSON.stringify(userData))
        return true
      }
      return false
    } catch (error) {
      console.error("Registration failed:", error)
      return false
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  const addProduct = async (productData: Omit<Product, "id" | "_id">) => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      })

      if (response.ok) {
        await loadProducts() // Reload products
      }
    } catch (error) {
      console.error("Failed to add product:", error)
    }
  }

  const deleteProduct = async (id: string) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      })

      if (response.ok) {
        await loadProducts() // Reload products
      }
    } catch (error) {
      console.error("Failed to delete product:", error)
    }
  }

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const productId = product._id || product.id
      const existing = prev.find((item) => (item.product._id || item.product.id) === productId)

      if (existing) {
        return prev.map((item) =>
          (item.product._id || item.product.id) === productId ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }

      return [...prev, { product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => (item.product._id || item.product.id) !== productId))
  }

  const clearCart = () => {
    setCart([])
  }

  const loadReviews = async (productId?: string) => {
    try {
      const url = productId ? `/api/reviews?productId=${productId}` : "/api/reviews"
      const response = await fetch(url)
      if (response.ok) {
        const data = await response.json()
        setReviews(data)
      }
    } catch (error) {
      console.error("Failed to load reviews:", error)
    }
  }

  const addReview = async (productId: string, rating: number, comment: string): Promise<boolean> => {
    if (!user) return false

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          userId: user.id,
          userName: user.name,
          rating,
          comment,
        }),
      })

      if (response.ok) {
        await loadReviews() // Reload reviews
        return true
      }
      return false
    } catch (error) {
      console.error("Failed to add review:", error)
      return false
    }
  }

  const getProductReviews = (productId: string): Review[] => {
    return reviews.filter((r) => r.productId === productId)
  }

  return (
    <AppContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        products,
        loadProducts,
        addProduct,
        deleteProduct,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        reviews,
        addReview,
        getProductReviews,
        loadReviews,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within AppProvider")
  }
  return context
}
