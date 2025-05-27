"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  stock: number
  createdAt: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: string
}

interface ProductContextType {
  products: Product[]
  reviews: Review[]
  addProduct: (product: Omit<Product, "id" | "createdAt">) => void
  updateProduct: (id: string, product: Partial<Product>) => void
  deleteProduct: (id: string) => void
  addReview: (review: Omit<Review, "id" | "createdAt">) => boolean
  getProductReviews: (productId: string) => Review[]
  getUserReviewForProduct: (productId: string, userId: string) => Review | undefined
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>([])
  const [reviews, setReviews] = useState<Review[]>([])

  useEffect(() => {
    // Initialize with mock data
    const mockProducts: Product[] = [
      {
        id: "1",
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation",
        price: 199.99,
        image: "/placeholder.svg?height=300&width=300&query=wireless+headphones",
        category: "Electronics",
        stock: 50,
        createdAt: "2024-01-01",
      },
      {
        id: "2",
        name: "Smart Watch",
        description: "Feature-rich smartwatch with health monitoring",
        price: 299.99,
        image: "/placeholder.svg?height=300&width=300&query=smart+watch",
        category: "Electronics",
        stock: 30,
        createdAt: "2024-01-02",
      },
      {
        id: "3",
        name: "Running Shoes",
        description: "Comfortable running shoes for all terrains",
        price: 129.99,
        image: "/placeholder.svg?height=300&width=300&query=running+shoes",
        category: "Sports",
        stock: 75,
        createdAt: "2024-01-03",
      },
    ]

    const mockReviews: Review[] = [
      {
        id: "1",
        productId: "1",
        userId: "2",
        userName: "Regular User",
        rating: 5,
        comment: "Excellent sound quality and comfortable to wear!",
        createdAt: "2024-01-15",
      },
    ]

    setProducts(mockProducts)
    setReviews(mockReviews)
  }, [])

  const addProduct = (productData: Omit<Product, "id" | "createdAt">) => {
    const newProduct: Product = {
      ...productData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }
    setProducts((prev) => [...prev, newProduct])
  }

  const updateProduct = (id: string, productData: Partial<Product>) => {
    setProducts((prev) => prev.map((product) => (product.id === id ? { ...product, ...productData } : product)))
  }

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id))
    setReviews((prev) => prev.filter((review) => review.productId !== id))
  }

  const addReview = (reviewData: Omit<Review, "id" | "createdAt">): boolean => {
    // Check if user already reviewed this product (one review per user per product)
    const existingReview = reviews.find(
      (review) => review.productId === reviewData.productId && review.userId === reviewData.userId,
    )

    if (existingReview) {
      return false // User already reviewed this product
    }

    const newReview: Review = {
      ...reviewData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    }

    setReviews((prev) => [...prev, newReview])
    return true
  }

  const getProductReviews = (productId: string): Review[] => {
    return reviews.filter((review) => review.productId === productId)
  }

  const getUserReviewForProduct = (productId: string, userId: string): Review | undefined => {
    return reviews.find((review) => review.productId === productId && review.userId === userId)
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        reviews,
        addProduct,
        updateProduct,
        deleteProduct,
        addReview,
        getProductReviews,
        getUserReviewForProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider")
  }
  return context
}
