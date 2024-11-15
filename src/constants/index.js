import {
  frontend,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  git,
  docker,
  postgresql,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  dotnet,
  CShart,
  gitlab,
  java,
  sqlserver,
  fpt,
  nineplus,
  pasona,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: '.Net',
    icon: dotnet,
  },
  {
    name: 'Java',
    icon: java,
  },
  {
    name: 'Sql Server',
    icon: sqlserver,
  },
  {
    name: 'C#',
    icon: CShart,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'gitlab',
    icon: gitlab,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Fresher .Net',
    company_name: 'FPT Software',
    icon: fpt,
    iconBg: '#333333',
    date: 'May 2022 - August 2022',
  },
  {
    title: '.Net Developer',
    company_name: 'FPT Software',
    icon: fpt,
    iconBg: '#333333',
    date: 'August 2022 - May 2023',
  },
  {
    title: '.Net Developer',
    company_name: 'Nine Plus',
    icon: nineplus,
    iconBg: '#333333',
    date: 'January 2024 - September 2024',
  },
  {
    title: 'Programmer',
    company_name: 'PasonaTech',
    icon: pasona,
    iconBg: '#333333',
    date: 'October 2024 - Present',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Ehouse',
    description: 'The website makes it easy for users to rent and lease houses effortlessly.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    //repo: 'https://github.com/shaqdeff/KomiKult',
    repo: 'https://github.com/TT-Tan/EHouseV1',
    demo: 'https://e-house-v1-yzde.vercel.app/home/slider-filter-search',
  },
  // {
  //   id: 'project-2',
  //   name: 'Leaderboard',
  //   description:
  //     'A leaderboard list app that displays scores submitted by different players.',
  //   tags: [
  //     {
  //       name: 'react',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'restapi',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'scss',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: leaderboard,
  //   repo: 'https://github.com/shaqdeff/Leaderboard',
  //   demo: 'https://shaqdeff.github.io/Leaderboard/',
  // },
  // {
  //   id: 'project-3',
  //   name: 'Math Magicians',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
  // {
  //   id: 'project-4',
  //   name: 'Movie Metro',
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: movie,
  //   repo: 'https://github.com/shaqdeff/Movie-Metro',
  //   demo: 'https://movie-metro.netlify.app/',
  // },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

export { 
  services, 
  technologies, 
  experiences, 
  projects 
};
