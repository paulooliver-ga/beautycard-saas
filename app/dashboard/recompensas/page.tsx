"use client";
import { Plus, Trash2, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function RecompensasPage() {
  const [recompensas] = useState([
    { id: 1, cliente: "Maria Silva", tipo: "Desconto 50%", valor: "R$ 50", status: "Utilizada", data: "15/05/2026" },
    { id: 2, cliente: "Ana Costa", tipo: "Serviço Grátis", valor: "R$ 150", status: "Pendente", data: "18/05/2026" },
    { id: 3, cliente: "Beatriz Santos", tipo: "Desconto 30%", valor: "R$ 30", status: "Pendente", data: "18/05/2026" },
    { id: 4, cliente: "Carla Oliveira", tipo: "Brinde", valor: "Cortesia", status: "Utilizada", data: "10/05/2026" },
    { id: 5, cliente: "Diana Ferreira", tipo: "Desconto 50%", valor: "R$ 50", status: "Pendente", data: "18/05/2026" },
  ]);

  const pendentes = recompensas.filter(r => r.status === "Pendente");
  const utilizadas = recompensas.filter(r => r.status === "Utilizada");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Recompensas</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Plus size={20} />
          Criar Recompensa
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Total de Recompensas</p>
          <p className="text-3xl font-bold text-gray-900">{recompensas.length}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Pendentes</p>
          <p className="text-3xl font-bold text-amber-600">{pendentes.length}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <p className="text-sm text-gray-600 mb-2">Utilizadas</p>
          <p className="text-3xl font-bold text-green-600">{utilizadas.length}</p>
        </div>
      </div>

      {/* Pending Rewards */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-amber-50 border-b border-amber-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900">Recompensas Pendentes</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Cliente</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Tipo</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Valor</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Data</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Ações</th>
            </tr>
          </thead>
          <tbody>
            {pendentes.map((recompensa) => (
              <tr key={recompensa.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900 font-medium">{recompensa.cliente}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{recompensa.tipo}</td>
                <td className="py-4 px-6 text-sm font-semibold text-gray-900">{recompensa.valor}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{recompensa.data}</td>
                <td className="py-4 px-6 text-sm flex gap-3">
                  <button className="text-green-600 hover:text-green-700 transition" title="Marcar como utilizada">
                    <CheckCircle size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-700 transition">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Used Rewards */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="bg-green-50 border-b border-green-200 p-4">
          <h2 className="text-lg font-semibold text-gray-900">Recompensas Utilizadas</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Cliente</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Tipo</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Valor</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Data</th>
            </tr>
          </thead>
          <tbody>
            {utilizadas.map((recompensa) => (
              <tr key={recompensa.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900 font-medium">{recompensa.cliente}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{recompensa.tipo}</td>
                <td className="py-4 px-6 text-sm font-semibold text-gray-900">{recompensa.valor}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{recompensa.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}