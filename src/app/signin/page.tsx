import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { SIGN_IN_URL } from '@/lib/links';

// This route only redirects, but its prerendered shell still carries a
// <title>. Bare title: the root layout's template appends ` | FaultMaven`.
export const metadata: Metadata = {
  title: 'Sign in',
};

export default function SignInPage() {
  redirect(SIGN_IN_URL);
}
