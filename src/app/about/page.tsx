import Link from 'next/link';

export default function Page() {
  return (
    <>
      <h1 className='text-4xl text-center font-semibold'>About Us</h1>
      <section className='grid md:grid-cols-2 gap-5 py-5'>
        <h2 className='text-4xl font-semibold'>
          Video has always been a luxury for established brands to dominate public perception.
        </h2>
        <div className='text-2xl flex flex-col gap-5'>
          <p>We believe that every business should be offered the same playing field while advertising their brand.</p>
          <p>
            The only difference between you and your leading competition is a well crafted video, highlighting your
            business and what makes you the obvious choice.{' '}
          </p>
          <p>
            Isaac Levi Productions can help your business achieve this goal while guiding you through the production
            process each step of the way!
          </p>
        </div>
      </section>
      <p className='text-center text-3xl mb-5'>View Our Work!</p>
      <Link
        className='w-fit mx-auto bg-yellow-500 px-3 py-3 rounded-tl-xl rounded-br-xl text-black text-center text-xl font-semibold hover:bg-yellow-600 transition-all duration-300 ease-in-out'
        href={'/work'}
      >
        Click Here!
      </Link>
    </>
  );
}
