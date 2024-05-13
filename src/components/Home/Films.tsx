import useFilms from '@/src/hooks/useFilms';
import Image from 'next/image';
import Link from 'next/link';

const OurFilms = async () => {
  const { fetchFilms } = useFilms();
  const filmsData = await fetchFilms();

  interface VideoInfo {
    _id: string;
    youtubeEmbedId: string;
    directorsName: string;
    fileTitle: string;
    heroImageId: string;
    category: string;
  }

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
      <div className='font-pf_text font-normal text-8xl'>Our Films</div>
      <div className='flex flex-rol'>
        <div className='flex-1'>
          {renderArr?.map((i) => (
            <Link href={`/films/${i.category}`} className='m-16 bg-textWhite' key={i._id}>
              <Image
                src={`https://ik.imagekit.io/whiteowl/${i.heroImageId}`}
                loading='lazy'
                alt={i.fileTitle}
                width={960}
                height={637}
              />
              <div className='p-10 font-ayuthaya font-normal'>
                {i.length > 1 && 'folder'}
                <div className=''>{i.fileTitle}</div>
                <div>{`// dir. ${i.directorsName}`}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className='flex flex-1 justify-center'>scroller</div>
      </div>
    </section>
  );
};

export default OurFilms;
