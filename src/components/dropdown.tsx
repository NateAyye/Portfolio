'use client';

import React, { useEffect, useRef, useState } from 'react';
import { icons } from '../icons';
import { cn } from '../lib/utils';

interface CustomDropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  buttonText?: string;
  menuLabel?: string;
  children?: React.ReactNode;
}

export function CustomDropdownMenu({
  buttonText,
  menuLabel,
  children,
  className,
  ...props
}: CustomDropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={cn('relative inline-block text-left', className)} {...props} ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-center border border-accent p-1 rounded-lg items-center w-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        {buttonText}
        {icons.chevronDown.icon()}
      </button>

      {isOpen && (
        <div className="absolute w-40 right-0 mt-2 origin-top-right divide-y rounded-md shadow-xl border border-accent ring-1 bg-background ring-black ring-opacity-5 focus:outline-none">
          {menuLabel && (
            <div className="px-4 py-3">
              <p className="text-sm font-medium text-gray-900">{menuLabel}</p>
            </div>
          )}
          <div className="p-1">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}
