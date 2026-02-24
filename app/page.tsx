import FAQs from "@/components/faqs";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-1";
import StatsSection from "@/components/stats-2";
import TeamSection from "@/components/team";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <Features />
    <IntegrationsSection />
    <StatsSection />
    <TeamSection />
    <FAQs />
    <FooterSection />
  </div>
  );
}
