"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Edit, Plus, Trash, Eye } from "lucide-react";
import Link from "next/link";
import { mockPrizes } from "@/data/mockRaffles";

export default function RafflesPage() {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight">Sorteios</h1>
                    <p className="text-zinc-500 font-medium">Gerencie seus sorteios ativos e encerrados.</p>
                </div>
                <Link href="/dashboard/raffles/new">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-wider">
                        <Plus className="mr-2 h-4 w-4" /> Novo Sorteio
                    </Button>
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Todos os Sorteios</CardTitle>
                    <CardDescription>
                        Lista de todos os sorteios cadastrados no sistema.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="rounded-md border border-zinc-200 dark:border-zinc-800">
                        <div className="w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm">
                                <thead className="[&_tr]:border-b border-zinc-200 dark:border-zinc-800">
                                    <tr className="border-b transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50 data-[state=selected]:bg-zinc-100 dark:data-[state=selected]:bg-zinc-800">
                                        <th className="h-12 px-4 text-left align-middle font-bold text-zinc-500 uppercase">
                                            Prêmio
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-bold text-zinc-500 uppercase">
                                            Status
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-bold text-zinc-500 uppercase">
                                            Tickets
                                        </th>
                                        <th className="h-12 px-4 text-left align-middle font-bold text-zinc-500 uppercase">
                                            Preço
                                        </th>
                                        <th className="h-12 px-4 text-right align-middle font-bold text-zinc-500 uppercase">
                                            Ações
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    {mockPrizes.map((prize) => (
                                        <tr key={prize.id} className="border-b border-zinc-200 dark:border-zinc-800 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50">
                                            <td className="p-4 align-middle">
                                                <div className="font-bold">{prize.title}</div>
                                                <div className="text-xs text-zinc-500 line-clamp-1">{prize.description}</div>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <Badge className="bg-success text-success-foreground font-bold hover:bg-success/90">
                                                    Ativo
                                                </Badge>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <div className="text-xs">
                                                    <span className="font-bold text-zinc-900 dark:text-zinc-50">{prize.soldTickets}</span> / {prize.totalTickets}
                                                </div>
                                                <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5 mt-1 border border-zinc-300 dark:border-zinc-700">
                                                    <div className="bg-primary h-1.5 rounded-full" style={{ width: `${(prize.soldTickets / prize.totalTickets) * 100}%` }}></div>
                                                </div>
                                            </td>
                                            <td className="p-4 align-middle font-black">
                                                {prize.price}
                                            </td>
                                            <td className="p-4 align-middle text-right">
                                                <div className="flex justify-end gap-2">
                                                    <Link href={`/raffle/${prize.id}`}>
                                                        <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-primary">
                                                            <Eye className="h-4 w-4" />
                                                            <span className="sr-only">Ver</span>
                                                        </Button>
                                                    </Link>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-50">
                                                        <Edit className="h-4 w-4" />
                                                        <span className="sr-only">Editar</span>
                                                    </Button>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30">
                                                        <Trash className="h-4 w-4" />
                                                        <span className="sr-only">Excluir</span>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
