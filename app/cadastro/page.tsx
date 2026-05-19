"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function CadastroPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    whatsapp: "",
    email: "",
    password: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    if (!form.name || !form.phone || !form.email || !form.password) {
      toast.error("Todos os campos são obrigatórios");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/salons/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Erro ao cadastrar");
        setLoading(false);
        return;
      }

      toast.success("Salão cadastrado! Redirecionando...");
      setTimeout(() => router.push("/login"), 2000);
    } catch (err) {
      toast.error("Erro de conexão");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">Cadastro do Salão</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === 1 ? (
            <>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nome do Salão</label>
                  <span className={`text-xs ${form.name.length <= 40 ? "text-gray-400" : "text-red-400"}`}>
                    {form.name.length}/40
                  </span>
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu Salão de Beleza"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value.slice(0, 40) })}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">Telefone</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="61999999999"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value.replace(/\D/g, "") })}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-300 mb-1">WhatsApp (opcional)</label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  placeholder="5561999999999"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!form.name || !form.phone) {
                    toast.error("Nome e telefone são obrigatórios");
                    return;
                  }
                  setStep(2);
                }}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition"
              >
                Próximo
              </button>
            </>
          ) : (
            <>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">Senha</label>
                  <span className={`text-xs ${form.password.length >= 8 ? "text-green-400" : "text-red-400"}`}>
                    {form.password.length}/8
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value.slice(0, 20) })}
                    className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {form.password.length < 8 && form.password.length > 0 && (
                  <p className="text-xs text-red-400 mt-1">Mínimo 8 caracteres</p>
                )}
                {form.password.length >= 8 && (
                  <p className="text-xs text-green-400 mt-1">✓ Senha válida</p>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 rounded-lg transition"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  disabled={loading || form.password.length < 8}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
              </div>
            </>
          )}
        </form>

        <p className="text-center text-gray-400 mt-4">
          Já tem conta? <a href="/login" className="text-purple-400 hover:text-purple-300">Faça login</a>
        </p>
      </div>
    </div>
  );
}