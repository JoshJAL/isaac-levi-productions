'use client';

import Image from 'next/image';
import Logo from '@/public/Isaac+Logo+White.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='fixed top-0 w-full p-5 backdrop-blur-md border-white border-b-2 text-xl'>
      <nav className='w-full flex mx-auto max-w-7xl items-center'>
        <Link href={'/'} className='group'>
          <Image
            src={Logo}
            alt='Isaac Levi Productions Logo'
            className='w-6 h-auto group-hover:scale-125 transition-all duration-300 ease-in-out'
          />
        </Link>
        <div className='flex-1' />
        <div className='flex gap-8'>
          <Link
            href={'/about'}
            className={
              pathname === '/about'
                ? 'underline underline-offset-4 scale-125'
                : 'hover:underline underline-offset-4 hover:scale-125 transition-all duration-300 ease-in-out'
            }
          >
            About
          </Link>
          <Link
            href={'/work'}
            className={
              pathname === '/work'
                ? 'underline underline-offset-4 scale-125'
                : 'hover:underline underline-offset-4 hover:scale-125 transition-all duration-300 ease-in-out'
            }
          >
            Our Work
          </Link>
          <Link
            href={'/process'}
            className={
              pathname === '/process'
                ? 'underline underline-offset-4 scale-125'
                : 'hover:underline underline-offset-4 hover:scale-125 transition-all duration-300 ease-in-out'
            }
          >
            The Process
          </Link>
          <Link
            href={'/agency-owners'}
            className={
              pathname === '/agency-oweners'
                ? 'underline underline-offset-4 scale-125'
                : 'hover:underline underline-offset-4 hover:scale-125 transition-all duration-300 ease-in-out'
            }
          >
            Agency Owners
          </Link>
          <Link
            href={'/contact'}
            className={
              pathname === '/contact'
                ? 'underline underline-offset-4 scale-125'
                : 'hover:underline underline-offset-4 hover:scale-125 transition-all duration-300 ease-in-out'
            }
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
