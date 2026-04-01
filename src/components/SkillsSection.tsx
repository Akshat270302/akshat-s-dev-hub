import { useReveal } from "@/hooks/use-reveal";

const skillGroups = [
  {
    title: "Languages",
    skills: ["C", "C++", "Python", "Dart"],
  },
  {
    title: "Frameworks & App Dev",
    skills: ["Flutter", "PyTorch", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "AI / ML",
    skills: ["Deep Learning", "Computer Vision", "Grad-CAM++"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

const SkillsSection = () => {
  const ref = useReveal();

  return (
    <section id="skills" className="section-container">
      <div ref={ref} className="reveal">
        <span className="section-label">Skills</span>
        <h2 className="section-heading mb-12">
          My <span className="gradient-text">tech stack</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div key={group.title} className="card-premium p-6">
              <h3 className="font-mono text-xs tracking-wider text-primary uppercase mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-md bg-background/60 text-foreground border border-border/50 transition-colors duration-200 hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
