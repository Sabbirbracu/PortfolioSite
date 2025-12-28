import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Bot,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Code, Globe,
  Heart,
  MessageSquare,
  Rocket,
  Shield,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  Timer,
  TrendingUp,
  Wrench,
  Zap
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

// Animated counter hook for social proof numbers
const useCountUp = (end: number, duration: number = 2000, startOnView: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if ((startOnView && isInView && !hasStarted) || (!startOnView && !hasStarted)) {
      setHasStarted(true);
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration, hasStarted, startOnView]);

  return { count, ref };
};

const services = [
  {
    id: 1,
    icon: Code,
    title: "Custom Full-Stack Web Application Development",
    tagline: "Turn Your Vision Into a Scalable Product",
    description: "End-to-end development of scalable, secure web applications that grow with your business. From concept to deployment, I handle everything.",
    painPoints: ["Tired of unreliable freelancers?", "Need a technical co-founder mindset?", "Want code that scales?"],
    solves: ["MVPs & Startups", "SaaS Platforms", "Admin Dashboards", "Marketplaces", "Internal Tools"],
    tech: ["React / Next.js", "Node.js / Express / Nest.js", "MongoDB / PostgreSQL", "Secure Auth, APIs, CI/CD"],
    benefits: ["Clean, maintainable code", "Full documentation", "Post-launch support included"],
    pricing: [
      { label: "MVP Build", range: "$2,500 – $4,000", note: "4-6 weeks", popular: false },
      { label: "Production App", range: "$5,000 – $10,000+", note: "8-12 weeks", popular: true }
    ],
    guarantee: "100% satisfaction or revisions until you're happy",
    featured: true,
    slots: 2
  },
  {
    id: 2,
    icon: Globe,
    title: "High-Conversion Business Websites & Landing Pages",
    tagline: "Websites That Actually Convert Visitors",
    description: "Beautiful, performance-optimized websites designed with conversion psychology. Every element serves a purpose.",
    painPoints: ["Current site not generating leads?", "Slow loading killing your SEO?", "Design feels outdated?"],
    solves: ["Business Websites", "Landing Pages", "Portfolio Sites", "Lead Generation"],
    tech: ["WordPress / Headless CMS", "Custom UI Design", "SEO-Ready", "Performance Optimized"],
    benefits: ["Mobile-first design", "SEO optimized", "Fast loading < 2s"],
    pricing: [
      { label: "Landing Page", range: "$300 – $600", note: "3-5 days", popular: false },
      { label: "Business Website", range: "$700 – $1,500", note: "1-2 weeks", popular: true }
    ],
    guarantee: "Free revisions for 14 days after delivery",
    featured: false,
    slots: 4
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "E-Commerce Development & Workflow Automation",
    tagline: "Sell More, Work Less with Smart Automation",
    description: "Complete e-commerce solutions with automated workflows that save you 10+ hours per week on repetitive tasks.",
    painPoints: ["Manually processing every order?", "Losing sales to cart abandonment?", "No time for marketing?"],
    solves: ["Online Stores", "Payment Integration", "Order Automation", "CRM Integration"],
    tech: ["WooCommerce / Custom Store", "Payment Gateway Integration", "Order Automation", "CRM / Email Workflows"],
    benefits: ["Automated order processing", "Email sequences setup", "Inventory management"],
    pricing: [
      { label: "Starter Store", range: "$800 – $1,500", note: "1-2 weeks", popular: false },
      { label: "Advanced Automation", range: "$2,000 – $4,000", note: "3-4 weeks", popular: true }
    ],
    guarantee: "30-day bug-free guarantee",
    featured: false,
    slots: 3
  },
  {
    id: 4,
    icon: Bot,
    title: "AI Feature Integration for Web Applications",
    tagline: "Future-Proof Your Product with AI",
    description: "Leverage cutting-edge AI to add intelligent features that set your product apart and delight your users.",
    painPoints: ["Competitors adding AI features?", "Want to automate support?", "Need personalization at scale?"],
    solves: ["AI Chat Assistants", "Recommendation Systems", "AI Dashboards", "LLM-Powered Automation"],
    tech: ["OpenAI / Claude APIs", "Custom AI Models", "Natural Language Processing", "Intelligent Automation"],
    benefits: ["Reduce support tickets 40%", "Increase engagement", "Personalized experiences"],
    pricing: [
      { label: "Single AI Feature", range: "$800 – $1,500", note: "1-2 weeks", popular: false },
      { label: "AI-Powered Module", range: "$2,000 – $5,000", note: "3-5 weeks", popular: true }
    ],
    guarantee: "Performance benchmarks guaranteed",
    featured: false,
    slots: 2
  },
  {
    id: 5,
    icon: Wrench,
    title: "Ongoing Maintenance & Technical Support",
    tagline: "Sleep Better Knowing Your App is Protected",
    description: "Keep your applications running smoothly with professional maintenance, security updates, and priority support.",
    painPoints: ["Worried about downtime?", "No time for updates?", "Security concerns keeping you up?"],
    solves: ["Bug Fixes", "Minor Feature Updates", "Server Monitoring", "Security Updates"],
    tech: ["24/7 Monitoring", "Regular Backups", "Security Patches", "Performance Optimization"],
    benefits: ["99.9% uptime guarantee", "Same-day response", "Monthly reports"],
    pricing: [
      { label: "Basic Plan", range: "$150 / month", note: "5 hrs included", popular: false },
      { label: "Priority Plan", range: "$300 / month", note: "12 hrs + priority", popular: true }
    ],
    guarantee: "Cancel anytime, no questions asked",
    featured: false,
    slots: 5
  }
];

