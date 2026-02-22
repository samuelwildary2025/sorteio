"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex gap-2 sm:gap-4 justify-center">
            <TimeUnit value={timeLeft.days} label="DIAS" />
            <TimeUnit value={timeLeft.hours} label="HORAS" />
            <TimeUnit value={timeLeft.minutes} label="MINUTOS" />
            <TimeUnit value={timeLeft.seconds} label="SEGUNDOS" />
        </div>
    );
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-black text-white rounded-md p-2 sm:p-4 w-16 sm:w-20 text-center shadow-lg border border-white/20">
                <span className="text-2xl sm:text-4xl font-bold font-mono">
                    {value.toString().padStart(2, '0')}
                </span>
            </div>
            <span className="text-[10px] sm:text-xs font-bold mt-1 text-black/70 uppercase">{label}</span>
        </div>
    );
}
