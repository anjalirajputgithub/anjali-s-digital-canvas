import { useState } from "react";
import { z } from "zod";
import { SectionHeading } from "./About";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setLoading(false);
    }, 700);
  };

  const contacts = [
    { icon: Mail, label: "anjali@email.com", href: "mailto:anjali@email.com" },
    { icon: Phone, label: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: Linkedin, label: "linkedin.com/in/anjali", href: "#" },
    { icon: Github, label: "github.com/anjali", href: "#" },
  ];

  return (
    <section id="contact" className="py-20 md:py-28">
      <Toaster />
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Contact" title="Let's build something great." subtitle="Open to internships, collaborations, and freelance projects." />
        <div className="grid md:grid-cols-5 gap-6 mt-12">
          <div className="md:col-span-2 glass rounded-3xl p-7 space-y-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/5 transition-colors group"
              >
                <div className="glass-strong rounded-xl p-2.5 group-hover:scale-110 transition-transform">
                  <c.icon size={18} className="text-primary" />
                </div>
                <span className="text-sm">{c.label}</span>
              </a>
            ))}
          </div>

          <form onSubmit={submit} className="md:col-span-3 glass rounded-3xl p-7 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="Your name"
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition"
                  placeholder="you@email.com"
                />
              </Field>
            </div>
            <Field label="Message">
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none"
                placeholder="Tell me about your project..."
              />
            </Field>
            <button
              type="submit"
              disabled={loading}
              className="gradient-btn inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold disabled:opacity-60"
            >
              {loading ? "Sending..." : (<>Send Message <Send size={14} /></>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground mb-1.5 block">{label}</span>
      {children}
    </label>
  );
}
