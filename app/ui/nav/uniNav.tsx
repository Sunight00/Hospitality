//UNIVERSAL NAVIGATION BAR

import Image from 'next/image';
import Profile from './profile';
import { auth } from '@/auth';

export default async function UniNav() {
  const session = await auth();
  const user = session?.user;
  return (
    <nav className="p-4 border-b border-gray-300 bg-white shadow-md flex items-center justify-between">
        <Image src="/medical-symbol.png" alt="Medical Icon" loading="eager" width={40} height={40} className="inline-block mr-2" />
        <p>{user?.name}</p>
        <Profile />
    </nav>
  );
}