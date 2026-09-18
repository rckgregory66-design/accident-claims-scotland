"use client";
import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/data/siteConfig";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-40 bg-[#0f2044] shadow-lg">
      {/* Top bar */}
      <div className="bg-[#0a1630] text-sm text-gray-300 px-4 py-1.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <span className="hidden sm:block">Accident claims information for Scotland</span>
          <div className="flex items-center ml-auto">
            <span>Free enquiry — no obligation</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span className="text-white font-bold text-lg sm:text-xl">
              Accident Claims
            </span>
            <span className="text-yellow-400 font-bold text-lg sm:text-xl -mt-1">
              Scotland
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium flex items-center gap-1 rounded transition-colors hover:bg-white/10">
                    {link.label}
                    <svg className="w-3.5 h-3.5 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 bg-white shadow-xl rounded-lg py-2 w-64 mt-0.5 border border-gray-100 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium rounded transition-colors hover:bg-white/10"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors shadow-sm"
            >
              Free Claim Check
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a1630] border-t border-white/10 pb-4">
          <nav id="mobile-nav" className="px-4 pt-2 space-y-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {link.children ? (
                  <details className="group">
                    <summary className="text-gray-200 px-3 py-2.5 text-sm font-medium flex justify-between items-center rounded cursor-pointer hover:bg-white/10">
                      {link.label}
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="pl-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-3 py-2.5 text-sm text-gray-200 hover:text-white rounded hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3">
              <Link
                href="/contact"
                className="block bg-red-700 text-white text-center font-semibold py-3 rounded-lg text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Free Claim Check — No Obligation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
