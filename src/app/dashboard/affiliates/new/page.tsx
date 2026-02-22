import prisma from "@/lib/prisma";
import NewAffiliateForm from "./NewAffiliateForm";

export const dynamic = "force-dynamic";

export default async function NewAffiliatePage() {
    const prizes = await prisma.prize.findMany({
        select: {
            id: true,
            title: true,
            status: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    return <NewAffiliateForm prizes={prizes} />;
}
