import type { Metadata } from "next";
import Icon from "@/components/Icon";
import { site, services, alsoOffered } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `General medical care, women's and men's health, paediatric care, minor procedures and on-site laboratory services in ${site.address.town}, ${site.address.province}.`,
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="font-serif text-4xl text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            {site.motto} Every service below is offered on-site at our practice
            in {site.address.town}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="space-y-10">
          {services.map((s, i) => (
            <article
              key={s.slug}
              id={s.slug}
              className="grid scroll-mt-24 gap-6 rounded-3xl border border-brand-100 bg-white p-8 shadow-sm md:grid-cols-[auto_1fr] md:p-10"
            >
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-100 text-brand-700">
                <Icon name={s.icon} className="h-9 w-9" />
              </span>
              <div>
                <p className="text-sm font-semibold text-brand-400">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-1 font-serif text-2xl text-brand-900 sm:text-3xl">
                  {s.title}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-brand-700">
                  {s.detail}
                </p>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-800"
                >
                  Book this service <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-brand-100/60 p-8 md:p-10">
          <h2 className="font-serif text-2xl text-brand-900">
            Also available at Lesmed
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {alsoOffered.map((item) => (
              <li key={item} className="flex items-center gap-3 text-brand-800">
                <Icon name="check" className="h-5 w-5 shrink-0 text-brand-600" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-brand-700">
            Not sure whether we can help? Call{" "}
            <a
              className="font-semibold underline decoration-brand-300 underline-offset-2"
              href={`tel:${site.phone.primaryIntl}`}
            >
              {site.phone.primary}
            </a>{" "}
            and ask — and more services are always being added.
          </p>
        </div>
      </section>
    </>
  );
}
