import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import aliImage from "@/assets/ali-shaikh.webp";
import { MapPin, Calendar, Heart, Zap } from "lucide-react";

const milestones = [
  { icon: Zap, text: "Started coding and exploring technology at an early age" },
  { icon: Heart, text: "Fell in love with building products that solve real problems" },
  { icon: Zap, text: "Built and shipped Aircle — a privacy-first chat platform" },
  { icon: Zap, text: "Continuously learning and pushing the boundaries of AI and tech" },
];

const About = () => {
  return (
    <main>
      <section className="section-padding pt-32 relative">
        <div className="liquid-blob w-96 h-96 bg-foreground/5 -top-20 -right-20 animate-blob" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 block">About</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              The mind behind <span className="text-gradient">the vision</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="glass rounded-3xl p-2 mb-8">
                <img
                  src={aliImage}
                  alt="Ali Shaikh"
                  className="w-full aspect-[4/5] object-cover rounded-[calc(var(--radius)*2)]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground">
                  <MapPin size={14} /> Pune, India
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground">
                  <Calendar size={14} /> 16 years old
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm <strong className="text-foreground">Ali Shaikh</strong> — a 16-year-old digital innovator from Pune, India. I believe every meaningful product begins as a wild idea, and my job is to turn that idea into something people can use and love.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Technology isn't just a tool for me — it's a language I think in. From programming and AI to product design, I immerse myself in the craft of building things that bridge the gap between <strong className="text-foreground">dreams and reality</strong>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach is simple: start with a problem worth solving, design with intention, build with precision, and ship with confidence. No shortcuts, no compromises.
              </p>

              <div className="pt-6 space-y-4">
                <h3 className="font-heading font-semibold text-foreground">Journey so far</h3>
                {milestones.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <m.icon size={14} className="text-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{m.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default About;
