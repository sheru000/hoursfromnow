// components/PrivacyPolicy.jsx
import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-sm text-gray-700">
        Effective date: October 6, 2025
      </p>

      <section className="mb-6">
        <p className="mb-2">
          hoursfromnow.tech (the "Site") is operated by the owner and developer
          of the Site ("we", "us", or "our"). This Privacy Policy explains how
          we collect, use, disclose, and protect information when you visit or
          use our Site and services (the "Service"). By using the Service you
          agree to the collection and use of information in accordance with
          this policy.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Information we collect</h2>

        <h3 className="font-medium mt-3">Information you provide directly</h3>
        <p className="mb-2">
          When you use features that require input (for example submitting a
          form or using calculators), you may provide information such as your
          email or the data entered into a calculator. We use this information
          only to provide the requested function or to respond to your inquiries.
        </p>

        <h3 className="font-medium mt-3">Log data</h3>
        <p className="mb-2">
          We automatically collect certain information when you visit the Site,
          including IP address, browser type and version, pages visited,
          referral source, time and date of visits, time spent on pages, and
          other usage statistics.
        </p>

        <h3 className="font-medium mt-3">Cookies and similar technologies</h3>
        <p className="mb-2">
          The Site uses cookies and similar technologies to personalize and
          improve your experience, remember preferences, and analyze traffic.
          You may control cookies through your browser settings, though disabling
          cookies may affect some functionality.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">How we use information</h2>
        <ul className="list-disc ml-6">
          <li>Provide and maintain the Service.</li>
          <li>Operate and improve the Site and user experience.</li>
          <li>Respond to requests and support inquiries.</li>
          <li>Monitor usage and diagnose technical issues.</li>
          <li>Detect, prevent, and address abuse or security incidents.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Third-party services and advertising</h2>
        <p className="mb-2">
          We may use third-party analytics and advertising partners who may set
          cookies and collect anonymous usage data. We do not sell your personal
          information. If third-party advertising is enabled, those providers
          may use non-personally identifying information to serve relevant ads.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Security</h2>
        <p className="mb-2">
          We implement commercially reasonable measures to protect information,
          but no method of transmission or electronic storage is completely
          secure. We cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Links to other sites</h2>
        <p className="mb-2">
          The Site may link to third-party websites. We are not responsible for
          their privacy practices. Review the privacy policies of any site you
          visit from links on this Site.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Children</h2>
        <p className="mb-2">
          The Service is not directed to children under 13. We do not knowingly
          collect personal information from children under 13. If you believe a
          child under 13 has provided information, please contact us and we will
          remove it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-medium mb-2">Your rights and choices</h2>
        <p className="mb-2">
          Depending on your location you may have rights to access, correct, or
          delete personal data. Residents of certain jurisdictions (for example,
          California) may have additional rights under local privacy laws. To
          exercise your rights, contact us using the details below.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-2">Changes to this policy</h2>
        <p className="mb-2">
          We may update this Privacy Policy from time to time. When we do we will
          post the updated policy on this page with a new effective date.
        </p>
      </section>

      <footer className="pt-4 border-t">
        <p className="mb-1">Contact us</p>
        <p className="text-sm text-gray-700">
          For privacy questions or to exercise your rights, email:
          <a
            href="mailto:privacy@hoursfromnow.tech"
            className="ml-1 underline"
          >
            info@hoursfromnow.tech
          </a>
        </p>
      </footer>
    </main>
  );
}
