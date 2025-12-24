import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code, Cpu, Database, Globe, GraduationCap, Mail, Terminal, Zap } from "lucide-react";

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
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/15 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

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

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Image Side - Smaller, 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative group lg:sticky lg:top-24"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Hexagon-ish Frame */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 via-transparent to-cyan-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Main Card */}
                <div className="relative bg-background/80 backdrop-blur-sm rounded-2xl p-4 border border-primary/20">
                  {/* Image Container */}
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="/img.png"
                      alt="Sabbir Ahmad"
                      className="w-full aspect-[4/5] object-cover"
                    />
                    
                    {/* Scanline Effect */}
                    <div className="absolute inset-0 pointer-events-none opacity-10" style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
                    }} />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                    {/* Status Badge */}
                    {/* <div className="absolute top-3 left-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-primary/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        <span className="text-xs font-mono text-foreground/80">Available</span>
                      </div>
                    </div> */}

                    {/* Name at Bottom */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-bold font-heading text-foreground">Sabbir Ahmad</h3>
                      <p className="text-xs font-mono text-primary">Full Stack Engineer</p>
                    </div>
                  </div>

                  {/* Tech Icons Row */}
                  <div className="mt-4 flex items-center justify-between px-3">
                    {skills.map((skill, index) => (
                      <motion.div
                        key={skill.label}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ y: -3 }}
                        className="flex flex-col items-center gap-1.5"
                      >
                        <div className="w-11 h-11 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors">
                          <skill.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-[10px] font-mono text-muted-foreground">{skill.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50 rounded-tr-lg" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50 rounded-bl-lg" />
              </div>
            </div>
          </motion.div>

          {/* Content Side - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
            {/* Terminal-like Bio */}
            <div className="relative bg-background/50 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">~/about/sabbir.md</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  <span className="text-primary font-mono">{'>'}</span> Currently in my final semester of 
                  <span className="text-foreground font-medium"> Computer Science and Engineering</span> at BRAC University, where I have developed a strong foundation in software engineering principles alongside practical, real-world application.
                </p>
                
                <p className="leading-relaxed">
                  <span className="text-primary font-mono">{'>'}</span> Worked extensively on production-grade web systems, contributing to <span className="text-primary font-mono font-bold">17+</span> live projects for startups and international clients. My experience spans the complete development lifecycle—system planning, backend architecture, frontend implementation, deployment, and post-release optimization.
                </p>
                
                <p className="leading-relaxed">
                  <span className="text-primary font-mono">{'>'}</span> Focused on building <span className="text-foreground font-medium">scalable and maintainable systems</span>, clean architecture, modular design, and long-term sustainability rather than short-term solutions.
                </p>


                <p className="leading-relaxed">
                  <span className="text-primary font-mono">{'>'}</span> Actively exploring <span className="text-foreground font-medium">AI/ML & Computer Vision</span>, with the goal of integrating intelligent features into web platforms and researching how data-driven components can enhance modern applications.
                </p>

                {/* Blinking Cursor */}
                <div className="flex items-center gap-1 pt-2">
                  <span className="text-primary font-mono">{'>'}</span>
                  <span className="w-2.5 h-5 bg-primary/90 animate-[blink_1s_step-end_infinite]" style={{ animation: 'blink 1s step-end infinite' }} />
                </div>
              </div>
            </div>

            {/* Info Tags */}
            <div className="flex flex-wrap gap-3">
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