const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: Rocket },
  { value: 98, suffix: "%", label: "Client Satisfaction", icon: Heart },
  { value: 4, suffix: "+", label: "Years Experience", icon: Award },
  { value: 24, suffix: "hr", label: "Avg Response Time", icon: Clock }
];

const trustSignals = [
  "Secure Payment via Escrow",
  "NDA & Contract Included",
  "Source Code Ownership",
  "Post-Launch Support"
];

const processSteps = [
  { step: 1, title: "Discovery Call", description: "Free 30-min consultation to understand your needs", icon: MessageSquare },
  { step: 2, title: "Custom Proposal", description: "Detailed scope, timeline, and transparent pricing", icon: Target },
  { step: 3, title: "Development", description: "Weekly updates and milestone reviews", icon: Code },
  { step: 4, title: "Launch & Support", description: "Smooth deployment with ongoing assistance", icon: Rocket }
];

const faqs = [
  {
    q: "What if I'm not satisfied with the work?",
    a: "I offer unlimited revisions until you're completely satisfied. Your success is my priority, and I won't rest until you're happy with the result."
  },
  {
    q: "How do you handle communication during the project?",
    a: "You'll receive weekly progress updates via your preferred channel (Slack, Email, or WhatsApp). I'm also available for quick questions throughout the week."
  },
  {
    q: "Do I own the code after the project?",
    a: "Absolutely. You receive 100% ownership of all source code, documentation, and assets upon final payment. No hidden licensing fees."
  },
  {
    q: "What's your payment structure?",
    a: "Typically 50% upfront to begin, 50% upon completion. For larger projects, we can arrange milestone-based payments. I use secure escrow for your protection."
  },
  {
    q: "How quickly can you start?",
    a: "I can typically start within 1-2 weeks depending on current availability. Book a discovery call to secure your spot."
  }
];

