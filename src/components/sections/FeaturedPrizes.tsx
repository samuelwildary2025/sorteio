"use client";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Clock, Ticket, Trophy } from "lucide-react"
import Link from "next/link"
import { mockPrizes as prizes } from "@/data/mockRaffles"

export function FeaturedPrizes() {
    return (
        <section id="prizes" className="py-16 md:py-24 container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
                <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 text-sm uppercase tracking-widest font-bold">
                    Sorteios Ativos
                </Badge>
                <h2 className="text-3xl font-black tracking-tighter sm:text-5xl uppercase">
                    Escolha seu <span className="text-primary underline decoration-wavy underline-offset-8">Prêmio</span>
                </h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {prizes.map((prize) => (
                    <Link key={prize.id} href={`/raffle/${prize.id}`} className="block h-full">
                        <Card className="group overflow-hidden flex flex-col h-full border-2 border-transparent hover:border-primary transition-all duration-300 shadow-lg hover:shadow-xl rounded-2xl bg-white dark:bg-zinc-900 ring-1 ring-black/5 cursor-pointer">
                            <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex flex-col justify-end p-6">
                                    <h3 className="font-black text-2xl text-white uppercase italic tracking-tighter shadow-black drop-shadow-lg leading-none mb-1">{prize.title}</h3>
                                    <p className="text-white/80 text-xs font-medium uppercase tracking-wide">{prize.description}</p>
                                </div>

                                {/* Image Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center text-zinc-300 dark:text-zinc-600 group-hover:scale-105 transition-transform duration-700 font-black text-4xl opacity-20">
                                    IMG
                                </div>

                                <div className="absolute top-3 right-3 z-20 flex gap-2">
                                    {prize.tags.map(tag => (
                                        <Badge key={tag} className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-sm">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <CardContent className="p-6 flex-1 space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-bold uppercase tracking-wide text-zinc-500">
                                        <span className="flex items-center gap-1">
                                            <Ticket className="h-3 w-3 text-primary" /> Vendidos
                                        </span>
                                        <span className="text-primary">{Math.round((prize.soldTickets / prize.totalTickets) * 100)}%</span>
                                    </div>
                                    <div className="h-4 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-200 dark:border-zinc-700">
                                        <div
                                            className="h-full bg-gradient-to-r from-primary to-yellow-500 relative"
                                            style={{ width: `${(prize.soldTickets / prize.totalTickets) * 100}%` }}
                                        >
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.2)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.2)_50%,rgba(255,255,255,0.2)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem] opacity-50"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center p-3 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-700">
                                    <div className="text-xs font-bold text-zinc-500 uppercase flex items-center gap-1">
                                        <Clock className="h-3 w-3" /> Sorteio em {prize.endsIn}
                                    </div>
                                    <div className="text-right">
                                        <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Por apenas</span>
                                        <span className="text-2xl font-black text-success tracking-tight">{prize.price}</span>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="p-6 pt-0">
                                <Button className="w-full h-14 bg-success hover:bg-success/90 text-white font-black uppercase tracking-wider rounded-xl shadow-lg hover:shadow-success/25 hover:-translate-y-1 transition-all text-lg">
                                    Comprar Agora
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Button variant="outline" size="lg" className="border-2 border-zinc-200 dark:border-zinc-800 hover:border-primary text-zinc-600 dark:text-zinc-400 hover:text-primary font-bold uppercase rounded-full px-10 h-12 transition-all">
                    Ver Todos os Sorteios <Trophy className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </section>
    )
}
