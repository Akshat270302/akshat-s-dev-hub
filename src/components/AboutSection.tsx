import { useReveal } from "@/hooks/use-reveal";
import { Folder, Cpu, Layers } from "lucide-react";

const stats = [
  { icon: Folder, label: "Current study", value: "B.Tech. in Computer Science & Engineering" },
  { icon: Cpu, label: "Build focus", value: "Software development, backend systems, and applied AI" },
  { icon: Layers, label: "Approach", value: "Understand the problem, then build useful products" },
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
              I am a Computer Science and Engineering student and software developer who enjoys building
              practical applications and exploring{" "}
              <span className="text-foreground font-medium">applied AI solutions</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I like understanding the problem behind a product, designing a clear solution, and turning
              it into working software. My projects span{" "}
              <span className="text-foreground font-medium">
                full-stack development, backend systems, and machine learning
              </span>.
              {" "}with an emphasis on problem-solving and useful user experiences..
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
