"use client"

import Image from "next/image"
import Link from "next/link"
import type { Product } from "../contexts/ProductContext"
import { useCart } from "../contexts/CartContext"
import { useAuth } from "../contexts/AuthContext"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart()
  const { user } = useAuth()

  const handleAddToCart = () => {
    if (user) {
      addToCart(product)
    }
  }

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </Link>
      </CardHeader>

      <CardContent className="flex-1 p-4">
        <CardTitle className="text-lg mb-2">
          <Link href={`/products/${product.id}`} className="hover:text-blue-600">
            {product.name}
          </Link>
        </CardTitle>
        <p className="text-gray-600 text-sm mb-2">{product.description}</p>
        <p className="text-lg font-bold text-green-600">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-500">Stock: {product.stock}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        {user ? (
          <Button onClick={handleAddToCart} className="w-full" disabled={product.stock === 0}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
          </Button>
        ) : (
          <Button asChild className="w-full">
            <Link href="/login">Login to Purchase</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
