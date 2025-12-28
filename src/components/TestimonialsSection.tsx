import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface TextTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

const textTestimonials: TextTestimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CTO",
    company: "StartupX",
    quote: "Sabbir's technical expertise and problem-solving skills are exceptional. He delivered a complex web application on time and exceeded all our expectations.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    quote: "Working with Sabbir was a pleasure. His attention to detail and commitment to quality made our project a huge success. Highly recommended!",
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder",
    company: "InnovateLab",
    quote: "Sabbir transformed our vision into reality. His full-stack expertise and proactive communication made the development process smooth and efficient.",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Director",
    company: "GrowthHub",
    quote: "The website Sabbir built for us increased our conversions by 40%. His understanding of both design and functionality is truly impressive.",
  },
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % textTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % textTestimonials.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + textTestimonials.length) % textTestimonials.length);

  const youtubeVideoId = "2Fs0-o5jeEU";

  return (
    <section id="testimonials" className="relative py-28 px-4 md:px-6 lg:px-8 overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-mono uppercase tracking-widest">Client Voices</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold mb-5">
            <span className="text-gradient">Success</span>{" "}
            <span className="text-foreground">Stories</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>

        {/* Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-full"
          >
            <div className="relative h-full">
              {/* Card Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative glass-card rounded-3xl overflow-hidden border-primary/10 h-full flex flex-col">
                {/* Video Label */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/90 backdrop-blur-sm border border-primary/20">
                    <Play className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-foreground">Video Review</span>
                  </div>
                </div>
                
                {/* Video */}
                <div className="aspect-video flex-1">
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                    title="Client Testimonial Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Testimonials Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="h-full"
          >
            <div className="relative h-full">
              {/* Card Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/15 to-accent/20 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative glass-card rounded-3xl p-8 md:p-10 border-primary/10 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/30">
                  <span className="text-2xl font-bold text-primary-foreground">"</span>
                </div>

                {/* Slider Content */}
                <div className="flex-1 flex flex-col justify-center pt-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex flex-col items-center text-center"
                    >
                      <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-light">
                        {textTestimonials[currentSlide].quote}
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-50" />
                          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center ring-2 ring-primary/20 ring-offset-2 ring-offset-card">
                            <span className="text-primary-foreground font-bold text-xl">
                              {textTestimonials[currentSlide].name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="text-left">
                          <p className="font-bold text-foreground text-lg">
                            {textTestimonials[currentSlide].name}
                          </p>
                          <p className="text-primary font-mono text-sm">
                            {textTestimonials[currentSlide].role}
                            <span className="text-muted-foreground"> @ {textTestimonials[currentSlide].company}</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Progress Dots */}
                <div className="flex justify-center gap-2 mt-6 pt-6 border-t border-border/20">
                  {textTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className="relative h-2 rounded-full overflow-hidden transition-all duration-300"
                      style={{ width: index === currentSlide ? '32px' : '8px' }}
                      aria-label={`Go to testimonial ${index + 1}`}
                    >
                      <div className="absolute inset-0 bg-muted-foreground/20" />
                      {index === currentSlide && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-primary to-accent"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 5, ease: "linear" }}
                          style={{ transformOrigin: 'left' }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
