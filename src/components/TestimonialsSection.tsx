import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Quote } from "lucide-react";
import { useEffect, useState } from "react";

interface VideoTestimonial {
  name: string;
  role: string;
  company: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

interface TextTestimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

// Featured video testimonial - replace with your Cloudinary URL
const videoTestimonial: VideoTestimonial = {
  name: "Client Name",
  role: "CEO",
  company: "Tech Company",
  videoUrl: "", // e.g., "https://res.cloudinary.com/your-cloud/video/upload/v123/testimonial.mp4"
  thumbnailUrl: "",
};

// Text testimonials for the auto-slider
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
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
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

  return (
    <section id="testimonials" className="py-20 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            What Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear directly from clients about their experience working with me
          </p>
        </motion.div>

        {/* Featured Video Testimonial */}
        {videoTestimonial.videoUrl && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-xl">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video */}
                <div className="relative aspect-video bg-muted">
                  {isVideoPlaying ? (
                    <video
                      src={videoTestimonial.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      {videoTestimonial.thumbnailUrl ? (
                        <img
                          src={videoTestimonial.thumbnailUrl}
                          alt={`${videoTestimonial.name} testimonial`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
                      )}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-xl">
                          <Play className="w-8 h-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
                    <Play className="w-4 h-4" />
                    Featured Review
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{videoTestimonial.name}</h3>
                  <p className="text-muted-foreground">
                    {videoTestimonial.role} at {videoTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Auto-sliding Text Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-12 shadow-lg overflow-hidden">
            <Quote className="w-12 h-12 text-primary/20 mb-6" />
            
            {/* Slider Content */}
            <div className="relative min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8">
                    "{textTestimonials[currentSlide].quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">
                        {textTestimonials[currentSlide].name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {textTestimonials[currentSlide].name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {textTestimonials[currentSlide].role} at {textTestimonials[currentSlide].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
              {/* Dots */}
              <div className="flex gap-2">
                {textTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? "bg-primary w-6"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-muted transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center hover:bg-muted transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
