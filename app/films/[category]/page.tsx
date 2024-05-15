'use client';

import FilmsHolder from '@/src/components/Home/FilmsHolder';
import useFilms from '@/src/hooks/useFilms';
import { VideoInfo } from '@/src/types/network';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const CategoryDetails = () => {
  const [categoryFilmData, setcategoryFilmData] = useState<VideoInfo[]>([]);
  const currentUrl = usePathname();
  const filmCategory = currentUrl.split('/')[2];
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
      {/* <Suspense fallback='loading...'> */}
      <div className='h-[170px]' />
      <div className='font-pf_text font-normal text-7xl'>{filmCategory}</div>
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
      {/* </Suspense> */}
    </section>
  );
};

export default CategoryDetails;
