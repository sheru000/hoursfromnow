import TimeCalculator from '@/components/TimeCalculator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hours From Now Calculator',
  description: 'Free online hours from now calculator. Calculate future times from 1 to 100 hours ahead with live updates. Perfect for scheduling, planning, and time management.',
  keywords: 'hours from now, time calculator, hours calculator, hours from now calculator, days calculator',
  openGraph: {
    title: 'Hours From Now Calculator',
    description: 'Calculate times from 1 to 100 hours ahead with live updates.',
    type: 'website',
  },
};

export default function Home() {
  return <TimeCalculator />;
}
