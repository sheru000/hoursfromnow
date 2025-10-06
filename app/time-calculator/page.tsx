import TimeCalculatorComponent from '@/components/TimeCalculatorComponent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Time Calculator - Add and Subtract Time',
  description: 'Free online time calculator to add or subtract time values. Calculate hours, minutes, and seconds with ease. Perfect for time tracking and scheduling.',
  keywords: 'time calculator, add time, subtract time, time arithmetic, hours calculator',
};

export default function TimeCalculatorPage() {
  return <TimeCalculatorComponent />;
}
