import { useReveal } from "@/hooks/use-reveal";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C++", "Java", "Kotlin", "Dart", "C"],
  },
  {
    title: "Frontend Development",
    skills: ["React.js", "TypeScript", "JavaScript", "HTML", "CSS", "Flutter"],
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express.js", "Django", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase Firestore", "PostgreSQL", "SQLite"],
  },
  {
    title: "Machine Learning & Data",
    skills: ["TensorFlow", "Keras", "PyTorch", "Generative AI", "LLM Integration", "Gemini API", "Google Vision API", "OCR", "Computer Vision"],
  },
  {
    title: "Developer Tools & Platforms",
    skills: ["Git", "GitHub", "CI/CD", "AWS", "Google Cloud", "Docker", "VS Code", "Jupyter Notebook"],
  },
  {
    title: "Core CS",
    skills: ["Software Engineering", "Data Structures & Algorithms", "OOP", "DBMS", "System Design", "Operating Systems", "Computer Networks"],
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
