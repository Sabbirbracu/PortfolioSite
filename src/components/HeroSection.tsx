import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Linkedin, Github, Mail, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Software Engineer",
  "Researcher",
  "Computer Vision Expert"
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large gradient orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
        
        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="section-container relative z-10 py-20">
        {/* Centered Layout */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Top Bar - Status & Location */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[hsl(142_76%_36%/0.15)] text-[hsl(142_76%_50%)] border border-[hsl(142_76%_36%/0.3)]">
              <span className="w-2 h-2 rounded-full bg-[hsl(142_76%_50%)] animate-pulse" />
              Open to Opportunities
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-muted/50 text-muted-foreground border border-border/50">
              <MapPin className="w-3.5 h-3.5" />
              Remote & Onsite
            </span>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground font-medium tracking-wide"
            >
              Hi, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading tracking-tight"
            >
              <span className="text-foreground">Sabbir</span>{" "}
              <span className="text-gradient">Ahmad</span>
            </motion.h1>

            {/* Dynamic Role */}
            <div className="h-12 md:h-14 flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 30, opacity: 0, filter: 'blur(10px)' }}
                  animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                  exit={{ y: -30, opacity: 0, filter: 'blur(10px)' }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="flex items-center gap-3"
                >
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                  <span className="text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-primary">
                    {roles[currentRole]}
                  </span>
                  <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 max-w-2xl"
          >
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
              I design, build, and scale production-grade web systems using modern JavaScript stacks.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground mt-2">
              Currently exploring AI/ML and Computer Vision to enhance real-world applications.
            </p>
          </motion.div>

          {/* Tech Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {["MERN Stack", "REST APIs", "Scalable Systems", "CI/CD", "Computer Vision"].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="px-4 py-1.5 text-sm font-mono text-primary/90 bg-primary/5 border border-primary/20 rounded-full hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="group px-8 h-12 text-base rounded-full">
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group px-8 h-12 text-base rounded-full border-primary/30 hover:border-primary/60">
              Work with me
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12 flex items-center justify-center gap-3"
          >
            <span className="text-sm text-muted-foreground mr-2">Connect:</span>
            <a
              href="https://linkedin.com/in/sabbir-ahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 rounded-full bg-card/60 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:scale-110 hover:shadow-[0_0_25px_rgba(10,102,194,0.4)]"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/sabbir-ahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-11 h-11 rounded-full bg-card/60 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-foreground hover:border-foreground hover:scale-110 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-background transition-colors duration-300" />
            </a>
            <a
              href="mailto:sabbir@example.com"
              className="group w-11 h-11 rounded-full bg-card/60 border border-border/50 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:scale-110 hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)]"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
