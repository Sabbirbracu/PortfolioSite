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

        {/* Centered Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto mb-16"
        >
          {/* Glowing Border Effect */}
          <div className="relative">
            <div className="absolute -inset-[2px] bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-60 blur-sm" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary/50 via-transparent to-accent/50 rounded-3xl" />
            
            <div className="relative glass-card rounded-3xl overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center gap-2 px-5 py-3 border-b border-border/30 bg-card/80">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-2 px-4 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground font-mono">
                    <Play className="w-3 h-3 text-primary" />
                    video_testimonial.mp4
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                  <span className="text-xs font-mono text-primary">LIVE</span>
                </div>
              </div>
              
              {/* Video */}
              <div className="aspect-video">
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

        {/* Text Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card/60 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group backdrop-blur-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            
            {/* Progress Dots */}
            <div className="flex gap-3">
              {textTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="relative h-2 rounded-full overflow-hidden transition-all duration-300"
                  style={{ width: index === currentSlide ? '40px' : '10px' }}
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
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-card/60 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group backdrop-blur-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
          </div>

          {/* Testimonial Cards */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Card Glow */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15 rounded-3xl blur-3xl opacity-50" />
              
              <div className="relative glass-card rounded-3xl p-10 md:p-12 text-center border-primary/10">
                {/* Quote Icon */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl shadow-primary/30">
                  <span className="text-3xl font-bold text-primary-foreground">"</span>
                </div>

                {/* Slider Content */}
                <div className="relative min-h-[200px] pt-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="flex flex-col items-center"
                    >
                      <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-10 font-light max-w-2xl">
                        {textTestimonials[currentSlide].quote}
                      </blockquote>
                      
                      <div className="flex flex-col items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-50" />
                          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center ring-4 ring-primary/20 ring-offset-4 ring-offset-card">
                            <span className="text-primary-foreground font-bold text-2xl">
                              {textTestimonials[currentSlide].name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="text-center">
                          <p className="font-bold text-foreground text-xl mb-1">
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
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
