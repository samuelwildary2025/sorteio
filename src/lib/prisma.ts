import { PrismaClient } from '@prisma/client'

// Bypass Prisma Initialization during Next.js static build phase.
const isNextBuild = process.env.npm_lifecycle_event === 'build' || process.env.NEXT_PHASE === 'phase-production-build';

const prismaClientSingleton = () => {
    if (isNextBuild) {
        console.warn('Skipping Prisma instantiation during Next.js build phase.');
        return new Proxy({}, {
            get: () => {
                return () => Promise.resolve();
            }
        }) as unknown as PrismaClient;
    }

    return new PrismaClient();
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
