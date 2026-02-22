"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Link as LinkIcon, Save, Users } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { mockPrizes } from "@/data/mockRaffles";
import { createAffiliate } from "@/app/actions/affiliate";

const initialState = {
    error: "",
    success: false,
    link: null as string | null,
};

export default function NewAffiliatePage() {
    const router = useRouter();
    const [state, formAction] = useFormState(createAffiliate, initialState);
    const [cpf, setCpf] = useState("");

    const activePrizes = mockPrizes.filter(p => p.status === "active");

    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        setCpf(value);
    };

    return (
        <div className="max-w-3xl mx-auto space-y-8 pb-12">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/affiliates">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-black tracking-tight uppercase">Novo Afiliado</h1>
                    <p className="text-muted-foreground mt-1">
                        Cadastre um parceiro e gere seu link de vendas.
                    </p>
                </div>
            </div>

            <form action={formAction} className="space-y-8">
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-sm overflow-hidden">
                    <div className="p-6 md:p-8 space-y-6">

                        {/* Status Message */}
                        {state?.success && state?.link && (
                            <div className="bg-success/10 border border-success/20 text-success-foreground p-4 rounded-lg flex items-start gap-3">
                                <LinkIcon className="h-5 w-5 text-success shrink-0 mt-0.5" />
                                <div>
                                    <h4 className="font-bold text-success">Afiliado Criado com Sucesso!</h4>
                                    <p className="text-sm opacity-90 mb-2">Envie o link abaixo para o parceiro começar a divulgar:</p>
                                    <code className="block bg-black/10 dark:bg-black/30 p-2 rounded text-xs font-mono break-all text-success border border-success/20">
                                        {state.link}
                                    </code>
                                </div>
                            </div>
                        )}

                        {state?.error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg">
                                <h4 className="font-bold">Erro ao criar afiliado</h4>
                                <p className="text-sm">{state.error}</p>
                            </div>
                        )}

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name" className="text-base font-bold">Nome do Afiliado</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Ex: Lucas Henrique (Influenciador)"
                                    className="h-12 border-zinc-300 dark:border-zinc-700 focus-visible:ring-primary"
                                    required
                                    disabled={!!state?.success}
                                />
                                <p className="text-xs text-muted-foreground">Como o afiliado será identificado no sistema.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="cpf" className="text-base font-bold">CPF</Label>
                                    <Input
                                        id="cpf"
                                        name="cpf"
                                        placeholder="000.000.000-00"
                                        value={cpf}
                                        onChange={handleCpfChange}
                                        className="h-12 border-zinc-300 dark:border-zinc-700 focus-visible:ring-primary"
                                        required
                                        disabled={!!state?.success}
                                    />
                                    <p className="text-xs text-muted-foreground">Usado para o login do parceiro.</p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-base font-bold">Senha Inicial</Label>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="••••••••"
                                        className="h-12 border-zinc-300 dark:border-zinc-700 focus-visible:ring-primary"
                                        required
                                        disabled={!!state?.success}
                                    />
                                    <p className="text-xs text-muted-foreground">Senha para o parceiro acessar o painel.</p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="raffleId" className="text-base font-bold">Campanha (Sorteio)</Label>
                                    <select
                                        id="raffleId"
                                        name="raffleId"
                                        defaultValue=""
                                        className="flex h-12 w-full items-center justify-between rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700"
                                        required
                                        disabled={!!state?.success}
                                    >
                                        <option value="" disabled>Selecione um sorteio...</option>
                                        {activePrizes.map(prize => (
                                            <option key={prize.id} value={prize.id}>
                                                #{prize.id} - {prize.title}
                                            </option>
                                        ))}
                                    </select>
                                    <p className="text-xs text-muted-foreground">Qual sorteio o link irá apontar.</p>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="commission" className="text-base font-bold">Comissão (%)</Label>
                                    <div className="relative">
                                        <Input
                                            id="commission"
                                            name="commission"
                                            type="number"
                                            min="1"
                                            max="100"
                                            step="0.01"
                                            placeholder="Ex: 15"
                                            className="h-12 pl-4 pr-10 border-zinc-300 dark:border-zinc-700 focus-visible:ring-primary font-mono text-lg"
                                            required
                                            disabled={!!state?.success}
                                        />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none font-bold text-zinc-400">
                                            %
                                        </div>
                                    </div>
                                    <p className="text-xs text-muted-foreground">Porcentagem sobre o valor da cota vendida.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-50 dark:bg-zinc-900/50 p-6 md:p-8 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-end gap-4">
                        <Link href="/dashboard/affiliates">
                            <Button type="button" variant="ghost" className="font-bold">
                                Cancelar
                            </Button>
                        </Link>

                        {!state?.success ? (
                            <Button
                                type="submit"
                                className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 shadow-sm"
                            >
                                <Save className="mr-2 h-4 w-4" />
                                Gerar Link Autenticado
                            </Button>
                        ) : (
                            <Button
                                type="button"
                                onClick={() => router.push('/dashboard/affiliates')}
                                className="bg-success text-success-foreground hover:bg-success/90 font-bold px-8 shadow-sm"
                            >
                                Voltar para a Lista
                            </Button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}
