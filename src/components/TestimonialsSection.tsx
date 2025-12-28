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

        {/* Main Content - Asymmetric Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Video Section - Larger */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative"
          >
            {/* Glowing Border Effect */}
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
              
              {/* Video Info */}
              <div className="p-5 border-t border-border/30 bg-gradient-to-r from-primary/5 via-transparent to-accent/5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Play className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Featured Review</p>
                      <p className="text-xs text-muted-foreground font-mono">// client_feedback</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-xs font-mono text-primary">LIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Testimonials Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative">
              {/* Card Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-40" />
              
              <div className="relative glass-card rounded-3xl p-8 border-primary/10">
                {/* Quote Icon with Glow */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/30">
                  <span className="text-2xl font-bold text-primary-foreground">"</span>
                </div>

                {/* Slider Content */}
                <div className="relative min-h-[220px] pt-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 font-light">
                        {textTestimonials[currentSlide].quote}
                      </blockquote>
                      
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-md opacity-50" />
                          <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center ring-2 ring-primary/30 ring-offset-2 ring-offset-card">
                            <span className="text-primary-foreground font-bold text-xl">
                              {textTestimonials[currentSlide].name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div>
                          <p className="font-bold text-foreground text-lg">
                            {textTestimonials[currentSlide].name}
                          </p>
                          <p className="text-sm text-primary font-mono">
                            {textTestimonials[currentSlide].role}
                            <span className="text-muted-foreground"> @ {textTestimonials[currentSlide].company}</span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-6 pt-6 border-t border-border/20">
                  {/* Progress Bar */}
                  <div className="flex gap-2">
                    {textTestimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className="relative h-1.5 rounded-full overflow-hidden transition-all duration-300"
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

                  {/* Arrow Controls */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-xl bg-muted/30 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-xl bg-muted/30 border border-border/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </button>
                  </div>
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
