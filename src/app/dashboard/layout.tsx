import Link from "next/link";
import { Copyleft as LayoutDashboard, Ticket, Settings, LogOut, Users } from "lucide-react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 flex flex-col hidden md:flex">
                <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-primary flex items-center justify-center font-black text-black">
                            PR
                        </div>
                        <span className="font-black text-xl tracking-tight uppercase">PixRegional</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1 text-sm font-medium">
                    <Link
                        href="/dashboard"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50"
                    >
                        <LayoutDashboard className="h-4 w-4" />
                        Visão Geral
                    </Link>
                    <Link
                        href="/dashboard/raffles"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50"
                    >
                        <Ticket className="h-4 w-4" />
                        Sorteios
                    </Link>
                    <Link
                        href="/dashboard/affiliates"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50"
                    >
                        <Users className="h-4 w-4" />
                        Afiliados
                    </Link>
                    <Link
                        href="/dashboard/settings"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-zinc-50"
                    >
                        <Settings className="h-4 w-4" />
                        Configurações
                    </Link>
                </nav>

                <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                        <LogOut className="h-4 w-4" />
                        Sair (Voltar ao Site)
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <header className="h-16 md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center px-4">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="font-black text-xl tracking-tight uppercase">PixRegional</span>
                    </Link>
                </header>

                <div className="flex-1 overflow-auto p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
