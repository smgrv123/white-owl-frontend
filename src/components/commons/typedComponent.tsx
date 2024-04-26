'use client';

import { ReactTyped } from 'react-typed';

const TypedComponent = ({ string }: { string: string }) => (
  <ReactTyped
    strings={[string]}
    className='flex items-center text-justify w-[75%] px-16 leading-9 '
    typeSpeed={20}
  />
);

export { TypedComponent };
