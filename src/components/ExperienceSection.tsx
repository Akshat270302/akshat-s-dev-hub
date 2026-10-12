import { useReveal } from "@/hooks/use-reveal";
import { BriefcaseBusiness, GraduationCap, Code2 } from "lucide-react";

const points = [
  {
    icon: BriefcaseBusiness,
    title: "Fusion ERP | Open Source",
    text: "Backend developer at PDPM IIITDM Jabalpur (Aug 2025 – May 2026). Built Python, Django, PostgreSQL, and REST API features for an institute-wide ERP serving 1,000+ students.",
  },
  {
    icon: GraduationCap,
    title: "B.Tech. Computer Science & Engineering",
    text: "PDPM IIITDM Jabalpur, Madhya Pradesh. GPA: 8.2/10.0. Expected May 2027.",
  },
  {
    icon: Code2,
    title: "Engineering practice",
    text: "Experience includes automated tests for backend logic, pull requests, code reviews, issue resolution, and collaborative software development.",
  },
];

const ExperienceSection = () => {
  const ref = useReveal();

  return (
    <section id="experience" className="section-container">
      <div ref={ref} className="reveal">
        <span className="section-label">Experience</span>
        <h2 className="section-heading mb-4">
          Experience & <span className="gradient-text">education</span>
        </h2>
        <p className="text-lg font-semibold text-foreground mb-12">
          Building practical software while strengthening my computer science foundation.
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {points.map((p) => (
            <div key={p.title} className="card-premium p-6">
              <div className="p-2.5 rounded-lg bg-primary/10 inline-block mb-4">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
