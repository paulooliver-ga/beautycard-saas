import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Mock super admin credentials
    if (email === "admin@beautycard.com" && password === "admin123") {
      const token = Buffer.from(JSON.stringify({ role: "super_admin", email })).toString("base64");
      
      const cookieStore = await cookies();
      cookieStore.set("admin_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60,
      });

      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: "Erro ao fazer login" }, { status: 500 });
  }
}