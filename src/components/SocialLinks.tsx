import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Instagram", url: "https://www.instagram.com/alishaikh.79" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ali-shaikh-2965a93a9" },
  { name: "Twitter / X", url: "https://x.com/AliShaikh79" },
  { name: "Threads", url: "https://www.threads.com/@alishaikh.79" },
  { name: "YouTube", url: "https://youtube.com/@alishaikh.79" },
  { name: "Pinterest", url: "https://pin.it/7EgqezxXL" },
];

export const SocialLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-3 block">Connect</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Let's stay <span className="text-gradient">connected</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group glass rounded-2xl px-6 py-5 flex items-center justify-between hover:scale-[1.02] transition-transform duration-300"
            >
              <span className="font-medium text-foreground">{s.name}</span>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
