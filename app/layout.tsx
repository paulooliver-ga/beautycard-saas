export default async function SalonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="bg-slate-800 border-b border-purple-500 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">BeautyCard</h1>
            <p className="text-sm text-gray-400">Seu salão</p>
          </div>
          <form action="/api/auth/logout" method="POST">
            <button type="submit" className="text-gray-400 hover:text-white">
              Sair
            </button>
          </form>
        </div>
      </header>
      <main className="max-w-4xl mx-auto p-4">
        {children}
      </main>
    </div>
  );
}