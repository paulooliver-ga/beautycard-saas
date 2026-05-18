"use client";
import { X } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface AddClienteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (cliente: any) => void;
}

export default function AddClienteModal({ isOpen, onClose, onAdd }: AddClienteModalProps) {
  const [form, setForm] = useState({ nome: "", telefone: "", email: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (!form.nome || !form.telefone) {
      toast.error("Nome e telefone são obrigatórios");
      setLoading(false);
      return;
    }

    // Mock - adicionar cliente
    const novoCliente = {
      id: Math.random(),
      nome: form.nome,
      telefone: form.telefone,
      visitas: 0,
      recompensas: 0,
    };

    onAdd(novoCliente);
    setForm({ nome: "", telefone: "", email: "" });
    setLoading(false);
    onClose();
    toast.success("Cliente adicionado!");
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Novo Cliente</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
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
              onClick={onClose}
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
  );
}