"use client";
import { Search, Plus, Edit, Trash2, X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function ClientesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ nome: "", telefone: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [clientes, setClientes] = useState([
    { id: 1, nome: "Maria Silva", telefone: "(61) 99999-0001", visitas: 5, recompensas: 1 },
    { id: 2, nome: "Ana Costa", telefone: "(61) 99999-0002", visitas: 12, recompensas: 2 },
    { id: 3, nome: "Beatriz Santos", telefone: "(61) 99999-0003", visitas: 3, recompensas: 0 },
    { id: 4, nome: "Carla Oliveira", telefone: "(61) 99999-0004", visitas: 8, recompensas: 1 },
    { id: 5, nome: "Diana Ferreira", telefone: "(61) 99999-0005", visitas: 15, recompensas: 3 },
  ]);

  const filtrados = clientes.filter(c => 
    c.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.telefone.includes(searchTerm)
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (!form.nome || !form.telefone) {
      toast.error("Nome e telefone são obrigatórios");
      setLoading(false);
      return;
    }

    const novoCliente = {
      id: Math.random(),
      nome: form.nome,
      telefone: form.telefone,
      visitas: 0,
      recompensas: 0,
    };

    setClientes([...clientes, novoCliente]);
    setForm({ nome: "", telefone: "", email: "" });
    setLoading(false);
    setIsModalOpen(false);
    toast.success("Cliente adicionado!");
  }

  function handleDeleteCliente(id: number) {
    setClientes(clientes.filter(c => c.id !== id));
    toast.success("Cliente removido!");
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Clientes</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
        >
          <Plus size={20} />
          Adicionar Cliente
        </button>
      </div>

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
                  <button
                    onClick={() => handleDeleteCliente(cliente.id)}
                    className="text-red-600 hover:text-red-700 transition"
                  >
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Novo Cliente</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Nome</label>
                <input
                  type="text"
                  placeholder="Maria Silva"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Telefone</label>
                <input
                  type="tel"
                  placeholder="(61) 99999-0000"
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-1">Email (opcional)</label>
                <input
                  type="email"
                  placeholder="maria@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold py-2 rounded-lg transition"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-lg transition disabled:opacity-50"
                >
                  {loading ? "Adicionando..." : "Adicionar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}