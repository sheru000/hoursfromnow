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
            <nav aria-label="Social media" className="mt-4">
              <ul className="flex space-x-4">
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61584089121379" aria-label="Facebook" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.466.098 2.799.142v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.764v2.312h3.588l-.467 3.622h-3.121V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/hourfromnow" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.608 1.794-1.574 2.163-2.723-.95.566-2.005.978-3.127 1.2-.896-.957-2.173-1.555-3.59-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.087-.205-7.713-2.164-10.141-5.144-.424.722-.666 1.561-.666 2.458 0 1.695.863 3.19 2.172 4.071-.802-.025-1.558-.246-2.22-.616v.061c0 2.367 1.683 4.343 3.918 4.789-.41.11-.842.171-1.287.171-.315 0-.624-.03-.927-.086.626 1.956 2.444 3.379 4.6 3.419-1.68 1.317-3.808 2.101-6.115 2.101-.399 0-.79-.023-1.175-.068 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.001-7.496 14.001-13.986 0-.21 0-.423-.015-.633.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/hour.fromnow/" aria-label="Instagram" className="text-gray-400 hover:text-pink-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37a4 4 0 1 1-7.94 1.32 4 4 0 0 1 7.94-1.32z"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/hourfromnow/" aria-label="Pinterest" className="text-gray-400 hover:text-red-600 transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.373 0 0 5.372 0 12c0 5.087 3.163 9.43 7.623 11.136-.105-.947-.2-2.403.042-3.444.218-.942 1.4-6.012 1.4-6.012s-.36-.722-.36-1.787c0-1.675.971-2.928 2.18-2.928 1.028 0 1.524.77 1.524 1.696 0 1.033-.658 2.576-1 4.012-.285 1.203.602 2.18 1.787 2.18 2.144 0 3.594-2.264 3.594-4.922 0-2.544-1.832-4.322-4.446-4.322-3.031 0-4.807 2.27-4.807 4.615 0 .915.352 1.897.792 2.43a.32.32 0 0 1 .074.31c-.082.342-.266 1.085-.302 1.236-.05.202-.16.245-.372.148-1.392-.647-2.262-2.668-2.262-4.307 0-3.509 2.547-6.735 7.349-6.735 3.849 0 6.842 2.75 6.842 6.426 0 3.82-2.412 6.9-5.767 6.9-1.127 0-2.185-.586-2.546-1.277l-.693 2.639c-.251.968-.936 2.178-1.393 2.917 1.05.324 2.164.5 3.324.5 6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
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
                <Link href="/months-from-today" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                  Months From Today
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
