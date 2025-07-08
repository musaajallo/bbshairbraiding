import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { email, phone, address, mapUrl } = await req.json();
    if (!email || !phone || !address) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const contact = await prisma.contact.create({
      data: { email, phone, address, mapUrl },
    });
    return NextResponse.json({ contact });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const contacts = await prisma.contact.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ contacts });
}
