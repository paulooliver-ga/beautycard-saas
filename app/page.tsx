export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold text-white mb-4">BeautyCard SaaS</h1>
        <p className="text-xl text-gray-300 mb-8">Cartão Fidelidade Digital para Salões de Beleza</p>
        <p className="text-lg text-gray-400 mb-12">R$ 97/mês - Comece seu teste gratuito</p>
        
        <div className="space-y-4">
          <a href="/cadastro" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition">
            Começar Agora
          </a>
          <p className="text-sm text-gray-400">Sem cartão de crédito necessário</p>
        </div>
      </div>
    </div>
  );
}