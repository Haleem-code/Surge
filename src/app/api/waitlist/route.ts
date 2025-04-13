import { NextResponse } from "next/server"
import { connectToDb } from "@/lib/db"
import User from "@/lib/models"

export async function GET() {
  try {
    // Connect to the database
    await connectToDb()
    
    // Fetch all users and sort by creation date (newest first)
    const users = await User.find().sort({ createdAt: -1 })
    
    return NextResponse.json({ success: true, users }, { status: 200 })
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json({ success: false, message: "Server error, please try again later" }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const email = formData.get("email") as string
    const twitter = (formData.get("twitter") as string) || ""

    // Validate email
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ success: false, message: "Please provide a valid email address" }, { status: 400 })
    }

    // Connect to the database
    await connectToDb()

    // Check if user already exists
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return NextResponse.json({ success: false, message: "Email already registered" }, { status: 409 })
    }

    // Create new user
    await User.create({
      email,
      twitter,
    })

    return NextResponse.json({ success: true, message: "Successfully joined waitlist" }, { status: 201 })
  } catch (error) {
    console.error("Error in waitlist API:", error)
    return NextResponse.json({ success: false, message: "Server error, please try again later" }, { status: 500 })
  }
}