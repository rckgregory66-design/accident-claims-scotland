import { TRUST } from "@/data/siteConfig";

/**
 * Trust / social-proof block. Renders nothing until Rick supplies a panel solicitor
 * name and regulator, a sourced review, or a sourced case example in TRUST.
 * Empty placeholders must not appear in the live HTML.
 */
export default function TrustBlock() {
  const solicitorReady = Boolean(TRUST.panelSolicitorName && TRUST.panelSolicitorRegulator);
  const reviews = TRUST.reviews.filter((item) => item.quote && item.attribution);
  const cases = TRUST.caseExamples.filter((item) => item.title && item.summary);
  if (!solicitorReady && reviews.length === 0 && cases.length === 0) return null;

  return (
    <section className="border border-slate-200 bg-white rounded-2xl p-6 not-prose" aria-label="Trust information">
      {solicitorReady ? (
        <div className="mb-4">
          <h2 className="text-xl font-bold text-[#0f2044]">Panel solicitor</h2>
          <p className="mt-2 text-slate-700">
            Enquiries may be passed to {TRUST.panelSolicitorName}, regulated by {TRUST.panelSolicitorRegulator}.
          </p>
        </div>
      ) : null}
      {reviews.length > 0 ? (
        <div className="mb-4">
          <h2 className="text-xl font-bold text-[#0f2044]">Reviews</h2>
          <ul className="mt-3 space-y-3">
            {reviews.map((item) => (
              <li key={item.quote} className="border-l-4 border-l-red-700 pl-4">
                <blockquote className="text-slate-700">“{item.quote}”</blockquote>
                <p className="mt-1 text-sm text-slate-500">{item.attribution}</p>
                {item.sourceUrl ? (
                  <p className="text-sm">
                    <a href={item.sourceUrl} className="text-red-700 underline" target="_blank" rel="noopener noreferrer">
                      Source
                    </a>
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {cases.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold text-[#0f2044]">Case examples</h2>
          <ul className="mt-3 space-y-3">
            {cases.map((item) => (
              <li key={item.title}>
                <p className="font-semibold text-[#0f2044]">{item.title}</p>
                <p className="text-slate-700">{item.summary}</p>
                {item.sourceUrl ? (
                  <p className="text-sm">
                    <a href={item.sourceUrl} className="text-red-700 underline" target="_blank" rel="noopener noreferrer">
                      Source
                    </a>
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
