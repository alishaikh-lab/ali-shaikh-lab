import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Python", level: 80 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 75 },
      { name: "Node.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Tools & Tech",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "AI / ML", level: 70 },
      { name: "Figma", level: 80 },
      { name: "Supabase", level: 75 },
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section ref={ref} className="px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative blob */}
      <div className="liquid-blob w-96 h-96 bg-foreground/5 -bottom-20 -left-20 animate-blob" style={{ animationDelay: "2s" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 md:mb-14"
        >
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
            Capabilities
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground leading-tight">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none"
        >
          {skillCategories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`relative px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === i
                  ? "text-background"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              }`}
            >
              {activeCategory === i && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 bg-foreground rounded-xl"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -15 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group glass rounded-2xl p-4 sm:p-5 hover:bg-secondary/30 transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-heading font-semibold text-foreground text-sm sm:text-base">
                  {skill.name}
                </span>
                <span className="text-xs text-muted-foreground font-medium">{skill.level}%</span>
              </div>
              <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full bg-foreground"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-3 mt-8 sm:mt-10"
        >
          {[
            { num: "2+", label: "Years Coding" },
            { num: "10+", label: "Projects Built" },
            { num: "5+", label: "Technologies" },
          ].map((stat, i) => (
            <div key={stat.label} className="glass rounded-2xl p-4 sm:p-6 text-center group hover:bg-secondary/30 transition-all duration-500">
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1, type: "spring" }}
                className="block font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-1"
              >
                {stat.num}
              </motion.span>
              <span className="text-[10px] sm:text-xs text-muted-foreground font-medium tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
