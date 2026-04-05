import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles, Stars, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import aliImage from "@/assets/ali-shaikh.webp";

const heroMetrics = [
  { value: "10+", label: "Products shipped" },
  { value: "AI + UX", label: "Core focus" },
  { value: "Fast", label: "Decision velocity" },
];

const focusAreas = [
  "Product systems that feel premium",
  "AI experiments with real user value",
  "Responsive interfaces that stay elegant",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 50, -20, 0], y: [0, -36, 24, 0], scale: [1, 1.12, 0.96, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="liquid-blob w-[420px] h-[420px] bg-[hsl(var(--highlight)/0.22)] -top-20 -left-24"
        />
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 26, -26, 0], scale: [1, 0.94, 1.08, 1] }}
          transition={{ duration: 17, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="liquid-blob w-[360px] h-[360px] bg-[hsl(var(--highlight-soft)/0.2)] top-10 right-0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="eyebrow mb-6 mx-auto lg:mx-0">
              <span className="inline-flex h-2 w-2 rounded-full bg-[hsl(var(--highlight))]" />
              Design-forward digital builder
            </div>

            <h1 className="max-w-5xl mx-auto lg:mx-0 text-[2.7rem] leading-[0.95] sm:text-[4rem] lg:text-[5.4rem] xl:text-[6.2rem] font-heading font-bold tracking-[-0.05em] text-foreground">
              <span className="block">Sharper products.</span>
              <span className="block shimmer-text">Stronger presence.</span>
              <span className="block">Better digital taste.</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto lg:mx-0 text-[15px] sm:text-lg text-muted-foreground leading-relaxed">
              Ali Shaikh builds polished web experiences where product thinking, UI craft, and fast execution come together. The goal is simple: make the work feel premium before a user even reads the first line.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-foreground px-7 py-4 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(15,23,42,0.18)]"
              >
                Explore Featured Work
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full glass px-7 py-4 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5"
              >
                Start a Project Conversation
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3 max-w-3xl mx-auto lg:mx-0">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="metric-tile text-left">
                  <p className="text-lg sm:text-xl font-heading font-bold text-foreground">{metric.value}</p>
                  <p className="mt-1 text-xs sm:text-[13px] text-muted-foreground">{metric.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="section-panel panel-noise p-4 sm:p-5">
              <div className="grid gap-4 lg:grid-cols-[1fr_0.62fr]">
                <div className="relative rounded-[2rem] overflow-hidden min-h-[380px] sm:min-h-[460px]">
                  <img
                    src={aliImage}
                    alt="Portrait of Ali Shaikh"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--foreground)/0.62)] via-transparent to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4 rounded-[1.6rem] glass p-4 text-left">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Based in</p>
                        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-foreground">
                          <MapPin size={14} className="text-[hsl(var(--highlight))]" />
                          Pune, India
                        </p>
                      </div>
                      <div className="rounded-full bg-foreground px-3 py-1.5 text-[11px] font-medium text-background">
                        Available now
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="glass-card p-5">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      <Stars size={14} className="text-[hsl(var(--highlight-soft))]" />
                      What gets built
                    </div>
                    <div className="mt-4 space-y-3">
                      {focusAreas.map((item) => (
                        <div key={item} className="rounded-2xl bg-background/75 px-4 py-3 text-sm font-medium text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass-card p-5">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      <Zap size={14} className="text-[hsl(var(--highlight))]" />
                      Work style
                    </div>
                    <p className="mt-4 text-xl font-heading font-bold leading-tight text-foreground">
                      Clarity first.
                      <br />
                      Speed second.
                      <br />
                      Beauty always.
                    </p>
                  </div>

                  <div className="glass-card p-5">
                    <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                      <Sparkles size={14} className="text-[hsl(var(--highlight-soft))]" />
                      Positioning
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      Design-forward, product-aware, and built to feel strong on both mobile and desktop from the first impression.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-muted-foreground tracking-[0.28em] uppercase font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
