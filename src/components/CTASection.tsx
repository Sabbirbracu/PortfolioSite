import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { useState } from "react";
import { PopupModal } from "react-calendly";
import ContactModal from "./ContactModal";

const CTASection = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const CALENDLY_URL = "https://calendly.com/sabbirahmad653/30min";

  return (
    <>
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto glow-border"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-primary font-mono text-sm tracking-wider uppercase">
                Let's Connect
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mt-3 mb-6">
                Let's Build Something{" "}
                <span className="text-gradient glow-text">That Scales</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                I'm open to remote roles, onsite opportunities with global teams, 
                and selective contract work. Let's discuss how I can contribute to your next project.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg" 
                  className="group text-lg px-8"
                  onClick={() => setContactOpen(true)}
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Me
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8"
                  onClick={() => setIsCalendlyOpen(true)}
                >
                  <Calendar className="mr-2 w-5 h-5" />
                  Book a Call
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
      <PopupModal
        url={CALENDLY_URL}
        onModalClose={() => setIsCalendlyOpen(false)}
        open={isCalendlyOpen}
        rootElement={document.getElementById("root") as HTMLElement}
        prefill={{ name: "", email: "" }}
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "8b5cf6",
          textColor: "1a1a1a",
        }}
      />
    </>
  );
};

export default CTASection;