import Link from 'next/link';

interface Props {
  header: string;
  content: string;
  href: string;
  linkText: string;
}

export default function Service({ header, content, linkText, href }: Props) {
  return (
    <div className='w-full flex flex-col gap-5 text-center h-72'>
      <h3 className='text-3xl underline underline-offset-4 decoration-yellow-500'>{header}</h3>
      <p className='text-xl'>{content}</p>
      <div className='flex-1' />
      <Link
        className=' bg-gray-400 px-3 py-3 rounded-tl-xl rounded-br-xl text-black text-center text-xl font-semibold hover:bg-gray-500 transition-all duration-300 ease-in-out'
        href={href}
      >
        {linkText}
      </Link>
    </div>
  );
}
