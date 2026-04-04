import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Code2, Palette, Wrench, Brain } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Frameworks",
    icon: Palette,
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Figma", level: 85 },
      { name: "Supabase", level: 80 },
      { name: "Vercel", level: 85 },
    ],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "AI Integration", level: 85 },
      { name: "ChatGPT API", level: 80 },
      { name: "AI Workflows", level: 75 },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="liquid-blob w-80 h-80 bg-foreground/5 -bottom-20 -left-20"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground mb-4 block">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[2.75rem] font-heading font-bold text-foreground leading-[1.1]">
            Tools of the <span className="shimmer-text">trade</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.title}
                onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i ? "text-background" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active === i && (
                  <motion.span
                    layoutId="skill-tab-pill"
                    className="absolute inset-0 bg-foreground rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon size={15} className="relative z-10" />
                <span className="relative z-10 hidden sm:inline">{cat.title}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills with progress bars */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {categories[active].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="p-4 sm:p-5 rounded-2xl border border-border/60 glass group hover:border-foreground/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <span className="text-xs text-muted-foreground font-heading">{skill.level}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-foreground"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};