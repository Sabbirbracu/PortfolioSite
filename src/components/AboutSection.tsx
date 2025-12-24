import { motion } from "framer-motion";
import { GraduationCap, Globe, Mail, Code, Terminal, Database, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const skills = [
    { icon: Code, label: "React" },
    { icon: Terminal, label: "Node.js" },
    { icon: Database, label: "MongoDB" },
    { icon: Cpu, label: "Express" },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.4) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary font-mono text-sm tracking-wider uppercase mb-6">
            <Zap className="w-4 h-4" />
            About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-heading">
            Full Stack <span className="text-gradient">Software Engineer</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            {/* Animated Border Container */}
            <div className="relative max-w-md mx-auto">
              {/* Outer Animated Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary via-cyan-500 to-primary opacity-75 blur-lg group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
              
              {/* Rotating Border Effect */}
              <div className="absolute -inset-[2px] rounded-2xl overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0deg,hsl(var(--primary))_60deg,transparent_120deg)]"
                />
              </div>

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden bg-background border border-primary/20">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
                  <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />
                </div>
                <div className="absolute top-0 right-0 w-16 h-16">
                  <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-cyan-500 to-transparent" />
                  <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-cyan-500 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 w-16 h-16">
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-transparent" />
                  <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-cyan-500 to-transparent" />
                </div>
                <div className="absolute bottom-0 right-0 w-16 h-16">
                  <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary to-transparent" />
                  <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-primary to-transparent" />
                </div>

                {/* Image */}
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                    alt="Sabbir Ahmad"
                    className="w-full aspect-[4/5] object-cover"
                  />
                  
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
                  }} />

                  {/* Animated Scan Line */}
                  <motion.div
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                    className="absolute inset-x-0 h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent pointer-events-none"
                  />

                  {/* Bottom Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

                  {/* Name Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-mono text-green-400 uppercase tracking-wider">Online • Available</span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-foreground">Sabbir Ahmad</h3>
                  </div>
                </div>

                {/* Tech Stack Bar */}
                <div className="p-4 bg-background/50 backdrop-blur-sm border-t border-primary/10">
                  <div className="flex items-center justify-around">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ y: -4, scale: 1.1 }}
                        className="flex flex-col items-center gap-1 cursor-default"
                      >
                        <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group hover:bg-primary/20 hover:border-primary/40 transition-all">
                          <skill.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">{skill.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "17+", label: "Projects" },
                { value: "3+", label: "Years Exp" },
                { value: "8+", label: "Tech Stacks" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  {/* Neon Glow on Hover */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-cyan-500 rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity" />
                  
                  <div className="relative p-4 rounded-xl bg-background border border-border/50 group-hover:border-primary/30 transition-colors text-center">
                    <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bio Content */}
            <div className="relative">
              {/* Terminal-like Header */}
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">~/about/sabbir.md</span>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <span className="text-primary font-mono">{'>'}</span> Full Stack Software Engineer in my final semester of 
                  <span className="text-foreground font-medium"> Computer Science</span> at BRAC University.
                </p>
                
                <p className="leading-relaxed">
                  <span className="text-primary font-mono">{'>'}</span> Delivered <span className="text-primary font-mono font-bold">17+</span> production-grade projects for startups and international clients—from system architecture to cloud deployment.
                </p>
                
                <p className="leading-relaxed">
                  <span className="text-primary font-mono">{'>'}</span> Exploring <span className="text-foreground font-medium">AI/ML & Computer Vision</span> to build intelligent web products.
                </p>
              </div>
            </div>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/20 text-sm">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span>BRAC University — CSE</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-sm">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Remote & Onsite</span>
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Button
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-cyan-600 hover:from-primary/90 hover:to-cyan-500 text-primary-foreground font-semibold px-8 rounded-xl shadow-lg shadow-primary/25"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </span>
                {/* Shine Effect */}
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
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
