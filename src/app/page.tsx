import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About, Projects, Skills, TimelineSection } from "@/components/Sections";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <TimelineSection />
        <Projects />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 font-mono text-xs text-muted sm:px-8">
          <span>© {profile.nameEn || profile.name}</span>
          <a href="#top" className="transition-colors hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
