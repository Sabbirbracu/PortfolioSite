import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  year: string;
  banner: string;
  demoLink: string;
  githubLink: string;
  slug?: string;
  images?: string[];
  // Case study fields (optional)
  problem?: string;
  solution?: string;
  outcome?: string;
  role?: string;
  duration?: string;
  teamSize?: string;
  status?: string;
  targetUsers?: string;
  features?: string[];
  techCategories?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    realtime?: string[];
    devops?: string[];
  };
  architecture?: string;
  challenges?: Array<{ challenge: string; solution: string }>;
  contribution?: string[];
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const isInternalLink = (link: string) => link && link.startsWith("/");

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.div
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
            {isInternalLink(project.demoLink) ? (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={project.demoLink}
                  className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground border border-border/50 hover:border-primary hover:text-primary transition-all shadow-lg"
                >
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            ) : (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground border border-border/50 hover:border-primary hover:text-primary transition-all shadow-lg"
              >
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            )}
            {isInternalLink(project.githubLink) ? (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to={project.githubLink}
                  className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground border border-border/50 hover:border-primary hover:text-primary transition-all shadow-lg"
                >
                  <Github className="w-4 h-4" />
                </Link>
              </motion.div>
            ) : (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg bg-background/80 backdrop-blur-md flex items-center justify-center text-foreground border border-border/50 hover:border-primary hover:text-primary transition-all shadow-lg"
              >
                <Github className="w-4 h-4" />
              </motion.a>
            )}
          </div>

          {/* Project Title Overlay */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-1">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-primary text-xs font-mono uppercase tracking-wider">{project.tagline}</span>
            </div>
            <h3 className="text-2xl font-bold font-heading text-foreground">{project.title}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 pt-4">
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((tech) => (
              <span key={tech} className="relative px-3 py-1.5 text-xs font-mono text-foreground/90 rounded-md overflow-hidden group/tag">
                <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 rounded-md" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover/tag:translate-x-full transition-transform duration-700" />
                <span className="relative">{tech}</span>
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Full Stack Project</span>
            {(() => {
              const slug = project.slug ?? project.title.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/gi, "");
              return (
                <Link to={`/projects/${slug}`}>
                  <motion.button whileHover={{ x: 5 }} className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                    <span>Explore</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </Link>
              );
            })()}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
