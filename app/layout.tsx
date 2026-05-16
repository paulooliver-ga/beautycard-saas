import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

export default async function SalonLayout({
  children,
  params,
}: any) {
  const { slug } = await params;
  const session = await getSession();
  
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.userId },
    include: { salon: true },
  });

  if (!user || user.salon.slug !== slug) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <header className="bg-slate-800 border-b border-purple-500 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-white">{user.salon.name}</h1>
            <p className="text-sm text-gray-400">{user.role === "ADMIN" ? "Admin" : "Cliente"}</p>
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