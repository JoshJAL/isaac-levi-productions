import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='text-center text-xl font-semibold p-5'>
      <Link
        className='hover:underline underline-offset-4 decoration-yellow-500'
        href={'mailto:isaac@isaacleviproductions.com'}
      >
        isaac@isaacleviproductions.com
      </Link>
    </footer>
  );
}
