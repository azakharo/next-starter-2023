import { Metadata } from 'next';

import { getAllLocalPosts, getLocalPostById } from 'src/services/getPosts';

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const posts: any[] = await getAllLocalPosts();

  return posts.map(post => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getLocalPostById(id);

  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getLocalPostById(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
