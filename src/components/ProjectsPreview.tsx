import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectsPreview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-14 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">
              Selected work
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.05]">
              Things I've <span className="shimmer-text">shipped</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 border-b border-transparent hover:border-foreground/20 pb-0.5"
          >
            View all <ArrowUpRight size={13} />
          </Link>
        </motion.div>

        <motion.a
          href="https://aircle.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group block relative overflow-hidden rounded-2xl border border-border/40 bg-muted/20 hover:bg-muted/40 transition-all duration-500 p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <motion.div
              whileHover={{ rotate: 6 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-xl font-heading font-bold text-background flex-shrink-0"
            >
              A
            </motion.div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-3">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Aircle</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-bold text-background uppercase tracking-wider">
                  <Globe size={9} /> Live
                </span>
              </div>
              <p className="text-sm sm:text-[15px] text-muted-foreground leading-[1.65] mb-5 max-w-xl">
                Privacy-first chat with zero friction. Room-based, no login required, instant connection. Built around one principle: strip away everything that slows real conversation.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["Real-time", "Privacy", "WebSocket", "Minimal UX"].map((tag) => (
                  <span key={tag} className="rounded-full bg-muted px-3 py-1.5 text-[11px] font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground group-hover:gap-2.5 transition-all duration-300">
                Explore project <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
