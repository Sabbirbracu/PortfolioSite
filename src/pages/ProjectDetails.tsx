import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import projects from "../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="section-container py-24">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <p className="text-muted-foreground">Could not locate the requested project.</p>
        <Link to="/projects" className="mt-6 inline-block text-primary underline">Back to projects</Link>
      </div>
    );
  }

  return (
    <main className="py-24">
      <div className="section-container mb-6">
        <Link to="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>
      </div>
      <div className="section-container">
        {/* Hero */}
        <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
          <img src={project.banner} alt={project.title} className="w-full h-72 object-cover" />
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-sm font-mono text-primary uppercase tracking-wide">Case Study</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">{project.title}</h1>
          <p className="text-muted-foreground mt-3 max-w-3xl mx-auto">{project.tagline}</p>
          {/* Sharp value sentence */}
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">A scalable, subscription-based matrimony platform built for the Bangladesh market with real-time communication, secure access control, and high-conversion onboarding.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Overview</h2>
              <div className="prose max-w-none">
                <p>{project.description}</p>
              </div>
            </section>

            {/* Project Snapshot (Executive Summary) */}
            <section>
              <h2 className="text-2xl font-semibold mb-3">Project Snapshot</h2>
              <div className="grid sm:grid-cols-2 gap-4 bg-background/60 p-4 rounded-lg border border-border/30">
                <div className="space-y-2">
                  <div><strong>Project Type:</strong> Full-scale Web Platform (B2C SaaS)</div>
                  <div><strong>Duration:</strong> {project.duration || '—'}</div>
                  <div><strong>My Role:</strong> {project.role || '—'}</div>
                </div>
                <div className="space-y-2">
                  <div><strong>Team Size:</strong> {project.teamSize || '—'}</div>
                  <div><strong>Status:</strong> {project.status || '—'}</div>
                  <div><strong>Target Users:</strong> {project.targetUsers || '—'}</div>
                </div>
              </div>
            </section>

            {/* Problem & Solution */}
            {(project.problem || project.solution) ? (
              <section className="grid md:grid-cols-2 gap-6">
                {project.problem && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Problem Statement</h3>
                    <p className="text-muted-foreground">{project.problem}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Solution Overview</h3>
                    <p className="text-muted-foreground">{project.solution}</p>
                  </div>
                )}
              </section>
            ) : null}

            {/* Impact / Outcome */}
            {(project as any).outcome ? (
              <section>
                <h3 className="text-lg font-semibold mb-2">Outcome</h3>
                <p className="text-muted-foreground">{(project as any).outcome}</p>
              </section>
            ) : null}

            {/* Gallery */}
            {/* Key Features Breakdown */}
            {project.features && (
              <section>
                <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((f, i) => (
                    <div key={i} className="p-4 rounded-lg bg-background/60 border border-border/30">
                      <h4 className="font-semibold">{f.split(':')[0] || f}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{f}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <h3 className="text-lg font-semibold mb-3">Gallery</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {(project.images || [project.banner]).map((img, i) => (
                  <div key={i} className="rounded-lg overflow-hidden shadow-sm">
                    <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-52 object-cover" />
                  </div>
                ))}
              </div>
            </section>

            {/* Features / Highlights */}
            <section>
              <h3 className="text-lg font-semibold mb-3">Highlights</h3>
              <ul className="list-disc pl-5 text-muted-foreground">
                <li>Production-grade architecture with scalable backend.</li>
                <li>Role-based access and secure authentication.</li>
                <li>Real-time features where applicable (chat, notifications).</li>
              </ul>
            </section>

            {/* CTA */}
            <section className="mt-6">
              <h3 className="text-lg font-semibold mb-3">Interested in a similar solution?</h3>
              <p className="text-muted-foreground mb-4">I can prepare a tailored proposal and timeline for your requirements.</p>
              <Link to="/contact" className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary/10 text-primary border border-primary/30">Get a Proposal</Link>
            </section>
          </article>

          <aside className="space-y-6">
            <div className="p-5 rounded-2xl bg-background/80 border border-border/50">
              <h4 className="font-semibold">Project Details</h4>
              <div className="mt-3 text-sm text-muted-foreground">
                <div><strong>Year:</strong> {project.year}</div>
                <div className="mt-2"><strong>Role:</strong> {(project as any).role || 'Lead Developer'}</div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="px-3 py-1 rounded-md text-xs bg-primary/10 text-primary">{s}</span>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <a href={project.demoLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary/10 border border-primary/30 text-primary">
                  <ExternalLink className="w-4 h-4" />
                  Demo
                </a>
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-background border border-border/30">
                  <Github className="w-4 h-4" />
                  Source
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-background/80 border border-border/50">
              <h4 className="font-semibold">Contact</h4>
              <p className="text-sm text-muted-foreground">Looking to build something similar? Let's discuss scope, timeline and budget.</p>
              <Link to="/contact" className="mt-3 inline-block text-primary underline">Contact me</Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
