import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Ticket, Users, DollarSign, Activity } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-black uppercase tracking-tight">Visão Geral</h1>
                <p className="text-zinc-500 font-medium">Bem-vindo ao painel de administração da PixRegional.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-bold uppercase text-zinc-500">
                            Vendas Totais
                        </CardTitle>
                        <DollarSign className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-black">R$ 45.231,89</div>
                        <p className="text-xs text-success font-bold mt-1">
                            +20.1% do último mês
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-bold uppercase text-zinc-500">
                            Tickets Vendidos
                        </CardTitle>
                        <Ticket className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-black">+2350</div>
                        <p className="text-xs text-success font-bold mt-1">
                            +180 essa semana
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-bold uppercase text-zinc-500">
                            Sorteios Ativos
                        </CardTitle>
                        <Activity className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-black">3</div>
                        <p className="text-xs text-zinc-500 font-bold mt-1">
                            1 finalizando hoje
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <CardTitle className="text-sm font-bold uppercase text-zinc-500">
                            Novos Clientes
                        </CardTitle>
                        <Users className="h-4 w-4 text-zinc-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-black">+573</div>
                        <p className="text-xs text-success font-bold mt-1">
                            +201 desde ontem
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mt-8">
                <Card className="col-span-4 h-[400px] flex items-center justify-center bg-zinc-50 dark:bg-zinc-900 border-dashed">
                    <p className="text-zinc-500 font-medium">Gráfico de Vendas Entrará Aqui</p>
                </Card>
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Vendas Recentes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-bold leading-none">Cliente {i}</p>
                                        <p className="text-sm text-zinc-500">
                                            comprou 10 números em iPhone 16
                                        </p>
                                    </div>
                                    <div className="ml-auto font-black text-success">
                                        +R$ 5,00
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
