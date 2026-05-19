"use client";
import Link from "next/link";
import { Building2, Users, DollarSign, BarChart3, LogOut, Menu } from "lucide-react";
import { useState } from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { href: "/admin/dashboard", icon: BarChart3, label: "Dashboard" },
    { href: "/admin/saloes", icon: Building2, label: "Salões" },
    { href: "/admin/usuarios", icon: Users, label: "Usuários" },
    { href: "/admin/planos", icon: DollarSign, label: "Planos" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? "w-64" : "w-20"} bg-slate-900 text-white transition-all duration-300 flex flex-col`}>
        <div className="p-6 flex items-center justify-between">
          <h1 className={`font-bold text-xl ${!sidebarOpen && "hidden"}`}>BeautyCard Admin</h1>
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
          <button
            onClick={() => {
              document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
              window.location.href = "/admin/login";
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-red-400 w-full transition"
          >
            <LogOut size={20} />
            <span className={!sidebarOpen ? "hidden" : ""}>Sair</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Painel Super Admin</h2>
          <div className="text-right">
            <p className="text-sm text-gray-600">Super Admin</p>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}