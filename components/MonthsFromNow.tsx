'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Clock, Calendar as CalendarIcon, Calculator, Plus, Minus } from 'lucide-react';
import MonthsFromNowTable from '@/components/content/MonthsFromNowTable';
import MonthsFromNowContent from '@/components/content/MonthsFromNowContent';
import { format, addMonths } from 'date-fns';

export default function MonthsFromNow() {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [timezone, setTimezone] = useState<string>('');
  const [manualMonths, setManualMonths] = useState<string>('');
  const [calculatedDate, setCalculatedDate] = useState<Date | null>(null);

  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');
  const [adjustMonths, setAdjustMonths] = useState<string>('');
  const [adjustDays, setAdjustDays] = useState<string>('');
  const [adjustHours, setAdjustHours] = useState<string>('');
  const [adjustMinutes, setAdjustMinutes] = useState<string>('');
  const [adjustSeconds, setAdjustSeconds] = useState<string>('');
  const [adjustedResult, setAdjustedResult] = useState<Date | null>(null);

  useEffect(() => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setTimezone(tz);

    let rafId: number;
    let lastUpdate = Date.now();

    const updateTime = () => {
      const now = Date.now();
      if (now - lastUpdate >= 1000) {
        setCurrentTime(new Date());
        lastUpdate = now;
      }
      rafId = requestAnimationFrame(updateTime);
    };

    rafId = requestAnimationFrame(updateTime);

    return () => cancelAnimationFrame(rafId);
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

  const formatShortDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleCalculate = () => {
    const months = parseInt(manualMonths) || 0;
    const result = addMonths(currentTime, months);
    setCalculatedDate(result);
  };

  const handleAdjustFromDate = () => {
    if (!selectedDate) return;

    const months = parseInt(adjustMonths) || 0;
    const days = parseInt(adjustDays) || 0;
    const hours = parseInt(adjustHours) || 0;
    const minutes = parseInt(adjustMinutes) || 0;
    const seconds = parseInt(adjustSeconds) || 0;

    let result = new Date(selectedDate);

    if (operation === 'add') {
      result = addMonths(result, months);
      result.setDate(result.getDate() + days);
      result.setHours(result.getHours() + hours);
      result.setMinutes(result.getMinutes() + minutes);
      result.setSeconds(result.getSeconds() + seconds);
    } else {
      result = addMonths(result, -months);
      result.setDate(result.getDate() - days);
      result.setHours(result.getHours() - hours);
      result.setMinutes(result.getMinutes() - minutes);
      result.setSeconds(result.getSeconds() - seconds);
    }

    setAdjustedResult(result);
  };

  const formatDateTime = (date: Date) => {
    return {
      date: format(date, 'MMMM dd, yyyy'),
      time: format(date, 'hh:mm:ss a'),
      dayOfWeek: format(date, 'EEEE')
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
            <CalendarIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Months From Now Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Calculate future dates by adding months to today. Perfect for planning, pregnancy tracking, and long-term scheduling.
          </p>
        </div>

        <div className="mb-8">
          <div className="p-6">
            <div className="flex flex-col items-center space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">Current Date & Time ({timezone})</span>
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
              <h2 className="text-2xl font-bold text-gray-800">Calculate Months From Now</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <Label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Months
                </Label>
                <Input
                  type="number"
                  min="0"
                  placeholder="Enter number of months"
                  value={manualMonths}
                  onChange={(e) => setManualMonths(e.target.value)}
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
                  <p className="text-lg text-gray-700 font-medium mb-1">
                    {formatDateTime(calculatedDate).dayOfWeek}
                  </p>
                  <p className="text-3xl font-bold text-blue-600 mb-1">
                    {formatDateTime(calculatedDate).date}
                  </p>
                  <p className="text-lg text-gray-700">
                    {formatDateTime(calculatedDate).time}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        <Card className="mb-8 bg-white border-2 border-blue-100 shadow-xl">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-6">
              <CalendarIcon className="w-6 h-6 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-800">Add or Subtract Time From a Specific Date</h2>
            </div>

            <div className="mb-6">
              <Label className="text-lg font-semibold text-gray-800 mb-3 block">
                Select Operation
              </Label>
              <div className="flex space-x-4">
                <Button
                  onClick={() => setOperation('add')}
                  className={`flex-1 h-12 ${
                    operation === 'add'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add Time
                </Button>
                <Button
                  onClick={() => setOperation('subtract')}
                  className={`flex-1 h-12 ${
                    operation === 'subtract'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Minus className="w-5 h-5 mr-2" />
                  Subtract Time
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <Label className="text-base font-semibold text-gray-800 mb-3 block">
                  Select Date
                </Label>
                <div className="border-2 border-blue-100 rounded-lg p-2 bg-gray-50">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <Label className="text-base font-semibold text-gray-800 mb-3 block">
                    {operation === 'add' ? 'Add Time' : 'Subtract Time'}
                  </Label>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm text-gray-600 mb-1 block">Months</Label>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0"
                          value={adjustMonths}
                          onChange={(e) => setAdjustMonths(e.target.value)}
                          className="text-center"
                        />
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600 mb-1 block">Days</Label>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0"
                          value={adjustDays}
                          onChange={(e) => setAdjustDays(e.target.value)}
                          className="text-center"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label className="text-sm text-gray-600 mb-1 block">Hours</Label>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0"
                          value={adjustHours}
                          onChange={(e) => setAdjustHours(e.target.value)}
                          className="text-center"
                        />
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600 mb-1 block">Minutes</Label>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0"
                          value={adjustMinutes}
                          onChange={(e) => setAdjustMinutes(e.target.value)}
                          className="text-center"
                        />
                      </div>
                      <div>
                        <Label className="text-sm text-gray-600 mb-1 block">Seconds</Label>
                        <Input
                          type="number"
                          min="0"
                          placeholder="0"
                          value={adjustSeconds}
                          onChange={(e) => setAdjustSeconds(e.target.value)}
                          className="text-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    onClick={handleAdjustFromDate}
                    className="w-full h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg font-semibold mb-4"
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Calculate
                  </Button>

                  {adjustedResult && (
                    <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
                      <div className="text-center">
                        <p className="text-sm text-gray-600 mb-2 font-medium">Result:</p>
                        <p className="text-lg text-gray-700 font-medium mb-1">
                          {formatDateTime(adjustedResult).dayOfWeek}
                        </p>
                        <p className="text-2xl font-bold text-blue-600 mb-1">
                          {formatDateTime(adjustedResult).date}
                        </p>
                        <p className="text-lg text-gray-700">
                          {formatDateTime(adjustedResult).time}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Card>

        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-4">
            <h2 className="text-2xl font-bold text-white text-center">Months From Now Table</h2>
            <p className="text-blue-50 text-sm mt-1 text-center">Quick reference for common month calculations</p>
          </div>
          <MonthsFromNowTable />
        </div>

        <div className="mt-12">
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-sm">
            <MonthsFromNowContent />
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Card className="inline-block p-4 bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Live Updates:</span> This calculator refreshes every second to show accurate times.
              <br />
              All times are displayed in your local timezone: <span className="font-semibold text-blue-600">{timezone}</span>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
