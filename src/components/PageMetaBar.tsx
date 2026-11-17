import { REVIEWER } from "@/data/siteConfig";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(`${iso}T12:00:00Z`),
  );
}

/** Visible “last updated” line, with “reviewed by” only once a reviewer name is set. */
export default function PageMetaBar({ dateModified }: { dateModified: string }) {
  const reviewedBy = REVIEWER.name.trim();
  return (
    <p className="text-sm text-slate-500 not-prose">
      <span>Last updated {formatDate(dateModified)}</span>
      {reviewedBy ? (
        <span>
          {" "}
          · Reviewed by {reviewedBy}
          {REVIEWER.role ? `, ${REVIEWER.role}` : ""}
        </span>
      ) : null}
    </p>
  );
}
