'use client';

import { ReactTyped } from 'react-typed';

const TypedComponent = ({ string }: { string: string }) => (
  <ReactTyped
    strings={[string]}
    className='flex items-center text-justify text-xs sm:text-xl'
    typeSpeed={20}
  />
);

export { TypedComponent };
