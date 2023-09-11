'use client';

import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  return (
    <button onClick={() => signIn('google', { callbackUrl })}>
      Sign in with Google
    </button>
  );
};

export { GoogleButton };
