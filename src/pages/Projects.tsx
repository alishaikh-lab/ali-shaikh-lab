import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, MessageCircle, Layers, Globe } from "lucide-react";

const projects = [
  {
    title: "Aircle",
    description: "A private room-based chat app where you can talk instantly without login or identity. Pure, frictionless, real-time communication designed for privacy-first conversations.",
    link: "https://aircle.lovable.app",
    tags: ["Chat", "Privacy", "Real-time", "WebSockets"],
    icon: MessageCircle,
    status: "Live",
  },
  {
    title: "More Coming Soon",
    description: "New projects are always in the works. Building at the intersection of AI, design, and technology to create products that make a difference.",
    link: "#",
    tags: ["AI", "Innovation", "In Progress"],
    icon: Layers,
    status: "In Progress",
  },
];

const Projects = () => {
  return (
    <main>
      <section className="section-padding pt-32 relative">
        <div className="liquid-blob w-80 h-80 bg-foreground/5 top-10 -left-10 animate-blob" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 block">Projects</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ideas turned into <span className="text-gradient">real products</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Every project here represents a problem worth solving. Built with care, shipped with purpose.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {projects.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.link}
                target={project.link !== "#" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group glass rounded-3xl p-8 md:p-10 hover:scale-[1.01] transition-transform duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <project.icon size={24} className="text-foreground" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h2 className="font-heading text-2xl font-bold text-foreground">{project.title}</h2>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${
                        project.status === "Live" 
                          ? "bg-foreground text-background" 
                          : "bg-secondary text-muted-foreground"
                      }`}>
                        {project.status}
                      </span>
                      {project.link !== "#" && (
                        <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
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
  );
};

export default Projects;
