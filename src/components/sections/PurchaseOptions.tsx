import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PurchaseOptions() {
    const tiers = [
        {
            title: "Starter Reader",
            price: "$10",
            description: "Perfect for casual readers.",
            features: [
                "1 Premium eBook",
                "10 Raffle Tickets",
                "Access to Reader Community"
            ],
            cta: "Buy Now",
            popular: false
        },
        {
            title: "Bookworm",
            price: "$25",
            description: "Most popular choice for avid readers.",
            features: [
                "3 Premium eBooks",
                "30 Raffle Tickets",
                "2x Winning Chance Multiplier",
                "Priority Support"
            ],
            cta: "Best Value",
            popular: true
        },
        {
            title: "Library Builder",
            price: "$50",
            description: "Build your library and maximize winning odds.",
            features: [
                "7 Premium eBooks",
                "75 Raffle Tickets",
                "3x Winning Chance Multiplier",
                "VIP Discord Access",
                "Early Access to New Raffles"
            ],
            cta: "Get Started",
            popular: false
        }
    ]

    return (
        <section id="pricing" className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6 text-center mb-10">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get Started Today</h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                    Choose the package that suits your reading habits and winning goals.
                </p>
            </div>

            <div className="container mx-auto px-4 md:px-6 grid gap-8 md:grid-cols-3 lg:gap-12">
                {tiers.map((tier) => (
                    <Card
                        key={tier.title}
                        className={`relative flex flex-col ${tier.popular ? 'border-primary shadow-xl scale-105' : 'shadow-md'} transition-all hover:scale-[1.02]`}
                    >
                        {tier.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                <Badge className="px-3 py-1">Most Popular</Badge>
                            </div>
                        )}

                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">{tier.title}</CardTitle>
                            <CardDescription>{tier.description}</CardDescription>
                        </CardHeader>

                        <CardContent className="flex-1">
                            <div className="text-center mb-6">
                                <span className="text-4xl font-bold">{tier.price}</span>
                            </div>
                            <ul className="space-y-3">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2">
                                        <Check className="h-4 w-4 text-primary" />
                                        <span className="text-sm text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter>
                            <Button className="w-full" variant={tier.popular ? "default" : "outline"}>
                                {tier.cta}
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}
