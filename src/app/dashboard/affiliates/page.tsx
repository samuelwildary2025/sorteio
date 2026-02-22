"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Copy, ExternalLink, MoreVertical } from "lucide-react";
import Link from "next/link";
import { mockAffiliates, mockPrizes } from "@/data/mockRaffles";

export default function AffiliatesListPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-black tracking-tight uppercase">Afiliados</h1>
                    <p className="text-muted-foreground mt-1">Gerencie seus parceiros de vendas e comissões.</p>
                </div>
                <Link href="/dashboard/affiliates/new">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold shadow-sm">
                        <Plus className="mr-2 h-4 w-4" /> Novo Afiliado
                    </Button>
                </Link>
            </div>

            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 font-medium border-b border-zinc-200 dark:border-zinc-800">
                            <tr>
                                <th className="px-6 py-4">Afiliado</th>
                                <th className="px-6 py-4">Campanha / Sorteio</th>
                                <th className="px-6 py-4">Comissão</th>
                                <th className="px-6 py-4">Desempenho</th>
                                <th className="px-6 py-4 text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                            {mockAffiliates.map((affiliate) => {
                                const prize = mockPrizes.find(p => p.id === affiliate.raffleId);

                                return (
                                    <tr key={affiliate.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                                    {affiliate.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-bold text-zinc-900 dark:text-zinc-100">{affiliate.name}</div>
                                                    <div className="text-xs text-muted-foreground">ID: {affiliate.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                                {prize?.title || "Sorteio Removido"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                                                {affiliate.commissionPercentage}%
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="space-y-1">
                                                <div className="flex justify-between text-xs">
                                                    <span className="text-muted-foreground">Vendas:</span>
                                                    <span className="font-bold">{affiliate.ticketsSold} cotas</span>
                                                </div>
                                                <div className="flex justify-between text-xs">
                                                    <span className="text-muted-foreground">Receita:</span>
                                                    <span className="font-bold text-success">
                                                        R$ {affiliate.revenueGenerated.toFixed(2).replace('.', ',')}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-500" title="Copiar Link de Afiliado">
                                                    <Copy className="h-4 w-4" />
                                                </Button>
                                                <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-500">
                                                    <MoreVertical className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}

                            {mockAffiliates.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                                        <Users className="mx-auto h-8 w-8 mb-3 opacity-20" />
                                        <p>Nenhum afiliado cadastrado ainda.</p>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
