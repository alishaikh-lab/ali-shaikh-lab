import { motion } from "framer-motion";
import { MapPin, Calendar, Rocket, Code2, Lightbulb, Target } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import aliImage from "@/assets/ali-shaikh.webp";

const highlights = [
  { icon: Code2, label: "Focus", value: "Tech and AI" },
  { icon: Rocket, label: "Mission", value: "Idea to Product" },
  { icon: Lightbulb, label: "Approach", value: "Build and Ship" },
  { icon: Target, label: "Mindset", value: "Think Big" },
];

const About = () => {
  return (
    <PageTransition>
      <main>
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-28 pt-28 sm:pt-32 relative">
          <motion.div
            animate={{ x: [0, 25, -15, 0], y: [0, -20, 15, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="liquid-blob w-96 h-96 bg-foreground/5 -top-20 -right-20"
          />

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-3 block">About</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
                The builder behind <span className="shimmer-text">the work</span>
              </h1>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 mt-10 lg:mt-14">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="rounded-3xl overflow-hidden glass-strong p-1 mb-5">
                  <img
                    src={aliImage}
                    alt="Ali Shaikh"
                    className="w-full aspect-[4/5] object-cover rounded-[calc(1.5rem-4px)]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-muted-foreground">
                    <MapPin size={14} /> Pune, India
                  </span>
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass text-sm text-muted-foreground">
                    <Calendar size={14} /> 16 years old
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-5"
              >
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  I&apos;m <strong className="text-foreground">Ali Shaikh</strong>, a builder from Pune, India focused on turning strong concepts into products that feel thoughtful, useful, and ready to ship.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Technology is not just a tool here, it is the medium. From programming and AI to product thinking and interface design, every decision is shaped to make the final experience feel simpler and stronger.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  The approach stays consistent: identify the real problem, design with intention, build with precision, and launch with confidence.
                </p>

                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.08 }}
                        whileHover={{ y: -3, transition: { duration: 0.25 } }}
                        className="p-4 rounded-xl glass-card group"
                      >
                        <Icon size={16} className="text-muted-foreground mb-2 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                        <span className="block text-[10px] text-muted-foreground uppercase tracking-wider mb-1">{item.label}</span>
                        <span className="block text-sm font-heading font-bold text-foreground">{item.value}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </PageTransition>
  );
};

export default About;
