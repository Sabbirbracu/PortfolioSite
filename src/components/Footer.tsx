import { Github, Instagram, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-14 pb-10 border-t border-border/50 bg-gradient-to-t from-background to-muted/5">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand / Contact */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-bold text-foreground">Sabbir Ahmad</h3>
            <p className="text-sm text-muted-foreground">Full-Stack Developer & Consultant — building scalable web apps.</p>
            <div className="text-sm text-muted-foreground space-y-2">
              <a href="mailto:sabbirahmad653@gmail.com" className="flex items-center gap-2 hover:text-primary">
                <Mail className="w-4 h-4" />
                <span>sabbirahmad653@gmail.com</span>
              </a>
              <a href="tel:+8801304867542" className="flex items-center gap-2 hover:text-primary">
                <Phone className="w-4 h-4" />
                <span>+880 1304 867542</span>
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L19 8v7a5 5 0 01-5 5H10a5 5 0 01-5-5V8l7-6z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Merul Badda, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:items-center">
            <h4 className="text-lg font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
              {/* <Link to="/services" className="hover:text-primary">Services</Link> */}
              <Link to="/projects" className="hover:text-primary">Projects</Link>
              <Link to="/blog" className="hover:text-primary">Blogs</Link>
              <Link to="/contact" className="hover:text-primary">Contact</Link>
              {/* <Link to="/affiliate/register" className="hover:text-primary">Affiliate Registration</Link> */}
              {/* <Link to="/affiliate/login" className="hover:text-primary">Affiliate Login</Link> */}
            </div>
          </div>

          {/* Social */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-foreground mb-3">Follow & Connect</h4>
            <div className="flex items-center justify-start md:justify-end gap-3 mb-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>© {currentYear} Sabbir Ahmad. All rights reserved.</p>
              <div className="mt-2">
                <Link to="/admin/login" className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors">Admin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;