"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// TODO: swap the mailto handoff for a form service (e.g. Formspree) when ready.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Website enquiry from ${data.get("firstName")} ${data.get("lastName")}`;
    const bodyLines = [
      `Name: ${data.get("firstName")} ${data.get("lastName")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      "",
      String(data.get("message") ?? ""),
    ];
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    setSent(true);
  }

  const inputClass =
    "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-brand-900 placeholder:text-brand-300 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-semibold text-brand-800">
            First Name *
          </label>
          <input id="firstName" name="firstName" required autoComplete="given-name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-semibold text-brand-800">
            Last Name *
          </label>
          <input id="lastName" name="lastName" required autoComplete="family-name" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-brand-800">
          Email Address *
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" placeholder="email@example.com" className={inputClass} />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-brand-800">
          Phone Number *
        </label>
        <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="Enter your phone number" className={inputClass} />
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-brand-800">
          Message *
        </label>
        <textarea id="message" name="message" required rows={5} placeholder="How can we help you?" className={inputClass} />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-brand-700 px-6 py-3.5 font-semibold text-white shadow-md transition-colors hover:bg-brand-800 sm:w-auto"
      >
        Send Message
      </button>
      {sent && (
        <p className="text-sm text-brand-600" role="status">
          Your email app should now open with your message ready to send. If it
          didn&apos;t, email us directly at {site.email}.
        </p>
      )}
    </form>
  );
}
