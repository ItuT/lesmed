import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import {
  site,
  services,
  alsoOffered,
  mission,
  initiatives,
  team,
} from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-14 sm:px-6 md:grid-cols-[1.2fr_1fr] md:pb-24 md:pt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-500">
              {site.name}
            </p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-brand-900 sm:text-5xl md:text-6xl">
              Bringing Healthcare{" "}
              <span className="text-brand-600">Closer to Home</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-800">
              {site.motto} Family medicine, women&apos;s and men&apos;s health,
              paediatric care and an on-site laboratory — right here in{" "}
              {site.address.town}, {site.address.province}.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-brand-800"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Book on WhatsApp
              </a>
              <a
                href={`tel:${site.phone.primaryIntl}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-700 px-6 py-3.5 font-semibold text-brand-800 transition-colors hover:bg-brand-100"
              >
                <Icon name="phone" className="h-5 w-5" />
                {site.phone.primary}
              </a>
            </div>
            <p className="mt-6 text-sm italic text-brand-600">
              {site.preventionLine}
            </p>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-3xl border border-brand-100 bg-white p-8 shadow-xl shadow-brand-200/40">
              <Image
                src="/images/logo-trimmed.jpg"
                alt="Lesmed Community Health Centre logo"
                width={640}
                height={560}
                priority
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="border-y border-brand-100 bg-white">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 text-sm sm:grid-cols-3 sm:px-6">
            <div className="flex items-center gap-3">
              <Icon name="shield" className="h-8 w-8 shrink-0 text-brand-600" />
              <div>
                <p className="font-semibold text-brand-900">Registered practice</p>
                <p className="text-brand-600">Practice no. {site.practiceNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="clock" className="h-8 w-8 shrink-0 text-brand-600" />
              <div>
                <p className="font-semibold text-brand-900">Open 6 days a week</p>
                <p className="text-brand-600">
                  Mon–Fri 08:00–17:00 · Sat 08:00–14:30
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Icon name="pin" className="h-8 w-8 shrink-0 text-brand-600" />
              <div>
                <p className="font-semibold text-brand-900">{site.address.town}, {site.address.province}</p>
                <p className="text-brand-600">{site.address.street}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl">
            Our Essential Services
          </h2>
          <p className="mt-4 text-lg text-brand-700">
            Quality, affordable healthcare for the whole family — delivered with
            compassion, close to home.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services#${s.slug}`}
              className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-200/50"
            >
              <span className="inline-flex rounded-xl bg-brand-100 p-3 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                <Icon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 font-serif text-xl text-brand-900">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-brand-700">{s.summary}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-800">
                Learn more <Icon name="arrow" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-brand-100/60 p-6">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Also offered
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {alsoOffered.map((item) => (
              <li
                key={item}
                className="rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm text-brand-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-brand-800 text-brand-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              Our Mission for Health
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-brand-100">
              {mission}
            </p>
          </div>
          <div className="rounded-2xl border border-brand-700 bg-brand-900/50 p-8">
            <h3 className="font-serif text-xl text-white">
              Community Health Initiatives
            </h3>
            <p className="mt-4 leading-relaxed text-brand-200">{initiatives}</p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-100 hover:text-white"
            >
              More about us <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team teaser */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <h2 className="font-serif text-3xl text-brand-900 sm:text-4xl">
          Led by people who care
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-brand-100 bg-white p-8 shadow-sm"
            >
              <h3 className="font-serif text-2xl text-brand-900">{m.name}</h3>
              <p className="mt-1 text-sm text-brand-500">{m.qualifications}</p>
              <p className="mt-2 font-semibold text-brand-700">{m.role}</p>
              <p className="mt-3 leading-relaxed text-brand-700">{m.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-brand-100 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
          <h2 className="max-w-2xl font-serif text-3xl text-brand-900 sm:text-4xl">
            {site.secondaryLine}
          </h2>
          <p className="max-w-xl text-lg text-brand-700">
            Walk in, call, or message us on WhatsApp — we&apos;ll take care of
            the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-6 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-brand-800"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
              Book Appointment
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-brand-700 px-6 py-3.5 font-semibold text-brand-800 transition-colors hover:bg-brand-100"
            >
              Contact & directions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
