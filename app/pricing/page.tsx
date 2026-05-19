"use client";
import Link from "next/link";
import { Check } from "lucide-react";

export default function PricingPage() {
  const planos = [
    {
      nome: "TRIAL",
      preco: "Grátis",
      periodo: "14 dias",
      descricao: "Teste completo sem cartão",
      features: [
        "Até 100 clientes",
        "Cartão fidelidade digital",
        "QR Codes",
        "Recompensas básicas",
        "Suporte por email",
      ],
      cta: "Começar Grátis",
      destacado: false,
    },
    {
      nome: "STARTER",
      preco: "R$ 97",
      periodo: "/mês",
      descricao: "Perfeito para pequenos salões",
      features: [
        "Até 500 clientes",
        "Cartão fidelidade digital",
        "QR Codes ilimitados",
        "Recompensas avançadas",
        "Promoções semanais",
        "Notificações WhatsApp",
        "Suporte por chat",
      ],
      cta: "Escolher Plano",
      destacado: false,
    },
    {
      nome: "PROFESSIONAL",
      preco: "R$ 197",
      periodo: "/mês",
      descricao: "Para salões em crescimento",
      features: [
        "Clientes ilimitados",
        "Cartão fidelidade digital",
        "QR Codes ilimitados",
        "Recompensas personalizadas",
        "Promoções ilimitadas",
        "Notificações WhatsApp",
        "Relatórios avançados",
        "Analytics detalhado",
        "Suporte prioritário",
        "API de integração",
      ],
      cta: "Escolher Plano",
      destacado: true,
    },
    {
      nome: "ENTERPRISE",
      preco: "Personalizado",
      periodo: "Consulte",
      descricao: "Para grandes redes e franquias",
      features: [
        "Tudo do Professional +",
        "Multi-unidade",
        "Gerenciamento centralizado",
        "Treinamento incluído",
        "Suporte 24/7",
        "Personalizações ilimitadas",
        "Integração com sistemas",
        "Consultoria estratégica",
      ],
      cta: "Solicitar Demo",
      destacado: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900 border-b border-purple-500 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">BeautyCard</h1>
          <Link href="/" className="text-gray-300 hover:text-white">
            ← Voltar
          </Link>
        </div>
      </header>

      {/* Hero */}
      <div className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Planos Simples e Transparentes</h2>
        <p className="text-gray-300 text-lg mb-12">
          Escolha o plano perfeito para seu salão de beleza
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {planos.map((plano, i) => (
            <div
              key={i}
              className={`rounded-lg p-8 transition transform hover:scale-105 ${
                plano.destacado
                  ? "bg-gradient-to-br from-purple-600 to-purple-800 border-2 border-purple-400 shadow-2xl scale-105"
                  : "bg-slate-800 border border-slate-700 shadow-lg"
              }`}
            >
              {plano.destacado && (
                <div className="bg-purple-400 text-purple-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MAIS POPULAR
                </div>
              )}

              <h3 className={`text-2xl font-bold mb-2 ${plano.destacado ? "text-white" : "text-purple-400"}`}>
                {plano.nome}
              </h3>
              <p className={`text-sm mb-4 ${plano.destacado ? "text-purple-100" : "text-gray-400"}`}>
                {plano.descricao}
              </p>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plano.destacado ? "text-white" : "text-white"}`}>
                  {plano.preco}
                </span>
                <span className={`text-sm ${plano.destacado ? "text-purple-100" : "text-gray-400"}`}>
                  {plano.periodo}
                </span>
              </div>

              <button
                className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plano.destacado
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                {plano.cta}
              </button>

              <div className="space-y-3">
                {plano.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <Check
                      size={20}
                      className={plano.destacado ? "text-white" : "text-green-400"}
                    />
                    <span
                      className={`text-sm ${
                        plano.destacado ? "text-white" : "text-gray-300"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h3 className="text-3xl font-bold text-white text-center mb-12">Dúvidas Frequentes</h3>

        <div className="space-y-6">
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-2">Posso mudar de plano depois?</h4>
            <p className="text-gray-300">
              Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-2">Há taxa de cancelamento?</h4>
            <p className="text-gray-300">
              Não! Você pode cancelar sua assinatura a qualquer momento sem multas.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-2">Como funciona o período de teste?</h4>
            <p className="text-gray-300">
              O plano TRIAL oferece 14 dias gratuitos com acesso completo. Sem necessidade de cartão de crédito.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-2">Vocês oferecem suporte?</h4>
            <p className="text-gray-300">
              Sim! Oferecemos suporte por email, chat e telefone dependendo do seu plano.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Pronto para começar?</h3>
          <p className="text-purple-100 mb-8">
            Teste grátis por 14 dias. Sem cartão de crédito necessário.
          </p>
          <Link
            href="/cadastro"
            className="inline-block bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Começar Agora
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>&copy; 2026 BeautyCard. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}