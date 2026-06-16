'use client';

import { useState } from 'react';
import {
  UserCircleIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/outline';
import { signOut } from 'next-auth/react';

export default function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
        <UserCircleIcon className="h-8 w-8 text-gray-500" />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
          <a href="/settings" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100">
            <Cog6ToothIcon className="h-5 w-5" /> Settings
          </a>
          <button onClick={() => signOut({ callbackUrl: '/' })}
            className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100">
            <ArrowRightStartOnRectangleIcon className="h-5 w-5" /> Logout
          </button>
        </div>
      )}
    </div>
  );
}
