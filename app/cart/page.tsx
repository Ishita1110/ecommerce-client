"use client"

import { useApp } from "../context/AppContext"
import Header from "../components/Header"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function CartPage() {
  const { cart, removeFromCart, clearCart, user } = useApp()
  const router = useRouter()

  if (!user) {
    router.push("/login")
    return null
  }

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)

  const handleCheckout = () => {
    // Simple payment simulation
    alert(`Payment of $${total.toFixed(2)} processed successfully! (This is just a demo)`)
    clearCart()
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <button
              onClick={() => router.push("/")}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow">
            {cart.map((item) => (
              <div key={item.product.id} className="flex items-center p-4 border-b">
                <Image
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  width={80}
                  height={80}
                  className="rounded"
                />
                <div className="ml-4 flex-1">
                  <h3 className="font-bold">{item.product.name}</h3>
                  <p className="text-gray-600">
                    ${item.product.price} x {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${(item.product.price * item.quantity).toFixed(2)}</p>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="text-red-500 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
                <button
                  onClick={handleCheckout}
                  className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
