import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Linkedin, Github, Mail, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Software Engineer",
  "Researcher",
  "Computer Vision Expert"
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const role = roles[currentRole];
    
    if (isTyping) {
      if (displayText.length < role.length) {
        const timeout = setTimeout(() => {
          setDisplayText(role.slice(0, displayText.length + 1));
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
        return () => clearTimeout(timeout);
      } else {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }
  }, [displayText, isTyping, currentRole]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-background">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)]" />
        
        {/* Animated gradient orb */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 blur-3xl"
        />

        {/* Scan lines effect */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground)) 2px, hsl(var(--foreground)) 3px)',
          }}
        />

        {/* Grid dots */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Open to Remote & Onsite Opportunities</span>
              <span className="w-2 h-2 rounded-full bg-[hsl(142_76%_50%)] animate-pulse" />
            </div>
          </motion.div>

          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center space-y-6 max-w-5xl"
          >
            {/* Pre-title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 text-primary/80"
            >
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-sm tracking-wider">Hello World, I'm</span>
            </motion.div>

            {/* Name - Large Impact */}
            <h1 className="relative">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-6xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tighter text-foreground"
              >
                SABBIR
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block text-6xl md:text-8xl lg:text-9xl font-bold font-heading tracking-tighter text-gradient"
              >
                AHMAD
              </motion.span>
              
              {/* Decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute -right-4 top-1/2 w-20 h-px bg-gradient-to-r from-primary to-transparent hidden lg:block"
              />
            </h1>

            {/* Typing Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="h-12 flex items-center justify-center"
            >
              <div className="flex items-center gap-2 px-6 py-3 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                <span className="text-primary font-mono">&gt;</span>
                <span className="text-lg md:text-xl font-mono text-foreground">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-0.5 h-6 bg-primary"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              I design, build, and scale production-grade web systems.{" "}
              <span className="text-foreground">
                Currently exploring AI/ML and Computer Vision to enhance real-world applications.
              </span>
            </motion.p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row items-center gap-4"
          >
            <Button size="lg" className="group h-14 px-8 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300">
              <span>View Projects</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold rounded-xl border-2 border-foreground/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
              Work with me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-16 flex items-center gap-2"
          >
            {[
              { icon: Linkedin, href: "https://linkedin.com/in/sabbir-ahmad", label: "LinkedIn", hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50" },
              { icon: Github, href: "https://github.com/sabbir-ahmad", label: "GitHub", hoverColor: "hover:text-foreground hover:border-foreground/50" },
              { icon: Mail, href: "mailto:sabbir@example.com", label: "Email", hoverColor: "hover:text-primary hover:border-primary/50" }
            ].map(({ icon: Icon, href, label, hoverColor }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm text-muted-foreground transition-all duration-300 ${hoverColor} hover:bg-card/60`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{label}</span>
              </a>
            ))}
          </motion.div>

          {/* Bottom Tech Stack */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground/60"
          >
            {["React", "Node.js", "TypeScript", "Python", "MongoDB", "Computer Vision"].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                {i > 0 && <span className="w-1 h-1 rounded-full bg-primary/40" />}
                <span className="font-mono">{tech}</span>
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Scroll</span>
          <div className="w-5 h-8 rounded-full border border-primary/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
