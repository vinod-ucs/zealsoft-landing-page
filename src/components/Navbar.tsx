import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ZealSoftLogo from "./ZealSoftLogo";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-white/60 text-xs hidden md:block">
        <div className="section-container flex items-center justify-between py-2.5">
          <div className="flex items-center gap-8">
            <span className="flex items-center gap-2 tracking-wide"><MapPin className="w-3 h-3" /> Current Location: US</span>
            <span className="flex items-center gap-2 tracking-wide"><Phone className="w-3 h-3" /> +971-585513 </span>
          </div>
          <div className="flex items-center gap-8">
            <a href="mailto:info@zealsoft.com" className="flex items-center gap-2 hover:text-white transition-colors tracking-wide"><Mail className="w-3 h-3" /> info@zealsoft.com</a>
            <a href="#careers" className="hover:text-white transition-colors tracking-wide">Build a Career</a>
            <a href="#contact" className="hover:text-white transition-colors tracking-wide">Contact Us</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-foreground/5 border-b border-border/60"
            : "bg-background border-b border-border/30"
        }`}
      >
        <div className="section-container flex items-center justify-between h-18 md:h-20">
          <a href="#">
            <ZealSoftLogo />
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-brand transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-brand after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 bg-brand text-brand-foreground font-bold rounded-lg hover:brightness-110 active:scale-95 transition-all text-xs uppercase tracking-wider shadow-lg shadow-brand/20"
            >
              Consult Us
            </a>
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-border bg-background"
            >
              <div className="section-container py-6 flex flex-col gap-5">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-brand text-brand-foreground font-semibold rounded-full text-sm">
                  Get a Free Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
