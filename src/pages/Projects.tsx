import Navbar from "@/components/Navbar";
import CategorySection from "@/components/projects/CategorySection";
import { Button } from "@/components/ui/button";
import { Project } from "@/types/project";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Bot, Code2, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";

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
        id: "shaadimartbd-001",
        slug: "shaadimartbd",
        title: "ShaadiMartBD",
        tagline: "Matrimony Platform",
        description: "A full-featured matrimony platform with real-time chat, secure authentication, role-based access, and scalable profile & search system.",
        type: "fullstack",
        status: "live",
        year: 2024,
        visibility: "public",
        media: {
          banner: "public/Shaadimart_banner.png",
        },
        links: {
          live: "https://biye-bandhan.vercel.app/",
          github: "https://github.com/Sabbirbracu/ShaadimartBD",
        },
        techStack: {
          primary: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
        },
      },
      {
        id: "ride-partner-001",
        slug: "ride-partner-finder",
        title: "Ride Partner Finder",
        tagline: "Smart Route Sharing",
        description: "Dynamic team formation with location-based matching. Features cost-splitting logic and API-driven architecture for ride sharing.",
        type: "fullstack",
        status: "concept",
        year: 2024,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["React", "Node.js", "Express", "MongoDB", "Maps API"],
        },
      },
      {
        id: "rchms-001",
        slug: "rchms",
        title: "RCHMS",
        tagline: "Housing & Payroll Automation System",
        description: "A production-grade housing automation platform with secure registration, role-based access, and payroll automation backed by MySQL transactional integrity.",
        type: "fullstack",
        status: "live",
        year: 2024,
        visibility: "public",
        media: {
          banner: "/rchms_banner.png",
        },
        links: {
          live: "https://rchms.qullia.com/",
        },
        techStack: {
          primary: ["React", "Node.js", "MySQL"],
        },
      },
      {
        id: "learnhub-001",
        slug: "learnhub-pro",
        title: "LearnHub Pro",
        tagline: "SaaS Course Platform",
        description: "Multi-role educational platform with Admin, Teacher, and Student roles. Email-based enrollment and section-wise course management.",
        type: "fullstack",
        status: "archived",
        year: 2023,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["React", "Node.js", "MongoDB", "JWT", "Nodemailer"],
        },
      },
      {
        id: "daily-drift-001",
        slug: "the-daily-drift",
        title: "The Daily Drift",
        tagline: "Content Platform",
        description: "Content-driven web application with clean UI, optimized frontend performance, and REST API backend deployed on modern cloud infrastructure.",
        type: "fullstack",
        status: "live",
        year: 2023,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
        },
        links: {
          live: "https://thedailydrift.qullia.com/",
          github: "https://github.com/Sabbirbracu/The-Daily-Drift-Frontend",
        },
        techStack: {
          primary: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
        },
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
        id: "business-theme-001",
        slug: "business-theme-pro",
        title: "Business Theme Pro",
        tagline: "Corporate Theme",
        description: "Custom corporate WordPress theme with page builders, custom widgets, and WooCommerce integration for business websites.",
        type: "wordpress",
        status: "live",
        year: 2024,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["WordPress", "PHP", "JavaScript", "WooCommerce", "Elementor"],
        },
      },
      {
        id: "blog-starter-001",
        slug: "blog-starter-theme",
        title: "Blog Starter Theme",
        tagline: "Blog Theme",
        description: "Clean and minimal blog theme with SEO optimization, social sharing, and newsletter integration built from scratch.",
        type: "wordpress",
        status: "live",
        year: 2023,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["WordPress", "PHP", "SCSS", "JavaScript", "REST API"],
        },
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
        id: "data-scraper-001",
        slug: "data-scraper-suite",
        title: "Data Scraper Suite",
        tagline: "Web Scraping Tool",
        description: "Comprehensive web scraping toolkit with proxy rotation, anti-detection measures, and data export to multiple formats.",
        type: "backend",
        status: "live",
        year: 2024,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["Python", "Selenium", "BeautifulSoup", "Pandas", "PostgreSQL"],
        },
      },
      {
        id: "cicd-pipeline-001",
        slug: "cicd-pipeline-builder",
        title: "CI/CD Pipeline Builder",
        tagline: "DevOps Automation",
        description: "Automated deployment pipeline with GitHub Actions, Docker containerization, and AWS integration for seamless deployments.",
        type: "backend",
        status: "live",
        year: 2024,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["Docker", "GitHub Actions", "AWS", "Terraform", "Bash"],
        },
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
        id: "sentiment-analyzer-001",
        slug: "sentiment-analyzer",
        title: "Sentiment Analyzer",
        tagline: "NLP Application",
        description: "Real-time sentiment analysis API using transformer models for social media monitoring and brand sentiment tracking.",
        type: "ai-ml",
        status: "live",
        year: 2024,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["Python", "TensorFlow", "FastAPI", "Hugging Face", "Redis"],
        },
      },
      {
        id: "image-classifier-001",
        slug: "image-classifier",
        title: "Image Classifier",
        tagline: "Computer Vision",
        description: "Custom image classification model trained on domain-specific data with REST API for real-time predictions.",
        type: "ai-ml",
        status: "live",
        year: 2023,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["Python", "PyTorch", "OpenCV", "Flask", "Docker"],
        },
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
        id: "blockchain-voting-001",
        slug: "blockchain-voting-system",
        title: "Blockchain Voting System",
        tagline: "Decentralized App",
        description: "Experimental decentralized voting system using Ethereum smart contracts ensuring transparency and immutability.",
        type: "research",
        status: "concept",
        year: 2024,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["Solidity", "React", "Web3.js", "Truffle", "IPFS"],
        },
      },
      {
        id: "quantum-simulator-001",
        slug: "quantum-algorithm-simulator",
        title: "Quantum Algorithm Simulator",
        tagline: "Quantum Computing",
        description: "Educational simulator for understanding quantum algorithms like Shor's and Grover's with visual representations.",
        type: "research",
        status: "concept",
        year: 2023,
        visibility: "public",
        media: {
          banner: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
        },
        techStack: {
          primary: ["Python", "Qiskit", "NumPy", "Matplotlib", "Jupyter"],
        },
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
        <CategorySection key={category.id} category={category} categoryIndex={categoryIndex} />
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
