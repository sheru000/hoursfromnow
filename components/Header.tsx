'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Clock, Search, Menu, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2"
            aria-label="Hours From Now - Home"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center" aria-hidden="true">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Hours From Now
            </span>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <label htmlFor="search" className="sr-only">Search calculators</label>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" aria-hidden="true" />
              <Input
                id="search"
                type="search"
                placeholder="Search calculators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full"
                aria-label="Search time calculators"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Main navigation">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              Home
            </Link>

            <Link
              href="/time-calculators"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1"
            >
              Time Calculators
            </Link>
          </nav>

          <button
            className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200" role="navigation" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-3">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/time-calculators"
                className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 rounded hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Time Calculators
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
