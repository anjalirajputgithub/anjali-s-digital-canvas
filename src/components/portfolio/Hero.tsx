import anjali from "@/assets/anjali.jpg";
import { ArrowRight, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Available for opportunities
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6">
              Hi, I'm <span className="gradient-text">Anjali Rajput</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-3 font-medium">
              Full Stack Developer (MERN) · B.Tech CSE Student
            </p>
            <p className="text-base text-muted-foreground/90 mb-8 max-w-lg leading-relaxed">
              Currently pursuing B.Tech in Computer Science at <span className="text-foreground">IET Lucknow (2023–2027)</span>. Passionate about building scalable web applications and solving real-world problems with modern technologies.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projects" className="gradient-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="glass glow-border inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all">
                <Mail size={16} /> Contact Me
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "6 mo", v: "Internship" },
                { k: "10+", v: "Technologies" },
                { k: "2+", v: "Live Projects" },
              ].map((s) => (
                <div key={s.v} className="glass rounded-2xl p-4 text-center">
                  <div className="font-display text-xl md:text-2xl font-bold gradient-text">{s.k}</div>
                  <div className="text-[11px] text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-glow)" }} />
            <div className="relative animate-float">
              <div className="glass-strong rounded-[2rem] p-3 animate-pulse-glow">
                <img
                  src={anjali}
                  alt="Anjali Rajput"
                  width={768}
                  height={896}
                  className="rounded-[1.5rem] w-full h-auto object-cover aspect-[4/5]"
                />
              </div>
              <div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 flex items-center gap-2">
                <Sparkles size={16} className="text-primary" />
                <span className="text-xs font-medium">MERN Stack</span>
              </div>
              <div className="glass absolute -top-4 -right-4 rounded-2xl px-4 py-3">
                <span className="text-xs font-medium">IET Lucknow '27</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
