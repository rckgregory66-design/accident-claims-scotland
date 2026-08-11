import Link from "next/link";
import { SITE, LOCATIONS } from "@/data/siteConfig";

export default function Footer() {
  const claimTypes = [
    { label: "Personal Injury", href: "/personal-injury-claims-scotland" },
    { label: "Road Traffic Accident", href: "/road-traffic-accident-claims-scotland" },
    { label: "Accident at Work", href: "/accident-at-work-claims-scotland" },
    { label: "Medical Negligence", href: "/medical-negligence-claims-scotland" },
    { label: "Industrial Disease", href: "/industrial-disease-claims-scotland" },
    { label: "Serious Injury", href: "/serious-injury-claims-scotland" },
    { label: "Public Place Accident", href: "/public-place-accident-claims-scotland" },
    { label: "Criminal Injury", href: "/criminal-injury-compensation-scotland" },
  ];

  const info = [
    { label: "No Win No Fee", href: "/no-win-no-fee-solicitors-scotland" },
    { label: "How to Claim", href: "/how-to-claim-compensation-scotland" },
    { label: "Compensation Guide", href: "/personal-injury-compensation-scotland" },
    { label: "Time Limits", href: "/personal-injury-claim-time-limits-scotland" },
    { label: "Guides & Articles", href: "/guides" },
    { label: "About Us", href: "/about" },
    { label: "Editorial Methodology", href: "/editorial-methodology" },
    { label: "Contact", href: "/contact" },
  ];

  const legal = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookie Policy", href: "/cookie-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Complaints", href: "/complaints" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ];

  return (
    <footer className="bg-[#0a1630] text-gray-300 mt-16">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-white font-bold text-xl mb-1">
              Accident Claims <span className="text-yellow-400">Scotland</span>
            </div>
            <p className="text-sm text-gray-400 mt-3 leading-relaxed">
              General information about personal injury and accident claims in Scotland.
            </p>
            <div className="mt-5 space-y-1.5 text-sm">
            </div>
          </div>

          {/* Claim types */}
          <div>
            <h3 className="text-white font-semibold mb-4">Claim Types</h3>
            <ul className="space-y-2 text-sm">
              {claimTypes.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-white font-semibold mb-4">Information</h3>
            <ul className="space-y-2 text-sm">
              {info.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mt-6 mb-4">Locations</h3>
            <ul className="space-y-1.5 text-sm">
              {LOCATIONS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-3 bg-white/5 rounded-lg text-xs text-gray-400 leading-relaxed">
              General information about accident claims under Scots law.
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer bar */}
      <div className="border-t border-white/10 bg-[#060e1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-xs text-gray-500 leading-relaxed mb-3">
            <strong className="text-gray-400">Disclaimer:</strong> This website provides general information only and does not constitute legal advice. Each claim depends on its own facts, evidence, liability, causation and applicable time limits. Time limits apply and delay may bar your claim. No guarantee of outcome or compensation amount is made or implied.
          </p>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} {SITE.name}.
          </p>
        </div>
      </div>
    </footer>
  );
}
