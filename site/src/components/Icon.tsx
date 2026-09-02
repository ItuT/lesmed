const paths: Record<string, React.ReactNode> = {
  stethoscope: (
    <>
      <path d="M5 3.5v5.5a5 5 0 0 0 10 0V3.5" />
      <path d="M10 13.8v2.7a4.5 4.5 0 0 0 9 0v-2.8" />
      <circle cx="19" cy="11.2" r="2.3" />
    </>
  ),
  female: (
    <>
      <circle cx="12" cy="8" r="5" />
      <path d="M12 13v8M9 18h6" />
    </>
  ),
  male: (
    <>
      <circle cx="10" cy="14" r="5" />
      <path d="M13.5 10.5 20 4M14.5 4H20v5.5" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01" />
      <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0" />
    </>
  ),
  bandage: (
    <>
      <rect x="2.5" y="8" width="19" height="8" rx="4" transform="rotate(-45 12 12)" />
      <path d="M10.5 10.5h.01M13.5 10.5h.01M10.5 13.5h.01M13.5 13.5h.01" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3h5M10.5 3v5.5L5.7 17a3 3 0 0 0 2.7 4.3h7.2a3 3 0 0 0 2.7-4.3l-4.8-8.5V3" />
      <path d="M7.5 14.5h9" />
    </>
  ),
  heart: (
    <>
      <path d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0 1 12 6.4a4.7 4.7 0 0 1 8.5 2.8c0 5.8-8.5 11.3-8.5 11.3Z" />
      <path d="M6.5 12h3l1.5-3 2 5 1.5-2h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.5 4.5 5.5v6c0 4.8 3.2 8 7.5 10 4.3-2 7.5-5.2 7.5-10v-6L12 2.5Z" />
      <path d="M12 8v6M9 11h6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s7-6.1 7-11.5a7 7 0 1 0-14 0c0 5.4 7 11.5 7 11.5Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <>
      <path d="M5 3.5h3.5l2 5-2.5 1.5a12 12 0 0 0 6 6L15.5 13l5 2V19a2 2 0 0 1-2 2A16.5 16.5 0 0 1 3 5.5a2 2 0 0 1 2-2Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.3-1.1A8.5 8.5 0 1 0 12 3.5Z" />
      <path d="M9 8.8c0 .8.4 2.2 1.7 3.5 1.3 1.3 2.7 1.7 3.5 1.7l1-1-1.7-1.2-.8.5c-.5-.2-1.6-1.3-1.8-1.8l.5-.8L10 8l-1 .8Z" />
    </>
  ),
  check: <path d="m4.5 12.5 5 5 10-11" />,
  arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
};

export default function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name] ?? paths.heart}
    </svg>
  );
}
