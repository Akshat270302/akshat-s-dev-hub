import { useReveal } from "@/hooks/use-reveal";
import { Folder, Cpu, Layers } from "lucide-react";

const stats = [
  { icon: Folder, label: "Projects Built", value: "5+" },
  { icon: Cpu, label: "Technologies", value: "12+" },
  { icon: Layers, label: "Focus Areas", value: "AI · App Dev · Backend" },
];

const AboutSection = () => {
  const ref = useReveal();

  return (
    <section id="about" className="section-container">
      <div ref={ref} className="reveal">
        <span className="section-label">About Me</span>
        <h2 className="section-heading mb-10">
          Getting to know <span className="gradient-text">me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              I am a Computer Science student passionate about building{" "}
              <span className="text-foreground font-medium">impactful software</span>. I enjoy working on
              real-world applications and exploring{" "}
              <span className="text-foreground font-medium">AI-based solutions</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I focus on understanding systems deeply rather than just building surface-level
              projects. Currently, I am improving my skills in{" "}
              <span className="text-foreground font-medium">
                backend development, data structures, and system design
              </span>.
            </p>
          </div>

          <div className="grid gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-premium p-5 flex items-center gap-4">
                <div className="p-2.5 rounded-lg bg-primary/10">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="font-semibold text-foreground">{s.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
