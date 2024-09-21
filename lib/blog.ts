import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  tags?: string[];
};

const postsDirectory = path.join(process.cwd(), 'posts')

export function getBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const slug = fileName.replace(/\.md$/, '')
    return getBlogPostBySlug(slug)
  })

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getBlogPostBySlug(slug: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  return {
    slug,
    ...(matterResult.data as { title: string; date: string; category: string; excerpt: string; tags?: string[] }),
    content: matterResult.content
  }
}

export function getRelatedPosts(currentPost: BlogPost, limit: number): BlogPost[] {
  const allPosts = getBlogPosts();
  
  // Filter out the current post
  const otherPosts = allPosts.filter(post => post.slug !== currentPost.slug);
  
  // Sort posts by relevance (shared tags and category)
  const sortedPosts = otherPosts.sort((a, b) => {
    const aRelevance = getRelevanceScore(currentPost, a);
    const bRelevance = getRelevanceScore(currentPost, b);
    return bRelevance - aRelevance;
  });
  
  return sortedPosts.slice(0, limit);
}

function getRelevanceScore(currentPost: BlogPost, otherPost: BlogPost): number {
  let score = 0;
  
  // Check for shared category
  if (currentPost.category === otherPost.category) {
    score += 2;
  }
  
  // Check for shared tags
  const sharedTags = currentPost.tags?.filter(tag => otherPost.tags?.includes(tag)) || [];
  score += sharedTags.length;
  
  return score;
}