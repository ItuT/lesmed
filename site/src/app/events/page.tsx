import type { Metadata } from "next";
import Image from "next/image";
import Icon from "@/components/Icon";
import { site, events } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: `Community health events hosted by ${site.name} in ${site.address.town}, ${site.address.province}.`,
};

export default function EventsPage() {
  return (
    <>
      <section className="bg-brand-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="font-serif text-4xl text-white sm:text-5xl">Events</h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Health talks, screenings and community gatherings hosted by{" "}
            {site.name}. Healthier communities, stronger futures.
          </p>
        </div>
      </section>

      {events.map((e) => (
        <article key={e.slug} id={e.slug}>
          <section className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1.3fr] md:py-20">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-brand-100 shadow-lg shadow-brand-200/40 md:max-w-none">
              <Image
                src={e.poster}
                alt={`${e.kind} poster: ${e.title}`}
                width={805}
                height={1049}
                priority
                className="w-full"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
                {e.kind}
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-tight text-brand-900 sm:text-4xl">
                {e.title}
              </h2>
              <p className="mt-2 font-semibold italic text-brand-600">
                {e.subtitle}
              </p>

              <ul className="mt-6 space-y-3 text-brand-800">
                <li className="flex gap-3">
                  <Icon name="clock" className="h-5 w-5 shrink-0 text-brand-500" />
                  <time dateTime={e.isoDate}>{e.date}</time>
                </li>
                <li className="flex gap-3">
                  <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-500" />
                  <span>{e.venue}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="shield" className="h-5 w-5 shrink-0 text-brand-500" />
                  <span>{e.admission}</span>
                </li>
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={e.rsvpUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-brand-800"
                >
                  RSVP for this event
                  <Icon name="arrow" className="h-5 w-5" />
                </a>
                <a
                  href={`tel:${site.phone.afterHoursIntl}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-brand-700 px-6 py-3.5 font-semibold text-brand-800 transition-colors hover:bg-brand-100"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  {site.phone.afterHours}
                </a>
              </div>
              <p className="mt-3 text-sm text-brand-600">
                RSVP opens a short Google Form. Or call us on{" "}
                <a className="font-semibold" href={`tel:${site.phone.afterHoursIntl}`}>
                  {site.phone.afterHours}
                </a>{" "}
                /{" "}
                <a className="font-semibold" href={`tel:${site.phone.primaryIntl}`}>
                  {site.phone.primary}
                </a>
                .
              </p>

              <p className="mt-10 font-serif text-2xl italic text-brand-800">
                {e.tagline}
              </p>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {e.themes.map((t) => (
                  <li key={t.label} className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-700 text-white">
                      <Icon name={t.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-semibold text-brand-800">{t.label}</span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-10 font-serif text-xl text-brand-900">
                On the day
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {e.programme.map((p) => (
                  <li
                    key={p}
                    className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-800"
                  >
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="bg-white">
            <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
                Experts | Leaders | Change Makers
              </p>
              <h2 className="mt-2 font-serif text-3xl text-brand-900 sm:text-4xl">
                Keynote Speakers
              </h2>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                {e.speakers.map((s) => (
                  <div
                    key={s.name}
                    className="rounded-3xl border border-brand-100 bg-cream p-8 md:p-10"
                  >
                    <h3 className="font-serif text-2xl text-brand-900">{s.name}</h3>
                    <p className="mt-2 font-semibold text-brand-700">{s.role}</p>
                    <p className="mt-4 leading-relaxed text-brand-700">{s.bio}</p>
                  </div>
                ))}
              </div>
              <div className="mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-brand-100 shadow-lg shadow-brand-200/40">
                <Image
                  src={e.speakersPoster}
                  alt={`Keynote speakers poster for ${e.title}`}
                  width={1052}
                  height={1280}
                  className="w-full"
                />
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
            <p className="mx-auto max-w-2xl font-serif text-2xl italic text-brand-800 sm:text-3xl">
              &ldquo;{site.preventionLine}&rdquo;
            </p>
            <a
              href={e.rsvpUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-brand-800"
            >
              RSVP now
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <p className="mt-4 text-sm text-brand-600">
              Hosted by {site.name} ·{" "}
              <a className="font-semibold" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </section>
        </article>
      ))}
    </>
  );
}
