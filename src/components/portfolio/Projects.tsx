import { SectionHeading } from "./About";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Full-featured online store with secure auth, cart, payments and image uploads.",
    tech: ["Next.js", "React", "MongoDB", "Tailwind", "Redux Toolkit"],
    features: ["JWT Authentication", "Cart Management", "PayPal Integration", "Cloudinary Uploads", "Mobile Responsive"],
    gradient: "from-fuchsia-500/30 via-purple-500/20 to-blue-500/30",
  },
  {
    title: "Doctor Appointment System",
    desc: "Booking platform letting patients find doctors by specialization and pay securely.",
    tech: ["Node.js", "React", "MongoDB", "Stripe"],
    features: ["Doctor Search by Specialization", "Secure Login System", "Stripe Payments", "Dynamic Data Rendering"],
    gradient: "from-cyan-500/30 via-blue-500/20 to-purple-500/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Projects" title="Selected work." subtitle="A glimpse at what I've shipped recently." />
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((p) => (
            <article key={p.title} className="glass rounded-3xl overflow-hidden glow-border transition-all group">
              <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-white/90 px-6 text-center">
                    {p.title}
                  </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="grid grid-cols-2 gap-1.5 mb-5 text-xs text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <a href="#" className="gradient-btn inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a href="#" className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold hover:border-primary/40 transition-colors">
                    <Github size={14} /> GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
