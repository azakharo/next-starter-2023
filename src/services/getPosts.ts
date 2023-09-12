export const getAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Unable to fetch posts.');
  }

  return response.json();
};

export const getPostById = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  if (!response.ok) {
    throw new Error('Unable to fetch post.');
  }

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) {
    throw new Error('Unable to fetch posts.');
  }

  return response.json();
};

export const getAllLocalPosts = async () => {
  const response = await fetch('http://localhost:3300/posts');

  if (!response.ok) {
    throw new Error('Unable to fetch posts.');
  }

  return response.json();
};

export const getLocalPostById = async (id: string) => {
  const response = await fetch(`http://localhost:3300/posts/${id}`);

  if (!response.ok) {
    throw new Error('Unable to fetch post.');
  }

  return response.json();
};
