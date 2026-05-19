"use client";

export default function AdminDashboard() {
  const stats = [
    { label: "Total de Salões", value: "24", color: "bg-blue-100 text-blue-600" },
    { label: "Salões Ativos", value: "18", color: "bg-green-100 text-green-600" },
    { label: "Receita Mês", value: "R$ 8.640", color: "bg-purple-100 text-purple-600" },
    { label: "Novos Salões", value: "6", color: "bg-amber-100 text-amber-600" },
  ];

  const saloes = [
    { id: 1, nome: "Studio Priscila", plano: "ACTIVE", clientes: 324, receita: "R$ 97" },
    { id: 2, nome: "Beauty Pro", plano: "ACTIVE", clientes: 156, receita: "R$ 97" },
    { id: 3, nome: "Salão Elegância", plano: "TRIAL", clientes: 45, receita: "R$ 0" },
    { id: 4, nome: "Beleza & Cia", plano: "ACTIVE", clientes: 289, receita: "R$ 97" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">{stat.label}</p>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Salões Table */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Salões Cadastrados</h3>
        </div>
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Nome</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Plano</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Clientes</th>
              <th className="text-left py-4 px-6 text-sm font-semibold text-gray-900">Receita</th>
            </tr>
          </thead>
          <tbody>
            {saloes.map((salon) => (
              <tr key={salon.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900 font-medium">{salon.nome}</td>
                <td className="py-4 px-6 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    salon.plano === "ACTIVE"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {salon.plano}
                  </span>
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">{salon.clientes}</td>
                <td className="py-4 px-6 text-sm font-semibold text-gray-900">{salon.receita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}