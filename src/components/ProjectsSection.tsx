import { useReveal } from "@/hooks/use-reveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Coco — Audio-First Companion",
    description:
      "An AI-powered, audio-first companion that processes visual information and communicates relevant information through spoken output.",
    features: [
      "Image acquisition and processing",
      "OCR-based text extraction",
      "Safety screening of extracted content",
      "Language-model-assisted narration",
      "Multilingual text-to-speech output",
    ],
    tech: ["Python", "Gemini API", "Google Vision API", "OCR", "OpenCV", "TinyLlama", "SHAP", "Raspberry Pi"],
    featured: true,
    githubUrl: "https://github.com/Akshat270302/Coco---Audio-First-Companion.git",
  },
  {
    title: "Expense Tracker",
    description:
      "A full-stack expense tracking application for managing transactions and understanding spending patterns through a dashboard.",
    features: [
      "REST API-based transaction management",
      "Dashboard and recent activity summaries",
      "Search and category/date filtering",
      "Filtered expense totals and visualizations",
      "Input validation and error handling",
      "Idempotency-key protection against duplicate API requests",
    ],
    tech: ["React 18", "TypeScript", "Vite", "Node.js", "Express.js", "SQLite"],
    featured: false,
    liveDemoUrl: "https://fenmo.vercel.app/",
  },
  {
    title: "SalonBooking — Salon & Appointment Management System",
    description:
      "A cross-platform salon booking application that enables customers to discover salons, choose services and staff, and schedule appointments.",
    features: [
      "OTP-based authentication",
      "Salon discovery and browsing",
      "Service and staff selection",
      "Appointment scheduling and booking management",
      "Role-based customer and salon-owner access",
      "Real-time booking updates through Cloud Firestore",
      "Reviews, ratings, and customer–salon communication",
    ],
    tech: ["Flutter", "Dart", "Firebase Authentication", "Cloud Firestore"],
    featured: false,
  },
  {
    title: "AI-Based Osteoporosis Detection System",
    description:
      "A deep learning project that analyzes knee X-ray images for osteoporosis-related classification and uses explainable AI to visualize regions influencing model predictions.",
    features: [
      "Image preprocessing and model inference",
      "ResNet-18 based image classification",
      "Transfer learning",
      "Grad-CAM++ visual explanations",
    ],
    tech: ["Python", "PyTorch", "ResNet-18", "Deep Learning", "Grad-CAM++"],
    featured: false,
    githubUrl: "https://github.com/Akshat270302/OsteoDetect.git",
  },
  {
    title: "Customer Churn Analysis",
    description:
      "A machine-learning project that analyzes telecom customer behavior, predicts customer churn, and identifies factors that can inform retention strategies.",
    features: [
      "Data cleaning and exploratory data analysis",
      "Analysis of tenure, contracts, billing, and payment methods",
      "Class-balanced Random Forest classification",
      "Evaluation using classification metrics and ROC-AUC",
      "Feature importance analysis and business-oriented visualizations",
    ],
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    featured: false,
    githubUrl: "https://github.com/Akshat270302/Customer_Churn_Analysis",
  },
];

const ProjectsSection = () => {
  const ref = useReveal();

  return (
    <section id="projects" className="section-container">
      <div ref={ref} className="reveal">
        <span className="section-label">Projects</span>
        <h2 className="section-heading mb-12">
          Things I've <span className="gradient-text">built</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group card-premium p-6 flex flex-col gradient-border rounded-xl relative overflow-hidden">
              {project.featured && (
                <span className="absolute top-4 right-4 text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                  ⭐ Featured
                </span>
              )}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2 flex-1">
                {project.description}
              </p>
              <ul className="text-xs text-muted-foreground leading-relaxed list-disc list-inside space-y-1 mb-4">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" /> View Code
                  </a>
                )}
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
