import { profile } from "@/data/profile";
import { GithubIcon } from "./GithubIcon";

const nav = [
  { href: "#about", label: "About", show: profile.about.length > 0 },
  { href: "#skills", label: "Skills", show: profile.skills.length > 0 },
  { href: "#timeline", label: "Timeline", show: profile.timeline.length > 0 },
  { href: "#projects", label: "Projects", show: profile.projects.length > 0 },
].filter((item) => item.show);

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-8">
        <a href="#top" className="shrink-0 font-bold tracking-wide">
          {profile.site.title}
        </a>
        <nav aria-label="Main" className="flex items-center gap-5 sm:gap-8">
          <ul className="flex gap-5 text-sm sm:gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {profile.github && (
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
