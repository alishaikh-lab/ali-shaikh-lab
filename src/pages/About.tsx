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
      <section className="section-padding pt-28 sm:pt-32 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow mb-4 block">About</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-[1.08] mb-5">
              The builder behind <span className="shimmer-text">the work.</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mt-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="glass-card p-2 mb-5">
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-[1.8]">
                I'm <strong className="text-foreground">Ali Shaikh</strong>, a builder from Pune focused on turning ambitious ideas into products people genuinely love to use.
              </p>
              <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-[1.8]">
                Technology is the medium. From AI systems and product design to brand strategy and clean engineering — every decision serves one goal: making the experience simpler and more powerful.
              </p>
              <p className="text-[14px] sm:text-[15px] text-muted-foreground leading-[1.8]">
                The approach: identify the real problem, design with intention, build with precision, and launch with confidence.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-3">
                {highlights.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.06 }}
                      className="p-4 sm:p-5 glass-card group"
                    >
                      <Icon size={15} className="text-muted-foreground mb-2.5 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
                      <span className="block text-[10px] text-muted-foreground uppercase tracking-[0.2em] mb-1">{item.label}</span>
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
