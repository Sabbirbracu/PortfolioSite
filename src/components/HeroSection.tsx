import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Linkedin, Github, Mail, Circle } from "lucide-react";
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Minimal geometric background */}
      <div className="absolute inset-0">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.02]" />
        
        {/* Thin horizontal lines */}
        <div className="absolute inset-0 opacity-[0.04]">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{ top: `${(i + 1) * 12}%` }}
            />
          ))}
        </div>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px]">
          <div className="absolute top-20 right-20 w-72 h-72 border border-primary/10 rounded-full" />
          <div className="absolute top-32 right-32 w-48 h-48 border border-primary/5 rounded-full" />
        </div>
      </div>

      <div className="section-container relative z-10 py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content - Left */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[hsl(142_76%_36%/0.1)] border border-[hsl(142_76%_36%/0.2)]">
                <Circle className="w-2 h-2 fill-[hsl(142_76%_50%)] text-[hsl(142_76%_50%)] animate-pulse" />
                <span className="text-xs font-medium text-[hsl(142_76%_50%)] uppercase tracking-wider">Available</span>
              </div>
              <span className="text-xs text-muted-foreground tracking-wide">Remote & Onsite</span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-muted-foreground text-sm font-medium uppercase tracking-[0.2em]">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight leading-[1.1]">
                <span className="text-foreground">Sabbir</span>
                <br />
                <span className="text-gradient">Ahmad</span>
              </h1>
            </motion.div>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-10 overflow-hidden"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentRole}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-px bg-primary" />
                  <span className="text-lg md:text-xl font-medium text-primary font-heading">
                    {roles[currentRole]}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed"
            >
              I design, build, and scale production-grade web systems.{" "}
              <span className="text-foreground">
                Currently exploring AI/ML and Computer Vision to enhance real-world applications.
              </span>
            </motion.p>

            {/* CTA Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Button size="lg" className="group h-12 px-6 rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
                View Projects
                <ArrowUpRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 rounded-none border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5">
                Work with me
              </Button>
            </motion.div>

            {/* Social row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex items-center gap-6 pt-8 border-t border-border/50"
            >
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Connect</span>
              <div className="flex items-center gap-1">
                <a
                  href="https://linkedin.com/in/sabbir-ahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 hover:bg-primary/10 transition-colors duration-200"
                >
                  <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="https://github.com/sabbir-ahmad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 hover:bg-primary/10 transition-colors duration-200"
                >
                  <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
                <a
                  href="mailto:sabbir@example.com"
                  className="group p-3 hover:bg-primary/10 transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Stats/Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="relative bg-card/40 backdrop-blur-sm border border-border/50 p-8">
                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

                <div className="space-y-8">
                  {/* Expertise */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Core Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {["React", "Node.js", "TypeScript", "Python", "MongoDB"].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-mono text-foreground/80 bg-background/50 border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <p className="text-3xl font-bold font-heading text-foreground">3+</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold font-heading text-foreground">20+</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Projects Built</p>
                    </div>
                  </div>

                  {/* Focus areas */}
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-4">Focus Areas</p>
                    <div className="space-y-2">
                      {["Full Stack Development", "AI/ML Integration", "Computer Vision"].map((area, i) => (
                        <div key={area} className="flex items-center gap-3">
                          <span className="text-primary font-mono text-xs">0{i + 1}</span>
                          <span className="text-sm text-foreground/80">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 border border-primary/20 flex items-center justify-center"
              >
                <span className="font-mono text-primary text-xs">{'</>'}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
