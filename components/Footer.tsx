import Link from 'next/link';
import { Clock, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
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

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Hours From Now
                </Link>
              </li>
              <li>
                <Link href="/time-calculator" className="hover:text-blue-400 transition-colors">
                  Time Calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Date Calculator
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  World Clock
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Time Calculators
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Date Calculators
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Math Tools
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Unit Converters
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span>info@hoursfromnow.tech</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {currentYear} Hours Calculator. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link href="/private-policy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact-us" className="hover:text-blue-400 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
