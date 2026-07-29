interface Term {
  term: string;
  definition: string;
}

interface Props {
  title?: string;
  terms: Term[];
}

export default function DefinitionBox({ title = "Scottish Legal Terms Explained", terms }: Props) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 my-8 not-prose">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">{title}</p>
      <dl className="space-y-3">
        {terms.map((t) => (
          <div key={t.term}>
            <dt className="font-bold text-[#0f2044] text-sm">
              <dfn title={t.definition}>{t.term}</dfn>
            </dt>
            <dd className="text-gray-600 text-sm mt-0.5 leading-relaxed">{t.definition}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
