'use client';

import { socialIconsTypes } from '@/src/types/home';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const IconHandler = ({ i }: { i: socialIconsTypes }) => {
  const [iconHover, seticonHover] = useState<boolean>(false);

  return (
    <Link
      href={i.url}
      onMouseOver={() => seticonHover(true)}
      onMouseOut={() => seticonHover(false)}
    >
      <Image
        src={!iconHover ? i.srcWhite : i.srcYellow}
        alt={i.name}
        className='sm:w-20 sm:h-20 w-9 h-9'
      />
    </Link>
  );
};

export default IconHandler;
