import { useReveal } from "@/hooks/use-reveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Osteoporosis Detection using Deep Learning",
    description:
      "Deep learning model using ResNet to detect osteoporosis from knee X-ray images with Grad-CAM++ for visual explanations.",
    impact: "Improves diagnostic accuracy and model transparency in medical AI.",
    tech: ["Python", "PyTorch", "ResNet", "Grad-CAM++"],
  },
  {
    title: "Salon Booking Mobile Application",
    description:
      "Cross-platform salon booking app with real-time scheduling, nearby salon discovery, and structured database interactions.",
    impact: "Improves booking efficiency and user experience.",
    tech: ["Flutter", "Dart", "MySQL/MongoDB", "REST APIs"],
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
            <div key={project.title} className="group card-premium p-6 flex flex-col gradient-border rounded-xl">
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
                <a href="#" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-3.5 w-3.5" /> View Code
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
                  <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
