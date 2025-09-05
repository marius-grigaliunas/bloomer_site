'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-background-primary border-b border-secondary-medium/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌱</span>
            <span className="text-xl font-bold text-text-primary">Bloomer</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary-medium ${
                isActive('/') 
                  ? 'text-primary-medium' 
                  : 'text-text-secondary'
              }`}
            >
              Home
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary-medium ${
                isActive('/contact') 
                  ? 'text-primary-medium' 
                  : 'text-text-secondary'
              }`}
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className={`text-sm font-medium transition-colors hover:text-primary-medium ${
                isActive('/privacy') 
                  ? 'text-primary-medium' 
                  : 'text-text-secondary'
              }`}
            >
              Privacy
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-text-secondary hover:text-primary-medium focus:outline-none focus:text-primary-medium"
              aria-label="Open main menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
