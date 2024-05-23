'use client';

import Loader from '@/src/assets/loader.gif';
import FilmsHolder from '@/src/components/Home/FilmsHolder';
import useFilms from '@/src/hooks/useFilms';
import { VideoInfo } from '@/src/types/network';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const CategoryDetails = () => {
  const [categoryFilmData, setcategoryFilmData] = useState<VideoInfo[]>([]);
  const currentUrl = usePathname();
  const filmCategory = currentUrl.split('/')[2].replace(/%20/g, ' ');
  const { fetchCategoryFilms } = useFilms();

  useEffect(() => {
    const getCategory = async () => {
      const response = await fetchCategoryFilms(filmCategory);
      response && setcategoryFilmData(response);
    };

    getCategory();
  }, [filmCategory, fetchCategoryFilms]);

  return (
    <section className='px-11'>
      <div className='h-[75px] sm:h-[170px]' />
      {categoryFilmData.length > 0 ? (
        <div>
          <div className='font-pf_text font-normal text-3xl sm:text-7xl'>{filmCategory}</div>
          {categoryFilmData.map((i, index) => (
            <FilmsHolder
              directorsName={i.directorsName}
              fileTitle={i.fileTitle}
              category={i.category}
              youtubeEmbedId={i.youtubeEmbedId}
              _id={i._id}
              heroImageId={i.heroImageId}
              href={`/films/${i.category}/${i._id}`}
              key={index}
            />
          ))}
        </div>
      ) : (
        <Image src={Loader} alt='Loader' className='h-55 sm:h-[500px] sm:w-[500px] m-auto' />
      )}
    </section>
  );
};

export default CategoryDetails;
