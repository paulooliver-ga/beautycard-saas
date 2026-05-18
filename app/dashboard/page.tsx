"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, Users, Gift, DollarSign } from "lucide-react";

const chartData = [
  { name: "Jan", visitas: 40, receita: 2400 },
  { name: "Fev", visitas: 55, receita: 2210 },
  { name: "Mar", visitas: 45, receita: 2290 },
  { name: "Abr", visitas: 60, receita: 2000 },
  { name: "Mai", visitas: 75, receita: 2181 },
  { name: "Jun", visitas: 90, receita: 2500 },
];

const stats = [
  { icon: Users, label: "Clientes Ativos", value: "324", color: "bg-blue-100 text-blue-600" },
  { icon: Gift, label: "Recompensas Utilizadas", value: "87", color: "bg-purple-100 text-purple-600" },
  { icon: TrendingUp, label: "Taxa de Retenção", value: "94%", color: "bg-green-100 text-green-600" },
  { icon: DollarSign, label: "Receita Mês", value: "R$ 12.450", color: "bg-amber-100 text-amber-600" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Visitas por Mês</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="visitas" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Receita por Mês</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="receita" stroke="#06b6d4" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Clients */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Clientes Recentes</h3>
        <table className="w-full">
          <thead className="border-b border-gray-200">
            <tr>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Nome</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Telefone</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Visitas</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Maria Silva", phone: "(61) 99999-0001", visits: 5, status: "Ativo" },
              { name: "Ana Costa", phone: "(61) 99999-0002", visits: 12, status: "Ativo" },
              { name: "Beatriz Santos", phone: "(61) 99999-0003", visits: 3, status: "Inativo" },
            ].map((client, i) => (
              <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-900">{client.name}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{client.phone}</td>
                <td className="py-3 px-4 text-sm text-gray-600">{client.visits}</td>
                <td className="py-3 px-4 text-sm">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${client.status === "Ativo" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                    {client.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}