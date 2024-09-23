import Link from 'next/link';
import { skills } from '@lib/constants';
import { getBlogPosts } from '@lib/blog';
import { getProjects } from '@lib/projects';

const Highlights = async () => {
  const featuredSkills = skills.slice(0, 6);
  const latestPost = getBlogPosts()[0];
  const featuredProject = await getProjects();

  return (
    <div className="bg-[#011221] p-6 rounded-lg border border-light w-full max-w-screen-lg mx-auto">
      <h2 className="text-white text-2xl mb-4">Highlights</h2>

      {/* Key Skills section */}
      <div className="mb-6">
        <h3 className="text-[#FEA55F] text-lg mb-2">Key Skills</h3>
        <div className="flex flex-wrap gap-2">
          {featuredSkills.map((skill) => (
            <span
              key={skill.name}
              className="bg-[#1C2B3A] text-[#607B96] px-2 py-1 rounded text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
        <Link
          href="/about-me/skills"
          className="text-[#43D9AD] text-sm hover:underline mt-2 inline-block"
        >
          View all skills →
        </Link>
      </div>

      {/* Featured Project section */}
      {featuredProject.projects.length > 0 && (
        <div className="mb-6">
          <h3 className="text-[#FEA55F] text-lg mb-2">Featured Project</h3>
          <p className="text-[#607B96] mb-1">{featuredProject.projects[0].name}</p>
          <p className="text-sm text-[#607B96] mb-2">{featuredProject.projects[0].description}</p>
          <div className="flex justify-between items-center">
            <a
              href={featuredProject.projects[0].liveURL}
              className="text-[#43D9AD] text-sm hover:underline"
            >
              View project
            </a>
            <Link href="/projects" className="text-[#43D9AD] text-sm hover:underline">
              All projects →
            </Link>
          </div>
        </div>
      )}

      {/* Latest Blog Post section */}
      {latestPost && (
        <div>
          <h3 className="text-[#FEA55F] text-lg mb-2">Latest Blog Post</h3>
          <p className="text-[#607B96] mb-1">{latestPost.title}</p>
          <p className="text-sm text-[#607B96] mb-2">{latestPost.excerpt.slice(0, 150)}...</p>
          <div className="flex justify-between items-center">
            <Link
              href={`/blog/${latestPost.slug}`}
              className="text-[#43D9AD] text-sm hover:underline"
            >
              Read full post →
            </Link>
            <Link href="/blog" className="text-[#43D9AD] text-sm hover:underline">
              All posts →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Highlights;
