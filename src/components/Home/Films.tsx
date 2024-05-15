import useFilms from '@/src/hooks/useFilms';
import { VideoInfo } from '@/src/types/network';
import FilmsHolder from './FilmsHolder';

const OurFilms = async () => {
  const { fetchFilms } = useFilms();
  const filmsData = await fetchFilms();

  // Use a Map for more efficient data management
  const temp = new Map<string, VideoInfo[]>();

  // Build the category map
  filmsData?.forEach((video) => {
    if (temp.has(video.category)) {
      temp.get(video.category)?.push(video);
    } else {
      temp.set(video.category, [video]);
    }
  });
  type testing = VideoInfo & { length: number };
  let renderArr: testing[] = [];

  temp.forEach((i) => (renderArr = [...renderArr, { ...i[0], length: i.length }]));

  return (
    <section className='p-[88px]'>
      <div className='font-pf_text font-normal text-6xl'>Our Films</div>
      <div className='flex flex-rol'>
        <div className='flex-1'>
          {renderArr?.map((i, index) => (
            <FilmsHolder
              directorsName={i.directorsName}
              fileTitle={i.fileTitle}
              category={i.category}
              youtubeEmbedId={i.youtubeEmbedId}
              length={i.length}
              _id={i._id}
              heroImageId={i.heroImageId}
              href={!(i.length > 1) ? `films/${i.category}/${i._id}` : `/films/${i.category}`}
              key={index}
            />
          ))}
        </div>
        <div className='flex flex-1 justify-center'>scroller</div>
      </div>
    </section>
  );
};

export default OurFilms;
