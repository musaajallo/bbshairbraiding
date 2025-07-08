import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, date, message } = await req.json();
    if (!name || !email || !phone || !service || !date) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const booking = await prisma.booking.create({
      data: { name, email, phone, service, date: new Date(date), message },
    });
    return NextResponse.json({ booking });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const bookings = await prisma.booking.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ bookings });
}
