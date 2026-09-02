import type { Metadata } from "next";
import Icon from "@/components/Icon";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: `Visit ${site.name} at ${site.address.street}, ${site.address.town}, ${site.address.province}. Call ${site.phone.primary} or book on WhatsApp.`,
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-800">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
          <h1 className="font-serif text-4xl text-white sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-brand-100">
            Walk in, call, or send us a message — we&apos;re here to help.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-brand-100 bg-white p-8">
            <h2 className="font-serif text-2xl text-brand-900">Contact details</h2>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-4">
                <Icon name="phone" className="h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <p className="font-semibold text-brand-900">Phone</p>
                  <p className="text-brand-700">
                    <a className="hover:underline" href={`tel:${site.phone.primaryIntl}`}>
                      {site.phone.primary}
                    </a>{" "}
                    (primary)
                    <br />
                    <a className="hover:underline" href={`tel:${site.phone.afterHoursIntl}`}>
                      {site.phone.afterHours}
                    </a>{" "}
                    (after hours)
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <Icon name="whatsapp" className="h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <p className="font-semibold text-brand-900">WhatsApp</p>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-700 hover:underline"
                  >
                    Message us to book an appointment
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Icon name="mail" className="h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <p className="font-semibold text-brand-900">Email</p>
                  <a href={`mailto:${site.email}`} className="text-brand-700 hover:underline">
                    {site.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Icon name="pin" className="h-6 w-6 shrink-0 text-brand-600" />
                <div>
                  <p className="font-semibold text-brand-900">Address</p>
                  <p className="text-brand-700">
                    {site.address.street}
                    <br />
                    {site.address.town}, {site.address.province}
                  </p>
                  <a
                    href={site.googleMapsShare}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm font-semibold text-brand-600 hover:underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-brand-100 bg-white p-8">
            <h2 className="flex items-center gap-2 font-serif text-2xl text-brand-900">
              <Icon name="clock" className="h-6 w-6 text-brand-600" />
              Operating hours
            </h2>
            <dl className="mt-5 space-y-2">
              {site.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-4 border-b border-brand-100 pb-2 last:border-0">
                  <dt className="text-brand-800">{h.days}</dt>
                  <dd className="font-semibold text-brand-900">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-brand-100 bg-white p-8">
            <h2 className="font-serif text-2xl text-brand-900">Send a message</h2>
            <p className="mb-6 mt-2 text-brand-600">
              We&apos;ll get back to you as soon as we can.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-sm">
          <iframe
            title={`Map showing ${site.name} in ${site.address.town}`}
            src={site.mapEmbed}
            className="h-96 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}
