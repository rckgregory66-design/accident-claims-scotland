interface Props {
  points: string[];
}

export default function TldrBox({ points }: Props) {
  return (
    <div
      id="tldr"
      className="bg-[#0f2044] text-white rounded-xl p-5 mb-8 not-prose"
      aria-label="Key points summary"
    >
      <p className="text-yellow-400 font-bold text-sm uppercase tracking-wide mb-3">
        Key Points — Quick Summary
      </p>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2.5 text-sm leading-snug">
            <span className="text-yellow-400 font-bold mt-0.5 flex-shrink-0">✓</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
