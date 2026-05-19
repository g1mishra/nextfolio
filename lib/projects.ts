import { getProjectsFromConfig } from './config';

import { IProjectPageProps } from 'app/projects/page';
import { IProject } from 'types/project';

export async function getProjects(): Promise<IProjectPageProps> {
  try {
    const projectsList = getProjectsFromConfig();
    const projects: IProject[] = JSON.parse(JSON.stringify(projectsList));
    let tags = projects.map((item) => item.tags);
    tags = Array.from(new Set(tags.filter(Boolean).join(';').split(';')));
    projects.sort((a, b) => a.sno - b.sno);
    return { projects, tags };
  } catch (e) {
    return { projects: [], tags: [] };
  }
}
