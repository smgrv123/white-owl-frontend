'use client';

import Loader from '@/src/assets/loader.gif';
import VimeoEmbed from '@/src/components/Films/VimeoEmbed';
import useFilms from '@/src/hooks/useFilms';
import { VideoInfo } from '@/src/types/network';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const CategoryDetails = () => {
  const [categoryFilmData, setcategoryFilmData] = useState<VideoInfo>();
  const currentUrl = usePathname().split('/');
  const filmCategory = currentUrl[2].replace(/%20/g, ' ');
  const filmId = currentUrl[3];
  const { fetchCategoryFilms } = useFilms();

  useEffect(() => {
    const getCategory = async () => {
      const response = await fetchCategoryFilms(filmCategory);
      response && setcategoryFilmData(response.filter((i) => i._id === filmId)[0]);
    };

    getCategory();
  }, [filmCategory, fetchCategoryFilms, filmId]);

  return (
    <section>
      <div className='h-[74px] sm:h-[140px]' />
      {categoryFilmData ? (
        <div>
          {categoryFilmData && (
            <div className='p-5 sm:p-10 '>
              <VimeoEmbed
                vimeoEmbedId={categoryFilmData.youtubeEmbedId}
                title={categoryFilmData.fileTitle}
              />
              <div className=' text-xs sm:text-2xl p-3 sm:p-10p-10 font-ayuthaya font-normal'>
                <div className=''>{categoryFilmData.fileTitle}</div>
                {/* <div>{`// dir. ${categoryFilmData.directorsName}`}</div> */}
              </div>
            </div>
          )}
        </div>
      ) : (
        <Image src={Loader} alt='Loader' className='h-55 sm:h-[500px] sm:w-[500px] m-auto' />
      )}
    </section>
  );
};

export default CategoryDetails;
