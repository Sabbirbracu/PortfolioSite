import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Github, Mail, Terminal, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Software Engineer",
  "Researcher",
  "Computer Vision Expert"
];

const codeSnippets = [
  { code: "const build = () => 🚀", top: "15%", left: "5%", delay: 0 },
  { code: "async deploy()", top: "25%", right: "8%", delay: 0.5 },
  { code: "{ status: 'success' }", top: "70%", left: "3%", delay: 1 },
  { code: "npm run dev", top: "80%", right: "5%", delay: 1.5 },
  { code: "<Component />", top: "45%", left: "2%", delay: 0.8 },
  { code: "git push origin main", top: "60%", right: "3%", delay: 1.2 },
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
    <section className="relative h-screen flex items-center overflow-hidden">
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

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            y: [0, -10, 0]
          }}
          transition={{ 
            delay: snippet.delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute hidden lg:block pointer-events-none z-0"
          style={{
            top: snippet.top,
            left: snippet.left,
            right: snippet.right,
          }}
        >
          <div className="px-3 py-1.5 rounded-md bg-card/40 border border-border/30 backdrop-blur-sm">
            <code className="text-xs font-mono text-primary/70">{snippet.code}</code>
          </div>
        </motion.div>
      ))}

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center justify-center h-screen py-12">
          
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
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
            className="text-center space-y-4 max-w-5xl"
          >
            {/* Pre-title */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 text-primary/80"
            >
              <Terminal className="w-4 h-4" />
              <span className="font-mono text-sm tracking-wider">Hello People, I'm</span>
            </motion.div>

            {/* Name - Large Impact */}
            <h1 className="relative">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="block text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter text-foreground"
              >
                SABBIR
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="block text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tighter text-gradient"
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
              className="h-10 flex items-center justify-center"
            >
              <div className="flex items-center gap-2 px-5 py-2 bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg">
                <span className="text-primary font-mono">&gt;</span>
                <span className="text-base md:text-lg font-mono text-foreground">
                  {displayText}
                </span>
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-0.5 h-5 bg-primary"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              I design, build, and scale production-grade web systems.{" "}
              <span className="text-foreground">
                Currently exploring AI/ML and Computer Vision to enhance real-world applications.
              </span>
            </motion.p>

            {/* Tech Stack - Moved up */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground/60 pt-2"
            >
              {["React", "Node.js", "TypeScript", "Python", "MongoDB", "Computer Vision"].map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.75 + i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-primary/40" />}
                  <span className="font-mono">{tech}</span>
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="group h-12 px-8 text-base font-semibold rounded-xl bg-primary hover:bg-primary/90 shadow-[0_0_30px_hsl(var(--primary)/0.3)] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300">
                <span>View Projects</span>
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base font-semibold rounded-xl border-2 border-foreground/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300">
                Work with me
              </Button>
            </div>

            {/* Social Links - Circle Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-3 mt-4"
            >
              {[
                { icon: Linkedin, href: "https://linkedin.com/in/sabbir-ahmad", hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10" },
                { icon: Github, href: "https://github.com/sabbir-ahmad", hoverColor: "hover:text-foreground hover:border-foreground/50 hover:bg-foreground/10" },
                { icon: Mail, href: "mailto:sabbir@example.com", hoverColor: "hover:text-primary hover:border-primary/50 hover:bg-primary/10" }
              ].map(({ icon: Icon, href, hoverColor }, index) => (
                <a
                  key={index}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-center w-11 h-11 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-muted-foreground transition-all duration-300 ${hoverColor}`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/50">Scroll</span>
          <div className="w-5 h-7 rounded-full border border-primary/30 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
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
