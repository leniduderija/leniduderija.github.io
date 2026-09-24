const toDate = (ym: string) => {
  const [y, m = 1] = ym.split('-').map(Number);
  return new Date(y, m - 1);
};

/** Months between two "YYYY-MM" values, inclusive of the start month. `end` defaults to now. */
export const monthsBetween = (start: string, end?: string) => {
  const a = toDate(start);
  const b = end ? toDate(end) : new Date();
  return Math.max(1, (b.getFullYear() - a.getFullYear()) * 12 + b.getMonth() - a.getMonth());
};

export const formatMonth = (ym?: string) =>
  ym ? toDate(ym).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Present';

export const formatDuration = (months: number) => {
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y} yr${y > 1 ? 's' : ''}`, m && `${m} mo${m > 1 ? 's' : ''}`].filter(Boolean).join(' ');
};

export const toTime = (ym?: string) => (ym ? toDate(ym).getTime() : Date.now());
