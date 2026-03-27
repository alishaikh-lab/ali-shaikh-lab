import { motion } from "framer-motion";
import { ArrowDown, MapPin, Zap } from "lucide-react";
import aliImage from "@/assets/ali-shaikh.webp";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Liquid blobs */}
      <div className="liquid-blob w-[500px] h-[500px] bg-foreground/5 -top-32 -left-32 animate-blob" />
      <div className="liquid-blob w-[400px] h-[400px] bg-muted-foreground/5 bottom-0 right-0 animate-blob" style={{ animationDelay: "3s" }} />
      <div className="liquid-blob w-[300px] h-[300px] bg-foreground/3 top-1/2 left-1/2 animate-blob" style={{ animationDelay: "5s" }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Image — shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 blur-2xl" />
              
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-[2rem] overflow-hidden glass p-1">
                <img
                  src={aliImage}
                  alt="Ali Shaikh — India's Youngest Digital Innovator in Tech & AI"
                  className="w-full h-full object-cover rounded-[calc(2rem-4px)]"
                  loading="eager"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 glass rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg"
              >
                <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-foreground">
                  <Zap size={12} className="text-foreground" />
                  Tech & AI
                </span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 glass rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg"
              >
                <span className="flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-foreground">
                  <MapPin size={12} />
                  Pune, India
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 lg:order-1 text-center lg:text-left"
          >
            {/* Status pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
              <span className="text-xs font-medium text-muted-foreground tracking-wide">16 y/o Builder · Open to collaborate</span>
            </motion.div>

            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-foreground">
              Dream it.{" "}
              <span className="text-gradient">Build it.</span>{" "}
              Ship it.
            </h1>

            {/* The highlighted tagline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative mb-6 inline-block"
            >
              <div className="relative px-4 py-3 sm:px-5 sm:py-3.5 rounded-2xl border border-border bg-secondary/50">
                <p className="text-sm sm:text-base md:text-lg font-heading font-semibold text-foreground leading-snug">
                  <span className="text-foreground">Ali Shaikh</span>
                  <span className="text-muted-foreground"> is </span>
                  <span className="relative inline-block">
                    <span className="relative z-10 text-foreground font-bold">India's Youngest Digital Innovator</span>
                    <span className="absolute bottom-0 left-0 right-0 h-[40%] bg-foreground/10 rounded-sm -z-0" />
                  </span>
                  <span className="text-muted-foreground"> in </span>
                  <span className="text-foreground font-bold">Tech & AI</span>
                </p>
              </div>
            </motion.div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Turning bold ideas into real products at 16. From Pune to the world — bridging the gap between imagination and reality through code.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background font-medium text-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                View Projects
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 rounded-xl glass font-medium text-sm text-foreground hover:scale-[1.02] transition-all duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
