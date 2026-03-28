import { PageTransition } from "@/components/PageTransition";
import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { VisionSection } from "@/components/VisionSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsPreview } from "@/components/ProjectsPreview";
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
        <AboutPreview />
        <VisionSection />
        <SkillsSection />
        <ProjectsPreview />
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
