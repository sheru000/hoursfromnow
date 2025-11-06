export interface TimeUnit {
  id: string;
  name: string;
  pluralName: string;
  hours: number;
}

export const timeUnits: TimeUnit[] = [
  { id: 'hour', name: 'Hour', pluralName: 'Hours', hours: 1 },
  { id: 'day', name: 'Day', pluralName: 'Days', hours: 24 },
  { id: 'week', name: 'Week', pluralName: 'Weeks', hours: 168 },
  { id: 'month', name: 'Month', pluralName: 'Months', hours: 730 },
  { id: 'year', name: 'Year', pluralName: 'Years', hours: 8760 },
];

export function calculateHours(value: number, unitId: string): number {
  const unit = timeUnits.find(u => u.id === unitId);
  if (!unit) return 0;
  return value * unit.hours;
}

export function convertHoursTo(hours: number, targetUnitId: string): number {
  const unit = timeUnits.find(u => u.id === targetUnitId);
  if (!unit) return 0;
  return hours / unit.hours;
}

export function calculateAllConversions(hours: number): Record<string, number> {
  return {
    hours: hours,
    days: hours / 24,
    weeks: hours / 168,
    months: hours / 730,
    years: hours / 8760,
  };
}

export interface ConversionExample {
  value: number;
  unit: string;
  hours: number;
  description: string;
}

export function getCommonConversions(): ConversionExample[] {
  return [
    { value: 1, unit: 'day', hours: 24, description: 'One day contains 24 hours' },
    { value: 2, unit: 'days', hours: 48, description: 'Two days equal 48 hours' },
    { value: 3, unit: 'days', hours: 72, description: 'Three days equal 72 hours' },
    { value: 7, unit: 'days', hours: 168, description: 'One week has 168 hours' },
    { value: 14, unit: 'days', hours: 336, description: 'Two weeks have 336 hours' },
    { value: 30, unit: 'days', hours: 720, description: 'Thirty days have 720 hours' },
    { value: 1, unit: 'year', hours: 8760, description: 'One year contains 8,760 hours' },
    { value: 365, unit: 'days', hours: 8760, description: '365 days equal 8,760 hours' },
  ];
}
