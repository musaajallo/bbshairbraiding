import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(_req: Request, context: any) {
  const { params } = context;
  const booking = await prisma.booking.findUnique({ where: { id: params.id } });
  if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 });
  return NextResponse.json({ booking });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function PUT(req: Request, context: any) {
  const { params } = context;
  try {
    const { name, email, phone, service, date, message } = await req.json();
    const booking = await prisma.booking.findUnique({ where: { id: params.id } });
    if (!booking) return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    const updated = await prisma.booking.update({
      where: { id: params.id },
      data: { name, email, phone, service, date: new Date(date), message },
    });
    return NextResponse.json({ booking: updated });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function DELETE(_req: Request, context: any) {
  const { params } = context;
  try {
    await prisma.booking.delete({ where: { id: params.id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
