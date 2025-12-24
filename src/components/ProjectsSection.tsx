import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Layers, Zap } from "lucide-react";

const projects = [
  {
    title: "ShaadiMartBD",
    tagline: "Matrimony Platform",
    description: "A full-featured matrimony platform with real-time chat, secure authentication, role-based access, and scalable profile & search system.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    year: "2024",
    banner: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop",
    // banner: "/Shaadimart.png",
    demoLink: "https://biye-bandhan.vercel.app/",
    githubLink: "https://github.com/Sabbirbracu/ShaadimartBD",
  },
  {
    title: "Ride Partner Finder",
    tagline: "Smart Route Sharing",
    description: "Dynamic team formation with location-based matching. Features cost-splitting logic and API-driven architecture for ride sharing.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Maps API"],
    year: "2024",
    banner: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "LearnHub Pro",
    tagline: "SaaS Course Platform",
    description: "Multi-role educational platform with Admin, Teacher, and Student roles. Email-based enrollment and section-wise course management.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "Nodemailer"],
    year: "2023",
    banner: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "The Daily Drift",
    tagline: "Content Platform",
    description: "Content-driven web application with clean UI, optimized frontend performance, and REST API backend deployed on modern cloud infrastructure.",
    stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
    year: "2023",
    banner: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
    demoLink: "#",
    githubLink: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

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
              {/* Animated Border Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-cyan-500 to-primary rounded-2xl opacity-0 group-hover:opacity-75 blur-sm transition-all duration-500 group-hover:duration-200" />
              
              {/* Card Container */}
              <div className="relative rounded-2xl overflow-hidden bg-background/95 backdrop-blur-xl border border-border/50">
                
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-primary/50 rounded-tl-2xl" />
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-primary/50 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-primary/50 rounded-bl-2xl" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-primary/50 rounded-br-2xl" />

                {/* Banner Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.banner}
                    alt={project.title}
                    className="w-full h-full object-contain transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  {/* Scanline Effect */}
                  <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)'
                  }} />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
                  
                  {/* Year Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold bg-primary/20 text-primary border border-primary/30 backdrop-blur-md">
                      <Zap className="w-3 h-3" />
                      {project.year}
                    </span>
                  </div>

                  {/* Floating Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <motion.a
                      href={project.demoLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground border border-border/50 hover:border-primary hover:text-primary transition-all shadow-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubLink}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground border border-border/50 hover:border-primary hover:text-primary transition-all shadow-lg"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>

                  {/* Project Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Layers className="w-4 h-4 text-primary" />
                      <span className="text-primary text-xs font-mono uppercase tracking-wider">{project.tagline}</span>
                    </div>
                    <h3 className="text-2xl font-bold font-heading text-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-4">
                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.stack.map((tech, i) => (
                      <span
                        key={tech}
                        className="relative px-3 py-1.5 text-xs font-mono text-foreground/90 rounded-md overflow-hidden group/tag"
                      >
                        {/* Tag Background */}
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 rounded-md" />
                        {/* Tag Shine Effect */}
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/tag:translate-x-full transition-transform duration-700" />
                        <span className="relative">{tech}</span>
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/30">
                    <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                      Full Stack Project
                    </span>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <span>Explore</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Bottom Neon Line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;