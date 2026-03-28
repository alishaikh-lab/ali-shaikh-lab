import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">Featured</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.05] tracking-tight">
              Built & <span className="text-gradient">shipped</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            All projects <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* Featured project — large card */}
        <motion.a
          href="https://aircle.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="group block relative glass-strong rounded-3xl p-6 sm:p-8 md:p-10 hover:scale-[1.005] transition-transform duration-500"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xl font-heading font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Aircle</h3>
                <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-foreground text-background font-semibold">
                  <Globe size={8} /> Live
                </span>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-all ml-auto" />
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                A private room-based chat app — talk instantly without login or identity. Pure, frictionless, real-time communication.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Chat", "Privacy", "Real-time"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1 rounded-lg border border-border text-muted-foreground font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
