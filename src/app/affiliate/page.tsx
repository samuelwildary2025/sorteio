export const dynamic = "force-dynamic";

import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import LoginForm from "./LoginForm";
import DashboardClient from "./DashboardClient";

export const metadata = {
    title: "Área do Afiliado | PIX Regional",
    description: "Acompanhe suas vendas e lucros em tempo real.",
};

export default async function AffiliatePage() {
    const session = await getSession();

    if (!session?.affiliateId) {
        return <LoginForm />;
    }

    const affiliate = await prisma.affiliate.findUnique({
        where: { id: session.affiliateId },
        include: {
            raffle: true,
        },
    });

    if (!affiliate) {
        // Obsolete or invalid session
        return <LoginForm />;
    }

    return <DashboardClient affiliate={affiliate} />;
}
