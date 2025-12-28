import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  videoUrl?: string; // Cloudinary video URL
  thumbnailUrl?: string; // Optional thumbnail
}

// Sample testimonials - replace with your actual data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Client Name",
    role: "CEO",
    company: "Tech Company",
    quote: "Sabbir delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise made the project a huge success.",
    // Replace with your Cloudinary video URL
    videoUrl: "", // e.g., "https://res.cloudinary.com/your-cloud-name/video/upload/v1234567890/testimonial.mp4"
    thumbnailUrl: "", // Optional: Cloudinary thumbnail or leave empty
  },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-lg"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video Section */}
                {testimonial.videoUrl && (
                  <div className="relative aspect-video lg:aspect-auto bg-muted">
                    {activeVideo === testimonial.videoUrl ? (
                      <video
                        src={testimonial.videoUrl}
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      >
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <div
                        className="relative w-full h-full min-h-[280px] cursor-pointer group"
                        onClick={() => setActiveVideo(testimonial.videoUrl!)}
                      >
                        {/* Thumbnail or gradient background */}
                        {testimonial.thumbnailUrl ? (
                          <img
                            src={testimonial.thumbnailUrl}
                            alt={`${testimonial.name} testimonial`}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
                        )}
                        
                        {/* Play button overlay */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                          <div className="w-20 h-20 rounded-full bg-primary/90 group-hover:bg-primary flex items-center justify-center transition-all group-hover:scale-110 shadow-xl">
                            <Play className="w-8 h-8 text-primary-foreground ml-1" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Quote Section */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <Quote className="w-10 h-10 text-primary/30 mb-4" />
                  <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="mt-auto">
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No video fallback - text-only testimonial card */}
        {testimonials.every(t => !t.videoUrl) && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-muted-foreground mt-8"
          >
            <p className="text-sm">
              Video testimonials coming soon...
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
