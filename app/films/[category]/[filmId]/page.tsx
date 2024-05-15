'use client';

import VimeoEmbed from '@/src/components/Films/VimeoEmbed';
import useFilms from '@/src/hooks/useFilms';
import { VideoInfo } from '@/src/types/network';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const CategoryDetails = () => {
  const [categoryFilmData, setcategoryFilmData] = useState<VideoInfo>();
  const currentUrl = usePathname().split('/');
  const filmCategory = currentUrl[2];
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
      <div className='h-[140px]' />
      {categoryFilmData && (
        <div>
          <VimeoEmbed
            vimeoEmbedId={categoryFilmData.youtubeEmbedId}
            title={categoryFilmData.fileTitle}
          />
          <div className='p-10 font-ayuthaya font-normal'>
            <div className=''>{categoryFilmData.fileTitle}</div>
            <div>{`// dir. ${categoryFilmData.directorsName}`}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CategoryDetails;
