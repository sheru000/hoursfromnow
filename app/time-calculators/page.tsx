import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Time Calculators - Free Online Time Calculation Tools',
  description: 'Collection of free online time calculators including hours from now, time calculator, and more time-related calculation tools.',
  alternates: {
    canonical: 'https://hoursfromnow.tech/time-calculators',
  },
  keywords: 'time calculators, time calculation tools, hours calculator, time converter, online time tools',
  openGraph: {
    title: 'Time Calculators - Free Online Tools',
    description: 'Collection of free online time calculators for all your time calculation needs.',
    url: 'https://hoursfromnow.tech/time-calculators',
    type: 'website',
    siteName: 'HoursFromNow.tech',
  },
};

interface Calculator {
  name: string;
  description: string;
  url: string;
}

const timeCalculators: Calculator[] = [
  {
    name: 'Hours From Now Calculator',
    description: 'Calculate what time it will be any number of hours from now.',
    url: '/',
  },
  {
    name: 'Hours Ago Calculator',
    description: 'Calculate what time it was any number of hours ago.',
    url: '/hours-ago',
  },
  {
    name: 'Time Calculator',
    description: 'Add or subtract time values including hours, minutes, and seconds.',
    url: '/time-calculator',
  },
  {
    name: 'Hours Calculator',
    description: 'Calculate the duration between two times in hours and minutes.',
    url: '/hours-calculator',
  },
  {
    name: 'Minutes Calculator',
    description: 'Calculate time differences in minutes and convert between time units.',
    url: '/minutes-calculator',
  },
  {
    name: 'Time Duration Calculator',
    description: 'Calculate the duration between two dates and times.',
    url: '/time-duration-calculator',
  },
  {
    name: 'Time Zone Converter',
    description: 'Convert time between different time zones worldwide.',
    url: '/time-zone-converter',
  },
  {
    name: 'Work Hours Calculator',
    description: 'Calculate total work hours including breaks and overtime.',
    url: '/work-hours-calculator',
  },
  {
    name: 'Time Card Calculator',
    description: 'Calculate hours worked from time card entries.',
    url: '/time-card-calculator',
  },
  {
    name: 'Military Time Converter',
    description: 'Convert between 12-hour and 24-hour military time formats.',
    url: '/military-time-converter',
  },
  {
    name: 'Days From Now Calculator',
    description: 'Calculate what the date will be any number of days from now.',
    url: '/days-from-now',
  },
  {
    name: 'Decimal Time Converter',
    description: 'Convert time to decimal format and vice versa.',
    url: '/decimal-time-converter',
  },
  {
    name: 'Weeks From Now Calculator',
    description: 'Calculate what the date will be any number of weeks from now.',
    url: '/weeks-from-now',
  },
  {
    name: 'Time Ago Calculator',
    description: 'Calculate what time it was a certain number of hours ago.',
    url: '/time-ago',
  },
  {
    name: 'Sleep Calculator',
    description: 'Calculate optimal sleep and wake times based on sleep cycles.',
    url: '/sleep-calculator',
  },
  {
    name: 'Countdown Timer',
    description: 'Count down to a specific date and time.',
    url: '/countdown-timer',
  },
];

export default function TimeCalculatorsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Clock className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Time Calculators</h1>
          </div>
          <p className="text-lg text-gray-600">
            Free online time calculation tools for all your time-related needs. From simple hours calculations
            to complex time zone conversions, find the perfect calculator for your requirements.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-200">
          {timeCalculators.map((calculator, index) => (
            <Link
              key={index}
              href={calculator.url}
              className="block p-5 hover:bg-blue-50 transition-colors duration-150"
            >
              <h2 className="text-lg font-semibold text-blue-600 hover:text-blue-700 mb-1">
                {calculator.name}
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                {calculator.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 prose prose-gray max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Time Calculators</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Time calculators are essential tools for anyone who needs to perform time-related calculations quickly
            and accurately. Whether you're planning a project timeline, calculating work hours, or simply trying to
            figure out what time it will be in a few hours, these calculators make the process effortless.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Our collection of time calculators covers a wide range of use cases, from basic time addition and
            subtraction to more complex calculations involving time zones and work schedules. All calculators are
            free to use, require no registration, and work directly in your browser.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Popular Time Calculations</h3>
          <ul className="text-gray-600 space-y-2 list-disc list-inside">
            <li>Hours from now - Calculate future times by adding hours to the current time</li>
            <li>Time duration - Find the difference between two times or dates</li>
            <li>Work hours - Calculate total hours worked including breaks</li>
            <li>Time zone conversion - Convert time between different time zones</li>
            <li>Time format conversion - Convert between 12-hour, 24-hour, and decimal formats</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mb-3 mt-8">Why Use Online Time Calculators?</h3>
          <ul className="text-gray-600 space-y-2 list-disc list-inside">
            <li>Instant results - Get accurate calculations in seconds</li>
            <li>No manual math - Avoid errors from manual time calculations</li>
            <li>Always accessible - Use from any device with internet access</li>
            <li>Free and easy - No downloads, installations, or sign-ups required</li>
            <li>Multiple formats - Support for various time formats and standards</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
