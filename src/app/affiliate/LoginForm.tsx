"use client";

import { useState } from "react";
import { useFormState } from "react-dom";
import { loginAffiliate } from "@/app/actions/affiliate";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";

const initialState = {
    error: "",
    success: false,
};

export default function LoginForm() {
    const [state, formAction] = useFormState(loginAffiliate, initialState);
    const [cpf, setCpf] = useState("");

    // Simple CPF mask
    const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 11) value = value.slice(0, 11);
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        setCpf(value);
    };

    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <Card className="w-full max-w-md shadow-xl border-primary/20 bg-background/50 backdrop-blur-sm">
                <CardHeader className="space-y-1 text-center">
                    <CardTitle className="text-2xl font-black uppercase tracking-tight">
                        Portal do Afiliado
                    </CardTitle>
                    <CardDescription>
                        Entre com seu CPF e senha para acessar suas vendas.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={formAction} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="cpf">CPF</Label>
                            <Input
                                id="cpf"
                                name="cpf"
                                placeholder="000.000.000-00"
                                value={cpf}
                                onChange={handleCpfChange}
                                className="h-12"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="h-12"
                                required
                            />
                        </div>

                        {state?.error && (
                            <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-medium">
                                {state.error}
                            </div>
                        )}

                        <Button type="submit" className="w-full h-12 font-bold text-base mt-2">
                            <LogIn className="w-4 h-4 mr-2" />
                            Acessar Painel
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
