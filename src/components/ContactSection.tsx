import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:your@email.com", text: "your@email.com" },
  { icon: Github, label: "GitHub", href: "https://github.com/yourusername", text: "github.com/yourusername" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourusername", text: "linkedin.com/in/yourusername" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-container text-center">
      <h2 className="section-title">Get In Touch</h2>
      <div className="h-1 w-16 bg-primary rounded-full mb-8 mx-auto" />
      <p className="text-muted-foreground max-w-md mx-auto mb-10">
        I'm always open to discussing new opportunities, interesting projects, or just having a conversation.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <link.icon className="h-5 w-5" />
            <span className="text-sm">{link.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
