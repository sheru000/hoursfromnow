'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Clock, Calendar, Calculator, ArrowLeftRight } from 'lucide-react';
import TimeDurationPage from '@/components/content/TimeDurationPage';
import TimeDurationTable from '@/components/content/TimeDurationTable';

interface DurationResult {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
}

export default function TimeDurationCalculator() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [timezone, setTimezone] = useState<string>('');

  const [startDate, setStartDate] = useState<string>('');
  const [startHour, setStartHour] = useState<string>('');
  const [startMinute, setStartMinute] = useState<string>('');
  const [startSecond, setStartSecond] = useState<string>('0');
  const [startPeriod, setStartPeriod] = useState<string>('AM');

  const [endDate, setEndDate] = useState<string>('');
  const [endHour, setEndHour] = useState<string>('');
  const [endMinute, setEndMinute] = useState<string>('');
  const [endSecond, setEndSecond] = useState<string>('0');
  const [endPeriod, setEndPeriod] = useState<string>('PM');

  const [result, setResult] = useState<DurationResult | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setStartDate(formattedDate);
    setEndDate(formattedDate);

    return () => clearInterval(timer);
  }, []);

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

  const convertTo24Hour = (hour: string, period: string): number => {
    let h = parseInt(hour) || 0;
    if (period === 'PM' && h !== 12) {
      h += 12;
    } else if (period === 'AM' && h === 12) {
      h = 0;
    }
    return h;
  };

  const setToNow = (type: 'start' | 'end') => {
    const now = new Date();
    const formattedDate = now.toISOString().split('T')[0];
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hour12 = hours % 12 || 12;
    const period = hours >= 12 ? 'PM' : 'AM';

    if (type === 'start') {
      setStartDate(formattedDate);
      setStartHour(hour12.toString());
      setStartMinute(minutes.toString());
      setStartSecond(seconds.toString());
      setStartPeriod(period);
    } else {
      setEndDate(formattedDate);
      setEndHour(hour12.toString());
      setEndMinute(minutes.toString());
      setEndSecond(seconds.toString());
      setEndPeriod(period);
    }
  };

  const swapTimes = () => {
    const tempDate = startDate;
    const tempHour = startHour;
    const tempMinute = startMinute;
    const tempSecond = startSecond;
    const tempPeriod = startPeriod;

    setStartDate(endDate);
    setStartHour(endHour);
    setStartMinute(endMinute);
    setStartSecond(endSecond);
    setStartPeriod(endPeriod);

    setEndDate(tempDate);
    setEndHour(tempHour);
    setEndMinute(tempMinute);
    setEndSecond(tempSecond);
    setEndPeriod(tempPeriod);
  };

  const calculateDuration = () => {
    if (!startDate || !endDate || !startHour || !endHour || !startMinute || !endMinute) {
      return;
    }

    const startHour24 = convertTo24Hour(startHour, startPeriod);
    const endHour24 = convertTo24Hour(endHour, endPeriod);

    const start = new Date(startDate);
    start.setHours(startHour24, parseInt(startMinute) || 0, parseInt(startSecond) || 0, 0);

    const end = new Date(endDate);
    end.setHours(endHour24, parseInt(endMinute) || 0, parseInt(endSecond) || 0, 0);

    const diffMs = end.getTime() - start.getTime();

    if (diffMs < 0) {
      alert('End time must be after start time');
      return;
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const days = Math.floor(totalHours / 24);
    const hours = totalHours % 24;
    const minutes = totalMinutes % 60;
    const seconds = totalSeconds % 60;

    setResult({
      days,
      hours,
      minutes,
      seconds,
      totalHours,
      totalMinutes,
      totalSeconds
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Time Duration Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Calculate the duration between two times with precision. Perfect for time tracking and scheduling.
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
              <h2 className="text-2xl font-bold text-gray-800">Calculate Time Duration</h2>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-6 border-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">Start Time</h3>
                  <Button
                    onClick={() => setToNow('start')}
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-300"
                  >
                    Use Now
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <Input
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hour
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max="12"
                      placeholder="12"
                      value={startHour}
                      onChange={(e) => setStartHour(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minute
                    </label>
                    <Input
                      type="number"
                      min="0"
                      max="59"
                      placeholder="00"
                      value={startMinute}
                      onChange={(e) => setStartMinute(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      AM/PM
                    </label>
                    <select
                      value={startPeriod}
                      onChange={(e) => setStartPeriod(e.target.value)}
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  onClick={swapTimes}
                  variant="outline"
                  className="bg-white border-2 border-blue-300 hover:bg-blue-50"
                >
                  <ArrowLeftRight className="w-5 h-5 mr-2" />
                  Swap Times
                </Button>
              </div>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6 border-2 border-blue-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-800">End Time</h3>
                  <Button
                    onClick={() => setToNow('end')}
                    variant="outline"
                    size="sm"
                    className="text-blue-600 border-blue-300"
                  >
                    Use Now
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <Input
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hour
                    </label>
                    <Input
                      type="number"
                      min="1"
                      max="12"
                      placeholder="12"
                      value={endHour}
                      onChange={(e) => setEndHour(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minute
                    </label>
                    <Input
                      type="number"
                      min="0"
                      max="59"
                      placeholder="00"
                      value={endMinute}
                      onChange={(e) => setEndMinute(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      AM/PM
                    </label>
                    <select
                      value={endPeriod}
                      onChange={(e) => setEndPeriod(e.target.value)}
                      className="flex h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-lg ring-offset-background"
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <Button
                onClick={calculateDuration}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white h-12 text-lg"
              >
                Calculate Duration
              </Button>

              {result && (
                <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">Duration Result</h3>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-600">{result.days}</div>
                      <div className="text-sm text-gray-600 mt-1">Days</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-600">{result.hours}</div>
                      <div className="text-sm text-gray-600 mt-1">Hours</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-600">{result.minutes}</div>
                      <div className="text-sm text-gray-600 mt-1">Minutes</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg shadow">
                      <div className="text-3xl font-bold text-blue-600">{result.seconds}</div>
                      <div className="text-sm text-gray-600 mt-1">Seconds</div>
                    </div>
                  </div>

                  <div className="border-t-2 border-blue-200 pt-4">
                    <h4 className="font-semibold text-gray-700 mb-3 text-center">Total Duration</h4>
                    <div className="space-y-2 text-center">
                      <p className="text-gray-700">
                        <span className="font-semibold">{result.totalHours.toLocaleString()}</span> total hours
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">{result.totalMinutes.toLocaleString()}</span> total minutes
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">{result.totalSeconds.toLocaleString()}</span> total seconds
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
         <div className="mb-8 text-center">
          <p className="text-gray-600 mb-4">Try other related tools: <a href="/weeks-from-today" className="text-blue-600 hover:text-blue-800 font-medium">Weeks From Today</a>, <a href="/hours-calculator" className="text-blue-600 hover:text-blue-800 font-medium">Hours Calculator</a></p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
            <h2 className="text-2xl font-bold text-white text-center">Common Time Duration Examples</h2>
            <p className="text-blue-50 text-sm mt-1 text-center">Frequently calculated time intervals</p>
          </div>
          <TimeDurationTable/>
        </div>

        <div className="mt-12">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-sm">
            <TimeDurationPage/>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Card className="inline-block p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Accurate Calculations:</span> This time duration calculator provides precise results across dates and time zones.
              <br />
              All times are displayed in your local timezone: <span className="font-semibold text-blue-600">{timezone}</span>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
