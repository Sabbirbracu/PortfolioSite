import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/CredibilitySection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Sabbir Ahmad | Full Stack Software Engineer - MERN Stack Developer</title>
        <meta
          name="description"
          content="Sabbir Ahmad is a Full Stack Software Engineer specializing in MERN stack development. Building scalable, production-grade web applications with modern JavaScript technologies."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, MERN Stack, React Developer, Node.js Developer, MongoDB, Express.js, Software Engineer, Web Developer"
        />
        <meta property="og:title" content="Sabbir Ahmad | Full Stack Software Engineer" />
        <meta
          property="og:description"
          content="I design, build, and scale production-grade web systems using modern JavaScript stacks."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sabbirdev.com" />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <CredibilitySection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;