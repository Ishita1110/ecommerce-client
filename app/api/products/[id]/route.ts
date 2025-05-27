import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import clientPromise from "../../../../lib/mongodb"

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce")

    await db.collection("products").deleteOne({ _id: new ObjectId(params.id) })

    return NextResponse.json({ message: "Product deleted" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete product" }, { status: 500 })
  }
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise
    const db = client.db("ecommerce")
    const body = await request.json()

    await db.collection("products").updateOne({ _id: new ObjectId(params.id) }, { $set: body })

    return NextResponse.json({ message: "Product updated" })
  } catch (error) {
    return NextResponse.json({ error: "Failed to update product" }, { status: 500 })
  }
}
