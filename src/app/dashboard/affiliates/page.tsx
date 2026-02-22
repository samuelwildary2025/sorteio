import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import prisma from "@/lib/prisma";
import AffiliateListClient from "./AffiliateListClient";

export const dynamic = "force-dynamic";

export default async function AffiliatesListPage() {
    // Fetch real affiliates from the database
    const affiliates = await prisma.affiliate.findMany({
        include: {
            raffle: true,
        },
        orderBy: {
            joinDate: 'desc',
        }
    });

    // We must format Decimal values to numbers to prevent serialization errors when passing to Client Components
    const formattedAffiliates = affiliates.map((af: any) => ({
        id: af.id,
        name: af.name,
        cpf: af.cpf,
        commissionPercentage: Number(af.commissionPercentage),
        ticketsSold: af.ticketsSold,
        revenueGenerated: Number(af.revenueGenerated),
        joinDate: af.joinDate,
        raffle: af.raffle ? {
            id: af.raffle.id,
            title: af.raffle.title,
        } : null,
    }));

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

            <AffiliateListClient affiliates={formattedAffiliates} />
        </div>
    );
}
