import React from "react";

function formatTime(date: Date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function formatShortDate(date: Date) {
  return date.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
}

interface TimeEntry {
  hours: number;
  label: string;
  pastTime: Date;
}

export default function HoursAgoTable() {
  const baseTime = new Date();
  const timeEntries: TimeEntry[] = Array.from({ length: 100 }).map((_, i) => {
    const pastTime = new Date(baseTime);
    pastTime.setHours(pastTime.getHours() - (i + 1));
    return {
      hours: i + 1,
      label: `${i + 1} hour${i + 1 === 1 ? "" : "s"} ago`,
      pastTime,
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
            {timeEntries.map((entry, index) => (
              <tr
                key={entry.hours}
                className={`hover:bg-blue-50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {entry.label}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                  {formatTime(entry.pastTime)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {formatShortDate(entry.pastTime)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
