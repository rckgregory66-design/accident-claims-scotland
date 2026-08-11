"use client";

import { useMemo, useState } from "react";

const lossGroups = [
  { id: "injury", label: "Pain, suffering and loss of amenity", help: "The injury itself, its duration and its effect on daily life." },
  { id: "earnings", label: "Past or future earnings", help: "Wages, self-employed income, promotion prospects or pension loss." },
  { id: "care", label: "Care and practical assistance", help: "Paid care and reasonable help provided by family or friends." },
  { id: "treatment", label: "Treatment and rehabilitation", help: "Supported private treatment, medication, therapy and rehabilitation costs." },
  { id: "travel", label: "Travel and other expenses", help: "Reasonable travel, parking, prescriptions and accident-related outlays." },
  { id: "future", label: "Long-term needs", help: "Equipment, accommodation, transport or support required in the future." },
];

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
        {selected.length > 0 && <p className="mt-3 text-sm">Checklist selected: {selected.length} of {lossGroups.length} potential heads of loss. Keep receipts, wage evidence, care notes and relevant medical records.</p>}
      </div>
    </div>
  );
}
