"use client"

import type React from "react"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { useApp } from "../../context/AppContext"
import Header from "../../components/Header"
import Image from "next/image"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { products, addToCart, user, addReview, getProductReviews } = useApp()
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")

  const product = products.find((p) => p.id === params.id)
  const reviews = product ? getProductReviews(product.id) : []

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="max-w-4xl mx-auto p-4">
          <p>Product not found</p>
        </div>
      </div>
    )
  }

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    const success = addReview(product.id, rating, comment)
    if (success) {
      setComment("")
      alert("Review added!")
    } else {
      alert("You already reviewed this product!")
    }
  }

  const averageRating = reviews.length > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length : 0

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-4xl mx-auto p-4">
        <button onClick={() => router.back()} className="mb-4 text-blue-500 hover:underline">
          ← Back
        </button>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={400}
                height={400}
                className="w-full rounded"
              />
            </div>

            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-2xl font-bold text-green-600 mb-4">${product.price}</p>
              {/* Stock removed as requested */}

              {reviews.length > 0 && (
                <div className="mb-4">
                  <p className="text-yellow-500">
                    ★ {averageRating.toFixed(1)} ({reviews.length} reviews)
                  </p>
                </div>
              )}

              <button
                onClick={() => {
                  if (user) {
                    addToCart(product)
                  } else {
                    window.location.href = "/login"
                  }
                }}
                className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 mb-4"
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? "Out of Stock" : "🛒 Add to Cart"}
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-xl font-bold mb-4">Reviews</h2>

            {user && (
              <form onSubmit={handleReviewSubmit} className="mb-6 p-4 bg-gray-50 rounded">
                <h3 className="font-bold mb-2">Write a Review</h3>
                <div className="mb-2">
                  <label className="block text-sm font-bold mb-1">Rating:</label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(Number(e.target.value))}
                    className="border rounded px-2 py-1"
                  >
                    <option value={5}>5 Stars</option>
                    <option value={4}>4 Stars</option>
                    <option value={3}>3 Stars</option>
                    <option value={2}>2 Stars</option>
                    <option value={1}>1 Star</option>
                  </select>
                </div>
                <div className="mb-2">
                  <label className="block text-sm font-bold mb-1">Comment:</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    className="w-full border rounded px-2 py-1"
                    rows={3}
                    required
                  />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Submit Review
                </button>
              </form>
            )}

            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">{review.userName}</p>
                      <p className="text-yellow-500">{"★".repeat(review.rating)}</p>
                    </div>
                  </div>
                  <p className="mt-2">{review.comment}</p>
                </div>
              ))}

              {reviews.length === 0 && <p className="text-gray-500">No reviews yet. Be the first to review!</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
