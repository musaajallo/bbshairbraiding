import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 const service = await prisma.service.findUnique({ where: { id } });
 if (!service) return NextResponse.json({ error: "Service not found" }, { status: 404 });
 return NextResponse.json({ service });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
 try {
   const { id } = await params;
   const { name, description, price, image, published } = await req.json();
   const service = await prisma.service.findUnique({ where: { id } });
   if (!service) return NextResponse.json({ error: "Service not found" }, { status: 404 });
   const updated = await prisma.service.update({
     where: { id },
     data: { name, description, price: Number(price), image, published: !!published },
   });
   return NextResponse.json({ service: updated });
 } catch {
   return NextResponse.json({ error: "Server error" }, { status: 500 });
 }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
 try {
   const { id } = await params;
   await prisma.service.delete({ where: { id } });
   return NextResponse.json({ success: true });
 } catch {
   return NextResponse.json({ error: "Server error" }, { status: 500 });
 }
}
