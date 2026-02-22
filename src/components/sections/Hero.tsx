import { Button } from "@/components/ui/button"
import { CountdownTimer } from "@/components/ui/countdown-timer"
import { ArrowRight, Trophy } from "lucide-react"

export function Hero() {
    // Set a target date 3 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    return (
        <section className="relative overflow-hidden bg-primary pb-16 pt-8 md:pt-12">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent z-10"></div>

            <div className="container mx-auto relative z-20 px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-8">

                    <div className="inline-flex items-center rounded-full border border-black/10 bg-white/20 px-4 py-1.5 text-sm font-bold shadow-md backdrop-blur-md text-black/80">
                        <span className="flex items-center gap-2">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            SORTEIO AO VIVO EM BREVE
                        </span>
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto">
                        <h1 className="text-4xl font-black tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl text-black drop-shadow-sm uppercase">
                            O Próximo Milionário <br />
                            <span className="text-white drop-shadow-md">Pode Ser Você!</span>
                        </h1>

                        <p className="mx-auto max-w-[700px] text-black/80 md:text-xl font-medium">
                            Não deixe a sorte passar. Adquira seu eBook agora e garanta seus números da sorte para o grande prêmio.
                        </p>
                    </div>

                    <div className="py-6">
                        <CountdownTimer targetDate={targetDate} />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center max-w-md mx-auto">
                        <Button size="lg" className="w-full text-lg font-bold h-14 bg-success text-success-foreground hover:bg-success/90 rounded-full shadow-xl hover:scale-105 transition-transform">
                            COMPRAR AGORA <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="w-full text-lg font-bold h-14 bg-white/80 border-black/10 text-black hover:bg-white transition-colors rounded-full">
                            Ver Prêmios <Trophy className="ml-2 h-5 w-5" />
                        </Button>
                    </div>

                    <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-black/70 font-bold text-sm uppercase tracking-wide">
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl text-black">10k+</span>
                            <span>Ganhadores</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl text-black">R$ 5M+</span>
                            <span>Em Prêmios</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl text-black">100%</span>
                            <span>Seguro</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl md:text-3xl text-black">Instantâneo</span>
                            <span>Pix na Hora</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
