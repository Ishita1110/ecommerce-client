import { NextResponse } from "next/server"
import clientPromise from "../../../lib/mongodb"

export async function GET(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce")
    const { searchParams } = new URL(request.url)
    const productId = searchParams.get("productId")

    const query = productId ? { productId } : {}
    const reviews = await db.collection("reviews").find(query).toArray()

    return NextResponse.json(reviews)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce")
    const body = await request.json()

    // Check if user already reviewed this product
    const existingReview = await db.collection("reviews").findOne({
      productId: body.productId,
      userId: body.userId,
    })

    if (existingReview) {
      return NextResponse.json({ error: "You already reviewed this product" }, { status: 400 })
    }

    const result = await db.collection("reviews").insertOne({
      ...body,
      createdAt: new Date(),
    })

    return NextResponse.json({ id: result.insertedId, ...body })
  } catch (error) {
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 })
  }
}
