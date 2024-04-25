import OurFilms from '@/src/components/Home/Films';
import Showreel from '@/src/components/Home/Showreel';
// import useFilms from '@/src/hooks/useFilms';

export default async function Home() {
  // const { fetchTemplate } = useFilms();
  // await fetchTemplate();

  return (
    <section className='min-h-screen relative'>
      <Showreel src='https://videos.pexels.com/video-files/6548176/6548176-hd_1920_1080_24fps.mp4' />
      <OurFilms />
    </section>
  );
}
