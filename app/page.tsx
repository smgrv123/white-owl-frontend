// 'use c'

import OurFilms from '@/src/components/Home/Films';
import Showreel from '@/src/components/Home/Showreel';
import { TypedComponent } from '@/src/components/commons/typedComponent';
// import Video from '@/src/assets/videos/loader.mp4';
// import { useState } from 'react';

export default async function Home() {
  // const [removeLoader, setremoveLoader] = useState<boolean>(false);

  return (
    <section className='min-h-screen relative'>
      <Showreel src='https://videos.pexels.com/video-files/6548176/6548176-hd_1920_1080_24fps.mp4' />
      <div className='flex flex-col justify-center text-themeYellow font-ayuthaya font-normal text-[16px]'>
        <video src={'/videos/loader.mp4'} autoPlay muted loop className='h-[500px]' />
        <div className='px-[200px]'>
          <TypedComponent string='White Owl Production was born with a purpose; to help our clients strategise, produce and market video content that engages their audience. We combine purpose, narrative and production to craft conscious content for agencies, brands and businesses. We provide end to end solutions to our clients.' />
        </div>
      </div>
      <OurFilms />
    </section>
  );
}
