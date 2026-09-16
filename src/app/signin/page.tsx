import { redirect } from 'next/navigation';
import { SIGN_IN_URL } from '@/lib/links';

export default function SignInPage() {
  redirect(SIGN_IN_URL);
}
