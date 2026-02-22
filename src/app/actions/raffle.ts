"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createRaffle(prevState: any, formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const priceStr = formData.get("price") as string;
    const ticketsStr = formData.get("tickets") as string;
    const endDateStr = formData.get("endDate") as string;

    if (!title || !description || !priceStr || !ticketsStr || !endDateStr) {
        return { error: "Todos os campos são obrigatórios.", success: false };
    }

    try {
        const price = parseFloat(priceStr.replace(',', '.'));
        const totalTickets = parseInt(ticketsStr, 10);
        const endsIn = new Date(endDateStr);

        if (isNaN(price) || isNaN(totalTickets)) {
            return { error: "Valores numéricos inválidos.", success: false };
        }

        await prisma.prize.create({
            data: {
                title,
                description,
                price: price,
                totalTickets: totalTickets,
                endsIn: endsIn,
                status: "active",
            }
        });

        revalidatePath("/dashboard/raffles");
        revalidatePath("/dashboard/affiliates/new");

        return { error: "", success: true };
    } catch (error) {
        console.error("Create Raffle Error:", error);
        return { error: "Erro interno no servidor ao criar sorteio.", success: false };
    }
}
