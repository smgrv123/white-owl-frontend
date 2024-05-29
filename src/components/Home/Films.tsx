import { VideoInfo } from '@/src/types/network';
import FilmsHolder from './FilmsHolder';

const OurFilms = ({ filmsData }: { filmsData: VideoInfo[] }) => {
  // Use a Map for more efficient data management
  const filmsCategoriesData = new Map<string, VideoInfo[]>();

  // Build the category map
  filmsData.reverse()?.forEach((video) => {
    if (filmsCategoriesData.has(video.category)) {
      filmsCategoriesData.get(video.category)?.push(video);
    } else {
      filmsCategoriesData.set(video.category, [video]);
    }
  });
  type testing = VideoInfo & { length: number };
  let renderArr: testing[] = [];

  filmsCategoriesData.forEach((i) => (renderArr = [...renderArr, { ...i[0], length: i.length }]));

  return (
    <section className='p-10 sm:p-[88px]'>
      <div className='font-pf_text font-normal text-2xl sm:text-6xl'>Our Films</div>
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
    </section>
  );
};

export default OurFilms;
