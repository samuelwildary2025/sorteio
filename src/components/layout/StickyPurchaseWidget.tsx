"use client";

import { Button } from "@/components/ui/button"
import { ShoppingCart, Plus, Minus } from "lucide-react"
import { useState } from "react"

export function StickyPurchaseWidget() {
    const [quantity, setQuantity] = useState(10);
    const pricePerTicket = 0.50; // Example price
    const total = quantity * pricePerTicket;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-secondary border-t border-white/10 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] md:hidden safe-area-bottom">
            <div className="flex flex-col gap-4">

                {/* Quick Selectors */}
                <div className="flex gap-2 justify-between overflow-x-auto pb-2 scrollbar-hide">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(10)}
                        className={`min-w-[60px] rounded-full font-bold ${quantity === 10 ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary-foreground/10 text-secondary-foreground border-transparent'}`}
                    >
                        +10
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(20)}
                        className={`min-w-[60px] rounded-full font-bold ${quantity === 20 ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary-foreground/10 text-secondary-foreground border-transparent'}`}
                    >
                        +20
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(50)}
                        className={`min-w-[60px] rounded-full font-bold ${quantity === 50 ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary-foreground/10 text-secondary-foreground border-transparent'}`}
                    >
                        +50
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setQuantity(100)}
                        className={`min-w-[60px] rounded-full font-bold ${quantity === 100 ? 'bg-primary text-primary-foreground border-primary' : 'bg-secondary-foreground/10 text-secondary-foreground border-transparent'}`}
                    >
                        +100
                    </Button>
                </div>

                {/* Controls & Buy Action */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 bg-secondary-foreground/5 rounded-full px-2 py-1 border border-white/10">
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-white hover:bg-white/20" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                            <Minus className="h-4 w-4" />
                        </Button>
                        <span className="text-white font-bold w-8 text-center">{quantity}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-white hover:bg-white/20" onClick={() => setQuantity(quantity + 1)}>
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>

                    <Button className="flex-1 bg-success hover:bg-success/90 text-white font-black text-lg h-12 rounded-full shadow-lg animate-pulse uppercase tracking-wider">
                        <ShoppingCart className="mr-2 h-5 w-5" />
                        Comprar <span className="ml-1 text-sm font-medium opacity-90">(R$ {total.toFixed(2)})</span>
                    </Button>
                </div>
            </div>
        </div>
    )
}
