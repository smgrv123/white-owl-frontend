import useFilms from '@/src/hooks/useFilms';
import Link from 'next/link';

const OurFilms = async () => {
  const { fetchFilms } = useFilms();
  const filmsData = await fetchFilms();

  return (
    <section className='p-[88px]'>
      <div className='font-pf_text font-normal text-8xl'>Our Films</div>
      <div className='flex flex-rol'>
        <div className='flex-1'>
          {[...filmsData, ...filmsData]?.map((i) => (
            <Link href={'/films'} className='m-16 bg-textWhite' key={i._id}>
              <img
                src='https://wallpapercave.com/wp/JTpVKUS.jpg'
                alt={i.fileTitle}
                width={960}
                height={637}
              />
              <div className='p-10 font-ayuthaya font-normal'>
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
