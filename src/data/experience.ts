// CV timeline, newest first. Dates are "YYYY-MM"; omit `end` for current roles.
export interface Project {
  name: string;
  url?: string;
  summary: string;
  tech: string[];
}

export interface Job {
  title: string;
  org: string;
  /** Short label for the career overview bar. */
  short: string;
  location?: string;
  start: string;
  end?: string;
  summary: string;
  highlights?: string[];
  tech?: string[];
  projects?: Project[];
}

export interface Education {
  degree: string;
  school: string;
  start: string;
  end: string;
}

export interface Course {
  name: string;
  provider?: string;
  year?: string;
}

export const jobs: Job[] = [
  {
    title: 'React Developer',
    org: 'Q Agency',
    short: 'Q Agency',
    location: 'Zagreb',
    start: '2024-04',
    summary: 'Leading frontend development on AI-driven and high-traffic products.',
    highlights: [
      'Led frontend development of a sophisticated AI-driven platform.',
      'Engineered an SSR frontend for a high-traffic streaming platform with Next.js.',
      'Integrated GCP Identity Platform and Sanity CMS.',
      'Researched the company’s AI direction; wrote blog posts and education materials on AI tools for developers.',
      'Took part in all Agile ceremonies and ran regular code reviews.',
    ],
    projects: [
      {
        name: 'AI-Driven Platform',
        summary:
          'Multi-tenant AI-powered applicant tracking system built as a modular suite of Next.js apps, including a system admin for tenants, users and workspaces. Mobile-first, Dockerised, covered by Jest tests, developed with an AI-assisted Cursor workflow.',
        tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Jest', 'Docker', 'Cursor'],
      },
      {
        name: 'Streaming Platform',
        summary:
          'New features built in direct collaboration with the client, and production deployments executed with zero impact on a large user base.',
        tech: ['Next.js', 'React', 'TypeScript', 'Material UI'],
      },
    ],
  },
  {
    title: 'Web Developer',
    org: 'Laplacian',
    short: 'Laplacian',
    location: 'Split',
    start: '2019-06',
    end: '2024-04',
    summary: 'Led frontend development for major client projects, owning technical direction and implementation.',
    projects: [
      {
        name: 'Bevi',
        summary:
          'Portal for managing smart water dispensers. Led the frontend, migrated AngularJS to React + TypeScript, and built a real-time touchless-pour app over WebSockets.',
        tech: ['React', 'TypeScript', 'Redux', 'Redux Saga', 'Formik', 'Material UI', 'Ag-Grid', 'AWS Lambda'],
      },
      {
        name: 'Yacht & Skipper',
        url: 'https://yachtandskipper.com/',
        summary:
          'Tour agency website built from scratch in Next.js for performance and SEO, from Figma designs, with booking and contact forms.',
        tech: ['Next.js', 'Redux', 'TypeScript', 'Chakra UI', 'Mailchimp', 'Brevo'],
      },
      {
        name: 'Croatian Wineries',
        url: 'https://www.croatianwineries.com/',
        summary:
          'Multi-language winery listing platform using headless WordPress with GraphQL and Next.js.',
        tech: ['Next.js', 'GraphQL', 'TypeScript', 'Chakra UI', 'WordPress'],
      },
      {
        name: 'MoSt Association',
        summary:
          'Full-stack app for an NGO: custom React admin, Koa + Prisma CRUD API, CI/CD with GitHub Actions and deployment to AWS.',
        tech: ['React', 'TypeScript', 'Material UI', 'Koa', 'Prisma', 'GitHub Actions'],
      },
      {
        name: 'Kizen',
        summary:
          'v2 of a marketing and sales CRM — migrating AngularJS to React/Redux in a team spread over four continents.',
        tech: ['React', 'Redux', 'Redux Saga', 'amCharts', 'Storybook'],
      },
      {
        name: 'Penguin Random House',
        summary: 'Mobile version of the PRH web shop and a new customer enrolment flow.',
        tech: ['React', 'Redux'],
      },
      {
        name: 'GameBattles | MLG',
        summary: 'New responsive, localised esports tournament app for Activision Blizzard.',
        tech: ['Angular', 'TypeScript', 'RxJS', 'Angular Material'],
      },
    ],
  },
  {
    title: 'Frontend Developer',
    org: 'M2Bit / EPTI',
    short: 'M2Bit',
    start: '2018-08',
    end: '2019-06',
    summary: 'E-commerce and in-store betting ecosystem for the Swedish startup Figital Market Group.',
    projects: [
      {
        name: 'BetMarket & StoreMarket',
        summary:
          'Customer-facing website, React Native mobile app and React Admin CRM for managing stores, users and betting applications across two brands.',
        tech: ['React', 'React Admin', 'Redux', 'React Native', 'Sass'],
      },
    ],
  },
  {
    title: 'Frontend Developer',
    org: 'Snowfall AB',
    short: 'Snowfall',
    start: '2017-09',
    end: '2018-08',
    summary: 'Frontend work for clients of a Swedish consultancy.',
    projects: [
      {
        name: 'Panasonic Avionics',
        summary: 'In-flight WiFi portal.',
        tech: ['Ember.js', 'JavaScript', 'Sass'],
      },
      {
        name: 'Linnegatan7',
        summary: 'Booking app for an exclusive private gym, rewritten from AngularJS to Angular 2.',
        tech: ['AngularJS', 'Angular'],
      },
    ],
  },
  {
    title: 'Software Developer & System Verification Engineer',
    org: 'Ericsson Nikola Tesla',
    short: 'Ericsson',
    location: 'Split',
    start: '2016-09',
    end: '2017-09',
    summary: 'Integration, verification and testing of Ericsson core network applications.',
    highlights: ['Virtualisation of applications on VMware and OpenStack cloud projects.'],
    tech: ['VMware', 'OpenStack', 'Linux'],
  },
  {
    title: 'Web Developer',
    org: 'LLS Partners Oy',
    short: 'LLS',
    start: '2016-06',
    end: '2016-09',
    summary:
      'Custom Gantt chart application for resource planning and time management, integrated with the M-Files API.',
    tech: ['JavaScript', 'jQuery', 'HTML', 'CSS'],
  },
  {
    title: 'Frontend Developer',
    org: 'Net Media International Services',
    short: 'Net Media',
    location: 'Split',
    start: '2013-09',
    end: '2016-09',
    summary:
      'Built Umbraco CMS websites from PSD designs and implemented responsive interfaces with UX designers.',
    tech: ['AngularJS', 'jQuery', 'HTML5', 'CSS3', 'Umbraco'],
  },
];

export const education: Education[] = [
  {
    degree: 'Master’s degree in Computer Science',
    school: 'Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture (FESB), Split',
    start: '2008',
    end: '2013',
  },
];

export const courses: Course[] = [
  { name: 'AI upskilling: building RAG chatbots' },
];
