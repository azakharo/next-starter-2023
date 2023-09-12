import { Metadata } from 'next';
import Link from 'next/link';

import { getAllLocalPosts } from 'src/services/getPosts';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export const revalidate = 10;

export default async function Blog() {
  const posts = await getAllLocalPosts();

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
