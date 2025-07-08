import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
 const { id } = await params;
 const user = await prisma.user.findUnique({
   where: { id },
   include: { role: true },
 });
 if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
 return NextResponse.json({ user });
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
 try {
   const { id } = await params;
   const { name, email, password, role } = await req.json();
   const user = await prisma.user.findUnique({ where: { id } });
   if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });
   const updateData: {
     name?: string;
     email?: string;
     password?: string;
     roleId?: string;
   } = { name, email };
   if (password) updateData.password = await bcrypt.hash(password, 10);
   if (role) {
     const roleRecord = await prisma.role.findUnique({ where: { name: role } });
     if (!roleRecord) return NextResponse.json({ error: "Role not found" }, { status: 400 });
     updateData.roleId = roleRecord.id;
   }
   const updated = await prisma.user.update({ where: { id }, data: updateData });
   return NextResponse.json({ user: updated });
 } catch {
   return NextResponse.json({ error: "Server error" }, { status: 500 });
 }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
 try {
   const { id } = await params;
   await prisma.user.delete({ where: { id } });
   return NextResponse.json({ success: true });
 } catch {
   return NextResponse.json({ error: "Server error" }, { status: 500 });
 }
}