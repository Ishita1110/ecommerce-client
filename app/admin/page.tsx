"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "../context/AppContext"
import Header from "../components/Header"

export default function AdminPage() {
  const { user, products, addProduct, deleteProduct } = useApp()
  const router = useRouter()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    stock: "",
  })

  if (!user || !user.isAdmin) {
    router.push("/")
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addProduct({
      name: formData.name,
      price: Number(formData.price),
      description: formData.description,
      image: `/placeholder.svg?height=200&width=200&query=${encodeURIComponent(formData.name)}`,
      stock: Number(formData.stock),
    })
    setFormData({ name: "", price: "", description: "", stock: "" })
    setShowForm(false)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            {showForm ? "Cancel" : "Add Product"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-1">Name:</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Price:</label>
                <input
                  type="number"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Stock:</label>
                <input
                  type="number"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1">Description:</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border rounded px-2 py-1"
                  required
                />
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg shadow">
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Products</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Stock</th>
                  <th className="px-4 py-2 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="px-4 py-2">{product.name}</td>
                    <td className="px-4 py-2">${product.price}</td>
                    <td className="px-4 py-2">{product.stock}</td>
                    <td className="px-4 py-2">
                      <button onClick={() => deleteProduct(product.id)} className="text-red-500 hover:underline">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
