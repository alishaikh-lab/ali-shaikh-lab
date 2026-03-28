import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Globe, Layers } from "lucide-react";

const projects = [
  {
    title: "Aircle",
    description: "A private room-based chat app where you can talk instantly without login or identity. Pure, frictionless, real-time communication designed for privacy-first conversations.",
    link: "https://aircle.lovable.app",
    tags: ["Chat", "Privacy", "Real-time", "WebSockets"],
    status: "Live",
  },
  {
    title: "More Coming Soon",
    description: "New projects are always in the works. Building at the intersection of AI, design, and technology to create products that make a difference.",
    link: "#",
    tags: ["AI", "Innovation", "In Progress"],
    status: "Building",
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <main>
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 pt-32 relative">
          <div className="liquid-blob w-80 h-80 bg-foreground/5 top-10 -left-10 animate-blob" />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-14 md:mb-16"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Projects</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground mb-5 tracking-tight">
                Ideas turned into <span className="text-gradient">real products</span>
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Every project here represents a problem worth solving. Built with care, shipped with purpose.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:gap-5">
              {projects.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group block p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-border hover:border-foreground/20 hover:bg-secondary/20 transition-all duration-500"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 text-lg font-heading font-bold">
                      {project.title === "Aircle" ? "A" : "✦"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-heading text-xl sm:text-2xl font-bold text-foreground">{project.title}</h2>
                        <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                          project.status === "Live"
                            ? "bg-foreground text-background"
                            : "border border-border text-muted-foreground"
                        }`}>
                          {project.status}
                        </span>
                        {project.link !== "#" && (
                          <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors ml-auto" />
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[11px] px-3 py-1 rounded-lg border border-border text-muted-foreground font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default Projects;
