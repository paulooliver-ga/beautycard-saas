"use client";
export const dynamic = "force-dynamic";

export default function CartaoPage() {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Seu Cartão Fidelidade</h2>
        <p className="text-purple-100">Acumule pontos a cada visita!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 rounded-lg p-4 text-white">
          <p className="text-gray-400 text-sm">Visitas</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-white">
          <p className="text-gray-400 text-sm">Recompensas</p>
          <p className="text-3xl font-bold">0</p>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 text-white">
          <p className="text-gray-400 text-sm">Próximo Prêmio</p>
          <p className="text-3xl font-bold">Em breve</p>
        </div>
      </div>
    </div>
  );
}