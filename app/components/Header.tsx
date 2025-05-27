"use client"

import Link from "next/link"
import { useApp } from "../context/AppContext"

export default function Header() {
  const { user, logout, cart } = useApp()

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Simple Store
        </Link>

        <nav className="flex items-center gap-4">
          {user ? (
            <>
              <Link href="/cart" className="hover:underline">
                Cart ({cartCount})
              </Link>
              {user.isAdmin && (
                <Link href="/admin" className="hover:underline">
                  Admin
                </Link>
              )}
              <span>Hi, {user.name}</span>
              <button onClick={logout} className="hover:underline">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:underline">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
