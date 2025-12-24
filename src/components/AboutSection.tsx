import { motion } from "framer-motion";
import { GraduationCap, Globe, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

      <div className="section-container relative z-10">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
          <span className="text-primary font-mono text-sm tracking-widest uppercase">About</span>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Image - 2 cols */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative group">
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-muted/30">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
                  alt="Sabbir Ahmad"
                  className="w-full aspect-[5/6] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-primary/20 rounded-2xl -z-10" />
              
              {/* Badge */}
              <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Available
              </div>
            </div>
          </motion.div>

          {/* Content - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Hi, I'm <span className="text-gradient">Sabbir Ahmad</span>
            </h2>

            {/* Role Badge */}
            <div className="inline-flex items-center gap-2 w-fit px-4 py-2 rounded-lg bg-muted/50 border border-border/50 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Full Stack Software Engineer</span>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Final-year CSE student at BRAC University, specializing in building 
                <span className="text-foreground font-medium"> scalable, production-grade web applications</span> that 
                perform reliably in real-world environments.
              </p>
              
              <p className="leading-relaxed">
                With <span className="text-primary font-mono font-bold">17+</span> live projects delivered for startups 
                and international clients, I handle everything from system architecture and API development to 
                frontend optimization and cloud deployment.
              </p>

              <p className="leading-relaxed">
                Currently diving deep into AI/ML and Computer Vision to integrate intelligent features 
                into modern web products.
              </p>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-border/30">
              <div className="flex items-center gap-2 text-sm">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">BRAC University</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">Remote & Onsite Ready</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { value: "17+", label: "Live Projects" },
                { value: "3+", label: "Years Experience" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="w-4 h-4 mr-2" />
                Let's Work Together
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
