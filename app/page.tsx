import { IconMail, IconPhone } from "@tabler/icons-react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const navItems = [
  { name: "Home", link: "#home" },
  { name: "Our Work", link: "#work" },
  { name: "Our Team", link: "#team" },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-neutral-950 text-white">
      <FloatingNav navItems={navItems} />

      {/* Hero */}
      <section id="home" className="relative h-screen min-h-[600px] w-full overflow-hidden">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center"
          style={{ backgroundImage: "url('/house.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-neutral-950" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <Reveal>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-amber-400">
              Family Owned
            </p>
            <h1 className="text-5xl font-light tracking-[0.15em] md:text-7xl">
              LEHMAN
              <span className="block font-semibold">FAMILY LLC</span>
            </h1>
            <div className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
          </Reveal>
        </div>
        <a
          href="#work"
          aria-label="Scroll to content"
          className="absolute bottom-8 left-1/2 z-10 h-12 w-7 -translate-x-1/2 rounded-full border border-white/40"
        >
          <span className="mx-auto mt-2 block h-2 w-1 animate-bounce rounded-full bg-white/70" />
        </a>
      </section>

      {/* Our Work */}
      <section id="work" className="px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Portfolio" title="Our Work" />
          <Reveal className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-neutral-400">
              Our portfolio is coming soon. Check back for updates.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="border-t border-white/5 bg-neutral-900/40 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="People" title="Our Team" />
          <Reveal className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-neutral-400">Meet the team — coming soon.</p>
          </Reveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-6 py-28">
        <div className="mx-auto max-w-3xl">
          <SectionHeading eyebrow="Get in touch" title="Contact Us" />
          <Reveal className="text-center">
            <p className="mb-10 text-lg text-neutral-300">
              Have questions? We&apos;re happy to help!
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="mailto:info@lehmanfamilyllc.com"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-amber-400/50 hover:bg-white/[0.06]"
              >
                <IconMail className="h-7 w-7 text-amber-400" stroke={1.5} />
                <span className="text-sm text-neutral-300 group-hover:text-white">
                  info@lehmanfamilyllc.com
                </span>
              </a>
              <a
                href="tel:+18123635149"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-amber-400/50 hover:bg-white/[0.06]"
              >
                <IconPhone className="h-7 w-7 text-amber-400" stroke={1.5} />
                <span className="text-sm text-neutral-300 group-hover:text-white">
                  (812) 363-5149
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
