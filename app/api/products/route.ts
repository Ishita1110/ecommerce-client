import { NextResponse } from "next/server"
import clientPromise from "../../../lib/mongodb"

export async function GET() {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce")
    const products = await db.collection("products").find({}).toArray()

    return NextResponse.json(products)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce")
    const body = await request.json()

    const result = await db.collection("products").insertOne({
      ...body,
      createdAt: new Date(),
    })

    return NextResponse.json({ id: result.insertedId, ...body })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 })
  }
}
