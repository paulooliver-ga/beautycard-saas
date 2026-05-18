"use client";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="w-64 bg-slate-900 text-white p-6">
        <h1 className="text-2xl font-bold mb-8">BeautyCard</h1>
        <nav className="space-y-4">
          <a href="/dashboard" className="block hover:bg-slate-800 p-3 rounded">Dashboard</a>
          <a href="/dashboard/clientes" className="block hover:bg-slate-800 p-3 rounded">Clientes</a>
        </nav>
      </div>
      <div className="flex-1 p-6">
        {children}
      </div>
    </div>
  );
}