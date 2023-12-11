import ProcessDropdown from '@/components/ProcessDropdown';

export default function Page() {
  return (
    <>
      <h1 className='text-4xl text-center mb-5'>The Process</h1>
      <div className='flex flex-col gap-5 text-center text-2xl border-t-2 border-yellow-500 border-b-2 py-5'>
        <h2 className='text-3xl'>You have a vision for your brand, We want to bring it to life.</h2>
        <p>
          If you&apos;ve ever hired a videographer or production company, you know how complex the process of making a
          video can get. We understand and have shared that pain with you. That’s why at Isaac Levi Productions we
          handle all aspects of planning and executing your vision.
        </p>
        <p>
          Permits, Locations, Casting Services, Hair/Makeup, Craft Services, or anything else you may need to make your
          production run smoothly, we can provide.
        </p>
        <p>To familiarize yourself with the Production Process refer tot he drop-downs below.</p>
      </div>
      <ProcessDropdown buttonText='Pre-Production'>
        <p>
          So you have an idea for your brand and want to get it rolling. During pre-production we will work with your
          team to develop the story you want to tell.
        </p>
        <p>We will then draft storyboards and plan all aspects of your production and coordinate a shoot-date.</p>
      </ProcessDropdown>
      <ProcessDropdown buttonText='Production'>
        <p>This is where the action happens, literally.</p>
        <p>
          Your story is ready to go and so is our team. ALl that&apos;s left are the lights and camera(s) (which will be
          there as well).
        </p>
        <p>One of our directors will take the helm ad guide your story to life right before your eyes.</p>
        <p>
          Depending on your budget the crew may be anywhere from 4-20 people so make sure to say hi to your new friends
          (because they’re in it for the long haul).
        </p>
        <p>
          After a a couple of hours to a few days, production will conclude, the crew will wrap and we will pop
          champagne. (Yay!)
        </p>
      </ProcessDropdown>
      <ProcessDropdown buttonText='Post-Production'>
        <p>Now that we have gathered all the necessary footage, it&apos;s time to EDIT!</p>
        <p>You may think &quot;oh production lasted a day or maybe a couple days, how long can editing take?&quot; </p>
        <p>You&apos;d be right to ask this question (everyoen does).</p>
        <p>
          The short answer: <i>It depends</i>
        </p>
        <p>
          The long answer: Editing comprises of a multitude of different steps to ensure your commercial is properly
          completed for distribution on the platforms you wish to use.
        </p>
        <p>
          AThese steps include but are not limited to: Logging and File Backup, Assembly, Initial Cut, Audio Mixing (if
          audio is recorded on set or through voice over recording), Color Correction, Color Grading, First Revision
          (above steps may be repeated), and Second Revision.
        </p>
        <p>
          Depending on Scale and Scope of the commercial you can expect the editing process to take anywhere from 3 to 8
          weeks or more.
        </p>
      </ProcessDropdown>
      <h3 className='text-center text-3xl my-5'>You&apos;re basically a pro now.</h3>
      <p className='text-center text-xl'>
        If you&apos;ve come this far, all that’s left is to fill out the form below to provide some details about who
        you are and what you want to produce.
      </p>
    </>
  );
}
