import Link from "next/link";

interface Props {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CtaSection({
  title = "Want to Send an Enquiry?",
  subtitle = "Sending an enquiry is free and carries no obligation. It is not legal advice and does not stop a time limit.",
  dark = true,
}: Props) {
  return (
    <section className={`section-pad ${dark ? "bg-[#0f2044]" : "bg-red-700"}`}>
      <div className="container-max text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">{subtitle}</p>
        <div className="flex justify-center">
          <Link
            href="/contact"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-sm"
          >
            Send an enquiry
          </Link>
        </div>
        <p className="text-gray-400 text-sm mt-6">
          Time limits apply. Take independent advice from a Scottish solicitor if a deadline may be close.
        </p>
      </div>
    </section>
  );
}
