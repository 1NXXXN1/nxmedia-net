'use client';
import { Button } from '@/shared/ui/button';
import { useEffect, useRef, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  data: { label: string; value: string }[];
  name: { label: string; name: string };
  alignRight?: boolean;
};

export const Dropdown = ({
  data,
  name: { name, label },
  alignRight,
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(data[0]);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);
  const x = dropdownRef.current?.getBoundingClientRect().x;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentParam = searchParams.get(name) || data[0].value;

  useEffect(() => {
    setActiveItem(data.find((item) => item.value === currentParam) || data[0]);
  }, [data, currentParam]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (item: { label: string; value: string }) => {
    const params = new URLSearchParams(searchParams.toString());

    if (item.value === data[0].value) {
      params.delete(name);
    } else {
      params.set(name, item.value);
    }

    params.set('page', '1');

    router.push(`${pathname}?${params.toString()}`);
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block text-left ${alignRight && 'ml-auto'}`}
    >
      <Button className='flex items-center gap-2' onClick={toggle}>
        {label}
        <svg className='size-5' viewBox='0 0 20 20' fill='currentColor'>
          <path
            fillRule='evenodd'
            d='M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z'
            clipRule='evenodd'
          />
        </svg>
      </Button>
      {isOpen && (
        <div
          className={`scrollbar absolute ${
            x && x < 150 ? 'left-0' : 'right-0'
          } z-10 mt-2 w-56 max-h-56 overflow-y-scroll origin-top-right rounded-lg bg-foreground`}
        >
          <ul>
            {data.map((item) => (
              <li key={item.value} className='block text-sm text-background'>
                <Button
                  onClick={() => handleSelect(item)}
                  className={`w-full text-left px-4 py-2 ${
                    activeItem === item
                      ? 'bg-background text-foreground'
                      : 'bg-foreground text-background'
                  }`}
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
