import type { Metadata } from "next";
import ClaimForm from "@/components/ClaimForm";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Accident Claims Scotland | Free Claim Enquiry",
  description:
    "Send a free, no-obligation enquiry about a personal injury or accident claim in Scotland using the online form. Accident Claims Scotland provides general information, not legal advice.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs crumbs={[{ label: "Contact" }]} />

      <section className="bg-[#0f2044] py-14 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Contact Accident Claims Scotland</h1>
          <p className="text-gray-300 text-lg">
            Send a free, no-obligation enquiry about your accident. This website provides general
            information and does not give legal advice on individual cases.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl font-bold text-[#0f2044] mb-2">Start Your Claim Enquiry</h2>
            <p className="text-gray-600 mb-6">
              Complete the form below. Sending an enquiry is free and carries no obligation, and it does
              not create a solicitor-client relationship.
            </p>
            <ClaimForm title="Free Claim Assessment" />
          </div>

          {/* Contact details */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="font-bold text-[#0f2044] text-lg mb-2">Online Enquiries</h3>
              <p className="text-sm text-gray-700">
                Use the enquiry form on this page. Telephone, email and office details will be added when
                the receiving provider has been confirmed.
              </p>
            </div>

            <div className="card border-l-4 border-l-red-600">
              <h3 className="font-bold text-[#0f2044] mb-2">Urgent deadlines</h3>
              <p className="text-sm text-gray-700 mb-2">
                If you believe your personal injury claim time limit is about to expire, or if you have
                received a court date, do not rely on the online form for urgent help. Seek prompt,
                independent advice from a qualified Scottish solicitor.
              </p>
            </div>

            <div className="card">
              <h3 className="font-bold text-[#0f2044] mb-2">What happens next?</h3>
              <ol className="text-sm text-gray-700 space-y-2">
                <li className="flex gap-2"><span className="font-bold text-[#0f2044]">1.</span> Your enquiry is sent securely through this website</li>
                <li className="flex gap-2"><span className="font-bold text-[#0f2044]">2.</span> You may be contacted using the details you provide</li>
                <li className="flex gap-2"><span className="font-bold text-[#0f2044]">3.</span> Any assessment of your claim is carried out by the person or firm that contacts you</li>
                <li className="flex gap-2"><span className="font-bold text-[#0f2044]">4.</span> You can ask questions and decide whether to proceed; there is no obligation</li>
              </ol>
            </div>

            <div className="card bg-gray-50">
              <h3 className="font-bold text-[#0f2044] mb-2 text-sm">Important information</h3>
              <p className="text-xs text-gray-500">
                This website currently provides general information only and does not identify itself as a
                regulated legal practice. Verify any legal provider independently before instructing it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
