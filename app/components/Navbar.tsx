"use client"

import Link from "next/link"
import { useAuth } from "../contexts/AuthContext"
import { useCart } from "../contexts/CartContext"
import { ShoppingCart, User, LogOut, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const { user, logout } = useAuth()
  const { getTotalItems } = useCart()

  return (
    <nav className="bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              E-Store
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link href="/cart" className="relative">
                  <Button variant="outline" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Cart ({getTotalItems()})
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm">
                      <User className="h-4 w-4 mr-2" />
                      {user.name}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {user.role === "admin" && (
                      <DropdownMenuItem asChild>
                        <Link href="/admin">
                          <Settings className="h-4 w-4 mr-2" />
                          Admin Panel
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuItem onClick={logout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="space-x-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="/login">Login</Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
