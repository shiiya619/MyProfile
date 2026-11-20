import { ArrowUpRight } from "lucide-react";
import { profile } from "@/data/profile";
import { Timeline } from "./Timeline";
import { Section } from "./ui";

// 表示されるセクションだけに通し番号を振る
const order = [
  profile.about.length > 0 && "about",
  profile.skills.length > 0 && "skills",
  profile.timeline.length > 0 && "timeline",
  profile.projects.length > 0 && "projects",
].filter(Boolean);

function indexOf(id: string) {
  return String(order.indexOf(id) + 1).padStart(2, "0");
}

export function About() {
  if (profile.about.length === 0) return null;
  return (
    <Section id="about" index={indexOf("about")} title="About">
      <div className="max-w-3xl space-y-6 text-lg leading-loose sm:text-xl sm:leading-loose">
        {profile.about.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  );
}

export function Skills() {
  if (profile.skills.length === 0) return null;
  return (
    <Section id="skills" index={indexOf("skills")} title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {profile.skills.map((group) => (
          <div
            key={group.category}
            className="grid gap-3 py-6 sm:grid-cols-[13rem_1fr] sm:gap-6"
          >
            <dt className="pt-1 font-mono text-xs tracking-wider text-muted uppercase">
              {group.category}
            </dt>
            <dd className="flex flex-wrap gap-x-7 gap-y-2 text-lg sm:text-xl">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function TimelineSection() {
  if (profile.timeline.length === 0) return null;
  return (
    <Section id="timeline" index={indexOf("timeline")} title="Timeline">
      <Timeline items={profile.timeline} />
    </Section>
  );
}

export function Projects() {
  if (profile.projects.length === 0) return null;
  return (
    <Section id="projects" index={indexOf("projects")} title="Projects">
      <ul className="divide-y divide-line border-y border-line">
        {profile.projects.map((p) => (
          <li key={p.name} className="py-8">
            <p className="font-mono text-xs text-muted">{p.period}</p>
            <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
            {p.role && <p className="mt-1 text-sm text-accent">担当：{p.role}</p>}
            <p className="mt-3 max-w-3xl leading-relaxed">{p.description}</p>
            {p.tech.length > 0 && (
              <p className="mt-4 font-mono text-xs text-muted">
                {p.tech.join(" / ")}
              </p>
            )}
            {p.links.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-5">
                {p.links.map((l) => (
                  <a
                    key={l.url}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm underline decoration-sky decoration-2 underline-offset-4 hover:text-accent"
                  >
                    {l.label}
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
