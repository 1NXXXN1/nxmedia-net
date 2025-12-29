'use client';

import Link from 'next/link';
import { useState } from 'react';

import MenuIcon from '@/assets/icons/menu.svg';
import { Button } from '@/shared/ui/button';
import { Search } from '@/features/search';
import { navLinks } from '@/shared/config/navLinks';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='block xl:hidden'>
      <Button
        className={`relative z-2000 ${
          isOpen && '!bg-foreground text-color2'
        } !px-2`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <MenuIcon />
      </Button>

      {isOpen && (
        <div
          className='xl:hidden fixed inset-0 z-1001'
          role='dialog'
          aria-modal='true'
        >
          <div
            className='fixed inset-0 bg-black/75'
            onClick={() => setIsOpen(false)}
          />

          <div className='fixed inset-y-0 right-0 w-full sm:max-w-sm overflow-y-auto bg-color2 p-6 px-4 z-50'>
            <Search isMobile />
            <nav>
              <ul className='mt-6 sm:mt-12 flex flex-col space-y-4 text-xl'>
                {navLinks.map(({ href, label }) => {
                  return (
                    <li key={href}>
                      <Link
                        onClick={() => setIsOpen(false)}
                        href={href}
                        className='relative px-3 py-2 transition-colors duration-200'
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};
