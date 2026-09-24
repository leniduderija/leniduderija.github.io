// CV timeline, newest first. TODO: replace placeholder entries.
export interface TimelineEntry {
  kind: 'work' | 'education';
  title: string;
  org: string;
  start: string; // "YYYY-MM"
  end?: string; // omit for "Present"
  description: string;
  tags?: string[];
}

export const experience: TimelineEntry[] = [
  {
    kind: 'work',
    title: 'Senior Software Engineer',
    org: 'Company A',
    start: '2022-01',
    description: 'What you worked on, the impact you had, and the scale of the work.',
    tags: ['TypeScript', 'React', 'Node.js'],
  },
  {
    kind: 'work',
    title: 'Software Engineer',
    org: 'Company B',
    start: '2019-03',
    end: '2021-12',
    description: 'Key responsibilities and achievements.',
    tags: ['JavaScript', 'Angular'],
  },
  {
    kind: 'education',
    title: 'MSc Computer Science',
    org: 'University',
    start: '2014-10',
    end: '2019-02',
    description: 'Focus area or thesis topic.',
  },
];
