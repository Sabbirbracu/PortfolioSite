import { motion } from "framer-motion";
import { ExternalLink, Github, FileText, ArrowUpRight, Globe } from "lucide-react";

const projects = [
  {
    title: "ShaadiMartBD",
    tagline: "Matrimony Platform",
    description: "A full-featured matrimony platform with real-time chat, secure authentication, role-based access, and scalable profile & search system.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    status: "Live",
    banner: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Ride Partner Finder",
    tagline: "Smart Route Sharing",
    description: "Dynamic team formation with location-based matching. Features cost-splitting logic and API-driven architecture for ride sharing.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Maps API"],
    status: "Live",
    banner: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "LearnHub Pro",
    tagline: "SaaS Course Platform",
    description: "Multi-role educational platform with Admin, Teacher, and Student roles. Email-based enrollment and section-wise course management.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "Nodemailer"],
    status: "Live",
    banner: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "The Daily Drift",
    tagline: "Content Platform",
    description: "Content-driven web application with clean UI, optimized frontend performance, and REST API backend deployed on modern cloud infrastructure.",
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    status: "Live",
    banner: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
    demoLink: "#",
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-secondary/80 to-background border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5">
                
                {/* Banner Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.banner}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30 backdrop-blur-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      {project.status}
                    </span>
                  </div>

                  {/* Quick Actions - Top Right */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoLink}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubLink}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-primary/80 text-sm font-medium">{project.tagline}</p>
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-mono bg-primary/5 text-primary/90 rounded-md border border-primary/10 hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;