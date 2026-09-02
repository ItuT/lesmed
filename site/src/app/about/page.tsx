import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import { site, team, mission, initiatives } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Meet the team behind ${site.name} — a family practice bringing quality, affordable healthcare to ${site.address.town} and surrounding communities.`,
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="font-serif text-4xl text-white sm:text-5xl">
            About Lesmed
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            A community health centre built on a simple belief: rural
            communities deserve the same quality of care as anyone else.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1.2fr]">
        <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-brand-100 shadow-lg shadow-brand-200/40 md:max-w-none">
          <Image
            src="/images/mission.jpg"
            alt="Two smiling healthcare professionals at Lesmed Community Health Centre"
            width={747}
            height={934}
            className="w-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-serif text-3xl text-brand-900">
            Our Mission for Health
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-700">{mission}</p>
          <h3 className="mt-8 font-serif text-2xl text-brand-900">
            Community Health Initiatives
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-brand-700">
            {initiatives}
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-brand-600">
            <Icon name="shield" className="h-5 w-5" />
            Registered practice · no. {site.practiceNumber}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
          <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl">
            Our Team
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {team.map((m) => (
              <article
                key={m.name}
                className="rounded-3xl border border-brand-100 bg-cream p-8 md:p-10"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 font-serif text-xl text-white">
                  {m.name
                    .replace(/^(Dr|Mrs|Mr|Ms)\.? /, "")
                    .split(/[ -]/)
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </span>
                <h3 className="mt-5 font-serif text-2xl text-brand-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-brand-500">{m.qualifications}</p>
                <p className="mt-2 font-semibold text-brand-700">{m.role}</p>
                <p className="mt-4 leading-relaxed text-brand-700">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
        <p className="mx-auto max-w-2xl font-serif text-2xl italic text-brand-800 sm:text-3xl">
          &ldquo;{site.preventionLine}&rdquo;
        </p>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-brand-800"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Book Appointment
        </a>
      </section>
    </>
  );
}
