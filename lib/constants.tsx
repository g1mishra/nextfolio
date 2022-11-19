export const experience = [
  {
    jobTitle: 'Next.js developer',
    companyName: 'EXPIA',
    period: 'Sep 2022 - Present (3 months +)',
    description: '',
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'Intellemo',
    period: 'Mar 2022 - Sep 2022 (7 months)',
    description: `At Intellemo, I worked as a next.js developer, where I implemented various features 
    such as enabling SSR (for better SEO), One-Click Launch ("an advanced feature for the company's product"), 
    building the web-form builder from the ground up, and much more. 
    I received the "Hero of the Month" award.`,
  },

  {
    jobTitle: 'Web Developer',
    companyName: 'Mobilicis, Inc.',
    period: 'Feb 2021 - Feb 2022 (1 year 1 month',
    description: ``,
  },
  {
    jobTitle: 'Full-Stack Developer - Intern',
    companyName: 'Mobiru India',
    period: 'Aug 2020 - Feb 2021 (7 months)',
    description: `Worked as django and react developer. Created many webpages, web-scraping scripts, improved seo, etc.`,
  },
];

export const skills = [
  { iconClassName: 'devicon-javascript-plain', name: 'Javascript' },
  { iconClassName: 'devicon-typescript-plain', name: 'Typescript' },
  { iconClassName: 'devicon-react-plain', name: 'React' },
  { iconClassName: 'devicon-nextjs-plain', name: 'Next.js' },
  { iconClassName: 'devicon-nodejs-plain', name: 'Node' },
  { iconClassName: 'devicon-express-original', name: 'express' },
  { iconClassName: 'devicon-redux-plain', name: 'Redux' },
  {
    icon: (
      <svg height="4.268" viewBox="0 0 18 4.268" fill="none" width="18">
        <path
          d="M0 2.26c0.004 1.089 0.891 1.98 1.98 1.98a1.982 1.982 0 0 0 1.98 -1.979V1.979a0.816 0.816 0 0 1 1.447 -0.514h1.28A1.984 1.984 0 0 0 4.775 0a1.982 1.982 0 0 0 -1.979 1.98v0.28A0.816 0.816 0 0 1 1.979 3.075a0.816 0.816 0 0 1 -0.815 -0.815 0.233 0.233 0 0 0 -0.233 -0.233H0.233A0.233 0.233 0 0 0 0 2.26zm7.577 1.98a1.988 1.988 0 0 1 -1.911 -1.466h1.279a0.814 0.814 0 0 0 1.447 -0.513V1.979a1.982 1.982 0 0 1 1.98 -1.979c1.078 0 1.957 0.866 1.979 1.938l0.006 0.322a0.816 0.816 0 0 0 1.447 0.514h1.28a1.984 1.984 0 0 1 -1.912 1.466c-1.089 0 -1.976 -0.892 -1.98 -1.979l-0.006 -0.291v-0.012a0.816 0.816 0 0 0 -0.815 -0.792 0.816 0.816 0 0 0 -0.815 0.815v0.28a1.982 1.982 0 0 1 -1.98 1.98zM15.336 1.466a0.814 0.814 0 0 1 1.447 0.514 0.233 0.233 0 0 0 0.233 0.233h0.699a0.233 0.233 0 0 0 0.233 -0.233A1.982 1.982 0 0 0 15.969 0a1.984 1.984 0 0 0 -1.913 1.466h1.28z"
          fill="currentColor"
        />
      </svg>
    ),
    name: 'SWR',
  },
  { iconClassName: 'devicon-python-plain', name: 'Python' },
  { iconClassName: 'devicon-django-plain', name: 'Django' },
  { iconClassName: 'devicon-tailwindcss-plain', name: 'TailwindCss' },
  { iconClassName: 'devicon-sass-plain', name: 'SASS' },
  { iconClassName: 'devicon-selenium-plain', name: 'selenium' },
  // { iconClassName: 'devicon-scraping-plain', name: 'Web-scraping' },
];

const absolutePath: { [index: string]: any } = {
  bio: ['personal-info', 'bio'],
  diploma: ['personal-info', 'education', 'diploma'],
  experience: ['professional-info', 'experience'],
  skills: ['professional-info', 'skills'],
};

export const getAbsolutePath = (page: string) => {
  let returnString = [];
  if (absolutePath[page]) returnString.push(...absolutePath[page]);
  else returnString.push(page);
  return returnString;
};
