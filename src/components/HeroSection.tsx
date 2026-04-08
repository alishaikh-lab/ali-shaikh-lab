import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import aliImage from "@/assets/ali-shaikh.webp";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end section-padding pb-12 sm:pb-16 pt-28 sm:pt-32 overflow-hidden">
      {/* Ambient blobs */}
      <motion.div
        animate={{ x: [0, 50, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.05, 0.97, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob w-[500px] h-[500px] bg-foreground -top-40 -left-40"
      />
      <motion.div
        animate={{ x: [0, -30, 20, 0], y: [0, 20, -15, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="liquid-blob w-[400px] h-[400px] bg-foreground bottom-20 right-[-5%]"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-10 sm:mb-14"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-foreground/50 animate-pulse" />
          <span className="eyebrow">Open to collaborate</span>
        </motion.div>

        {/* Main layout */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-20 items-end">
          <div>
            {/* Headline — one clear message */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease }}
                className="text-[2.8rem] leading-[0.92] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6rem] font-heading font-bold tracking-[-0.045em] text-foreground"
              >
                I craft digital
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.08 }}
                className="text-[2.8rem] leading-[0.92] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6rem] font-heading font-bold tracking-[-0.045em]"
              >
                <span className="text-outline">experiences</span>
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.16 }}
                className="text-[2.8rem] leading-[0.92] sm:text-[4.2rem] md:text-[5.2rem] lg:text-[6rem] font-heading font-bold tracking-[-0.045em] text-foreground"
              >
                that <span className="shimmer-text">resonate.</span>
              </motion.h1>
            </div>

            {/* Sub copy */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="mt-8 sm:mt-10 max-w-sm text-[14px] sm:text-[15px] text-muted-foreground leading-[1.75]"
            >
              Builder from Pune, 16. Turning bold ideas into products
              people actually love — at the intersection of design,
              technology, and relentless execution.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-6px_rgba(0,0,0,0.15)]"
              >
                Explore my work
                <motion.span
                  className="inline-block"
                  whileHover={{ x: 3, y: -3 }}
                >
                  ↗
                </motion.span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-muted"
              >
                Say hello
              </Link>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease }}
            className="hidden lg:block w-[240px] xl:w-[280px]"
          >
            <div className="glass-card p-2 group">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={aliImage}
                  alt="Ali Shaikh"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
                <div className="absolute left-2.5 right-2.5 bottom-2.5 rounded-lg glass px-3 py-2">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">Pune, India</p>
                  <p className="text-xs font-semibold text-foreground mt-0.5">Ali Shaikh</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Minimal stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-14 sm:mt-20 flex flex-wrap gap-8 sm:gap-14"
        >
          {[
            { val: "10+", label: "Products shipped" },
            { val: "2+", label: "Years building" },
            { val: "AI × Design", label: "Sweet spot" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-xl sm:text-2xl font-heading font-bold text-foreground">{stat.val}</p>
              <p className="text-[11px] text-muted-foreground mt-0.5 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ArrowDown size={14} className="text-muted-foreground/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
