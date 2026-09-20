import Link from "next/link";

interface Props {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export default function CtaSection({
  title = "Ready to Check If You Can Claim?",
  subtitle = "Send a free enquiry today. Your enquiry is treated as confidential and carries no obligation.",
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
            Start Your Free Claim Check
          </Link>
        </div>
        <p className="text-gray-400 text-sm mt-6">
          No win, no fee available. No obligation. Time limits apply.
        </p>
      </div>
    </section>
  );
}
