import { motion } from "framer-motion";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import aliImage from "@/assets/ali-shaikh.webp";
import { MapPin, Calendar, Rocket, Code2, Lightbulb, Target } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Focus", value: "Tech & AI" },
  { icon: Rocket, label: "Mission", value: "Dream → Product" },
  { icon: Lightbulb, label: "Approach", value: "Build & Ship" },
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
                The mind behind <span className="shimmer-text">the vision</span>
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
                  I'm <strong className="text-foreground">Ali Shaikh</strong> — a 16-year-old digital innovator from Pune, India. I believe every meaningful product begins as a wild idea, and my job is to turn that idea into something people can use and love.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Technology isn't just a tool for me — it's a language I think in. From programming and AI to product design, I immerse myself in the craft of building things that bridge the gap between <strong className="text-foreground">dreams and reality</strong>.
                </p>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  My approach: start with a problem worth solving, design with intention, build with precision, and ship with confidence. No shortcuts.
                </p>

                <div className="pt-4 grid grid-cols-2 gap-3">
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
