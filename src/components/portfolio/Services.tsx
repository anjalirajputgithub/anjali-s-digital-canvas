import { SectionHeading } from "./About";
import { Code, Server, Palette, Plug, Brain } from "lucide-react";

const services = [
  { icon: Code, title: "MERN Stack Development", desc: "End-to-end web apps using MongoDB, Express, React and Node." },
  { icon: Server, title: "Scalable Backends", desc: "Robust REST APIs, auth systems and database design." },
  { icon: Plug, title: "API Integration", desc: "Stripe, PayPal, Cloudinary and third-party service integrations." },
  { icon: Palette, title: "Responsive UI/UX", desc: "Pixel-perfect, mobile-first interfaces with smooth interactions." },
  { icon: Brain, title: "SDE / Problem Solving", desc: "Strong DSA foundations and competitive programming — 500+ problems solved across LeetCode, Codeforces & GFG. Comfortable with algorithms, system design fundamentals and writing optimized, production-ready code for SDE roles." },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Services" title="What I can help you build." />
        <div className="grid sm:grid-cols-2 gap-5 mt-12">
          {services.map((s) => (
            <div key={s.title} className="glass rounded-3xl p-7 glow-border transition-all flex gap-5 items-start">
              <div className="glass-strong rounded-2xl p-3 shrink-0">
                <s.icon size={22} className="text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
