"use client";
import { Search, Plus, Edit, Trash2, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function SaloesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editForm, setEditForm] = useState({ id: 0, nome: "", phone: "", plano: "ACTIVE", status: "Ativo" });
  const [saloes, setClientes] = useState([
    { id: 1, nome: "Studio Priscila Sodré", phone: "(61) 99999-0001", plano: "ACTIVE", clientes: 324, status: "Ativo" },
    { id: 2, nome: "Beauty Pro", phone: "(61) 99999-0002", plano: "ACTIVE", clientes: 156, status: "Ativo" },
    { id: 3, nome: "Salão Elegância", phone: "(61) 99999-0003", plano: "TRIAL", clientes: 45, status: "Ativo" },
    { id: 4, nome: "Beleza & Cia", phone: "(61) 99999-0004", plano: "ACTIVE", clientes: 289, status: "Ativo" },
    { id: 5, nome: "Studio Cabelos", phone: "(61) 99999-0005", plano: "INACTIVE", clientes: 0, status: "Inativo" },
  ]);

  const filtrados = saloes.filter(s =>
    s.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    s.phone.includes(searchTerm)
  );

  function handleOpenEdit(salon: any) {
    setEditForm(salon);
    setIsEditModalOpen(true);
  }

  function handleSaveEdit() {
    if (!editForm.nome || !editForm.phone) {
      toast.error("Nome e telefone são obrigatórios");
      return;
    }

    setClientes(saloes.map(s => s.id === editForm.id ? editForm : s));
    setIsEditModalOpen(false);
    toast.success("Salão atualizado!");
  }

  function handleDeleteSalon(id: number, nome: string) {
    if (confirm(`Deletar ${nome}?`)) {
      setClientes(saloes.filter(s => s.id !== id));
      toast.success("Salão deletado!");
    }
  }

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
                  <button
                    onClick={() => handleOpenEdit(salon)}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteSalon(salon.id, salon.nome)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Editar Salão</h2>
              <button onClick={() => setIsEditModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Nome</label>
                <input
                  type="text"
                  value={editForm.nome}
                  onChange={(e) => setEditForm({ ...editForm, nome: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Telefone</label>
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Plano</label>
                <select
                  value={editForm.plano}
                  onChange={(e) => setEditForm({ ...editForm, plano: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="TRIAL">TRIAL</option>
                  <option value="ACTIVE">ACTIVE</option>
                  <option value="INACTIVE">INACTIVE</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Status</label>
                <select
                  value={editForm.status}
                  onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                </select>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 rounded-lg transition"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleSaveEdit}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition"
                >
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}