const Services = () => {
  const statsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Helmet>
        <title>Services | Sabbir - Full-Stack Developer | Transform Your Ideas Into Reality</title>
        <meta name="description" content="Professional web development services: full-stack applications, business websites, e-commerce, AI integration. 50+ projects delivered, 98% satisfaction rate. Book free consultation." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section - Psychological Hook */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          {/* Floating elements for visual interest */}
          <motion.div 
            className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
            animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
            animate={{ y: [0, 20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Urgency Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6"
              >
                <Timer className="w-4 h-4" />
                <span>Limited Availability: Only 3 spots left for January</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                Stop Losing Money to
                <span className="text-primary block md:inline"> Poor Web Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                I help startups and businesses build <span className="text-foreground font-medium">high-converting web applications</span> that 
                actually work. No more missed deadlines, broken promises, or code that falls apart.
              </p>

              {/* Social Proof Micro-Copy */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/60 to-primary border-2 border-background flex items-center justify-center text-[10px] text-white font-bold">
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                  <span>Trusted by <span className="text-foreground font-medium">50+ clients</span></span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">5.0 Rating</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="group text-base px-8" asChild>
                  <a href="/#contact">
                    Book Free Strategy Call
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  No commitment required
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Trust Bar - Authority & Credibility */}
        <section className="py-6 border-y border-border/50 bg-muted/30">
          <div className="section-container">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {trustSignals.map((signal, index) => (
                <motion.div
                  key={signal}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <Shield className="w-4 h-4 text-green-500" />
                  {signal}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section - Social Proof Numbers */}
        <section ref={statsRef} className="py-16 bg-gradient-to-b from-background via-muted/20 to-background">
          <div className="section-container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const { count, ref } = useCountUp(stat.value, 2000);
                return (
                  <motion.div
                    key={stat.label}
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                      {count}{stat.suffix}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Problem Agitation Section */}
        <section className="py-16">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-red-500/10 text-red-500 text-sm font-medium mb-4">
                Sound Familiar?
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                These Problems Are Costing You Money
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { problem: "Hired a cheap developer, got code that broke in production", icon: "💸" },
                { problem: "Weeks of back-and-forth with no real progress", icon: "⏰" },
                { problem: "\"It's almost done\" turned into months of delays", icon: "📅" },
                { problem: "No documentation, can't even update your own site", icon: "📝" },
                { problem: "Developer disappeared after getting paid", icon: "👻" },
                { problem: "Security vulnerabilities putting your data at risk", icon: "🔓" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-xl bg-red-500/5 border border-red-500/20 hover:border-red-500/40 transition-colors"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <p className="text-muted-foreground">{item.problem}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center text-lg text-foreground font-medium mt-10"
            >
              It doesn't have to be this way. <span className="text-primary">Here's the solution →</span>
            </motion.p>
          </div>
        </section>

        {/* Services Grid - Value-Focused */}
        <section className="py-16 bg-gradient-to-b from-muted/30 via-background to-background">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Services That Deliver
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Invest in Solutions, Not Problems
              </h2>
              <p className="text-muted-foreground">
                Every service is designed to solve real business challenges and deliver measurable results.
              </p>
            </motion.div>

            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative group rounded-2xl border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 ${
                    service.featured 
                      ? "border-primary/50 bg-gradient-to-br from-primary/10 via-background to-background" 
                      : "border-border/50 bg-card/50 hover:border-primary/30"
                  }`}
                >
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      Most Popular – Best Value for Startups
                      <Sparkles className="w-4 h-4" />
                    </div>
                  )}

                  {/* Limited Slots Badge */}
                  {service.slots <= 3 && (
                    <div className={`absolute ${service.featured ? 'top-12' : 'top-4'} right-4 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold flex items-center gap-1`}>
                      <Timer className="w-3 h-3" />
                      Only {service.slots} slots left
                    </div>
                  )}
                  
                  <div className={`p-6 md:p-8 ${service.featured ? 'pt-14' : ''}`}>
                    <div className="grid lg:grid-cols-[1fr,320px] gap-8">
                      {/* Left Content */}
                      <div className="space-y-6">
                        {/* Header */}
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl shrink-0 ${
                            service.featured 
                              ? "bg-primary/20 text-primary" 
                              : "bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
                          } transition-colors`}>
                            <service.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-1">
                              {service.title}
                            </h3>
                            <p className="text-primary font-medium text-sm mb-2">{service.tagline}</p>
                            <p className="text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* Pain Points - Psychological Hook */}
                        <div className="p-4 rounded-xl bg-muted/50 border border-border/50">
                          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                            <MessageSquare className="w-4 h-4 text-primary" />
                            Does this sound like you?
                          </h4>
                          <ul className="space-y-2">
                            {service.painPoints.map((point) => (
                              <li key={point} className="text-sm text-muted-foreground flex items-center gap-2">
                                <span className="text-amber-500">•</span>
                                {point}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What you get */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            What I Build For You
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {service.solves.map((item) => (
                              <span 
                                key={item}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-foreground text-sm"
                              >
                                <Check className="w-3.5 h-3.5 text-primary" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Benefits - Value Focused */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                            <Zap className="w-4 h-4 text-primary" />
                            What's Included
                          </h4>
                          <div className="grid sm:grid-cols-3 gap-3">
                            {service.benefits.map((benefit) => (
                              <div 
                                key={benefit}
                                className="flex items-center gap-2 text-sm text-foreground"
                              >
                                <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                {benefit}
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack - Collapsed */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.tech.map((item) => (
                              <span 
                                key={item}
                                className="px-2.5 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Pricing Card */}
                      <div className="lg:border-l lg:border-border/50 lg:pl-8">
                        <div className="sticky top-24 space-y-4">
                          <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            Investment Options
                          </h4>
                          
                          {service.pricing.map((price) => (
                            <div 
                              key={price.label}
                              className={`p-4 rounded-xl border transition-all ${
                                price.popular 
                                  ? "bg-primary/5 border-primary/30 ring-1 ring-primary/20" 
                                  : "bg-muted/30 border-border/30 hover:border-border"
                              }`}
                            >
                              {price.popular && (
                                <div className="text-xs font-semibold text-primary mb-2 flex items-center gap-1">
                                  <BadgeCheck className="w-3 h-3" />
                                  Recommended
                                </div>
                              )}
                              <div className="flex items-center justify-between mb-1">
                                <div className="text-sm text-muted-foreground">{price.label}</div>
                                <div className="text-xs text-muted-foreground flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {price.note}
                                </div>
                              </div>
                              <div className="text-2xl font-bold text-foreground">{price.range}</div>
                            </div>
                          ))}

                          {/* Guarantee Badge */}
                          <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20 flex items-start gap-2">
                            <Shield className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                            <p className="text-xs text-green-700 dark:text-green-400">{service.guarantee}</p>
                          </div>
                          
                          <Button 
                            className="w-full group/btn"
                            size="lg"
                            variant={service.featured ? "default" : "outline"}
                            asChild
                          >
                            <a href="/#contact">
                              Get Custom Quote
                              <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                            </a>
                          </Button>
                          
                          <p className="text-xs text-center text-muted-foreground">
                            Free consultation • No obligation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section - Reduce Uncertainty */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Simple Process
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                How We'll Work Together
              </h2>
              <p className="text-muted-foreground">
                A straightforward process designed for your success. No surprises, just results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  <div className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                      {step.step}
                    </div>
                    <step.icon className="w-6 h-6 text-primary mx-auto mb-3" />
                    <h3 className="font-heading font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Objection Handling */}
        <section className="py-20 bg-muted/30">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Everything You Need to Know
              </h2>
            </motion.div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <h3 className="font-heading font-bold text-foreground mb-2 flex items-start gap-3">
                    <MessageSquare className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground ml-8">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - Urgency & Value */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-8 md:p-12 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                {/* Urgency */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-sm font-medium mb-6"
                >
                  <Calendar className="w-4 h-4" />
                  January spots are filling fast – Only 3 remaining
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
                  Let's Build Something
                  <span className="text-primary"> Amazing Together</span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Book a free 30-minute strategy call. We'll discuss your project, 
                  answer your questions, and create a roadmap for success.
                </p>

                {/* Value Stack */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {[
                    "Free consultation",
                    "Custom proposal",
                    "No obligation",
                    "Response within 24hrs"
                  ].map((item) => (
                    <span 
                      key={item}
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="group text-base px-8" asChild>
                    <a href="/#contact">
                      Book Your Free Strategy Call
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>

                {/* Risk Reversal */}
                <div className="mt-8 p-4 rounded-xl bg-green-500/5 border border-green-500/20 inline-flex items-center gap-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <p className="text-sm text-left">
                    <span className="font-semibold text-foreground">100% Satisfaction Guarantee</span>
                    <br />
                    <span className="text-muted-foreground">If you're not happy, I'll revise until you are. Your success is my reputation.</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Services;
