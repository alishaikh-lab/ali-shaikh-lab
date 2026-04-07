import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import aliImage from "@/assets/ali-shaikh.webp";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const letterReveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease },
  }),
};

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-end overflow-hidden px-5 sm:px-6 md:px-10 lg:px-16 xl:px-20 pb-10 sm:pb-14 md:pb-16 pt-28 sm:pt-32">
      {/* Ambient gradient orbs */}
      <motion.div
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.1, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob w-[600px] h-[600px] bg-foreground -top-60 -left-60"
      />
      <motion.div
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="liquid-blob w-[500px] h-[500px] bg-foreground bottom-0 right-[-10%]"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Top bar with status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8 sm:mb-10"
        >
          <span className="inline-flex h-2 w-2 rounded-full bg-foreground/60 animate-pulse" />
          <span className="text-[11px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Open to collaborate
          </span>
          <div className="flex-1 h-px bg-border/50" />
        </motion.div>

        {/* Main grid — text + image */}
        <div className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:gap-16 items-end">
          <div>
            {/* Large editorial heading */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                className="text-[2.6rem] leading-[0.95] sm:text-[4rem] md:text-[5rem] lg:text-[5.6rem] font-heading font-bold tracking-[-0.04em] text-foreground"
              >
                {"I design".split("").map((char, i) => (
                  <motion.span key={i} custom={i} variants={letterReveal} initial="hidden" animate="visible" className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <div className="overflow-hidden mb-3">
              <motion.h1
                className="text-[2.6rem] leading-[0.95] sm:text-[4rem] md:text-[5rem] lg:text-[5.6rem] font-heading font-bold tracking-[-0.04em]"
              >
                {"& build".split("").map((char, i) => (
                  <motion.span key={i} custom={i + 8} variants={letterReveal} initial="hidden" animate="visible" className="inline-block text-outline">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
                {" "}
                {"digital".split("").map((char, i) => (
                  <motion.span key={i} custom={i + 14} variants={letterReveal} initial="hidden" animate="visible" className="inline-block shimmer-text">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                className="text-[2.6rem] leading-[0.95] sm:text-[4rem] md:text-[5rem] lg:text-[5.6rem] font-heading font-bold tracking-[-0.04em] text-foreground"
              >
                {"products.".split("").map((char, i) => (
                  <motion.span key={i} custom={i + 21} variants={letterReveal} initial="hidden" animate="visible" className="inline-block">
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.h1>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-6 sm:mt-8 max-w-md text-sm sm:text-[15px] text-muted-foreground leading-[1.7]"
            >
              Ali Shaikh — 16-year-old builder from Pune crafting
              products at the intersection of design, AI, and
              relentless execution.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5 }}
              className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link to="/projects" className="group btn-primary w-full sm:w-auto">
                See my work
                <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                Let's connect
              </Link>
            </motion.div>
          </div>

          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="glass-card p-2.5 group">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={aliImage}
                  alt="Ali Shaikh"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--foreground)/0.6)] via-transparent to-transparent" />
                <div className="absolute left-3 right-3 bottom-3 rounded-lg glass px-3 py-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Pune, India</p>
                      <p className="text-xs font-semibold text-foreground mt-0.5">Ali Shaikh</p>
                    </div>
                    <span className="rounded-full bg-foreground px-2.5 py-1 text-[9px] font-bold text-background uppercase tracking-wider">
                      Available
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
          className="mt-10 sm:mt-14 flex flex-wrap items-center gap-6 sm:gap-10"
        >
          {[
            { val: "10+", label: "Products shipped" },
            { val: "2+", label: "Years building" },
            { val: "AI × Design", label: "Core intersection" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-3">
              {i > 0 && <div className="h-6 w-px bg-border hidden sm:block" />}
              <div>
                <p className="text-lg sm:text-xl font-heading font-bold text-foreground">{stat.val}</p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute -bottom-4 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center gap-1"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown size={12} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
