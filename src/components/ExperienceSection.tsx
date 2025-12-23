import { motion } from "framer-motion";
import { Briefcase, Code, Lightbulb } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Freelance Full Stack Engineer",
    scope: "International Clients",
    period: "2021 - Present",
    impact: "Delivered 15+ projects for clients across Europe, USA, and Asia. Specialized in MERN stack development with focus on scalable architecture.",
    highlights: ["Remote Collaboration", "Client Management", "End-to-End Delivery"],
  },
  {
    icon: Code,
    role: "Software Engineer",
    scope: "Production Systems",
    period: "2022 - Present",
    impact: "Built and maintained production-grade applications serving thousands of users. Implemented CI/CD pipelines and automated deployment workflows.",
    highlights: ["System Design", "Performance Optimization", "Team Collaboration"],
  },
  {
    icon: Lightbulb,
    role: "Research & Exploration",
    scope: "AI & Computer Vision",
    period: "2023 - Present",
    impact: "Exploring machine learning applications with focus on computer vision. Building CNN-based solutions for real-world image processing challenges.",
    highlights: ["Deep Learning", "Image Processing", "Research Projects"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-wider uppercase">
            Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative pl-20 md:pl-0 md:w-1/2 mb-12 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Timeline Dot */}
              <div 
                className={`absolute left-6 md:left-auto ${
                  index % 2 === 0 ? "md:right-[-8px]" : "md:left-[-8px]"
                } top-2 w-4 h-4 rounded-full bg-primary glow-border`} 
              />
              
              {/* Icon - Mobile */}
              <div className="absolute left-0 top-0 md:hidden">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Card */}
              <div className="glass-card-hover p-6">
                {/* Icon - Desktop */}
                <div className={`hidden md:flex w-12 h-12 rounded-xl bg-primary/10 items-center justify-center mb-4 ${
                  index % 2 === 0 ? "ml-auto" : ""
                }`}>
                  <exp.icon className="w-6 h-6 text-primary" />
                </div>

                <span className="text-xs font-mono text-primary mb-2 block">
                  {exp.period}
                </span>
                <h3 className="text-xl font-heading font-bold text-foreground mb-1">
                  {exp.role}
                </h3>
                <p className="text-primary font-medium mb-3">{exp.scope}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {exp.impact}
                </p>
                
                <div className={`flex flex-wrap gap-2 ${
                  index % 2 === 0 ? "md:justify-end" : ""
                }`}>
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 text-xs bg-secondary/50 text-muted-foreground rounded"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;