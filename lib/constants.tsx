export const experience = [
  {
    jobTitle: 'Next.js Developer',
    companyName: 'EXPIA',
    period: '2022 - Present',
    description:
      'Developed a horse-racing dashboard, ATA technology website, and an AI chatbot solution dashboard. Utilized technologies: CMS, React, JavaScript, Next.js, Tailwind.',
  },
  {
    jobTitle: 'Frontend Developer',
    companyName: 'Intellemo.AI',
    period: 'Mar 2022 - Sep 2022',
    description:
      'Implemented SSR, One-Click Launch feature, and built a webform builder from scratch. Awarded "Hero of the Month" for outstanding contributions. Utilized technologies: Canvas, TypeScript, React, GraphQL, Next.js.',
  },
  {
    jobTitle: 'Web Developer',
    companyName: 'Mobilicis',
    period: 'Feb 2021 - Feb 2022',
    description:
      'Developed the frontend of a trade-in application for refurbished smartphones. Utilized technologies: Python, Django, Web Scraping, Material UI, GraphQL, Next.js, Tailwind, React Js.',
  },
  {
    jobTitle: 'Full Stack Engineer',
    companyName: 'Mobiru India',
    period: 'Aug 2020 - Feb 2021',
    description:
      'Built a second-hand mobile phone price comparison website from scratch. Utilized technologies: Python, Django, Web Scraping, React Js.',
  },
];

export const skills: { iconClassName: string; name: string; icon?: React.ReactNode }[] = [
  { iconClassName: 'devicon-javascript-plain', name: 'JavaScript' },
  { iconClassName: 'devicon-typescript-plain', name: 'TypeScript' },
  { iconClassName: 'devicon-react-plain', name: 'React' },
  { iconClassName: 'devicon-react-plain', name: 'React-Native' },
  { iconClassName: 'devicon-nextjs-plain', name: 'Next.js' },
  { iconClassName: 'devicon-nodejs-plain', name: 'Node.js' },
  { iconClassName: 'devicon-express-original', name: 'Express.js' },
  { iconClassName: 'devicon-python-plain', name: 'Python' },
  { iconClassName: 'devicon-django-plain', name: 'Django' },
  { iconClassName: 'devicon-mongodb-plain', name: 'MongoDB' },
  { iconClassName: 'devicon-graphql-plain', name: 'GraphQL' },
  { iconClassName: 'devicon-tailwindcss-plain', name: 'Tailwind CSS' },
  { iconClassName: 'devicon-materialui-plain', name: 'Material UI' },
  { iconClassName: 'devicon-git-plain', name: 'Git' },
  { iconClassName: 'devicon-github-original', name: 'GitHub' },
  { iconClassName: 'devicon-docker-plain', name: 'Docker' },
  { iconClassName: 'devicon-amazonwebservices-original', name: 'AWS' },
];

export const education = [
  {
    degree: 'Diploma',
    university: 'Mehr Chand Polytechnic College Jalandhar',
    period: '2017 - 2020',
    description:
      'Part of the Computer Science and Engineering department, where I learned various programming languages, frameworks, algorithms, and data structures.',
  },
];

export const BIO_TEXT = `Hello! I'm Jeevan Kumar, a seasoned front-end-heavy full-stack developer with over 4 years of extensive experience in both front-end and back-end technologies. Based in India, I specialize in building modern and user-friendly web applications using technologies like JavaScript, React.js, Next.js, Node.js, and Python. I'm always eager to learn new technologies and best practices to improve my skills and projects. As a dedicated educator and content creator, I share my knowledge and insights on web development through my YouTube channel. I'm also the founder of ByteEat.in, a side project aimed at revolutionizing restaurant experiences with digital menus and QR-based ordering. I'm passionate about working on innovative projects that challenge me to grow as a developer and contribute to the tech community.`;

