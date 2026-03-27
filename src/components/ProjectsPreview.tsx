import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Aircle",
    description: "A private room-based chat app — talk instantly without login or identity. Pure, frictionless communication.",
    link: "https://aircle.lovable.app",
    tags: ["Chat", "Privacy", "Real-time"],
    icon: MessageCircle,
  },
];

export const ProjectsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">Selected Work</span>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground leading-tight">
              Projects that <span className="text-gradient">speak volumes</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            View all <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid gap-4 sm:gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 hover:bg-secondary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <project.icon size={22} className="text-foreground" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground mb-1.5 sm:mb-2 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] sm:text-xs px-2.5 py-1 rounded-lg bg-secondary text-muted-foreground font-medium">
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
