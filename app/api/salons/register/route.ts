import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, password } = await req.json();

    console.log("Dados recebidos:", { name, phone, email, password });

    if (!name || !phone || !password) {
      return NextResponse.json({ error: "Dados inválidos" }, { status: 400 });
    }

    return NextResponse.json({ 
      ok: true, 
      message: "Cadastro realizado!",
      salonId: "salon-" + Date.now()
    });
  } catch (err) {
    console.error("Erro:", err);
    return NextResponse.json({ error: "Erro ao processar" }, { status: 500 });
  }
}