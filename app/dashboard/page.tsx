"use client";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
        <form action="/api/auth/logout" method="POST">
          <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded">
            Sair
          </button>
        </form>
      </div>
    </div>
  );
}