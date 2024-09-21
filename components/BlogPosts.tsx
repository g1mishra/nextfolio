'use client';
import Link from 'next/link';
import { BlogPost } from '@lib/blog';
import { useState } from 'react';

interface BlogPostsProps {
  posts: BlogPost[];
}

export default function BlogPosts({ posts }: BlogPostsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const categories = ['All Categories', ...Array.from(new Set(posts.map((post) => post.category)))];

  const filteredPosts = posts.filter(
    (post) =>
      (selectedCategory === 'All Categories' || post.category === selectedCategory) &&
      (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[#E5E9F0] mb-2">My Blog</h1>
        <p className="text-[#607B96]">Thoughts, ideas, and experiences in web development</p>
      </div>
      <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <input
          type="text"
          placeholder="Search posts..."
          className="bg-[#011221] border border-light rounded px-4 py-2 text-[#607B96] w-full sm:w-64"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          className="bg-[#011221] border border-light rounded px-4 py-2 text-[#607B96] w-full sm:w-auto"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="block">
            <div className="bg-[#011221] border border-light rounded-lg p-6 hover:bg-[#011627] transition-colors h-full flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#4D5BCE] text-sm">
                  #{index + 1} {post.category}
                </span>
                <span className="text-[#607B96] text-sm">{post.date}</span>
              </div>
              <h2 className="text-xl font-semibold text-[#E5E9F0] mb-2">{post.title}</h2>
              <p className="text-[#607B96] mb-4 flex-grow">{post.excerpt}</p>
              <div className="flex justify-between items-center mt-auto">
                <div className="flex flex-wrap gap-2">
                  {post.tags &&
                    post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[#1C2B3A] text-[#5565E8] px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
                <span className="text-sm text-[#FEA55F]">Read more →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
