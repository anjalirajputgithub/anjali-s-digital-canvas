import { SectionHeading } from "./About";
import { Building2, CheckCircle2 } from "lucide-react";

export function Experience() {
  const bullets = [
    "Built the Edusmark.ai website from scratch",
    "Developed responsive UI components with React",
    "Collaborated on UX flows and design polish",
    "Optimized performance and cross-device responsiveness",
  ];
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Experience" title="Where I've made an impact." />
        <div className="mt-12 glass rounded-3xl p-7 md:p-10 glow-border transition-all">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="glass-strong rounded-2xl p-3">
                <Building2 size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Frontend Developer Intern</h3>
                <p className="gradient-text font-medium">Edusmark.ai</p>
              </div>
            </div>
            <span className="glass rounded-full px-4 py-1.5 text-xs text-muted-foreground">9 months</span>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-muted-foreground">
                <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
