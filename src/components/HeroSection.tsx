import { ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { useTypingEffect } from "@/hooks/use-typing-effect";

const roles = ["Software Developer", "Backend & AI Enthusiast", "Building Scalable Systems"];

const HeroSection = () => {
  const typed = useTypingEffect(roles, 90, 1800);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "linear-gradient(135deg, hsl(217 91% 60%), hsl(250 80% 65%))" }}
      />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full opacity-10 blur-[100px] pointer-events-none animate-float"
        style={{ background: "hsl(250 80% 65%)" }}
      />

      <div className="section-container text-center relative z-10">
        <p className="font-mono text-sm text-primary tracking-wider mb-6 opacity-0 animate-fade-in">
          Hello, I'm
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <span className="gradient-text animate-glow-pulse">Akshat Neema</span>
        </h1>
        <div className="h-8 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <span className="text-lg md:text-xl text-muted-foreground">
            {typed}
          </span>
          <span className="inline-block w-[2px] h-5 ml-1 align-middle border-r-2 border-primary animate-typing-cursor" />
        </div>
        <p className="max-w-lg mx-auto text-muted-foreground leading-relaxed mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          I build real-world applications and intelligent systems that solve practical problems.
        </p>
        <p className="text-sm font-medium text-primary/80 mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.35s" }}>
          Focused on building production-ready systems and solving real-world problems.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a href="#projects" className="btn-gradient">
            <ArrowDown className="h-4 w-4" />
            View Projects
          </a>
          <a href="#" className="btn-outline-glow">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>

        <div className="flex gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-all duration-200">
            <Github className="h-5 w-5" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/60 transition-all duration-200">
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
