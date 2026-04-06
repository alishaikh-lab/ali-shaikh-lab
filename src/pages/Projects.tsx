import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "Aircle",
    description: "A private room-based chat app — talk instantly without login or identity. Pure, frictionless, real-time communication.",
    link: "https://aircle.lovable.app",
    tags: ["Chat", "Privacy", "Real-time", "WebSockets"],
    status: "Live",
  },
  {
    title: "More Coming Soon",
    description: "New projects at the intersection of AI, design, and technology. Building products that make a real difference.",
    link: "#",
    tags: ["AI", "Innovation", "In Progress"],
    status: "Building",
  },
];

const Projects = () => (
  <PageTransition>
    <main>
      <section className="px-5 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 pt-24 sm:pt-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 md:mb-14"
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">Projects</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
              Ideas shaped into <span className="shimmer-text">real products</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
              Each project is focused execution: clear problem, simple experience, real outcome.
            </p>
          </motion.div>

          <div className="grid gap-3">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group block p-5 sm:p-7 glass-card"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0 text-base font-heading font-bold">
                    {project.title === "Aircle" ? "A" : "+"}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                      <h2 className="font-heading text-lg font-bold text-foreground">{project.title}</h2>
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                        project.status === "Live"
                          ? "bg-foreground text-background"
                          : "border border-border text-muted-foreground"
                      }`}>
                        {project.status === "Live" && <Globe size={8} className="inline mr-1" />}
                        {project.status}
                      </span>
                      {project.link !== "#" && (
                        <ArrowUpRight size={15} className="text-muted-foreground group-hover:text-foreground transition-colors ml-auto hidden sm:block" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-border text-muted-foreground">
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

export default Projects;
