export interface Holiday {
  id: string;
  name: string;
  date: Date;
  emoji: string;
  description: string;
  category: 'federal' | 'cultural';
  searchKeywords: string[];
}

export function getHolidays(year: number): Holiday[] {
  const now = new Date();
  const currentYear = now.getFullYear();

  const holidays: Holiday[] = [
    {
      id: 'new-years-day',
      name: "New Year's Day",
      date: new Date(year, 0, 1),
      emoji: '🎉',
      description: 'Celebrates the start of the new year.',
      category: 'federal',
      searchKeywords: ['how many days until new years', 'days till new years', 'countdown to new year']
    },
    {
      id: 'martin-luther-king-day',
      name: "Martin Luther King Jr. Day",
      date: getNthWeekdayOfMonth(year, 0, 1, 3),
      emoji: '✊',
      description: 'Honors civil rights leader Dr. Martin Luther King Jr.',
      category: 'federal',
      searchKeywords: ['how many days until mlk day', 'days till martin luther king day']
    },
    {
      id: 'valentines-day',
      name: "Valentine's Day",
      date: new Date(year, 1, 14),
      emoji: '❤️',
      description: 'Celebrates love and affection.',
      category: 'cultural',
      searchKeywords: ['how many days until valentines day', 'days till valentine', 'countdown to valentines']
    },
    {
      id: 'presidents-day',
      name: "Presidents' Day",
      date: getNthWeekdayOfMonth(year, 1, 1, 3),
      emoji: '🇺🇸',
      description: 'Celebrates all U.S. presidents, especially George Washington and Abraham Lincoln.',
      category: 'federal',
      searchKeywords: ['how many days until presidents day', 'days till presidents day']
    },
    {
      id: 'st-patricks-day',
      name: "St. Patrick's Day",
      date: new Date(year, 2, 17),
      emoji: '☘️',
      description: 'Irish heritage celebration; parades and green clothing.',
      category: 'cultural',
      searchKeywords: ['how many days until st patricks day', 'days till st patricks day', 'countdown to st patricks']
    },
    {
      id: 'easter-sunday',
      name: 'Easter Sunday',
      date: getEasterDate(year),
      emoji: '✝️',
      description: 'Christian holiday celebrating the resurrection of Jesus.',
      category: 'cultural',
      searchKeywords: ['how many days until easter', 'days till easter', 'countdown to easter']
    },
    {
      id: 'mothers-day',
      name: "Mother's Day",
      date: getNthWeekdayOfMonth(year, 4, 0, 2),
      emoji: '💐',
      description: 'Honors mothers and motherhood.',
      category: 'cultural',
      searchKeywords: ['how many days until mothers day', 'days till mothers day', 'countdown to mothers day']
    },
    {
      id: 'memorial-day',
      name: 'Memorial Day',
      date: getLastWeekdayOfMonth(year, 4, 1),
      emoji: '🎖',
      description: 'Honors military personnel who died in service to the country.',
      category: 'federal',
      searchKeywords: ['how many days until memorial day', 'days till memorial day']
    },
    {
      id: 'fathers-day',
      name: "Father's Day",
      date: getNthWeekdayOfMonth(year, 5, 0, 3),
      emoji: '👔',
      description: 'Honors fathers and fatherhood.',
      category: 'cultural',
      searchKeywords: ['how many days until fathers day', 'days till fathers day', 'countdown to fathers day']
    },
    {
      id: 'juneteenth',
      name: 'Juneteenth National Independence Day',
      date: new Date(year, 5, 19),
      emoji: '🕊',
      description: 'Celebrates the end of slavery in the United States.',
      category: 'federal',
      searchKeywords: ['how many days until juneteenth', 'days till juneteenth']
    },
    {
      id: 'independence-day',
      name: 'Independence Day',
      date: new Date(year, 6, 4),
      emoji: '🎆',
      description: 'Commemorates the Declaration of Independence in 1776.',
      category: 'federal',
      searchKeywords: ['how many days until july 4th', 'days till 4th of july', 'countdown to independence day']
    },
    {
      id: 'labor-day',
      name: 'Labor Day',
      date: getNthWeekdayOfMonth(year, 8, 1, 1),
      emoji: '⚙️',
      description: 'Honors American workers and their contributions.',
      category: 'federal',
      searchKeywords: ['how many days until labor day', 'days till labor day']
    },
    {
      id: 'columbus-day',
      name: 'Columbus Day / Indigenous Peoples\' Day',
      date: getNthWeekdayOfMonth(year, 9, 1, 2),
      emoji: '🌎',
      description: 'Marks Christopher Columbus\'s arrival in the Americas (many now celebrate Indigenous heritage instead).',
      category: 'federal',
      searchKeywords: ['how many days until columbus day', 'days till indigenous peoples day']
    },
    {
      id: 'halloween',
      name: 'Halloween',
      date: new Date(year, 9, 31),
      emoji: '🎃',
      description: 'Costumes, trick-or-treating, spooky celebrations.',
      category: 'cultural',
      searchKeywords: ['how many days until halloween', 'days till halloween', 'countdown to halloween']
    },
    {
      id: 'veterans-day',
      name: 'Veterans Day',
      date: new Date(year, 10, 11),
      emoji: '🎖',
      description: 'Honors all U.S. military veterans.',
      category: 'federal',
      searchKeywords: ['how many days until veterans day', 'days till veterans day']
    },
    {
      id: 'thanksgiving',
      name: 'Thanksgiving Day',
      date: getNthWeekdayOfMonth(year, 10, 4, 4),
      emoji: '🦃',
      description: 'Celebrates gratitude, family, and harvest; major family gathering day.',
      category: 'federal',
      searchKeywords: ['how many days until thanksgiving', 'days till thanksgiving', 'countdown to thanksgiving']
    },
    {
      id: 'black-friday',
      name: 'Black Friday',
      date: new Date(getNthWeekdayOfMonth(year, 10, 4, 4).getTime() + 86400000),
      emoji: '🛍',
      description: 'Major shopping day marking the start of the holiday season.',
      category: 'cultural',
      searchKeywords: ['how many days until black friday', 'days till black friday', 'countdown to black friday']
    },
    {
      id: 'christmas',
      name: 'Christmas Day',
      date: new Date(year, 11, 25),
      emoji: '🎄',
      description: 'Celebrates the birth of Jesus Christ; also a major cultural holiday.',
      category: 'federal',
      searchKeywords: ['how many days until christmas', 'days till christmas', 'countdown to christmas']
    },
    {
      id: 'new-years-eve',
      name: "New Year's Eve",
      date: new Date(year, 11, 31),
      emoji: '🎇',
      description: 'Celebrations marking the end of the year.',
      category: 'cultural',
      searchKeywords: ['how many days until new years eve', 'days till new years eve', 'countdown to new years eve']
    }
  ];

  const adjustedHolidays = holidays.map(holiday => {
    if (holiday.date < now) {
      const nextYearDate = new Date(holiday.date);
      nextYearDate.setFullYear(currentYear + 1);
      return { ...holiday, date: nextYearDate };
    }
    return holiday;
  });

  return adjustedHolidays.sort((a, b) => a.date.getTime() - b.date.getTime());
}

function getNthWeekdayOfMonth(year: number, month: number, weekday: number, n: number): Date {
  const firstDay = new Date(year, month, 1);
  const firstWeekday = firstDay.getDay();
  const offset = (weekday - firstWeekday + 7) % 7;
  const day = 1 + offset + (n - 1) * 7;
  return new Date(year, month, day);
}

function getLastWeekdayOfMonth(year: number, month: number, weekday: number): Date {
  const lastDay = new Date(year, month + 1, 0);
  const lastWeekday = lastDay.getDay();
  const offset = (lastWeekday - weekday + 7) % 7;
  return new Date(year, month, lastDay.getDate() - offset);
}

function getEasterDate(year: number): Date {
  const f = Math.floor;
  const G = year % 19;
  const C = f(year / 100);
  const H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30;
  const I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11));
  const J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7;
  const L = I - J;
  const month = 3 + f((L + 40) / 44);
  const day = L + 28 - 31 * f(month / 4);
  return new Date(year, month - 1, day);
}

export function getDaysUntil(targetDate: Date): number {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function getTimeUntil(targetDate: Date): { days: number; hours: number; minutes: number; seconds: number } {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}
