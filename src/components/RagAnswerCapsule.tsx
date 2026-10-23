export interface AnswerCapsule { question: string; answer: string; }

// Self-contained question + 40–60 word answer for AI search quotation. Part of the
// static export, so the full passage is in the HTML with no client-side rendering.
export default function RagAnswerCapsule({ question, answer }: AnswerCapsule) {
  return (
    <section data-chunk-type="direct-answer" className="rag-answer-capsule answer-box">
      <h2 className="!mt-0 !mb-3 !text-xl">{question}</h2>
      <p className="!mb-0">{answer}</p>
    </section>
  );
}
