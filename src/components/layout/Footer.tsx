'use client';

import Image from 'next/image';
import { IconGithub, IconLinkedin, IconX } from '@/components/icons';
import Link from '@/components/ui/Link';
import { COMMUNITY_SLACK_URL, DISCUSSIONS_URL, ENGINE_REPO_URL, SELF_HOST_PATH } from '@/lib/links';

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo + Social */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/images/fmlogo-darktext-transparent.svg" 
                alt="FaultMaven Logo"
                width={150}
                height={40}
                className="h-9 w-auto dark:hidden"
              />
              <Image 
                src="/images/fmlogo-whitetext-transparent.svg" 
                alt="FaultMaven Logo"
                width={150}
                height={40}
                className="h-9 w-auto hidden dark:block"
              />
            </Link>
            <p className="mb-5 text-sm text-slate-500 dark:text-slate-400">
              Your AI troubleshooting copilot — self-hosted or run for you.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/FaultMaven" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <IconGithub className="w-5 h-5 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200" />
              </a>
              <a href="https://x.com/faultmaven" target="_blank" rel="noopener noreferrer" aria-label="X" className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <IconX className="w-5 h-5 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200" />
              </a>
              <a href="https://linkedin.com/company/faultmaven" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <IconLinkedin className="w-5 h-5 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <strong className="mb-4 block text-sm font-semibold text-slate-900 dark:text-slate-200">Product</strong>
            <ul className="space-y-3 text-sm">
              <li><Link href="/product" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Product</Link></li>
              <li><Link href="/use-cases" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Use cases</Link></li>
              <li><Link href="/slack" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">FaultMaven for Slack</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <strong className="mb-4 block text-sm font-semibold text-slate-900 dark:text-slate-200">Company</strong>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">About us</Link></li>
              <li><Link href="/roadmap" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Our vision</Link></li>
              <li><Link href="/contact" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Contact us</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <strong className="mb-4 block text-sm font-semibold text-slate-900 dark:text-slate-200">Resources</strong>
            <ul className="space-y-3 text-sm">
              <li><Link href="/blog" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Blog</Link></li>
              <li><Link href="/faq" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">FAQ</Link></li>
              <li><Link href="/support" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Support</Link></li>
              <li><a href={DISCUSSIONS_URL} target="_blank" rel="noopener noreferrer" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Discussions</a></li>
              <li><a href={COMMUNITY_SLACK_URL} target="_blank" rel="noopener noreferrer" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Community Slack</a></li>
            </ul>
          </div>

          {/* Developer Links */}
          <div>
            <strong className="mb-4 block text-sm font-semibold text-slate-900 dark:text-slate-200">Developer</strong>
            <ul className="space-y-3 text-sm">
              <li><a href={ENGINE_REPO_URL} target="_blank" rel="noopener noreferrer" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">GitHub</a></li>
              <li><Link href={SELF_HOST_PATH} className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Self-hosting guide</Link></li>
              <li><a href="https://github.com/FaultMaven/faultmaven-website/issues" target="_blank" rel="noopener noreferrer" className="text-slate-600 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Report issue</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center dark:border-slate-800">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            Fair Source · Self-Hostable · No Production Credentials
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            <Link href="/privacy" className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">Privacy Policy</Link>
            {' · '}
            <Link href="/privacy/extension" className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">Extension privacy</Link>
            {' · '}
            <Link href="/privacy/slack" className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">Slack privacy</Link>
            {' · '}
            <Link href="/terms" className="transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400">Terms of Service</Link>
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} FaultMaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
