import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Hours From Now",
  description: "Contact HoursFromNow.tech for inquiries, support, or feedback. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen py-10 px-6 md:px-16 lg:px-32 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold mb-6 text-gray-900">Contact Us</h1>
        <p className="mb-6 text-gray-600">
          Have a question or feedback? Fill out the form below or reach us by mail.
        </p>

        <ContactForm />

        <div className="mt-10 border-t border-gray-200 pt-6">
          <h2 className="text-xl font-semibold mb-2">Mailing Address</h2>
          <p className="text-gray-700">
            2203 Timberloch Pl<br />
            Suite 252<br />
            The Woodlands, TX 77380
          </p>
        </div>
      </div>
    </main>
  );
}
