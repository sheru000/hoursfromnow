import React from "react";
import { addMonths, format } from "date-fns";

function formatShortDate(date: Date) {
  return format(date, "MMM dd, yyyy");
}

function formatDayOfWeek(date: Date) {
  return format(date, "EEEE");
}

// STATIC SEO KEYWORDS (50 entries)
const STATIC_MONTHS_KEYWORDS = [
  "1 month from today", "2 months from today", "3 months from today", "4 months from today",
  "5 months from today", "6 months from today", "7 months from today", "8 months from today",
  "9 months from today", "10 months from today", "11 months from today", "12 months from today",
  "13 months from today", "14 months from today", "15 months from today", "16 months from today",
  "17 months from today", "18 months from today", "19 months from today", "20 months from today",
  "21 months from today", "22 months from today", "23 months from today", "24 months from today",
  "25 months from today", "26 months from today", "27 months from today", "28 months from today",
  "29 months from today", "30 months from today", "31 months from today", "32 months from today",
  "33 months from today", "34 months from today", "35 months from today", "36 months from today",
  "37 months from today", "38 months from today", "39 months from today", "40 months from today",
  "41 months from today", "42 months from today", "43 months from today", "44 months from today",
  "45 months from today", "46 months from today", "47 months from today", "48 months from today",
  "49 months from today", "50 months from today"
];

export default function MonthsFromTodayTable() {
  const baseDate = new Date();

  const dynamicMonths = STATIC_MONTHS_KEYWORDS.map((label, i) => {
    const futureDate = addMonths(baseDate, i + 1);

    return {
      label,
      date: formatShortDate(futureDate),
      dayName: formatDayOfWeek(futureDate),
      index: i,
    };
  });

  return (
    <div className="overflow-x-auto content-visibility-auto">
      <div className="max-h-[600px] overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                Months From Today
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                Day of Week
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {dynamicMonths.map((entry) => (
              <tr
                key={entry.label}
                className={`hover:bg-blue-50 transition-colors ${
                  entry.index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {entry.label}
                </td>

                <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                  {entry.date}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {entry.dayName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
