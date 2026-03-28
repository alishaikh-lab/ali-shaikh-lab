import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <SkillsSection />
      <ProjectsPreview />
      <SocialLinks />
      <Footer />
    </main>
  );
};

export default Index;
