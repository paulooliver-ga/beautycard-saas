"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Erro ao fazer login");
        setLoading(false);
        return;
      }

      toast.success("Bem-vindo, Super Admin!");
      setTimeout(() => router.push("/admin/dashboard"), 1000);
    } catch (err) {
      toast.error("Erro de conexão");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-slate-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-slate-800 rounded-lg p-8 w-full max-w-md border-2 border-red-600">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-500 mb-2">🔐</h1>
          <h2 className="text-3xl font-bold text-white">Admin Central</h2>
          <p className="text-sm text-gray-400 mt-2">Painel de Controle</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="admin@beautycard.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">Senha</label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                className="w-full px-4 py-2 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
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
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-lg transition disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-xs">
          Demo: admin@beautycard.com / admin123
        </p>
      </div>
    </div>
  );
}