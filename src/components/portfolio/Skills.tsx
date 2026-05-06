import { SectionHeading } from "./About";
import { Code2, Layers, Wrench, Brain } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Languages",
    items: ["C", "C++", "Python", "JavaScript", "SQL", "HTML", "CSS"],
  },
  {
    icon: Layers,
    title: "Frameworks",
    items: ["React.js", "Node.js", "Express.js", "Next.js", "Redux Toolkit"],
  },
  {
    icon: Wrench,
    title: "Tools & Tech",
    items: ["MongoDB", "Git / GitHub", "VS Code", "Stripe API", "PayPal API"],
  },
  {
    icon: Brain,
    title: "Core Skills",
    items: ["DSA", "REST APIs", "Problem Solving", "Computer Networks"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Skills" title="The toolkit I build with." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {groups.map((g) => (
            <div key={g.title} className="glass rounded-3xl p-6 glow-border transition-all group">
              <div className="glass-strong inline-flex rounded-2xl p-3 mb-4 group-hover:scale-110 transition-transform">
                <g.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-semibold mb-3">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-muted-foreground">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
