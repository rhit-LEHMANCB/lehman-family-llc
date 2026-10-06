import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <Reveal className="mb-14 text-center">
      <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-amber-400">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-light tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
    </Reveal>
  );
}
