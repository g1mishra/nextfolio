import clientPromise from '@lib/mongodb';

import { IProjectPageProps } from 'app/projects/page';
import { IProject } from 'types/project';

export async function getProjects(): Promise<IProjectPageProps> {
  try {
    const client = await clientPromise;
    const db = client.db('portfolio');
    const response = await db.collection('projects').find({}).toArray();
    const projects: IProject[] = JSON.parse(JSON.stringify(response));
    let tags = projects.map((item) => item.tags);
    tags = Array.from(new Set(tags.join(';').split(';')));
    projects.sort((a, b) => a.sno - b.sno);
    return { projects, tags };
  } catch (e) {
    return { projects: [], tags: [] };
  }
}
