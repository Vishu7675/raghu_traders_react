import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
  const { email, password } = body??{}
  if(!email || !password){
    return NextResponse.json({ message: "Email and password are required" }, { status: 400 });
  }

  return NextResponse.json({ message: "Login successful" });
}   
