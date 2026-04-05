import { motion } from "framer-motion";
import { ArrowDown, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import aliImage from "@/assets/ali-shaikh.webp";

const highlights = [
  "AI product experiments",
  "Premium interface design",
  "Fast execution from idea to launch",
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pt-28 pb-14 sm:pt-32 sm:pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.15, 0.95, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="liquid-blob w-[400px] h-[400px] bg-foreground/8 -top-24 -left-24"
        />
        <motion.div
          animate={{ x: [0, -30, 25, 0], y: [0, 25, -30, 0], scale: [1, 0.9, 1.1, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="liquid-blob w-[300px] h-[300px] bg-muted-foreground/6 bottom-10 right-0"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 flex justify-center lg:justify-end lg:order-2 w-full"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-[2rem] border border-dashed border-border/30"
              />

              <div className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-[2rem] overflow-hidden glass-strong p-1">
                <img
                  src={aliImage}
                  alt="Portrait of Ali Shaikh"
                  className="w-full h-full object-cover rounded-[calc(2rem-4px)]"
                  loading="eager"
                />
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-2 glass-strong rounded-full px-3 py-1.5 shadow-lg"
              >
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground">
                  <MapPin size={10} className="text-muted-foreground" />
                  Pune, India
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-2 -left-2 glass-strong rounded-full px-3 py-1.5 shadow-lg"
              >
                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-foreground">
                  <Sparkles size={10} className="text-muted-foreground" />
                  Product builder
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 lg:order-1 text-center lg:text-left w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border/50 mb-6 glass"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
              />
              <span className="text-[10px] sm:text-[11px] font-medium text-muted-foreground tracking-wide">
                Available for collaborations and ambitious builds
              </span>
            </motion.div>

            <h1 className="text-[2.2rem] leading-[1.02] sm:text-[3.2rem] lg:text-[4.25rem] xl:text-[4.8rem] font-heading font-bold mb-6 text-foreground max-w-4xl mx-auto lg:mx-0">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="block"
              >
                Build bold ideas
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                className="block shimmer-text"
              >
                into clean digital
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="block"
              >
                products people remember.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, x: -30, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.7, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-7"
            >
              <div className="relative px-4 py-4 sm:px-6 sm:py-5 rounded-[1.75rem] glass-strong overflow-hidden group max-w-2xl mx-auto lg:mx-0">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-foreground/[0.03] to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
                />
                <p className="relative z-10 text-[13px] sm:text-sm md:text-base font-heading font-semibold text-foreground leading-relaxed">
                  Ali Shaikh designs and ships high-conviction work across product, AI, and web experiences with a focus on clarity, speed, and strong execution.
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-sm sm:text-[15px] lg:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8"
            >
              Every section now aims to feel sharper: premium visuals, stronger messaging, and a layout that holds together just as well on mobile as it does on desktop.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid gap-3 sm:grid-cols-3 max-w-3xl mx-auto lg:mx-0 mb-8"
            >
              {highlights.map((item) => (
                <div key={item} className="glass-card px-4 py-3 text-left">
                  <p className="text-xs sm:text-[13px] font-medium leading-relaxed text-foreground">
                    {item}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Link
                to="/projects"
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full bg-foreground text-background font-medium text-sm hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                View Projects
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-background/70"
                >
                  -&gt;
                </motion.span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full border border-border/50 glass font-medium text-sm text-foreground hover:scale-[1.03] active:scale-[0.98] transition-all duration-300"
              >
                Start a Conversation
              </Link>
            </motion.div>
          </motion.div>
        </div>

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
