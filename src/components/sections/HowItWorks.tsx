import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Ticket, Trophy } from "lucide-react"

export function HowItWorks() {
    const steps = [
        {
            icon: <BookOpen className="h-10 w-10 text-primary" />,
            title: "1. Purchase an eBook",
            description: "Browse our collection of premium eBooks. Each purchase supports our platform and grants you entry."
        },
        {
            icon: <Ticket className="h-10 w-10 text-primary" />,
            title: "2. Receive Tickets",
            description: "Every eBook comes with a specific number of lucky tickets. The more you read, the higher your chances."
        },
        {
            icon: <Trophy className="h-10 w-10 text-primary" />,
            title: "3. Win Amazing Prizes",
            description: "Tickets are automatically entered into the active raffle. Watch the live draw to see if you've won!"
        }
    ]

    return (
        <section id="how-it-works" className="py-16 md:py-24 bg-muted/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
                        Participating is simple. Gain knowledge and get rewarded in three easy steps.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {steps.map((step, index) => (
                        <Card key={index} className="relative overflow-hidden border-none shadow-lg bg-background p-2">
                            <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-9xl leading-none select-none">
                                {index + 1}
                            </div>
                            <CardHeader className="text-center pb-2">
                                <div className="mx-auto mb-4 bg-primary/10 p-4 rounded-full w-fit">
                                    {step.icon}
                                </div>
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center text-muted-foreground">
                                {step.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
