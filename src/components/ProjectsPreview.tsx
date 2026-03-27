import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Aircle",
    description: "A private room-based chat app where you can talk instantly — no login, no identity required. Pure, frictionless communication.",
    link: "https://aircle.lovable.app",
    tags: ["Chat", "Privacy", "Real-time"],
    icon: MessageCircle,
  },
];

export const ProjectsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 block">Selected Work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Projects that <span className="text-gradient">speak volumes</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            View all <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <div className="grid gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0">
                <project.icon size={24} className="text-foreground" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
