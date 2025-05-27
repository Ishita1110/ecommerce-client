"use client"

import { useApp } from "./context/AppContext"
import Header from "./components/Header"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const { products, addToCart, user, loading } = useApp()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="max-w-6xl mx-auto p-4">
          <div className="text-center py-8">
            <p>Loading products...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Our Products</h1>
          {products.length === 0 && (
            <button
              onClick={async () => {
                try {
                  const response = await fetch("/api/init-db", { method: "POST" })
                  if (response.ok) {
                    alert("Database initialized successfully!")
                    window.location.reload()
                  } else {
                    alert("Failed to initialize database. Check your MongoDB connection.")
                  }
                } catch (error) {
                  alert("Error: " + error.message)
                }
              }}
              className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 text-sm"
            >
              Initialize Database
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const productId = product._id || product.id
            return (
              <div key={productId} className="bg-white rounded-lg shadow p-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-48 object-cover rounded mb-4"
                />
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="text-xl font-bold text-green-600 mb-2">${product.price}</p>

                <div className="flex flex-col gap-2">
                  <Link
                    href={`/product/${productId}`}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => {
                      if (user) {
                        addToCart(product)
                      } else {
                        window.location.href = "/login"
                      }
                    }}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 font-semibold"
                    disabled={product.stock === 0}
                  >
                    {product.stock === 0 ? "Out of Stock" : "🛒 Add to Cart"}
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {products.length === 0 && !loading && (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">No products found. Click "Initialize Database" to add sample products.</p>
          </div>
        )}
      </main>
    </div>
  )
}
