import { useReveal } from "@/hooks/use-reveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Osteoporosis Detection using Deep Learning",
    description:
      "Built a ResNet-based model to detect osteoporosis from X-rays with Grad-CAM++ explainability, improving diagnostic transparency in medical AI.",
    impact: "Improves diagnostic accuracy and model interpretability in healthcare.",
    tech: ["Python", "PyTorch", "ResNet", "Grad-CAM++"],
    featured: false,
    githubUrl: "https://github.com/Akshat270302/OsteoDetect.git",
  },
  {
    title: "Salon Booking Mobile Application",
    description:
      "Cross-platform salon booking app with real-time scheduling and nearby salon discovery. Designed scalable booking logic to handle concurrent user interactions.",
    impact: "Improves booking efficiency and user experience at scale.",
    tech: ["Flutter", "Dart", "MySQL/MongoDB", "REST APIs"],
    featured: true,
    liveDemoUrl: "https://salon-booking-app-preview.vercel.app?_vercel_share=JHz3eUOsYLIqzwJY4cdlyDljn0MhGUO4",
  },
];

const ProjectsSection = () => {
  const ref = useReveal();

  return (
    <section id="projects" className="section-container">
      <div ref={ref} className="reveal">
        <span className="section-label">Projects</span>
        <h2 className="section-heading mb-12">
          Things I've <span className="gradient-text">built</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group card-premium p-6 flex flex-col gradient-border rounded-xl relative overflow-hidden">
              {project.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                  ⭐ Featured
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2 flex-1">
                {project.description}
              </p>
              <p className="text-xs text-primary/80 italic mb-4">
                ↳ {project.impact}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" /> View Code
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
