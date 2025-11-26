import { redirect } from 'next/navigation';

export default function SignInPage() {
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'http://localhost:5173';
  redirect(`${dashboardUrl}/login?source=website`);
}
