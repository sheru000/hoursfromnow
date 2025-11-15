'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clock, Calculator, Calendar, CalendarDays } from 'lucide-react';


const calculators = [
  {
    name: 'Hours From Now',
    href: '/',
    icon: Clock,
  },
  {
    name: 'Time Calculator',
    href: '/time-calculator',
    icon: Calculator,
  },
  {
    name: 'Time Duration Calculator',
    href: '/time-duration-calculator',
    icon: Calculator,
  },
  {
    name: 'Days From Today',
    href: '/days-from-Today',
    icon: Calendar,
  },
  {
    name: 'Holidays Countdown',
    href: '/holiday-countdown',
    icon: CalendarDays,
  },

];

export default function CalculatorNav() {
  const pathname = usePathname();

  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center overflow-x-auto py-4 space-x-4 scrollbar-hide">
          {calculators.map((calc) => {
            const Icon = calc.icon;
            const isActive = pathname === calc.href;

            return (
              <Link
                key={calc.href}
                href={calc.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{calc.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
