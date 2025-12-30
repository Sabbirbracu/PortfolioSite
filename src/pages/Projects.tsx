import Navbar from "@/components/Navbar";
import CategorySection from "@/components/projects/CategorySection";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Bot, Code2, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";

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

// ProjectCard removed — using shared ProjectCard component from src/components/ProjectCard

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          

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
        <CategorySection key={category.id} category={category as any} categoryIndex={categoryIndex} />
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
