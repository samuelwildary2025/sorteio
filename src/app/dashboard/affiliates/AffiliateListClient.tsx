"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, MoreVertical, Check, ExternalLink } from "lucide-react";

type Affiliate = {
    id: string;
    name: string;
    cpf: string;
    commissionPercentage: number;
    ticketsSold: number;
    revenueGenerated: number;
    joinDate: Date;
    raffle?: {
        id: number;
        title: string;
    } | null;
};

export default function AffiliateListClient({ affiliates }: { affiliates: Affiliate[] }) {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopyLink = (affiliateId: string, raffleId?: number) => {
        if (!raffleId) return;
        const baseUrl = typeof window !== "undefined" ? window.location.origin : "https://pixregional.com.br";
        const link = `${baseUrl}/raffle/${raffleId}?ref=${affiliateId}`;

        navigator.clipboard.writeText(link);
        setCopiedId(affiliateId);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-zinc-50 dark:bg-zinc-900/50 text-zinc-500 dark:text-zinc-400 font-medium border-b border-zinc-200 dark:border-zinc-800">
                        <tr>
                            <th className="px-6 py-4">Afiliado</th>
                            <th className="px-6 py-4">Sorteio Vinculado</th>
                            <th className="px-6 py-4">Comissão</th>
                            <th className="px-6 py-4">Desempenho</th>
                            <th className="px-6 py-4 text-right">Ações</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                        {affiliates.map((affiliate) => (
                            <tr key={affiliate.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                                            {affiliate.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="font-bold text-zinc-900 dark:text-zinc-100">{affiliate.name}</div>
                                            <div className="text-xs text-muted-foreground font-mono mt-0.5">CPF: {affiliate.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                                        {affiliate.raffle ? `#${affiliate.raffle.id} - ${affiliate.raffle.title}` : "Sorteio Removido"}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <Badge variant="outline" className="bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                                        {affiliate.commissionPercentage}%
                                    </Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="space-y-1">
                                        <div className="flex justify-between text-xs gap-4">
                                            <span className="text-muted-foreground">Cotas:</span>
                                            <span className="font-bold text-zinc-700 dark:text-zinc-300">{affiliate.ticketsSold} un.</span>
                                        </div>
                                        <div className="flex justify-between text-xs gap-4">
                                            <span className="text-muted-foreground">Receita:</span>
                                            <span className="font-bold text-success">
                                                R$ {Number(affiliate.revenueGenerated).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2">
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="h-8 w-8 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                                            title="Copiar Link de Afiliado"
                                            onClick={() => handleCopyLink(affiliate.id, affiliate.raffle?.id)}
                                            disabled={!affiliate.raffle}
                                        >
                                            {copiedId === affiliate.id ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
                                        </Button>
                                        <Button size="icon" variant="ghost" className="h-8 w-8 text-zinc-500">
                                            <MoreVertical className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}

                        {affiliates.length === 0 && (
                            <tr>
                                <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground">
                                    <span className="block text-4xl mb-3">🤝</span>
                                    <p className="font-medium">Nenhum afiliado cadastrado ainda.</p>
                                    <p className="text-sm mt-1 opacity-70">Cadastre seu primeiro parceiro para começar a gerar vendas comissionadas.</p>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
