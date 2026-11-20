export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-14 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-8 sm:py-24 lg:grid-cols-[13rem_1fr] lg:gap-12">
        <div>
          <p className="font-mono text-xs text-muted">{index}</p>
          <h2 className="mt-2 font-display text-4xl leading-none font-semibold tracking-tight sm:text-5xl">
            {title}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
