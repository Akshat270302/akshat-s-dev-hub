import { useReveal } from "@/hooks/use-reveal";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:your@email.com", text: "your@email.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/yourusername", text: "github.com/yourusername" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourusername", text: "linkedin.com/in/yourusername" },
];

const ContactSection = () => {
  const ref = useReveal();

  return (
    <section id="contact" className="section-container">
      <div ref={ref} className="reveal text-center">
        <span className="section-label">Contact</span>
        <h2 className="section-heading mb-4">
          Get in <span className="gradient-text">touch</span>
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          I'm always open to discussing opportunities, interesting projects, or just a good conversation.
        </p>

        <div className="glass rounded-xl p-8 max-w-md mx-auto glow-sm">
          <div className="space-y-5">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <div className="p-2 rounded-lg bg-primary/10">
                  <link.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
