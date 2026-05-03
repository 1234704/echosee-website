import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Glasses } from "lucide-react";
import { Button } from "./Button";

const links = [
  { href: "#about", label: "About" },
  { href: "#product", label: "Product" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#impact", label: "Impact" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""
      }`}
    >
      <nav className="container-pad flex items-center justify-between h-16 md:h-20" aria-label="Primary">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-xl bg-gradient-primary shadow-glow group-hover:scale-110 transition-transform">
            <Glasses className="w-5 h-5 text-primary-foreground" aria-hidden />
          </span>
          <span className="font-display font-bold text-lg tracking-tight">
            Echo<span className="gradient-text">See</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-px after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button variant="hero" size="default" asChild>
            <a href="#preorder">Pre-Order</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl"
        >
          <ul className="container-pad py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-foreground/90 hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="hero" className="w-full" asChild>
                <a href="#preorder" onClick={() => setOpen(false)}>Pre-Order</a>
              </Button>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};
