import { NextResponse } from "next/server";
import { connectDB } from "../../../libs/db";
import  User  from "../../../models/user";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, password, name, phone } = body ?? {};
    if (!email || !password || !name || !phone) {
      return NextResponse.json(
        { message: "Email, password, name and phone are required" },
        { status: 400 }
      );
    }
    if(!/^\S+@\S+\.\S+$/.test(email)){
      return NextResponse.json(
        { message: "Invalid email format" },
        { status: 400 }
      );
    }
    if(password.length<6){
      return NextResponse.json(
        { message: "Password must be at least 6 characters long" },
        { status: 400 }
      );
    }
    if(phone.length<10 ){
      return NextResponse.json(
        { message: "Phone number must be at least 10 digits long" },
        { status: 400 }
      );
    }

    await connectDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return Response.json({ error: "User already exists" }, { status: 400 });
    }
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    return NextResponse.json({ message: "Signup successful" });
  } catch (error) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
