import { Metadata } from 'next';
import Link from 'next/link';

import { getAllPosts } from '@/api/getPosts';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
