import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Plus } from "lucide-react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import RaffleListClient from "./RaffleListClient";

export const dynamic = "force-dynamic";

export default async function RafflesPage() {
    const prizes = await prisma.prize.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formattedPrizes = prizes.map(p => ({
        id: p.id,
        title: p.title,
        description: p.description,
        totalTickets: p.totalTickets,
        soldTickets: p.soldTickets,
        price: Number(p.price),
        status: p.status
    }));

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
                    <RaffleListClient raffles={formattedPrizes} />
                </CardContent>
            </Card>
        </div>
    );
}
