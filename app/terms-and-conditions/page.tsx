import TermsContent from "@/components/TermsCondition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Hours From Now",
  description:
    "Read the Terms and Conditions for HoursFromNow.tech, outlining the use of our website, services, and your rights and responsibilities.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen py-10 px-6 md:px-16 lg:px-32 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">
          Terms and Conditions
        </h1>
        <TermsContent />
      </div>
    </main>
  );
}
