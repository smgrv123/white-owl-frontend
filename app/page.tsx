import OurFilms from '@/src/components/Home/Films';
import VideoPlayer from '@/src/components/Home/VideoPlayer';
import { TypedComponent } from '@/src/components/commons/typedComponent';

export default function Home() {
  return (
    <section className='min-h-screen relative'>
      <VideoPlayer src='/videos/showreel.mp4' />
      <div className='flex flex-col justify-center text-themeYellow font-ayuthaya font-normal text-[16px]'>
        <VideoPlayer src={'/videos/loader.mp4'} className='h-[500px]' />
        <div className='px-[200px]'>
          <TypedComponent string='White Owl Production was born with a purpose; to help our clients strategise, produce and market video content that engages their audience. We combine purpose, narrative and production to craft conscious content for agencies, brands and businesses. We provide end to end solutions to our clients.' />
        </div>
      </div>
      <OurFilms />
    </section>
  );
}
