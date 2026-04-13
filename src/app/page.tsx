import { FeaturesSection } from "@/widgets/features/ui/features-section";
import { FooterSection } from "@/widgets/footer/ui/footer-section";
import { HeroSection } from "@/widgets/hero/ui/hero-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <FooterSection />
    </main>
  );
}