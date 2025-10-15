import TimeCalculatorComponent from '@/components/TimeCalculatorComponent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Time Calculator, Add and Subtract Time',
  description: 'Time calculator to add or subtract time between values. Calculate days, hours, minutes, and seconds from now to targeted future or past date. like 30 days from now or 90 days from now or 60 days from now or 45 days from now or 90 days ago. Best online free tool with instant results and 100% accuracy. Perfect for time tracking, scheduling or any other event which need to calculate the time instantly.',
   alternates: {
    canonical: 'https://hoursfromnow.tech/time-calculator',
  },
  keywords: 'time calculator, add time, subtract time, time arithmetic, hours calculator, days from now, days calculator, hours from now, hours from now calculator, 30 days from now, 90 days from now, 60 days from now, 45 days from now, 14 days from now, 28 days from now, what is 90 days from now, 21 days from now, 75 days from now, what is 60 days from now, 100 days from now, 10 days from now, 180 days from now, 7 days from now, 120 days from now, 1 month and 21 days from now, 15 days from now, 40 days from now, what day is 90 days from now, what is 30 days from now, 19 days from now, 20 days from now, 5 days from now, 50 days from now, what date is 60 days from now, 12 days from now, 25 days from now, 35 days from now, seven days from now, 18 days from now, 22 days from now, 3 days from now, 6 days from now, what day is 30 days from now, what is 45 days from now, 11 days from now, 16 days from now, 17 days from now, 29 days from now, 70 days from now, 8 days from now, what day is two weeks from now, what is 75 days from now, when is 75 days from now, 13 days from now, 150 days from now, 27 days from now, 31 days from now, 42 days from now, 80 days from now, 9 days from now, five days from now, what day is 2 weeks from now, what is 180 days from now, 2 days from now, 200 days from now, 23 days from now, 24 days from now, 26 days from now, 4 days from now, 56 days from now, days from now, three days from now, what is 100 days from now, what is 14 days from now, what is 21 days from now, what is the date 90 days from now, 104 days from now, 270 days from now, 41 days from now, 55 days from now, 64 days from now, two days from now, what is 28 days from now, whats 100 days from now, whats 30 days from now, whats 90 days from now, 33 days from now, 38 days from now, 44 days from now, 54 days from now, 65 days from now, 93 days from now, days from now calculator, what day is 180 days from now, what day is 60 days from now, what is 120 days from now, when is 90 days from now, 32 days from now, 34 days from now, 36 days from now, 37 days from now, 39 days from now, 48 days from now, 49 days from now, 52 days from now, 63 days from now, 84 days from now, how many days from now to august 10, what date is 90 days from now',
  openGraph: {
    title: 'Time Calculator',
     description:
      'Time calculator to add or subtract time between values. Calculate days, hours, minutes, and seconds with ease like 30 days from now or 90 days from now or 60 days from now or 45 days from now.',
    url: 'https://hoursfromnow.tech/time-calculator',
    type: 'website',
  },
};

export default function TimeCalculatorPage() {
  return <TimeCalculatorComponent />;
}
