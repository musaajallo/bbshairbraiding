import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(_req: Request, context: any) {
  const { params } = context;
  const contact = await prisma.contact.findUnique({ where: { id: params.id } });
  if (!contact) return NextResponse.json({ error: "Contact not found" }, { status: 404 });
  return NextResponse.json({ contact });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PUT(req: Request, context: any) {
  const { params } = context;
  try {
    const { email, phone, address, mapUrl } = await req.json();
    const contact = await prisma.contact.findUnique({ where: { id: params.id } });
    if (!contact) return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    const updated = await prisma.contact.update({
      where: { id: params.id },
      data: { email, phone, address, mapUrl },
    });
    return NextResponse.json({ contact: updated });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(_req: Request, context: any) {
  const { params } = context;
  try {
    await prisma.contact.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
