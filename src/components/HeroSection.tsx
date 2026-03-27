import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import aliImage from "@/assets/ali-shaikh.webp";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
      {/* Liquid blobs */}
      <div className="liquid-blob w-96 h-96 bg-foreground/10 top-20 -left-20 animate-blob" />
      <div className="liquid-blob w-80 h-80 bg-muted-foreground/10 bottom-20 right-10 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-xs font-medium tracking-wider uppercase mb-6"
            >
              Pune, India · 16 years old
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6">
              <span className="text-foreground">Dream it.</span>
              <br />
              <span className="text-gradient">Build it.</span>
              <br />
              <span className="text-foreground">Ship it.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg mb-8">
              <strong className="text-foreground">Ali Shaikh</strong> is India's youngest digital innovator — turning bold ideas into real products at the intersection of <strong className="text-foreground">Technology</strong> and <strong className="text-foreground">AI</strong>.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/projects"
                className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium text-sm hover:bg-accent transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden glass p-1.5">
                <img
                  src={aliImage}
                  alt="Ali Shaikh — India's Youngest Digital Innovator"
                  className="w-full h-full object-cover rounded-[calc(var(--radius)*2)]"
                  loading="eager"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-2.5"
              >
                <span className="text-xs font-medium text-foreground">✦ Tech & AI Innovator</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-2.5"
              >
                <span className="text-xs font-medium text-foreground">✦ 16 y/o Builder</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={16} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
