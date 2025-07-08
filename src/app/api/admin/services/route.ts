import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name, description, price, image, published } = await req.json();
    if (!name || !description || price == null) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const service = await prisma.service.create({
      data: { name, description, price: Number(price), image, published: !!published },
    });
    return NextResponse.json({ service });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ services });
}
