import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import aliImage from "@/assets/ali-shaikh.webp";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex flex-col justify-center section-padding overflow-hidden">
      {/* Ambient */}
      <motion.div
        animate={{ x: [0, 40, -25, 0], y: [0, -25, 15, 0], scale: [1, 1.06, 0.96, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob w-[600px] h-[600px] bg-foreground -top-48 -left-48"
      />
      <motion.div
        animate={{ x: [0, -35, 25, 0], y: [0, 15, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="liquid-blob w-[450px] h-[450px] bg-foreground bottom-20 right-[-8%]"
      />

      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass text-[11px] font-mono tracking-wider text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-foreground/60" />
            </span>
            AVAILABLE FOR PROJECTS
          </div>
        </motion.div>

        {/* Headline */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-20 items-end">
          <div>
            {["I design products", "that people", "actually love."].map((line, i) => (
              <div key={i} className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease, delay: 0.1 + i * 0.08 }}
                  className={`text-[2.5rem] leading-[0.95] sm:text-[3.6rem] md:text-[4.8rem] lg:text-[5.6rem] font-heading font-bold tracking-[-0.04em] ${
                    i === 1 ? "" : "text-foreground"
                  }`}
                >
                  {i === 1 ? (
                    <span className="text-outline">{line}</span>
                  ) : i === 2 ? (
                    <span className="shimmer-text">{line}</span>
                  ) : (
                    line
                  )}
                </motion.h1>
              </div>
            ))}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-8 sm:mt-10 max-w-[380px] text-[13px] sm:text-[15px] text-muted-foreground leading-[1.8]"
            >
              16-year-old builder from Pune crafting digital products at the
              intersection of design, AI, and meticulous engineering.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-7 flex flex-col sm:flex-row gap-3"
            >
              <Link to="/projects" className="btn-primary group">
                View my work
                <motion.span className="inline-block" whileHover={{ x: 3 }}>→</motion.span>
              </Link>
              <Link to="/contact" className="btn-ghost">
                Get in touch
              </Link>
            </motion.div>
          </div>

          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
            className="hidden lg:block w-[220px] xl:w-[260px]"
          >
            <div className="glass-card p-1.5 group">
              <div className="relative rounded-xl overflow-hidden aspect-[3/4]">
                <img
                  src={aliImage}
                  alt="Ali Shaikh"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                <div className="absolute left-2 right-2 bottom-2 rounded-lg glass px-2.5 py-1.5">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-muted-foreground font-mono">Pune, IN</p>
                  <p className="text-[11px] font-semibold text-foreground mt-0.5">Ali Shaikh</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="mt-16 sm:mt-24 flex flex-wrap gap-10 sm:gap-16"
        >
          {[
            { val: "10+", label: "Products shipped" },
            { val: "2+", label: "Years building" },
            { val: "AI × Design", label: "Core focus" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 + i * 0.1 }}
            >
              <p className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">{stat.val}</p>
              <p className="text-[10px] text-muted-foreground mt-1 font-mono tracking-wider uppercase">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-[9px] font-mono tracking-[0.3em] text-muted-foreground/40 uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}>
          <ArrowDown size={12} className="text-muted-foreground/30" />
        </motion.div>
      </motion.div>
    </section>
  );
};
