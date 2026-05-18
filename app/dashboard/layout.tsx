"use client";
import Link from "next/link";
import { BarChart3, Users, Gift, LogOut } from "lucide-react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">BeautyCard</h1>
        
        <nav className="space-y-2">
          <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
            <BarChart3 size={20} />
            <span>Dashboard</span>
          </Link>
          <Link href="/dashboard/clientes" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
            <Users size={20} />
            <span>Clientes</span>
          </Link>
          <Link href="/dashboard/recompensas" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800">
            <Gift size={20} />
            <span>Recompensas</span>
          </Link>
        </nav>

        <div className="absolute bottom-6">
          <form action="/api/auth/logout" method="POST">
            <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-red-400 w-full">
              <LogOut size={20} />
              <span>Sair</span>
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 p-6">
          <h2 className="text-2xl font-bold text-gray-900">Seu Salão</h2>
        </header>
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}