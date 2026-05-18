"use client";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export default function ClientesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const clientes = [
    { id: 1, nome: "Maria Silva", telefone: "(61) 99999-0001", visitas: 5, recompensas: 1 },
    { id: 2, nome: "Ana Costa", telefone: "(61) 99999-0002", visitas: 12, recompensas: 2 },
    { id: 3, nome: "Beatriz Santos", telefone: "(61) 99999-0003", visitas: 3, recompensas: 0 },
    { id: 4, nome: "Carla Oliveira", telefone: "(61) 99999-0004", visitas: 8, recompensas: 1 },
    { id: 5, nome: "Diana Ferreira", telefone: "(61) 99999-0005", visitas: 15, recompensas: 3 },
  ];

  const filtrados = clientes.filter(c => 
    c.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.telefone.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Plus size={20} />
          Adicionar Cliente
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Buscar por nome ou telefone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
        />
      </div>

      {/* Clients Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Nome</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Telefone</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Visitas</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Recompensas</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((cliente) => (
              <tr key={cliente.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="py-4 px-6 text-sm text-gray-900 font-medium">{cliente.nome}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{cliente.telefone}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{cliente.visitas}</td>
                <td className="py-4 px-6 text-sm">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {cliente.recompensas}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm flex gap-3">
                  <button className="text-blue-600 hover:text-blue-700 transition">
                    <Edit size={18} />
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

      {filtrados.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          Nenhum cliente encontrado
        </div>
      )}
    </div>
  );
}