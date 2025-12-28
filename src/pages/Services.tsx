import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Globe, ShoppingCart, Bot, Wrench, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: 1,
    icon: Code,
    title: "Custom Full-Stack Web Application Development",
    description: "End-to-end development of scalable, secure web applications tailored to your business needs.",
    solves: ["MVPs", "SaaS Platforms", "Admin Dashboards", "Marketplaces", "Internal Tools"],
    tech: ["React / Next.js", "Node.js / Express / Nest.js", "MongoDB / PostgreSQL", "Secure Auth, APIs, CI/CD"],
    pricing: [
      { label: "MVP Build", range: "$2,500 – $4,000" },
      { label: "Production App", range: "$5,000 – $10,000+" }
    ],
    featured: true
  },
  {
    id: 2,
    icon: Globe,
    title: "High-Conversion Business Websites & Landing Pages",
    description: "Beautiful, performance-optimized websites designed to convert visitors into customers.",
    solves: ["Business Websites", "Landing Pages", "Portfolio Sites", "Lead Generation"],
    tech: ["WordPress / Headless CMS", "Custom UI Design", "SEO-Ready", "Performance Optimized", "Lead Capture & Integrations"],
    pricing: [
      { label: "Landing Page", range: "$300 – $600" },
      { label: "Business Website", range: "$700 – $1,500" }
    ],
    featured: false
  },
  {
    id: 3,
    icon: ShoppingCart,
    title: "E-Commerce Development & Workflow Automation",
    description: "Complete e-commerce solutions with automated workflows to streamline your operations.",
    solves: ["Online Stores", "Payment Integration", "Order Automation", "CRM Integration"],
    tech: ["WooCommerce / Custom Store", "Payment Gateway Integration", "Order Automation", "CRM / Email / GoHighLevel Workflows"],
    pricing: [
      { label: "Starter Store", range: "$800 – $1,500" },
      { label: "Advanced Automation", range: "$2,000 – $4,000" }
    ],
    featured: false
  },
  {
    id: 4,
    icon: Bot,
    title: "AI Feature Integration for Web Applications",
    description: "Leverage cutting-edge AI to add intelligent features that set your product apart.",
    solves: ["AI Chat Assistants", "Recommendation Systems", "AI Dashboards", "LLM-Powered Automation"],
    tech: ["OpenAI / Claude APIs", "Custom AI Models", "Natural Language Processing", "Intelligent Automation"],
    pricing: [
      { label: "Single AI Feature", range: "$800 – $1,500" },
      { label: "AI-Powered Module", range: "$2,000 – $5,000" }
    ],
    featured: false
  },
  {
    id: 5,
    icon: Wrench,
    title: "Ongoing Maintenance & Technical Support",
    description: "Keep your applications running smoothly with professional maintenance and priority support.",
    solves: ["Bug Fixes", "Minor Feature Updates", "Server Monitoring", "Security Updates"],
    tech: ["24/7 Monitoring", "Regular Backups", "Security Patches", "Performance Optimization"],
    pricing: [
      { label: "Basic Plan", range: "$150 / month" },
      { label: "Priority Plan", range: "$300 / month" }
    ],
    featured: false
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Sabbir - Full-Stack Developer</title>
        <meta name="description" content="Professional web development services including full-stack applications, business websites, e-commerce, AI integration, and ongoing maintenance." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
          
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Professional Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6">
                Solutions That Drive
                <span className="text-primary"> Results</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                From MVPs to enterprise applications, I deliver high-quality web solutions 
                tailored to your business goals. Final pricing depends on scope.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="section-container">
            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative group rounded-2xl border ${
                    service.featured 
                      ? "border-primary/50 bg-gradient-to-br from-primary/10 via-background to-background" 
                      : "border-border/50 bg-card/50"
                  } backdrop-blur-sm overflow-hidden`}
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      Primary Service
                    </div>
                  )}
                  
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-[1fr,auto] gap-8">
                      {/* Left Content */}
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${
                            service.featured 
                              ? "bg-primary/20 text-primary" 
                              : "bg-muted text-muted-foreground group-hover:text-primary group-hover:bg-primary/10"
                          } transition-colors`}>
                            <service.icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
                              {service.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </div>

                        {/* What it solves */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">What I Build</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.solves.map((item) => (
                              <span 
                                key={item}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground text-sm"
                              >
                                <Check className="w-3.5 h-3.5 text-primary" />
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.tech.map((item) => (
                              <span 
                                key={item}
                                className="px-3 py-1.5 rounded-lg bg-primary/5 border border-primary/20 text-foreground text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right Content - Pricing */}
                      <div className="md:min-w-[280px] md:border-l md:border-border/50 md:pl-8">
                        <h4 className="text-sm font-semibold text-foreground mb-4">Investment Range</h4>
                        <div className="space-y-4">
                          {service.pricing.map((price) => (
                            <div 
                              key={price.label}
                              className="p-4 rounded-xl bg-muted/30 border border-border/30"
                            >
                              <div className="text-sm text-muted-foreground mb-1">{price.label}</div>
                              <div className="text-xl font-bold text-foreground">{price.range}</div>
                            </div>
                          ))}
                        </div>
                        
                        <Button 
                          className="w-full mt-6 group/btn"
                          variant={service.featured ? "default" : "outline"}
                          asChild
                        >
                          <a href="/#contact">
                            Get Started
                            <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-background p-8 md:p-12 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Let's discuss your requirements and create something amazing together.
                  Schedule a free consultation to get started.
                </p>
                <Button size="lg" asChild>
                  <a href="/#contact">
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
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
