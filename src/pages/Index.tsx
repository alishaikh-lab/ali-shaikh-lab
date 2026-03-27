import { HeroSection } from "@/components/HeroSection";
import { AboutPreview } from "@/components/AboutPreview";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { SocialLinks } from "@/components/SocialLinks";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main>
      <HeroSection />
      <AboutPreview />
      <ProjectsPreview />
      <SocialLinks />
      <Footer />
    </main>
  );
};

export default Index;
