import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";

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
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 pt-28 sm:pt-32 relative">
          <motion.div
            animate={{ x: [0, 20, -15, 0], y: [0, -15, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="liquid-blob w-80 h-80 bg-foreground/5 top-10 -left-10"
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 md:mb-16"
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Projects</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5 tracking-tight">
                Concepts shaped into <span className="shimmer-text">real products</span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                Each project is an example of focused execution: a clear problem, a simple experience, and an outcome that users can actually feel.
              </p>
            </motion.div>

            <div className="grid gap-4">
              {projects.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4, transition: { duration: 0.3 } }}
                  className="group block p-5 sm:p-8 rounded-2xl glass-card"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <motion.div
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 text-lg font-heading font-bold shadow-lg"
                    >
                      {project.title === "Aircle" ? "A" : "+"}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                        <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">{project.title}</h2>
                        <span
                          className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                            project.status === "Live"
                              ? "bg-foreground text-background"
                              : "border border-border text-muted-foreground"
                          }`}
                        >
                          {project.status === "Live" && <Globe size={8} className="inline mr-1" />}
                          {project.status}
                        </span>
                        {project.link !== "#" && (
                          <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors ml-auto hidden sm:block" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[11px] px-3 py-1 rounded-full border border-border/50 text-muted-foreground font-medium">
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
