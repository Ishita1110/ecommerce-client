"use client"

import type React from "react"

import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import { useProducts } from "../../contexts/ProductContext"
import { useCart } from "../../contexts/CartContext"
import { useAuth } from "../../contexts/AuthContext"
import Navbar from "../../components/Navbar"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Star, ShoppingCart } from "lucide-react"

export default function ProductDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { products, getProductReviews, addReview, getUserReviewForProduct } = useProducts()
  const { addToCart } = useCart()
  const { user } = useAuth()

  const [quantity, setQuantity] = useState(1)
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState("")
  const [reviewSubmitted, setReviewSubmitted] = useState(false)

  const product = products.find((p) => p.id === params.id)
  const reviews = product ? getProductReviews(product.id) : []
  const userReview = product && user ? getUserReviewForProduct(product.id, user.id) : undefined

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="text-center py-8">
              <h2 className="text-2xl font-bold mb-4">Product not found</h2>
              <Button onClick={() => router.push("/")}>Back to Home</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    if (user) {
      addToCart(product, quantity)
      alert("Product added to cart!")
    }
  }

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    const success = addReview({
      productId: product.id,
      userId: user.id,
      userName: user.name,
      rating,
      comment,
    })

    if (success) {
      setComment("")
      setReviewSubmitted(true)
      alert("Review submitted successfully!")
    } else {
      alert("You have already reviewed this product!")
    }
  }

  const averageRating =
    reviews.length > 0 ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={500}
              height={500}
              className="w-full rounded-lg"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-gray-600 mb-4">{product.description}</p>

              <div className="flex items-center space-x-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-5 w-5 ${star <= averageRating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  ({reviews.length} review{reviews.length !== 1 ? "s" : ""})
                </span>
              </div>

              <p className="text-3xl font-bold text-green-600 mb-4">${product.price.toFixed(2)}</p>

              <p className="text-gray-600 mb-4">Stock: {product.stock} available</p>
            </div>

            {user && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number.parseInt(e.target.value) || 1)}
                    min="1"
                    max={product.stock}
                    className="w-24"
                  />
                </div>

                <Button onClick={handleAddToCart} disabled={product.stock === 0} className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
                </Button>
              </div>
            )}

            {!user && (
              <Button asChild className="w-full">
                <a href="/login">Login to Purchase</a>
              </Button>
            )}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              {reviews.length === 0 ? (
                <p className="text-gray-600">No reviews yet. Be the first to review!</p>
              ) : (
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="font-semibold">{review.userName}</span>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {user && !userReview && !reviewSubmitted && (
            <Card>
              <CardHeader>
                <CardTitle>Write a Review</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <Label>Rating</Label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} type="button" onClick={() => setRating(star)} className="focus:outline-none">
                          <Star
                            className={`h-6 w-6 ${star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="comment">Comment</Label>
                    <Textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      required
                      placeholder="Share your experience with this product..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Submit Review
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          {user && userReview && (
            <Card>
              <CardHeader>
                <CardTitle>Your Review</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${
                          star <= userReview.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{userReview.comment}</p>
                <p className="text-sm text-gray-500 mt-2">You can only submit one review per product.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
