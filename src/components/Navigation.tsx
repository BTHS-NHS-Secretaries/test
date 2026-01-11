'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/home', label: 'Home' },
    { href: '/member-points', label: 'Member Points' },
    { href: '/executive-board', label: 'Executive Board' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/home' && (pathname === '/' || pathname === '/home')) return true;
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-darkBlue-800 border-b-2 border-gold shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/home" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center font-bold text-darkBlue-900 group-hover:bg-yellow-400 transition-colors">
              NHS
            </div>
            <span className="hidden sm:inline font-bold text-lg text-gold">BTHS NHS</span>
          </Link>

          <ul className="flex space-x-1 md:space-x-2 flex-wrap justify-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-4 py-2 rounded-md transition-all duration-200 font-medium ${
                    isActive(item.href)
                      ? 'bg-gold text-darkBlue-900 shadow-md'
                      : 'text-white hover:bg-darkBlue-700 hover:text-gold'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
