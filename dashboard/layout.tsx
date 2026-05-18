"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BarChart3, Users, Gift, Settings, LogOut, Menu } from "lucide-react";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const router = useRouter();

  const menuItems = [
    { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
    { href: "/dashboard/clientes", icon: Users, label: "Clientes" },
    { href: "/dashboard/recompensas", icon: Gift, label: "Recompensas" },
    { href: "/dashboard/configuracoes", icon: Settings, label: "Configurações" },
  ];

  return (
    <div className="flex h-screen bg-slate-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-slate-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center justify-between">
          <h1 className={`font-bold text-xl ${!sidebarOpen && "hidden"}`}>BeautyCard</h1>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1 hover:bg-slate-800 rounded">
            <Menu size={20} />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition"
            >
              <item.icon size={20} />
              <span className={!sidebarOpen ? "hidden" : ""}>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-3 border-t border-slate-700">
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition text-red-400"
            >
              <LogOut size={20} />
              <span className={!sidebarOpen ? "hidden" : ""}>Sair</span>
            </button>
          </form>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white border-b border-slate-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-slate-900">Seu Salão</h2>
          <div className="text-right">
            <p className="text-sm text-slate-600">Admin</p>
          </div>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}