import { profile, type TimelineCategory } from "@/data/profile";
import { GithubIcon } from "./GithubIcon";

function count(category: TimelineCategory) {
  return profile.timeline.filter((t) => t.category === category && !t.role)
    .length;
}

export function Hero() {
  const facts = [
    { label: "Hackathons", value: count("hackathon") },
    { label: "Awards", value: profile.timeline.filter((t) => t.award).length },
    { label: "Internships", value: count("internship") },
    { label: "Projects", value: count("project") },
  ].filter((f) => f.value > 0);

  return (
    <section id="top" className="mx-auto max-w-6xl px-4 pt-16 pb-16 sm:px-8 sm:pt-28 sm:pb-24">
      <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">
        Profile
      </p>
      <h1 className="mt-5 text-6xl font-bold tracking-tight sm:text-8xl">
        {profile.name}
      </h1>
      {profile.nameEn && (
        <p className="mt-3 font-display text-2xl text-muted">
          {profile.nameEn}
        </p>
      )}
      {profile.headline && (
        <p className="mt-8 text-xl leading-relaxed text-balance [word-break:auto-phrase] sm:text-3xl">
          <span className="marker">{profile.headline}</span>
        </p>
      )}
      {profile.affiliation && (
        <p className="mt-4 text-muted sm:text-lg">{profile.affiliation}</p>
      )}

      {profile.github && (
        <p className="mt-10">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-sky"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
        </p>
      )}

      {facts.length > 0 && (
        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="flex flex-col-reverse gap-1">
              <dt className="font-mono text-xs tracking-wider text-muted uppercase">
                {f.label}
              </dt>
              <dd className="font-display text-5xl leading-none font-semibold tracking-tight tabular-nums sm:text-6xl">
                {f.value}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}
