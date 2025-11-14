import React from "react";

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatShortDate(date: Date) {
  return date.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
}

// STATIC SEO KEYWORDS (100 entries)
// STATIC SEO KEYWORDS (100 entries)
const STATIC_HOURS_KEYWORDS = [
  "1 hour from now", "2 hours from now", "3 hours from now", "4 hours from now",
  "5 hours from now", "6 hours from now", "7 hours from now", "8 hours from now",
  "9 hours from now", "10 hours from now", "11 hours from now", "12 hours from now",
  "13 hours from now", "14 hours from now", "15 hours from now", "16 hours from now",
  "17 hours from now", "18 hours from now", "19 hours from now", "20 hours from now",
  "21 hours from now", "22 hours from now", "23 hours from now", "24 hours from now",
  "25 hours from now", "26 hours from now", "27 hours from now", "28 hours from now",
  "29 hours from now", "30 hours from now", "31 hours from now", "32 hours from now",
  "33 hours from now", "34 hours from now", "35 hours from now", "36 hours from now",
  "37 hours from now", "38 hours from now", "39 hours from now", "40 hours from now",
  "41 hours from now", "42 hours from now", "43 hours from now", "44 hours from now",
  "45 hours from now", "46 hours from now", "47 hours from now", "48 hours from now",
  "49 hours from now", "50 hours from now", "51 hours from now", "52 hours from now",
  "53 hours from now", "54 hours from now", "55 hours from now", "56 hours from now",
  "57 hours from now", "58 hours from now", "59 hours from now", "60 hours from now",
  "61 hours from now", "62 hours from now", "63 hours from now", "64 hours from now",
  "65 hours from now", "66 hours from now", "67 hours from now", "68 hours from now",
  "69 hours from now", "70 hours from now", "71 hours from now", "72 hours from now",
  "73 hours from now", "74 hours from now", "75 hours from now", "76 hours from now",
  "77 hours from now", "78 hours from now", "79 hours from now", "80 hours from now",
  "81 hours from now", "82 hours from now", "83 hours from now", "84 hours from now",
  "85 hours from now", "86 hours from now", "87 hours from now", "88 hours from now",
  "89 hours from now", "90 hours from now", "91 hours from now", "92 hours from now",
  "93 hours from now", "94 hours from now", "95 hours from now", "96 hours from now",
  "97 hours from now", "98 hours from now", "99 hours from now", "100 hours from now"
];


export default function HoursFromNowTable() {
  const baseTime = new Date();

  const dynamicTimes = STATIC_HOURS_KEYWORDS.map((label, i) => {
    const futureTime = new Date(baseTime);
    futureTime.setHours(futureTime.getHours() + (i + 1));

    return {
      label,
      time: formatTime(futureTime),
      date: formatShortDate(futureTime),
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
                Hours From Now
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
            {dynamicTimes.map((entry) => (
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
                  {entry.time}
                </td>

                <td className="px-6 py-4 text-sm text-gray-600">
                  {entry.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
