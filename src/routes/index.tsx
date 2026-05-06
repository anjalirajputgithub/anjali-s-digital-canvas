import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anjali Rajput — Full Stack Developer (MERN) Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Anjali Rajput, B.Tech CSE student at IET Lucknow and aspiring MERN full-stack developer building scalable web applications.",
      },
      { property: "og:title", content: "Anjali Rajput — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content: "MERN stack developer · B.Tech CSE @ IET Lucknow · Featured projects, skills & experience.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
