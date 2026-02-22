import Link from "next/link"

export function Footer() {
    return (
        <footer className="w-full border-t bg-background">
            <div className="container mx-auto py-10 md:py-16">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                                eBook Raffle
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-muted-foreground">
                            Win big by reading. The smartest way to participate in raffles.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Platform</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground">Browse eBooks</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Active Raffles</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Winners</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Terms of Service</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Connect</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#" className="hover:text-foreground">Twitter</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Instagram</Link></li>
                            <li><Link href="#" className="hover:text-foreground">Facebook</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © 2024 eBook Raffle. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
