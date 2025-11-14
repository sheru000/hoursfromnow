import React from "react";

function formatShortDate(date: Date) {
  return date.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
}

function getDayOfWeek(date: Date) {
  return date.toLocaleDateString([], { weekday: "long" });
}

// STATIC SEO KEYWORDS (52 entries)
const STATIC_WEEKS_KEYWORDS = [
  "1 week from today", "2 weeks from today", "3 weeks from today", "4 weeks from today",
  "5 weeks from today", "6 weeks from today", "7 weeks from today", "8 weeks from today",
  "9 weeks from today", "10 weeks from today", "11 weeks from today", "12 weeks from today",
  "13 weeks from today", "14 weeks from today", "15 weeks from today", "16 weeks from today",
  "17 weeks from today", "18 weeks from today", "19 weeks from today", "20 weeks from today",
  "21 weeks from today", "22 weeks from today", "23 weeks from today", "24 weeks from today",
  "25 weeks from today", "26 weeks from today", "27 weeks from today", "28 weeks from today",
  "29 weeks from today", "30 weeks from today", "31 weeks from today", "32 weeks from today",
  "33 weeks from today", "34 weeks from today", "35 weeks from today", "36 weeks from today",
  "37 weeks from today", "38 weeks from today", "39 weeks from today", "40 weeks from today",
  "41 weeks from today", "42 weeks from today", "43 weeks from today", "44 weeks from today",
  "45 weeks from today", "46 weeks from today", "47 weeks from today", "48 weeks from today",
  "49 weeks from today", "50 weeks from today", "51 weeks from today", "52 weeks from today"
];

export default function WeeksFromTodayTable() {
  const baseDate = new Date();

  const dynamicWeeks = STATIC_WEEKS_KEYWORDS.map((label, i) => {
    const futureDate = new Date(baseDate);
    futureDate.setDate(futureDate.getDate() + (i + 1) * 7);

    return {
      label,
      date: formatShortDate(futureDate),
      dayName: getDayOfWeek(futureDate),
      index: i,
    };
  });

  return (
    <div className="overflow-x-auto">
      <div className="max-h-[600px] overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                Weeks From Today
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
            {dynamicWeeks.map((entry) => (
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
