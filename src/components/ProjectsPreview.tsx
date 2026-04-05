import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const projectStats = [
  { label: "Experience", value: "Instant room flow" },
  { label: "Positioning", value: "Privacy-first" },
  { label: "Focus", value: "Zero clutter UX" },
];

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
          className="mb-10 md:mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-2xl">
            <span className="eyebrow mb-5">
              <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--highlight))]" />
              Featured Project
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.8rem] font-heading font-bold tracking-[-0.04em] text-foreground leading-[1.02]">
              A live product shaped with <span className="shimmer-text">clarity and restraint</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowUpRight size={14} />
          </Link>
        </motion.div>

        <motion.a
          href="https://aircle.lovable.app"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="section-panel panel-noise block overflow-hidden p-5 sm:p-6 md:p-8"
        >
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-xl font-heading font-bold text-background shadow-lg">
                  A
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-[-0.03em] text-foreground">Aircle</h3>
                  <p className="mt-1 text-sm text-muted-foreground">Conversation design with speed, privacy, and low friction.</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-background">
                  <Globe size={10} />
                  Live
                </span>
              </div>

              <p className="mt-6 max-w-2xl text-sm sm:text-[15px] leading-relaxed text-muted-foreground">
                Aircle is a privacy-first chat product built around one simple UX principle: remove everything that slows people down. The result is a direct, room-based experience that feels immediate and calm instead of busy.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Chat", "Privacy", "Realtime", "Product UX"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[hsl(var(--foreground)/0.08)] bg-background/72 px-3 py-1.5 text-[11px] font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                Visit the live project
                <ArrowUpRight size={15} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {projectStats.map((stat) => (
                <div key={stat.label} className="glass-card p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{stat.label}</p>
                  <p className="mt-3 text-lg font-heading font-bold leading-tight text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
};
