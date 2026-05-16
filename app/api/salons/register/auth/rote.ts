import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { createSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { phone, password } = await req.json();

    const user = await prisma.user.findFirst({
      where: { phone },
      include: { salon: true },
    });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
    }

    await createSession(user.id);
    return NextResponse.json({ ok: true, slug: user.salon.slug });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Erro ao fazer login" }, { status: 500 });
  }
}