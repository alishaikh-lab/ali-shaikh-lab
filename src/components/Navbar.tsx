import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          className={`glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-[1.75rem] px-3 py-2.5 sm:px-4 lg:px-5 transition-all duration-700 ${
            scrolled ? "translate-y-0 shadow-[0_22px_60px_rgba(15,23,42,0.14)]" : ""
          }`}
        >
          <Link to="/" className="group flex min-w-0 items-center gap-3 text-foreground">
            <motion.span
              whileHover={{ rotate: -8, scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-foreground text-xs font-bold text-background shadow-lg"
            >
              A
            </motion.span>
            <span className="min-w-0 leading-none">
              <span className="block font-heading text-sm font-bold tracking-tight">Ali Shaikh</span>
              <span className="hidden sm:block mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
                Design x Product x AI
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center gap-1 rounded-full bg-background/60 px-2 py-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative rounded-full px-4 py-2 text-[12px] font-medium transition-all duration-300"
                >
                  {location.pathname === link.path && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-foreground shadow-lg"
                      transition={{ type: "spring", stiffness: 500, damping: 36 }}
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      location.pathname === link.path ? "text-background" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            <div className="ml-2 flex items-center gap-2">
              <ThemeToggle />
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full bg-foreground px-4 py-2 text-[12px] font-medium text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setIsOpen((open) => !open)}
              className="rounded-full bg-background/70 p-2.5 text-foreground transition-colors hover:bg-secondary/70"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/78 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mx-3 mt-24 rounded-[2rem] glass-strong p-4 shadow-2xl"
            >
              <div className="px-2 pb-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-muted-foreground">Navigation</p>
                <p className="mt-2 text-sm font-heading font-semibold text-foreground">
                  Move through the site with a cleaner mobile flow.
                </p>
              </div>

              <div className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: i * 0.05, duration: 0.28 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-2xl px-5 py-4 text-base font-heading font-semibold transition-all duration-300 ${
                        location.pathname === link.path
                          ? "bg-foreground text-background shadow-lg"
                          : "bg-background/45 text-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-[hsl(var(--highlight))] px-5 py-4 text-sm font-medium text-white shadow-lg"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
