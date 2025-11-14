import React from "react";

function formatShortDate(date: Date) {
  return date.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function getDayOfWeek(date: Date) {
  return date.toLocaleDateString([], { weekday: "long" });
}

// STATIC SEO KEYWORDS (100 entries)
const STATIC_DAYS_KEYWORDS = [
  "1 day from today", "2 days from today", "3 days from today", "4 days from today",
  "5 days from today", "6 days from today", "7 days from today", "8 days from today",
  "9 days from today", "10 days from today", "11 days from today", "12 days from today",
  "13 days from today", "14 days from today", "15 days from today", "16 days from today",
  "17 days from today", "18 days from today", "19 days from today", "20 days from today",
  "21 days from today", "22 days from today", "23 days from today", "24 days from today",
  "25 days from today", "26 days from today", "27 days from today", "28 days from today",
  "29 days from today", "30 days from today", "31 days from today", "32 days from today",
  "33 days from today", "34 days from today", "35 days from today", "36 days from today",
  "37 days from today", "38 days from today", "39 days from today", "40 days from today",
  "41 days from today", "42 days from today", "43 days from today", "44 days from today",
  "45 days from today", "46 days from today", "47 days from today", "48 days from today",
  "49 days from today", "50 days from today", "51 days from today", "52 days from today",
  "53 days from today", "54 days from today", "55 days from today", "56 days from today",
  "57 days from today", "58 days from today", "59 days from today", "60 days from today",
  "61 days from today", "62 days from today", "63 days from today", "64 days from today",
  "65 days from today", "66 days from today", "67 days from today", "68 days from today",
  "69 days from today", "70 days from today", "71 days from today", "72 days from today",
  "73 days from today", "74 days from today", "75 days from today", "76 days from today",
  "77 days from today", "78 days from today", "79 days from today", "80 days from today",
  "81 days from today", "82 days from today", "83 days from today", "84 days from today",
  "85 days from today", "86 days from today", "87 days from today", "88 days from today",
  "89 days from today", "90 days from today", "91 days from today", "92 days from today",
  "93 days from today", "94 days from today", "95 days from today", "96 days from today",
  "97 days from today", "98 days from today", "99 days from today", "100 days from today"
];


export default function DaysFromNowTable() {
  const baseDate = new Date();

  const dynamicDates = STATIC_DAYS_KEYWORDS.map((label, i) => {
    const futureDate = new Date(baseDate);
    futureDate.setDate(futureDate.getDate() + (i + 1));

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
                Days From Now
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
            {dynamicDates.map((entry) => (
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
