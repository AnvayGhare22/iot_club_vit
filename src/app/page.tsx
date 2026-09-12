import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DomainsGrid } from "@/components/sections/DomainsGrid";
import { LatestUpdates } from "@/components/sections/LatestUpdates";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <DomainsGrid />
      <LatestUpdates />
    </div>
  );
}
