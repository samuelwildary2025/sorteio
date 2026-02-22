"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Edit, Eye, Trash } from "lucide-react";
import Link from "next/link";

type Raffle = {
    id: number;
    title: string;
    description: string;
    totalTickets: number;
    soldTickets: number;
    price: number;
    status: string;
};

export default function RaffleListClient({ raffles }: { raffles: Raffle[] }) {
    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value);
    };

    return (
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
                        {raffles.map((prize) => (
                            <tr key={prize.id} className="border-b border-zinc-200 dark:border-zinc-800 transition-colors hover:bg-zinc-100/50 dark:hover:bg-zinc-800/50">
                                <td className="p-4 align-middle">
                                    <div className="font-bold">{prize.title}</div>
                                    <div className="text-xs text-zinc-500 line-clamp-1">{prize.description}</div>
                                </td>
                                <td className="p-4 align-middle">
                                    <Badge className={`${prize.status === 'active' ? 'bg-success text-success-foreground hover:bg-success/90' : prize.status === 'completed' ? 'bg-primary text-primary-foreground' : 'bg-zinc-300 text-zinc-800'} font-bold`}>
                                        {prize.status === 'active' ? 'Ativo' : prize.status === 'completed' ? 'Finalizado' : 'Rascunho'}
                                    </Badge>
                                </td>
                                <td className="p-4 align-middle">
                                    <div className="text-xs">
                                        <span className="font-bold text-zinc-900 dark:text-zinc-50">{prize.soldTickets}</span> / {prize.totalTickets}
                                    </div>
                                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 rounded-full h-1.5 mt-1 border border-zinc-300 dark:border-zinc-700">
                                        <div className="bg-primary h-1.5 rounded-full" style={{ width: `${Math.min((prize.soldTickets / prize.totalTickets) * 100, 100)}%` }}></div>
                                    </div>
                                </td>
                                <td className="p-4 align-middle font-black">
                                    {formatCurrency(prize.price)}
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
                        {raffles.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-8 text-center text-zinc-500">
                                    Nenhum sorteio cadastrado ainda. Clique em "Novo Sorteio" para começar.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
