import React from "react";

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatShortDate(date: Date) {
  return date.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
}

// STATIC SEO KEYWORDS (100 entries)
const STATIC_HOURS_AGO_KEYWORDS = [
  "1 hour ago", "2 hours ago", "3 hours ago", "4 hours ago", "5 hours ago", "6 hours ago", " what time was it 7 hours ago", "what time was it 8 hours ago",
  "what time was it 9 hours ago", "10 hours ago", "what time was it 11 hours ago", "what time was it 12 hours ago", "what time was it 13 hours ago", "14 hours ago", "what time was it 15 hours ago", "16 hours ago",
  "what time was it 17 hours ago", "18 hours ago", "19 hours ago", "20 hours ago", "21 hours ago", "22 hours ago", "23 hours ago", "24 hours ago",
  "25 hours ago", "26 hours ago", "27 hours ago", "28 hours ago", "29 hours ago", "30 hours ago", "31 hours ago", "32 hours ago",
  "33 hours ago", "34 hours ago", "35 hours ago", "36 hours ago", "37 hours ago", "38 hours ago", "39 hours ago", "40 hours ago",
  "41 hours ago", "42 hours ago", "43 hours ago", "44 hours ago", "45 hours ago", "46 hours ago", "47 hours ago", "48 hours ago",
  "49 hours ago", "50 hours ago", "51 hours ago", "52 hours ago", "53 hours ago", "54 hours ago", "55 hours ago", "56 hours ago",
  "57 hours ago", "58 hours ago", "59 hours ago", "60 hours ago", "61 hours ago", "62 hours ago", "63 hours ago", "64 hours ago",
  "65 hours ago", "66 hours ago", "67 hours ago", "68 hours ago", "69 hours ago", "70 hours ago", "71 hours ago", "72 hours ago",
  "73 hours ago", "74 hours ago", "75 hours ago", "76 hours ago", "77 hours ago", "78 hours ago", "79 hours ago", "80 hours ago",
  "81 hours ago", "82 hours ago", "83 hours ago", "84 hours ago", "85 hours ago", "86 hours ago", "87 hours ago", "88 hours ago",
  "89 hours ago", "90 hours ago", "91 hours ago", "92 hours ago", "93 hours ago", "94 hours ago", "95 hours ago", "96 hours ago",
  "97 hours ago", "98 hours ago", "99 hours ago", "100 hours ago"
];

export default function HoursAgoTable() {
  const baseTime = new Date();

  const dynamicHours = STATIC_HOURS_AGO_KEYWORDS.map((label, i) => {
    const pastTime = new Date(baseTime);
    pastTime.setHours(pastTime.getHours() - (i + 1));

    return {
      label,
      time: formatTime(pastTime),
      date: formatShortDate(pastTime),
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
                Hours Ago
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
            {dynamicHours.map((entry) => (
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
