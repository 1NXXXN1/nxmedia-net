'use client';
import Link from 'next/link';
import { navLinks } from '@/shared/config/navLinks';
import { usePathname } from 'next/navigation';

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className='hidden xl:block'>
      <ul className='flex items-center gap-6'>
        {navLinks.map(({ href, label }) => {
          const isActive = pathname === href.split('?')[0];

          return (
            <li key={href}>
              <Link
                href={href}
                className={`relative px-3 py-2 transition-colors duration-200 ${
                  isActive ? 'text-color3' : 'hover:text-color3'
                } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-color3 after:transition-transform after:duration-300 after:origin-left ${
                  isActive
                    ? 'after:scale-x-100'
                    : 'after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
