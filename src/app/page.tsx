import Service from '@/components/Service';

export default function Home() {
  return (
    <>
      <h1 className='text-center text-4xl'>Enter A New Dimension of Media Production</h1>
      <div className='w-full mx-auto flex items-center justify-center my-5'>
        <iframe
          height='600'
          src='https://www.youtube.com/embed/3lYAJ8NgO9U?si=oYwOWnZfPkYwth4e&autoplay=1&mute=1&loop=1&controls=0'
          title='Demo Reel'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; loop'
          allowFullScreen
          className='rounded-md w-full'
        ></iframe>
      </div>
      <div className='gap-5 flex flex-col text-center text-4xl my-5'>
        <h2>Video is King</h2>
        <p className='text-2xl'>
          Take <b>control</b> of your story!
        </p>
      </div>
      <div className=' flex flex-col w-full gap-5'>
        <h2 className='text-4xl text-center bg-yellow-400 w-fit mx-auto text-black px-2 py-3 rounded-tr-xl rounded-bl-xl font-semibold'>
          Services
        </h2>
        <div className='grid md:grid-cols-3 gap-5'>
          <Service
            href='/process'
            linkText='Book A Commerical'
            header='Commercials'
            content='Looking to capture your business or brand witha captivating TV commerical or digital ad?'
          />
          <Service
            href='/subscription'
            linkText='Get A Quote'
            header='Content Subscriptions'
            content='Want to streamline content for your Social Media Page?'
          />
          <Service
            href='/process'
            linkText='Submit A Request'
            header='General Video Services'
            content='Events, Festivals, Products, Food, Tesimonials, you name it, we film it!'
          />
        </div>
      </div>
    </>
  );
}
