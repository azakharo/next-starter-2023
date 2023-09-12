import { GoogleButton } from 'src/components/GoogleButton';
import { SignInForm } from 'src/components/SignInForm';

// This is a custom SignIn page
export default async function Signin() {
  return (
    <div className="stack">
      <h1>SignIn</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
}
