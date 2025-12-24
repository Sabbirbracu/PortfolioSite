import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedGrid from "./AnimatedGrid";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedGrid />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background pointer-events-none" />
      
      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="badge-available">
                <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                Open to Remote & Onsite Opportunities
              </span>
            </motion.div>

            {/* Main Title */}
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl md:text-2xl text-muted-foreground font-medium"
              >
                Hi, I'm
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading tracking-tight"
              >
                <span className="text-foreground">Sabbir Ahmad</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-2xl md:text-3xl font-heading text-gradient glow-text"
              >
                Full Stack Software Engineer
              </motion.p>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              I design, build, and scale production-grade web systems using modern JavaScript stacks.
              <br />
              <span className="text-foreground/80">
                Currently exploring <span className="mono-accent">AI/ML</span> and{" "}
                <span className="mono-accent">Computer Vision</span> to enhance real-world applications.
              </span>
            </motion.p>

            {/* Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {["MERN Stack", "REST APIs", "Scalable Systems", "CI/CD"].map((tag, index) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm font-mono text-primary/80 bg-primary/5 border border-primary/20 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
              
              {/* Floating Code Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 glass-card p-4 font-mono text-sm"
              >
                <span className="text-primary">const</span>{" "}
                <span className="text-foreground">stack</span>{" "}
                <span className="text-muted-foreground">=</span>{" "}
                <span className="text-neon-green">"MERN"</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-20 left-0 glass-card p-4 font-mono text-sm"
              >
                <span className="text-primary">export</span>{" "}
                <span className="text-muted-foreground">{"{"}</span>{" "}
                <span className="text-foreground">API</span>{" "}
                <span className="text-muted-foreground">{"}"}</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 right-10 glass-card p-4 font-mono text-sm"
              >
                <span className="text-primary">await</span>{" "}
                <span className="text-foreground">deploy</span>
                <span className="text-muted-foreground">()</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;