import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="inline-block rounded-xl bg-white p-3">
            <Image
              src="/images/logo-trimmed.jpg"
              alt="Lesmed Community Health Centre logo"
              width={640}
              height={560}
              className="h-16 w-auto"
            />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-brand-200">
            {site.motto}
          </p>
          <p className="mt-3 text-sm text-brand-300">
            Practice Number: {site.practiceNumber}
          </p>
        </div>

        <div>
          <h2 className="font-serif text-lg text-white">Visit us</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="pin" className="h-5 w-5 shrink-0 text-brand-300" />
              <span>
                {site.address.street}, {site.address.town},{" "}
                {site.address.province}
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="clock" className="h-5 w-5 shrink-0 text-brand-300" />
              <span>
                {site.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-serif text-lg text-white">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <Icon name="phone" className="h-5 w-5 shrink-0 text-brand-300" />
              <span>
                <a className="hover:text-white" href={`tel:${site.phone.primaryIntl}`}>
                  {site.phone.primary}
                </a>{" "}
                · after hours{" "}
                <a className="hover:text-white" href={`tel:${site.phone.afterHoursIntl}`}>
                  {site.phone.afterHours}
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="mail" className="h-5 w-5 shrink-0 text-brand-300" />
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="whatsapp" className="h-5 w-5 shrink-0 text-brand-300" />
              <a
                className="hover:text-white"
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp us
              </a>
            </li>
            <li className="flex gap-3">
              <Icon name="heart" className="h-5 w-5 shrink-0 text-brand-300" />
              <a
                className="hover:text-white"
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                @{site.instagram} on Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-brand-300 sm:flex-row sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <nav className="flex gap-4" aria-label="Footer">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
