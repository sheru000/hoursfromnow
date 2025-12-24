'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, Calculator } from 'lucide-react';
import HoursFromNowPage from '@/components/content/HoursFromNowPage';
import HoursFromNowTable from '@/components/content/HoursfromnowTable';
interface TimeEntry {
  hours: number;
  futureTime: Date;
  label: string;
}

export default function HoursFromNow() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);
  const [timezone, setTimezone] = useState<string>('');
  const [manualHours, setManualHours] = useState<string>('');
  const [manualMinutes, setManualMinutes] = useState<string>('');
  const [manualSeconds, setManualSeconds] = useState<string>('');
  const [calculatedTime, setCalculatedTime] = useState<Date | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const entries: TimeEntry[] = [];
    for (let i = 1; i <= 100; i++) {
      const futureTime = new Date(currentTime.getTime() + i * 60 * 60 * 1000);
      entries.push({
        hours: i,
        futureTime,
        label: i === 1 ? '1 hour from now' : `${i} hours from now`
      });
    }
    setTimeEntries(entries);
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

  const handleCalculate = () => {
    const hours = parseInt(manualHours) || 0;
    const minutes = parseInt(manualMinutes) || 0;
    const seconds = parseInt(manualSeconds) || 0;
    const totalMilliseconds = (hours * 60 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000);
    const result = new Date(currentTime.getTime() + totalMilliseconds);
    setCalculatedTime(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Hours From Now Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Calculate <strong>hours and minutes from now</strong>instantly with our live updating hour from now calculator. This hours from now calculator even calculate time in <em>seconds</em>. Perfect for scheduling and planning for time in future.
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
              <h2 className="text-2xl font-bold text-gray-800">Calculate Hours From Now</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours
                </label>
                <Input
                  type="number"
                  min="0"
                  placeholder="Enter hours"
                  value={manualHours}
                  onChange={(e) => setManualHours(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Minutes
                </label>
                <Input
                  type="number"
                  min="0"
                  max="59"
                  placeholder="Enter minutes"
                  value={manualMinutes}
                  onChange={(e) => setManualMinutes(e.target.value)}
                  className="text-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Seconds
                </label>
                <Input
                  type="number"
                  min="0"
                  max="59"
                  placeholder="Enter seconds"
                  value={manualSeconds}
                  onChange={(e) => setManualSeconds(e.target.value)}
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

            {calculatedTime && (
              <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Result:</p>
                  <p className="text-3xl font-bold text-blue-600 mb-1">
                    {formatTime(calculatedTime)}
                  </p>
                  <p className="text-lg text-gray-700">
                    {formatDate(calculatedTime)}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="mb-8 text-center">
          <h4 className="text-gray-600 mb-4">Try Related Hours Tools: <a href="/days-from-today" className="text-blue-600 hover:text-blue-800 font-medium">Days From Today</a>, <a href="/time-calculator" className="text-blue-600 hover:text-blue-800 font-medium">Time Calculator</a></h4>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
            <h2 className="text-2xl font-bold text-white text-center">Hours From Now Chart   {formatTime(currentTime)}</h2>
            <p className="text-blue-50 text-sm mt-1 text-center">Below X hours added to current time </p>
            
          </div>
<HoursFromNowTable/>
          {/* <div className="overflow-x-auto">
            <div className="max-h-[600px] overflow-y-auto">
              <table className="w-full">
                <thead className="bg-gray-50 sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                      Hours
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                      Time
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {timeEntries.map((entry, index) => (
                    <tr
                      key={entry.hours}
                      className={`hover:bg-blue-50 transition-colors ${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                      }`}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">
                        {entry.label}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                        {formatTime(entry.futureTime)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatShortDate(entry.futureTime)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div> */}

        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white border-2 border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <Calendar className="w-6 h-6 text-blue-500 mr-2" />
                Days From Now Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Calculate what the date will be any number of days from now. Perfect for planning future events and deadlines.
              </p>
              <a
                href="/days-from-now"
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                Try Days Calculator
              </a>
            </div>
          </Card>

          <Card className="bg-white border-2 border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                <Clock className="w-6 h-6 text-blue-500 mr-2" />
                Time Duration Calculator
              </h3>
              <p className="text-gray-600 mb-4">
                Calculate the duration between two dates and times. Get precise time differences in days, hours, and minutes.
              </p>
              <a
                href="/time-duration-calculator"
                className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all"
              >
                Try Duration Calculator
              </a>
            </div>
          </Card>
        </div>

        <div className="mt-12">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-sm">
              <HoursFromNowPage/>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Card className="inline-block p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Live Updates:</span> This Hours from now calculator refreshes every second to show accurate times.
              <br />
              All times are displayed in your local timezone: <span className="font-semibold text-blue-600">{timezone}</span>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
