import Loader from '@/src/assets/loader.gif';
import OurFilmsHolder from '@/src/components/Home/OurFIlmsHolder';
import VideoPlayer from '@/src/components/Home/VideoPlayer';
import { TypedComponent } from '@/src/components/commons/typedComponent';
import Image from 'next/image';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <section className='min-h-screen relative'>
      <VideoPlayer poster='/images/showreelposter.png' src='/videos/showreel.mp4' />
      <div className='flex flex-col justify-center text-themeYellow font-ayuthaya font-normal text-[16px]'>
        <Image src={Loader} alt='Loader' className='h-52 w-52 sm:h-[500px] sm:w-[500px] m-auto' />
        <div className='sm:px-[200px] px-11'>
          <TypedComponent string='White Owl Production was born with a purpose; to help our clients strategise, produce and market video content that engages their audience. We combine purpose, narrative and production to craft conscious content for agencies, brands and businesses. We provide end to end solutions to our clients.' />
        </div>
      </div>
      <Suspense fallback={'Loading White Owl Films...'}>
        <OurFilmsHolder />
      </Suspense>
    </section>
  );
}
