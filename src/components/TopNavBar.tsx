'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TopNavBar() {
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
    <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-darkBlue-800 bg-opacity-60 backdrop-blur-md rounded-full shadow-xl px-8 py-3">
      <ul className="flex gap-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block px-3 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap text-sm ${
                isActive(item.href)
                  ? 'bg-gold text-darkBlue-900 font-bold'
                  : 'text-blue-100 hover:text-gold hover:bg-darkBlue-700 hover:bg-opacity-50'
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
