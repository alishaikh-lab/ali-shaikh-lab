import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";

const projects = [
  {
    title: "Aircle",
    description: "Private, room-based chat — talk instantly without login or identity. Pure, frictionless, real-time communication for the modern web.",
    link: "https://aircle.lovable.app",
    tags: ["Chat", "Privacy", "Real-time", "WebSockets"],
    status: "Live",
  },
  {
    title: "More Coming Soon",
    description: "New projects at the intersection of AI, design, and technology. Building tools that make a meaningful difference.",
    link: "#",
    tags: ["AI", "Innovation", "In Progress"],
    status: "Building",
  },
];

const Projects = () => (
  <PageTransition>
    <main>
      <section className="section-padding pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-12 sm:mb-16"
          >
            <span className="eyebrow mb-4 block">Projects</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.08] mb-5">
              Ideas shaped into <span className="shimmer-text">real products.</span>
            </h1>
            <p className="text-[14px] sm:text-[15px] text-muted-foreground max-w-lg leading-[1.75]">
              Each project is focused execution — clear problem, simple experience, real impact.
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
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="group block glass-card p-6 sm:p-8"
              >
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
                  <div className="w-12 h-12 rounded-xl bg-foreground text-background flex items-center justify-center flex-shrink-0 text-base font-heading font-bold">
                    {project.title === "Aircle" ? "A" : "+"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h2 className="font-heading text-lg sm:text-xl font-bold text-foreground">{project.title}</h2>
                      <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-semibold ${
                        project.status === "Live"
                          ? "bg-foreground text-background"
                          : "border border-border text-muted-foreground"
                      }`}>
                        {project.status === "Live" && <Globe size={8} className="inline mr-1" />}
                        {project.status}
                      </span>
                    </div>
                    <p className="text-[13px] sm:text-sm text-muted-foreground leading-[1.7] mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {project.link !== "#" && (
                    <ArrowUpRight size={16} className="text-muted-foreground/30 group-hover:text-foreground transition-all hidden sm:block flex-shrink-0 mt-1" />
                  )}
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
