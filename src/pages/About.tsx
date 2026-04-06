import { motion } from "framer-motion";
import { MapPin, Calendar, Code2, Rocket, Lightbulb, Target } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { Footer } from "@/components/Footer";
import aliImage from "@/assets/ali-shaikh.webp";

const highlights = [
  { icon: Code2, label: "Focus", value: "Tech & AI" },
  { icon: Rocket, label: "Mission", value: "Idea → Product" },
  { icon: Lightbulb, label: "Approach", value: "Build & Ship" },
  { icon: Target, label: "Mindset", value: "Think Big" },
];

const About = () => (
  <PageTransition>
    <main>
      <section className="px-5 sm:px-6 md:px-10 lg:px-20 py-16 md:py-24 pt-24 sm:pt-28">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground mb-3 block">About</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-5">
              The builder behind <span className="shimmer-text">the work</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="glass-card p-2 mb-4">
                <img
                  src={aliImage}
                  alt="Ali Shaikh"
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl glass text-sm text-muted-foreground">
                  <MapPin size={13} /> Pune, India
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-xl glass text-sm text-muted-foreground">
                  <Calendar size={13} /> 16 years old
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                I'm <strong className="text-foreground">Ali Shaikh</strong>, a builder from Pune, India focused on turning strong ideas into products that feel thoughtful and ready to ship.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Technology is the medium. From programming and AI to product thinking and interface design, every decision is shaped to make the experience simpler and stronger.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The approach: identify the problem, design with intent, build with precision, launch with confidence.
              </p>

              <div className="pt-3 grid grid-cols-2 gap-3">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.06 }}
                      className="p-4 glass-card group"
                    >
                      <Icon size={15} className="text-muted-foreground mb-2 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-wider mb-0.5">{item.label}</span>
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

export default About;
