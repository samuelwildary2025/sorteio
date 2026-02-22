import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    return new PrismaClient({
        // Handle next build environment where DATABASE_URL might be omitted
        ...(process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL
            ? { datasources: { db: { url: "postgresql://dummy:dummy@localhost:5432/dummy" } } }
            : {})
    })
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
