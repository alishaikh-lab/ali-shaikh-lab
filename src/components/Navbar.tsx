import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

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
        className="fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <nav
          className={`glass-nav rounded-[1.6rem] md:rounded-[2rem] px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 flex items-center justify-between transition-all duration-700 max-w-5xl mx-auto ${
            scrolled ? "shadow-2xl scale-[0.985]" : ""
          }`}
        >
          <Link to="/" className="font-heading font-bold text-foreground tracking-tight flex items-center gap-2.5 min-w-0 group">
            <motion.span
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-2xl bg-foreground text-background flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-lg"
            >
              A
            </motion.span>
            <span className="min-w-0 leading-none">
              <span className="block text-sm font-bold tracking-tight">Ali Shaikh</span>
              <span className="hidden sm:block text-[10px] font-medium text-muted-foreground mt-1 tracking-[0.18em] uppercase">
                Product Builder
              </span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative px-4 py-2 text-[12px] font-medium rounded-full transition-all duration-300 group"
              >
                {location.pathname === link.path && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-foreground rounded-full shadow-lg"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-background"
                      : "text-muted-foreground group-hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <div className="ml-2 pl-2 border-l border-border/30">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex md:hidden items-center gap-1">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full hover:bg-secondary/60 transition-colors"
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
              className="absolute inset-0 bg-background/70 backdrop-blur-2xl"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 mx-3 mt-24 rounded-[2rem] glass-strong p-4 shadow-2xl"
            >
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="px-2 pb-4"
              >
                <p className="text-[10px] text-muted-foreground tracking-[0.28em] uppercase font-medium mb-2">
                  Navigation
                </p>
                <p className="text-sm text-foreground font-heading font-semibold">
                  Explore the site with a layout tuned for mobile.
                </p>
              </motion.div>

              <div className="space-y-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ delay: i * 0.05, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block py-4 px-5 rounded-2xl text-base font-heading font-semibold transition-all duration-300 ${
                        location.pathname === link.path
                          ? "bg-foreground text-background shadow-lg"
                          : "text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
