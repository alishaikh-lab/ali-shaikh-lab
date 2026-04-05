import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const dark = saved === "dark" || (!saved && prefersDark);
    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      className="glass relative flex h-10 w-[74px] items-center rounded-full px-1.5"
      aria-label="Toggle dark mode"
    >
      <motion.div
        initial={false}
        animate={{ x: isDark ? 33 : 0 }}
        transition={{ type: "spring", stiffness: 340, damping: 24 }}
        className="absolute left-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-background shadow-lg"
      >
        {isDark ? <Moon size={14} /> : <Sun size={14} />}
      </motion.div>

      <div className="flex w-full items-center justify-between px-2 text-muted-foreground">
        <Sun size={13} className={isDark ? "opacity-45" : "opacity-100"} />
        <Moon size={13} className={isDark ? "opacity-100" : "opacity-45"} />
      </div>
    </button>
  );
};
