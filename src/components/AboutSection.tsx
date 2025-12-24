import { motion, useMotionValue, useTransform } from "framer-motion";
import { GraduationCap, Globe, Mail, Code, Terminal, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px]" />
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image Side - Left */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
            style={{ perspective: 1000 }}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              className="relative"
            >
              {/* Main Card */}
              <div className="relative max-w-lg mx-auto">
                {/* Ambient Glow */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary/30 via-primary/5 to-cyan-500/20 rounded-[40px] blur-3xl opacity-40" />
                
                {/* Card Frame */}
                <div className="relative rounded-[32px] p-[2px] bg-gradient-to-br from-primary/50 via-border/20 to-cyan-500/30">
                  <div className="rounded-[30px] bg-background/95 backdrop-blur-xl overflow-hidden">
                    
                    {/* Image */}
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face"
                        alt="Sabbir Ahmad - Full Stack Developer"
                        className="w-full aspect-[4/5] object-cover"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                      
                      {/* Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-8">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          <span className="inline-block px-3 py-1 rounded-full text-xs font-mono text-primary bg-primary/10 border border-primary/20 mb-3">
                            Software Engineer
                          </span>
                          <h3 className="text-3xl font-bold font-heading text-foreground">
                            Sabbir Ahmad
                          </h3>
                        </motion.div>
                      </div>
                    </div>

                    {/* Stats Bar */}
                    <div className="grid grid-cols-3 divide-x divide-border/30 border-t border-border/30">
                      {[
                        { value: "17+", label: "Projects" },
                        { value: "3+", label: "Years" },
                        { value: "8+", label: "Stacks" },
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="p-5 text-center group hover:bg-primary/5 transition-colors"
                        >
                          <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                          <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mt-1">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center shadow-xl shadow-primary/30"
                >
                  <Code className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center shadow-xl shadow-cyan-500/30"
                >
                  <Terminal className="w-6 h-6 text-white" />
                </motion.div>

                {/* Status Indicator */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="absolute top-6 -left-4 z-10"
                >
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border/50 shadow-xl backdrop-blur-xl">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    <span className="text-xs font-medium text-foreground/80">Open to work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side - Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 space-y-8"
          >
            {/* Header */}
            <div>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 text-primary font-mono text-sm tracking-wider uppercase mb-4"
              >
                <span className="w-8 h-px bg-primary" />
                About Me
              </motion.span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
                Full Stack
                <br />
                <span className="text-gradient">Software Engineer</span>
              </h2>
            </div>

            {/* Bio */}
            <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Sabbir Ahmad</span>, a Full Stack Software Engineer in my final semester of Computer Science and Engineering at BRAC University.
              </p>
              
              <p>
                I've delivered <span className="text-primary font-mono font-bold">17+</span> production-grade projects for startups and international clients—handling everything from system architecture to cloud deployment.
              </p>
              
              <p>
                Currently exploring <span className="text-foreground font-medium">AI/ML and Computer Vision</span> to build intelligent, scalable web products.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <div className="group flex items-center gap-2 px-5 py-3 rounded-full bg-background border border-border/50 hover:border-primary/30 transition-all cursor-default">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">BRAC University — CSE</span>
              </div>
              <div className="group flex items-center gap-2 px-5 py-3 rounded-full bg-background border border-border/50 hover:border-cyan-500/30 transition-all cursor-default">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-foreground/80">Remote & Onsite Ready</span>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="group relative h-14 px-8 rounded-full bg-foreground text-background hover:bg-foreground/90 font-semibold text-base"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
