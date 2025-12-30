import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/", isRoute: true },
  // { label: "Services", href: "/services", isRoute: true },
  { label: "Projects", href: "/projects", isRoute: true },
  { label: "Skills", href: "/#skills", isRoute: false },
  { label: "Experience", href: "/#experience", isRoute: false },
  { label: "Contact", href: "/#contact", isRoute: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation when on the home page
  const handleNavClick = (href: string, isRoute: boolean) => {
    setIsMobileOpen(false);
    
    // If it's a hash link and we're already on the home page
    if (!isRoute && href.startsWith("/#")) {
      const hash = href.substring(1); // Remove the leading "/"
      if (location.pathname === "/") {
        // We're on home page, just scroll to the section
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      // If not on home page, the Link will navigate there
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="section-container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="text-xl font-heading font-bold text-foreground hover:text-primary transition-colors">
          SABBIR<span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => handleNavClick(link.href, link.isRoute)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button size="sm" asChild>
            <a href="/resume.pdf" download>
              <Download className="w-4 h-4 mr-2" />
              Get Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center text-foreground"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="section-container py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => handleNavClick(link.href, link.isRoute)}
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Button className="w-full mt-4" asChild>
                <a href="/resume.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Get Resume
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;