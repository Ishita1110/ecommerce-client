import { NextResponse } from "next/server"
import clientPromise from "../../../../lib/mongodb"

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce")
    const { email, password, name } = await request.json()

    // Check if user already exists
    const existingUser = await db.collection("users").findOne({ email })
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const result = await db.collection("users").insertOne({
      email,
      password, // In real app, hash this!
      name,
      isAdmin: false,
      createdAt: new Date(),
    })

    return NextResponse.json({
      id: result.insertedId,
      name,
      email,
      isAdmin: false,
    })
  } catch (error) {
    return NextResponse.json({ error: "Registration failed" }, { status: 500 })
  }
}
