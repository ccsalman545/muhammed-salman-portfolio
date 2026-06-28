export const portfolio = {
  name: 'Alex Morgan',
  role: 'Product engineer',
  email: 'hello@alexmorgan.dev',
  location: 'Bengaluru, India',
  intro:
    'I design and build thoughtful digital products that turn complex problems into simple, reliable experiences.',
  about:
    'I am a product-focused software engineer with a strong eye for design. I enjoy working across the stack, shaping ideas from early prototypes into polished products used by real people.',
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'PostgreSQL',
    'Tailwind CSS',
    'Figma',
    'AWS',
  ],
  experience: [
    {
      company: 'Northstar Labs',
      role: 'Senior Product Engineer',
      period: '2023 — Present',
      description:
        'Leading product engineering for a collaborative analytics platform, from system design through accessible frontend delivery.',
    },
    {
      company: 'Orbit Systems',
      role: 'Software Engineer',
      period: '2020 — 2023',
      description:
        'Built customer-facing workflows and a shared component system that improved consistency across four product teams.',
    },
  ],
  education: {
    school: 'National Institute of Technology',
    degree: 'B.Tech in Computer Science & Engineering',
    period: '2016 — 2020',
  },
  projects: [
    {
      title: 'Relay',
      description:
        'A focused workspace for distributed teams to share decisions, track progress, and keep projects moving.',
      tags: ['React', 'TypeScript', 'Node.js'],
    },
    {
      title: 'Prism',
      description:
        'A privacy-first analytics dashboard with real-time reporting and clear, actionable product insights.',
      tags: ['Next.js', 'PostgreSQL', 'AWS'],
    },
    {
      title: 'Formwork',
      description:
        'An accessible form builder that helps small teams publish polished forms without writing code.',
      tags: ['React', 'Tailwind CSS', 'Figma'],
    },
  ],
  links: {
    linkedin: 'https://www.linkedin.com/',
  },
} as const
