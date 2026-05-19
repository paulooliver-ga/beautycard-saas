"use client";
import { Search, Plus, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

export default function UsuariosPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const usuarios = [
    { id: 1, nome: "Priscila Sodré", email: "priscila@studio.com", salao: "Studio Priscila", role: "ADMIN" },
    { id: 2, nome: "Maria Silva", email: "maria@beautycard.com", salao: "Beauty Pro", role: "ADMIN" },
    { id: 3, nome: "Ana Costa", email: "ana@salao.com", salao: "Salão Elegância", role: "ADMIN" },
    { id: 4, nome: "Carol Santos", email: "carol@beleza.com", salao: "Beleza & Cia", role: "ADMIN" },
    { id: 5, nome: "Diana Ferreira", email: "diana@studio.com", salao: "Studio Cabelos", role: "ADMIN" },
  ];

  const filtrados = usuarios.filter(u =>
    u.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.includes(searchTerm)
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Usuários</h1>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition">
          <Plus size={20} />
          Novo Usuário
        </button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Buscar por nome ou email..."
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
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Email</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Salão</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Papel</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtrados.map((usuario) => (
              <tr key={usuario.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900 font-medium">{usuario.nome}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{usuario.email}</td>
                <td className="py-4 px-6 text-sm text-gray-600">{usuario.salao}</td>
                <td className="py-4 px-6 text-sm">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {usuario.role}
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