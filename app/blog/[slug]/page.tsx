import { getBlogPostBySlug, getRelatedPosts, getBlogPosts } from '@lib/blog';
import { getBlogBasePath } from '@lib/common';
import { generateMetadata as generateMeta } from '@components/next-head';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return generateMeta();
  }

  return generateMeta({
    title: `${post.title} - Blog`,
    desc: post.excerpt || post.title,
    canonical: `/blog/${params.slug}`,
  });
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post, 3);

  return (
    <main className="flex flex-col sm:flex-row bg-secondaryBG text-primaryText">
      <div className="flex-grow p-3 sm:p-6">
        <article className="max-w-2xl mx-auto">
          <Link
            href={getBlogBasePath()}
            className="text-[#FEA55F] hover:underline mb-2 inline-block text-sm"
          >
            ← Back to all posts
          </Link>
          <header className="mb-4">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#E5E9F0] mb-2">{post.title}</h1>
            <div className="flex flex-wrap justify-between items-center text-[#607B96] text-sm">
              <p className="mr-4">
                <span className="text-[#FEA55F]">Published:</span> {post.date}
              </p>
              <p>
                <span className="text-[#FEA55F]">Category:</span> {post.category}
              </p>
            </div>
          </header>
          <div className="prose prose-sm prose-invert max-w-none mb-6">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{post.content}</ReactMarkdown>
          </div>
          {post.tags && (
            <div className="mt-4 flex flex-wrap gap-1">
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-[#1C2B3A] text-[#5565E8] px-2 py-0.5 rounded">
                  {tag}
                </span>
              ))}
            </div>
          )}
          {relatedPosts.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#1E2D3D]">
              <h2 className="text-xl font-bold text-[#E5E9F0] mb-3">Related Posts</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    href={getBlogBasePath(`/${relatedPost.slug}`)}
                    key={relatedPost.slug}
                    className="block"
                  >
                    <div className="bg-[#011221] border border-light rounded p-3 hover:bg-[#011627] transition-colors h-full flex flex-col">
                      <h3 className="text-lg font-semibold text-[#E5E9F0] mb-1">
                        {relatedPost.title}
                      </h3>
                      <p className="text-[#607B96] text-sm mb-2 flex-grow">{relatedPost.excerpt}</p>
                      <span className="text-xs text-[#FEA55F]">Read more →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          <div className="mt-10">
            <Link
              href={getBlogBasePath()}
              className="text-[#FEA55F] hover:underline mb-4 inline-block"
            >
              ← Back to all posts
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
