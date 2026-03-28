import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import aliImage from "@/assets/ali-shaikh.webp";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-12 lg:px-20 pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Liquid blobs */}
      <div className="liquid-blob w-[500px] h-[500px] bg-foreground/5 -top-32 -left-32 animate-blob" />
      <div className="liquid-blob w-[400px] h-[400px] bg-muted-foreground/5 bottom-0 right-0 animate-blob" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex justify-center lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-foreground/10 via-transparent to-foreground/5 blur-2xl" />
              
              <div className="relative w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-[22rem] xl:h-[22rem] rounded-[2rem] overflow-hidden glass p-1">
                <img
                  src={aliImage}
                  alt="Ali Shaikh — India's Youngest Digital Innovator in Tech & AI"
                  className="w-full h-full object-cover rounded-[calc(2rem-4px)]"
                  loading="eager"
                />
              </div>

              {/* Location badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 glass rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg"
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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
              <span className="text-[11px] font-medium text-muted-foreground tracking-wide">16 y/o Builder · Open to collaborate</span>
            </motion.div>

            <h1 className="text-[2rem] leading-[1.08] sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold mb-5 text-foreground tracking-tight">
              Dream it.{" "}
              <span className="text-gradient">Build it.</span>{" "}
              Ship it.
            </h1>

            {/* The KEY highlight — innovator tagline */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="relative mb-6 inline-block"
            >
              <div className="relative px-5 py-4 sm:px-6 sm:py-5 rounded-2xl border border-border bg-secondary/30 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.03] to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                />
                <p className="relative z-10 text-sm sm:text-base md:text-lg font-heading font-bold text-foreground leading-snug">
                  Ali Shaikh
                  <span className="text-muted-foreground font-normal"> is </span>
                  <span className="relative inline-block">
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-[40%] bg-foreground/15 rounded-sm"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                    />
                    <span className="relative z-10 font-extrabold">India's Youngest Digital Innovator</span>
                  </span>
                  <span className="text-muted-foreground font-normal"> in </span>
                  <span className="relative inline-block">
                    <motion.span
                      className="absolute bottom-0 left-0 right-0 h-[40%] bg-foreground/10 rounded-sm"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      style={{ originX: 0 }}
                    />
                    <span className="relative z-10 font-extrabold">Tech & AI</span>
                  </span>
                </p>
              </div>
            </motion.div>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8">
              Turning bold ideas into real products at 16. Bridging the gap between imagination and reality — one product at a time.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-foreground text-background font-medium text-sm hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
              >
                View Projects
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >→</motion.span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-7 py-3.5 rounded-xl border border-border font-medium text-sm text-foreground hover:bg-secondary hover:scale-[1.02] transition-all duration-300"
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
          <span className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
