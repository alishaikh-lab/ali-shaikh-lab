import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import aliImage from "@/assets/ali-shaikh.webp";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32">
      {/* Subtle blobs */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob w-[500px] h-[500px] bg-foreground -top-40 -left-40"
      />
      <motion.div
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="liquid-blob w-[400px] h-[400px] bg-foreground top-20 right-0"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="eyebrow mb-5 mx-auto lg:mx-0">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
              Building the future, today
            </div>

            <h1 className="text-[2.2rem] leading-[1] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-heading font-bold tracking-[-0.04em] text-foreground">
              <span className="block">Sharper products.</span>
              <span className="block shimmer-text">Bolder vision.</span>
            </h1>

            {/* Highlighted tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 mx-auto lg:mx-0"
            >
              <span className="h-2 w-2 rounded-full bg-background animate-pulse" />
              <span className="text-xs sm:text-sm font-heading font-bold tracking-wide text-background">
                India's Youngest Digital Innovator in Tech & AI
              </span>
            </motion.div>

            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Ali Shaikh builds polished digital experiences where product thinking, UI craft, and fast execution come together — making every pixel count.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link to="/projects" className="group btn-primary w-full sm:w-auto">
                Explore Work
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                Get in Touch
              </Link>
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
              {[
                { value: "10+", label: "Products shipped" },
                { value: "AI + UX", label: "Core focus" },
                { value: "16", label: "Years old" },
              ].map((m) => (
                <div key={m.label} className="metric-tile text-left">
                  <p className="text-base sm:text-lg font-heading font-bold text-foreground">{m.value}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{m.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-card p-3 sm:p-4">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] sm:aspect-[4/5]">
                <img
                  src={aliImage}
                  alt="Ali Shaikh — India's Youngest Digital Innovator"
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--foreground)/0.5)] via-transparent to-transparent" />
                <div className="absolute left-3 right-3 bottom-3 sm:left-4 sm:right-4 sm:bottom-4 rounded-xl glass p-3 sm:p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Location</p>
                      <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-foreground">
                        <MapPin size={12} />
                        Pune, India
                      </p>
                    </div>
                    <span className="rounded-full bg-foreground px-3 py-1.5 text-[10px] font-semibold text-background">
                      Available
                    </span>
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
          className="absolute -bottom-2 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-1.5"
        >
          <span className="text-[9px] text-muted-foreground tracking-[0.2em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={12} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
