"use client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  function handleLogout() {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    setTimeout(() => router.push("/login"), 100);
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 text-red-400 w-full transition"
    >
      <LogOut size={20} />
      <span>Sair</span>
    </button>
  );
}