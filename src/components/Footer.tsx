import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="section-padding py-10">
    <div className="max-w-5xl mx-auto">
      <div className="section-divider mb-8" />
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div>
          <Link to="/" className="font-heading font-bold text-foreground text-sm">
            Ali Shaikh
          </Link>
          <p className="text-[11px] text-muted-foreground mt-1.5 max-w-xs leading-relaxed">
            Building products that feel like they were made by someone who cares.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {["About", "Projects", "Blog", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border/20">
        <span className="text-[10px] text-muted-foreground/50">
          © {new Date().getFullYear()} Ali Shaikh — Built with obsession.
        </span>
      </div>
    </div>
  </footer>
);
