import { Project } from "../types/project";

const projects: Project[] = [
  // ============================================
  // FULL STACK PROJECTS
  // ============================================
  {
    id: "shaadimartbd-001",
    slug: "shaadimartbd",
    title: "ShaadiMartBD",
    tagline: "Matrimony Platform",
    description:
      "A full-featured matrimony platform with real-time chat, secure authentication, role-based access, and scalable profile & search system.",

    type: "fullstack",
    status: "live",
    year: 2025,
    duration: "4 months",
    visibility: "public",

    media: {
      banner:
        "/Shaadimart_banner.png",
      gallery: [
        "/Shaadimart1.png",
        "/Shaadimart2.png",
        "/Shaadimart3.png",
      ],
    },

    links: {
      live: "https://dev.shaadimartbd.com/",
      github: "https://github.com/Sabbirbracu/ShaadimartBD",
    },

    techStack: {
      primary: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      frontend: ["React", "Tailwind CSS", "TypeScript"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      realtime: ["Socket.io"],
      devops: ["Nginx", "Hostinger VPS", "GitHub Actions"],
    },

    summaryMetrics: {
      users: "Active users in Bangladesh",
      scale: "Production-grade platform",
      impact: "Improved onboarding completion rates",
    },

    caseStudy: {
      role: "Full Stack Engineer (Backend-heavy)",
      teamSize: 3,
      targetUsers: "Bangladesh-based users seeking verified matrimony matches",

      problem:
        "Traditional matrimony platforms lacked structured profile completion, controlled access to sensitive contact information, real-time secure communication, high drop-off during onboarding, and weak verification flows.",

      solution:
        "Designed enforced multi-step profile completion with progress tracking; implemented subscription-based access control for contact visibility; built a WebSocket-based real-time chat; and created an admin dashboard for moderation and subscription management.",

      features: [
        "Multi-step profile completion with progress",
        "Subscription & access control (tiered plans)",
        "Real-time chat (WebSocket)",
        "Advanced search & filtering",
        "Admin dashboard for moderation and plans",
      ],

      architecture:
        "Token-based authorization to control subscription-level access; Nginx reverse proxy for WSS over port 443; separation of concerns between auth, profile, search, and messaging microservices for future mobile scalability.",

      challenges: [
        {
          problem:
            "WebSocket connections failed in production due to SSL and port issues.",
          solution:
            "Configured Nginx reverse proxy to support secure WSS traffic over port 443, resolving connection stability and SSL termination issues.",
        },
        {
          problem: "High onboarding drop-off during profile creation.",
          solution:
            "Implemented enforced, step-by-step onboarding with progress indicators and inline validation to improve completion rates.",
        },
      ],

      contribution: [
        "Designed backend architecture",
        "Implemented authentication & subscription systems",
        "Integrated WebSockets for real-time chat",
        "Deployed and managed production environment",
        "Fixed live production issues",
      ],

      outcome:
        "Operationally stable in production; improved onboarding completion and increased engagement via real-time chat (anecdotal).",
    },

    meta: {
      featured: true,
      tags: ["matrimony", "real-time", "saas", "production"],
    },
  },

  {
    id: "ride-partner-001",
    slug: "ride-partner-finder",
    title: "Ride Partner Finder",
    tagline: "Smart Route Sharing",
    description:
      "Dynamic team formation with location-based matching. Features cost-splitting logic and API-driven architecture for ride sharing.",

    type: "fullstack",
    status: "concept",
    year: 2025,
    duration: "3 months",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://ridepartner.example.com/",
      github: "https://github.com/Sabbirbracu/ride-partner-finder",
    },

    techStack: {
      primary: ["React", "Node.js", "Express", "MongoDB", "Maps API"],
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      tools: ["Google Maps API", "Geolocation API"],
    },

    summaryMetrics: {
      scale: "Prototype with full functionality",
      impact: "Cost reduction through shared rides",
    },

    caseStudy: {
      role: "Full Stack Developer",
      teamSize: 2,
      targetUsers: "Commuters looking to share rides and split costs",

      problem:
        "Daily commuters face high transportation costs and inefficient solo travel. Existing ride-sharing apps focus on commercial services rather than peer-to-peer cost-sharing among regular commuters with similar routes.",

      solution:
        "Built a location-aware ride partner matching system that groups users traveling similar routes. Implemented intelligent cost-splitting algorithms and real-time route optimization using Maps API integration.",

      features: [
        "Location-based partner matching",
        "Route optimization with Maps API",
        "Automatic cost-splitting calculator",
        "Real-time ride status updates",
        "User rating and review system",
        "Schedule-based recurring rides",
      ],

      architecture:
        "RESTful API backend with geospatial queries in MongoDB. Frontend uses React with real-time location tracking. Maps API integration for route calculation and distance-based fare splitting.",

      challenges: [
        {
          problem: "Matching users with overlapping routes efficiently.",
          solution:
            "Implemented geospatial indexing in MongoDB with 2dsphere indexes and proximity-based queries for fast route matching.",
        },
        {
          problem: "Accurate fare splitting based on actual distance traveled.",
          solution:
            "Integrated Google Maps Distance Matrix API to calculate precise distances and proportional cost distribution.",
        },
      ],

      contribution: [
        "Designed geospatial matching algorithm",
        "Built Maps API integration layer",
        "Implemented cost-splitting logic",
        "Developed responsive React frontend",
        "Created user authentication system",
      ],

      outcome:
        "Functional prototype demonstrating viable peer-to-peer ride-sharing concept with intelligent matching capabilities.",
    },

    meta: {
      tags: ["ride-sharing", "location", "maps", "peer-to-peer"],
    },
  },

  {
    id: "rchms-001",
    slug: "rchms",
    title: "RCHMS",
    tagline: "Housing & Payroll Automation System",
    description:
      "A production-grade housing automation platform with secure registration, role-based access, and payroll automation backed by MySQL transactional integrity.",

    type: "fullstack",
    status: "live",
    year: 2024,
    duration: "2 months",
    visibility: "public",

    media: {
      banner: "/rchms_banner.png",
      gallery: [
        "/rchms1.png",
        "/rchms2.png",
        "/rchms3.png",
      ],
    },

    links: {
      live: "https://rchms.qullia.com/",
      github: "https://github.com/Sabbirbracu/rchms",
    },

    techStack: {
      primary: ["React", "Node.js", "MySQL"],
      frontend: ["React", "Vite", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MySQL"],
      devops: ["Production Deployment", "Git Version Control"],
    },

    summaryMetrics: {
      scale: "Production housing system",
      impact: "Reduced manual workload for housing operations",
    },

    caseStudy: {
      role: "Full Stack Engineer",
      teamSize: 2,
      targetUsers:
        "Residential housing authorities, property managers, and community administrators",

      problem:
        "Manual housing management systems struggled with secure user onboarding, payroll accuracy, data integrity, and scalable role-based access. Existing solutions were either fragmented or lacked financial-grade database reliability.",

      solution:
        "Built an end-to-end housing automation platform with secure registration, role-based access control, and automated payroll processing. Leveraged MySQL for transactional safety and data consistency, with a modular Express backend and a fast React (Vite) frontend.",

      features: [
        "Secure user registration & authentication",
        "Role-based access control (Admin, Manager, Staff)",
        "Automated payroll calculation & records",
        "Resident & staff management",
        "Dashboard-driven housing operations",
        "Data validation and audit-friendly workflows",
      ],

      architecture:
        "Client-side React application built with Vite for fast performance, communicating with an Express REST API. MySQL chosen for strong relational integrity and payroll-safe transactions. Backend structured with separation of concerns for auth, payroll, and housing modules.",

      challenges: [
        {
          problem: "Ensuring payroll accuracy and transactional consistency.",
          solution:
            "Used MySQL with relational constraints and controlled write operations to guarantee financial data integrity.",
        },
        {
          problem: "Securing sensitive user and payroll data.",
          solution:
            "Implemented secure registration flows, role-based access control, and strict API validation.",
        },
      ],

      contribution: [
        "Designed overall system architecture",
        "Implemented secure authentication & role-based access",
        "Built payroll automation logic",
        "Developed React frontend with Vite",
        "Integrated MySQL database schema",
        "Handled deployment and production readiness",
      ],

      outcome:
        "Successfully deployed a stable production system supporting real housing operations. Reduced manual workload and improved data reliability for housing and payroll management.",
    },

    meta: {
      featured: true,
      tags: ["housing", "payroll", "enterprise", "production"],
    },
  },

  {
    id: "learnhub-001",
    slug: "learnhub-pro",
    title: "LearnHub Pro",
    tagline: "SaaS Course Platform",
    description:
      "Multi-role educational platform with Admin, Teacher, and Student roles. Email-based enrollment and section-wise course management.",

    type: "fullstack",
    status: "archived",
    year: 2023,
    duration: "4 months",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://learnhub.example.com/",
      github: "https://github.com/Sabbirbracu/learnhub-pro",
    },

    techStack: {
      primary: ["React", "Node.js", "MongoDB", "JWT", "Nodemailer"],
      frontend: ["React", "Redux", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      tools: ["Nodemailer", "JWT", "Cloudinary"],
    },

    summaryMetrics: {
      users: "Educational institutions",
      scale: "Multi-tenant SaaS architecture",
      impact: "Streamlined course management workflow",
    },

    caseStudy: {
      role: "Full Stack Developer",
      teamSize: 3,
      targetUsers:
        "Educational institutions, independent instructors, and students seeking structured online learning",

      problem:
        "Educational institutions needed a unified platform to manage courses, enrollments, and student progress. Existing solutions were either too complex, expensive, or lacked proper role-based access control for different user types.",

      solution:
        "Developed a comprehensive learning management system with distinct roles for Admins, Teachers, and Students. Implemented email-based enrollment workflows, section-wise course organization, and progress tracking with automated notifications.",

      features: [
        "Multi-role authentication (Admin/Teacher/Student)",
        "Course creation with section-wise content",
        "Email-based enrollment invitations",
        "Progress tracking and analytics",
        "Assignment submission and grading",
        "Video content integration with Cloudinary",
        "Certificate generation on completion",
      ],

      architecture:
        "MERN stack architecture with Redux for state management. JWT-based authentication with role-specific middleware. Nodemailer integration for transactional emails. Cloudinary for media storage and streaming.",

      challenges: [
        {
          problem: "Managing complex role hierarchies and permissions.",
          solution:
            "Implemented middleware-based role verification with granular permission checks at both route and component levels.",
        },
        {
          problem: "Handling video content efficiently without high hosting costs.",
          solution:
            "Integrated Cloudinary with adaptive streaming to optimize bandwidth usage and reduce storage costs.",
        },
      ],

      contribution: [
        "Architected role-based access control system",
        "Built email notification workflow with Nodemailer",
        "Developed course management modules",
        "Implemented progress tracking dashboard",
        "Integrated Cloudinary for media handling",
      ],

      outcome:
        "Delivered a functional LMS prototype demonstrating scalable multi-tenant architecture suitable for educational institutions.",

      learnings: [
        "Deep understanding of role-based access patterns",
        "Email workflow automation best practices",
        "Video streaming optimization techniques",
      ],
    },

    meta: {
      tags: ["education", "lms", "saas", "multi-tenant"],
    },
  },

  {
    id: "daily-drift-001",
    slug: "the-daily-drift",
    title: "The Daily Drift",
    tagline: "Content Platform",
    description:
      "Content-driven web application with clean UI, optimized frontend performance, and REST API backend deployed on modern cloud infrastructure.",

    type: "fullstack",
    status: "live",
    year: 2023,
    duration: "3 months",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://thedailydrift.qullia.com/",
      github: "https://github.com/Sabbirbracu/The-Daily-Drift-Frontend",
    },

    techStack: {
      primary: ["React", "Tailwind", "Node.js", "Express", "MongoDB"],
      frontend: ["React", "Tailwind CSS"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      devops: ["Vercel", "MongoDB Atlas"],
    },

    summaryMetrics: {
      performance: "Optimized for fast page loads",
      scale: "Cloud-deployed infrastructure",
    },

    caseStudy: {
      role: "Full Stack Developer",
      teamSize: 1,
      targetUsers: "Content consumers seeking curated daily articles and news",

      problem:
        "Content platforms often suffer from cluttered interfaces, slow load times, and poor mobile experiences. Users needed a clean, fast platform to consume curated content without distractions.",

      solution:
        "Built a minimalist content platform focusing on readability and performance. Implemented lazy loading, optimized images, and clean typography for an excellent reading experience across all devices.",

      features: [
        "Clean, distraction-free reading interface",
        "Category-based content organization",
        "Responsive design for all devices",
        "Fast page loads with lazy loading",
        "SEO-optimized content structure",
        "Social sharing integration",
      ],

      architecture:
        "Decoupled frontend and backend architecture. React frontend deployed on Vercel for edge performance. Express API with MongoDB Atlas for scalable data storage. Image optimization pipeline for fast loading.",

      challenges: [
        {
          problem: "Achieving fast initial page loads with rich content.",
          solution:
            "Implemented code splitting, lazy loading, and image optimization to achieve sub-2-second load times.",
        },
        {
          problem: "SEO optimization for dynamic content.",
          solution:
            "Used semantic HTML, proper meta tags, and structured data markup for improved search visibility.",
        },
      ],

      contribution: [
        "Designed and implemented full application",
        "Optimized frontend performance",
        "Built RESTful API backend",
        "Deployed to cloud infrastructure",
        "Implemented SEO best practices",
      ],

      outcome:
        "Launched a live content platform with excellent performance metrics and positive user feedback on readability.",
    },

    meta: {
      tags: ["content", "blog", "media", "performance"],
    },
  },

  // ============================================
  // WORDPRESS PROJECTS
  // ============================================
  {
    id: "business-theme-001",
    slug: "business-theme-pro",
    title: "Business Theme Pro",
    tagline: "Corporate Theme",
    description:
      "Custom corporate WordPress theme with page builders, custom widgets, and WooCommerce integration for business websites.",

    type: "wordpress",
    status: "live",
    year: 2024,
    duration: "6 weeks",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://businesstheme.example.com/",
      github: "https://github.com/Sabbirbracu/business-theme-pro",
    },

    techStack: {
      primary: ["WordPress", "PHP", "JavaScript", "WooCommerce", "Elementor"],
      frontend: ["HTML5", "CSS3", "JavaScript", "SCSS"],
      backend: ["PHP", "WordPress Core"],
      tools: ["Elementor", "WooCommerce", "ACF Pro"],
    },

    summaryMetrics: {
      scale: "Enterprise-ready theme",
      performance: "90+ PageSpeed score",
      impact: "Reduced client development time by 60%",
    },

    caseStudy: {
      role: "WordPress Developer",
      teamSize: 1,
      targetUsers:
        "Small to medium businesses needing professional corporate websites",

      problem:
        "Businesses needed professional websites quickly but found existing themes either too generic, poorly coded, or lacking essential features like WooCommerce integration and page builder compatibility.",

      solution:
        "Developed a feature-rich, performance-optimized WordPress theme with Elementor integration, custom widgets, WooCommerce support, and extensive customization options through the WordPress Customizer.",

      features: [
        "Full Elementor page builder compatibility",
        "Custom Elementor widgets (10+ widgets)",
        "WooCommerce integration with custom styling",
        "Advanced theme customizer options",
        "Multiple header and footer layouts",
        "One-click demo import",
        "SEO-optimized structure",
        "RTL and translation ready",
      ],

      architecture:
        "Built on modern WordPress theme architecture with proper hooks, filters, and child theme support. Uses webpack for asset compilation. Custom post types and taxonomies for portfolio and testimonials.",

      challenges: [
        {
          problem: "Maintaining performance with feature-rich functionality.",
          solution:
            "Implemented conditional asset loading, lazy loading, and minification to achieve 90+ PageSpeed scores.",
        },
        {
          problem: "Ensuring compatibility across different WordPress setups.",
          solution:
            "Extensive testing with various plugins and WordPress versions. Built with WordPress coding standards compliance.",
        },
      ],

      contribution: [
        "Designed theme architecture from scratch",
        "Developed custom Elementor widgets",
        "Implemented WooCommerce integration",
        "Created theme customizer options",
        "Built demo content and documentation",
      ],

      outcome:
        "Delivered a professional theme that reduced client website development time by 60% while maintaining high performance standards.",
    },

    meta: {
      tags: ["wordpress", "theme", "corporate", "woocommerce", "elementor"],
    },
  },

  {
    id: "blog-starter-001",
    slug: "blog-starter-theme",
    title: "Blog Starter Theme",
    tagline: "Blog Theme",
    description:
      "Clean and minimal blog theme with SEO optimization, social sharing, and newsletter integration built from scratch.",

    type: "wordpress",
    status: "live",
    year: 2023,
    duration: "4 weeks",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://blogstarter.example.com/",
      github: "https://github.com/Sabbirbracu/blog-starter-theme",
    },

    techStack: {
      primary: ["WordPress", "PHP", "SCSS", "JavaScript", "REST API"],
      frontend: ["HTML5", "SCSS", "Vanilla JavaScript"],
      backend: ["PHP", "WordPress REST API"],
      tools: ["Gulp", "Webpack"],
    },

    summaryMetrics: {
      performance: "95+ PageSpeed score",
      scale: "Lightweight codebase (<100KB)",
    },

    caseStudy: {
      role: "WordPress Developer",
      teamSize: 1,
      targetUsers: "Bloggers and content creators seeking fast, minimal themes",

      problem:
        "Most WordPress blog themes are bloated with unnecessary features, slowing down websites and hurting SEO. Bloggers needed a lightweight, focused theme optimized for content and search engines.",

      solution:
        "Built a minimalist blog theme from scratch focusing on performance, readability, and SEO. Zero dependencies on heavy frameworks, with clean semantic markup and optimized asset delivery.",

      features: [
        "Minimalist, typography-focused design",
        "Built-in SEO optimization (Schema markup)",
        "Social sharing integration",
        "Newsletter subscription forms",
        "Reading time calculator",
        "Related posts algorithm",
        "Dark mode support",
        "AMP compatibility",
      ],

      architecture:
        "Custom theme built without frameworks for minimal footprint. Uses WordPress REST API for dynamic features. SCSS compiled with Gulp for optimized CSS. Lazy loading for images and comments.",

      challenges: [
        {
          problem: "Achieving excellent performance without sacrificing features.",
          solution:
            "Careful code architecture with conditional loading. Only load features when needed. Inline critical CSS for instant rendering.",
        },
        {
          problem: "SEO optimization for blog content.",
          solution:
            "Implemented comprehensive Schema.org markup, optimized heading structure, and automatic meta tag generation.",
        },
      ],

      contribution: [
        "Designed and developed entire theme",
        "Implemented SEO best practices",
        "Built newsletter integration",
        "Created social sharing system",
        "Optimized for performance",
      ],

      outcome:
        "Launched a theme achieving 95+ PageSpeed scores, providing bloggers with a fast, SEO-friendly platform for content creation.",
    },

    meta: {
      tags: ["wordpress", "blog", "minimal", "seo", "performance"],
    },
  },

  // ============================================
  // AUTOMATION PROJECTS
  // ============================================
  {
    id: "data-scraper-001",
    slug: "data-scraper-suite",
    title: "Data Scraper Suite",
    tagline: "Web Scraping Tool",
    description:
      "Comprehensive web scraping toolkit with proxy rotation, anti-detection measures, and data export to multiple formats.",

    type: "backend",
    status: "live",
    year: 2024,
    duration: "2 months",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://datascraper.example.com/",
      github: "https://github.com/Sabbirbracu/data-scraper-suite",
    },

    techStack: {
      primary: ["Python", "Selenium", "BeautifulSoup", "Pandas", "PostgreSQL"],
      backend: ["Python", "FastAPI"],
      database: ["PostgreSQL", "Redis"],
      tools: ["Selenium", "BeautifulSoup", "Scrapy", "Pandas"],
      devops: ["Docker", "Celery"],
    },

    summaryMetrics: {
      scale: "10,000+ pages/hour capability",
      performance: "99.5% success rate",
      impact: "Automated data collection workflows",
    },

    caseStudy: {
      role: "Backend Developer",
      teamSize: 1,
      targetUsers:
        "Data analysts, researchers, and businesses needing automated data collection",

      problem:
        "Manual data collection is time-consuming and error-prone. Existing scraping tools lack advanced anti-detection features, resulting in blocked requests and incomplete data sets.",

      solution:
        "Built a robust scraping framework with intelligent proxy rotation, browser fingerprint randomization, rate limiting, and automatic retry mechanisms. Includes data validation and export to multiple formats.",

      features: [
        "Intelligent proxy rotation pool",
        "Browser fingerprint randomization",
        "Automatic CAPTCHA detection and handling",
        "Rate limiting and request throttling",
        "Data validation and cleaning pipelines",
        "Export to CSV, JSON, Excel, PostgreSQL",
        "Scheduled scraping jobs",
        "Real-time progress monitoring",
      ],

      architecture:
        "Modular Python architecture with Celery for distributed task processing. Redis for caching and job queuing. PostgreSQL for structured data storage. Docker containers for isolated scraping environments.",

      challenges: [
        {
          problem: "Avoiding detection and IP blocks from target websites.",
          solution:
            "Implemented rotating residential proxies, randomized request headers, and human-like browsing patterns with variable delays.",
        },
        {
          problem: "Handling dynamic JavaScript-rendered content.",
          solution:
            "Used Selenium with headless Chrome for JavaScript execution, with fallback to BeautifulSoup for static content.",
        },
      ],

      contribution: [
        "Designed scraping architecture",
        "Implemented anti-detection measures",
        "Built data validation pipelines",
        "Created export functionality",
        "Developed monitoring dashboard",
      ],

      outcome:
        "Deployed a reliable scraping system processing 10,000+ pages per hour with 99.5% success rate, significantly reducing manual data collection effort.",
    },

    meta: {
      tags: ["automation", "scraping", "python", "data-collection"],
    },
  },

  {
    id: "cicd-pipeline-001",
    slug: "cicd-pipeline-builder",
    title: "CI/CD Pipeline Builder",
    tagline: "DevOps Automation",
    description:
      "Automated deployment pipeline with GitHub Actions, Docker containerization, and AWS integration for seamless deployments.",

    type: "backend",
    status: "live",
    year: 2024,
    duration: "6 weeks",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://cicd-pipeline.example.com/",
      github: "https://github.com/Sabbirbracu/cicd-pipeline-builder",
    },

    techStack: {
      primary: ["Docker", "GitHub Actions", "AWS", "Terraform", "Bash"],
      devops: ["Docker", "GitHub Actions", "AWS ECS", "Terraform"],
      tools: ["Bash", "Python", "AWS CLI"],
    },

    summaryMetrics: {
      performance: "Deployment time reduced by 80%",
      scale: "Supports multiple environments",
      impact: "Zero-downtime deployments achieved",
    },

    caseStudy: {
      role: "DevOps Engineer",
      teamSize: 2,
      targetUsers:
        "Development teams seeking automated, reliable deployment workflows",

      problem:
        "Manual deployments were error-prone, time-consuming, and caused frequent downtime. Teams lacked standardized processes for testing, building, and deploying applications across environments.",

      solution:
        "Designed and implemented a comprehensive CI/CD pipeline using GitHub Actions for automation, Docker for consistent environments, Terraform for infrastructure-as-code, and AWS ECS for container orchestration.",

      features: [
        "Automated testing on pull requests",
        "Docker image building and registry push",
        "Infrastructure provisioning with Terraform",
        "Blue-green deployment strategy",
        "Automatic rollback on failures",
        "Environment-specific configurations",
        "Slack notifications for pipeline status",
        "Secrets management with AWS Secrets Manager",
      ],

      architecture:
        "GitHub Actions workflows triggered by repository events. Docker images built and pushed to ECR. Terraform manages AWS infrastructure. ECS handles container orchestration with ALB for load balancing.",

      challenges: [
        {
          problem: "Achieving zero-downtime deployments.",
          solution:
            "Implemented blue-green deployment strategy with health checks and automatic traffic shifting through ALB.",
        },
        {
          problem: "Managing secrets securely across environments.",
          solution:
            "Integrated AWS Secrets Manager with GitHub Actions secrets for secure credential management.",
        },
      ],

      contribution: [
        "Designed CI/CD architecture",
        "Wrote GitHub Actions workflows",
        "Created Terraform infrastructure modules",
        "Implemented deployment strategies",
        "Set up monitoring and alerting",
      ],

      outcome:
        "Reduced deployment time from 2 hours to 15 minutes with zero-downtime releases, improving team productivity and release confidence.",
    },

    meta: {
      tags: ["devops", "cicd", "automation", "docker", "aws"],
    },
  },

  // ============================================
  // AI/ML PROJECTS
  // ============================================
  {
    id: "sentiment-analyzer-001",
    slug: "sentiment-analyzer",
    title: "Sentiment Analyzer",
    tagline: "NLP Application",
    description:
      "Real-time sentiment analysis API using transformer models for social media monitoring and brand sentiment tracking.",

    type: "ai-ml",
    status: "live",
    year: 2024,
    duration: "3 months",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://sentiment-api.example.com/",
      github: "https://github.com/Sabbirbracu/sentiment-analyzer",
    },

    techStack: {
      primary: ["Python", "TensorFlow", "FastAPI", "Hugging Face", "Redis"],
      aiMl: ["TensorFlow", "Hugging Face Transformers", "BERT"],
      backend: ["FastAPI", "Python"],
      database: ["Redis", "PostgreSQL"],
      devops: ["Docker", "AWS Lambda"],
    },

    summaryMetrics: {
      performance: "92% accuracy on benchmark datasets",
      scale: "1000+ requests/minute",
      impact: "Real-time brand monitoring capability",
    },

    caseStudy: {
      role: "ML Engineer",
      teamSize: 2,
      targetUsers:
        "Marketing teams, brand managers, and social media analysts",

      problem:
        "Brands struggle to monitor public sentiment at scale. Manual analysis of social media mentions is impossible, and existing tools lack accuracy for nuanced sentiment detection in various contexts.",

      solution:
        "Built a sentiment analysis API using fine-tuned BERT models from Hugging Face. Implemented real-time processing with caching for high-throughput scenarios and batch processing for historical analysis.",

      features: [
        "Real-time sentiment classification (positive/negative/neutral)",
        "Emotion detection (joy, anger, sadness, etc.)",
        "Aspect-based sentiment analysis",
        "Multi-language support",
        "Batch processing API",
        "Webhook integrations",
        "Analytics dashboard",
        "Custom model fine-tuning",
      ],

      architecture:
        "FastAPI backend serving fine-tuned BERT models. Redis caching for frequently analyzed text patterns. PostgreSQL for analytics storage. Docker deployment with auto-scaling based on load.",

      challenges: [
        {
          problem: "Achieving low latency for real-time analysis.",
          solution:
            "Implemented model quantization, Redis caching for similar texts, and batched inference for improved throughput.",
        },
        {
          problem: "Handling sarcasm and context-dependent sentiment.",
          solution:
            "Fine-tuned models on domain-specific datasets including sarcasm-labeled data for improved contextual understanding.",
        },
      ],

      contribution: [
        "Fine-tuned BERT models for sentiment tasks",
        "Built FastAPI inference server",
        "Implemented caching and optimization",
        "Created analytics dashboard",
        "Deployed scalable infrastructure",
      ],

      outcome:
        "Deployed a production sentiment analysis API achieving 92% accuracy with sub-100ms latency, enabling real-time brand monitoring.",

      learnings: [
        "Transformer model optimization techniques",
        "Trade-offs between accuracy and latency",
        "Production ML system design patterns",
      ],
    },

    meta: {
      featured: true,
      tags: ["ai", "nlp", "sentiment", "transformers", "bert"],
    },
  },

  {
    id: "image-classifier-001",
    slug: "image-classifier",
    title: "Image Classifier",
    tagline: "Computer Vision",
    description:
      "Custom image classification model trained on domain-specific data with REST API for real-time predictions.",

    type: "ai-ml",
    status: "live",
    year: 2023,
    duration: "2 months",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1527430253228-e93688616381?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1527430253228-e93688616381?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://image-classifier.example.com/",
      github: "https://github.com/Sabbirbracu/image-classifier",
    },

    techStack: {
      primary: ["Python", "PyTorch", "OpenCV", "Flask", "Docker"],
      aiMl: ["PyTorch", "ResNet", "Transfer Learning"],
      backend: ["Flask", "Python"],
      tools: ["OpenCV", "Pillow", "NumPy"],
      devops: ["Docker", "AWS EC2"],
    },

    summaryMetrics: {
      performance: "95% accuracy on test dataset",
      scale: "500 images/minute processing",
      impact: "Automated visual inspection workflow",
    },

    caseStudy: {
      role: "ML Developer",
      teamSize: 1,
      targetUsers:
        "Quality control teams and businesses needing automated image classification",

      problem:
        "Manual image classification for quality control is slow, inconsistent, and doesn't scale. Generic pre-trained models don't perform well on domain-specific images without customization.",

      solution:
        "Developed a transfer learning pipeline using ResNet architecture fine-tuned on domain-specific data. Built a REST API for easy integration with existing workflows and a simple web interface for testing.",

      features: [
        "Custom model training pipeline",
        "Transfer learning from ResNet",
        "REST API for predictions",
        "Batch image processing",
        "Confidence score thresholds",
        "Model versioning and A/B testing",
        "Web-based testing interface",
        "Automatic data augmentation",
      ],

      architecture:
        "PyTorch training pipeline with MLflow for experiment tracking. Flask API serving optimized ONNX models. OpenCV for image preprocessing. Docker container for consistent deployment.",

      challenges: [
        {
          problem: "Limited domain-specific training data.",
          solution:
            "Implemented extensive data augmentation (rotation, flipping, color jittering) and used transfer learning to leverage pre-trained features.",
        },
        {
          problem: "Optimizing model for production inference.",
          solution:
            "Converted PyTorch model to ONNX format and used ONNX Runtime for 3x faster inference.",
        },
      ],

      contribution: [
        "Designed data collection and labeling pipeline",
        "Implemented transfer learning training",
        "Built Flask inference API",
        "Created web testing interface",
        "Deployed production system",
      ],

      outcome:
        "Delivered a 95% accurate image classifier processing 500 images per minute, enabling automated quality control workflows.",

      learnings: [
        "Transfer learning best practices",
        "Data augmentation strategies",
        "Model optimization for production",
      ],
    },

    meta: {
      tags: ["ai", "computer-vision", "classification", "pytorch"],
    },
  },

  // ============================================
  // RESEARCH PROJECTS
  // ============================================
  {
    id: "blockchain-voting-001",
    slug: "blockchain-voting-system",
    title: "Blockchain Voting System",
    tagline: "Decentralized App",
    description:
      "Experimental decentralized voting system using Ethereum smart contracts ensuring transparency and immutability.",

    type: "research",
    status: "concept",
    year: 2024,
    duration: "4 months",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://blockchain-voting.example.com/",
      github: "https://github.com/Sabbirbracu/blockchain-voting",
    },

    techStack: {
      primary: ["Solidity", "React", "Web3.js", "Truffle", "IPFS"],
      frontend: ["React", "Web3.js", "Ethers.js"],
      backend: ["Solidity", "Ethereum"],
      tools: ["Truffle", "Ganache", "IPFS", "MetaMask"],
    },

    summaryMetrics: {
      scale: "Testnet deployment successful",
      impact: "Demonstrated feasibility of blockchain voting",
    },

    caseStudy: {
      role: "Blockchain Developer",
      teamSize: 2,
      targetUsers:
        "Organizations seeking transparent, tamper-proof voting mechanisms",

      problem:
        "Traditional voting systems suffer from lack of transparency, potential for manipulation, and difficulty in auditing. Centralized systems require trust in a single authority.",

      solution:
        "Built a decentralized voting application on Ethereum that records all votes as immutable transactions. Smart contracts enforce voting rules, and IPFS stores candidate information in a distributed manner.",

      features: [
        "Immutable vote recording on blockchain",
        "Smart contract-enforced voting rules",
        "Voter eligibility verification",
        "Real-time vote counting",
        "Transparent audit trail",
        "IPFS-based candidate profiles",
        "MetaMask wallet integration",
        "Gas-optimized smart contracts",
      ],

      architecture:
        "Solidity smart contracts deployed on Ethereum (Sepolia testnet). React frontend with Web3.js for blockchain interaction. IPFS for decentralized storage of election metadata. Events for real-time updates.",

      challenges: [
        {
          problem: "Ensuring voter privacy while maintaining transparency.",
          solution:
            "Implemented commitment schemes where vote choices are hidden until the reveal phase, while vote counts remain publicly verifiable.",
        },
        {
          problem: "High gas costs for on-chain operations.",
          solution:
            "Optimized smart contract code, used events instead of storage where possible, and implemented batch operations.",
        },
      ],

      contribution: [
        "Designed smart contract architecture",
        "Implemented voting logic in Solidity",
        "Built React frontend with Web3 integration",
        "Set up IPFS for decentralized storage",
        "Wrote comprehensive test suite",
      ],

      outcome:
        "Successfully demonstrated a working prototype of blockchain-based voting, proving the feasibility of transparent, tamper-proof elections.",

      learnings: [
        "Smart contract security best practices",
        "Gas optimization techniques",
        "Decentralized application architecture",
        "Web3 frontend development",
      ],
    },

    meta: {
      tags: ["blockchain", "ethereum", "voting", "dapp", "research"],
    },
  },

  {
    id: "quantum-simulator-001",
    slug: "quantum-algorithm-simulator",
    title: "Quantum Algorithm Simulator",
    tagline: "Quantum Computing",
    description:
      "Educational simulator for understanding quantum algorithms like Shor's and Grover's with visual representations.",

    type: "research",
    status: "concept",
    year: 2023,
    duration: "3 months",
    visibility: "public",

    media: {
      banner:
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
      gallery: [
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&h=900&fit=crop",
        "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1600&h=900&fit=crop",
      ],
    },

    links: {
      live: "https://quantum-simulator.example.com/",
      github: "https://github.com/Sabbirbracu/quantum-algorithm-simulator",
    },

    techStack: {
      primary: ["Python", "Qiskit", "NumPy", "Matplotlib", "Jupyter"],
      aiMl: ["Qiskit", "NumPy", "SciPy"],
      tools: ["Jupyter Notebook", "Matplotlib", "Plotly"],
    },

    summaryMetrics: {
      scale: "10+ quantum algorithms implemented",
      impact: "Educational resource for quantum computing",
    },

    caseStudy: {
      role: "Research Developer",
      teamSize: 1,
      targetUsers:
        "Students and developers learning quantum computing concepts",

      problem:
        "Quantum computing concepts are abstract and difficult to understand without hands-on experience. Access to real quantum hardware is limited, and existing simulators lack educational focus.",

      solution:
        "Created an interactive simulator using IBM's Qiskit framework that visualizes quantum states, gate operations, and algorithm execution. Includes step-by-step explanations of famous quantum algorithms.",

      features: [
        "Visual quantum circuit builder",
        "State vector visualization (Bloch sphere)",
        "Step-by-step algorithm execution",
        "Shor's algorithm demonstration",
        "Grover's search visualization",
        "Quantum entanglement experiments",
        "Interactive Jupyter notebooks",
        "Probability distribution plots",
      ],

      architecture:
        "Python-based simulation using Qiskit's statevector simulator. Jupyter notebooks for interactive exploration. Matplotlib and Plotly for visualizations. Educational documentation alongside code.",

      challenges: [
        {
          problem: "Making quantum concepts visually intuitive.",
          solution:
            "Implemented Bloch sphere visualizations, probability amplitude charts, and animated gate operations to show quantum state evolution.",
        },
        {
          problem: "Simulating algorithms efficiently on classical hardware.",
          solution:
            "Used sparse matrix representations and optimized tensor operations for handling multi-qubit systems up to 20 qubits.",
        },
      ],

      contribution: [
        "Implemented quantum gate operations",
        "Created Bloch sphere visualizations",
        "Developed algorithm walkthroughs",
        "Wrote educational documentation",
        "Built interactive Jupyter notebooks",
      ],

      outcome:
        "Developed a comprehensive educational tool demonstrating core quantum computing concepts, used for personal learning and shared with the community.",

      learnings: [
        "Deep understanding of quantum mechanics principles",
        "Qiskit framework proficiency",
        "Scientific visualization techniques",
        "Technical writing for education",
      ],
    },

    meta: {
      tags: ["quantum", "simulation", "education", "research", "qiskit"],
    },
  },
];

export default projects;
