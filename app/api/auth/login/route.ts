import { NextResponse } from "next/server"
import clientPromise from "../../../../lib/mongodb"

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce")
    const { email, password } = await request.json()

    const user = await db.collection("users").findOne({ email, password })

    if (user) {
      return NextResponse.json({
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin || false,
      })
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }
  } catch (error) {
    return NextResponse.json({ error: "Login failed" }, { status: 500 })
  }
}
