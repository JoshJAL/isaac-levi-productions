import Link from 'next/link';

export default function Page() {
  return (
    <div className='text-center flex flex-col gap-20'>
      <h1 className='text-4xl bg-yellow-500 w-fit mx-auto text-black p-3 rounded-tr-xl rounded-bl-xl font-semibold'>
        Own an Agency?
      </h1>
      <h2 className='text-4xl underline underline-offset-4 decoration-yellow-500'>Inquire About Video Integration!</h2>
      <section className='text-center gap-10 text-xl flex flex-col'>
        <p>
          If you run a digital advertising agency, managing content creation for your clients can be a real headache.
        </p>
        <p>
          Whether you have your own team in-house, shuffle between contractors, or not do video at all Isaac Levi
          Productions can help you!
        </p>
        <p>
          We offer a white-label service to digital agencies, so you can offer video services without ever having to
          worry about planning or execution.
        </p>
      </section>
      <Link
        href={'/contact'}
        className='w-fit mx-auto bg-gray-400 p-3 rounded-tl-xl rounded-br-xl text-black text-center text-2xl font-semibold hover:bg-gray-500 transition-all duration-300 ease-in-out'
      >
        Contact Us
      </Link>
    </div>
  );
}