export function siteLinks() {
  return {
    youtube: {
      name: 'YouTube channel',
      href: 'https://www.youtube.com/@codingwithjeevan',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="5.368 13.434 53.9 37.855"
        >
          <path d="M41.272 31.81c-4.942-2.641-9.674-5.069-14.511-7.604v15.165c5.09-2.767 10.455-5.301 14.532-7.561h-.021z" />
          <path d="M41.272 31.81c-4.942-2.641-14.511-7.604-14.511-7.604l12.758 8.575c.001 0-2.324 1.289 1.753-.971z" />
          <path
            fill="gray"
            d="M27.691 51.242c-10.265-.189-13.771-.359-15.926-.803-1.458-.295-2.725-.95-3.654-1.9-.718-.719-1.289-1.816-1.732-3.338-.38-1.268-.528-2.323-.739-4.9-.323-5.816-.4-10.571 0-15.884.33-2.934.49-6.417 2.682-8.449 1.035-.951 2.239-1.563 3.591-1.816 2.112-.401 11.11-.718 20.425-.718 9.294 0 18.312.317 20.426.718 1.689.317 3.273 1.267 4.203 2.492 2 3.146 2.035 7.058 2.238 10.118.084 1.458.084 9.737 0 11.195-.316 4.836-.57 6.547-1.288 8.321-.444 1.12-.823 1.711-1.479 2.366a7.085 7.085 0 0 1-3.76 1.922c-8.883.668-16.426.813-24.987.676zM41.294 31.81c-4.942-2.641-9.674-5.09-14.511-7.625v15.166c5.09-2.767 10.456-5.302 14.532-7.562l-.021.021z"
          />
        </svg>
      ),
    },
    github: {
      name: 'Github profile',
      href: 'https://github.com/g1mishra',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.475 2 2 6.475 2 12C1.99887 14.0993 2.65882 16.1456 3.88622 17.8487C5.11362 19.5517 6.84615 20.8251 8.838 21.488C9.338 21.575 9.525 21.275 9.525 21.012C9.525 20.775 9.512 19.988 9.512 19.15C7 19.613 6.35 18.538 6.15 17.975C6.037 17.687 5.55 16.8 5.125 16.562C4.775 16.375 4.275 15.912 5.112 15.9C5.9 15.887 6.462 16.625 6.65 16.925C7.55 18.437 8.988 18.012 9.562 17.75C9.65 17.1 9.912 16.663 10.2 16.413C7.975 16.163 5.65 15.3 5.65 11.475C5.65 10.387 6.037 9.488 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.875 9.525 7.163C10.3391 6.93706 11.1802 6.82334 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.138 17.275 6.138C17.825 7.513 17.475 8.538 17.375 8.788C18.012 9.488 18.4 10.375 18.4 11.475C18.4 15.313 16.063 16.163 13.838 16.413C14.2 16.725 14.513 17.325 14.513 18.263C14.513 19.6 14.5 20.675 14.5 21.013C14.5 21.275 14.688 21.587 15.188 21.487C17.173 20.8168 18.8979 19.541 20.1199 17.8392C21.3419 16.1373 21.9994 14.0951 22 12C22 6.475 17.525 2 12 2Z"
            fill="#607B96"
          ></path>
        </svg>
      ),
    },
    linkedin: {
      name: 'Linkedin profile',
      href: 'https://linkedin.com/in/g1mishra',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002V5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002V8.48002Z"
            fill="#607B96"
          ></path>
        </svg>
      ),
    },
    instagram: {
      name: 'Instagram account',
      href: 'https://instagram.com/g1mishra.dev',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 102 102"
          fill="none"
        >
          <path
            d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
            data-name="Path 16"
          />
          <path
            d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
            data-name="Path 17"
          />
          <path
            fill="gray"
            d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
            data-name="Path 18"
            transform="translate(-422.637 -426.196)"
          />
        </svg>
      ),
    },
    twitter: {
      name: 'Twitter account',
      href: 'https://twitter.com/g1mishra',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.3832 5.65605C21.6197 5.99374 20.8101 6.21552 19.9812 6.31405C20.8549 5.79148 21.5089 4.96906 21.8212 4.00005C21.0012 4.48805 20.1022 4.83005 19.1652 5.01505C18.5358 4.34163 17.7015 3.89501 16.7921 3.74463C15.8827 3.59425 14.9491 3.74854 14.1364 4.1835C13.3238 4.61846 12.6776 5.30973 12.2983 6.14984C11.919 6.98995 11.8279 7.93183 12.0392 8.82905C10.3763 8.7457 8.74952 8.31357 7.26447 7.56071C5.77943 6.80785 4.46931 5.7511 3.41918 4.45905C3.04747 5.0975 2.85214 5.82328 2.85318 6.56205C2.85318 8.01205 3.59118 9.29305 4.71318 10.043C4.04919 10.0221 3.39982 9.84283 2.81918 9.52005V9.57205C2.81938 10.5377 3.15355 11.4737 3.76503 12.2211C4.37651 12.9686 5.22766 13.4815 6.17418 13.673C5.5578 13.8401 4.91149 13.8647 4.28418 13.745C4.55105 14.5763 5.07119 15.3032 5.77178 15.8242C6.47236 16.3451 7.31831 16.6338 8.19118 16.65C7.32366 17.3314 6.33036 17.835 5.26806 18.1322C4.20577 18.4294 3.09531 18.5143 2.00018 18.382C3.91188 19.6115 6.13728 20.2642 8.41018 20.262C16.1032 20.262 20.3102 13.889 20.3102 8.36205C20.3102 8.18205 20.3052 8.00005 20.2972 7.82205C21.116 7.23022 21.8228 6.49707 22.3842 5.65705L22.3832 5.65605Z"
            fill="#607B96"
          ></path>
        </svg>
      ),
    },
  };
}
