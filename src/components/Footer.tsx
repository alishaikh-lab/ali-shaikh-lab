import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="px-5 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-8" />
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <Link to="/" className="font-heading font-bold text-foreground text-sm block">
              Ali Shaikh
            </Link>
            <p className="text-[11px] text-muted-foreground mt-1 max-w-xs leading-relaxed">
              Designing and building products that feel like they were
              made by someone who cares.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
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
        <div className="mt-6 pt-5 border-t border-border/30">
          <span className="text-[10px] text-muted-foreground/60">
            © {new Date().getFullYear()} Ali Shaikh — Built with obsession.
          </span>
        </div>
      </div>
    </footer>
  );
};
