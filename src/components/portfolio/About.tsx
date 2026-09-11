import { GraduationCap, School, Briefcase } from "lucide-react";

const timeline = [
  {
    icon: Briefcase,
    year: "2025",
    title: "Frontend Developer Intern",
    sub: "Edusmark.ai · 6 months",
    desc: "Built the company website from scratch with focus on UI development and responsiveness.",
  },
  {
    icon: GraduationCap,
    year: "2023 – 2027",
    title: "B.Tech in Computer Science & Engineering",
    sub: "IET Lucknow",
    desc: "Specializing in full-stack web development, data structures, and modern software engineering.",
  },
  {
    icon: School,
    year: "2022",
    title: "Class 12th — 92.4%",
    sub: "Aligarh",
    desc: "Completed senior secondary education with distinction in science stream.",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="About me" title="Curious mind. Builder at heart." />
        <div className="grid md:grid-cols-2 gap-10 mt-12">
          <div className="glass rounded-3xl p-7 md:p-9">
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
              I'm a Computer Science student at <span className="gradient-text font-semibold">IET Lucknow</span>, driven by a love for building things that work beautifully end-to-end.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              My goal is to become a skilled full-stack developer with AI integration and contribute to impactful software solutions. I enjoy turning complex problems into clean, scalable products.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Problem-solving mindset", "Continuous learner", "Detail-oriented", "Team collaborator"].map((t) => (
                <div key={t} className="glass rounded-xl px-3 py-2 text-sm text-muted-foreground">
                  ✦ {t}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
            <div className="space-y-5">
              {timeline.map((t) => (
                <div key={t.title} className="relative pl-14">
                  <div className="absolute left-0 top-1 glass-strong rounded-full p-2.5">
                    <t.icon size={16} className="text-primary" />
                  </div>
                  <div className="glass rounded-2xl p-5 glow-border transition-all">
                    <div className="text-xs text-muted-foreground">{t.year}</div>
                    <div className="font-display font-semibold mt-1">{t.title}</div>
                    <div className="text-sm gradient-text">{t.sub}</div>
                    <p className="text-sm text-muted-foreground mt-2">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.2em] gradient-text font-semibold mb-3">{eyebrow}</div>
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
