export function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Anjali Rajput · Crafted with care.</div>
        <div className="gradient-text font-semibold">MERN · React · Next.js</div>
      </div>
    </footer>
  );
}
