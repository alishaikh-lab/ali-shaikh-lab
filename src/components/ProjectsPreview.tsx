import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export const ProjectsPreview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding section-spacing">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="eyebrow mb-4 block">Selected work</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.8rem] font-heading font-bold text-foreground leading-[1.08]">
              Things I've <span className="shimmer-text">shipped.</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 group"
          >
            View all
            <ArrowUpRight size={13} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>

        <motion.a
          href="https://aircle.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="group block glass-card p-6 sm:p-8 lg:p-10"
        >
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            <motion.div
              whileHover={{ rotate: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-lg font-heading font-bold text-background flex-shrink-0"
            >
              A
            </motion.div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap mb-4">
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Aircle</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-2.5 py-1 text-[10px] font-bold text-background uppercase tracking-wider">
                  <Globe size={9} /> Live
                </span>
              </div>
              <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-[1.7] mb-6 max-w-xl">
                Privacy-first chat with zero friction. Room-based, no login,
                instant connection. Built around one principle: remove
                everything that slows real conversation.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Real-time", "Privacy", "WebSocket", "Minimal UX"].map((tag) => (
                  <span key={tag} className="rounded-full border border-border px-3 py-1.5 text-[11px] font-medium text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all duration-300">
                Explore project <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
