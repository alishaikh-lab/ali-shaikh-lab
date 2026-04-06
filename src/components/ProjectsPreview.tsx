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
            <span className="eyebrow mb-4">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-foreground" />
              Featured Project
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground leading-[1.05]">
              Built with <span className="shimmer-text">clarity & restraint</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            All projects <ArrowUpRight size={13} />
          </Link>
        </motion.div>

        <motion.a
          href="https://aircle.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group block glass-card p-5 sm:p-7"
        >
          <div className="flex flex-col sm:flex-row sm:items-start gap-5">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground text-lg font-heading font-bold text-background flex-shrink-0">
              A
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h3 className="font-heading text-xl font-bold text-foreground">Aircle</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-semibold text-background uppercase tracking-wider">
                  <Globe size={9} /> Live
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-xl">
                Privacy-first chat built around one principle: remove everything that slows people down. Room-based, no login, instant.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Chat", "Privacy", "Realtime", "Product UX"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-1 text-[11px] font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:gap-2.5 transition-all">
                Visit live project <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
