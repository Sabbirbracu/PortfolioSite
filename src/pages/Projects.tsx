import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, Layers, Zap, Code2, Globe, Bot, Cpu, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

// Helper to check if link is internal route
const isInternalLink = (link: string) => link.startsWith("/");

interface Project {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  year: string;
  banner: string;
  demoLink: string;
  githubLink: string;
}

interface ProjectCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  projects: Project[];
}

const projectCategories: ProjectCategory[] = [
  {
    id: "fullstack",
    title: "Full Stack Projects",
    icon: Code2,
    description: "End-to-end web applications built with modern JavaScript/TypeScript stacks",
    projects: [
      {
        title: "ShaadiMartBD",
        tagline: "Matrimony Platform",
        description: "A full-featured matrimony platform with real-time chat, secure authentication, role-based access, and scalable profile & search system.",
        stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        year: "2024",
        banner: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop",
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
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
      {
        title: "LearnHub Pro",
        tagline: "SaaS Course Platform",
        description: "Multi-role educational platform with Admin, Teacher, and Student roles. Email-based enrollment and section-wise course management.",
        stack: ["React", "Node.js", "MongoDB", "JWT", "Nodemailer"],
        year: "2023",
        banner: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
      {
        title: "The Daily Drift",
        tagline: "Content Platform",
        description: "Content-driven web application with clean UI, optimized frontend performance, and REST API backend deployed on modern cloud infrastructure.",
        stack: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
        year: "2023",
        banner: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
        demoLink: "https://thedailydrift.qullia.com/",
        githubLink: "https://github.com/Sabbirbracu/The-Daily-Drift-Frontend",
      },
    ],
  },
  {
    id: "wordpress",
    title: "WordPress Projects",
    icon: Globe,
    description: "Custom WordPress themes and plugins with advanced functionality",
    projects: [
      {
        title: "Business Theme Pro",
        tagline: "Corporate Theme",
        description: "Custom corporate WordPress theme with page builders, custom widgets, and WooCommerce integration for business websites.",
        stack: ["WordPress", "PHP", "JavaScript", "WooCommerce", "Elementor"],
        year: "2024",
        banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
      {
        title: "Blog starter Theme",
        tagline: "Blog Theme",
        description: "Clean and minimal blog theme with SEO optimization, social sharing, and newsletter integration built from scratch.",
        stack: ["WordPress", "PHP", "SCSS", "JavaScript", "REST API"],
        year: "2023",
        banner: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop",
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
    ],
  },
  {
    id: "automation",
    title: "Automation Projects",
    icon: Bot,
    description: "Scripts and tools for automating repetitive tasks and workflows",
    projects: [
      {
        title: "Data Scraper Suite",
        tagline: "Web Scraping Tool",
        description: "Comprehensive web scraping toolkit with proxy rotation, anti-detection measures, and data export to multiple formats.",
        stack: ["Python", "Selenium", "BeautifulSoup", "Pandas", "PostgreSQL"],
        year: "2024",
        banner: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
      {
        title: "CI/CD Pipeline Builder",
        tagline: "DevOps Automation",
        description: "Automated deployment pipeline with GitHub Actions, Docker containerization, and AWS integration for seamless deployments.",
        stack: ["Docker", "GitHub Actions", "AWS", "Terraform", "Bash"],
        year: "2024",
        banner: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop",
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
    ],
  },
  {
    id: "aiml",
    title: "AI/ML Projects",
    icon: Cpu,
    description: "Machine learning models and AI-powered applications",
    projects: [
      {
        title: "Sentiment Analyzer",
        tagline: "NLP Application",
        description: "Real-time sentiment analysis API using transformer models for social media monitoring and brand sentiment tracking.",
        stack: ["Python", "TensorFlow", "FastAPI", "Hugging Face", "Redis"],
        year: "2024",
        banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
      {
        title: "Image Classifier",
        tagline: "Computer Vision",
        description: "Custom image classification model trained on domain-specific data with REST API for real-time predictions.",
        stack: ["Python", "PyTorch", "OpenCV", "Flask", "Docker"],
        year: "2023",
        banner: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&h=400&fit=crop",
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
    ],
  },
  {
    id: "research",
    title: "Research Projects",
    icon: BookOpen,
    description: "Academic and experimental projects exploring new technologies",
    projects: [
      {
        title: "Blockchain Voting System",
        tagline: "Decentralized App",
        description: "Experimental decentralized voting system using Ethereum smart contracts ensuring transparency and immutability.",
        stack: ["Solidity", "React", "Web3.js", "Truffle", "IPFS"],
        year: "2024",
        banner: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
      {
        title: "Quantum Algorithm Simulator",
        tagline: "Quantum Computing",
        description: "Educational simulator for understanding quantum algorithms like Shor's and Grover's with visual representations.",
        stack: ["Python", "Qiskit", "NumPy", "Matplotlib", "Jupyter"],
        year: "2023",
        banner: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
        demoLink: "/not-found",
        githubLink: "/not-found",
      },
    ],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
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
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
        />
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
          <h3 className="text-xl font-bold font-heading text-foreground">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 pt-3">
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="relative px-2.5 py-1 text-xs font-mono text-foreground/90 rounded-md overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 rounded-md" />
              <span className="relative">{tech}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Neon Line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-primary font-mono text-sm tracking-wider uppercase">
              Complete Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold font-heading mt-3 mb-4">
              All <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Explore my complete collection of projects across different domains 
              including full-stack development, WordPress, automation, AI/ML, and research.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      {projectCategories.map((category, categoryIndex) => (
        <section key={category.id} id={category.id} className="py-16 relative">
          {categoryIndex % 2 === 1 && (
            <div className="absolute inset-0 bg-muted/30" />
          )}
          
          <div className="section-container relative z-10">
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <category.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold font-heading">
                  {category.title}
                </h2>
                <p className="text-muted-foreground text-sm mt-1">
                  {category.description}
                </p>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Back to Top */}
      <section className="py-16">
        <div className="section-container text-center">
          <Link to="/">
            <Button variant="outline" size="lg" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
