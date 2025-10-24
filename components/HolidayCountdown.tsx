'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { getHolidays, getTimeUntil, type Holiday } from '@/lib/holidays';
import { Calendar, Clock } from 'lucide-react';

export default function HolidayCountdown() {
  const [holidays, setHolidays] = useState<Holiday[]>([]);
  const [countdowns, setCountdowns] = useState<Record<string, { days: number; hours: number; minutes: number; seconds: number }>>({});

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const allHolidays = getHolidays(currentYear);
    setHolidays(allHolidays);

    let rafId: number;
    let lastUpdate = Date.now();

    const updateCountdowns = () => {
      const now = Date.now();
      if (now - lastUpdate >= 1000) {
        const newCountdowns: Record<string, { days: number; hours: number; minutes: number; seconds: number }> = {};
        allHolidays.forEach(holiday => {
          newCountdowns[holiday.id] = getTimeUntil(holiday.date);
        });
        setCountdowns(newCountdowns);
        lastUpdate = now;
      }
      rafId = requestAnimationFrame(updateCountdowns);
    };

    rafId = requestAnimationFrame(updateCountdowns);

    return () => cancelAnimationFrame(rafId);
  }, []);

  const scrollToHoliday = (id: string) => {
    const element = document.getElementById(`content-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-4 shadow-lg">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3">
            Holiday Countdown Calendar
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Track how many days until your favorite holidays. Never miss an important celebration!
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Federal Holidays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidays.filter(h => h.category === 'federal').map((holiday) => {
              const countdown = countdowns[holiday.id] || { days: 0, hours: 0, minutes: 0, seconds: 0 };
              const isPast = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0;

              return (
                <Card
                  key={holiday.id}
                  id={holiday.id}
                  className="relative overflow-hidden bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl cursor-pointer group"
                  onClick={() => scrollToHoliday(holiday.id)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-bl-full"></div>

                  <div className="p-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl mb-2">{holiday.emoji}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isPast ? 'bg-gray-100 text-gray-600' : 'bg-blue-100 text-blue-600'
                      }`}>
                        {holiday.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {holiday.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{holiday.description}</p>

                    {!isPast ? (
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-4">
                        <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 mb-2">
                          <Clock className="w-4 h-4" />
                          <span>Time Remaining</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{countdown.days}</div>
                            <div className="text-xs text-gray-500">Days</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{countdown.hours}</div>
                            <div className="text-xs text-gray-500">Hours</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{countdown.minutes}</div>
                            <div className="text-xs text-gray-500">Mins</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{countdown.seconds}</div>
                            <div className="text-xs text-gray-500">Secs</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-100 rounded-lg p-4 text-center">
                        <p className="text-gray-600 font-medium">This holiday has passed</p>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Cultural & Popular Holidays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidays.filter(h => h.category === 'cultural').map((holiday) => {
              const countdown = countdowns[holiday.id] || { days: 0, hours: 0, minutes: 0, seconds: 0 };
              const isPast = countdown.days === 0 && countdown.hours === 0 && countdown.minutes === 0 && countdown.seconds === 0;

              return (
                <Card
                  key={holiday.id}
                  id={holiday.id}
                  className="relative overflow-hidden bg-white border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl cursor-pointer group"
                  onClick={() => scrollToHoliday(holiday.id)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-bl-full"></div>

                  <div className="p-6 relative">
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl mb-2">{holiday.emoji}</div>
                      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        isPast ? 'bg-gray-100 text-gray-600' : 'bg-cyan-100 text-cyan-600'
                      }`}>
                        {holiday.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-cyan-600 transition-colors">
                      {holiday.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">{holiday.description}</p>

                    {!isPast ? (
                      <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-4">
                        <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 mb-2">
                          <Clock className="w-4 h-4" />
                          <span>Time Remaining</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-600">{countdown.days}</div>
                            <div className="text-xs text-gray-500">Days</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-600">{countdown.hours}</div>
                            <div className="text-xs text-gray-500">Hours</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-600">{countdown.minutes}</div>
                            <div className="text-xs text-gray-500">Mins</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-600">{countdown.seconds}</div>
                            <div className="text-xs text-gray-500">Secs</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="bg-gray-100 rounded-lg p-4 text-center">
                        <p className="text-gray-600 font-medium">This holiday has passed</p>
                      </div>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
