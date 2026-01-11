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
  {
    return (
      <nav className="fixed top-6 right-6 z-50 bg-darkBlue-800 bg-opacity-95 backdrop-blur-sm border-2 border-gold rounded-2xl shadow-2xl px-6 py-4">
        <ul className="flex gap-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`block px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
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
      </nav>
    );
  }
}
