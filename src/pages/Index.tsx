import { PageTransition } from "@/components/PageTransition";
import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { MarqueeSection } from "@/components/MarqueeSection";
import { VisionSection } from "@/components/VisionSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BrandValues } from "@/components/BrandValues";
import { ManifestoSection } from "@/components/ManifestoSection";
import { SocialLinks } from "@/components/SocialLinks";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <PageTransition>
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutPreview />
        <VisionSection />
        <SkillsSection />
        <ProjectsPreview />
        <TestimonialsSection />
        <BrandValues />
        <ManifestoSection />
        <SocialLinks />
        <NewsletterCTA />
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Index;
