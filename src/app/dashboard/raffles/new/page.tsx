"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save, ImagePlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState, useFormStatus } from "react-dom";
import { createRaffle } from "@/app/actions/raffle";

const initialState = {
    error: "",
    success: false,
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full h-14 font-black uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90"
        >
            {pending ? "Salvando..." : (
                <>
                    <Save className="mr-2 h-5 w-5" /> Salvar Sorteio
                </>
            )}
        </Button>
    );
}

export default function NewRafflePage() {
    const router = useRouter();
    const [state, formAction] = useFormState(createRaffle, initialState);

    if (state.success) {
        router.push("/dashboard/raffles");
    }

    return (
        <div className="space-y-6 max-w-4xl mx-auto">
            <div className="flex items-center gap-4">
                <Link href="/dashboard/raffles">
                    <Button variant="outline" size="icon" className="h-10 w-10 border-zinc-200 dark:border-zinc-800 rounded-full" type="button">
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Voltar</span>
                    </Button>
                </Link>
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight">Novo Sorteio</h1>
                    <p className="text-zinc-500 font-medium">Preencha os dados para criar uma nova campanha.</p>
                </div>
            </div>

            <form action={formAction}>
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="md:col-span-2 space-y-6">

                        {state?.error && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg font-bold">
                                {state.error}
                            </div>
                        )}

                        <Card>
                            <CardHeader>
                                <CardTitle>Informações Básicas</CardTitle>
                                <CardDescription>Os detalhes principais do prêmio que será sorteado.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="title" className="font-bold uppercase text-xs tracking-wider text-zinc-500">Título do Prêmio</Label>
                                    <Input
                                        id="title"
                                        name="title"
                                        placeholder="Ex: iPhone 16 Pro Max 1TB"
                                        required
                                        className="h-12 border-zinc-300 dark:border-zinc-700 focus-visible:ring-primary"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="description" className="font-bold uppercase text-xs tracking-wider text-zinc-500">Descrição Curta</Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        placeholder="Descreva os detalhes do prêmio..."
                                        className="resize-none border-zinc-300 dark:border-zinc-700 focus-visible:ring-primary min-h-[100px]"
                                        required
                                    />
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Configurações da Rifa</CardTitle>
                                <CardDescription>Defina a quantidade de tickets e o valor.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="price" className="font-bold uppercase text-xs tracking-wider text-zinc-500">Preço por Ticket</Label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-3.5 text-zinc-500 font-bold">R$</span>
                                            <Input
                                                id="price"
                                                name="price"
                                                type="number"
                                                step="0.01"
                                                min="0.01"
                                                placeholder="0,00"
                                                required
                                                className="h-12 border-zinc-300 dark:border-zinc-700 focus-visible:ring-primary pl-10"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="tickets" className="font-bold uppercase text-xs tracking-wider text-zinc-500">Total de Tickets</Label>
                                        <Input
                                            id="tickets"
                                            name="tickets"
                                            type="number"
                                            min="1"
                                            placeholder="Ex: 1000"
                                            required
                                            className="h-12 border-zinc-300 dark:border-zinc-700 focus-visible:ring-primary"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="endDate" className="font-bold uppercase text-xs tracking-wider text-zinc-500">Data do Sorteio (Previsão)</Label>
                                    <Input
                                        id="endDate"
                                        name="endDate"
                                        type="datetime-local"
                                        required
                                        className="h-12 border-zinc-300 dark:border-zinc-700 focus-visible:ring-primary"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Imagens</CardTitle>
                                <CardDescription>Adicione a foto principal do prêmio.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-xl p-8 text-center flex flex-col items-center justify-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-500">
                                        <ImagePlus className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm">Clique para upload</p>
                                        <p className="text-xs text-zinc-500 mt-1">PNG, JPG até 5MB</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center space-x-2 bg-success/10 text-success p-3 rounded-lg border border-success/20">
                                    <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                                    <span className="font-bold text-sm uppercase tracking-wider">Publicar Imediatamente</span>
                                </div>
                            </CardContent>
                            <CardFooter className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <SubmitButton />
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </form>
        </div>
    );
}
