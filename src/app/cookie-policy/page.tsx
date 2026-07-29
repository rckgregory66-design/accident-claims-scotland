import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy | Accident Claims Scotland",
  description: "Cookie policy for accident-claims-scotland.com — what cookies we use and how to manage them.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Cookie Policy" }]} />
      <section className="bg-[#0f2044] py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white">Cookie Policy</h1>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 prose-legal">
        <h2>What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. They allow the
          website to remember your actions and preferences over a period of time.
        </p>

        <h2>Cookies We Use</h2>
        <p>This website uses the following types of cookies:</p>
        <ul>
          <li><strong>Strictly necessary cookies:</strong> Required for the website to function correctly. These cannot be disabled.</li>
          <li><strong>Analytics cookies:</strong> We use analytics tools (such as Google Analytics) to understand how visitors use our website. This data is anonymised and aggregated.</li>
          <li><strong>Preference cookies:</strong> To remember your preferences on subsequent visits.</li>
        </ul>

        <h2>Managing Cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. Disabling cookies may affect
          the functionality of this and other websites. For guidance on managing cookies in your browser,
          visit aboutcookies.org.
        </p>

        <h2>Third-Party Cookies</h2>
        <p>
          Some third-party services used on this website (such as Google Analytics) may set their own
          cookies. We do not control these cookies. Please refer to the relevant third party&apos;s privacy
          and cookie policy for details.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this cookie policy from time to time. The updated policy will be posted on this page.
        </p>
      </div>
    </>
  );
}
