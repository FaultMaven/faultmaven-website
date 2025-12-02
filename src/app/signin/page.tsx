import { redirect } from 'next/navigation';

export default function SignInPage() {
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL || 'https://app.faultmaven.ai';
  redirect(`${dashboardUrl}/login?source=website`);
}
