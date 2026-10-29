"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const lossGroups = [
  { id: "injury", label: "Pain, suffering and loss of amenity", help: "The injury itself, its duration and its effect on daily life." },
  { id: "earnings", label: "Past or future earnings", help: "Wages, self-employed income, promotion prospects or pension loss." },
  { id: "care", label: "Care and practical assistance", help: "Paid care and reasonable help provided by family or friends." },
  { id: "treatment", label: "Treatment and rehabilitation", help: "Supported private treatment, medication, therapy and rehabilitation costs." },
  { id: "travel", label: "Travel and other expenses", help: "Reasonable travel, parking, prescriptions and accident-related outlays." },
  { id: "future", label: "Long-term needs", help: "Equipment, accommodation, transport or support required in the future." },
];

// Suggested documents per loss category. Preparation prompts only: none of these is a promise that the loss is recoverable.
const documents: Record<string, { items: string[]; read: { label: string; href: string } }> = {
  injury: {
    items: ["GP, hospital and physiotherapy records", "Dated photographs of injuries and healing", "A short diary of symptoms and how daily life is affected", "Any medical reports you have been given"],
    read: { label: "Compensation guide", href: "/personal-injury-compensation-scotland" },
  },
  earnings: {
    items: ["Recent payslips and a P60", "Fit notes and sickness absence record", "Letters from your employer about pay or duties", "For self-employed work: tax returns and invoices"],
    read: { label: "Self-employed injury claims", href: "/self-employed-injury-claims-scotland" },
  },
  care: {
    items: ["A log of who helped, what they did and for how long", "Invoices or contracts for paid carers", "Statements from family or friends who helped"],
    read: { label: "Serious injury claims", href: "/serious-injury-claims-scotland" },
  },
  treatment: {
    items: ["Receipts and invoices for private treatment", "Prescription records", "Treatment plans or referral letters"],
    read: { label: "How to claim", href: "/how-to-claim-compensation-scotland" },
  },
  travel: {
    items: ["Receipts for parking, fares and fuel for appointments", "A mileage log with dates and destinations", "Receipts for accident-related purchases"],
    read: { label: "Compensation guide", href: "/personal-injury-compensation-scotland" },
  },
  future: {
    items: ["Reports from occupational therapists or other specialists", "Quotes for equipment, adaptations or transport", "Letters about expected future treatment or prognosis"],
    read: { label: "Serious injury claims", href: "/serious-injury-claims-scotland" },
  },
};

export default function CompensationPlanner() {
  const [selected, setSelected] = useState<string[]>([]);
  const [duration, setDuration] = useState("not-known");

  const message = useMemo(() => {
    if (selected.length === 0) return "Select every type of loss that may apply. The tool will produce a preparation checklist, not an unreliable settlement figure.";
    if (selected.length <= 2 && duration === "resolved") return "Your claim may involve a narrower loss schedule, but evidence and medical prognosis still determine value.";
    if (selected.length >= 4 || duration === "long-term") return "Several heads of loss or long-term effects may need specialist evidence and a carefully modelled future-loss schedule.";
    return "Your potential losses extend beyond the injury itself. Keep documents for each selected category and avoid valuing the claim before prognosis is clear.";
  }, [selected, duration]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 shadow-sm not-prose" aria-labelledby="planner-title">
      <h2 id="planner-title" className="text-2xl font-bold text-[#0f2044]">Build your compensation evidence checklist</h2>
      <p className="mt-2 text-slate-700">Choose the losses that may have followed the accident. No personal details are stored or sent.</p>

      <fieldset className="mt-6">
        <legend className="font-bold text-[#0f2044]">Which effects or expenses may apply?</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {lossGroups.map((item) => (
            <label key={item.id} className="flex cursor-pointer gap-3 rounded-xl border border-slate-200 p-4 hover:border-blue-400">
              <input
                type="checkbox"
                className="mt-1 h-5 w-5 accent-blue-700"
                checked={selected.includes(item.id)}
                onChange={() => setSelected((current) => current.includes(item.id) ? current.filter((id) => id !== item.id) : [...current, item.id])}
              />
              <span><span className="block font-semibold text-[#0f2044]">{item.label}</span><span className="mt-1 block text-sm text-slate-600">{item.help}</span></span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="mt-6 block font-bold text-[#0f2044]" htmlFor="duration">How long have the effects lasted?</label>
      <select id="duration" value={duration} onChange={(event) => setDuration(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-800 sm:max-w-md">
        <option value="not-known">Not yet known</option>
        <option value="resolved">They have resolved</option>
        <option value="ongoing">They are ongoing</option>
        <option value="long-term">They may be long term or permanent</option>
      </select>

      <div aria-live="polite" className="mt-6 rounded-xl bg-blue-50 p-5 text-blue-950">
        <p className="font-bold">Planning result</p>
        <p className="mt-1">{message}</p>
        {selected.length > 0 && <p className="mt-3 text-sm">Checklist selected: {selected.length} of {lossGroups.length} potential heads of loss.</p>}
      </div>

      {selected.length > 0 && (
        <div className="mt-6" id="planner-checklist">
          <h3 className="text-xl font-bold text-[#0f2044]">Documents worth gathering</h3>
          <p className="mt-1 text-sm text-slate-600">Suggestions only. Having a document does not mean a loss is recoverable; a solicitor can advise on what matters in your case.</p>
          {lossGroups.filter((g) => selected.includes(g.id)).map((g) => (
            <div key={g.id} className="mt-4">
              <h4 className="font-semibold text-[#0f2044]">{g.label}</h4>
              <ul className="mt-1 list-disc space-y-1 pl-5 text-slate-700">
                {documents[g.id].items.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <p className="no-print mt-1 text-sm"><Link href={documents[g.id].read.href} className="text-red-700 underline">{documents[g.id].read.label}</Link></p>
            </div>
          ))}
          <button type="button" onClick={() => window.print()} className="no-print mt-6 rounded-lg bg-[#0f2044] px-5 py-3 font-semibold text-white hover:bg-[#1a3366]">
            Print this checklist
          </button>
        </div>
      )}
    </div>
  );
}
