import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import matter from 'gray-matter';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | HoursFromNow.tech',
  description: 'Read our latest articles about time management, productivity tips, and time calculation tools.',
  keywords: 'blog, time management, productivity, time calculator tips',
  openGraph: {
    title: 'Blog | HoursFromNow.tech',
    description: 'Read our latest articles about time management and productivity.',
    url: 'https://hoursfromnow.tech/blog',
    type: 'website',
  },
};

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
}

function getBlogPosts(): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Blog</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Discover tips, tricks, and insights about time management and productivity.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="text-blue-600 font-medium">
                Read more →
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts found. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
