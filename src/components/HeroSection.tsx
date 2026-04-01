import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="section-container text-center relative z-10">
        <p className="text-primary font-mono text-sm tracking-wider mb-4 opacity-0 animate-fade-in">
          Hi, my name is
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 opacity-0 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Akshat Neema
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Computer Science Student · Software Developer · AI Enthusiast
        </p>
        <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed mb-10 opacity-0 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          I build real-world applications and intelligent systems that solve practical problems.
        </p>
        <div className="flex gap-4 justify-center opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" asChild>
            <a href="#projects">
              <ArrowDown className="mr-1 h-4 w-4" />
              View Projects
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#contact">
              <Mail className="mr-1 h-4 w-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
