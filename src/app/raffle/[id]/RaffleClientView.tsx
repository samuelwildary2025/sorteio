"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, ShoppingCart, ShieldCheck, Trophy } from "lucide-react";
import Link from "next/link";

type Prize = {
    id: number;
    title: string;
    description: string;
    price: number;
    totalTickets: number;
    soldTickets: number;
};

export default function RaffleClientView({ prize }: { prize: Prize }) {
    const [selectedPackage, setSelectedPackage] = useState<number>(2); // Default to index 1 (Popular)

    const basePrice = prize.price;

    const ebookPackages = [
        {
            id: 1,
            name: "Pacote Lite",
            ebooks: 1,
            tickets: 10,
            price: basePrice * 10,
            popular: false,
            color: "bg-zinc-100 dark:bg-zinc-800",
            border: "border-zinc-200 dark:border-zinc-700"
        },
        {
            id: 2,
            name: "Pacote Gold",
            ebooks: 5,
            tickets: 50,
            price: (basePrice * 50) * 0.9, // 10% discount
            popular: true,
            tag: "MAIS VENDIDO",
            color: "bg-yellow-50 dark:bg-yellow-900/10",
            border: "border-yellow-400 dark:border-yellow-600"
        },
        {
            id: 3,
            name: "Pacote Premium",
            ebooks: 10,
            tickets: 100,
            price: (basePrice * 100) * 0.85, // 15% discount
            popular: false,
            tag: "MELHOR CUSTO",
            color: "bg-zinc-100 dark:bg-zinc-800",
            border: "border-zinc-200 dark:border-zinc-700"
        },
        {
            id: 4,
            name: "Pacote VIP",
            ebooks: 50,
            tickets: 500,
            price: (basePrice * 500) * 0.8, // 20% discount
            popular: false,
            color: "bg-zinc-100 dark:bg-zinc-800",
            border: "border-zinc-200 dark:border-zinc-700"
        }
    ];

    const currentPackage = ebookPackages.find(p => p.id === selectedPackage) || ebookPackages[0];

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pb-24 md:pb-10">

            {/* Top Navigation Bar */}
            <div className="sticky top-16 z-40 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
                <div className="container mx-auto px-4 h-14 flex items-center justify-between">
                    <Link href="/" className="flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                    </Link>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        <Clock className="h-3 w-3" /> Sorteio em breve
                    </div>
                </div>
            </div>

            <main className="container mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

                    {/* Left Column: Media & Details */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                            {/* Simulated Image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                                <span className="text-white/20 font-black text-6xl md:text-8xl select-none">IMG</span>
                            </div>
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-primary text-primary-foreground hover:bg-primary font-bold px-3 py-1 shadow-md">
                                    Destaque
                                </Badge>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 md:p-10 pt-20">
                                <h1 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-2 drop-shadow-md">
                                    {prize.title}
                                </h1>
                                <p className="text-white/80 font-medium md:text-lg max-w-xl">
                                    {prize.description}
                                </p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-100 dark:border-zinc-800 space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-bold flex items-center gap-2">
                                    <Trophy className="h-5 w-5 text-primary" /> Detalhes do Prêmio
                                </h2>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-4 text-center">
                                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                                    <span className="block text-3xl font-black text-zinc-900 dark:text-zinc-100">1º</span>
                                    <span className="text-xs uppercase font-bold text-muted-foreground">Prêmio Principal</span>
                                </div>
                                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                                    <span className="block text-3xl font-black text-zinc-900 dark:text-zinc-100">Pix</span>
                                    <span className="text-xs uppercase font-bold text-muted-foreground">Pagamento Instantâneo</span>
                                </div>
                                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800">
                                    <span className="block text-3xl font-black text-zinc-900 dark:text-zinc-100">BR</span>
                                    <span className="text-xs uppercase font-bold text-muted-foreground">Válido em todo Brasil</span>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-900/10 rounded-xl">
                                <ShieldCheck className="h-6 w-6 text-blue-600 dark:text-blue-400 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-blue-900 dark:text-blue-200">Garantia de Sorteio</h4>
                                    <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                                        Este sorteio é regulamentado e auditado. O vencedor é definido pela Loteria Federal na data estipulada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Purchase Console (Sticky Summary) */}
                    <div className="lg:col-span-5 relative">
                        <div className="sticky top-32 space-y-6">

                            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-xl shadow-black/5 border border-zinc-100 dark:border-zinc-800 overflow-hidden">
                                <div className="bg-primary p-4 text-center">
                                    <span className="font-black text-primary-foreground uppercase tracking-widest text-sm">
                                        ⚡️ Escolha seu Pacote
                                    </span>
                                </div>

                                <div className="p-6 md:p-8 space-y-6">

                                    <div className="space-y-3">
                                        {ebookPackages.map((pkg) => (
                                            <div
                                                key={pkg.id}
                                                onClick={() => setSelectedPackage(pkg.id)}
                                                className={`relative cursor-pointer rounded-xl border-2 p-4 transition-all ${selectedPackage === pkg.id
                                                    ? `${pkg.border} ${pkg.color} ring-1 ring-primary/50`
                                                    : "border-zinc-100 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 bg-white dark:bg-zinc-900"
                                                    }`}
                                            >
                                                {pkg.tag && (
                                                    <div className="absolute -top-3 right-4">
                                                        <span className="bg-primary text-primary-foreground text-[10px] font-bold px-2 py-1 rounded-full shadow-sm uppercase">
                                                            {pkg.tag}
                                                        </span>
                                                    </div>
                                                )}

                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <h3 className="font-black text-lg uppercase italic">{pkg.name}</h3>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <Badge variant="secondary" className="text-xs font-bold">
                                                                {pkg.ebooks} eBook{pkg.ebooks > 1 ? 's' : ''}
                                                            </Badge>
                                                            <span className="text-xs text-muted-foreground">+</span>
                                                            <Badge className="bg-success hover:bg-success text-white font-bold">
                                                                {pkg.tickets} Cotas
                                                            </Badge>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <span className="block text-xl font-black text-zinc-900 dark:text-zinc-100">
                                                            R$ {pkg.price.toFixed(2).replace('.', ',')}
                                                        </span>
                                                    </div>
                                                </div>

                                                {selectedPackage === pkg.id && (
                                                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-1.5 h-12 bg-primary rounded-r-full"></div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6 border-t border-dashed border-zinc-200 dark:border-zinc-800 space-y-4">
                                        <div className="flex justify-between items-end">
                                            <span className="text-muted-foreground font-medium">Você receberá:</span>
                                            <div className="text-right">
                                                <span className="block text-sm font-bold text-zinc-700 dark:text-zinc-300">
                                                    {currentPackage.ebooks} Livros Digitais
                                                </span>
                                                <span className="text-success font-black text-lg uppercase">
                                                    + {currentPackage.tickets} Números da Sorte
                                                </span>
                                            </div>
                                        </div>

                                        <Button className="w-full h-16 text-xl uppercase font-black tracking-wider bg-success hover:bg-success/90 text-white rounded-xl shadow-lg shadow-success/20 hover:scale-[1.02] transition-transform animate-pulse">
                                            <ShoppingCart className="mr-2 h-6 w-6" />
                                            Pagar R$ {currentPackage.price.toFixed(2).replace('.', ',')}
                                        </Button>

                                        <p className="text-center text-xs text-muted-foreground">
                                            Entrega imediata dos eBooks e números via email.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-4 text-center">
                                <p className="text-sm font-bold text-zinc-500">
                                    🏆 Mais de <span className="text-zinc-900 dark:text-zinc-100">1.200</span> ganhadores semanais
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
