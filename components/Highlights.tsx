import { getBlogPosts } from '@lib/blog';
import { getBlogBasePath } from '@lib/common';
import { getTopSkills } from '@lib/config';
import { getProjects } from '@lib/projects';
import Link from 'next/link';

const Highlights = async () => {
  const featuredSkills = getTopSkills();
  const [firstPost, secondPost] = getBlogPosts().slice(0, 2);
  const featuredProject = await getProjects();

  return (
    <div className="bg-[#011221] rounded-lg border border-light w-full max-w-screen-lg mx-auto">
      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Key Skills section */}
        <div>
          <h3 className="text-[#E99287] text-base mb-3 font-medium">
            <span className="text-[#C98BDF]">const</span>{' '}
            <span className="text-[#43D9AD]">keySkills</span> <span className="text-white">=</span>{' '}
            [
          </h3>
          <div className="flex flex-wrap gap-2 pl-4">
            {featuredSkills.map((skill, index) => (
              <span
                key={skill}
                className="bg-[#1E2D3D] text-[#43D9AD] px-2 py-1 rounded border border-[#1E2D3D] hover:border-[#43D9AD] transition-colors text-sm"
              >
                &apos;{skill}&apos;{index < featuredSkills.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
          <div className="mt-2 pl-4">
            <span className="text-white">];</span>
          </div>
          <Link
            href="/about-me/skills"
            className="text-[#607B96] hover:text-[#43D9AD] text-sm transition-colors mt-3 inline-block pl-4"
          >
            {'// view all skills →'}
          </Link>
        </div>

        {/* Featured Project section */}
        {featuredProject.projects.length > 0 && (
          <div className="border-t border-light pt-6">
            <h3 className="text-[#E99287] text-base mb-3 font-medium">
              <span className="text-[#C98BDF]">const</span>{' '}
              <span className="text-[#43D9AD]">featuredProject</span>{' '}
              <span className="text-white">= {'{'}</span>
            </h3>
            <div className="pl-4 space-y-2">
              <p className="text-white">
                <span className="text-[#43D9AD]">name:</span>{' '}
                <span className="text-[#E99287]">
                  &quot;{featuredProject.projects[0].name}&quot;
                </span>
                ,
              </p>
              <p className="text-white">
                <span className="text-[#43D9AD]">description:</span>{' '}
                <span className="text-[#E99287]">
                  &quot;{featuredProject.projects[0].description}&quot;
                </span>
                ,
              </p>
              <div className="flex flex-wrap gap-4 items-center pt-2">
                <a
                  href={featuredProject.projects[0].liveURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#607B96] hover:text-[#43D9AD] text-sm transition-colors"
                >
                  {'// view project →'}
                </a>
                <Link
                  href="/projects"
                  className="text-[#607B96] hover:text-[#43D9AD] text-sm transition-colors"
                >
                  {'// all projects →'}
                </Link>
              </div>
            </div>
            <div className="mt-2">
              <span className="text-white">{'}'};</span>
            </div>
          </div>
        )}

        {/* Latest Blog Posts section */}
        {firstPost && (
          <div className="border-t border-light pt-6">
            <h3 className="text-[#E99287] text-base mb-3 font-medium">
              <span className="text-[#C98BDF]">const</span>{' '}
              <span className="text-[#43D9AD]">latestPosts</span>{' '}
              <span className="text-white">= [</span>
            </h3>
            <div className="pl-4 space-y-5">
              <div>
                <p className="text-white mb-1">
                  <span className="text-white">{'{'}</span>
                </p>
                <div className="pl-4 space-y-1">
                  <p className="text-white">
                    <span className="text-[#43D9AD]">title:</span>{' '}
                    <span className="text-[#E99287]">&quot;{firstPost.title}&quot;</span>,
                  </p>
                  <p className="text-white">
                    <span className="text-[#43D9AD]">excerpt:</span>{' '}
                    <span className="text-[#607B96]">
                      &quot;{firstPost.excerpt.slice(0, 100)}...&quot;
                    </span>
                  </p>
                </div>
                <p className="text-white">
                  <span className="text-white">{'}'}</span>,
                </p>
                <Link
                  href={getBlogBasePath(`/${firstPost.slug}`)}
                  className="text-[#607B96] hover:text-[#43D9AD] text-sm transition-colors inline-block mt-2 pl-4"
                >
                  {'// read full post →'}
                </Link>
              </div>

              {secondPost && (
                <div>
                  <p className="text-white mb-1">
                    <span className="text-white">{'{'}</span>
                  </p>
                  <div className="pl-4 space-y-1">
                    <p className="text-white">
                      <span className="text-[#43D9AD]">title:</span>{' '}
                      <span className="text-[#E99287]">&quot;{secondPost.title}&quot;</span>,
                    </p>
                    <p className="text-white">
                      <span className="text-[#43D9AD]">excerpt:</span>{' '}
                      <span className="text-[#607B96]">
                        &quot;{secondPost.excerpt.slice(0, 100)}...&quot;
                      </span>
                    </p>
                  </div>
                  <p className="text-white">
                    <span className="text-white">{'}'}</span>
                  </p>
                  <div className="flex flex-wrap gap-4 items-center mt-2 pl-4">
                    <Link
                      href={getBlogBasePath(`/${secondPost.slug}`)}
                      className="text-[#607B96] hover:text-[#43D9AD] text-sm transition-colors"
                    >
                      {'// read full post →'}
                    </Link>
                    <Link
                      href={getBlogBasePath()}
                      className="text-[#607B96] hover:text-[#43D9AD] text-sm transition-colors"
                    >
                      {'// all posts →'}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-2">
              <span className="text-white">];</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Highlights;
