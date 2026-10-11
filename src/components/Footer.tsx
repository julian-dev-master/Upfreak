import { Link } from 'react-router-dom';
import { LayoutGrid } from 'lucide-react';

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                <LayoutGrid className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                UPFREAK <span className="text-xs font-medium text-slate-400">LLC</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Administrative & Business Support Services
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-slate-400 transition-colors hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-500">
            &copy; 2026 UPFREAK LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
