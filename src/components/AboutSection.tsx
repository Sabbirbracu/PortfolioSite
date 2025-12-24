import { motion } from "framer-motion";
import { GraduationCap, Globe, Mail, Code, Sparkles, Terminal, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const stats = [
    { label: "Live Projects", value: "17+", icon: Code },
    { label: "Years Experience", value: "3+", icon: Terminal },
    { label: "Tech Stacks", value: "8+", icon: Cpu },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Full Stack <span className="text-gradient">Software Engineer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            {/* Animated Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyan-500 to-primary rounded-2xl opacity-50 group-hover:opacity-75 blur-md transition-all duration-500" />
            
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden bg-background border border-border/50">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/60 rounded-tl-2xl z-10" />
              <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-primary/60 rounded-tr-2xl z-10" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-primary/60 rounded-bl-2xl z-10" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary/60 rounded-br-2xl z-10" />

              {/* Profile Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                  alt="Sabbir Ahmad - Full Stack Developer"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Scanline Effect */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
                }} />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute bottom-6 left-6 right-6"
                >
                  <div className="glass-card p-4 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-mono text-foreground/90">Available for opportunities</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-cyan-500/20 rounded-xl -z-10" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="relative group/stat"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-500/10 rounded-xl blur-sm opacity-0 group-hover/stat:opacity-100 transition-opacity" />
                  <div className="relative glass-card p-4 text-center border border-primary/10 hover:border-primary/30 transition-colors">
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bio Content */}
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                I'm <span className="text-foreground font-medium">Sabbir Ahmad</span>, a Full Stack Software Engineer currently in my final semester of Computer Science and Engineering at BRAC University. I specialize in building scalable, production-grade web applications that are designed to perform reliably in real-world environments.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Over the last few years, I've worked across <span className="text-primary font-mono">17+</span> live projects for startups and international clients, contributing end-to-end—from system architecture and API development to frontend performance optimization and cloud deployment. My primary focus is MERN-based development, with experience adapting frameworks based on product and business needs.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Alongside full stack engineering, I'm actively exploring <span className="text-foreground font-medium">AI/ML and Computer Vision</span> to integrate intelligent features into modern web products. I value clean architecture, maintainable codebases, and engineering decisions that scale beyond the MVP stage.
              </p>
            </div>

            {/* Info Line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4 py-4 border-y border-border/30"
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>Final-Year CSE Student at BRAC University</span>
              </div>
              <div className="h-4 w-px bg-border/50 hidden sm:block" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4 text-primary" />
                <span>Open to Remote & Onsite Roles</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                  <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
                </span>
                {/* Button Shine Effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
