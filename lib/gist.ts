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

const fetchGist = async (): Promise<IGistResponse> => {
  const gistId = process.env.GIST_ID;
  if (!gistId) {
    throw new Error('Gist Id must be in env');
  }
  const res = await fetch(`https://api.github.com/gists/${gistId}`);
  return await res.json();
};

export { fetchGist };
