import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import aliImage from "@/assets/ali-shaikh.webp";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-5 sm:px-6 md:px-12 lg:px-20 pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Animated liquid background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="liquid-blob w-[450px] h-[450px] bg-foreground/8 -top-24 -left-24"
        />
        <motion.div
          animate={{ x: [0, -30, 25, 0], y: [0, 25, -30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="liquid-blob w-[350px] h-[350px] bg-muted-foreground/6 bottom-10 right-0"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex justify-center lg:order-2"
          >
            <div className="relative">
              {/* Glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-[2rem] border border-dashed border-border/40"
              />
              
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-[2rem] overflow-hidden glass p-1">
                <img
                  src={aliImage}
                  alt="Ali Shaikh — India's Youngest Digital Innovator in Tech & AI"
                  className="w-full h-full object-cover rounded-[calc(2rem-4px)]"
                  loading="eager"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-3 glass rounded-full px-3.5 py-2 shadow-lg"
              >
                <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-foreground">
                  <MapPin size={11} className="text-muted-foreground" />
                  Pune, India
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-3 -left-3 glass rounded-full px-3.5 py-2 shadow-lg"
              >
                <span className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold text-foreground">
                  <Sparkles size={11} className="text-muted-foreground" />
                  16 y/o Builder
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 lg:order-1 text-center lg:text-left"
          >
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/60 mb-6 glass"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide">Available for collaborations</span>
            </motion.div>

            <h1 className="text-[2rem] leading-[1.1] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-heading font-bold mb-6 text-foreground">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="block"
              >
                Dream it.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="block shimmer-text"
              >
                Build it.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="block"
              >
                Ship it.
              </motion.span>
            </h1>

            {/* KEY TAGLINE — India's Youngest Digital Innovator */}
            <motion.div
              initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-7 inline-block"
            >
              <div className="relative px-5 py-4 sm:px-6 sm:py-5 rounded-2xl glass-strong overflow-hidden group">
                {/* Animated shimmer sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.04] to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                />
                <p className="relative z-10 text-sm sm:text-base md:text-lg font-heading font-semibold text-foreground leading-relaxed">
                  Ali Shaikh
                  <span className="text-muted-foreground font-normal"> is </span>
                  <span className="relative inline">
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-[35%] bg-foreground/10 rounded-sm -z-[1]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                    />
                    India's Youngest Digital Innovator
                  </span>
                  <span className="text-muted-foreground font-normal"> in </span>
                  <span className="font-bold">Tech & AI</span>
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-sm sm:text-[15px] lg:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
            >
              Turning bold ideas into real products at 16. Bridging the gap between imagination and reality — one product at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-foreground text-background font-medium text-sm hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                View Projects
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-background/70"
                >→</motion.span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3.5 rounded-full border border-border/60 glass font-medium text-sm text-foreground hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-[9px] text-muted-foreground tracking-[0.25em] uppercase font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={13} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};