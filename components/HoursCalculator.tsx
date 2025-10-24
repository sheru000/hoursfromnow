'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Clock, ArrowRight, Calculator } from 'lucide-react';
import { calculateHours, calculateAllConversions, getCommonConversions, timeUnits } from '@/lib/hoursCalculator';

export default function HoursCalculator() {
  const [inputValue, setInputValue] = useState<string>('1');
  const [selectedUnit, setSelectedUnit] = useState<string>('day');
  const [result, setResult] = useState<Record<string, number> | null>(null);

  const handleCalculate = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value) || value < 0) {
      return;
    }

    const hours = calculateHours(value, selectedUnit);
    const conversions = calculateAllConversions(hours);
    setResult(conversions);
  };

  const commonConversions = getCommonConversions();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
            <Clock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Hours Calculator
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Calculate how many hours in days, weeks, months, or years. Convert any time unit to hours instantly.
          </p>
        </div>

        <Card className="bg-white shadow-xl border-2 border-blue-100 mb-12">
          <div className="p-8">
            <div className="flex items-center space-x-2 mb-6">
              <Calculator className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Calculate Hours</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="value" className="text-gray-700 font-medium mb-2">
                  Enter Value
                </Label>
                <Input
                  id="value"
                  type="number"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter number"
                  className="text-lg"
                  min="0"
                  step="any"
                />
              </div>

              <div>
                <Label htmlFor="unit" className="text-gray-700 font-medium mb-2">
                  Select Time Unit
                </Label>
                <select
                  id="unit"
                  value={selectedUnit}
                  onChange={(e) => setSelectedUnit(e.target.value)}
                  className="w-full px-4 py-2 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                >
                  {timeUnits.filter(u => u.id !== 'hour').map(unit => (
                    <option key={unit.id} value={unit.id}>
                      {unit.pluralName}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <Button
              onClick={handleCalculate}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl text-lg"
            >
              <Calculator className="w-5 h-5 mr-2" />
              Calculate Hours
            </Button>

            {result && (
              <div className="mt-8 space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-6 text-white shadow-lg">
                  <div className="text-center">
                    <p className="text-lg opacity-90 mb-2">Total Hours</p>
                    <p className="text-5xl font-bold">{result.hours.toLocaleString()}</p>
                    <p className="text-lg opacity-90 mt-2">hours</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Days</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {result.days.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Weeks</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {result.weeks.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Months</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {result.months.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-4 border border-blue-200">
                    <p className="text-sm text-gray-600 mb-1">Years</p>
                    <p className="text-2xl font-bold text-blue-600">
                      {result.years.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Common Hour Conversions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {commonConversions.map((conversion, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer"
                onClick={() => {
                  setInputValue(conversion.value.toString());
                  setSelectedUnit(conversion.value === 1 && conversion.unit === 'day' ? 'day' : conversion.value === 365 ? 'day' : conversion.unit === 'year' ? 'year' : 'day');
                  handleCalculate();
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-blue-600">{conversion.value}</span>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                    <span className="text-2xl font-bold text-cyan-600">{conversion.hours.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-gray-600 text-center">{conversion.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
          <div className="p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-blue-600" />
              Quick Reference Guide
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 mb-2">Basic Conversions:</h4>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>1 Day =</span>
                    <span className="font-semibold">24 hours</span>
                  </p>
                  <p className="flex justify-between">
                    <span>1 Week =</span>
                    <span className="font-semibold">168 hours</span>
                  </p>
                  <p className="flex justify-between">
                    <span>1 Month (avg) =</span>
                    <span className="font-semibold">730 hours</span>
                  </p>
                  <p className="flex justify-between">
                    <span>1 Year =</span>
                    <span className="font-semibold">8,760 hours</span>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-700 mb-2">Common Calculations:</h4>
                <div className="space-y-2 text-gray-600">
                  <p className="flex justify-between">
                    <span>Work Week =</span>
                    <span className="font-semibold">40 hours</span>
                  </p>
                  <p className="flex justify-between">
                    <span>2 Weeks =</span>
                    <span className="font-semibold">336 hours</span>
                  </p>
                  <p className="flex justify-between">
                    <span>30 Days =</span>
                    <span className="font-semibold">720 hours</span>
                  </p>
                  <p className="flex justify-between">
                    <span>90 Days =</span>
                    <span className="font-semibold">2,160 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
