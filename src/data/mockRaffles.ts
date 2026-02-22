export interface Prize {
    id: number;
    title: string;
    description: string;
    totalTickets: number;
    soldTickets: number;
    price: string;
    endsIn: string;
    tags: string[];
    status?: "active" | "completed" | "draft";
}

export const mockPrizes: Prize[] = [
    {
        id: 1,
        title: "iPhone 16 Pro Max",
        description: "Edição Titânio - 1TB",
        totalTickets: 1000,
        soldTickets: 845,
        price: "R$ 0,50",
        endsIn: "2 dias",
        tags: ["Destaque", "Apple"],
        status: "active"
    },
    {
        id: 2,
        title: "PlayStation 5 Pro",
        description: "Console Next-Gen 8K",
        totalTickets: 500,
        soldTickets: 120,
        price: "R$ 0,25",
        endsIn: "5 dias",
        tags: ["Games"],
        status: "active"
    },
    {
        id: 3,
        title: "Pix de R$ 5.000",
        description: "Na sua conta na hora!",
        totalTickets: 2000,
        soldTickets: 1890,
        price: "R$ 0,10",
        endsIn: "12 horas",
        tags: ["Dinheiro", "Rápido"],
        status: "active"
    },
];

export interface Affiliate {
    id: string;
    name: string;
    raffleId: number; // Links to a Prize.id
    commissionPercentage: number;
    ticketsSold: number;
    revenueGenerated: number;
    joinDate: string;
}

export const mockAffiliates: Affiliate[] = [
    {
        id: "aff_001",
        name: "Carlos Eduardo",
        raffleId: 1, // iPhone
        commissionPercentage: 15,
        ticketsSold: 120,
        revenueGenerated: 60, // 120 tickets * 0.50
        joinDate: "2024-03-10"
    },
    {
        id: "aff_002",
        name: "Maria Silva",
        raffleId: 3, // PIX 5k
        commissionPercentage: 10,
        ticketsSold: 500,
        revenueGenerated: 50, // 500 tickets * 0.10
        joinDate: "2024-03-15"
    }
];
