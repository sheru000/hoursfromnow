import Link from 'next/link';
import { Clock, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center" aria-hidden="true">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">
                Hours From Now
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Your go-to resource for accurate time calculations and conversions.
              Fast, reliable, and easy to use.
            </p>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Hours From Now
                </Link>
              </li>
              <li>
                <Link href="/hours-ago" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Hours Ago
                </Link>
              </li>
              <li>
                <Link href="/days-from-now" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Days From Now
                </Link>
              </li>
              <li>
                <Link href="/time-calculator" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Time Calculator
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Sitemap
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Time calculators">
            <h3 className="text-white font-semibold mb-4">Time Calculators</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/hours-calculator" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Hours Calculator
                </Link>
              </li>
              <li>
                <Link href="/time-duration-calculator" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Time Duration Calculator
                </Link>
              </li>
              <li>
                <Link href="/months-from-now" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Months From Now
                </Link>
              </li>
              <li>
                <Link href="/holiday-countdown" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Holiday Countdown
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <a href="mailto:info@hoursfromnow.tech" className="hover:text-blue-400 transition-colors">
                  info@hoursfromnow.tech
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" aria-hidden="true" />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} Hours Calculator. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4" aria-label="Legal and support">
            <Link href="/private-policy" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
              Terms of Service
            </Link>
            <Link href="/contact-us" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
