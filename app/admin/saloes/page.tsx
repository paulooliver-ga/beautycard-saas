"use client";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export default function SaloesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const saloes = [
    { id: 1, nome: "Studio Priscila Sodré", phone: "(61) 99999-0001", plano: "ACTIVE", clientes: 324, status: "Ativo" },
    { id: 2, nome: "Beauty Pro", phone: "(61) 99999-0002", plano: "ACTIVE", clientes: 156, status: "Ativo" },
    { id: 3, nome: "Salão Elegância", phone: "(61) 99999-0003", plano: "TRIAL", clientes: 45, status: "Ativo" },
    { id: 4, nome: "Beleza & Cia", phone: "(61) 99999-0004", plano: "ACTIVE", clientes: 289, status: "Ativo" },
    { id: 5, nome: "Studio Cabelos", phone: "(61) 99999-0005", plano: "INACTIVE", clientes: 0, status: "Inativo" },
  ];

  const filtrados = saloes.filter(s =>
    s.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.phone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Salões</h1>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Plus size={20} />
          Novo Salão
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Buscar por nome ou telefone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
        />
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Nome</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Telefone</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Plano</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Clientes</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Status</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((salon) => (
              <tr key={salon.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900 font-medium">{salon.nome}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{salon.phone}</td>
                <td className="py-4 px-6 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    salon.plano === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : salon.plano === "TRIAL"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                  }`}>
                    {salon.plano}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">{salon.clientes}</td>
                <td className="py-4 px-6 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    salon.status === "Ativo"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}>
                    {salon.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm flex gap-3">
                  <button className="text-blue-600 hover:text-blue-700">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-600 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}