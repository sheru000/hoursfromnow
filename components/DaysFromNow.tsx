'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, Calculator } from 'lucide-react';
import DaysFromNowPage from '@/components/content/DaysFromNowPage';
import DaysFromNowTable from '@/components/content/DaysFromNowTable';

interface DateEntry {
  days: number;
  futureDate: Date;
  label: string;
}

export default function DaysFromNow() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [dateEntries, setDateEntries] = useState<DateEntry[]>([]);
  const [timezone, setTimezone] = useState<string>('');
  const [manualDays, setManualDays] = useState<string>('');
  const [calculatedDate, setCalculatedDate] = useState<Date | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const entries: DateEntry[] = [];
    for (let i = 1; i <= 100; i++) {
      const futureDate = new Date(currentTime);
      futureDate.setDate(futureDate.getDate() + i);
      entries.push({
        days: i,
        futureDate,
        label: i === 1 ? '1 day from now' : `${i} days from now`
      });
    }
    setDateEntries(entries);
  }, [currentTime]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatShortDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDayOfWeek = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long'
    });
  };

  const handleCalculate = () => {
    const days = parseInt(manualDays) || 0;
    const result = new Date(currentTime);
    result.setDate(result.getDate() + days);
    setCalculatedDate(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Days From Now Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Calculate future dates instantly with our live updating days from now calculator. Perfect for planning and scheduling.
          </p>
        </div>

        <div className="mb-8">
          <div className="p-6">
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Calendar className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Your Local Time ({timezone})</span>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                  {formatTime(currentTime)}
                </div>
                <div className="text-xl text-gray-700 font-medium">
                  {formatDate(currentTime)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="mb-8 bg-white border-2 border-blue-100 shadow-xl">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <Calculator className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-800">Calculate Days From Now</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Days
                </label>
                <Input
                  type="number"
                  min="0"
                  placeholder="Enter number of days"
                  value={manualDays}
                  onChange={(e) => setManualDays(e.target.value)}
                  className="text-lg"
                />
              </div>

              <Button
                onClick={handleCalculate}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white h-11"
              >
                Calculate
              </Button>
            </div>

            {calculatedDate && (
              <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Result:</p>
                  <p className="text-3xl font-bold text-blue-600 mb-1">
                    {formatShortDate(calculatedDate)}
                  </p>
                  <p className="text-lg text-gray-700 mb-1">
                    {getDayOfWeek(calculatedDate)}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatDate(calculatedDate)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
            <h2 className="text-2xl font-bold text-white text-center">Days From Now Table - {formatShortDate(currentTime)}</h2>
            <p className="text-blue-50 text-sm mt-1 text-center">Below X days added to current date</p>
          </div>
          <DaysFromNowTable/>
        </div>

        <div className="mt-12">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-sm">
            <DaysFromNowPage/>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Card className="inline-block p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Live Updates:</span> This days from now calculator refreshes every second to show accurate dates.
              <br />
              All dates are displayed in your local timezone: <span className="font-semibold text-blue-600">{timezone}</span>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
