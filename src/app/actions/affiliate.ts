"use server";

import prisma from "@/lib/prisma";
import { createSession, endSession } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function loginAffiliate(prevState: any, formData: FormData) {
    const cpf = formData.get("cpf") as string;
    const password = formData.get("password") as string;

    if (!cpf || !password) {
        return { error: "CPF e Senha são obrigatórios.", success: false };
    }

    try {
        const affiliate = await prisma.affiliate.findUnique({
            where: { cpf: cpf.replace(/\D/g, '') }, // Store/search digits only
        });

        if (!affiliate) {
            return { error: "Credenciais inválidas.", success: false };
        }

        // Simples verificação de senha (em produção, use bcrypt)
        if (affiliate.password !== password) {
            return { error: "Credenciais inválidas.", success: false };
        }

        await createSession(affiliate.id);

        revalidatePath("/affiliate");
        return { error: "", success: true };
    } catch (error) {
        console.error("Login Error:", error);
        return { error: "Erro interno no servidor.", success: false };
    }
}

export async function logoutAffiliate() {
    await endSession();
    revalidatePath("/affiliate");
}

export async function createAffiliate(prevState: any, formData: FormData) {
    const name = formData.get("name") as string;
    const cpf = formData.get("cpf") as string;
    const password = formData.get("password") as string;
    const raffleIdStr = formData.get("raffleId") as string;
    const commissionStr = formData.get("commission") as string;

    if (!name || !cpf || !password || !raffleIdStr || !commissionStr) {
        return { error: "Todos os campos são obrigatórios.", success: false, link: null };
    }

    const cleanCpf = cpf.replace(/\D/g, "");
    if (cleanCpf.length !== 11) {
        return { error: "CPF inválido.", success: false, link: null };
    }

    const raffleId = parseInt(raffleIdStr, 10);
    const commissionPercentage = parseFloat(commissionStr);

    try {
        const existingAffiliate = await prisma.affiliate.findUnique({
            where: { cpf: cleanCpf },
        });

        if (existingAffiliate) {
            return { error: "Já existe um afiliado cadastrado com este CPF.", success: false, link: null };
        }

        const newAffiliate = await prisma.affiliate.create({
            data: {
                name,
                cpf: cleanCpf,
                password, // Em produção, lembre-se de usar bcrypt
                raffleId,
                commissionPercentage,
            },
        });

        // The exact base URL should ideally come from an environment variable in production
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pixregional.com.br";
        const generatedLink = `${baseUrl}/raffle/${raffleId}?ref=${newAffiliate.id}`;

        revalidatePath("/dashboard/affiliates");

        return { error: "", success: true, link: generatedLink };
    } catch (error) {
        console.error("Create Affiliate Error:", error);
        return { error: "Erro interno no servidor ao criar afiliado.", success: false, link: null };
    }
}
