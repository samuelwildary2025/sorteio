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
