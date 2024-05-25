import WOCollabs from '@/src/assets/WOCollabs.svg';
import Loader from '@/src/assets/loader.gif';
import OurFilms from '@/src/components/Home/Films';
import VideoPlayer from '@/src/components/Home/VideoPlayer';
import { TypedComponent } from '@/src/components/commons/typedComponent';
import useFilms from '@/src/hooks/useFilms';
import Image from 'next/image';

export default async function Home() {
  const { fetchFilms } = useFilms();
  const filmsData = await fetchFilms();
  return (
    <section className='min-h-screen relative'>
      <VideoPlayer poster='/images/showreelposter.png' src='/videos/showreel.mp4' />
      <div className='flex flex-col justify-center text-themeYellow font-ayuthaya font-normal text-[16px]'>
        <Image src={Loader} alt='Loader' className='h-52 w-52 sm:h-[500px] sm:w-[500px] m-auto' />
        <div className='sm:px-[200px] px-11'>
          <TypedComponent string='White Owl Production was born with a purpose; to help our clients strategise, produce and market video content that engages their audience. We combine purpose, narrative and production to craft conscious content for agencies, brands and businesses. We provide end to end solutions to our clients.' />
        </div>
      </div>
      {filmsData && <OurFilms filmsData={filmsData} />}
      <div className='p-5 sm:p-[88px]'>
        <div className='font-pf_text font-normal text-3xl sm:text-7xl'>Our Collaborations</div>
        <Image src={WOCollabs} alt='' className='sm:pt-8 pt-3' />
      </div>
    </section>
  );
}
