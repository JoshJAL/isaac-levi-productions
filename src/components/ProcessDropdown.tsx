'use client';

import { FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

interface Props {
  buttonText: string;
  children: React.ReactNode;
}

export default function ProcessDropdown({ buttonText, children }: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <div className='border-b-2 border-yellow-500 text-3xl py-5 w-full flex flex-col'>
      <button
        onClick={(e) => {
          e.preventDefault();
          setVisible(!visible);
        }}
        className={`${
          visible ? 'mb-5' : 'mb-0'
        } mr-auto transition-all duration-200 ease-in-out flex gap-5 items-center`}
      >
        <FaChevronUp className={`${visible ? 'rotate-180' : 'rotate-0'} transition-all duration-300 ease-in-out`} />
        {buttonText}
      </button>
      <div className={`${visible ? 'block' : 'hidden'} gap-5 max-w-2xl mx-auto flex flex-col leading-[50px]`}>
        {children}
      </div>
    </div>
  );
}
