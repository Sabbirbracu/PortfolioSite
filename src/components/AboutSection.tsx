import { motion } from "framer-motion";
import { GraduationCap, Globe, Mail, Code, Terminal, Cpu, Braces, Database, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import sabbirProfile from "@/assets/sabbir-profile.png";

const AboutSection = () => {
  const techIcons = [
    { icon: Braces, label: "React" },
    { icon: Database, label: "MongoDB" },
    { icon: Terminal, label: "Node.js" },
    { icon: Cloud, label: "Cloud" },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 opacity-30" style={{
          background: `radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.3), transparent),
                       radial-gradient(ellipse 60% 40% at 100% 50%, hsl(var(--primary) / 0.1), transparent),
                       radial-gradient(ellipse 60% 40% at 0% 80%, hsl(180 70% 50% / 0.1), transparent)`
        }} />
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-mono text-sm tracking-wider uppercase">About Me</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold font-heading">
            Full Stack <span className="text-gradient">Software Engineer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Image Column - 5 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Image Container */}
            <div className="relative mx-auto max-w-md">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-transparent to-cyan-500/20 blur-2xl opacity-60" />
              
              {/* Hexagonal Frame Effect */}
              <div className="relative">
                {/* Rotating Border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-3 rounded-3xl opacity-50"
                  style={{
                    background: `conic-gradient(from 0deg, hsl(var(--primary)), transparent, hsl(180 70% 50%), transparent, hsl(var(--primary)))`
                  }}
                />
                
                {/* Image Wrapper */}
                <div className="relative rounded-3xl overflow-hidden bg-background p-1">
                  <div className="rounded-2xl overflow-hidden">
                    <img
                      src={sabbirProfile}
                      alt="Sabbir Ahmad - Full Stack Developer"
                      className="w-full aspect-[4/5] object-cover object-top"
                    />
                    
                    {/* Overlay Effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-40" />
                    
                    {/* Scan Line Animation */}
                    <motion.div
                      animate={{ y: ['-100%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      className="absolute inset-x-0 h-20 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Tech Icons */}
              {techIcons.map((tech, index) => (
                <motion.div
                  key={tech.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  animate={{ y: [0, -8, 0] }}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  className={`absolute ${
                    index === 0 ? '-top-4 -left-4' :
                    index === 1 ? '-top-4 -right-4' :
                    index === 2 ? '-bottom-4 -left-4' :
                    '-bottom-4 -right-4'
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-background border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10 backdrop-blur-sm">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                </motion.div>
              ))}

              {/* Status Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="absolute -right-8 top-1/2 -translate-y-1/2 hidden lg:block"
              >
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 border border-primary/20 backdrop-blur-xl shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-mono text-foreground/80">Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Column - 7 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "17+", label: "Projects", icon: Code },
                { value: "3+", label: "Years Exp", icon: Terminal },
                { value: "8+", label: "Tech Stacks", icon: Cpu },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-cyan-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-5 rounded-2xl bg-background/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all">
                    <stat.icon className="w-5 h-5 text-primary mb-3" />
                    <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Sabbir Ahmad</span>, a Full Stack Software Engineer currently in my final semester of Computer Science and Engineering at BRAC University. I specialize in building scalable, production-grade web applications designed to perform reliably in real-world environments.
              </p>
              
              <p>
                Over the last few years, I've worked across <span className="text-primary font-mono font-bold">17+</span> live projects for startups and international clients, contributing end-to-end—from system architecture and API development to frontend performance optimization and cloud deployment.
              </p>
              
              <p>
                Alongside full stack engineering, I'm actively exploring <span className="text-foreground font-medium">AI/ML and Computer Vision</span> to integrate intelligent features into modern web products. I value clean architecture, maintainable codebases, and engineering decisions that scale beyond the MVP stage.
              </p>
            </div>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-sm"
              >
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-foreground/80">Final-Year CSE @ BRAC University</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-sm"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-foreground/80">Open to Remote & Onsite</span>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-primary-foreground font-semibold px-8 rounded-full shadow-lg shadow-primary/25"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
