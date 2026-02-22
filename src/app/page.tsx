import { FeaturedPrizes } from "@/components/sections/FeaturedPrizes";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { PurchaseOptions } from "@/components/sections/PurchaseOptions";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <HowItWorks />
      <FeaturedPrizes />
      <PurchaseOptions />
    </div>
  );
}
