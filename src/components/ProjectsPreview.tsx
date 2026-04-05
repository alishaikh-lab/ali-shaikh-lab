import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block">Featured</span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-heading font-bold text-foreground leading-[1.1]">
              Selected work that is <span className="shimmer-text">live</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
          >
            All projects <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.a
          href="https://aircle.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          whileHover={{ y: -4, transition: { duration: 0.3 } }}
          className="group block glass-card rounded-2xl p-5 sm:p-8 md:p-10"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-foreground text-background flex items-center justify-center flex-shrink-0 text-xl font-heading font-bold shadow-lg"
            >
              A
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Aircle</h3>
                <span className="inline-flex items-center gap-1 text-[10px] px-2.5 py-0.5 rounded-full bg-foreground text-background font-semibold">
                  <Globe size={8} /> Live
                </span>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-all ml-auto hidden sm:block" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A privacy-first chat experience built for instant conversations. No heavy onboarding, no clutter, just a fast room-based flow that gets people talking immediately.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Chat", "Privacy", "Real-time", "WebSocket"].map((tag) => (
                  <span key={tag} className="text-[11px] px-3 py-1 rounded-full border border-border/50 text-muted-foreground font-medium">
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
