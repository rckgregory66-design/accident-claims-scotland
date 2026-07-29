interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQItem[];
  title?: string;
}

export default function FAQ({ faqs, title = "Frequently Asked Questions" }: Props) {
  return (
    <section className="section-pad bg-gray-50">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-[#0f2044] mb-8">{title}</h2>
        <div className="max-w-3xl space-y-3">
          {faqs.map((faq) => (
            <details key={faq.question} className="group bg-white rounded-xl border border-gray-200 overflow-hidden">
              <summary className="px-6 py-4 flex justify-between items-center gap-4 hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-[#0f2044] text-base leading-snug">{faq.question}</span>
                <span aria-hidden="true" className="text-2xl leading-none flex-shrink-0 text-gray-400 group-open:rotate-45 group-open:text-red-600 transition-transform">+</span>
              </summary>
              <div className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
