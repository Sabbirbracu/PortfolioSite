import { Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    title: "ShaadiMartBD",
    tagline: "Matrimony Platform",
    description: "A full-featured matrimony platform with real-time chat, secure authentication, role-based access, and scalable profile & search system.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    year: "2024",
    banner: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=400&fit=crop",
    demoLink: "https://biye-bandhan.vercel.app/",
    githubLink: "https://github.com/Sabbirbracu/ShaadimartBD",
    slug: "shaadimartbd",
    images: [
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=900&fit=crop"
    ],
    // Case study specific fields
    duration: "8 months",
    role: "Full Stack Engineer (Backend-heavy)",
    teamSize: "3",
    status: "Live / Production",
    targetUsers: "Bangladesh-based users seeking verified matrimony matches",
    problem: `Traditional matrimony platforms lacked structured profile completion, controlled access to sensitive contact information, real-time secure communication, high drop-off during onboarding, and weak verification flows.`,
    solution: `Designed enforced multi-step profile completion with progress tracking; implemented subscription-based access control for contact visibility; built a WebSocket-based real-time chat; and created an admin dashboard for moderation and subscription management.`,
    features: [
      "Multi-step profile completion with progress",
      "Subscription & access control (tiered plans)",
      "Real-time chat (WebSocket)",
      "Advanced search & filtering",
      "Admin dashboard for moderation and plans"
    ],
    techCategories: {
      frontend: ["React", "Tailwind CSS", "TypeScript"],
      backend: ["Node.js", "Express"],
      database: ["MongoDB"],
      realtime: ["Socket.io"],
      devops: ["Nginx", "Hostinger VPS", "GitHub Actions"]
    },
    architecture: `Token-based authorization to control subscription-level access; Nginx reverse proxy for WSS over port 443; separation of concerns between auth, profile, search, and messaging microservices for future mobile scalability.`,
    challenges: [
      {
        challenge: "WebSocket connections failed in production due to SSL and port issues.",
        solution: "Configured Nginx reverse proxy to support secure WSS traffic over port 443, resolving connection stability and SSL termination issues."
      },
      {
        challenge: "High onboarding drop-off during profile creation.",
        solution: "Implemented enforced, step-by-step onboarding with progress indicators and inline validation to improve completion rates."
      }
    ],
    outcome: `Operationally stable in production; improved onboarding completion and increased engagement via real-time chat (anecdotal).`,
    contribution: [
      "Designed backend architecture",
      "Implemented authentication & subscription systems",
      "Integrated WebSockets for real-time chat",
      "Deployed and managed production environment",
      "Fixed live production issues"
    ],
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
    slug: "ride-partner-finder",
    images: [
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1600&h=900&fit=crop"
    ]
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
    slug: "learnhub-pro",
    images: [
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1600&h=900&fit=crop"
    ]
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
    slug: "the-daily-drift",
    images: [
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&h=900&fit=crop"
    ]
  }
];

export default projects;
