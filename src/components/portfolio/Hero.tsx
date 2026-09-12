import anjali from "@/assets/anjali.jpeg";
import { ArrowUpRight, Download, Sparkles, Star, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24">
      
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 -left-24 h-[420px] w-[420px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.92 0.1 85 / 0.7), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-40 -right-20 h-[380px] w-[380px] rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.9 0.08 50 / 0.7), transparent 70%)" }}
      />

      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left content */}
          <div className="md:col-span-7 animate-fade-up">
            <div className="chip mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              <span className="text-foreground/70">Available for opportunities</span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              Building digital
              <br />
              experiences with
              <span className="relative inline-block ml-3">
                <span className="relative z-10 italic font-serif">code</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 -z-0 rounded"
                  style={{ background: "var(--brand)" }}
                />
              </span>
              <span className="text-foreground/30"> .</span>
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Hi, I'm <span className="text-foreground font-medium">Anjali Rajput</span> — a
              Full Stack Developer (MERN) and B.Tech CSE student at IET Lucknow (2023–2027),
              crafting scalable, user-first web applications with AI integration.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://bazario-git-main-annu1992rajput-3771s-projects.vercel.app/"
                className="gradient-btn group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
              >
                View my work
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="/AnjaliResume(1).pdf"
                className="glass glow-border inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all"
              >
                <Download size={16} /> Download CV
              </a>
              <div className="flex items-center gap-2 ml-1">
                <a href="https://github.com/anjalirajputgithub" aria-label="GitHub" className="glass h-10 w-10 inline-flex items-center justify-center rounded-full glow-border">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/anjali-rajput048/" aria-label="LinkedIn" className="glass h-10 w-10 inline-flex items-center justify-center rounded-full glow-border">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-6">
              {[
                { k: "6 mo", v: "Internship at Edusmark.ai" },
                { k: "10+", v: "Technologies mastered" },
                { k: "2+", v: "Live projects shipped" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl font-semibold tracking-tight">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div className="md:col-span-5 relative animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative mx-auto max-w-sm">
              {/* Brand backdrop card */}
              <div
                className="absolute inset-0 -rotate-3 rounded-[2rem]"
                style={{ background: "var(--gradient-warm)" }}
              />
              <div className="relative glass-strong rounded-[2rem] p-3 shadow-[var(--shadow-elegant)] animate-float">
                <img
                  src={anjali}
                  alt="Anjali Rajput — Full Stack Developer"
                  width={640}
                  height={800}
                  className="rounded-[1.5rem] w-full h-auto object-cover aspect-[4/5]"
                />

                {/* Floating badges */}
                <div className="absolute -left-6 top-10 glass rounded-2xl px-3 py-2 flex items-center gap-2 rotate-[-6deg]">
                  <Sparkles size={14} className="text-foreground" />
                  <span className="text-xs font-medium">MERN Stack</span>
                </div>

                <div className="absolute -right-6 top-1/3 glass rounded-2xl px-3 py-2 rotate-[5deg]">
                  <span className="text-xs font-medium">IET Lucknow '27</span>
                </div>

                <div className="absolute -bottom-5 left-6 glass-strong rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="text-[11px] leading-tight">
                    <div className="font-semibold">Top Performer</div>
                    <div className="text-muted-foreground">Internship 2025</div>
                  </div>
                </div>

                {/* Spinning seal */}
                <div
                  className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full flex items-center justify-center"
                  style={{ background: "var(--brand)" }}
                >
                  <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
                    <defs>
                      <path id="circle" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
                    </defs>
                    <text fontSize="11" fontFamily="Space Grotesk" fontWeight="600" fill="oklch(0.22 0.03 260)">
                      <textPath href="#circle">
                        OPEN TO WORK • HIRE ME • OPEN TO WORK •
                      </textPath>
                    </text>
                  </svg>
                  <ArrowUpRight size={22} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech marquee */}
        <div className="mt-20 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10" />
          <div className="flex gap-12 animate-marquee whitespace-nowrap text-sm font-medium text-muted-foreground/70">
            {[...Array(2)].map((_, j) => (
              <div key={j} className="flex gap-12 shrink-0">
                {["React", "Node.js", "Express", "MongoDB", "TypeScript", "Next.js", "Tailwind CSS", "PostgreSQL", "Git", "Docker"].map((t) => (
                  <span key={t + j} className="font-display tracking-tight">{t}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
