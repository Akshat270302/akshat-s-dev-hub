import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Osteoporosis Detection using Deep Learning",
    description:
      "Developed a deep learning model using ResNet to detect osteoporosis from knee X-ray images. Implemented Grad-CAM++ to provide visual explanations for predictions, improving model transparency. Focused on medical AI and interpretability.",
    tech: ["Python", "PyTorch", "ResNet", "Grad-CAM++"],
  },
  {
    title: "Salon Booking Mobile Application",
    description:
      "Built a cross-platform salon booking app using Flutter that allows users to discover nearby salons and book appointments. Designed booking logic, handled scheduling, and structured database interactions to manage real-time bookings.",
    tech: ["Flutter", "Dart", "MySQL/MongoDB", "REST APIs"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      <div className="h-1 w-16 bg-primary rounded-full mb-12" />
      <div className="grid gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-border bg-card p-6 md:p-8 card-hover"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge key={t} variant="outline" className="font-mono text-xs">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg font-semibold text-foreground">
          I focus on building systems that are actually usable, not just projects for demonstration.
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
