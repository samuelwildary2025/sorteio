"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Copy, TrendingUp, DollarSign, Ticket, ArrowUpRight } from "lucide-react";
import { mockAffiliates, mockPrizes } from "@/data/mockRaffles";
import { useState } from "react";

export default function AffiliateDashboardPage() {
    // Simulating "Carlos Eduardo" logging in
    const myAffiliateData = mockAffiliates[0];
    const myPrize = mockPrizes.find(p => p.id === myAffiliateData.raffleId);

    const [copied, setCopied] = useState(false);

    // Generates a mock URL based on the window origin if available, otherwise fallback
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://pixregional.com.br';
    const myLink = `${baseUrl}/raffle/${myPrize?.id}?ref=${myAffiliateData.id}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(myLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="max-w-5xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-black tracking-tight uppercase">
                    Olá, <span className="text-primary">{myAffiliateData.name.split(' ')[0]}</span>! 👋
                </h1>
                <p className="text-muted-foreground mt-1 text-lg">
                    Acompanhe suas vendas e lucros em tempo real.
                </p>
            </div>

            {/* Link de Divulgação */}
            <Card className="border-primary/20 bg-primary/5 shadow-sm overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10 blur-2xl"></div>
                <CardHeader className="pb-3">
                    <CardTitle className="text-xl flex items-center gap-2">
                        Seu Link de Divulgação
                        <Badge className="bg-success text-white shadow-sm font-bold text-xs uppercase animate-pulse">
                            Ativo
                        </Badge>
                    </CardTitle>
                    <CardDescription>
                        Compartilhe este link no seu WhatsApp, Instagram ou YouTube. Todas as compras feitas por ele geram comissão automática para você.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="bg-white dark:bg-black/40 border border-zinc-200 dark:border-zinc-800 p-4 rounded-xl flex-1 flex items-center shadow-inner overflow-hidden">
                            <code className="text-sm font-bold text-zinc-800 dark:text-zinc-200 truncate w-full">
                                {myLink}
                            </code>
                        </div>
                        <Button
                            onClick={handleCopy}
                            className={`h-auto py-4 px-8 font-black uppercase tracking-wider shadow-md transition-all ${copied ? "bg-success hover:bg-success text-white" : "bg-primary text-primary-foreground hover:bg-primary/90"
                                }`}
                        >
                            {copied ? "✓ Copiado!" : (
                                <>
                                    <Copy className="mr-2 h-4 w-4" />
                                    Copiar Link
                                </>
                            )}
                        </Button>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium border-t border-primary/10 pt-4">
                        <div className="bg-white/50 dark:bg-black/20 px-3 py-1.5 rounded-md border border-primary/20">
                            Sorteio Vinculado: <strong className="text-zinc-900 dark:text-zinc-100">{myPrize?.title}</strong>
                        </div>
                        <div className="bg-white/50 dark:bg-black/20 px-3 py-1.5 rounded-md border border-primary/20 text-success font-bold">
                            Sua Comissão: {myAffiliateData.commissionPercentage}%
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Métricas */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-success/20 shadow-sm relative overflow-hidden">
                    <div className="absolute -right-4 -top-4 opacity-5">
                        <DollarSign className="w-32 h-32" />
                    </div>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-bold uppercase text-muted-foreground">
                            Comissão Disponível
                        </CardTitle>
                        <DollarSign className="h-5 w-5 text-success" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black text-success tracking-tight">
                            R$ {myAffiliateData.revenueGenerated.toFixed(2).replace('.', ',')}
                        </div>
                        <p className="text-xs text-muted-foreground font-medium mt-1 flex items-center">
                            <TrendingUp className="h-3 w-3 mr-1 text-success" />
                            Pronto para saque
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-bold uppercase text-muted-foreground">
                            Cotas Vendidas
                        </CardTitle>
                        <Ticket className="h-5 w-5 text-zinc-400" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black tracking-tight text-zinc-900 dark:text-zinc-100">
                            {myAffiliateData.ticketsSold}
                        </div>
                        <p className="text-xs text-muted-foreground font-medium mt-1">
                            Através do seu link
                        </p>
                    </CardContent>
                </Card>

                <Card className="shadow-sm bg-zinc-900 text-zinc-50 dark:border-zinc-800">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-bold uppercase text-zinc-400">
                            Taxa de Conversão
                        </CardTitle>
                        <TrendingUp className="h-5 w-5 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-4xl font-black tracking-tight text-white focus-visible:">
                            4.8%
                        </div>
                        <p className="text-xs text-zinc-500 font-medium mt-1 hover:text-white transition-colors cursor-pointer flex items-center">
                            Ver dicas de venda <ArrowUpRight className="h-3 w-3 ml-1" />
                        </p>
                    </CardContent>
                </Card>
            </div>

            {/* Vendas Recentes */}
            <Card className="shadow-sm">
                <CardHeader>
                    <CardTitle className="text-lg uppercase font-black">Últimas Vendas</CardTitle>
                    <CardDescription>
                        Acompanhe quem comprou usando o seu link.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
                            <div>
                                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Cliente ••• 458</p>
                                <p className="text-xs text-muted-foreground">Comprou 50 cotas ({myPrize?.title})</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-black text-success">+ R$ 2,50</p>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold">Hoje, 14:32</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
                            <div>
                                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Cliente ••• 912</p>
                                <p className="text-xs text-muted-foreground">Comprou 100 cotas ({myPrize?.title})</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-black text-success">+ R$ 5,00</p>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold">Ontem, 21:15</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-lg border border-zinc-100 dark:border-zinc-800">
                            <div>
                                <p className="text-sm font-bold text-zinc-900 dark:text-zinc-100">Cliente ••• 221</p>
                                <p className="text-xs text-muted-foreground">Comprou 10 cotas ({myPrize?.title})</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-black text-success">+ R$ 0,50</p>
                                <p className="text-[10px] text-muted-foreground uppercase font-bold">20/03/2024</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}
