import React from "react";

function formatShortDate(date: Date) {
  return date.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" });
}

function getDayOfWeek(date: Date) {
  return date.toLocaleDateString([], { weekday: "long" });
}

interface WeekEntry {
  weeks: number;
  label: string;
  futureDate: Date;
}

export default function WeeksFromNowTable() {
  const baseDate = new Date();
  const weekEntries: WeekEntry[] = Array.from({ length: 52 }).map((_, i) => {
    const futureDate = new Date(baseDate);
    futureDate.setDate(futureDate.getDate() + ((i + 1) * 7));
    return {
      weeks: i + 1,
      label: `${i + 1} week${i + 1 === 1 ? "" : "s"} from now`,
      futureDate,
    };
  });

  return (
    <div className="overflow-x-auto">
      <div className="max-h-[600px] overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                Weeks From Now
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
            {weekEntries.map((entry, index) => (
              <tr
                key={entry.weeks}
                className={`hover:bg-blue-50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {entry.label}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                  {formatShortDate(entry.futureDate)}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {getDayOfWeek(entry.futureDate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
