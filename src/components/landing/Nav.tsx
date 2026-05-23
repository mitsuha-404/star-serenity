import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Reading", href: "#reading" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-5 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <Sparkles className="w-5 h-5 text-gold transition-transform group-hover:rotate-12" />
          <span className="font-display text-xl tracking-wide text-gradient-gold">Numera</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-foreground/80 hover:text-gold transition-colors relative after:absolute after:left-0 after:bottom-[-4px] after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#reading"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-gold text-primary-foreground text-sm font-medium hover:scale-105 transition-transform glow-gold"
        >
          Free Reading
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-gold p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden glass mt-3 mx-4 rounded-2xl p-6 animate-fade-up">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="block text-foreground/90 hover:text-gold text-lg"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                onClick={() => setOpen(false)}
                href="#reading"
                className="block text-center mt-2 px-5 py-3 rounded-full bg-gold text-primary-foreground font-medium"
              >
                Free Lucky Number Reading
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}