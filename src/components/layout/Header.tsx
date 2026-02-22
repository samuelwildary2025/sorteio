"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-primary text-primary-foreground shadow-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    {/* Mobile Menu Trigger */}
                    <Button variant="ghost" size="icon" className="md:hidden hover:bg-black/10 hover:text-black">
                        <Menu className="h-6 w-6" />
                    </Button>

                    <Link href="/" className="flex items-center space-x-2">
                        <span className="text-2xl font-black tracking-tighter uppercase italic">
                            Pix do <span className="text-white drop-shadow-md">eBook</span>
                        </span>
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wide">
                    <Link href="#how-it-works" className="transition-colors hover:text-white hover:underline underline-offset-4">
                        Como Funciona
                    </Link>
                    <Link href="#prizes" className="transition-colors hover:text-white hover:underline underline-offset-4">
                        Prêmios
                    </Link>
                    <Link href="#winners" className="transition-colors hover:text-white hover:underline underline-offset-4">
                        Ganhadores
                    </Link>
                    <Link href="#faq" className="transition-colors hover:text-white hover:underline underline-offset-4">
                        Ajuda
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/login" className="text-sm font-bold hover:underline hidden sm:block">
                        Entrar
                    </Link>
                    <Button variant="secondary" className="font-bold rounded-full px-6 shadow-lg hover:bg-black/80 hover:scale-105 transition-all">
                        Participe Agora
                    </Button>
                </div>
            </div>
        </header>
    )
}
