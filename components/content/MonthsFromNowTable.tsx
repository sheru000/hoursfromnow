import React from "react";
import { addMonths, format } from "date-fns";

function formatShortDate(date: Date) {
  return format(date, "MMM dd, yyyy");
}

function formatDayOfWeek(date: Date) {
  return format(date, "EEEE");
}

interface MonthEntry {
  months: number;
  label: string;
  futureDate: Date;
}

export default function MonthsFromNowTable() {
  const baseTime = new Date();
  const monthEntries: MonthEntry[] = Array.from({ length: 50 }).map((_, i) => {
    const futureDate = addMonths(baseTime, i + 1);
    return {
      months: i + 1,
      label: `${i + 1} month${i + 1 === 1 ? "" : "s"} from now`,
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
                Months
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
            {monthEntries.map((entry, index) => (
              <tr
                key={entry.months}
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
                  {formatDayOfWeek(entry.futureDate)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
