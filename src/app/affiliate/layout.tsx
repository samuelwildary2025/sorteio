import Link from "next/link";
import { Copyleft as LayoutDashboard, LogOut, Wallet } from "lucide-react";

export default function AffiliateLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
            {/* Sidebar Exclusiva do Afiliado */}
            <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col hidden md:flex">
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                    <Link href="/affiliate" className="flex items-center gap-2 text-primary">
                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-black text-black">
                            AF
                        </div>
                        <span className="font-black text-xl tracking-tight uppercase">Parceiros</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1 text-sm font-medium">
                    <Link
                        href="/affiliate"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                    >
                        <LayoutDashboard className="h-4 w-4" />
                        Meu Painel
                    </Link>
                    <Link
                        href="#"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50 opacity-60 cursor-not-allowed"
                        title="Em breve"
                    >
                        <Wallet className="h-4 w-4" />
                        Saques (Em breve)
                    </Link>
                </nav>

                <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                        <LogOut className="h-4 w-4" />
                        Sair da Conta
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Mobile Header */}
                <header className="h-16 md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between px-4">
                    <Link href="/affiliate" className="flex items-center gap-2 text-primary">
                        <span className="font-black text-xl tracking-tight uppercase">Parceiros</span>
                    </Link>
                    <Link href="/" className="text-red-500 font-bold text-sm">Sair</Link>
                </header>

                <div className="flex-1 overflow-auto p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
