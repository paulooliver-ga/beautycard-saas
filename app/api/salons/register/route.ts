import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, whatsapp, email, password } = await req.json();

    const cleanPhone = phone.replace(/\D/g, "");

    const existing = await prisma.salon.findUnique({
      where: { phone: cleanPhone },
    });

    if (existing) {
      return NextResponse.json({ error: "Salão já cadastrado" }, { status: 409 });
    }

    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const passwordHash = await bcrypt.hash(password, 10);

    const salon = await prisma.salon.create({
      data: {
        name,
        slug,
        phone: cleanPhone,
        whatsapp,
        plan: "TRIAL",
        users: {
          create: {
            name,
            phone: cleanPhone,
            passwordHash,
            role: "ADMIN",
          },
        },
      },
    });

    return NextResponse.json({ ok: true, salonId: salon.id });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao cadastrar" }, { status: 500 });
  }
}