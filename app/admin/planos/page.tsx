"use client";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function PlanosPage() {
  const planos = [
    { id: 1, nome: "TRIAL", preco: "Grátis", periodo: "14 dias", clientes: 45, recurso: "Básico" },
    { id: 2, nome: "STARTER", preco: "R$ 97/mês", periodo: "Mensal", clientes: 156, recurso: "Intermediário" },
    { id: 3, nome: "PROFESSIONAL", preco: "R$ 197/mês", periodo: "Mensal", clientes: 289, recurso: "Completo" },
    { id: 4, nome: "ENTERPRISE", preco: "Personalizado", periodo: "Anual", clientes: 500, recurso: "Premium" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Planos</h1>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Plus size={20} />
          Novo Plano
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {planos.map((plano) => (
          <div key={plano.id} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-gray-900">{plano.nome}</h3>
                <p className="text-2xl font-bold text-red-600 mt-2">{plano.preco}</p>
              </div>
              <div className="flex gap-2">
                <button className="text-blue-600 hover:text-blue-700">
                  <Edit size={20} />
                </button>
                <button className="text-red-600 hover:text-red-700">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            <div className="space-y-2 text-sm text-gray-600">
              <p>📅 <strong>Período:</strong> {plano.periodo}</p>
              <p>👥 <strong>Clientes:</strong> {plano.clientes}</p>
              <p>⭐ <strong>Nível:</strong> {plano.recurso}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}