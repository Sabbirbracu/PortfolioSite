import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

interface TextTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
}

// Text testimonials for the auto-slider
const textTestimonials: TextTestimonial[] = [
  {
    id: 1,
    name: "John Smith",
    role: "CTO",
    company: "StartupX",
    quote: "Sabbir's technical expertise and problem-solving skills are exceptional. He delivered a complex web application on time and exceeded all our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    quote: "Working with Sabbir was a pleasure. His attention to detail and commitment to quality made our project a huge success. Highly recommended!",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Founder",
    company: "InnovateLab",
    quote: "Sabbir transformed our vision into reality. His full-stack expertise and proactive communication made the development process smooth and efficient.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Director",
    company: "GrowthHub",
    quote: "The website Sabbir built for us increased our conversions by 40%. His understanding of both design and functionality is truly impressive.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % textTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % textTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + textTestimonials.length) % textTestimonials.length);
  };

  // Extract YouTube video ID
  const youtubeVideoId = "2Fs0-o5jeEU";

  return (
    <section id="testimonials" className="py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium tracking-wider uppercase mb-4"
          >
            Testimonials
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from real clients who trusted me with their projects
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* YouTube Video Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-primary/20 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative bg-card rounded-2xl border border-border/50 overflow-hidden shadow-2xl">
              {/* Video Embed */}
              <div className="aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
                  title="Client Testimonial Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              {/* Video Info Card */}
              <div className="p-6 bg-gradient-to-r from-primary/5 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary fill-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Featured Video Review</h3>
                    <p className="text-muted-foreground text-sm">Watch the full testimonial</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Auto-sliding Text Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="bg-card rounded-2xl border border-border/50 p-8 shadow-xl h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <Quote className="w-10 h-10 text-primary/30" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
              
              {/* Slider Content */}
              <div className="relative flex-1 min-h-[180px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6 italic">
                      "{textTestimonials[currentSlide].quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg">
                        <span className="text-primary-foreground font-bold text-xl">
                          {textTestimonials[currentSlide].name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg">
                          {textTestimonials[currentSlide].name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {textTestimonials[currentSlide].role} • {textTestimonials[currentSlide].company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-border/30">
                {/* Progress Dots */}
                <div className="flex gap-2">
                  {textTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-primary w-8"
                          : "bg-muted-foreground/20 w-2 hover:bg-muted-foreground/40"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrows */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
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
