import { NextResponse } from "next/server"
import clientPromise from "../../../lib/mongodb"

export async function POST() {
  try {
    console.log("Connecting to MongoDB...")
    const client = await clientPromise
    const db = client.db("ecommerce")

    console.log("Connected! Initializing data...")

    // Create initial products
    const products = [
      {
        name: "Laptop",
        price: 999,
        description: "Good laptop for work",
        image: "/placeholder.svg?height=200&width=200&query=laptop",
        stock: 5,
        createdAt: new Date(),
      },
      {
        name: "Phone",
        price: 699,
        description: "Latest smartphone",
        image: "/placeholder.svg?height=200&width=200&query=smartphone",
        stock: 10,
        createdAt: new Date(),
      },
      {
        name: "Headphones",
        price: 199,
        description: "Wireless headphones",
        image: "/placeholder.svg?height=200&width=200&query=headphones",
        stock: 15,
        createdAt: new Date(),
      },
    ]

    // Create initial users
    const users = [
      {
        email: "admin@test.com",
        password: "admin",
        name: "Admin",
        isAdmin: true,
        createdAt: new Date(),
      },
      {
        email: "user@test.com",
        password: "user",
        name: "User",
        isAdmin: false,
        createdAt: new Date(),
      },
    ]

    // Clear existing data
    await db.collection("products").deleteMany({})
    await db.collection("users").deleteMany({})
    await db.collection("reviews").deleteMany({})

    // Insert initial data
    await db.collection("products").insertMany(products)
    await db.collection("users").insertMany(users)

    console.log("Database initialized successfully!")
    return NextResponse.json({
      message: "Database initialized successfully",
      productsCount: products.length,
      usersCount: users.length,
    })
  } catch (error) {
    console.error("Database initialization failed:", error)
    return NextResponse.json(
      {
        error: "Failed to initialize database",
        details: error.message,
      },
      { status: 500 },
    )
  }
}
