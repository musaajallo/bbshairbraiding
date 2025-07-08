import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { image, caption } = await req.json();
    if (!image) {
      return NextResponse.json({ error: "Image URL required" }, { status: 400 });
    }
    const gallery = await prisma.gallery.create({
      data: { image, caption },
    });
    return NextResponse.json({ gallery });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const gallery = await prisma.gallery.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json({ gallery });
}
