export interface PortfolioConfig {
  name: string;
  username: string;
  tagline: string;
  bio: string;
  location: string;
  yearsOfExperience: string;

  seo: {
    title: string;
    description: string;
    canonicalUrl: string;
    keywords: string[];
  };

  homePage: {
    greeting: string;
    typedStrings: string[];
    githubComment: string;
    githubLink: string;
  };

  contact: {
    email: string;
    phone: string;
    availability: string;
  };

  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    youtube: string;
    instagram: string;
  };

  experience: Experience[];
  education: Education[];
  skills: Skill[];
  topSkills: string[];

  gist: {
    username: string;
  };
}

export interface Experience {
  jobTitle: string;
  companyName: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  university: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  iconClassName: string;
  icon?: React.ReactNode;
}
