import React from "react";

interface DurationExample {
  scenario: string;
  startTime: string;
  endTime: string;
  duration: string;
}

export default function TimeDurationTable() {
  const examples: DurationExample[] = [
    {
      scenario: "Morning work shift",
      startTime: "9:00 AM",
      endTime: "5:00 PM",
      duration: "8 hours"
    },
    {
      scenario: "Half work day",
      startTime: "9:00 AM",
      endTime: "1:00 PM",
      duration: "4 hours"
    },
    {
      scenario: "Evening shift",
      startTime: "5:00 PM",
      endTime: "1:00 AM",
      duration: "8 hours"
    },
    {
      scenario: "Night shift",
      startTime: "11:00 PM",
      endTime: "7:00 AM",
      duration: "8 hours"
    },
    {
      scenario: "Lunch break",
      startTime: "12:00 PM",
      endTime: "1:00 PM",
      duration: "1 hour"
    },
    {
      scenario: "Short meeting",
      startTime: "10:00 AM",
      endTime: "10:30 AM",
      duration: "30 minutes"
    },
    {
      scenario: "Movie duration",
      startTime: "7:00 PM",
      endTime: "9:30 PM",
      duration: "2 hours 30 minutes"
    },
    {
      scenario: "Full day shift",
      startTime: "8:00 AM",
      endTime: "8:00 PM",
      duration: "12 hours"
    },
    {
      scenario: "Extended work day",
      startTime: "7:00 AM",
      endTime: "7:00 PM",
      duration: "12 hours"
    },
    {
      scenario: "Business hours",
      startTime: "9:00 AM",
      endTime: "6:00 PM",
      duration: "9 hours"
    },
    {
      scenario: "Coffee break",
      startTime: "3:00 PM",
      endTime: "3:15 PM",
      duration: "15 minutes"
    },
    {
      scenario: "Gym session",
      startTime: "6:00 AM",
      endTime: "7:30 AM",
      duration: "1 hour 30 minutes"
    },
    {
      scenario: "Commute time",
      startTime: "8:00 AM",
      endTime: "8:45 AM",
      duration: "45 minutes"
    },
    {
      scenario: "Class period",
      startTime: "10:00 AM",
      endTime: "11:50 AM",
      duration: "1 hour 50 minutes"
    },
    {
      scenario: "Sleep duration",
      startTime: "11:00 PM",
      endTime: "7:00 AM",
      duration: "8 hours"
    },
    {
      scenario: "Project sprint",
      startTime: "9:00 AM",
      endTime: "12:00 PM",
      duration: "3 hours"
    },
    {
      scenario: "Conference call",
      startTime: "2:00 PM",
      endTime: "3:00 PM",
      duration: "1 hour"
    },
    {
      scenario: "Overtime work",
      startTime: "5:00 PM",
      endTime: "8:00 PM",
      duration: "3 hours"
    },
    {
      scenario: "Flight duration",
      startTime: "10:00 AM",
      endTime: "2:30 PM",
      duration: "4 hours 30 minutes"
    },
    {
      scenario: "Study session",
      startTime: "7:00 PM",
      endTime: "10:00 PM",
      duration: "3 hours"
    },
    {
      scenario: "Dinner preparation",
      startTime: "5:30 PM",
      endTime: "7:00 PM",
      duration: "1 hour 30 minutes"
    },
    {
      scenario: "Morning routine",
      startTime: "6:30 AM",
      endTime: "8:00 AM",
      duration: "1 hour 30 minutes"
    },
    {
      scenario: "Team stand-up",
      startTime: "9:15 AM",
      endTime: "9:30 AM",
      duration: "15 minutes"
    },
    {
      scenario: "Webinar session",
      startTime: "1:00 PM",
      endTime: "2:30 PM",
      duration: "1 hour 30 minutes"
    },
    {
      scenario: "Delivery window",
      startTime: "10:00 AM",
      endTime: "2:00 PM",
      duration: "4 hours"
    }
  ];

  return (
    <div className="overflow-x-auto">
      <div className="max-h-[600px] overflow-y-auto">
        <table className="w-full">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                Scenario
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                Start Time
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                End Time
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200">
                Duration
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {examples.map((example, index) => (
              <tr
                key={index}
                className={`hover:bg-blue-50 transition-colors ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {example.scenario}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {example.startTime}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {example.endTime}
                </td>
                <td className="px-6 py-4 text-sm font-semibold text-blue-600">
                  {example.duration}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
