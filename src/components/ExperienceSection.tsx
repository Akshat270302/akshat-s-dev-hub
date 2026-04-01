import { useReveal } from "@/hooks/use-reveal";
import { Target, BrainCircuit, Server } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Problem Solving",
    text: "I approach every project by understanding the core problem first, then designing solutions that are practical and scalable.",
  },
  {
    icon: BrainCircuit,
    title: "System Thinking",
    text: "I focus on how components connect — from data flow to API design — rather than just building isolated features.",
  },
  {
    icon: Server,
    title: "Backend Understanding",
    text: "I build with real databases, APIs, and deployment in mind — not just front-end prototypes.",
  },
];

const ExperienceSection = () => {
  const ref = useReveal();

  return (
    <section id="experience" className="section-container">
      <div ref={ref} className="reveal">
        <span className="section-label">Experience</span>
        <h2 className="section-heading mb-4">
          What I've <span className="gradient-text">learned</span>
        </h2>
        <p className="text-lg font-semibold text-foreground mb-12">
          I focus on building real-world systems, not just projects.
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
