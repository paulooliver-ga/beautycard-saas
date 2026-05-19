import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navbar */}
      <nav className="bg-slate-900 border-b border-purple-500 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">BeautyCard</h1>
          <div className="flex gap-6">
            <Link href="/pricing" className="text-gray-300 hover:text-white transition">
              Planos
            </Link>
            <Link href="/login" className="text-gray-300 hover:text-white transition">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="flex flex-col items-center justify-center p-4 min-h-[calc(100vh-80px)]">
        <div className="text-center max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-4">BeautyCard SaaS</h1>
          <p className="text-xl text-gray-300 mb-8">Cartão Fidelidade Digital para Salões de Beleza</p>
          <p className="text-lg text-gray-400 mb-12">R$ 97/mês - Comece seu teste gratuito</p>
          
          <div className="space-y-4">
            <Link href="/cadastro" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition">
              Começar Agora
            </Link>
            <p className="text-sm text-gray-400">Sem cartão de crédito necessário</p>
          </div>
        </div>
      </div>
    </div>
  );
}