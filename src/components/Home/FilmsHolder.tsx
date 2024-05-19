'use client';

import { VideoInfo } from '@/src/types/network';
import { FolderOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FilmsHolder = ({
  directorsName,
  fileTitle,
  heroImageId,
  length,
  _id,
  href
}: VideoInfo & {
  length?: number;
  href: string;
}) => {
  return (
    <Link href={href} className='m-16 bg-textWhite' key={_id}>
      <Image
        src={`https://ik.imagekit.io/whiteowl/${heroImageId}`}
        loading='lazy'
        alt={fileTitle}
        width={960}
        height={637}
      />
      <div className='text-xs sm:text-2xl p-3 sm:p-10 font-ayuthaya font-normal'>
        {length && length > 1 && <FolderOpen />}
        <div className=''>{fileTitle}</div>
        <div>{`// dir. ${directorsName}`}</div>
      </div>
    </Link>
  );
};

export default FilmsHolder;
