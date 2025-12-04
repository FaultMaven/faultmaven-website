'use client';

import Image from 'next/image';
import { IconGithub, IconLinkedin, IconX } from '@/components/icons';
import Link from '@/components/ui/Link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 border-t border-slate-200 dark:border-slate-700 mt-auto shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo + Social */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image 
                src="/images/fmlogo-light.svg" 
                alt="FaultMaven Logo"
                width={28}
                height={28}
                className="h-7 w-auto mr-0 dark:hidden"
              />
              <Image 
                src="/images/fmlogo-dark.svg" 
                alt="FaultMaven Logo"
                width={28}
                height={28}
                className="h-7 w-auto mr-0 hidden dark:block"
              />
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 font-normal">
              Your AI copilot for troubleshooting.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/FaultMaven" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
                <IconGithub className="w-6 h-6 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200" />
              </a>
              <a href="https://x.com/faultmaven" target="_blank" rel="noopener noreferrer" aria-label="X" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
                <IconX className="w-6 h-6 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200" />
              </a>
              <a href="https://linkedin.com/company/faultmaven" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-full">
                <IconLinkedin className="w-6 h-6 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <strong className="font-semibold text-slate-900 dark:text-slate-200 text-base block mb-3">Product</strong>
            <ul className="mt-2 space-y-2 text-base">
              <li><Link href="/product" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">Product</Link></li>
              <li><Link href="/use-cases" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">Use Cases</Link></li>
              <li><Link href="/founders" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">Beta Founders</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <strong className="font-semibold text-slate-900 dark:text-slate-200 text-base block mb-3">Company</strong>
            <ul className="mt-2 space-y-2 text-base">
              <li><Link href="/about" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">About Us</Link></li>
              <li><Link href="/roadmap" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">Our Vision</Link></li>
              <li><Link href="/contact" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <strong className="font-semibold text-slate-900 dark:text-slate-200 text-base block mb-3">Resources</strong>
            <ul className="mt-2 space-y-2 text-base">
              <li><Link href="/blog" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">Blog</Link></li>
              <li><Link href="/faq" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">FAQ</Link></li>
              <li><a href="https://github.com/FaultMaven/faultmaven/discussions" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">Discussions</a></li>
            </ul>
          </div>

          {/* Developer Links */}
          <div>
            <strong className="font-semibold text-slate-900 dark:text-slate-200 text-base block mb-3">Developer</strong>
            <ul className="mt-2 space-y-2 text-base">
              <li><a href="https://github.com/FaultMaven/faultmaven" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">GitHub</a></li>
              <li><a href="https://github.com/FaultMaven/faultmaven#quick-start" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">Documentation</a></li>
              <li><a href="https://github.com/FaultMaven/faultmaven-website/issues" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-[#2563EB] hover:underline transition-colors duration-200">Report Issue</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">
            Open Source · Apache 2.0 · Deploy in 5 Minutes
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            &copy; {new Date().getFullYear()} FaultMaven. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
