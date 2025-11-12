
import BlogPosts from '@components/BlogPosts';
import { CROSS_ICON } from '@components/icons';
import { getBlogPosts } from '@lib/blog';
import { generateMetadata } from '@components/next-head';
import { Metadata } from 'next';

export const metadata: Metadata = generateMetadata({
  canonical: '/blog',
  title: 'Blog - Latest Posts on Technology & Development',
  desc: 'Read my latest blog posts on technology, programming, web development, and more.',
});

export default function BlogPage() {
  const allPosts = getBlogPosts();

  return (
    <main className="flex flex-col sm:flex-row">
      <p className="sm:hidden px-4 py-6 text-[15px] text-white">_blog</p>
      <div className="flex-1 shrink-0 flex flex-col sm:border-r border-light">
        <div className="hidden sm:block border-b border-light">
          <p className="flex justify-between items-center pl-8 pr-4 py-2 max-w-max space-x-12 border-r border-light">
            <span>blog</span>
            {CROSS_ICON}
          </p>
        </div>
        <div className="flex-1 w-full p-4 sm:py-8 flex flex-col items-center overflow-y-auto">
          <div className="w-full max-w-7xl">
            <BlogPosts posts={allPosts} />
          </div>
        </div>
      </div>
    </main>
  );
}
