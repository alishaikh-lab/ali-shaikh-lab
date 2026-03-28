import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 sm:py-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <Link to="/" className="font-heading font-bold text-foreground text-base mb-0.5 block tracking-tight">Ali Shaikh</Link>
            <p className="text-[11px] text-muted-foreground">Builder · Innovator · Dreamer</p>
          </div>
          <div className="flex gap-5">
            {["About", "Projects", "Blog", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border">
          <span className="text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Ali Shaikh. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
