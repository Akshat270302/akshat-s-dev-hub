import { Badge } from "@/components/ui/badge";

const skillCategories = [
  { title: "Programming", skills: ["C", "C++", "Python", "Dart"] },
  { title: "App Development", skills: ["Flutter"] },
  { title: "Backend & Database", skills: ["MySQL", "MongoDB", "REST APIs"] },
  { title: "AI / ML", skills: ["PyTorch", "Deep Learning", "Computer Vision"] },
  { title: "Tools", skills: ["Git", "GitHub", "VS Code"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      <div className="h-1 w-16 bg-primary rounded-full mb-12" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((cat) => (
          <div key={cat.title} className="space-y-3">
            <h3 className="font-semibold text-foreground font-mono text-sm tracking-wider">
              {cat.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="font-normal text-sm px-3 py-1">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
