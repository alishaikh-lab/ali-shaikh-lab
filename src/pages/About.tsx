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
      <section className="section-padding pt-28 sm:pt-36 pb-24 sm:pb-32">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow mb-5 block">About</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.06] mb-6">
              The builder behind <span className="shimmer-text">the work.</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mt-14">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="glass-card p-1.5 mb-6">
                <img
                  src={aliImage}
                  alt="Ali Shaikh"
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass text-[11px] text-muted-foreground font-mono tracking-wide">
                  <MapPin size={11} /> Pune, India
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full glass text-[11px] text-muted-foreground font-mono tracking-wide">
                  <Calendar size={11} /> 16 years old
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <p className="text-[13px] sm:text-[15px] text-muted-foreground leading-[1.85]">
                I'm <strong className="text-foreground">Ali Shaikh</strong>, a builder from Pune
                focused on turning ambitious ideas into products people genuinely love to use.
              </p>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground leading-[1.85]">
                Technology is the medium. From AI systems and product design to brand strategy
                and clean engineering — every decision serves one goal: making the experience
                simpler and more powerful.
              </p>
              <p className="text-[13px] sm:text-[15px] text-muted-foreground leading-[1.85]">
                The approach: identify the real problem, design with intention,
                build with precision, and launch with confidence.
              </p>

              <div className="pt-6 grid grid-cols-2 gap-3">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                      className="p-4 sm:p-5 glass-card group"
                    >
                      <Icon size={14} className="text-muted-foreground mb-2.5 group-hover:text-foreground transition-colors duration-500" strokeWidth={1.5} />
                      <span className="block text-[9px] text-muted-foreground uppercase tracking-[0.25em] mb-1 font-mono">{item.label}</span>
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
