import { motion } from "framer-motion";
import { Briefcase, Lightbulb, ArrowRight } from "lucide-react";

const experiences = [
  {
    icon: Briefcase,
    role: "Full Stack Developer",
    type: "Contract",
    company: "Qullia – Software Agency",
    location: "Remote",
    period: "Jan 2024 – Present",
    summary: "Delivered 17+ production-grade web applications using modern full-stack architectures, ensuring high availability, scalable systems, and clean deployment pipelines.",
    impact: [
      "Built scalable frontend & backend systems with React, Node.js, Laravel, and MongoDB",
      "Designed REST APIs, optimized databases, and improved performance by 35%",
      "Automated CI/CD pipelines, reducing release cycles by 45%",
    ],
    stack: ["React", "Node", "Express", "MongoDB", "Laravel", "CI/CD", "System Design"],
  },
  {
    icon: Lightbulb,
    role: "Research & Exploration",
    type: "",
    company: "Brac University",
    location: "AI & Computer Vision",
    period: "2025 – Present",
    summary: "Exploring machine learning applications with focus on computer vision. Building CNN-based solutions for real-world image processing challenges.",
    impact: [
      "Researching deep learning models for image classification and object detection",
      "Building CNN-based solutions for real-world processing challenges",
    ],
    stack: ["PyTorch", "TensorFlow", "NumPy", "Pandas", "OpenCV", "Deep Learning"],
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

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto grid gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-card-hover p-6 md:p-8"
            >
              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <exp.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-primary block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-foreground">
                      {exp.role} {exp.type && <span className="text-muted-foreground font-normal">({exp.type})</span>}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 md:pl-16">
                {exp.summary}
              </p>

              {/* Key Impact */}
              <div className="md:pl-16 mb-4">
                <h4 className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-2">
                  Key Impact
                </h4>
                <ul className="space-y-1.5">
                  {exp.impact.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="md:pl-16 mb-4">
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs bg-secondary/50 text-muted-foreground rounded border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="md:pl-16">
                <button className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors group">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;