import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import RaffleClientView from "./RaffleClientView";

export default async function RaffleDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = await params;
    const prizeId = parseInt(resolvedParams.id, 10);

    if (isNaN(prizeId)) {
        notFound();
    }

    const prize = await prisma.prize.findUnique({
        where: { id: prizeId }
    });

    if (!prize) {
        notFound();
    }

    const formattedPrize = {
        id: prize.id,
        title: prize.title,
        description: prize.description,
        price: Number(prize.price),
        totalTickets: prize.totalTickets,
        soldTickets: prize.soldTickets,
    };

    return <RaffleClientView prize={formattedPrize} />;
}
