import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "ShaadiMartBD",
    tagline: "Matrimony Platform",
    description: "A full-featured matrimony platform with real-time chat, secure authentication, role-based access, and scalable profile & search system.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    features: ["Real-time Messaging", "Advanced Search", "CI/CD Pipeline"],
    demoLink: "#",
    caseStudyLink: "#",
    githubLink: "#",
  },
  {
    title: "Ride Partner Finder",
    tagline: "Smart Route Sharing",
    description: "Dynamic team formation with location-based matching. Features cost-splitting logic and API-driven architecture for ride sharing.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Geolocation API"],
    features: ["Route Matching", "Cost Optimization", "Team Formation"],
    demoLink: "#",
    caseStudyLink: "#",
    githubLink: "#",
  },
  {
    title: "LearnHub Pro",
    tagline: "SaaS Course Platform",
    description: "Multi-role educational platform with Admin, Teacher, and Student roles. Email-based enrollment and section-wise course management.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "Nodemailer"],
    features: ["Role-based Access", "Email Automation", "Dashboard Analytics"],
    demoLink: "#",
    caseStudyLink: "#",
    githubLink: "#",
  },
  {
    title: "The Daily Drift",
    tagline: "Content Platform",
    description: "Content-driven web application with clean UI, optimized frontend performance, and REST API backend deployed on modern cloud infrastructure.",
    stack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    features: ["SEO Optimized", "Fast Load Times", "Cloud Deployed"],
    demoLink: "#",
    caseStudyLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mt-3 mb-4">
            Featured <span className="text-gradient">Full Stack</span> Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Production-grade systems built with modern JavaScript stacks, 
            focusing on scalability, performance, and clean architecture.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card-hover p-6 lg:p-8 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary font-medium">{project.tagline}</p>
                </div>
                <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono bg-secondary/50 text-foreground/80 rounded-md border border-border/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Features */}
              <div className="flex flex-wrap gap-3 mb-6">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs text-muted-foreground"
                  >
                    • {feature}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border/50">
                <Button size="sm" variant="default">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button size="sm" variant="outline">
                  <FileText className="w-4 h-4 mr-2" />
                  Case Study
                </Button>
                <Button size="sm" variant="ghost">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;