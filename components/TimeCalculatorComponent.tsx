'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Calculator, Plus, Minus } from 'lucide-react';
import TimeCalculatorContent from '@/components/content/TimeCalculatorContent';

export default function TimeCalculatorComponent() {
  const [operation, setOperation] = useState<'add' | 'subtract'>('add');
  const [time1Days, setTime1Days] = useState<string>('');
  const [time1Hours, setTime1Hours] = useState<string>('');
  const [time1Minutes, setTime1Minutes] = useState<string>('');
  const [time1Seconds, setTime1Seconds] = useState<string>('');
  const [time2Days, setTime2Days] = useState<string>('');
  const [time2Hours, setTime2Hours] = useState<string>('');
  const [time2Minutes, setTime2Minutes] = useState<string>('');
  const [time2Seconds, setTime2Seconds] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const calculateTime = () => {
    const days1 = parseInt(time1Days) || 0;
    const hours1 = parseInt(time1Hours) || 0;
    const minutes1 = parseInt(time1Minutes) || 0;
    const seconds1 = parseInt(time1Seconds) || 0;

    const days2 = parseInt(time2Days) || 0;
    const hours2 = parseInt(time2Hours) || 0;
    const minutes2 = parseInt(time2Minutes) || 0;
    const seconds2 = parseInt(time2Seconds) || 0;

    const totalSeconds1 = days1 * 86400 + hours1 * 3600 + minutes1 * 60 + seconds1;
    const totalSeconds2 = days2 * 86400 + hours2 * 3600 + minutes2 * 60 + seconds2;

    let resultSeconds = operation === 'add'
      ? totalSeconds1 + totalSeconds2
      : totalSeconds1 - totalSeconds2;

    const isNegative = resultSeconds < 0;
    resultSeconds = Math.abs(resultSeconds);

    const days = Math.floor(resultSeconds / 86400);
    const hours = Math.floor((resultSeconds % 86400) / 3600);
    const minutes = Math.floor((resultSeconds % 3600) / 60);
    const seconds = resultSeconds % 60;

    const parts = [];
    if (days > 0) parts.push(`${days} day${days !== 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} hour${hours !== 1 ? 's' : ''}`);
    if (minutes > 0) parts.push(`${minutes} minute${minutes !== 1 ? 's' : ''}`);
    if (seconds > 0) parts.push(`${seconds} second${seconds !== 1 ? 's' : ''}`);

    const resultText = parts.length > 0 ? parts.join(', ') : '0 seconds';
    setResult(isNegative ? `-${resultText}` : resultText);
  };

  const clearAll = () => {
    setTime1Days('');
    setTime1Hours('');
    setTime1Minutes('');
    setTime1Seconds('');
    setTime2Days('');
    setTime2Hours('');
    setTime2Minutes('');
    setTime2Seconds('');
    setResult('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Time Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Add or subtract time values with our easy-to-use calculator. Perfect for time tracking and scheduling.
          </p>
        </div>

        <Card className="bg-white border-2 border-blue-100 shadow-xl mb-8">
          <div className="p-8">
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

            <div className="space-y-8">
              <div>
                <Label className="text-base font-semibold text-gray-800 mb-3 block">
                  Time 1
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Label className="text-sm text-gray-600 mb-1 block">Days</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={time1Days}
                      onChange={(e) => setTime1Days(e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600 mb-1 block">Hours</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={time1Hours}
                      onChange={(e) => setTime1Hours(e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600 mb-1 block">Minutes</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={time1Minutes}
                      onChange={(e) => setTime1Minutes(e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600 mb-1 block">Seconds</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={time1Seconds}
                      onChange={(e) => setTime1Seconds(e.target.value)}
                      className="text-center"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  {operation === 'add' ? '+' : '-'}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold text-gray-800 mb-3 block">
                  Time 2
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <Label className="text-sm text-gray-600 mb-1 block">Days</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={time2Days}
                      onChange={(e) => setTime2Days(e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600 mb-1 block">Hours</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={time2Hours}
                      onChange={(e) => setTime2Hours(e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600 mb-1 block">Minutes</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={time2Minutes}
                      onChange={(e) => setTime2Minutes(e.target.value)}
                      className="text-center"
                    />
                  </div>
                  <div>
                    <Label className="text-sm text-gray-600 mb-1 block">Seconds</Label>
                    <Input
                      type="number"
                      min="0"
                      placeholder="0"
                      value={time2Seconds}
                      onChange={(e) => setTime2Seconds(e.target.value)}
                      className="text-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              <Button
                onClick={calculateTime}
                className="flex-1 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-lg font-semibold"
              >
                Calculate
              </Button>
              <Button
                onClick={clearAll}
                variant="outline"
                className="h-12 px-8"
              >
                Clear
              </Button>
            </div>

            {result && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border-2 border-blue-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2 font-medium">Result:</p>
                  <p className="text-3xl font-bold text-blue-600">
                    {result}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 shadow-lg">
          <div className="p-8">
           <TimeCalculatorContent/>
          </div>
        </Card>
      </div>
    </div>
  );
}
