export interface IGistResponse {
  files: Files;
  owner: Owner;
}

export interface IGistData {
  files: IFileDetails[];
  owner: Owner;
}

export interface Files {
  [K: string]: IFileDetails;
}

export interface IFileDetails {
  filename: string;
  type: string;
  language: string;
  raw_url: string;
  size: number;
  truncated: boolean;
  content: string;
}

export interface Owner {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

import { getProfile } from './config';

const fetchGist = async (): Promise<IGistResponse> => {
  const gistId = process.env.GIST_ID;
  if (!gistId) {
    const profile = getProfile();
    return {
      owner: {
        login: profile.username || 'yourusername',
        avatar_url: `https://avatars.githubusercontent.com/u/9919?v=4`,
      },
      files: {
        'profile.ts': {
          filename: 'profile.ts',
          type: 'text/plain',
          language: 'TypeScript',
          content: `// Dynamic Profile Info\nconst developer = {\n  name: "${profile.name}",\n  role: "${profile.tagline}",\n  location: "${profile.location}",\n  experience: "${profile.yearsOfExperience} years"\n};\n\nconsole.log(\`Hi, I'm \${developer.name}!\`);`,
          size: 200,
          truncated: false,
          raw_url: '',
        },
      },
    } as any;
  }
  const res = await fetch(`https://api.github.com/gists/${gistId}`);
  return await res.json();
};

export { fetchGist };
